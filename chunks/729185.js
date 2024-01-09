            "use strict";
            n.r(t), n.d(t, {
                StreamTileIndicators: function() {
                    return B
                },
                default: function() {
                    return H
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                u = n("77078"),
                o = n("255397"),
                d = n("990766"),
                c = n("103723"),
                f = n("605250"),
                h = n("889014"),
                p = n("430951"),
                m = n("673527"),
                E = n("336804"),
                C = n("952221"),
                S = n("600123"),
                g = n("373469"),
                _ = n("271938"),
                I = n("42203"),
                T = n("42887"),
                v = n("471671"),
                x = n("512264"),
                N = n("30672"),
                A = n("980423"),
                M = n("100844"),
                R = n("607391"),
                j = n("683245"),
                L = n("772442"),
                O = n("211019"),
                y = n("810640"),
                b = n("170643"),
                P = n("144565"),
                D = n("49111"),
                U = n("99795"),
                w = n("353927"),
                F = n("782340"),
                k = n("146789");
            let V = new f.default("StreamTile");

            function B(e) {
                let {
                    participant: t,
                    selected: n,
                    focused: l,
                    idle: s,
                    width: i
                } = e, u = (0, r.useStateFromStores)([g.default], () => g.default.getActiveStreamForUser(t.user.id, t.stream.guildId)), o = (0, P.isVideoCompact)(i);
                return (0, a.jsxs)(a.Fragment, {
                    children: [n ? null : (0, a.jsx)(b.default, {
                        participant: t
                    }), l || null == u || u.state === D.ApplicationStreamStates.ENDED || u.state === D.ApplicationStreamStates.FAILED ? null : (0, a.jsx)(E.default, {
                        size: A.default.Sizes.SMALL,
                        className: k.liveIndicator,
                        participant: t,
                        showQuality: !o && !s,
                        isUpsellEnabled: !1
                    })]
                })
            }

            function H(e) {
                let {
                    participant: t,
                    selected: n,
                    onVideoResize: s,
                    paused: f,
                    fit: E,
                    inPopout: A,
                    width: b,
                    focused: P
                } = e, B = T.default.getVideoComponent(), H = (0, r.useStateFromStores)([_.default], () => _.default.getId()), G = (0, h.default)(), {
                    stream: W,
                    user: Y,
                    streamId: z
                } = t, K = (0, r.useStateFromStores)([I.default], () => I.default.getChannel(W.channelId)), Z = (0, r.useStateFromStores)([g.default], () => g.default.getActiveStreamForUser(Y.id, W.guildId), [Y.id, W.guildId]), X = (0, r.useStateFromStores)([g.default], () => g.default.getAllActiveStreams().length > 0), J = (0, r.useStateFromStores)([v.default], () => v.default.isFocused()), q = (null == Z ? void 0 : Z.ownerId) === H, Q = q && !J && !A, $ = null != Z ? (0, p.default)(Z, Y, Y.id === H, Q) : null, ee = b < 195;
                if (l.useEffect(() => {
                        !X && (null == K ? void 0 : K.isGuildStageVoice()) && !q && ((0, d.watchStream)(W), o.default.updateStageStreamSize(W.channelId, !1))
                    }, []), l.useEffect(() => {
                        V.info("Stream Tile State - activeStream: ".concat(null != Z, " | selected: ").concat(n, " | Video: ").concat(null != B, " | MediaEngine: ").concat(T.default.supports(w.Features.VIDEO)))
                    }, [B, Z, n]), G) return (0, a.jsx)(y.default, {
                    stream: t.stream,
                    isSmall: ee,
                    selected: n,
                    isSelfStream: Y.id === H
                });
                if ((null == Z ? void 0 : Z.state) === D.ApplicationStreamStates.ENDED) return (0, a.jsx)(j.default, {
                    selected: n,
                    stream: Z,
                    width: b
                });
                if ((null == Z ? void 0 : Z.state) === D.ApplicationStreamStates.FAILED) return (0, a.jsx)(L.default, {
                    selected: n,
                    stream: Z,
                    width: b
                });
                else if (t.type === U.ParticipantTypes.HIDDEN_STREAM) return (0, a.jsx)(O.default, {
                    selected: n,
                    participant: t,
                    width: b
                });
                else if (null != Z && !n && null != B && T.default.supports(w.Features.VIDEO)) return (0, a.jsxs)(a.Fragment, {
                    children: [null != K ? (0, a.jsx)(C.default, {
                        focused: P,
                        channelId: K.id,
                        guildId: K.guild_id,
                        streamerId: Y.id,
                        hasScreenMessage: null != $,
                        stream: W
                    }) : null, (0, a.jsx)(x.default, {
                        onResize: s,
                        wrapperClassName: k.videoWrapper,
                        className: k.content,
                        streamId: z,
                        videoComponent: B,
                        fit: E,
                        paused: f || Q,
                        videoSpinnerContext: q ? c.VideoSpinnerContext.SELF_STREAM : c.VideoSpinnerContext.REMOTE_STREAM,
                        userId: Y.id
                    }, z), null != $ ? (0, a.jsx)(S.default, {
                        size: (0, R.getSizeForWidth)(b),
                        ...$
                    }) : null]
                });
                else return (0, a.jsxs)("div", {
                    className: i(k.content, k.streamPreview, {
                        [k.small]: ee
                    }),
                    children: [(0, a.jsx)(m.default, {
                        noText: !0,
                        className: i(k.absoluteFill, {
                            [k.streamPreviewOpacity]: null == Z
                        }),
                        stream: t.stream
                    }), n ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(M.CallTileCTA, {
                            isSmall: ee,
                            children: (0, a.jsx)(u.Text, {
                                variant: ee ? "text-sm/semibold" : "text-md/semibold",
                                color: "none",
                                children: b < 175 ? F.default.Messages.WATCH : F.default.Messages.WATCH_STREAM
                            })
                        }), X ? (0, a.jsx)(M.CallTileCTA, {
                            className: k.addCTA,
                            tooltip: F.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                            onClick: e => {
                                e.stopPropagation(), (0, d.watchStream)(W, {
                                    forceMultiple: !0
                                })
                            },
                            isSmall: ee,
                            children: (0, a.jsx)(N.default, {
                                className: k.addStreamIcon
                            })
                        }) : null]
                    })]
                })
            }