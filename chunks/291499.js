            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("884691"),
                l = n("65597"),
                s = n("242260"),
                i = n("315841"),
                r = n("52477"),
                o = n("306645"),
                u = n("195513"),
                d = n("107517");

            function c(e) {
                let {
                    user: t,
                    channelId: n,
                    streamerId: c,
                    stream: f,
                    focused: h,
                    canvas: p
                } = e, m = a.useRef(!1), E = (0, l.default)([s.default], () => s.default.getDrawMode()), C = (0, o.default)((0, u.default)(t.id, n, c), f), g = (0, o.default)((0, d.default)(t.id, n, c), f), S = a.useCallback((e, t, n) => {
                    if (null == p) return;
                    let {
                        x: a,
                        y: l
                    } = (0, r.getMouseCoordinatesPercent)(p, n);
                    switch (t.type) {
                        case i.DrawableType.LINE:
                            return C[e](t, a, l);
                        case i.DrawableType.EMOJI_HOSE:
                            return g[e](t, a, l)
                    }
                }, [p, C, g]), _ = a.useCallback(e => {
                    h && null != E && (e.stopPropagation(), m.current = !0, S("handleMouseDown", E, e))
                }, [S, E, h]), I = a.useCallback(e => {
                    h && null != E && (e.stopPropagation(), m.current && S("handleMouseMove", E, e))
                }, [S, E, h]), T = a.useCallback(e => {
                    h && null != E && (e.stopPropagation(), m.current = !1, S("handleMouseUp", E, e))
                }, [S, E, h]), v = a.useCallback(e => {
                    m.current && null != E && S("handleMouseEnter", E, e)
                }, [S, E]);
                a.useEffect(() => {
                    let e = e => {
                        null != E && (m.current = !1, S("handleMouseUp", E, e))
                    };
                    return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e)
                }, [S, E]);
                let x = a.useCallback(e => {
                    h && null != E && e.stopPropagation()
                }, [E, h]);
                return {
                    handleClick: x,
                    handleMouseDown: _,
                    handleMouseEnter: v,
                    handleMouseMove: I,
                    handleMouseUp: T
                }
            }