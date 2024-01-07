            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            }), a("222007");
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                i = a("77078"),
                u = a("568307"),
                r = a("535974"),
                d = a("780009"),
                s = a("49111"),
                c = a("782340");

            function o(e) {
                let t = (0, l.useStateFromStores)([u.default], () => u.default.getRunningVerifiedApplicationIds().includes(e.id), [e.id]),
                    [a, o] = (0, l.useStateFromStoresArray)([r.default], () => [r.default.isUpToDate(e.id, e.branchId), r.default.shouldPatch(e.id, e.branchId)], [e.branchId, e.id]);
                return a && !t && o ? (0, n.jsx)(i.MenuItem, {
                    id: "repair",
                    label: c.default.Messages.APPLICATION_CONTEXT_MENU_REPAIR,
                    action: () => d.repairApplication(e.id, e.branchId, s.AnalyticsLocations.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
                }) : null
            }