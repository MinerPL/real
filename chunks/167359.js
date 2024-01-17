"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var s = n("872717"),
  l = n("913144"),
  a = n("49111");
let i = "".concat(a.STATUS_PAGE_ENDPOINT, "/api/v2/scheduled-maintenances"),
  r = "".concat(a.STATUS_PAGE_ENDPOINT, "/api/v2/incidents/unresolved.json");
var o = {
  checkIncidents() {
    Promise.all([s.default.get("".concat(i, "/active.json")), s.default.get(r)]).then(e => {
      let [t, n] = e, [s] = t.body.scheduled_maintenances, [a] = n.body.incidents;
      l.default.dispatch({
        type: "STATUS_PAGE_INCIDENT",
        incident: a || s
      })
    })
  },
  checkScheduledMaintenances() {
    s.default.get("".concat(i, "/upcoming.json")).then(e => {
      let [t] = e.body.scheduled_maintenances;
      l.default.dispatch({
        type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
        maintenance: t
      })
    })
  },
  ackScheduledMaintenance() {
    l.default.dispatch({
      type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK"
    })
  }
}