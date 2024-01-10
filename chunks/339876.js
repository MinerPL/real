            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("498139"),
                u = n("629220"),
                r = n("512395"),
                o = n("282109"),
                d = n("49111"),
                f = n("782340");

            function c(e) {
                let {
                    isFavoritesPerk: t
                } = (0, l.useFavoritesServerExperiment)("useChannelOptInItems"), n = (0, r.useOptInEnabledForGuild)(e.guild_id), c = (0, i.useStateFromStores)([o.default], () => o.default.isChannelOptedIn(e.guild_id, e.id)), E = (0, i.useStateFromStores)([o.default], () => null != e.parent_id && o.default.isChannelOptedIn(e.guild_id, e.parent_id)), _ = (0, i.useStateFromStores)([o.default], () => o.default.isFavorite(e.guild_id, e.id)), N = () => {
                    (0, u.setOptInChannel)(e.guild_id, e.id, !c, {
                        section: d.AnalyticsSections.CONTEXT_MENU
                    })
                }, g = () => {
                    null != e.parent_id && (0, u.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                        section: d.AnalyticsSections.CONTEXT_MENU
                    })
                };
                if (!n || e.isThread()) return null;
                if (e.isCategory()) return (0, a.jsx)(s.MenuItem, {
                    id: "opt-into-category",
                    label: c ? f.default.Messages.CHANNEL_OPT_OUT : f.default.Messages.CHANNEL_OPT_IN,
                    action: () => N()
                });
                let C = _ ? f.default.Messages.REMOVE_FAVORITE : f.default.Messages.ADD_FAVORITE,
                    M = _ ? f.default.Messages.UNPIN_CHANNEL : f.default.Messages.PIN_CHANNEL_TO_TOP;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: t ? M : C,
                        action: () => {
                            (0, u.setIsFavorite)(e.guild_id, e.id, !_, {
                                section: d.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), E ? (0, a.jsx)(s.MenuItem, {
                        id: "opt-out-category",
                        label: f.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => g()
                    }) : (0, a.jsx)(s.MenuItem, {
                        id: "opt-into-channel",
                        label: c ? f.default.Messages.CHANNEL_OPT_OUT : f.default.Messages.CHANNEL_OPT_IN,
                        action: () => N()
                    })]
                })
            }