            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("424973");
            var a = n("884691"),
                l = n("862337"),
                s = n("669491"),
                i = n("77078"),
                r = n("462274"),
                u = n("800762"),
                o = n("760679"),
                d = n("242260"),
                c = n("315841"),
                f = n("52477"),
                h = n("553930"),
                p = n("717482"),
                m = n("827520");
            let E = 1e3 / 60;

            function C(e, t, n, C) {
                let g = (0, i.useToken)(s.default.unsafe_rawColors.BRAND_500).hex(),
                    S = (0, i.useToken)(s.default.unsafe_rawColors.BLACK_500).hex(),
                    _ = (0, i.useToken)(s.default.unsafe_rawColors.WHITE_500).hex(),
                    I = a.useRef({}),
                    T = a.useRef(new l.Interval),
                    v = a.useCallback(t => {
                        let n = d.default.getDrawables(t);
                        (0, f.clearCanvas)(e), ! function(e) {
                            let {
                                canvasRef: t,
                                drawables: n,
                                fallbackColor: a,
                                linesDrawnAt: l,
                                streamerId: s,
                                channelId: i,
                                outlineColorDark: r,
                                outlineColorLight: d
                            } = e;
                            if (0 === n.length) return;
                            let f = t.current;
                            if (null == f) return;
                            let m = f.getContext("2d");
                            if (null == m) return;
                            let {
                                width: E,
                                height: C
                            } = f.getBoundingClientRect(), g = [];
                            n.forEach(e => {
                                let t = null != u.default.getVoiceStateForChannel(i, e.userId);
                                if (!t) {
                                    g.push(e);
                                    return
                                }! function(e) {
                                    let {
                                        drawable: t,
                                        context: n,
                                        canvasWidth: a,
                                        canvasHeight: l,
                                        fallbackColor: s,
                                        outlineColorDark: i,
                                        outlineColorLight: r,
                                        linesDrawnAt: u,
                                        streamerId: o,
                                        deadDrawables: d
                                    } = e;
                                    switch (t.type) {
                                        case c.DrawableType.LINE:
                                            return (0, p.default)({
                                                line: t,
                                                context: n,
                                                canvasWidth: a,
                                                canvasHeight: l,
                                                fallbackColor: s,
                                                outlineColorDark: i,
                                                outlineColorLight: r,
                                                linesDrawnAt: u,
                                                deadDrawables: d
                                            });
                                        case c.DrawableType.EMOJI_HOSE:
                                            return (0, h.default)({
                                                emojiHose: t,
                                                context: n,
                                                canvasWidth: a,
                                                canvasHeight: l,
                                                fallbackColor: s,
                                                outlineColorDark: i,
                                                outlineColorLight: r,
                                                streamerId: o,
                                                deadDrawables: d
                                            })
                                    }
                                }({
                                    drawable: e,
                                    context: m,
                                    canvasWidth: E,
                                    canvasHeight: C,
                                    fallbackColor: a,
                                    outlineColorDark: r,
                                    outlineColorLight: d,
                                    linesDrawnAt: l,
                                    deadDrawables: g,
                                    streamerId: s
                                })
                            }), g.length > 0 && (0, o.clearDrawables)(g, s)
                        }({
                            canvasRef: e,
                            drawables: n,
                            fallbackColor: g,
                            linesDrawnAt: I,
                            streamerId: t,
                            outlineColorDark: S,
                            outlineColorLight: _,
                            channelId: C
                        })
                    }, [e, C, g, S, _]);
                a.useEffect(() => {
                    let t = new ResizeObserver(() => {
                        let t = e.current;
                        if (null == t) return;
                        let {
                            width: a,
                            height: l
                        } = t.getBoundingClientRect();
                        t.width = a * window.devicePixelRatio, t.height = l * window.devicePixelRatio, v(n)
                    });
                    return null != e.current && t.observe(e.current), () => t.disconnect()
                }, [e, v, n]);
                let x = a.useCallback(() => {
                    let t = d.default.getDrawables(n),
                        a = h.useEmojiHoseStore.getState().particles,
                        l = t.length > 0 || Object.keys(a).length > 0;
                    l && null == T.current._ref && (null == T.current._ref ? (v(n), T.current.start(E, () => v(n))) : !l && null != T.current._ref && (T.current.stop(), (0, f.clearCanvas)(e)))
                }, [e, v, n]);
                a.useEffect(() => {
                    let e = T.current;
                    return d.default.addChangeListener(x), x(), (0, r.maybeFetchColors)(t.getAvatarURL(null, m.AVATAR_COLOR_AVATAR_SIZE)), () => {
                        d.default.removeChangeListener(x), e.stop()
                    }
                })
            }