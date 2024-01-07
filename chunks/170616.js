            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return I
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                i = a("77078"),
                u = a("711115"),
                r = a("568307"),
                d = a("677225"),
                s = a("535974"),
                c = a("780009"),
                o = a("49111"),
                f = a("782340");

            function I(e) {
                let t = (0, l.useStateFromStores)([r.default], () => r.default.getRunningVerifiedApplicationIds().includes(e.id), [e.id]),
                    a = (0, l.useStateFromStores)([s.default], () => s.default.isInstalled(e.id, e.branchId), [e.branchId, e.id]),
                    I = (0, l.useStateFromStores)([d.default], () => d.default.getTargetManifests(e.id, e.branchId), [e.branchId, e.id]);
                if (a) return t ? null : (0, n.jsx)(i.MenuItem, {
                    id: "uninstall",
                    label: f.default.Messages.APPLICATION_CONTEXT_MENU_UNINSTALL,
                    action: () => (0, u.uninstallBranchPrompt)(e.id, e.branchId, o.AnalyticsLocations.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
                });
                return null == I ? null : (0, n.jsx)(i.MenuItem, {
                    id: "install",
                    label: f.default.Messages.APPLICATION_CONTEXT_MENU_INSTALL,
                    action: () => c.installApplication(e.id, e.branchId, o.AnalyticsLocations.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
                })
            }