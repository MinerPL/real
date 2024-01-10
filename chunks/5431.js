            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007"), n("424973");
            var a = n("37983"),
                l = n("884691"),
                i = n("917351"),
                r = n("31695"),
                s = n("58608"),
                u = n("756458");

            function o(e) {
                let {
                    setRef: t,
                    audioTrackLabel: n,
                    src: i,
                    muted: r
                } = e, s = l.useCallback(e => {
                    t(e, n)
                }, [t, n]), o = l.useCallback(e => {
                    Object.values(e.currentTarget.audioTracks).forEach(e => {
                        e.enabled = n === e.label
                    })
                }, [n]);
                return (0, a.jsx)("audio", {
                    id: "ClipsPlayerAudioTrack:".concat(n),
                    className: u.hidden,
                    ref: s,
                    src: i,
                    muted: r,
                    preload: "auto",
                    onLoadedMetadata: o
                })
            }
            var d = l.forwardRef(function(e, t) {
                let {
                    src: n,
                    audioSrc: d,
                    applicationAudioEnabled: c,
                    voiceAudioEnabled: f,
                    isLoading: m,
                    onDoneLoading: v,
                    startTime: E = 0,
                    endTime: p
                } = e, h = l.useRef({}), [C, N] = l.useState([]), x = l.useRef(!1), S = l.useCallback(() => {
                    let e = h.current.main;
                    if (null == e) return;
                    let t = (0, i.round)(e.currentTime, 3),
                        n = (0, i.round)(E, 3),
                        a = null != p ? (0, i.round)(p, 3) : (0, i.round)(e.duration, 3);
                    if (t >= a || t < n) {
                        for (let e of Object.values(h.current)) null != e && (e.currentTime = E);
                        return !0
                    }
                }, [E, p]);
                (0, r.default)(() => {
                    if (x.current) {
                        let e = S();
                        e && g()
                    }
                });
                let g = l.useCallback(() => {
                        for (let e of (x.current = !0, S(), Object.values(h.current))) null != e && e.play()
                    }, [S]),
                    I = l.useCallback(() => {
                        for (let e of Object.values(h.current)) null != e && e.pause()
                    }, []),
                    _ = l.useCallback(e => {
                        var t;
                        for (let n of ((null === (t = h.current.main) || void 0 === t ? void 0 : t.paused) && (x.current = !1), Object.values(h.current))) null != n && (n.currentTime = e)
                    }, []),
                    L = l.useCallback(() => {
                        var e;
                        (null === (e = h.current.main) || void 0 === e ? void 0 : e.paused) ? g(): I()
                    }, [g, I]),
                    M = l.useCallback(e => {
                        h.current.main = e
                    }, []),
                    T = l.useCallback(e => {
                        let t = [];
                        for (let n of Object.values(e.currentTarget.audioTracks)) n.label.includes(":application") ? n.enabled = !0 : n.label.includes(":voice") ? (n.enabled = !1, !t.includes(n.label) && t.push(n.label)) : n.enabled = !1;
                        N(t)
                    }, []),
                    A = l.useCallback((e, t) => {
                        h.current[t] = e
                    }, []);
                return (l.useImperativeHandle(t, () => ({
                    play: g,
                    seek: _,
                    pause: I,
                    videoElement: h.current.main
                })), null == n) ? null : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.default, {
                        onClick: L,
                        className: m ? u.hidden : u.displayVideo,
                        ref: M,
                        src: n,
                        muted: !c,
                        onLoadedMetadata: T,
                        onLoadedData: v,
                        preload: "auto"
                    }), C.map(e => (0, a.jsx)(o, {
                        audioTrackLabel: e,
                        setRef: A,
                        src: d,
                        muted: !f
                    }, e))]
                })
            })