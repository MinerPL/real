            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var i = n("446674"),
                a = n("913144"),
                l = n("718517");
            let s = [],
                d = new Set,
                u = 0;
            class r extends i.default.Store {
                initialize() {
                    setInterval(() => {
                        this.emitChange()
                    }, 1 * l.default.Millis.MINUTE)
                }
                getMessageReminders() {
                    return s
                }
                isMessageReminder(e) {
                    let t = s.find(t => t.messageId === e);
                    return null != t && !t.complete
                }
                getOverdueMessageReminderCount() {
                    return s.filter(e => null == e.dueAt || new Date > e.dueAt).length
                }
                recentlyFetched() {
                    return new Date().getTime() - u < 1 * l.default.Millis.MINUTE
                }
                hasSentNotification(e) {
                    return d.has(e)
                }
                getState() {
                    return {
                        messages: s
                    }
                }
            }
            r.displayName = "MessageRemindersStore";
            var o = new r(a.default, {
                SAVED_MESSAGES_UPDATE: function(e) {
                    let {
                        messages: t
                    } = e;
                    u = new Date().getTime(), s = t.map(e => ({
                        ...e,
                        complete: !1
                    })), t.forEach(e => {
                        null != e.dueAt && e.dueAt > new Date && d.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && d.add(e.messageId)
                    })
                },
                MESSAGE_REMINDER_TOGGLE: function(e) {
                    let {
                        messageId: t,
                        complete: n
                    } = e, i = s.findIndex(e => e.messageId === t);
                    if (-1 === i) return !1;
                    s[i] = {
                        ...s[i],
                        complete: n
                    }
                },
                MESSAGE_REMINDER_NOTIFIED: function(e) {
                    let {
                        messageId: t
                    } = e;
                    d.add(t)
                }
            })