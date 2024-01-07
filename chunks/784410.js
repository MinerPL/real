            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007"), n("808653");
            var r = n("884691"),
                i = n("845962"),
                u = e => {
                    let t = i.default.profileEffects,
                        [n, u] = r.useState(e),
                        [l, o] = r.useState(i.default.getProfileEffectById(e)),
                        a = t.reduce((t, n, r) => (n.id === e && (t = r), t), 0),
                        [, f] = r.useState(a),
                        s = r.useRef(a);
                    return r.useEffect(() => {
                        u(e), o(i.default.getProfileEffectById(e))
                    }, [e]), {
                        increment: () => {
                            let e = (s.current + 1) % t.length;
                            s.current = e, f(e), u(t[e].id), o(t[e])
                        },
                        decrement: () => {
                            let e = 0 === s.current ? t.length - 1 : s.current - 1;
                            s.current = e, f(e), u(t[e].id), o(t[e])
                        },
                        id: n,
                        preset: l
                    }
                }