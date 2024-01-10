            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var a = n("446674"),
                s = n("913144"),
                r = n("718517");
            let i = [],
                u = new Set,
                l = 0;
            class d extends a.default.Store {
                initialize() {
                    setInterval(() => {
                        this.emitChange()
                    }, 1 * r.default.Millis.MINUTE)
                }
                getMessageReminders() {
                    return i
                }
                isMessageReminder(e) {
                    let t = i.find(t => t.messageId === e);
                    return null != t && !t.complete
                }
                getOverdueMessageReminderCount() {
                    return i.filter(e => null == e.dueAt || new Date > e.dueAt).length
                }
                recentlyFetched() {
                    return new Date().getTime() - l < 1 * r.default.Millis.MINUTE
                }
                hasSentNotification(e) {
                    return u.has(e)
                }
                getState() {
                    return {
                        messages: i
                    }
                }
            }
            d.displayName = "MessageRemindersStore";
            var c = new d(s.default, {
                SAVED_MESSAGES_UPDATE: function(e) {
                    let {
                        messages: t
                    } = e;
                    l = new Date().getTime(), i = t.map(e => ({
                        ...e,
                        complete: !1
                    })), t.forEach(e => {
                        null != e.dueAt && e.dueAt > new Date && u.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && u.add(e.messageId)
                    })
                },
                MESSAGE_REMINDER_TOGGLE: function(e) {
                    let {
                        messageId: t,
                        complete: n
                    } = e, a = i.findIndex(e => e.messageId === t);
                    if (-1 === a) return !1;
                    i[a] = {
                        ...i[a],
                        complete: n
                    }
                },
                MESSAGE_REMINDER_NOTIFIED: function(e) {
                    let {
                        messageId: t
                    } = e;
                    u.add(t)
                }
            })