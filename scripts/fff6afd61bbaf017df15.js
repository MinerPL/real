(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["7236"], {
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
                    return k
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("260365"),
                d = n("823411"),
                s = n("997289"),
                r = n("685665"),
                o = n("442939"),
                c = n("662285"),
                f = n("782911"),
                I = n("629414"),
                _ = n("53887"),
                S = n("486150"),
                E = n("555759"),
                A = n("271938"),
                p = n("42203"),
                T = n("525065"),
                N = n("305961"),
                g = n("957255"),
                v = n("824563"),
                y = n("27618"),
                M = n("18494"),
                h = n("101125"),
                m = n("697218"),
                C = n("800762"),
                L = n("953998"),
                O = n("387111"),
                G = n("550766"),
                U = n("191225"),
                b = n("706508"),
                F = n("612696"),
                R = n("871388"),
                x = n("152311"),
                j = n("407908"),
                D = n("698372"),
                V = n("141962"),
                H = n("954016"),
                Y = n("49111"),
                P = n("450484"),
                J = n("782340");

            function k(e, t) {
                let {
                    analyticsLocations: k
                } = (0, r.default)(), w = (0, i.useStateFromStores)([m.default], () => m.default.getCurrentUser()), X = (0, i.useStateFromStores)([U.default], () => U.default.getSelfEmbeddedActivities()), B = (0, i.useStateFromStoresArray)([h.default], () => h.default.getActivities().filter(e => null != e.application_id && !(null == X ? void 0 : X.has(e.application_id)))), z = (0, i.useStateFromStoresArray)([v.default], () => null != t ? v.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), K = (0, i.useStateFromStoresArray)([U.default], () => {
                    let n = (null == e ? void 0 : e.id) != null ? U.default.getEmbeddedActivitiesForChannel(e.id) : U.NO_ACTIVITIES;
                    return null != t ? n.filter(e => {
                        let {
                            connections: n
                        } = e;
                        return n.has(t.id)
                    }) : n
                }, [t, e]), W = (0, D.default)(), Q = (0, i.useStateFromStores)([g.default], () => null == e || e.isPrivate() || g.default.can(Y.Permissions.SEND_MESSAGES, e), [e]), q = (0, i.useStateFromStoresArray)([L.default], () => [...z.map(e => null != e.application_id && L.default.getState(e.application_id, Y.ActivityActionTypes.JOIN) === Y.ActivityActionStates.LOADING), ...K.map(e => L.default.getState(e.application_id, Y.ActivityActionTypes.JOIN) === Y.ActivityActionStates.LOADING)], [z, K]), Z = (0, o.default)([...z.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...K.map(e => e.application_id)]), $ = null == e ? void 0 : e.id, ee = (0, i.useStateFromStoresArray)([p.default, N.default, T.default, y.default, M.default, C.default, g.default], () => [...z.map(e => (0, F.default)({
                    user: null != t ? t : w,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: w,
                    isEmbedded: (0, x.default)(e),
                    ChannelStore: p.default,
                    GuildStore: N.default,
                    GuildMemberCountStore: T.default,
                    RelationshipStore: y.default,
                    SelectedChannelStore: M.default,
                    VoiceStateStore: C.default,
                    PermissionStore: g.default
                })), ...K.map(e => (0, F.default)({
                    user: null != t ? t : w,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: w,
                    isEmbedded: !0,
                    ChannelStore: p.default,
                    GuildStore: N.default,
                    GuildMemberCountStore: T.default,
                    RelationshipStore: y.default,
                    SelectedChannelStore: M.default,
                    VoiceStateStore: C.default,
                    PermissionStore: g.default
                }))], [z, Z, $, w, K, t]), et = (0, i.useStateFromStoresArray)([c.default, A.default], () => z.map(e => e.type === Y.ActivityTypes.LISTENING && null != t ? (0, _.default)(c.default, A.default, t, e) : void 0), [t, z]), en = (0, s.useAnalyticsContext)();
                if (!Q) return null;
                let ea = (n, a) => {
                        null != e ? u.default.sendActivityInvite({
                            type: n,
                            channelId: e.id,
                            activity: a,
                            location: Y.AnalyticsLocations.CONTEXT_MENU
                        }) : null != t && u.default.sendActivityInviteUser({
                            type: n,
                            userId: t.id,
                            activity: a,
                            location: Y.AnalyticsLocations.CONTEXT_MENU
                        })
                    },
                    ei = (i, u) => {
                        let d = p.default.getChannel(i),
                            s = null == d ? void 0 : N.default.getGuild(d.guild_id);
                        if (null != d && null != s) {
                            if (null != t) return G.sendEmbeddedActivityInviteUser({
                                channelId: d.id,
                                applicationId: u,
                                userId: t.id,
                                location: Y.InstantInviteSources.CONTEXT_MENU
                            });
                            if (null != e && e.type === Y.ChannelTypes.GUILD_VOICE) return (0, l.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await n.el("310688").then(n.bind(n, "310688"));
                                return n => (0, a.jsx)(t, {
                                    ...n,
                                    guild: s,
                                    channel: d,
                                    applicationId: u,
                                    analyticsLocation: e.type === Y.ChannelTypes.GUILD_VOICE ? Y.AnalyticsPages.GUILD_CHANNEL : Y.AnalyticsPages.DM_CHANNEL,
                                    source: Y.InstantInviteSources.ACTIVITY_INVITE
                                })
                            }, {
                                modalKey: "use-activity-items-embedded-invite-modal"
                            });
                            if ((null == e ? void 0 : e.id) != null) return G.sendEmbeddedActivityInvite({
                                activityChannelId: d.id,
                                invitedChannelId: e.id,
                                applicationId: u,
                                location: Y.InstantInviteSources.CONTEXT_MENU
                            })
                        }
                    },
                    el = async e => {
                        var n;
                        await d.default.join({
                            userId: t.id,
                            sessionId: e.session_id,
                            applicationId: e.application_id,
                            channelId: M.default.getVoiceChannelId(),
                            messageId: null,
                            intent: H.ActivityIntent.PLAY,
                            embedded: (0, R.default)(e, Y.ActivityFlags.EMBEDDED)
                        }), (0, j.default)({
                            type: Y.AnalyticsGameOpenTypes.JOIN,
                            userId: t.id,
                            applicationId: e.application_id,
                            partyId: null === (n = e.party) || void 0 === n ? void 0 : n.id,
                            locationObject: en.location,
                            analyticsLocations: k
                        })
                    }, eu = async t => {
                        await (0, b.default)({
                            activity: t,
                            currentEmbeddedApplication: W,
                            activityChannelId: null == e ? void 0 : e.id,
                            locationObject: en.location,
                            embeddedActivitiesManager: V.default,
                            analyticsLocations: k
                        })
                    }, ed = [];
                return null == X || X.forEach(n => {
                    let i = (null == t ? void 0 : t.id) != null && n.connections.has(null == t ? void 0 : t.id),
                        u = g.default.can(Y.Permissions.CREATE_INSTANT_INVITE, e);
                    null != n.activity_id && !i && u && ed.push((0, a.jsx)(l.MenuItem, {
                        id: "invite-to-join-embedded",
                        label: J.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: n.name,
                        action: () => {
                            ei(n.channelId, n.application_id)
                        }
                    }, "self-embedded-".concat(n.application_id)))
                }), B.forEach((e, t) => {
                    e.type === Y.ActivityTypes.PLAYING && (0, R.default)(e, Y.ActivityFlags.JOIN) ? ed.push((0, a.jsx)(l.MenuItem, {
                        id: "invite-to-join",
                        label: J.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: e.name,
                        action: () => ea(Y.ActivityActionTypes.JOIN, e)
                    }, "self".concat(t))) : e.type === Y.ActivityTypes.LISTENING && (0, R.default)(e, Y.ActivityFlags.SYNC) && ed.push((0, a.jsx)(l.MenuItem, {
                        id: "invite-to-listen",
                        label: J.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: e.name,
                        action: () => ea(Y.ActivityActionTypes.LISTEN, e)
                    }, "self".concat(t)))
                }), ed.length > 0 && ed.push((0, a.jsx)(l.MenuSeparator, {})), z.forEach((n, i) => {
                    if (n.type === Y.ActivityTypes.PLAYING && (0, R.default)(n, Y.ActivityFlags.JOIN) && null != n.session_id && null != n.application_id) {
                        if (ee[i]) {
                            let e = q[i];
                            ed.push((0, a.jsx)(l.MenuItem, {
                                id: "join",
                                label: e ? J.default.Messages.USER_ACTIVITY_JOINING : J.default.Messages.JOIN,
                                disabled: e,
                                hint: e ? (0, a.jsx)(l.Spinner, {
                                    type: l.Spinner.Type.PULSING_ELLIPSIS
                                }) : null,
                                subtext: n.name,
                                action: () => el(n)
                            }, i))
                        } else ed.push((0, a.jsx)(l.MenuItem, {
                            id: "ask-to-join",
                            label: J.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                            subtext: n.name,
                            action: () => ea(Y.ActivityActionTypes.JOIN_REQUEST, n)
                        }, i))
                    } else if (n.type === Y.ActivityTypes.LISTENING && (0, R.default)(n, Y.ActivityFlags.SYNC) && null != et[i]) {
                        let u = et[i],
                            {
                                notPlayable: d,
                                playingSameTrack: s,
                                isCurrentUser: r,
                                syncingWithUser: o,
                                syncingWithParty: c
                            } = u,
                            _ = r || d || s,
                            A = r || o || c;
                        ed.push((0, a.jsx)(l.MenuItem, {
                            id: "spotify-play-".concat(n.session_id),
                            action: () => (0, E.default)(u, P.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            label: (0, f.default)(u, P.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            subtext: _ ? (0, I.default)(u, P.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? O.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: _
                        }, "spotify-play-".concat(n.session_id)), (0, a.jsx)(l.MenuItem, {
                            id: "spotify-sync-".concat(n.session_id),
                            action: () => (0, S.default)(u, P.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                            label: J.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: A ? (0, I.default)(u, P.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? O.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: A
                        }, "spotify-sync-".concat(n.session_id)))
                    }
                }), K.forEach((e, t) => {
                    var n;
                    let i = e.connections.has(null !== (n = null == w ? void 0 : w.id) && void 0 !== n ? n : ""),
                        u = t + z.length,
                        d = q[u] || i,
                        s = J.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    i ? s = J.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : q[u] && (s = J.default.Messages.USER_ACTIVITY_JOINING), ee[u] && ed.push((0, a.jsx)(l.MenuItem, {
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
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("957255"),
                d = n("49111"),
                s = n("782340");

            function r(e, t) {
                let r = (0, i.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
                return __OVERLAY__ || !r ? null : (0, a.jsx)(l.MenuItem, {
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
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("957255"),
                d = n("49111"),
                s = n("782340");

            function r(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    o = (0, i.useStateFromStores)([u.default], () => u.default.can(d.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !o) return null;
                let c = () => {
                    (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: r,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
                        })
                    })
                };
                switch (r) {
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
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("18054"),
                d = n("957255"),
                s = n("49111"),
                r = n("782340");

            function o(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: o,
                    canAccessChannel: c
                } = (0, i.useStateFromStoresObject)([d.default], () => ({
                    canManageChannels: d.default.can(s.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: d.default.can(s.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: d.default.can(s.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: d.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && c && (t || n || o) ? (0, a.jsx)(l.MenuItem, {
                    id: "edit-channel",
                    label: e.type === s.ChannelTypes.GUILD_CATEGORY ? r.default.Messages.EDIT_CATEGORY : r.default.Messages.EDIT_CHANNEL,
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
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("267363"),
                d = n("680986"),
                s = n("689275"),
                r = n("755624"),
                o = n("233069"),
                c = n("245997"),
                f = n("660478"),
                I = n("49111"),
                _ = n("782340");

            function S(e) {
                let t = function(e) {
                    let t = (0, d.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, i.useStateFromStores)([f.default, c.default, s.default, r.default], () => {
                            if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
                            if (e.type !== I.ChannelTypes.GUILD_CATEGORY) return f.default.hasUnread(e.id);
                            {
                                let t = c.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, o.isReadableType)(t.type) && f.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let a = new Set(t[e.id].map(e => e.channel.id)),
                                    i = s.default.getThreadsForGuild(e.guild_id);
                                for (let e in i)
                                    if (a.has(e)) {
                                        for (let t in i[e])
                                            if (r.default.hasJoined(t) && !r.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, a.jsx)(l.MenuItem, {
                    id: "mark-channel-read",
                    label: _.default.Messages.MARK_AS_READ,
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
                r = n("49111"),
                o = n("782340");

            function c(e) {
                let t = (0, d.useOptInEnabledForGuild)(e.guild_id),
                    n = (0, i.useStateFromStores)([s.default], () => s.default.isChannelOptedIn(e.guild_id, e.id)),
                    c = (0, i.useStateFromStores)([s.default], () => null != e.parent_id && s.default.isChannelOptedIn(e.guild_id, e.parent_id)),
                    f = (0, i.useStateFromStores)([s.default], () => s.default.isFavorite(e.guild_id, e.id)),
                    I = () => {
                        (0, u.setOptInChannel)(e.guild_id, e.id, !n, {
                            section: r.AnalyticsSections.CONTEXT_MENU
                        })
                    },
                    _ = () => {
                        null != e.parent_id && (0, u.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                            section: r.AnalyticsSections.CONTEXT_MENU
                        })
                    };
                return !t || e.isThread() ? null : e.isCategory() ? (0, a.jsx)(l.MenuItem, {
                    id: "opt-into-category",
                    label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                    action: () => I()
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: f ? o.default.Messages.REMOVE_FAVORITE : o.default.Messages.ADD_FAVORITE,
                        action: () => {
                            (0, u.setIsFavorite)(e.guild_id, e.id, !f, {
                                section: r.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), c ? (0, a.jsx)(l.MenuItem, {
                        id: "opt-out-category",
                        label: o.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => _()
                    }) : (0, a.jsx)(l.MenuItem, {
                        id: "opt-into-channel",
                        label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                        action: () => I()
                    })]
                })
            }
        },
        809937: function(e, t, n) {
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
                u = n("483226"),
                d = n("44574"),
                s = n("811400"),
                r = n("282109"),
                o = n("627869"),
                c = n("782340");

            function f(e) {
                let t = (0, s.useGuildUnreadSetting)(e),
                    n = (0, d.useGuildUnreadsExperiment)(),
                    f = (0, i.useStateFromStores)([r.default], () => r.default.isGuildUnreadSettingEnabled(e.guild_id)),
                    I = function(e) {
                        var t;
                        let n = (0, s.useGuildUnreadSetting)(e);
                        let i = (t = e, [{
                                setting: o.UserUnreadSettings.NULL,
                                label: null != t.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                            }, {
                                setting: o.UserUnreadSettings.ALL_MESSAGES,
                                label: c.default.Messages.FORM_LABEL_ALL_MESSAGES
                            }, {
                                setting: o.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS,
                                label: c.default.Messages.HIGHLIGHTS_AND_MENTIONS
                            }]),
                            d = t => {
                                (0, u.setChannelUnreadSetting)(e.guild_id, e.id, t)
                            };
                        return (0, a.jsx)(a.Fragment, {
                            children: i.map(e => {
                                let {
                                    setting: t,
                                    label: i
                                } = e;
                                return (0, a.jsx)(l.MenuRadioItem, {
                                    group: "channel-unreads",
                                    id: "".concat(t),
                                    label: i,
                                    subtext: t === o.UserUnreadSettings.NULL ? c.default.Messages.HIGHLIGHTS_AND_MENTIONS : void 0,
                                    action: () => d(t),
                                    checked: t === n
                                }, t)
                            })
                        })
                    }(e);
                return n && f ? (0, a.jsx)(l.MenuItem, {
                    id: "channel-unreads",
                    label: c.default.Messages.UNREAD_SETTINGS,
                    subtext: t === o.UserUnreadSettings.ALL_MESSAGES ? c.default.Messages.FORM_LABEL_ALL_MESSAGES : c.default.Messages.HIGHLIGHTS_AND_MENTIONS,
                    children: I
                }) : null
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
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("923959"),
                d = n("379881"),
                s = n("200008"),
                r = n("498139"),
                o = n("49111"),
                c = n("782340");

            function f(e, t) {
                return e.type === o.ChannelTypes.GROUP_DM ? t ? c.default.Messages.UNFAVORITE_GDM : c.default.Messages.FAVORITE_GDM : e.type === o.ChannelTypes.DM ? t ? c.default.Messages.UNFAVORITE_DM : c.default.Messages.FAVORITE_DM : t ? c.default.Messages.UNFAVORITE_CHANNEL : c.default.Messages.FAVORITE_CHANNEL
            }

            function I(e) {
                var t;
                let n = (0, i.useStateFromStores)([d.default], () => d.default.isFavorite(e.id)),
                    c = function(e) {
                        let t = (0, i.useStateFromStores)([u.default], () => u.default.getChannels(o.FAVORITES))[o.ChannelTypes.GUILD_CATEGORY].filter(e => "null" !== e.channel.id),
                            {
                                favoritesEnabled: n
                            } = r.default.useExperiment({
                                location: "58e21a_1"
                            }, {
                                autoTrackExposure: !1
                            });
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
                let I = (t = e, (0, a.jsx)(l.MenuItem, {
                    id: "favorite-channel",
                    label: f(t, !0),
                    action: function() {
                        (0, s.removeFavoriteChannel)(t.id)
                    }
                }));
                return __OVERLAY__ ? null : n ? I : c
            }
        },
        390008: function(e, t, n) {
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
                u = n("162771"),
                d = n("49111"),
                s = n("782340");

            function r(e) {
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
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                u = n("393414"),
                d = n("162771"),
                s = n("49111"),
                r = n("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId());
                return __OVERLAY__ || t !== s.FAVORITES ? null : (0, a.jsx)(l.MenuItem, {
                    id: "go-to-original-guild",
                    label: r.default.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
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
                r = n("76539"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    source: t,
                    guild: n,
                    channel: a,
                    stageInstance: l
                } = e, r = (0, i.useStateFromStores)([d.default, s.default], () => {
                    var e;
                    let t = d.default.getChannels(n.id);
                    return null === (e = t[0, d.GUILD_SELECTABLE_CHANNELS_KEY].find(e => s.default.can(o.Permissions.CREATE_INSTANT_INVITE, e.channel))) || void 0 === e ? void 0 : e.channel
                }), c = (0, i.useStateFromStores)([s.default], () => (0, u.canViewInviteModal)(s.default, n, a, l)), f = I(t, n, c && null != a ? a : r), S = _(t);
                return null == a && t === o.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != r ? f : S
            }
            let I = (e, t, i) => (0, a.jsx)(l.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
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
                _ = e => (0, a.jsx)(l.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
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
        483226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setChannelUnreadSetting: function() {
                    return r
                },
                setGuildUnreadSetting: function() {
                    return o
                },
                setGuildUnreadsLastCleared: function() {
                    return c
                }
            });
            var a = n("913144"),
                i = n("519705"),
                l = n("282109"),
                u = n("568734"),
                d = n("627869"),
                s = n("397336");

            function r(e, t, n) {
                let a = l.default.getGuildChannelFlags(e, t);
                a = (0, u.setFlag)(a, s.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n === d.UserUnreadSettings.ALL_MESSAGES), a = (0, u.setFlag)(a, s.ChannelNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, n === d.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS), i.default.updateChannelOverrideSettings(e, t, {
                    flags: a
                })
            }

            function o(e, t) {
                let n = l.default.getGuildFlags(e);
                n = (0, u.setFlag)(n, s.GuildNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, t), n = (0, u.setFlag)(n, s.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !t), i.default.updateGuildNotificationSettings(e, {
                    flags: n
                })
            }

            function c(e) {
                a.default.dispatch({
                    type: "GUILD_UNREADS_SET_LAST_CLEARED",
                    guildId: e
                })
            }
        },
        14526: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("473374"),
                l = n("195483"),
                u = n("574073");

            function d(e) {
                var t, n;
                let d = (0, u.default)(e.message),
                    s = (0, i.renderSystemTag)({
                        message: e.message,
                        channel: e.channel,
                        user: null !== (n = null === (t = e.message) || void 0 === t ? void 0 : t.author) && void 0 !== n ? n : e.userOverride,
                        compact: !!e.compact,
                        isRepliedMessage: !!e.isRepliedMessage
                    }),
                    r = {};
                return null != s && (r[l.UsernameDecorationTypes.SYSTEM_TAG] = s), (0, a.jsx)(l.default, {
                    ...e,
                    author: d,
                    decorations: r
                })
            }
        },
        862846: function(e, t, n) {
            "use strict";

            function a(e, t) {
                return !!(null != t && e.mentions.includes(t.author.id)) || !1
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            })
        }
    }
]);