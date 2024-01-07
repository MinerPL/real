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
                u = a("438931"),
                r = a("686470"),
                d = a("535974"),
                s = a("599110"),
                c = a("568734"),
                o = a("49111"),
                f = a("782340");

            function I(e, t) {
                let a = (0, l.useStateFromStores)([d.default], () => d.default.isInstalled(e.id, e.branchId), [e.branchId, e.id]),
                    I = (0, l.useStateFromStores)([r.default], () => !r.default.hasRemovedLibraryApplicationThisSession);
                if (a && !e.isHidden()) return null;

                function A() {
                    let t = (0, c.toggleFlag)(e.getFlags(), o.LibraryApplicationFlags.HIDDEN);
                    u.updateFlags(e.id, e.branchId, t), s.default.track(o.AnalyticEvents.APPLICATION_SETTINGS_UPDATED, {
                        hidden_enabled: (0, c.hasFlag)(t, o.LibraryApplicationFlags.HIDDEN),
                        ...e.getAnalyticsData()
                    })
                }
                return (0, n.jsx)(i.MenuItem, {
                    id: "in-library",
                    label: e.isHidden() ? f.default.Messages.APPLICATION_CONTEXT_MENU_SHOW : f.default.Messages.APPLICATION_CONTEXT_MENU_HIDE,
                    action: function() {
                        null != e && null != t && (e.isHidden() || !I ? A() : (0, i.openModal)(e => (0, n.jsx)(i.ConfirmModal, {
                            header: f.default.Messages.APPLICATION_LIBRARY_REMOVE_CONFIRM_HEADER,
                            confirmText: f.default.Messages.APPLICATION_LIBRARY_REMOVE_CONFIRM_CONFIRM,
                            cancelText: f.default.Messages.CANCEL,
                            onConfirm: () => A(),
                            confirmButtonColor: i.Button.Colors.BRAND,
                            ...e,
                            children: (0, n.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: f.default.Messages.APPLICATION_LIBRARY_REMOVE_CONFIRM_BODY.format({
                                    name: t.name
                                })
                            })
                        })))
                    }
                })
            }