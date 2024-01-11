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
                f = s("697218"),
                T = s("145131"),
                S = s("216422"),
                R = s("49111"),
                p = s("646718"),
                A = s("782340"),
                m = s("309285");
            let N = l.default.connectStores([f.default], () => ({
                user: f.default.getCurrentUser()
            }))((0, d.default)((0, o.default)(e => {
                let {
                    AnalyticsLocationProvider: t
                } = (0, _.default)(c.default.HOME_PAGE_PREMIUM_TAB), s = n.useRef(null), {
                    isAuthenticated: l,
                    user: o
                } = e;
                return l ? (0, a.jsxs)("div", {
                    className: m.homeWrapperNormal,
                    children: [(0, a.jsx)(u.default, {
                        section: R.AnalyticsSections.NAVIGATION,
                        children: (0, a.jsxs)(E.default, {
                            isAuthenticated: l,
                            className: m.headerBar,
                            children: [(0, a.jsx)(E.default.Icon, {
                                icon: S.default,
                                "aria-hidden": !0
                            }), (0, a.jsx)(E.default.Title, {
                                children: A.default.Messages.PREMIUM
                            })]
                        })
                    }), (0, a.jsx)(t, {
                        children: (0, a.jsx)(i.AdvancedScrollerAuto, {
                            className: m.scroller,
                            ref: s,
                            children: null == o ? (0, a.jsx)(T.default, {
                                align: T.default.Align.CENTER,
                                justify: T.default.Justify.CENTER,
                                children: (0, a.jsx)(i.Spinner, {
                                    className: m.spinner
                                })
                            }) : (0, a.jsx)("div", {
                                className: m.premiumContainer,
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
            var g = N