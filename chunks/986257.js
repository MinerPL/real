            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("320959"),
                a = n("190418"),
                o = n("593882"),
                i = n("753671"),
                s = n("631068"),
                u = n("199407"),
                l = n("656967");

            function c(e) {
                return (0, i.isHTMLElement)(e) && "fixed" !== (0, o.default)(e).position ? e.offsetParent : null
            }

            function d(e) {
                for (var t = (0, r.default)(e), n = c(e); n && (0, s.default)(n) && "static" === (0, o.default)(n).position;) n = c(n);
                return n && ("html" === (0, a.default)(n) || "body" === (0, a.default)(n) && "static" === (0, o.default)(n).position) ? t : n || function(e) {
                    var t = /firefox/i.test((0, l.default)());
                    if (/Trident/i.test((0, l.default)()) && (0, i.isHTMLElement)(e) && "fixed" === (0, o.default)(e).position) return null;
                    var n = (0, u.default)(e);
                    for ((0, i.isShadowRoot)(n) && (n = n.host);
                        (0, i.isHTMLElement)(n) && 0 > ["html", "body"].indexOf((0, a.default)(n));) {
                        var r = (0, o.default)(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }