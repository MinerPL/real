            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("907002"),
                i = n("669491"),
                u = n("77078"),
                r = n("659500"),
                o = n("49111"),
                d = n("782340"),
                c = n("317404"),
                f = function(e) {
                    var t;
                    let {
                        message: n,
                        errorMessage: f,
                        submitting: h,
                        onReset: C,
                        onSave: m,
                        onSaveText: g,
                        onResetText: x,
                        onSaveButtonColor: S,
                        disabled: E,
                        saveButtonTooltip: T
                    } = e, p = a.useRef(null), [{
                        spring: N
                    }, I] = (0, s.useSpring)(() => ({
                        spring: 0
                    }));
                    a.useEffect(() => {
                        function e() {
                            I({
                                spring: 1,
                                config: s.config.gentle
                            }), I({
                                spring: 0,
                                config: s.config.gentle,
                                delay: 1e3
                            })
                        }
                        return r.ComponentDispatch.subscribe(o.ComponentActions.EMPHASIZE_NOTICE, e), () => {
                            r.ComponentDispatch.unsubscribe(o.ComponentActions.EMPHASIZE_NOTICE, e)
                        }
                    }, [I]);
                    let A = N.to({
                            range: [0, 1],
                            output: [(0, u.useToken)(i.default.colors.TEXT_NORMAL).hex(), (0, u.useToken)(i.default.unsafe_rawColors.WHITE_500).hex()]
                        }),
                        j = N.to({
                            range: [0, 1],
                            output: [(0, u.useToken)(i.default.colors.BACKGROUND_FLOATING).hex(), (0, u.useToken)(i.default.colors.STATUS_DANGER).hex()]
                        }),
                        M = (0, u.useToken)(i.default.colors.TEXT_DANGER).hex();
                    return (0, l.jsx)(s.animated.div, {
                        className: c.container,
                        style: {
                            backgroundColor: j
                        },
                        children: (0, l.jsx)("div", {
                            className: c.flexContainer,
                            ref: p,
                            children: (0, l.jsxs)(u.FocusRingScope, {
                                containerRef: p,
                                children: [(0, l.jsx)("div", {
                                    className: c.shrinkingContainer,
                                    children: (0, l.jsx)(s.animated.div, {
                                        className: c.message,
                                        style: {
                                            color: null != f ? M : A
                                        },
                                        children: null !== (t = null != f ? f : n) && void 0 !== t ? t : d.default.Messages.SETTINGS_NOTICE_MESSAGE
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: c.actions,
                                    children: [null != C && (0, l.jsx)(u.Button, {
                                        className: c.resetButton,
                                        size: u.Button.Sizes.SMALL,
                                        color: u.Button.Colors.PRIMARY,
                                        look: u.Button.Looks.LINK,
                                        onClick: C,
                                        children: (0, l.jsx)(s.animated.span, {
                                            style: {
                                                color: A
                                            },
                                            children: null != x ? x : d.default.Messages.RESET
                                        })
                                    }), null != m ? (0, l.jsx)(u.Tooltip, {
                                        text: T,
                                        children: e => (0, l.jsx)(u.Button, {
                                            size: u.Button.Sizes.SMALL,
                                            color: null != S ? S : u.Button.Colors.GREEN,
                                            submitting: h,
                                            disabled: E,
                                            onClick: m,
                                            ...e,
                                            children: null != g ? g : d.default.Messages.SAVE_CHANGES
                                        })
                                    }) : null]
                                })]
                            })
                        })
                    })
                }