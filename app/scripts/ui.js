'use strict';

var speakphrase = 'hey, I am loaded on the page';

console.log(speakphrase);

$(document).ready(function(){
    $('#scroll-nav').onePageNav({
        scrollSpeed: 1000,
        scrollThreshold: 0.5,
        easing: 'swing'
    });
});