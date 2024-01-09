            "use strict";
            n.r(t), n.d(t, {
                SPEAKER_TILE_ASPECT_RATIO: function() {
                    return L
                },
                default: function() {
                    return b
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("627445"),
                i = n.n(s),
                r = n("446674"),
                u = n("77078"),
                o = n("255397"),
                d = n("272030"),
                c = n("990766"),
                f = n("244201"),
                h = n("191145"),
                p = n("76393"),
                m = n("374014"),
                E = n("223913"),
                C = n("506885"),
                g = n("981601"),
                S = n("373469"),
                _ = n("305961"),
                I = n("957255"),
                T = n("800762"),
                v = n("512264"),
                x = n("325861"),
                N = n("584199"),
                A = n("116386"),
                M = n("49111"),
                R = n("99795"),
                j = n("649381");
            let L = 16 / 9,
                O = e => {
                    let {
                        stageParticipant: t,
                        rtcParticipant: n,
                        channel: s,
                        guildId: i,
                        user: r,
                        width: o,
                        isModerator: d,
                        onContextMenu: c,
                        inPopout: f
                    } = e, {
                        reducedMotion: h
                    } = l.useContext(u.AccessibilityPreferencesContext), {
                        blocked: p,
                        id: m
                    } = t;
                    return (0, a.jsx)(u.Popout, {
                        preload: null == n ? void 0 : () => (0, C.default)(n.user.id, n.user.getAvatarURL(s.guild_id, 80), {
                            guildId: s.guild_id,
                            channelId: s.id
                        }),
                        renderPopout: e => (0, a.jsx)(g.default, {
                            ...e,
                            guildId: i,
                            channelId: s.id,
                            userId: r.id
                        }),
                        position: "right",
                        spacing: 8,
                        children: e => (0, a.jsx)(u.Clickable, {
                            onContextMenu: e => c(n, e),
                            ...e,
                            children: (0, a.jsx)(N.default, {
                                participant: n,
                                aspectRatio: L,
                                blocked: p,
                                channel: s,
                                className: j.tile,
                                inCall: !0,
                                inPopout: f,
                                paused: !1,
                                pulseSpeakingIndicator: !h.enabled,
                                width: o,
                                children: d && (0, a.jsx)(A.default, {})
                            }, m)
                        })
                    })
                },
                y = e => {
                    let {
                        stageParticipant: t,
                        rtcParticipant: n,
                        channel: s,
                        width: i,
                        isModerator: d,
                        onContextMenu: f,
                        inPopout: C
                    } = e, {
                        reducedMotion: g
                    } = l.useContext(u.AccessibilityPreferencesContext), {
                        id: x,
                        blocked: O
                    } = t, y = (0, r.useStateFromStoresArray)([S.default], () => S.default.getAllActiveStreams(), []), {
                        selectedParticipant: b,
                        largeStream: P
                    } = (0, r.useStateFromStoresObject)([h.default], () => ({
                        selectedParticipant: null != s ? h.default.getSelectedParticipant(s.id) : null,
                        largeStream: null != s && h.default.getStageStreamSize(s.id)
                    })), D = l.useCallback((e, t) => {
                        if (e.type === R.ParticipantTypes.STREAM) {
                            let n = y.filter(t => (0, m.encodeStreamKey)(t) === e.id && t.state !== M.ApplicationStreamStates.ENDED);
                            if (0 === n.length) {
                                if (!(0, E.canWatchStream)(s, T.default, _.default, I.default, p.default)[0]) return;
                                (0, c.watchStream)((0, m.decodeStreamKey)(e.id), {
                                    forceMultiple: t.shiftKey
                                })
                            }
                        }(null == b ? void 0 : b.id) === e.id ? P ? (o.default.selectParticipant(s.id, null), o.default.updateStageStreamSize(s.id, !1)) : o.default.updateStageStreamSize(s.id, !0) : (o.default.updateStageStreamSize(s.id, !1), o.default.selectParticipant(s.id, e.id))
                    }, [y, s, b, P]);
                    return (0, a.jsx)(N.default, {
                        participant: n,
                        aspectRatio: L,
                        fit: n.type === R.ParticipantTypes.USER ? v.VideoStreamFit.COVER : void 0,
                        blocked: O,
                        channel: s,
                        className: j.tile,
                        inCall: !0,
                        inPopout: C,
                        onClick: D,
                        onContextMenu: f,
                        paused: !1,
                        pulseSpeakingIndicator: !g.enabled,
                        width: i,
                        children: d && n.type === R.ParticipantTypes.USER && (0, a.jsx)(A.default, {})
                    }, x)
                };
            var b = l.memo(function(e) {
                var t;
                let {
                    participant: l,
                    channel: s,
                    width: u
                } = e, o = (0, f.useAppContext)(), c = s.getGuildId();
                i(null != c, "Channel cannot be guildless");
                let {
                    user: p
                } = l, m = (0, r.useStateFromStores)([h.default], () => h.default.getParticipant(s.id, l.id), [s.id, l.id]), E = (0, r.useStateFromStores)([x.default], () => x.default.isModerator(p.id, s.id), [s.id, p.id]);
                if (null == m || m.type === R.ParticipantTypes.ACTIVITY) return null;
                let C = (e, t) => {
                        switch (e.type) {
                            case R.ParticipantTypes.HIDDEN_STREAM:
                            case R.ParticipantTypes.STREAM:
                                (0, d.openContextMenuLazy)(t, async () => {
                                    let {
                                        default: t
                                    } = await n.el("172844").then(n.bind(n, "172844"));
                                    return n => (0, a.jsx)(t, {
                                        ...n,
                                        stream: e.stream,
                                        appContext: o,
                                        exitFullscreen: () => {}
                                    })
                                }, {
                                    context: o
                                });
                                return;
                            case R.ParticipantTypes.USER:
                            default:
                                (0, d.openContextMenuLazy)(t, async () => {
                                    let {
                                        default: e
                                    } = await n.el("834247").then(n.bind(n, "834247"));
                                    return t => (0, a.jsx)(e, {
                                        ...t,
                                        user: p,
                                        guildId: c,
                                        channel: s,
                                        showMediaItems: !0,
                                        showStageChannelItems: !0,
                                        showChatItems: !1
                                    })
                                }, {
                                    context: o
                                })
                        }
                    },
                    g = m.type === R.ParticipantTypes.USER && !(null === (t = m.voiceState) || void 0 === t ? void 0 : t.selfVideo);
                return (0, a.jsx)(a.Fragment, {
                    children: g ? (0, a.jsx)(O, {
                        stageParticipant: l,
                        rtcParticipant: m,
                        channel: s,
                        guildId: c,
                        user: p,
                        width: u,
                        isModerator: E,
                        onContextMenu: C,
                        inPopout: o === M.AppContext.POPOUT
                    }) : (0, a.jsx)(y, {
                        stageParticipant: l,
                        rtcParticipant: m,
                        channel: s,
                        guildId: c,
                        user: p,
                        width: u,
                        isModerator: E,
                        onContextMenu: C,
                        inPopout: o === M.AppContext.POPOUT
                    })
                })
            })