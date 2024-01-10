            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("498139"),
                u = n("629220"),
                r = n("512395"),
                d = n("282109"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    isFavoritesPerk: t
                } = (0, l.useFavoritesServerExperiment)("useChannelOptInItems"), n = (0, r.useOptInEnabledForGuild)(e.guild_id), f = (0, i.useStateFromStores)([d.default], () => d.default.isChannelOptedIn(e.guild_id, e.id)), _ = (0, i.useStateFromStores)([d.default], () => null != e.parent_id && d.default.isChannelOptedIn(e.guild_id, e.parent_id)), E = (0, i.useStateFromStores)([d.default], () => d.default.isFavorite(e.guild_id, e.id)), N = () => {
                    (0, u.setOptInChannel)(e.guild_id, e.id, !f, {
                        section: o.AnalyticsSections.CONTEXT_MENU
                    })
                }, g = () => {
                    null != e.parent_id && (0, u.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                        section: o.AnalyticsSections.CONTEXT_MENU
                    })
                };
                if (!n || e.isThread()) return null;
                if (e.isCategory()) return (0, a.jsx)(s.MenuItem, {
                    id: "opt-into-category",
                    label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
                    action: () => N()
                });
                let M = E ? c.default.Messages.REMOVE_FAVORITE : c.default.Messages.ADD_FAVORITE,
                    S = E ? c.default.Messages.UNPIN_CHANNEL : c.default.Messages.PIN_CHANNEL_TO_TOP;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: t ? S : M,
                        action: () => {
                            (0, u.setIsFavorite)(e.guild_id, e.id, !E, {
                                section: o.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), _ ? (0, a.jsx)(s.MenuItem, {
                        id: "opt-out-category",
                        label: c.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => g()
                    }) : (0, a.jsx)(s.MenuItem, {
                        id: "opt-into-channel",
                        label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
                        action: () => N()
                    })]
                })
            }