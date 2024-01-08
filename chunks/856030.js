            "use strict";
            n.r(t), n.d(t, {
                useSafetyWarningsItem: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                r = n("77078"),
                s = n("277734"),
                a = n("764828"),
                o = n("697218"),
                u = n("782340");

            function d(e) {
                let t = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                    n = (0, l.useStateFromStores)([a.default], () => a.default.getChannelSafetyWarnings(e.id));
                return (null == t ? void 0 : t.isStaff()) !== !0 || null == n || 0 === n.length ? null : (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(r.MenuItem, {
                        id: "clear-safety-warnings",
                        label: u.default.Messages.STRANGER_DANGER_CONTEXT_MENU_CLEAR,
                        action: () => (0, s.clearChannelSafetyWarnings)(e.id)
                    })
                })
            }