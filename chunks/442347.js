            var e = r("904526"),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t, n, r, i, u, a) {
                var c = 1 & r,
                    s = e(t),
                    f = s.length;
                if (f != e(n).length && !c) return !1;
                for (var p = f; p--;) {
                    var l = s[p];
                    if (!(c ? l in n : o.call(n, l))) return !1
                }
                var v = a.get(t);
                if (v && a.get(n)) return v == n;
                var h = !0;
                a.set(t, n), a.set(n, t);
                for (var _ = c; ++p < f;) {
                    var d = t[l = s[p]],
                        x = n[l];
                    if (i) var y = c ? i(x, d, l, n, t, a) : i(d, x, l, t, n, a);
                    if (!(void 0 === y ? d === x || u(d, x, r, i, a) : y)) {
                        h = !1;
                        break
                    }
                    _ || (_ = "constructor" == l)
                }
                if (h && !_) {
                    var b = t.constructor,
                        g = n.constructor;
                    b != g && "constructor" in t && "constructor" in n && !("function" == typeof b && b instanceof b && "function" == typeof g && g instanceof g) && (h = !1)
                }
                return a.delete(t), a.delete(n), h
            }