(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["90403"], {
        533662: function(e, t, a) {
            "use strict";
            e.exports = a.p + "71c2b8b8dce7967a6cba.svg"
        },
        101017: function(e, t, a) {
            "use strict";
            e.exports = a.p + "76db37e93ca50f3fa98b.svg"
        },
        65757: function(e, t, a) {
            "use strict";
            e.exports = a.p + "829f8ef7dcf355fbe141.svg"
        },
        145079: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("414456"),
                s = a.n(l),
                i = a("446674"),
                d = a("77078"),
                r = a("102985"),
                u = a("79798"),
                E = a("754474"),
                o = a("158998"),
                _ = a("782340"),
                T = a("892802");

            function c(e) {
                if (e.isSystemUser()) return E.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return E.BotTypes.AI;
                if (e.bot) return E.BotTypes.BOT;
                return null
            }
            let I = e => {
                let {
                    primary: t,
                    secondary: a,
                    botType: l,
                    botVerified: i,
                    discriminatorClass: r,
                    className: E,
                    usernameClass: o,
                    color: c,
                    botClass: I,
                    showStreamerModeTooltip: f
                } = e;
                return (0, n.jsxs)("div", {
                    className: s(T.info, E),
                    children: [(0, n.jsx)(d.Tooltip, {
                        text: _.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: f,
                        children: e => (0, n.jsx)("span", {
                            ...e,
                            className: s(T.username, o),
                            style: null != c ? {
                                color: c
                            } : void 0,
                            children: t
                        })
                    }), null != a ? (0, n.jsx)("span", {
                        className: s(T.infoSpacing, r),
                        children: a
                    }) : void 0, null != l && (0, n.jsx)(u.default, {
                        type: l,
                        className: s(T.infoSpacing, I),
                        verified: i
                    })]
                })
            };
            var f = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: a,
                    nick: l,
                    forceUsername: s,
                    showAccountIdentifier: d,
                    overrideDiscriminator: u,
                    forcePomelo: _,
                    ...T
                } = e, f = (0, i.useStateFromStores)([r.default], () => r.default.hidePersonalInformation), L = f || t || a.isNonUserBot(), A = a.toString(), C = o.default.getName(a), N = s ? A : null != l ? l : C, m = a.isPomelo() || _;
                if (m || N !== A) {
                    let e = N === A && m && s ? o.default.getUserTag(a, {
                            forcePomelo: _
                        }) : N,
                        t = d && e !== "@".concat(A) ? o.default.getUserTag(a) : void 0;
                    return (0, n.jsx)(I, {
                        primary: e,
                        secondary: t,
                        botVerified: a.isVerifiedBot(),
                        botType: c(a),
                        showStreamerModeTooltip: f && e !== C,
                        ...T
                    })
                }
                return (0, n.jsx)(E.default, {
                    name: N,
                    botType: c(a),
                    botVerified: a.isVerifiedBot(),
                    discriminator: L || N !== A ? null : null != u ? u : a.discriminator,
                    ...T
                })
            }
        },
        501030: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getDirectoryEntryBroadcastInfo: function() {
                    return s
                }
            });
            var n = a("872717"),
                l = a("49111");
            async function s(e, t, a) {
                let s = await n.default.get({
                    url: l.Endpoints.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
                    query: {
                        type: t,
                        entity_id: a
                    }
                });
                return s.body
            }
        },
        730647: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                DirectoryEntryTypes: function() {
                    return d
                },
                CreateOrAddGuildSlideTypes: function() {
                    return r
                },
                HubGuildTemplateId: function() {
                    return u
                },
                DirectoryEntryCategories: function() {
                    return E
                },
                getHubCategories: function() {
                    return I
                },
                getHubGuildTemplatesMap: function() {
                    return f
                }
            });
            var n, l, s, i, d, r, u, E, o = a("316693"),
                _ = a("991170"),
                T = a("49111"),
                c = a("782340");
            (n = d || (d = {}))[n.GUILD = 0] = "GUILD", n[n.GUILD_SCHEDULED_EVENT = 1] = "GUILD_SCHEDULED_EVENT", (l = r || (r = {})).GUILD_TEMPLATES = "guild-templates", l.CUSTOMIZE_NEW_GUILD = "customize-new-guild", l.CHOOSE_GUILD = "choose-guild", l.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild", l.CONFIRMATION = "confirmation", (s = u || (u = {})).CREATE = "CREATE", s.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB", s.HUB_STUDY = "HUB_STUDY", s.HUB_CLASS = "HUB_CLASS", s.HUB_SOCIAL = "HUB_SOCIAL", s.HUB_MAJOR = "HUB_MAJOR", s.HUB_DORM = "HUB_DORM", (i = E || (E = {}))[i.ALL = -1] = "ALL", i[i.UNCATEGORIZED = 0] = "UNCATEGORIZED", i[i.SCHOOL_CLUB = 1] = "SCHOOL_CLUB", i[i.CLASS = 2] = "CLASS", i[i.STUDY_SOCIAL = 3] = "STUDY_SOCIAL", i[i.MISC = 5] = "MISC";

            function I(e) {
                return "883060064561299456" === e ? [{
                    value: E.SCHOOL_CLUB,
                    label: c.default.Messages.DIRECTORY_CATEGORY_INTERNAL_1
                }, {
                    value: E.CLASS,
                    label: c.default.Messages.DIRECTORY_CATEGORY_INTERNAL_2
                }, {
                    value: E.STUDY_SOCIAL,
                    label: c.default.Messages.DIRECTORY_CATEGORY_INTERNAL_3
                }, {
                    value: E.MISC,
                    label: c.default.Messages.DIRECTORY_CATEGORY_INTERNAL_5
                }] : [{
                    value: E.SCHOOL_CLUB,
                    label: c.default.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,
                    idealSize: 100
                }, {
                    value: E.CLASS,
                    label: c.default.Messages.DIRECTORY_CATEGORY_CLASS
                }, {
                    value: E.STUDY_SOCIAL,
                    label: c.default.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,
                    idealSize: 50
                }, {
                    value: E.MISC,
                    label: c.default.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS
                }]
            }

            function f() {
                return {
                    [u.CREATE]: {
                        id: u.CREATE,
                        code: "2TffvPucqHkN",
                        label: c.default.Messages.GUILD_TEMPLATE_HEADER_CREATE,
                        channels: [],
                        system_channel_id: null
                    },
                    [u.HUB_SCHOOL_CLUB]: {
                        id: u.HUB_SCHOOL_CLUB,
                        code: "UMUbvRpRZhS6",
                        label: c.default.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "03",
                            parent_id: "00",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: T.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,
                            type: T.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,
                            type: T.ChannelTypes.GUILD_VOICE
                        }],
                        roles: [{
                            id: "00",
                            name: "@everyone",
                            permissions: _.default.DEFAULT
                        }, {
                            id: "01",
                            name: "officers (example)",
                            mentionable: !0,
                            hoist: !0,
                            permissions: o.default.combine(_.default.DEFAULT, T.Permissions.MANAGE_ROLES, T.Permissions.MANAGE_CHANNELS, T.Permissions.KICK_MEMBERS, T.Permissions.BAN_MEMBERS, T.Permissions.MANAGE_NICKNAMES, T.Permissions.MANAGE_GUILD_EXPRESSIONS, T.Permissions.MANAGE_MESSAGES, T.Permissions.SEND_TTS_MESSAGES),
                            color: 3066993
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_STUDY]: {
                        id: u.HUB_STUDY,
                        code: "2JBhzzca2vfT",
                        label: c.default.Messages.GUILD_TEMPLATE_HEADER_STUDY,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: T.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: T.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: T.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_CLASS]: {
                        id: u.HUB_CLASS,
                        code: "r86WWBwTGspb",
                        label: c.default.Messages.GUILD_TEMPLATE_HEADER_CLASS,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: T.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: T.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: T.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_SOCIAL]: {
                        id: u.HUB_SOCIAL,
                        code: "AvvtXE3mfbCR",
                        label: c.default.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "03",
                            parent_id: "00",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "04",
                            parent_id: "00",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_MEETUPS,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                            type: T.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                            type: T.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,
                            type: T.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "02"
                    },
                    [u.HUB_MAJOR]: {
                        id: u.HUB_MAJOR,
                        code: "FhmfDR6Arvsc",
                        label: c.default.Messages.GUILD_TEMPLATE_HEADER_MAJOR,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: T.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: T.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: T.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_DORM]: {
                        id: u.HUB_DORM,
                        code: "fkq8xHfrGE58",
                        label: c.default.Messages.GUILD_TEMPLATE_HEADER_DORM,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: T.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: T.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: T.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                            type: T.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: c.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                            type: T.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    }
                }
            }
        },
        960757: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("884691"),
                l = a("446674"),
                s = a("152475"),
                i = a("42203"),
                d = a("501030"),
                r = a("730647"),
                u = a("49111");
            let E = {
                can_broadcast: !1
            };

            function o(e, t, a) {
                let [o, _] = n.useState(E), [T, c] = n.useState(!1), I = n.useRef(!1), f = null == e ? void 0 : e.id, L = null == e ? void 0 : e.hasFeature(u.GuildFeatures.HAS_DIRECTORY_ENTRY);
                n.useEffect(() => {
                    if (!L) {
                        _(E);
                        return
                    }
                    if (I.current || null == f) return;
                    let e = async () => {
                        I.current = !0;
                        try {
                            let e = await (0, d.getDirectoryEntryBroadcastInfo)(f, r.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT, t);
                            _(e)
                        } catch (e) {
                            _(E)
                        }
                        I.current = !1
                    };
                    e()
                }, [f, L, t]), n.useEffect(() => {
                    var e;
                    if (!o.can_broadcast) {
                        c(!1);
                        return
                    }
                    c(null === (e = o.has_broadcast) || void 0 === e || e)
                }, [o]);
                let A = (0, l.useStateFromStores)([i.default], () => (0, s.canEveryoneRoleViewEvent)(a, [i.default]));
                return {
                    broadcastInfo: o,
                    broadcastToDirectoryChannels: A && T,
                    setBroadcastToDirectoryChannels: c,
                    canEveryoneRoleViewEvent: A
                }
            }
        },
        334683: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            });
            var n = a("884691"),
                l = a("446674"),
                s = a("817963"),
                i = a("923959"),
                d = a("305961"),
                r = a("957255"),
                u = a("49111"),
                E = (e, t) => {
                    let a = (0, l.useStateFromStores)([d.default], () => d.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: E
                        } = (0, s.useManageResourcePermissions)(a),
                        o = (0, l.useStateFromStores)([i.default], () => i.default.getChannels(e)[i.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        _ = n.useMemo(() => null != t ? o.filter(e => {
                            let {
                                channel: a
                            } = e;
                            return a.type === t
                        }) : o, [o, t]),
                        T = (0, l.useStateFromStores)([r.default], () => {
                            if (r.default.can(u.Permissions.ADMINISTRATOR, a) || E) return !0;
                            for (let {
                                    channel: e
                                }
                                of _) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, s.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [_, a, E]);
                    return T
                }
        },
        799547: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getEventChannelsByType: function() {
                    return i
                },
                useGetEventChannelsByType: function() {
                    return d
                }
            });
            var n = a("446674"),
                l = a("817963");
            a("834052");
            var s = a("923959");

            function i(e, t) {
                let [a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.default];
                if (null == t) return [];
                let n = a.getChannels(e)[s.GUILD_VOCAL_CHANNELS_KEY],
                    i = [];
                for (let {
                        channel: e
                    }
                    of n) {
                    let {
                        canCreateGuildEvent: a,
                        canManageAllEvents: n
                    } = (0, l.getManageResourcePermissions)(e), s = a || n;
                    e.type === t && (e.isGuildVoice() && s ? i.push(e) : e.isGuildStageVoice() && s && i.push(e))
                }
                return i
            }

            function d(e, t) {
                return (0, n.useStateFromStoresArray)([s.default], () => i(e, t, [s.default]), [e, t])
            }
            a("957255"), a("270161")
        },
        776863: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useChannelsUserCanStartStageIn: function() {
                    return d
                }
            });
            var n = a("446674"),
                l = a("923510"),
                s = a("923959"),
                i = a("957255");

            function d(e) {
                var t;
                let a = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : null;
                return (0, n.useStateFromStoresArray)([s.default, i.default], () => {
                    let e = s.default.getChannels(a)[s.GUILD_VOCAL_CHANNELS_KEY];
                    return e.reduce((e, t) => {
                        let a = t.channel;
                        return a.isGuildStageVoice() ? (function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default;
                            return !!e.isGuildStageVoice() && t.can(l.MODERATE_STAGE_CHANNEL_PERMISSIONS, e)
                        }(t.channel, i.default) && e.push(a), e) : e
                    }, [])
                }, [a])
            }
        },
        844808: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("77078"),
                i = a("822516"),
                d = a("757767"),
                r = a("782340");

            function u(e) {
                let {
                    startDate: t,
                    recurrenceRule: a,
                    onRecurrenceChange: u
                } = e, E = l.useMemo(() => (0, i.recurrenceRuleToOption)(t, a), [a, t]), o = function(e) {
                    let t = e.toDate(),
                        a = t.toLocaleString(r.default.getLocale(), {
                            weekday: "long"
                        });
                    return [{
                        value: d.RecurrenceOptions.NONE,
                        label: r.default.Messages.CREATE_EVENT_RECUR_NONE
                    }, {
                        value: d.RecurrenceOptions.WEEKLY,
                        label: r.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                            weekday: a
                        })
                    }, {
                        value: d.RecurrenceOptions.YEARLY,
                        label: r.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                            date: t.toLocaleString(r.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        })
                    }, {
                        value: d.RecurrenceOptions.WEEKDAY_ONLY,
                        label: r.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }]
                }(t), _ = e => e.toString();
                return (0, n.jsx)(s.FormItem, {
                    title: r.default.Messages.CREATE_EVENT_RECUR_LABEL,
                    required: !0,
                    children: (0, n.jsx)(s.Select, {
                        placeholder: "gaming",
                        options: o,
                        select: u,
                        serialize: _,
                        isSelected: e => null != E && _(e) === _(E)
                    })
                })
            }
        },
        953143: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("866227"),
                s = a.n(l),
                i = a("77078"),
                d = a("812204"),
                r = a("685665"),
                u = a("381546"),
                E = a("351825"),
                o = a("651072"),
                _ = a("822516"),
                T = a("844808"),
                c = a("782340"),
                I = a("234865");

            function f(e) {
                let {
                    className: t,
                    guildId: a,
                    onScheduleChange: l,
                    onRecurrenceChange: f,
                    onTimeChange: L,
                    timeSelected: A = !0,
                    schedule: C,
                    recurrenceRule: N,
                    showEndDate: m = !1,
                    requireEndDate: h = !1,
                    disableStartDateTime: S = !1
                } = e, {
                    analyticsLocations: p
                } = (0, r.default)(d.default.EVENT_SETTINGS), {
                    enabled: M
                } = o.default.useExperiment({
                    guildId: null != a ? a : "",
                    location: p[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == C) return null;
                let D = null,
                    g = C.startDate,
                    O = s(),
                    G = s().add(_.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    U = s().add(_.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"),
                    v = e => {
                        l({
                            ...C,
                            endDate: e
                        })
                    };
                return null != g && o.default.trackExposure({
                    guildId: null != a ? a : "",
                    location: p[0]
                }), m && (D = null != C.endDate || h ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: I.doubleInput,
                        children: [(0, n.jsx)(i.FormItem, {
                            title: c.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: h,
                            children: (0, n.jsx)(i.DateInput, {
                                value: C.endDate,
                                onSelect: v,
                                minDate: C.startDate,
                                maxDate: U
                            })
                        }), (0, n.jsx)(i.FormItem, {
                            title: c.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: h,
                            children: (0, n.jsx)(i.TimeInput, {
                                value: C.endDate,
                                onChange: v
                            })
                        })]
                    }), h ? null : (0, n.jsx)(i.Button, {
                        onClick: () => {
                            v(void 0)
                        },
                        look: i.Button.Looks.BLANK,
                        size: i.Button.Sizes.MIN,
                        children: (0, n.jsxs)("div", {
                            className: I.link,
                            children: [(0, n.jsx)(u.default, {
                                width: 17,
                                height: 17,
                                className: I.removeIcon
                            }), (0, n.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: c.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, n.jsx)(i.Button, {
                    look: i.Button.Looks.BLANK,
                    size: i.Button.Sizes.MIN,
                    onClick: () => {
                        v(s(C.startDate).add(1, "hour"))
                    },
                    children: (0, n.jsxs)("div", {
                        className: I.link,
                        children: [(0, n.jsx)(E.default, {
                            width: 20,
                            height: 20,
                            className: I.addIcon
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: c.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, n.jsxs)("div", {
                    className: t,
                    children: [(0, n.jsxs)("div", {
                        className: I.doubleInput,
                        children: [(0, n.jsx)(i.FormItem, {
                            title: c.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, n.jsx)(i.DateInput, {
                                value: C.startDate,
                                onSelect: e => {
                                    l({
                                        ...C,
                                        startDate: e
                                    })
                                },
                                minDate: O,
                                maxDate: G,
                                disabled: S
                            })
                        }), (0, n.jsx)(i.FormItem, {
                            title: c.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, n.jsx)(i.TimeInput, {
                                value: C.startDate,
                                onChange: e => {
                                    e.isValid() && (null == L || L(!0), l({
                                        ...C,
                                        startDate: e
                                    }))
                                },
                                hideValue: !A,
                                disabled: S
                            })
                        })]
                    }), D, M && null != g && null != f && (0, n.jsx)(T.default, {
                        onRecurrenceChange: f,
                        startDate: g,
                        recurrenceRule: N
                    })]
                })
            }
        },
        194250: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return D
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("866227"),
                r = a.n(d),
                u = a("77078"),
                E = a("656913"),
                o = a("694187"),
                _ = a("151642"),
                T = a("29846"),
                c = a("777367"),
                I = a("398604"),
                f = a("189443"),
                L = a("822516"),
                A = a("93550"),
                C = a("953143"),
                N = a("745049"),
                m = a("75015"),
                h = a("837979"),
                S = a("782340"),
                p = a("505376");

            function M(e) {
                let {
                    editBroadcastInfoData: t
                } = e, {
                    broadcastInfo: a,
                    broadcastToDirectoryChannels: l,
                    setBroadcastToDirectoryChannels: s,
                    canEveryoneRoleViewEvent: i
                } = t;
                return a.can_broadcast ? (0, n.jsxs)(u.FormItem, {
                    title: S.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
                    className: p.formItem,
                    children: [(0, n.jsx)(u.Tooltip, {
                        text: (0, n.jsx)(u.Text, {
                            className: p.broadcastInfoTooltip,
                            variant: "text-sm/normal",
                            children: S.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
                        }),
                        "aria-label": S.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
                        shouldShow: !i,
                        children: e => (0, n.jsx)("div", {
                            ...e,
                            children: (0, n.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                disabled: !i,
                                value: l,
                                onChange: (e, t) => s(t),
                                children: (0, n.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "interactive-active",
                                    children: S.default.Messages.HUB_EVENTS_SHARE_TITLE
                                })
                            })
                        })
                    }), (0, n.jsx)(u.Text, {
                        className: p.broadcastInfoDescription,
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: S.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
                    })]
                }) : null
            }

            function D(e) {
                let {
                    guildEvent: t,
                    guildEventId: s,
                    guildId: d,
                    editBroadcastInfoData: D,
                    error: g,
                    validationErrorMessage: O,
                    onChange: G,
                    canSetFocus: U = !1
                } = e, {
                    entityType: v,
                    channelId: y,
                    description: R,
                    name: x,
                    image: V,
                    scheduledEndTime: P,
                    scheduledStartTime: j,
                    autoStart: H,
                    recurrenceRule: B
                } = t, {
                    canUseEventsAutoStartToggle: b
                } = c.default.useExperiment({
                    location: "Guild Events Modal",
                    guildId: null != d ? d : ""
                }), Y = (0, _.useStageBlockedUsersCount)(y), F = null != t && (0, I.isGuildScheduledEventActive)(t), k = l.useMemo(() => {
                    let e = (0, L.getScheduleFromEventData)(t);
                    return null != e ? e : {
                        startDate: r(j)
                    }
                }, [t, j]), w = l.useRef(null);
                l.useEffect(() => {
                    if (U) {
                        var e;
                        null === (e = w.current) || void 0 === e || e.focus()
                    }
                }, [U]);
                let X = e => {
                        G({
                            image: e
                        })
                    },
                    z = (e, t) => {
                        if (null == e || void 0 === t) {
                            X(null);
                            return
                        }(0, u.openModalLazy)(async () => {
                            let {
                                default: l
                            } = await a.el("57015").then(a.bind(a, "57015"));
                            return a => (0, n.jsx)(l, {
                                imgURI: e,
                                file: t,
                                onCrop: X,
                                uploadType: m.UploadTypes.SCHEDULED_EVENT_IMAGE,
                                allowSkip: !0,
                                ...a
                            })
                        })
                    };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        className: p.blockedUsersContainer,
                        children: null != y && !F && Y > 0 && (0, n.jsx)(T.BlockedUsersNotice, {
                            channelId: y
                        })
                    }), (0, n.jsxs)("div", {
                        className: p.form,
                        children: [(0, n.jsxs)(u.FormItem, {
                            title: S.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
                            className: p.topicFormItem,
                            required: !0,
                            children: [(0, n.jsx)(u.TextInput, {
                                className: p.textInput,
                                onChange: e => {
                                    G({
                                        name: e
                                    })
                                },
                                placeholder: S.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
                                maxLength: h.MAX_STAGE_TOPIC_LENGTH,
                                value: x,
                                autoComplete: "off",
                                inputRef: w
                            }), null != g ? (0, n.jsx)(u.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: p.warning,
                                children: g.getAnyErrorMessage()
                            }) : null]
                        }), (0, n.jsx)(C.default, {
                            className: p.formItem,
                            onScheduleChange: e => {
                                let {
                                    startDate: t,
                                    endDate: a
                                } = e, n = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == a ? void 0 : a.toISOString()
                                };
                                null != t && null != P && (null == a ? void 0 : a.isBefore(t)) && (n.scheduledEndTime = t.add(1, "hour").toISOString()), G(n)
                            },
                            onRecurrenceChange: e => {
                                let t = k.startDate;
                                if (null == t) return;
                                let a = (0, L.recurrenceOptionToRecurrenceRule)(e, t);
                                G({
                                    recurrenceRule: a
                                })
                            },
                            schedule: k,
                            recurrenceRule: B,
                            showEndDate: v === N.GuildScheduledEventEntityTypes.EXTERNAL,
                            requireEndDate: v === N.GuildScheduledEventEntityTypes.EXTERNAL,
                            disableStartDateTime: F,
                            guildId: d
                        }), null != O ? (0, n.jsx)(u.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: p.warning,
                            children: O
                        }) : null, b ? (0, n.jsx)(u.FormItem, {
                            className: i(p.formItem, p.autoStartToggle),
                            children: (0, n.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: H,
                                onChange: (e, t) => {
                                    G({
                                        autoStart: t
                                    })
                                },
                                children: (0, n.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: S.default.Messages.GUILD_EVENT_AUTO_START_TOGGLE
                                })
                            })
                        }) : null, (0, n.jsx)(u.FormItem, {
                            title: S.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                            className: p.formItem,
                            children: (0, n.jsx)(u.TextArea, {
                                className: p.descriptionInput,
                                placeholder: S.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                value: R,
                                onChange: e => {
                                    G({
                                        description: e
                                    })
                                },
                                maxLength: N.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
                                autosize: !0
                            })
                        }), (0, n.jsxs)(u.FormItem, {
                            title: S.default.Messages.GUILD_EVENT_IMAGE,
                            className: p.formItem,
                            children: [(0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: p.addImageHint,
                                children: S.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
                            }), null != V ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(E.default, {
                                    className: p.imagePreview,
                                    iconWrapperClassName: p.imagePreviewInner,
                                    image: V,
                                    makeURL: e => {
                                        if (null == e) return null;
                                        if (null != d) {
                                            var a;
                                            return null !== (a = (0, A.default)((0, f.convertToFakeGuildEvent)(t, d, s))) && void 0 !== a ? a : null
                                        }
                                    },
                                    onChange: z,
                                    hint: S.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
                                    showRemoveButton: !1,
                                    enabled: !0
                                }), (0, n.jsx)(u.Button, {
                                    size: u.Button.Sizes.SMALL,
                                    onClick: () => X(null),
                                    children: S.default.Messages.GUILD_EVENT_REMOVE_IMAGE
                                })]
                            }) : (0, n.jsxs)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                children: [S.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, n.jsx)(o.default, {
                                    onChange: z
                                })]
                            })]
                        }), (0, n.jsx)(M, {
                            editBroadcastInfoData: D
                        })]
                    })]
                })
            }
        },
        590942: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return B
                }
            });
            var n, l, s = a("37983"),
                i = a("884691"),
                d = a("446674"),
                r = a("77078"),
                u = a("970728"),
                E = a("206230"),
                o = a("526887"),
                _ = a("960757"),
                T = a("923959"),
                c = a("305961"),
                I = a("683911"),
                f = a("476765"),
                L = a("354023"),
                A = a("686904"),
                C = a("398604"),
                N = a("322224"),
                m = a("152475"),
                h = a("799547"),
                S = a("189443"),
                p = a("841363"),
                M = a("558286"),
                D = a("560309"),
                g = a("151859"),
                O = a("299342"),
                G = a("499950"),
                U = a("27754"),
                v = a("745049"),
                y = a("49111"),
                R = a("782340"),
                x = a("738021");
            let {
                INVITE_OPTIONS_7_DAYS: V,
                INVITE_OPTIONS_UNLIMITED: P
            } = L.default;

            function j(e) {
                let {
                    modal: t
                } = e, {
                    createMultipleConfetti: a
                } = i.useContext(o.ConfettiCannonContext);
                return i.useEffect(() => {
                    let e = null == t ? void 0 : t.getScrollerNode();
                    if (null == e) return;
                    let n = e.getBoundingClientRect();
                    a({
                        position: {
                            type: "static-random",
                            minValue: {
                                x: n.left - 100,
                                y: n.top - 100
                            },
                            maxValue: {
                                x: n.left + 100,
                                y: n.top + 100
                            }
                        },
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: -20,
                                y: -20
                            },
                            maxValue: {
                                x: -60,
                                y: -60
                            }
                        }
                    }, 80), a({
                        position: {
                            type: "static-random",
                            minValue: {
                                x: n.right - 100,
                                y: n.top - 100
                            },
                            maxValue: {
                                x: n.right + 100,
                                y: n.top + 100
                            }
                        },
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: 20,
                                y: -20
                            },
                            maxValue: {
                                x: 60,
                                y: -60
                            }
                        }
                    }, 80)
                }, [a, t]), null
            }

            function H(e) {
                let {
                    guildId: t,
                    guildEvent: a,
                    guildEventId: n,
                    editBroadcastInfoData: u,
                    isEdit: o,
                    formErrors: _,
                    transitionState: T,
                    loading: c,
                    error: L,
                    onChange: A,
                    onSave: N,
                    onClose: m,
                    createdEvent: h
                } = e, S = (0, f.useUID)(), p = i.useMemo(() => [{
                    slideId: l.ENTITY,
                    label: R.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
                    valid: null == _.entity,
                    userErrorMessage: _.entity
                }, {
                    slideId: l.SETTINGS,
                    label: R.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
                    valid: null == _.schedule && null == _.topic,
                    userErrorMessage: _.schedule
                }, {
                    slideId: l.PREVIEW,
                    label: R.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
                    valid: !0
                }], [_]), U = Object.keys(l).length, v = (0, C.isGuildScheduledEventActive)(a), y = v ? l.SETTINGS : l.ENTITY, V = e => Math.max(0, Math.min(e, U - 1)), [P, H] = i.useState(y), [B, b] = i.useState(!1), Y = i.useMemo(() => p.slice(0, P + 1).map(e => e.valid).every(Boolean), [p, P]), F = P >= p.length ? l.SUCCESS : p[V(P)].slideId, k = F === l.SUCCESS, w = (0, M.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
                w(k);
                let X = (0, d.useStateFromStores)([E.default], () => E.default.useReducedMotion),
                    z = i.useRef(null),
                    W = e => {
                        b(!1), H(V(e))
                    };
                i.useEffect(() => {
                    null != h && W(l.SUCCESS)
                }, [null == h ? void 0 : h.id, W]);
                let K = () => {
                        if (!Y) return;
                        let e = F === l.PREVIEW;
                        e ? N() : k ? m() : W(P + 1)
                    },
                    q = () => {
                        W(P - 1)
                    },
                    Z = R.default.Messages.NEXT;
                return F === l.PREVIEW && (Z = o ? R.default.Messages.SAVE_EVENT : R.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(r.ModalRoot, {
                        transitionState: T,
                        "aria-labelledby": S,
                        size: r.ModalSize.DYNAMIC,
                        children: [!X && k ? (0, s.jsx)(j, {
                            modal: z.current
                        }) : null, (0, s.jsxs)(r.ModalContent, {
                            className: x.content,
                            scrollerRef: z,
                            children: [!k && (0, s.jsx)(I.default, {
                                steps: p.map(e => e.label),
                                stepIndex: P,
                                onClick: e => {
                                    e < P ? q() : e > P && K()
                                }
                            }), (0, s.jsxs)(r.Slides, {
                                activeSlide: F,
                                width: 440,
                                onSlideReady: e => {
                                    b(e === F)
                                },
                                children: [(0, s.jsx)(r.Slide, {
                                    id: l.ENTITY,
                                    children: (0, s.jsx)(D.default, {
                                        guildId: t,
                                        guildEvent: a,
                                        validationErrorMessage: _.entity,
                                        isSlideReady: B,
                                        onChange: A
                                    })
                                }), (0, s.jsx)(r.Slide, {
                                    id: l.SETTINGS,
                                    children: (0, s.jsx)(O.default, {
                                        guildEvent: a,
                                        guildEventId: n,
                                        guildId: t,
                                        editBroadcastInfoData: u,
                                        onChange: A,
                                        error: L,
                                        validationErrorMessage: _.schedule,
                                        isSlideReady: B
                                    })
                                }), (0, s.jsx)(r.Slide, {
                                    id: l.PREVIEW,
                                    children: (0, s.jsx)(g.default, {
                                        guildId: t,
                                        guildEvent: a,
                                        guildEventId: n,
                                        error: L
                                    })
                                }), (0, s.jsx)(r.Slide, {
                                    id: l.SUCCESS,
                                    children: (0, s.jsx)(G.default, {
                                        onClose: m,
                                        event: h
                                    })
                                })]
                            })]
                        }), !k && (0, s.jsxs)(r.ModalFooter, {
                            className: x.footer,
                            children: [(0, s.jsxs)("div", {
                                className: x.inline,
                                children: [(0, s.jsx)(r.Button, {
                                    color: r.Button.Colors.PRIMARY,
                                    onClick: m,
                                    children: R.default.Messages.CANCEL
                                }), (0, s.jsx)(r.Button, {
                                    onClick: K,
                                    disabled: !Y,
                                    className: x.button,
                                    submitting: c,
                                    children: Z
                                })]
                            }), F !== l.ENTITY && (0, s.jsx)(r.Button, {
                                look: r.Button.Looks.LINK,
                                size: r.Button.Sizes.MIN,
                                onClick: q,
                                color: r.Button.Colors.LINK,
                                children: R.default.Messages.BACK
                            })]
                        })]
                    })
                })
            }

            function B(e) {
                let {
                    guildId: t,
                    guildScheduledEventId: n,
                    transitionState: l,
                    onClose: E
                } = e, o = (0, d.useStateFromStores)([c.default], () => c.default.getGuild(t)), I = (0, d.useStateFromStores)([C.default], () => C.default.getGuildScheduledEvent(n), [n]), f = (0, d.useStateFromStores)([T.default], () => T.default.getDefaultChannel(t), [t]), L = (0, S.getInitialGuildEventData)(o, I, f), [M, D] = i.useState(L), [g] = i.useState((0, S.isEditingEvent)(I)), [O, G] = i.useState(null), x = e => {
                    var t;
                    let a = (0, m.isGuildEventInvitable)(e),
                        n = null !== (t = e.channel_id) && void 0 !== t ? t : null == f ? void 0 : f.id;
                    null != n && u.default.createInvite(n, {
                        max_age: V.value,
                        max_uses: P.value
                    }, y.InstantInviteSources.GUILD_EVENTS), a ? G(e) : E()
                }, j = (0, _.default)(o, null == I ? void 0 : I.id, M), [B, {
                    loading: b,
                    error: Y
                }] = (0, A.default)(async () => {
                    if (null != O) return;
                    let e = {
                        broadcastToDirectoryChannels: j.broadcastToDirectoryChannels
                    };
                    if (g && null != n) return await N.default.saveEvent(n, M, t, e), E();
                    let a = await N.default.createGuildEvent(M, t, e);
                    return x(a.body), a
                }), F = i.useMemo(() => (0, U.default)(M, g), [M, g]);
                return (0, s.jsx)(H, {
                    guildId: t,
                    guildEvent: M,
                    guildEventId: n,
                    editBroadcastInfoData: j,
                    isEdit: g,
                    formErrors: F,
                    transitionState: l,
                    loading: b,
                    error: Y,
                    onChange: e => {
                        if (null != e.entityType) {
                            var a;
                            let n = (0, p.getChannelTypeFromEntity)(e.entityType),
                                [l] = (0, h.getEventChannelsByType)(t, n);
                            e.channelId = null !== (a = null == l ? void 0 : l.id) && void 0 !== a ? a : null, e.entityType !== v.GuildScheduledEventEntityTypes.EXTERNAL && M.entityType === v.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
                        }
                        D(t => ({
                            ...t,
                            ...e
                        }))
                    },
                    onSave: () => {
                        null != M.recurrenceRule && g ? (0, r.openModalLazy)(async () => {
                            let {
                                ConfirmModal: e
                            } = await a.el("77078").then(a.bind(a, "77078"));
                            return t => (0, s.jsxs)(e, {
                                ...t,
                                header: R.default.Messages.EDIT_ALL_EVENTS,
                                confirmText: R.default.Messages.SAVE_EVENT,
                                cancelText: R.default.Messages.NEVERMIND,
                                onConfirm: B,
                                children: [(0, s.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: R.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
                                }), (0, s.jsx)("br", {}), (0, s.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: R.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
                                })]
                            })
                        }) : B()
                    },
                    onClose: E,
                    createdEvent: O
                })
            }(n = l || (l = {}))[n.ENTITY = 0] = "ENTITY", n[n.SETTINGS = 1] = "SETTINGS", n[n.PREVIEW = 2] = "PREVIEW", n[n.SUCCESS = 3] = "SUCCESS"
        },
        560309: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return b
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("866227"),
                i = a.n(s),
                d = a("446674"),
                r = a("77078"),
                u = a("679653"),
                E = a("42203"),
                o = a("305961"),
                _ = a("957255"),
                T = a("27618"),
                c = a("697218"),
                I = a("718550"),
                f = a("368121"),
                L = a("944633"),
                A = a("228427"),
                C = a("697468"),
                N = a("398604"),
                m = a("334683"),
                h = a("799547"),
                S = a("776863"),
                p = a("613767"),
                M = a("841363"),
                D = a("306939"),
                g = a("745049"),
                O = a("49111"),
                G = a("782340"),
                U = a("869785");
            let v = e => e === g.GuildScheduledEventEntityTypes.EXTERNAL,
                y = (e, t) => {
                    let a = E.default.getChannel(e);
                    if (null == a) return null;
                    let l = a.type === O.ChannelTypes.GUILD_STAGE_VOICE,
                        s = (0, p.isChannelPublic)(a, t),
                        i = s ? f.default : L.default,
                        d = s ? A.default : C.default,
                        r = l ? d : i;
                    return (0, n.jsx)(r, {
                        height: 24,
                        className: U.channelOptionIcon
                    })
                },
                R = e => {
                    let {
                        guildId: t,
                        channelType: a,
                        channel: l,
                        onSelectChannel: s,
                        disabled: i,
                        entityType: d
                    } = e, E = a === O.ChannelTypes.GUILD_STAGE_VOICE, o = (0, p.isChannelPublic)(l, d), _ = (0, h.useGetEventChannelsByType)(t, a);
                    return (0, n.jsxs)(r.FormItem, {
                        title: E ? G.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : G.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
                        className: U.options,
                        disabled: i,
                        required: !0,
                        children: [(0, n.jsx)(r.SearchableSelect, {
                            value: null == l ? void 0 : l.id,
                            options: _.map(e => ({
                                value: e.id,
                                label: (0, u.computeChannelName)(e, c.default, T.default, !0)
                            })),
                            onChange: e => {
                                let t = _.find(t => t.id === e);
                                s(null != t ? t : void 0)
                            },
                            renderOptionPrefix: e => y(null == e ? void 0 : e.value, d),
                            isDisabled: i
                        }), !o && (0, n.jsx)(r.Text, {
                            color: "header-secondary",
                            className: U.channelPrivate,
                            variant: "text-sm/normal",
                            children: G.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
                        })]
                    })
                };

            function x(e, t, a, n) {
                return t ? {
                    disabled: !0,
                    tooltipText: G.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
                } : a ? 0 === n && e !== g.GuildScheduledEventEntityTypes.EXTERNAL ? {
                    disabled: !0,
                    tooltipText: G.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
                } : {
                    disabled: !1,
                    tooltipText: null
                } : {
                    disabled: !0,
                    tooltipText: G.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
                }
            }
            let V = e => t => {
                    e({
                        entityMetadata: {
                            location: t
                        }
                    })
                },
                P = e => t => {
                    var a;
                    e({
                        channelId: null !== (a = null == t ? void 0 : t.id) && void 0 !== a ? a : null
                    })
                },
                j = (e, t) => a => {
                    let {
                        value: n
                    } = a, l = {
                        entityType: n,
                        scheduledEndTime: void 0
                    };
                    if (v(n)) {
                        var s;
                        let e = (null !== (s = i(t.scheduledStartTime)) && void 0 !== s ? s : i()).add(2, "hour");
                        l.scheduledEndTime = e.toISOString()
                    }
                    e(l)
                };

            function H(e) {
                let {
                    guildId: t,
                    guildEvent: a,
                    onChange: s,
                    isFocusReady: i
                } = e, {
                    entityType: u,
                    channelId: o
                } = a, _ = (0, d.useStateFromStores)([E.default], () => E.default.getChannel(o), [o]), T = l.useRef(null);
                l.useEffect(() => {
                    if (i && v(u)) {
                        var e;
                        null === (e = T.current) || void 0 === e || e.focus()
                    }
                }, [i, u]);
                let c = V(s),
                    I = P(s),
                    f = (0, M.getLocationFromEventData)(a),
                    L = (0, M.getChannelTypeFromEntity)(u),
                    A = (0, N.isGuildScheduledEventActive)(a);
                return null == u || u === g.GuildScheduledEventEntityTypes.NONE ? null : v(u) ? (0, n.jsx)(r.FormItem, {
                    title: G.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
                    className: U.options,
                    required: !0,
                    children: (0, n.jsx)(r.TextInput, {
                        className: U.textInput,
                        onChange: c,
                        placeholder: G.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
                        maxLength: g.MAX_EVENT_LOCATION_LENGTH,
                        value: null != f ? f : "",
                        inputRef: T
                    })
                }) : null == L ? null : (0, n.jsx)(R, {
                    guildId: t,
                    channelType: L,
                    onSelectChannel: I,
                    channel: _,
                    entityType: u,
                    disabled: A
                })
            }

            function B(e) {
                let {
                    guildId: t,
                    guildEvent: a,
                    onChange: s
                } = e, i = (0, d.useStateFromStores)([o.default], () => o.default.getGuild(t), [t]), u = (0, m.default)(t, void 0), E = (0, m.default)(t, O.ChannelTypes.GUILD_VOICE), _ = (0, m.default)(t, O.ChannelTypes.GUILD_STAGE_VOICE), T = (0, h.useGetEventChannelsByType)(t, O.ChannelTypes.GUILD_VOICE), c = (0, S.useChannelsUserCanStartStageIn)(i), L = null == i ? void 0 : i.hasFeature(O.GuildFeatures.COMMUNITY), C = (0, N.isGuildScheduledEventActive)(a), p = j(s, a), M = l.useMemo(() => {
                    let e = [{
                        name: G.default.Messages.VOICE_CHANNEL,
                        value: g.GuildScheduledEventEntityTypes.VOICE,
                        desc: G.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
                        icon: f.default,
                        ...x(g.GuildScheduledEventEntityTypes.VOICE, C, E, T.length)
                    }, {
                        name: G.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
                        value: g.GuildScheduledEventEntityTypes.EXTERNAL,
                        desc: G.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
                        icon: I.default,
                        ...x(g.GuildScheduledEventEntityTypes.EXTERNAL, C, u, 0)
                    }];
                    return L ? [{
                        name: G.default.Messages.STAGE_CHANNEL,
                        value: g.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                        desc: G.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
                        icon: A.default,
                        ...x(g.GuildScheduledEventEntityTypes.STAGE_INSTANCE, C, _, c.length)
                    }, ...e] : e
                }, [u, E, _, L, T.length, c.length, C]);
                return (0, n.jsx)(r.RadioGroup, {
                    value: a.entityType,
                    options: M,
                    onChange: p,
                    className: U.options
                })
            }

            function b(e) {
                let {
                    guildId: t,
                    guildEvent: l,
                    validationErrorMessage: s,
                    onChange: i,
                    isSlideReady: u = !1
                } = e, {
                    entityType: E
                } = l, T = (0, d.useStateFromStores)([o.default], () => o.default.getGuild(t), [t]), c = (0, S.useChannelsUserCanStartStageIn)(T), I = (0, d.useStateFromStores)([_.default], () => _.default.can(O.Permissions.MANAGE_CHANNELS, T)), f = null == T ? void 0 : T.hasFeature(O.GuildFeatures.COMMUNITY), L = j(i, l), A = f && !v(E) && 0 === c.length && I && null != E;
                return (0, n.jsxs)("div", {
                    className: U.container,
                    children: [(0, n.jsx)(r.Heading, {
                        variant: "heading-xl/semibold",
                        className: U.header,
                        children: G.default.Messages.GUILD_EVENT_LOCATION_TITLE
                    }), (0, n.jsx)(r.Text, {
                        color: "header-secondary",
                        className: U.text,
                        variant: "text-sm/normal",
                        children: G.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
                    }), (0, n.jsx)(B, {
                        guildId: t,
                        guildEvent: l,
                        onChange: i
                    }), (0, n.jsx)(H, {
                        guildId: t,
                        guildEvent: l,
                        isFocusReady: u,
                        onChange: i
                    }), A ? (0, n.jsx)(D.default, {
                        onClick: () => {
                            L({
                                value: g.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                                name: G.default.Messages.STAGE_CHANNEL
                            }), (0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("581354").then(a.bind(a, "581354"));
                                return a => (0, n.jsx)(e, {
                                    ...a,
                                    channelType: O.ChannelTypes.GUILD_STAGE_VOICE,
                                    guildId: t
                                })
                            })
                        }
                    }) : null]
                })
            }
        },
        151859: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return N
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("446674"),
                i = a("77078"),
                d = a("419830"),
                r = a("267567"),
                u = a("42203"),
                E = a("305961"),
                o = a("697218"),
                _ = a("718550"),
                T = a("189443"),
                c = a("841363"),
                I = a("93550"),
                f = a("617347"),
                L = a("745049"),
                A = a("782340"),
                C = a("151990");

            function N(e) {
                var t, a, N, m;
                let {
                    guildId: h,
                    guildEvent: S,
                    guildEventId: p,
                    error: M
                } = e, D = l.useMemo(() => (0, T.convertToFakeGuildEvent)(S, h), [S, h]), {
                    channel_id: g,
                    name: O,
                    image: G,
                    description: U
                } = D, v = (0, s.useStateFromStores)([u.default], () => u.default.getChannel(g), [g]), y = (0, s.useStateFromStores)([E.default], () => E.default.getGuild(h), [h]), R = (0, c.getLocationFromEvent)(D), x = (0, s.useStateFromStores)([o.default], () => null != S.creatorId ? o.default.getUser(S.creatorId) : o.default.getCurrentUser(), [S.creatorId]), V = (0, s.useStateFromStores)([r.default], () => r.default.isLurking(h), [h]), P = (0, d.getChannelIconComponent)(v, y);
                return (0, n.jsxs)("div", {
                    className: C.content,
                    children: [(0, n.jsx)(f.default, {
                        className: C.previewCard,
                        guild: y,
                        channel: v,
                        location: null != R ? R : void 0,
                        creator: x,
                        name: O,
                        description: U,
                        imageSource: (N = (0, T.convertToFakeGuildEvent)(S, h, p), null == (m = G) && null == N.image ? null : null != m && /^data:/.test(m) ? m : (0, I.default)(N)),
                        isActive: !1,
                        isUserLurking: V,
                        speakers: [],
                        speakerCount: 0,
                        rsvped: !0,
                        guildEventId: L.FAKE_EVENT_ID,
                        eventPreview: D
                    }), (0, n.jsxs)("div", {
                        className: C.textContainer,
                        children: [(0, n.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            children: A.default.Messages.GUILD_EVENT_PREVIEW_TITLE
                        }), (0, n.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: C.subheader,
                            children: null != location ? A.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : A.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
                                channelName: null !== (a = null == v ? void 0 : v.name) && void 0 !== a ? a : "",
                                channelHook: () => (0, n.jsxs)("div", {
                                    className: C.channelName,
                                    children: [null != P ? (0, n.jsx)(P, {
                                        width: 20,
                                        height: 20,
                                        className: C.icon
                                    }) : (0, n.jsx)(_.default, {
                                        height: 18,
                                        width: 18,
                                        className: C.locationIcon
                                    }), null !== (t = null == v ? void 0 : v.name) && void 0 !== t ? t : R]
                                })
                            })
                        }), null != M && (0, n.jsx)(i.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: C.subheader,
                            children: M.getAnyErrorMessage()
                        })]
                    })]
                })
            }
        },
        299342: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("77078"),
                s = a("194250"),
                i = a("782340"),
                d = a("11644");

            function r(e) {
                let {
                    isSlideReady: t,
                    ...a
                } = e;
                return (0, n.jsxs)("div", {
                    className: d.slideContainer,
                    children: [(0, n.jsxs)("div", {
                        className: d.header,
                        children: [(0, n.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            children: i.default.Messages.GUILD_EVENT_CREATE_HEADER
                        }), (0, n.jsx)(l.Text, {
                            color: "header-secondary",
                            className: d.text,
                            variant: "text-sm/normal",
                            children: i.default.Messages.GUILD_EVENT_CREATE_BODY
                        })]
                    }), (0, n.jsx)(s.default, {
                        ...a,
                        canSetFocus: t
                    })]
                })
            }
        },
        499950: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return M
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                s = a("77078"),
                i = a("9294"),
                d = a("512027"),
                r = a("52393"),
                u = a("652453"),
                E = a("119184"),
                o = a("923959"),
                _ = a("305961"),
                T = a("330154"),
                c = a("943232"),
                I = a("945330"),
                f = a("599110"),
                L = a("306160"),
                A = a("354023"),
                C = a("841363"),
                N = a("49111"),
                m = a("782340"),
                h = a("131439");
            let {
                INVITE_OPTIONS_7_DAYS: S,
                INVITE_OPTIONS_UNLIMITED: p
            } = A.default;

            function M(e) {
                var t, a, M;
                let {
                    onClose: D,
                    event: g
                } = e, O = null == g ? void 0 : g.guild_id, G = (0, l.useStateFromStores)([o.default], () => {
                    var e;
                    return null != O ? null === (e = o.default.getDefaultChannel(O)) || void 0 === e ? void 0 : e.id : null
                }, [O]), U = (0, l.useStateFromStores)([_.default], () => _.default.getGuild(O), [O]), v = (null == U ? void 0 : U.vanityURLCode) != null && (null == U ? void 0 : U.vanityURLCode.length) > 0, {
                    enabled: y
                } = d.default.useExperiment({
                    guildId: null != O ? O : "",
                    location: "bd50e8_1"
                }, {
                    autoTrackExposure: v
                }), {
                    channel_id: R,
                    id: x
                } = null != g ? g : {}, V = (0, l.useStateFromStores)([T.default], () => {
                    let e = null != R ? R : G;
                    return null == e ? null : T.default.getInvite(e)
                }, [R, G]);
                if (null == g) return D(), null;
                let P = y && null !== (t = null == U ? void 0 : U.vanityURLCode) && void 0 !== t ? t : null == V ? void 0 : V.code,
                    j = null != P ? (0, i.generateInviteKeyFromExtraData)({
                        baseCode: P,
                        guildScheduledEventId: x
                    }) : null,
                    H = null == j || null == V,
                    B = (0, r.default)(null != j ? j : ""),
                    b = null !== (a = null == V ? void 0 : V.maxAge) && void 0 !== a ? a : S.value,
                    Y = null !== (M = null == V ? void 0 : V.maxUses) && void 0 !== M ? M : p.value;
                return (0, n.jsxs)("div", {
                    className: h.container,
                    children: [(0, n.jsx)(s.Clickable, {
                        onClick: D,
                        className: h.close,
                        "aria-label": m.default.Messages.CLOSE,
                        children: (0, n.jsx)(I.default, {})
                    }), (0, n.jsx)(E.default, {
                        children: (0, n.jsx)("div", {
                            className: h.iconContainer,
                            children: (0, n.jsx)(c.default, {
                                height: 30,
                                width: 30,
                                className: h.icon
                            })
                        })
                    }), (0, n.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        className: h.header,
                        children: m.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
                    }), (0, n.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: h.body,
                        children: m.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
                    }), (0, n.jsxs)("div", {
                        className: h.invite,
                        children: [(0, n.jsx)(u.RawInviteCopyInputConnected, {
                            value: B,
                            autoFocus: !1,
                            onCopy: e => {
                                if (H) return;
                                (0, L.copy)(e);
                                let t = (0, C.getChannelTypeFromEntity)(g.entity_type);
                                f.default.track(N.AnalyticEvents.COPY_INSTANT_INVITE, {
                                    server: g.guild_id,
                                    channel: R,
                                    channel_type: t,
                                    location: N.InstantInviteSources.GUILD_EVENTS,
                                    code: V.code,
                                    guild_scheduled_event_id: null == g ? void 0 : g.id
                                })
                            }
                        }), (null == U ? void 0 : U.vanityURLCode) == null && (0, n.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: h.inviteDetail,
                            children: (0, A.maxAgeString)(b, Y)
                        })]
                    })]
                })
            }
        },
        306939: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                s = a("77078"),
                i = a("139321"),
                d = a("597517"),
                r = a("782340"),
                u = a("8341"),
                E = a("533662");
            let o = () => (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: u.inlineText,
                    children: r.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1
                }), (0, n.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: u.inlineText,
                    children: r.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2
                }), (0, n.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: u.inlineText,
                    children: r.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3
                }), (0, n.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: u.inlineText,
                    children: r.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4
                })]
            });

            function _(e) {
                let {
                    onClick: t
                } = e, a = (0, l.useStateFromStores)([i.HotspotStore], () => !i.HotspotStore.hasHotspot(i.HotspotLocations.STAGE_CHANNEL_UPSELL));
                return a ? null : (0, n.jsxs)("div", {
                    className: u.container,
                    children: [(0, n.jsxs)("div", {
                        className: u.content,
                        children: [(0, n.jsxs)("div", {
                            className: u.textContainer,
                            children: [(0, n.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: r.default.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE
                            }), (0, n.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: u.descriptionText,
                                children: r.default.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY
                            }), (0, n.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                children: r.default.Messages.GUILD_EVENT_STAGE_UPSELL.format({
                                    suggestionsHook: o
                                })
                            })]
                        }), (0, n.jsx)("div", {
                            className: u.image,
                            children: (0, n.jsx)("img", {
                                src: E,
                                alt: r.default.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE
                            })
                        })]
                    }), (0, n.jsxs)("div", {
                        className: u.footer,
                        children: [(0, n.jsx)(s.Button, {
                            onClick: t,
                            color: s.Button.Colors.PRIMARY,
                            size: s.Button.Sizes.SMALL,
                            className: u.button,
                            children: r.default.Messages.CREATE_STAGE_CHANNEL
                        }), (0, n.jsx)(s.Button, {
                            onClick: () => {
                                d.hideHotspot(i.HotspotLocations.STAGE_CHANNEL_UPSELL)
                            },
                            color: s.Button.Colors.TRANSPARENT,
                            size: s.Button.Sizes.SMALL,
                            look: s.ButtonLooks.LINK,
                            children: r.default.Messages.DONT_SHOW_AGAIN
                        })]
                    })]
                })
            }
        },
        27754: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("866227"),
                l = a.n(n),
                s = a("841363"),
                i = a("822516"),
                d = a("745049"),
                r = a("782340");

            function u(e, t) {
                return {
                    entity: function(e) {
                        let {
                            entityType: t,
                            channelId: a
                        } = e, n = (0, s.getLocationFromEventData)(e);
                        return null == t ? "An event type must be specified." : (null == n || "" === n.trim()) && null == a ? "Either a location or channel must be specified." : void 0
                    }(e),
                    schedule: function(e, t) {
                        let a = (0, i.getScheduleFromEventData)(e),
                            {
                                entityType: n
                            } = e;
                        if (null == a || (null == a ? void 0 : a.startDate) == null) return r.default.Messages.GUILD_EVENT_START_DATE_REQUIRED;
                        let {
                            startDate: s,
                            endDate: u
                        } = a;
                        return n === d.GuildScheduledEventEntityTypes.EXTERNAL && null == u ? r.default.Messages.GUILD_EVENT_END_DATE_REQUIRED : !t && s.isBefore(l()) ? r.default.Messages.GUILD_EVENT_PAST_START_DATE : null != u && null != s && u.isBefore(s) ? r.default.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE : null != u && u.isBefore(l()) ? r.default.Messages.GUILD_EVENT_PAST_END_DATE_1 : void 0
                    }(e, t),
                    topic: function(e) {
                        let {
                            name: t
                        } = e, a = null == t || "" === t.trim();
                        return a ? "Topic must be specified." : void 0
                    }(e)
                }
            }
        },
        597517: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                hideHotspot: function() {
                    return i
                },
                setHotspotOverride: function() {
                    return d
                },
                clearHotspotOverride: function() {
                    return r
                }
            });
            var n = a("913144"),
                l = a("599110"),
                s = a("49111");

            function i(e) {
                l.default.track(s.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), n.default.wait(() => {
                    n.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function d(e, t) {
                n.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function r(e) {
                n.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            });
            var n = a("446674"),
                l = a("913144"),
                s = a("197881"),
                i = a("492397");
            let d = new Set,
                r = {};
            class u extends n.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (d = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (r = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = !t && r[e];
                    return !(i.CONFERENCE_MODE_ENABLED || s.ProcessArgs.isDisallowPopupsSet()) && (a || !d.has(e))
                }
                hasHiddenHotspot(e) {
                    return d.has(e)
                }
                getHotspotOverride(e) {
                    return r[e]
                }
                getState() {
                    return {
                        hiddenHotspots: d,
                        hotspotOverrides: r
                    }
                }
            }
            u.displayName = "HotspotStore", u.persistKey = "hotspots", u.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var E = new u(l.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    d = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (d.has(t)) return !1;
                    d.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: a
                    } = e;
                    r[t] = a
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == r[t]) return !1;
                    delete r[t]
                }
            })
        },
        139321: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                HotspotStore: function() {
                    return s.default
                }
            });
            var n = a("533613");
            a.es(n, t);
            var l = a("597517");
            a.es(l, t);
            var s = a("269596")
        },
        656913: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("414456"),
                s = a.n(l),
                i = a("819855"),
                d = a("841098"),
                r = a("449918"),
                u = a("832132"),
                E = a("818643"),
                o = a("608684"),
                _ = a("49111"),
                T = a("575282");
            let c = _.Color.PRIMARY_400,
                I = _.Color.PRIMARY_500;

            function f(e) {
                let {
                    enabled: t,
                    imageClassName: a,
                    iconWrapperClassName: l,
                    ..._
                } = e, f = (0, d.default)(), L = (0, i.isThemeDark)(f) ? c : I, A = {
                    height: 18,
                    width: 18,
                    color: (0, r.getColor)(L)
                };
                return (0, n.jsx)(o.default, {
                    className: s({
                        [T.avatarUploader]: t,
                        [T.avatarUploaderDisabled]: !t
                    }),
                    imageClassName: s(a, T.avatarUploaderInnerSquare, {
                        [T.avatarUploaderInnerSquareDisabled]: !t
                    }),
                    icon: null != _.image && "" !== _.image ? (0, n.jsx)(u.default, {
                        ...A
                    }) : (0, n.jsx)(E.default, {
                        ...A
                    }),
                    iconClassName: s(T.avatarUploadIcon, T.hideDefaultIcon),
                    iconWrapperClassName: l,
                    showIcon: !0,
                    showIconDisabled: !0,
                    hideSize: !0,
                    ..._
                })
            }
        },
        608684: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ImageUploaderIcon: function() {
                    return I
                },
                default: function() {
                    return L
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("627445"),
                r = a.n(d),
                u = a("77078"),
                E = a("159885"),
                o = a("694187"),
                _ = a("49111"),
                T = a("782340"),
                c = a("911686");

            function I(e) {
                let {
                    className: t,
                    icon: a = null
                } = e;
                return (0, n.jsx)("div", {
                    className: i(c.imageUploaderIcon, t),
                    children: a
                })
            }
            class f extends l.PureComponent {
                handleExternalFileChange(e) {
                    r(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, a, l, s;
                    let {
                        image: d,
                        hint: r,
                        name: f,
                        makeURL: L,
                        disabled: A,
                        onChange: C,
                        showIcon: N,
                        showIconDisabled: m,
                        className: h,
                        imageClassName: S,
                        iconClassName: p,
                        iconWrapperClassName: M,
                        icon: D,
                        hideSize: g,
                        imageStyle: O,
                        showRemoveButton: G,
                        maxFileSizeBytes: U,
                        onFileSizeError: v,
                        onOpenImageSelectModal: y,
                        "aria-label": R
                    } = this.props;
                    if (null != (t = null != d && /^data:/.test(d) ? d : L(d)) ? a = 'url("'.concat(t, '")') : null != f && (l = (0, n.jsx)("div", {
                            className: c.imageUploaderAcronym,
                            children: (0, E.getAcronym)(f)
                        })), A) return (0, n.jsx)("div", {
                        className: i(c.imageUploader, c.disabled, h),
                        children: (0, n.jsxs)("div", {
                            className: i(c.imageUploaderInner, S),
                            style: {
                                ...O,
                                backgroundImage: a
                            },
                            children: [l, m && (0, n.jsx)("div", {
                                className: i(c.imageUploaderIcon, c.imageUploaderIconDisabled, p),
                                children: D
                            })]
                        })
                    });
                    null != d ? s = (0, n.jsx)(u.Anchor, {
                        className: c.removeButton,
                        onClick: this.handleRemove,
                        children: T.default.Messages.REMOVE
                    }) : !g && (s = (0, n.jsx)("small", {
                        className: c.sizeInfo,
                        children: T.default.Messages.MINIMUM_SIZE.format({
                            size: _.AVATAR_SIZE
                        })
                    }));
                    let x = null !== (e = null != R ? R : r) && void 0 !== e ? e : T.default.Messages.CHANGE_AVATAR;
                    return (0, n.jsxs)("div", {
                        className: i(c.imageUploader, h),
                        children: [(0, n.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, n.jsxs)("div", {
                                className: N ? i(c.imageUploaderIconWrapper, M) : void 0,
                                children: [(0, n.jsxs)("div", {
                                    className: i(c.imageUploaderInner, S),
                                    style: {
                                        ...O,
                                        backgroundImage: a
                                    },
                                    children: [(0, n.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: l
                                    }), null != y ? (0, n.jsx)(u.Clickable, {
                                        className: c.imageUploaderFileInput,
                                        "aria-label": x,
                                        onClick: y
                                    }) : (0, n.jsx)(o.default, {
                                        ref: this.inputRef,
                                        onChange: C,
                                        className: c.imageUploaderFileInput,
                                        "aria-label": x,
                                        tabIndex: 0,
                                        maxFileSizeBytes: U,
                                        onFileSizeError: v
                                    })]
                                }), null != r && (0, n.jsx)("div", {
                                    className: c.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: r
                                }), N && (0, n.jsx)(I, {
                                    className: p,
                                    icon: D
                                })]
                            })
                        }), G ? s : null]
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = l.createRef(), this.handleRemove = () => {
                        this.props.onChange(null)
                    }
                }
            }
            f.defaultProps = {
                name: "",
                makeURL: e => e,
                disabled: !1,
                showIcon: !1,
                hideSize: !1,
                showRemoveButton: !0,
                maxFileSizeBytes: 1 / 0,
                icon: null
            };
            var L = f
        },
        520497: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            });
            var n = a("49111");

            function l(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: a
                } = window.GLOBAL_ENV;
                return "development" !== a ? "".concat(location.protocol, "//").concat(t).concat(n.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(n.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        29846: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                BlockedUsersNotice: function() {
                    return L
                },
                BlockedUser: function() {
                    return A
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                s = a("669491"),
                i = a("77078"),
                d = a("272030"),
                r = a("328275"),
                u = a("849467"),
                E = a("258078"),
                o = a("823050"),
                _ = a("158998"),
                T = a("325861"),
                c = a("151642"),
                I = a("782340"),
                f = a("960236");
            let L = e => {
                    let {
                        channelId: t
                    } = e, a = (0, c.useStageBlockedUsersCount)(t);
                    return 0 === a ? null : (0, n.jsxs)("div", {
                        className: f.blockedNotice,
                        children: [(0, n.jsx)(r.default, {
                            className: f.blockedIcon,
                            color: s.default.unsafe_rawColors.RED_400.css
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: I.default.Messages.STAGE_BLOCKED_USERS_DESCRIPTION_COUNT.format({
                                number: a
                            })
                        }), (0, n.jsx)(i.Clickable, {
                            className: f.blockedButton,
                            onClick: e => {
                                (0, d.openContextMenu)(e, e => (0, n.jsx)(C, {
                                    ...e,
                                    channelId: t
                                }), {
                                    position: "left",
                                    align: "bottom"
                                })
                            },
                            children: I.default.Messages.VIEW_ALL
                        })]
                    })
                },
                A = e => {
                    let {
                        user: t,
                        showStatus: a,
                        speaker: s,
                        channelId: d
                    } = e, r = (0, l.useStateFromStores)([T.default], () => T.default.isModerator(t.id, d)), c = null;
                    return a && (c = s ? I.default.Messages.STAGE_SPEAKER : r ? I.default.Messages.STAGE_MODERATOR_TOOLTIP : I.default.Messages.STAGE_AUDIENCE), (0, n.jsxs)("div", {
                        className: f.user,
                        children: [(0, n.jsx)(o.default, {
                            src: t.getAvatarURL(null, 32),
                            size: i.AvatarSizes.SIZE_32,
                            muted: !1,
                            deafen: !1,
                            speaking: !1,
                            ringing: !1,
                            renderIcon: s ? () => (0, n.jsx)(u.default, {
                                className: f.icon
                            }) : null
                        }, t.id), (0, n.jsxs)("div", {
                            className: f.userInfo,
                            children: [(0, n.jsxs)("div", {
                                className: f.username,
                                children: [(0, n.jsx)(E.default, {
                                    size: a ? E.default.Sizes.SIZE_16 : E.default.Sizes.SIZE_14,
                                    children: _.default.getName(t)
                                }), (0, n.jsx)(E.default, {
                                    size: a ? E.default.Sizes.SIZE_16 : E.default.Sizes.SIZE_14,
                                    color: E.default.Colors.HEADER_SECONDARY,
                                    children: "#".concat(t.discriminator)
                                })]
                            }), (0, n.jsxs)("div", {
                                className: f.username,
                                children: [(0, n.jsx)(i.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-danger",
                                    children: I.default.Messages.BLOCKED
                                }), (0, n.jsxs)(i.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: [" ", "| ", c]
                                })]
                            })]
                        })]
                    })
                },
                C = e => {
                    let {
                        channelId: t
                    } = e, a = (0, c.useStageBlockedUsers)(t);
                    return (0, n.jsx)(i.Scroller, {
                        className: f.container,
                        children: a.map(e => {
                            let {
                                user: a
                            } = e;
                            return (0, n.jsx)(A, {
                                user: a,
                                channelId: t
                            }, a.id)
                        })
                    })
                }
        },
        686904: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("884691"),
                l = a("448993");

            function s(e, t) {
                let [a, s] = n.useState(!1), [i, d] = n.useState(null), r = async () => {
                    s(!0), d(null);
                    try {
                        let t = await e();
                        return s(!1), d(null), t
                    } catch (a) {
                        let e = new l.APIError(a);
                        return null == t || t(e), d(e), s(!1), null
                    }
                };
                return [r, {
                    loading: a,
                    error: i
                }]
            }
        }
    }
]);