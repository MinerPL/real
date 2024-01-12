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
                l = n("952451"),
                u = n("542827"),
                r = n("782340");

            function o(e, t) {
                let n = e.id,
                    o = (0, i.useStateFromStores)([l.default], () => l.default.getGuildHasUnreadIgnoreMuted(n), [n]);
                return (0, s.jsx)(a.MenuItem, {
                    id: "mark-guild-read",
                    label: r.default.Messages.MARK_AS_READ,
                    icon: void 0,
                    action: () => (0, u.default)([n], t.section),
                    disabled: !o
                })
            }