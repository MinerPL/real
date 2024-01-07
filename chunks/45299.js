            "use strict";
            A.r(t), A.d(t, {
                default: function() {
                    return c
                }
            }), A("222007");
            var a = A("37983"),
                l = A("884691"),
                n = A("907002"),
                r = A("669491"),
                s = A("77078"),
                o = A("659500"),
                i = A("49111"),
                d = A("782340"),
                u = A("317404"),
                c = function(e) {
                    var t;
                    let {
                        message: A,
                        errorMessage: c,
                        submitting: f,
                        onReset: C,
                        onSave: g,
                        onSaveText: h,
                        onResetText: T,
                        onSaveButtonColor: m,
                        disabled: p,
                        saveButtonTooltip: U
                    } = e, I = l.useRef(null), [{
                        spring: v
                    }, E] = (0, n.useSpring)(() => ({
                        spring: 0
                    }));
                    l.useEffect(() => {
                        function e() {
                            E({
                                spring: 1,
                                config: n.config.gentle
                            }), E({
                                spring: 0,
                                config: n.config.gentle,
                                delay: 1e3
                            })
                        }
                        return o.ComponentDispatch.subscribe(i.ComponentActions.EMPHASIZE_NOTICE, e), () => {
                            o.ComponentDispatch.unsubscribe(i.ComponentActions.EMPHASIZE_NOTICE, e)
                        }
                    }, [E]);
                    let x = v.to({
                            range: [0, 1],
                            output: [(0, s.useToken)(r.default.colors.TEXT_NORMAL).hex(), (0, s.useToken)(r.default.unsafe_rawColors.WHITE_500).hex()]
                        }),
                        N = v.to({
                            range: [0, 1],
                            output: [(0, s.useToken)(r.default.colors.BACKGROUND_FLOATING).hex(), (0, s.useToken)(r.default.colors.STATUS_DANGER).hex()]
                        }),
                        q = (0, s.useToken)(r.default.colors.TEXT_DANGER).hex();
                    return (0, a.jsx)(n.animated.div, {
                        className: u.container,
                        style: {
                            backgroundColor: N
                        },
                        children: (0, a.jsx)("div", {
                            className: u.flexContainer,
                            ref: I,
                            children: (0, a.jsxs)(s.FocusRingScope, {
                                containerRef: I,
                                children: [(0, a.jsx)("div", {
                                    className: u.shrinkingContainer,
                                    children: (0, a.jsx)(n.animated.div, {
                                        className: u.message,
                                        style: {
                                            color: null != c ? q : x
                                        },
                                        children: null !== (t = null != c ? c : A) && void 0 !== t ? t : d.default.Messages.SETTINGS_NOTICE_MESSAGE
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: u.actions,
                                    children: [null != C && (0, a.jsx)(s.Button, {
                                        className: u.resetButton,
                                        size: s.Button.Sizes.SMALL,
                                        color: s.Button.Colors.PRIMARY,
                                        look: s.Button.Looks.LINK,
                                        onClick: C,
                                        children: (0, a.jsx)(n.animated.span, {
                                            style: {
                                                color: x
                                            },
                                            children: null != T ? T : d.default.Messages.RESET
                                        })
                                    }), null != g ? (0, a.jsx)(s.Tooltip, {
                                        text: U,
                                        children: e => (0, a.jsx)(s.Button, {
                                            size: s.Button.Sizes.SMALL,
                                            color: null != m ? m : s.Button.Colors.GREEN,
                                            submitting: f,
                                            disabled: p,
                                            onClick: g,
                                            ...e,
                                            children: null != h ? h : d.default.Messages.SAVE_CHANGES
                                        })
                                    }) : null]
                                })]
                            })
                        })
                    })
                }