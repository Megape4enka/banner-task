import { tns } from "tiny-slider"

/* Slider */

let slider = tns({
    container: '.reviews-list',
    mouseDrag: true,
    items: 1,
    slideBy: 'page',
    autoplay: true,
    edgePadding: 20,
    speed: 800,
    swipeAngle: false,
    autoplayHoverPause: false,
    autoplayTimeout: 5000,
    autoplayButtonOutput: false,
    nav: false,
    controls: false,
    loop: true,
});
