"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, [{
    key: "getElement",


    // Return one element for its class
    value: function getElement(el) {
      return document.getElementsByClassName(el)[0];
    }
  }]);

  return Helper;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Steps = function () {
    function Steps() {
        _classCallCheck(this, Steps);

        this.step = 0;
    }

    // Return the current step


    _createClass(Steps, [{
        key: 'getCurrent',
        value: function getCurrent() {
            return this.step;
        }

        // Add one step and return the value

    }, {
        key: 'getNextStep',
        value: function getNextStep() {
            return this.step == 9 ? this.step : this.step + 1;
        }

        // Move back one step and return the value

    }, {
        key: 'getPrevStep',
        value: function getPrevStep() {
            return this.step == 0 ? this.step : this.step - 1;
        }

        // Add step to the count

    }, {
        key: 'addStep',
        value: function addStep() {
            if (this.step < 9) {
                this.step = this.step + 1;
            }

            return this.step;
        }

        // Remove one step from the count

    }, {
        key: 'removeStep',
        value: function removeStep() {
            if (this.step > 0) {
                this.step = this.step - 1;
            }

            return this.step;
        }

        // Return the current step as CSS class

    }, {
        key: 'getClass',
        value: function getClass(step) {
            return 'step-' + step;
        }
    }]);

    return Steps;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animations = function () {
    function Animations() {
        _classCallCheck(this, Animations);

        this.delay1 = 600;
        this.delay2 = 1350;
    }

    _createClass(Animations, [{
        key: 'fadeIn',
        value: function fadeIn(el, delay) {
            delay = typeof delay == 'undefined' ? 0 : delay;
            setTimeout(function () {
                var fadeEffect = setInterval(function () {
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
        }
    }, {
        key: 'fadeOut',
        value: function fadeOut(el, delay) {
            delay = typeof delay == 'undefined' ? 0 : delay;
            setTimeout(function () {
                var fadeEffect = setInterval(function () {
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
        }
    }]);

    return Animations;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Splash = function () {
    function Splash(helper) {
        _classCallCheck(this, Splash);

        this.helper = helper;
    }

    _createClass(Splash, [{
        key: 'init',
        value: function init() {
            this.runCounter();
            this.animateLoadingText();
            this.setRedirect();
        }
    }, {
        key: 'runCounter',
        value: function runCounter() {
            var percentage = 0,
                that = this;
            var interval = setInterval(function () {
                that.helper.getElement('counter').innerHTML = percentage;
                percentage++;
                if (percentage >= 100) {
                    clearInterval(interval);
                }
            }, 50);
        }
    }, {
        key: 'animateLoadingText',
        value: function animateLoadingText() {
            var el = this.helper.getElement('splash-text');
            setInterval(function () {
                if (el.classList.contains('bounceIn')) {
                    el.classList.remove('bounceIn');
                    el.classList.add('bounceOut');
                } else {
                    el.classList.add('bounceIn');
                    el.classList.remove('bounceOut');
                }
            }, 1500);
        }
    }, {
        key: 'setRedirect',
        value: function setRedirect() {
            setTimeout(function () {
                window.location.replace('app.html');
            }, 5000);
        }
    }]);

    return Splash;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IntroText = function () {
    function IntroText(helper, animations) {
        _classCallCheck(this, IntroText);

        this.helper = helper;
        this.animations = animations;
    }

    // Show or hide intro text


    _createClass(IntroText, [{
        key: 'showHide',
        value: function showHide(currentStep) {
            var el = this.helper.getElement('intro-text');
            if (currentStep == 0) {
                this.animations.fadeIn(el, this.animations.delay2);
            } else {
                this.animations.fadeOut(el, 0);
            }
        }
    }]);

    return IntroText;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InfoText = function () {
    function InfoText(helper, animations) {
        _classCallCheck(this, InfoText);

        this.helper = helper;
        this.animations = animations;
    }

    // Show or hide intro text


    _createClass(InfoText, [{
        key: 'showHide',
        value: function showHide(step) {
            var el = this.helper.getElement('info-text'),
                that = this;

            this.animations.fadeOut(el, 0);
            setTimeout(function () {
                that.setText(step);
            }, this.animations.delay1);

            if (step > 0 && step < 9) {
                this.animations.fadeIn(el, this.animations.delay2);
            }
        }
    }, {
        key: 'setText',
        value: function setText(step) {
            this.helper.getElement('info-text').innerHTML = 'Step ' + step + ' out of 8 on the path to digital enlightenment.';
        }
    }]);

    return InfoText;
}();
'use strict';

(function () {

    var helper = new Helper(),
        steps = new Steps(),
        animations = new Animations(),
        splash = new Splash(helper),
        introText = new IntroText(helper, animations),
        infoText = new InfoText(helper, animations);

    var hidden = 'hidden',
        body = helper.getElement('body'),
        rightArrow = helper.getElement('right-arrow'),
        leftArrow = helper.getElement('left-arrow');

    // On window load run counter
    window.onload = function () {
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
        rightArrow.onclick = function (e) {
            e.preventDefault();

            var currentStepClass = steps.getClass(steps.getCurrent()),
                nextStepClass = steps.getClass(steps.getNextStep());

            showHideArrows(steps.getNextStep());
            introText.showHide(steps.getNextStep());
            infoText.showHide(steps.getNextStep());
            hideCard(currentStepClass);

            setTimeout(function () {
                moveBackgroundForward(currentStepClass, nextStepClass);
            }, animations.delay1);

            setTimeout(function () {
                showCard(nextStepClass);
            }, animations.delay2);

            // Forward one step
            steps.addStep();
        };
    }

    // Event on click left arrow
    if (leftArrow) {
        leftArrow.onclick = function (e) {
            e.preventDefault();

            var currentStepClass = steps.getClass(steps.getCurrent()),
                prevStepClass = steps.getClass(steps.getPrevStep());

            showHideArrows(steps.getPrevStep());
            introText.showHide(steps.getPrevStep());
            infoText.showHide(steps.getPrevStep());
            hideCard(currentStepClass);

            setTimeout(function () {
                moveBackgroundBackward(currentStepClass, prevStepClass);
            }, animations.delay1);

            setTimeout(function () {
                showCard(prevStepClass);
            }, animations.delay2);

            // Backward one step
            steps.removeStep();
        };
    }
})();