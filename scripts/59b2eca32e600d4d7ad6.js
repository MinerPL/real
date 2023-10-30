(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["80630"], {
        969176: function(e, n, t) {
            var a = t("354069");
            e.exports = function(e, n) {
                return a(e, n)
            }
        },
        158534: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return u
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("685665");

            function u(e, n) {
                return function(t) {
                    let {
                        AnalyticsLocationProvider: u
                    } = (0, l.default)(n);
                    return (0, a.jsx)(u, {
                        children: (0, a.jsx)(e, {
                            ...t
                        })
                    })
                }
            }
        },
        746164: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return a
                }
            });
            var a = (0, t("862205").createExperiment)({
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
        913452: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                useOpenInPopoutExperiment: function() {
                    return u
                }
            });
            var a = t("862205");
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
        229233: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return T
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("77078"),
                u = t("272030"),
                i = t("158534"),
                s = t("812204"),
                d = t("861370"),
                r = t("715243"),
                o = t("261675"),
                c = t("963150"),
                f = t("308798"),
                _ = t("47006"),
                E = t("878526"),
                p = t("531674"),
                C = t("619436"),
                N = t("731390"),
                I = t("339876"),
                h = t("49111"),
                M = t("782340"),
                T = (0, i.default)(function(e) {
                    let {
                        channel: n,
                        guild: t,
                        includeTopic: i = !1,
                        onSelect: s
                    } = e, T = (0, I.default)(n), A = (0, p.default)(n), g = (0, C.default)(n), O = (0, o.default)(n), v = (0, _.default)(n), x = (0, E.default)(n, t), L = (0, r.default)(n, t), m = (0, c.default)(n, t, h.ChannelTypes.GUILD_TEXT), b = (0, c.default)(n, t, h.ChannelTypes.GUILD_VOICE), S = (0, f.default)(n), j = (0, d.default)({
                        id: n.id,
                        label: M.default.Messages.COPY_ID_CHANNEL
                    }), y = (0, N.default)(n, "title_context_menu");
                    return (0, a.jsxs)(l.Menu, {
                        navId: "channel-context",
                        onClose: u.closeContextMenu,
                        "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                        onSelect: s,
                        children: [(0, a.jsx)(l.MenuGroup, {
                            children: T
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: A
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [i ? O : g, v]
                        }), (0, a.jsxs)(l.MenuGroup, {
                            children: [x, L, m, b]
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: y
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: S
                        }), (0, a.jsx)(l.MenuGroup, {
                            children: j
                        })]
                    })
                }, [s.default.CONTEXT_MENU, s.default.CHANNEL_TITLE_MENU])
        },
        715243: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return r
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("446674"),
                u = t("77078"),
                i = t("957255"),
                s = t("49111"),
                d = t("782340");

            function r(e, n) {
                let r = (0, l.useStateFromStores)([i.default], () => i.default.can(s.Permissions.MANAGE_CHANNELS, e), [e]);
                return __OVERLAY__ || !r ? null : (0, a.jsx)(u.MenuItem, {
                    id: "clone-channel",
                    label: d.default.Messages.CLONE_CHANNEL,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: l
                        } = await t.el("581354").then(t.bind(t, "581354"));
                        return t => (0, a.jsx)(l, {
                            ...t,
                            channelType: e.type,
                            guildId: n.id,
                            categoryId: e.parent_id,
                            cloneChannelId: e.id
                        })
                    })
                })
            }
        },
        261675: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return s
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("77078"),
                u = t("306160"),
                i = t("782340");

            function s(e) {
                return u.SUPPORTS_COPY ? (0, a.jsx)(l.MenuItem, {
                    id: "copy-channel-topic",
                    label: i.default.Messages.COPY_CHANNEL_TOPIC,
                    action: () => (0, u.copy)(e.topic)
                }) : null
            }
        },
        963150: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return r
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("446674"),
                u = t("77078"),
                i = t("957255"),
                s = t("49111"),
                d = t("782340");

            function r(e, n) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    o = (0, l.useStateFromStores)([i.default], () => i.default.can(s.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !o) return null;
                let c = () => {
                    (0, u.openModalLazy)(async () => {
                        let {
                            default: n
                        } = await t.el("581354").then(t.bind(t, "581354"));
                        return t => (0, a.jsx)(n, {
                            ...t,
                            channelType: r,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
                        })
                    })
                };
                switch (r) {
                    case s.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(u.MenuItem, {
                            id: "create-text-channel",
                            label: d.default.Messages.CREATE_TEXT_CHANNEL,
                            action: c
                        });
                    case s.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(u.MenuItem, {
                            id: "create-voice-channel",
                            label: d.default.Messages.CREATE_VOICE_CHANNEL,
                            action: c
                        });
                    default:
                        return null
                }
            }
        },
        47006: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return o
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("446674"),
                u = t("77078"),
                i = t("18054"),
                s = t("957255"),
                d = t("49111"),
                r = t("782340");

            function o(e) {
                let {
                    canManageChannels: n,
                    canManageRoles: t,
                    canManageWebhooks: o,
                    canAccessChannel: c
                } = (0, l.useStateFromStoresObject)([s.default], () => ({
                    canManageChannels: s.default.can(d.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: s.default.can(d.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: s.default.can(d.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: s.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && c && (n || t || o) ? (0, a.jsx)(u.MenuItem, {
                    id: "edit-channel",
                    label: e.type === d.ChannelTypes.GUILD_CATEGORY ? r.default.Messages.EDIT_CATEGORY : r.default.Messages.EDIT_CHANNEL,
                    action: () => i.default.open(e.id)
                }) : null
            }
        },
        878526: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return u
                }
            });
            var a = t("58622"),
                l = t("49111");

            function u(e, n, t) {
                return (0, a.default)({
                    guild: n,
                    channel: e,
                    stageInstance: t,
                    source: l.InstantInviteSources.CONTEXT_MENU
                })
            }
        },
        731390: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return E
                }
            });
            var a = t("37983"),
                l = t("884691"),
                u = t("77078"),
                i = t("390236"),
                s = t("292508"),
                d = t("383294"),
                r = t("913452"),
                o = t("533466"),
                c = t("49111"),
                f = t("268333");

            function _(e) {
                let {
                    windowKey: n,
                    channel: t
                } = e;
                return (0, a.jsx)(s.default, {
                    withTitleBar: !0,
                    windowKey: n,
                    title: t.name,
                    channelId: t.id,
                    contentClassName: f.popoutContent,
                    children: (0, a.jsx)(i.default.Provider, {
                        value: t.guild_id,
                        children: (0, a.jsx)(o.default, {
                            providedChannel: t
                        })
                    })
                })
            }

            function E(e, n) {
                let t = (0, r.useOpenInPopoutExperiment)(n),
                    i = l.useCallback(() => {
                        d.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), n => (0, a.jsx)(_, {
                            windowKey: n,
                            channel: e
                        }), {
                            defaultWidth: 854,
                            defaultHeight: 480
                        })
                    }, [e]);
                return t ? (0, a.jsx)(u.MenuItem, {
                    id: "channel-pop-out",
                    label: "Open in Popout",
                    action: () => i()
                }) : null
            }
        },
        339876: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return c
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("446674"),
                u = t("77078"),
                i = t("629220"),
                s = t("512395"),
                d = t("282109"),
                r = t("49111"),
                o = t("782340");

            function c(e) {
                let n = (0, s.useOptInEnabledForGuild)(e.guild_id),
                    t = (0, l.useStateFromStores)([d.default], () => d.default.isChannelOptedIn(e.guild_id, e.id)),
                    c = (0, l.useStateFromStores)([d.default], () => null != e.parent_id && d.default.isChannelOptedIn(e.guild_id, e.parent_id)),
                    f = (0, l.useStateFromStores)([d.default], () => d.default.isFavorite(e.guild_id, e.id)),
                    _ = () => {
                        (0, i.setOptInChannel)(e.guild_id, e.id, !t, {
                            section: r.AnalyticsSections.CONTEXT_MENU
                        })
                    },
                    E = () => {
                        null != e.parent_id && (0, i.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                            section: r.AnalyticsSections.CONTEXT_MENU
                        })
                    };
                return !n || e.isThread() ? null : e.isCategory() ? (0, a.jsx)(u.MenuItem, {
                    id: "opt-into-category",
                    label: t ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                    action: () => _()
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(u.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: f ? o.default.Messages.REMOVE_FAVORITE : o.default.Messages.ADD_FAVORITE,
                        action: () => {
                            (0, i.setIsFavorite)(e.guild_id, e.id, !f, {
                                section: r.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), c ? (0, a.jsx)(u.MenuItem, {
                        id: "opt-out-category",
                        label: o.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => E()
                    }) : (0, a.jsx)(u.MenuItem, {
                        id: "opt-into-channel",
                        label: t ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                        action: () => _()
                    })]
                })
            }
        },
        58622: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return f
                }
            });
            var a = t("37983");
            t("884691");
            var l = t("446674"),
                u = t("77078"),
                i = t("242757"),
                s = t("923959"),
                d = t("957255"),
                r = t("76539"),
                o = t("49111"),
                c = t("782340");

            function f(e) {
                let {
                    source: n,
                    guild: t,
                    channel: a,
                    stageInstance: u
                } = e, r = (0, l.useStateFromStores)([s.default, d.default], () => {
                    var e;
                    let n = s.default.getChannels(t.id);
                    return null === (e = n[0, s.GUILD_SELECTABLE_CHANNELS_KEY].find(e => d.default.can(o.Permissions.CREATE_INSTANT_INVITE, e.channel))) || void 0 === e ? void 0 : e.channel
                }), c = (0, l.useStateFromStores)([d.default], () => (0, i.canViewInviteModal)(d.default, t, a, u)), f = _(n, t, c && null != a ? a : r), p = E(n);
                return null == a && n === o.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != r ? f : p
            }
            let _ = (e, n, l) => (0, a.jsx)(u.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: u
                        } = await t.el("310688").then(t.bind(t, "310688"));
                        return t => (0, a.jsx)(u, {
                            ...t,
                            guild: n,
                            channel: l,
                            source: e
                        })
                    })
                }),
                E = e => (0, a.jsx)(u.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await t.el("973132").then(t.bind(t, "973132"));
                        return n => (0, a.jsx)(e, {
                            ...n
                        })
                    })
                })
        }
    }
]);