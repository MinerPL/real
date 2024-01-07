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
                s = n("745049");
            let r = {},
                o = {};

            function c(e) {
                let t = {
                    ...r
                };
                delete t[e], r = t;
                let n = {
                    ...o
                };
                delete n[e], o = n
            }
            class E extends l.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t, n;
                        r = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, o = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
                    }
                }
                getGuildEventNoticeDismissalTime(e) {
                    return r[e]
                }
                getAllEventDismissals() {
                    return r
                }
                getUpcomingNoticeSeenTime(e) {
                    return o[e]
                }
                getAllUpcomingNoticeSeenTimes() {
                    return o
                }
                getState() {
                    return {
                        upcomingEventDismissals: r,
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
                        ...r
                    };
                    n[t] = Date.now(), r = n
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    (t.status === s.GuildScheduledEventStatus.CANCELED || t.status === s.GuildScheduledEventStatus.COMPLETED) && c(t.id)
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
                    if (null == u || u.status !== s.GuildScheduledEventStatus.SCHEDULED) return;
                    let c = r[n];
                    if (null != c) return;
                    let E = o[n],
                        f = (0, i.getNextShownUpcomingEventNoticeType)(u, void 0, E, !1);
                    if (f === s.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
                        let e = {
                            ...r
                        };
                        e[n] = Date.now(), r = e
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