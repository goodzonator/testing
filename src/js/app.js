import './our-partners.js';
import './our-team.js';
import './contact-us.js';
import './popup.js';
import './mobile-menu.js';

/* support webp */
import BaseHelpers from "./helpers/BaseHelpers.js";

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();
/* // support webp */


let currentWidth = window.innerWidth;

window.addEventListener('resize', function() {
    const newWidth = window.innerWidth;

    if ((currentWidth >= 1200 && newWidth < 1200) || (currentWidth < 1200 && newWidth >= 1200)) {
        location.reload();
    }

    currentWidth = newWidth;
});