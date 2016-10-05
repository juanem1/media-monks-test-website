import {Helper} from './helper.js';
import {Steps} from './steps.js';
import {Animations} from './animations.js';
import {Splash} from './splash.js';
import {IntroText} from './intro-text.js';
import {InfoText} from './info-text.js';


let helper = new Helper,
    steps = new Steps,
    animations = new Animations,
    splash = new Splash,
    introText = new IntroText,
    infoText = new InfoText;

let hidden = 'hidden',
    body = helper.getElement('body'),
    rightArrow = helper.getElement('right-arrow'),
    leftArrow = helper.getElement('left-arrow');

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
