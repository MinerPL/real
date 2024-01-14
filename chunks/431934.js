"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("446674"),
  u = n("913144"),
  a = n("271938"),
  d = n("398604"),
  i = n("49129"),
  r = n("745049");
let s = {},
  o = {};

function c(e) {
  let t = {
    ...s
  };
  delete t[e], s = t;
  let n = {
    ...o
  };
  delete n[e], o = n
}
class E extends l.default.PersistedStore {
  initialize(e) {
    if (null != e) {
      var t, n;
      s = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, o = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
    }
  }
  getGuildEventNoticeDismissalTime(e) {
    return s[e]
  }
  getAllEventDismissals() {
    return s
  }
  getUpcomingNoticeSeenTime(e) {
    return o[e]
  }
  getAllUpcomingNoticeSeenTimes() {
    return o
  }
  getState() {
    return {
      upcomingEventDismissals: s,
      upcomingEventSeenTimestamps: o
    }
  }
}
E.displayName = "UpcomingEventNoticesStore", E.persistKey = "UpcomingEventNotices";
var f = new E(u.default, {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
    let {
      eventId: t
    } = e, n = {
      ...s
    };
    n[t] = Date.now(), s = n
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    (t.status === r.GuildScheduledEventStatus.CANCELED || t.status === r.GuildScheduledEventStatus.COMPLETED) && c(t.id)
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    c(t.id)
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
    let {
      userId: t,
      guildEventId: n
    } = e, l = a.default.getId();
    if (t !== l) return;
    let u = d.default.getGuildScheduledEvent(n);
    if (null == u || u.status !== r.GuildScheduledEventStatus.SCHEDULED) return;
    let c = s[n];
    if (null != c) return;
    let E = o[n],
      f = (0, i.getNextShownUpcomingEventNoticeType)(u, void 0, E, !1);
    if (f === r.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
      let e = {
        ...s
      };
      e[n] = Date.now(), s = e
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
    let {
      guildEventId: t
    } = e, n = {
      ...o
    };
    n[t] = Date.now(), o = n
  }
})