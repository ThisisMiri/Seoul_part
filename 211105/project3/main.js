/*
var $profile = $('.profile');
var $profilePopup = $('.profile-popup');


$profile.on({

    mouseenter: function() {
        $(this).parent().find('.profile-popup').show();
    },

    mouseleave: function() {
        $profilePopup.hide();
    }
})
*/


var $profile = $('.profile');

$profile.on ({
    mouseenter: function() {
        $(this).next().fadeIn();
    },

    mouseleave: function() {
        $(this).next().fadeOut();
    }
})


















