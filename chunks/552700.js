            "use strict";
            n.r(t), n.d(t, {
                AudienceEmptyTile: function() {
                    return N
                },
                default: function() {
                    return A
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                u = n.n(r),
                o = n("446674"),
                d = n("669491"),
                c = n("77078"),
                f = n("272030"),
                h = n("244201"),
                p = n("506885"),
                m = n("981601"),
                E = n("26989"),
                C = n("328275"),
                S = n("118503"),
                g = n("711486"),
                _ = n("387111"),
                I = n("808422"),
                T = n("5668");
            let v = l.memo(function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        user: l,
                        isPremium: s,
                        isBlocked: i
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: T.textContainer,
                        children: [i ? (0, a.jsx)(C.default, {
                            className: T.blockedIcon,
                            color: d.default.unsafe_rawColors.RED_400.css
                        }) : null, (0, a.jsx)(c.Text, {
                            className: T.text,
                            variant: "text-sm/normal",
                            color: "header-primary",
                            children: _.default.getName(t, n, l)
                        }), s ? (0, a.jsx)(S.default, {
                            className: T.boost,
                            color: d.default.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                        }) : null]
                    })
                }),
                x = l.memo(function(e) {
                    var t;
                    let {
                        participant: n,
                        guildId: l,
                        channel: s,
                        isPremium: r
                    } = e, {
                        user: u,
                        blocked: o,
                        rtsState: d
                    } = n, c = d === I.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK, f = d === I.RequestToSpeakStates.REQUESTED_TO_SPEAK || c;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: T.avatarContainer,
                            children: [f && (0, a.jsx)(g.default, {
                                className: i(T.icon, {
                                    [T.invited]: c
                                })
                            }), (0, a.jsx)("img", {
                                src: null !== (t = u.getAvatarURL(s.guild_id, 56, !1)) && void 0 !== t ? t : void 0,
                                alt: u.username,
                                "aria-label": u.username,
                                className: i(T.avatar, {
                                    [T.faded]: o
                                })
                            })]
                        }), (0, a.jsx)(v, {
                            guildId: l,
                            channelId: s.id,
                            user: u,
                            isPremium: r,
                            isBlocked: o
                        })]
                    })
                }),
                N = () => (0, a.jsx)("div", {
                    className: T.tileBaseContainer
                });
            var A = l.memo(function(e) {
                let {
                    participant: t,
                    channel: s
                } = e, {
                    user: r,
                    blocked: d
                } = t, C = s.getGuildId(), S = (0, h.useAppContext)(), g = (0, o.useStateFromStores)([E.default], () => {
                    var e;
                    return null != C && (null === (e = E.default.getMember(C, r.id)) || void 0 === e ? void 0 : e.premiumSince) != null
                }, [C, r.id]);
                u(null != C, "Channel cannot be guildless");
                let _ = l.useCallback(e => {
                        (0, f.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("834247").then(n.bind(n, "834247"));
                            return t => (0, a.jsx)(e, {
                                ...t,
                                user: r,
                                guildId: C,
                                channel: s,
                                showMediaItems: !0,
                                showStageChannelItems: !0,
                                showChatItems: !1
                            })
                        }, {
                            context: S
                        })
                    }, [r, C, s, S]),
                    I = l.useCallback(e => (0, a.jsx)(m.default, {
                        ...e,
                        guildId: C,
                        channelId: s.id,
                        userId: r.id
                    }), [s.id, C, r.id]);
                return (0, a.jsx)(c.Popout, {
                    preload: () => (0, p.default)(r.id, r.getAvatarURL(s.guild_id, 80), {
                        guildId: s.guild_id,
                        channelId: s.id
                    }),
                    renderPopout: I,
                    position: "right",
                    spacing: 8,
                    children: e => (0, a.jsx)(c.Clickable, {
                        className: i(T.tileContainer, {
                            [T.singleIcon]: g || d,
                            [T.doubleIcon]: g && d
                        }),
                        onContextMenu: _,
                        ...e,
                        children: (0, a.jsx)(x, {
                            participant: t,
                            guildId: C,
                            channel: s,
                            isPremium: g
                        })
                    })
                })
            })