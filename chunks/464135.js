            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var a = n("37983"),
                l = n("884691"),
                i = n("414456"),
                r = n.n(i),
                s = n("917351"),
                u = n("65597"),
                o = n("77078"),
                d = n("731898"),
                c = n("31695"),
                f = n("471671"),
                m = n("830837"),
                v = n("132755"),
                E = n("58608"),
                p = n("80028"),
                h = n("766825");

            function C(e) {
                var t, n, i, C;
                let {
                    sourceURL: x,
                    cropData: S,
                    videoPlayerRef: g,
                    setCropData: I
                } = e, [_, L] = l.useState((C = !(null === (n = g.current) || void 0 === n ? void 0 : null === (t = n.videoElement) || void 0 === t ? void 0 : t.paused), C)), M = l.useRef(null), [T, A] = l.useState(null), [j, R] = l.useState(), P = l.useRef(null), b = l.useRef(null), [w, y] = l.useState(0), [D, k] = l.useState(!1), [O, G] = l.useState(null);
                (0, c.default)(() => {
                    var e;
                    let t = null === (e = g.current) || void 0 === e ? void 0 : e.videoElement;
                    null != t && w !== t.currentTime && y(t.currentTime)
                });
                let F = l.useMemo(() => S.end - S.start, [S]);
                l.useEffect(() => {
                    var e;
                    let t = null === (e = g.current) || void 0 === e ? void 0 : e.videoElement,
                        n = P.current,
                        a = b.current;
                    if (null == t || null == n || null == a) return;
                    let l = (0, s.debounce)(L, p.CLIP_PLAYING_DEBOUNCE_MS),
                        i = () => {
                            A(null), k(!1), l.cancel(), l(!0)
                        },
                        r = () => {
                            l.cancel(), l(!1)
                        };
                    return t.addEventListener("play", i), t.addEventListener("pause", r), () => {
                        t.removeEventListener("play", i), t.removeEventListener("pause", r)
                    }
                }, [g]);
                let {
                    ref: U,
                    width: B = 0,
                    height: V = 0
                } = (0, d.default)(), H = (0, u.default)([f.default], () => f.default.windowSize());
                l.useMemo(() => {
                    let e = U.current;
                    null != e && G(e.getBoundingClientRect())
                }, [H.width, H.height, B]);
                let z = l.useRef(null),
                    Z = l.useRef({}),
                    X = l.useCallback((e, t) => {
                        var n, a, l, i;
                        if (null == j) return;
                        if (null == O) return null;
                        let r = (0, s.clamp)(e, O.left, O.right),
                            u = (r - O.left) / O.width * j,
                            o = (0, s.clamp)(u, 0, j),
                            d = T;
                        if (null == d && t && (d = o <= S.start ? "start" : o >= S.end ? "end" : "playhead", null === (n = g.current) || void 0 === n || n.pause(), A(d), k(_)), "start" === d) {
                            let e = (0, s.clamp)(o, 0, S.end - p.MIN_CLIP_DURATION_SECONDS);
                            I({
                                ...S,
                                start: e
                            }), null === (a = g.current) || void 0 === a || a.seek(e)
                        } else if ("end" === d) {
                            let e = (0, s.clamp)(o, S.start + p.MIN_CLIP_DURATION_SECONDS, j);
                            I({
                                ...S,
                                end: e
                            }), null === (l = g.current) || void 0 === l || l.seek(e)
                        } else if ("playhead" === d) {
                            let e = (0, s.clamp)(o, S.start, S.end);
                            null === (i = g.current) || void 0 === i || i.seek(e)
                        }
                    }, [j, O, T, S, g, _, I]),
                    W = l.useCallback(e => {
                        X(e.clientX, !0)
                    }, [X]),
                    Y = l.useCallback(e => {
                        X(e.clientX, !1)
                    }, [X]),
                    K = l.useCallback(() => {
                        if (D) {
                            var e;
                            null === (e = g.current) || void 0 === e || e.play()
                        }
                        k(!1), A(null)
                    }, [g, D]);
                l.useEffect(() => (document.addEventListener("mousemove", Y), document.addEventListener("mouseup", K), () => {
                    document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", K)
                }), [Y, K]), l.useEffect(() => {
                    (async function e() {
                        var e;
                        let t = U.current,
                            n = M.current;
                        if (null == t || null == n || null == j) return;
                        t.height = V, t.width = B;
                        let a = t.getContext("2d");
                        if (null == a) return;
                        a.fillStyle = "#000", a.fillRect(0, 0, B, V);
                        let l = n.videoWidth / n.videoHeight,
                            i = Math.ceil(V * l),
                            r = Math.ceil(B / i),
                            s = z.current;
                        if (null == s) return;
                        s.width = i, s.height = V;
                        let u = null == s ? void 0 : s.getContext("2d", {
                            willReadFrequently: !0
                        });
                        if (null == u) return;
                        let o = Z.current;
                        if ((null === (e = o[r]) || void 0 === e ? void 0 : e.length) === r) {
                            for (let e = 0; e < r; e++) a.putImageData(o[r][e], i * e, 0);
                            return
                        }
                        for (let e = 0; e < r; e++) await new Promise(t => {
                            n.onseeked = () => {
                                a.drawImage(n, i * e, 0, i, V), u.drawImage(n, 0, 0, i, V);
                                let l = u.getImageData(0, 0, i, V);
                                null == o[r] && (o[r] = []), o[r][e] = l, t()
                            }, n.currentTime = i / B * j * e
                        })
                    })()
                }, [B, V, U, j, z]);
                let q = w - S.start,
                    J = null === (i = g.current) || void 0 === i ? void 0 : i.videoElement;
                return (0, a.jsx)("div", {
                    className: h.centeringWrapper,
                    children: (0, a.jsxs)("div", {
                        className: h.timelineContainer,
                        children: [(0, a.jsx)("div", {
                            className: h.playPauseButtonWrapper,
                            children: (0, a.jsx)(o.Clickable, {
                                onClick: () => {
                                    var e, t;
                                    return _ ? null === (e = g.current) || void 0 === e ? void 0 : e.pause() : null === (t = g.current) || void 0 === t ? void 0 : t.play()
                                },
                                className: h.playPauseButton,
                                children: _ ? (0, a.jsx)(m.default, {
                                    width: 24,
                                    height: 24,
                                    className: h.playPauseIcon
                                }) : (0, a.jsx)(v.default, {
                                    width: 24,
                                    height: 24,
                                    className: h.playPauseIcon
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: r(h.timeline, {
                                [h.timelineDragging]: null != T
                            }),
                            onMouseDown: W,
                            children: [(0, a.jsx)("canvas", {
                                className: h.hiddenCanvas,
                                ref: z
                            }), (0, a.jsx)("canvas", {
                                className: h.timelineBackground,
                                ref: U
                            }), (0, a.jsx)("div", {
                                ref: P,
                                className: h.playhead,
                                style: {
                                    left: null != J ? "".concat(J.currentTime / J.duration * 100, "%") : 0
                                }
                            }), (0, a.jsx)(E.default, {
                                preload: "auto",
                                onLoadedMetadata: function() {
                                    let e = M.current;
                                    if (null != e) {
                                        if (R(e.duration), 0 === S.start && (0 === S.end || S.end === e.duration)) {
                                            var t;
                                            null === (t = g.current) || void 0 === t || t.seek(e.duration / 2), y(e.duration / 2)
                                        }
                                        0 === S.end && I(t => ({
                                            ...t,
                                            end: e.duration
                                        }))
                                    }
                                },
                                className: h.timelineVideo,
                                ref: M,
                                src: x,
                                muted: !0
                            }), (0, a.jsxs)("div", {
                                className: h.dragBox,
                                style: {
                                    left: null != j ? "".concat(S.start / j * 100, "%") : "0",
                                    right: null != j ? "".concat((j - S.end) / j * 100, "%") : "0"
                                },
                                children: [(0, a.jsx)("div", {
                                    className: h.timePillContainer,
                                    children: (0, a.jsx)("div", {
                                        ref: b,
                                        className: h.timePillBackground,
                                        children: (0, a.jsxs)(o.Text, {
                                            variant: "text-sm/normal",
                                            className: h.timePillText,
                                            color: "always-white",
                                            children: [N(q), (0, a.jsx)("span", {
                                                className: h.slashCharacter,
                                                children: " / "
                                            }), N(F)]
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: r(h.dragHandleLeft, {
                                        [h.dragging]: "start" === T
                                    }),
                                    onMouseDown: W,
                                    children: (0, a.jsx)("div", {
                                        className: h.cropLeftArrow
                                    })
                                }), (0, a.jsx)("div", {
                                    className: r(h.dragHandleRight, {
                                        [h.dragging]: "end" === T
                                    }),
                                    onMouseDown: W,
                                    children: (0, a.jsx)("div", {
                                        className: h.cropRightArrow
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }

            function N(e) {
                ((e = Math.round(100 * e) / 100) < 0 || .01 > Math.abs(e)) && (e = 0);
                let t = Math.floor(e / 60),
                    n = Math.floor(e % 60),
                    a = Math.floor(e % 1 * 100);
                return t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, a = a < 10 ? "0" + a : a, "".concat(t, ":").concat(n, ".").concat(a)
            }