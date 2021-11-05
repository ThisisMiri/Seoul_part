

var $select = $('.select');

/*
$select.click(function() {
    $select.removeClass('on');
    $(this).addClass('on');
})
*/

$select.click(function () {
    $(this).addClass('on').sibling().removeClass('on');
    //console.log($(this).addClass('on').sibling());
})




















