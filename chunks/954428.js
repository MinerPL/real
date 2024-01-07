            "use strict";
            n("686366");
            var r = n("396626"),
                a = n("605357"),
                o = n("303061"),
                i = n("395556"),
                l = Array.prototype,
                u = {
                    DOMTokenList: !0,
                    NodeList: !0
                };
            e.exports = function(e) {
                var t = e.values;
                return e === l || o(l, e) && t === l.values || a(u, r(e)) ? i : t
            }