(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65523"], {
        126501: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("913144"),
                l = n("679428"),
                u = n("282109"),
                i = {
                    update(e) {
                        a.default.dispatch({
                            type: "CHANNEL_COLLAPSE",
                            channelId: e
                        })
                    },
                    toggleCollapseGuild(e) {
                        l.default.saveUserGuildSettings(e, {
                            hide_muted_channels: !u.default.isGuildCollapsed(e)
                        }), a.default.dispatch({
                            type: "GUILD_TOGGLE_COLLAPSE_MUTED",
                            guildId: e
                        })
                    }
                }
        },
        168003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                i = n("272030"),
                s = n("838446"),
                r = n("158534"),
                d = n("846883"),
                o = n("812204"),
                f = n("861370"),
                c = n("20209"),
                E = n("972701"),
                S = n("390008"),
                _ = n("41205"),
                T = n("379304"),
                g = n("534222"),
                N = n("601131"),
                A = n("834052"),
                p = n("715243"),
                M = n("458574"),
                C = n("963150"),
                O = n("308798"),
                I = n("47006"),
                v = n("809259"),
                h = n("878526"),
                L = n("44141"),
                m = n("531674"),
                R = n("619436"),
                y = n("339876"),
                G = n("702741"),
                U = n("809937"),
                F = n("782000"),
                P = n("45593"),
                D = n("604887"),
                x = n("958936"),
                b = n("49111"),
                j = n("782340");

            function V(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: s
                } = e, r = t.isGuildStageVoice(), o = (0, l.useStateFromStores)([A.default], () => r ? A.default.getStageInstanceByChannel(t.id) : void 0, [r, t.id]), c = (0, M.default)(t), T = (0, g.useActiveEvent)(t.id), p = (0, N.default)(null == T ? void 0 : T.id, n, t), C = (0, F.default)(t, o), O = (0, E.default)(t), h = (0, S.default)(t), L = (0, _.default)(t), m = (0, v.default)(t), y = (0, R.default)(t), U = (0, I.default)(t), P = (0, x.default)(t, n), D = (0, f.default)({
                    id: t.id,
                    label: j.default.Messages.COPY_ID_CHANNEL
                }), b = (0, G.default)(t), V = (0, d.default)(t);
                return (0, a.jsxs)(u.Menu, {
                    navId: "channel-context",
                    onClose: i.closeContextMenu,
                    "aria-label": j.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, a.jsx)(u.MenuGroup, {
                        children: null != T ? p : C
                    }), (0, a.jsxs)(u.MenuGroup, {
                        children: [L, h, O]
                    }), (0, a.jsxs)(u.MenuGroup, {
                        children: [m, y, U]
                    }), (0, a.jsx)(u.MenuGroup, {
                        children: V
                    }), (0, a.jsxs)(u.MenuGroup, {
                        children: [P, c]
                    }), (0, a.jsx)(u.MenuGroup, {
                        children: b
                    }), (0, a.jsx)(u.MenuGroup, {
                        children: D
                    })]
                })
            }

            function k(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: s
                } = e, r = t.isGuildStageVoice(), o = (0, l.useStateFromStores)([A.default], () => r ? A.default.getStageInstanceByChannel(t.id) : void 0, [r, t.id]), c = (0, L.default)(t), S = (0, M.default)(t), _ = (0, g.useActiveEvent)(t.id), b = (0, N.default)(null == _ ? void 0 : _.id, n, t), V = (0, F.default)(t, o), k = (0, E.default)(t), w = (0, v.default)(t), B = (0, R.default)(t), Y = (0, I.default)(t), H = (0, h.default)(t, n, o), X = (0, x.default)(t, n), q = (0, P.default)(t, n), Q = (0, D.default)(t, n.id), W = (0, p.default)(t, n), J = (0, C.default)(t, n), K = (0, O.default)(t), z = (0, f.default)({
                    id: t.id,
                    label: j.default.Messages.COPY_ID_CHANNEL
                }), Z = (0, G.default)(t), $ = (0, d.default)(t), ee = (0, y.default)(t), et = (0, T.default)(t), en = (0, m.default)(t), ea = (0, U.default)(t);
                return (0, a.jsxs)(u.Menu, {
                    navId: "channel-context",
                    onClose: i.closeContextMenu,
                    "aria-label": j.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, a.jsx)(u.MenuGroup, {
                        children: null != _ ? b : V
                    }), (0, a.jsx)(u.MenuGroup, {
                        children: c
                    }, "mark-as-read"), (0, a.jsxs)(u.MenuGroup, {
                        children: [H, $, ee, k, S]
                    }, "channel-actions"), (0, a.jsxs)(u.MenuGroup, {
                        children: [Q, X, q, w, et, Z]
                    }, "voice-actions"), (0, a.jsxs)(u.MenuGroup, {
                        children: [en, B, ea]
                    }, "notifications"), (0, a.jsxs)(u.MenuGroup, {
                        children: [Y, W, J, K]
                    }, "admin-actions"), (0, a.jsx)(u.MenuGroup, {
                        children: z
                    }, "developer-actions")]
                })
            }
            var w = (0, r.default)((0, s.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, a.jsx)(V, {
                    ...e
                }) : (0, a.jsx)(k, {
                    ...e
                })
            }, {
                object: b.AnalyticsObjects.CONTEXT_MENU
            }), [o.default.CONTEXT_MENU, o.default.CHANNEL_LIST_VOICE_CHANNEL_MENU])
        },
        458574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("281071"),
                u = n("65597"),
                i = n("77078"),
                s = n("867965"),
                r = n("42203"),
                d = n("404008"),
                o = n("49111"),
                f = n("782340");

            function c(e, t, n) {
                let c = (0, u.default)([r.default], () => r.default.getChannel(e.parent_id));
                return (0, a.jsx)(i.MenuItem, {
                    id: "channel-copy-link",
                    label: f.default.Messages.COPY_LINK,
                    action: () => {
                        e.isForumPost() && (0, s.trackForumPostLinkCopied)({
                            postId: e.id,
                            location: {
                                section: o.AnalyticsSections.CONTEXT_MENU
                            }
                        }), (0, l.copy)((0, d.getChannelLinkToCopy)(e, c, t, n))
                    }
                })
            }
        },
        308798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                i = n("18054"),
                s = n("819689"),
                r = n("430475"),
                d = n("610730"),
                o = n("271938"),
                f = n("957255"),
                c = n("49111"),
                E = n("782340");

            function S(e) {
                var t;
                let S = e.isForumPost(),
                    _ = (0, l.useStateFromStores)([o.default], () => e.isOwner(o.default.getId()), [e]),
                    {
                        canManageChannel: T,
                        canAccessChannel: g
                    } = (0, l.useStateFromStoresObject)([f.default], () => ({
                        canAccessChannel: f.default.can(e.accessPermissions, e),
                        canManageChannel: f.default.can(e.isThread() ? c.Permissions.MANAGE_THREADS : c.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    N = (0, l.useStateFromStores)([d.default], () => null !== (t = d.default.getCount(e.id)) && void 0 !== t ? t : 0, [e.id]),
                    {
                        firstMessage: A
                    } = (0, l.useStateFromStores)([r.default], () => r.default.getMessage(e.id), [e.id]),
                    p = S && (T || _ && N < 1),
                    M = S && _ && !T && N > 0 && null != A;
                return g && (T || p || M) ? (0, a.jsx)(u.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === c.ChannelTypes.GUILD_CATEGORY) return E.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return p ? E.default.Messages.DELETE_FORUM_POST : E.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return E.default.Messages.DELETE_THREAD;
                        return E.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), M ? s.default.deleteMessage(e.id, e.id) : i.default.deleteChannel(e.id)
                            },
                            channel: e
                        })
                    })
                }) : null
            }
        },
        809259: function(e, t, n) {
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
                i = n("126501"),
                s = n("816092"),
                r = n("782340");

            function d(e) {
                let t = (0, l.useStateFromStores)([s.default], () => s.default.isCollapsed(e.id), [e.id]);
                return __OVERLAY__ ? null : (0, a.jsx)(u.MenuCheckboxItem, {
                    id: "hide-voice-names",
                    label: r.default.Messages.VOICE_CHANNEL_HIDE_NAMES,
                    action: () => i.default.update(e.id),
                    checked: t
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
            var l = n("446674"),
                u = n("77078"),
                i = n("519705"),
                s = n("282109"),
                r = n("49111"),
                d = n("782340");

            function o(e) {
                var t, n;
                switch (e.type) {
                    case r.ChannelTypes.GUILD_VOICE:
                        return null;
                    case r.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return t = e, [{
                            setting: r.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? d.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: r.UserNotificationSettings.ONLY_MENTIONS,
                            label: d.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: r.UserNotificationSettings.NO_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return n = e, [{
                            setting: r.UserNotificationSettings.NULL,
                            label: null != n.parent_id ? d.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: r.UserNotificationSettings.ALL_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: r.UserNotificationSettings.ONLY_MENTIONS,
                            label: d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: r.UserNotificationSettings.NO_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_NOTHING
                        }]
                }
            }

            function f(e) {
                let t = e.getGuildId(),
                    n = e.id,
                    f = (0, l.useStateFromStores)([s.default], () => s.default.getChannelOverrides(t)[n], [t, n]),
                    c = (0, l.useStateFromStores)([s.default], () => {
                        let n = r.UserNotificationSettings.NULL;
                        return null != e.parent_id && (n = s.default.getChannelMessageNotifications(t, e.parent_id)), n !== r.UserNotificationSettings.NULL ? n : s.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    E = (0, l.useStateFromStores)([s.default], () => s.default.getNewForumThreadsCreated(e)),
                    S = null == f ? r.UserNotificationSettings.NULL : f.message_notifications,
                    _ = o(e);
                return null == _ ? null : (0, a.jsxs)(a.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(u.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: d.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: E,
                            action: () => i.default.setForumThreadsCreated(e, !E)
                        }), (0, a.jsx)(u.MenuSeparator, {})]
                    }) : null, _.map(e => {
                        let {
                            setting: l,
                            label: s
                        } = e;
                        return (0, a.jsx)(u.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(l),
                            label: s,
                            subtext: l === r.UserNotificationSettings.NULL ? function(e) {
                                switch (e) {
                                    case r.UserNotificationSettings.ALL_MESSAGES:
                                        return d.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case r.UserNotificationSettings.ONLY_MENTIONS:
                                        return d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case r.UserNotificationSettings.NO_MESSAGES:
                                        return d.default.Messages.FORM_LABEL_NOTHING;
                                    case r.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(c) : void 0,
                            action: () => {
                                var e;
                                return e = l, void(null != t && i.default.updateChannelOverrideSettings(t, n, {
                                    message_notifications: e
                                }))
                            },
                            checked: l === S
                        }, l)
                    })]
                })
            }

            function c(e) {
                var t, n;
                let i = f(e),
                    c = (0, l.useStateFromStores)([s.default], () => s.default.resolvedMessageNotifications(e), [e]),
                    E = (0, l.useStateFromStores)([s.default], () => s.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    S = null == E ? r.UserNotificationSettings.NULL : E.message_notifications,
                    _ = S === r.UserNotificationSettings.NULL && e.isGuildStageVoice() ? d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = o(e)) || void 0 === n ? void 0 : null === (t = n.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === c
                    })) || void 0 === t ? void 0 : t.label;
                return null != i ? (0, a.jsx)(u.MenuItem, {
                    id: "channel-notifications",
                    label: d.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: _,
                    children: i
                }) : null
            }
        },
        702741: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                u = n("377114"),
                i = n("834052"),
                s = n("644224"),
                r = n("907566"),
                d = n("782340");

            function o(e) {
                s.default.trackExposure({
                    location: "d67daf_1"
                });
                let t = s.default.useExperiment({
                        location: "d67daf_2"
                    }, {
                        autoTrackExposure: !1
                    }),
                    n = i.default.isLive(e.id);
                return e.isGuildStageVoice() && n && t.reportModal ? (0, a.jsx)(l.MenuItem, {
                    id: "report-stage",
                    label: d.default.Messages.REPORT_MODAL_REPORT_STAGE_MENU_ITEM,
                    action: () => (0, u.showReportModalForStageChannel)(e),
                    icon: r.default,
                    color: "danger"
                }) : null
            }
        },
        782e3: function(e, t, n) {
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
                i = n("244480"),
                s = n("923510"),
                r = n("957255"),
                d = n("782340");

            function o(e, t) {
                let n = (0, l.useStateFromStores)([r.default], () => r.default.can(s.MODERATE_STAGE_CHANNEL_PERMISSIONS, e), [e]);
                return null != t && n ? (0, a.jsx)(u.MenuItem, {
                    id: "end-stage",
                    label: d.default.Messages.END_STAGE,
                    color: "danger",
                    action: function() {
                        (0, u.openModal)(t => (0, a.jsx)(u.ConfirmModal, {
                            ...t,
                            header: d.default.Messages.END_STAGE_TITLE,
                            confirmText: d.default.Messages.END_STAGE,
                            cancelText: d.default.Messages.CANCEL,
                            onConfirm: () => (0, i.endStage)(e),
                            children: (0, a.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "header-secondary",
                                children: d.default.Messages.EXPLICIT_END_STAGE_SUBTITLE
                            })
                        }))
                    }
                }) : null
            }
        },
        45593: function(e, t, n) {
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
                i = n("18054"),
                s = n("746164"),
                r = n("261552"),
                d = n("957255"),
                o = n("49111"),
                f = n("782340");

            function c(e, t) {
                var n;
                let c = (0, l.useStateFromStores)([d.default], () => d.default.can(o.Permissions.MANAGE_CHANNELS, t)),
                    E = s.default.useExperiment({
                        guildId: null !== (n = t.id) && void 0 !== n ? n : "",
                        location: "0f77e2_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled,
                    S = (0, r.default)(),
                    _ = (null == S ? void 0 : S.channelId) === e.id,
                    T = null != e.status && e.status.length > 0;
                return e.isGuildVoice() && T && E && (c || _) ? (0, a.jsx)(u.MenuItem, {
                    id: "clear-status",
                    label: f.default.Messages.VOICE_CHANNEL_CLEAR_STATUS,
                    action: () => {
                        i.default.updateVoiceChannelStatus(e.id, "")
                    }
                }) : null
            }
        },
        604887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("155823"),
                i = n("987317"),
                s = n("305122"),
                r = n("675961"),
                d = n("957255"),
                o = n("18494"),
                f = n("49111"),
                c = n("782340");

            function E(e, t) {
                let n = (0, l.useStateFromStores)([d.default], () => d.default.can(f.Permissions.CONNECT, e), [e]),
                    E = (0, l.useStateFromStores)([o.default], () => o.default.getVoiceChannelId()),
                    S = (0, r.useCustomJoinSound)(t),
                    _ = E === e.id;
                return e.isGuildVocal() && n && null != S && !_ ? (0, a.jsx)(u.MenuItem, {
                    id: "join-muted-custom-join-sound",
                    label: c.default.Messages.VOICE_CHANNEL_MUTED_CUSTOM_JOIN_SOUND,
                    action: () => {
                        (0, s.muteCustomJoinSound)(e.id), i.default.selectVoiceChannel(e.id)
                    }
                }) : null
            }
        },
        958936: function(e, t, n) {
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
                i = n("255397"),
                s = n("393414"),
                r = n("957255"),
                d = n("49111"),
                o = n("782340");

            function f(e, t) {
                let n = (0, l.useStateFromStores)([r.default], () => r.default.can(d.Permissions.CONNECT, e), [e]);
                return n && e.isGuildVocal() ? (0, a.jsx)(u.MenuItem, {
                    id: "open-chat",
                    label: o.default.Messages.OPEN_CHAT,
                    action: () => {
                        i.default.updateChatOpen(e.id, !0), (0, s.transitionToGuild)(t.id, e.id)
                    }
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
                    return S
                },
                addFavoriteCategory: function() {
                    return _
                },
                removeFavoriteCategory: function() {
                    return T
                },
                updateFavoriteChannels: function() {
                    return g
                },
                toggleFavoriteServerMuted: function() {
                    return N
                }
            });
            var a = n("249654"),
                l = n("151426"),
                u = n("872173"),
                i = n("42203"),
                s = n("957255"),
                r = n("379881"),
                d = n("843455");

            function o() {
                let e = r.default.getFavoriteChannels(),
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
                    if (n.type === l.FavoriteChannelType.CATEGORY) continue;
                    let a = i.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !s.default.can(d.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = r.default.isFavorite(e);
                !n && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = l.FavoriteChannel.create({
                        nickname: "",
                        type: l.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: o(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = r.default.getFavorite(e);
                null != t && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === l.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S(e, t) {
                let n = r.default.isFavorite(e);
                n && u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e) {
                let t = a.default.fromTimestamp(Date.now());
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = l.FavoriteChannel.create({
                        nickname: e,
                        type: l.FavoriteChannelType.CATEGORY,
                        position: o(),
                        parentId: "0"
                    })
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function T(e) {
                E(e)
            }

            function g(e) {
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, u.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function N() {
                u.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, u.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        889486: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                handoffRemote: function() {
                    return o
                }
            });
            var a = n("627445"),
                l = n.n(a),
                u = n("629109"),
                i = n("987317"),
                s = n("42887"),
                r = n("700507"),
                d = n("780338");

            function o(e, t) {
                var n;
                let a = null !== (n = e.sessionId) && void 0 !== n ? n : "";
                (0, r.remoteDisconnect)(a), (0, r.disconnectRemote)();
                let o = null != t ? t : e.channelId;
                l(null != o, "attempted to transfer to unknown channel"), e.selfMute !== s.default.isSelfMute() && u.default.toggleSelfMute(), e.selfDeaf !== s.default.isSelfDeaf() && u.default.toggleSelfDeaf(), (0, d.default)(o, "discord_client", a), i.default.selectVoiceChannel(o, !1)
            }
        },
        261552: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("446674"),
                l = n("271938"),
                u = n("800762"),
                i = n("76393");

            function s() {
                let e = (0, a.useStateFromStores)([l.default], () => l.default.getId()),
                    t = (0, a.useStateFromStores)([i.default], () => i.default.getRemoteSessionId());
                return (0, a.useStateFromStores)([u.default], () => {
                    var n;
                    return null !== (n = u.default.getVoiceStateForSession(e, t)) && void 0 !== n ? n : void 0
                })
            }
        },
        742898: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("446674"),
                l = n("47319"),
                u = n("449008"),
                i = n("49111");

            function s() {
                return (0, a.useStateFromStoresArray)([l.default], () => [l.default.getAccount(null, i.PlatformTypes.XBOX), l.default.getAccount(null, i.PlatformTypes.PLAYSTATION), l.default.getAccount(null, i.PlatformTypes.PLAYSTATION_STAGING)].filter(u.isNotNullish))
            }
        },
        424024: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("303800"),
                l = n("998564"),
                u = n("420145"),
                i = n("171644");

            function s(e) {
                return null != e ? e === i.GameConsoleTypes.XBOX ? u.default : l.default : a.default
            }
        },
        379304: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("65597"),
                u = n("77078"),
                i = n("926994"),
                s = n("495194"),
                r = n("945956"),
                d = n("800762"),
                o = n("889486"),
                f = n("261552"),
                c = n("742898"),
                E = n("424024"),
                S = n("49111"),
                _ = n("782340");

            function T(e) {
                let t = (0, l.default)([r.default], () => r.default.getChannelId() === e.id),
                    T = (0, f.default)(),
                    g = (null == T ? void 0 : T.channelId) === e.id,
                    N = (0, s.useIsVoiceChannelLocked)(e) && !e.isPrivate(),
                    A = (0, s.default)(e),
                    p = (0, l.default)([d.default], () => d.default.isInChannel(e.id)),
                    M = !p && A || N,
                    C = (0, c.default)();
                if (!g && 0 === C.length) return null;
                let O = t => {
                    if (!t.twoWayLink || t.revoked) {
                        (0, i.default)(t.type, "Console Transfer Item");
                        return
                    }
                    t.type === S.PlatformTypes.XBOX ? (0, u.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("613895").then(n.bind(n, "613895"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channel: e
                        })
                    }) : (t.type === S.PlatformTypes.PLAYSTATION || t.type === S.PlatformTypes.PLAYSTATION_STAGING) && (0, u.openModalLazy)(async () => {
                        let {
                            default: l
                        } = await n.el("962512").then(n.bind(n, "962512"));
                        return n => (0, a.jsx)(l, {
                            ...n,
                            platform: t.type,
                            channel: e
                        })
                    })
                };
                return (0, a.jsx)(a.Fragment, {
                    children: g ? (0, a.jsx)(u.MenuItem, {
                        label: _.default.Messages.TRANSFER_VOICE_TO_DEVICE,
                        id: "handoff",
                        action: () => {
                            (0, o.handoffRemote)(T)
                        },
                        icon: (0, E.default)(void 0),
                        disabled: M
                    }) : C.map(e => (0, a.jsx)(u.MenuItem, {
                        id: "transfer-".concat(e.type, "-").concat(e.id),
                        label: function(e, t) {
                            if (e === S.PlatformTypes.XBOX) return t ? _.default.Messages.TRANSFER_VOICE_TO_XBOX : _.default.Messages.JOIN_ON_XBOX;
                            if (e === S.PlatformTypes.PLAYSTATION) return t ? _.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE : _.default.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
                            if (e === S.PlatformTypes.PLAYSTATION_STAGING) return t ? _.default.Messages.CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE : _.default.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE
                        }(e.type, t),
                        action: () => O(e),
                        icon: (0, E.default)(e.type),
                        disabled: M
                    }, e.id))
                })
            }
        },
        601131: function(e, t, n) {
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
                i = n("817963"),
                s = n("244480"),
                r = n("398604"),
                d = n("322224"),
                o = n("745049"),
                f = n("782340");

            function c(e, t, n) {
                let {
                    canManageGuildEvent: c
                } = (0, i.useManageResourcePermissions)(null != n ? n : t), E = (0, l.useStateFromStores)([r.default], () => r.default.isActive(e)), S = (0, l.useStateFromStores)([r.default], () => r.default.getGuildScheduledEvent(e), [e]), _ = c(S);
                if (null == e || !_ || !E || (null == S ? void 0 : S.entity_type) === o.GuildScheduledEventEntityTypes.EXTERNAL) return null;
                let T = () => {
                    if (null == n ? void 0 : n.isGuildStageVoice()) {
                        (0, s.endStage)(n);
                        return
                    }
                    null != e && d.default.endEvent(e, t.id), (0, u.closeAllModals)()
                };
                return (0, a.jsx)(u.MenuItem, {
                    id: f.default.Messages.END_EVENT,
                    label: f.default.Messages.END_EVENT,
                    action: function() {
                        (0, u.openModal)(e => (0, a.jsx)(u.ConfirmModal, {
                            ...e,
                            header: f.default.Messages.END_EVENT,
                            confirmText: f.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                            cancelText: f.default.Messages.CANCEL,
                            onConfirm: T,
                            children: (0, a.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: f.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                            })
                        }))
                    },
                    color: "danger"
                })
            }
        },
        675961: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CustomSoundType: function() {
                    return l
                },
                useCustomJoinSound: function() {
                    return r
                },
                getCustomJoinSound: function() {
                    return d
                }
            });
            var a, l, u = n("446674"),
                i = n("374363"),
                s = n("846325");

            function r(e) {
                return (0, u.useStateFromStores)([i.default], () => {
                    var t, n;
                    let a = null !== (n = null === (t = i.default.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {};
                    return o(e, a)
                })
            }

            function d(e) {
                var t, n;
                let a = null !== (n = null === (t = i.default.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== n ? n : {};
                return o(e, a)
            }

            function o(e, t) {
                var n, a;
                let u = null === (n = t[e]) || void 0 === n ? void 0 : n.joinSound,
                    i = null === (a = t[s.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID]) || void 0 === a ? void 0 : a.joinSound,
                    r = null != u ? u : i;
                return null != r ? {
                    ...r,
                    type: null != u ? l.GUILD : l.GLOBAL
                } : void 0
            }(a = l || (l = {}))[a.GLOBAL = 0] = "GLOBAL", a[a.GUILD = 1] = "GUILD"
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return N
                },
                inviteUserToStage: function() {
                    return A
                },
                audienceAckRequestToSpeak: function() {
                    return p
                },
                moveSelfToAudience: function() {
                    return M
                },
                setUserSuppress: function() {
                    return C
                },
                moveUserToAudience: function() {
                    return O
                },
                setEveryoneRolePermissionAllowed: function() {
                    return I
                },
                startStage: function() {
                    return v
                },
                editStage: function() {
                    return h
                },
                endStage: function() {
                    return L
                }
            });
            var a = n("627445"),
                l = n.n(a),
                u = n("316693"),
                i = n("872717"),
                s = n("450911");
            n("851387");
            var r = n("798609"),
                d = n("716241"),
                o = n("18494"),
                f = n("800762"),
                c = n("991170"),
                E = n("716214"),
                S = n("230324"),
                _ = n("738983"),
                T = n("808422"),
                g = n("49111");

            function N(e, t) {
                let n = e.getGuildId();
                return l(null != n, "This channel cannot be guildless."), t && (0, d.trackWithMetadata)(g.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, S.getStageChannelMetadata)(e)
                }), i.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function A(e, t) {
                let n = e.getGuildId();
                return l(null != n, "This channel cannot be guildless."), i.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function p(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = null == e ? void 0 : e.getGuildId();
                l(null != a, "This channel cannot be guildless.");
                let u = f.default.getVoiceStateForChannel(e.id),
                    s = (0, T.getAudienceRequestToSpeakState)(u);
                return s === T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, d.trackWithMetadata)(g.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, S.getStageChannelMetadata)(e)
                }), i.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(a),
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

            function M(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return l(null != t, "This channel cannot be guildless."), i.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function C(e, t, n) {
                let a = e.getGuildId();
                return l(null != a, "This channel cannot be guildless."), i.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(a, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function O(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return l(null != n, "This channel cannot be guildless."), C(t, e.id, !0), i.default.patch({
                    url: g.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function I(e, t, n) {
                let a = e.getGuildId();
                l(null != a, "Channel cannot be guildless");
                let i = e.permissionOverwrites[a],
                    d = {
                        id: a,
                        type: r.PermissionOverwriteType.ROLE,
                        allow: c.default.NONE,
                        deny: c.default.NONE,
                        ...i
                    };
                n ? (d.allow = u.default.add(d.allow, t), d.deny = u.default.remove(d.deny, t)) : (d.allow = u.default.remove(d.allow, t), d.deny = u.default.add(d.deny, t)), s.default.updatePermissionOverwrite(e.id, d)
            }
            async function v(e, t, n, a) {
                if ("" === t) return;
                let l = o.default.getVoiceChannelId() === e.id;
                !l && (0, E.connectToStage)(e);
                let u = await (0, _.startStageInstance)(e.id, t, n, a);
                return p(e, !1, !0), u
            }
            async function h(e, t, n) {
                if ("" === t) return;
                let a = await (0, _.updateStageInstance)(e.id, t, n);
                return a
            }
            async function L(e) {
                await (0, _.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return f
                },
                getRemoveModeratorTooltipHint: function() {
                    return c
                },
                getStageChannelMetadata: function() {
                    return E
                }
            }), n("917351");
            var a = n("945956"),
                l = n("387111"),
                u = n("991170"),
                i = n("834052"),
                s = n("837979"),
                r = n("49111"),
                d = n("606762"),
                o = n("782340");

            function f(e, t, n, a) {
                let u = t[0],
                    i = l.default.getName(e, n, u),
                    s = null != a ? a : t.length;
                return 1 === s && null != u ? i : null == u ? o.default.Messages.SPEAKING_COUNT.format({
                    count: s
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: i,
                    count: s - 1
                })
            }

            function c(e, t) {
                switch (e) {
                    case d.RowType.OWNER:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case d.RowType.ADMINISTRATOR:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case d.RowType.MEMBER:
                    case d.RowType.ROLE:
                        return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case d.RowType.EMPTY_STATE:
                }
                return null
            }

            function E(e) {
                let t = i.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: a.default.getMediaSessionId(),
                    request_to_speak_state: u.default.canEveryoneRole(r.Permissions.REQUEST_TO_SPEAK, e) ? s.RequestToSpeakPermissionStates.EVERYONE : s.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return u
                },
                updateStageInstance: function() {
                    return i
                },
                endStageInstance: function() {
                    return s
                }
            });
            var a = n("872717"),
                l = n("49111");
            async function u(e, t, n, u, i) {
                let s = await a.default.post({
                    url: l.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: i,
                        send_start_notification: u
                    }
                });
                return s.body
            }
            async function i(e, t, n) {
                let u = await a.default.patch({
                    url: l.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return u.body
            }

            function s(e) {
                return a.default.delete(l.Endpoints.STAGE_INSTANCE(e))
            }
        },
        644224: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2021-05_stages_in_app_reporting_experiment",
                label: "Stages In App Reporting Experiment",
                defaultConfig: {
                    reportModal: !1
                },
                treatments: [{
                    id: 1,
                    label: "Can see in-app reporting modal",
                    config: {
                        reportModal: !0
                    }
                }]
            })
        },
        495194: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsVoiceChannelLocked: function() {
                    return d
                },
                default: function() {
                    return o
                }
            });
            var a = n("446674"),
                l = n("305961"),
                u = n("957255"),
                i = n("800762"),
                s = n("404008"),
                r = n("843455");

            function d(e) {
                return (0, a.useStateFromStores)([u.default], () => null == e || !u.default.can(r.Permissions.CONNECT, e), [e])
            }

            function o(e) {
                return (0, a.useStateFromStores)([i.default, l.default], () => (0, s.isChannelFull)(e, i.default, l.default))
            }
        }
    }
]);