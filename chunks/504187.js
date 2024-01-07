            "use strict";
            var i = r("407611"),
                n = r("37549"),
                o = i() && n("%Object.defineProperty%", !0),
                a = i.hasArrayLengthDefineBug(),
                s = a && r("291025"),
                f = r("812095")("Object.prototype.propertyIsEnumerable");
            t.exports = function(t, e, r, i, n, h) {
                if (!o) {
                    if (!t(h) || !h["[[Configurable]]"] || !h["[[Writable]]"] || n in i && f(i, n) !== !!h["[[Enumerable]]"]) return !1;
                    var c = h["[[Value]]"];
                    return i[n] = c, e(i[n], c)
                }
                return a && "length" === n && "[[Value]]" in h && s(i) && i.length !== h["[[Value]]"] ? (i.length = h["[[Value]]"], i.length === h["[[Value]]"]) : (o(i, n, r(h)), !0)
            }