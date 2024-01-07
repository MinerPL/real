            "use strict";
            x.r(a), x.d(a, {
                LeftIslands: function() {
                    return g
                },
                RightIslands: function() {
                    return S
                },
                MainIsland: function() {
                    return v
                },
                default: function() {
                    return T
                }
            });
            var k = x("37983"),
                r = x("884691"),
                t = x("414456"),
                o = x.n(t),
                n = x("245749"),
                s = x.n(n),
                m = x("446674"),
                p = x("77078"),
                h = x("206230"),
                d = x("716241"),
                c = x("599110"),
                e = x("315102"),
                y = x("103603"),
                l = x("863636"),
                G = x("471706"),
                u = x("730756"),
                A = x("787638"),
                E = x("17885"),
                D = x("115887"),
                B = x("318002"),
                V = x("49111"),
                b = x("782340"),
                f = x("143101");

            function F(i) {
                let a = (0, m.useStateFromStores)([h.default], () => h.default.useReducedMotion),
                    x = r.useRef(null);
                return r.useEffect(() => {
                    let k;
                    return null != x.current && (k = s.loadAnimation({
                        container: x.current,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !a,
                        animationData: JSON.parse(JSON.stringify(i))
                    })), () => {
                        null == k || k.destroy()
                    }
                }, [x, a, i]), x
            }

            function g() {
                let i = (0, m.useStateFromStores)([h.default], () => h.default.useReducedMotion),
                    a = F(E);
                return (0, k.jsx)("div", {
                    className: o(f.leftArt, {
                        [f.altFloat]: !i
                    }),
                    children: (0, k.jsx)("div", {
                        ref: a,
                        className: f.grillingIsland
                    })
                })
            }

            function S() {
                let i = (0, m.useStateFromStores)([h.default], () => h.default.useReducedMotion),
                    a = F(B);
                return (0, k.jsx)("div", {
                    className: o(f.rightArt, {
                        [f.altFloat]: !i
                    }),
                    children: (0, k.jsx)("div", {
                        ref: a,
                        className: f.waffleIsland
                    })
                })
            }

            function v(i) {
                let {
                    guild: a,
                    mainIslandClassName: x,
                    balloonDogClassName: t
                } = i, n = (0, m.useStateFromStores)([h.default], () => h.default.useReducedMotion), p = r.useRef(null), d = F(A), c = e.default.getGuildIconURL({
                    id: a.id,
                    icon: a.icon,
                    size: 96
                });
                return r.useEffect(() => {
                    let i;
                    return null != p.current && null != c ? (0, y.getPaletteForAvatar)(c).then(a => {
                        let x = (0, u.default)(JSON.parse(JSON.stringify(D)), c, a[0]);
                        i = s.loadAnimation({
                            container: p.current,
                            renderer: "svg",
                            loop: !0,
                            autoplay: !n,
                            animationData: x
                        })
                    }) : null != p.current && (i = s.loadAnimation({
                        container: p.current,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !n,
                        animationData: JSON.parse(JSON.stringify(D))
                    })), () => {
                        null == i || i.destroy()
                    }
                }, [c, p, n]), (0, k.jsxs)("div", {
                    className: o(f.centerArt, {
                        [f.float]: !n
                    }),
                    children: [(0, k.jsx)("div", {
                        className: o(f.balloonDog, t),
                        ref: d
                    }), (0, k.jsx)("div", {
                        className: o(f.mainIsland, x),
                        ref: p
                    })]
                })
            }

            function T(i) {
                let {
                    guild: a,
                    onStart: x,
                    onboardingStatus: t,
                    headerId: o,
                    disableTracking: n
                } = i, s = (0, m.useStateFromStores)([l.default], () => l.default.isLoading()), h = r.useRef(!1);
                r.useEffect(() => {
                    if (!n) return c.default.track(V.AnalyticEvents.GUILD_ONBOARDING_STEP_VIEWED, {
                        ...(0, d.collectGuildAnalyticsMetadata)(a.id),
                        step: -1,
                        required: !0
                    }), () => {
                        c.default.track(V.AnalyticEvents.GUILD_ONBOARDING_STEP_COMPLETED, {
                            ...(0, d.collectGuildAnalyticsMetadata)(a.id),
                            step: -1,
                            skipped: !h.current,
                            is_final_step: !1,
                            in_onboarding: !0
                        })
                    }
                }, [a.id, h, n]);
                let e = () => {
                    h.current = !0, x()
                };
                return r.useEffect(() => {
                    setTimeout(() => {
                        e()
                    }, 3e3)
                }, []), (0, k.jsx)(k.Fragment, {
                    children: (0, k.jsx)("div", {
                        className: f.coverContainer,
                        children: (0, k.jsxs)("div", {
                            className: f.centerContent,
                            children: [(0, k.jsx)(v, {
                                guild: a
                            }), (0, k.jsxs)("div", {
                                className: f.coverContent,
                                children: [(0, k.jsx)(p.Text, {
                                    className: f.coverTitle,
                                    variant: "text-md/medium",
                                    color: "always-white",
                                    id: o,
                                    children: b.default.Messages.WELCOME_CTA_TITLE_MOBILE.format({
                                        guildName: null == a ? void 0 : a.name
                                    })
                                }), s ? (0, k.jsx)(p.Spinner, {
                                    className: f.subtitle
                                }) : t === G.GuildOnboardingStatus.NOT_APPLICABLE ? (0, k.jsx)(p.Heading, {
                                    className: f.subtitle,
                                    variant: "heading-xl/semibold",
                                    color: "always-white",
                                    children: b.default.Messages.ONBOARDING_NO_PROMPTS
                                }) : (0, k.jsx)(p.Heading, {
                                    className: f.subtitle,
                                    variant: "heading-xl/semibold",
                                    color: "always-white",
                                    children: b.default.Messages.ONBOARDING_COVER_WELCOME_SUBTITLE
                                })]
                            })]
                        })
                    })
                })
            }