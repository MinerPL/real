            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("77078"),
                i = a("438931"),
                u = a("599110"),
                r = a("568734"),
                d = a("49111"),
                s = a("782340");

            function c(e) {
                return null == e ? null : (0, n.jsx)(l.MenuCheckboxItem, {
                    id: "on-overlay",
                    label: s.default.Messages.APPLICATION_CONTEXT_MENU_TOGGLE_OVERLAY_DISABLE,
                    action: function() {
                        if (null == e) return;
                        let t = (0, r.toggleFlag)(e.getFlags(), d.LibraryApplicationFlags.OVERLAY_DISABLED);
                        i.updateFlags(e.id, e.branchId, t), u.default.track(d.AnalyticEvents.APPLICATION_SETTINGS_UPDATED, {
                            overlay_disabled: (0, r.hasFlag)(t, d.LibraryApplicationFlags.OVERLAY_DISABLED),
                            ...e.getAnalyticsData()
                        })
                    },
                    checked: e.hasFlag(d.LibraryApplicationFlags.OVERLAY_DISABLED)
                })
            }