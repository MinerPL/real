            "use strict";
            n.r(t), n.d(t, {
                StaticGuildEventIndexes: function() {
                    return c
                },
                scheduledEventSort: function() {
                    return _
                },
                isGuildScheduledEventActive: function() {
                    return v
                },
                isEventUpcoming: function() {
                    return M
                },
                isGuildEventEnded: function() {
                    return L
                },
                default: function() {
                    return U
                }
            }), n("424973"), n("222007");
            var i = n("917351"),
                a = n.n(i),
                l = n("446674"),
                s = n("407846"),
                r = n("913144"),
                u = n("271938"),
                o = n("26989"),
                d = n("745049");
            let c = {
                EVENT: "event",
                EVENT_ACTIVE: "active",
                EVENT_UPCOMING: "event-upcoming",
                GUILD_EVENT: e => "".concat(e, "-").concat(c.EVENT),
                GUILD_EVENT_ACTIVE: e => "".concat(e, "-").concat(c.EVENT_ACTIVE),
                GUILD_EVENT_UPCOMING: e => "".concat(e, "-").concat(c.EVENT_UPCOMING),
                CHANNEL_EVENT: e => "".concat(e, "-").concat(c.EVENT),
                CHANNEL_EVENT_ACTIVE: e => "".concat(e, "-").concat(c.EVENT_ACTIVE),
                CHANNEL_EVENT_UPCOMING: e => "".concat(e, "-").concat(c.EVENT_UPCOMING)
            };

            function _(e) {
                let {
                    id: t,
                    scheduled_start_time: n
                } = e, i = v(e) ? "\x00" : "\x01";
                return "".concat(i, "-").concat(new Date(n).getTime(), "-").concat(t)
            }
            let E = new s.default(e => {
                    let {
                        guild_id: t,
                        entity_id: n,
                        channel_id: i
                    } = e, a = [t];
                    return null != n && a.push(n), a.push(c.GUILD_EVENT(t)), null != i && a.push(c.CHANNEL_EVENT(i)), v(e) && (a.push(c.EVENT_ACTIVE), a.push(c.GUILD_EVENT_ACTIVE(t)), null != i && a.push(c.CHANNEL_EVENT_ACTIVE(i))), M(e) && (a.push(c.EVENT_UPCOMING), a.push(c.GUILD_EVENT_UPCOMING(t)), null != i && a.push(c.CHANNEL_EVENT_UPCOMING(i))), a
                }, _),
                f = 0,
                h = [],
                p = "SERIES",
                T = {},
                C = {};

            function m(e) {
                E.set(e.id, e), f += 1
            }

            function S(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                E.delete(e), delete T[e], t && delete C[e], f += 1
            }

            function I(e) {
                return null != e ? e : p
            }

            function g(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = e.guild_scheduled_event_id;
                null == T[i] && (T[i] = {});
                let a = I(e.guild_scheduled_event_exception_id);
                null == T[i][a] && (T[i][a] = {}), T[i][a][e.user_id] = e, t && function(e) {
                    var t, n;
                    let i = I(e.guild_scheduled_event_exception_id),
                        a = null !== (n = null === (t = C[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : 0,
                        l = null != e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.INTERESTED ? 1 : -1;
                    N(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, a + l)
                }(e), n && (f += 1)
            }

            function A(e) {
                var t, n, i, a;
                let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    s = I(e.guild_scheduled_event_exception_id),
                    r = (null === (n = T[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : null === (t = n[s]) || void 0 === t ? void 0 : t[e.user_id]) != null,
                    o = e.user_id === u.default.getId();
                (r || !o) && (null === (a = T[e.guild_scheduled_event_id]) || void 0 === a || null === (i = a[s]) || void 0 === i || delete i[e.user_id], function(e) {
                    var t, n;
                    let i = I(e.guild_scheduled_event_exception_id),
                        a = null !== (n = null === (t = C[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : 0,
                        l = null != e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.INTERESTED ? -1 : 1;
                    N(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, a + l)
                }(e), l && (f += 1))
            }

            function N(e, t, n) {
                let i = I(t);
                null == C[e] && (C[e] = {}), C[e][i] = n
            }

            function O(e, t) {
                E.values(c.GUILD_EVENT(e)).forEach(e => S(e.id, t))
            }

            function R(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return m(t), !0
            }

            function y(e) {
                let {
                    eventException: t
                } = e, n = E.get(t.event_id);
                if (null == n) return !1;
                let i = n.guild_scheduled_event_exceptions.findIndex(e => e.event_exception_id === t.event_exception_id),
                    a = [...n.guild_scheduled_event_exceptions];
                return i < 0 ? a.push(t) : a[i] = t, m({
                    ...n,
                    guild_scheduled_event_exceptions: a
                }), !0
            }

            function v(e) {
                var t;
                return null != e && (t = (null == e ? void 0 : e.status) === d.GuildScheduledEventStatus.ACTIVE, t)
            }

            function M(e) {
                return !d.GuildScheduledEventStatusDone.has(e.status)
            }

            function L(e) {
                return null != e && d.GuildScheduledEventStatusDone.has(e.status)
            }
            class D extends l.default.Store {
                getGuildScheduledEvent(e) {
                    var t;
                    return null == e ? null : null !== (t = E.get(e)) && void 0 !== t ? t : null
                }
                getGuildEventCountByIndex(e) {
                    return E.size(e)
                }
                getGuildScheduledEventsForGuild(e) {
                    return null == e ? [] : E.values(e)
                }
                getGuildScheduledEventsByIndex(e) {
                    return E.values(e)
                }
                getRsvpVersion() {
                    return f
                }
                getRsvp(e, t, n) {
                    var i, a;
                    if (null == e) return null;
                    let l = I(t);
                    return null === (a = T[e]) || void 0 === a ? void 0 : null === (i = a[l]) || void 0 === i ? void 0 : i[n]
                }
                isInterestedInEventRecurrence(e, t) {
                    let n = u.default.getId(),
                        i = this.getRsvp(e, null, n),
                        a = this.getRsvp(e, t, n),
                        l = (null == i ? void 0 : i.response) === d.GuildScheduledEventUserResponses.INTERESTED,
                        s = (null == a ? void 0 : a.response) === d.GuildScheduledEventUserResponses.INTERESTED,
                        r = (null == a ? void 0 : a.response) === d.GuildScheduledEventUserResponses.UNINTERESTED;
                    return l && !r || s
                }
                getUserCount(e, t) {
                    var n, i, a, l;
                    if (null == e) return 0;
                    let s = null !== (a = null === (n = C[e]) || void 0 === n ? void 0 : n[p]) && void 0 !== a ? a : 0;
                    if (null == t) return s;
                    let r = null !== (l = null === (i = C[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== l ? l : 0;
                    return s - r
                }
                hasUserCount(e, t) {
                    var n;
                    let i = I(t);
                    return (null === (n = C[e]) || void 0 === n ? void 0 : n[i]) != null
                }
                isActive(e) {
                    return null != e && v(E.get(e))
                }
                getActiveEventByChannel(e) {
                    if (null == e) return;
                    let t = this.getGuildScheduledEventsByIndex(c.CHANNEL_EVENT_ACTIVE(e));
                    return t[0]
                }
                getUsersForGuildEvent(e, t) {
                    var n, i;
                    if (null == e) return {};
                    let a = I(t);
                    return null !== (i = null === (n = T[e]) || void 0 === n ? void 0 : n[a]) && void 0 !== i ? i : {}
                }
            }
            D.displayName = "GuildScheduledEventStore";
            var U = new D(r.default, {
                CONNECTION_OPEN: function(e) {
                    let {
                        guilds: t
                    } = e;
                    return E.clear(), f = 0, T = {}, C = {}, h.forEach(m), t.forEach(e => e.guild_scheduled_events.forEach(e => m(e))), !0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    return O(t.id, !1), t.guild_scheduled_events.forEach(e => m(e)), !0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    return O(t.id, !0), !0
                },
                FETCH_GUILD_EVENT: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    m(t)
                },
                FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
                    let {
                        guildId: t,
                        guildScheduledEvents: n
                    } = e, i = E.values(c.GUILD_EVENT(t), !0).map(e => e.id), l = n.map(e => e.id);
                    for (let e of (a.difference(i, l).forEach(e => {
                            S(e)
                        }), n)) m(e);
                    return !0
                },
                GUILD_SCHEDULED_EVENT_CREATE: R,
                GUILD_SCHEDULED_EVENT_UPDATE: R,
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    return S(t.id), !0
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    var t, n;
                    let {
                        userId: i,
                        guildEventId: a,
                        guildId: l,
                        guildEventExceptionId: s,
                        response: r
                    } = e, u = I(s), d = null === (n = T[a]) || void 0 === n ? void 0 : null === (t = n[u]) || void 0 === t ? void 0 : t[i];
                    null != d && A(d, !1);
                    let c = o.default.getMember(l, i);
                    return g({
                        user_id: i,
                        guild_scheduled_event_id: a,
                        member: null != c ? c : {
                            guildId: l
                        },
                        guild_scheduled_event_exception_id: s,
                        response: r
                    }), !0
                },
                GUILD_SCHEDULED_EVENT_USER_REMOVE: function(e) {
                    let {
                        userId: t,
                        guildEventId: n,
                        guildEventExceptionId: i,
                        response: a
                    } = e;
                    A({
                        user_id: t,
                        guild_scheduled_event_id: n,
                        guild_scheduled_event_exception_id: i,
                        response: a
                    })
                },
                GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function(e) {
                    let {
                        guildScheduledEventUsers: t
                    } = e;
                    return t.forEach(e => g(e, !1, !1)), f += 1, !0
                },
                GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
                    let {
                        guildScheduledEventUsers: t
                    } = e;
                    return t.forEach(e => g(e, !1, !1)), f += 1, !0
                },
                GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function(e) {
                    let {
                        eventId: t,
                        counts: n
                    } = e;
                    for (let e in N(t, null, n.eventCount), n.recurrenceCounts) N(t, e, n.eventCount - n.recurrenceCounts[e])
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    let {
                        invite: t
                    } = e, n = t.guild_scheduled_event;
                    return null != n && (m(n), !0)
                },
                GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: y,
                GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: y,
                GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function(e) {
                    let {
                        eventException: t
                    } = e, n = E.get(t.event_id);
                    if (null == n) return !1;
                    let i = n.guild_scheduled_event_exceptions.filter(e => e.event_exception_id !== t.event_exception_id);
                    return m({
                        ...n,
                        guild_scheduled_event_exceptions: i
                    }), !0
                },
                GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function(e) {
                    let {
                        eventId: t
                    } = e, n = E.get(t);
                    return null != n && (m({
                        ...n,
                        guild_scheduled_event_exceptions: []
                    }), !0)
                },
                LOGOUT: function() {
                    return E.clear(), !0
                }
            })