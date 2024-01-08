            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                o = n.n(i),
                r = n("446674"),
                s = n("77078"),
                d = n("913144"),
                u = n("255397"),
                c = n("406189"),
                p = n("54239"),
                f = n("191145"),
                m = n("292687"),
                h = n("393414"),
                v = n("784981"),
                I = n("908583"),
                P = n("449501"),
                S = n("18494"),
                C = n("697218"),
                g = n("550766"),
                y = n("191225"),
                E = n("420444"),
                T = n("817477"),
                A = n("386568"),
                x = n("965135"),
                N = n("954016"),
                M = n("272505"),
                j = n("49111"),
                _ = n("99795"),
                L = n("844638"),
                w = n("374142");

            function b(e) {
                let {
                    channel: t,
                    isLoading: n
                } = e, [i, x] = l.useState(!1), b = (0, r.useStateFromStores)([y.default], () => y.default.getSelfEmbeddedActivityForChannel(t.id)), O = (0, r.useStateFromStores)([y.default], () => y.default.getActivityPanelMode()), D = null == b ? void 0 : b.instanceId, R = (0, r.useStateFromStores)([S.default], () => S.default.getChannelId() === t.id), {
                    dockedRect: F,
                    isHidden: W
                } = (0, r.useStateFromStoresObject)([P.default], () => {
                    let e = P.default.pipWindow;
                    return {
                        dockedRect: null != e ? P.default.getDockedRect(e.id) : null,
                        isHidden: P.default.isEmbeddedActivityHidden()
                    }
                }), U = (0, r.useStateFromStores)([m.default], () => m.default.getWindow(j.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), {
                    activityParticipant: k,
                    selectedParticipant: V,
                    participantsOpen: B
                } = (0, r.useStateFromStoresObject)([f.default], () => ({
                    activityParticipant: null != b ? f.default.getParticipant(t.id, b.applicationId) : null,
                    selectedParticipant: f.default.getSelectedParticipant(t.id),
                    participantsOpen: f.default.getParticipantsOpen(t.id)
                })), H = R || null != U, G = (0, E.default)(t.id), Y = G && (null == V ? void 0 : V.type) !== _.ParticipantTypes.ACTIVITY, J = !G && O === M.ActivityPanelModes.PIP, z = (!H || H && (Y || J) && null == F) && !W, K = z && null != P.default.pipVideoWindow && null != P.default.pipActivityWindow;

                function X() {
                    var e;
                    if (null != b && u.default.selectParticipant(t.id, b.applicationId), null != U) return;
                    (0, p.popAllLayers)();
                    let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : j.ME;
                    c.default.channelListScrollTo(n, t.id), (0, h.transitionToGuild)(n, t.id)
                }

                function Z() {
                    x(!i)
                }
                l.useEffect(() => {
                    if ((null == b ? void 0 : b.applicationId) != null) {
                        let e = z ? N.ActivityLayoutMode.PIP : N.ActivityLayoutMode.FOCUSED;
                        d.default.dispatch({
                            type: "ACTIVITY_LAYOUT_MODE_UPDATE",
                            layoutMode: e,
                            applicationId: b.applicationId
                        })
                    }
                }, [null == b ? void 0 : b.applicationId, z]);
                if (null == b || null == D || null == k && (0, E.default)(t.id)) return null;
                let q = Array.from(b.userIds).map(e => C.default.getUser(e)).filter(e => null != e),
                    Q = {
                        instance_id: D,
                        channel_id: t.id
                    };
                return null != t.guild_id && "" !== t.guild_id && (Q.guild_id = t.guild_id), (0, a.jsx)(I.default, {
                    timeout: 2e3,
                    children: e => {
                        var l, r, d, u, c, p, f, m;
                        let {
                            idle: h,
                            onActive: I,
                            onForceIdle: P
                        } = e;
                        return (0, a.jsxs)(v.default, {
                            className: o(L.root, {
                                [L.pipMode]: z,
                                [w.idle]: h && !(null === (l = b.config) || void 0 === l ? void 0 : l.useInteractivePIP),
                                [L.pipModeShort]: z && !i,
                                [L.pipModeTall]: z && i,
                                [L.hidden]: W,
                                [L.multiPIPMode]: K
                            }),
                            noBorder: !z,
                            children: [(d = I, u = P, c = h, p = J, f = q, z && null != b && ((null == k ? void 0 : k.type) === _.ParticipantTypes.ACTIVITY || p) ? (null === (m = b.config) || void 0 === m ? void 0 : m.useInteractivePIP) ? (0, a.jsx)(A.InteractivePIPHeader, {
                                onJumpToChannel: X,
                                applicationId: b.applicationId,
                                channel: t,
                                showControls: !c,
                                onMouseDown: d,
                                onMouseMove: d,
                                onMouseLeave: u,
                                onToggleHeight: Z,
                                isExpanded: i,
                                hideExpandedButton: p
                            }) : p ? (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(A.TextActivityPIPOverlay, {
                                    idle: c,
                                    onMouseMove: d,
                                    onMouseDown: d,
                                    onMouseLeave: u,
                                    onJumpToChannel: () => {
                                        X(), (0, g.updateActivityPanelMode)(M.ActivityPanelModes.PANEL)
                                    },
                                    channel: t,
                                    applicationId: b.applicationId,
                                    users: f
                                })
                            }) : null == k ? null : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    onMouseMove: d,
                                    onMouseDown: d,
                                    onMouseLeave: u,
                                    className: L.clickShield,
                                    onDoubleClick: X
                                }), (0, a.jsx)(A.PIPOverlay, {
                                    idle: c,
                                    onMouseMove: d,
                                    onMouseDown: d,
                                    onMouseLeave: u,
                                    onJumpToChannel: X,
                                    channel: t,
                                    applicationId: b.applicationId,
                                    selectedParticipant: k
                                })]
                            }) : null), n ? (0, a.jsx)(s.Spinner, {
                                className: o(L.iframe, {
                                    [L.pipModeShort]: z && !i,
                                    [L.pipModeTall]: z && i
                                })
                            }) : (0, a.jsx)(T.EmbedIFrameWithLoadingBackground, {
                                allowPopups: N.APPLICATIONS_WITH_ALLOWED_POPUPS.has(b.applicationId),
                                referrerPolicy: N.APPLICATIONS_WITH_NO_REFFERER.has(b.applicationId) ? "no-referrer" : "origin",
                                url: b.url,
                                queryParams: Q,
                                className: o(L.iframe, {
                                    [L.pipModeShort]: z && !i,
                                    [L.pipModeTall]: z && i,
                                    [L.pipNonInteractive]: z && !(null === (r = b.config) || void 0 === r ? void 0 : r.useInteractivePIP)
                                }),
                                shouldRefocus: !z && R
                            }), !z && (0, a.jsx)(A.TileOverlay, {
                                participantsOpen: B,
                                showToggleParticipants: !1,
                                channelId: t.id
                            })]
                        })
                    }
                })
            }
            var O = e => {
                let {
                    channel: t,
                    ...n
                } = e, {
                    isLoading: l
                } = (0, x.useEmbeddedActivityLifecycle)(t);
                return (0, a.jsx)(b, {
                    channel: t,
                    isLoading: l,
                    ...n
                })
            }