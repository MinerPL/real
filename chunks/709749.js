            "use strict";
            n.r(t), n.d(t, {
                AnimatedDots: function() {
                    return E
                },
                Dots: function() {
                    return h
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("907002"),
                l = n("262998");

            function u() {
                return document.hasFocus()
            }
            let c = {
                    config: {
                        friction: 50,
                        tension: 900,
                        mass: 1
                    },
                    unique: !0,
                    initial: {
                        dotPosition: 1
                    },
                    from: {
                        dotPosition: 0
                    },
                    enter: {
                        dotPosition: 1
                    },
                    leave: {
                        dotPosition: 0
                    }
                },
                d = {
                    config: {
                        duration: 2400
                    },
                    from: {
                        dotCycle: 2.8
                    },
                    reset: !0
                };

            function f(e) {
                let t = e % 2;
                return t > 1 ? 1 - (t - 1) : t
            }
            let E = r.memo(function(e) {
                    let {
                        dotRadius: t,
                        dotPosition: n,
                        fill: s = "currentColor",
                        spacing: a = 2.5
                    } = e, l = r.useRef(u()), c = r.useRef(!0);
                    r.useEffect(() => () => void(c.current = !1), []);
                    let [E] = (0, o.useSpring)(() => ({
                        ...d,
                        to: async e => {
                            let t = 2.8;
                            for (; c.current;) {
                                ;
                                l.current = u(), l.current ? (t += 4, await e({
                                    dotCycle: t,
                                    immediate: !1
                                })) : 2.8 !== t ? (t = 2.8, await e({
                                    dotCycle: t,
                                    immediate: !0
                                })) : await new Promise(e => setTimeout(e, 1e3))
                            }
                        }
                    })), h = (6 * t + t / 4 * 2) / 2;
                    return (0, i.jsx)(i.Fragment, {
                        children: [0, 1, 2].map(e => {
                            let r = .25 * e,
                                u = t + e * (t * a);
                            return (0, i.jsx)(o.animated.circle, {
                                cx: n ? n.to([0, 1], [h, u]) : u,
                                cy: t,
                                r: E.dotCycle.to(e => f(e - r)).to([0, .4, .8, 1], [.8 * t, .8 * t, t, t]).to(e => l.current ? e : t),
                                fill: s,
                                style: {
                                    opacity: E.dotCycle.to(e => f(e - r)).to([0, .4, .8, 1], [.3, .3, 1, 1]).to(e => l.current ? e : 1)
                                }
                            }, e)
                        })
                    })
                }),
                h = r.memo(r.forwardRef(function(e, t) {
                    let {
                        dotRadius: n,
                        x: r,
                        y: s,
                        hide: d = !1,
                        themed: f = !1,
                        className: h
                    } = e, p = (0, o.useTransition)(d, {
                        ...c,
                        key: e => e ? "true" : "false",
                        immediate: !u()
                    });
                    return p((e, u, c) => {
                        let {
                            dotPosition: d
                        } = e, {
                            key: p
                        } = c;
                        return u ? null : (0, i.jsx)("svg", {
                            ref: t,
                            x: r,
                            y: s,
                            width: 6 * n + n / 2 * 2,
                            height: 2 * n,
                            className: a(h, l.dots, f ? l.themed : null),
                            children: (0, i.jsx)(o.animated.g, {
                                style: {
                                    opacity: d.to(e => Math.min(1, Math.max(e, 0)))
                                },
                                children: (0, i.jsx)(E, {
                                    dotRadius: n,
                                    dotPosition: d
                                })
                            })
                        }, p)
                    })
                }))