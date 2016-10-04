class InfoText {

    constructor(helper, animations) {
        this.helper = helper;
        this.animations = animations;
    }

    // Show or hide intro text
    showHide(step) {
        var el = this.helper.getElement('info-text'),
            that = this;

        this.animations.fadeOut(el, 0);
        setTimeout(function() {
            that.setText(step);
        }, this.animations.delay1);

        if (step > 0 && step < 9) {
            this.animations.fadeIn(el, this.animations.delay2);
        }
    }

    setText(step) {
        this.helper
            .getElement('info-text')
            .innerHTML = 'Step ' + step + ' out of 8 on the path to digital enlightenment.';
    }

}