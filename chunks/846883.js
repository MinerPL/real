            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return K
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
                E = a("42203"),
                T = a("525065"),
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
                F = a("126939"),
                L = a("612696"),
                R = a("501260"),
                U = a("871388"),
                V = a("152311"),
                Y = a("407908"),
                D = a("698372"),
                P = a("141962"),
                J = a("954016"),
                k = a("49111"),
                w = a("450484"),
                H = a("782340");

            function K(e, t) {
                let {
                    analyticsLocations: K
                } = (0, o.default)(), X = (0, l.useStateFromStores)([N.default], () => N.default.getCurrentUser()), B = (0, l.useStateFromStores)([j.default], () => j.default.getSelfEmbeddedActivities()), z = (0, l.useStateFromStoresArray)([C.default], () => C.default.getActivities().filter(e => null != e.application_id && !(null == B ? void 0 : B.has(e.application_id)))), Q = (0, l.useStateFromStoresArray)([S.default], () => null != t ? S.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), q = (0, l.useStateFromStoresArray)([j.default], () => {
                    let a = (null == e ? void 0 : e.id) != null ? j.default.getEmbeddedActivitiesForChannel(e.id) : j.NO_ACTIVITIES;
                    return null != t ? a.filter(e => {
                        let {
                            userIds: a
                        } = e;
                        return a.has(t.id)
                    }) : a
                }, [t, e]), W = (0, D.default)(), Z = (0, l.useStateFromStores)([M.default], () => null == e || e.isPrivate() || M.default.can(k.Permissions.SEND_MESSAGES, e), [e]), $ = (0, l.useStateFromStoresArray)([O.default], () => [...Q.map(e => null != e.application_id && O.default.getState(e.application_id, k.ActivityActionTypes.JOIN) === k.ActivityActionStates.LOADING), ...q.map(e => O.default.getState(e.applicationId, k.ActivityActionTypes.JOIN) === k.ActivityActionStates.LOADING)], [Q, q]), ee = (0, r.default)([...Q.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...q.map(e => e.applicationId)]), et = null == e ? void 0 : e.id, ea = (0, l.useStateFromStoresArray)([E.default, y.default, T.default, h.default, m.default, g.default, M.default], () => [...Q.map(e => (0, L.default)({
                    user: null != t ? t : X,
                    activity: e,
                    application: ee.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: et,
                    currentUser: X,
                    isEmbedded: (0, V.default)(e),
                    ChannelStore: E.default,
                    GuildStore: y.default,
                    GuildMemberCountStore: T.default,
                    RelationshipStore: h.default,
                    SelectedChannelStore: m.default,
                    VoiceStateStore: g.default,
                    PermissionStore: M.default
                })), ...q.map(e => {
                    let a = null != t ? t : X;
                    return null != a && (0, R.default)({
                        userId: a.id,
                        application: ee.find(t => (null == t ? void 0 : t.id) === e.applicationId),
                        channelId: et,
                        currentUser: X,
                        isActivitiesEnabledForCurrentPlatform: (0, F.getIsActivitiesEnabledForCurrentPlatform)(),
                        ChannelStore: E.default,
                        GuildStore: y.default,
                        VoiceStateStore: g.default,
                        PermissionStore: M.default
                    }) === R.EmbeddedActivityJoinability.CAN_JOIN
                })], [Q, ee, et, X, q, t]), en = (0, l.useStateFromStoresArray)([c.default, v.default], () => Q.map(e => e.type === k.ActivityTypes.LISTENING && null != t ? (0, p.default)(c.default, v.default, t, e) : void 0), [t, Q]), el = (0, s.useAnalyticsContext)();
                if (!Z) return null;
                let ei = (a, n) => {
                        null != e ? d.default.sendActivityInvite({
                            type: a,
                            channelId: e.id,
                            activity: n,
                            location: k.AnalyticsLocations.CONTEXT_MENU
                        }) : null != t && d.default.sendActivityInviteUser({
                            type: a,
                            userId: t.id,
                            activity: n,
                            location: k.AnalyticsLocations.CONTEXT_MENU
                        })
                    },
                    ed = (l, d) => {
                        let u = E.default.getChannel(l),
                            s = null == u ? void 0 : y.default.getGuild(u.guild_id);
                        if (null != u && null != s) {
                            if (null != t) return G.sendEmbeddedActivityInviteUser({
                                channelId: u.id,
                                applicationId: d,
                                userId: t.id,
                                location: k.InstantInviteSources.CONTEXT_MENU
                            });
                            if (null != e && e.type === k.ChannelTypes.GUILD_VOICE) return (0, i.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await a.el("310688").then(a.bind(a, "310688"));
                                return a => (0, n.jsx)(t, {
                                    ...a,
                                    guild: s,
                                    channel: u,
                                    applicationId: d,
                                    analyticsLocation: e.type === k.ChannelTypes.GUILD_VOICE ? k.AnalyticsPages.GUILD_CHANNEL : k.AnalyticsPages.DM_CHANNEL,
                                    source: k.InstantInviteSources.ACTIVITY_INVITE
                                })
                            }, {
                                modalKey: "use-activity-items-embedded-invite-modal"
                            });
                            if ((null == e ? void 0 : e.id) != null) return G.sendEmbeddedActivityInvite({
                                activityChannelId: u.id,
                                invitedChannelId: e.id,
                                applicationId: d,
                                location: k.InstantInviteSources.CONTEXT_MENU
                            })
                        }
                    },
                    eu = async e => {
                        var a;
                        await u.default.join({
                            userId: t.id,
                            sessionId: e.session_id,
                            applicationId: e.application_id,
                            channelId: m.default.getVoiceChannelId(),
                            messageId: null,
                            intent: J.ActivityIntent.PLAY,
                            embedded: (0, U.default)(e, k.ActivityFlags.EMBEDDED)
                        }), (0, Y.default)({
                            type: k.AnalyticsGameOpenTypes.JOIN,
                            userId: t.id,
                            applicationId: e.application_id,
                            partyId: null === (a = e.party) || void 0 === a ? void 0 : a.id,
                            locationObject: el.location,
                            analyticsLocations: K
                        })
                    }, es = async t => {
                        await (0, x.default)({
                            applicationId: t.applicationId,
                            currentEmbeddedApplication: W,
                            activityChannelId: null == e ? void 0 : e.id,
                            locationObject: el.location,
                            embeddedActivitiesManager: P.default,
                            analyticsLocations: K
                        })
                    }, eo = [];
                return null == B || B.forEach(a => {
                    let l = (null == t ? void 0 : t.id) != null && a.userIds.has(null == t ? void 0 : t.id),
                        d = M.default.can(k.Permissions.CREATE_INSTANT_INVITE, e),
                        u = ee.find(e => (null == e ? void 0 : e.id) === a.applicationId);
                    null != a.instanceId && !l && d && null != u && eo.push((0, n.jsx)(i.MenuItem, {
                        id: "invite-to-join-embedded",
                        label: H.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: u.name,
                        action: () => {
                            ed(a.channelId, a.applicationId)
                        }
                    }, "self-embedded-".concat(a.applicationId)))
                }), z.forEach((e, t) => {
                    e.type === k.ActivityTypes.PLAYING && (0, U.default)(e, k.ActivityFlags.JOIN) ? eo.push((0, n.jsx)(i.MenuItem, {
                        id: "invite-to-join",
                        label: H.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: e.name,
                        action: () => ei(k.ActivityActionTypes.JOIN, e)
                    }, "self".concat(t))) : e.type === k.ActivityTypes.LISTENING && (0, U.default)(e, k.ActivityFlags.SYNC) && eo.push((0, n.jsx)(i.MenuItem, {
                        id: "invite-to-listen",
                        label: H.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: e.name,
                        action: () => ei(k.ActivityActionTypes.LISTEN, e)
                    }, "self".concat(t)))
                }), eo.length > 0 && eo.push((0, n.jsx)(i.MenuSeparator, {})), Q.forEach((a, l) => {
                    if (a.type === k.ActivityTypes.PLAYING && (0, U.default)(a, k.ActivityFlags.JOIN) && null != a.session_id && null != a.application_id) {
                        if (ea[l]) {
                            let e = $[l];
                            eo.push((0, n.jsx)(i.MenuItem, {
                                id: "join",
                                label: e ? H.default.Messages.USER_ACTIVITY_JOINING : H.default.Messages.JOIN,
                                disabled: e,
                                hint: e ? (0, n.jsx)(i.Spinner, {
                                    type: i.Spinner.Type.PULSING_ELLIPSIS
                                }) : null,
                                subtext: a.name,
                                action: () => eu(a)
                            }, l))
                        } else eo.push((0, n.jsx)(i.MenuItem, {
                            id: "ask-to-join",
                            label: H.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                            subtext: a.name,
                            action: () => ei(k.ActivityActionTypes.JOIN_REQUEST, a)
                        }, l))
                    } else if (a.type === k.ActivityTypes.LISTENING && (0, U.default)(a, k.ActivityFlags.SYNC) && null != en[l]) {
                        let d = en[l],
                            {
                                notPlayable: u,
                                playingSameTrack: s,
                                isCurrentUser: o,
                                syncingWithUser: r,
                                syncingWithParty: c
                            } = d,
                            p = o || u || s,
                            v = o || r || c;
                        eo.push((0, n.jsx)(i.MenuItem, {
                            id: "spotify-play-".concat(a.session_id),
                            action: () => (0, A.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            label: (0, f.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            subtext: p ? (0, I.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: p
                        }, "spotify-play-".concat(a.session_id)), (0, n.jsx)(i.MenuItem, {
                            id: "spotify-sync-".concat(a.session_id),
                            action: () => (0, _.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                            label: H.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: v ? (0, I.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: v
                        }, "spotify-sync-".concat(a.session_id)))
                    }
                }), q.forEach((e, t) => {
                    var a;
                    let l = e.userIds.has(null !== (a = null == X ? void 0 : X.id) && void 0 !== a ? a : ""),
                        d = t + Q.length,
                        u = $[d] || l,
                        s = H.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    l ? s = H.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : $[d] && (s = H.default.Messages.USER_ACTIVITY_JOINING);
                    let o = ee.find(t => (null == t ? void 0 : t.id) === e.applicationId);
                    ea[d] && null != o && eo.push((0, n.jsx)(i.MenuItem, {
                        id: "embedded-activity-join-".concat(e.applicationId),
                        label: s,
                        disabled: u,
                        hint: $[d] ? (0, n.jsx)(i.Spinner, {
                            type: i.Spinner.Type.PULSING_ELLIPSIS
                        }) : null,
                        subtext: o.name,
                        action: () => es(e)
                    }, "embedded-activity-".concat(e.applicationId)))
                }), eo
            }