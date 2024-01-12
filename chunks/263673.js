            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                l = n("126501"),
                u = n("282109"),
                r = n("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.isGuildCollapsed(e), [e]);
                return (0, s.jsx)(a.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: r.default.Messages.HIDE_MUTED_CHANNELS,
                    action: () => l.default.toggleCollapseGuild(e),
                    checked: t
                })
            }