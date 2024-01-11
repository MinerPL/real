            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                u = n("498139"),
                s = n("629220"),
                r = n("512395"),
                d = n("282109"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    isFavoritesPerk: t
                } = (0, u.useFavoritesServerExperiment)("useChannelOptInItems"), n = (0, r.useOptInEnabledForGuild)(e.guild_id), f = (0, l.useStateFromStores)([d.default], () => d.default.isChannelOptedIn(e.guild_id, e.id)), _ = (0, l.useStateFromStores)([d.default], () => null != e.parent_id && d.default.isChannelOptedIn(e.guild_id, e.parent_id)), E = (0, l.useStateFromStores)([d.default], () => d.default.isFavorite(e.guild_id, e.id)), p = () => {
                    (0, s.setOptInChannel)(e.guild_id, e.id, !f, {
                        section: o.AnalyticsSections.CONTEXT_MENU
                    })
                }, C = () => {
                    null != e.parent_id && (0, s.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                        section: o.AnalyticsSections.CONTEXT_MENU
                    })
                };
                if (!n || e.isThread()) return null;
                if (e.isCategory()) return (0, a.jsx)(i.MenuItem, {
                    id: "opt-into-category",
                    label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
                    action: () => p()
                });
                let h = E ? c.default.Messages.REMOVE_FAVORITE : c.default.Messages.ADD_FAVORITE,
                    N = E ? c.default.Messages.UNPIN_CHANNEL : c.default.Messages.PIN_CHANNEL_TO_TOP;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: t ? N : h,
                        action: () => {
                            (0, s.setIsFavorite)(e.guild_id, e.id, !E, {
                                section: o.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), _ ? (0, a.jsx)(i.MenuItem, {
                        id: "opt-out-category",
                        label: c.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => C()
                    }) : (0, a.jsx)(i.MenuItem, {
                        id: "opt-into-channel",
                        label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
                        action: () => p()
                    })]
                })
            }