"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("599110"),
  a = n("793237"),
  s = n("49111");

function i(e) {
  let {
    summary: t,
    guildId: n,
    channelId: i,
    rating: r = null,
    problem: o = null,
    feedback: u = "",
    location: d
  } = e;
  (0, a.setSummaryFeedback)(t, r), l.default.track(s.AnalyticEvents.SUMMARIES_REPORT_PROBLEM, {
    reason: o,
    location: d,
    rating: r,
    feedback: u,
    participant_count: t.people.length,
    message_count: t.count,
    start_message_id: t.startId,
    guild_id: n,
    channel_id: i,
    summary_id: t.id,
    summary_source: t.source,
    summary_type: t.type
  })
}