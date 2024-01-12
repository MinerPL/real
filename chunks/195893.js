            "use strict";
            var r = s("37549"),
                i = s("293471"),
                n = r("%SyntaxError%"),
                c = r("%TypeError%"),
                o = s("737891"),
                f = s("701222"),
                u = s("604050"),
                a = s("905687"),
                d = s("300344"),
                p = s("552302"),
                b = s("6943"),
                h = s("865435"),
                l = s("537256");
            t.exports = function(t, e, s) {
                if ("Object" !== h(t)) throw new c("Assertion failed: O must be an Object");
                if (!d(e)) throw new c("Assertion failed: P must be a Property Key");
                if (!o({
                        Type: h,
                        IsDataDescriptor: u,
                        IsAccessorDescriptor: f
                    }, s)) throw new c("Assertion failed: Desc must be a Property Descriptor");
                if (!i) {
                    if (f(s)) throw new n("This environment does not support accessor property descriptors.");
                    var r = !(e in t) && s["[[Writable]]"] && s["[[Enumerable]]"] && s["[[Configurable]]"] && "[[Value]]" in s,
                        g = e in t && (!("[[Configurable]]" in s) || s["[[Configurable]]"]) && (!("[[Enumerable]]" in s) || s["[[Enumerable]]"]) && (!("[[Writable]]" in s) || s["[[Writable]]"]) && "[[Value]]" in s;
                    if (r || g) return t[e] = s["[[Value]]"], b(t[e], s["[[Value]]"]);
                    throw new n("This environment does not support defining non-writable, non-enumerable, or non-configurable properties")
                }
                var v = i(t, e),
                    x = v && p(v),
                    m = a(t);
                return l(t, e, m, s, x)
            }