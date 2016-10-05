import {Helper} from './helper';

export class Splash {

    constructor() {
        this.helper = new Helper;
    }

    init() {
        this.runCounter();
        this.animateLoadingText();
        this.setRedirect();
    }

    runCounter() {
        let percentage = 0,
            that = this;
        let interval = setInterval(function() {
            that.helper.getElement('counter').innerHTML = percentage;
            percentage++;
            if (percentage >= 100) {
                clearInterval(interval);
            }
        }, 50);
    }

    animateLoadingText() {
        let el = this.helper.getElement('splash-text');
        setInterval(function() {
            if (el.classList.contains('bounceIn')) {
                el.classList.remove('bounceIn');
                el.classList.add('bounceOut');
            } else {
                el.classList.add('bounceIn');
                el.classList.remove('bounceOut');
            }
        }, 1500);
    }

    setRedirect() {
        setTimeout(function() {
            window.location.replace('app.html');
        }, 5000);
    }

}
