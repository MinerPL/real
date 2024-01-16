"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("222007");
var a = n("446674"),
  s = n("913144"),
  i = n("718517");
let r = [],
  l = new Set,
  u = 0;
class d extends a.default.Store {
  initialize() {
    setInterval(() => {
      this.emitChange()
    }, 1 * i.default.Millis.MINUTE)
  }
  getMessageReminders() {
    return r
  }
  isMessageReminder(e) {
    let t = r.find(t => t.messageId === e);
    return null != t && !t.complete
  }
  getOverdueMessageReminderCount() {
    return r.filter(e => null == e.dueAt || new Date > e.dueAt).length
  }
  recentlyFetched() {
    return new Date().getTime() - u < 1 * i.default.Millis.MINUTE
  }
  hasSentNotification(e) {
    return l.has(e)
  }
  getState() {
    return {
      messages: r
    }
  }
}
d.displayName = "MessageRemindersStore";
var c = new d(s.default, {
  SAVED_MESSAGES_UPDATE: function(e) {
    let {
      messages: t
    } = e;
    u = new Date().getTime(), r = t.map(e => ({
      ...e,
      complete: !1
    })), t.forEach(e => {
      null != e.dueAt && e.dueAt > new Date && l.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && l.add(e.messageId)
    })
  },
  MESSAGE_REMINDER_TOGGLE: function(e) {
    let {
      messageId: t,
      complete: n
    } = e, a = r.findIndex(e => e.messageId === t);
    if (-1 === a) return !1;
    r[a] = {
      ...r[a],
      complete: n
    }
  },
  MESSAGE_REMINDER_NOTIFIED: function(e) {
    let {
      messageId: t
    } = e;
    l.add(t)
  }
})