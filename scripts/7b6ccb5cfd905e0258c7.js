(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["89995"], {
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
                r = a("77078"),
                d = a("102985"),
                u = a("79798"),
                o = a("754474"),
                E = a("158998"),
                _ = a("782340"),
                c = a("892802");

            function T(e) {
                if (e.isSystemUser()) return o.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return o.BotTypes.AI;
                if (e.bot) return o.BotTypes.BOT;
                return null
            }
            let I = e => {
                let {
                    primary: t,
                    secondary: a,
                    botType: l,
                    botVerified: i,
                    discriminatorClass: d,
                    className: o,
                    usernameClass: E,
                    color: T,
                    botClass: I,
                    showStreamerModeTooltip: f
                } = e;
                return (0, n.jsxs)("div", {
                    className: s(c.info, o),
                    children: [(0, n.jsx)(r.Tooltip, {
                        text: _.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: f,
                        children: e => (0, n.jsx)("span", {
                            ...e,
                            className: s(c.username, E),
                            style: null != T ? {
                                color: T
                            } : void 0,
                            children: t
                        })
                    }), null != a ? (0, n.jsx)("span", {
                        className: s(c.infoSpacing, d),
                        children: a
                    }) : void 0, null != l && (0, n.jsx)(u.default, {
                        type: l,
                        className: s(c.infoSpacing, I),
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
                    showAccountIdentifier: r,
                    overrideDiscriminator: u,
                    forcePomelo: _,
                    ...c
                } = e, f = (0, i.useStateFromStores)([d.default], () => d.default.hidePersonalInformation), C = f || t || a.isNonUserBot(), L = a.toString(), h = E.default.getName(a), p = s ? L : null != l ? l : h, A = a.isPomelo() || _;
                if (A || p !== L) {
                    let e = p === L && A && s ? E.default.getUserTag(a, {
                            forcePomelo: _
                        }) : p,
                        t = r && e !== "@".concat(L) ? E.default.getUserTag(a) : void 0;
                    return (0, n.jsx)(I, {
                        primary: e,
                        secondary: t,
                        botVerified: a.isVerifiedBot(),
                        botType: T(a),
                        showStreamerModeTooltip: f && e !== h,
                        ...c
                    })
                }
                return (0, n.jsx)(o.default, {
                    name: p,
                    botType: T(a),
                    botVerified: a.isVerifiedBot(),
                    discriminator: C || p !== L ? null : null != u ? u : a.discriminator,
                    ...c
                })
            }
        },
        163725: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                EyeSlashIcon: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("669491"),
                s = a("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M1.293 21.293a1 1 0 1 0 1.414 1.414l20-20a1 1 0 0 0-1.414-1.414l-20 20Zm1.867-5.246a.487.487 0 0 0 .74.052l.72-.72a.513.513 0 0 0 .052-.657 15.708 15.708 0 0 1-1.435-2.524.48.48 0 0 1 0-.396c.408-.905 1.182-2.374 2.377-3.719C7.126 6.383 9.191 5 12 5c.822 0 1.58.118 2.278.328a.52.52 0 0 0 .52-.125l.806-.807c.247-.247.172-.662-.155-.784A9.79 9.79 0 0 0 12 3C4.887 3 1.727 10.115 1.113 11.693a.833.833 0 0 0 0 .614c.246.631.898 2.147 2.047 3.74Zm5.02-5.236c-.133.425.359.65.674.335l2.292-2.292c.315-.315.09-.807-.335-.674a4.01 4.01 0 0 0-2.631 2.63Zm4.674 4.335c-.315.315-.09.806.335.674a4.01 4.01 0 0 0 2.631-2.63c.133-.426-.359-.651-.674-.336l-2.293 2.292Zm-3.132 3.526a.52.52 0 0 0-.52.125l-.806.808c-.247.246-.172.661.155.783A9.79 9.79 0 0 0 12 21c7.113 0 10.273-7.115 10.887-8.693a.833.833 0 0 0 0-.614 17.43 17.43 0 0 0-2.047-3.74.487.487 0 0 0-.74-.052l-.72.72a.513.513 0 0 0-.052.657 15.709 15.709 0 0 1 1.435 2.524.48.48 0 0 1 0 .396c-.408.905-1.182 2.374-2.377 3.719C16.874 17.617 14.809 19 12 19a7.88 7.88 0 0 1-2.278-.328Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        811513: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                GroupIcon: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("669491"),
                s = a("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1Zm3.937 9.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        851298: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ImagePlusIcon: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("669491"),
                s = a("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8.667c0 .123-.335.174-.39.063C21.11 12.708 20.203 12 19 12a3 3 0 0 0-2.701 1.693c-.09.185-.356.23-.48.066l-.469-.626a2 2 0 0 0-3.2 0l-2.223 2.964-.506-.633a1.5 1.5 0 0 0-2.342 0l-1.854 2.318A.75.75 0 0 0 5.81 19h5.69c.276 0 .495.226.542.498.167.956.812 1.683 1.688 2.113.111.054.06.389-.063.389H5a3 3 0 0 1-3-3V5Zm8.204.977c.229-.91-.88-1.55-1.555-.898a.934.934 0 0 1-1.298 0c-.675-.653-1.784-.013-1.556.898a.934.934 0 0 1-.649 1.125c-.903.258-.903 1.538 0 1.796a.934.934 0 0 1 .65 1.125c-.229.91.88 1.55 1.555.898a.934.934 0 0 1 1.298 0c.675.653 1.784.013 1.556-.898a.934.934 0 0 1 .649-1.125c.903-.258.903-1.538 0-1.796a.934.934 0 0 1-.65-1.125ZM19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        304983: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                MoreHorizontalIcon: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("669491"),
                s = a("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M3 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm9 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        876726: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                PlayIcon: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("669491"),
                s = a("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: r
                    })
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
                    return r
                },
                CreateOrAddGuildSlideTypes: function() {
                    return d
                },
                HubGuildTemplateId: function() {
                    return u
                },
                DirectoryEntryCategories: function() {
                    return o
                },
                getHubCategories: function() {
                    return I
                },
                getHubGuildTemplatesMap: function() {
                    return f
                }
            });
            var n, l, s, i, r, d, u, o, E = a("316693"),
                _ = a("991170"),
                c = a("49111"),
                T = a("782340");
            (n = r || (r = {}))[n.GUILD = 0] = "GUILD", n[n.GUILD_SCHEDULED_EVENT = 1] = "GUILD_SCHEDULED_EVENT", (l = d || (d = {})).GUILD_TEMPLATES = "guild-templates", l.CUSTOMIZE_NEW_GUILD = "customize-new-guild", l.CHOOSE_GUILD = "choose-guild", l.CUSTOMIZE_EXISTING_GUILD = "customize-existing-guild", l.CONFIRMATION = "confirmation", (s = u || (u = {})).CREATE = "CREATE", s.HUB_SCHOOL_CLUB = "HUB_SCHOOL_CLUB", s.HUB_STUDY = "HUB_STUDY", s.HUB_CLASS = "HUB_CLASS", s.HUB_SOCIAL = "HUB_SOCIAL", s.HUB_MAJOR = "HUB_MAJOR", s.HUB_DORM = "HUB_DORM", (i = o || (o = {}))[i.ALL = -1] = "ALL", i[i.UNCATEGORIZED = 0] = "UNCATEGORIZED", i[i.SCHOOL_CLUB = 1] = "SCHOOL_CLUB", i[i.CLASS = 2] = "CLASS", i[i.STUDY_SOCIAL = 3] = "STUDY_SOCIAL", i[i.MISC = 5] = "MISC";

            function I(e) {
                return "883060064561299456" === e ? [{
                    value: o.SCHOOL_CLUB,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_1
                }, {
                    value: o.CLASS,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_2
                }, {
                    value: o.STUDY_SOCIAL,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_3
                }, {
                    value: o.MISC,
                    label: T.default.Messages.DIRECTORY_CATEGORY_INTERNAL_5
                }] : [{
                    value: o.SCHOOL_CLUB,
                    label: T.default.Messages.DIRECTORY_CATEGORY_SCHOOL_CLUB,
                    idealSize: 100
                }, {
                    value: o.CLASS,
                    label: T.default.Messages.DIRECTORY_CATEGORY_CLASS
                }, {
                    value: o.STUDY_SOCIAL,
                    label: T.default.Messages.DIRECTORY_CATEGORY_STUDY_SOCIAL,
                    idealSize: 50
                }, {
                    value: o.MISC,
                    label: T.default.Messages.DIRECTORY_CATEGORY_MISCELLANEOUS
                }]
            }

            function f() {
                return {
                    [u.CREATE]: {
                        id: u.CREATE,
                        code: "2TffvPucqHkN",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_CREATE,
                        channels: [],
                        system_channel_id: null
                    },
                    [u.HUB_SCHOOL_CLUB]: {
                        id: u.HUB_SCHOOL_CLUB,
                        code: "UMUbvRpRZhS6",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_SCHOOL_CLUB,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFORMATION,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_WELCOME_AND_RULES,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_ANNOUNCEMENTS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "03",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_TEXT,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_1,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MEETING_ROOM_2,
                            type: c.ChannelTypes.GUILD_VOICE
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
                            permissions: E.default.combine(_.default.DEFAULT, c.Permissions.MANAGE_ROLES, c.Permissions.MANAGE_CHANNELS, c.Permissions.KICK_MEMBERS, c.Permissions.BAN_MEMBERS, c.Permissions.MANAGE_NICKNAMES, c.Permissions.MANAGE_GUILD_EXPRESSIONS, c.Permissions.MANAGE_MESSAGES, c.Permissions.SEND_TTS_MESSAGES),
                            color: 3066993
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_STUDY]: {
                        id: u.HUB_STUDY,
                        code: "2JBhzzca2vfT",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_STUDY,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_NOTES_RESOURCES,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: c.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_CLASS]: {
                        id: u.HUB_CLASS,
                        code: "r86WWBwTGspb",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_CLASS,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_ASSIGNMENTS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: c.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_SOCIAL]: {
                        id: u.HUB_SOCIAL,
                        code: "AvvtXE3mfbCR",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_SOCIAL,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "03",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "04",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_MEETUPS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_UNNUMBERED_STUDY_ROOM,
                            type: c.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "02"
                    },
                    [u.HUB_MAJOR]: {
                        id: u.HUB_MAJOR,
                        code: "FhmfDR6Arvsc",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_MAJOR,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_RESOURCES,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "02",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_HELP_QUESTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 1
                            }),
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_STUDY_ROOM.format({
                                number: 2
                            }),
                            type: c.ChannelTypes.GUILD_VOICE
                        }],
                        system_channel_id: "12"
                    },
                    [u.HUB_DORM]: {
                        id: u.HUB_DORM,
                        code: "fkq8xHfrGE58",
                        label: T.default.Messages.GUILD_TEMPLATE_HEADER_DORM,
                        channels: [{
                            id: "00",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_INFO,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "01",
                            parent_id: "00",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_DORM_NEWS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "10",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_CHAT,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "11",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_INTRODUCTIONS,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "12",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_GENERAL,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "13",
                            parent_id: "10",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_OFF_TOPIC,
                            type: c.ChannelTypes.GUILD_TEXT
                        }, {
                            id: "20",
                            parent_id: null,
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_CATEGORY_VOICE,
                            type: c.ChannelTypes.GUILD_CATEGORY
                        }, {
                            id: "21",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_LOUNGE,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "22",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_MOVIE_ROOM,
                            type: c.ChannelTypes.GUILD_VOICE
                        }, {
                            id: "23",
                            parent_id: "20",
                            name: T.default.Messages.GUILD_TEMPLATE_NAME_VOICE_COUCHES,
                            type: c.ChannelTypes.GUILD_VOICE
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
                    return E
                }
            });
            var n = a("884691"),
                l = a("446674"),
                s = a("152475"),
                i = a("42203"),
                r = a("501030"),
                d = a("730647"),
                u = a("49111");
            let o = {
                can_broadcast: !1
            };

            function E(e, t, a) {
                let [E, _] = n.useState(o), [c, T] = n.useState(!1), I = n.useRef(!1), f = null == e ? void 0 : e.id, C = null == e ? void 0 : e.hasFeature(u.GuildFeatures.HAS_DIRECTORY_ENTRY);
                n.useEffect(() => {
                    if (!C) {
                        _(o);
                        return
                    }
                    if (I.current || null == f) return;
                    let e = async () => {
                        I.current = !0;
                        try {
                            let e = await (0, r.getDirectoryEntryBroadcastInfo)(f, d.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT, t);
                            _(e)
                        } catch (e) {
                            _(o)
                        }
                        I.current = !1
                    };
                    e()
                }, [f, C, t]), n.useEffect(() => {
                    var e;
                    if (!E.can_broadcast) {
                        T(!1);
                        return
                    }
                    T(null === (e = E.has_broadcast) || void 0 === e || e)
                }, [E]);
                let L = (0, l.useStateFromStores)([i.default], () => (0, s.canEveryoneRoleViewEvent)(a, [i.default]));
                return {
                    broadcastInfo: E,
                    broadcastToDirectoryChannels: L && c,
                    setBroadcastToDirectoryChannels: T,
                    canEveryoneRoleViewEvent: L
                }
            }
        },
        334683: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("884691"),
                l = a("446674"),
                s = a("817963"),
                i = a("923959"),
                r = a("305961"),
                d = a("957255"),
                u = a("49111"),
                o = (e, t) => {
                    let a = (0, l.useStateFromStores)([r.default], () => r.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: o
                        } = (0, s.useManageResourcePermissions)(a),
                        E = (0, l.useStateFromStores)([i.default], () => i.default.getChannels(e)[i.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        _ = n.useMemo(() => null != t ? E.filter(e => {
                            let {
                                channel: a
                            } = e;
                            return a.type === t
                        }) : E, [E, t]),
                        c = (0, l.useStateFromStores)([d.default], () => {
                            if (d.default.can(u.Permissions.ADMINISTRATOR, a) || o) return !0;
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
                        }, [_, a, o]);
                    return c
                }
        },
        799547: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getEventChannelsByType: function() {
                    return i
                },
                useGetEventChannelsByType: function() {
                    return r
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

            function r(e, t) {
                return (0, n.useStateFromStoresArray)([s.default], () => i(e, t, [s.default]), [e, t])
            }
            a("957255"), a("270161")
        },
        194250: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                r = a("866227"),
                d = a.n(r),
                u = a("77078"),
                o = a("656913"),
                E = a("694187"),
                _ = a("151642"),
                c = a("29846"),
                T = a("777367"),
                I = a("398604"),
                f = a("189443"),
                C = a("822516"),
                L = a("93550"),
                h = a("953143"),
                p = a("745049"),
                A = a("75015"),
                m = a("837979"),
                N = a("782340"),
                M = a("505376");

            function g(e) {
                let {
                    editBroadcastInfoData: t
                } = e, {
                    broadcastInfo: a,
                    broadcastToDirectoryChannels: l,
                    setBroadcastToDirectoryChannels: s,
                    canEveryoneRoleViewEvent: i
                } = t;
                return a.can_broadcast ? (0, n.jsxs)(u.FormItem, {
                    title: N.default.Messages.CREATE_EVENT_PRIVACY_LABEL,
                    className: M.formItem,
                    children: [(0, n.jsx)(u.Tooltip, {
                        text: (0, n.jsx)(u.Text, {
                            className: M.broadcastInfoTooltip,
                            variant: "text-sm/normal",
                            children: N.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING
                        }),
                        "aria-label": N.default.Messages.HUB_EVENTS_SHARE_CHANNEL_EVERYONE_VIEWABLE_WARNING,
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
                                    children: N.default.Messages.HUB_EVENTS_SHARE_TITLE
                                })
                            })
                        })
                    }), (0, n.jsx)(u.Text, {
                        className: M.broadcastInfoDescription,
                        variant: "text-xs/normal",
                        color: "header-secondary",
                        children: N.default.Messages.HUB_EVENTS_SHARE_DESCRIPTION
                    })]
                }) : null
            }

            function S(e) {
                let {
                    guildEvent: t,
                    guildEventId: s,
                    guildId: r,
                    editBroadcastInfoData: S,
                    error: v,
                    validationErrorMessage: G,
                    onChange: D,
                    canSetFocus: O = !1
                } = e, {
                    entityType: y,
                    channelId: U,
                    description: x,
                    name: R,
                    image: P,
                    scheduledEndTime: V,
                    scheduledStartTime: j,
                    autoStart: B,
                    recurrenceRule: H
                } = t, {
                    canUseEventsAutoStartToggle: b
                } = T.default.useExperiment({
                    location: "Guild Events Modal",
                    guildId: null != r ? r : ""
                }), F = (0, _.useStageBlockedUsersCount)(U), Y = null != t && (0, I.isGuildScheduledEventActive)(t), w = l.useMemo(() => {
                    let e = (0, C.getScheduleFromEventData)(t);
                    return null != e ? e : {
                        startDate: d(j)
                    }
                }, [t, j]), k = l.useRef(null);
                l.useEffect(() => {
                    if (O) {
                        var e;
                        null === (e = k.current) || void 0 === e || e.focus()
                    }
                }, [O]);
                let X = e => {
                        D({
                            image: e
                        })
                    },
                    Z = (e, t) => {
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
                                uploadType: A.UploadTypes.SCHEDULED_EVENT_IMAGE,
                                allowSkip: !0,
                                ...a
                            })
                        })
                    };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("div", {
                        className: M.blockedUsersContainer,
                        children: null != U && !Y && F > 0 && (0, n.jsx)(c.BlockedUsersNotice, {
                            channelId: U
                        })
                    }), (0, n.jsxs)("div", {
                        className: M.form,
                        children: [(0, n.jsxs)(u.FormItem, {
                            title: N.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL,
                            className: M.topicFormItem,
                            required: !0,
                            children: [(0, n.jsx)(u.TextInput, {
                                className: M.textInput,
                                onChange: e => {
                                    D({
                                        name: e
                                    })
                                },
                                placeholder: N.default.Messages.GUILD_EVENT_CREATE_TOPIC_PLACEHOLDER,
                                maxLength: m.MAX_STAGE_TOPIC_LENGTH,
                                value: R,
                                autoComplete: "off",
                                inputRef: k
                            }), null != v ? (0, n.jsx)(u.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: M.warning,
                                children: v.getAnyErrorMessage()
                            }) : null]
                        }), (0, n.jsx)(h.default, {
                            className: M.formItem,
                            onScheduleChange: e => {
                                let {
                                    startDate: t,
                                    endDate: a
                                } = e, n = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == a ? void 0 : a.toISOString()
                                };
                                null != t && null != V && (null == a ? void 0 : a.isBefore(t)) && (n.scheduledEndTime = t.add(1, "hour").toISOString()), D(n)
                            },
                            onRecurrenceChange: e => {
                                let t = w.startDate;
                                if (null == t) return;
                                let a = (0, C.recurrenceOptionToRecurrenceRule)(e, t);
                                D({
                                    recurrenceRule: a
                                })
                            },
                            schedule: w,
                            recurrenceRule: H,
                            showEndDate: y === p.GuildScheduledEventEntityTypes.EXTERNAL,
                            requireEndDate: y === p.GuildScheduledEventEntityTypes.EXTERNAL,
                            disableStartDateTime: Y,
                            guildId: r
                        }), null != G ? (0, n.jsx)(u.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: M.warning,
                            children: G
                        }) : null, b ? (0, n.jsx)(u.FormItem, {
                            className: i(M.formItem, M.autoStartToggle),
                            children: (0, n.jsx)(u.Checkbox, {
                                type: u.Checkbox.Types.INVERTED,
                                value: B,
                                onChange: (e, t) => {
                                    D({
                                        autoStart: t
                                    })
                                },
                                children: (0, n.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: N.default.Messages.GUILD_EVENT_AUTO_START_TOGGLE
                                })
                            })
                        }) : null, (0, n.jsx)(u.FormItem, {
                            title: N.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                            className: M.formItem,
                            children: (0, n.jsx)(u.TextArea, {
                                className: M.descriptionInput,
                                placeholder: N.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                value: x,
                                onChange: e => {
                                    D({
                                        description: e
                                    })
                                },
                                maxLength: p.GUILD_EVENT_MAX_DESCRIPTION_LENGTH,
                                autosize: !0
                            })
                        }), (0, n.jsxs)(u.FormItem, {
                            title: N.default.Messages.GUILD_EVENT_IMAGE,
                            className: M.formItem,
                            children: [(0, n.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: M.addImageHint,
                                children: N.default.Messages.GUILD_EVENT_ADD_IMAGE_SUGGESTION
                            }), null != P ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(o.default, {
                                    className: M.imagePreview,
                                    iconWrapperClassName: M.imagePreviewInner,
                                    image: P,
                                    makeURL: e => {
                                        if (null == e) return null;
                                        if (null != r) {
                                            var a;
                                            return null !== (a = (0, L.default)((0, f.convertToFakeGuildEvent)(t, r, s))) && void 0 !== a ? a : null
                                        }
                                    },
                                    onChange: Z,
                                    hint: N.default.Messages.GUILD_EVENT_CHANGE_IMAGE,
                                    showRemoveButton: !1,
                                    enabled: !0
                                }), (0, n.jsx)(u.Button, {
                                    size: u.Button.Sizes.SMALL,
                                    onClick: () => X(null),
                                    children: N.default.Messages.GUILD_EVENT_REMOVE_IMAGE
                                })]
                            }) : (0, n.jsxs)(u.Button, {
                                size: u.Button.Sizes.SMALL,
                                children: [N.default.Messages.GUILD_EVENT_ADD_IMAGE, (0, n.jsx)(E.default, {
                                    onChange: Z
                                })]
                            })]
                        }), (0, n.jsx)(g, {
                            editBroadcastInfoData: S
                        })]
                    })]
                })
            }
        },
        590942: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return H
                }
            });
            var n, l, s = a("37983"),
                i = a("884691"),
                r = a("446674"),
                d = a("77078"),
                u = a("970728"),
                o = a("206230"),
                E = a("526887"),
                _ = a("960757"),
                c = a("923959"),
                T = a("305961"),
                I = a("683911"),
                f = a("476765"),
                C = a("354023"),
                L = a("686904"),
                h = a("398604"),
                p = a("322224"),
                A = a("152475"),
                m = a("799547"),
                N = a("189443"),
                M = a("841363"),
                g = a("558286"),
                S = a("560309"),
                v = a("151859"),
                G = a("299342"),
                D = a("499950"),
                O = a("27754"),
                y = a("745049"),
                U = a("49111"),
                x = a("782340"),
                R = a("738021");
            let {
                INVITE_OPTIONS_7_DAYS: P,
                INVITE_OPTIONS_UNLIMITED: V
            } = C.default;

            function j(e) {
                let {
                    modal: t
                } = e, {
                    createMultipleConfetti: a
                } = i.useContext(E.ConfettiCannonContext);
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

            function B(e) {
                let {
                    guildId: t,
                    guildEvent: a,
                    guildEventId: n,
                    editBroadcastInfoData: u,
                    isEdit: E,
                    formErrors: _,
                    transitionState: c,
                    loading: T,
                    error: C,
                    onChange: L,
                    onSave: p,
                    onClose: A,
                    createdEvent: m
                } = e, N = (0, f.useUID)(), M = i.useMemo(() => [{
                    slideId: l.ENTITY,
                    label: x.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
                    valid: null == _.entity,
                    userErrorMessage: _.entity
                }, {
                    slideId: l.SETTINGS,
                    label: x.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
                    valid: null == _.schedule && null == _.topic,
                    userErrorMessage: _.schedule
                }, {
                    slideId: l.PREVIEW,
                    label: x.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
                    valid: !0
                }], [_]), O = Object.keys(l).length, y = (0, h.isGuildScheduledEventActive)(a), U = y ? l.SETTINGS : l.ENTITY, P = e => Math.max(0, Math.min(e, O - 1)), [V, B] = i.useState(U), [H, b] = i.useState(!1), F = i.useMemo(() => M.slice(0, V + 1).map(e => e.valid).every(Boolean), [M, V]), Y = V >= M.length ? l.SUCCESS : M[P(V)].slideId, w = Y === l.SUCCESS, k = (0, g.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
                k(w);
                let X = (0, r.useStateFromStores)([o.default], () => o.default.useReducedMotion),
                    Z = i.useRef(null),
                    z = e => {
                        b(!1), B(P(e))
                    };
                i.useEffect(() => {
                    null != m && z(l.SUCCESS)
                }, [null == m ? void 0 : m.id, z]);
                let W = () => {
                        if (!F) return;
                        let e = Y === l.PREVIEW;
                        e ? p() : w ? A() : z(V + 1)
                    },
                    K = () => {
                        z(V - 1)
                    },
                    q = x.default.Messages.NEXT;
                return Y === l.PREVIEW && (q = E ? x.default.Messages.SAVE_EVENT : x.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(d.ModalRoot, {
                        transitionState: c,
                        "aria-labelledby": N,
                        size: d.ModalSize.DYNAMIC,
                        children: [!X && w ? (0, s.jsx)(j, {
                            modal: Z.current
                        }) : null, (0, s.jsxs)(d.ModalContent, {
                            className: R.content,
                            scrollerRef: Z,
                            children: [!w && (0, s.jsx)(I.default, {
                                steps: M.map(e => e.label),
                                stepIndex: V,
                                onClick: e => {
                                    e < V ? K() : e > V && W()
                                }
                            }), (0, s.jsxs)(d.Slides, {
                                activeSlide: Y,
                                width: 440,
                                onSlideReady: e => {
                                    b(e === Y)
                                },
                                children: [(0, s.jsx)(d.Slide, {
                                    id: l.ENTITY,
                                    children: (0, s.jsx)(S.default, {
                                        guildId: t,
                                        guildEvent: a,
                                        validationErrorMessage: _.entity,
                                        isSlideReady: H,
                                        onChange: L
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: l.SETTINGS,
                                    children: (0, s.jsx)(G.default, {
                                        guildEvent: a,
                                        guildEventId: n,
                                        guildId: t,
                                        editBroadcastInfoData: u,
                                        onChange: L,
                                        error: C,
                                        validationErrorMessage: _.schedule,
                                        isSlideReady: H
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: l.PREVIEW,
                                    children: (0, s.jsx)(v.default, {
                                        guildId: t,
                                        guildEvent: a,
                                        guildEventId: n,
                                        error: C
                                    })
                                }), (0, s.jsx)(d.Slide, {
                                    id: l.SUCCESS,
                                    children: (0, s.jsx)(D.default, {
                                        onClose: A,
                                        event: m
                                    })
                                })]
                            })]
                        }), !w && (0, s.jsxs)(d.ModalFooter, {
                            className: R.footer,
                            children: [(0, s.jsxs)("div", {
                                className: R.inline,
                                children: [(0, s.jsx)(d.Button, {
                                    color: d.Button.Colors.PRIMARY,
                                    onClick: A,
                                    children: x.default.Messages.CANCEL
                                }), (0, s.jsx)(d.Button, {
                                    onClick: W,
                                    disabled: !F,
                                    className: R.button,
                                    submitting: T,
                                    children: q
                                })]
                            }), Y !== l.ENTITY && (0, s.jsx)(d.Button, {
                                look: d.Button.Looks.LINK,
                                size: d.Button.Sizes.MIN,
                                onClick: K,
                                color: d.Button.Colors.LINK,
                                children: x.default.Messages.BACK
                            })]
                        })]
                    })
                })
            }

            function H(e) {
                let {
                    guildId: t,
                    guildScheduledEventId: n,
                    transitionState: l,
                    onClose: o
                } = e, E = (0, r.useStateFromStores)([T.default], () => T.default.getGuild(t)), I = (0, r.useStateFromStores)([h.default], () => h.default.getGuildScheduledEvent(n), [n]), f = (0, r.useStateFromStores)([c.default], () => c.default.getDefaultChannel(t), [t]), C = (0, N.getInitialGuildEventData)(E, I, f), [g, S] = i.useState(C), [v] = i.useState((0, N.isEditingEvent)(I)), [G, D] = i.useState(null), R = e => {
                    var t;
                    let a = (0, A.isGuildEventInvitable)(e),
                        n = null !== (t = e.channel_id) && void 0 !== t ? t : null == f ? void 0 : f.id;
                    null != n && u.default.createInvite(n, {
                        max_age: P.value,
                        max_uses: V.value
                    }, U.InstantInviteSources.GUILD_EVENTS), a ? D(e) : o()
                }, j = (0, _.default)(E, null == I ? void 0 : I.id, g), [H, {
                    loading: b,
                    error: F
                }] = (0, L.default)(async () => {
                    if (null != G) return;
                    let e = {
                        broadcastToDirectoryChannels: j.broadcastToDirectoryChannels
                    };
                    if (v && null != n) return await p.default.saveEvent(n, g, t, e), o();
                    let a = await p.default.createGuildEvent(g, t, e);
                    return R(a.body), a
                }), Y = i.useMemo(() => (0, O.default)(g, v), [g, v]);
                return (0, s.jsx)(B, {
                    guildId: t,
                    guildEvent: g,
                    guildEventId: n,
                    editBroadcastInfoData: j,
                    isEdit: v,
                    formErrors: Y,
                    transitionState: l,
                    loading: b,
                    error: F,
                    onChange: e => {
                        if (null != e.entityType) {
                            var a;
                            let n = (0, M.getChannelTypeFromEntity)(e.entityType),
                                [l] = (0, m.getEventChannelsByType)(t, n);
                            e.channelId = null !== (a = null == l ? void 0 : l.id) && void 0 !== a ? a : null, e.entityType !== y.GuildScheduledEventEntityTypes.EXTERNAL && g.entityType === y.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
                        }
                        S(t => ({
                            ...t,
                            ...e
                        }))
                    },
                    onSave: () => {
                        null != g.recurrenceRule && v ? (0, d.openModalLazy)(async () => {
                            let {
                                ConfirmModal: e
                            } = await a.el("77078").then(a.bind(a, "77078"));
                            return t => (0, s.jsxs)(e, {
                                ...t,
                                header: x.default.Messages.EDIT_ALL_EVENTS,
                                confirmText: x.default.Messages.SAVE_EVENT,
                                cancelText: x.default.Messages.NEVERMIND,
                                onConfirm: H,
                                children: [(0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: x.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
                                }), (0, s.jsx)("br", {}), (0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: x.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
                                })]
                            })
                        }) : H()
                    },
                    onClose: o,
                    createdEvent: G
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
                r = a("446674"),
                d = a("77078"),
                u = a("679653"),
                o = a("42203"),
                E = a("305961"),
                _ = a("957255"),
                c = a("27618"),
                T = a("697218"),
                I = a("718550"),
                f = a("368121"),
                C = a("944633"),
                L = a("228427"),
                h = a("697468"),
                p = a("398604"),
                A = a("334683"),
                m = a("799547"),
                N = a("776863"),
                M = a("613767"),
                g = a("841363"),
                S = a("306939"),
                v = a("745049"),
                G = a("49111"),
                D = a("782340"),
                O = a("869785");
            let y = e => e === v.GuildScheduledEventEntityTypes.EXTERNAL,
                U = (e, t) => {
                    let a = o.default.getChannel(e);
                    if (null == a) return null;
                    let l = a.type === G.ChannelTypes.GUILD_STAGE_VOICE,
                        s = (0, M.isChannelPublic)(a, t),
                        i = s ? f.default : C.default,
                        r = s ? L.default : h.default,
                        d = l ? r : i;
                    return (0, n.jsx)(d, {
                        height: 24,
                        className: O.channelOptionIcon
                    })
                },
                x = e => {
                    let {
                        guildId: t,
                        channelType: a,
                        channel: l,
                        onSelectChannel: s,
                        disabled: i,
                        entityType: r
                    } = e, o = a === G.ChannelTypes.GUILD_STAGE_VOICE, E = (0, M.isChannelPublic)(l, r), _ = (0, m.useGetEventChannelsByType)(t, a);
                    return (0, n.jsxs)(d.FormItem, {
                        title: o ? D.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL : D.default.Messages.GUILD_EVENT_LOCATION_VOICE_FIELD_LABEL,
                        className: O.options,
                        disabled: i,
                        required: !0,
                        children: [(0, n.jsx)(d.SearchableSelect, {
                            value: null == l ? void 0 : l.id,
                            options: _.map(e => ({
                                value: e.id,
                                label: (0, u.computeChannelName)(e, T.default, c.default, !0)
                            })),
                            onChange: e => {
                                let t = _.find(t => t.id === e);
                                s(null != t ? t : void 0)
                            },
                            renderOptionPrefix: e => U(null == e ? void 0 : e.value, r),
                            isDisabled: i
                        }), !E && (0, n.jsx)(d.Text, {
                            color: "header-secondary",
                            className: O.channelPrivate,
                            variant: "text-sm/normal",
                            children: D.default.Messages.GUILD_EVENT_PRIVATE_DESCRIPTION
                        })]
                    })
                };

            function R(e, t, a, n) {
                return t ? {
                    disabled: !0,
                    tooltipText: D.default.Messages.GUILD_EVENT_LOCATION_DISABLED_CANNOT_EDIT
                } : a ? 0 === n && e !== v.GuildScheduledEventEntityTypes.EXTERNAL ? {
                    disabled: !0,
                    tooltipText: D.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_AVAILABLE_CHANNEL
                } : {
                    disabled: !1,
                    tooltipText: null
                } : {
                    disabled: !0,
                    tooltipText: D.default.Messages.GUILD_EVENT_LOCATION_DISABLED_NO_PERMISSION
                }
            }
            let P = e => t => {
                    e({
                        entityMetadata: {
                            location: t
                        }
                    })
                },
                V = e => t => {
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
                    if (y(n)) {
                        var s;
                        let e = (null !== (s = i(t.scheduledStartTime)) && void 0 !== s ? s : i()).add(2, "hour");
                        l.scheduledEndTime = e.toISOString()
                    }
                    e(l)
                };

            function B(e) {
                let {
                    guildId: t,
                    guildEvent: a,
                    onChange: s,
                    isFocusReady: i
                } = e, {
                    entityType: u,
                    channelId: E
                } = a, _ = (0, r.useStateFromStores)([o.default], () => o.default.getChannel(E), [E]), c = l.useRef(null);
                l.useEffect(() => {
                    if (i && y(u)) {
                        var e;
                        null === (e = c.current) || void 0 === e || e.focus()
                    }
                }, [i, u]);
                let T = P(s),
                    I = V(s),
                    f = (0, g.getLocationFromEventData)(a),
                    C = (0, g.getChannelTypeFromEntity)(u),
                    L = (0, p.isGuildScheduledEventActive)(a);
                return null == u || u === v.GuildScheduledEventEntityTypes.NONE ? null : y(u) ? (0, n.jsx)(d.FormItem, {
                    title: D.default.Messages.GUILD_EVENT_LOCATION_ELSEWHERE_FIELD_LABEL,
                    className: O.options,
                    required: !0,
                    children: (0, n.jsx)(d.TextInput, {
                        className: O.textInput,
                        onChange: T,
                        placeholder: D.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_PLACEHOLDER,
                        maxLength: v.MAX_EVENT_LOCATION_LENGTH,
                        value: null != f ? f : "",
                        inputRef: c
                    })
                }) : null == C ? null : (0, n.jsx)(x, {
                    guildId: t,
                    channelType: C,
                    onSelectChannel: I,
                    channel: _,
                    entityType: u,
                    disabled: L
                })
            }

            function H(e) {
                let {
                    guildId: t,
                    guildEvent: a,
                    onChange: s
                } = e, i = (0, r.useStateFromStores)([E.default], () => E.default.getGuild(t), [t]), u = (0, A.default)(t, void 0), o = (0, A.default)(t, G.ChannelTypes.GUILD_VOICE), _ = (0, A.default)(t, G.ChannelTypes.GUILD_STAGE_VOICE), c = (0, m.useGetEventChannelsByType)(t, G.ChannelTypes.GUILD_VOICE), T = (0, N.useChannelsUserCanStartStageIn)(i), C = null == i ? void 0 : i.hasFeature(G.GuildFeatures.COMMUNITY), h = (0, p.isGuildScheduledEventActive)(a), M = j(s, a), g = l.useMemo(() => {
                    let e = [{
                        name: D.default.Messages.VOICE_CHANNEL,
                        value: v.GuildScheduledEventEntityTypes.VOICE,
                        desc: D.default.Messages.GUILD_EVENT_LOCATION_OPTION_VOICE_HINT,
                        icon: f.default,
                        ...R(v.GuildScheduledEventEntityTypes.VOICE, h, o, c.length)
                    }, {
                        name: D.default.Messages.GUILD_EVENT_LOCATION_EXTERNAL,
                        value: v.GuildScheduledEventEntityTypes.EXTERNAL,
                        desc: D.default.Messages.GUILD_EVENT_LOCATION_OPTION_ELSEWHERE_HINT,
                        icon: I.default,
                        ...R(v.GuildScheduledEventEntityTypes.EXTERNAL, h, u, 0)
                    }];
                    return C ? [{
                        name: D.default.Messages.STAGE_CHANNEL,
                        value: v.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                        desc: D.default.Messages.GUILD_EVENT_LOCATION_OPTION_STAGE_HINT,
                        icon: L.default,
                        ...R(v.GuildScheduledEventEntityTypes.STAGE_INSTANCE, h, _, T.length)
                    }, ...e] : e
                }, [u, o, _, C, c.length, T.length, h]);
                return (0, n.jsx)(d.RadioGroup, {
                    value: a.entityType,
                    options: g,
                    onChange: M,
                    className: O.options
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
                    entityType: o
                } = l, c = (0, r.useStateFromStores)([E.default], () => E.default.getGuild(t), [t]), T = (0, N.useChannelsUserCanStartStageIn)(c), I = (0, r.useStateFromStores)([_.default], () => _.default.can(G.Permissions.MANAGE_CHANNELS, c)), f = null == c ? void 0 : c.hasFeature(G.GuildFeatures.COMMUNITY), C = j(i, l), L = f && !y(o) && 0 === T.length && I && null != o;
                return (0, n.jsxs)("div", {
                    className: O.container,
                    children: [(0, n.jsx)(d.Heading, {
                        variant: "heading-xl/semibold",
                        className: O.header,
                        children: D.default.Messages.GUILD_EVENT_LOCATION_TITLE
                    }), (0, n.jsx)(d.Text, {
                        color: "header-secondary",
                        className: O.text,
                        variant: "text-sm/normal",
                        children: D.default.Messages.GUILD_EVENT_LOCATION_SUBTITLE
                    }), (0, n.jsx)(H, {
                        guildId: t,
                        guildEvent: l,
                        onChange: i
                    }), (0, n.jsx)(B, {
                        guildId: t,
                        guildEvent: l,
                        isFocusReady: u,
                        onChange: i
                    }), L ? (0, n.jsx)(S.default, {
                        onClick: () => {
                            C({
                                value: v.GuildScheduledEventEntityTypes.STAGE_INSTANCE,
                                name: D.default.Messages.STAGE_CHANNEL
                            }), (0, d.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("581354").then(a.bind(a, "581354"));
                                return a => (0, n.jsx)(e, {
                                    ...a,
                                    channelType: G.ChannelTypes.GUILD_STAGE_VOICE,
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
                    return p
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("446674"),
                i = a("77078"),
                r = a("419830"),
                d = a("267567"),
                u = a("42203"),
                o = a("305961"),
                E = a("697218"),
                _ = a("718550"),
                c = a("189443"),
                T = a("841363"),
                I = a("93550"),
                f = a("617347"),
                C = a("745049"),
                L = a("782340"),
                h = a("151990");

            function p(e) {
                var t, a, p, A;
                let {
                    guildId: m,
                    guildEvent: N,
                    guildEventId: M,
                    error: g
                } = e, S = l.useMemo(() => (0, c.convertToFakeGuildEvent)(N, m), [N, m]), {
                    channel_id: v,
                    name: G,
                    image: D,
                    description: O
                } = S, y = (0, s.useStateFromStores)([u.default], () => u.default.getChannel(v), [v]), U = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(m), [m]), x = (0, T.getLocationFromEvent)(S), R = (0, s.useStateFromStores)([E.default], () => null != N.creatorId ? E.default.getUser(N.creatorId) : E.default.getCurrentUser(), [N.creatorId]), P = (0, s.useStateFromStores)([d.default], () => d.default.isLurking(m), [m]), V = (0, r.getChannelIconComponent)(y, U);
                return (0, n.jsxs)("div", {
                    className: h.content,
                    children: [(0, n.jsx)(f.default, {
                        className: h.previewCard,
                        guild: U,
                        channel: y,
                        location: null != x ? x : void 0,
                        creator: R,
                        name: G,
                        description: O,
                        imageSource: (p = (0, c.convertToFakeGuildEvent)(N, m, M), null == (A = D) && null == p.image ? null : null != A && /^data:/.test(A) ? A : (0, I.default)(p)),
                        isActive: !1,
                        isUserLurking: P,
                        speakers: [],
                        speakerCount: 0,
                        rsvped: !0,
                        guildEventId: C.FAKE_EVENT_ID,
                        eventPreview: S
                    }), (0, n.jsxs)("div", {
                        className: h.textContainer,
                        children: [(0, n.jsx)(i.Heading, {
                            variant: "heading-xl/semibold",
                            children: L.default.Messages.GUILD_EVENT_PREVIEW_TITLE
                        }), (0, n.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: h.subheader,
                            children: null != location ? L.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : L.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
                                channelName: null !== (a = null == y ? void 0 : y.name) && void 0 !== a ? a : "",
                                channelHook: () => (0, n.jsxs)("div", {
                                    className: h.channelName,
                                    children: [null != V ? (0, n.jsx)(V, {
                                        width: 20,
                                        height: 20,
                                        className: h.icon
                                    }) : (0, n.jsx)(_.default, {
                                        height: 18,
                                        width: 18,
                                        className: h.locationIcon
                                    }), null !== (t = null == y ? void 0 : y.name) && void 0 !== t ? t : x]
                                })
                            })
                        }), null != g && (0, n.jsx)(i.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: h.subheader,
                            children: g.getAnyErrorMessage()
                        })]
                    })]
                })
            }
        },
        299342: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("77078"),
                s = a("194250"),
                i = a("782340"),
                r = a("11644");

            function d(e) {
                let {
                    isSlideReady: t,
                    ...a
                } = e;
                return (0, n.jsxs)("div", {
                    className: r.slideContainer,
                    children: [(0, n.jsxs)("div", {
                        className: r.header,
                        children: [(0, n.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            children: i.default.Messages.GUILD_EVENT_CREATE_HEADER
                        }), (0, n.jsx)(l.Text, {
                            color: "header-secondary",
                            className: r.text,
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
                    return g
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                s = a("77078"),
                i = a("9294"),
                r = a("512027"),
                d = a("52393"),
                u = a("652453"),
                o = a("119184"),
                E = a("923959"),
                _ = a("305961"),
                c = a("330154"),
                T = a("943232"),
                I = a("945330"),
                f = a("599110"),
                C = a("306160"),
                L = a("354023"),
                h = a("841363"),
                p = a("49111"),
                A = a("782340"),
                m = a("131439");
            let {
                INVITE_OPTIONS_7_DAYS: N,
                INVITE_OPTIONS_UNLIMITED: M
            } = L.default;

            function g(e) {
                var t, a, g;
                let {
                    onClose: S,
                    event: v
                } = e, G = null == v ? void 0 : v.guild_id, D = (0, l.useStateFromStores)([E.default], () => {
                    var e;
                    return null != G ? null === (e = E.default.getDefaultChannel(G)) || void 0 === e ? void 0 : e.id : null
                }, [G]), O = (0, l.useStateFromStores)([_.default], () => _.default.getGuild(G), [G]), y = (null == O ? void 0 : O.vanityURLCode) != null && (null == O ? void 0 : O.vanityURLCode.length) > 0, {
                    enabled: U
                } = r.default.useExperiment({
                    guildId: null != G ? G : "",
                    location: "bd50e8_1"
                }, {
                    autoTrackExposure: y
                }), {
                    channel_id: x,
                    id: R
                } = null != v ? v : {}, P = (0, l.useStateFromStores)([c.default], () => {
                    let e = null != x ? x : D;
                    return null == e ? null : c.default.getInvite(e)
                }, [x, D]);
                if (null == v) return S(), null;
                let V = U && null !== (t = null == O ? void 0 : O.vanityURLCode) && void 0 !== t ? t : null == P ? void 0 : P.code,
                    j = null != V ? (0, i.generateInviteKeyFromExtraData)({
                        baseCode: V,
                        guildScheduledEventId: R
                    }) : null,
                    B = null == j || null == P,
                    H = (0, d.default)(null != j ? j : ""),
                    b = null !== (a = null == P ? void 0 : P.maxAge) && void 0 !== a ? a : N.value,
                    F = null !== (g = null == P ? void 0 : P.maxUses) && void 0 !== g ? g : M.value;
                return (0, n.jsxs)("div", {
                    className: m.container,
                    children: [(0, n.jsx)(s.Clickable, {
                        onClick: S,
                        className: m.close,
                        "aria-label": A.default.Messages.CLOSE,
                        children: (0, n.jsx)(I.default, {})
                    }), (0, n.jsx)(o.default, {
                        children: (0, n.jsx)("div", {
                            className: m.iconContainer,
                            children: (0, n.jsx)(T.default, {
                                height: 30,
                                width: 30,
                                className: m.icon
                            })
                        })
                    }), (0, n.jsx)(s.Heading, {
                        variant: "heading-xl/semibold",
                        className: m.header,
                        children: A.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
                    }), (0, n.jsx)(s.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: m.body,
                        children: A.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
                    }), (0, n.jsxs)("div", {
                        className: m.invite,
                        children: [(0, n.jsx)(u.RawInviteCopyInputConnected, {
                            value: H,
                            autoFocus: !1,
                            onCopy: e => {
                                if (B) return;
                                (0, C.copy)(e);
                                let t = (0, h.getChannelTypeFromEntity)(v.entity_type);
                                f.default.track(p.AnalyticEvents.COPY_INSTANT_INVITE, {
                                    server: v.guild_id,
                                    channel: x,
                                    channel_type: t,
                                    location: p.InstantInviteSources.GUILD_EVENTS,
                                    code: P.code,
                                    guild_scheduled_event_id: null == v ? void 0 : v.id
                                })
                            }
                        }), (null == O ? void 0 : O.vanityURLCode) == null && (0, n.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            className: m.inviteDetail,
                            children: (0, L.maxAgeString)(b, F)
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
                r = a("597517"),
                d = a("782340"),
                u = a("8341"),
                o = a("533662");
            let E = () => (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: u.inlineText,
                    children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_1
                }), (0, n.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: u.inlineText,
                    children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_2
                }), (0, n.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: u.inlineText,
                    children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_3
                }), (0, n.jsx)(s.Text, {
                    color: "header-primary",
                    variant: "text-xs/normal",
                    className: u.inlineText,
                    children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_HINT_4
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
                                children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_TITLE
                            }), (0, n.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: u.descriptionText,
                                children: d.default.Messages.GUILD_EVENT_STAGE_TOOLTIP_BODY
                            }), (0, n.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                children: d.default.Messages.GUILD_EVENT_STAGE_UPSELL.format({
                                    suggestionsHook: E
                                })
                            })]
                        }), (0, n.jsx)("div", {
                            className: u.image,
                            children: (0, n.jsx)("img", {
                                src: o,
                                alt: d.default.Messages.GUILD_EVENT_STAGE_UPSELL_ALT_IMAGE
                            })
                        })]
                    }), (0, n.jsxs)("div", {
                        className: u.footer,
                        children: [(0, n.jsx)(s.Button, {
                            onClick: t,
                            color: s.Button.Colors.PRIMARY,
                            size: s.Button.Sizes.SMALL,
                            className: u.button,
                            children: d.default.Messages.CREATE_STAGE_CHANNEL
                        }), (0, n.jsx)(s.Button, {
                            onClick: () => {
                                r.hideHotspot(i.HotspotLocations.STAGE_CHANNEL_UPSELL)
                            },
                            color: s.Button.Colors.TRANSPARENT,
                            size: s.Button.Sizes.SMALL,
                            look: s.ButtonLooks.LINK,
                            children: d.default.Messages.DONT_SHOW_AGAIN
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
                r = a("745049"),
                d = a("782340");

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
                        if (null == a || (null == a ? void 0 : a.startDate) == null) return d.default.Messages.GUILD_EVENT_START_DATE_REQUIRED;
                        let {
                            startDate: s,
                            endDate: u
                        } = a;
                        return n === r.GuildScheduledEventEntityTypes.EXTERNAL && null == u ? d.default.Messages.GUILD_EVENT_END_DATE_REQUIRED : !t && s.isBefore(l()) ? d.default.Messages.GUILD_EVENT_PAST_START_DATE : null != u && null != s && u.isBefore(s) ? d.default.Messages.GUILD_EVENT_END_DATE_BEFORE_START_DATE : null != u && u.isBefore(l()) ? d.default.Messages.GUILD_EVENT_PAST_END_DATE_1 : void 0
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
                r = a("841098"),
                d = a("449918"),
                u = a("832132"),
                o = a("818643"),
                E = a("608684"),
                _ = a("49111"),
                c = a("575282");
            let T = _.Color.PRIMARY_400,
                I = _.Color.PRIMARY_500;

            function f(e) {
                let {
                    enabled: t,
                    imageClassName: a,
                    iconWrapperClassName: l,
                    ..._
                } = e, f = (0, r.default)(), C = (0, i.isThemeDark)(f) ? T : I, L = {
                    height: 18,
                    width: 18,
                    color: (0, d.getColor)(C)
                };
                return (0, n.jsx)(E.default, {
                    className: s({
                        [c.avatarUploader]: t,
                        [c.avatarUploaderDisabled]: !t
                    }),
                    imageClassName: s(a, c.avatarUploaderInnerSquare, {
                        [c.avatarUploaderInnerSquareDisabled]: !t
                    }),
                    icon: null != _.image && "" !== _.image ? (0, n.jsx)(u.default, {
                        ...L
                    }) : (0, n.jsx)(o.default, {
                        ...L
                    }),
                    iconClassName: s(c.avatarUploadIcon, c.hideDefaultIcon),
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
                    return C
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                r = a("627445"),
                d = a.n(r),
                u = a("77078"),
                o = a("159885"),
                E = a("694187"),
                _ = a("49111"),
                c = a("782340"),
                T = a("911686");

            function I(e) {
                let {
                    className: t,
                    icon: a = null
                } = e;
                return (0, n.jsx)("div", {
                    className: i(T.imageUploaderIcon, t),
                    children: a
                })
            }
            class f extends l.PureComponent {
                handleExternalFileChange(e) {
                    d(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
                }
                render() {
                    var e;
                    let t, a, l, s;
                    let {
                        image: r,
                        hint: d,
                        name: f,
                        makeURL: C,
                        disabled: L,
                        onChange: h,
                        showIcon: p,
                        showIconDisabled: A,
                        className: m,
                        imageClassName: N,
                        iconClassName: M,
                        iconWrapperClassName: g,
                        icon: S,
                        hideSize: v,
                        imageStyle: G,
                        showRemoveButton: D,
                        maxFileSizeBytes: O,
                        onFileSizeError: y,
                        onOpenImageSelectModal: U,
                        "aria-label": x
                    } = this.props;
                    if (null != (t = null != r && /^data:/.test(r) ? r : C(r)) ? a = 'url("'.concat(t, '")') : null != f && (l = (0, n.jsx)("div", {
                            className: T.imageUploaderAcronym,
                            children: (0, o.getAcronym)(f)
                        })), L) return (0, n.jsx)("div", {
                        className: i(T.imageUploader, T.disabled, m),
                        children: (0, n.jsxs)("div", {
                            className: i(T.imageUploaderInner, N),
                            style: {
                                ...G,
                                backgroundImage: a
                            },
                            children: [l, A && (0, n.jsx)("div", {
                                className: i(T.imageUploaderIcon, T.imageUploaderIconDisabled, M),
                                children: S
                            })]
                        })
                    });
                    null != r ? s = (0, n.jsx)(u.Anchor, {
                        className: T.removeButton,
                        onClick: this.handleRemove,
                        children: c.default.Messages.REMOVE
                    }) : !v && (s = (0, n.jsx)("small", {
                        className: T.sizeInfo,
                        children: c.default.Messages.MINIMUM_SIZE.format({
                            size: _.AVATAR_SIZE
                        })
                    }));
                    let R = null !== (e = null != x ? x : d) && void 0 !== e ? e : c.default.Messages.CHANGE_AVATAR;
                    return (0, n.jsxs)("div", {
                        className: i(T.imageUploader, m),
                        children: [(0, n.jsx)(u.FocusRing, {
                            within: !0,
                            children: (0, n.jsxs)("div", {
                                className: p ? i(T.imageUploaderIconWrapper, g) : void 0,
                                children: [(0, n.jsxs)("div", {
                                    className: i(T.imageUploaderInner, N),
                                    style: {
                                        ...G,
                                        backgroundImage: a
                                    },
                                    children: [(0, n.jsx)("span", {
                                        "aria-hidden": !0,
                                        children: l
                                    }), null != U ? (0, n.jsx)(u.Clickable, {
                                        className: T.imageUploaderFileInput,
                                        "aria-label": R,
                                        onClick: U
                                    }) : (0, n.jsx)(E.default, {
                                        ref: this.inputRef,
                                        onChange: h,
                                        className: T.imageUploaderFileInput,
                                        "aria-label": R,
                                        tabIndex: 0,
                                        maxFileSizeBytes: O,
                                        onFileSizeError: y
                                    })]
                                }), null != d && (0, n.jsx)("div", {
                                    className: T.imageUploaderHint,
                                    "aria-hidden": "true",
                                    children: d
                                }), p && (0, n.jsx)(I, {
                                    className: M,
                                    icon: S
                                })]
                            })
                        }), D ? s : null]
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
            var C = f
        },
        650484: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                },
                PaymentPortalBody: function() {
                    return I
                },
                PaymentPortalFooter: function() {
                    return f
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                r = a("627445"),
                d = a.n(r),
                u = a("817736"),
                o = a.n(u),
                E = a("77078"),
                _ = a("642906"),
                c = a("990893");

            function T(e) {
                var t, a, s, r, u, o;
                let {
                    header: T,
                    isLargeModal: I,
                    stepProps: f
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: a,
                        ...n
                    } = e;
                    return {
                        header: t,
                        isLargeModal: a,
                        stepProps: n
                    }
                }(e), {
                    step: C,
                    stepConfigs: L,
                    setBodyNode: h,
                    setFooterNode: p,
                    setModalOverlayNode: A,
                    setReadySlideId: m
                } = (0, _.usePaymentContext)(), N = L.find(e => e.key === C);
                l.useEffect(() => {
                    A(null)
                }, [C, A]), d(null != N, "Unknown step for current payment flow.");
                let M = null !== (u = null == N ? void 0 : null === (t = N.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
                    g = null == N ? void 0 : null === (a = N.options) || void 0 === a ? void 0 : a.bodyClassName,
                    S = void 0 !== I && I ? c.sliderBodyLarge : null == N ? void 0 : null === (s = N.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
                return (0, n.jsxs)(n.Fragment, {
                    children: [null === (o = null == N ? void 0 : null === (r = N.options) || void 0 === r ? void 0 : r.renderHeader) || void 0 === o || o ? T : null, N.renderStep(f), null == C || M ? null : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(E.ModalContent, {
                            className: i(c.body, g),
                            children: (0, n.jsx)(E.Slides, {
                                activeSlide: C,
                                centered: !1,
                                onSlideReady: e => m(e),
                                children: L.filter(e => null != e.key).map(e => (0, n.jsx)(E.Slide, {
                                    id: e.key,
                                    children: (0, n.jsx)("form", {
                                        className: i(c.sliderBody, S),
                                        ref: e => h(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, n.jsx)("div", {
                            ref: e => p(e)
                        }), (0, n.jsx)("div", {
                            ref: e => A(e)
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: a
                } = (0, _.usePaymentContext)();
                return null == a ? null : o.createPortal(t, a)
            }

            function f(e) {
                let {
                    children: t
                } = e, {
                    footerNode: a
                } = (0, _.usePaymentContext)();
                return null == a ? null : o.createPortal(t, a)
            }
        },
        79798: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("414456"),
                s = a.n(l),
                i = a("414055"),
                r = a("12287"),
                d = a("988268"),
                u = a("782340"),
                o = a("647431");
            let E = e => {
                let t, {
                        invertColor: a = !1,
                        type: l = d.BotTagTypes.BOT,
                        className: E,
                        verified: _,
                        hideIcon: c = !1,
                        useRemSizes: T = !1,
                        children: I = []
                    } = e,
                    f = null,
                    C = u.default.Messages.VERIFIED_BOT_TOOLTIP;
                switch (l) {
                    case d.BotTagTypes.SYSTEM_DM:
                    case d.BotTagTypes.OFFICIAL:
                        _ = !0, C = u.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, f = u.default.Messages.SYSTEM_DM_TAG_SYSTEM;
                        break;
                    case d.BotTagTypes.SERVER:
                        f = u.default.Messages.BOT_TAG_SERVER;
                        break;
                    case d.BotTagTypes.ORIGINAL_POSTER:
                        f = u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                        break;
                    case d.BotTagTypes.STAFF_ONLY_DM:
                        f = u.default.Messages.STAFF_BADGE_TOOLTIP;
                        break;
                    case d.BotTagTypes.AI:
                        _ = !0, C = u.default.Messages.AI_GENERATED_TOOLTIP, f = u.default.Messages.AI_TAG;
                        break;
                    case d.BotTagTypes.REMIX:
                        _ = !1, f = u.default.Messages.REMIXING_TAG;
                        break;
                    case d.BotTagTypes.BOT:
                    default:
                        f = u.default.Messages.BOT_TAG_BOT
                }
                let L = l === d.BotTagTypes.ORIGINAL_POSTER,
                    h = l === d.BotTagTypes.REMIX,
                    p = null;
                _ && (p = (0, n.jsx)(i.Tooltip, {
                    text: C,
                    align: "center",
                    position: "top",
                    children: e => (0, n.jsx)(r.default, {
                        ...e,
                        className: o.botTagVerified
                    })
                })), t = l === d.BotTagTypes.AI ? o.botTagAI : a ? o.botTagInvert : o.botTagRegular;
                let A = e => (0, n.jsxs)("span", {
                    ...e,
                    className: s(E, t, T ? o.rem : o.px, {
                        [o.botTagOP]: L,
                        [o.botTagRemix]: h
                    }),
                    children: [c ? null : p, I, (0, n.jsx)("span", {
                        className: o.botText,
                        children: f
                    })]
                });
                switch (l) {
                    case d.BotTagTypes.REMIX:
                        return (0, n.jsx)(i.Tooltip, {
                            text: u.default.Messages.REMIXING_DOWNLOAD_APP,
                            position: "top",
                            children: e => A(e)
                        });
                    case d.BotTagTypes.ORIGINAL_POSTER:
                        return (0, n.jsx)(i.Tooltip, {
                            text: u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                            position: "top",
                            children: e => A(e)
                        });
                    default:
                        return A()
                }
            };
            E.Types = d.BotTagTypes;
            var _ = E
        },
        754474: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                BotTypes: function() {
                    return r.BotTagTypes
                },
                default: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("414456"),
                s = a.n(l),
                i = a("79798"),
                r = a("988268"),
                d = a("888770"),
                u = e => {
                    let {
                        name: t,
                        discriminator: a,
                        invertBotTagColor: l,
                        nameColor: r,
                        className: u,
                        botType: o,
                        usernameClass: E,
                        discriminatorClass: _,
                        botClass: c,
                        botVerified: T = !1,
                        style: I,
                        useRemSizes: f = !1,
                        usernameIcon: C
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: s(u, d.nameTag),
                        style: I,
                        children: [(0, n.jsxs)("span", {
                            className: s(d.username, E),
                            style: null != r ? {
                                color: r
                            } : void 0,
                            children: [C, t]
                        }), null != a ? (0, n.jsxs)("span", {
                            className: null != _ ? _ : void 0,
                            children: ["#", a]
                        }) : null, null != o ? (0, n.jsx)(i.default, {
                            type: o,
                            invertColor: l,
                            className: s(c, d.bot),
                            verified: T,
                            useRemSizes: f
                        }) : null]
                    })
                }
        },
        683911: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("414456"),
                s = a.n(l),
                i = a("77078"),
                r = a("258078"),
                d = a("549043");

            function u(e) {
                let {
                    steps: t,
                    stepIndex: a,
                    onClick: l
                } = e;
                return (0, n.jsx)("div", {
                    className: d.container,
                    children: t.map((e, t) => {
                        let u = a === t;
                        return (0, n.jsxs)(i.Clickable, {
                            onClick: () => l(t),
                            className: d.stepContainer,
                            children: [(0, n.jsx)("div", {
                                className: s(d.progressBar, {
                                    [d.selectedProgressBar]: u
                                })
                            }), (0, n.jsx)(r.default, {
                                color: u ? r.default.Colors.BRAND : r.default.Colors.MUTED,
                                size: r.default.Sizes.SIZE_12,
                                children: e
                            })]
                        }, e)
                    })
                })
            }
        },
        461380: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return I
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("414456"),
                s = a.n(l),
                i = a("384737"),
                r = a("448052"),
                d = a("748802"),
                u = a("260792"),
                o = a("77078"),
                E = a("75196"),
                _ = a("4177");
            let c = {
                    UP: _.directionUp,
                    RIGHT: _.directionRight,
                    DOWN: _.directionDown,
                    LEFT: _.directionLeft
                },
                T = e => {
                    let {
                        direction: t = c.DOWN,
                        width: a = 24,
                        height: l = 24,
                        color: T = "currentColor",
                        transition: I = _.transition,
                        className: f,
                        foreground: C,
                        expanded: L,
                        ...h
                    } = e, {
                        enabled: p
                    } = (0, o.useRedesignIconContext)(), A = t;
                    if (!0 === L ? A = c.DOWN : !1 === L && (A = c.RIGHT), p) {
                        let e = {
                            [c.UP]: u.ChevronSmallUpIcon,
                            [c.DOWN]: i.ChevronSmallDownIcon,
                            [c.LEFT]: r.ChevronSmallLeftIcon,
                            [c.RIGHT]: d.ChevronSmallRightIcon
                        } [A];
                        return (0, n.jsx)(e, {
                            ...h,
                            className: f,
                            width: a,
                            height: l,
                            color: T,
                            colorClass: C
                        })
                    }
                    return (0, n.jsx)("svg", {
                        className: s(f, I, A),
                        width: a,
                        height: l,
                        viewBox: "0 0 24 24",
                        ...(0, E.default)(h),
                        children: (0, n.jsx)("path", {
                            className: C,
                            fill: "none",
                            stroke: T,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            T.Directions = c;
            var I = T
        },
        832132: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("469563"),
                s = a("504318"),
                i = a("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        color: t = "currentColor",
                        height: a = 24,
                        width: l = 24,
                        ...s
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: l,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            fill: t
                        })
                    })
                }, s.PencilIcon)
        },
        867544: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("669491"),
                s = a("469563"),
                i = a("163725"),
                r = a("75196"),
                d = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: s = "currentColor",
                        foregroundColor: i = l.default.unsafe_rawColors.RED_400.css,
                        foreground: d,
                        background: u,
                        ...o
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("rect", {
                            fill: i,
                            className: d,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, n.jsx)("path", {
                            fill: s,
                            className: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, i.EyeSlashIcon)
        },
        818643: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("469563"),
                s = a("851298"),
                i = a("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: l = "currentColor",
                        ...s
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: l
                        }), (0, n.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: l
                        })]
                    })
                }, s.ImagePlusIcon)
        },
        433487: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("469563"),
                s = a("304983"),
                i = a("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: l = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            fill: l,
                            className: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, s.MoreHorizontalIcon)
        },
        155207: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("469563"),
                s = a("811513"),
                i = a("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: l = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            className: s,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, n.jsx)("path", {
                            className: s,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, n.jsx)("path", {
                            className: s,
                            fill: l,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, n.jsx)("path", {
                            className: s,
                            fill: l,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, s.GroupIcon)
        },
        132755: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("469563"),
                s = a("876726"),
                i = a("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: a = 16,
                        color: l = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: a,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                            className: s,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: l
                        })
                    })
                }, s.PlayIcon)
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
                let [a, s] = n.useState(!1), [i, r] = n.useState(null), d = async () => {
                    s(!0), r(null);
                    try {
                        let t = await e();
                        return s(!1), r(null), t
                    } catch (a) {
                        let e = new l.APIError(a);
                        return null == t || t(e), r(e), s(!1), null
                    }
                };
                return [d, {
                    loading: a,
                    error: i
                }]
            }
        }
    }
]);