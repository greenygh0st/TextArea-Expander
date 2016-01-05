/*!
	Tweeked and updated by dalemysz
	License: MIT
	To use: Include jQuery and this file on your page and include the class name expand in your textareas class attribute
	i.e. <textarea id="myText" class="someClass expand"></textarea>
	Original Credit: Jack Moore
	http://www.jacklmoore.com/autosize
*/
(function (e) {
    var t, o = { className: "autosizejs", id: "autosizejs", append: "\n", callback: !1, resizeDelay: 10, placeholder: !0 }, i = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>', n = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent", "whiteSpace"], s = e(i).data("autosize", !0)[0]; s.style.lineHeight = "99px", "99px" === e(s).css("lineHeight") && n.push("lineHeight"), s.style.lineHeight = "", e.fn.autosize = function (i) { return this.length ? (i = e.extend({}, o, i || {}), s.parentNode !== document.body && e(document.body).append(s), this.each(function () { function o() { var t, o = window.getComputedStyle ? window.getComputedStyle(u, null) : !1; o ? (t = u.getBoundingClientRect().width, (0 === t || "number" != typeof t) && (t = parseInt(o.width, 10)), e.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function (e, i) { t -= parseInt(o[i], 10) })) : t = p.width(), s.style.width = Math.max(t, 0) + "px" } function a() { var a = {}; if (t = u, s.className = i.className, s.id = i.id, d = parseInt(p.css("maxHeight"), 10), e.each(n, function (e, t) { a[t] = p.css(t) }), e(s).css(a).attr("wrap", p.attr("wrap")), o(), window.chrome) { var r = u.style.width; u.style.width = "0px", u.offsetWidth, u.style.width = r } } function r() { var e, n; t !== u ? a() : o(), s.value = !u.value && i.placeholder ? p.attr("placeholder") || "" : u.value, s.value += i.append || "", s.style.overflowY = u.style.overflowY, n = parseInt(u.style.height, 10), s.scrollTop = 0, s.scrollTop = 9e4, e = s.scrollTop, d && e > d ? (u.style.overflowY = "scroll", e = d) : (u.style.overflowY = "hidden", c > e && (e = c)), e += w, n !== e && (u.style.height = e + "px", f && i.callback.call(u, u), p.trigger("autosize.resized")) } function l() { clearTimeout(h), h = setTimeout(function () { var e = p.width(); e !== g && (g = e, r()) }, parseInt(i.resizeDelay, 10)) } var d, c, h, u = this, p = e(u), w = 0, f = e.isFunction(i.callback), z = { height: u.style.height, overflow: u.style.overflow, overflowY: u.style.overflowY, wordWrap: u.style.wordWrap, resize: u.style.resize }, g = p.width(), y = p.css("resize"); p.data("autosize") || (p.data("autosize", !0), ("border-box" === p.css("box-sizing") || "border-box" === p.css("-moz-box-sizing") || "border-box" === p.css("-webkit-box-sizing")) && (w = p.outerHeight() - p.height()), c = Math.max(parseInt(p.css("minHeight"), 10) - w || 0, p.height()), p.css({ overflow: "hidden", overflowY: "hidden", wordWrap: "break-word" }), "vertical" === y ? p.css("resize", "none") : "both" === y && p.css("resize", "horizontal"), "onpropertychange" in u ? "oninput" in u ? p.on("input.autosize keyup.autosize", r) : p.on("propertychange.autosize", function () { "value" === event.propertyName && r() }) : p.on("input.autosize", r), i.resizeDelay !== !1 && e(window).on("resize.autosize", l), p.on("autosize.resize", r), p.on("autosize.resizeIncludeStyle", function () { t = null, r() }), p.on("autosize.destroy", function () { t = null, clearTimeout(h), e(window).off("resize", l), p.off("autosize").off(".autosize").css(z).removeData("autosize") }), r()) })) : this }
    $("body, html").css("overflowX", "hidden");
})(jQuery || $);

/*(function ($) {
    $.fn.textareaExpander = function (options) {
        var defaults = {
            minHeight: 'inherit',
            animate: true,
            animateDuration: 100
        };
        options = $.extend({}, defaults, options);
        var checkResize = function () {
            var $this = $(this),
                prevHeight = $this.height(),
                rowHeight = $this.css('fontSize'),
                newHeight = 0;
            $this.height(rowHeight);
            newHeight = this.scrollHeight;
            $this.height(prevHeight);
            if (newHeight < options.minHeight) {
                newHeight = options.minHeight;
            }
            // Mozilla handles some things differently here...so we need to detect it
            //and deal with it. :p
            if (!$.browser.mozilla) {
                if ($this.css('paddingBottom') || $this.css('paddingTop')) {
                    var padInt =
                        parseInt($this.css('paddingBottom').replace('px', ''), 10) +
                        parseInt($this.css('paddingTop').replace('px', ''), 10);
                    newHeight -= padInt;
                }
            }
            options.animate ?
                $this.stop().animate({
                    height: newHeight
                }, options.animateDuration)
                : $this.height(newHeight);
        }
        return this.filter('textarea').each(function () {
            var $this = $(this);
            if (options.minHeight == 'inherit') {
                options.minHeight = $this.height();
            }
            $this
                .css({
                    resize: 'none',
                    overflowY: 'hidden',
                    overflowX: 'hidden'
                }).bind(
                    'expand keyup keydown change',
                    checkResize
                ).trigger('expand');
            return this;
        });
    };
})(jQuery);
*/
// initialize all expanding textareas
jQuery(document).ready(function() {
    jQuery("textarea[class*=expand]").autosize(); //for any text areas with the expand class auto add the library
});
