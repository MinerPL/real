            "use strict";
            var i = r("37549"),
                n = r("293471"),
                o = i("%SyntaxError%"),
                a = i("%TypeError%"),
                s = r("737891"),
                f = r("701222"),
                h = r("604050"),
                c = r("905687"),
                u = r("300344"),
                d = r("552302"),
                l = r("6943"),
                p = r("865435"),
                b = r("537256");
            t.exports = function(t, e, r) {
                if ("Object" !== p(t)) throw new a("Assertion failed: O must be an Object");
                if (!u(e)) throw new a("Assertion failed: P must be a Property Key");
                if (!s({
                        Type: p,
                        IsDataDescriptor: h,
                        IsAccessorDescriptor: f
                    }, r)) throw new a("Assertion failed: Desc must be a Property Descriptor");
                if (!n) {
                    if (f(r)) throw new o("This environment does not support accessor property descriptors.");
                    var i = !(e in t) && r["[[Writable]]"] && r["[[Enumerable]]"] && r["[[Configurable]]"] && "[[Value]]" in r,
                        m = e in t && (!("[[Configurable]]" in r) || r["[[Configurable]]"]) && (!("[[Enumerable]]" in r) || r["[[Enumerable]]"]) && (!("[[Writable]]" in r) || r["[[Writable]]"]) && "[[Value]]" in r;
                    if (i || m) return t[e] = r["[[Value]]"], l(t[e], r["[[Value]]"]);
                    throw new o("This environment does not support defining non-writable, non-enumerable, or non-configurable properties")
                }
                var g = n(t, e),
                    y = g && d(g),
                    v = c(t);
                return b(t, e, v, r, y)
            }