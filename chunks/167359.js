            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var l = n("872717"),
                a = n("913144"),
                s = n("49111");
            let i = "".concat(s.STATUS_PAGE_ENDPOINT, "/api/v2/scheduled-maintenances"),
                r = "".concat(s.STATUS_PAGE_ENDPOINT, "/api/v2/incidents/unresolved.json");
            var o = {
                checkIncidents() {
                    Promise.all([l.default.get("".concat(i, "/active.json")), l.default.get(r)]).then(e => {
                        let [t, n] = e, [l] = t.body.scheduled_maintenances, [s] = n.body.incidents;
                        a.default.dispatch({
                            type: "STATUS_PAGE_INCIDENT",
                            incident: s || l
                        })
                    })
                },
                checkScheduledMaintenances() {
                    l.default.get("".concat(i, "/upcoming.json")).then(e => {
                        let [t] = e.body.scheduled_maintenances;
                        a.default.dispatch({
                            type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
                            maintenance: t
                        })
                    })
                },
                ackScheduledMaintenance() {
                    a.default.dispatch({
                        type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK"
                    })
                }
            }