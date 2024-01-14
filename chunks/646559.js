"use strict";
a.r(t), a.d(t, {
  default: function() {
    return s
  }
});
var l = a("599110"),
  n = a("49111");

function s(e) {
  let {
    problem: t,
    channel: a,
    feedback: s,
    activityApplication: i,
    analyticsData: c,
    location: o,
    rating: u = null
  } = e;
  l.default.track(n.AnalyticEvents.ACTIVITY_REPORT_PROBLEM, {
    reason: t,
    guild_id: a.getGuildId(),
    channel_id: a.id,
    application_id: null == i ? void 0 : i.id,
    application_name: null == i ? void 0 : i.name,
    location: o,
    rating: u,
    feedback: s,
    ...c
  })
}