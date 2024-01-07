            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
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
                I = n("719832");

            function N(e) {
                let {
                    action: t
                } = e, n = (0, o.default)([h.default], () => h.default.getChannel(t.channelId)), a = (0, c.default)(n, !0);
                return null == n ? (0, s.jsx)(u.Text, {
                    variant: "text-xxs/normal",
                    color: "header-secondary",
                    children: M.default.Messages.IN_CHANNEL.format({
                        channelName: M.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER
                    })
                }) : (0, s.jsx)(u.Text, {
                    variant: "text-xxs/normal",
                    color: "header-secondary",
                    children: M.default.Messages.IN_CHANNEL.format({
                        channelName: a
                    })
                })
            }

            function L(e) {
                var t;
                let {
                    channelId: n,
                    emojiId: a,
                    emojiName: l
                } = e, i = (0, o.default)([h.default], () => h.default.getChannel(n));
                if (null == i) return null;
                let r = null !== (t = (0, f.getChannelIconComponent)(i)) && void 0 !== t ? t : m.default;
                return (0, s.jsx)(T.default, {
                    emojiId: a,
                    emojiName: l,
                    size: T.CTAEmojiSize.MEDIUM,
                    defaultComponent: (0, s.jsx)(r, {
                        className: I.channelIcon
                    })
                })
            }

            function v(e) {
                var t, n, l, c;
                let {
                    guildId: f,
                    channel: h,
                    className: C
                } = e, {
                    channelAction: m,
                    completed: A
                } = (0, _.useMemberActionsForChannel)(f, h), T = (0, _.useNextMemberAction)(f, null == m ? void 0 : m.channelId), v = (0, o.default)([d.default], () => d.default.useReducedMotion), x = (null == m ? void 0 : m.actionType) === S.NewMemberActionTypes.VIEW, R = (0, u.useToken)(u.tokens.colors.WHITE), [y, D] = a.useState(!1), [O] = a.useState(new r.default.Value(0)), [j] = a.useState(new r.default.Value(0));
                a.useEffect(() => {
                    A ? r.default.timing(O, {
                        toValue: 0,
                        duration: v ? 1 : 350,
                        easing: r.default.Easing.quad,
                        delay: x ? 0 : 500
                    }).start(() => D(!0)) : r.default.timing(O, {
                        toValue: 1,
                        duration: v ? 1 : 350,
                        easing: r.default.Easing.quad,
                        delay: 400
                    }).start()
                }, [A, O, x, v]), a.useEffect(() => {
                    A && y && r.default.timing(j, {
                        toValue: 1,
                        duration: v ? 0 : 350,
                        easing: r.default.Easing.quad,
                        delay: 400
                    }).start()
                }, [A, j, y, v]);
                let b = a.useCallback(() => {
                    null != T && (0, g.selectNewMemberActionChannel)(f, T.channelId)
                }, [f, T]);
                return null == m || x && !y ? null : (0, s.jsx)("div", {
                    className: i(I.container, C),
                    children: y && null != T ? (0, s.jsx)(r.default.div, {
                        style: {
                            marginBottom: j.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-60, 0]
                            })
                        },
                        children: (0, s.jsxs)(u.Clickable, {
                            className: i(I.banner, I.clickable),
                            onClick: b,
                            children: [(0, s.jsx)(L, {
                                channelId: T.channelId,
                                emojiId: null === (t = T.emoji) || void 0 === t ? void 0 : t.id,
                                emojiName: null == T ? void 0 : null === (n = T.emoji) || void 0 === n ? void 0 : n.name
                            }), (0, s.jsxs)("div", {
                                className: I.text,
                                children: [(0, s.jsx)(u.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: M.default.Messages.MEMBER_ACTIONS_NEXT_STEP.format({
                                        step: T.title
                                    })
                                }), (0, s.jsx)(N, {
                                    action: T
                                })]
                            }), (0, s.jsx)("div", {
                                className: I.iconCircle,
                                children: (0, s.jsx)(p.default, {
                                    width: 16,
                                    height: 16,
                                    color: R.hex(),
                                    className: I.nextIcon
                                })
                            })]
                        })
                    }) : (0, s.jsxs)(r.default.div, {
                        className: I.banner,
                        style: {
                            marginBottom: O.interpolate({
                                inputRange: [0, 1],
                                outputRange: [-60, 0]
                            })
                        },
                        children: [(0, s.jsx)(L, {
                            channelId: m.channelId,
                            emojiId: null === (l = m.emoji) || void 0 === l ? void 0 : l.id,
                            emojiName: null == m ? void 0 : null === (c = m.emoji) || void 0 === c ? void 0 : c.name
                        }), (0, s.jsxs)("div", {
                            className: I.text,
                            children: [(0, s.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: m.title
                            }), (0, s.jsx)(u.Text, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                children: M.default.Messages.MEMBER_ACTION_CHAT
                            })]
                        }), A ? (0, s.jsx)(E.default, {
                            className: I.completed,
                            backgroundColor: R.hex(),
                            width: 20,
                            height: 20
                        }) : null]
                    })
                })
            }

            function x(e) {
                let {
                    guildId: t,
                    channel: n,
                    className: a
                } = e, l = (0, A.useCanSeeOnboardingHome)(t), i = (0, o.default)([C.default], () => {
                    var e;
                    return (null === (e = C.default.getSelfMember(t)) || void 0 === e ? void 0 : e.isPending) === !0
                }), r = (0, _.useAllActionsCompleted)(t);
                return r || i || !l ? null : (0, s.jsx)(v, {
                    guildId: t,
                    channel: n,
                    className: a
                })
            }