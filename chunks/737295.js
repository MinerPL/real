            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("77078"),
                l = n("539938"),
                r = n("393414"),
                o = n("880013"),
                u = n("599110"),
                d = n("602043"),
                c = n("49111"),
                E = n("782340"),
                f = n("616567");
            let _ = (0, d.isSupportedPlatform)() || !1;
            var h = s.memo(function(e) {
                let {
                    currentRoute: t,
                    renderToolbar: n
                } = e, d = s.useContext(u.AnalyticsContext), h = _ || t === c.Routes.APPLICATION_LIBRARY_SETTINGS;
                return (0, a.jsxs)(l.default, {
                    className: f.libraryHeader,
                    toolbar: null == n ? void 0 : n(),
                    children: [(0, a.jsx)(l.default.Icon, {
                        icon: o.default,
                        "aria-hidden": !0
                    }), (0, a.jsx)(l.default.Title, {
                        children: E.default.Messages.LIBRARY
                    }), (0, a.jsx)(l.default.Divider, {}), (0, a.jsxs)(i.TabBar, {
                        type: "top-pill",
                        selectedItem: t,
                        onItemSelect: function(e) {
                            e !== t && (0, r.transitionTo)(e, {
                                state: {
                                    analyticsSource: {
                                        ...d.location,
                                        section: c.AnalyticsSections.TABS,
                                        object: c.AnalyticsObjects.NAVIGATION_LINK
                                    }
                                }
                            })
                        },
                        children: [(0, a.jsx)(i.TabBar.Item, {
                            id: c.Routes.APPLICATION_LIBRARY,
                            children: E.default.Messages.APPLICATION_LIBRARY_MY_GAMES
                        }), h ? (0, a.jsx)(i.TabBar.Item, {
                            id: c.Routes.APPLICATION_LIBRARY_SETTINGS,
                            children: E.default.Messages.SETTINGS
                        }) : null]
                    })]
                })
            })