            "use strict";
            var r = n("859514"),
                o = n("868822"),
                a = n("64980"),
                i = n("590455"),
                s = n("125359"),
                c = n("551544"),
                l = n("238104"),
                u = n("998270"),
                d = n("47361"),
                p = n("623105"),
                f = n("87078"),
                m = n("174669"),
                h = n("140925"),
                g = m("replace"),
                v = TypeError,
                y = a("".indexOf),
                b = a("".replace),
                x = a("".slice),
                S = Math.max,
                w = function(e, t, n) {
                    return n > e.length ? -1 : "" === t ? n : y(e, t, n)
                };
            r({
                target: "String",
                proto: !0
            }, {
                replaceAll: function(e, t) {
                    var n, r, a, m, D, C, P, k, E = i(this),
                        T = 0,
                        R = 0,
                        M = "";
                    if (!c(e)) {
                        if ((n = l(e)) && !~y(u(i(p(e))), "g")) throw v("`.replaceAll` does not allow non-global regexes");
                        if (r = d(e, g)) return o(r, e, E, t);
                        if (h && n) return b(u(E), e, t)
                    }
                    for (a = u(E), m = u(e), !(D = s(t)) && (t = u(t)), P = S(1, C = m.length), T = w(a, m, 0); - 1 !== T;) k = D ? u(t(m, T, a)) : f(m, a, T, [], void 0, t), M += x(a, R, T) + k, R = T + C, T = w(a, m, T + P);
                    return R < a.length && (M += x(a, R)), M
                }
            })