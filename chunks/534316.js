            "use strict";
            var i = r("37549"),
                n = i("%Number%"),
                o = i("%RegExp%"),
                a = i("%TypeError%"),
                s = i("%parseInt%"),
                f = r("812095"),
                h = r("998645"),
                c = f("String.prototype.slice"),
                u = h(/^0b[01]+$/i),
                d = h(/^0o[0-7]+$/i),
                l = h(/^[-+]0x[0-9a-f]+$/i),
                p = h(new o("[\x85​￾]", "g")),
                b = r("418348"),
                m = r("865435");
            t.exports = function t(e) {
                if ("String" !== m(e)) throw new a("Assertion failed: `argument` is not a String");
                if (u(e)) return n(s(c(e, 2), 2));
                if (d(e)) return n(s(c(e, 2), 8));
                if (p(e) || l(e)) return NaN;
                var r = b(e);
                return r !== e ? t(r) : n(e)
            }