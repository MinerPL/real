            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("70102");
            var l = n("884691"),
                u = n("286235"),
                a = (e, t, n, a, i) => {
                    let s = (0, l.useRef)(!1);
                    (0, l.useEffect)(() => {
                        if (t && !s.current) {
                            s.current = !0;
                            let t = setTimeout(() => {
                                let t = Error("".concat(e, " is taking too long to load."));
                                u.default.setExtra({
                                    loadingState: a,
                                    loadingTimeSeconds: n
                                }), u.default.captureException(t, {
                                    ...i,
                                    tags: {
                                        ...null == i ? void 0 : i.tags
                                    }
                                })
                            }, 1e3 * n);
                            return () => {
                                clearTimeout(t)
                            }
                        }
                    }, [t, n])
                }