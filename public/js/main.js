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
    key: 'nextStep',
    value: function nextStep() {
      if (this.step < 9) {
        this.step = this.step + 1;
      }

      return this.step;
    }

    // Move back one step and return the value

  }, {
    key: 'prevStep',
    value: function prevStep() {
      if (this.step > 0) {
        this.step = this.step - 1;
      }

      return this.step;
    }

    // Return the current step as CSS class

  }, {
    key: 'getClass',
    value: function getClass(step) {
      return 'step-' + this.step;
    }
  }]);

  return Steps;
}();
'use strict';

(function () {

  var helper = new Helper(),
      steps = new Steps();

  var hidden = 'hidden',
      body = helper.getElement('body'),
      rightArrow = helper.getElement('right-arrow'),
      leftArrow = helper.getElement('left-arrow');

  function showNextCard() {
    var cards = [];
    switch (steps.getCurrent()) {
      case 1:
        cards = ['slide-0', 'slide-1'];break;
      case 2:
        cards = ['slide-1', 'slide-2'];break;
      case 3:
        cards = ['slide-2', 'slide-3'];break;
      case 4:
        cards = ['slide-3', 'slide-4'];break;
      case 5:
        cards = ['slide-4', 'slide-5'];break;
      case 6:
        cards = ['slide-5', 'slide-6'];break;
      case 7:
        cards = ['slide-6', 'slide-7'];break;
      case 8:
        cards = ['slide-7', 'slide-8'];break;
    }
    helper.getElement(cards[0]).classList.add(hidden);
    helper.getElement(cards[1]).classList.remove(hidden);
  }

  function showPrevCard() {
    var cards = [];
    switch (steps.getCurrent()) {
      case 1:
        cards = ['slide-1', 'slide-0'];break;
      case 2:
        cards = ['slide-2', 'slide-1'];break;
      case 3:
        cards = ['slide-3', 'slide-2'];break;
      case 4:
        cards = ['slide-4', 'slide-3'];break;
      case 5:
        cards = ['slide-5', 'slide-4'];break;
      case 6:
        cards = ['slide-6', 'slide-5'];break;
      case 7:
        cards = ['slide-7', 'slide-6'];break;
      case 8:
        cards = ['slide-8', 'slide-7'];break;
      case 9:
        cards = ['slide-9', 'slide-8'];break;
    }
    helper.getElement(cards[0]).classList.add(hidden);
    helper.getElement(cards[1]).classList.remove(hidden);
  }

  // Move the background forward adding one css class
  function moveBackgroundForward() {
    var stepClass = steps.getClass(steps.nextStep());

    if (!body.classList.contains(stepClass)) {
      body.classList.add(stepClass);
    }
  }

  // Move the background backward removing one css class
  function moveBackgroundBackward() {
    var stepClass = steps.getClass(steps.getCurrent());

    if (body.classList.contains(stepClass)) {
      body.classList.remove(stepClass);
      steps.prevStep();
    }
  }

  // show / Hide left and right arrows
  function showHideArrows() {
    var currentStep = steps.getCurrent();

    if (currentStep == 9) {
      if (!rightArrow.classList.contains(hidden)) {
        rightArrow.classList.add(hidden);
      }
    } else {
      rightArrow.classList.remove(hidden);
    }

    if (currentStep == 0) {
      if (!leftArrow.classList.contains(hidden)) {
        leftArrow.classList.add(hidden);
      }
    } else {
      leftArrow.classList.remove(hidden);
    }
  }

  // Event on click right arrow
  rightArrow.onclick = function () {
    moveBackgroundForward();
    showHideArrows();
    showNextCard();
  };

  // Event on click left arrow
  leftArrow.onclick = function () {
    moveBackgroundBackward();
    showHideArrows();
    showPrevCard();
  };
})();