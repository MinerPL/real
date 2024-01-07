            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return G
                }
            }), s("222007");
            var i = s("37983"),
                r = s("884691"),
                a = s("775560"),
                l = s("290381"),
                o = s("77078"),
                n = s("304580"),
                d = s("685665"),
                u = s("599110"),
                c = s("677591"),
                E = s("890800"),
                _ = s("904519"),
                T = s("738463"),
                I = s("141075"),
                N = s("706081"),
                f = s("695561"),
                R = s("56186"),
                g = s("390604"),
                m = s("49111"),
                M = s("782340"),
                S = s("635303"),
                G = function(e) {
                    let {
                        analyticsLocation: t,
                        guild: s,
                        onClose: G
                    } = e, [h, p] = r.useState(!0), B = r.useRef(!1), O = (0, a.useLazyValue)(() => Date.now()), {
                        analyticsLocations: x
                    } = (0, d.default)(), A = r.useCallback(() => {
                        G(), u.default.track(m.AnalyticEvents.MODAL_DISMISSED, {
                            type: m.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                            location_stack: x,
                            location_section: t.section,
                            location_object: t.object,
                            guild_id: s.id,
                            duration_open_ms: Date.now() - O
                        })
                    }, [G, t, x, O, s.id]), v = r.useCallback(e => {
                        e && !B.current && (u.default.track(m.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                            type: m.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                            location_stack: x,
                            location_section: t.section,
                            location_object: t.object,
                            guild_id: s.id
                        }), B.current = !0)
                    }, [t, x, s.id]);
                    return r.useEffect(() => {
                        u.default.track(m.AnalyticEvents.OPEN_MODAL, {
                            type: m.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                            location_stack: x,
                            location_section: t.section,
                            location_object: t.object,
                            guild_id: s.id
                        })
                    }, [s.id, t, x]), r.useEffect(() => {
                        function e(e) {
                            "Escape" === e.key && A()
                        }
                        return window.addEventListener("keydown", e), () => {
                            window.removeEventListener("keydown", e)
                        }
                    }, [A]), (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: S.closeIconWrapper,
                            children: (0, i.jsx)(n.default, {
                                className: S.closeIcon,
                                closeAction: A,
                                keybind: "ESC",
                                variant: n.default.Variants.SOLID
                            })
                        }), (0, i.jsxs)(o.AdvancedScrollerAuto, {
                            className: S.scroller,
                            children: [(0, i.jsxs)("div", {
                                className: S.header,
                                children: [(0, i.jsxs)("div", {
                                    className: S.headerContentWrapper,
                                    children: [(0, i.jsx)(o.Heading, {
                                        className: S.heading,
                                        color: "always-white",
                                        variant: "display-lg",
                                        children: M.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_HEADING
                                    }), (0, i.jsx)(E.default, {
                                        guild: s,
                                        closeLayer: A,
                                        onCtaVisibilityChange: p
                                    }), (0, i.jsx)(I.default, {
                                        guild: s
                                    }), (0, i.jsx)(N.default, {
                                        guild: s
                                    })]
                                }), (0, i.jsx)(g.HeaderWave, {})]
                            }), (0, i.jsx)("div", {
                                className: S.middleBodyContentWrapper,
                                children: (0, i.jsx)(R.default, {})
                            }), (0, i.jsxs)("div", {
                                className: S.lowerBody,
                                children: [(0, i.jsxs)("div", {
                                    className: S.lowerBodyContentWrapper,
                                    children: [(0, i.jsx)(f.default, {
                                        className: S.tierComparisonTable,
                                        guild: s
                                    }), (0, i.jsx)(c.default, {}), (0, i.jsx)(_.default, {})]
                                }), (0, i.jsx)(g.BodyWave, {}), (0, i.jsx)("div", {
                                    className: S.lowerBodyBackgroundImage
                                })]
                            }), (0, i.jsx)(l.VisibilitySensor, {
                                onChange: v,
                                children: (0, i.jsx)("div", {
                                    className: S.persistentCtaSpacer
                                })
                            })]
                        }), (0, i.jsx)(T.default, {
                            guild: s,
                            isVisible: !h,
                            closeLayer: A
                        })]
                    })
                }