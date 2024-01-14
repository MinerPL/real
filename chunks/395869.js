"use strict";
n.r(t), n.d(t, {
  hideLiveChannelNotice: function() {
    return s
  },
  hideUpcomingEventNotice: function() {
    return i
  },
  markUpcomingEventNoticeAsSeen: function() {
    return l
  }
});
var a = n("913144");

function s(e) {
  let {
    eventId: t,
    stageId: n
  } = e;
  (null != t || null != n) && a.default.dispatch({
    type: "LIVE_CHANNEL_NOTICE_HIDE",
    eventId: t,
    stageId: n
  })
}

function i(e) {
  a.default.dispatch({
    type: "UPCOMING_GUILD_EVENT_NOTICE_HIDE",
    eventId: e
  })
}

function l(e) {
  a.default.dispatch({
    type: "UPCOMING_GUILD_EVENT_NOTICE_SEEN",
    guildEventId: e
  })
}