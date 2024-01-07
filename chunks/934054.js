            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            }), l("881410");
            var n = l("37983");
            l("884691");
            var a = l("414456"),
                s = l.n(a),
                r = l("917351"),
                i = l.n(r),
                u = l("446674"),
                o = l("77078"),
                d = l("923959"),
                c = l("305961"),
                f = l("957255"),
                m = l("677099"),
                S = l("476263"),
                C = l("461380"),
                E = l("223913"),
                h = l("644169"),
                _ = l("782340"),
                p = l("770420"),
                g = l("305013");

            function N(e) {
                let {
                    guildId: t,
                    onClick: l
                } = e, a = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(t)), s = (0, u.useStateFromStores)([d.default, c.default, f.default], () => d.default.getChannels(t)[d.GUILD_VOCAL_CHANNELS_KEY].some(e => {
                    let {
                        channel: t
                    } = e;
                    return (0, E.canStreamInChannel)(t, c.default, f.default)
                }));
                return null != a && s ? (0, n.jsxs)(o.Clickable, {
                    onClick: () => l(t),
                    className: g.guildRow,
                    children: [(0, n.jsx)(S.default, {
                        guild: a,
                        size: S.default.Sizes.SMALL,
                        className: g.guildIcon
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: g.guildName,
                        children: a.toString()
                    }), (0, n.jsx)(C.default, {
                        direction: C.default.Directions.RIGHT,
                        className: g.guildArrow
                    })]
                }) : null
            }

            function I(e) {
                let {
                    onSelectGuild: t
                } = e, l = (0, u.useStateFromStores)([m.default], () => m.default.getGuildFolders());
                return (0, n.jsx)(h.default, {
                    title: _.default.Messages.GO_LIVE_MODAL_SELECT_GUILD_FORM_TITLE,
                    scrollerClassName: s(g.guildScroller, p.marginBottom),
                    children: i.flatMap(l, e => {
                        let {
                            guildIds: l
                        } = e;
                        return l.map(e => (0, n.jsx)(N, {
                            guildId: e,
                            onClick: t
                        }, e))
                    })
                })
            }