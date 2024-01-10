            "use strict";
            var i = r("37549"),
                n = i("%Array.prototype%"),
                o = i("%RangeError%"),
                a = i("%SyntaxError%"),
                s = i("%TypeError%"),
                f = r("778841"),
                h = 4294967295,
                c = r("29364")(),
                u = i("%Object.setPrototypeOf%", !0) || (c ? function(t, e) {
                    return t.__proto__ = e, t
                } : null);
            t.exports = function(t) {
                if (!f(t) || t < 0) throw new s("Assertion failed: `length` must be an integer Number >= 0");
                if (t > h) throw new o("length is greater than (2**32 - 1)");
                var e = arguments.length > 1 ? arguments[1] : n,
                    r = [];
                if (e !== n) {
                    if (!u) throw new a("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
                    u(r, e)
                }
                return 0 !== t && (r.length = t), r
            }