            "use strict";
            var n = r("859514"),
                o = r("868822"),
                i = r("140925"),
                c = r("611769"),
                u = r("125359"),
                s = r("662918"),
                a = r("80282"),
                f = r("823493"),
                p = r("89157"),
                l = r("366483"),
                y = r("484784"),
                v = r("174669"),
                h = r("381250"),
                d = r("468261"),
                g = c.PROPER,
                O = c.CONFIGURABLE,
                b = d.IteratorPrototype,
                x = d.BUGGY_SAFARI_ITERATORS,
                m = v("iterator"),
                L = "keys",
                S = "values",
                T = "entries",
                w = function() {
                    return this
                };
            t.exports = function(t, e, r, c, v, d, A) {
                s(r, e, c);
                var P, j, _, k = function(t) {
                        if (t === v && M) return M;
                        if (!x && t && t in R) return R[t];
                        switch (t) {
                            case L:
                            case S:
                            case T:
                                return function() {
                                    return new r(this, t)
                                }
                        }
                        return function() {
                            return new r(this)
                        }
                    },
                    E = e + " Iterator",
                    I = !1,
                    R = t.prototype,
                    C = R[m] || R["@@iterator"] || v && R[v],
                    M = !x && C || k(v),
                    G = "Array" === e && R.entries || C;
                if (G && (P = a(G.call(new t))) !== Object.prototype && P.next && (!i && a(P) !== b && (f ? f(P, b) : !u(P[m]) && y(P, m, w)), p(P, E, !0, !0), i && (h[E] = w)), g && v === S && C && C.name !== S && (!i && O ? l(R, "name", S) : (I = !0, M = function() {
                        return o(C, this)
                    })), v) {
                    if (j = {
                            values: k(S),
                            keys: d ? M : k(L),
                            entries: k(T)
                        }, A)
                        for (_ in j)(x || I || !(_ in R)) && y(R, _, j[_]);
                    else n({
                        target: e,
                        proto: !0,
                        forced: x || I
                    }, j)
                }
                return (!i || A) && R[m] !== M && y(R, m, M, {
                    name: v
                }), h[e] = M, j
            }