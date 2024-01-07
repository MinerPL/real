            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return A
                }
            }), s("222007"), s("424973");
            var n = s("37983"),
                l = s("884691"),
                a = s("580420"),
                i = s.n(a),
                r = s("844234"),
                o = s("447669"),
                c = s("146230"),
                u = s("472263"),
                d = s("904934"),
                p = s("156713"),
                h = s("843455"),
                N = s("53452"),
                m = s("352220"),
                g = s("569683");
            let k = h.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                f = () => [{
                    route: (0, r.getLocalizedLink)(h.LocalizedLinks.TWITTER),
                    linkClicked: "twitter",
                    alt: "Discord's Twitter",
                    img: m.Images.ASSET_SOCIAL_TWITTER
                }, {
                    route: h.SOCIAL_LINKS.FACEBOOK_URL,
                    linkClicked: "facebook",
                    alt: "Discord's Facebook",
                    img: m.Images.ASSET_SOCIAL_FACEBOOK
                }, {
                    route: h.SOCIAL_LINKS.INSTAGRAM_URL,
                    linkClicked: "instagram",
                    alt: "Discord's Instagram",
                    img: m.Images.ASSET_SOCIAL_INSTAGRAM
                }];
            class C extends l.PureComponent {
                componentDidMount() {
                    this.setState({
                        isAppCompatible: N.IS_APP_COMPATIBLE_BROWSER
                    })
                }
                render() {
                    let {
                        className: e,
                        mainContentId: t,
                        skipToContentLabel: s,
                        NavigationMessages: l,
                        onChangeLocale: a,
                        TrackClick: r,
                        avoidRouter: o
                    } = this.props;
                    return (0, n.jsxs)("header", {
                        className: i(g.header, e),
                        children: [(0, n.jsxs)("nav", {
                            className: g.headerInner,
                            children: [(0, n.jsxs)("div", {
                                className: g.headerLogo,
                                children: [(0, n.jsx)(r, {
                                    tag: "div",
                                    eventName: k,
                                    data: {
                                        linkClicked: "logo"
                                    },
                                    children: (0, n.jsx)(c.default, {
                                        avoidRouter: o,
                                        to: h.WebRoutes.INDEX,
                                        from: h.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                                        children: (0, n.jsx)(u.default, {})
                                    })
                                }), null != t ? (0, n.jsx)("a", {
                                    className: g.skipToContent,
                                    href: "#".concat(t),
                                    children: s
                                }) : null]
                            }), (0, n.jsx)("ul", {
                                className: g.headerNav,
                                children: (0, n.jsx)(p.default, {
                                    avoidRouter: o,
                                    TrackClick: r,
                                    styles: g,
                                    NavigationMessages: l
                                })
                            }), (0, n.jsxs)("ul", {
                                className: g.headerNavRight,
                                children: [this.renderSocialMediaNav(), (0, n.jsx)(d.default, {
                                    onChange: a
                                })]
                            })]
                        }), null != t && (0, n.jsx)("div", {
                            id: t,
                            tabIndex: -1
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        isAppCompatible: !0
                    }, this.getAppButton = () => {
                        let {
                            token: e,
                            NavigationMessages: t,
                            TrackClick: s,
                            authRedirectTo: l
                        } = this.props, {
                            isAppCompatible: a
                        } = this.state, i = (0, o.getLoginPath)(l), r = t.LOGIN;
                        return null != e && (i = h.AppRoutes.ME, r = t.OPEN), a ? (0, n.jsx)("li", {
                            className: g.listItemInactive,
                            children: (0, n.jsx)(s, {
                                eventName: k,
                                className: g.appButton,
                                data: {
                                    linkClicked: e ? "open" : "login",
                                    googleAnalytics: !0
                                },
                                href: i,
                                children: r
                            })
                        }, "app-button") : null
                    }, this.renderSocialMediaNav = () => {
                        let {
                            TrackClick: e
                        } = this.props, t = f().map(t => (0, n.jsx)("li", {
                            className: i(g.listItemInactive, g.listItemSocialMedia),
                            children: (0, n.jsx)(e, {
                                eventName: k,
                                className: g.rightNavLink,
                                data: {
                                    linkClicked: t.linkClicked
                                },
                                href: t.route,
                                rel: "me",
                                target: "_blank",
                                children: (0, n.jsx)("img", {
                                    src: t.img,
                                    alt: t.alt
                                })
                            })
                        }, t.route)), s = this.getAppButton();
                        return null != s && t.push(s), t
                    }
                }
            }
            var A = C