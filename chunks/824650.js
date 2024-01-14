"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("424973");
var a = n("446674"),
  s = n("913144"),
  i = n("745049");
let l = {
  hiddenEventsAndStages: []
};
class r extends a.default.PersistedStore {
  initialize(e) {
    null != e && null != e.hiddenEventsAndStages && (l = e)
  }
  isLiveChannelNoticeHidden(e) {
    let {
      eventId: t,
      stageId: n
    } = e;
    return !!(null != n && l.hiddenEventsAndStages.includes("stage-".concat(n))) || null != t && l.hiddenEventsAndStages.includes("event-".concat(t))
  }
  getState() {
    return l
  }
}
r.displayName = "LiveChannelNoticesStore", r.persistKey = "liveChannelNotices_v2";
var o = new r(s.default, {
  LIVE_CHANNEL_NOTICE_HIDE: function(e) {
    let {
      eventId: t,
      stageId: n
    } = e;
    null != t ? l.hiddenEventsAndStages.push("event-".concat(t)) : null != n && l.hiddenEventsAndStages.push("stage-".concat(n))
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = "event-".concat(t.id);
    l.hiddenEventsAndStages.includes(n) && (t.status === i.GuildScheduledEventStatus.CANCELED || t.status === i.GuildScheduledEventStatus.COMPLETED) && (l.hiddenEventsAndStages = l.hiddenEventsAndStages.filter(e => e !== n))
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = "event-".concat(t.id);
    l.hiddenEventsAndStages.includes(n) && (l.hiddenEventsAndStages = l.hiddenEventsAndStages.filter(e => e !== n))
  },
  STAGE_INSTANCE_DELETE: function(e) {
    let {
      instance: t
    } = e, n = "stage-".concat(t.id);
    l.hiddenEventsAndStages.includes(n) && (l.hiddenEventsAndStages = l.hiddenEventsAndStages.filter(e => e !== n))
  }
})