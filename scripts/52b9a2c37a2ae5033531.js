(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["30112"], {
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("414456"),
                i = n.n(u),
                a = n("446674"),
                r = n("77078"),
                s = n("102985"),
                d = n("79798"),
                o = n("754474"),
                c = n("158998"),
                f = n("782340"),
                E = n("892802");

            function v(e) {
                if (e.isSystemUser()) return o.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return o.BotTypes.AI;
                if (e.bot) return o.BotTypes.BOT;
                return null
            }
            let S = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: u,
                    botVerified: a,
                    discriminatorClass: s,
                    className: o,
                    usernameClass: c,
                    color: v,
                    botClass: S,
                    showStreamerModeTooltip: g
                } = e;
                return (0, l.jsxs)("div", {
                    className: i(E.info, o),
                    children: [(0, l.jsx)(r.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: g,
                        children: e => (0, l.jsx)("span", {
                            ...e,
                            className: i(E.username, c),
                            style: null != v ? {
                                color: v
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, l.jsx)("span", {
                        className: i(E.infoSpacing, s),
                        children: n
                    }) : void 0, null != u && (0, l.jsx)(d.default, {
                        type: u,
                        className: i(E.infoSpacing, S),
                        verified: a
                    })]
                })
            };
            var g = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: u,
                    forceUsername: i,
                    showAccountIdentifier: r,
                    overrideDiscriminator: d,
                    forcePomelo: f,
                    ...E
                } = e, g = (0, a.useStateFromStores)([s.default], () => s.default.hidePersonalInformation), h = g || t || n.isNonUserBot(), m = n.toString(), N = c.default.getName(n), C = i ? m : null != u ? u : N, _ = n.isPomelo() || f;
                if (_ || C !== m) {
                    let e = C === m && _ && i ? c.default.getUserTag(n, {
                            forcePomelo: f
                        }) : C,
                        t = r && e !== "@".concat(m) ? c.default.getUserTag(n) : void 0;
                    return (0, l.jsx)(S, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: v(n),
                        showStreamerModeTooltip: g && e !== N,
                        ...E
                    })
                }
                return (0, l.jsx)(o.default, {
                    name: C,
                    botType: v(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: h || C !== m ? null : null != d ? d : n.discriminator,
                    ...E
                })
            }
        },
        696675: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MicrophoneIcon: function() {
                    return a
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...s
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, i.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M6 10a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        className: r
                    })]
                })
            }
        },
        15433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchDirectoryEntries: function() {
                    return d
                }
            });
            var l = n("483366"),
                u = n.n(l),
                i = n("872717"),
                a = n("913144"),
                r = n("730647"),
                s = n("49111");
            let d = u(async e => {
                try {
                    a.default.dispatch({
                        type: "EVENT_DIRECTORY_FETCH_START"
                    });
                    let t = await i.default.get({
                        url: s.Endpoints.DIRECTORY_CHANNEL_ENTRIES(e),
                        query: {
                            type: r.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT
                        }
                    });
                    a.default.dispatch({
                        type: "EVENT_DIRECTORY_FETCH_SUCCESS",
                        channelId: e,
                        entries: t.body
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "EVENT_DIRECTORY_FETCH_FAILURE"
                    })
                }
            }, 200)
        },
        49129: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNextShownUpcomingEventNoticeType: function() {
                    return r
                }
            });
            var l = n("866227"),
                u = n.n(l),
                i = n("249654"),
                a = n("745049");

            function r(e, t, n, l) {
                let r = u(),
                    s = new Date(e.scheduled_start_time).getTime(),
                    d = {
                        start: s - a.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
                        end: s
                    };
                if (r.isBetween(d.start, d.end)) {
                    if (null != t) {
                        let e = u(t),
                            n = e.isBetween(d.start, d.end),
                            i = e.isBetween(u(s).subtract(a.ACKED_RECENTLY_WINDOW_DAYS, "days"), s);
                        return n || i && !l ? void 0 : a.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                    }
                    return a.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                }
                let o = i.default.extractTimestamp(e.id),
                    c = Math.min((null != n ? n : o) + a.NEW_EVENT_WINDOW_MILLISECONDS, s),
                    f = r.isBetween(o, c);
                if (f && null == t && !l) return a.UpcomingGuildEventNoticeTypes.NEW_EVENT
            }
        },
        651072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("862205");
            let u = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = u
        },
        431934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("446674"),
                u = n("913144"),
                i = n("271938"),
                a = n("398604"),
                r = n("49129"),
                s = n("745049");
            let d = {},
                o = {};

            function c(e) {
                let t = {
                    ...d
                };
                delete t[e], d = t;
                let n = {
                    ...o
                };
                delete n[e], o = n
            }
            class f extends l.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t, n;
                        d = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, o = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
                    }
                }
                getGuildEventNoticeDismissalTime(e) {
                    return d[e]
                }
                getAllEventDismissals() {
                    return d
                }
                getUpcomingNoticeSeenTime(e) {
                    return o[e]
                }
                getAllUpcomingNoticeSeenTimes() {
                    return o
                }
                getState() {
                    return {
                        upcomingEventDismissals: d,
                        upcomingEventSeenTimestamps: o
                    }
                }
            }
            f.displayName = "UpcomingEventNoticesStore", f.persistKey = "UpcomingEventNotices";
            var E = new f(u.default, {
                UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
                    let {
                        eventId: t
                    } = e, n = {
                        ...d
                    };
                    n[t] = Date.now(), d = n
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
                    } = e, l = i.default.getId();
                    if (t !== l) return;
                    let u = a.default.getGuildScheduledEvent(n);
                    if (null == u || u.status !== s.GuildScheduledEventStatus.SCHEDULED) return;
                    let c = d[n];
                    if (null != c) return;
                    let f = o[n],
                        E = (0, r.getNextShownUpcomingEventNoticeType)(u, void 0, f, !1);
                    if (E === s.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
                        let e = {
                            ...d
                        };
                        e[n] = Date.now(), d = e
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
        },
        334683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var l = n("884691"),
                u = n("446674"),
                i = n("817963"),
                a = n("923959"),
                r = n("305961"),
                s = n("957255"),
                d = n("49111"),
                o = (e, t) => {
                    let n = (0, u.useStateFromStores)([r.default], () => r.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: o
                        } = (0, i.useManageResourcePermissions)(n),
                        c = (0, u.useStateFromStores)([a.default], () => a.default.getChannels(e)[a.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        f = l.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        E = (0, u.useStateFromStores)([s.default], () => {
                            if (s.default.can(d.Permissions.ADMINISTRATOR, n) || o) return !0;
                            for (let {
                                    channel: e
                                }
                                of f) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, i.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [f, n, o]);
                    return E
                }
        },
        202358: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                u = n("567469"),
                i = n("998716"),
                a = n("834052"),
                r = n("42203"),
                s = n("305961");

            function d(e) {
                let {
                    id: t,
                    data: {
                        guild: n,
                        instance: d,
                        speakers: o,
                        participantCount: c
                    },
                    context: f
                } = e, E = (0, l.useStateFromStores)([s.default, r.default], () => {
                    var e;
                    return s.default.getGuild(null === (e = r.default.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId())
                }, [t]), v = (0, l.useStateFromStores)([a.default], () => a.default.getStageInstanceByChannel(t), [t]), S = (0, u.useStageParticipants)(t, i.StageChannelParticipantNamedIndex.SPEAKER), g = (0, u.useStageParticipantsCount)(t), h = null != v ? S : o, m = (null != v ? g : c) - h.length;
                return {
                    channelId: t,
                    guild: null != E ? E : n,
                    stage: null != v ? v : d,
                    speakers: h,
                    audienceCount: m,
                    context: f
                }
            }
        },
        397680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                },
                getEventException: function() {
                    return a
                }
            });
            var l = n("446674"),
                u = n("398604");

            function i(e, t) {
                let n = (0, l.useStateFromStoresArray)([u.default], () => {
                    var e, n;
                    return null !== (n = null === (e = u.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                });
                return r(n, e)
            }

            function a(e, t) {
                var n, l;
                let i = null !== (l = null === (n = u.default.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== l ? l : [];
                return r(i, e)
            }

            function r(e, t) {
                let n = null == e ? void 0 : e.find(e => e.event_exception_id === t);
                return n
            }
        },
        466148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                },
                getEventSchedule: function() {
                    return o
                }
            });
            var l = n("627445"),
                u = n.n(l),
                i = n("446674"),
                a = n("398604"),
                r = n("397680"),
                s = n("822516");

            function d(e, t, n) {
                var l;
                let d = null !== (l = (0, i.useStateFromStores)([a.default], () => a.default.getGuildScheduledEvent(e))) && void 0 !== l ? l : n;
                u(null != d, "Event must be defined"), t = null != t ? t : (0, s.getNextRecurrenceIdInEvent)(d);
                let o = (0, r.default)(t, e);
                return c(d, o, t)
            }

            function o(e, t) {
                let n = (0, r.getEventException)(t, e.id);
                return c(e, n, t)
            }

            function c(e, t, n) {
                if (null == e.recurrence_rule || null == n) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let l = (0, s.getBaseScheduleForRecurrence)(n, e),
                    {
                        startDate: u,
                        endDate: i
                    } = (0, s.getScheduleForRecurrenceWithException)(l, t);
                return {
                    startTime: u.toDate(),
                    endTime: null == i ? void 0 : i.toDate()
                }
            }
        },
        534222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                },
                useActiveEvent: function() {
                    return C
                },
                useActiveEventsByChannel: function() {
                    return _
                },
                useGuildUpcomingEventsNotice: function() {
                    return T
                },
                useGuildActiveEvent: function() {
                    return p
                },
                useGuildChannelScheduledEvents: function() {
                    return I
                },
                useFirstActiveEventChannel: function() {
                    return x
                },
                useImminentUpcomingGuildEvents: function() {
                    return G
                }
            }), n("222007"), n("808653");
            var l = n("884691"),
                u = n("446674"),
                i = n("962199"),
                a = n("42203"),
                r = n("923959"),
                s = n("305961"),
                d = n("957255"),
                o = n("449008"),
                c = n("398604"),
                f = n("49129"),
                E = n("431934"),
                v = n("466148"),
                S = n("822516"),
                g = n("745049"),
                h = n("49111");
            let m = [];

            function N(e, t) {
                return (0, u.useStateFromStoresArray)([s.default, i.default, c.default, d.default, a.default, r.default], () => {
                    let n = s.default.getGuild(e);
                    if (null == n) return m;
                    let l = n.hasFeature(h.GuildFeatures.HUB);
                    if (l) {
                        var u, f;
                        let e = null === (u = r.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
                            t = null !== (f = i.default.getEventDirectoryEntries(e)) && void 0 !== f ? f : [];
                        return t.map(e => {
                            let t = e.scheduledEventId,
                                n = c.default.getGuildScheduledEvent(t);
                            return null != n ? n : i.default.getCachedGuildScheduledEventById(t)
                        }).filter(o.isNotNullish)
                    }
                    let E = c.default.getGuildScheduledEventsByIndex(null != t ? t : c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
                    return E.filter(e => {
                        let t = e.channel_id;
                        if (null == t) return !0;
                        let n = a.default.getChannel(t);
                        return d.default.can(h.Permissions.VIEW_CHANNEL, n)
                    })
                }, [t, e])
            }

            function C(e) {
                return (0, u.useStateFromStores)([c.default, a.default, d.default], () => {
                    let t = a.default.getChannel(e);
                    if (!d.default.can(h.Permissions.VIEW_CHANNEL, t)) return null;
                    let n = null == t ? void 0 : t.guild_id;
                    if (null == n) return null;
                    let l = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
                    return l.length > 0 ? l[0] : null
                }, [e])
            }

            function _(e) {
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

            function T(e) {
                var t, n;
                let l = (t = e, (0, u.useStateFromStoresArray)([c.default, a.default, d.default], () => {
                        let e = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === g.GuildScheduledEventEntityTypes.NONE || e.status !== g.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = a.default.getChannel(e.channel_id);
                            return d.default.can(h.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    i = (0, u.useStateFromStoresObject)([E.default], () => E.default.getAllEventDismissals()),
                    r = (0, u.useStateFromStoresObject)([E.default], () => E.default.getAllUpcomingNoticeSeenTimes()),
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
                            u = i[t.id],
                            a = r[t.id],
                            d = null !== (n = s[t.id]) && void 0 !== n && n,
                            o = (0, f.getNextShownUpcomingEventNoticeType)(t, u, a, d);
                        if (null != o) return {
                            upcomingEvent: t,
                            noticeType: o
                        }
                    }
            }

            function p(e) {
                return (0, u.useStateFromStores)([c.default, a.default, d.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === g.GuildScheduledEventEntityTypes.NONE || !(0, c.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = a.default.getChannel(e.channel_id);
                        return d.default.can(h.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function I(e) {
                return (0, u.useStateFromStores)([c.default], () => c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
            }

            function x(e) {
                return (0, u.useStateFromStores)([a.default, c.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
                        let t = a.default.getChannel(e.channel_id);
                        return null != t
                    });
                    return a.default.getChannel(null == t ? void 0 : t.channel_id)
                }, [e])
            }

            function G(e) {
                let [t, n] = l.useState(() => Date.now());
                l.useEffect(() => {
                    let e = setInterval(() => {
                        n(Date.now())
                    }, 9e5);
                    return () => clearInterval(e)
                }, []);
                let i = (0, u.useStateFromStores)([c.default], () => null == e ? [] : c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
                    a = l.useMemo(() => i.filter(e => {
                        let {
                            startTime: t,
                            endTime: n
                        } = (0, v.getEventSchedule)(e), {
                            withinStartWindow: l,
                            diffMinutes: u
                        } = (0, S.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
                        return e.status !== g.GuildScheduledEventStatus.ACTIVE && l && u < 15
                    }), [i]);
                return a
            }
        },
        473031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                i = n("922770"),
                a = n("267567"),
                r = n("998716"),
                s = n("834052"),
                d = n("42203"),
                o = n("957255"),
                c = n("945956"),
                f = n("697218"),
                E = n("374021"),
                v = n("398604"),
                S = n("152475"),
                g = n("202358"),
                h = n("598639"),
                m = n("189443"),
                N = n("841363"),
                C = n("822516"),
                _ = n("93550"),
                T = n("617347"),
                p = n("369404"),
                I = n("49111");

            function x(e) {
                var t;
                let {
                    guildEvent: n,
                    guildId: x,
                    truncate: G,
                    onActionTaken: D,
                    className: R,
                    isNew: L
                } = e, {
                    id: U,
                    guild_id: y,
                    channel_id: M,
                    creator_id: A,
                    name: V,
                    description: j,
                    entity_type: P,
                    image: O,
                    recurrence_rule: F
                } = n, b = (0, C.getNextRecurrenceIdInEvent)(n), k = (0, u.useStateFromStores)([v.default], () => v.default.isInterestedInEventRecurrence(U, b), [U, b]), H = (0, u.useStateFromStores)([a.default], () => a.default.isLurking(y), [y]), w = (0, u.useStateFromStores)([s.default], () => s.default.getStageInstanceByChannel(M), [M]), B = (0, u.useStateFromStores)([d.default], () => d.default.getChannel(M), [M]), W = (0, u.useStateFromStores)([f.default], () => f.default.getUser(A), [A]), {
                    speakers: z
                } = (0, g.default)({
                    id: M,
                    data: {
                        guild: null,
                        instance: w,
                        speakers: [],
                        participantCount: 0
                    },
                    context: {
                        guildId: y,
                        instance: w
                    }
                }), Y = (0, u.useStateFromStores)([c.default], () => c.default.getChannelId()), K = (0, v.isGuildScheduledEventActive)(n), q = Y === M && null != Y && K, Z = z.filter(e => e.type === r.StageChannelParticipantTypes.VOICE), J = Z.length, X = (0, u.useStateFromStores)([o.default], () => o.default.can(I.Permissions.CONNECT, B), [B]), Q = (0, S.default)(n), {
                    isMember: $,
                    guild: ee
                } = (0, h.default)(y, U), et = (0, p.default)({
                    guild: ee,
                    channel: B,
                    guildScheduledEvent: n,
                    isActive: K,
                    recurrenceId: b,
                    onActionTaken: D
                }), en = (0, i.default)(x), el = H ? void 0 : e => (0, E.openGuildEventDetails)({
                    eventId: U,
                    parentGuildId: x,
                    recurrenceId: e
                });
                return (0, l.jsx)(T.default, {
                    guild: ee,
                    channel: B,
                    creator: W,
                    name: V,
                    entityType: P,
                    description: null != j ? j : void 0,
                    location: null !== (t = (0, N.getLocationFromEvent)(n)) && void 0 !== t ? t : void 0,
                    imageSource: null != O ? (0, _.default)(n) : void 0,
                    imageLocation: T.GuildEventBodyImageLocation.THUMBNAIL,
                    isActive: K,
                    isUserLurking: H,
                    isJoined: q,
                    isMember: $,
                    isHub: en,
                    speakers: Z,
                    canConnect: X,
                    speakerCount: J,
                    rsvped: k,
                    canInvite: Q,
                    ...et,
                    className: R,
                    onClick: el,
                    truncate: G,
                    isNew: L,
                    guildEventId: U,
                    recurrenceRule: (0, m.recurrenceRuleFromServer)(F),
                    recurrenceId: b
                })
            }
        },
        617347: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventBodyImageLocation: function() {
                    return u
                },
                default: function() {
                    return P
                }
            });
            var l, u, i = n("37983"),
                a = n("884691"),
                r = n("414456"),
                s = n.n(r),
                d = n("446674"),
                o = n("77078"),
                c = n("812204"),
                f = n("685665"),
                E = n("656038"),
                v = n("419830"),
                S = n("817963"),
                g = n("957255"),
                h = n("476263"),
                m = n("718550"),
                N = n("398604"),
                C = n("651072"),
                _ = n("1339"),
                T = n("613767"),
                p = n("822516"),
                I = n("707916"),
                x = n("255050"),
                G = n("400271"),
                D = n("427554"),
                R = n("644189"),
                L = n("29913"),
                U = n("745049"),
                y = n("49111"),
                M = n("782340"),
                A = n("955614");

            function V(e) {
                let {
                    channel: t,
                    onClick: n
                } = e, {
                    canManageAllEvents: l
                } = (0, S.useManageResourcePermissions)(t), u = (0, d.useStateFromStores)([g.default], () => !t.isGuildVocal() || g.default.can(y.Permissions.CONNECT, t), [t]), r = a.useMemo(() => (0, E.default)(t), [t]), c = (0, v.getChannelIconComponent)(t);
                return (0, i.jsx)(o.Tooltip, {
                    text: M.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !u && null != n,
                    children: e => (0, i.jsxs)(o.Clickable, {
                        ...e,
                        className: s(A.inline, A.channelContainer, {
                            [A.channelContainerEnabled]: u && null != n,
                            [A.channelContainerDisabled]: !u && null != n
                        }),
                        onClick: n,
                        children: [(0, i.jsx)(o.Tooltip, {
                            text: M.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                            shouldShow: l && r && u && null != n,
                            children: e => null != c ? (0, i.jsx)(c, {
                                ...e,
                                width: 20,
                                height: 20,
                                className: A.icon
                            }) : null
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: A.channelLocation,
                            children: t.name
                        })]
                    })
                })
            }

            function j(e) {
                let {
                    guild: t,
                    channel: n,
                    onJoinClick: l,
                    handleLocationClick: u,
                    location: a,
                    isExternal: r,
                    isHub: d
                } = e;
                if (d) return null == t ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
                    className: A.inline,
                    children: [(0, i.jsx)(h.default, {
                        className: A.guildIcon,
                        size: h.default.Sizes.MINI,
                        active: !0,
                        guild: t
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == t ? void 0 : t.name
                    })]
                });
                return null != n ? (0, i.jsx)(V, {
                    channel: n,
                    onClick: l
                }) : (0, i.jsxs)(o.Clickable, {
                    className: A.inline,
                    onClick: u,
                    children: [(0, i.jsx)(m.default, {
                        height: 20,
                        width: 20,
                        className: s(A.channelContainer, A.icon)
                    }), (0, i.jsx)(o.Text, {
                        className: r ? A.externalLocation : A.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, _.guildEventDetailsParser)(a, !0)
                    })]
                })
            }

            function P(e) {
                var t;
                let {
                    className: n,
                    guild: l,
                    channel: u,
                    creator: a,
                    name: r,
                    entityType: E,
                    description: v,
                    imageLocation: S = 0,
                    imageSource: g,
                    isActive: h,
                    isUserLurking: m,
                    isJoined: _ = !1,
                    isMember: y = !1,
                    isHub: M = !1,
                    speakers: V,
                    speakerCount: P,
                    rsvped: O,
                    canInvite: F,
                    location: b,
                    truncate: k,
                    onContextMenu: H,
                    onJoinClick: w,
                    onJoinGuildClick: B,
                    onGoToGuildClick: W,
                    onRsvpClick: z,
                    onStartClick: Y,
                    onInviteClick: K,
                    onEndClick: q,
                    onClick: Z,
                    isNew: J,
                    guildEventId: X,
                    eventPreview: Q,
                    recurrenceRule: $,
                    recurrenceId: ee
                } = e, et = (0, T.isChannelPublic)(u, E), en = E === U.GuildScheduledEventEntityTypes.EXTERNAL, {
                    analyticsLocations: el
                } = (0, f.default)(c.default.GUILD_EVENT_CARD), {
                    enabled: eu
                } = C.default.useExperiment({
                    guildId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "",
                    location: el[0]
                }, {
                    autoTrackExposure: !1
                }), ei = (0, d.useStateFromStores)([N.default], () => N.default.getGuildScheduledEvent(X)), ea = [];
                if (null != $ && null != ei) {
                    let e = (0, p.getRRule)($);
                    ea = (0, p.generateNextRecurrences)(4, e, new Date(ei.scheduled_start_time))
                }
                let er = eu && ea.length > 0;
                return (0, i.jsxs)(o.ClickableContainer, {
                    "aria-label": r,
                    onClick: () => null == Z ? void 0 : Z(ee),
                    onContextMenu: H,
                    className: s(A.card, {
                        [A.joined]: _,
                        [A.lurking]: m
                    }, n),
                    children: [(0, i.jsxs)("div", {
                        className: s(A.padding, {
                            [A.isRecurring]: er
                        }),
                        children: [0 === S && (0, i.jsx)(x.default, {
                            source: g
                        }), (0, i.jsx)(G.default, {
                            creator: a,
                            name: r,
                            description: v,
                            imageSource: 1 === S ? g : null,
                            truncate: k,
                            guildId: null == l ? void 0 : l.id,
                            isHub: M,
                            isNew: J,
                            guildEventId: X,
                            eventPreview: Q,
                            recurrenceId: ee
                        }), h && null != l && null != V && P > 0 && (0, i.jsx)(L.default, {
                            guild: l,
                            speakers: V,
                            speakerCount: P,
                            className: A.spacing
                        }), (0, i.jsx)("hr", {
                            className: A.divider
                        }), (0, i.jsxs)("div", {
                            className: s(A.inline, A.footer),
                            children: [(0, i.jsx)(j, {
                                guild: l,
                                channel: u,
                                onJoinClick: w,
                                handleLocationClick: en ? e => e.stopPropagation() : void 0,
                                location: b,
                                isExternal: en,
                                isHub: M
                            }), M ? (0, i.jsx)(R.default, {
                                isActive: h,
                                isUserLurking: m,
                                isMember: y,
                                rsvped: O,
                                onRsvpClick: z,
                                onJoinGuildClick: B,
                                onGoToGuildClick: W,
                                guildName: null == l ? void 0 : l.name,
                                canInvite: F,
                                isChannelPublic: et,
                                onInviteClick: K
                            }) : (0, i.jsx)(I.default, {
                                entityType: E,
                                isJoined: _,
                                isActive: h,
                                isUserLurking: m,
                                rsvped: O,
                                canInvite: F,
                                isChannelPublic: et,
                                onContextMenu: H,
                                onJoinClick: w,
                                onRsvpClick: z,
                                onStartClick: Y,
                                onInviteClick: K,
                                onEndClick: q
                            })]
                        }), er && (0, i.jsx)("hr", {
                            className: A.divider
                        })]
                    }), er && (0, i.jsx)(D.default, {
                        guildId: null == l ? void 0 : l.id,
                        recurrenceRule: $,
                        guildEventId: X,
                        onRecurrenceClick: Z
                    })]
                })
            }(l = u || (u = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"
        },
        558286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildEventModalStore: function() {
                    return u
                }
            });
            var l = n("308503");
            let u = (0, l.default)(e => ({
                canCloseModal: !0,
                onUpdateCanCloseModal(t) {
                    e({
                        canCloseModal: t
                    })
                }
            }))
        },
        659707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("37983"),
                u = n("884691"),
                i = n("917351"),
                a = n.n(i),
                r = n("249654"),
                s = n("446674"),
                d = n("77078"),
                o = n("267363"),
                c = n("15433"),
                f = n("27978"),
                E = n("923959"),
                v = n("124948"),
                S = n("305961"),
                g = n("660478"),
                h = n("476765"),
                m = n("943232"),
                N = n("945330"),
                C = n("599110"),
                _ = n("449008"),
                T = n("933326"),
                p = n("334683"),
                I = n("534222"),
                x = n("473031"),
                G = n("266763"),
                D = n("842672"),
                R = n("745049"),
                L = n("49111"),
                U = n("133335"),
                y = n("782340"),
                M = n("639480");

            function A(e) {
                let {
                    transitionState: t,
                    onClose: i,
                    guildId: A
                } = e, V = (0, h.useUID)(), j = (0, s.useStateFromStores)([S.default], () => S.default.getGuild(A)), P = (0, p.default)(null == j ? void 0 : j.id), O = (0, I.default)(A), F = u.useRef(g.default.ackMessageId(A, U.ReadStateTypes.GUILD_EVENT)), b = (0, D.default)();
                return u.useEffect(() => {
                    O.forEach(e => T.default.getGuildEventUserCounts(A, e.id, [])), T.default.getGuildEventsForCurrentUser(A)
                }, [O, A]), u.useEffect(() => {
                    let e = S.default.getGuild(A);
                    if (!(null == e ? void 0 : e.hasFeature(L.GuildFeatures.HUB))) return;
                    let {
                        showHubEventsList: t
                    } = f.default.getCurrentConfig({
                        guildId: A,
                        location: "d3755f_1"
                    });
                    if (!t) return;
                    let n = E.default.getDefaultChannel(A);
                    null != n && c.fetchDirectoryEntries(n.id)
                }, [A]), u.useEffect(() => {
                    C.default.track(L.AnalyticEvents.OPEN_MODAL, {
                        type: R.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
                        guild_id: A,
                        guild_events_count: O.length
                    })
                }, []), u.useEffect(() => {
                    a(O).map(e => e.creator_id).filter(_.isNotNullish).uniq().forEach(e => {
                        v.default.requestMember(A, e)
                    })
                }, [A, O]), u.useEffect(() => {
                    null != A && (0, o.ackGuildFeature)(A, U.ReadStateTypes.GUILD_EVENT)
                }, [A]), (0, l.jsxs)(d.ModalRoot, {
                    size: d.ModalSize.MEDIUM,
                    transitionState: t,
                    "aria-labelledby": V,
                    children: [(0, l.jsxs)(d.ModalHeader, {
                        className: M.header,
                        children: [(0, l.jsx)(m.default, {
                            className: M.icon
                        }), (0, l.jsx)(d.Heading, {
                            id: V,
                            variant: "heading-md/semibold",
                            children: O.length > 0 ? y.default.Messages.GUILD_EVENTS_PLURAL.format({
                                number: O.length
                            }) : y.default.Messages.GUILD_EVENTS
                        }), P && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: M.divider,
                                children: "|"
                            }), (0, l.jsx)(d.Button, {
                                size: d.Button.Sizes.MIN,
                                onClick: () => {
                                    (0, d.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await n.el("590942").then(n.bind(n, "590942"));
                                        return t => (0, l.jsx)(e, {
                                            ...t,
                                            guildId: A
                                        })
                                    }, b)
                                },
                                innerClassName: M.button,
                                children: y.default.Messages.SCHEDULE_EVENT
                            })]
                        }), (0, l.jsx)(d.Clickable, {
                            onClick: i,
                            className: M.iconButton,
                            "aria-label": y.default.Messages.CLOSE,
                            children: (0, l.jsx)(N.default, {
                                className: M.icon
                            })
                        })]
                    }), (0, l.jsx)(d.ModalContent, {
                        className: M.content,
                        children: O.length > 0 ? O.map(e => (0, l.jsx)(x.default, {
                            guildEvent: e,
                            guildId: A,
                            onActionTaken: i,
                            isNew: null != F.current && r.default.compare(e.id, F.current) > 0
                        }, e.id)) : (0, l.jsx)(G.default, {
                            guildId: A,
                            onClose: i
                        })
                    })]
                })
            }
        },
        266763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                i = n("77078"),
                a = n("592407"),
                r = n("27978"),
                s = n("119184"),
                d = n("305961"),
                o = n("957255"),
                c = n("943232"),
                f = n("49111"),
                E = n("782340"),
                v = n("909199");

            function S(e) {
                let {
                    guildId: t,
                    onClose: n
                } = e, {
                    showHubEventsList: S
                } = r.default.useExperiment({
                    guildId: t,
                    location: "6597ca_1"
                }, {
                    autoTrackExposure: !1
                }), g = (0, u.useStateFromStores)([d.default, o.default], () => {
                    let e = d.default.getGuild(t);
                    return o.default.can(f.Permissions.MANAGE_ROLES, e)
                }, [t]), h = (0, u.useStateFromStores)([d.default], () => {
                    let e = d.default.getGuild(t);
                    return S && (null == e ? void 0 : e.hasFeature(f.GuildFeatures.HUB))
                }, [t, S]);
                return (0, l.jsxs)("div", {
                    className: v.container,
                    children: [(0, l.jsx)(s.default, {
                        children: (0, l.jsx)("div", {
                            className: v.circle,
                            children: (0, l.jsx)(c.default, {
                                height: 40,
                                width: 40,
                                className: v.icon
                            })
                        })
                    }), (0, l.jsx)(i.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: v.title,
                        children: h ? E.default.Messages.HUB_EVENTS_HEADER_TITLE : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE
                    }), (0, l.jsx)(i.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: v.subtitle,
                        children: h ? E.default.Messages.HUB_EVENTS_HEADER_DESCRIPTION : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE
                    }), g && (0, l.jsx)(i.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: v.roleTip,
                        children: E.default.Messages.GUILD_EVENT_ROLE_TIP.format({
                            onClick: () => {
                                a.default.open(t, f.GuildSettingsSections.ROLES), n()
                            }
                        })
                    })]
                })
            }
        },
        29913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("414456"),
                i = n.n(u),
                a = n("77078"),
                r = n("849467"),
                s = n("782340"),
                d = n("130221");

            function o(e) {
                let {
                    guild: t,
                    speakers: n,
                    speakerCount: u,
                    className: o
                } = e, c = n.slice(0, 5), f = c.map(e => {
                    var n, u;
                    return (0, l.jsxs)("div", {
                        className: d.speakerContainer,
                        children: [(0, l.jsx)(a.Avatar, {
                            src: null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
                            size: a.AvatarSizes.SIZE_20,
                            className: d.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, l.jsx)("div", {
                            className: d.textInGridContainer,
                            children: (0, l.jsx)(a.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: d.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (u = e.user) || void 0 === u ? void 0 : u.id)
                }), E = u - c.length;
                return (0, l.jsxs)("div", {
                    className: i(d.grid, o),
                    children: [f, E > 0 && (0, l.jsxs)("div", {
                        className: d.speakerContainer,
                        children: [(0, l.jsx)("div", {
                            className: d.iconMicrophone,
                            children: (0, l.jsx)(r.default, {
                                height: 12
                            })
                        }), (0, l.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: d.textInGrid,
                            children: s.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: E
                            })
                        })]
                    })]
                })
            }
        },
        936965: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var l, u, i = n("37983"),
                a = n("884691"),
                r = n("77078"),
                s = n("271938"),
                d = n("398604"),
                o = n("322224"),
                c = n("822516"),
                f = n("745049"),
                E = n("782340"),
                v = n("616762");

            function S(e, t) {
                let n = s.default.getId();
                return d.default.getRsvp(e, t, n)
            }

            function g(e, t, n, l) {
                let u = S(e, t);
                null != u || l === f.GuildScheduledEventUserResponses.UNINTERESTED && null == t ? o.default.deleteRsvpForGuildEvent(e, t, n) : o.default.createRsvpForGuildEvent(e, t, n, l)
            }(u = l || (l = {}))[u.SERIES = 0] = "SERIES", u[u.RECURRENCE = 1] = "RECURRENCE";

            function h(e) {
                let {
                    event: t,
                    recurrenceId: n,
                    guildId: l,
                    onRsvp: u,
                    ...s
                } = e, [d, o] = a.useState(0), c = S(t.id, null), h = (null == c ? void 0 : c.response) === f.GuildScheduledEventUserResponses.INTERESTED, m = h ? f.GuildScheduledEventUserResponses.UNINTERESTED : f.GuildScheduledEventUserResponses.INTERESTED, N = m === f.GuildScheduledEventUserResponses.INTERESTED ? E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
                return (0, i.jsx)(r.ConfirmModal, {
                    ...s,
                    header: N,
                    confirmText: E.default.Messages.OK,
                    cancelText: E.default.Messages.CANCEL,
                    onConfirm: () => {
                        0 === d ? g(t.id, null, l, m) : g(t.id, n, l, m), null == u || u(), s.onClose()
                    },
                    confirmButtonColor: r.Button.Colors.BRAND,
                    children: (0, i.jsx)(r.RadioGroup, {
                        className: v.responseOptions,
                        value: d,
                        options: [{
                            name: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                            value: 0
                        }, {
                            name: E.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                            value: 1
                        }],
                        onChange: e => o(e.value)
                    })
                })
            }

            function m(e, t, n, l) {
                let u = d.default.getGuildScheduledEvent(e);
                if (null == u) return;
                let a = null != t ? t : (0, c.getNextRecurrenceIdInEvent)(u),
                    s = S(u.id, a);
                null == a ? (g(e, null, n, f.GuildScheduledEventUserResponses.INTERESTED), null == l || l()) : null != s ? (g(e, a, n, f.GuildScheduledEventUserResponses.UNINTERESTED), null == l || l()) : (0, r.openModalLazy)(() => Promise.resolve(e => (0, i.jsx)(h, {
                    ...e,
                    event: u,
                    recurrenceId: a,
                    guildId: n,
                    onRsvp: l
                })))
            }
        },
        842672: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("77078"),
                u = n("244201"),
                i = n("558286"),
                a = n("49111");
            let r = "guild-event-modal";
            var s = () => {
                let e = (0, u.useAppContext)(),
                    t = e === a.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: r,
                    contextKey: t,
                    onCloseRequest: () => {
                        i.useGuildEventModalStore.getState().canCloseModal && (0, l.closeModal)(r, t)
                    }
                }
            }
        },
        27978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2021-11_hub_events",
                label: "Hub Events",
                defaultConfig: {
                    showHubEventsList: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show Hub Events List",
                    config: {
                        showHubEventsList: !0
                    }
                }]
            })
        },
        567469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStageParticipants: function() {
                    return r
                },
                useStageParticipantsCount: function() {
                    return s
                },
                useSortedRequestToSpeakParticipants: function() {
                    return d
                },
                useActualStageSpeakerCount: function() {
                    return o
                }
            }), n("222007");
            var l = n("446674"),
                u = n("334572"),
                i = n("488464"),
                a = n("998716");

            function r(e, t) {
                let [n] = (0, l.useStateFromStores)([i.default], () => [i.default.getMutableParticipants(e, t), i.default.getParticipantsVersion(e)], [e, t], u.isVersionEqual);
                return n
            }

            function s(e, t) {
                return (0, l.useStateFromStores)([i.default], () => i.default.getParticipantCount(e, t), [e, t])
            }

            function d(e) {
                let [t] = (0, l.useStateFromStores)([i.default], () => {
                    let t = i.default.getMutableRequestToSpeakParticipants(e);
                    return [t, i.default.getRequestToSpeakParticipantsVersion(e)]
                }, [e], u.isVersionEqual);
                return t
            }

            function o(e) {
                return (0, l.useStateFromStores)([i.default], () => {
                    let t = i.default.getMutableParticipants(e, a.StageChannelParticipantNamedIndex.SPEAKER),
                        n = t.filter(e => e.type === a.StageChannelParticipantTypes.VOICE);
                    return n.length
                }, [e])
            }
        },
        506885: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("913144"),
                u = n("327037"),
                i = n("462274"),
                a = n("535013"),
                r = n("42203"),
                s = n("26989"),
                d = n("713135"),
                o = n("386714");
            async function c(e, t) {
                var n, c, f;
                let E, {
                    withMutualGuilds: v = !1,
                    withMutualFriendsCount: S = !1,
                    friendToken: g,
                    preloadUserBanner: h = !0,
                    dispatchWait: m = !1,
                    guildId: N,
                    channelId: C
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                null != t && (0, i.maybeFetchColors)(t), null != N && !v && (v = !0), null != N && (E = null !== (c = null === (n = (0, a.getVisibleConnectionsRole)({
                    guildMember: s.default.getMember(N, e),
                    channel: r.default.getChannel(C)
                })) || void 0 === n ? void 0 : n.id) && void 0 !== c ? c : void 0);
                let _ = d.default.getUserProfile(e),
                    T = d.default.getMutualGuilds(e),
                    p = d.default.getMutualFriendsCount(e),
                    I = d.default.isFetchingProfile(e),
                    x = (null == _ ? void 0 : _.profileFetchFailed) || !I && (!Array.isArray(T) && v || null == p && S),
                    G = h ? o.default : void 0,
                    D = !1;
                if (null != N) {
                    let t = d.default.getGuildMemberProfile(e, N);
                    D = null == t
                }
                if (!x && !D && (I || Date.now() - (null !== (f = null == _ ? void 0 : _.lastFetched) && void 0 !== f ? f : 0) < 6e4)) return Promise.resolve();
                m ? await l.default.wait(() => (0, u.fetchProfile)(e, {
                    withMutualGuilds: v,
                    withMutualFriendsCount: S,
                    friendToken: g,
                    guildId: N,
                    connectionsRoleId: E
                }, G)) : await (0, u.fetchProfile)(e, {
                    withMutualGuilds: v,
                    withMutualFriendsCount: S,
                    friendToken: g,
                    guildId: N,
                    connectionsRoleId: E
                }, G)
            }
        },
        386714: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("845579"),
                u = n("217513");

            function i(e, t) {
                if ("undefined" == typeof Image) return;
                let n = (0, u.getDisplayProfile)(e.user.id, t);
                if (null == n) return;
                let i = l.GifAutoPlay.getSetting(),
                    a = n.getBannerURL({
                        canAnimate: i,
                        size: 480
                    });
                if (null == a) return;
                let r = new Image;
                r.src = a
            }
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return r.BotTagTypes
                },
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("414456"),
                i = n.n(u),
                a = n("79798"),
                r = n("988268"),
                s = n("888770"),
                d = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: u,
                        nameColor: r,
                        className: d,
                        botType: o,
                        usernameClass: c,
                        discriminatorClass: f,
                        botClass: E,
                        botVerified: v = !1,
                        style: S,
                        useRemSizes: g = !1,
                        usernameIcon: h
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: i(d, s.nameTag),
                        style: S,
                        children: [(0, l.jsxs)("span", {
                            className: i(s.username, c),
                            style: null != r ? {
                                color: r
                            } : void 0,
                            children: [h, t]
                        }), null != n ? (0, l.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != o ? (0, l.jsx)(a.default, {
                            type: o,
                            invertColor: u,
                            className: i(E, s.bot),
                            verified: v,
                            useRemSizes: g
                        }) : null]
                    })
                }
        },
        849467: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("469563"),
                i = n("696675"),
                a = n("75196"),
                r = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                            className: i,
                            fill: u
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                            className: i,
                            fill: u
                        })]
                    })
                }, i.MicrophoneIcon, void 0, {
                    size: 24
                })
        },
        334572: function(e, t, n) {
            "use strict";

            function l(e, t) {
                let [, n] = e, [, l] = t;
                return n === l
            }
            n.r(t), n.d(t, {
                isVersionEqual: function() {
                    return l
                }
            }), n("222007")
        }
    }
]);