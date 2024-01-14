"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var a = l("37983");
l("884691");
var n = l("398654"),
  s = l("311161"),
  i = l("961868");

function o(e) {
  let {
    guild: t
  } = e, {
    shouldShowIncidentActions: l,
    incidentData: o,
    isUnderLockdown: d
  } = (0, n.useGuildIncidentsState)(t.id), C = !1;
  return (null != o && (C = (0, s.hasDetectedActivity)(o) && l), C || d) ? (0, a.jsx)(i.default, {
    guild: t,
    incidentData: o,
    isUnderLockdown: d,
    isRaidDetected: C
  }) : null
}