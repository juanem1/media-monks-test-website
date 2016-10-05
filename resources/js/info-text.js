import {Helper} from './helper';
import {Animations} from './animations';

export class InfoText {

    constructor() {
        this.helper = new Helper;
        this.animations = new Animations;
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
