import {Helper} from './helper';
import {Animations} from './animations';

export class IntroText {

    constructor() {
      this.helper = new Helper;
      this.animations = new Animations;
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
