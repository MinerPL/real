            "use strict";
            a.r(t), a.d(t, {
                MIN_GUILD_HOME_PAGE_WIDTH: function() {
                    return o
                },
                default: function() {
                    return c
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("446674"),
                s = a("665182"),
                i = a("462998"),
                d = a("982108"),
                r = a("49111"),
                u = a("724210");
            let o = 656;

            function c(e) {
                let {
                    pageWidth: t,
                    onSidebarResize: a
                } = e, c = (0, n.useStateFromStores)([d.default], () => d.default.getSidebarState(u.StaticChannelRoute.GUILD_HOME));
                if (null == c || null == c.channelId) return null;
                let f = t - r.CHANNEL_SIDEBAR_WIDTH - o;
                return (0, l.jsx)(s.default, {
                    sidebarType: s.ChatSidebarType.HomeSidebar,
                    maxWidth: f,
                    onWidthChange: a,
                    children: (0, l.jsx)(i.default, {
                        channelId: c.channelId,
                        baseChannelId: u.StaticChannelRoute.GUILD_HOME,
                        channelViewSource: "Home View",
                        isResourceChannelView: !0
                    })
                })
            }