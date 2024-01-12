            "use strict";
            n.r(t), n.d(t, {
                StaticGuildEventIndexes: function() {
                    return E
                },
                scheduledEventSort: function() {
                    return _
                },
                isGuildScheduledEventActive: function() {
                    return m
                },
                isEventUpcoming: function() {
                    return y
                },
                isGuildEventEnded: function() {
                    return v
                },
                default: function() {
                    return U
                }
            }), n("424973"), n("222007");
            var r = n("917351"),
                i = n.n(r),
                l = n("446674"),
                u = n("407846"),
                a = n("913144"),
                o = n("271938"),
                d = n("26989"),
                s = n("745049");
            let E = {
                EVENT: "event",
                EVENT_ACTIVE: "active",
                EVENT_UPCOMING: "event-upcoming",
                GUILD_EVENT: e => "".concat(e, "-").concat(E.EVENT),
                GUILD_EVENT_ACTIVE: e => "".concat(e, "-").concat(E.EVENT_ACTIVE),
                GUILD_EVENT_UPCOMING: e => "".concat(e, "-").concat(E.EVENT_UPCOMING),
                CHANNEL_EVENT: e => "".concat(e, "-").concat(E.EVENT),
                CHANNEL_EVENT_ACTIVE: e => "".concat(e, "-").concat(E.EVENT_ACTIVE),
                CHANNEL_EVENT_UPCOMING: e => "".concat(e, "-").concat(E.EVENT_UPCOMING)
            };

            function _(e) {
                let {
                    id: t,
                    scheduled_start_time: n
                } = e, r = m(e) ? "\x00" : "\x01";
                return "".concat(r, "-").concat(new Date(n).getTime(), "-").concat(t)
            }
            let c = new u.default(e => {
                    let {
                        guild_id: t,
                        entity_id: n,
                        channel_id: r
                    } = e, i = [t];
                    return null != n && i.push(n), i.push(E.GUILD_EVENT(t)), null != r && i.push(E.CHANNEL_EVENT(r)), m(e) && (i.push(E.EVENT_ACTIVE), i.push(E.GUILD_EVENT_ACTIVE(t)), null != r && i.push(E.CHANNEL_EVENT_ACTIVE(r))), y(e) && (i.push(E.EVENT_UPCOMING), i.push(E.GUILD_EVENT_UPCOMING(t)), null != r && i.push(E.CHANNEL_EVENT_UPCOMING(r))), i
                }, _),
                I = 0,
                S = [],
                T = "SERIES",
                f = {},
                p = {};

            function N(e) {
                c.set(e.id, e), I += 1
            }

            function C(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                c.delete(e), delete f[e], t && delete p[e], I += 1
            }

            function A(e) {
                return null != e ? e : T
            }

            function R(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = e.guild_scheduled_event_id;
                null == f[r] && (f[r] = {});
                let i = A(e.guild_scheduled_event_exception_id);
                null == f[r][i] && (f[r][i] = {}), f[r][i][e.user_id] = e, t && function(e) {
                    var t, n;
                    let r = A(e.guild_scheduled_event_exception_id),
                        i = null !== (n = null === (t = p[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
                        l = null != e.guild_scheduled_event_exception_id && e.response === s.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === s.GuildScheduledEventUserResponses.INTERESTED ? 1 : -1;
                    O(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i + l)
                }(e), n && (I += 1)
            }

            function h(e) {
                var t, n, r, i;
                let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    u = A(e.guild_scheduled_event_exception_id),
                    a = (null === (n = f[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : null === (t = n[u]) || void 0 === t ? void 0 : t[e.user_id]) != null,
                    d = e.user_id === o.default.getId();
                (a || !d) && (null === (i = f[e.guild_scheduled_event_id]) || void 0 === i || null === (r = i[u]) || void 0 === r || delete r[e.user_id], function(e) {
                    var t, n;
                    let r = A(e.guild_scheduled_event_exception_id),
                        i = null !== (n = null === (t = p[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[r]) && void 0 !== n ? n : 0,
                        l = null != e.guild_scheduled_event_exception_id && e.response === s.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === s.GuildScheduledEventUserResponses.INTERESTED ? -1 : 1;
                    O(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i + l)
                }(e), l && (I += 1))
            }

            function O(e, t, n) {
                let r = A(t);
                null == p[e] && (p[e] = {}), p[e][r] = n
            }

            function L(e, t) {
                c.values(E.GUILD_EVENT(e)).forEach(e => C(e.id, t))
            }

            function g(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return N(t), !0
            }

            function P(e) {
                let {
                    eventException: t
                } = e, n = c.get(t.event_id);
                if (null == n) return !1;
                let r = n.guild_scheduled_event_exceptions.findIndex(e => e.event_exception_id === t.event_exception_id),
                    i = [...n.guild_scheduled_event_exceptions];
                return r < 0 ? i.push(t) : i[r] = t, N({
                    ...n,
                    guild_scheduled_event_exceptions: i
                }), !0
            }

            function m(e) {
                var t;
                return null != e && (t = (null == e ? void 0 : e.status) === s.GuildScheduledEventStatus.ACTIVE, t)
            }

            function y(e) {
                return !s.GuildScheduledEventStatusDone.has(e.status)
            }

            function v(e) {
                return null != e && s.GuildScheduledEventStatusDone.has(e.status)
            }
            class D extends l.default.Store {
                getGuildScheduledEvent(e) {
                    var t;
                    return null == e ? null : null !== (t = c.get(e)) && void 0 !== t ? t : null
                }
                getGuildEventCountByIndex(e) {
                    return c.size(e)
                }
                getGuildScheduledEventsForGuild(e) {
                    return null == e ? [] : c.values(e)
                }
                getGuildScheduledEventsByIndex(e) {
                    return c.values(e)
                }
                getRsvpVersion() {
                    return I
                }
                getRsvp(e, t, n) {
                    var r, i;
                    if (null == e) return null;
                    let l = A(t);
                    return null === (i = f[e]) || void 0 === i ? void 0 : null === (r = i[l]) || void 0 === r ? void 0 : r[n]
                }
                isInterestedInEventRecurrence(e, t) {
                    let n = o.default.getId(),
                        r = this.getRsvp(e, null, n),
                        i = this.getRsvp(e, t, n),
                        l = (null == r ? void 0 : r.response) === s.GuildScheduledEventUserResponses.INTERESTED,
                        u = (null == i ? void 0 : i.response) === s.GuildScheduledEventUserResponses.INTERESTED,
                        a = (null == i ? void 0 : i.response) === s.GuildScheduledEventUserResponses.UNINTERESTED;
                    return l && !a || u
                }
                getUserCount(e, t) {
                    var n, r, i, l;
                    if (null == e) return 0;
                    let u = null !== (i = null === (n = p[e]) || void 0 === n ? void 0 : n[T]) && void 0 !== i ? i : 0;
                    if (null == t) return u;
                    let a = null !== (l = null === (r = p[e]) || void 0 === r ? void 0 : r[t]) && void 0 !== l ? l : 0;
                    return u - a
                }
                hasUserCount(e, t) {
                    var n;
                    let r = A(t);
                    return (null === (n = p[e]) || void 0 === n ? void 0 : n[r]) != null
                }
                isActive(e) {
                    return null != e && m(c.get(e))
                }
                getActiveEventByChannel(e) {
                    if (null == e) return;
                    let t = this.getGuildScheduledEventsByIndex(E.CHANNEL_EVENT_ACTIVE(e));
                    return t[0]
                }
                getUsersForGuildEvent(e, t) {
                    var n, r;
                    if (null == e) return {};
                    let i = A(t);
                    return null !== (r = null === (n = f[e]) || void 0 === n ? void 0 : n[i]) && void 0 !== r ? r : {}
                }
            }
            D.displayName = "GuildScheduledEventStore";
            var U = new D(a.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        guilds: t
                    } = e;
                    return c.clear(), I = 0, f = {}, p = {}, S.forEach(N), t.forEach(e => e.guild_scheduled_events.forEach(e => N(e))), !0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    return L(t.id, !1), t.guild_scheduled_events.forEach(e => N(e)), !0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    return L(t.id, !0), !0
                },
                FETCH_GUILD_EVENT: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    N(t)
                },
                FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
                    let {
                        guildId: t,
                        guildScheduledEvents: n
                    } = e, r = c.values(E.GUILD_EVENT(t), !0).map(e => e.id), l = n.map(e => e.id);
                    for (let e of (i.difference(r, l).forEach(e => {
                            C(e)
                        }), n)) N(e);
                    return !0
                },
                GUILD_SCHEDULED_EVENT_CREATE: g,
                GUILD_SCHEDULED_EVENT_UPDATE: g,
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    return C(t.id), !0
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    var t, n;
                    let {
                        userId: r,
                        guildEventId: i,
                        guildId: l,
                        guildEventExceptionId: u,
                        response: a
                    } = e, o = A(u), s = null === (n = f[i]) || void 0 === n ? void 0 : null === (t = n[o]) || void 0 === t ? void 0 : t[r];
                    null != s && h(s, !1);
                    let E = d.default.getMember(l, r);
                    return R({
                        user_id: r,
                        guild_scheduled_event_id: i,
                        member: null != E ? E : {
                            guildId: l
                        },
                        guild_scheduled_event_exception_id: u,
                        response: a
                    }), !0
                },
                GUILD_SCHEDULED_EVENT_USER_REMOVE: function(e) {
                    let {
                        userId: t,
                        guildEventId: n,
                        guildEventExceptionId: r,
                        response: i
                    } = e;
                    h({
                        user_id: t,
                        guild_scheduled_event_id: n,
                        guild_scheduled_event_exception_id: r,
                        response: i
                    })
                },
                GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function(e) {
                    let {
                        guildScheduledEventUsers: t
                    } = e;
                    return t.forEach(e => R(e, !1, !1)), I += 1, !0
                },
                GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
                    let {
                        guildScheduledEventUsers: t
                    } = e;
                    return t.forEach(e => R(e, !1, !1)), I += 1, !0
                },
                GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function(e) {
                    let {
                        eventId: t,
                        counts: n
                    } = e;
                    for (let e in O(t, null, n.eventCount), n.recurrenceCounts) O(t, e, n.eventCount - n.recurrenceCounts[e])
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    let {
                        invite: t
                    } = e, n = t.guild_scheduled_event;
                    return null != n && (N(n), !0)
                },
                GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: P,
                GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: P,
                GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function(e) {
                    let {
                        eventException: t
                    } = e, n = c.get(t.event_id);
                    if (null == n) return !1;
                    let r = n.guild_scheduled_event_exceptions.filter(e => e.event_exception_id !== t.event_exception_id);
                    return N({
                        ...n,
                        guild_scheduled_event_exceptions: r
                    }), !0
                },
                GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function(e) {
                    let {
                        eventId: t
                    } = e, n = c.get(t);
                    return null != n && (N({
                        ...n,
                        guild_scheduled_event_exceptions: []
                    }), !0)
                },
                LOGOUT: function() {
                    return c.clear(), !0
                }
            })