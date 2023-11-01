(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63930"], {
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("685665");

            function s(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: s
                    } = (0, i.default)(t);
                    return (0, a.jsx)(s, {
                        children: (0, a.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        142047: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("272030"),
                l = n("158534"),
                r = n("812204"),
                u = n("861370"),
                d = n("20209"),
                o = n("390008"),
                f = n("178261"),
                c = n("852275"),
                E = n("963150"),
                _ = n("655235"),
                S = n("308798"),
                g = n("47006"),
                N = n("44141"),
                A = n("531674"),
                M = n("619436"),
                L = n("339876"),
                C = n("809937"),
                T = n("782340");

            function h(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, N.default)(t), r = (0, A.default)(t), d = (0, M.default)(t), E = (0, c.default)(t), S = (0, f.default)(t), g = (0, o.default)(t), L = (0, _.default)(t), C = (0, u.default)({
                    id: t.id,
                    label: T.default.Messages.COPY_ID_CHANNEL
                });
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": T.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: l
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [r, d]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [E, S, g]
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: L
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: C
                    })]
                })
            }

            function O(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, r = (0, N.default)(t), d = (0, A.default)(t), _ = (0, M.default)(t), h = (0, c.default)(t), O = (0, f.default)(t), I = (0, g.default)(t), U = (0, o.default)(t), p = (0, E.default)(t, n), F = (0, S.default)(t), v = (0, u.default)({
                    id: t.id,
                    label: T.default.Messages.COPY_ID_CHANNEL
                }), G = (0, L.default)(t), m = (0, C.default)(t);
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": T.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: r
                    }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
                        children: [G, h, O]
                    }, "channel-actions"), (0, a.jsxs)(i.MenuGroup, {
                        children: [d, _, m]
                    }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
                        children: [I, U, p, F]
                    }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
                        children: v
                    }, "developer-actions")]
                })
            }
            var I = (0, l.default)(function(e) {
                let t = (0, d.default)();
                return t ? (0, a.jsx)(h, {
                    ...e
                }) : (0, a.jsx)(O, {
                    ...e
                })
            }, [r.default.CONTEXT_MENU, r.default.CHANNEL_CATEGORY_MENU])
        },
        178261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("820542"),
                r = n("870691"),
                u = n("42203"),
                d = n("49111"),
                o = n("782340");

            function f(e) {
                let t = (0, i.useStateFromStores)([r.default, u.default], () => {
                    let t = u.default.getMutableBasicGuildChannelsForGuild(e.guild_id),
                        n = Object.values(t).filter(e => e.type === d.ChannelTypes.GUILD_CATEGORY);
                    return 0 === n.length || n.every(e => r.default.isCollapsed(e.id))
                });
                return t ? null : (0, a.jsx)(s.MenuItem, {
                    id: "collapse-all-categories",
                    label: o.default.Messages.COLLAPSE_ALL_CATEGORIES,
                    action: () => (0, l.categoryCollapseAll)(e.guild_id)
                })
            }
        },
        852275: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("820542"),
                r = n("870691"),
                u = n("782340");

            function d(e) {
                let t = (0, i.useStateFromStores)([r.default], () => r.default.isCollapsed(e.id), [e.id]);
                return (0, a.jsx)(s.MenuCheckboxItem, {
                    id: "collapse-category",
                    label: u.default.Messages.COLLAPSE_CATEGORY,
                    action: () => t ? (0, l.categoryExpand)(e.id) : (0, l.categoryCollapse)(e.id),
                    checked: t
                })
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
            var i = n("446674"),
                s = n("77078"),
                l = n("957255"),
                r = n("49111"),
                u = n("782340");

            function d(e, t) {
                let d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    o = (0, i.useStateFromStores)([l.default], () => l.default.can(r.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !o) return null;
                let f = () => {
                    (0, s.openModalLazy)(async () => {
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
                    case r.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(s.MenuItem, {
                            id: "create-text-channel",
                            label: u.default.Messages.CREATE_TEXT_CHANNEL,
                            action: f
                        });
                    case r.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(s.MenuItem, {
                            id: "create-voice-channel",
                            label: u.default.Messages.CREATE_VOICE_CHANNEL,
                            action: f
                        });
                    default:
                        return null
                }
            }
        },
        655235: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("200008"),
                l = n("782340");

            function r(e) {
                return (0, a.jsx)(i.MenuItem, {
                    id: "delete-channel",
                    label: l.default.Messages.DELETE_CATEGORY,
                    color: "danger",
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), (0, s.removeFavoriteCategory)(e.id)
                            },
                            channel: e
                        })
                    })
                })
            }
        },
        308798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("18054"),
                r = n("819689"),
                u = n("430475"),
                d = n("610730"),
                o = n("271938"),
                f = n("957255"),
                c = n("49111"),
                E = n("782340");

            function _(e) {
                var t;
                let _ = e.isForumPost(),
                    S = (0, i.useStateFromStores)([o.default], () => e.isOwner(o.default.getId()), [e]),
                    {
                        canManageChannel: g,
                        canAccessChannel: N
                    } = (0, i.useStateFromStoresObject)([f.default], () => ({
                        canAccessChannel: f.default.can(e.accessPermissions, e),
                        canManageChannel: f.default.can(e.isThread() ? c.Permissions.MANAGE_THREADS : c.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    A = (0, i.useStateFromStores)([d.default], () => null !== (t = d.default.getCount(e.id)) && void 0 !== t ? t : 0, [e.id]),
                    {
                        firstMessage: M
                    } = (0, i.useStateFromStores)([u.default], () => u.default.getMessage(e.id), [e.id]),
                    L = _ && (g || S && A < 1),
                    C = _ && S && !g && A > 0 && null != M;
                return N && (g || L || C) ? (0, a.jsx)(s.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === c.ChannelTypes.GUILD_CATEGORY) return E.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return L ? E.default.Messages.DELETE_FORUM_POST : E.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return E.default.Messages.DELETE_THREAD;
                        return E.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), C ? r.default.deleteMessage(e.id, e.id) : l.default.deleteChannel(e.id)
                            },
                            channel: e
                        })
                    })
                }) : null
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
            var i = n("446674"),
                s = n("77078"),
                l = n("18054"),
                r = n("957255"),
                u = n("49111"),
                d = n("782340");

            function o(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: o,
                    canAccessChannel: f
                } = (0, i.useStateFromStoresObject)([r.default], () => ({
                    canManageChannels: r.default.can(u.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: r.default.can(u.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: r.default.can(u.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: r.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && f && (t || n || o) ? (0, a.jsx)(s.MenuItem, {
                    id: "edit-channel",
                    label: e.type === u.ChannelTypes.GUILD_CATEGORY ? d.default.Messages.EDIT_CATEGORY : d.default.Messages.EDIT_CHANNEL,
                    action: () => l.default.open(e.id)
                }) : null
            }
        },
        44141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("267363"),
                r = n("680986"),
                u = n("689275"),
                d = n("755624"),
                o = n("233069"),
                f = n("245997"),
                c = n("660478"),
                E = n("49111"),
                _ = n("782340");

            function S(e) {
                let t = function(e) {
                    let t = (0, r.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, i.useStateFromStores)([c.default, f.default, u.default, d.default], () => {
                            if (e.isForumPost()) return c.default.isForumPostUnread(e.id);
                            if (e.type !== E.ChannelTypes.GUILD_CATEGORY) return c.default.hasUnread(e.id);
                            {
                                let t = f.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, o.isReadableType)(t.type) && c.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let a = new Set(t[e.id].map(e => e.channel.id)),
                                    i = u.default.getThreadsForGuild(e.guild_id);
                                for (let e in i)
                                    if (a.has(e)) {
                                        for (let t in i[e])
                                            if (d.default.hasJoined(t) && !d.default.isMuted(t) && c.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, a.jsx)(s.MenuItem, {
                    id: "mark-channel-read",
                    label: _.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, l.ackChannel)(e)
                    },
                    disabled: !t
                })
            }
        },
        619436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelNotificationRadioItems: function() {
                    return f
                },
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("519705"),
                r = n("282109"),
                u = n("49111"),
                d = n("782340");

            function o(e) {
                var t, n;
                switch (e.type) {
                    case u.ChannelTypes.GUILD_VOICE:
                        return null;
                    case u.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return t = e, [{
                            setting: u.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? d.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: u.UserNotificationSettings.ONLY_MENTIONS,
                            label: d.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: u.UserNotificationSettings.NO_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return n = e, [{
                            setting: u.UserNotificationSettings.NULL,
                            label: null != n.parent_id ? d.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: u.UserNotificationSettings.ALL_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: u.UserNotificationSettings.ONLY_MENTIONS,
                            label: d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: u.UserNotificationSettings.NO_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_NOTHING
                        }]
                }
            }

            function f(e) {
                let t = e.getGuildId(),
                    n = e.id,
                    f = (0, i.useStateFromStores)([r.default], () => r.default.getChannelOverrides(t)[n], [t, n]),
                    c = (0, i.useStateFromStores)([r.default], () => {
                        let n = u.UserNotificationSettings.NULL;
                        return null != e.parent_id && (n = r.default.getChannelMessageNotifications(t, e.parent_id)), n !== u.UserNotificationSettings.NULL ? n : r.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    E = (0, i.useStateFromStores)([r.default], () => r.default.getNewForumThreadsCreated(e)),
                    _ = null == f ? u.UserNotificationSettings.NULL : f.message_notifications,
                    S = o(e);
                return null == S ? null : (0, a.jsxs)(a.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: d.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: E,
                            action: () => l.default.setForumThreadsCreated(e, !E)
                        }), (0, a.jsx)(s.MenuSeparator, {})]
                    }) : null, S.map(e => {
                        let {
                            setting: i,
                            label: r
                        } = e;
                        return (0, a.jsx)(s.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(i),
                            label: r,
                            subtext: i === u.UserNotificationSettings.NULL ? function(e) {
                                switch (e) {
                                    case u.UserNotificationSettings.ALL_MESSAGES:
                                        return d.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case u.UserNotificationSettings.ONLY_MENTIONS:
                                        return d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case u.UserNotificationSettings.NO_MESSAGES:
                                        return d.default.Messages.FORM_LABEL_NOTHING;
                                    case u.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(c) : void 0,
                            action: () => {
                                var e;
                                return e = i, void(null != t && l.default.updateChannelOverrideSettings(t, n, {
                                    message_notifications: e
                                }))
                            },
                            checked: i === _
                        }, i)
                    })]
                })
            }

            function c(e) {
                var t, n;
                let l = f(e),
                    c = (0, i.useStateFromStores)([r.default], () => r.default.resolvedMessageNotifications(e), [e]),
                    E = (0, i.useStateFromStores)([r.default], () => r.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    _ = null == E ? u.UserNotificationSettings.NULL : E.message_notifications,
                    S = _ === u.UserNotificationSettings.NULL && e.isGuildStageVoice() ? d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = o(e)) || void 0 === n ? void 0 : null === (t = n.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === c
                    })) || void 0 === t ? void 0 : t.label;
                return null != l ? (0, a.jsx)(s.MenuItem, {
                    id: "channel-notifications",
                    label: d.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: S,
                    children: l
                }) : null
            }
        },
        339876: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("629220"),
                r = n("512395"),
                u = n("282109"),
                d = n("49111"),
                o = n("782340");

            function f(e) {
                let t = (0, r.useOptInEnabledForGuild)(e.guild_id),
                    n = (0, i.useStateFromStores)([u.default], () => u.default.isChannelOptedIn(e.guild_id, e.id)),
                    f = (0, i.useStateFromStores)([u.default], () => null != e.parent_id && u.default.isChannelOptedIn(e.guild_id, e.parent_id)),
                    c = (0, i.useStateFromStores)([u.default], () => u.default.isFavorite(e.guild_id, e.id)),
                    E = () => {
                        (0, l.setOptInChannel)(e.guild_id, e.id, !n, {
                            section: d.AnalyticsSections.CONTEXT_MENU
                        })
                    },
                    _ = () => {
                        null != e.parent_id && (0, l.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                            section: d.AnalyticsSections.CONTEXT_MENU
                        })
                    };
                return !t || e.isThread() ? null : e.isCategory() ? (0, a.jsx)(s.MenuItem, {
                    id: "opt-into-category",
                    label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                    action: () => E()
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: c ? o.default.Messages.REMOVE_FAVORITE : o.default.Messages.ADD_FAVORITE,
                        action: () => {
                            (0, l.setIsFavorite)(e.guild_id, e.id, !c, {
                                section: d.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), f ? (0, a.jsx)(s.MenuItem, {
                        id: "opt-out-category",
                        label: o.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => _()
                    }) : (0, a.jsx)(s.MenuItem, {
                        id: "opt-into-channel",
                        label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                        action: () => E()
                    })]
                })
            }
        },
        809937: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("483226"),
                r = n("44574"),
                u = n("811400"),
                d = n("282109"),
                o = n("627869"),
                f = n("782340");

            function c(e) {
                let t = (0, u.useGuildUnreadSetting)(e),
                    n = (0, r.useGuildUnreadsExperiment)(),
                    c = (0, i.useStateFromStores)([d.default], () => d.default.isGuildUnreadSettingEnabled(e.guild_id)),
                    E = function(e) {
                        var t;
                        let n = (0, u.useGuildUnreadSetting)(e);
                        let i = (t = e, [{
                                setting: o.UserUnreadSettings.NULL,
                                label: null != t.parent_id ? f.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : f.default.Messages.FORM_LABEL_DEFAULT
                            }, {
                                setting: o.UserUnreadSettings.ALL_MESSAGES,
                                label: f.default.Messages.FORM_LABEL_ALL_MESSAGES
                            }, {
                                setting: o.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS,
                                label: f.default.Messages.HIGHLIGHTS_AND_MENTIONS
                            }]),
                            r = t => {
                                (0, l.setChannelUnreadSetting)(e.guild_id, e.id, t)
                            };
                        return (0, a.jsx)(a.Fragment, {
                            children: i.map(e => {
                                let {
                                    setting: t,
                                    label: i
                                } = e;
                                return (0, a.jsx)(s.MenuRadioItem, {
                                    group: "channel-unreads",
                                    id: "".concat(t),
                                    label: i,
                                    subtext: t === o.UserUnreadSettings.NULL ? f.default.Messages.HIGHLIGHTS_AND_MENTIONS : void 0,
                                    action: () => r(t),
                                    checked: t === n
                                }, t)
                            })
                        })
                    }(e);
                return n && c ? (0, a.jsx)(s.MenuItem, {
                    id: "channel-unreads",
                    label: f.default.Messages.UNREAD_SETTINGS,
                    subtext: t === o.UserUnreadSettings.ALL_MESSAGES ? f.default.Messages.FORM_LABEL_ALL_MESSAGES : f.default.Messages.HIGHLIGHTS_AND_MENTIONS,
                    children: E
                }) : null
            }
        },
        200008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addFavoriteChannel: function() {
                    return c
                },
                removeFavoriteChannel: function() {
                    return E
                },
                setFavoriteChannelNickname: function() {
                    return _
                },
                addFavoriteCategory: function() {
                    return S
                },
                removeFavoriteCategory: function() {
                    return g
                },
                updateFavoriteChannels: function() {
                    return N
                },
                toggleFavoriteServerMuted: function() {
                    return A
                }
            });
            var a = n("249654"),
                i = n("151426"),
                s = n("872173"),
                l = n("42203"),
                r = n("957255"),
                u = n("379881"),
                d = n("843455");

            function o() {
                let e = u.default.getFavoriteChannels(),
                    t = 1;
                for (let n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function f(e) {
                for (let t in e) {
                    let n = e[t];
                    if (null == n) {
                        delete e[t];
                        continue
                    }
                    if (n.type === i.FavoriteChannelType.CATEGORY) continue;
                    let a = l.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !r.default.can(d.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = u.default.isFavorite(e);
                !n && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: o(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = u.default.getFavorite(e);
                null != t && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e, t) {
                let n = u.default.isFavorite(e);
                n && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S(e) {
                let t = a.default.fromTimestamp(Date.now());
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = i.FavoriteChannel.create({
                        nickname: e,
                        type: i.FavoriteChannelType.CATEGORY,
                        position: o(),
                        parentId: "0"
                    })
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function g(e) {
                E(e)
            }

            function N(e) {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function A() {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        20209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("446674"),
                i = n("162771"),
                s = n("49111");

            function l() {
                let e = (0, a.useStateFromStores)([i.default], () => i.default.getGuildId());
                return e === s.FAVORITES
            }
        },
        390008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("162771"),
                r = n("49111"),
                u = n("782340");

            function d(e) {
                let t = (0, i.useStateFromStores)([l.default], () => l.default.getGuildId());
                return __OVERLAY__ || t !== r.FAVORITES ? null : (0, a.jsx)(s.MenuItem, {
                    id: "set-channel-nickname",
                    label: u.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("353228").then(n.bind(n, "353228"));
                            return n => (0, a.jsx)(t, {
                                ...n,
                                channelId: e.id
                            })
                        })
                    }
                })
            }
        },
        483226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setChannelUnreadSetting: function() {
                    return d
                },
                setGuildUnreadSetting: function() {
                    return o
                },
                setGuildUnreadsLastCleared: function() {
                    return f
                }
            });
            var a = n("913144"),
                i = n("519705"),
                s = n("282109"),
                l = n("568734"),
                r = n("627869"),
                u = n("397336");

            function d(e, t, n) {
                let a = s.default.getGuildChannelFlags(e, t);
                a = (0, l.setFlag)(a, u.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n === r.UserUnreadSettings.ALL_MESSAGES), a = (0, l.setFlag)(a, u.ChannelNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, n === r.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS), i.default.updateChannelOverrideSettings(e, t, {
                    flags: a
                })
            }

            function o(e, t) {
                let n = s.default.getGuildFlags(e);
                n = (0, l.setFlag)(n, u.GuildNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, t), n = (0, l.setFlag)(n, u.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !t), i.default.updateGuildNotificationSettings(e, {
                    flags: n
                })
            }

            function f(e) {
                a.default.dispatch({
                    type: "GUILD_UNREADS_SET_LAST_CLEARED",
                    guildId: e
                })
            }
        }
    }
]);