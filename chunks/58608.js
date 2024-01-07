            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("118810"),
                i = n("446674"),
                r = n("206230"),
                o = n("719347");
            let u = e => {
                let {
                    externalRef: t,
                    autoPlay: n,
                    playOnHover: u,
                    responsive: d,
                    mediaLayoutType: c,
                    ...m
                } = e, f = (0, i.useStateFromStores)([r.default], () => r.default.useReducedMotion), h = a.useRef(null);

                function p() {
                    var e;
                    u && (null == h || null === (e = h.current) || void 0 === e || e.play())
                }

                function g() {
                    var e;
                    u && (null == h || null === (e = h.current) || void 0 === e || e.pause())
                }
                return a.useLayoutEffect(() => () => {
                    let {
                        current: e
                    } = h;
                    null != e && function(e) {
                        e.removeAttribute("src"), Array.from(e.children).forEach(e => {
                            (0, s.isElement)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, s.isElement)(e, HTMLImageElement) && e.removeAttribute("src")
                        });
                        try {
                            e.load()
                        } catch (e) {}
                    }(e)
                }, []), a.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(h.current)) : null != t && (t.current = h.current), () => {
                    "function" == typeof t ? t(null) : null != t && (t.current = null)
                }), [t, h]), (0, l.jsx)("video", {
                    ref: h,
                    autoPlay: !f && !u && n,
                    onMouseEnter: p,
                    onMouseLeave: g,
                    onFocus: p,
                    onBlur: g,
                    style: c === o.MediaLayoutType.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : d ? function() {
                        return {
                            maxWidth: m.width,
                            maxHeight: m.height,
                            width: "100%",
                            height: "100%"
                        }
                    }() : {},
                    ...m
                })
            };
            var d = a.forwardRef((e, t) => (0, l.jsx)(u, {
                ...e,
                externalRef: t
            }))