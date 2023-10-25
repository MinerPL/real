(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63930"], {
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("920040");
            n("773670");
            var s = n("685665");

            function i(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: i
                    } = (0, s.default)(t);
                    return (0, a.jsx)(i, {
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
                    return p
                }
            });
            var a = n("920040");
            n("773670");
            var s = n("77078"),
                i = n("272030"),
                l = n("158534"),
                r = n("812204"),
                u = n("861370"),
                d = n("20209"),
                o = n("390008"),
                f = n("178261"),
                c = n("852275"),
                E = n("963150"),
                _ = n("655235"),
                g = n("308798"),
                S = n("47006"),
                N = n("333835"),
                M = n("531674"),
                A = n("619436"),
                C = n("339876"),
                L = n("809937"),
                h = n("782340");

            function T(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, N.default)(t), r = (0, M.default)(t), d = (0, A.default)(t), E = (0, c.default)(t), g = (0, f.default)(t), S = (0, o.default)(t), C = (0, _.default)(t), L = (0, u.default)({
                    id: t.id,
                    label: h.default.Messages.COPY_ID_CHANNEL
                });
                return (0, a.jsxs)(s.Menu, {
                    navId: "channel-context",
                    onClose: i.closeContextMenu,
                    "aria-label": h.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(s.MenuGroup, {
                        children: l
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [r, d]
                    }), (0, a.jsxs)(s.MenuGroup, {
                        children: [E, g, S]
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: C
                    }), (0, a.jsx)(s.MenuGroup, {
                        children: L
                    })]
                })
            }

            function O(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, r = (0, N.default)(t), d = (0, M.default)(t), _ = (0, A.default)(t), T = (0, c.default)(t), O = (0, f.default)(t), p = (0, S.default)(t), I = (0, o.default)(t), v = (0, E.default)(t, n), U = (0, g.default)(t), F = (0, u.default)({
                    id: t.id,
                    label: h.default.Messages.COPY_ID_CHANNEL
                }), m = (0, C.default)(t), G = (0, L.default)(t);
                return (0, a.jsxs)(s.Menu, {
                    navId: "channel-context",
                    onClose: i.closeContextMenu,
                    "aria-label": h.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(s.MenuGroup, {
                        children: r
                    }, "mark-as-read"), (0, a.jsxs)(s.MenuGroup, {
                        children: [m, T, O]
                    }, "channel-actions"), (0, a.jsxs)(s.MenuGroup, {
                        children: [d, _, G]
                    }, "notifications"), (0, a.jsxs)(s.MenuGroup, {
                        children: [p, I, v, U]
                    }, "admin-actions"), (0, a.jsx)(s.MenuGroup, {
                        children: F
                    }, "developer-actions")]
                })
            }
            var p = (0, l.default)(function(e) {
                let t = (0, d.default)();
                return t ? (0, a.jsx)(T, {
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
            var a = n("920040");
            n("773670");
            var s = n("498225"),
                i = n("77078"),
                l = n("820542"),
                r = n("870691"),
                u = n("42203"),
                d = n("49111"),
                o = n("782340");

            function f(e) {
                let t = (0, s.useStateFromStores)([r.default, u.default], () => {
                    let t = u.default.getMutableBasicGuildChannelsForGuild(e.guild_id),
                        n = Object.values(t).filter(e => e.type === d.ChannelTypes.GUILD_CATEGORY);
                    return 0 === n.length || n.every(e => r.default.isCollapsed(e.id))
                });
                return t ? null : (0, a.jsx)(i.MenuItem, {
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
            var a = n("920040");
            n("773670");
            var s = n("498225"),
                i = n("77078"),
                l = n("820542"),
                r = n("870691"),
                u = n("782340");

            function d(e) {
                let t = (0, s.useStateFromStores)([r.default], () => r.default.isCollapsed(e.id), [e.id]);
                return (0, a.jsx)(i.MenuCheckboxItem, {
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
            var a = n("920040");
            n("773670");
            var s = n("498225"),
                i = n("77078"),
                l = n("957255"),
                r = n("49111"),
                u = n("782340");

            function d(e, t) {
                let d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    o = (0, s.useStateFromStores)([l.default], () => l.default.can(r.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !o) return null;
                let f = () => {
                    (0, i.openModalLazy)(async () => {
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
                        return (0, a.jsx)(i.MenuItem, {
                            id: "create-text-channel",
                            label: u.default.Messages.CREATE_TEXT_CHANNEL,
                            action: f
                        });
                    case r.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(i.MenuItem, {
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
            var a = n("920040");
            n("773670");
            var s = n("77078"),
                i = n("200008"),
                l = n("782340");

            function r(e) {
                return (0, a.jsx)(s.MenuItem, {
                    id: "delete-channel",
                    label: l.default.Messages.DELETE_CATEGORY,
                    color: "danger",
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), (0, i.removeFavoriteCategory)(e.id)
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
            var a = n("920040");
            n("773670");
            var s = n("498225"),
                i = n("77078"),
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
                    g = (0, s.useStateFromStores)([o.default], () => e.isOwner(o.default.getId()), [e]),
                    {
                        canManageChannel: S,
                        canAccessChannel: N
                    } = (0, s.useStateFromStoresObject)([f.default], () => ({
                        canAccessChannel: f.default.can(e.accessPermissions, e),
                        canManageChannel: f.default.can(e.isThread() ? c.Permissions.MANAGE_THREADS : c.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    M = (0, s.useStateFromStores)([d.default], () => null !== (t = d.default.getCount(e.id)) && void 0 !== t ? t : 0, [e.id]),
                    {
                        firstMessage: A
                    } = (0, s.useStateFromStores)([u.default], () => u.default.getMessage(e.id), [e.id]),
                    C = _ && (S || g && M < 1),
                    L = _ && g && !S && M > 0 && null != A;
                return N && (S || C || L) ? (0, a.jsx)(i.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === c.ChannelTypes.GUILD_CATEGORY) return E.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return C ? E.default.Messages.DELETE_FORUM_POST : E.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return E.default.Messages.DELETE_THREAD;
                        return E.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), L ? r.default.deleteMessage(e.id, e.id) : l.default.deleteChannel(e.id)
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
            var a = n("920040");
            n("773670");
            var s = n("498225"),
                i = n("77078"),
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
                } = (0, s.useStateFromStoresObject)([r.default], () => ({
                    canManageChannels: r.default.can(u.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: r.default.can(u.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: r.default.can(u.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: r.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && f && (t || n || o) ? (0, a.jsx)(i.MenuItem, {
                    id: "edit-channel",
                    label: e.type === u.ChannelTypes.GUILD_CATEGORY ? d.default.Messages.EDIT_CATEGORY : d.default.Messages.EDIT_CHANNEL,
                    action: () => l.default.open(e.id)
                }) : null
            }
        },
        333835: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var a = n("920040");
            n("773670");
            var s = n("498225"),
                i = n("77078"),
                l = n("267363"),
                r = n("154695"),
                u = n("689275"),
                d = n("755624"),
                o = n("233069"),
                f = n("245997"),
                c = n("660478"),
                E = n("49111"),
                _ = n("782340");

            function g(e) {
                let t = function(e) {
                    let t = (0, r.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, s.useStateFromStores)([c.default, f.default, u.default, d.default], () => {
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
                                    s = u.default.getThreadsForGuild(e.guild_id);
                                for (let e in s)
                                    if (a.has(e)) {
                                        for (let t in s[e])
                                            if (d.default.hasJoined(t) && !d.default.isMuted(t) && c.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, a.jsx)(i.MenuItem, {
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
            var a = n("920040");
            n("773670");
            var s = n("498225"),
                i = n("77078"),
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
                    f = (0, s.useStateFromStores)([r.default], () => r.default.getChannelOverrides(t)[n], [t, n]),
                    c = (0, s.useStateFromStores)([r.default], () => {
                        let n = u.UserNotificationSettings.NULL;
                        return null != e.parent_id && (n = r.default.getChannelMessageNotifications(t, e.parent_id)), n !== u.UserNotificationSettings.NULL ? n : r.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    E = (0, s.useStateFromStores)([r.default], () => r.default.getNewForumThreadsCreated(e)),
                    _ = null == f ? u.UserNotificationSettings.NULL : f.message_notifications,
                    g = o(e);
                return null == g ? null : (0, a.jsxs)(a.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(i.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: d.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: E,
                            action: () => l.default.setForumThreadsCreated(e, !E)
                        }), (0, a.jsx)(i.MenuSeparator, {})]
                    }) : null, g.map(e => {
                        let {
                            setting: s,
                            label: r
                        } = e;
                        return (0, a.jsx)(i.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(s),
                            label: r,
                            subtext: s === u.UserNotificationSettings.NULL ? function(e) {
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
                                return e = s, void(null != t && l.default.updateChannelOverrideSettings(t, n, {
                                    message_notifications: e
                                }))
                            },
                            checked: s === _
                        }, s)
                    })]
                })
            }

            function c(e) {
                var t, n;
                let l = f(e),
                    c = (0, s.useStateFromStores)([r.default], () => r.default.resolvedMessageNotifications(e), [e]),
                    E = (0, s.useStateFromStores)([r.default], () => r.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    _ = null == E ? u.UserNotificationSettings.NULL : E.message_notifications,
                    g = _ === u.UserNotificationSettings.NULL && e.isGuildStageVoice() ? d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = o(e)) || void 0 === n ? void 0 : null === (t = n.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === c
                    })) || void 0 === t ? void 0 : t.label;
                return null != l ? (0, a.jsx)(i.MenuItem, {
                    id: "channel-notifications",
                    label: d.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: g,
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
            var a = n("920040");
            n("773670");
            var s = n("498225"),
                i = n("77078"),
                l = n("629220"),
                r = n("512395"),
                u = n("282109"),
                d = n("49111"),
                o = n("782340");

            function f(e) {
                let t = (0, r.useOptInEnabledForGuild)(e.guild_id),
                    n = (0, s.useStateFromStores)([u.default], () => u.default.isChannelOptedIn(e.guild_id, e.id)),
                    f = (0, s.useStateFromStores)([u.default], () => null != e.parent_id && u.default.isChannelOptedIn(e.guild_id, e.parent_id)),
                    c = (0, s.useStateFromStores)([u.default], () => u.default.isFavorite(e.guild_id, e.id)),
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
                return !t || e.isThread() ? null : e.isCategory() ? (0, a.jsx)(i.MenuItem, {
                    id: "opt-into-category",
                    label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                    action: () => E()
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: c ? o.default.Messages.REMOVE_FAVORITE : o.default.Messages.ADD_FAVORITE,
                        action: () => {
                            (0, l.setIsFavorite)(e.guild_id, e.id, !c, {
                                section: d.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), f ? (0, a.jsx)(i.MenuItem, {
                        id: "opt-out-category",
                        label: o.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => _()
                    }) : (0, a.jsx)(i.MenuItem, {
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
            var a = n("920040");
            n("773670");
            var s = n("498225"),
                i = n("77078"),
                l = n("483226"),
                r = n("44574"),
                u = n("811400"),
                d = n("282109"),
                o = n("627869"),
                f = n("782340");

            function c(e) {
                let t = (0, u.useGuildUnreadSetting)(e),
                    n = (0, r.useGuildUnreadsExperiment)(),
                    c = (0, s.useStateFromStores)([d.default], () => d.default.isGuildUnreadSettingEnabled(e.guild_id)),
                    E = function(e) {
                        var t;
                        let n = (0, u.useGuildUnreadSetting)(e);
                        let s = (t = e, [{
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
                            children: s.map(e => {
                                let {
                                    setting: t,
                                    label: s
                                } = e;
                                return (0, a.jsx)(i.MenuRadioItem, {
                                    group: "channel-unreads",
                                    id: "".concat(t),
                                    label: s,
                                    subtext: t === o.UserUnreadSettings.NULL ? f.default.Messages.HIGHLIGHTS_AND_MENTIONS : void 0,
                                    action: () => r(t),
                                    checked: t === n
                                }, t)
                            })
                        })
                    }(e);
                return n && c ? (0, a.jsx)(i.MenuItem, {
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
                    return g
                },
                removeFavoriteCategory: function() {
                    return S
                },
                updateFavoriteChannels: function() {
                    return N
                },
                toggleFavoriteServerMuted: function() {
                    return M
                }
            });
            var a = n("500947"),
                s = n("975162"),
                i = n("872173"),
                l = n("42203"),
                r = n("957255"),
                u = n("379881"),
                d = n("809924");

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
                    if (n.type === s.FavoriteChannelType.CATEGORY) continue;
                    let a = l.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !r.default.can(d.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = u.default.isFavorite(e);
                !n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = s.FavoriteChannel.create({
                        nickname: "",
                        type: s.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: o(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = u.default.getFavorite(e);
                null != t && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === s.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e, t) {
                let n = u.default.isFavorite(e);
                n && i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function g(e) {
                let t = a.default.fromTimestamp(Date.now());
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = s.FavoriteChannel.create({
                        nickname: e,
                        type: s.FavoriteChannelType.CATEGORY,
                        position: o(),
                        parentId: "0"
                    })
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S(e) {
                E(e)
            }

            function N(e) {
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, i.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function M() {
                i.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        20209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("498225"),
                s = n("162771"),
                i = n("49111");

            function l() {
                let e = (0, a.useStateFromStores)([s.default], () => s.default.getGuildId());
                return e === i.FAVORITES
            }
        },
        390008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("920040");
            n("773670");
            var s = n("498225"),
                i = n("77078"),
                l = n("162771"),
                r = n("49111"),
                u = n("782340");

            function d(e) {
                let t = (0, s.useStateFromStores)([l.default], () => l.default.getGuildId());
                return __OVERLAY__ || t !== r.FAVORITES ? null : (0, a.jsx)(i.MenuItem, {
                    id: "set-channel-nickname",
                    label: u.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, i.openModalLazy)(async () => {
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
        }
    }
]);