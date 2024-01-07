            var e = n("33426"),
                o = n("226741"),
                c = n("270879"),
                u = Object.prototype,
                a = Function.prototype.toString,
                i = u.hasOwnProperty,
                f = a.call(Object);
            t.exports = function(t) {
                if (!c(t) || "[object Object]" != e(t)) return !1;
                var r = o(t);
                if (null === r) return !0;
                var n = i.call(r, "constructor") && r.constructor;
                return "function" == typeof n && n instanceof n && a.call(n) == f
            }