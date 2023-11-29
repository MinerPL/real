(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["70947"], {
        917798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MobilePhoneControllerIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("669491"),
                d = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...a
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, d.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1.184a.5.5 0 0 1 .496.562l-.368 2.942a3.983 3.983 0 0 0 .154 1.704c.117.368-.132.792-.517.792H8a3 3 0 0 1-3-3V4Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M14.018 15a2.287 2.287 0 0 0-2.268 2.003l-.462 3.694a2.049 2.049 0 0 0 4.041.656l.171-.853h3l.17.853a2.049 2.049 0 0 0 4.042-.656l-.462-3.694A2.287 2.287 0 0 0 19.982 15h-5.963Z",
                        className: r
                    })]
                })
            }
        },
        458574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("281071"),
                d = n("65597"),
                i = n("77078"),
                r = n("867965"),
                a = n("42203"),
                s = n("404008"),
                o = n("49111"),
                f = n("782340");

            function c(e, t, n) {
                let c = (0, d.default)([a.default], () => a.default.getChannel(e.parent_id));
                return (0, l.jsx)(i.MenuItem, {
                    id: "channel-copy-link",
                    label: f.default.Messages.COPY_LINK,
                    action: () => {
                        e.isForumPost() && (0, r.trackForumPostLinkCopied)({
                            postId: e.id,
                            location: {
                                section: o.AnalyticsSections.CONTEXT_MENU
                            }
                        }), (0, u.copy)((0, s.getChannelLinkToCopy)(e, c, t, n))
                    }
                })
            }
        },
        308798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("446674"),
                d = n("77078"),
                i = n("18054"),
                r = n("819689"),
                a = n("430475"),
                s = n("610730"),
                o = n("271938"),
                f = n("957255"),
                c = n("49111"),
                E = n("782340");

            function C(e) {
                let t = e.isForumPost(),
                    C = (0, u.useStateFromStores)([o.default], () => e.isOwner(o.default.getId()), [e]),
                    {
                        canManageChannel: S,
                        canAccessChannel: v
                    } = (0, u.useStateFromStoresObject)([f.default], () => ({
                        canAccessChannel: f.default.can(e.accessPermissions, e),
                        canManageChannel: f.default.can(e.isThread() ? c.Permissions.MANAGE_THREADS : c.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    h = (0, u.useStateFromStores)([s.default], () => {
                        var t;
                        return null !== (t = s.default.getCount(e.id)) && void 0 !== t ? t : 0
                    }, [e.id]),
                    {
                        firstMessage: N
                    } = (0, u.useStateFromStores)([a.default], () => a.default.getMessage(e.id), [e.id]),
                    _ = t && (S || C && h < 1),
                    T = t && C && !S && h > 0 && null != N;
                return v && (S || _ || T) ? (0, l.jsx)(d.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === c.ChannelTypes.GUILD_CATEGORY) return E.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return _ ? E.default.Messages.DELETE_FORUM_POST : E.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return E.default.Messages.DELETE_THREAD;
                        return E.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, d.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, l.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), T ? r.default.deleteMessage(e.id, e.id) : i.default.deleteChannel(e.id)
                            },
                            channel: e
                        })
                    })
                }) : null
            }
        },
        962199: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var l = n("917351"),
                u = n.n(l),
                d = n("446674"),
                i = n("913144"),
                r = n("398604"),
                a = n("813006"),
                s = n("730647");
            let o = !1,
                f = {},
                c = {},
                E = {},
                C = e => (E[e.guild_scheduled_event.id] = new a.default(e.guild_scheduled_event.guild), c[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
                    channelId: e.directory_channel_id,
                    scheduledEventId: e.entity_id,
                    type: s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
                    authorId: e.author_id,
                    createdAt: e.created_at
                });
            class S extends d.default.Store {
                isFetching() {
                    return o
                }
                getEventDirectoryEntries(e) {
                    if (null != e) return f[e]
                }
                getCachedGuildByEventId(e) {
                    var t;
                    return null !== (t = E[e]) && void 0 !== t ? t : void 0
                }
                getCachedGuildScheduledEventById(e) {
                    var t;
                    return null !== (t = c[e]) && void 0 !== t ? t : void 0
                }
            }
            S.displayName = "EventDirectoryStore";
            var v = new S(i.default, {
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
                            return (0, r.scheduledEventSort)(e.guild_scheduled_event)
                        }]),
                        d = u.map(l, C);
                    f[t] = d
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    o = !1
                }
            })
        },
        889486: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                handoffRemote: function() {
                    return o
                }
            });
            var l = n("627445"),
                u = n.n(l),
                d = n("629109"),
                i = n("987317"),
                r = n("42887"),
                a = n("700507"),
                s = n("780338");

            function o(e, t) {
                var n;
                let l = null !== (n = e.sessionId) && void 0 !== n ? n : "";
                (0, a.remoteDisconnect)(l), (0, a.disconnectRemote)();
                let o = null != t ? t : e.channelId;
                u(null != o, "attempted to transfer to unknown channel"), e.selfMute !== r.default.isSelfMute() && d.default.toggleSelfMute(), e.selfDeaf !== r.default.isSelfDeaf() && d.default.toggleSelfDeaf(), (0, s.default)(o, "discord_client", l), i.default.selectVoiceChannel(o, !1)
            }
        },
        261552: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                u = n("271938"),
                d = n("800762"),
                i = n("76393");

            function r() {
                let e = (0, l.useStateFromStores)([u.default], () => u.default.getId()),
                    t = (0, l.useStateFromStores)([i.default], () => i.default.getRemoteSessionId());
                return (0, l.useStateFromStores)([d.default], () => {
                    var n;
                    return null !== (n = d.default.getVoiceStateForSession(e, t)) && void 0 !== n ? n : void 0
                })
            }
        },
        742898: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                u = n("47319"),
                d = n("449008"),
                i = n("49111");

            function r() {
                return (0, l.useStateFromStoresArray)([u.default], () => [u.default.getAccount(null, i.PlatformTypes.XBOX), u.default.getAccount(null, i.PlatformTypes.PLAYSTATION), u.default.getAccount(null, i.PlatformTypes.PLAYSTATION_STAGING)].filter(d.isNotNullish))
            }
        },
        424024: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("303800"),
                u = n("998564"),
                d = n("420145"),
                i = n("171644");

            function r(e) {
                return null != e ? e === i.GameConsoleTypes.XBOX ? d.default : u.default : l.default
            }
        },
        379304: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("65597"),
                d = n("77078"),
                i = n("926994"),
                r = n("495194"),
                a = n("945956"),
                s = n("800762"),
                o = n("889486"),
                f = n("261552"),
                c = n("742898"),
                E = n("424024"),
                C = n("49111"),
                S = n("782340");

            function v(e) {
                let t = (0, u.default)([a.default], () => a.default.getChannelId() === e.id),
                    v = (0, f.default)(),
                    h = (null == v ? void 0 : v.channelId) === e.id,
                    N = (0, r.useIsVoiceChannelLocked)(e) && !e.isPrivate(),
                    _ = (0, r.default)(e),
                    T = (0, u.default)([s.default], () => s.default.isInChannel(e.id)),
                    I = !T && _ || N,
                    g = (0, c.default)();
                if (!h && 0 === g.length) return null;
                let m = t => {
                    if (!t.twoWayLink || t.revoked) {
                        (0, i.default)(t.type, "Console Transfer Item");
                        return
                    }
                    t.type === C.PlatformTypes.XBOX ? (0, d.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("613895").then(n.bind(n, "613895"));
                        return n => (0, l.jsx)(t, {
                            ...n,
                            channel: e
                        })
                    }) : (t.type === C.PlatformTypes.PLAYSTATION || t.type === C.PlatformTypes.PLAYSTATION_STAGING) && (0, d.openModalLazy)(async () => {
                        let {
                            default: u
                        } = await n.el("962512").then(n.bind(n, "962512"));
                        return n => (0, l.jsx)(u, {
                            ...n,
                            platform: t.type,
                            channel: e
                        })
                    })
                };
                return (0, l.jsx)(l.Fragment, {
                    children: h ? (0, l.jsx)(d.MenuItem, {
                        label: S.default.Messages.TRANSFER_VOICE_TO_DEVICE,
                        id: "handoff",
                        action: () => {
                            (0, o.handoffRemote)(v)
                        },
                        icon: (0, E.default)(void 0),
                        disabled: I
                    }) : g.map(e => (0, l.jsx)(d.MenuItem, {
                        id: "transfer-".concat(e.type, "-").concat(e.id),
                        label: function(e, t) {
                            if (e === C.PlatformTypes.XBOX) return t ? S.default.Messages.TRANSFER_VOICE_TO_XBOX : S.default.Messages.JOIN_ON_XBOX;
                            if (e === C.PlatformTypes.PLAYSTATION) return t ? S.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE : S.default.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
                            if (e === C.PlatformTypes.PLAYSTATION_STAGING) return t ? S.default.Messages.CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE : S.default.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE
                        }(e.type, t),
                        action: () => m(e),
                        icon: (0, E.default)(e.type),
                        disabled: I
                    }, e.id))
                })
            }
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
                d = n("249654"),
                i = n("745049");

            function r(e, t, n, l) {
                let r = u(),
                    a = new Date(e.scheduled_start_time).getTime(),
                    s = {
                        start: a - i.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
                        end: a
                    };
                if (r.isBetween(s.start, s.end)) {
                    if (null != t) {
                        let e = u(t),
                            n = e.isBetween(s.start, s.end),
                            d = e.isBetween(u(a).subtract(i.ACKED_RECENTLY_WINDOW_DAYS, "days"), a);
                        return n || d && !l ? void 0 : i.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                    }
                    return i.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                }
                let o = d.default.extractTimestamp(e.id),
                    f = Math.min((null != n ? n : o) + i.NEW_EVENT_WINDOW_MILLISECONDS, a),
                    c = r.isBetween(o, f);
                if (c && null == t && !l) return i.UpcomingGuildEventNoticeTypes.NEW_EVENT
            }
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
                d = n("271938"),
                i = n("398604"),
                r = n("49129"),
                a = n("745049");
            let s = {},
                o = {};

            function f(e) {
                let t = {
                    ...s
                };
                delete t[e], s = t;
                let n = {
                    ...o
                };
                delete n[e], o = n
            }
            class c extends l.default.PersistedStore {
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
            c.displayName = "UpcomingEventNoticesStore", c.persistKey = "UpcomingEventNotices";
            var E = new c(u.default, {
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
                    (t.status === a.GuildScheduledEventStatus.CANCELED || t.status === a.GuildScheduledEventStatus.COMPLETED) && f(t.id)
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    f(t.id)
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    let {
                        userId: t,
                        guildEventId: n
                    } = e, l = d.default.getId();
                    if (t !== l) return;
                    let u = i.default.getGuildScheduledEvent(n);
                    if (null == u || u.status !== a.GuildScheduledEventStatus.SCHEDULED) return;
                    let f = s[n];
                    if (null != f) return;
                    let c = o[n],
                        E = (0, r.getNextShownUpcomingEventNoticeType)(u, void 0, c, !1);
                    if (E === a.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
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
        534222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                useActiveEvent: function() {
                    return T
                },
                useActiveEventsByChannel: function() {
                    return I
                },
                useGuildUpcomingEventsNotice: function() {
                    return g
                },
                useGuildActiveEvent: function() {
                    return m
                },
                useGuildChannelScheduledEvents: function() {
                    return p
                },
                useFirstActiveEventChannel: function() {
                    return A
                },
                useImminentUpcomingGuildEvents: function() {
                    return L
                }
            }), n("222007"), n("808653");
            var l = n("884691"),
                u = n("446674"),
                d = n("962199"),
                i = n("42203"),
                r = n("923959"),
                a = n("305961"),
                s = n("957255"),
                o = n("449008"),
                f = n("398604"),
                c = n("49129"),
                E = n("431934"),
                C = n("466148"),
                S = n("822516"),
                v = n("745049"),
                h = n("49111");
            let N = [];

            function _(e, t) {
                return (0, u.useStateFromStoresArray)([a.default, d.default, f.default, s.default, i.default, r.default], () => {
                    let n = a.default.getGuild(e);
                    if (null == n) return N;
                    let l = n.hasFeature(h.GuildFeatures.HUB);
                    if (l) {
                        var u, c;
                        let e = null === (u = r.default.getDefaultChannel(n.id)) || void 0 === u ? void 0 : u.id,
                            t = null !== (c = d.default.getEventDirectoryEntries(e)) && void 0 !== c ? c : [];
                        return t.map(e => {
                            let t = e.scheduledEventId,
                                n = f.default.getGuildScheduledEvent(t);
                            return null != n ? n : d.default.getCachedGuildScheduledEventById(t)
                        }).filter(o.isNotNullish)
                    }
                    let E = f.default.getGuildScheduledEventsByIndex(null != t ? t : f.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
                    return E.filter(e => {
                        let t = e.channel_id;
                        if (null == t) return !0;
                        let n = i.default.getChannel(t);
                        return s.default.can(h.Permissions.VIEW_CHANNEL, n)
                    })
                }, [t, e])
            }

            function T(e) {
                return (0, u.useStateFromStores)([f.default, i.default, s.default], () => {
                    let t = i.default.getChannel(e);
                    if (!s.default.can(h.Permissions.VIEW_CHANNEL, t)) return null;
                    let n = null == t ? void 0 : t.guild_id;
                    if (null == n) return null;
                    let l = f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
                    return l.length > 0 ? l[0] : null
                }, [e])
            }

            function I(e) {
                let t = (0, u.useStateFromStoresArray)([f.default], () => f.default.getGuildScheduledEventsForGuild(e), [e]),
                    n = l.useMemo(() => {
                        let e = new Map;
                        return t.forEach(t => {
                            let n = t.channel_id;
                            null != n && e.set(n, t)
                        }), e
                    }, [t]);
                return n
            }

            function g(e) {
                var t, n;
                let l = (t = e, (0, u.useStateFromStoresArray)([f.default, i.default, s.default], () => {
                        let e = f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === v.GuildScheduledEventEntityTypes.NONE || e.status !== v.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = i.default.getChannel(e.channel_id);
                            return s.default.can(h.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    d = (0, u.useStateFromStoresObject)([E.default], () => E.default.getAllEventDismissals()),
                    r = (0, u.useStateFromStoresObject)([E.default], () => E.default.getAllUpcomingNoticeSeenTimes()),
                    a = (0, u.useStateFromStoresObject)([f.default], () => null == l ? {} : l.reduce((e, t) => {
                        let n = (0, S.getNextRecurrenceIdInEvent)(t);
                        return {
                            ...e,
                            [t.id]: f.default.isInterestedInEventRecurrence(t.id, n)
                        }
                    }, {}), [l]);
                if (null != l && null != a)
                    for (let e = 0; e < l.length; e++) {
                        ;
                        let t = l[e],
                            u = d[t.id],
                            i = r[t.id],
                            s = null !== (n = a[t.id]) && void 0 !== n && n,
                            o = (0, c.getNextShownUpcomingEventNoticeType)(t, u, i, s);
                        if (null != o) return {
                            upcomingEvent: t,
                            noticeType: o
                        }
                    }
            }

            function m(e) {
                return (0, u.useStateFromStores)([f.default, i.default, s.default], () => {
                    let t = f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === v.GuildScheduledEventEntityTypes.NONE || !(0, f.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = i.default.getChannel(e.channel_id);
                        return s.default.can(h.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function p(e) {
                return (0, u.useStateFromStores)([f.default], () => f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
            }

            function A(e) {
                return (0, u.useStateFromStores)([i.default, f.default], () => {
                    let t = f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
                        let t = i.default.getChannel(e.channel_id);
                        return null != t
                    });
                    return i.default.getChannel(null == t ? void 0 : t.channel_id)
                }, [e])
            }

            function L(e) {
                let [t, n] = l.useState(() => Date.now());
                l.useEffect(() => {
                    let e = setInterval(() => {
                        n(Date.now())
                    }, 9e5);
                    return () => clearInterval(e)
                }, []);
                let d = (0, u.useStateFromStores)([f.default], () => null == e ? [] : f.default.getGuildScheduledEventsByIndex(f.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
                    i = l.useMemo(() => d.filter(e => {
                        let {
                            startTime: t,
                            endTime: n
                        } = (0, C.getEventSchedule)(e), {
                            withinStartWindow: l,
                            diffMinutes: u
                        } = (0, S.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
                        return e.status !== v.GuildScheduledEventStatus.ACTIVE && l && u < 15
                    }), [d]);
                return i
            }
        },
        495194: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsVoiceChannelLocked: function() {
                    return s
                },
                default: function() {
                    return o
                }
            });
            var l = n("446674"),
                u = n("305961"),
                d = n("957255"),
                i = n("800762"),
                r = n("404008"),
                a = n("843455");

            function s(e) {
                return (0, l.useStateFromStores)([d.default], () => null == e || !d.default.can(a.Permissions.CONNECT, e), [e])
            }

            function o(e) {
                return (0, l.useStateFromStores)([i.default, u.default], () => (0, r.isChannelFull)(e, i.default, u.default))
            }
        },
        303800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var l = n("37983"),
                u = n("884691"),
                d = n("748820"),
                i = n("469563"),
                r = n("917798"),
                a = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e, [o] = u.useState(() => (0, d.v4)());
                    return (0, l.jsxs)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("g", {
                            clipPath: "url(".concat(o, ")"),
                            children: (0, l.jsx)("path", {
                                className: r,
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M4.83075 2H13.2444C14.817 2 16.0751 3.13475 15.9965 4.55319V11H14.5025V4.69504H3.57264V18.8085H6V22H4.83075C3.25811 22 2 20.8652 2 19.4468V4.55319C2 3.13475 3.25811 2 4.83075 2Z",
                                fill: i
                            })
                        }), (0, l.jsx)("path", {
                            d: "M10.5646 13H19.4354C20.5365 13 21.4507 13.7808 21.5303 14.7893L21.9965 20.6997C22.0492 21.3677 21.5021 21.9485 20.7746 21.9968C20.7429 21.9989 20.7111 22 20.6792 22C19.8442 22 19.1157 21.4795 18.9105 20.7363L18.5495 19.4286H11.4504L11.0894 20.7363C10.8842 21.4795 10.1557 22 9.3207 22C8.5913 22 8 21.4571 8 20.7873C8 20.7581 8.00115 20.7289 8.00345 20.6997L8.46966 14.7893C8.5492 13.7808 9.46342 13 10.5646 13Z",
                            className: r,
                            fill: i
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: o,
                                children: (0, l.jsx)("rect", {
                                    width: "14",
                                    height: "21",
                                    fill: i,
                                    transform: "translate(2 2)"
                                })
                            })
                        })]
                    })
                }, r.MobilePhoneControllerIcon, void 0, {
                    size: 16
                })
        },
        998564: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("75196");

            function d(e) {
                let {
                    width: t = 18,
                    height: n = 18,
                    color: d = "currentColor",
                    foreground: i,
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, u.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 18 18",
                    children: (0, l.jsx)("path", {
                        className: i,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M17.7516 12.8667C17.4035 13.3058 16.5507 13.6191 16.5507 13.6191L10.2065 15.8979V14.2173L14.8754 12.5538C15.4052 12.364 15.4866 12.0956 15.0559 11.9547C14.6261 11.8135 13.8477 11.854 13.3175 12.0446L10.2065 13.1403V11.3962L10.3858 11.3355C10.3858 11.3355 11.2848 11.0173 12.5488 10.8773C13.8129 10.738 15.3607 10.8963 16.5758 11.3569C17.9451 11.7896 18.0993 12.4275 17.7516 12.8667ZM10.8104 10.005V5.70728C10.8104 5.20255 10.7173 4.73788 10.2437 4.60633C9.88107 4.49017 9.65602 4.82693 9.65602 5.33126V16.0938L6.75349 15.1726V2.34009C7.9876 2.56918 9.78554 3.11075 10.7521 3.43658C13.2102 4.2805 14.0436 5.33085 14.0436 7.69748C14.0436 10.0042 12.6197 10.8785 10.8104 10.005ZM1.42767 14.0417C0.0219393 13.6458 -0.212012 12.8209 0.428722 12.3457C1.02089 11.907 2.02793 11.5767 2.02793 11.5767L6.18966 10.0969V11.7839L3.19485 12.8557C2.66583 13.0456 2.58447 13.3143 3.01432 13.4552C3.44458 13.596 4.22334 13.556 4.75317 13.3657L6.18966 12.8444V14.3537C6.09859 14.3699 5.997 14.3861 5.90309 14.4019C4.4662 14.6367 2.9358 14.5387 1.42767 14.0417Z",
                        fill: d
                    })
                })
            }
        },
        420145: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("75196");

            function d(e) {
                let {
                    width: t = 16,
                    height: n = 16,
                    color: d = "currentColor",
                    foreground: i,
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, u.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 60 60",
                    children: (0, l.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, l.jsx)("path", {
                            className: i,
                            fill: d,
                            d: "M8.95185131,8.62650012 L8.92775494,8.65059649 C3.20486729,14.2891468 -0.0119979765,21.9758886 5.02080018e-05,29.9999795 C-0.0119979765,36.56624 2.14462705,42.9517778 6.13257613,48.1686417 C6.16872068,48.2168345 6.24100979,48.252979 6.28920253,48.2168345 C6.33739527,48.1806899 6.34944345,48.120449 6.32534708,48.0602081 C4.03619202,40.9879237 15.722931,23.8433572 21.7711196,16.6626392 C21.795216,16.6385428 21.8193124,16.6144465 21.8193124,16.5783019 C21.8193124,16.5421573 21.795216,16.5060128 21.7590715,16.4819164 C11.6024519,6.37348961 8.8795622,8.68674104 8.92775494,8.65059649 M51.048208,8.62650012 L51.0723044,8.65059649 C56.795192,14.2770987 60.0000091,21.9758886 59.9879609,29.9999795 C60.0000091,36.56624 57.8433841,42.9517778 53.855435,48.1686417 C53.8192905,48.2168345 53.7470014,48.252979 53.6988086,48.2168345 C53.6506159,48.1806899 53.6506159,48.120449 53.6626641,48.0602081 C55.9518191,40.9879237 44.2650801,23.831309 38.2289397,16.650591 C38.2048433,16.6264946 38.180747,16.6023983 38.180747,16.5662537 C38.180747,16.518061 38.2048433,16.4939646 38.2409879,16.4698682 C48.4096556,6.36144143 51.0964008,8.68674104 51.0602562,8.65059649 M30.0000297,0 C36.0482183,0 41.0361667,1.66264946 45.626525,4.38553917 C45.6867659,4.40963554 45.6988141,4.48192464 45.6747177,4.53011738 C45.6506214,4.57831012 45.5903804,4.5903583 45.5301395,4.57831012 C39.7229146,3.32529893 30.8915953,8.33734369 30.0602706,8.84336744 C30.0361742,8.85541562 30.024126,8.86746381 30.0000297,8.86746381 C29.9759333,8.86746381 29.9518369,8.85541562 29.9397887,8.84336744 C27.7229228,7.56625988 19.5663019,3.28915437 14.4217271,4.61445467 C14.3614862,4.62650286 14.3012452,4.61445467 14.2771489,4.56626193 C14.2530525,4.50602101 14.2771489,4.44578009 14.3253416,4.42168372 C18.9156999,1.66264946 23.9638892,0 30.0000297,0 M30.0000297,24.0602245 C30.0361742,24.0602245 30.0723188,24.0843209 30.0964151,24.1084172 C39.0723126,30.9397379 54.4337479,47.8071962 49.7470041,52.5782773 L49.7590523,52.5662291 L49.7590523,52.5782773 L49.7470041,52.5782773 C44.2771283,57.3734547 37.2650849,60.0120071 30.0000297,59.9999589 C22.7349744,60.0120071 15.7108828,57.3734547 10.2530552,52.5782773 L10.2410071,52.5662291 L10.2530552,52.5782773 C5.56631146,47.8071962 20.9277467,30.9276897 29.9036442,24.1084172 C29.9156924,24.0843209 29.9638851,24.0602245 30.0000297,24.0602245"
                        })
                    })
                })
            }
        }
    }
]);