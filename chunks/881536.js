            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("77078"),
                r = n("367376"),
                o = n("560176"),
                u = n("304198"),
                d = n("388142"),
                c = n("49111"),
                f = n("782340"),
                m = n("19676");

            function E(e) {
                let {
                    message: t,
                    channel: s,
                    compact: r
                } = e, o = null != t.embeds && t.embeds.length > 0;
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(u.default, {
                        className: l(m.mainContainer, {
                            [m.compact]: r
                        }),
                        icon: n("127067"),
                        compact: r,
                        children: (0, a.jsx)("div", {
                            className: l(m.content, {
                                [m.compact]: r
                            }),
                            children: (0, a.jsx)("div", {
                                className: l(m.messageContent, {
                                    [m.compact]: r
                                }),
                                children: t.content
                            })
                        })
                    }), (0, a.jsx)("div", {
                        className: l(m.embedContent, {
                            [m.compact]: r
                        }),
                        children: (0, a.jsx)(_, {
                            message: t
                        })
                    }), (0, a.jsx)("div", {
                        className: m.actions,
                        children: (0, a.jsx)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            onClick: () => {
                                o ? (0, d.updateGamingStats)(t) : (0, d.sendGamingStatsMessage)(s.guild_id, s.id, t.id)
                            },
                            children: f.default.Messages.SYSTEM_MESSAGE_GET_GAMING_STATS
                        })
                    })]
                })
            }

            function _(e) {
                var t;
                let {
                    message: n
                } = e, [s] = null !== (t = n.embeds) && void 0 !== t ? t : [];
                return null == s ? null : (0, a.jsx)(o.default, {
                    className: m.embed,
                    embed: s,
                    renderTitle: (e, t) => r.default.parseEmbedTitle(t, !0, {
                        channelId: n.channel_id
                    }),
                    renderDescription: (e, t, a) => r.default.parse(t, !0, {
                        channelId: n.channel_id
                    }),
                    autoPlayGif: !1,
                    renderImageComponent: e => (0, c.NOOP_NULL)(),
                    renderVideoComponent: e => (0, c.NOOP_NULL)(),
                    renderLinkComponent: e => (0, c.NOOP_NULL)()
                })
            }