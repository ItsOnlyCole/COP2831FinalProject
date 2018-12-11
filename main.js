/*
    main.js
    Created by: Cole Hemp
    Last Modified: December 11th, 2018
*/

/* Function to slide down webpage when clicking "read more" on index.html */

var homeBottom = document.getElementsByClassName("homeBottom");

function readMore() {
    if(window.innerWidth < 992) {
        var offset = 54;
    }
    else {
        var offset = 60;
    }
    /*Uses jQuery for it's animate function*/
    $('html,body').animate({scrollTop: $(".bioContainer").offset().top - offset}, 'slow');

};