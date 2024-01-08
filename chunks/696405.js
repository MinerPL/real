            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                u = n("77078"),
                o = n("174727"),
                d = n("788220"),
                c = n("515496"),
                f = n("568088"),
                h = n("624567"),
                p = n("49111"),
                m = n("143561"),
                E = e => {
                    let {
                        channel: t,
                        className: n
                    } = e, {
                        isHovered: s,
                        setIsHovered: E,
                        onMouseEnter: C,
                        onMouseLeave: S,
                        cancelTimers: g
                    } = (0, d.default)(200, 300), [_, I] = l.useState(!1), T = (0, r.useStateFromStores)([f.default], () => f.default.effectCooldownEndTime), v = l.useMemo(() => null != T ? (T.getTime() - Date.now()) / 1e3 : 0, [T]), {
                        seconds: x
                    } = (0, o.default)(null != T ? T : new Date), N = x > 0, A = l.useCallback(e => {
                        if ("focus" !== e.type) !_ && !N && C()
                    }, [_, N, C]), M = l.useCallback(() => {
                        !_ && S()
                    }, [S, _]), R = l.useCallback((e, t) => {
                        g(), I(!_), (!s || _) && (null == t || t(e))
                    }, [g, _, s]), j = s || _;
                    return (0, a.jsx)(u.Popout, {
                        shouldShow: j,
                        animationPosition: "bottom",
                        position: "bottom",
                        align: "center",
                        spacing: 16,
                        onRequestClose: () => {
                            E(!1), I(!1)
                        },
                        renderPopout: e => {
                            let {
                                closePopout: n
                            } = e;
                            return (0, a.jsx)(h.default, {
                                isHovered: j,
                                channel: t,
                                closePopout: n,
                                onMouseEnter: C,
                                onMouseLeave: M,
                                onFocus: () => I(!0)
                            })
                        },
                        children: e => {
                            let {
                                onClick: t,
                                onKeyDown: l
                            } = e;
                            return (0, a.jsx)(c.default, {
                                isCenterButton: !0,
                                totalCooldownSeconds: v,
                                remainingCooldownSeconds: x,
                                className: i(m.controlButton, n),
                                onKeyDown: e => {
                                    var t, n;
                                    return t = e, n = l, void(t.keyCode === p.KeyboardKeys.ENTER && t.keyCode === p.KeyboardKeys.SPACE && R(t, n))
                                },
                                onClick: e => {
                                    R(e, t)
                                },
                                onMouseEnter: A,
                                onMouseLeave: M,
                                isActive: j
                            })
                        }
                    })
                }