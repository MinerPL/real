            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("446674"),
                a = n("95410"),
                s = n("913144"),
                i = n("167359");
            let r = "MaintenanceStore",
                o = null,
                u = null,
                d = null;
            class c extends l.default.Store {
                initialize() {
                    d = a.default.get(r)
                }
                getIncident() {
                    return o
                }
                getScheduledMaintenance() {
                    return null != u && u.id !== d ? u : null
                }
            }
            c.displayName = "MaintenanceStore";
            var f = new c(s.default, {
                CONNECTION_OPEN: function() {
                    o = null, i.default.checkScheduledMaintenances()
                },
                STATUS_PAGE_INCIDENT: function(e) {
                    o = e.incident
                },
                STATUS_PAGE_SCHEDULED_MAINTENANCE: function(e) {
                    u = e.maintenance
                },
                STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function() {
                    if (null == u) return !1;
                    d = u.id, a.default.set(r, d)
                }
            })