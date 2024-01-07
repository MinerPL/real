            "use strict";
            n.r(t), n.d(t, {
                UserSettingsFamilyCenterPage: function() {
                    return K
                },
                default: function() {
                    return z
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("394846"),
                o = n("432710"),
                u = n("65597"),
                d = n("151426"),
                c = n("77078"),
                E = n("939488"),
                f = n("669499"),
                _ = n("69927"),
                h = n("10641"),
                C = n("539938"),
                T = n("155084"),
                I = n("970366"),
                S = n("161778"),
                N = n("845579"),
                A = n("697218"),
                m = n("476765"),
                p = n("155207"),
                g = n("956089"),
                R = n("599110"),
                O = n("439932"),
                L = n("544556"),
                v = n("822825"),
                M = n("104887"),
                P = n("771783"),
                D = n("775032"),
                y = n("25132"),
                x = n("544553"),
                b = n("210173"),
                U = n("68818"),
                G = n("922832"),
                j = n("49111"),
                k = n("586391"),
                w = n("994428"),
                F = n("782340"),
                B = n("177960");
            let H = {
                    [G.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(b.default, {}),
                    [G.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(x.default, {}),
                    [G.FamilyCenterSubPages.SETTINGS]: () => (0, a.jsx)(U.default, {})
                },
                V = {
                    [G.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(b.default, {}),
                    [G.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(x.default, {})
                };

            function Y(e) {
                let {
                    section: t,
                    handleItemSelect: n
                } = e, s = (0, y.usePendingRequestCount)(), i = (0, D.default)();
                return (0, a.jsxs)(c.TabBar, {
                    className: B.settingsTabBar,
                    "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    children: [(0, a.jsx)(c.TabBar.Item, {
                        className: B.settingsTabBarItem,
                        id: G.FamilyCenterSubPages.ACTIVITY,
                        children: F.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
                    }), (0, a.jsxs)(c.TabBar.Item, {
                        className: B.settingsTabBarItem,
                        id: G.FamilyCenterSubPages.REQUESTS,
                        "aria-label": F.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
                        children: [F.default.Messages.FAMILY_CENTER_REQUESTS_TAB, s > 0 ? (0, a.jsx)(g.NumberBadge, {
                            className: B.badge,
                            count: s
                        }) : null]
                    }), i ? (0, a.jsx)(c.TabBar.Item, {
                        className: B.settingsTabBarItem,
                        id: G.FamilyCenterSubPages.SETTINGS,
                        children: F.default.Messages.SETTINGS
                    }) : null]
                })
            }

            function W(e) {
                let {
                    theme: t,
                    section: n,
                    handleItemSelect: s
                } = e, i = (0, m.useUID)(), o = (0, y.usePendingRequestCount)();
                return (0, a.jsxs)(C.default, {
                    className: l((0, O.getThemeClass)(t), B.sidebarTabBar),
                    scrollable: r.isMobile,
                    role: "navigation",
                    "aria-labelledby": i,
                    toolbar: !0,
                    children: [(0, a.jsx)(C.default.Icon, {
                        icon: p.default,
                        "aria-hidden": !0
                    }), (0, a.jsx)(C.default.Title, {
                        id: i,
                        children: F.default.Messages.FAMILY_CENTER_TITLE
                    }), (0, a.jsx)(C.default.Divider, {}), (0, a.jsxs)(c.TabBar, {
                        "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
                        selectedItem: n,
                        type: "top-pill",
                        onItemSelect: s,
                        className: B.tabBar,
                        children: [(0, a.jsx)(c.TabBar.Item, {
                            id: G.FamilyCenterSubPages.ACTIVITY,
                            className: B.item,
                            children: F.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
                        }), (0, a.jsxs)(c.TabBar.Item, {
                            id: G.FamilyCenterSubPages.REQUESTS,
                            className: B.item,
                            "aria-label": F.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
                            children: [F.default.Messages.FAMILY_CENTER_REQUESTS_TAB, o > 0 ? (0, a.jsx)(g.NumberBadge, {
                                className: B.badge,
                                count: o
                            }) : null]
                        })]
                    })]
                })
            }

            function K() {
                let e = (0, D.default)(),
                    t = (0, y.useAcceptedRequestsCount)(),
                    n = (0, h.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE),
                    i = (0, u.default)([v.default], () => v.default.getIsInitialized()),
                    r = (0, P.useSelectedTeenId)(),
                    {
                        selectedTab: E,
                        handleTabChange: C
                    } = (0, M.default)(),
                    S = (0, m.useUID)(),
                    N = A.default.getCurrentUser(),
                    p = null != e,
                    g = i && null != N && !p;
                return (s.useEffect(() => {
                    (0, I.trackAppUIViewed)("family-center"), L.default.initialPageLoad(), !n && (0, h.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
                        dismissAction: w.ContentDismissActionType.AUTO,
                        forceTrack: !0
                    })
                }, []), s.useEffect(() => {
                    i && p && (R.default.track(j.AnalyticEvents.FAMILY_CENTER_VIEWED, {
                        is_considered_adult: e,
                        num_of_accepted_links: t,
                        selected_teen_id: r,
                        initial_page: G.FamilyCenterSubPageAnalyticsIds[E],
                        source: G.FamilyCenterPageLocationAnalyticsIds[G.FamilyCenterPageLocation.SIDENAV]
                    }), T.default.increment({
                        name: o.MetricEvents.FAMILY_CENTER_VIEW
                    }))
                }, [i, p]), g) ? ((0, f.openAgeGateModal)(k.AgeGateSource.FAMILY_CENTER), null) : (0, a.jsxs)("main", {
                    className: l(B.container),
                    "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
                    children: [(0, a.jsx)(_.AppPageTitle, {
                        location: F.default.Messages.FAMILY_CENTER_TITLE
                    }), (0, a.jsx)(Y, {
                        section: E,
                        handleItemSelect: e => {
                            C(e)
                        }
                    }), (0, a.jsx)(c.TabBar.Panel, {
                        id: E,
                        "aria-labelledby": S,
                        className: B.contentPanel,
                        children: (0, a.jsx)("div", {
                            children: H[E]()
                        })
                    })]
                })
            }

            function z() {
                let e = (0, D.default)(),
                    t = (0, y.useAcceptedRequestsCount)(),
                    n = (0, h.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE),
                    i = (0, u.default)([v.default], () => v.default.getIsInitialized()),
                    r = (0, P.useSelectedTeenId)(),
                    C = (0, u.default)([S.default], () => S.default.theme),
                    {
                        selectedTab: p,
                        handleTabChange: g
                    } = (0, M.default)(),
                    O = (0, m.useUID)(),
                    x = A.default.getCurrentUser(),
                    b = null != e,
                    U = i && null != x && !b;
                if (s.useEffect(() => {
                        E.setHomeLink(j.Routes.FAMILY_CENTER), (0, I.trackAppUIViewed)("family-center"), !v.default.isLoading() && v.default.canRefetch() && L.default.initialPageLoad(), !n && (0, h.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
                            dismissAction: w.ContentDismissActionType.AUTO,
                            forceTrack: !0
                        })
                    }, []), s.useEffect(() => {
                        i && b && (R.default.track(j.AnalyticEvents.FAMILY_CENTER_VIEWED, {
                            is_considered_adult: e,
                            num_of_accepted_links: t,
                            selected_teen_id: r,
                            initial_page: G.FamilyCenterSubPageAnalyticsIds[p],
                            source: G.FamilyCenterPageLocationAnalyticsIds[G.FamilyCenterPageLocation.SIDENAV]
                        }), T.default.increment({
                            name: o.MetricEvents.FAMILY_CENTER_VIEW
                        }))
                    }, [i, b]), s.useEffect(() => {
                        let t = N.FamilyCenterEnabled.getSetting();
                        i && e && void 0 === t && N.FamilyCenterEnabled.updateSetting(!0)
                    }, [i, e]), U) return (0, f.openAgeGateModal)(k.AgeGateSource.FAMILY_CENTER), null;
                let H = p !== G.FamilyCenterSubPages.SETTINGS ? p : G.FamilyCenterSubPages.ACTIVITY,
                    Y = V[H];
                return (0, a.jsxs)("main", {
                    className: l(B.container, B.containerSidenav),
                    "aria-label": F.default.Messages.FAMILY_CENTER_TITLE,
                    children: [(0, a.jsx)(_.AppPageTitle, {
                        location: F.default.Messages.FAMILY_CENTER_TITLE
                    }), (0, a.jsx)(W, {
                        theme: C,
                        section: H,
                        handleItemSelect: e => {
                            g(e)
                        }
                    }), (0, a.jsx)(c.TabBar.Panel, {
                        id: H,
                        "aria-labelledby": O,
                        className: B.contentPanel,
                        children: (0, a.jsx)("div", {
                            className: B.sideNavContent,
                            children: Y()
                        })
                    })]
                })
            }