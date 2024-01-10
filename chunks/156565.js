            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("627445"),
                l = n.n(i),
                r = n("77078"),
                o = n("252917"),
                u = n("945183"),
                d = n("493765"),
                c = n("485328"),
                E = n("206230"),
                f = n("105437"),
                _ = n("126090"),
                h = n("53889"),
                C = n("471671"),
                T = n("659500"),
                I = n("214875"),
                S = n("223415"),
                N = n("399174"),
                A = n("49111"),
                p = n("507812"),
                m = s.memo(function() {
                    let e = s.useRef(null),
                        t = s.useCallback(t => {
                            let {
                                duration: n,
                                intensity: a
                            } = t;
                            if (E.default.useReducedMotion || !C.default.isFocused()) return;
                            let {
                                current: s
                            } = e;
                            l(null != s, "Shakeable is shaken when not mounted"), s.shake(n, a)
                        }, []);
                    return s.useEffect(() => (c.default.setLayout(d.default), c.default.enable(), () => c.default.disable()), []), s.useEffect(() => (T.ComponentDispatch.subscribe(A.ComponentActions.SHAKE_APP, t), () => {
                        T.ComponentDispatch.unsubscribe(A.ComponentActions.SHAKE_APP, t)
                    }), [t]), (0, f.default)(), (0, a.jsxs)(r.Shakeable, {
                        ref: e,
                        className: p.app,
                        children: [(0, a.jsx)(N.default, {
                            className: p.layers,
                            children: (0, a.jsx)(o.default, {})
                        }), (0, a.jsx)(_.default, {}), (0, a.jsx)(u.default, {}), (0, a.jsx)(I.default, {}), (0, a.jsx)(h.default, {}), (0, a.jsx)(r.DnDKeyboardHelpBar, {}), (0, a.jsx)(S.default, {})]
                    })
                })