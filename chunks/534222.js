            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                },
                useActiveEvent: function() {
                    return g
                },
                useActiveEventsByChannel: function() {
                    return m
                },
                useGuildUpcomingEventsNotice: function() {
                    return h
                },
                useGuildActiveEvent: function() {
                    return R
                },
                useGuildChannelScheduledEvents: function() {
                    return p
                },
                useFirstActiveEventChannel: function() {
                    return M
                },
                useImminentUpcomingGuildEvents: function() {
                    return C
                }
            }), n("222007"), n("808653");
            var l = n("884691"),
                u = n("446674"),
                a = n("962199"),
                d = n("42203"),
                i = n("923959"),
                s = n("305961"),
                r = n("957255"),
                o = n("449008"),
                c = n("398604"),
                E = n("49129"),
                f = n("431934"),
                _ = n("466148"),
                S = n("822516"),
                T = n("745049"),
                v = n("49111");
            let I = [];

            function N(e, t) {
                return (0, u.useStateFromStoresArray)([s.default, a.default, c.default, r.default, d.default, i.default], () => {
                    let n = s.default.getGuild(e);
                    if (null == n) return I;
                    let l = n.hasFeature(v.GuildFeatures.HUB);
                    if (l) {
                        var u, E;
                        let e = null === (u = i.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
                            t = null !== (E = a.default.getEventDirectoryEntries(e)) && void 0 !== E ? E : [];
                        return t.map(e => {
                            let t = e.scheduledEventId,
                                n = c.default.getGuildScheduledEvent(t);
                            return null != n ? n : a.default.getCachedGuildScheduledEventById(t)
                        }).filter(o.isNotNullish)
                    }
                    let f = c.default.getGuildScheduledEventsByIndex(null != t ? t : c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
                    return f.filter(e => {
                        let t = e.channel_id;
                        if (null == t) return !0;
                        let n = d.default.getChannel(t);
                        return r.default.can(v.Permissions.VIEW_CHANNEL, n)
                    })
                }, [t, e])
            }

            function g(e) {
                return (0, u.useStateFromStores)([c.default, d.default, r.default], () => {
                    let t = d.default.getChannel(e);
                    if (!r.default.can(v.Permissions.VIEW_CHANNEL, t)) return null;
                    let n = null == t ? void 0 : t.guild_id;
                    if (null == n) return null;
                    let l = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
                    return l.length > 0 ? l[0] : null
                }, [e])
            }

            function m(e) {
                let t = (0, u.useStateFromStoresArray)([c.default], () => c.default.getGuildScheduledEventsForGuild(e), [e]),
                    n = l.useMemo(() => {
                        let e = new Map;
                        return t.forEach(t => {
                            let n = t.channel_id;
                            null != n && e.set(n, t)
                        }), e
                    }, [t]);
                return n
            }

            function h(e) {
                var t, n;
                let l = (t = e, (0, u.useStateFromStoresArray)([c.default, d.default, r.default], () => {
                        let e = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === T.GuildScheduledEventEntityTypes.NONE || e.status !== T.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = d.default.getChannel(e.channel_id);
                            return r.default.can(v.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    a = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllEventDismissals()),
                    i = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllUpcomingNoticeSeenTimes()),
                    s = (0, u.useStateFromStoresObject)([c.default], () => null == l ? {} : l.reduce((e, t) => {
                        let n = (0, S.getNextRecurrenceIdInEvent)(t);
                        return {
                            ...e,
                            [t.id]: c.default.isInterestedInEventRecurrence(t.id, n)
                        }
                    }, {}), [l]);
                if (null != l && null != s)
                    for (let e = 0; e < l.length; e++) {
                        ;
                        let t = l[e],
                            u = a[t.id],
                            d = i[t.id],
                            r = null !== (n = s[t.id]) && void 0 !== n && n,
                            o = (0, E.getNextShownUpcomingEventNoticeType)(t, u, d, r);
                        if (null != o) return {
                            upcomingEvent: t,
                            noticeType: o
                        }
                    }
            }

            function R(e) {
                return (0, u.useStateFromStores)([c.default, d.default, r.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === T.GuildScheduledEventEntityTypes.NONE || !(0, c.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = d.default.getChannel(e.channel_id);
                        return r.default.can(v.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function p(e) {
                return (0, u.useStateFromStores)([c.default], () => c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
            }

            function M(e) {
                return (0, u.useStateFromStores)([d.default, c.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
                        let t = d.default.getChannel(e.channel_id);
                        return null != t
                    });
                    return d.default.getChannel(null == t ? void 0 : t.channel_id)
                }, [e])
            }

            function C(e) {
                let [t, n] = l.useState(() => Date.now());
                l.useEffect(() => {
                    let e = setInterval(() => {
                        n(Date.now())
                    }, 9e5);
                    return () => clearInterval(e)
                }, []);
                let a = (0, u.useStateFromStores)([c.default], () => null == e ? [] : c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
                    d = l.useMemo(() => a.filter(e => {
                        let {
                            startTime: t,
                            endTime: n
                        } = (0, _.getEventSchedule)(e), {
                            withinStartWindow: l,
                            diffMinutes: u
                        } = (0, S.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
                        return e.status !== T.GuildScheduledEventStatus.ACTIVE && l && u < 15
                    }), [a]);
                return d
            }