            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("907002"),
                o = n("446674"),
                u = n("77078"),
                d = n("206230"),
                c = n("878720"),
                f = n("189613"),
                E = n("393004");

            function h(e) {
                let {
                    show: t,
                    alpha2: n,
                    countryCode: l
                } = e, h = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), _ = a.useRef(null), [m, g] = a.useState(0), [p, A] = a.useState(!1);
                a.useEffect(() => {
                    function e() {
                        var e, n;
                        g(t && null !== (n = null === (e = _.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== n ? n : 0)
                    }
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, [t, n, l]);
                let T = (0, i.useSpring)({
                        width: "".concat(m, "px"),
                        immediate: h,
                        onStart: () => {
                            A(!0)
                        },
                        onRest: () => {
                            A(!1)
                        }
                    }),
                    R = e => {
                        c.default.setCountryCode(e)
                    };
                return (0, s.jsx)(u.Popout, {
                    position: "top",
                    renderPopout: e => (0, s.jsx)(f.default, {
                        className: E.popout,
                        onClick: t => {
                            R(t), e.closePopout()
                        }
                    }),
                    children: e => (0, s.jsx)("div", {
                        className: r(E.outerContainer, {
                            [E.hidden]: !(t || p)
                        }),
                        children: (0, s.jsx)(i.animated.div, {
                            className: E.container,
                            style: T,
                            children: (0, s.jsxs)("div", {
                                className: E.innerContainer,
                                ref: _,
                                children: [(0, s.jsxs)(u.Clickable, {
                                    ...e,
                                    className: E.countryCode,
                                    children: [n, " ", l]
                                }), (0, s.jsx)("div", {
                                    className: E.separator
                                })]
                            })
                        })
                    })
                })
            }