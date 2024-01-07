            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                o = n("132755"),
                u = n("78404"),
                d = n("812809"),
                c = n("129722"),
                E = n("278175"),
                f = n("859971"),
                _ = n("846325"),
                I = n("193326");
            let h = {
                startPositionMs: 0,
                endPositionMs: 2e4,
                playheadPositionMs: 0
            };
            var m = r.memo(function(e) {
                var t;
                let {
                    className: n,
                    volume: l,
                    disabled: m = !1,
                    onChange: A
                } = e, {
                    audio: N
                } = (0, c.useAudioTrimmerStore)(), [S, g] = r.useState(!1), [p, T] = r.useState(h), {
                    playheadPositionMs: C,
                    endPositionMs: R,
                    startPositionMs: O
                } = p, v = null != N, L = R - O, D = L > 1e3 * _.MAX_SOUND_LENGTH_SECONDS;
                r.useEffect(() => {
                    null != N && T({
                        playheadPositionMs: 0,
                        endPositionMs: 1e3 * N.duration,
                        startPositionMs: 0
                    })
                }, [N]);
                let M = r.useCallback(e => {
                        null != N && (N.pause(), null != e && (N.currentTime = e), g(!1))
                    }, [N]),
                    U = r.useCallback(() => {
                        if (null != N) {
                            if (S) {
                                M();
                                return
                            }
                            C >= R ? N.currentTime = (0, f.toSeconds)(O) : N.currentTime = (0, f.toSeconds)(C), N.volume = (0, d.default)(l), N.play(), g(!0)
                        }
                    }, [N, R, M, C, S, O, l]),
                    P = r.useCallback(e => {
                        T(e), null == A || A({
                            startMs: e.startPositionMs,
                            endMs: e.endPositionMs
                        })
                    }, [A]),
                    b = r.useCallback(e => {
                        null != N && (N.currentTime = e)
                    }, [N]);
                return (0, i.jsxs)("div", {
                    className: s(I.container, {
                        [I.initialized]: v,
                        [I.disabled]: !v || m
                    }, n),
                    children: [(0, i.jsxs)("div", {
                        className: I.playButtonContainer,
                        children: [(0, i.jsx)(a.Clickable, {
                            className: I.playButton,
                            onClick: v ? U : void 0,
                            children: S ? (0, i.jsx)(u.default, {
                                className: I.playButtonIcon
                            }) : (0, i.jsx)(o.default, {
                                className: I.playButtonIcon
                            })
                        }), (0, i.jsx)("div", {
                            className: I.durationContainer,
                            children: (0, i.jsx)(a.Text, {
                                className: I.duration,
                                variant: "text-xs/normal",
                                color: D ? "text-warning" : "text-positive",
                                children: (t = L, "".concat((0, f.toSeconds)(t).toFixed(2), "s"))
                            })
                        })]
                    }), (0, i.jsx)(E.default, {
                        playing: S,
                        onPlaybackChange: b,
                        onPausePlayback: M,
                        onChangePosition: P,
                        disabled: m
                    })]
                })
            })