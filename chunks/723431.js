            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("793237"),
                i = n("347738"),
                r = n("909004"),
                u = n("664336"),
                o = n("599110"),
                d = n("49111"),
                c = n("995307"),
                f = n("782340");

            function h(e) {
                let {
                    channel: t
                } = e, n = (0, l.useStateFromStores)([i.default], () => i.default.shouldShowTopicsBar());
                return (0, a.jsx)(u.default.Icon, {
                    icon: r.default,
                    onClick: () => {
                        o.default.track(d.AnalyticEvents.SUMMARIES_SIDEBAR_TOGGLED, {
                            summaries_sidebar_open: !n,
                            source: c.SummariesSidebarToggledSource.TOOLBAR_BUTTON,
                            guild_id: t.guild_id,
                            channel_id: t.id,
                            channel_type: t.type
                        }), (0, s.toggleTopicsBar)()
                    },
                    tooltip: n ? f.default.Messages.SUMMARIES_SHOWN : f.default.Messages.SUMMARIES_HIDDEN,
                    selected: n,
                    "aria-expanded": n
                })
            }