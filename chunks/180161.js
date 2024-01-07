            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("272030"),
                i = n("987317"),
                r = n("765089"),
                o = n("361572"),
                u = n("537325"),
                d = n("233069"),
                c = n("42203"),
                m = n("305961"),
                f = n("666897"),
                h = n("848825"),
                p = n("794818"),
                g = n("844659"),
                E = n("49111");
            async function v(e, t, n) {
                if (null == t) return;
                if (r.default.trackDiscordLinkClicked({
                        guildId: e,
                        channelId: t,
                        messageId: n
                    }), null != e) {
                    let n = m.default.getGuild(e);
                    if ((null == n ? void 0 : n.joinedAt) == null) try {
                        await p.startLurking(e, {}, {
                            channelId: t
                        });
                        return
                    } catch {}
                }
                let l = c.default.getChannel(t);
                if (null != l && null == n && (0, d.isGuildVocalChannelType)(l.type) && (0, o.canViewChannel)(l)) {
                    i.default.selectVoiceChannel(l.id);
                    return
                }(0, u.default)(E.Routes.CHANNEL(e, t, n))
            }

            function C(e) {
                return {
                    react(t, i, r) {
                        let o = c.default.getChannel(t.channelId),
                            u = r.noStyleAndInteraction ? void 0 : n => {
                                e.shouldStopPropagation && (null == n || n.stopPropagation()), v(t.guildId, t.channelId, t.messageId), e.shouldCloseDefaultModals && (0, a.closeAllModals)()
                            },
                            d = r.noStyleAndInteraction || null == t.channelId || null == o && null == t.originalLink ? E.NOOP : e => {
                                (0, s.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await n.el("454000").then(n.bind(n, "454000"));
                                    return n => {
                                        var a;
                                        return (0, l.jsx)(e, {
                                            ...n,
                                            channel: o,
                                            channelId: null !== (a = null == o ? void 0 : o.id) && void 0 !== a ? a : t.channelId,
                                            originalLink: t.originalLink,
                                            messageId: t.messageId
                                        })
                                    }
                                })
                            };
                        return (0, l.jsxs)(f.default, {
                            role: "link",
                            onClick: u,
                            onContextMenu: d,
                            className: "channelMention",
                            children: [null != t.inContent ? i(t.inContent, r) : null, null != t.inContent ? (0, l.jsx)(h.default, {}) : null, (0, g.smartOutput)(t, i, r)]
                        }, r.key)
                    }
                }
            }