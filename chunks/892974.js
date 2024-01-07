            "use strict";
            n.r(t), n.d(t, {
                BackdropStyles: function() {
                    return r
                },
                default: function() {
                    return m
                }
            });
            var i, r, s = n("37983"),
                a = n("884691"),
                o = n("414456"),
                l = n.n(o),
                u = n("907002"),
                c = n("84339"),
                d = n("449918"),
                f = n("49111"),
                E = n("930352");
            (i = r || (r = {})).SUBTLE = "SUBTLE", i.DARK = "DARK", i.LIGHT = "LIGHT", i.SOLID = "SOLID";
            let h = {
                    SUBTLE: .25,
                    DARK: .85,
                    LIGHT: .95,
                    SOLID: 1
                },
                p = {
                    LIGHT: f.Color.WHITE_500,
                    DARK: f.Color.BLACK_500,
                    SUBTLE: f.Color.BLACK_500,
                    SOLID: f.Color.PRIMARY_630
                };

            function _(e) {
                return (0, d.getColor)(p[e])
            }
            let S = a.forwardRef(function(e, t) {
                let {
                    backdropStyle: n = "SUBTLE",
                    backdropInstant: i = !1,
                    zIndexBoost: r = 0,
                    LayerComponent: a,
                    isVisible: o,
                    onClose: d
                } = e, f = {
                    opacity: 0,
                    background: _(n)
                }, p = {
                    opacity: h[n],
                    background: _(n)
                }, S = (0, c.default)(i), m = (0, u.useTransition)(o, {
                    keys: e => e ? "backdrop" : "empty",
                    config: {
                        duration: i || S ? 0 : 300
                    },
                    from: f,
                    enter: p,
                    leave: f
                });
                if (null == a) {
                    let e = {
                        zIndex: 1e3 + r
                    };
                    return m((t, n) => n ? (0, s.jsx)(u.animated.div, {
                        className: E.backdrop,
                        style: {
                            ...t,
                            ...e
                        },
                        onClick: d
                    }) : null)
                }
                return (0, s.jsx)(a, {
                    children: m((e, t) => t ? (0, s.jsx)(u.animated.div, {
                        className: l(E.backdrop, E.withLayer),
                        style: e,
                        onClick: d
                    }) : null)
                })
            });
            var m = S