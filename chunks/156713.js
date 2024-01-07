            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            }), s("222007");
            var n, l, a = s("37983"),
                i = s("884691"),
                r = s("701800"),
                o = s("146230"),
                c = s("292273"),
                u = s("843455"),
                d = s("792788");
            let p = u.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                h = (e, t) => [{
                    route: u.WebRoutes.DOWNLOAD,
                    linkClicked: "download",
                    title: t.DOWNLOAD
                }, {
                    route: u.WebRoutes.NITRO,
                    linkClicked: "nitro",
                    title: t.NITRO,
                    external: !0
                }, {
                    route: u.WebRoutes.JOBS,
                    linkClicked: "jobs",
                    title: t.JOBS,
                    external: !0
                }, {
                    title: t.DEVELOPERS,
                    links: [{
                        route: u.WebRoutes.RICH_PRESENCE,
                        linkClicked: "rich_presence",
                        title: t.RICH_PRESENCE
                    }, {
                        route: u.WebRoutes.VERIFICATION,
                        linkClicked: "verification",
                        title: t.VERIFICATION,
                        external: !0
                    }, {
                        route: u.Links.DEV_PORTAL,
                        linkClicked: "developers",
                        title: t.DEVELOPER_PORTAL,
                        external: !0
                    }, {
                        route: u.Links.DEV_PORTAL_DOCUMENTATION,
                        linkClicked: "documentation",
                        title: t.DOCUMENTATION,
                        external: !0
                    }]
                }, {
                    title: t.COMMUNITY,
                    links: [{
                        route: u.WebRoutes.OPEN_SOURCE,
                        linkClicked: "open_source",
                        title: t.OPEN_SOURCE
                    }, {
                        route: u.WebRoutes.PARTNERS,
                        linkClicked: "partners",
                        title: t.PARTNERS,
                        external: !0
                    }, {
                        route: u.WebRoutes.HYPESQUAD,
                        linkClicked: "hypesquad",
                        title: t.HYPESQUAD,
                        external: !0
                    }, {
                        route: u.WebRoutes.GUIDELINES,
                        linkClicked: "guidelines",
                        title: t.GUIDELINES,
                        external: !0
                    }]
                }, {
                    title: t.SUPPORT,
                    links: [{
                        route: "//support.discordapp.com/hc/".concat(e),
                        linkClicked: "helpandsupport",
                        title: t.HELP_AND_SUPPORT,
                        external: !0
                    }, {
                        route: u.Links.STATUS,
                        linkClicked: "status",
                        title: t.STATUS,
                        external: !0
                    }, {
                        route: u.WebRoutes.SAFETY_LANDING,
                        linkClicked: "safetycenter",
                        title: t.SAFETY_CENTER,
                        external: !0
                    }]
                }];
            (n = class extends i.PureComponent {
                render() {
                    let e = r.default.isActiveCreator(this.context.router),
                        {
                            isMobile: t,
                            isVisible: s,
                            styles: n,
                            NavigationMessages: l,
                            TrackClick: i,
                            avoidRouter: N
                        } = this.props,
                        {
                            sectionShown: m
                        } = this.state,
                        g = null != d.default ? d.default.getLocale().toLowerCase() : "";
                    return h(g, l).map(l => {
                        if (null != l.links) return (0, a.jsx)(c.default, {
                            title: l.title,
                            links: l.links,
                            isOpen: m === l.title,
                            isMobile: t,
                            avoidRouter: N,
                            TrackClick: i,
                            onClose: this.closeSubNav,
                            onOpen: this.openSubNav
                        }, l.title);
                        if (l.external && null != l.route) return (0, a.jsx)("li", {
                            className: n.listItemInactive,
                            role: "none",
                            children: (0, a.jsx)(i, {
                                className: n.mainNavLink,
                                eventName: p,
                                data: l.linkClicked ? {
                                    linkClicked: l.linkClicked
                                } : {},
                                href: l.route,
                                rel: "me",
                                children: l.title
                            })
                        }, "external_link_".concat(l.route));
                        if (null != l.route) return (0, a.jsx)("li", {
                            className: e(l.route) ? n.listItemActive : n.listItemInactive,
                            role: "none",
                            children: (0, a.jsx)(o.default, {
                                avoidRouter: N,
                                to: l.route,
                                from: u.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                                tabIndex: s ? 0 : -1,
                                role: "menuitem",
                                children: (0, a.jsx)(i, {
                                    tag: "span",
                                    className: n.mainNavLink,
                                    eventName: p,
                                    data: {
                                        linkClicked: l.linkClicked
                                    },
                                    children: l.title
                                })
                            })
                        }, "link_".concat(l.route));
                        return []
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        sectionShown: null
                    }, this.closeSubNav = () => {
                        let {
                            sectionShown: e
                        } = this.state;
                        null !== e && this.setState({
                            sectionShown: null
                        })
                    }, this.openSubNav = e => {
                        let {
                            sectionShown: t
                        } = this.state;
                        t !== e && this.setState({
                            sectionShown: e
                        })
                    }
                }
            }).defaultProps = {
                isMobile: !1,
                isVisible: !0
            }, l = n