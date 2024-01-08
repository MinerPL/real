            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("424973");
            var a = n("37983"),
                l = n("884691"),
                s = n("759843"),
                i = n("446674"),
                r = n("151426"),
                u = n("244201"),
                o = n("191225"),
                d = n("860345"),
                c = n("117582"),
                f = n("943349"),
                h = n("428958"),
                p = n("191145"),
                m = n("393171"),
                E = n("242757"),
                C = n("305961"),
                g = n("957255"),
                S = n("466079"),
                _ = n("444657"),
                I = n("679243"),
                T = n("832897"),
                v = n("308419"),
                x = n("49111"),
                N = n("740726");

            function A(e) {
                let {
                    participants: t,
                    onClick: n,
                    onDoubleClick: A,
                    onContextMenu: M,
                    channel: R,
                    className: j,
                    inCall: L,
                    totalNumberOfParticipants: O,
                    paused: y = !1
                } = e, b = (0, u.useAppContext)(), P = b === x.AppContext.POPOUT, D = (0, i.useStateFromStores)([C.default], () => C.default.getGuild(R.guild_id), [R.guild_id]), {
                    dismissedActivityEntryPointTileChannel: U
                } = (0, T.useChannelCallVideoGridStore)(), w = (0, i.useStateFromStores)([p.default], () => p.default.getUserParticipantCount(R.id), [R]), F = l.useCallback(() => {
                    T.useChannelCallVideoGridStore.setState({
                        dismissedActivityEntryPointTileChannel: R.id
                    })
                }, [R.id]);
                l.useEffect(() => {
                    null != U && R.id !== U && T.useChannelCallVideoGridStore.setState({
                        dismissedActivityEntryPointTileChannel: null
                    })
                }, [R.id, U]);
                let k = (0, i.useStateFromStores)([g.default], () => R.isPrivate() || (0, E.canViewInviteModal)(g.default, D, R), [D, R]),
                    V = (null == D ? void 0 : D.afkChannelId) === R.id,
                    B = R.userLimit <= 0 || R.userLimit > 1,
                    {
                        vcTileActivityExperimentType: H
                    } = c.VcTileActivitiesEntryPointExperiment.useExperiment({
                        location: "8711e9_1"
                    }, {
                        autoTrackExposure: !1
                    });
                R.isGuildVoice() && c.VcTileActivitiesEntryPointExperiment.trackExposure({
                    location: "8711e9_2"
                });
                let G = (0, i.useStateFromStores)([o.default], () => o.default.getEmbeddedActivitiesForChannel(R.id).length <= 0),
                    W = (0, m.useIsDismissibleContentTypeDismissed)(r.DismissibleContent.VC_TILE_ACTIVITIES_ENTRY_POINT),
                    Y = (0, f.useEmbeddedActivityLaunchability)(R.id),
                    z = Y !== f.EmbeddedActivityLaunchability.CAN_LAUNCH,
                    K = null != U && U === R.id,
                    {
                        enabled: Z
                    } = d.PaxVcTileActivitiesExperiment.useExperiment({
                        location: "8711e9_3"
                    }, {
                        autoTrackExposure: !1
                    }),
                    X = t.map(e => t => (0, a.jsx)(I.default, {
                        participant: e,
                        channel: R,
                        className: N.tile,
                        paused: y,
                        onClick: n,
                        onDoubleClick: A,
                        onContextMenu: M,
                        inCall: L,
                        width: t,
                        inPopout: P
                    }, e.id));
                (0, h.default)({
                    type: s.ImpressionTypes.VIEW,
                    name: s.ImpressionNames.CHANNEL_CALL_VIDEO_GRID_VIEW,
                    properties: {
                        total_participants: O,
                        can_invite: k,
                        is_afk_channel: V,
                        channel_user_limit: R.userLimit
                    }
                }, {
                    trackOnInitialLoad: !0
                }, []), null != D && !V && (Z ? X.push(e => (0, a.jsx)(_.ActivityEntryPointTile, {
                    channel: R,
                    guild: D,
                    width: e,
                    inPopout: P,
                    handleClose: F,
                    userParticipantCount: w
                })) : (H !== c.VcTileActivityExperimentType.ONE_OR_TWO_USERS || 2 !== w) && (H !== c.VcTileActivityExperimentType.ANY_NUMBER_OF_USERS || !(w >= 2)) || !G || z || W || K ? B && 1 === w && k && ([c.VcTileActivityExperimentType.ONE_OR_TWO_USERS, c.VcTileActivityExperimentType.ANY_NUMBER_OF_USERS].includes(H) && G && !z ? X.push(e => (0, a.jsx)(_.ActivityEntryPointTile, {
                    channel: R,
                    guild: D,
                    width: e,
                    inPopout: P,
                    handleClose: F,
                    userParticipantCount: w
                })) : X.push(e => (0, a.jsx)(v.default, {
                    width: e,
                    channel: R,
                    guild: D,
                    inPopout: P
                }))) : X.push(e => (0, a.jsx)(_.ActivityEntryPointTile, {
                    channel: R,
                    guild: D,
                    width: e,
                    inPopout: P,
                    handleClose: F,
                    userParticipantCount: w
                })));
                let J = l.useCallback(e => {
                    var n, a;
                    return null !== (a = null === (n = t[e]) || void 0 === n ? void 0 : n.id) && void 0 !== a ? a : "empty-tile"
                }, [t]);
                return (0, a.jsx)(S.default, {
                    className: j,
                    keyExtractor: J,
                    paddingTop: 64,
                    paddingBottom: 64,
                    children: X
                })
            }