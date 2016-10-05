var Helper = function Helper () {};

Helper.prototype.getElement = function getElement (el) {
  return document.getElementsByClassName(el)[0];
};

var Steps = function Steps() {
    this.step = 0;
};

// Return the current step
Steps.prototype.getCurrent = function getCurrent () {
    return this.step;
};

// Add one step and return the value
Steps.prototype.getNextStep = function getNextStep () {
    return (this.step == 9) ? this.step : this.step + 1;
};

// Move back one step and return the value
Steps.prototype.getPrevStep = function getPrevStep () {
    return (this.step == 0) ? this.step : this.step - 1;
};

// Add step to the count
Steps.prototype.addStep = function addStep () {
    if (this.step < 9) {
        this.step = this.step + 1;
    }

    return this.step;
};

// Remove one step from the count
Steps.prototype.removeStep = function removeStep () {
    if (this.step > 0) {
        this.step = this.step - 1;
    }

    return this.step;
};

// Return the current step as CSS class
Steps.prototype.getClass = function getClass (step) {
    return 'step-' + step;
};

var Animations = function Animations() {
    this.delay1 = 600;
    this.delay2 = 1350;
};

Animations.prototype.fadeIn = function fadeIn (el, delay) {
    delay = typeof delay == 'undefined' ? 0 : delay;
    setTimeout(function(){
        var fadeEffect = setInterval(function() {
            if (!el.style.opacity) {
                el.style.opacity = 0;
            }
            el.style.display = 'flex';
            if (parseFloat(el.style.opacity) > 0.9) {
                clearInterval(fadeEffect);
            } else {
                el.style.opacity = parseFloat(el.style.opacity) + 0.1;
            }
        }, 50);
    }, delay);
};

Animations.prototype.fadeOut = function fadeOut (el, delay) {
    delay = typeof delay == 'undefined' ? 0 : delay;
    setTimeout(function(){
        var fadeEffect = setInterval(function() {
            if (!el.style.opacity) {
                el.style.opacity = 1;
            }
            if (el.style.opacity < 0.1) {
                clearInterval(fadeEffect);
                el.style.display = 'none';
            } else {
                el.style.opacity -= 0.1;
            }
        }, 50);
    }, delay);
};

var Splash = function Splash() {
    this.helper = new Helper;
};

Splash.prototype.init = function init () {
    this.runCounter();
    this.animateLoadingText();
    this.setRedirect();
};

Splash.prototype.runCounter = function runCounter () {
    var percentage = 0,
        that = this;
    var interval = setInterval(function() {
        that.helper.getElement('counter').innerHTML = percentage;
        percentage++;
        if (percentage >= 100) {
            clearInterval(interval);
        }
    }, 50);
};

Splash.prototype.animateLoadingText = function animateLoadingText () {
    var el = this.helper.getElement('splash-text');
    setInterval(function() {
        if (el.classList.contains('bounceIn')) {
            el.classList.remove('bounceIn');
            el.classList.add('bounceOut');
        } else {
            el.classList.add('bounceIn');
            el.classList.remove('bounceOut');
        }
    }, 1500);
};

Splash.prototype.setRedirect = function setRedirect () {
    setTimeout(function() {
        window.location.replace('app.html');
    }, 5000);
};

var IntroText = function IntroText() {
  this.helper = new Helper;
  this.animations = new Animations;
};

// Show or hide intro text
IntroText.prototype.showHide = function showHide (currentStep) {
    var el = this.helper.getElement('intro-text');
    if (currentStep == 0) {
        this.animations.fadeIn(el, this.animations.delay2);
    } else {
        this.animations.fadeOut(el, 0);
    }
};

var InfoText = function InfoText() {
    this.helper = new Helper;
    this.animations = new Animations;
};

// Show or hide intro text
InfoText.prototype.showHide = function showHide (step) {
    var el = this.helper.getElement('info-text'),
        that = this;

    this.animations.fadeOut(el, 0);
    setTimeout(function() {
        that.setText(step);
    }, this.animations.delay1);

    if (step > 0 && step < 9) {
        this.animations.fadeIn(el, this.animations.delay2);
    }
};

InfoText.prototype.setText = function setText (step) {
    this.helper
        .getElement('info-text')
        .innerHTML = 'Step ' + step + ' out of 8 on the path to digital enlightenment.';
};

var helper = new Helper;
var steps = new Steps;
var animations = new Animations;
var splash = new Splash;
var introText = new IntroText;
var infoText = new InfoText;

var hidden = 'hidden';
var body = helper.getElement('body');
var rightArrow = helper.getElement('right-arrow');
var leftArrow = helper.getElement('left-arrow');

// On window load run counter
window.onload = function() {
    // If I'm in the splash screen
    if (helper.getElement('splash')) {
        splash.init();
    }
};

// Show one card
function showCard(card) {
    animations.fadeIn(helper.getElement(card), 0);
}

// Hide one card
function hideCard(card) {
    animations.fadeOut(helper.getElement(card), 0);
}

// Move the background forward adding one css class
function moveBackgroundForward(currentStepClass, nextStep) {
    if (body.classList.contains('prev-' + currentStepClass)) {
        body.classList.remove('prev-' + currentStepClass);
    }
    body.classList.remove('next-' + currentStepClass);
    body.classList.add('next-' + nextStep);
}

// Move the background backward removing one css class
function moveBackgroundBackward(currentStep, prevStep) {
    if (body.classList.contains('next-' + currentStep)) {
        body.classList.remove('next-' + currentStep);
    }
    body.classList.remove('prev-' + currentStep);
    body.classList.add('prev-' + prevStep);
}

// Show or Hide left and right arrows
function showHideArrows(step) {
    if (step == 0) {
      animations.fadeOut(leftArrow, 0);
    } else {
      animations.fadeIn(leftArrow, animations.delay2);
    }

    if (step == 9) {
      animations.fadeOut(rightArrow, 0);
    } else {
      animations.fadeIn(rightArrow, animations.delay2);
    }
}

// Event on click right arrow
if (rightArrow) {
    rightArrow.onclick = function(e) {
        e.preventDefault();

        var currentStepClass = steps.getClass(steps.getCurrent()),
            nextStepClass = steps.getClass(steps.getNextStep());

        showHideArrows(steps.getNextStep());
        introText.showHide(steps.getNextStep());
        infoText.showHide(steps.getNextStep());
        hideCard(currentStepClass);

        setTimeout(function() {
            moveBackgroundForward(currentStepClass, nextStepClass);
        }, animations.delay1);

        setTimeout(function() {
            showCard(nextStepClass);
        }, animations.delay2);

        // Forward one step
        steps.addStep();
    }
}

// Event on click left arrow
if (leftArrow) {
    leftArrow.onclick = function(e) {
        e.preventDefault();

        var currentStepClass = steps.getClass(steps.getCurrent()),
            prevStepClass = steps.getClass(steps.getPrevStep());

        showHideArrows(steps.getPrevStep());
        introText.showHide(steps.getPrevStep());
        infoText.showHide(steps.getPrevStep());
        hideCard(currentStepClass);

        setTimeout(function() {
            moveBackgroundBackward(currentStepClass, prevStepClass);
        }, animations.delay1);

        setTimeout(function() {
            showCard(prevStepClass);
        }, animations.delay2);

        // Backward one step
        steps.removeStep();
    }
}
