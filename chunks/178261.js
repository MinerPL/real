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
                l = n("820542"),
                u = n("870691"),
                r = n("42203"),
                d = n("49111"),
                o = n("782340");

            function c(e) {
                let t = (0, i.useStateFromStores)([u.default, r.default], () => {
                    let t = r.default.getMutableBasicGuildChannelsForGuild(e.guild_id),
                        n = Object.values(t).filter(e => e.type === d.ChannelTypes.GUILD_CATEGORY);
                    return 0 === n.length || n.every(e => u.default.isCollapsed(e.id))
                });
                return t ? null : (0, a.jsx)(s.MenuItem, {
                    id: "collapse-all-categories",
                    label: o.default.Messages.COLLAPSE_ALL_CATEGORIES,
                    action: () => (0, l.categoryCollapseAll)(e.guild_id)
                })
            }