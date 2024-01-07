            "use strict";
            var e = n("396626"),
                o = n("605357"),
                i = n("303061"),
                u = n("443797");
            n("82445");
            var s = Array.prototype,
                c = {
                    DOMTokenList: !0,
                    NodeList: !0
                };
            t.exports = function(t) {
                var r = t.forEach;
                return t === s || i(s, t) && r === s.forEach || o(c, e(t)) ? u : r
            }