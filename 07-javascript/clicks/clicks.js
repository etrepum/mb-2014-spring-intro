/*global $*/
/*jslint sloppy:true, browser: true*/
$('h1.page-title').text('It worked!');
$(window).on('click', function (e) {
    $('img.logo').css({left: e.clientX,
                       top: e.clientY});
    $('img.logo').toggleClass('hide');
});