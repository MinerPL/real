"use strict";
t.r(s), t.d(s, {
  default: function() {
    return n
  }
});
var a = t("599110"),
  l = t("49111");

function n(e) {
  let {
    problem: s,
    stream: t,
    feedback: n,
    streamApplication: u,
    analyticsData: o,
    location: r,
    rating: R = null
  } = e;
  a.default.track(l.AnalyticEvents.STREAM_REPORT_PROBLEM, {
    reason: s,
    streamer_user_id: t.ownerId,
    stream_channel_id: t.channelId,
    guild_id: t.guildId,
    application_id: null != u ? u.id : null,
    application_name: null != u ? u.name : null,
    location: r,
    rating: R,
    feedback: n,
    ...o
  })
}