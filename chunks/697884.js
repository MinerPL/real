            "use strict";
            var n = r("374263");
            t.exports = function t(e, r) {
                if (!e || !r) return !1;
                if (e === r) return !0;
                if (n(e)) return !1;
                else if (n(r)) return t(e, r.parentNode);
                else if ("contains" in e) return e.contains(r);
                else if (e.compareDocumentPosition) return !!(16 & e.compareDocumentPosition(r));
                else return !1
            }