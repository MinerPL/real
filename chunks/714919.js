            "use strict";
            var e = n("289275"),
                o = n("207815"),
                i = n("925371"),
                u = n("268540"),
                s = n("453084").f,
                c = n("808655"),
                f = n("239757"),
                a = n("362776"),
                p = n("651696"),
                v = n("605357"),
                l = function(t) {
                    var r = function(n, e, i) {
                        if (this instanceof r) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(n);
                                case 2:
                                    return new t(n, e)
                            }
                            return new t(n, e, i)
                        }
                        return o(t, this, arguments)
                    };
                    return r.prototype = t.prototype, r
                };
            t.exports = function(t, r) {
                var n, o, y, h, x, d, g, b, m, S = t.target,
                    w = t.global,
                    O = t.stat,
                    j = t.proto,
                    A = w ? e : O ? e[S] : (e[S] || {}).prototype,
                    E = w ? f : f[S] || p(f, S, {})[S],
                    P = E.prototype;
                for (h in r) o = !(n = c(w ? h : S + (O ? "." : "#") + h, t.forced)) && A && v(A, h), d = E[h], o && (g = t.dontCallGetSet ? (m = s(A, h)) && m.value : A[h]), x = o && g ? g : r[h], (!o || typeof d != typeof x) && (b = t.bind && o ? a(x, e) : t.wrap && o ? l(x) : j && u(x) ? i(x) : x, (t.sham || x && x.sham || d && d.sham) && p(b, "sham", !0), p(E, h, b), j && (!v(f, y = S + "Prototype") && p(f, y, {}), p(f[y], h, x), t.real && P && (n || !P[h]) && p(P, h, x)))
            }