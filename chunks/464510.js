            "use strict";
            var i = r("37549"),
                n = i("%Symbol.species%", !0),
                o = i("%TypeError%"),
                a = r("900651"),
                s = r("640107"),
                f = r("81109"),
                h = r("749578"),
                c = r("865435"),
                u = r("778841");
            t.exports = function(t, e) {
                if (!u(e) || e < 0) throw new o("Assertion failed: length must be an integer >= 0");
                if (!f(t)) return a(e);
                var r = s(t, "constructor");
                if (n && "Object" === c(r) && null === (r = s(r, n)) && (r = void 0), void 0 === r) return a(e);
                if (!h(r)) throw new o("C must be a constructor");
                return new r(e)
            }