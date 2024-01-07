            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return G
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("446674"),
                i = l("77078"),
                r = l("260365"),
                o = l("823411"),
                u = l("987317"),
                d = l("997289"),
                c = l("685665"),
                f = l("442939"),
                m = l("860285"),
                p = l("42203"),
                E = l("86878"),
                T = l("525065"),
                h = l("305961"),
                _ = l("686470"),
                S = l("957255"),
                I = l("27618"),
                g = l("18494"),
                A = l("697218"),
                v = l("800762"),
                C = l("953998"),
                N = l("535974"),
                y = l("773336"),
                M = l("602043"),
                O = l("191225"),
                x = l("706508"),
                R = l("612696"),
                L = l("126808"),
                P = l("871388"),
                b = l("407908"),
                D = l("141962"),
                U = l("295999"),
                j = l("954016"),
                F = l("49111"),
                w = l("782340");

            function G(e) {
                let {
                    activity: t,
                    currentEmbeddedApplication: l,
                    isCurrentUser: G,
                    color: k,
                    look: B,
                    hover: Y,
                    user: V,
                    channelId: H,
                    isEmbedded: W = !1
                } = e, {
                    analyticsLocations: z
                } = (0, c.default)(), [K, Z] = a.useState(!1), X = (0, L.default)({
                    channelId: H,
                    userId: V.id,
                    activity: t
                }), J = (0, s.useStateFromStores)([A.default], () => A.default.getCurrentUser()), Q = (0, s.useStateFromStores)([_.default, m.default, N.default, E.default], () => W || (null == t ? void 0 : t.application_id) != null && (0, M.isLaunchable)({
                    LibraryApplicationStore: _.default,
                    LaunchableGameStore: m.default,
                    DispatchApplicationStore: N.default,
                    ConnectedAppsStore: E.default,
                    applicationId: t.application_id
                })), q = (0, s.useStateFromStores)([O.default], () => Array.from(O.default.getSelfEmbeddedActivities().values()).some(e => {
                    let {
                        application_id: l,
                        channelId: n
                    } = e;
                    return l === (null == t ? void 0 : t.application_id) && n === X
                })), $ = (0, s.useStateFromStores)([C.default], () => null != t && null != t.application_id && C.default.getState(t.application_id, F.ActivityActionTypes.JOIN) === F.ActivityActionStates.LOADING), [ee] = (0, f.default)((null == t ? void 0 : t.application_id) != null ? [null == t ? void 0 : t.application_id] : []), et = (0, s.useStateFromStores)([p.default, h.default, T.default, I.default, g.default, v.default, S.default], () => (0, R.default)({
                    user: V,
                    activity: t,
                    application: ee,
                    channelId: X,
                    currentUser: J,
                    isEmbedded: W,
                    ChannelStore: p.default,
                    GuildStore: h.default,
                    GuildMemberCountStore: T.default,
                    RelationshipStore: I.default,
                    SelectedChannelStore: g.default,
                    VoiceStateStore: v.default,
                    PermissionStore: S.default
                })), el = (0, d.useAnalyticsContext)(), en = !y.isPlatformEmbedded, ea = (0, P.default)(t, F.ActivityFlags.JOIN) || W;
                if (null == t || !ea || null == t.application_id) return null;
                let es = !G && (en || Q) && !K && !q && (!W || et),
                    ei = null;
                G ? ei = w.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : !en && !Q && (ei = w.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                    name: t.name
                }));
                let er = async (e, t) => {
                    var l;
                    null != t.session_id && null != t.application_id && (await o.default.join({
                        userId: e.id,
                        sessionId: t.session_id,
                        applicationId: t.application_id,
                        channelId: g.default.getVoiceChannelId(),
                        messageId: null,
                        intent: j.ActivityIntent.PLAY,
                        embedded: (0, P.default)(t, F.ActivityFlags.EMBEDDED)
                    }), (0, b.default)({
                        type: F.AnalyticsGameOpenTypes.JOIN,
                        userId: e.id,
                        applicationId: t.application_id,
                        partyId: null === (l = t.party) || void 0 === l ? void 0 : l.id,
                        locationObject: el.location,
                        analyticsLocations: z
                    }))
                }, eo = async () => {
                    let e = !1;
                    if (W) {
                        if (!et || null == X) return;
                        e = await (0, x.default)({
                            activity: t,
                            currentEmbeddedApplication: l,
                            activityChannelId: X,
                            locationObject: el.location,
                            embeddedActivitiesManager: D.default,
                            analyticsLocations: z
                        })
                    }
                    if (!e) {
                        et && er(V, t), Z(!0);
                        let e = await r.default.sendActivityInviteUser({
                            type: F.ActivityActionTypes.JOIN_REQUEST,
                            userId: V.id,
                            activity: t,
                            location: F.AnalyticsLocations.PROFILE_POPOUT
                        });
                        null != e && u.default.selectPrivateChannel(e.id)
                    }
                }, eu = et ? w.default.Messages.JOIN : w.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
                return W && (eu = w.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), (0, n.jsx)(i.Tooltip, {
                    text: ei,
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: l
                        } = e;
                        return (0, n.jsx)(U.default, {
                            onClick: eo,
                            onMouseEnter: t,
                            onMouseLeave: l,
                            color: k,
                            look: B,
                            hover: Y,
                            disabled: !es,
                            submitting: $,
                            fullWidth: !0,
                            children: eu
                        })
                    }
                }, "join")
            }