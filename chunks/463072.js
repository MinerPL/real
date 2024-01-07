            "use strict";
            t("686366");
            var a = t("396626"),
                o = t("605357"),
                n = t("303061"),
                l = t("72354"),
                i = Array.prototype,
                s = {
                    DOMTokenList: !0,
                    NodeList: !0
                };
            e.exports = function(e) {
                var r = e.keys;
                return e === i || n(i, e) && r === i.keys || o(s, a(e)) ? l : r
            }