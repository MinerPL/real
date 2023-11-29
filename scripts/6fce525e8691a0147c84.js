(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["24020"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return i
                },
                categoryExpand: function() {
                    return l
                },
                categoryCollapseAll: function() {
                    return u
                },
                categoryExpandAll: function() {
                    return d
                }
            });
            var a = n("913144");

            function i(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function l(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function u(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        838446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("901582");

            function l(e, t) {
                return function(n) {
                    return (0, a.jsx)(i.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, a.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("685665");

            function l(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: l
                    } = (0, i.default)(t);
                    return (0, a.jsx)(l, {
                        children: (0, a.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        846883: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return J
                }
            }), n("222007"), n("424973");
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("260365"),
                d = n("823411"),
                s = n("997289"),
                o = n("685665"),
                r = n("442939"),
                c = n("662285"),
                f = n("782911"),
                _ = n("629414"),
                I = n("53887"),
                S = n("486150"),
                E = n("555759"),
                A = n("271938"),
                T = n("42203"),
                p = n("525065"),
                N = n("305961"),
                g = n("957255"),
                M = n("824563"),
                y = n("27618"),
                v = n("18494"),
                O = n("101125"),
                h = n("697218"),
                C = n("800762"),
                m = n("953998"),
                L = n("387111"),
                U = n("550766"),
                b = n("191225"),
                R = n("706508"),
                G = n("612696"),
                F = n("871388"),
                x = n("152311"),
                j = n("407908"),
                D = n("698372"),
                V = n("141962"),
                Y = n("954016"),
                P = n("49111"),
                H = n("450484"),
                w = n("782340");

            function J(e, t) {
                let {
                    analyticsLocations: J
                } = (0, o.default)(), k = (0, i.useStateFromStores)([h.default], () => h.default.getCurrentUser()), X = (0, i.useStateFromStores)([b.default], () => b.default.getSelfEmbeddedActivities()), B = (0, i.useStateFromStoresArray)([O.default], () => O.default.getActivities().filter(e => null != e.application_id && !(null == X ? void 0 : X.has(e.application_id)))), z = (0, i.useStateFromStoresArray)([M.default], () => null != t ? M.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), K = (0, i.useStateFromStoresArray)([b.default], () => {
                    let n = (null == e ? void 0 : e.id) != null ? b.default.getEmbeddedActivitiesForChannel(e.id) : b.NO_ACTIVITIES;
                    return null != t ? n.filter(e => {
                        let {
                            connections: n
                        } = e;
                        return n.has(t.id)
                    }) : n
                }, [t, e]), W = (0, D.default)(), Q = (0, i.useStateFromStores)([g.default], () => null == e || e.isPrivate() || g.default.can(P.Permissions.SEND_MESSAGES, e), [e]), q = (0, i.useStateFromStoresArray)([m.default], () => [...z.map(e => null != e.application_id && m.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING), ...K.map(e => m.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING)], [z, K]), Z = (0, r.default)([...z.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...K.map(e => e.application_id)]), $ = null == e ? void 0 : e.id, ee = (0, i.useStateFromStoresArray)([T.default, N.default, p.default, y.default, v.default, C.default, g.default], () => [...z.map(e => (0, G.default)({
                    user: null != t ? t : k,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: k,
                    isEmbedded: (0, x.default)(e),
                    ChannelStore: T.default,
                    GuildStore: N.default,
                    GuildMemberCountStore: p.default,
                    RelationshipStore: y.default,
                    SelectedChannelStore: v.default,
                    VoiceStateStore: C.default,
                    PermissionStore: g.default
                })), ...K.map(e => (0, G.default)({
                    user: null != t ? t : k,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: k,
                    isEmbedded: !0,
                    ChannelStore: T.default,
                    GuildStore: N.default,
                    GuildMemberCountStore: p.default,
                    RelationshipStore: y.default,
                    SelectedChannelStore: v.default,
                    VoiceStateStore: C.default,
                    PermissionStore: g.default
                }))], [z, Z, $, k, K, t]), et = (0, i.useStateFromStoresArray)([c.default, A.default], () => z.map(e => e.type === P.ActivityTypes.LISTENING && null != t ? (0, I.default)(c.default, A.default, t, e) : void 0), [t, z]), en = (0, s.useAnalyticsContext)();
                if (!Q) return null;
                let ea = (n, a) => {
                        null != e ? u.default.sendActivityInvite({
                            type: n,
                            channelId: e.id,
                            activity: a,
                            location: P.AnalyticsLocations.CONTEXT_MENU
                        }) : null != t && u.default.sendActivityInviteUser({
                            type: n,
                            userId: t.id,
                            activity: a,
                            location: P.AnalyticsLocations.CONTEXT_MENU
                        })
                    },
                    ei = (i, u) => {
                        let d = T.default.getChannel(i),
                            s = null == d ? void 0 : N.default.getGuild(d.guild_id);
                        if (null != d && null != s) {
                            if (null != t) return U.sendEmbeddedActivityInviteUser({
                                channelId: d.id,
                                applicationId: u,
                                userId: t.id,
                                location: P.InstantInviteSources.CONTEXT_MENU
                            });
                            if (null != e && e.type === P.ChannelTypes.GUILD_VOICE) return (0, l.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await n.el("310688").then(n.bind(n, "310688"));
                                return n => (0, a.jsx)(t, {
                                    ...n,
                                    guild: s,
                                    channel: d,
                                    applicationId: u,
                                    analyticsLocation: e.type === P.ChannelTypes.GUILD_VOICE ? P.AnalyticsPages.GUILD_CHANNEL : P.AnalyticsPages.DM_CHANNEL,
                                    source: P.InstantInviteSources.ACTIVITY_INVITE
                                })
                            }, {
                                modalKey: "use-activity-items-embedded-invite-modal"
                            });
                            if ((null == e ? void 0 : e.id) != null) return U.sendEmbeddedActivityInvite({
                                activityChannelId: d.id,
                                invitedChannelId: e.id,
                                applicationId: u,
                                location: P.InstantInviteSources.CONTEXT_MENU
                            })
                        }
                    },
                    el = async e => {
                        var n;
                        await d.default.join({
                            userId: t.id,
                            sessionId: e.session_id,
                            applicationId: e.application_id,
                            channelId: v.default.getVoiceChannelId(),
                            messageId: null,
                            intent: Y.ActivityIntent.PLAY,
                            embedded: (0, F.default)(e, P.ActivityFlags.EMBEDDED)
                        }), (0, j.default)({
                            type: P.AnalyticsGameOpenTypes.JOIN,
                            userId: t.id,
                            applicationId: e.application_id,
                            partyId: null === (n = e.party) || void 0 === n ? void 0 : n.id,
                            locationObject: en.location,
                            analyticsLocations: J
                        })
                    }, eu = async t => {
                        await (0, R.default)({
                            activity: t,
                            currentEmbeddedApplication: W,
                            activityChannelId: null == e ? void 0 : e.id,
                            locationObject: en.location,
                            embeddedActivitiesManager: V.default,
                            analyticsLocations: J
                        })
                    }, ed = [];
                return null == X || X.forEach(n => {
                    let i = (null == t ? void 0 : t.id) != null && n.connections.has(null == t ? void 0 : t.id),
                        u = g.default.can(P.Permissions.CREATE_INSTANT_INVITE, e);
                    null != n.activity_id && !i && u && ed.push((0, a.jsx)(l.MenuItem, {
                        id: "invite-to-join-embedded",
                        label: w.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: n.name,
                        action: () => {
                            ei(n.channelId, n.application_id)
                        }
                    }, "self-embedded-".concat(n.application_id)))
                }), B.forEach((e, t) => {
                    e.type === P.ActivityTypes.PLAYING && (0, F.default)(e, P.ActivityFlags.JOIN) ? ed.push((0, a.jsx)(l.MenuItem, {
                        id: "invite-to-join",
                        label: w.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: e.name,
                        action: () => ea(P.ActivityActionTypes.JOIN, e)
                    }, "self".concat(t))) : e.type === P.ActivityTypes.LISTENING && (0, F.default)(e, P.ActivityFlags.SYNC) && ed.push((0, a.jsx)(l.MenuItem, {
                        id: "invite-to-listen",
                        label: w.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: e.name,
                        action: () => ea(P.ActivityActionTypes.LISTEN, e)
                    }, "self".concat(t)))
                }), ed.length > 0 && ed.push((0, a.jsx)(l.MenuSeparator, {})), z.forEach((n, i) => {
                    if (n.type === P.ActivityTypes.PLAYING && (0, F.default)(n, P.ActivityFlags.JOIN) && null != n.session_id && null != n.application_id) {
                        if (ee[i]) {
                            let e = q[i];
                            ed.push((0, a.jsx)(l.MenuItem, {
                                id: "join",
                                label: e ? w.default.Messages.USER_ACTIVITY_JOINING : w.default.Messages.JOIN,
                                disabled: e,
                                hint: e ? (0, a.jsx)(l.Spinner, {
                                    type: l.Spinner.Type.PULSING_ELLIPSIS
                                }) : null,
                                subtext: n.name,
                                action: () => el(n)
                            }, i))
                        } else ed.push((0, a.jsx)(l.MenuItem, {
                            id: "ask-to-join",
                            label: w.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                            subtext: n.name,
                            action: () => ea(P.ActivityActionTypes.JOIN_REQUEST, n)
                        }, i))
                    } else if (n.type === P.ActivityTypes.LISTENING && (0, F.default)(n, P.ActivityFlags.SYNC) && null != et[i]) {
                        let u = et[i],
                            {
                                notPlayable: d,
                                playingSameTrack: s,
                                isCurrentUser: o,
                                syncingWithUser: r,
                                syncingWithParty: c
                            } = u,
                            I = o || d || s,
                            A = o || r || c;
                        ed.push((0, a.jsx)(l.MenuItem, {
                            id: "spotify-play-".concat(n.session_id),
                            action: () => (0, E.default)(u, H.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            label: (0, f.default)(u, H.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            subtext: I ? (0, _.default)(u, H.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? L.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: I
                        }, "spotify-play-".concat(n.session_id)), (0, a.jsx)(l.MenuItem, {
                            id: "spotify-sync-".concat(n.session_id),
                            action: () => (0, S.default)(u, H.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                            label: w.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: A ? (0, _.default)(u, H.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? L.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: A
                        }, "spotify-sync-".concat(n.session_id)))
                    }
                }), K.forEach((e, t) => {
                    var n;
                    let i = e.connections.has(null !== (n = null == k ? void 0 : k.id) && void 0 !== n ? n : ""),
                        u = t + z.length,
                        d = q[u] || i,
                        s = w.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    i ? s = w.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : q[u] && (s = w.default.Messages.USER_ACTIVITY_JOINING), ee[u] && ed.push((0, a.jsx)(l.MenuItem, {
                        id: "embedded-activity-join-".concat(e.application_id),
                        label: s,
                        disabled: d,
                        hint: q[u] ? (0, a.jsx)(l.Spinner, {
                            type: l.Spinner.Type.PULSING_ELLIPSIS
                        }) : null,
                        subtext: e.name,
                        action: () => eu(e)
                    }, "embedded-activity-".concat(e.application_id)))
                }), ed
            }
        },
        715243: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("957255"),
                d = n("49111"),
                s = n("782340");

            function o(e, t) {
                let o = (0, i.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
                return __OVERLAY__ || !o ? null : (0, a.jsx)(l.MenuItem, {
                    id: "clone-channel",
                    label: s.default.Messages.CLONE_CHANNEL,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: i
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(i, {
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
        963150: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("957255"),
                d = n("49111"),
                s = n("782340");

            function o(e, t) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    r = (0, i.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !r) return null;
                let c = () => {
                    (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: o,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
                        })
                    })
                };
                switch (o) {
                    case d.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(l.MenuItem, {
                            id: "create-text-channel",
                            label: s.default.Messages.CREATE_TEXT_CHANNEL,
                            action: c
                        });
                    case d.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(l.MenuItem, {
                            id: "create-voice-channel",
                            label: s.default.Messages.CREATE_VOICE_CHANNEL,
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
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("18054"),
                d = n("957255"),
                s = n("49111"),
                o = n("782340");

            function r(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: r,
                    canAccessChannel: c
                } = (0, i.useStateFromStoresObject)([d.default], () => ({
                    canManageChannels: d.default.can(s.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: d.default.can(s.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: d.default.can(s.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: d.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && c && (t || n || r) ? (0, a.jsx)(l.MenuItem, {
                    id: "edit-channel",
                    label: e.type === s.ChannelTypes.GUILD_CATEGORY ? o.default.Messages.EDIT_CATEGORY : o.default.Messages.EDIT_CHANNEL,
                    action: () => u.default.open(e.id)
                }) : null
            }
        },
        878526: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("58622"),
                i = n("49111");

            function l(e, t, n) {
                return (0, a.default)({
                    guild: t,
                    channel: e,
                    stageInstance: n,
                    source: i.InstantInviteSources.CONTEXT_MENU
                })
            }
        },
        44141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("267363"),
                d = n("680986"),
                s = n("689275"),
                o = n("755624"),
                r = n("233069"),
                c = n("245997"),
                f = n("660478"),
                _ = n("49111"),
                I = n("782340");

            function S(e) {
                let t = function(e) {
                    let t = (0, d.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, i.useStateFromStores)([f.default, c.default, s.default, o.default], () => {
                            if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
                            if (e.type !== _.ChannelTypes.GUILD_CATEGORY) return f.default.hasUnread(e.id);
                            {
                                let t = c.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, r.isReadableType)(t.type) && f.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let a = new Set(t[e.id].map(e => e.channel.id)),
                                    i = s.default.getThreadsForGuild(e.guild_id);
                                for (let e in i)
                                    if (a.has(e)) {
                                        for (let t in i[e])
                                            if (o.default.hasJoined(t) && !o.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, a.jsx)(l.MenuItem, {
                    id: "mark-channel-read",
                    label: I.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, u.ackChannel)(e)
                    },
                    disabled: !t
                })
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
            var i = n("446674"),
                l = n("77078"),
                u = n("629220"),
                d = n("512395"),
                s = n("282109"),
                o = n("49111"),
                r = n("782340");

            function c(e) {
                let t = (0, d.useOptInEnabledForGuild)(e.guild_id),
                    n = (0, i.useStateFromStores)([s.default], () => s.default.isChannelOptedIn(e.guild_id, e.id)),
                    c = (0, i.useStateFromStores)([s.default], () => null != e.parent_id && s.default.isChannelOptedIn(e.guild_id, e.parent_id)),
                    f = (0, i.useStateFromStores)([s.default], () => s.default.isFavorite(e.guild_id, e.id)),
                    _ = () => {
                        (0, u.setOptInChannel)(e.guild_id, e.id, !n, {
                            section: o.AnalyticsSections.CONTEXT_MENU
                        })
                    },
                    I = () => {
                        null != e.parent_id && (0, u.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                            section: o.AnalyticsSections.CONTEXT_MENU
                        })
                    };
                return !t || e.isThread() ? null : e.isCategory() ? (0, a.jsx)(l.MenuItem, {
                    id: "opt-into-category",
                    label: n ? r.default.Messages.CHANNEL_OPT_OUT : r.default.Messages.CHANNEL_OPT_IN,
                    action: () => _()
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: f ? r.default.Messages.REMOVE_FAVORITE : r.default.Messages.ADD_FAVORITE,
                        action: () => {
                            (0, u.setIsFavorite)(e.guild_id, e.id, !f, {
                                section: o.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), c ? (0, a.jsx)(l.MenuItem, {
                        id: "opt-out-category",
                        label: r.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => I()
                    }) : (0, a.jsx)(l.MenuItem, {
                        id: "opt-into-channel",
                        label: n ? r.default.Messages.CHANNEL_OPT_OUT : r.default.Messages.CHANNEL_OPT_IN,
                        action: () => _()
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
                l = n("77078"),
                u = n("47495"),
                d = n("831394"),
                s = n("282109"),
                o = n("133335"),
                r = n("782340");

            function c(e) {
                var t;
                let n = (0, i.useStateFromStores)([s.default], () => s.default.getChannelRecordUnreadSetting(e)),
                    c = (0, i.useStateFromStores)([s.default], () => s.default.getChannelUnreadMode(e));
                if (!(0, u.useShouldUseNewNotificationSystem)("useChannelUnreadItems")) return null;
                return (0, a.jsx)(l.MenuItem, {
                    id: "channel-unreads",
                    label: r.default.Messages.UNREAD_SETTINGS,
                    subtext: c === o.UnreadMode.IMPORTANT ? r.default.Messages.FORM_LABEL_ALL_MESSAGES : r.default.Messages.HIGHLIGHTS_AND_MENTIONS,
                    children: (t = e, [{
                        setting: o.UnreadSetting.UNSET,
                        label: null != t.parent_id ? r.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : r.default.Messages.FORM_LABEL_DEFAULT
                    }, {
                        setting: o.UnreadSetting.ALL_MESSAGES,
                        label: r.default.Messages.FORM_LABEL_ALL_MESSAGES
                    }, {
                        setting: o.UnreadSetting.ONLY_MENTIONS,
                        label: r.default.Messages.HIGHLIGHTS_AND_MENTIONS
                    }]).map(t => {
                        let {
                            setting: i,
                            label: u
                        } = t;
                        return (0, a.jsx)(l.MenuRadioItem, {
                            group: "channel-unreads",
                            id: "".concat(i),
                            label: u,
                            action: () => (0, d.setChannelUnreadSetting)(e.guild_id, e.id, i),
                            checked: i === n
                        }, i)
                    })
                })
            }
        },
        20209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("446674"),
                i = n("162771"),
                l = n("49111");

            function u() {
                let e = (0, a.useStateFromStores)([i.default], () => i.default.getGuildId());
                return e === l.FAVORITES
            }
        },
        972701: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("923959"),
                d = n("379881"),
                s = n("200008"),
                o = n("498139"),
                r = n("49111"),
                c = n("782340");

            function f(e, t) {
                return e.type === r.ChannelTypes.GROUP_DM ? t ? c.default.Messages.UNFAVORITE_GDM : c.default.Messages.FAVORITE_GDM : e.type === r.ChannelTypes.DM ? t ? c.default.Messages.UNFAVORITE_DM : c.default.Messages.FAVORITE_DM : t ? c.default.Messages.UNFAVORITE_CHANNEL : c.default.Messages.FAVORITE_CHANNEL
            }

            function _(e) {
                var t;
                let n = (0, i.useStateFromStores)([d.default], () => d.default.isFavorite(e.id)),
                    c = function(e) {
                        let t = (0, i.useStateFromStores)([u.default], () => u.default.getChannels(r.FAVORITES))[r.ChannelTypes.GUILD_CATEGORY].filter(e => "null" !== e.channel.id),
                            {
                                favoritesEnabled: n
                            } = (0, o.useFavoritesServerExperiment)("58e21a_1");
                        if (!n) return null;

                        function d(t) {
                            (0, s.addFavoriteChannel)(e.id, t)
                        }
                        return 0 === t.length ? (0, a.jsx)(l.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: () => d(null)
                        }) : (0, a.jsx)(l.MenuItem, {
                            id: "favorite-channel",
                            label: f(e, !1),
                            action: () => d(null),
                            children: t.map(e => (0, a.jsx)(l.MenuItem, {
                                id: "favorite-".concat(e.channel.id),
                                label: e.channel.name,
                                action: () => d(e.channel.id)
                            }, e.channel.id))
                        })
                    }(e);
                let _ = (t = e, (0, a.jsx)(l.MenuItem, {
                    id: "favorite-channel",
                    label: f(t, !0),
                    action: function() {
                        (0, s.removeFavoriteChannel)(t.id)
                    }
                }));
                return __OVERLAY__ ? null : n ? _ : c
            }
        },
        390008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("162771"),
                d = n("49111"),
                s = n("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.getGuildId());
                return __OVERLAY__ || t !== d.FAVORITES ? null : (0, a.jsx)(l.MenuItem, {
                    id: "set-channel-nickname",
                    label: s.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, l.openModalLazy)(async () => {
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
        41205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("393414"),
                d = n("162771"),
                s = n("49111"),
                o = n("782340");

            function r(e) {
                let t = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId());
                return __OVERLAY__ || t !== s.FAVORITES ? null : (0, a.jsx)(l.MenuItem, {
                    id: "go-to-original-guild",
                    label: o.default.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
                    action: function() {
                        (0, u.transitionToGuild)(e.guild_id, e.id)
                    }
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
            var i = n("446674"),
                l = n("77078"),
                u = n("242757"),
                d = n("923959"),
                s = n("957255"),
                o = n("76539"),
                r = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    source: t,
                    guild: n,
                    channel: a,
                    stageInstance: l
                } = e, o = (0, i.useStateFromStores)([d.default, s.default], () => {
                    var e;
                    let t = d.default.getChannels(n.id);
                    return null === (e = t[0, d.GUILD_SELECTABLE_CHANNELS_KEY].find(e => s.default.can(r.Permissions.CREATE_INSTANT_INVITE, e.channel))) || void 0 === e ? void 0 : e.channel
                }), c = (0, i.useStateFromStores)([s.default], () => (0, u.canViewInviteModal)(s.default, n, a, l)), f = _(t, n, c && null != a ? a : o), S = I(t);
                return null == a && t === r.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != o ? f : S
            }
            let _ = (e, t, i) => (0, a.jsx)(l.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === r.InstantInviteSources.GUILD_HEADER ? o.default : void 0,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: l
                        } = await n.el("310688").then(n.bind(n, "310688"));
                        return n => (0, a.jsx)(l, {
                            ...n,
                            guild: t,
                            channel: i,
                            source: e
                        })
                    })
                }),
                I = e => (0, a.jsx)(l.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === r.InstantInviteSources.GUILD_HEADER ? o.default : void 0,
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("973132").then(n.bind(n, "973132"));
                        return t => (0, a.jsx)(e, {
                            ...t
                        })
                    })
                })
        },
        47495: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimeOptions: function() {
                    return r
                },
                filterOverrides: function() {
                    return c
                },
                useShouldUseNewNotificationSystem: function() {
                    return f
                }
            });
            var a = n("446674"),
                i = n("668597"),
                l = n("282109"),
                u = n("640497"),
                d = n("49111"),
                s = n("468200"),
                o = n("782340");

            function r() {
                return [{
                    label: o.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: s.MuteUntilSeconds.MINUTES_15
                }, {
                    label: o.default.Messages.MUTE_DURATION_1_HOUR,
                    value: s.MuteUntilSeconds.HOURS_1
                }, {
                    label: o.default.Messages.MUTE_DURATION_3_HOURS,
                    value: s.MuteUntilSeconds.HOURS_3
                }, {
                    label: o.default.Messages.MUTE_DURATION_8_HOURS,
                    value: s.MuteUntilSeconds.HOURS_8
                }, {
                    label: o.default.Messages.MUTE_DURATION_24_HOURS,
                    value: s.MuteUntilSeconds.HOURS_24
                }, {
                    label: o.default.Messages.MUTE_DURATION_ALWAYS,
                    value: s.MuteUntilSeconds.ALWAYS
                }]
            }

            function c(e) {
                return Object.keys(e).filter(t => !!(0, i.computeIsMuted)(e[t]) || e[t].message_notifications !== d.UserNotificationSettings.NULL || !1)
            }

            function f(e) {
                let t = (0, a.useStateFromStores)([l.default], () => l.default.useNewNotifications);
                return u.default.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }
        },
        831394: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setChannelUnreadSetting: function() {
                    return s
                },
                setGuildUnreadSetting: function() {
                    return o
                }
            });
            var a = n("519705"),
                i = n("282109"),
                l = n("568734"),
                u = n("133335"),
                d = n("397336");

            function s(e, t, n) {
                let s = i.default.getChannelIdFlags(e, t);
                s = (0, l.setFlag)(s, d.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n === u.UnreadSetting.ALL_MESSAGES), s = (0, l.setFlag)(s, d.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, n === u.UnreadSetting.ONLY_MENTIONS), a.default.updateChannelOverrideSettings(e, t, {
                    flags: s
                })
            }

            function o(e, t) {
                let n = i.default.getGuildFlags(e);
                n = (0, l.setFlag)(n, d.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, t === u.UnreadSetting.ALL_MESSAGES), n = (0, l.setFlag)(n, d.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, t === u.UnreadSetting.ONLY_MENTIONS), a.default.updateGuildNotificationSettings(e, {
                    flags: n
                })
            }
        }
    }
]);