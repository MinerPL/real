            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            });
            var a = s("37983"),
                n = s("884691"),
                r = s("90915"),
                l = s("446674"),
                i = s("77078"),
                u = s("901582"),
                o = s("86621"),
                d = s("984376"),
                c = s("812204"),
                _ = s("685665"),
                E = s("539938"),
                I = s("595426"),
                T = s("697218"),
                f = s("145131"),
                S = s("216422"),
                R = s("49111"),
                p = s("646718"),
                m = s("782340"),
                N = s("309285");
            let A = l.default.connectStores([T.default], () => ({
                user: T.default.getCurrentUser()
            }))((0, d.default)((0, o.default)(e => {
                let {
                    AnalyticsLocationProvider: t
                } = (0, _.default)(c.default.HOME_PAGE_PREMIUM_TAB), s = n.useRef(null), {
                    isAuthenticated: l,
                    user: o
                } = e;
                return l ? (0, a.jsxs)("div", {
                    className: N.homeWrapperNormal,
                    children: [(0, a.jsx)(u.default, {
                        section: R.AnalyticsSections.NAVIGATION,
                        children: (0, a.jsxs)(E.default, {
                            isAuthenticated: l,
                            className: N.headerBar,
                            children: [(0, a.jsx)(E.default.Icon, {
                                icon: S.default,
                                "aria-hidden": !0
                            }), (0, a.jsx)(E.default.Title, {
                                children: m.default.Messages.PREMIUM
                            })]
                        })
                    }), (0, a.jsx)(t, {
                        children: (0, a.jsx)(i.AdvancedScrollerAuto, {
                            className: N.scroller,
                            ref: s,
                            children: null == o ? (0, a.jsx)(f.default, {
                                align: f.default.Align.CENTER,
                                justify: f.default.Justify.CENTER,
                                children: (0, a.jsx)(i.Spinner, {
                                    className: N.spinner
                                })
                            }) : (0, a.jsx)("div", {
                                className: N.premiumContainer,
                                children: (0, a.jsx)(I.default, {
                                    entrypoint: p.PremiumMarketingEntrypoints.ApplicationStoreHome
                                })
                            })
                        })
                    })]
                }) : (0, a.jsx)(r.Redirect, {
                    to: R.Routes.LOGIN
                })
            })));
            var g = A