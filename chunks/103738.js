            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("737960"),
                u = n("141681"),
                o = n("271938"),
                d = n("145131"),
                c = n("659500"),
                f = n("119106"),
                h = n("573540"),
                p = n("972155"),
                m = n("732961"),
                E = n("153984"),
                C = n("49111"),
                S = n("99795"),
                g = n("111647"),
                _ = (0, r.default)(e => {
                    let {
                        participants: t,
                        filteredParticipants: n,
                        selectedParticipant: s,
                        participantsVersion: r,
                        layout: _,
                        onSelectParticipant: I,
                        onContextMenuParticipant: T,
                        onFullscreenParticipant: v,
                        channel: x,
                        hasConnectPermission: N,
                        className: A,
                        inCall: M,
                        showParticipants: R = !0,
                        paused: j = !1,
                        width: L,
                        height: O,
                        idle: y,
                        mode: b,
                        popoutWindow: P,
                        awaitingRemoteSessionInfo: D
                    } = e;
                    l.useEffect(() => {
                        c.ComponentDispatch.dispatch(C.ComponentActions.REMEASURE_TARGET)
                    }, [L, O]);
                    let U = l.useMemo(() => n.filter(e => e.type !== S.ParticipantTypes.ACTIVITY || !e.participants.has(o.default.getId())), [n, r]);
                    if ((null == D ? void 0 : D.channelId) === x.id) return (0, a.jsx)(h.default, {
                        height: O
                    });
                    if ((null == x ? void 0 : x.isGuildVocal()) && !M) return (0, a.jsx)(f.default, {
                        channel: x,
                        participants: t,
                        hasConnectPermission: N
                    });
                    if (b === C.ChannelModes.VOICE) return (0, a.jsx)(u.default, {
                        guildId: x.guild_id,
                        width: L,
                        className: g.voiceCallWrapper,
                        participants: t,
                        onContextMenu: T
                    });
                    if (n = M ? n : t, null == s) return 0 === n.length ? (0, a.jsx)(E.default, {
                        className: i(g.videoGrid, g.hiddenParticipants),
                        channelId: x.id,
                        width: L
                    }) : (0, a.jsx)(d.default, {
                        className: g.videoGridWrapper,
                        justify: d.default.Justify.CENTER,
                        align: d.default.Align.CENTER,
                        children: (0, a.jsx)(p.default, {
                            channel: x,
                            className: g.videoGrid,
                            participants: U,
                            totalNumberOfParticipants: t.length,
                            onClick: I,
                            onDoubleClick: v,
                            onContextMenu: T,
                            paused: j,
                            inCall: M
                        })
                    });
                    return (0, a.jsx)(m.default, {
                        onFullscreenParticipant: v,
                        onContextMenuParticipant: T,
                        onSelectParticipant: I,
                        selectedParticipant: s,
                        filteredParticipants: U,
                        participants: t,
                        popoutWindow: P,
                        className: A,
                        idle: y,
                        height: O,
                        width: L,
                        layout: _,
                        inCall: M,
                        channel: x,
                        showParticipants: R
                    })
                })