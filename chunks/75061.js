            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                },
                TestimonialHero: function() {
                    return I
                }
            }), s("222007");
            var a = s("37983"),
                i = s("884691"),
                n = s("414456"),
                l = s.n(n),
                r = s("907002"),
                o = s("446674"),
                d = s("77078"),
                c = s("206230"),
                u = s("246053"),
                m = s("782340"),
                f = s("545446");

            function h(e) {
                let {
                    message: t,
                    adminTitle: s,
                    profilePic: i,
                    emphasisColor: n = "interactive-normal",
                    arrowPosition: r,
                    className: o
                } = e;
                return (0, a.jsxs)("div", {
                    className: l(f.testimonialContainer, o),
                    children: [(0, a.jsx)(N, {
                        testimonial: {
                            message: t,
                            adminTitle: s,
                            profilePic: i,
                            emphasisColor: n
                        }
                    }), (0, a.jsx)(d.Text, {
                        variant: "text-lg/bold",
                        className: f.quotes,
                        children: "“"
                    }), (0, a.jsx)("div", {
                        className: l(f.arrow, {
                            [f.arrowRight]: "right" === r,
                            [f.arrowLeft]: "left" === r
                        }),
                        children: (0, a.jsx)(x, {})
                    })]
                })
            }

            function N(e) {
                let {
                    testimonial: t,
                    className: s
                } = e, {
                    message: i,
                    profilePic: n,
                    adminTitle: l,
                    emphasisColor: r = "interactive-normal"
                } = t;
                return (0, a.jsxs)("div", {
                    className: s,
                    children: [(0, a.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children: i.format({
                            testimonialHook: (e, t) => (0, a.jsx)(d.Text, {
                                tag: "span",
                                variant: "text-sm/bold",
                                color: r,
                                children: e
                            }, t)
                        })
                    }), (0, a.jsxs)("div", {
                        className: f.userContainer,
                        children: [(0, a.jsx)(d.Avatar, {
                            src: n,
                            size: d.AvatarSizes.SIZE_16,
                            "aria-hidden": !0
                        }), (0, a.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            children: l
                        })]
                    })]
                })
            }

            function x() {
                return (0, a.jsx)("svg", {
                    width: "12",
                    height: "20",
                    viewBox: "0 0 12 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M11.5 0.662598H0L11.5 19.1626V0.662598Z",
                        fill: "#2B2D31"
                    })
                })
            }

            function I(e) {
                let {
                    testimonials: t
                } = e, [
                    [s, n], l
                ] = i.useState([0, "right"]), r = i.useCallback(() => {
                    l(e => {
                        let [s] = e;
                        return 0 === s ? [t.length - 1, "left"] : [s - 1, "left"]
                    })
                }, [l, t.length]), o = i.useCallback(() => {
                    l(e => {
                        let [s] = e;
                        return [(s + 1) % t.length, "right"]
                    })
                }, [l, t.length]), c = t[s], h = i.useCallback((e, t, s, i) => (0, a.jsx)(D, {
                    item: t,
                    state: s,
                    cleanup: i,
                    direction: n
                }, e), [n]);
                return (0, a.jsxs)("div", {
                    className: f.testimonialHeroContainer,
                    children: [(0, a.jsx)("div", {
                        className: f.animatedContainer,
                        children: (0, a.jsx)(d.TransitionGroup, {
                            items: [c],
                            renderItem: h,
                            getItemKey: e => e.adminTitle
                        })
                    }), (0, a.jsx)(d.Text, {
                        variant: "text-lg/bold",
                        className: f.heroQuotes,
                        children: "“"
                    }), (0, a.jsxs)("div", {
                        className: f.testimonialsControls,
                        children: [(0, a.jsxs)(d.Button, {
                            className: f.testimonialControl,
                            innerClassName: f.testimonialControlInner,
                            onClick: r,
                            size: d.Button.Sizes.MIN,
                            color: d.Button.Colors.PRIMARY,
                            children: [(0, a.jsx)(u.default, {
                                className: f.testimonialControlIcon,
                                direction: u.default.Directions.LEFT
                            }), (0, a.jsx)(d.HiddenVisually, {
                                children: m.default.Messages.BACK
                            })]
                        }), (0, a.jsxs)(d.Button, {
                            className: f.testimonialControl,
                            innerClassName: f.testimonialControlInner,
                            onClick: o,
                            size: d.Button.Sizes.MIN,
                            color: d.Button.Colors.PRIMARY,
                            children: [(0, a.jsx)(u.default, {
                                className: f.testimonialControlIcon,
                                direction: u.default.Directions.RIGHT
                            }), (0, a.jsx)(d.HiddenVisually, {
                                children: m.default.Messages.NEXT
                            })]
                        })]
                    })]
                })
            }

            function D(e) {
                let {
                    item: t,
                    state: s,
                    cleanup: i,
                    direction: n
                } = e, l = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion), [u] = (0, r.useSpring)(() => {
                    switch (s) {
                        case d.TransitionStates.ENTERED:
                            return {
                                from: {
                                    transform: "right" === n ? "translateX(150%)" : "translate(-150%)"
                                }, to: {
                                    transform: "translateX(0%)"
                                }, immediate: l
                            };
                        case d.TransitionStates.YEETED:
                            return {
                                from: {
                                    transform: "translateX(0%)"
                                }, to: {
                                    transform: "right" === n ? "translateX(-150%)" : "translate(150%)"
                                }, immediate: l, onRest: i
                            };
                        default:
                            return {}
                    }
                }, [s]);
                return (0, a.jsx)(r.animated.div, {
                    style: u,
                    children: (0, a.jsx)(N, {
                        className: f.testimonial,
                        testimonial: t
                    })
                })
            }