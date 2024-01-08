            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return w
                }
            }), a("222007"), a("424973");
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                i = a("77078"),
                d = a("260365"),
                u = a("823411"),
                s = a("997289"),
                o = a("685665"),
                r = a("442939"),
                c = a("662285"),
                f = a("782911"),
                I = a("629414"),
                p = a("53887"),
                _ = a("486150"),
                A = a("555759"),
                v = a("271938"),
                T = a("42203"),
                E = a("525065"),
                y = a("305961"),
                M = a("957255"),
                S = a("824563"),
                h = a("27618"),
                m = a("18494"),
                C = a("101125"),
                N = a("697218"),
                g = a("800762"),
                O = a("953998"),
                b = a("387111"),
                G = a("550766"),
                j = a("191225"),
                x = a("706508"),
                F = a("612696"),
                L = a("871388"),
                R = a("152311"),
                U = a("407908"),
                V = a("698372"),
                Y = a("141962"),
                D = a("954016"),
                P = a("49111"),
                J = a("450484"),
                k = a("782340");

            function w(e, t) {
                let {
                    analyticsLocations: w
                } = (0, o.default)(), H = (0, l.useStateFromStores)([N.default], () => N.default.getCurrentUser()), K = (0, l.useStateFromStores)([j.default], () => j.default.getSelfEmbeddedActivities()), X = (0, l.useStateFromStoresArray)([C.default], () => C.default.getActivities().filter(e => null != e.application_id && !(null == K ? void 0 : K.has(e.application_id)))), B = (0, l.useStateFromStoresArray)([S.default], () => null != t ? S.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), z = (0, l.useStateFromStoresArray)([j.default], () => {
                    let a = (null == e ? void 0 : e.id) != null ? j.default.getEmbeddedActivitiesForChannel(e.id) : j.NO_ACTIVITIES;
                    return null != t ? a.filter(e => {
                        let {
                            connections: a
                        } = e;
                        return a.has(t.id)
                    }) : a
                }, [t, e]), Q = (0, V.default)(), q = (0, l.useStateFromStores)([M.default], () => null == e || e.isPrivate() || M.default.can(P.Permissions.SEND_MESSAGES, e), [e]), W = (0, l.useStateFromStoresArray)([O.default], () => [...B.map(e => null != e.application_id && O.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING), ...z.map(e => O.default.getState(e.application_id, P.ActivityActionTypes.JOIN) === P.ActivityActionStates.LOADING)], [B, z]), Z = (0, r.default)([...B.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...z.map(e => e.application_id)]), $ = null == e ? void 0 : e.id, ee = (0, l.useStateFromStoresArray)([T.default, y.default, E.default, h.default, m.default, g.default, M.default], () => [...B.map(e => (0, F.default)({
                    user: null != t ? t : H,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: H,
                    isEmbedded: (0, R.default)(e),
                    ChannelStore: T.default,
                    GuildStore: y.default,
                    GuildMemberCountStore: E.default,
                    RelationshipStore: h.default,
                    SelectedChannelStore: m.default,
                    VoiceStateStore: g.default,
                    PermissionStore: M.default
                })), ...z.map(e => (0, F.default)({
                    user: null != t ? t : H,
                    activity: e,
                    application: Z.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: $,
                    currentUser: H,
                    isEmbedded: !0,
                    ChannelStore: T.default,
                    GuildStore: y.default,
                    GuildMemberCountStore: E.default,
                    RelationshipStore: h.default,
                    SelectedChannelStore: m.default,
                    VoiceStateStore: g.default,
                    PermissionStore: M.default
                }))], [B, Z, $, H, z, t]), et = (0, l.useStateFromStoresArray)([c.default, v.default], () => B.map(e => e.type === P.ActivityTypes.LISTENING && null != t ? (0, p.default)(c.default, v.default, t, e) : void 0), [t, B]), ea = (0, s.useAnalyticsContext)();
                if (!q) return null;
                let en = (a, n) => {
                        null != e ? d.default.sendActivityInvite({
                            type: a,
                            channelId: e.id,
                            activity: n,
                            location: P.AnalyticsLocations.CONTEXT_MENU
                        }) : null != t && d.default.sendActivityInviteUser({
                            type: a,
                            userId: t.id,
                            activity: n,
                            location: P.AnalyticsLocations.CONTEXT_MENU
                        })
                    },
                    el = (l, d) => {
                        let u = T.default.getChannel(l),
                            s = null == u ? void 0 : y.default.getGuild(u.guild_id);
                        if (null != u && null != s) {
                            if (null != t) return G.sendEmbeddedActivityInviteUser({
                                channelId: u.id,
                                applicationId: d,
                                userId: t.id,
                                location: P.InstantInviteSources.CONTEXT_MENU
                            });
                            if (null != e && e.type === P.ChannelTypes.GUILD_VOICE) return (0, i.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await a.el("310688").then(a.bind(a, "310688"));
                                return a => (0, n.jsx)(t, {
                                    ...a,
                                    guild: s,
                                    channel: u,
                                    applicationId: d,
                                    analyticsLocation: e.type === P.ChannelTypes.GUILD_VOICE ? P.AnalyticsPages.GUILD_CHANNEL : P.AnalyticsPages.DM_CHANNEL,
                                    source: P.InstantInviteSources.ACTIVITY_INVITE
                                })
                            }, {
                                modalKey: "use-activity-items-embedded-invite-modal"
                            });
                            if ((null == e ? void 0 : e.id) != null) return G.sendEmbeddedActivityInvite({
                                activityChannelId: u.id,
                                invitedChannelId: e.id,
                                applicationId: d,
                                location: P.InstantInviteSources.CONTEXT_MENU
                            })
                        }
                    },
                    ei = async e => {
                        var a;
                        await u.default.join({
                            userId: t.id,
                            sessionId: e.session_id,
                            applicationId: e.application_id,
                            channelId: m.default.getVoiceChannelId(),
                            messageId: null,
                            intent: D.ActivityIntent.PLAY,
                            embedded: (0, L.default)(e, P.ActivityFlags.EMBEDDED)
                        }), (0, U.default)({
                            type: P.AnalyticsGameOpenTypes.JOIN,
                            userId: t.id,
                            applicationId: e.application_id,
                            partyId: null === (a = e.party) || void 0 === a ? void 0 : a.id,
                            locationObject: ea.location,
                            analyticsLocations: w
                        })
                    }, ed = async t => {
                        await (0, x.default)({
                            activity: t,
                            currentEmbeddedApplication: Q,
                            activityChannelId: null == e ? void 0 : e.id,
                            locationObject: ea.location,
                            embeddedActivitiesManager: Y.default,
                            analyticsLocations: w
                        })
                    }, eu = [];
                return null == K || K.forEach(a => {
                    let l = (null == t ? void 0 : t.id) != null && a.connections.has(null == t ? void 0 : t.id),
                        d = M.default.can(P.Permissions.CREATE_INSTANT_INVITE, e);
                    null != a.activity_id && !l && d && eu.push((0, n.jsx)(i.MenuItem, {
                        id: "invite-to-join-embedded",
                        label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: a.name,
                        action: () => {
                            el(a.channelId, a.application_id)
                        }
                    }, "self-embedded-".concat(a.application_id)))
                }), X.forEach((e, t) => {
                    e.type === P.ActivityTypes.PLAYING && (0, L.default)(e, P.ActivityFlags.JOIN) ? eu.push((0, n.jsx)(i.MenuItem, {
                        id: "invite-to-join",
                        label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: e.name,
                        action: () => en(P.ActivityActionTypes.JOIN, e)
                    }, "self".concat(t))) : e.type === P.ActivityTypes.LISTENING && (0, L.default)(e, P.ActivityFlags.SYNC) && eu.push((0, n.jsx)(i.MenuItem, {
                        id: "invite-to-listen",
                        label: k.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: e.name,
                        action: () => en(P.ActivityActionTypes.LISTEN, e)
                    }, "self".concat(t)))
                }), eu.length > 0 && eu.push((0, n.jsx)(i.MenuSeparator, {})), B.forEach((a, l) => {
                    if (a.type === P.ActivityTypes.PLAYING && (0, L.default)(a, P.ActivityFlags.JOIN) && null != a.session_id && null != a.application_id) {
                        if (ee[l]) {
                            let e = W[l];
                            eu.push((0, n.jsx)(i.MenuItem, {
                                id: "join",
                                label: e ? k.default.Messages.USER_ACTIVITY_JOINING : k.default.Messages.JOIN,
                                disabled: e,
                                hint: e ? (0, n.jsx)(i.Spinner, {
                                    type: i.Spinner.Type.PULSING_ELLIPSIS
                                }) : null,
                                subtext: a.name,
                                action: () => ei(a)
                            }, l))
                        } else eu.push((0, n.jsx)(i.MenuItem, {
                            id: "ask-to-join",
                            label: k.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                            subtext: a.name,
                            action: () => en(P.ActivityActionTypes.JOIN_REQUEST, a)
                        }, l))
                    } else if (a.type === P.ActivityTypes.LISTENING && (0, L.default)(a, P.ActivityFlags.SYNC) && null != et[l]) {
                        let d = et[l],
                            {
                                notPlayable: u,
                                playingSameTrack: s,
                                isCurrentUser: o,
                                syncingWithUser: r,
                                syncingWithParty: c
                            } = d,
                            p = o || u || s,
                            v = o || r || c;
                        eu.push((0, n.jsx)(i.MenuItem, {
                            id: "spotify-play-".concat(a.session_id),
                            action: () => (0, A.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            label: (0, f.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            subtext: p ? (0, I.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: p
                        }, "spotify-play-".concat(a.session_id)), (0, n.jsx)(i.MenuItem, {
                            id: "spotify-sync-".concat(a.session_id),
                            action: () => (0, _.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                            label: k.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: v ? (0, I.default)(d, J.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: v
                        }, "spotify-sync-".concat(a.session_id)))
                    }
                }), z.forEach((e, t) => {
                    var a;
                    let l = e.connections.has(null !== (a = null == H ? void 0 : H.id) && void 0 !== a ? a : ""),
                        d = t + B.length,
                        u = W[d] || l,
                        s = k.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    l ? s = k.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : W[d] && (s = k.default.Messages.USER_ACTIVITY_JOINING), ee[d] && eu.push((0, n.jsx)(i.MenuItem, {
                        id: "embedded-activity-join-".concat(e.application_id),
                        label: s,
                        disabled: u,
                        hint: W[d] ? (0, n.jsx)(i.Spinner, {
                            type: i.Spinner.Type.PULSING_ELLIPSIS
                        }) : null,
                        subtext: e.name,
                        action: () => ed(e)
                    }, "embedded-activity-".concat(e.application_id)))
                }), eu
            }