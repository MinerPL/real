            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return C
                }
            }), a("222007");
            var n = a("37983"),
                l = a("884691"),
                i = a("414456"),
                r = a.n(i),
                s = a("917351"),
                u = a("65597"),
                o = a("77078"),
                d = a("731898"),
                c = a("31695"),
                f = a("471671"),
                m = a("830837"),
                v = a("132755"),
                E = a("58608"),
                p = a("80028"),
                h = a("766825");

            function C(e) {
                var t, a, i, C;
                let {
                    sourceURL: x,
                    cropData: g,
                    videoPlayerRef: S,
                    setCropData: I
                } = e, [_, L] = l.useState((C = !(null === (a = S.current) || void 0 === a ? void 0 : null === (t = a.videoElement) || void 0 === t ? void 0 : t.paused), C)), M = l.useRef(null), [T, A] = l.useState(null), [j, R] = l.useState(), P = l.useRef(null), b = l.useRef(null), [w, y] = l.useState(0), [D, k] = l.useState(!1), [O, G] = l.useState(null);
                (0, c.default)(() => {
                    var e;
                    let t = null === (e = S.current) || void 0 === e ? void 0 : e.videoElement;
                    null != t && w !== t.currentTime && y(t.currentTime)
                });
                let F = l.useMemo(() => g.end - g.start, [g]);
                l.useEffect(() => {
                    var e;
                    let t = null === (e = S.current) || void 0 === e ? void 0 : e.videoElement,
                        a = P.current,
                        n = b.current;
                    if (null == t || null == a || null == n) return;
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
                }, [S]);
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
                        var a, n, l, i;
                        if (null == j) return;
                        if (null == O) return null;
                        let r = (0, s.clamp)(e, O.left, O.right),
                            u = (r - O.left) / O.width * j,
                            o = (0, s.clamp)(u, 0, j),
                            d = T;
                        if (null == d && t && (d = o <= g.start ? "start" : o >= g.end ? "end" : "playhead", null === (a = S.current) || void 0 === a || a.pause(), A(d), k(_)), "start" === d) {
                            let e = (0, s.clamp)(o, 0, g.end - p.MIN_CLIP_DURATION_SECONDS);
                            I({
                                ...g,
                                start: e
                            }), null === (n = S.current) || void 0 === n || n.seek(e)
                        } else if ("end" === d) {
                            let e = (0, s.clamp)(o, g.start + p.MIN_CLIP_DURATION_SECONDS, j);
                            I({
                                ...g,
                                end: e
                            }), null === (l = S.current) || void 0 === l || l.seek(e)
                        } else if ("playhead" === d) {
                            let e = (0, s.clamp)(o, g.start, g.end);
                            null === (i = S.current) || void 0 === i || i.seek(e)
                        }
                    }, [j, O, T, g, S, _, I]),
                    W = l.useCallback(e => {
                        X(e.clientX, !0)
                    }, [X]),
                    Y = l.useCallback(e => {
                        X(e.clientX, !1)
                    }, [X]),
                    K = l.useCallback(() => {
                        if (D) {
                            var e;
                            null === (e = S.current) || void 0 === e || e.play()
                        }
                        k(!1), A(null)
                    }, [S, D]);
                l.useEffect(() => (document.addEventListener("mousemove", Y), document.addEventListener("mouseup", K), () => {
                    document.removeEventListener("mousemove", Y), document.removeEventListener("mouseup", K)
                }), [Y, K]), l.useEffect(() => {
                    (async function e() {
                        var e;
                        let t = U.current,
                            a = M.current;
                        if (null == t || null == a || null == j) return;
                        t.height = V, t.width = B;
                        let n = t.getContext("2d");
                        if (null == n) return;
                        n.fillStyle = "#000", n.fillRect(0, 0, B, V);
                        let l = a.videoWidth / a.videoHeight,
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
                            for (let e = 0; e < r; e++) n.putImageData(o[r][e], i * e, 0);
                            return
                        }
                        for (let e = 0; e < r; e++) await new Promise(t => {
                            a.onseeked = () => {
                                n.drawImage(a, i * e, 0, i, V), u.drawImage(a, 0, 0, i, V);
                                let l = u.getImageData(0, 0, i, V);
                                null == o[r] && (o[r] = []), o[r][e] = l, t()
                            }, a.currentTime = i / B * j * e
                        })
                    })()
                }, [B, V, U, j, z]);
                let q = w - g.start,
                    J = null === (i = S.current) || void 0 === i ? void 0 : i.videoElement;
                return (0, n.jsx)("div", {
                    className: h.centeringWrapper,
                    children: (0, n.jsxs)("div", {
                        className: h.timelineContainer,
                        children: [(0, n.jsx)("div", {
                            className: h.playPauseButtonWrapper,
                            children: (0, n.jsx)(o.Clickable, {
                                onClick: () => {
                                    var e, t;
                                    return _ ? null === (e = S.current) || void 0 === e ? void 0 : e.pause() : null === (t = S.current) || void 0 === t ? void 0 : t.play()
                                },
                                className: h.playPauseButton,
                                children: _ ? (0, n.jsx)(m.default, {
                                    width: 24,
                                    height: 24,
                                    className: h.playPauseIcon
                                }) : (0, n.jsx)(v.default, {
                                    width: 24,
                                    height: 24,
                                    className: h.playPauseIcon
                                })
                            })
                        }), (0, n.jsxs)("div", {
                            className: r(h.timeline, {
                                [h.timelineDragging]: null != T
                            }),
                            onMouseDown: W,
                            children: [(0, n.jsx)("canvas", {
                                className: h.hiddenCanvas,
                                ref: z
                            }), (0, n.jsx)("canvas", {
                                className: h.timelineBackground,
                                ref: U
                            }), (0, n.jsx)("div", {
                                ref: P,
                                className: h.playhead,
                                style: {
                                    left: null != J ? "".concat(J.currentTime / J.duration * 100, "%") : 0
                                }
                            }), (0, n.jsx)(E.default, {
                                preload: "auto",
                                onLoadedMetadata: function() {
                                    let e = M.current;
                                    if (null != e) {
                                        if (R(e.duration), 0 === g.start && (0 === g.end || g.end === e.duration)) {
                                            var t;
                                            null === (t = S.current) || void 0 === t || t.seek(e.duration / 2), y(e.duration / 2)
                                        }
                                        0 === g.end && I(t => ({
                                            ...t,
                                            end: e.duration
                                        }))
                                    }
                                },
                                className: h.timelineVideo,
                                ref: M,
                                src: x,
                                muted: !0
                            }), (0, n.jsxs)("div", {
                                className: h.dragBox,
                                style: {
                                    left: null != j ? "".concat(g.start / j * 100, "%") : "0",
                                    right: null != j ? "".concat((j - g.end) / j * 100, "%") : "0"
                                },
                                children: [(0, n.jsx)("div", {
                                    className: h.timePillContainer,
                                    children: (0, n.jsx)("div", {
                                        ref: b,
                                        className: h.timePillBackground,
                                        children: (0, n.jsxs)(o.Text, {
                                            variant: "text-sm/normal",
                                            className: h.timePillText,
                                            color: "always-white",
                                            children: [N(q), (0, n.jsx)("span", {
                                                className: h.slashCharacter,
                                                children: " / "
                                            }), N(F)]
                                        })
                                    })
                                }), (0, n.jsx)("div", {
                                    className: r(h.dragHandleLeft, {
                                        [h.dragging]: "start" === T
                                    }),
                                    onMouseDown: W,
                                    children: (0, n.jsx)("div", {
                                        className: h.cropLeftArrow
                                    })
                                }), (0, n.jsx)("div", {
                                    className: r(h.dragHandleRight, {
                                        [h.dragging]: "end" === T
                                    }),
                                    onMouseDown: W,
                                    children: (0, n.jsx)("div", {
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
                    a = Math.floor(e % 60),
                    n = Math.floor(e % 1 * 100);
                return t = t < 10 ? "0" + t : t, a = a < 10 ? "0" + a : a, n = n < 10 ? "0" + n : n, "".concat(t, ":").concat(a, ".").concat(n)
            }