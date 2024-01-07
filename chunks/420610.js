            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return x
                }
            });
            var l = a("37983"),
                n = a("884691"),
                u = a("446674"),
                s = a("54239"),
                o = a("79112"),
                i = a("901582"),
                r = a("800751"),
                d = a("84339"),
                f = a("812204"),
                c = a("716241"),
                S = a("685665"),
                p = a("260518"),
                E = a("586139"),
                _ = a("167209"),
                g = a("26092"),
                m = a("161778"),
                b = a("373798"),
                h = a("49111"),
                k = a("782340");
            let T = n.forwardRef(function() {
                E.default.trackExposure({
                    location: "cd25e4_1"
                }), p.default.useExperiment({
                    location: "user_setting_auto"
                }, {
                    autoTrackExposure: !1
                }), p.default.trackExposure({
                    location: "user_setting_manual"
                });
                let e = (0, u.useStateFromStores)([m.default], () => m.default.theme),
                    t = (0, u.useStateFromStores)([m.default], () => m.default.darkSidebar ? h.ThemeTypes.DARK : void 0),
                    {
                        section: a,
                        subsection: T,
                        analyticsLocation: x,
                        analyticsLocations: y
                    } = (0, u.useStateFromStoresObject)([g.default], () => {
                        let e = g.default.getSection(),
                            t = g.default.getSubsection(),
                            {
                                analyticsLocation: a,
                                analyticsLocations: l
                            } = g.default.getProps();
                        return {
                            section: e,
                            subsection: t,
                            analyticsLocation: a,
                            analyticsLocations: l
                        }
                    }),
                    A = (0, d.default)(a),
                    P = (0, d.default)(T),
                    {
                        AnalyticsLocationProvider: I
                    } = (0, S.default)(f.default.USER_SETTINGS);
                n.useEffect(() => {
                    let e = null != a && (a !== A || T !== P);
                    e && ! function(e) {
                        let {
                            destinationPane: t,
                            originPane: a = null,
                            source: l = null,
                            subsection: n = null,
                            locationStack: u = null
                        } = e;
                        c.default.trackWithMetadata(h.AnalyticEvents.SETTINGS_PANE_VIEWED, {
                            settings_type: "user",
                            origin_pane: a,
                            destination_pane: t,
                            location_stack: u,
                            source: l,
                            subsection: n
                        })
                    }({
                        destinationPane: a,
                        originPane: null != A ? A : null,
                        source: x,
                        subsection: T,
                        locationStack: y
                    })
                }, [a, A, T, P, x, y]);
                let j = (0, b.default)(),
                    v = (0, _.useIsEligibleForPomelo)(),
                    F = n.useCallback(e => {
                        o.default.setSection(e)
                    }, []);
                return (0, l.jsx)(I, {
                    children: (0, l.jsx)(i.default, {
                        root: !0,
                        page: h.AnalyticsPages.USER_SETTINGS,
                        children: (0, l.jsx)(r.default, {
                            theme: e,
                            title: k.default.Messages.USER_SETTINGS,
                            sidebarTheme: t,
                            section: a,
                            onSetSection: F,
                            onClose: s.popLayer,
                            sections: j,
                            isEligibleForPomelo: v
                        })
                    })
                })
            });
            var x = n.forwardRef(function() {
                let e = (0, u.useStateFromStores)([g.default], () => g.default.getProps().analyticsLocations),
                    {
                        AnalyticsLocationProvider: t
                    } = (0, S.default)(e);
                return (0, l.jsx)(t, {
                    children: (0, l.jsx)(T, {})
                })
            })