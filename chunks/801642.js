            "use strict";
            var n = r("746969"),
                i = r("740821");

            function o(t) {
                return null == t ? t : String(t)
            }
            t.exports = function(t, e) {
                var r;
                if (window.getComputedStyle && (r = window.getComputedStyle(t, null))) return o(r.getPropertyValue(i(e)));
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    if (r = document.defaultView.getComputedStyle(t, null)) return o(r.getPropertyValue(i(e)));
                    if ("display" === e) return "none"
                }
                if (t.currentStyle) return "float" === e ? o(t.currentStyle.cssFloat || t.currentStyle.styleFloat) : o(t.currentStyle[n(e)]);
                return o(t.style && t.style[n(e)])
            }