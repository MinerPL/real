            "use strict";
            n.r(t), n.d(t, {
                isSVG: function() {
                    return r
                },
                isHidden: function() {
                    return a
                },
                isElement: function() {
                    return o
                },
                isReplacedElement: function() {
                    return i
                }
            });
            var r = function(e) {
                    return e instanceof SVGElement && "getBBox" in e
                },
                a = function(e) {
                    if (r(e)) {
                        var t = e.getBBox(),
                            n = t.width,
                            a = t.height;
                        return !n && !a
                    }
                    var o = e.offsetWidth,
                        i = e.offsetHeight;
                    return !(o || i || e.getClientRects().length)
                },
                o = function(e) {
                    var t, n = null === (t = null == e ? void 0 : e.ownerDocument) || void 0 === t ? void 0 : t.defaultView;
                    return !!(n && e instanceof n.Element)
                },
                i = function(e) {
                    switch (e.tagName) {
                        case "INPUT":
                            if ("image" !== e.type) break;
                        case "VIDEO":
                        case "AUDIO":
                        case "EMBED":
                        case "OBJECT":
                        case "CANVAS":
                        case "IFRAME":
                        case "IMG":
                            return !0
                    }
                    return !1
                }