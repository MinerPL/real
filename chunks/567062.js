            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return T
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("907002"),
                o = s("446674"),
                d = s("77078"),
                u = s("731898"),
                c = s("206230"),
                E = s("782340"),
                _ = s("610990"),
                T = n.memo(function(e) {
                    let {
                        renderHeader: t,
                        children: s,
                        isExpanded: l,
                        isStuck: T,
                        onExpand: I
                    } = e, S = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), [N, g] = n.useState(!0), [f, A] = n.useState(!1), {
                        ref: L,
                        height: m = 0
                    } = (0, u.default)(), {
                        ref: C,
                        height: O = 0
                    } = (0, u.default)(), [h, R] = n.useState(l), D = (0, r.useSpring)({
                        height: h ? O + m : m,
                        immediate: N || S,
                        config: {
                            ...r.config.stiff,
                            clamp: !0
                        },
                        onStart: () => {
                            A(!1)
                        },
                        onRest: () => {
                            A(!0)
                        }
                    });
                    n.useLayoutEffect(() => {
                        A(!1), R(l)
                    }, [l]);
                    let [M, G] = n.useState(!1), x = () => {
                        G(!1)
                    };
                    return n.useLayoutEffect(() => {
                        let e = setTimeout(() => {
                            g(!1)
                        }, 100);
                        return () => clearTimeout(e)
                    }, []), (0, a.jsx)(d.Clickable, {
                        className: i(_.editCard, {
                            [_.toggled]: l,
                            [_.active]: M
                        }),
                        onMouseLeave: x,
                        onMouseDown: () => {
                            G(!0)
                        },
                        onMouseUp: x,
                        children: (0, a.jsxs)(r.animated.div, {
                            className: i(_.contentExpandContainer, {
                                [_.showOverflow]: l && f
                            }),
                            style: D,
                            children: [(0, a.jsx)(d.Clickable, {
                                innerRef: L,
                                onClick: T ? void 0 : I,
                                className: i(_.innerHeader, {
                                    [_.toggled]: l && T
                                }),
                                "aria-label": E.default.Messages.EXPAND,
                                children: t
                            }), (0, a.jsx)("div", {
                                ref: C,
                                children: s
                            })]
                        })
                    })
                })