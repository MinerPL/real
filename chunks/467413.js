            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                o = s.n(r),
                l = s("907002"),
                i = s("446674"),
                u = s("77078"),
                d = s("206230"),
                c = s("878720"),
                h = s("189613"),
                f = s("393004");

            function m(e) {
                let {
                    show: t,
                    alpha2: s,
                    countryCode: r
                } = e, m = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion), p = n.useRef(null), [C, S] = n.useState(0), [g, T] = n.useState(!1);
                n.useEffect(() => {
                    function e() {
                        var e, s;
                        S(t && null !== (s = null === (e = p.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== s ? s : 0)
                    }
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, [t, s, r]);
                let A = (0, l.useSpring)({
                        width: "".concat(C, "px"),
                        immediate: m,
                        onStart: () => {
                            T(!0)
                        },
                        onRest: () => {
                            T(!1)
                        }
                    }),
                    N = e => {
                        c.default.setCountryCode(e)
                    };
                return (0, a.jsx)(u.Popout, {
                    position: "top",
                    renderPopout: e => (0, a.jsx)(h.default, {
                        className: f.popout,
                        onClick: t => {
                            N(t), e.closePopout()
                        }
                    }),
                    children: e => (0, a.jsx)("div", {
                        className: o(f.outerContainer, {
                            [f.hidden]: !(t || g)
                        }),
                        children: (0, a.jsx)(l.animated.div, {
                            className: f.container,
                            style: A,
                            children: (0, a.jsxs)("div", {
                                className: f.innerContainer,
                                ref: p,
                                children: [(0, a.jsxs)(u.Clickable, {
                                    ...e,
                                    className: f.countryCode,
                                    children: [s, " ", r]
                                }), (0, a.jsx)("div", {
                                    className: f.separator
                                })]
                            })
                        })
                    })
                })
            }