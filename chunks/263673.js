            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                l = n("126501"),
                u = n("282109"),
                o = n("782340");

            function d(e) {
                let t = (0, s.useStateFromStores)([u.default], () => u.default.isGuildCollapsed(e), [e]);
                return (0, i.jsx)(a.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: o.default.Messages.HIDE_MUTED_CHANNELS,
                    action: () => l.default.toggleCollapseGuild(e),
                    checked: t
                })
            }