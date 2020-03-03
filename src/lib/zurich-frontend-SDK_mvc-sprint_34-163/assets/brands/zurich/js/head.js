/*!
 * Date:      Mon Sep 25 2017 17:17:32 GMT+0200 (CEST)
 * Date-ISO:  2017-09-25T15:17:32.247Z
 * Timestamp: 1506352652
 * Release:   mvc-sprint_34-163
 * Revision:  95460b186fa9628b033736dab5ed2930dd017485
 */
/*  ####################  source/js/setup.js  ####################  */;
window.mrm = {
    config: {
        breakpoints: {
            XS: 'xs',
            SM: 'sm',
            MD: 'md',
            LG: 'lg',
            XL: 'xl'
        }
    },
    modules: {}
};

window.zwp = {};

/**
 * @see http://shauninman.com/tmp/retina/
 */
if ((window.devicePixelRatio === undefined ? 1 : window.devicePixelRatio) > 1){
    document.cookie = 'HTTP_IS_RETINA=1;path=/';
}

document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, '');

// enable CSS active pseudo styles in Mobile Safari
document.addEventListener("touchstart", function() {},false);


