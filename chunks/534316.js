            "use strict";
            var r = s("37549"),
                i = r("%Number%"),
                n = r("%RegExp%"),
                c = r("%TypeError%"),
                o = r("%parseInt%"),
                f = s("812095"),
                u = s("998645"),
                a = f("String.prototype.slice"),
                d = u(/^0b[01]+$/i),
                p = u(/^0o[0-7]+$/i),
                b = u(/^[-+]0x[0-9a-f]+$/i),
                h = u(new n("[\x85​￾]", "g")),
                l = s("418348"),
                g = s("865435");
            t.exports = function t(e) {
                if ("String" !== g(e)) throw new c("Assertion failed: `argument` is not a String");
                if (d(e)) return i(o(a(e, 2), 2));
                if (p(e)) return i(o(a(e, 2), 8));
                if (h(e) || b(e)) return NaN;
                var s = l(e);
                return s !== e ? t(s) : i(e)
            }