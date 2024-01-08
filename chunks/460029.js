            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
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
                f = n("278175"),
                E = n("859971"),
                _ = n("846325"),
                h = n("193326");
            let m = {
                startPositionMs: 0,
                endPositionMs: 2e4,
                playheadPositionMs: 0
            };
            var g = r.memo(function(e) {
                var t;
                let {
                    className: n,
                    volume: l,
                    disabled: g = !1,
                    onChange: p
                } = e, {
                    audio: I
                } = (0, c.useAudioTrimmerStore)(), [S, A] = r.useState(!1), [N, v] = r.useState(m), {
                    playheadPositionMs: R,
                    endPositionMs: C,
                    startPositionMs: T
                } = N, O = null != I, L = C - T, D = L > 1e3 * _.MAX_SOUND_LENGTH_SECONDS;
                r.useEffect(() => {
                    null != I && v({
                        playheadPositionMs: 0,
                        endPositionMs: 1e3 * I.duration,
                        startPositionMs: 0
                    })
                }, [I]);
                let M = r.useCallback(e => {
                        null != I && (I.pause(), null != e && (I.currentTime = e), A(!1))
                    }, [I]),
                    b = r.useCallback(() => {
                        if (null != I) {
                            if (S) {
                                M();
                                return
                            }
                            R >= C ? I.currentTime = (0, E.toSeconds)(T) : I.currentTime = (0, E.toSeconds)(R), I.volume = (0, d.default)(l), I.play(), A(!0)
                        }
                    }, [I, C, M, R, S, T, l]),
                    U = r.useCallback(e => {
                        v(e), null == p || p({
                            startMs: e.startPositionMs,
                            endMs: e.endPositionMs
                        })
                    }, [p]),
                    y = r.useCallback(e => {
                        null != I && (I.currentTime = e)
                    }, [I]);
                return (0, i.jsxs)("div", {
                    className: s(h.container, {
                        [h.initialized]: O,
                        [h.disabled]: !O || g
                    }, n),
                    children: [(0, i.jsxs)("div", {
                        className: h.playButtonContainer,
                        children: [(0, i.jsx)(a.Clickable, {
                            className: h.playButton,
                            onClick: O ? b : void 0,
                            children: S ? (0, i.jsx)(u.default, {
                                className: h.playButtonIcon
                            }) : (0, i.jsx)(o.default, {
                                className: h.playButtonIcon
                            })
                        }), (0, i.jsx)("div", {
                            className: h.durationContainer,
                            children: (0, i.jsx)(a.Text, {
                                className: h.duration,
                                variant: "text-xs/normal",
                                color: D ? "text-warning" : "text-positive",
                                children: (t = L, "".concat((0, E.toSeconds)(t).toFixed(2), "s"))
                            })
                        })]
                    }), (0, i.jsx)(f.default, {
                        playing: S,
                        onPlaybackChange: y,
                        onPausePlayback: M,
                        onChangePosition: U,
                        disabled: g
                    })]
                })
            })