            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("414456"),
                o = n.n(l),
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
                P = n("908583"),
                I = n("449501"),
                S = n("18494"),
                C = n("697218"),
                g = n("550766"),
                y = n("191225"),
                E = n("420444"),
                T = n("817477"),
                A = n("386568"),
                x = n("965135"),
                N = n("954016"),
                _ = n("272505"),
                M = n("49111"),
                j = n("99795"),
                L = n("844638"),
                w = n("374142");

            function b(e) {
                let {
                    channel: t,
                    isLoading: n
                } = e, [l, x] = a.useState(!1), b = (0, r.useStateFromStores)([y.default], () => y.default.getSelfEmbeddedActivityForChannel(t.id)), O = (0, r.useStateFromStores)([y.default], () => y.default.getActivityPanelMode()), D = null == b ? void 0 : b.activity_id, R = (0, r.useStateFromStores)([S.default], () => S.default.getChannelId() === t.id), {
                    dockedRect: F,
                    isHidden: W
                } = (0, r.useStateFromStoresObject)([I.default], () => {
                    let e = I.default.pipWindow;
                    return {
                        dockedRect: null != e ? I.default.getDockedRect(e.id) : null,
                        isHidden: I.default.isEmbeddedActivityHidden()
                    }
                }), U = (0, r.useStateFromStores)([m.default], () => m.default.getWindow(M.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), {
                    activityParticipant: k,
                    selectedParticipant: V,
                    participantsOpen: B
                } = (0, r.useStateFromStoresObject)([f.default], () => ({
                    activityParticipant: null != b ? f.default.getParticipant(t.id, b.application_id) : null,
                    selectedParticipant: f.default.getSelectedParticipant(t.id),
                    participantsOpen: f.default.getParticipantsOpen(t.id)
                })), H = R || null != U, G = (0, E.default)(t.id), Y = G && (null == V ? void 0 : V.type) !== j.ParticipantTypes.ACTIVITY, J = !G && O === _.ActivityPanelModes.PIP, z = (!H || H && (Y || J) && null == F) && !W, K = z && null != I.default.pipVideoWindow && null != I.default.pipActivityWindow;

                function X() {
                    var e;
                    if (null != b && u.default.selectParticipant(t.id, b.application_id), null != U) return;
                    (0, p.popAllLayers)();
                    let n = null !== (e = t.getGuildId()) && void 0 !== e ? e : M.ME;
                    c.default.channelListScrollTo(n, t.id), (0, h.transitionToGuild)(n, t.id)
                }

                function Z() {
                    x(!l)
                }
                a.useEffect(() => {
                    if ((null == b ? void 0 : b.application_id) != null) {
                        let e = z ? N.ActivityLayoutMode.PIP : N.ActivityLayoutMode.FOCUSED;
                        d.default.dispatch({
                            type: "ACTIVITY_LAYOUT_MODE_UPDATE",
                            layoutMode: e,
                            applicationId: b.application_id
                        })
                    }
                }, [null == b ? void 0 : b.application_id, z]);
                if (null == b || null == D || null == k && (0, E.default)(t.id)) return null;
                let q = Array.from(b.connections.values()).map(e => C.default.getUser(e.user_id)).filter(e => null != e),
                    Q = {
                        instance_id: D,
                        channel_id: t.id
                    };
                return null != t.guild_id && "" !== t.guild_id && (Q.guild_id = t.guild_id), (0, i.jsx)(P.default, {
                    timeout: 2e3,
                    children: e => {
                        var a, r, d, u, c, p, f, m;
                        let {
                            idle: h,
                            onActive: P,
                            onForceIdle: I
                        } = e;
                        return (0, i.jsxs)(v.default, {
                            className: o(L.root, {
                                [L.pipMode]: z,
                                [w.idle]: h && !(null === (a = b.config) || void 0 === a ? void 0 : a.useInteractivePIP),
                                [L.pipModeShort]: z && !l,
                                [L.pipModeTall]: z && l,
                                [L.hidden]: W,
                                [L.multiPIPMode]: K
                            }),
                            noBorder: !z,
                            children: [(d = P, u = I, c = h, p = J, f = q, z && null != b && ((null == k ? void 0 : k.type) === j.ParticipantTypes.ACTIVITY || p) ? (null === (m = b.config) || void 0 === m ? void 0 : m.useInteractivePIP) ? (0, i.jsx)(A.InteractivePIPHeader, {
                                onJumpToChannel: X,
                                applicationId: b.application_id,
                                channel: t,
                                showControls: !c,
                                onMouseDown: d,
                                onMouseMove: d,
                                onMouseLeave: u,
                                onToggleHeight: Z,
                                isExpanded: l,
                                hideExpandedButton: p
                            }) : p ? (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(A.TextActivityPIPOverlay, {
                                    idle: c,
                                    onMouseMove: d,
                                    onMouseDown: d,
                                    onMouseLeave: u,
                                    onJumpToChannel: () => {
                                        X(), (0, g.updateActivityPanelMode)(_.ActivityPanelModes.PANEL)
                                    },
                                    channel: t,
                                    applicationId: b.application_id,
                                    users: f
                                })
                            }) : null == k ? null : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("div", {
                                    onMouseMove: d,
                                    onMouseDown: d,
                                    onMouseLeave: u,
                                    className: L.clickShield,
                                    onDoubleClick: X
                                }), (0, i.jsx)(A.PIPOverlay, {
                                    idle: c,
                                    onMouseMove: d,
                                    onMouseDown: d,
                                    onMouseLeave: u,
                                    onJumpToChannel: X,
                                    channel: t,
                                    applicationId: b.application_id,
                                    selectedParticipant: k
                                })]
                            }) : null), n ? (0, i.jsx)(s.Spinner, {
                                className: o(L.iframe, {
                                    [L.pipModeShort]: z && !l,
                                    [L.pipModeTall]: z && l
                                })
                            }) : (0, i.jsx)(T.EmbedIFrameWithLoadingBackground, {
                                allowPopups: N.APPLICATIONS_WITH_ALLOWED_POPUPS.has(b.application_id),
                                referrerPolicy: N.APPLICATIONS_WITH_NO_REFFERER.has(b.application_id) ? "no-referrer" : "origin",
                                url: b.url,
                                queryParams: Q,
                                className: o(L.iframe, {
                                    [L.pipModeShort]: z && !l,
                                    [L.pipModeTall]: z && l,
                                    [L.pipNonInteractive]: z && !(null === (r = b.config) || void 0 === r ? void 0 : r.useInteractivePIP)
                                }),
                                shouldRefocus: !z && R
                            }), !z && (0, i.jsx)(A.TileOverlay, {
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
                    isLoading: a
                } = (0, x.useEmbeddedActivityLifecycle)(t);
                return (0, i.jsx)(b, {
                    channel: t,
                    isLoading: a,
                    ...n
                })
            }