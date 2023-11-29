(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["70201"], {
        838446: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            });
            var i = a("37983");
            a("884691");
            var n = a("901582");

            function l(e, t) {
                return function(a) {
                    return (0, i.jsx)(n.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, i.jsx)(e, {
                            ...a
                        })
                    })
                }
            }
        },
        158534: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            });
            var i = a("37983");
            a("884691");
            var n = a("685665");

            function l(e, t) {
                return function(a) {
                    let {
                        AnalyticsLocationProvider: l
                    } = (0, n.default)(t);
                    return (0, i.jsx)(l, {
                        children: (0, i.jsx)(e, {
                            ...a
                        })
                    })
                }
            }
        },
        846883: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return J
                }
            }), a("222007"), a("424973");
            var i = a("37983");
            a("884691");
            var n = a("446674"),
                l = a("77078"),
                d = a("260365"),
                u = a("823411"),
                s = a("997289"),
                o = a("685665"),
                r = a("442939"),
                c = a("662285"),
                f = a("782911"),
                I = a("629414"),
                p = a("53887"),
                S = a("486150"),
                _ = a("555759"),
                T = a("271938"),
                v = a("42203"),
                A = a("525065"),
                m = a("305961"),
                y = a("957255"),
                E = a("824563"),
                N = a("27618"),
                C = a("18494"),
                M = a("101125"),
                g = a("697218"),
                h = a("800762"),
                b = a("953998"),
                O = a("387111"),
                x = a("550766"),
                L = a("191225"),
                R = a("706508"),
                U = a("612696"),
                j = a("871388"),
                F = a("152311"),
                D = a("407908"),
                V = a("698372"),
                P = a("141962"),
                G = a("954016"),
                Y = a("49111"),
                k = a("450484"),
                B = a("782340");

            function J(e, t) {
                let {
                    analyticsLocations: J
                } = (0, o.default)(), w = (0, n.useStateFromStores)([g.default], () => g.default.getCurrentUser()), K = (0, n.useStateFromStores)([L.default], () => L.default.getSelfEmbeddedActivities()), H = (0, n.useStateFromStoresArray)([M.default], () => M.default.getActivities().filter(e => null != e.application_id && !(null == K ? void 0 : K.has(e.application_id)))), X = (0, n.useStateFromStoresArray)([E.default], () => null != t ? E.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), z = (0, n.useStateFromStoresArray)([L.default], () => {
                    let a = (null == e ? void 0 : e.id) != null ? L.default.getEmbeddedActivitiesForChannel(e.id) : L.NO_ACTIVITIES;
                    return null != t ? a.filter(e => {
                        let {
                            connections: a
                        } = e;
                        return a.has(t.id)
                    }) : a
                }, [t, e]), W = (0, V.default)(), q = (0, n.useStateFromStores)([y.default], () => null == e || e.isPrivate() || y.default.can(Y.Permissions.SEND_MESSAGES, e), [e]), Q = (0, n.useStateFromStoresArray)([b.default], () => [...X.map(e => null != e.application_id && b.default.getState(e.application_id, Y.ActivityActionTypes.JOIN) === Y.ActivityActionStates.LOADING), ...z.map(e => b.default.getState(e.application_id, Y.ActivityActionTypes.JOIN) === Y.ActivityActionStates.LOADING)], [X, z]), Z = (0, r.default)([...X.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...z.map(e => e.application_id)]), $ = null == e ? void 0 : e.id, ee = (0, n.useStateFromStoresArray)([v.default, m.default, A.default, N.default, C.default, h.default, y.default], () => [...X.map(e => (0, U.default)({
                    user: null != t ? t : w,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: w,
                    isEmbedded: (0, F.default)(e),
                    ChannelStore: v.default,
                    GuildStore: m.default,
                    GuildMemberCountStore: A.default,
                    RelationshipStore: N.default,
                    SelectedChannelStore: C.default,
                    VoiceStateStore: h.default,
                    PermissionStore: y.default
                })), ...z.map(e => (0, U.default)({
                    user: null != t ? t : w,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: w,
                    isEmbedded: !0,
                    ChannelStore: v.default,
                    GuildStore: m.default,
                    GuildMemberCountStore: A.default,
                    RelationshipStore: N.default,
                    SelectedChannelStore: C.default,
                    VoiceStateStore: h.default,
                    PermissionStore: y.default
                }))], [X, Z, $, w, z, t]), et = (0, n.useStateFromStoresArray)([c.default, T.default], () => X.map(e => e.type === Y.ActivityTypes.LISTENING && null != t ? (0, p.default)(c.default, T.default, t, e) : void 0), [t, X]), ea = (0, s.useAnalyticsContext)();
                if (!q) return null;
                let ei = (a, i) => {
                        null != e ? d.default.sendActivityInvite({
                            type: a,
                            channelId: e.id,
                            activity: i,
                            location: Y.AnalyticsLocations.CONTEXT_MENU
                        }) : null != t && d.default.sendActivityInviteUser({
                            type: a,
                            userId: t.id,
                            activity: i,
                            location: Y.AnalyticsLocations.CONTEXT_MENU
                        })
                    },
                    en = (n, d) => {
                        let u = v.default.getChannel(n),
                            s = null == u ? void 0 : m.default.getGuild(u.guild_id);
                        if (null != u && null != s) {
                            if (null != t) return x.sendEmbeddedActivityInviteUser({
                                channelId: u.id,
                                applicationId: d,
                                userId: t.id,
                                location: Y.InstantInviteSources.CONTEXT_MENU
                            });
                            if (null != e && e.type === Y.ChannelTypes.GUILD_VOICE) return (0, l.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await a.el("310688").then(a.bind(a, "310688"));
                                return a => (0, i.jsx)(t, {
                                    ...a,
                                    guild: s,
                                    channel: u,
                                    applicationId: d,
                                    analyticsLocation: e.type === Y.ChannelTypes.GUILD_VOICE ? Y.AnalyticsPages.GUILD_CHANNEL : Y.AnalyticsPages.DM_CHANNEL,
                                    source: Y.InstantInviteSources.ACTIVITY_INVITE
                                })
                            }, {
                                modalKey: "use-activity-items-embedded-invite-modal"
                            });
                            if ((null == e ? void 0 : e.id) != null) return x.sendEmbeddedActivityInvite({
                                activityChannelId: u.id,
                                invitedChannelId: e.id,
                                applicationId: d,
                                location: Y.InstantInviteSources.CONTEXT_MENU
                            })
                        }
                    },
                    el = async e => {
                        var a;
                        await u.default.join({
                            userId: t.id,
                            sessionId: e.session_id,
                            applicationId: e.application_id,
                            channelId: C.default.getVoiceChannelId(),
                            messageId: null,
                            intent: G.ActivityIntent.PLAY,
                            embedded: (0, j.default)(e, Y.ActivityFlags.EMBEDDED)
                        }), (0, D.default)({
                            type: Y.AnalyticsGameOpenTypes.JOIN,
                            userId: t.id,
                            applicationId: e.application_id,
                            partyId: null === (a = e.party) || void 0 === a ? void 0 : a.id,
                            locationObject: ea.location,
                            analyticsLocations: J
                        })
                    }, ed = async t => {
                        await (0, R.default)({
                            activity: t,
                            currentEmbeddedApplication: W,
                            activityChannelId: null == e ? void 0 : e.id,
                            locationObject: ea.location,
                            embeddedActivitiesManager: P.default,
                            analyticsLocations: J
                        })
                    }, eu = [];
                return null == K || K.forEach(a => {
                    let n = (null == t ? void 0 : t.id) != null && a.connections.has(null == t ? void 0 : t.id),
                        d = y.default.can(Y.Permissions.CREATE_INSTANT_INVITE, e);
                    null != a.activity_id && !n && d && eu.push((0, i.jsx)(l.MenuItem, {
                        id: "invite-to-join-embedded",
                        label: B.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: a.name,
                        action: () => {
                            en(a.channelId, a.application_id)
                        }
                    }, "self-embedded-".concat(a.application_id)))
                }), H.forEach((e, t) => {
                    e.type === Y.ActivityTypes.PLAYING && (0, j.default)(e, Y.ActivityFlags.JOIN) ? eu.push((0, i.jsx)(l.MenuItem, {
                        id: "invite-to-join",
                        label: B.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: e.name,
                        action: () => ei(Y.ActivityActionTypes.JOIN, e)
                    }, "self".concat(t))) : e.type === Y.ActivityTypes.LISTENING && (0, j.default)(e, Y.ActivityFlags.SYNC) && eu.push((0, i.jsx)(l.MenuItem, {
                        id: "invite-to-listen",
                        label: B.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: e.name,
                        action: () => ei(Y.ActivityActionTypes.LISTEN, e)
                    }, "self".concat(t)))
                }), eu.length > 0 && eu.push((0, i.jsx)(l.MenuSeparator, {})), X.forEach((a, n) => {
                    if (a.type === Y.ActivityTypes.PLAYING && (0, j.default)(a, Y.ActivityFlags.JOIN) && null != a.session_id && null != a.application_id) {
                        if (ee[n]) {
                            let e = Q[n];
                            eu.push((0, i.jsx)(l.MenuItem, {
                                id: "join",
                                label: e ? B.default.Messages.USER_ACTIVITY_JOINING : B.default.Messages.JOIN,
                                disabled: e,
                                hint: e ? (0, i.jsx)(l.Spinner, {
                                    type: l.Spinner.Type.PULSING_ELLIPSIS
                                }) : null,
                                subtext: a.name,
                                action: () => el(a)
                            }, n))
                        } else eu.push((0, i.jsx)(l.MenuItem, {
                            id: "ask-to-join",
                            label: B.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                            subtext: a.name,
                            action: () => ei(Y.ActivityActionTypes.JOIN_REQUEST, a)
                        }, n))
                    } else if (a.type === Y.ActivityTypes.LISTENING && (0, j.default)(a, Y.ActivityFlags.SYNC) && null != et[n]) {
                        let d = et[n],
                            {
                                notPlayable: u,
                                playingSameTrack: s,
                                isCurrentUser: o,
                                syncingWithUser: r,
                                syncingWithParty: c
                            } = d,
                            p = o || u || s,
                            T = o || r || c;
                        eu.push((0, i.jsx)(l.MenuItem, {
                            id: "spotify-play-".concat(a.session_id),
                            action: () => (0, _.default)(d, k.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            label: (0, f.default)(d, k.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            subtext: p ? (0, I.default)(d, k.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? O.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: p
                        }, "spotify-play-".concat(a.session_id)), (0, i.jsx)(l.MenuItem, {
                            id: "spotify-sync-".concat(a.session_id),
                            action: () => (0, S.default)(d, k.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                            label: B.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: T ? (0, I.default)(d, k.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? O.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: T
                        }, "spotify-sync-".concat(a.session_id)))
                    }
                }), z.forEach((e, t) => {
                    var a;
                    let n = e.connections.has(null !== (a = null == w ? void 0 : w.id) && void 0 !== a ? a : ""),
                        d = t + X.length,
                        u = Q[d] || n,
                        s = B.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    n ? s = B.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : Q[d] && (s = B.default.Messages.USER_ACTIVITY_JOINING), ee[d] && eu.push((0, i.jsx)(l.MenuItem, {
                        id: "embedded-activity-join-".concat(e.application_id),
                        label: s,
                        disabled: u,
                        hint: Q[d] ? (0, i.jsx)(l.Spinner, {
                            type: l.Spinner.Type.PULSING_ELLIPSIS
                        }) : null,
                        subtext: e.name,
                        action: () => ed(e)
                    }, "embedded-activity-".concat(e.application_id)))
                }), eu
            }
        },
        170990: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            }), a("222007");
            var i = a("37983"),
                n = a("884691"),
                l = a("446674"),
                d = a("77078"),
                u = a("736964"),
                s = a("27618"),
                o = a("697218"),
                r = a("782340");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
                    {
                        id: a,
                        username: c,
                        bot: f
                    } = e,
                    I = (0, l.useStateFromStores)([o.default], () => {
                        var e;
                        return (null === (e = o.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === a
                    }, [a]),
                    [p, S] = (0, l.useStateFromStoresArray)([s.default], () => [s.default.isFriend(a), s.default.isBlocked(a)], [a]),
                    [_, T] = n.useState(!1);
                return f || I ? null : p ? (0, i.jsx)(d.MenuItem, {
                    id: "remove-friend",
                    label: r.default.Messages.REMOVE_FRIEND,
                    action: function() {
                        (0, d.openModal)(e => (0, i.jsx)(d.ConfirmModal, {
                            header: r.default.Messages.REMOVE_FRIEND_TITLE.format({
                                name: c
                            }),
                            confirmText: r.default.Messages.REMOVE_FRIEND,
                            cancelText: r.default.Messages.CANCEL,
                            onConfirm: () => {
                                u.default.removeFriend(a, {
                                    location: t
                                }), T(!1)
                            },
                            ...e,
                            children: (0, i.jsx)(d.Text, {
                                variant: "text-md/normal",
                                children: r.default.Messages.REMOVE_FRIEND_BODY.format({
                                    name: c
                                })
                            })
                        }))
                    }
                }) : (0, i.jsx)(d.MenuItem, {
                    id: "add-friend",
                    label: _ ? r.default.Messages.ADD_FRIEND_BUTTON_AFTER : r.default.Messages.ADD_FRIEND,
                    action: () => {
                        !_ && (u.default.addRelationship({
                            userId: a,
                            context: {
                                location: t
                            }
                        }), T(!0))
                    },
                    disabled: S || _ && !p
                })
            }
        },
        304582: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            }), a("222007");
            var i = a("37983");
            a("884691");
            var n = a("446674"),
                l = a("77078"),
                d = a("27618"),
                u = a("782340");

            function s(e) {
                let t = e.id,
                    [s, o] = (0, n.useStateFromStoresArray)([d.default], () => {
                        var e;
                        return [d.default.isFriend(t), null !== (e = d.default.getNickname(t)) && void 0 !== e ? e : null]
                    }, [t]);
                if (!s) return null;
                let r = null == o ? u.default.Messages.ADD_FRIEND_NICKNAME : u.default.Messages.CHANGE_FRIEND_NICKNAME;
                return (0, i.jsx)(l.MenuItem, {
                    id: null == o ? "add-friend-nickname" : "edit-friend-nickname",
                    label: r,
                    action: () => {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("557890").then(a.bind(a, "557890"));
                            return a => (0, i.jsx)(t, {
                                user: e,
                                nickname: o,
                                ...a
                            })
                        })
                    }
                })
            }
        },
        72057: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            });
            var i = a("37983"),
                n = a("884691"),
                l = a("77078"),
                d = a("349649"),
                u = a("401642"),
                s = a("271938"),
                o = a("102985"),
                r = a("599110"),
                c = a("49111"),
                f = a("590456"),
                I = a("782340");

            function p(e) {
                let {
                    user: t,
                    guildId: a,
                    context: p
                } = e, {
                    id: S
                } = t, {
                    loading: _,
                    note: T
                } = (0, d.default)(S), v = !_ && null != T && T.length > 0, A = p === c.AppContext.POPOUT, m = n.useContext(r.AnalyticsContext);
                return S === s.default.getId() || o.default.hidePersonalInformation || A ? null : (0, i.jsx)(l.MenuItem, {
                    id: "note",
                    label: _ ? I.default.Messages.LOADING_NOTE : v ? I.default.Messages.EDIT_NOTE : I.default.Messages.ADD_NOTE,
                    action: () => {
                        (0, u.openUserProfileModal)({
                            userId: t.id,
                            section: f.UserProfileSections.USER_INFO,
                            guildId: a,
                            autoFocusNote: !0,
                            analyticsLocation: m.location
                        })
                    }
                })
            }
        },
        489836: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var i = a("37983");
            a("884691");
            var n = a("446674"),
                l = a("77078"),
                d = a("736964"),
                u = a("27618"),
                s = a("697218"),
                o = a("49111"),
                r = a("782340");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
                    {
                        id: a
                    } = e,
                    c = (0, n.useStateFromStores)([s.default], () => {
                        var e;
                        return (null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === a
                    }, [a]),
                    f = (0, n.useStateFromStores)([u.default], () => u.default.isBlocked(a), [a]);
                if (c) return null;

                function I() {
                    d.default.addRelationship({
                        userId: a,
                        context: {
                            location: t
                        },
                        type: o.RelationshipTypes.BLOCKED
                    })
                }
                return (0, i.jsx)(l.MenuItem, {
                    id: "block",
                    label: f ? r.default.Messages.UNBLOCK : r.default.Messages.BLOCK,
                    action: () => f ? d.default.unblockUser(a, {
                        location: t
                    }) : (0, l.openModal)(t => (0, i.jsx)(l.ConfirmModal, {
                        header: r.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                            name: e.username
                        }),
                        confirmText: r.default.Messages.BLOCK,
                        cancelText: r.default.Messages.CANCEL,
                        onConfirm: I,
                        ...t,
                        children: (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: r.default.Messages.CONFIRM_USER_BLOCK_BODY.format({
                                name: e.username
                            })
                        })
                    }))
                })
            }
        },
        406703: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            });
            var i = a("37983");
            a("884691");
            var n = a("446674"),
                l = a("77078"),
                d = a("450911"),
                u = a("168973"),
                s = a("271938"),
                o = a("42203"),
                r = a("27618"),
                c = a("18494"),
                f = a("49111"),
                I = a("782340");

            function p(e, t) {
                let p = s.default.getId(),
                    S = t === f.AppContext.POPOUT,
                    _ = (0, n.useStateFromStores)([c.default, o.default], () => c.default.getVoiceChannelId() === o.default.getDMFromUserId(e.id)),
                    T = (0, n.useStateFromStores)([r.default], () => r.default.isBlocked(e.id));
                if (p === e.id || S || _ || e.bot) return null;
                let v = () => d.default.openPrivateChannel(e.id, !0),
                    A = !u.default.disableCallUserConfirmationPrompt;
                return (0, i.jsx)(l.MenuItem, {
                    id: "call",
                    label: I.default.Messages.CALL,
                    action: A ? () => {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("241890").then(a.bind(a, "241890"));
                            return t => (0, i.jsx)(e, {
                                onSubmit: v,
                                ...t
                            })
                        })
                    } : v,
                    disabled: T
                })
            }
        },
        314838: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return y
                }
            }), a("424973"), a("222007");
            var i = a("37983"),
                n = a("884691"),
                l = a("446674"),
                d = a("77078"),
                u = a("450911"),
                s = a("970728"),
                o = a("819689"),
                r = a("242757"),
                c = a("42203"),
                f = a("923959"),
                I = a("305961"),
                p = a("957255"),
                S = a("27618"),
                _ = a("677099"),
                T = a("697218"),
                v = a("49111"),
                A = a("782340");

            function m(e, t) {
                u.default.ensurePrivateChannel(e).then(e => {
                    null != c.default.getChannel(e) && o.default.sendInvite(e, t, "context_menu", null)
                })
            }

            function y(e, t) {
                let a = (0, l.useStateFromStores)([T.default], () => T.default.getCurrentUser(), []),
                    u = (0, l.useStateFromStoresArray)([_.default, I.default, p.default], () => {
                        let e = _.default.getFlattenedGuildIds(),
                            a = [];
                        return e.forEach(e => {
                            let i = I.default.getGuild(e);
                            null != i && (0, r.canViewInviteModal)(p.default, i) && i.id !== t && a.push(i)
                        }), a
                    }, [t]),
                    [o, c] = n.useState({});
                return (null == a ? void 0 : a.id) === e.id || e.bot || 0 === u.length || S.default.isBlocked(e.id) ? null : (0, i.jsx)(d.MenuItem, {
                    id: "invite-to-server",
                    label: A.default.Messages.INVITE_TO_SERVER,
                    children: u.map(t => o[t.id] ? (0, i.jsx)(d.MenuItem, {
                        id: t.id,
                        disabled: !0,
                        label: A.default.Messages.INVITE_SENT
                    }, t.id) : (0, i.jsx)(d.MenuItem, {
                        id: t.id,
                        label: t.name,
                        action: () => (function(e, t) {
                            let a = f.default.getDefaultChannel(e.id, !0);
                            if (null != a) {
                                if (c({
                                        ...o,
                                        [e.id]: !0
                                    }), !p.default.can(v.Permissions.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode) {
                                    m(t, e.vanityURLCode);
                                    return
                                }
                                s.default.createInvite(a.id, {
                                    max_uses: 1,
                                    unique: !0
                                }, "User Invite Context Menu").then(e => m(t, e.code))
                            }
                        })(t, e.id)
                    }, t.id))
                })
            }
        },
        806179: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var i = a("37983"),
                n = a("884691"),
                l = a("77078"),
                d = a("244201"),
                u = a("401642"),
                s = a("599110"),
                o = a("49111"),
                r = a("782340");

            function c(e, t, a) {
                let c = n.useContext(s.AnalyticsContext),
                    f = (0, d.useWindowDispatch)();
                return (0, i.jsx)(l.MenuItem, {
                    id: "user-profile",
                    label: r.default.Messages.PROFILE,
                    action: () => {
                        (0, u.openUserProfileModal)({
                            userId: e,
                            guildId: null != t ? t : void 0,
                            channelId: null != a ? a : void 0,
                            analyticsLocation: c.location
                        }), f.dispatch(o.ComponentActions.POPOUT_CLOSE)
                    }
                })
            }
        },
        623879: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var i = a("37983");
            a("884691");
            var n = a("446674"),
                l = a("77078"),
                d = a("287585"),
                u = a("824563"),
                s = a("49111"),
                o = a("782340");

            function r(e) {
                let t = (0, n.useStateFromStores)([u.default], () => (0, d.default)(u.default.findActivity(e, e => e.type === s.ActivityTypes.STREAMING)), [e]);
                return null == t ? null : (0, i.jsx)(l.MenuItem, {
                    id: "watch-stream",
                    label: o.default.Messages.WATCH_STREAM,
                    action: () => window.open(t, "_blank")
                })
            }
        }
    }
]);