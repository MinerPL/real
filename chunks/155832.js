            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("289867"),
                i = n("716241"),
                r = n("982108"),
                o = n("162771"),
                u = n("155207"),
                d = n("664336"),
                c = n("49111"),
                f = n("782340");

            function h(e) {
                let {
                    channelId: t
                } = e, n = (0, l.useStateFromStores)([r.default], () => r.default.getSection(t)), h = (0, l.useStateFromStores)([o.default], () => o.default.getGuildId()), p = n === c.ChannelSections.MEMBERS;
                return (0, a.jsx)(d.Icon, {
                    tooltip: p ? f.default.Messages.MEMBER_LIST_SHOWN : f.default.Messages.MEMBER_LIST_HIDDEN,
                    icon: u.default,
                    onClick: () => {
                        i.default.trackWithMetadata(c.AnalyticEvents.MEMBER_LIST_TOGGLED, {
                            channel_id: t,
                            guild_id: h,
                            member_list_open: !p
                        }), s.default.toggleMembersSection()
                    },
                    selected: p
                })
            }