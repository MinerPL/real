            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("907002"),
                i = n("446674"),
                r = n("413197"),
                u = n("84339"),
                o = n("485328"),
                d = n("982108"),
                c = n("561744"),
                f = n("994906"),
                h = n("249957"),
                p = n("598263"),
                m = n("789150"),
                E = n("49111");

            function C(e, t) {
                return n => {
                    if (0 === n) return "auto";
                    let a = "forwards" === t.current,
                        l = n > 0,
                        s = !1;
                    return l && a && "left" === e && (s = !0), l && !a && "right" === e && (s = !0), !l && a && "right" === e && (s = !0), !l && !a && "left" === e && (s = !0), s ? "calc(".concat(100 * Math.abs(n), "% + ").concat(Math.round(12 * Math.abs(n)), "px)") : "auto"
                }
            }

            function S(e) {
                var t, n;
                let {
                    userId: S,
                    guildId: g,
                    onClose: _,
                    className: I
                } = e, T = (0, i.useStateFromStores)([d.default], () => d.default.getGuildSidebarState(g), [g]), v = null !== (t = null == T ? void 0 : T.details.modViewPanel) && void 0 !== t ? t : m.ModViewPanel.INFO, x = (0, u.default)(S);
                let N = null == (n = v) ? null : n === m.ModViewPanel.INFO ? "backwards" : "forwards",
                    A = (0, c.default)(N),
                    {
                        reducedMotion: M
                    } = l.useContext(r.AccessibilityPreferencesContext),
                    R = l.useCallback(e => {
                        null != T && (0, f.openGuildMemberModViewSidebar)(g, S, T.baseChannelId, {
                            modViewPanel: e
                        })
                    }, [T, g, S]),
                    j = l.useMemo(() => ({
                        [E.KeybindActions.CLOSE_MODAL]: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action() {
                                v === m.ModViewPanel.INFO && _(), R(m.ModViewPanel.INFO)
                            }
                        }
                    }), [_, v, R]);
                l.useEffect(() => (o.default.enable(), o.default.enableTemp(j), () => o.default.disableTemp()), [j]);
                let L = (0, s.useTransition)(v, {
                    immediate: x !== S,
                    value: 0,
                    from: {
                        value: 1
                    },
                    enter: {
                        value: 0
                    },
                    leave: {
                        value: -1
                    }
                });
                return (0, a.jsx)(s.animated.div, {
                    style: {
                        position: "relative",
                        height: "100%",
                        flex: 1
                    },
                    children: L((e, t, n) => {
                        var l, i, r;
                        let {
                            key: u
                        } = n;
                        return (0, a.jsx)(s.animated.div, {
                            style: {
                                position: "absolute",
                                display: "flex",
                                flexDirection: "column",
                                backfaceVisibility: "hidden",
                                width: "100%",
                                height: "100%",
                                ...M.enabled ? {
                                    opacity: null === (l = e.value) || void 0 === l ? void 0 : l.to(e => 1 - Math.abs(e))
                                } : {
                                    left: null === (i = e.value) || void 0 === i ? void 0 : i.to(C("left", A)),
                                    right: null === (r = e.value) || void 0 === r ? void 0 : r.to(C("right", A))
                                }
                            },
                            children: function(e) {
                                switch (e) {
                                    case m.ModViewPanel.INFO:
                                        return (0, a.jsx)(h.default, {
                                            userId: S,
                                            guildId: g,
                                            onNavigate: R,
                                            className: I
                                        });
                                    case m.ModViewPanel.MESSAGE_HISTORY:
                                        return (0, a.jsx)(p.default, {
                                            userId: S,
                                            guildId: g,
                                            onNavigate: () => R(m.ModViewPanel.INFO),
                                            className: I
                                        });
                                    default:
                                        return null
                                }
                            }(t)
                        }, u)
                    })
                })
            }