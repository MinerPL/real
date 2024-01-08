            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return K
                }
            }), n("222007"), n("424973");
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                i = n("77078"),
                d = n("260365"),
                u = n("823411"),
                s = n("997289"),
                o = n("685665"),
                r = n("442939"),
                c = n("662285"),
                f = n("782911"),
                I = n("629414"),
                p = n("53887"),
                _ = n("486150"),
                A = n("555759"),
                v = n("271938"),
                E = n("42203"),
                T = n("525065"),
                M = n("305961"),
                y = n("957255"),
                h = n("824563"),
                m = n("27618"),
                S = n("18494"),
                C = n("101125"),
                N = n("697218"),
                g = n("800762"),
                O = n("953998"),
                b = n("387111"),
                G = n("550766"),
                j = n("191225"),
                x = n("706508"),
                F = n("126939"),
                L = n("612696"),
                R = n("501260"),
                U = n("871388"),
                V = n("152311"),
                Y = n("407908"),
                D = n("698372"),
                P = n("141962"),
                J = n("954016"),
                k = n("49111"),
                w = n("450484"),
                H = n("782340");

            function K(e, t) {
                let {
                    analyticsLocations: K
                } = (0, o.default)(), X = (0, l.useStateFromStores)([N.default], () => N.default.getCurrentUser()), z = (0, l.useStateFromStores)([j.default], () => j.default.getSelfEmbeddedActivities()), B = (0, l.useStateFromStoresArray)([C.default], () => C.default.getActivities().filter(e => null != e.application_id && !(null == z ? void 0 : z.has(e.application_id)))), Q = (0, l.useStateFromStoresArray)([h.default], () => null != t ? h.default.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : [], [t, e]), q = (0, l.useStateFromStoresArray)([j.default], () => {
                    let n = (null == e ? void 0 : e.id) != null ? j.default.getEmbeddedActivitiesForChannel(e.id) : j.NO_ACTIVITIES;
                    return null != t ? n.filter(e => {
                        let {
                            userIds: n
                        } = e;
                        return n.has(t.id)
                    }) : n
                }, [t, e]), W = (0, D.default)(), Z = (0, l.useStateFromStores)([y.default], () => null == e || e.isPrivate() || y.default.can(k.Permissions.SEND_MESSAGES, e), [e]), $ = (0, l.useStateFromStoresArray)([O.default], () => [...Q.map(e => null != e.application_id && O.default.getState(e.application_id, k.ActivityActionTypes.JOIN) === k.ActivityActionStates.LOADING), ...q.map(e => O.default.getState(e.applicationId, k.ActivityActionTypes.JOIN) === k.ActivityActionStates.LOADING)], [Q, q]), ee = (0, r.default)([...Q.filter(e => (null == e ? void 0 : e.application_id) != null).map(e => e.application_id), ...q.map(e => e.applicationId)]), et = null == e ? void 0 : e.id, en = (0, l.useStateFromStoresArray)([E.default, M.default, T.default, m.default, S.default, g.default, y.default], () => [...Q.map(e => (0, L.default)({
                    user: null != t ? t : X,
                    activity: e,
                    application: ee.find(t => (null == t ? void 0 : t.id) === e.application_id),
                    channelId: et,
                    currentUser: X,
                    isEmbedded: (0, V.default)(e),
                    ChannelStore: E.default,
                    GuildStore: M.default,
                    GuildMemberCountStore: T.default,
                    RelationshipStore: m.default,
                    SelectedChannelStore: S.default,
                    VoiceStateStore: g.default,
                    PermissionStore: y.default
                })), ...q.map(e => {
                    let n = null != t ? t : X;
                    return null != n && (0, R.default)({
                        userId: n.id,
                        application: ee.find(t => (null == t ? void 0 : t.id) === e.applicationId),
                        channelId: et,
                        currentUser: X,
                        isActivitiesEnabledForCurrentPlatform: (0, F.getIsActivitiesEnabledForCurrentPlatform)(),
                        ChannelStore: E.default,
                        GuildStore: M.default,
                        VoiceStateStore: g.default,
                        PermissionStore: y.default
                    }) === R.EmbeddedActivityJoinability.CAN_JOIN
                })], [Q, ee, et, X, q, t]), ea = (0, l.useStateFromStoresArray)([c.default, v.default], () => Q.map(e => e.type === k.ActivityTypes.LISTENING && null != t ? (0, p.default)(c.default, v.default, t, e) : void 0), [t, Q]), el = (0, s.useAnalyticsContext)();
                if (!Z) return null;
                let ei = (n, a) => {
                        null != e ? d.default.sendActivityInvite({
                            type: n,
                            channelId: e.id,
                            activity: a,
                            location: k.AnalyticsLocations.CONTEXT_MENU
                        }) : null != t && d.default.sendActivityInviteUser({
                            type: n,
                            userId: t.id,
                            activity: a,
                            location: k.AnalyticsLocations.CONTEXT_MENU
                        })
                    },
                    ed = (l, d) => {
                        let u = E.default.getChannel(l),
                            s = null == u ? void 0 : M.default.getGuild(u.guild_id);
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
                                } = await n.el("310688").then(n.bind(n, "310688"));
                                return n => (0, a.jsx)(t, {
                                    ...n,
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
                        var n;
                        await u.default.join({
                            userId: t.id,
                            sessionId: e.session_id,
                            applicationId: e.application_id,
                            channelId: S.default.getVoiceChannelId(),
                            messageId: null,
                            intent: J.ActivityIntent.PLAY,
                            embedded: (0, U.default)(e, k.ActivityFlags.EMBEDDED)
                        }), (0, Y.default)({
                            type: k.AnalyticsGameOpenTypes.JOIN,
                            userId: t.id,
                            applicationId: e.application_id,
                            partyId: null === (n = e.party) || void 0 === n ? void 0 : n.id,
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
                return null == z || z.forEach(n => {
                    let l = (null == t ? void 0 : t.id) != null && n.userIds.has(null == t ? void 0 : t.id),
                        d = y.default.can(k.Permissions.CREATE_INSTANT_INVITE, e),
                        u = ee.find(e => (null == e ? void 0 : e.id) === n.applicationId);
                    null != n.instanceId && !l && d && null != u && eo.push((0, a.jsx)(i.MenuItem, {
                        id: "invite-to-join-embedded",
                        label: H.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: u.name,
                        action: () => {
                            ed(n.channelId, n.applicationId)
                        }
                    }, "self-embedded-".concat(n.applicationId)))
                }), B.forEach((e, t) => {
                    e.type === k.ActivityTypes.PLAYING && (0, U.default)(e, k.ActivityFlags.JOIN) ? eo.push((0, a.jsx)(i.MenuItem, {
                        id: "invite-to-join",
                        label: H.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_JOIN,
                        subtext: e.name,
                        action: () => ei(k.ActivityActionTypes.JOIN, e)
                    }, "self".concat(t))) : e.type === k.ActivityTypes.LISTENING && (0, U.default)(e, k.ActivityFlags.SYNC) && eo.push((0, a.jsx)(i.MenuItem, {
                        id: "invite-to-listen",
                        label: H.default.Messages.USER_ACTIVITY_ACTION_INVITE_TO_LISTEN_ALONG,
                        subtext: e.name,
                        action: () => ei(k.ActivityActionTypes.LISTEN, e)
                    }, "self".concat(t)))
                }), eo.length > 0 && eo.push((0, a.jsx)(i.MenuSeparator, {})), Q.forEach((n, l) => {
                    if (n.type === k.ActivityTypes.PLAYING && (0, U.default)(n, k.ActivityFlags.JOIN) && null != n.session_id && null != n.application_id) {
                        if (en[l]) {
                            let e = $[l];
                            eo.push((0, a.jsx)(i.MenuItem, {
                                id: "join",
                                label: e ? H.default.Messages.USER_ACTIVITY_JOINING : H.default.Messages.JOIN,
                                disabled: e,
                                hint: e ? (0, a.jsx)(i.Spinner, {
                                    type: i.Spinner.Type.PULSING_ELLIPSIS
                                }) : null,
                                subtext: n.name,
                                action: () => eu(n)
                            }, l))
                        } else eo.push((0, a.jsx)(i.MenuItem, {
                            id: "ask-to-join",
                            label: H.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
                            subtext: n.name,
                            action: () => ei(k.ActivityActionTypes.JOIN_REQUEST, n)
                        }, l))
                    } else if (n.type === k.ActivityTypes.LISTENING && (0, U.default)(n, k.ActivityFlags.SYNC) && null != ea[l]) {
                        let d = ea[l],
                            {
                                notPlayable: u,
                                playingSameTrack: s,
                                isCurrentUser: o,
                                syncingWithUser: r,
                                syncingWithParty: c
                            } = d,
                            p = o || u || s,
                            v = o || r || c;
                        eo.push((0, a.jsx)(i.MenuItem, {
                            id: "spotify-play-".concat(n.session_id),
                            action: () => (0, A.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            label: (0, f.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_PLAY),
                            subtext: p ? (0, I.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_PLAY, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: p
                        }, "spotify-play-".concat(n.session_id)), (0, a.jsx)(i.MenuItem, {
                            id: "spotify-sync-".concat(n.session_id),
                            action: () => (0, _.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_SYNC),
                            label: H.default.Messages.USER_ACTIVITY_LISTEN_ALONG,
                            subtext: v ? (0, I.default)(d, w.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != e ? b.default.getNickname(e.guild_id, e.id, t) : void 0) : void 0,
                            disabled: v
                        }, "spotify-sync-".concat(n.session_id)))
                    }
                }), q.forEach((e, t) => {
                    var n;
                    let l = e.userIds.has(null !== (n = null == X ? void 0 : X.id) && void 0 !== n ? n : ""),
                        d = t + Q.length,
                        u = $[d] || l,
                        s = H.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY;
                    l ? s = H.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : $[d] && (s = H.default.Messages.USER_ACTIVITY_JOINING);
                    let o = ee.find(t => (null == t ? void 0 : t.id) === e.applicationId);
                    en[d] && null != o && eo.push((0, a.jsx)(i.MenuItem, {
                        id: "embedded-activity-join-".concat(e.applicationId),
                        label: s,
                        disabled: u,
                        hint: $[d] ? (0, a.jsx)(i.Spinner, {
                            type: i.Spinner.Type.PULSING_ELLIPSIS
                        }) : null,
                        subtext: o.name,
                        action: () => es(e)
                    }, "embedded-activity-".concat(e.applicationId)))
                }), eo
            }