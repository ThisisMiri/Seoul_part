
$(function() {

    //$('header').css('border', 'solid 10px red');
    //$('#masthead-id').css("color", "red");
    //$(".masthead-heading").css("color","blue");

    //console.log($("#masthead-id"));

    //var mastHead = $("#masthead-id");
    //console.log($mastHead);

    //$('.nav-item:even').css('background-color', 'blue');
    //$('.nav-item:old').css('background-color', 'green');
    //$('.nav-item:eq(0)').css('background-color', 'pink');

    //$('header #mashead-id.masthead-subheading').css("color", 'red');
    //console.log($("test"));

    //$('header #mashead-id.masthead-subheading').css("color", 'red');







//이벤트
   /*
    $("header #masthead-id").mouseenter(function() {
        //$("header #masthead-id").css('background-color'.'yellow');
        //this.css('background-color', 'yellow');
        $(this).css('background-color', 'yellow');
    })

    $("header #masthead-id").mouseenter(function() {
        $("header #masthead-id").css('background-color'.'blue');
    })

    $("header #masthead-id").mouseenter(function() {
        $("header #masthead-id").css('background-color'.'pink');
    })
    */

    /*
    $("header #masthead-id").on({
        mouseenter: function() {
            $(this).fadeTo('fast', 1);
        },
        mouseleave: function() {
            $(this).fadeTo('fast', 0.5);
        }
    })
    */


    /*
    $("masthead-id").click(function() {
        $(".masthead-heading").hide();
    });
    */


    /*
    $("masthead-id").click(function() {
        $(".masthead-heading").show();
    });
    */

    /*
    $("masthead-id").click(function() {
        $(".masthead-heading").slideDown();
    });
    */



    /*

    $("header .btn-one").click(function() {
        $(".masthead-heading").fadeOut();
    });

    $("header .btn-one").click(function() {
        $(".masthead-heading").fadeIn();
    });
    */



    /*
    $("header .btn-two").click(function() {
        $("masthead-id").removeClass('blue');
        $(".masthead-heading").removeClass('important');
    });
    */


    var $id = $("masthead-id");

    $(".btn-one").click(function() {
        //console.log($id.hasClass("blue"));

        //if($id.hasClass('blue')) {
        //    $id.removeClass('blue');
        //} else {
        //    $id.addClass('blue');
        //}

        $id.toggleClass("blue");
    })





 



})




















