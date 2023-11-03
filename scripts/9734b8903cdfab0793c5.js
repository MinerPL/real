(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56345"], {
        583397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c133c9df9ee4552c188a.svg"
        },
        378675: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d063b4bf17f1fee95f05.svg"
        },
        445356: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c8718df1382ba878f1fc.svg"
        },
        460287: function(e, t, n) {
            "use strict";
            e.exports = n.p + "08e581a604e6635d1424.svg"
        },
        642950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                r = n.n(a),
                u = n("77078"),
                i = n("54239"),
                d = n("79112"),
                o = n("49111"),
                c = n("782340"),
                f = n("519409");
            class h extends s.Component {
                render() {
                    return (0, l.jsxs)("div", {
                        className: f.streamerModeEnabled,
                        children: [(0, l.jsx)("div", {
                            className: f.streamerModeEnabledImage
                        }), (0, l.jsx)(u.Clickable, {
                            className: r(f.streamerModeEnabledBtn, {
                                [f.disabled]: this.props.disableButton
                            }),
                            onClick: this.handleClick,
                            children: c.default.Messages.STREAMER_MODE_ENABLED
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = () => {
                        !this.props.disableButton && ((0, i.pushLayer)(o.Layers.USER_SETTINGS), d.default.setSection(o.UserSettingsSections.STREAMER_MODE))
                    }
                }
            }
            h.defaultProps = {
                disableButton: !1
            };
            var E = h
        },
        7037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowSmallUpIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M12.707 3.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L11 6.414V20a1 1 0 1 0 2 0V6.414l3.293 3.293a1 1 0 0 0 1.414-1.414l-5-5Z",
                        className: u
                    })
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M14.5 8a3 3 0 1 0-2.701-4.306c-.202.415.057.87.443 1.124A5.006 5.006 0 0 1 14.379 7.9c.013.058.062.1.121.1ZM18.437 17.271c.154.425.544.729.995.729H20.5a1.5 1.5 0 0 0 1.5-1.5 7.502 7.502 0 0 0-6.502-7.434c-.548-.073-.988.386-1.097.927-.06.301-.148.592-.26.871-.233.579-.054 1.291.472 1.628a9.529 9.529 0 0 1 3.824 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0 1.5 1.5 0 0 1-1.5 1.5.202.202 0 0 1-.196-.159 12.379 12.379 0 0 0-.884-2.543c-.108-.23-.42-.149-.42.105V21.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.097c0-.254-.312-.334-.42-.105-.318.673-.67 1.579-.884 2.543A.202.202 0 0 1 3.5 22 1.5 1.5 0 0 1 2 20.5Z",
                        className: u
                    })
                })
            }
        },
        85941: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ListBulletsIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM9 3a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H9ZM8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 19a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H9Z",
                        className: u
                    })
                })
            }
        },
        263436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockUnlockedIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 1a4.985 4.985 0 0 0-3.308 1.25 1 1 0 0 0 1.324 1.5A3 3 0 0 1 15 6v2H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6a5 5 0 0 0-5-5Zm1 14.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        715072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserPlusIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...i
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        className: u
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M16.828 12.93c.259-.271.259-.746-.077-.915A9.493 9.493 0 0 0 12.467 11h-.934A9.533 9.533 0 0 0 2 20.533C2 21.343 2.657 22 3.467 22h.22c.24 0 .445-.17.504-.403.285-1.113.84-2.17 1.32-2.91.134-.208.43-.094.405.154l-.261 2.61a.5.5 0 0 0 .497.549h7.64c.123 0 .17-.31.06-.363C12.819 21.14 12 20.224 12 19a3 3 0 0 1 3-3h.5a.5.5 0 0 0 .5-.5V15c0-.802.315-1.53.828-2.07ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        className: u
                    })]
                })
            }
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("884691");

            function s(e, t) {
                let n = l.useRef(e);
                return l.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return p
                },
                default: function() {
                    return M
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("866227"),
                a = n.n(s),
                r = n("446674"),
                u = n("77078"),
                i = n("820542"),
                d = n("519705"),
                o = n("319165"),
                c = n("282109"),
                f = n("679653"),
                h = n("49111"),
                E = n("468200"),
                g = n("782340");
            let p = () => [{
                    value: E.MuteUntilSeconds.MINUTES_15,
                    label: g.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: E.MuteUntilSeconds.HOURS_1,
                    label: g.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: E.MuteUntilSeconds.HOURS_3,
                    label: g.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_8,
                    label: g.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_24,
                    label: g.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: E.MuteUntilSeconds.ALWAYS,
                    label: g.default.Messages.MUTE_DURATION_ALWAYS
                }],
                _ = e => {
                    let t = e > 0 ? a().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function M(e, t) {
                let [n, s] = (0, r.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), a = (0, o.useMutedUntilText)(s), E = (0, f.default)(e, !0);

                function M(t) {
                    t && e.type === h.ChannelTypes.GUILD_CATEGORY && (0, i.categoryCollapse)(e.id), d.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let m = g.default.Messages.MUTE_CHANNEL_GENERIC,
                    C = g.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case h.ChannelTypes.GUILD_CATEGORY:
                        m = g.default.Messages.MUTE_CATEGORY, C = g.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case h.ChannelTypes.GROUP_DM:
                        m = g.default.Messages.MUTE_CONVERSATION, C = g.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case h.ChannelTypes.DM:
                        m = g.default.Messages.MUTE_CHANNEL.format({
                            name: E
                        }), C = g.default.Messages.UNMUTE_CHANNEL.format({
                            name: E
                        });
                        break;
                    default:
                        m = g.default.Messages.MUTE_CHANNEL_GENERIC, C = g.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, l.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: C,
                    subtext: a,
                    action: () => M(!1)
                }) : (0, l.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: m,
                    action: () => M(!0),
                    children: p().map(n => {
                        let {
                            value: s,
                            label: a
                        } = n;
                        return (0, l.jsx)(u.MenuItem, {
                            id: "".concat(s),
                            label: a,
                            action: () => (function(n) {
                                e.type === h.ChannelTypes.GUILD_CATEGORY && (0, i.categoryCollapse)(e.id);
                                let l = _(n);
                                d.default.updateChannelOverrideSettings(e.guild_id, e.id, l, t)
                            })(s)
                        }, s)
                    })
                })
            }
        },
        884422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchChannelHighlights: function() {
                    return o
                },
                jumpToHighlight: function() {
                    return c
                }
            });
            var l = n("872717"),
                s = n("913144"),
                a = n("819689"),
                r = n("267363"),
                u = n("716241"),
                i = n("599110"),
                d = n("49111");
            async function o(e) {
                s.default.dispatch({
                    type: "CHANNEL_HIGHLIGHTS_FETCH_START",
                    guildId: e
                });
                let t = await l.default.get({
                        url: d.Endpoints.CHANNEL_HIGHLIGHTS(e)
                    }),
                    n = t.body;
                await s.default.dispatch({
                    type: "CHANNEL_HIGHLIGHTS_FETCH_SUCCESS",
                    guildId: e,
                    data: n
                })
            }
            async function c(e) {
                let {
                    guildId: t,
                    channelId: n,
                    targetMessageId: l,
                    highlightedMessageIds: s,
                    numHighlightsVisited: o
                } = e;
                await a.default.jumpToMessage({
                    channelId: n,
                    messageId: l,
                    flash: !0
                }), i.default.track(d.AnalyticEvents.CHANNEL_HIGHLIGHTS_ACKED, {
                    ...(0, u.collectGuildAnalyticsMetadata)(t),
                    ...(0, u.collectChannelAnalyticsMetadataFromId)(n),
                    message_id: l,
                    index: o,
                    ack_type: "navigator"
                });
                let c = s[o - 1];
                return null != c && r.ack(n, !0, !1, c), Promise.resolve()
            }
        },
        374705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("627445"),
                a = n.n(s),
                r = n("446674"),
                u = n("77078"),
                i = n("272030"),
                d = n("812204"),
                o = n("685665"),
                c = n("861370"),
                f = n("255812"),
                h = n("529932"),
                E = n("724026"),
                g = n("271938"),
                p = n("923959"),
                _ = n("697218"),
                M = n("578411"),
                m = n("230947"),
                C = n("544955"),
                S = n("747867"),
                I = n("555914"),
                N = n("513472"),
                v = n("527660"),
                T = n("177508"),
                A = n("263673"),
                R = n("58622"),
                x = n("49111"),
                U = n("782340");

            function L(e) {
                let {
                    guild: t,
                    onSelect: s,
                    hideSettings: d
                } = e, o = t.id, L = p.default.getDefaultChannel(o), O = (0, h.useExpressionSourceGuildDataForGuildLeaveModal)(t), b = (0, r.useStateFromStores)([_.default], () => {
                    let e = _.default.getCurrentUser();
                    return a(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
                }, [t]), H = (0, R.default)({
                    guild: t,
                    source: x.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: L
                }), j = (0, A.default)(o), G = (0, N.default)(t), y = (0, v.default)(t), w = (0, T.default)(t), D = (0, m.default)({
                    guildId: t.id,
                    userId: g.default.getId(),
                    analyticsLocation: {
                        page: x.AnalyticsPages.GUILD_CHANNEL,
                        section: x.AnalyticsSections.CHAT_USERNAME,
                        object: x.AnalyticsObjects.CONTEXT_MENU_ITEM
                    }
                }), V = (0, C.default)(t), P = (0, f.default)(t.id), B = (0, c.default)({
                    id: t.id,
                    label: U.default.Messages.COPY_ID_GUILD
                }), Z = (0, I.default)(t, {
                    section: x.AnalyticsSections.GUILD_LIST
                }), F = (0, E.default)(t.id), k = (0, S.default)(t), Y = t.hasFeature(x.GuildFeatures.HUB);

                function z() {
                    (0, u.openModal)(e => (0, l.jsx)(M.GuildLeaveConfirmModalContents, {
                        ...e,
                        guild: t,
                        discoverableGuildData: O
                    }))
                }
                return Y ? (0, l.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: i.closeContextMenu,
                    "aria-label": U.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, l.jsxs)(u.MenuGroup, {
                        children: [H, (0, l.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: U.default.Messages.HUB_PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, l.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), D]
                    }), b ? null : (0, l.jsx)(u.MenuGroup, {
                        children: (0, l.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: U.default.Messages.LEAVE_HUB,
                            action: z,
                            color: "danger"
                        })
                    }), (0, l.jsx)(u.MenuGroup, {
                        children: B
                    })]
                }) : (0, l.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: i.closeContextMenu,
                    "aria-label": U.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, l.jsx)(u.MenuGroup, {
                        children: Z
                    }), (0, l.jsx)(u.MenuGroup, {
                        children: H
                    }), (0, l.jsxs)(u.MenuGroup, {
                        children: [G, __OVERLAY__ ? null : y, j, F]
                    }), (0, l.jsxs)(u.MenuGroup, {
                        children: [d ? null : w, __OVERLAY__ ? null : (0, l.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: U.default.Messages.PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, l.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), D]
                    }), (0, l.jsxs)(u.MenuGroup, {
                        children: [V, P]
                    }), (0, l.jsxs)(u.MenuGroup, {
                        children: [k, !b && (0, l.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: U.default.Messages.LEAVE_SERVER,
                            action: z,
                            color: "danger"
                        })]
                    }), (0, l.jsx)(u.MenuGroup, {
                        children: B
                    })]
                })
            }

            function O(e) {
                let {
                    AnalyticsLocationProvider: t
                } = (0, o.default)(d.default.CONTEXT_MENU);
                return (0, l.jsx)(t, {
                    children: (0, l.jsx)(L, {
                        ...e
                    })
                })
            }
        },
        544955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                r = n("957255"),
                u = n("49111"),
                i = n("695838"),
                d = n("782340");

            function o(e) {
                let t = (0, s.useStateFromStores)([r.default], () => r.default.can(u.Permissions.MANAGE_CHANNELS, e));
                return __OVERLAY__ ? null : e.id === i.FAVORITES_RAW_GUILD_ID ? (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(a.MenuItem, {
                        id: "create-category",
                        label: d.default.Messages.CREATE_CATEGORY,
                        action: () => (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("515680").then(n.bind(n, "515680"));
                            return t => (0, l.jsx)(e, {
                                ...t
                            })
                        })
                    })
                }) : t ? [(0, l.jsx)(a.MenuItem, {
                    id: "create-channel",
                    label: d.default.Messages.CREATE_CHANNEL,
                    action: () => (0, a.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, l.jsx)(t, {
                            ...n,
                            channelType: u.ChannelTypes.GUILD_TEXT,
                            guildId: e.id
                        })
                    })
                }, "create-channel"), (0, l.jsx)(a.MenuItem, {
                    id: "create-category",
                    label: d.default.Messages.CREATE_CATEGORY,
                    action: () => (0, a.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, l.jsx)(t, {
                            ...n,
                            channelType: u.ChannelTypes.GUILD_CATEGORY,
                            guildId: e.id
                        })
                    })
                }, "create-category")] : null
            }
        },
        555914: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                r = n("952451"),
                u = n("542827"),
                i = n("782340");

            function d(e, t) {
                let n = e.id,
                    d = (0, s.useStateFromStores)([r.default], () => r.default.getGuildHasUnreadIgnoreMuted(n), [n]);
                return (0, l.jsx)(a.MenuItem, {
                    id: "mark-guild-read",
                    label: i.default.Messages.MARK_AS_READ,
                    icon: void 0,
                    action: () => (0, u.default)([n], t.section),
                    disabled: !d
                })
            }
        },
        513472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("866227"),
                a = n.n(s),
                r = n("446674"),
                u = n("77078"),
                i = n("519705"),
                d = n("531674"),
                o = n("319165"),
                c = n("282109"),
                f = n("782340");

            function h(e, t) {
                let n = null == e ? void 0 : e.id,
                    {
                        muted: s,
                        muteConfig: h
                    } = (0, r.useStateFromStoresObject)([c.default], () => ({
                        muted: null != n ? c.default.isMuted(n) : void 0,
                        muteConfig: null != n ? c.default.getMuteConfig(n) : void 0
                    }), [n]),
                    E = (0, o.useMutedUntilText)(h);
                return null == n ? null : s ? (0, l.jsx)(u.MenuItem, {
                    id: "unmute-guild",
                    label: f.default.Messages.UNMUTE_SERVER,
                    subtext: E,
                    action: () => i.default.updateGuildNotificationSettings(n, {
                        muted: !1
                    })
                }) : (0, l.jsx)(u.MenuItem, {
                    id: "mute-guild",
                    label: f.default.Messages.MUTE_SERVER,
                    action: () => i.default.updateGuildNotificationSettings(n, {
                        muted: !0
                    }),
                    children: (0, d.getMuteTimes)().map(e => {
                        let {
                            value: s,
                            label: r
                        } = e;
                        return (0, l.jsx)(u.MenuItem, {
                            id: "".concat(s),
                            label: r,
                            action: () => (function(e) {
                                if (null == n) return;
                                let l = e > 0 ? a().add(e, "second").toISOString() : null;
                                i.default.updateGuildNotificationSettings(n, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: l
                                    }
                                }, t)
                            })(s)
                        }, s)
                    })
                })
            }
        },
        527660: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("669491"),
                r = n("77078"),
                u = n("519705"),
                i = n("503950"),
                d = n("483226"),
                o = n("44574"),
                c = n("282109"),
                f = n("956089"),
                h = n("49111"),
                E = n("782340"),
                g = n("460856");

            function p() {
                return [{
                    setting: h.UserNotificationSettings.ALL_MESSAGES,
                    label: E.default.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: h.UserNotificationSettings.ONLY_MENTIONS,
                    label: E.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: h.UserNotificationSettings.NO_MESSAGES,
                    label: E.default.Messages.FORM_LABEL_NOTHING
                }]
            }

            function _(e) {
                var t, _;
                let M = function(e) {
                        let {
                            suppressEveryone: t,
                            suppressRoles: n,
                            mobilePush: _,
                            messageNotifications: M,
                            notifyHighlights: m,
                            isGuildUnreadsEnabled: C
                        } = (0, s.useStateFromStoresObject)([c.default], () => ({
                            suppressEveryone: c.default.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: c.default.isSuppressRolesEnabled(e.id),
                            mobilePush: c.default.isMobilePushEnabled(e.id),
                            messageNotifications: c.default.getMessageNotifications(e.id),
                            notifyHighlights: c.default.getNotifyHighlights(e.id),
                            isGuildUnreadsEnabled: c.default.isGuildUnreadSettingEnabled(e.id)
                        }), [e.id]), S = m === h.HighlightSettings.DISABLED, I = (0, i.default)(e.id), N = (0, o.useGuildUnreadsExperiment)();

                        function v(t) {
                            u.default.updateGuildNotificationSettings(e.id, t)
                        }
                        return (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(r.MenuGroup, {
                                children: p().map(e => {
                                    let {
                                        setting: t,
                                        label: n
                                    } = e;
                                    return (0, l.jsx)(r.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: n,
                                        action: () => v({
                                            message_notifications: t
                                        }),
                                        checked: t === M
                                    }, t)
                                })
                            }), (0, l.jsxs)(r.MenuGroup, {
                                children: [N && (0, l.jsx)(r.MenuCheckboxItem, {
                                    id: "enable-unread-settings",
                                    label: (0, l.jsxs)(l.Fragment, {
                                        children: [E.default.Messages.FORM_LABEL_UNREAD_SETTINGS_OPT_IN, (0, l.jsx)(f.TextBadge, {
                                            text: E.default.Messages.BETA,
                                            color: a.default.unsafe_rawColors.BRAND_500.css,
                                            className: g.betaBadge
                                        })]
                                    }),
                                    action: () => {
                                        (0, d.setGuildUnreadSetting)(e.id, !C)
                                    },
                                    checked: C
                                }), (0, l.jsx)(r.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: E.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => v({
                                        suppress_everyone: !t
                                    }),
                                    checked: t
                                }), (0, l.jsx)(r.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: E.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => v({
                                        suppress_roles: !n
                                    }),
                                    checked: n
                                }), (0, l.jsx)(r.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: E.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: () => {
                                        v({
                                            notify_highlights: S ? h.HighlightSettings.ENABLED : h.HighlightSettings.DISABLED
                                        })
                                    },
                                    checked: S
                                }), I]
                            }), (0, l.jsx)(r.MenuGroup, {
                                children: (0, l.jsx)(r.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: E.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => v({
                                        mobile_push: !_
                                    }),
                                    checked: _
                                })
                            })]
                        })
                    }(e),
                    m = (0, s.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e.id), [e.id]),
                    C = null === (_ = p()) || void 0 === _ ? void 0 : null === (t = _.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === m
                    })) || void 0 === t ? void 0 : t.label;
                return null != M ? (0, l.jsx)(r.MenuItem, {
                    id: "guild-notifications",
                    label: E.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: C,
                    action: () => (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("747593").then(n.bind(n, "747593"));
                        return n => (0, l.jsx)(t, {
                            ...n,
                            guildId: e.id
                        })
                    }),
                    children: M
                }) : null
            }
        },
        177508: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                r = n("412707"),
                u = n("838093"),
                i = n("592407"),
                d = n("148475"),
                o = n("725621"),
                c = n("923959"),
                f = n("49111"),
                h = n("782340");

            function E(e) {
                function t(t) {
                    i.default.open(e.id, t)
                }
                let n = (0, s.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
                    E = (0, d.default)(e);
                return __OVERLAY__ || !E ? null : (0, l.jsx)(a.MenuItem, {
                    id: "guild-settings",
                    label: h.default.Messages.SERVER_SETTINGS,
                    action: () => t(),
                    children: (0, o.getGuildSettingsSections)(e, n).map(n => {
                        let {
                            section: s,
                            label: i
                        } = n;
                        if (null == i) return null;
                        switch (s) {
                            case f.GuildSettingsSections.DELETE:
                                return null;
                            case f.GuildSettingsSections.COMMUNITY:
                                return (0, l.jsx)(a.MenuItem, {
                                    id: s,
                                    action: () => t(s),
                                    label: h.default.Messages.GUILD_SETTINGS_COMMUNITY
                                }, s);
                            case f.GuildSettingsSections.APP_DIRECTORY:
                                return (0, l.jsx)(a.MenuItem, {
                                    id: s,
                                    action: () => {
                                        (0, u.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: {
                                                name: r.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                                            }
                                        })
                                    },
                                    label: i
                                }, s);
                            default:
                                return (0, l.jsx)(a.MenuItem, {
                                    id: s,
                                    action: () => t(s),
                                    label: i
                                }, s)
                        }
                    })
                })
            }
        },
        263673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                r = n("126501"),
                u = n("282109"),
                i = n("782340");

            function d(e) {
                let t = (0, s.useStateFromStores)([u.default], () => u.default.isGuildCollapsed(e), [e]);
                return (0, l.jsx)(a.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: i.default.Messages.HIDE_MUTED_CHANNELS,
                    action: () => r.default.toggleCollapseGuild(e),
                    checked: t
                })
            }
        },
        569912: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("65597"),
                s = n("385976"),
                a = n("867805");

            function r(e, t) {
                let n = (0, l.default)([s.default], () => null != e ? s.default.getCustomEmojiById(e) : null, [e]),
                    r = null != t ? a.default.getByName(a.default.convertSurrogateToName(t, !1)) : null;
                return {
                    customEmoji: n,
                    unicodeEmoji: r
                }
            }
        },
        205454: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CTAEmojiSize: function() {
                    return u
                },
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("430568"),
                a = n("569912"),
                r = n("286667");
            let u = {
                SMALL: r.small,
                MEDIUM: r.medium,
                LARGE: r.large
            };

            function i(e) {
                let {
                    emojiId: t,
                    emojiName: n,
                    defaultComponent: r,
                    size: i = u.MEDIUM
                } = e, {
                    customEmoji: d,
                    unicodeEmoji: o
                } = (0, a.default)(t, n);
                if (null == d && null == o) return (0, l.jsx)(l.Fragment, {
                    children: r
                });
                return (0, l.jsx)(s.default, {
                    emojiName: null != d ? null == d ? void 0 : d.name : n,
                    animated: null != d && d.animated,
                    emojiId: null == d ? void 0 : d.id,
                    autoplay: !0,
                    className: i
                })
            }
        },
        334683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("884691"),
                s = n("446674"),
                a = n("817963"),
                r = n("923959"),
                u = n("305961"),
                i = n("957255"),
                d = n("49111"),
                o = (e, t) => {
                    let n = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: o
                        } = (0, a.useManageResourcePermissions)(n),
                        c = (0, s.useStateFromStores)([r.default], () => r.default.getChannels(e)[r.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        f = l.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        h = (0, s.useStateFromStores)([i.default], () => {
                            if (i.default.can(d.Permissions.ADMINISTRATOR, n) || o) return !0;
                            for (let {
                                    channel: e
                                }
                                of f) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, a.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [f, n, o]);
                    return h
                }
        },
        503950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                r = n("519705"),
                u = n("282109"),
                i = n("782340");

            function d(e) {
                let t = (0, s.useStateFromStores)([u.default], () => u.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, l.jsx)(a.MenuCheckboxItem, {
                    id: "mute-events",
                    label: i.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: () => {
                        var n;
                        return n = {
                            mute_scheduled_events: !t
                        }, void r.default.updateGuildNotificationSettings(e, n)
                    },
                    checked: t
                })
            }
        },
        148475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                s = n("957255"),
                a = n("49111");

            function r(e) {
                let {
                    canManageGuild: t,
                    canManageRoles: n,
                    canBanMembers: r,
                    canManageNicknames: u,
                    canCreateEmojisAndStickers: i,
                    canManageEmojisAndStickers: d,
                    canManageWebhooks: o,
                    canViewAuditLog: c
                } = (0, l.useStateFromStoresObject)([s.default], () => ({
                    canManageGuild: s.default.can(a.Permissions.MANAGE_GUILD, e),
                    canManageRoles: s.default.can(a.Permissions.MANAGE_ROLES, e),
                    canBanMembers: s.default.can(a.Permissions.BAN_MEMBERS, e),
                    canManageNicknames: s.default.can(a.Permissions.MANAGE_NICKNAMES, e),
                    canCreateEmojisAndStickers: s.default.can(a.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                    canManageEmojisAndStickers: s.default.can(a.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                    canManageWebhooks: s.default.can(a.Permissions.MANAGE_WEBHOOKS, e),
                    canViewAuditLog: s.default.can(a.Permissions.VIEW_AUDIT_LOG, e)
                }), [e]);
                return t || n || r || u || i || d || o || c
            }
        },
        507453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                r = n("598532");

            function u(e) {
                let {
                    className: t
                } = e;
                return (0, l.jsx)("div", {
                    className: a(r.image, t)
                })
            }
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return r
                },
                setHotspotOverride: function() {
                    return u
                },
                clearHotspotOverride: function() {
                    return i
                }
            });
            var l = n("913144"),
                s = n("599110"),
                a = n("49111");

            function r(e) {
                s.default.track(a.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), l.default.wait(() => {
                    l.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function u(e, t) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function i(e) {
                l.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("446674"),
                s = n("913144"),
                a = n("197881"),
                r = n("492397");
            let u = new Set,
                i = {};
            class d extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (u = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (i = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && i[e];
                    return !(r.CONFERENCE_MODE_ENABLED || a.ProcessArgs.isDisallowPopupsSet()) && (n || !u.has(e))
                }
                hasHiddenHotspot(e) {
                    return u.has(e)
                }
                getHotspotOverride(e) {
                    return i[e]
                }
                getState() {
                    return {
                        hiddenHotspots: u,
                        hotspotOverrides: i
                    }
                }
            }
            d.displayName = "HotspotStore", d.persistKey = "hotspots", d.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var o = new d(s.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    u = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (u.has(t)) return !1;
                    u.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    i[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == i[t]) return !1;
                    delete i[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return a.default
                }
            });
            var l = n("533613");
            n.es(l, t);
            var s = n("597517");
            n.es(s, t);
            var a = n("269596")
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return s
                }
            });
            var l = n("49111");

            function s(e, t, n, s) {
                let a = null != n ? n : t,
                    r = null != a && e.can(l.Permissions.CREATE_INSTANT_INVITE, a);
                return r || null != t && null != t.vanityURLCode || (null == s ? void 0 : s.invite_code) != null
            }
        },
        676143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFilterCategoriesByQuery: function() {
                    return R
                },
                getFirstRouteFor: function() {
                    return x
                },
                clearRecentChannels: function() {
                    return U
                },
                useChannelBrowserSections: function() {
                    return L
                },
                useChannelBrowserChannelCount: function() {
                    return O
                },
                getActiveAgoTimestamp: function() {
                    return b
                }
            });
            var l = n("884691"),
                s = n("448105"),
                a = n.n(s),
                r = n("866227"),
                u = n.n(r),
                i = n("249654"),
                d = n("446674"),
                o = n("151426"),
                c = n("267363"),
                f = n("320954"),
                h = n("10641"),
                E = n("290886"),
                g = n("319839"),
                p = n("194704"),
                _ = n("393414"),
                M = n("42203"),
                m = n("245997"),
                C = n("660478"),
                S = n("49111"),
                I = n("724210"),
                N = n("796618"),
                v = n("133335"),
                T = n("782340");

            function A(e, t) {
                e.index = t
            }

            function R(e, t, n, s) {
                s = s.toLowerCase();
                let r = (0, E.useCanSeeOnboardingHome)(e),
                    u = l.useCallback((e, t) => !(r && e.channel.hasFlag(I.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== S.ChannelTypes.GUILD_DIRECTORY && (0 === t.length || a(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [r]);
                return l.useMemo(() => {
                    let e = {
                        null: [],
                        _categories: []
                    };
                    return n[S.ChannelTypes.GUILD_CATEGORY].forEach(n => {
                        let {
                            channel: l
                        } = n;
                        "null" === l.id && (e.null = t.null.filter(e => u(e, s))), e[l.id] = t[l.id].filter(e => u(e, s))
                    }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === s.length || e[t.channel.id].length > 0), (0, f.default)(e._categories, e).forEach(A), e
                }, [t, n, u, s])
            }

            function x(e) {
                let t = e.getSections();
                if (t[g.SECTION_INDEX_COMMUNITY] > 0) {
                    let t = e.getCommunitySection().getRow(0);
                    switch (t) {
                        case N.ChannelListCommunityRow.GUILD_HOME:
                            return I.StaticChannelRoute.GUILD_HOME;
                        case N.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
                            return I.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
                        case N.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
                            return I.StaticChannelRoute.MEMBER_APPLICATIONS
                    }
                }
                for (let l = g.SECTION_INDEX_UNCATEGORIZED_CHANNELS; l < e.voiceChannelsSectionNumber; l++)
                    if (t[l] > 0) {
                        var n;
                        let t = null === (n = e.getChannelFromSectionRow(l, 0)) || void 0 === n ? void 0 : n.channel;
                        if (null != t) return t.id
                    } return null
            }

            function U(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                (0, p.bulkClearRecents)(e, t), (0, c.bulkAck)(t.map(e => ({
                    channelId: e,
                    readStateType: v.ReadStateTypes.CHANNEL,
                    messageId: C.default.lastMessageId(e)
                }))), null != n && (0, _.transitionTo)(S.Routes.CHANNEL(e, n))
            }

            function L(e, t, n, l) {
                let s = (0, h.useIsDismissibleContentDismissed)(o.DismissibleContent.CHANNEL_BROWSER_NUX),
                    a = (0, d.useStateFromStoresObject)([M.default], () => {
                        let t = {},
                            n = M.default.getMutableGuildChannelsForGuild(e);
                        for (let e in n) {
                            let {
                                parent_id: s
                            } = n[e];
                            if (null != s) {
                                var l;
                                t[s] = (null !== (l = t[s]) && void 0 !== l ? l : 0) + 1
                            }
                        }
                        return t
                    }, [e]),
                    r = t._categories.map(e => {
                        let l = t[e.channel.id];
                        return {
                            rowCount: "null" !== e.channel.id && 0 === a[e.channel.id] ? 1 : l.length,
                            rowHeight: 0 === l.length ? 0 : n
                        }
                    });
                return !s && null != l && r.unshift({
                    rowCount: 1,
                    rowHeight: l
                }), r
            }

            function O(e) {
                var t, n;
                let l = (0, d.useStateFromStores)([m.default], () => m.default.getCategories(e)),
                    s = l._categories.length,
                    a = l._categories[l._categories.length - 1];
                if (null == a) return 0;
                let r = null !== (n = null === (t = a.channel) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "null",
                    u = l[r];
                return null == u ? 0 : 0 === u.length ? a.index + 2 - s : u[u.length - 1].index + 2 - s
            }

            function b(e) {
                var t;
                return T.default.Messages.CHANNEL_BROWSER_ACTIVE_TEXT.format({
                    timeAgo: u(i.default.extractTimestamp(null !== (t = C.default.lastMessageId(e)) && void 0 !== t ? t : e)).fromNow()
                })
            }
        },
        959905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useLocalizedPromoQuery: function() {
                    return a
                }
            });
            var l = n("446674"),
                s = n("160299");

            function a() {
                let {
                    localizedPricingPromo: e,
                    hasError: t
                } = (0, l.useStateFromStoresObject)([s.default], () => ({
                    localizedPricingPromo: s.default.localizedPricingPromo,
                    hasError: s.default.localizedPricingPromoHasError
                }));
                return t ? null : e
            }
        },
        485138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackLocalizedPricingPromoImpression: function() {
                    return a
                }
            });
            var l = n("759843"),
                s = n("428958");

            function a(e, t) {
                (0, s.default)({
                    type: l.ImpressionTypes.VIEW,
                    name: l.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
                    properties: {
                        country_code: t,
                        action_location: e
                    }
                })
            }
        },
        194704: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                bulkClearRecents: function() {
                    return i
                }
            });
            var l = n("801340"),
                s = n("913144"),
                a = n("872173"),
                r = n("599110"),
                u = n("49111");
            async function i(e, t) {
                await (0, a.updateUserGuildSettings)(e, e => (e.guildRecentsDismissedAt = l.Timestamp.fromDate(new Date), !0), a.UserSettingsDelay.INFREQUENT_USER_ACTION), s.default.dispatch({
                    type: "BULK_CLEAR_RECENTS",
                    guildId: e,
                    channelIds: t
                }), r.default.track(u.AnalyticEvents.CHANNEL_LIST_UPDATED, {
                    action_type: "recents_dismissed"
                })
            }
        },
        137215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                r = n.n(a),
                u = n("546671"),
                i = n("341417");
            let d = {
                    UP: "up",
                    RIGHT: "right",
                    DOWN: "down",
                    LEFT: "left"
                },
                o = {
                    [d.UP]: i.up,
                    [d.RIGHT]: i.right,
                    [d.DOWN]: i.down,
                    [d.LEFT]: i.left
                };
            class c extends s.PureComponent {
                render() {
                    let {
                        direction: e,
                        className: t
                    } = this.props;
                    return (0, l.jsx)(u.default, {
                        className: r(i.arrow, t, {
                            [o[e]]: !0
                        })
                    })
                }
            }
            c.Directions = d;
            var f = c
        },
        454589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                r = n.n(a),
                u = n("77078"),
                i = n("145131"),
                d = n("461380"),
                o = n("298619");
            class c extends s.PureComponent {
                handleClick(e) {
                    let {
                        onBreadcrumbClick: t
                    } = this.props;
                    null != t && t(e)
                }
                render() {
                    let {
                        breadcrumbs: e,
                        className: t
                    } = this.props, n = e.map(this.renderBreadcrumb);
                    return (0, l.jsx)(i.default, {
                        justify: i.default.Justify.START,
                        className: r(o.breadcrumbs, t),
                        children: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: n,
                            onBreadcrumbClick: s,
                            breadcrumbs: a,
                            renderCustomBreadcrumb: i,
                            separatorClassName: c
                        } = this.props, f = e.id === n, h = t === a.length - 1, E = null != i ? i(e, f) : (0, l.jsx)("span", {
                            className: r(o.breadcrumb, {
                                [o.activeBreadcrumb]: f,
                                [o.interactiveBreadcrumb]: null != s
                            }),
                            children: e.label
                        });
                        return (0, l.jsxs)("div", {
                            className: r(o.breadcrumbWrapper, {
                                [o.breadcrumbFinalWrapper]: h
                            }),
                            children: [null != s ? (0, l.jsx)(u.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: o.breadcrumbClickWrapper,
                                children: E
                            }) : E, h ? null : (0, l.jsx)(d.default, {
                                className: r(o.breadcrumbArrow, c),
                                direction: d.default.Directions.RIGHT
                            })]
                        }, e.id)
                    }
                }
            }
            var f = c
        },
        91551: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("917351"),
                r = n.n(a),
                u = n("888400"),
                i = n("782340");
            let d = () => [i.default.Messages.COUNTDOWN_UNITS_SECONDS, i.default.Messages.COUNTDOWN_UNITS_MINUTES, i.default.Messages.COUNTDOWN_UNITS_HOURS, i.default.Messages.COUNTDOWN_UNITS_DAYS];
            class o extends s.PureComponent {
                componentDidMount() {
                    let {
                        intervalDuration: e,
                        onInterval: t
                    } = this.props;
                    this._interval = setInterval(() => {
                        this.forceUpdate(), null == t || t()
                    }, e)
                }
                componentWillUnmount() {
                    null != this._interval && clearInterval(this._interval)
                }
                defaultRender(e) {
                    let {
                        showDays: t,
                        showUnits: n,
                        className: s
                    } = this.props, a = [e.days, e.hours, e.minutes, e.seconds], u = d();
                    if (0 === e.days) a.shift();
                    else if (!t) {
                        let e = a.shift();
                        a[0] += 24 * e
                    }
                    let i = r(a).map(e => e < 10 ? "0".concat(e) : e).map((e, t) => [t > 0 && !n ? ":" : " ", (0, l.jsxs)("span", {
                        children: [e, n ? u[a.length - t - 1] : null]
                    }, t)]).flatten().value();
                    return (0, l.jsx)("span", {
                        className: s,
                        children: i
                    })
                }
                render() {
                    let {
                        deadline: e,
                        children: t,
                        className: n,
                        stopAtOneSec: s
                    } = this.props;
                    if (e === 1 / 0) return (0, l.jsx)("span", {
                        className: n,
                        "aria-label": i.default.Messages.MAX_AGE_NEVER,
                        children: "∞"
                    });
                    let a = (0, u.diffAsUnits)(Date.now(), e, s);
                    return null != t ? t(a, this.defaultRender.bind(this, a)) : this.defaultRender(a)
                }
            }
            o.defaultProps = {
                showDays: !0,
                showUnits: !1,
                stopAtOneSec: !1,
                intervalDuration: 1e3
            };
            var c = o
        },
        546671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("7037"),
                r = n("246053"),
                u = (0, s.replaceIcon)(function(e) {
                    return (0, l.jsx)(r.default, {
                        ...e,
                        direction: r.default.Directions.UP
                    })
                }, a.ArrowSmallUpIcon)
        },
        745633: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("586880"),
                r = n("75196"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        ...a
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.25 18L13.25 6L11.75 6L11.75 18L13.25 18Z",
                            fill: s
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.75C6.30964 12.75 5.75 13.3096 5.75 14V18H4.25V14C4.25 12.4812 5.48122 11.25 7 11.25H18C19.5188 11.25 20.75 12.4812 20.75 14V18H19.25V14C19.25 13.3096 18.6904 12.75 18 12.75H7Z",
                            fill: s
                        }), (0, l.jsx)("path", {
                            d: "M12.5 7C11.1193 7 10 5.88071 10 4.5C10 3.11929 11.1193 2 12.5 2C13.8807 2 15 3.11929 15 4.5C15 5.88071 13.8807 7 12.5 7Z",
                            fill: s
                        }), (0, l.jsx)("path", {
                            d: "M20 22C18.6193 22 17.5 20.8807 17.5 19.5C17.5 18.1193 18.6193 17 20 17C21.3807 17 22.5 18.1193 22.5 19.5C22.5 20.8807 21.3807 22 20 22Z",
                            fill: s
                        }), (0, l.jsx)("path", {
                            d: "M12.5 22C11.1193 22 10 20.8807 10 19.5C10 18.1193 11.1193 17 12.5 17C13.8807 17 15 18.1193 15 19.5C15 20.8807 13.8807 22 12.5 22Z",
                            fill: s
                        }), (0, l.jsx)("path", {
                            d: "M5 22C3.61929 22 2.5 20.8807 2.5 19.5C2.5 18.1193 3.61929 17 5 17C6.38071 17 7.5 18.1193 7.5 19.5C7.5 20.8807 6.38071 22 5 22Z",
                            fill: s
                        })]
                    })
                }, a.HubIcon)
        },
        100300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("85941"),
                r = n("75196"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1.25 0.5H4.25C4.66475 0.5 5 0.836 5 1.25V4.25C5 4.664 4.66475 5 4.25 5H1.25C0.836 5 0.5 4.664 0.5 4.25V1.25C0.5 0.836 0.836 0.5 1.25 0.5ZM1.25 5.75H4.25C4.66475 5.75 5 6.086 5 6.5V9.5C5 9.914 4.66475 10.25 4.25 10.25H1.25C0.836 10.25 0.5 9.914 0.5 9.5V6.5C0.5 6.086 0.836 5.75 1.25 5.75ZM4.25 11H1.25C0.836 11 0.5 11.336 0.5 11.75V14.75C0.5 15.164 0.836 15.5 1.25 15.5H4.25C4.66475 15.5 5 15.164 5 14.75V11.75C5 11.336 4.66475 11 4.25 11ZM6.5 2H15.5V3.5H6.5V2ZM15.5 7.25H6.5V8.75H15.5V7.25ZM6.5 12.5H15.5V14H6.5V12.5Z",
                            fill: s
                        })
                    })
                }, a.ListBulletsIcon)
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("811513"),
                r = n("75196"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: a,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, a.GroupIcon)
        },
        76539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("715072"),
                r = n("75196"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return 16 === t || 16 === n ? (0, l.jsxs)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: [(0, l.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"
                        }), (0, l.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"
                        })]
                    }) : (0, l.jsx)("svg", {
                        ...(0, r.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: a,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"
                        })
                    })
                }, a.UserPlusIcon)
        },
        713573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var s = n("414456"),
                a = n.n(s),
                r = n("77078"),
                u = n("254686"),
                i = n("851706");
            let d = Object.freeze({
                    SIZE_10: i.size10,
                    SIZE_12: i.size12,
                    SIZE_14: i.size14,
                    SIZE_16: i.size16,
                    SIZE_20: i.size20,
                    SIZE_24: i.size24,
                    SIZE_32: i.size32
                }),
                o = e => {
                    let {
                        id: t,
                        muted: n = !1,
                        className: s = u.wrapper,
                        size: i = d.SIZE_14,
                        selectable: o = !1,
                        children: c,
                        color: f,
                        onClick: h,
                        onContextMenu: E,
                        style: g,
                        title: p,
                        uppercase: _
                    } = e;
                    return (0, l.jsx)(r.H, {
                        role: null != h ? "button" : void 0,
                        onClick: h,
                        onContextMenu: E,
                        id: t,
                        className: a(s, {
                            [u.base]: !0,
                            [i]: !0,
                            [u.selectable]: o,
                            [u.muted]: n,
                            [u.uppercase]: _
                        }),
                        title: p,
                        style: null != f ? {
                            ...g,
                            color: f
                        } : g,
                        children: c
                    })
                };
            o.Sizes = d;
            var c = o
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return M
                },
                default: function() {
                    return I
                }
            });
            var l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                r = n.n(a),
                u = n("627445"),
                i = n.n(u),
                d = n("77078"),
                o = n("506885"),
                c = n("981601"),
                f = n("766274"),
                h = n("697218"),
                E = n("368121"),
                g = n("523096"),
                p = n("587974"),
                _ = n("494101");
            let M = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function m(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }

            function C(e) {
                return (0, l.jsx)("div", {
                    className: _.moreUsers,
                    children: e
                })
            }
            class S extends s.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: s,
                        extraDetail: a
                    } = this.props, r = [], u = e.length === t ? e.length : t - 1, i = this.renderMoreUsers(u), d = 0;
                    for (; d < u && d < e.length;) {
                        var o;
                        let t = null == i && null == a && d === e.length - 1,
                            u = n(e[d], t, d);
                        r.push(t ? (0, l.jsx)("div", {
                            className: _.avatarContainer,
                            children: u
                        }, m(null !== (o = e[d]) && void 0 !== o ? o : null, d)) : (0, l.jsx)(p.default, {
                            className: _.avatarContainerMasked,
                            height: s,
                            width: s,
                            mask: p.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: u
                        }, m(e[d], d))), d++
                    }
                    return null != a ? r.push(a) : null != i && r.push(i), r
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: a,
                        renderMoreUsers: r,
                        users: u
                    } = this.props, i = Math.min(e, u.length);
                    if (!a) {
                        if (null != n) {
                            if (n >= t) return (0, l.jsx)(s.Fragment, {
                                children: r("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > u.length) {
                                let e = n - u.length;
                                return (0, l.jsx)(s.Fragment, {
                                    children: r("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (i < u.length) {
                            let e = Math.min(u.length - i, 99);
                            return (0, l.jsx)(s.Fragment, {
                                children: r("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, l.jsx)(E.default, {
                        foreground: _.foreground,
                        className: _.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: s,
                        showUserPopout: a,
                        useFallbackUserForPopout: u
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, E = n.find(e => null != e && e.id === f), g = u && null == h.default.getUser(f);
                    return (0, l.jsx)(d.Popout, {
                        position: "right",
                        preload: null == E ? void 0 : () => (0, o.default)(E.id, E.getAvatarURL(s, 80), {
                            guildId: s
                        }),
                        shouldShow: !0 === a && null != f,
                        fixed: !0,
                        renderPopout: e => (i(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, l.jsx)(c.default, {
                            ...this.props,
                            user: g && null != E ? E : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, l.jsxs)("div", {
                            className: r(e, _.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M.SIZE_24;
                                switch (e) {
                                    case M.SIZE_16:
                                        return _.size16;
                                    case M.SIZE_24:
                                        return _.size24;
                                    case M.SIZE_32:
                                        return _.size32;
                                    case M.SIZE_56:
                                        return _.size56;
                                    default:
                                        return _.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = s.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: s,
                            guildId: a,
                            size: r
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, l.jsx)("div", {
                                className: _.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % g.default.DEFAULT_AVATARS.length,
                                    t = g.default.DEFAULT_AVATARS[e];
                                return (0, l.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: _.avatar
                                })
                            }
                        }
                        let u = (0, l.jsx)("img", {
                            src: e.getAvatarURL(a, r),
                            alt: e.username,
                            className: _.avatar
                        }, e.id);
                        return s ? (0, l.jsx)(d.Clickable, {
                            className: _.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: u
                        }, e.id) : u
                    }
                }
            }
            S.defaultProps = {
                max: 10,
                renderMoreUsers: C,
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: M.SIZE_24
            };
            var I = S
        }
    }
]);