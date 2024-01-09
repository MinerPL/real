            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
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
                T = s("145131"),
                f = s("216422"),
                S = s("49111"),
                R = s("646718"),
                p = s("782340"),
                m = s("309285");
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
                    className: m.homeWrapperNormal,
                    children: [(0, a.jsx)(i.default, {
                        section: S.AnalyticsSections.NAVIGATION,
                        children: (0, a.jsxs)(_.default, {
                            isAuthenticated: s,
                            className: m.headerBar,
                            children: [(0, a.jsx)(_.default.Icon, {
                                icon: f.default,
                                "aria-hidden": !0
                            }), (0, a.jsx)(_.default.Title, {
                                children: p.default.Messages.PREMIUM
                            })]
                        })
                    }), (0, a.jsx)(t, {
                        children: null == r ? (0, a.jsx)(T.default, {
                            align: T.default.Align.CENTER,
                            justify: T.default.Justify.CENTER,
                            children: (0, a.jsx)(l.Spinner, {
                                className: m.spinner
                            })
                        }) : (0, a.jsx)(E.default, {
                            entrypoint: R.PremiumMarketingEntrypoints.ApplicationStoreHome
                        })
                    })]
                }) : (0, a.jsx)(n.Redirect, {
                    to: S.Routes.LOGIN
                })
            })));
            var A = N