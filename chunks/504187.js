            "use strict";
            var r = s("407611"),
                i = s("37549"),
                n = r() && i("%Object.defineProperty%", !0),
                c = r.hasArrayLengthDefineBug(),
                o = c && s("291025"),
                f = s("812095")("Object.prototype.propertyIsEnumerable");
            t.exports = function(t, e, s, r, i, u) {
                if (!n) {
                    if (!t(u) || !u["[[Configurable]]"] || !u["[[Writable]]"] || i in r && f(r, i) !== !!u["[[Enumerable]]"]) return !1;
                    var a = u["[[Value]]"];
                    return r[i] = a, e(r[i], a)
                }
                return c && "length" === i && "[[Value]]" in u && o(r) && r.length !== u["[[Value]]"] ? (r.length = u["[[Value]]"], r.length === u["[[Value]]"]) : (n(r, i, s(u)), !0)
            }