            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("458960"),
                o = n("65597"),
                u = n("77078"),
                d = n("206230"),
                c = n("679653"),
                f = n("419830"),
                h = n("42203"),
                C = n("26989"),
                p = n("538137"),
                m = n("593195"),
                E = n("578706"),
                g = n("347895"),
                S = n("129092"),
                _ = n("726274"),
                A = n("290886"),
                T = n("205454"),
                M = n("782340"),
                N = n("719832");

            function I(e) {
                let {
                    action: t
                } = e, n = (0, o.default)([h.default], () => h.default.getChannel(t.channelId)), s = (0, c.default)(n, !0);
                return null == n ? (0, a.jsx)(u.Text, {
                    variant: "text-xxs/normal",
                    color: "header-secondary",
                    children: M.default.Messages.IN_CHANNEL.format({
                        channelName: M.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER
                    })
                }) : (0, a.jsx)(u.Text, {
                    variant: "text-xxs/normal",
                    color: "header-secondary",
                    children: M.default.Messages.IN_CHANNEL.format({
                        channelName: s
                    })
                })
            }

            function v(e) {
                var t;
                let {
                    channelId: n,
                    emojiId: s,
                    emojiName: l
                } = e, i = (0, o.default)([h.default], () => h.default.getChannel(n));
                if (null == i) return null;
                let r = null !== (t = (0, f.getChannelIconComponent)(i)) && void 0 !== t ? t : m.default;
                return (0, a.jsx)(T.default, {
                    emojiId: s,
                    emojiName: l,
                    size: T.CTAEmojiSize.MEDIUM,
                    defaultComponent: (0, a.jsx)(r, {
                        className: N.channelIcon
                    })
                })
            }

            function L(e) {
                var t, n, l, c;
                let {
                    guildId: f,
                    channel: h,
                    className: C
                } = e, {
                    channelAction: m,
                    completed: A
                } = (0, _.useMemberActionsForChannel)(f, h), T = (0, _.useNextMemberAction)(f, null == m ? void 0 : m.channelId), L = (0, o.default)([d.default], () => d.default.useReducedMotion), R = (null == m ? void 0 : m.actionType) === S.NewMemberActionTypes.VIEW, x = (0, u.useToken)(u.tokens.colors.WHITE), [y, O] = s.useState(!1), [D] = s.useState(new r.default.Value(0)), [j] = s.useState(new r.default.Value(0));
                s.useEffect(() => {
                    A ? r.default.timing(D, {
                        toValue: 0,
                        duration: L ? 1 : 350,
                        easing: r.default.Easing.quad,
                        delay: R ? 0 : 500
                    }).start(() => O(!0)) : r.default.timing(D, {
                        toValue: 1,
                        duration: L ? 1 : 350,
                        easing: r.default.Easing.quad,
                        delay: 400
                    }).start()
                }, [A, D, R, L]), s.useEffect(() => {
                    A && y && r.default.timing(j, {
                        toValue: 1,
                        duration: L ? 0 : 350,
                        easing: r.default.Easing.quad,
                        delay: 400
                    }).start()
                }, [A, j, y, L]);
                let b = s.useCallback(() => {
                    null != T && (0, g.selectNewMemberActionChannel)(f, T.channelId)
                }, [f, T]);
                return null == m || R && !y ? null : (0, a.jsx)("div", {
                    className: i(N.container, C),
                    children: y && null != T ? (0, a.jsx)(r.default.div, {
                        style: {
                            marginBottom: j.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-60, 0]
                            })
                        },
                        children: (0, a.jsxs)(u.Clickable, {
                            className: i(N.banner, N.clickable),
                            onClick: b,
                            children: [(0, a.jsx)(v, {
                                channelId: T.channelId,
                                emojiId: null === (t = T.emoji) || void 0 === t ? void 0 : t.id,
                                emojiName: null == T ? void 0 : null === (n = T.emoji) || void 0 === n ? void 0 : n.name
                            }), (0, a.jsxs)("div", {
                                className: N.text,
                                children: [(0, a.jsx)(u.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: M.default.Messages.MEMBER_ACTIONS_NEXT_STEP.format({
                                        step: T.title
                                    })
                                }), (0, a.jsx)(I, {
                                    action: T
                                })]
                            }), (0, a.jsx)("div", {
                                className: N.iconCircle,
                                children: (0, a.jsx)(p.default, {
                                    width: 16,
                                    height: 16,
                                    color: x.hex(),
                                    className: N.nextIcon
                                })
                            })]
                        })
                    }) : (0, a.jsxs)(r.default.div, {
                        className: N.banner,
                        style: {
                            marginBottom: D.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-60, 0]
                            })
                        },
                        children: [(0, a.jsx)(v, {
                            channelId: m.channelId,
                            emojiId: null === (l = m.emoji) || void 0 === l ? void 0 : l.id,
                            emojiName: null == m ? void 0 : null === (c = m.emoji) || void 0 === c ? void 0 : c.name
                        }), (0, a.jsxs)("div", {
                            className: N.text,
                            children: [(0, a.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: m.title
                            }), (0, a.jsx)(u.Text, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                children: M.default.Messages.MEMBER_ACTION_CHAT
                            })]
                        }), A ? (0, a.jsx)(E.default, {
                            className: N.completed,
                            backgroundColor: x.hex(),
                            width: 20,
                            height: 20
                        }) : null]
                    })
                })
            }

            function R(e) {
                let {
                    guildId: t,
                    channel: n,
                    className: s
                } = e, l = (0, A.useCanSeeOnboardingHome)(t), i = (0, o.default)([C.default], () => {
                    var e;
                    return (null === (e = C.default.getSelfMember(t)) || void 0 === e ? void 0 : e.isPending) === !0
                }), r = (0, _.useAllActionsCompleted)(t);
                return r || i || !l ? null : (0, a.jsx)(L, {
                    guildId: t,
                    channel: n,
                    className: s
                })
            }