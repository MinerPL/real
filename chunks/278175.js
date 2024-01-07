            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var i, r, l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("461380"),
                d = n("129722"),
                c = n("859971"),
                E = n("184692"),
                f = n("89050"),
                _ = n("721013");
            (r = i || (i = {}))[r.START = 0] = "START", r[r.PLAYHEAD = 1] = "PLAYHEAD", r[r.END = 2] = "END";
            var I = s.memo(function(e) {
                let {
                    playing: t,
                    onPausePlayback: n,
                    onPlaybackChange: i,
                    onChangePosition: r,
                    disabled: a = !1
                } = e, I = {
                    ...f.defaultWaveformConfig
                }, {
                    audio: h
                } = (0, d.useAudioTrimmerStore)(), m = null != h, A = s.useRef(null), N = s.useRef(null), S = s.useRef(null), [g, p] = s.useState(0), [T, C] = s.useState(0), [R, O] = s.useState(0), [v, L] = s.useState(!1), [D, M] = s.useState(!1), [U, P] = s.useState(!1), [b, y] = s.useState(0), [w, x] = s.useState(-1), F = s.useMemo(() => b / I.fineTuningScale, [I.fineTuningScale, b]);
                s.useEffect(() => {
                    if (null == h) return;
                    let e = 1e3 * h.duration;
                    p(0), C(0), O(e), y(e)
                }, [h]);
                let V = s.useCallback((e, t) => {
                        if (n(), 0 === e.button) switch (t) {
                            case 0:
                                L(!0);
                                break;
                            case 1:
                                M(!0);
                                break;
                            case 2:
                                P(!0)
                        }
                    }, [n]),
                    G = s.useCallback(e => {
                        switch (e) {
                            case 0:
                                L(!1);
                                break;
                            case 1:
                                M(!1);
                                break;
                            case 2:
                                P(!1)
                        }
                        x(-1)
                    }, []),
                    B = s.useCallback(e => {
                        if (null == h || !v) return;
                        let t = parseInt(e.target.value),
                            n = t > R ? R : t;
                        i((0, c.toSeconds)(n)), p(n), C(n)
                    }, [h, i, R, v]),
                    k = s.useCallback(e => {
                        if (null == h || !D) return;
                        let t = parseInt(e.target.value);
                        t < g ? (i((0, c.toSeconds)(g)), C(g)) : t > R ? (i((0, c.toSeconds)(R)), C(R)) : (i((0, c.toSeconds)(t)), C(t))
                    }, [h, i, R, D, g]),
                    H = s.useCallback(e => {
                        if (null == h || !U) return;
                        let t = parseInt(e.target.value),
                            n = t > g ? t : g;
                        i((0, c.toSeconds)(g)), C(g), O(n)
                    }, [h, i, U, g]);
                return s.useEffect(() => {
                    null != r && m && r({
                        startPositionMs: g,
                        endPositionMs: R,
                        playheadPositionMs: T
                    })
                }, [g, R, r, m, T]), s.useEffect(() => {
                    let e;
                    if (null != h) return t && (e = setInterval(() => {
                        h.currentTime < (0, c.toSeconds)(R) ? h.currentTime >= (0, c.toSeconds)(T) && C(1e3 * h.currentTime) : (n((0, c.toSeconds)(g)), C(g))
                    }, 16)), () => {
                        clearInterval(e)
                    }
                }, [h, R, n, T, t, g]), s.useEffect(() => {
                    if (I.fineTuningDelay <= 0) return;
                    let e = setTimeout(() => {
                        v && g == g && -1 === w ? x(g) : U && R == R && -1 === w ? x(R) : D && T == T && -1 === w && x(T)
                    }, I.fineTuningDelay);
                    return () => {
                        clearTimeout(e)
                    }
                }, [I.fineTuningDelay, U, R, w, D, T, v, g]), (0, l.jsxs)("div", {
                    className: o(_.timeline, {
                        [_.initialized]: m
                    }),
                    children: [(0, l.jsxs)("div", {
                        className: _.rangeHandleContainer,
                        children: [(0, l.jsxs)("div", {
                            className: _.rangeHandleFrame,
                            children: [(0, l.jsx)("input", {
                                ref: A,
                                className: o(_.rangeHandle, _.rangeHandleStart),
                                type: "range",
                                min: (0, c.getMinValue)(w, F, b),
                                max: (0, c.getMaxValue)(w, F, b),
                                value: g,
                                onChange: B,
                                onMouseDown: e => V(e, 0),
                                onMouseUp: () => G(0),
                                disabled: !m || a
                            }), (0, l.jsx)("input", {
                                ref: S,
                                className: o(_.rangeHandle, _.rangeHandleEnd),
                                type: "range",
                                min: (0, c.getMinValue)(w, F, b),
                                max: (0, c.getMaxValue)(w, F, b),
                                value: R,
                                onChange: H,
                                onMouseDown: e => V(e, 2),
                                onMouseUp: () => G(2),
                                disabled: !m || a
                            })]
                        }), (0, l.jsx)("div", {
                            className: _.handlePlayheadTrack,
                            children: (0, l.jsx)("input", {
                                ref: N,
                                className: o(_.rangeHandle, _.rangeHandlePlayhead),
                                type: "range",
                                min: (0, c.getMinValue)(w, F, b),
                                max: (0, c.getMaxValue)(w, F, b),
                                value: T,
                                onChange: k,
                                onMouseDown: e => V(e, 1),
                                onMouseUp: () => G(1),
                                disabled: !m || a
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: _.handleContainer,
                        children: [(0, l.jsxs)("div", {
                            className: o(_.handleFrame, {
                                [_.startDragging]: v,
                                [_.endDragging]: U
                            }),
                            style: {
                                left: "".concat((0, c.getStartHandleValue)(g, w, F, b), "%"),
                                right: "".concat((0, c.getEndHandleValue)(R, w, F, b), "%")
                            },
                            children: [(0, l.jsx)("div", {
                                className: o(_.handleIconFrame, _.handleIconFrameStart),
                                children: (0, l.jsx)("div", {
                                    className: o(_.handleIconContainer, _.start),
                                    children: (0, l.jsx)(u.default, {
                                        direction: u.default.Directions.RIGHT,
                                        className: _.handleIcon,
                                        width: 16,
                                        height: 16
                                    })
                                })
                            }), (0, l.jsx)("div", {
                                className: o(_.handleIconFrame, _.handleIconFrameEnd),
                                children: (0, l.jsx)("div", {
                                    className: o(_.handleIconContainer, _.end),
                                    children: (0, l.jsx)(u.default, {
                                        direction: u.default.Directions.LEFT,
                                        className: _.handleIcon,
                                        width: 16,
                                        height: 16
                                    })
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: _.playheadTrack,
                            children: (0, l.jsx)("div", {
                                className: o(_.playhead, {
                                    [_.dragging]: D || v || U || t
                                }),
                                style: {
                                    left: "".concat((0, c.getStartHandleValue)(T, w, F, b), "%")
                                }
                            })
                        })]
                    }), (0, l.jsx)("div", {
                        className: _.waveformContainer,
                        children: (0, l.jsx)(E.default, {
                            fineTuning: w,
                            fineTuningResolution: F,
                            duration: b
                        })
                    })]
                })
            })