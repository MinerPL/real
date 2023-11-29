(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94106"], {
        69448: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6da6e7ed1d57e445d0e.svg"
        },
        588715: function(e, t, n) {},
        690445: function(e, t, n) {},
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("669491"),
                a = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...r
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M15.298 14.48c-.457.448-1.078.672-1.862.672H12.05V9.188h1.386c.784 0 1.405.224 1.862.672.457.448.686 1.218.686 2.31s-.229 1.862-.686 2.31Z",
                        className: d
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.044V7.34H6V17Zm4.006-9.66V17h3.43c1.465 0 2.595-.415 3.388-1.246.802-.83 1.204-2.025 1.204-3.584 0-1.559-.401-2.753-1.204-3.584-.794-.83-1.923-1.246-3.388-1.246h-3.43Z",
                        clipRule: "evenodd",
                        className: d
                    })]
                })
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("845579"),
                i = n("662255"),
                d = n("306160");

            function r(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: r,
                    shiftId: s,
                    showIconFirst: o
                } = e, c = a.DeveloperMode.useSetting();
                if (__OVERLAY__ || !c || !d.SUPPORTS_COPY) return null;
                let E = "devmode-copy-id-".concat(t);
                return (0, l.jsx)(u.MenuItem, {
                    id: E,
                    label: n,
                    action: function(e) {
                        let n = null != s && e.shiftKey ? s : t;
                        (0, d.copy)(n), null == r || r()
                    },
                    icon: i.default,
                    showIconFirst: o
                }, E)
            }
        },
        962199: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var l = n("917351"),
                u = n.n(l),
                a = n("446674"),
                i = n("913144"),
                d = n("398604"),
                r = n("813006"),
                s = n("730647");
            let o = !1,
                c = {},
                E = {},
                f = {},
                _ = e => (f[e.guild_scheduled_event.id] = new r.default(e.guild_scheduled_event.guild), E[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
                    channelId: e.directory_channel_id,
                    scheduledEventId: e.entity_id,
                    type: s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
                    authorId: e.author_id,
                    createdAt: e.created_at
                });
            class T extends a.default.Store {
                isFetching() {
                    return o
                }
                getEventDirectoryEntries(e) {
                    if (null != e) return c[e]
                }
                getCachedGuildByEventId(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : void 0
                }
                getCachedGuildScheduledEventById(e) {
                    var t;
                    return null !== (t = E[e]) && void 0 !== t ? t : void 0
                }
            }
            T.displayName = "EventDirectoryStore";
            var S = new T(i.default, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    o = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        entries: n
                    } = e;
                    o = !1;
                    let l = u.sortBy([...n], [function(e) {
                            return (0, d.scheduledEventSort)(e.guild_scheduled_event)
                        }]),
                        a = u.map(l, _);
                    c[t] = a
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    o = !1
                }
            })
        },
        49129: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNextShownUpcomingEventNoticeType: function() {
                    return d
                }
            });
            var l = n("866227"),
                u = n.n(l),
                a = n("249654"),
                i = n("745049");

            function d(e, t, n, l) {
                let d = u(),
                    r = new Date(e.scheduled_start_time).getTime(),
                    s = {
                        start: r - i.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
                        end: r
                    };
                if (d.isBetween(s.start, s.end)) {
                    if (null != t) {
                        let e = u(t),
                            n = e.isBetween(s.start, s.end),
                            a = e.isBetween(u(r).subtract(i.ACKED_RECENTLY_WINDOW_DAYS, "days"), r);
                        return n || a && !l ? void 0 : i.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                    }
                    return i.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                }
                let o = a.default.extractTimestamp(e.id),
                    c = Math.min((null != n ? n : o) + i.NEW_EVENT_WINDOW_MILLISECONDS, r),
                    E = d.isBetween(o, c);
                if (E && null == t && !l) return i.UpcomingGuildEventNoticeTypes.NEW_EVENT
            }
        },
        431934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("446674"),
                u = n("913144"),
                a = n("271938"),
                i = n("398604"),
                d = n("49129"),
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
                    let u = i.default.getGuildScheduledEvent(n);
                    if (null == u || u.status !== r.GuildScheduledEventStatus.SCHEDULED) return;
                    let c = s[n];
                    if (null != c) return;
                    let E = o[n],
                        f = (0, d.getNextShownUpcomingEventNoticeType)(u, void 0, E, !1);
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
        },
        598639: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                u = n("962199"),
                a = n("305961");

            function i(e, t) {
                return (0, l.useStateFromStoresObject)([a.default, u.default], () => {
                    let n = a.default.getGuild(e),
                        l = null != n;
                    return null == n && null != t && (n = u.default.getCachedGuildByEventId(t)), {
                        isMember: l,
                        guild: n
                    }
                }, [e, t])
            }
        },
        534222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                },
                useActiveEvent: function() {
                    return N
                },
                useActiveEventsByChannel: function() {
                    return m
                },
                useGuildUpcomingEventsNotice: function() {
                    return M
                },
                useGuildActiveEvent: function() {
                    return h
                },
                useGuildChannelScheduledEvents: function() {
                    return A
                },
                useFirstActiveEventChannel: function() {
                    return C
                },
                useImminentUpcomingGuildEvents: function() {
                    return p
                }
            }), n("222007"), n("808653");
            var l = n("884691"),
                u = n("446674"),
                a = n("962199"),
                i = n("42203"),
                d = n("923959"),
                r = n("305961"),
                s = n("957255"),
                o = n("449008"),
                c = n("398604"),
                E = n("49129"),
                f = n("431934"),
                _ = n("466148"),
                T = n("822516"),
                S = n("745049"),
                I = n("49111");
            let v = [];

            function g(e, t) {
                return (0, u.useStateFromStoresArray)([r.default, a.default, c.default, s.default, i.default, d.default], () => {
                    let n = r.default.getGuild(e);
                    if (null == n) return v;
                    let l = n.hasFeature(I.GuildFeatures.HUB);
                    if (l) {
                        var u, E;
                        let e = null === (u = d.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
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
                        let n = i.default.getChannel(t);
                        return s.default.can(I.Permissions.VIEW_CHANNEL, n)
                    })
                }, [t, e])
            }

            function N(e) {
                return (0, u.useStateFromStores)([c.default, i.default, s.default], () => {
                    let t = i.default.getChannel(e);
                    if (!s.default.can(I.Permissions.VIEW_CHANNEL, t)) return null;
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

            function M(e) {
                var t, n;
                let l = (t = e, (0, u.useStateFromStoresArray)([c.default, i.default, s.default], () => {
                        let e = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === S.GuildScheduledEventEntityTypes.NONE || e.status !== S.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = i.default.getChannel(e.channel_id);
                            return s.default.can(I.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    a = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllEventDismissals()),
                    d = (0, u.useStateFromStoresObject)([f.default], () => f.default.getAllUpcomingNoticeSeenTimes()),
                    r = (0, u.useStateFromStoresObject)([c.default], () => null == l ? {} : l.reduce((e, t) => {
                        let n = (0, T.getNextRecurrenceIdInEvent)(t);
                        return {
                            ...e,
                            [t.id]: c.default.isInterestedInEventRecurrence(t.id, n)
                        }
                    }, {}), [l]);
                if (null != l && null != r)
                    for (let e = 0; e < l.length; e++) {
                        ;
                        let t = l[e],
                            u = a[t.id],
                            i = d[t.id],
                            s = null !== (n = r[t.id]) && void 0 !== n && n,
                            o = (0, E.getNextShownUpcomingEventNoticeType)(t, u, i, s);
                        if (null != o) return {
                            upcomingEvent: t,
                            noticeType: o
                        }
                    }
            }

            function h(e) {
                return (0, u.useStateFromStores)([c.default, i.default, s.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === S.GuildScheduledEventEntityTypes.NONE || !(0, c.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = i.default.getChannel(e.channel_id);
                        return s.default.can(I.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function A(e) {
                return (0, u.useStateFromStores)([c.default], () => c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
            }

            function C(e) {
                return (0, u.useStateFromStores)([i.default, c.default], () => {
                    let t = c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
                        let t = i.default.getChannel(e.channel_id);
                        return null != t
                    });
                    return i.default.getChannel(null == t ? void 0 : t.channel_id)
                }, [e])
            }

            function p(e) {
                let [t, n] = l.useState(() => Date.now());
                l.useEffect(() => {
                    let e = setInterval(() => {
                        n(Date.now())
                    }, 9e5);
                    return () => clearInterval(e)
                }, []);
                let a = (0, u.useStateFromStores)([c.default], () => null == e ? [] : c.default.getGuildScheduledEventsByIndex(c.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
                    i = l.useMemo(() => a.filter(e => {
                        let {
                            startTime: t,
                            endTime: n
                        } = (0, _.getEventSchedule)(e), {
                            withinStartWindow: l,
                            diffMinutes: u
                        } = (0, T.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
                        return e.status !== S.GuildScheduledEventStatus.ACTIVE && l && u < 15
                    }), [a]);
                return i
            }
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
        110374: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("272030"),
                i = n("901582"),
                d = n("861370"),
                r = n("455933"),
                s = n("248900"),
                o = n("385752"),
                c = n("222971"),
                E = n("601131"),
                f = n("876725"),
                _ = n("367989"),
                T = n("510692"),
                S = n("49111"),
                I = n("782340");

            function v(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    channel: v,
                    guild: g,
                    analyticsContext: N,
                    isRecurrenceItem: m = !1,
                    onSelect: M
                } = e, h = (0, _.default)({
                    guildEventId: t,
                    recurrenceId: n,
                    guild: g,
                    channel: v
                }), A = (0, o.default)({
                    guildEventId: t,
                    recurrenceId: n,
                    guild: g,
                    channel: v
                }), C = (0, c.default)({
                    guildEventId: t,
                    guild: g,
                    channel: v,
                    recurrenceId: n,
                    isRecurrenceItem: m
                }), p = (0, E.default)(t, g, v), O = (0, T.default)(t, g, v), D = (0, s.default)(t, g.id, n), R = (0, f.default)(t), L = (0, d.default)({
                    id: null != n ? n : t,
                    label: I.default.Messages.COPY_ID_EVENT
                }), y = (0, r.default)(t, g.id, v);
                return (0, l.jsx)(i.default, {
                    context: N,
                    object: S.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, l.jsxs)(u.Menu, {
                        navId: "user-context",
                        onClose: a.closeContextMenu,
                        "aria-label": I.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: M,
                        children: [(0, l.jsxs)(u.MenuGroup, {
                            children: [null == n && y, null == n && O, C, !m && p, A, h, D]
                        }), null == n && (0, l.jsx)(u.MenuGroup, {
                            children: R
                        }), (0, l.jsx)(u.MenuGroup, {
                            children: L
                        })]
                    })
                })
            }
        },
        455933: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("398351"),
                a = n.n(u),
                i = n("866227"),
                d = n.n(i),
                r = n("730290"),
                s = n("446674"),
                o = n("77078"),
                c = n("49671"),
                E = n("884351"),
                f = n("305961"),
                _ = n("773336"),
                T = n("398604"),
                S = n("745049"),
                I = n("782340");
            let v = "YYYYMMDDTHHmmss",
                g = "YYYY-MM-DDTHH:mm:ss";

            function N(e, t, n) {
                var u;
                let i;
                let N = (0, s.useStateFromStores)([T.default], () => T.default.isActive(e)),
                    m = (0, s.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(e), [e]),
                    M = (0, s.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]);
                if (N || null == m) return null;
                i = m.entity_type === S.GuildScheduledEventEntityTypes.EXTERNAL ? m.entity_metadata.location : null != n && null != M ? I.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
                    channelName: n.name,
                    guildName: M.name
                }) : I.default.Messages.NOTIFICATION_TITLE_DISCORD;
                let h = d(m.scheduled_start_time),
                    A = null != m.scheduled_end_time ? d(m.scheduled_end_time) : h,
                    C = null != m.description && "" !== m.description ? E.default.unparse(m.description, null !== (u = null == n ? void 0 : n.id) && void 0 !== u ? u : "", !0) : "",
                    p = () => {
                        let e = a();
                        e.createEvent({
                            start: h,
                            end: A,
                            summary: m.name,
                            description: C,
                            location: i
                        }), _.isPlatformEmbedded ? c.default.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
                    };
                return (0, l.jsxs)(o.MenuItem, {
                    id: I.default.Messages.ADD_TO_CALENDAR,
                    label: I.default.Messages.ADD_TO_CALENDAR,
                    action: p,
                    children: [(0, l.jsx)(o.MenuItem, {
                        id: I.default.Messages.ADD_TO_GOOGLE_CALENDAR,
                        label: I.default.Messages.ADD_TO_GOOGLE_CALENDAR,
                        action: () => {
                            let e = {
                                    text: m.name,
                                    dates: "".concat(h.format(v), "/").concat(A.format(v)),
                                    details: C,
                                    action: "TEMPLATE",
                                    location: i
                                },
                                t = "https://calendar.google.com/calendar/render?".concat((0, r.stringify)(e));
                            window.open(t, "_blank")
                        }
                    }), (0, l.jsx)(o.MenuItem, {
                        id: I.default.Messages.DOWNLOAD_ICS,
                        label: I.default.Messages.DOWNLOAD_ICS,
                        action: p
                    }), (0, l.jsx)(o.MenuItem, {
                        id: I.default.Messages.ADD_TO_YAHOO,
                        label: I.default.Messages.ADD_TO_YAHOO,
                        action: () => {
                            let e = {
                                    v: 60,
                                    title: m.name,
                                    st: h.format(v),
                                    et: A.format(v),
                                    desc: C,
                                    in_loc: i
                                },
                                t = "https://calendar.yahoo.com/?".concat((0, r.stringify)(e));
                            window.open(t, "_blank")
                        }
                    }), (0, l.jsx)(o.MenuItem, {
                        id: I.default.Messages.ADD_TO_OUTLOOK,
                        label: I.default.Messages.ADD_TO_OUTLOOK,
                        action: () => {
                            let e = {
                                    path: "/calendar/action/compose",
                                    rru: "addevent",
                                    startdt: h.format(g),
                                    enddt: A.format(g),
                                    subject: m.name,
                                    body: C,
                                    location: i,
                                    allday: !1
                                },
                                t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, r.stringify)(e));
                            window.open(t, "_blank")
                        }
                    })]
                })
            }
        },
        248900: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("306160"),
                i = n("598639"),
                d = n("49111"),
                r = n("782340");

            function s(e, t, n) {
                let s = null != n,
                    {
                        isMember: o
                    } = (0, i.default)(t, e);
                if (!o) return null;

                function c() {
                    let l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    (0, a.copy)("".concat(location.protocol, "//").concat(location.host).concat(d.Routes.GUILD_EVENT_DETAILS(t, e, l ? null : n))), (0, u.showToast)((0, u.createToast)(r.default.Messages.COPIED_LINK, u.ToastType.SUCCESS))
                }
                return (0, l.jsx)(u.MenuItem, {
                    id: r.default.Messages.COPY_EVENT_LINK,
                    label: r.default.Messages.COPY_EVENT_LINK,
                    action: s ? void 0 : () => c(!0),
                    children: s && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(u.MenuItem, {
                            id: r.default.Messages.COPY_RECURRENCE_LINK,
                            label: r.default.Messages.COPY_RECURRENCE_LINK,
                            action: () => c(!1)
                        }), (0, l.jsx)(u.MenuItem, {
                            id: r.default.Messages.COPY_SERIES_LINK,
                            label: r.default.Messages.COPY_SERIES_LINK,
                            action: () => c(!0)
                        })]
                    })
                })
            }
        },
        385752: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                i = n("817963"),
                d = n("299039"),
                r = n("398604"),
                s = n("322224"),
                o = n("397680"),
                c = n("466148"),
                E = n("782340");

            function f(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    guild: f,
                    channel: _
                } = e, T = null != n, {
                    canManageGuildEvent: S
                } = (0, i.useManageResourcePermissions)(null != _ ? _ : f), [I, v] = (0, u.useStateFromStoresArray)([r.default], () => [r.default.isActive(t), r.default.getGuildScheduledEvent(t)]), g = (0, o.default)(n, null == v ? void 0 : v.id), N = null != v && S(v), m = (null == v ? void 0 : v.recurrence_rule) != null && !T, M = T && (null == g || !g.is_canceled), {
                    startTime: h
                } = (0, c.default)(t, n);
                if (!N || I && !m && !T || T && !M || null == v) return null;
                if (I && T) {
                    var A;
                    if (null == h) return null;
                    let e = new Date(null !== (A = null == g ? void 0 : g.scheduled_start_time) && void 0 !== A ? A : h);
                    if (new Date > e) return null
                }
                let C = () => {
                        if (null != n) {
                            if (null != g) s.default.updateGuildEventException({
                                is_canceled: !0
                            }, f.id, t, n);
                            else {
                                let e = d.default.extractTimestamp(n);
                                s.default.createGuildEventException({
                                    original_scheduled_start_time: new Date(e).toISOString(),
                                    is_canceled: !0
                                }, f.id, t)
                            }
                        }
                    },
                    p = e => {
                        (0, a.openModal)(n => (0, l.jsxs)(a.ConfirmModal, {
                            ...n,
                            header: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                            confirmText: m || e ? E.default.Messages.DELETE_ALL_EVENTS : E.default.Messages.DELETE_EVENT,
                            cancelText: E.default.Messages.NEVERMIND,
                            onConfirm: () => T && !e ? C() : s.default.deleteGuildEvent(t, f.id),
                            children: [(0, l.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                            }), (0, l.jsx)("br", {}), (m || e) && (0, l.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: E.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY_IS_RECURRING.format()
                            })]
                        }))
                    };
                return (0, l.jsx)(a.MenuItem, {
                    id: E.default.Messages.DELETE_EVENT,
                    label: E.default.Messages.DELETE_EVENT,
                    action: T ? void 0 : () => p(),
                    color: "danger",
                    children: T && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(a.MenuItem, {
                            id: E.default.Messages.DELETE_THIS_EVENT,
                            label: E.default.Messages.DELETE_THIS_EVENT,
                            action: () => p(),
                            color: "danger"
                        }), (0, l.jsx)(a.MenuItem, {
                            id: E.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                            label: E.default.Messages.DELETE_ALL_EVENTS_IN_SERIES,
                            action: () => p(!0),
                            color: "danger"
                        })]
                    })
                })
            }
        },
        222971: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                i = n("817963"),
                d = n("398604"),
                r = n("397680"),
                s = n("842672"),
                o = n("782340");

            function c(e) {
                let {
                    guildEventId: t,
                    guild: c,
                    channel: E,
                    recurrenceId: f,
                    isRecurrenceItem: _
                } = e, {
                    canManageGuildEvent: T
                } = (0, i.useManageResourcePermissions)(null != E ? E : c), S = (0, u.useStateFromStores)([d.default], () => d.default.getGuildScheduledEvent(t)), I = T(S), v = (0, s.default)(), g = (0, r.default)(f, null == S ? void 0 : S.id);
                if (!I || null == S || (null == g ? void 0 : g.is_canceled)) return null;
                let N = null != S.recurrence_rule && !_,
                    m = e => {
                        (null == f || e) && !_ ? (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("590942").then(n.bind(n, "590942"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                guildScheduledEventId: t,
                                guildId: c.id
                            })
                        }, v) : null != f && (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("229798").then(n.bind(n, "229798"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                guildEvent: S,
                                recurrenceId: f
                            })
                        }, v)
                    };
                return (0, l.jsx)(a.MenuItem, {
                    id: o.default.Messages.EDIT_EVENT,
                    label: o.default.Messages.EDIT_EVENT,
                    action: N ? void 0 : () => m(!0),
                    children: N && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(a.MenuItem, {
                            id: o.default.Messages.EDIT_THIS_EVENT,
                            label: o.default.Messages.EDIT_THIS_EVENT,
                            action: () => m(!1)
                        }), (0, l.jsx)(a.MenuItem, {
                            id: o.default.Messages.EDIT_ALL_EVENTS,
                            label: o.default.Messages.EDIT_ALL_EVENTS,
                            action: () => m(!0)
                        })]
                    })
                })
            }
        },
        601131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                i = n("817963"),
                d = n("244480"),
                r = n("398604"),
                s = n("322224"),
                o = n("745049"),
                c = n("782340");

            function E(e, t, n) {
                let {
                    canManageGuildEvent: E
                } = (0, i.useManageResourcePermissions)(null != n ? n : t), f = (0, u.useStateFromStores)([r.default], () => r.default.isActive(e)), _ = (0, u.useStateFromStores)([r.default], () => r.default.getGuildScheduledEvent(e), [e]), T = E(_);
                if (null == e || !T || !f || (null == _ ? void 0 : _.entity_type) === o.GuildScheduledEventEntityTypes.EXTERNAL) return null;
                let S = () => {
                    if (null == n ? void 0 : n.isGuildStageVoice()) {
                        (0, d.endStage)(n);
                        return
                    }
                    null != e && s.default.endEvent(e, t.id), (0, a.closeAllModals)()
                };
                return (0, l.jsx)(a.MenuItem, {
                    id: c.default.Messages.END_EVENT,
                    label: c.default.Messages.END_EVENT,
                    action: function() {
                        (0, a.openModal)(e => (0, l.jsx)(a.ConfirmModal, {
                            ...e,
                            header: c.default.Messages.END_EVENT,
                            confirmText: c.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                            cancelText: c.default.Messages.CANCEL,
                            onConfirm: S,
                            children: (0, l.jsx)(a.Text, {
                                variant: "text-md/normal",
                                children: c.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                            })
                        }))
                    },
                    color: "danger"
                })
            }
        },
        876725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                i = n("377114"),
                d = n("907566"),
                r = n("398604"),
                s = n("782340");

            function o(e) {
                let t = (0, u.useStateFromStores)([r.default], () => r.default.getGuildScheduledEvent(e), [e]);
                return null == e || null == t ? null : (0, l.jsx)(a.MenuItem, {
                    id: "report-event",
                    label: s.default.Messages.REPORT_MODAL_REPORT_EVENT_MENU_ITEM,
                    action: () => (0, i.showReportModalForGuildScheduledEvent)(t),
                    icon: d.default,
                    color: "danger"
                })
            }
        },
        367989: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                i = n("817963"),
                d = n("398604"),
                r = n("322224"),
                s = n("397680"),
                o = n("782340");

            function c(e) {
                let {
                    guildEventId: t,
                    recurrenceId: n,
                    guild: c,
                    channel: E
                } = e, f = null != n, {
                    canManageGuildEvent: _
                } = (0, i.useManageResourcePermissions)(null != E ? E : c), [T, S] = (0, u.useStateFromStoresArray)([d.default], () => [d.default.isActive(t), d.default.getGuildScheduledEvent(t)]), I = (0, s.default)(n, null == S ? void 0 : S.id), v = null != S && _(S), g = f && (null == I ? void 0 : I.is_canceled) && v;
                return g && (!T || f) ? (0, l.jsx)(a.MenuItem, {
                    id: o.default.Messages.RESTORE_EVENT,
                    label: o.default.Messages.RESTORE_EVENT,
                    action: () => {
                        if (null == n || null == I) return;
                        let {
                            scheduled_start_time: e,
                            scheduled_end_time: l
                        } = I;
                        null == e && null == l ? r.default.deleteGuildEventException(c.id, t, n) : r.default.updateGuildEventException({
                            scheduled_start_time: e,
                            scheduled_end_time: l,
                            is_canceled: !1
                        }, c.id, t, n)
                    }
                }) : null
            }
        },
        510692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                a = n("77078"),
                i = n("817963"),
                d = n("398604"),
                r = n("534222"),
                s = n("782340");

            function o(e, t, o) {
                var c;
                let {
                    canManageGuildEvent: E
                } = (0, i.useManageResourcePermissions)(null != o ? o : t), f = (0, u.useStateFromStores)([d.default], () => d.default.getGuildScheduledEvent(e), [e]), _ = E(f), T = null != (0, r.useActiveEvent)(null !== (c = null == o ? void 0 : o.id) && void 0 !== c ? c : ""), S = null != f && (0, d.isGuildScheduledEventActive)(f);
                return _ && !S && !T ? (0, l.jsx)(a.MenuItem, {
                    id: s.default.Messages.START_EVENT,
                    label: s.default.Messages.START_EVENT,
                    action: function() {
                        null != f && (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("298843").then(n.bind(n, "298843"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                event: f
                            })
                        })
                    }
                }) : null
            }
        },
        842672: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("77078"),
                u = n("244201"),
                a = n("558286"),
                i = n("49111");
            let d = "guild-event-modal";
            var r = () => {
                let e = (0, u.useAppContext)(),
                    t = e === i.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: d,
                    contextKey: t,
                    onCloseRequest: () => {
                        a.useGuildEventModalStore.getState().canCloseModal && (0, l.closeModal)(d, t)
                    }
                }
            }
        },
        217145: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalUserEnabled: function() {
                    return a
                }
            });
            var l = n("862205");
            let u = (0, l.createExperiment)({
                kind: "user",
                id: "2023-07_iframe_modal",
                label: "iFrame Modal",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrameModal",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function a() {
                return u.getCurrentConfig({
                    location: "5c0a70_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        429682: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalForGuildEnabled: function() {
                    return a
                }
            });
            var l = n("862205");
            let u = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-08_iframe_modal_guild",
                label: "iFrame Modal guild experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrame Modal Guild",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function a(e) {
                return u.getCurrentConfig({
                    guildId: null != e ? e : "",
                    location: "2d360b_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        988878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("217145"),
                u = n("429682");

            function a(e) {
                return (0, l.isIFrameModalUserEnabled)() || (0, u.isIFrameModalForGuildEnabled)(e)
            }
        },
        809810: function(e, t, n) {
            "use strict";
            let l, u;
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var a = n("446674"),
                i = n("913144"),
                d = n("798609"),
                r = n("42203"),
                s = n("3765");
            let o = {},
                c = {},
                E = {};

            function f(e) {
                delete o[e];
                let t = E[e];
                null != t && delete c[t], delete E[e]
            }
            class _ extends a.default.Store {
                getInteraction(e) {
                    let t = c[e.id];
                    return null != t ? o[t] : null
                }
                getMessageInteractionStates() {
                    let e = {};
                    for (let [t, n] of Object.entries(o)) {
                        let l = E[t];
                        null != l && (e[l] = n.state)
                    }
                    return e
                }
                canQueueInteraction(e, t) {
                    let n = c[e];
                    return (null == n || null == o[n] || o[n].state === s.InteractionState.FAILED) && (null == o[t] || o[t].state === s.InteractionState.FAILED) && !0
                }
                getIFrameModalApplicationId() {
                    return u
                }
                getIFrameModalKey() {
                    return l
                }
            }
            _.displayName = "InteractionStore";
            var T = new _(i.default, {
                LOGOUT: function() {
                    o = {}, c = {}, E = {}
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        nonce: t,
                        messageId: n,
                        data: l,
                        onCreate: u,
                        onCancel: a,
                        onSuccess: i,
                        onFailure: d
                    } = e;
                    null != n && (c[n] = t, E[t] = n), o[t] = {
                        state: s.InteractionState.QUEUED,
                        data: l,
                        onCreate: u,
                        onCancel: a,
                        onSuccess: i,
                        onFailure: d
                    }
                },
                INTERACTION_CREATE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        interactionId: l
                    } = e;
                    if (null == n) return !1;
                    let u = o[n];
                    if (null == u || u.state !== s.InteractionState.QUEUED) return !1;
                    u.state = s.InteractionState.CREATED, null === (t = u.onCreate) || void 0 === t || t.call(u, l)
                },
                INTERACTION_SUCCESS: function(e) {
                    var t;
                    let {
                        nonce: n
                    } = e;
                    if (null == n) return !1;
                    let l = o[n];
                    if (null == l) return !1;
                    null === (t = l.onSuccess) || void 0 === t || t.call(l), f(n)
                },
                INTERACTION_FAILURE: function(e) {
                    var t;
                    let {
                        nonce: n,
                        errorCode: l,
                        errorMessage: u
                    } = e;
                    if (null == n) return !1;
                    let a = o[n];
                    if (null == a) return !1;
                    null === (t = a.onFailure) || void 0 === t || t.call(a, l, u), a.data.interactionType === d.InteractionTypes.APPLICATION_COMMAND ? f(n) : o[n] = {
                        ...a,
                        state: s.InteractionState.FAILED,
                        errorCode: l,
                        errorMessage: u
                    }
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e;
                    if (null == t.nonce) return !1;
                    {
                        var n;
                        let e = o[t.nonce];
                        if (null == e) return !1;
                        null === (n = e.onSuccess) || void 0 === n || n.call(e), f(t.nonce)
                    }
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e, n = r.default.getChannel(t);
                    if (null == n) return !1;
                    for (let [e, t] of Object.entries(o)) t.state === s.InteractionState.FAILED && f(e)
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        application: t
                    } = e;
                    u = t.id
                },
                INTERACTION_IFRAME_MODAL_CLOSE: function() {
                    l = void 0, u = void 0
                },
                INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
                    let {
                        modalKey: t
                    } = e;
                    l = t
                }
            })
        },
        3765: function(e, t, n) {
            "use strict";
            var l, u;
            n.r(t), n.d(t, {
                InteractionState: function() {
                    return l
                }
            }), (u = l || (l = {}))[u.QUEUED = 0] = "QUEUED", u[u.CREATED = 1] = "CREATED", u[u.FAILED = 2] = "FAILED"
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return v
                },
                inviteUserToStage: function() {
                    return g
                },
                audienceAckRequestToSpeak: function() {
                    return N
                },
                moveSelfToAudience: function() {
                    return m
                },
                setUserSuppress: function() {
                    return M
                },
                moveUserToAudience: function() {
                    return h
                },
                setEveryoneRolePermissionAllowed: function() {
                    return A
                },
                startStage: function() {
                    return C
                },
                editStage: function() {
                    return p
                },
                endStage: function() {
                    return O
                }
            });
            var l = n("627445"),
                u = n.n(l),
                a = n("316693"),
                i = n("872717"),
                d = n("450911");
            n("851387");
            var r = n("798609"),
                s = n("716241"),
                o = n("18494"),
                c = n("800762"),
                E = n("991170"),
                f = n("716214"),
                _ = n("230324"),
                T = n("738983"),
                S = n("808422"),
                I = n("49111");

            function v(e, t) {
                let n = e.getGuildId();
                return u(null != n, "This channel cannot be guildless."), t && (0, s.trackWithMetadata)(I.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function g(e, t) {
                let n = e.getGuildId();
                return u(null != n, "This channel cannot be guildless."), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function N(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = null == e ? void 0 : e.getGuildId();
                u(null != l, "This channel cannot be guildless.");
                let a = c.default.getVoiceStateForChannel(e.id),
                    d = (0, S.getAudienceRequestToSpeakState)(a);
                return d === S.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, s.trackWithMetadata)(I.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(l),
                    body: {
                        suppress: t,
                        request_to_speak_timestamp: null,
                        channel_id: e.id,
                        ...n ? {
                            silent: n
                        } : {}
                    }
                })
            }

            function m(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return u(null != t, "This channel cannot be guildless."), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function M(e, t, n) {
                let l = e.getGuildId();
                return u(null != l, "This channel cannot be guildless."), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(l, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function h(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return u(null != n, "This channel cannot be guildless."), M(t, e.id, !0), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function A(e, t, n) {
                let l = e.getGuildId();
                u(null != l, "Channel cannot be guildless");
                let i = e.permissionOverwrites[l],
                    s = {
                        id: l,
                        type: r.PermissionOverwriteType.ROLE,
                        allow: E.default.NONE,
                        deny: E.default.NONE,
                        ...i
                    };
                n ? (s.allow = a.default.add(s.allow, t), s.deny = a.default.remove(s.deny, t)) : (s.allow = a.default.remove(s.allow, t), s.deny = a.default.add(s.deny, t)), d.default.updatePermissionOverwrite(e.id, s)
            }
            async function C(e, t, n, l) {
                if ("" === t) return;
                let u = o.default.getVoiceChannelId() === e.id;
                !u && (0, f.connectToStage)(e);
                let a = await (0, T.startStageInstance)(e.id, t, n, l);
                return N(e, !1, !0), a
            }
            async function p(e, t, n) {
                if ("" === t) return;
                let l = await (0, T.updateStageInstance)(e.id, t, n);
                return l
            }
            async function O(e) {
                await (0, T.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return E
                },
                getStageChannelMetadata: function() {
                    return f
                }
            }), n("808653"), n("222007"), n("917351");
            var l = n("945956"),
                u = n("387111"),
                a = n("991170"),
                i = n("834052"),
                d = n("837979"),
                r = n("49111"),
                s = n("606762"),
                o = n("782340");

            function c(e, t, n, l) {
                let a = t[0],
                    i = u.default.getName(e, n, a),
                    d = null != l ? l : t.length;
                return 1 === d && null != a ? i : null == a ? o.default.Messages.SPEAKING_COUNT.format({
                    count: d
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: i,
                    count: d - 1
                })
            }

            function E(e, t) {
                switch (e) {
                    case s.RowType.OWNER:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case s.RowType.ADMINISTRATOR:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case s.RowType.MEMBER:
                    case s.RowType.ROLE:
                        return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case s.RowType.EMPTY_STATE:
                }
                return null
            }

            function f(e) {
                let t = i.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: l.default.getMediaSessionId(),
                    request_to_speak_state: a.default.canEveryoneRole(r.Permissions.REQUEST_TO_SPEAK, e) ? d.RequestToSpeakPermissionStates.EVERYONE : d.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return a
                },
                updateStageInstance: function() {
                    return i
                },
                endStageInstance: function() {
                    return d
                }
            });
            var l = n("872717"),
                u = n("49111");
            async function a(e, t, n, a, i) {
                let d = await l.default.post({
                    url: u.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: i,
                        send_start_notification: a
                    }
                });
                return d.body
            }
            async function i(e, t, n) {
                let a = await l.default.patch({
                    url: u.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return a.body
            }

            function d(e) {
                return l.default.delete(u.Endpoints.STAGE_INSTANCE(e))
            }
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return u
                },
                default: function() {
                    return _
                }
            });
            var l, u, a = n("37983");
            n("884691");
            var i = n("414456"),
                d = n.n(i),
                r = n("77078"),
                s = n("36694"),
                o = n("381546"),
                c = n("68238"),
                E = n("423487"),
                f = n("557296");
            (l = u || (u = {}))[l.WARNING = 0] = "WARNING", l[l.INFO = 1] = "INFO", l[l.ERROR = 2] = "ERROR", l[l.POSITIVE = 3] = "POSITIVE";
            var _ = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: l,
                    textColor: u = "text-normal",
                    textVariant: i = "text-sm/medium"
                } = e, _ = function(e) {
                    switch (e) {
                        case 0:
                            return E.default;
                        case 1:
                            return c.default;
                        case 2:
                            return o.default;
                        case 3:
                            return s.default
                    }
                }(n), T = function(e) {
                    switch (e) {
                        case 0:
                            return f.warning;
                        case 1:
                            return f.info;
                        case 2:
                            return f.error;
                        case 3:
                            return f.positive
                    }
                }(n);
                return (0, a.jsxs)("div", {
                    className: d(f.container, T, l),
                    children: [(0, a.jsx)("div", {
                        className: f.iconDiv,
                        children: (0, a.jsx)(_, {
                            className: f.icon
                        })
                    }), (0, a.jsx)(r.Text, {
                        className: f.text,
                        color: u,
                        variant: i,
                        children: t
                    })]
                })
            }
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("469563"),
                a = n("35647"),
                i = n("75196"),
                d = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        foreground: a,
                        ...d
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: a,
                            fill: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, a.IdIcon, void 0, {
                    size: 24
                })
        }
    }
]);