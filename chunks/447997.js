            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                o = n("907002"),
                i = n("230606");
            let l = () => {
                let e = s.useRef(null),
                    [t, n] = s.useState(0),
                    a = s.useMemo(() => new i.default(e => {
                        let [t] = e;
                        return n(t.contentRect.height)
                    }), []);
                return s.useLayoutEffect(() => (null != e.current && a.observe(e.current), () => a.disconnect()), [a]), {
                    ref: e,
                    height: t
                }
            };

            function r(e) {
                let {
                    show: t,
                    children: n,
                    top: s = 0,
                    bottom: i = 0
                } = e, {
                    ref: r,
                    height: u
                } = l(), d = (0, o.useSpring)({
                    from: {
                        height: 0,
                        paddingBottom: "0px",
                        marginTop: "0px"
                    },
                    to: {
                        height: t ? u : 0,
                        paddingBottom: t ? "".concat(i, "px") : "0px",
                        marginTop: t ? "".concat(s, "px") : "0px"
                    },
                    config: {
                        tension: 170,
                        friction: 26
                    }
                }), c = (0, o.useSpring)({
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: t ? 1 : 0
                    },
                    config: {
                        duration: 200,
                        easing: t ? e => e ** 4 : e => e * (2 - e)
                    }
                });
                return (0, a.jsx)(o.animated.div, {
                    style: {
                        overflow: "hidden",
                        height: d.height,
                        paddingBottom: d.paddingBottom,
                        marginTop: d.marginTop
                    },
                    children: (0, a.jsx)(o.animated.div, {
                        style: {
                            opacity: c.opacity
                        },
                        ref: r,
                        children: n
                    })
                })
            }