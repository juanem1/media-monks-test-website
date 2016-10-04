class Animations {

    constructor() {
        this.delay1 = 600;
        this.delay2 = 1350;
    }

    fadeIn(el, delay) {
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
    }

    fadeOut(el, delay) {
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
    }

}
