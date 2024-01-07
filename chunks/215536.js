            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("272030"),
                u = n("899633"),
                d = n("244201"),
                c = n("506885"),
                f = n("981601"),
                h = n("533403"),
                p = n("315102"),
                m = n("324328");

            function E(e) {
                let {
                    channel: t,
                    speaker: s,
                    className: h
                } = e, E = (0, d.useAppContext)(), {
                    reducedMotion: C
                } = l.useContext(r.AccessibilityPreferencesContext), g = (0, u.default)({
                    userId: s.id
                }), S = null != s.member ? (0, p.getGuildMemberAvatarURL)(s.member) : null, _ = e => {
                    (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("834247").then(n.bind(n, "834247"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            user: s.user,
                            guildId: t.guild_id,
                            channel: t,
                            showMediaItems: !0,
                            showStageChannelItems: !0,
                            showChatItems: !1
                        })
                    }, {
                        context: E
                    })
                };
                return (0, a.jsx)(r.Popout, {
                    preload: () => (0, c.default)(s.user.id, s.user.getAvatarURL(t.guild_id, 80), {
                        guildId: t.guild_id,
                        channelId: t.id
                    }),
                    renderPopout: e => (0, a.jsx)(f.default, {
                        ...e,
                        guildId: t.guild_id,
                        channelId: t.id,
                        userId: s.id
                    }),
                    position: "right",
                    spacing: 8,
                    children: e => (0, a.jsx)(r.Tooltip, {
                        text: s.userNick,
                        position: "bottom",
                        children: n => (0, a.jsx)(r.Clickable, {
                            ...n,
                            ...e,
                            onClick: t => {
                                t.stopPropagation(), e.onClick(t)
                            },
                            onContextMenu: _,
                            children: (0, a.jsx)(r.Avatar, {
                                src: null != S ? S : s.user.getAvatarURL(t.guild_id, 24),
                                size: r.AvatarSizes.SIZE_24,
                                className: i(m.avatar, h),
                                "aria-label": s.userNick,
                                isSpeaking: g && !C.enabled
                            })
                        })
                    })
                })
            }

            function C(e) {
                let {
                    speakers: t,
                    channel: n
                } = e;
                return (0, a.jsx)(h.default, {
                    className: m.summary,
                    guildId: n.guild_id,
                    users: t,
                    max: 10,
                    renderUser: (e, t, l) => (0, a.jsx)(E, {
                        channel: n,
                        speaker: e,
                        className: t
                    }, l),
                    renderMoreUsers: (e, t, n) => (0, a.jsx)("div", {
                        className: i(m.speakers, t),
                        children: e
                    }, n)
                })
            }