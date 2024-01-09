            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return m
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("90915"),
                r = s("446674"),
                l = s("77078"),
                i = s("901582"),
                u = s("86621"),
                o = s("984376"),
                d = s("812204"),
                c = s("685665"),
                _ = s("539938"),
                E = s("595426"),
                I = s("697218"),
                f = s("145131"),
                T = s("216422"),
                S = s("49111"),
                R = s("646718"),
                p = s("782340"),
                A = s("309285");
            let N = r.default.connectStores([I.default], () => ({
                user: I.default.getCurrentUser()
            }))((0, o.default)((0, u.default)(e => {
                let {
                    AnalyticsLocationProvider: t
                } = (0, c.default)(d.default.HOME_PAGE_PREMIUM_TAB), {
                    isAuthenticated: s,
                    user: r
                } = e;
                return s ? (0, a.jsxs)("div", {
                    className: A.homeWrapperNormal,
                    children: [(0, a.jsx)(i.default, {
                        section: S.AnalyticsSections.NAVIGATION,
                        children: (0, a.jsxs)(_.default, {
                            isAuthenticated: s,
                            className: A.headerBar,
                            children: [(0, a.jsx)(_.default.Icon, {
                                icon: T.default,
                                "aria-hidden": !0
                            }), (0, a.jsx)(_.default.Title, {
                                children: p.default.Messages.PREMIUM
                            })]
                        })
                    }), (0, a.jsx)(t, {
                        children: null == r ? (0, a.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            children: (0, a.jsx)(l.Spinner, {
                                className: A.spinner
                            })
                        }) : (0, a.jsx)(E.default, {
                            entrypoint: R.PremiumMarketingEntrypoints.ApplicationStoreHome
                        })
                    })]
                }) : (0, a.jsx)(n.Redirect, {
                    to: S.Routes.LOGIN
                })
            })));
            var m = N