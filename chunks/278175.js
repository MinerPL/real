            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var i, r, l = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("461380"),
                d = n("129722"),
                c = n("859971"),
                f = n("184692"),
                E = n("89050"),
                _ = n("721013");
            (r = i || (i = {}))[r.START = 0] = "START", r[r.PLAYHEAD = 1] = "PLAYHEAD", r[r.END = 2] = "END";
            var h = s.memo(function(e) {
                let {
                    playing: t,
                    onPausePlayback: n,
                    onPlaybackChange: i,
                    onChangePosition: r,
                    disabled: a = !1
                } = e, h = {
                    ...E.defaultWaveformConfig
                }, {
                    audio: m
                } = (0, d.useAudioTrimmerStore)(), g = null != m, p = s.useRef(null), I = s.useRef(null), S = s.useRef(null), [A, N] = s.useState(0), [v, R] = s.useState(0), [C, T] = s.useState(0), [O, L] = s.useState(!1), [D, M] = s.useState(!1), [b, U] = s.useState(!1), [y, P] = s.useState(0), [w, x] = s.useState(-1), F = s.useMemo(() => y / h.fineTuningScale, [h.fineTuningScale, y]);
                s.useEffect(() => {
                    if (null == m) return;
                    let e = 1e3 * m.duration;
                    N(0), R(0), T(e), P(e)
                }, [m]);
                let V = s.useCallback((e, t) => {
                        if (n(), 0 === e.button) switch (t) {
                            case 0:
                                L(!0);
                                break;
                            case 1:
                                M(!0);
                                break;
                            case 2:
                                U(!0)
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
                                U(!1)
                        }
                        x(-1)
                    }, []),
                    k = s.useCallback(e => {
                        if (null == m || !O) return;
                        let t = parseInt(e.target.value),
                            n = t > C ? C : t;
                        i((0, c.toSeconds)(n)), N(n), R(n)
                    }, [m, i, C, O]),
                    B = s.useCallback(e => {
                        if (null == m || !D) return;
                        let t = parseInt(e.target.value);
                        t < A ? (i((0, c.toSeconds)(A)), R(A)) : t > C ? (i((0, c.toSeconds)(C)), R(C)) : (i((0, c.toSeconds)(t)), R(t))
                    }, [m, i, C, D, A]),
                    j = s.useCallback(e => {
                        if (null == m || !b) return;
                        let t = parseInt(e.target.value),
                            n = t > A ? t : A;
                        i((0, c.toSeconds)(A)), R(A), T(n)
                    }, [m, i, b, A]);
                return s.useEffect(() => {
                    null != r && g && r({
                        startPositionMs: A,
                        endPositionMs: C,
                        playheadPositionMs: v
                    })
                }, [A, C, r, g, v]), s.useEffect(() => {
                    let e;
                    if (null != m) return t && (e = setInterval(() => {
                        m.currentTime < (0, c.toSeconds)(C) ? m.currentTime >= (0, c.toSeconds)(v) && R(1e3 * m.currentTime) : (n((0, c.toSeconds)(A)), R(A))
                    }, 16)), () => {
                        clearInterval(e)
                    }
                }, [m, C, n, v, t, A]), s.useEffect(() => {
                    if (h.fineTuningDelay <= 0) return;
                    let e = setTimeout(() => {
                        O && A == A && -1 === w ? x(A) : b && C == C && -1 === w ? x(C) : D && v == v && -1 === w && x(v)
                    }, h.fineTuningDelay);
                    return () => {
                        clearTimeout(e)
                    }
                }, [h.fineTuningDelay, b, C, w, D, v, O, A]), (0, l.jsxs)("div", {
                    className: o(_.timeline, {
                        [_.initialized]: g
                    }),
                    children: [(0, l.jsxs)("div", {
                        className: _.rangeHandleContainer,
                        children: [(0, l.jsxs)("div", {
                            className: _.rangeHandleFrame,
                            children: [(0, l.jsx)("input", {
                                ref: p,
                                className: o(_.rangeHandle, _.rangeHandleStart),
                                type: "range",
                                min: (0, c.getMinValue)(w, F, y),
                                max: (0, c.getMaxValue)(w, F, y),
                                value: A,
                                onChange: k,
                                onMouseDown: e => V(e, 0),
                                onMouseUp: () => G(0),
                                disabled: !g || a
                            }), (0, l.jsx)("input", {
                                ref: S,
                                className: o(_.rangeHandle, _.rangeHandleEnd),
                                type: "range",
                                min: (0, c.getMinValue)(w, F, y),
                                max: (0, c.getMaxValue)(w, F, y),
                                value: C,
                                onChange: j,
                                onMouseDown: e => V(e, 2),
                                onMouseUp: () => G(2),
                                disabled: !g || a
                            })]
                        }), (0, l.jsx)("div", {
                            className: _.handlePlayheadTrack,
                            children: (0, l.jsx)("input", {
                                ref: I,
                                className: o(_.rangeHandle, _.rangeHandlePlayhead),
                                type: "range",
                                min: (0, c.getMinValue)(w, F, y),
                                max: (0, c.getMaxValue)(w, F, y),
                                value: v,
                                onChange: B,
                                onMouseDown: e => V(e, 1),
                                onMouseUp: () => G(1),
                                disabled: !g || a
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: _.handleContainer,
                        children: [(0, l.jsxs)("div", {
                            className: o(_.handleFrame, {
                                [_.startDragging]: O,
                                [_.endDragging]: b
                            }),
                            style: {
                                left: "".concat((0, c.getStartHandleValue)(A, w, F, y), "%"),
                                right: "".concat((0, c.getEndHandleValue)(C, w, F, y), "%")
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
                                    [_.dragging]: D || O || b || t
                                }),
                                style: {
                                    left: "".concat((0, c.getStartHandleValue)(v, w, F, y), "%")
                                }
                            })
                        })]
                    }), (0, l.jsx)("div", {
                        className: _.waveformContainer,
                        children: (0, l.jsx)(f.default, {
                            fineTuning: w,
                            fineTuningResolution: F,
                            duration: y
                        })
                    })]
                })
            })