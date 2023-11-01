(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94091"], {
        969176: function(e, t, n) {
            var a = n("354069");
            e.exports = function(e, t) {
                return a(e, t)
            }
        },
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("685665");

            function u(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: u
                    } = (0, l.default)(t);
                    return (0, a.jsx)(u, {
                        children: (0, a.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        746164: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2023-02_voice_channel_statuses",
                label: "Voice Channel Status Guild Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable viewing and setting voice channel statuses for guild",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "A/A test, identical to treatment 1",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        735890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                u = n("452804"),
                i = n("135230"),
                s = n("168973"),
                r = n("782340");

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                    n = () => {
                        u.default.updatedUnsyncedSettings({
                            disableEmbeddedActivityPopOutAlert: !0
                        }), e()
                    },
                    d = !s.default.disableEmbeddedActivityPopOutAlert;
                d ? (0, l.openModal)(l => (0, a.jsx)(i.default, {
                    confirmText: r.default.Messages.EMBEDDED_ACTIVITIES_YEP,
                    secondaryConfirmText: r.default.Messages.DONT_ASK_AGAIN,
                    title: r.default.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
                    cancelText: r.default.Messages.EMBEDDED_ACTIVITIES_NVM,
                    onConfirm: e,
                    onConfirmSecondary: n,
                    onCancel: t,
                    body: r.default.Messages.EMBEDDED_ACTIVITIES_POP_OUT_WARNING,
                    ...l
                })) : e()
            }
        },
        836087: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var a = n("37983"),
                l = n("884691"),
                u = n("414456"),
                i = n.n(u),
                s = n("917351"),
                r = n.n(s),
                d = n("446674"),
                o = n("862337"),
                c = n("77078"),
                f = n("272030"),
                p = n("901582"),
                E = n("373469"),
                h = n("697218"),
                _ = n("427302"),
                g = n("462579"),
                S = n("449008"),
                C = n("387111"),
                I = n("99795"),
                T = n("49111"),
                m = n("782340"),
                M = n("2081");

            function N(e, t) {
                switch (e) {
                    case I.ParticipantTypes.ACTIVITY:
                        return m.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
                            numUsers: t
                        });
                    case I.ParticipantTypes.STREAM:
                        return m.default.Messages.SPECTATORS.format({
                            numViewers: t
                        });
                    default:
                        throw Error("Unknown participant type.")
                }
            }

            function A(e) {
                let {
                    users: t,
                    disableInteraction: n,
                    guildId: l,
                    participantType: u,
                    channelId: s,
                    handleUserContextMenu: r
                } = e, d = N(u, t.length);
                return (0, a.jsx)(c.Dialog, {
                    "aria-label": d,
                    className: M.popoutWrapper,
                    children: (0, a.jsxs)(c.Scroller, {
                        className: M.scroller,
                        children: [(0, a.jsx)(c.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: M.memberListHeader,
                            children: d
                        }), (0, a.jsx)("div", {
                            children: t.map(e => (0, a.jsx)(_.default, {
                                guildId: null != l ? l : void 0,
                                className: i(M.memberListItem, {
                                    [M.popoutDisabled]: n
                                }),
                                textClassName: M.memberListItemText,
                                user: e,
                                disablePopout: n,
                                nick: C.default.getNickname(l, s, e),
                                onContextMenu: t => n ? null : r(t, e)
                            }, e.id))
                        })]
                    })
                })
            }

            function v(e) {
                let {
                    users: t,
                    guildId: n,
                    channelId: l,
                    maxVisibleUsers: u = 3,
                    className: s,
                    participantType: r
                } = e, d = N(r, t.length), o = t.length < u ? t.map(e => (0, a.jsx)("div", {
                    className: M.viewersTooltipItem,
                    children: C.default.getName(n, l, e)
                }, e.id)) : d;
                return (0, a.jsx)(c.TooltipContainer, {
                    text: o,
                    "aria-label": d,
                    children: (0, a.jsxs)("div", {
                        className: i(M.viewers, s),
                        children: [(0, a.jsx)(g.default, {
                            className: M.viewersIcon
                        }), (0, a.jsx)("span", {
                            "aria-hidden": "true",
                            children: t.length
                        })]
                    })
                })
            }
            let x = [];

            function O(e) {
                let {
                    channelId: t,
                    guildId: u,
                    participant: s,
                    className: _,
                    compact: g = !1,
                    disableInteraction: C = !1,
                    maxVisibleUsers: m = 3
                } = e, [N, O] = l.useState(!1), P = l.useRef(new o.DelayedCall(150, () => O(!1))), b = (0, d.useStateFromStoresArray)([E.default, h.default], () => {
                    if (s.type === I.ParticipantTypes.STREAM) {
                        let e = E.default.getViewerIds(s.id);
                        return e.length > 0 ? e.map(e => h.default.getUser(e)).filter(S.isNotNullish) : x
                    }
                    return s.type === I.ParticipantTypes.ACTIVITY ? s.participants.size > 0 ? Array.from(s.participants).map(e => h.default.getUser(e)).filter(S.isNotNullish) : x : x
                }, [s]), L = l.useCallback(() => {
                    P.current.cancel(), O(!0)
                }, []), y = l.useCallback(() => {
                    P.current.delay()
                }, []), j = l.useCallback((e, t) => {
                    L(), (0, f.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("406784").then(n.bind(n, "406784"));
                        return n => (0, a.jsx)(e, {
                            ...n,
                            user: t
                        })
                    }, {
                        onClose: y
                    })
                }, [y, L]);
                if (0 === b.length) return null;
                if (g) return (0, a.jsx)(v, {
                    maxVisibleUsers: m,
                    users: b,
                    guildId: u,
                    channelId: t,
                    className: _,
                    participantType: s.type
                });
                let V = r(b).take(m).map(e => (0, a.jsx)(c.Avatar, {
                    src: e.getAvatarURL(u, 24),
                    "aria-label": e.username,
                    size: c.AvatarSizes.SIZE_24,
                    className: M.viewer
                }, e.id)).value();
                return b.length > m && (V[V.length - 1] = (0, a.jsxs)("div", {
                    className: M.overflow,
                    children: ["+", b.length - m + 1]
                }, "overflow")), (0, a.jsx)(p.default, {
                    section: T.AnalyticsSections.STREAM_VIEWER_POPOUT,
                    children: (0, a.jsx)("div", {
                        onMouseEnter: L,
                        onMouseLeave: y,
                        children: (0, a.jsx)(c.Popout, {
                            renderPopout: () => (0, a.jsx)(A, {
                                participantType: s.type,
                                handleUserContextMenu: j,
                                guildId: u,
                                channelId: t,
                                users: b,
                                disableInteraction: C
                            }),
                            shouldShow: N,
                            position: "top",
                            children: () => (0, a.jsx)("div", {
                                className: i(M.viewers, _),
                                children: V
                            })
                        })
                    })
                })
            }
        },
        913452: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useOpenInPopoutExperiment: function() {
                    return u
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08-30_open-in-popout",
                label: "Open Channel in Popout",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function u(e) {
                return l.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled
            }
        },
        229233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                u = n("272030"),
                i = n("158534"),
                s = n("812204"),
                r = n("861370"),
                d = n("715243"),
                o = n("261675"),
                c = n("963150"),
                f = n("308798"),
                p = n("47006"),
                E = n("878526"),
                h = n("531674"),
                _ = n("619436"),
                g = n("731390"),
                S = n("339876"),
                C = n("49111"),
                I = n("782340"),
                T = (0, i.default)(function(e) {
                    let {
                        channel: t,
                        guild: n,
                        includeTopic: i = !1,
                        onSelect: s
                    } = e, T = (0, S.default)(t), m = (0, h.default)(t), M = (0, _.default)(t), N = (0, o.default)(t), A = (0, p.default)(t), v = (0, E.default)(t, n), x = (0, d.default)(t, n), O = (0, c.default)(t, n, C.ChannelTypes.GUILD_TEXT), P = (0, c.default)(t, n, C.ChannelTypes.GUILD_VOICE), b = (0, f.default)(t), L = (0, r.default)({
                        id: t.id,
                        label: I.default.Messages.COPY_ID_CHANNEL
                    }), y = (0, g.default)(t, "title_context_menu");
                    return (0, a.jsxs)(l.Menu, {
                        navId: "channel-context",
                        onClose: u.closeContextMenu,
                        "aria-label": I.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onSelect: s,
                        children: [(0, a.jsx)(l.MenuGroup, {
                            children: T
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: m
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [i ? N : M, A]
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [v, x, O, P]
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: y
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: b
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: L
                        })]
                    })
                }, [s.default.CONTEXT_MENU, s.default.CHANNEL_TITLE_MENU])
        },
        715243: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                i = n("957255"),
                s = n("49111"),
                r = n("782340");

            function d(e, t) {
                let d = (0, l.useStateFromStores)([i.default], () => i.default.can(s.Permissions.MANAGE_CHANNELS, e), [e]);
                return __OVERLAY__ || !d ? null : (0, a.jsx)(u.MenuItem, {
                    id: "clone-channel",
                    label: r.default.Messages.CLONE_CHANNEL,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: l
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(l, {
                            ...n,
                            channelType: e.type,
                            guildId: t.id,
                            categoryId: e.parent_id,
                            cloneChannelId: e.id
                        })
                    })
                })
            }
        },
        261675: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                u = n("306160"),
                i = n("782340");

            function s(e) {
                return u.SUPPORTS_COPY ? (0, a.jsx)(l.MenuItem, {
                    id: "copy-channel-topic",
                    label: i.default.Messages.COPY_CHANNEL_TOPIC,
                    action: () => (0, u.copy)(e.topic)
                }) : null
            }
        },
        963150: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                i = n("957255"),
                s = n("49111"),
                r = n("782340");

            function d(e, t) {
                let d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    o = (0, l.useStateFromStores)([i.default], () => i.default.can(s.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !o) return null;
                let c = () => {
                    (0, u.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: d,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
                        })
                    })
                };
                switch (d) {
                    case s.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(u.MenuItem, {
                            id: "create-text-channel",
                            label: r.default.Messages.CREATE_TEXT_CHANNEL,
                            action: c
                        });
                    case s.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(u.MenuItem, {
                            id: "create-voice-channel",
                            label: r.default.Messages.CREATE_VOICE_CHANNEL,
                            action: c
                        });
                    default:
                        return null
                }
            }
        },
        47006: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                i = n("18054"),
                s = n("957255"),
                r = n("49111"),
                d = n("782340");

            function o(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: o,
                    canAccessChannel: c
                } = (0, l.useStateFromStoresObject)([s.default], () => ({
                    canManageChannels: s.default.can(r.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: s.default.can(r.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: s.default.can(r.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: s.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && c && (t || n || o) ? (0, a.jsx)(u.MenuItem, {
                    id: "edit-channel",
                    label: e.type === r.ChannelTypes.GUILD_CATEGORY ? d.default.Messages.EDIT_CATEGORY : d.default.Messages.EDIT_CHANNEL,
                    action: () => i.default.open(e.id)
                }) : null
            }
        },
        878526: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("58622"),
                l = n("49111");

            function u(e, t, n) {
                return (0, a.default)({
                    guild: t,
                    channel: e,
                    stageInstance: n,
                    source: l.InstantInviteSources.CONTEXT_MENU
                })
            }
        },
        731390: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983"),
                l = n("884691"),
                u = n("77078"),
                i = n("390236"),
                s = n("292508"),
                r = n("383294"),
                d = n("913452"),
                o = n("533466"),
                c = n("49111"),
                f = n("268333");

            function p(e) {
                let {
                    windowKey: t,
                    channel: n
                } = e;
                return (0, a.jsx)(s.default, {
                    withTitleBar: !0,
                    windowKey: t,
                    title: n.name,
                    channelId: n.id,
                    contentClassName: f.popoutContent,
                    children: (0, a.jsx)(i.default.Provider, {
                        value: n.guild_id,
                        children: (0, a.jsx)(o.default, {
                            providedChannel: n
                        })
                    })
                })
            }

            function E(e, t) {
                let n = (0, d.useOpenInPopoutExperiment)(t),
                    i = l.useCallback(() => {
                        r.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, a.jsx)(p, {
                            windowKey: t,
                            channel: e
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }, [e]);
                return n ? (0, a.jsx)(u.MenuItem, {
                    id: "channel-pop-out",
                    label: "Open in Popout",
                    action: () => i()
                }) : null
            }
        },
        339876: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                i = n("629220"),
                s = n("512395"),
                r = n("282109"),
                d = n("49111"),
                o = n("782340");

            function c(e) {
                let t = (0, s.useOptInEnabledForGuild)(e.guild_id),
                    n = (0, l.useStateFromStores)([r.default], () => r.default.isChannelOptedIn(e.guild_id, e.id)),
                    c = (0, l.useStateFromStores)([r.default], () => null != e.parent_id && r.default.isChannelOptedIn(e.guild_id, e.parent_id)),
                    f = (0, l.useStateFromStores)([r.default], () => r.default.isFavorite(e.guild_id, e.id)),
                    p = () => {
                        (0, i.setOptInChannel)(e.guild_id, e.id, !n, {
                            section: d.AnalyticsSections.CONTEXT_MENU
                        })
                    },
                    E = () => {
                        null != e.parent_id && (0, i.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                            section: d.AnalyticsSections.CONTEXT_MENU
                        })
                    };
                return !t || e.isThread() ? null : e.isCategory() ? (0, a.jsx)(u.MenuItem, {
                    id: "opt-into-category",
                    label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                    action: () => p()
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(u.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: f ? o.default.Messages.REMOVE_FAVORITE : o.default.Messages.ADD_FAVORITE,
                        action: () => {
                            (0, i.setIsFavorite)(e.guild_id, e.id, !f, {
                                section: d.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), c ? (0, a.jsx)(u.MenuItem, {
                        id: "opt-out-category",
                        label: o.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => E()
                    }) : (0, a.jsx)(u.MenuItem, {
                        id: "opt-into-channel",
                        label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                        action: () => p()
                    })]
                })
            }
        },
        58622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                i = n("242757"),
                s = n("923959"),
                r = n("957255"),
                d = n("76539"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    source: t,
                    guild: n,
                    channel: a,
                    stageInstance: u
                } = e, d = (0, l.useStateFromStores)([s.default, r.default], () => {
                    var e;
                    let t = s.default.getChannels(n.id);
                    return null === (e = t[0, s.GUILD_SELECTABLE_CHANNELS_KEY].find(e => r.default.can(o.Permissions.CREATE_INSTANT_INVITE, e.channel))) || void 0 === e ? void 0 : e.channel
                }), c = (0, l.useStateFromStores)([r.default], () => (0, i.canViewInviteModal)(r.default, n, a, u)), f = p(t, n, c && null != a ? a : d), h = E(t);
                return null == a && t === o.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != d ? f : h
            }
            let p = (e, t, l) => (0, a.jsx)(u.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: u
                        } = await n.el("310688").then(n.bind(n, "310688"));
                        return n => (0, a.jsx)(u, {
                            ...n,
                            guild: t,
                            channel: l,
                            source: e
                        })
                    })
                }),
                E = e => (0, a.jsx)(u.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("973132").then(n.bind(n, "973132"));
                        return t => (0, a.jsx)(e, {
                            ...t
                        })
                    })
                })
        },
        567469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStageParticipants: function() {
                    return s
                },
                useStageParticipantsCount: function() {
                    return r
                },
                useSortedRequestToSpeakParticipants: function() {
                    return d
                },
                useActualStageSpeakerCount: function() {
                    return o
                }
            });
            var a = n("446674"),
                l = n("334572"),
                u = n("488464"),
                i = n("998716");

            function s(e, t) {
                let [n] = (0, a.useStateFromStores)([u.default], () => [u.default.getMutableParticipants(e, t), u.default.getParticipantsVersion(e)], [e, t], l.isVersionEqual);
                return n
            }

            function r(e, t) {
                return (0, a.useStateFromStores)([u.default], () => u.default.getParticipantCount(e, t), [e, t])
            }

            function d(e) {
                let [t] = (0, a.useStateFromStores)([u.default], () => {
                    let t = u.default.getMutableRequestToSpeakParticipants(e);
                    return [t, u.default.getRequestToSpeakParticipantsVersion(e)]
                }, [e], l.isVersionEqual);
                return t
            }

            function o(e) {
                return (0, a.useStateFromStores)([u.default], () => {
                    let t = u.default.getMutableParticipants(e, i.StageChannelParticipantNamedIndex.SPEAKER),
                        n = t.filter(e => e.type === i.StageChannelParticipantTypes.VOICE);
                    return n.length
                }, [e])
            }
        },
        924872: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShowStageMusicMuteButton: function() {
                    return C
                },
                shouldShowStageMusicMuteButton: function() {
                    return I
                },
                default: function() {
                    return m
                }
            });
            var a = n("446674"),
                l = n("689988"),
                u = n("42203"),
                i = n("42887"),
                s = n("18494"),
                r = n("800762"),
                d = n("709681"),
                o = n("488464"),
                c = n("567469"),
                f = n("998716"),
                p = n("834052"),
                E = n("274438");
            let h = e => e / 400,
                _ = !1,
                g = (0, d.createSound)("stage_waiting", "stage_waiting", h(i.default.getOutputVolume()));

            function S() {
                let e = s.default.getVoiceChannelId();
                if (null == e) {
                    g.stop(), _ = !1;
                    return
                }
                let t = u.default.getChannel(e);
                if (!(null == t ? void 0 : t.isGuildStageVoice())) {
                    g.stop(), _ = !1;
                    return
                }
                let n = i.default.isSelfDeaf();
                if (n) {
                    g.stop(), _ = !1;
                    return
                }
                let a = E.default.shouldPlay();
                if (a) {
                    g.volume = h(i.default.getOutputVolume()), g.loop(), _ = !0;
                    return
                }
                let l = p.default.isLive(e);
                if (l) {
                    g.stop(), _ = !1;
                    return
                }
                let d = E.default.isMuted();
                if (d) {
                    g.pause(), _ = !1;
                    return
                }
                let o = null != Object.values(r.default.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
                o || _ ? o && (g.pause(), _ = !1) : (g.volume = h(i.default.getOutputVolume()), g.loop(), _ = !0)
            }

            function C(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.getVoiceChannelId() === e),
                    n = (0, c.useStageParticipants)(e, f.StageChannelParticipantNamedIndex.SPEAKER),
                    l = null != n.find(e => !e.voiceState.isVoiceMuted()),
                    u = (0, a.useStateFromStores)([p.default], () => p.default.getStageInstanceByChannel(e));
                return t && null == u && !l
            }

            function I(e) {
                let t = s.default.getVoiceChannelId() === e,
                    n = o.default.getMutableParticipants(e, f.StageChannelParticipantNamedIndex.SPEAKER),
                    a = null != n.find(e => !e.voiceState.isVoiceMuted()),
                    l = p.default.getStageInstanceByChannel(e);
                return t && null == l && !a
            }
            class T extends l.default {
                handleVoiceChannelSelect(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null != t) {
                        let e = u.default.getChannel(t);
                        (null == e ? void 0 : e.isGuildStageVoice()) ? S(): (g.stop(), _ = !1)
                    } else g.stop(), _ = !1
                }
                handleLogout() {
                    g.stop(), _ = !1
                }
                handlePlay(e) {
                    let {
                        play: t
                    } = e;
                    t ? S() : (g.pause(), _ = !1)
                }
                handleMute(e) {
                    let {
                        muted: t
                    } = e;
                    t ? (g.pause(), _ = !1) : S()
                }
                handleVoiceStateUpdates() {
                    S()
                }
                handleSetOutputVolume(e) {
                    let {
                        volume: t
                    } = e;
                    g.volume = h(t)
                }
                handleToggleSelfDeaf() {
                    S()
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                        LOGOUT: this.handleLogout,
                        STAGE_MUSIC_MUTE: this.handleMute,
                        STAGE_MUSIC_PLAY: this.handlePlay,
                        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                        AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
                        AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf
                    }
                }
            }
            var m = new T
        },
        274438: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("446674"),
                l = n("913144");
            let u = !1,
                i = !1;
            class s extends a.default.DeviceSettingsStore {
                initialize(e) {
                    null != e && (u = e)
                }
                isMuted() {
                    return u
                }
                shouldPlay() {
                    return i
                }
                getUserAgnosticState() {
                    return u
                }
            }
            s.displayName = "StageMusicStore", s.persistKey = "StageMusicStore";
            var r = new s(l.default, {
                STAGE_MUSIC_MUTE: function(e) {
                    let {
                        muted: t
                    } = e;
                    u = t, i = !1
                },
                STAGE_MUSIC_PLAY: function(e) {
                    let {
                        play: t
                    } = e;
                    i = t
                },
                VOICE_CHANNEL_SELECT: function() {
                    i = !1
                }
            })
        },
        109489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                l = n("884691"),
                u = n("414456"),
                i = n.n(u),
                s = n("255397"),
                r = n("256170"),
                d = n("155207"),
                o = n("981913"),
                c = n("782340"),
                f = n("789749");

            function p(e) {
                let {
                    className: t,
                    isVertical: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: f.iconContainer,
                    children: [(0, a.jsx)(r.default, {
                        className: i(n ? f.upCaret : f.leftCaret, t)
                    }), (0, a.jsx)(d.default, {
                        className: i(f.members, t)
                    })]
                })
            }

            function E(e) {
                let {
                    className: t,
                    isVertical: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: f.iconContainer,
                    children: [(0, a.jsx)(r.default, {
                        className: i(n ? f.downCaret : f.rightCaret, t)
                    }), n && (0, a.jsx)(d.default, {
                        className: i(f.members, t)
                    })]
                })
            }

            function h(e) {
                let {
                    channelId: t,
                    className: n,
                    isParticipantsOpen: u,
                    isVertical: r = !1,
                    hideTooltip: d = !1
                } = e, h = l.useCallback(e => {
                    let {
                        className: t
                    } = e;
                    return u ? (0, a.jsx)(E, {
                        className: t,
                        isVertical: r
                    }) : (0, a.jsx)(p, {
                        className: t,
                        isVertical: r
                    })
                }, [u, r]);
                return (0, a.jsx)(o.default, {
                    label: u ? c.default.Messages.VIDEO_CALL_HIDE_MEMBERS : c.default.Messages.VIDEO_CALL_SHOW_MEMBERS,
                    className: i(f.participantsButton, n),
                    onClick: function() {
                        s.default.toggleParticipants(t, !u)
                    },
                    iconComponent: h,
                    shouldShowTooltip: !d
                })
            }
        }
    }
]);