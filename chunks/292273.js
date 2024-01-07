            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            }), s("222007");
            var n, l, a = s("37983"),
                i = s("884691"),
                r = s("773179"),
                o = s.n(r),
                c = s("701800"),
                u = s("146230"),
                d = s("624265"),
                p = s("843455"),
                h = s("352220"),
                N = s("135971");
            let m = p.WebAnalyticsEvents.MAIN_NAVIGATION_MENU;
            (n = class extends i.PureComponent {
                render() {
                    let {
                        title: e,
                        links: t,
                        isOpen: s,
                        isMobile: n,
                        TrackClick: l,
                        avoidRouter: i
                    } = this.props, r = n && s ? (0, a.jsx)("ul", {
                        className: N.mobileSubMenuOpen,
                        id: this._dropdownId,
                        children: this.renderMobileSubMenu()
                    }) : null;
                    return n ? (0, a.jsxs)("li", {
                        className: N.subListHeading,
                        tabIndex: -1,
                        onClick: this.toggleMenu,
                        onKeyDown: this.handleKeyDown,
                        children: [(0, a.jsxs)("span", {
                            className: N.mobileMenuItem,
                            "aria-label": "Open ".concat(e, " Nav"),
                            "aria-expanded": s,
                            "aria-controls": this._dropdownId,
                            "aria-haspopup": "true",
                            role: "menuitem",
                            tabIndex: 0,
                            children: [e, (0, a.jsx)("img", {
                                src: h.Images.ICON_ARROW_DOWN,
                                className: N.iconArrow,
                                alt: "Open Nav"
                            })]
                        }, "more"), r]
                    }, "dropdown_".concat(e)) : (0, a.jsxs)("li", {
                        role: "none",
                        tabIndex: -1,
                        onFocus: this.openMenu,
                        onBlur: this.closeMenu,
                        onMouseEnter: this.openMenu,
                        onMouseLeave: this.closeMenu,
                        className: N.desktopSubMenuItem,
                        children: [(0, a.jsxs)("span", {
                            className: N.desktopMenuMore,
                            role: "menuitem",
                            tabIndex: 0,
                            "aria-haspopup": "true",
                            "aria-expanded": s,
                            "aria-controls": this._dropdownId,
                            children: [e, (0, a.jsx)("img", {
                                src: h.Images.ICON_ARROW_DOWN,
                                className: N.iconArrow,
                                alt: "Open Nav"
                            })]
                        }, "more"), (0, a.jsx)(d.default, {
                            id: this._dropdownId,
                            avoidRouter: i,
                            TrackClick: l,
                            isOpen: s,
                            dropdownLinks: t,
                            "aria-label": e
                        })]
                    }, "dropdown_".concat(e))
                }
                constructor(...e) {
                    super(...e), this._dropdownId = o.uniqueId("subMenuDropdown"), this.closeMenu = () => {
                        this.props.onClose()
                    }, this.openMenu = () => {
                        let {
                            title: e,
                            onOpen: t
                        } = this.props;
                        t(e)
                    }, this.toggleMenu = () => {
                        let {
                            isOpen: e,
                            title: t,
                            onOpen: s,
                            onClose: n
                        } = this.props;
                        e ? n() : s(t)
                    }, this.handleKeyDown = e => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), this.toggleMenu())
                    }, this.renderMobileSubMenu = () => {
                        let {
                            links: e,
                            TrackClick: t,
                            avoidRouter: s
                        } = this.props, n = c.default.isActiveCreator(this.context.router);
                        return e.map(e => e.external ? (0, a.jsx)("li", {
                            className: N.subListItemInactive,
                            children: (0, a.jsx)(t, {
                                eventName: m,
                                className: N.subListItemLink,
                                data: {
                                    linkClicked: "mobile-".concat(e.linkClicked)
                                },
                                rel: "me",
                                href: e.route,
                                children: e.title
                            })
                        }, e.route) : (0, a.jsx)("li", {
                            className: n(e.route) ? N.subListItemActive : N.subListItemInactive,
                            children: (0, a.jsx)(u.default, {
                                avoidRouter: s,
                                to: e.route,
                                from: p.WebAnalyticsEvents.MAIN_NAVIGATION_MENU,
                                children: (0, a.jsx)(t, {
                                    className: N.subListItemLink,
                                    tag: "span",
                                    eventName: m,
                                    data: {
                                        linkClicked: "mobile-".concat(e.linkClicked)
                                    },
                                    children: e.title
                                })
                            })
                        }, e.route))
                    }
                }
            }).defaultProps = {
                isOpen: !1,
                isMobileMenuOpen: !1
            }, l = n