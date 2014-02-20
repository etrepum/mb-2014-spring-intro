/*global $*/
/*jslint sloppy:true*/
var pageTitle = $("h1.page-title");
pageTitle.text("My code is running!");
$(window).on("click", function (e) {
    pageTitle.text(["click:", e.clientX, e.clientY].join(" "));
});
