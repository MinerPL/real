            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            }), r("222007"), r("808653");
            var n = r("884691"),
                i = r("845962"),
                u = e => {
                    let t = i.default.profileEffects,
                        [r, u] = n.useState(e),
                        [l, o] = n.useState(i.default.getProfileEffectById(e)),
                        a = t.reduce((t, r, n) => (r.id === e && (t = n), t), 0),
                        [, s] = n.useState(a),
                        d = n.useRef(a);
                    return n.useEffect(() => {
                        u(e), o(i.default.getProfileEffectById(e))
                    }, [e]), {
                        increment: () => {
                            let e = (d.current + 1) % t.length;
                            d.current = e, s(e), u(t[e].id), o(t[e])
                        },
                        decrement: () => {
                            let e = 0 === d.current ? t.length - 1 : d.current - 1;
                            d.current = e, s(e), u(t[e].id), o(t[e])
                        },
                        id: r,
                        preset: l
                    }
                }