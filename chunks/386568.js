            "use strict";
            n.r(t), n.d(t, {
                PIPOverlay: function() {
                    return O
                },
                TextActivityPIPOverlay: function() {
                    return D
                },
                TileOverlay: function() {
                    return R
                },
                InteractivePIPHeader: function() {
                    return F
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                o = n("446674"),
                r = n("77078"),
                s = n("629109"),
                d = n("244201"),
                u = n("442939"),
                c = n("836087"),
                p = n("383294"),
                f = n("289180"),
                m = n("19065"),
                h = n("550410"),
                v = n("598873"),
                P = n("981913"),
                I = n("576242"),
                S = n("336971"),
                C = n("109489"),
                g = n("116439"),
                y = n("42887"),
                E = n("145131"),
                T = n("256170"),
                A = n("433487"),
                x = n("811305"),
                N = n("735890"),
                _ = n("49111"),
                M = n("843455"),
                j = n("782340"),
                L = n("163933"),
                w = n("374142");

            function b(e) {
                let {
                    onClick: t,
                    isExpanded: n
                } = e;
                return (0, i.jsx)(P.default, {
                    iconClassName: l(L.arrowIcon, {
                        [L.arrowIconExpanded]: n
                    }),
                    onClick: t,
                    iconComponent: T.default,
                    label: n ? j.default.Messages.PICTURE_IN_PICTURE_COLLAPSE : j.default.Messages.PICTURE_IN_PICTURE_EXPAND
                })
            }

            function O(e) {
                var t, n;
                let {
                    channel: a,
                    applicationId: l,
                    onMouseDown: r,
                    onMouseMove: P,
                    onMouseLeave: C,
                    onJumpToChannel: T,
                    idle: A,
                    selectedParticipant: x
                } = e, j = (0, d.useAppContext)(), b = j === _.AppContext.POPOUT, O = (0, o.useStateFromStores)([y.default], () => y.default.isVideoEnabled()), D = (0, o.useStateFromStores)([y.default], () => Object.values(y.default.getVideoDevices())[0]), R = null === (t = null == D ? void 0 : D.disabled) || void 0 === t || t, F = !1 === R, W = (0, u.default)([l])[0], U = (0, f.default)(a), k = e => {
                    s.default.setVideoEnabled(e)
                };
                return (0, i.jsxs)("div", {
                    className: w.videoControls,
                    onMouseMove: P,
                    onMouseDown: r,
                    onMouseLeave: C,
                    children: [(0, i.jsx)("div", {
                        className: w.topControls,
                        children: (0, i.jsx)(v.PictureInPictureHeader, {
                            idle: A,
                            title: null !== (n = null == W ? void 0 : W.name) && void 0 !== n ? n : a.name,
                            onJumpToChannel: T,
                            preventIdleComponent: h.default
                        })
                    }), (0, i.jsxs)("div", {
                        className: w.bottomControls,
                        children: [(0, i.jsxs)(E.default, {
                            grow: 0,
                            shrink: 1,
                            basis: "50%",
                            align: E.default.Align.CENTER,
                            children: [(0, i.jsx)(g.default, {
                                className: L.leftPipIcon,
                                enabled: O,
                                cameraUnavailable: !F,
                                hasPermission: U,
                                onChange: k,
                                onCameraUnavailable: () => {
                                    F ? k(!0) : (0, m.default)()
                                }
                            }), (0, i.jsx)(h.default, {
                                children: (0, i.jsx)(c.default, {
                                    channelId: a.id,
                                    guildId: a.getGuildId(),
                                    className: w.leftTrayIcon,
                                    participant: x,
                                    compact: !0
                                })
                            })]
                        }), (0, i.jsxs)(E.default, {
                            grow: 0,
                            shrink: 1,
                            justify: E.default.Justify.END,
                            basis: "50%",
                            align: E.default.Align.CENTER,
                            children: [b ? null : (0, i.jsx)(S.default, {
                                className: L.rightPipIcon,
                                popoutOpen: !1,
                                onOpenPopout: () => {
                                    (0, N.default)(() => p.openChannelCallPopout(a))
                                },
                                onClosePopout: M.NOOP_NULL
                            }), (0, i.jsx)(I.default, {
                                applicationId: l,
                                channelId: a.id,
                                className: L.rightPipIcon
                            })]
                        })]
                    })]
                })
            }

            function D(e) {
                var t;
                let {
                    channel: n,
                    applicationId: a,
                    onMouseDown: o,
                    onMouseMove: s,
                    onMouseLeave: d,
                    onJumpToChannel: c,
                    idle: p,
                    users: f
                } = e, m = (0, u.default)([a])[0];
                return (0, i.jsxs)(r.Clickable, {
                    className: l(w.videoControls, w.videoControlsTextActivity),
                    onMouseMove: s,
                    onMouseDown: o,
                    onMouseLeave: d,
                    children: [(0, i.jsx)("div", {
                        className: l(w.topControls),
                        children: (0, i.jsx)(v.PictureInPictureHeader, {
                            idle: p,
                            title: null !== (t = null == m ? void 0 : m.name) && void 0 !== t ? t : n.name,
                            onJumpToChannel: c,
                            preventIdleComponent: h.default
                        })
                    }), (0, i.jsxs)("div", {
                        className: w.bottomControls,
                        children: [(0, i.jsx)(x.default, {
                            renderIcon: !1,
                            users: f,
                            size: 24,
                            max: 3,
                            className: L.userSummaryContainer
                        }), (0, i.jsx)(I.default, {
                            applicationId: a,
                            channelId: n.id,
                            iconClassName: L.leaveActivityIcon,
                            isActive: !0
                        })]
                    })]
                })
            }

            function R(e) {
                let {
                    channelId: t,
                    participantsOpen: n,
                    showToggleParticipants: a
                } = e;
                return a ? (0, i.jsx)(C.default, {
                    channelId: t,
                    isParticipantsOpen: n,
                    className: L.participantsButton
                }) : null
            }

            function F(e) {
                var t;
                let {
                    onMouseDown: n,
                    onMouseMove: a,
                    onMouseLeave: o,
                    showControls: r,
                    applicationId: s,
                    channel: d,
                    onJumpToChannel: c,
                    onToggleHeight: p,
                    isExpanded: f,
                    hideExpandedButton: m
                } = e, P = (0, u.default)([s])[0];
                return (0, i.jsx)("div", {
                    className: L.pipHeader,
                    onMouseMove: a,
                    onMouseDown: n,
                    onMouseLeave: o,
                    children: (0, i.jsxs)("div", {
                        className: l(w.topControls, L.pipHeaderContent, {
                            [L.pipHeaderContentOpen]: r
                        }),
                        children: [!r && (0, i.jsx)(A.default, {
                            className: L.menuIcon,
                            width: 12,
                            height: 12
                        }), r && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(v.PictureInPictureHeader, {
                                idle: !r,
                                title: null !== (t = null == P ? void 0 : P.name) && void 0 !== t ? t : d.name,
                                onJumpToChannel: c,
                                preventIdleComponent: h.default
                            }), (0, i.jsxs)("div", {
                                className: L.pipHeaderButtonsRight,
                                children: [m ? null : (0, i.jsx)(b, {
                                    isExpanded: f,
                                    onClick: p
                                }), (0, i.jsx)(I.default, {
                                    applicationId: s,
                                    channelId: d.id,
                                    iconClassName: L.leaveActivityIcon
                                })]
                            })]
                        })]
                    })
                })
            }