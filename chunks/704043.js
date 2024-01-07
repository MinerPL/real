            var e = r("146007"),
                o = r("556459"),
                i = r("596340"),
                u = r("442347"),
                a = r("540956"),
                c = r("725502"),
                s = r("591350"),
                f = r("381178"),
                p = "[object Arguments]",
                l = "[object Array]",
                v = "[object Object]",
                h = Object.prototype.hasOwnProperty;
            t.exports = function(t, n, r, _, d, x) {
                var y = c(t),
                    b = c(n),
                    g = y ? l : a(t),
                    w = b ? l : a(n);
                g = g == p ? v : g, w = w == p ? v : w;
                var j = g == v,
                    O = w == v,
                    m = g == w;
                if (m && s(t)) {
                    if (!s(n)) return !1;
                    y = !0, j = !1
                }
                if (m && !j) return x || (x = new e), y || f(t) ? o(t, n, r, _, d, x) : i(t, n, g, r, _, d, x);
                if (!(1 & r)) {
                    var z = j && h.call(t, "__wrapped__"),
                        k = O && h.call(n, "__wrapped__");
                    if (z || k) {
                        var A = z ? t.value() : t,
                            E = k ? n.value() : n;
                        return x || (x = new e), d(A, E, r, _, x)
                    }
                }
                return !!m && (x || (x = new e), u(t, n, r, _, d, x))
            }