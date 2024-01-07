            "use strict";
            var e = n("275160"),
                o = n("735320"),
                i = n("337292");
            t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var t, r = !1,
                    n = {};
                try {
                    (t = e(Object.prototype, "__proto__", "set"))(n, []), r = n instanceof Array
                } catch (t) {}
                return function(n, e) {
                    return o(n), i(e), r ? t(n, e) : n.__proto__ = e, n
                }
            }() : void 0)