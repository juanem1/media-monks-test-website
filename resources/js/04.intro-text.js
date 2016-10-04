class IntroText {

    constructor(helper, animations) {
        this.helper = helper;
        this.animations = animations;
    }

    // Show or hide intro text
    showHide(currentStep) {
        var el = this.helper.getElement('intro-text');
        if (currentStep == 0) {
            this.animations.fadeIn(el, this.animations.delay2);
        } else {
            this.animations.fadeOut(el, 0);
        }
    }

}