            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("907002"),
                u = n("84339"),
                o = n("109489"),
                d = n("271938"),
                c = n("42887"),
                f = n("944832"),
                h = n("659500"),
                p = n("679243"),
                m = n("876715"),
                E = n("842044"),
                C = n("329515"),
                S = n("49111"),
                g = n("99795"),
                _ = n("111647"),
                I = n("542377");
            let T = 16 / 9,
                v = 8 + C.PARTICIPANTS_HEIGHT;

            function x(e) {
                let t, {
                        onSelectParticipant: n,
                        onContextMenuParticipant: s,
                        onFullscreenParticipant: x,
                        participants: N,
                        filteredParticipants: A,
                        popoutWindow: M,
                        inCall: R,
                        channel: j,
                        selectedParticipant: L,
                        showParticipants: O = !0,
                        className: y,
                        paused: b,
                        width: P,
                        height: D,
                        layout: U,
                        idle: w
                    } = e,
                    F = null != M,
                    k = c.default.getVideoComponent(),
                    V = d.default.getId(),
                    [B, H] = l.useState(null),
                    [G, W] = l.useState(!0),
                    [Y, z] = l.useState(!1),
                    K = L.type === g.ParticipantTypes.ACTIVITY,
                    Z = !K && null != L.streamId,
                    X = Z && null != B && B.width > 0 && B.height > 0 ? B.width / B.height : T,
                    J = D <= 2 * v + 144,
                    q = O && !J,
                    Q = (0, u.default)(q),
                    $ = 0;
                (K || q) && ($ += 72), K && !q && ($ += 48), q && ($ += .5 * v + 8);
                let ee = D - 2 * $,
                    et = ee * X,
                    en = Math.floor(Math.min(P, et) / X),
                    ea = D > P / X + 72 + v + 8,
                    el = !q && !K;
                t = el ? 40 + Math.max(0, 72 - (D - en) / 2) : q ? -16 : -8, l.useEffect(() => {
                    let e = setTimeout(() => {
                        W(!1)
                    }, 250);
                    return () => {
                        clearTimeout(e)
                    }
                }, []);
                let es = (0, r.useSpring)({
                        value: q ? 1 : 0,
                        delay: ea || !q ? 0 : 100,
                        config: {
                            ...r.config.stiff,
                            clamp: !0
                        },
                        onStart: () => z(!0),
                        onChange: () => h.ComponentDispatch.dispatch(S.ComponentActions.REMEASURE_TARGET),
                        onRest: () => {
                            z(!1), h.ComponentDispatch.dispatch(S.ComponentActions.REMEASURE_TARGET)
                        }
                    }),
                    ei = (0, r.useSpring)({
                        value: q ? 1 : 0,
                        config: {
                            ...r.config.stiff,
                            clamp: !0
                        }
                    }),
                    er = (0, r.useSpring)({
                        value: et,
                        config: {
                            ...r.config.stiff,
                            clamp: !0
                        },
                        immediate: Q === q && ei.value.idle
                    }),
                    eu = (0, r.useSpring)({
                        value: t,
                        config: {
                            ...r.config.stiff,
                            clamp: !0
                        }
                    }),
                    eo = (0, r.useTransition)(L, {
                        keys: e => null == e ? void 0 : e.id,
                        config: {
                            ...r.config.stiff,
                            clamp: !0
                        },
                        initial: null,
                        from: {
                            opacity: 0
                        },
                        enter: {
                            opacity: 1
                        },
                        leave: {
                            opacity: 0
                        }
                    }),
                    ed = l.useCallback(e => {
                        H(e), W(!1)
                    }, []),
                    ec = q || b ? [] : (0, E.getPipParticipants)(N, L, V),
                    {
                        visibleParticipants: ef,
                        participantTileWidth: eh
                    } = (0, C.useVisibleParticipants)(P, A);
                return (0, a.jsxs)("div", {
                    className: i(I.root, _.flexCenter, y),
                    children: [(0, a.jsxs)("div", {
                        className: I.tileWrapper,
                        style: {
                            opacity: Z && G ? 0 : 1
                        },
                        children: [(0, a.jsxs)(r.animated.div, {
                            className: I.videoFrame,
                            style: {
                                top: ei.value.to(e => -e * v / 2)
                            },
                            children: [(0, a.jsx)(r.animated.div, {
                                style: {
                                    width: er.value
                                },
                                className: I.videoWrapper,
                                children: (0, a.jsx)(f.default, {
                                    className: _.videoSizer,
                                    aspectRatio: X,
                                    children: eo((e, t, l) => {
                                        let {
                                            key: i
                                        } = l;
                                        return null != t ? (0, a.jsx)(r.animated.div, {
                                            className: _.videoWrapperAnimated,
                                            style: e,
                                            children: (0, a.jsx)(p.default, {
                                                focused: !0,
                                                noBorder: et >= P || ee >= D,
                                                channel: j,
                                                className: _.focusedVideo,
                                                videoComponent: k,
                                                paused: b,
                                                width: P,
                                                participant: t,
                                                onClick: n,
                                                onDoubleClick: x,
                                                onContextMenu: s,
                                                onVideoResize: ed,
                                                inCall: R,
                                                inPopout: F
                                            })
                                        }, i) : null
                                    })
                                })
                            }), J || U === S.ChannelLayouts.MINIMUM || U === S.ChannelLayouts.NORMAL ? null : (0, a.jsx)(r.animated.div, {
                                className: i(I.actionRow, {
                                    [I.idle]: w
                                }),
                                style: {
                                    bottom: eu.value
                                },
                                children: (0, a.jsx)(o.default, {
                                    channelId: j.id,
                                    isParticipantsOpen: O,
                                    isVertical: !0
                                })
                            })]
                        }), (0, a.jsx)(r.animated.div, {
                            className: I.participantsWrapperAnimated,
                            style: {
                                translateY: es.value.to(e => e * v / 2),
                                opacity: es.value,
                                visibility: es.value.to(e => 0 === e ? "hidden" : "visible")
                            },
                            children: (0, a.jsx)(C.default, {
                                channel: j,
                                onClick: n,
                                onContextMenu: s,
                                onDoubleClick: x,
                                participants: ef,
                                participantTileWidth: eh,
                                selectedParticipantId: L.id,
                                inCall: R,
                                paused: b || Y || !O,
                                popoutWindow: M
                            })
                        })]
                    }), ec.length > 0 ? (0, a.jsx)(m.default, {
                        onContextMenuParticipant: s,
                        width: P,
                        height: D,
                        channel: j,
                        participants: ec
                    }) : null]
                })
            }