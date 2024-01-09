            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var a, l, s = n("37983"),
                i = n("884691"),
                r = n("446674"),
                u = n("737960"),
                o = n("191145"),
                d = n("488464"),
                c = n("567469"),
                f = n("998716"),
                h = n("223378"),
                p = n("973137"),
                m = n("661917"),
                E = n("85427"),
                C = n("620103"),
                g = n("297446"),
                S = n("782340"),
                _ = n("478107");
            let I = {
                singleSpeaker: 424,
                twoSpeakers: 624,
                threeSpeakers: 824
            };
            (l = a || (a = {}))[l.SELECTED = 0] = "SELECTED", l[l.SPEAKER = 1] = "SPEAKER", l[l.AUDIENCE = 2] = "AUDIENCE";
            let T = (e, t) => {
                    let n = Math.floor(e / t - 8),
                        a = Math.floor(n / g.SPEAKER_TILE_ASPECT_RATIO);
                    return {
                        speakerTileWidth: n,
                        speakerTileHeight: a
                    }
                },
                v = (e, t) => e < I.singleSpeaker ? 1 : e < I.twoSpeakers ? 2 : e < I.threeSpeakers ? 3 : t ? 3 : 4,
                x = e => Math.floor((e - 32) / 102);
            var N = (0, u.default)(e => {
                var t, n;
                let {
                    channel: a,
                    width: l,
                    onScroll: u
                } = e, {
                    selectedParticipantId: I,
                    largeStream: N,
                    chatOpen: A
                } = (0, r.useStateFromStoresObject)([o.default], () => ({
                    selectedParticipantId: o.default.getSelectedParticipantId(a.id),
                    largeStream: o.default.getStageStreamSize(a.id),
                    chatOpen: o.default.getChatOpen(a.id)
                }), [a.id]), M = (0, c.useActualStageSpeakerCount)(a.id), R = (0, c.useStageParticipantsCount)(a.id, f.StageChannelParticipantNamedIndex.AUDIENCE), j = (0, r.useStateFromStores)([d.default], () => null != I ? d.default.getParticipant(a.id, I) : null), L = (0, c.useStageParticipants)(a.id, f.StageChannelParticipantNamedIndex.SPEAKER), O = L.filter(e => e.type === f.StageChannelParticipantTypes.VOICE), y = null != L.find(e => e.type === f.StageChannelParticipantTypes.STREAM), b = x(l), P = v(l, A), D = {
                    [f.StageChannelParticipantNamedIndex.SPEAKER]: P,
                    [f.StageChannelParticipantNamedIndex.AUDIENCE]: b,
                    [f.StageChannelParticipantNamedIndex.SELECTED]: 1
                }, U = (0, h.useThrottleDurationForChannel)(a.id), [w, F] = (0, h.useStageChannelParticipantsListThrottled)(a.id, D, U), k = [Math.max(null !== (t = w[0]) && void 0 !== t ? t : 1, 1), Math.max(null !== (n = w[1]) && void 0 !== n ? n : 1, 1), w[2]], {
                    speakerTileWidth: V,
                    speakerTileHeight: B
                } = T(l, P), H = N ? l - 32 : Math.min(l - 64, 3 * V + 8), G = e => e === w.length - 1 || 0 === R && 1 === e, [W, Y] = i.useState(!1), [z, K] = i.useState(!1);
                return (0, s.jsx)(m.default, {
                    sections: k,
                    renderSection: e => {
                        let {
                            section: t
                        } = e;
                        if (1 === t) return 0 === M ? null : (0, s.jsx)(C.default, {
                            participantCount: M,
                            label: S.default.Messages.SPEAKER_LABEL,
                            className: _.header,
                            onClick: () => Y(!W),
                            collapsed: W,
                            speakers: O,
                            channel: a,
                            isStreamLive: y
                        }, "speaker-header-".concat(t));
                        if (2 === t) return 0 === R ? null : (0, s.jsx)(C.default, {
                            participantCount: R,
                            label: S.default.Messages.AUDIENCE_LABEL,
                            className: _.header,
                            onClick: () => K(!z),
                            collapsed: z,
                            channel: a
                        }, "audience-header-".concat(t));
                        return null
                    },
                    sectionHeight: e => 48,
                    renderRow: e => {
                        let {
                            section: t,
                            row: n
                        } = e, l = F[t][n];
                        if ((null == l ? void 0 : l.length) == null) return null;
                        switch (t) {
                            case 0:
                                if (0 === l.length || null == l[0]) return null;
                                return (0, s.jsx)("div", {
                                    className: _.focusedRow,
                                    children: (0, s.jsx)(g.default, {
                                        channel: a,
                                        participant: l[0],
                                        width: H
                                    })
                                }, "selected-participant");
                            case 1:
                                if (W) return null;
                                return (0, s.jsx)(i.Fragment, {
                                    children: (0, s.jsx)(E.default, {
                                        tileWidth: V,
                                        channel: a,
                                        participants: l,
                                        selectedParticipant: j
                                    })
                                }, "speakers-".concat(t, "-").concat(n));
                            case 2:
                                if (z) return null;
                                return (0, s.jsx)(p.default, {
                                    channel: a,
                                    participants: l,
                                    maxTiles: b
                                }, "audience-".concat(t, "-").concat(n));
                            default:
                                return null
                        }
                    },
                    rowHeight: e => {
                        let t = null == F[e][0];
                        return t ? 0 : 0 === e ? H / g.SPEAKER_TILE_ASPECT_RATIO + 8 : 1 === e ? W ? 0 : B : z ? 0 : 98
                    },
                    renderFooter: e => {
                        let {
                            section: t
                        } = e;
                        return G(t) ? (0, s.jsx)("div", {
                            className: _.spacer
                        }, "bottom-spacer") : null
                    },
                    footerHeight: e => 1 === e ? 8 : 0 === e ? 12 : G(e) ? 88 : 0,
                    className: _.scroller,
                    chunkSize: 60,
                    onScroll: u
                })
            })