function wrapImageWithFancyBox() {
    $("img").not(".sidebar-image img").not("#author-avatar img").not(".mdl-menu img").not(".something-else-logo img").each(function() {
        var t = $(this),
        a = t.attr("alt"),
        o = t.parent("a");
        if (o.size() < 1) {
            var n = this.getAttribute("src"),
            i = n.lastIndexOf("@"); - 1 != i && (n = n.substring(0, i)),
            o = t.wrap('<a href="' + n + '"></a>').parent("a")
        }
        o.attr("data-fancybox", "images"),
        a && o.attr("data-caption", a)
    }),
    $().fancybox({
        selector: '[data-fancybox="images"]',
        thumbs: !1,
        hash: !0,
        loop: !1,
        fullScreen: !1,
        slideShow: !1,
        protect: !0
    })
}
function backBtnDectector() {
    window.history && window.history.pushState && $(window).on("popstate",
    function() {
        "" !== location.hash.split("#!/")[1] && ("" === window.location.hash && onBackButtonClicked())
    })
}
function onBackButtonClicked() {
    $.fancybox.isOpen && $.fancybox.close()
}
$(document).ready(function() {
    wrapImageWithFancyBox()
});