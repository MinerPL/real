(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["19653"], {
        962199: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var E = n("917351"),
                a = n.n(E),
                _ = n("446674"),
                l = n("913144"),
                s = n("398604"),
                d = n("813006"),
                T = n("730647");
            let u = !1,
                i = {},
                r = {},
                I = {},
                L = e => (I[e.guild_scheduled_event.id] = new d.default(e.guild_scheduled_event.guild), r[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
                    channelId: e.directory_channel_id,
                    scheduledEventId: e.entity_id,
                    type: T.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
                    authorId: e.author_id,
                    createdAt: e.created_at
                });
            class C extends _.default.Store {
                isFetching() {
                    return u
                }
                getEventDirectoryEntries(e) {
                    if (null != e) return i[e]
                }
                getCachedGuildByEventId(e) {
                    var t;
                    return null !== (t = I[e]) && void 0 !== t ? t : void 0
                }
                getCachedGuildScheduledEventById(e) {
                    var t;
                    return null !== (t = r[e]) && void 0 !== t ? t : void 0
                }
            }
            C.displayName = "EventDirectoryStore";
            var A = new C(l.default, {
                EVENT_DIRECTORY_FETCH_START: function() {
                    u = !0
                },
                EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        entries: n
                    } = e;
                    u = !1;
                    let E = a.sortBy([...n], [function(e) {
                            return (0, s.scheduledEventSort)(e.guild_scheduled_event)
                        }]),
                        _ = a.map(E, L);
                    i[t] = _
                },
                EVENT_DIRECTORY_FETCH_FAILURE: function() {
                    u = !1
                }
            })
        },
        730647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DirectoryEntryTypes: function() {
                    return s
                },
                CreateOrAddGuildSlideTypes: function() {
                    return d
                },
                HubGuildTemplateId: function() {
                    return T
                },
                DirectoryEntryCategories: function() {
                    return u
                },
                getHubCategories: function() {
                    return C
                },
                getHubGuildTemplatesMap: function() {
                    return A
                }
            });
            var E, a, _, l, s, d, T, u, i = n("316693"),
                r = n("991170"),
                I = n("49111"),
                L = n("782340");
            (E = s || (s = {}))[E.GUILD = 0] = "GUILD", E[E.GUILD_SCHEDULED_EVENT = 1] = "GUILD_SCHEDULED_EVENT", (a = d || (d = {})).GUILD_TEMPLATES = "guild-templates", a.CUSTOMIZE_NEW_GUILD = "customize-new-guild", a.CHOOSE_GUILD = "choose-guild", a.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild", a.CONFIRMATION = "confirmation", (_ = T || (T = {})).CREATE = "CREATE", _.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB", _.HUB_STUDY = "HUB_STUDY", _.HUB_CLASS = "HUB_CLASS", _.HUB_SOCIAL = "HUB_SOCIAL", _.HUB_MAJOR = "HUB_MAJOR", _.HUB_DORM = "HUB_DORM", (l = u || (u = {}))[l.ALL = -1] = "ALL", l[l.UNCATEGORIZED = 0] = "UNCATEGORIZED", l[l.SCHOOL_CLUB = 1] = "SCHOOL_CLUB", l[l.CLASS = 2] = "CLASS", l[l.STUDY_SOCIAL = 3] = "STUDY_SOCIAL", l[l.MISC = 5] = "MISC";

            function C(e) {
                return "883060064561299456" === e ? [{
                    value: u.SCHOOL_CLUB,
                    label: L.default.Messages.DIRECTORY_CATEGORY_INTERNAL_1
                }, {
                    value: u.CLASS,
                    label: L.default.Messages.DIRECTORY_CATEGORY_INTERNAL_2
                }, {
                    value: u.STUDY_SOCIAL,
                    label: L.default.Messages.DIRECTORY_CATEGORY_INTERNAL_3
                }, {
                    value: u.MISC,
                    label: L.default.Messages.DIRECTORY_CATEGORY_INTERNAL_5
                }] : [{
                    value: u.SCHOOL_CLUB,
                    label: L.default.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,
                    idealSize: 100
                }, {
                    value: u.CLASS,
                    label: L.default.Messages.DIRECTORY_CATEGORY_CLASS
                }, {
                    value: u.STUDY_SOCIAL,
                    label: L.default.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,
                    idealSize: 50
                }, {
                    value: u.MISC,
                    label: L.default.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS
                }]
            }

            function A() {
                return {
                    [T.CREATE]: {
                        id: T.CREATE,
                        code: "2TffvPucqHkN",
                        label: L.default.Messages.GUILD_TEMPLATE_HEADER_CREATE,
                        channels: [],
                        system_channel_id: null
                    },
                    [T.HUB_SCHOOL_CLUB]: {
                        id: T.HUB_SCHOOL_CLUB,
                        code: "UMUbvRpRZhS6",
                        label: L.default.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "03",
                            parent_id: "00",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: I.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,
                            type: I.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,
                            type: I.ChannelTypes.GUILD_VOICE
                        }],
                        roles: [{
                            id: "00",
                            name: "@everyone",
                            permissions: r.default.DEFAULT
                        }, {
                            id: "01",
                            name: "officers (example)",
                            mentionable: !0,
                            hoist: !0,
                            permissions: i.default.combine(r.default.DEFAULT, I.Permissions.MANAGE_ROLES, I.Permissions.MANAGE_CHANNELS, I.Permissions.KICK_MEMBERS, I.Permissions.BAN_MEMBERS, I.Permissions.MANAGE_NICKNAMES, I.Permissions.MANAGE_GUILD_EXPRESSIONS, I.Permissions.MANAGE_MESSAGES, I.Permissions.SEND_TTS_MESSAGES),
                            color: 3066993
                        }],
                        system_channel_id: "12"
                    },
                    [T.HUB_STUDY]: {
                        id: T.HUB_STUDY,
                        code: "2JBhzzca2vfT",
                        label: L.default.Messages.GUILD_TEMPLATE_HEADER_STUDY,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: I.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: I.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: I.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [T.HUB_CLASS]: {
                        id: T.HUB_CLASS,
                        code: "r86WWBwTGspb",
                        label: L.default.Messages.GUILD_TEMPLATE_HEADER_CLASS,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: I.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: I.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: I.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [T.HUB_SOCIAL]: {
                        id: T.HUB_SOCIAL,
                        code: "AvvtXE3mfbCR",
                        label: L.default.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "03",
                            parent_id: "00",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "04",
                            parent_id: "00",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_MEETUPS,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                            type: I.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                            type: I.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,
                            type: I.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "02"
                    },
                    [T.HUB_MAJOR]: {
                        id: T.HUB_MAJOR,
                        code: "FhmfDR6Arvsc",
                        label: L.default.Messages.GUILD_TEMPLATE_HEADER_MAJOR,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: I.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: I.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: I.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [T.HUB_DORM]: {
                        id: T.HUB_DORM,
                        code: "fkq8xHfrGE58",
                        label: L.default.Messages.GUILD_TEMPLATE_HEADER_DORM,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: I.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: I.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: I.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                            type: I.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: L.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                            type: I.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    }
                }
            }
        },
        49129: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNextShownUpcomingEventNoticeType: function() {
                    return s
                }
            });
            var E = n("866227"),
                a = n.n(E),
                _ = n("249654"),
                l = n("745049");

            function s(e, t, n, E) {
                let s = a(),
                    d = new Date(e.scheduled_start_time).getTime(),
                    T = {
                        start: d - l.EVENT_STARTING_SOON_WINDOW_MILLISECONDS,
                        end: d
                    };
                if (s.isBetween(T.start, T.end)) {
                    if (null != t) {
                        let e = a(t),
                            n = e.isBetween(T.start, T.end),
                            _ = e.isBetween(a(d).subtract(l.ACKED_RECENTLY_WINDOW_DAYS, "days"), d);
                        return n || _ && !E ? void 0 : l.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                    }
                    return l.UpcomingGuildEventNoticeTypes.EVENT_STARTING_SOON
                }
                let u = _.default.extractTimestamp(e.id),
                    i = Math.min((null != n ? n : u) + l.NEW_EVENT_WINDOW_MILLISECONDS, d),
                    r = s.isBetween(u, i);
                if (r && null == t && !E) return l.UpcomingGuildEventNoticeTypes.NEW_EVENT
            }
        },
        431934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var E = n("446674"),
                a = n("913144"),
                _ = n("271938"),
                l = n("398604"),
                s = n("49129"),
                d = n("745049");
            let T = {},
                u = {};

            function i(e) {
                let t = {
                    ...T
                };
                delete t[e], T = t;
                let n = {
                    ...u
                };
                delete n[e], u = n
            }
            class r extends E.default.PersistedStore {
                initialize(e) {
                    if (null != e) {
                        var t, n;
                        T = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, u = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
                    }
                }
                getGuildEventNoticeDismissalTime(e) {
                    return T[e]
                }
                getAllEventDismissals() {
                    return T
                }
                getUpcomingNoticeSeenTime(e) {
                    return u[e]
                }
                getAllUpcomingNoticeSeenTimes() {
                    return u
                }
                getState() {
                    return {
                        upcomingEventDismissals: T,
                        upcomingEventSeenTimestamps: u
                    }
                }
            }
            r.displayName = "UpcomingEventNoticesStore", r.persistKey = "UpcomingEventNotices";
            var I = new r(a.default, {
                UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
                    let {
                        eventId: t
                    } = e, n = {
                        ...T
                    };
                    n[t] = Date.now(), T = n
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    (t.status === d.GuildScheduledEventStatus.CANCELED || t.status === d.GuildScheduledEventStatus.COMPLETED) && i(t.id)
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    let {
                        guildScheduledEvent: t
                    } = e;
                    i(t.id)
                },
                GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
                    let {
                        userId: t,
                        guildEventId: n
                    } = e, E = _.default.getId();
                    if (t !== E) return;
                    let a = l.default.getGuildScheduledEvent(n);
                    if (null == a || a.status !== d.GuildScheduledEventStatus.SCHEDULED) return;
                    let i = T[n];
                    if (null != i) return;
                    let r = u[n],
                        I = (0, s.getNextShownUpcomingEventNoticeType)(a, void 0, r, !1);
                    if (I === d.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
                        let e = {
                            ...T
                        };
                        e[n] = Date.now(), T = e
                    }
                },
                UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
                    let {
                        guildEventId: t
                    } = e, n = {
                        ...u
                    };
                    n[t] = Date.now(), u = n
                }
            })
        },
        534222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                },
                useActiveEvent: function() {
                    return U
                },
                useActiveEventsByChannel: function() {
                    return D
                },
                useGuildUpcomingEventsNotice: function() {
                    return p
                },
                useGuildActiveEvent: function() {
                    return O
                },
                useGuildChannelScheduledEvents: function() {
                    return f
                },
                useFirstActiveEventChannel: function() {
                    return N
                },
                useImminentUpcomingGuildEvents: function() {
                    return S
                }
            });
            var E = n("884691"),
                a = n("446674"),
                _ = n("962199"),
                l = n("42203"),
                s = n("923959"),
                d = n("305961"),
                T = n("957255"),
                u = n("449008"),
                i = n("398604"),
                r = n("49129"),
                I = n("431934"),
                L = n("822516"),
                C = n("745049"),
                A = n("49111");
            let M = [];

            function G(e, t) {
                return (0, a.useStateFromStoresArray)([d.default, _.default, i.default, T.default, l.default, s.default], () => {
                    let n = d.default.getGuild(e);
                    if (null == n) return M;
                    let E = n.hasFeature(A.GuildFeatures.HUB);
                    if (E) {
                        var a, r;
                        let e = null === (a = s.default.getDefaultChannel(n.id)) || void 0 === a ? void 0 : a.id,
                            t = null !== (r = _.default.getEventDirectoryEntries(e)) && void 0 !== r ? r : [];
                        return t.map(e => {
                            let t = e.scheduledEventId,
                                n = i.default.getGuildScheduledEvent(t);
                            return null != n ? n : _.default.getCachedGuildScheduledEventById(t)
                        }).filter(u.isNotNullish)
                    }
                    let I = i.default.getGuildScheduledEventsByIndex(null != t ? t : i.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id));
                    return I.filter(e => {
                        let t = e.channel_id;
                        if (null == t) return !0;
                        let n = l.default.getChannel(t);
                        return T.default.can(A.Permissions.VIEW_CHANNEL, n)
                    })
                }, [t, e])
            }

            function U(e) {
                return (0, a.useStateFromStores)([i.default, l.default, T.default], () => {
                    let t = l.default.getChannel(e);
                    if (!T.default.can(A.Permissions.VIEW_CHANNEL, t)) return null;
                    let n = null == t ? void 0 : t.guild_id;
                    if (null == n) return null;
                    let E = i.default.getGuildScheduledEventsByIndex(i.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
                    return E.length > 0 ? E[0] : null
                }, [e])
            }

            function D(e) {
                let t = (0, a.useStateFromStoresArray)([i.default], () => i.default.getGuildScheduledEventsForGuild(e), [e]),
                    n = E.useMemo(() => {
                        let e = new Map;
                        return t.forEach(t => {
                            let n = t.channel_id;
                            null != n && e.set(n, t)
                        }), e
                    }, [t]);
                return n
            }

            function p(e) {
                var t, n;
                let E = (t = e, (0, a.useStateFromStoresArray)([i.default, l.default, T.default], () => {
                        let e = i.default.getGuildScheduledEventsByIndex(i.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t));
                        return e.filter(e => {
                            if (e.entity_type === C.GuildScheduledEventEntityTypes.NONE || e.status !== C.GuildScheduledEventStatus.SCHEDULED) return !1;
                            if (null == e.channel_id) return !0;
                            let t = l.default.getChannel(e.channel_id);
                            return T.default.can(A.Permissions.VIEW_CHANNEL, t)
                        })
                    }, [t])),
                    _ = (0, a.useStateFromStoresObject)([I.default], () => I.default.getAllEventDismissals()),
                    s = (0, a.useStateFromStoresObject)([I.default], () => I.default.getAllUpcomingNoticeSeenTimes()),
                    d = (0, a.useStateFromStoresObject)([i.default], () => null == E ? {} : E.reduce((e, t) => ({
                        ...e,
                        [t.id]: i.default.hasRsvp(t.id, t.guild_id)
                    }), {}), [E]);
                if (null != E && null != d)
                    for (let e = 0; e < E.length; e++) {
                        ;
                        let t = E[e],
                            a = _[t.id],
                            l = s[t.id],
                            T = null !== (n = d[t.id]) && void 0 !== n && n,
                            u = (0, r.getNextShownUpcomingEventNoticeType)(t, a, l, T);
                        if (null != u) return {
                            upcomingEvent: t,
                            noticeType: u
                        }
                    }
            }

            function O(e) {
                return (0, a.useStateFromStores)([i.default, l.default, T.default], () => {
                    let t = i.default.getGuildScheduledEventsByIndex(i.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e));
                    return t.find(e => {
                        if (e.entity_type === C.GuildScheduledEventEntityTypes.NONE || !(0, i.isGuildScheduledEventActive)(e)) return !1;
                        if (null == e.channel_id) return !0;
                        let t = l.default.getChannel(e.channel_id);
                        return T.default.can(A.Permissions.VIEW_CHANNEL, t)
                    })
                }, [e])
            }

            function f(e) {
                return (0, a.useStateFromStores)([i.default], () => i.default.getGuildScheduledEventsByIndex(i.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
            }

            function N(e) {
                return (0, a.useStateFromStores)([l.default, i.default], () => {
                    let t = i.default.getGuildScheduledEventsByIndex(i.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
                        let t = l.default.getChannel(e.channel_id);
                        return null != t
                    });
                    return l.default.getChannel(null == t ? void 0 : t.channel_id)
                }, [e])
            }

            function S(e) {
                let [t, n] = E.useState(() => Date.now());
                E.useEffect(() => {
                    let e = setInterval(() => {
                        n(Date.now())
                    }, 9e5);
                    return () => clearInterval(e)
                }, []);
                let _ = (0, a.useStateFromStores)([i.default], () => null == e ? [] : i.default.getGuildScheduledEventsByIndex(i.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]),
                    l = E.useMemo(() => _.filter(e => {
                        let {
                            withinStartWindow: t,
                            diffMinutes: n
                        } = (0, L.getEventTimeData)(e.scheduled_start_time, e.scheduled_end_time);
                        return e.status !== C.GuildScheduledEventStatus.ACTIVE && t && n < 15
                    }), [_]);
                return l
            }
        }
    }
]);