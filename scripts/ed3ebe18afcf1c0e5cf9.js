(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["57832"], {
        800751: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SHAKE_INTENSITY_DEFAULT: function() {
                    return v
                },
                SHAKE_INTENSITY_MAX: function() {
                    return g
                },
                SHAKE_INTENSITY_INCREMENT: function() {
                    return N
                },
                default: function() {
                    return I
                }
            });
            var s = n("37983"),
                i = n("884691"),
                l = n("759843"),
                o = n("669491"),
                r = n("77078"),
                a = n("428958"),
                c = n("69927"),
                d = n("509802"),
                u = n("304386"),
                h = n("423487"),
                f = n("956089"),
                m = n("659500"),
                p = n("286235"),
                S = n("901582"),
                C = n("534291"),
                b = n("49111"),
                _ = n("782340"),
                x = n("634917");
            let T = Object.freeze({
                    shouldPreventNavigation: !1,
                    onPreventNavigation: null,
                    sidebarOpen: !0
                }),
                v = 1.4,
                g = 15,
                N = 2;

            function E(e) {
                var t, n;
                let {
                    section: i,
                    setPreventNavigation: o,
                    scrollerRef: r
                } = e;
                (0, a.default)({
                    type: l.ImpressionTypes.PANE,
                    name: null == i ? void 0 : i.impressionName,
                    properties: null == i ? void 0 : i.impressionProperties
                });
                let c = null !== (t = null == i ? void 0 : i.element) && void 0 !== t ? t : b.NOOP_NULL,
                    d = null !== (n = null == i ? void 0 : i.elementProps) && void 0 !== n ? n : {};
                return (0, s.jsx)(S.default, {
                    section: i.section,
                    children: (0, s.jsx)(c, {
                        ...d,
                        setPreventNavigation: o,
                        refToScroller: r
                    })
                })
            }
            class j extends i.PureComponent {
                componentDidMount() {
                    this.getPredicateSections().forEach(e => {
                        let {
                            notice: t
                        } = e;
                        if (null == t) return;
                        let {
                            stores: n
                        } = t;
                        null != n && n.forEach(e => {
                            e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e)
                        })
                    })
                }
                componentDidUpdate(e) {
                    let {
                        section: t
                    } = e;
                    t !== this.props.section && (this._intensity = v)
                }
                componentWillUnmount() {
                    this._unmounted = !0, this._subscribedStores.forEach(e => e.removeChangeListener(this.handleNoticeStoreUpdate)), this.props.sections.forEach(e => {
                        var t;
                        return null === (t = e.onSettingsClose) || void 0 === t ? void 0 : t.call(e)
                    })
                }
                getPredicateSections() {
                    return this.props.sections.filter(e => null == e.predicate || e.predicate())
                }
                validNavigation() {
                    var e;
                    let {
                        section: t
                    } = this.props, n = this.getPredicateSections(), {
                        notice: s
                    } = null !== (e = n.find(e => t === e.section)) && void 0 !== e ? e : {};
                    return null != s && s.stores.some(e => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly())) ? (m.ComponentDispatch.dispatch(b.ComponentActions.SHAKE_APP, {
                        duration: 300,
                        intensity: this._intensity
                    }), this._intensity = Math.min(this._intensity + N, g), m.ComponentDispatch.dispatch(b.ComponentActions.EMPHASIZE_NOTICE), !1) : (this._intensity = v, !0)
                }
                renderSidebar(e) {
                    let {
                        section: t,
                        title: n
                    } = this.props, i = e.flatMap(e => e.newIndicatorDismissibleContentTypes).filter(e => null != e), l = null != t ? t : e[0].section;
                    return (0, s.jsx)(d.default, {
                        contentTypes: i,
                        children: t => {
                            let {
                                visibleContent: i
                            } = t;
                            return (0, s.jsx)(r.TabBar, {
                                selectedItem: l,
                                onItemSelect: this.handleSetSection,
                                orientation: "vertical",
                                "aria-label": n,
                                children: e.map((e, t) => {
                                    switch (e.section) {
                                        case C.SectionTypes.HEADER:
                                            return (0, s.jsx)(r.TabBar.Header, {
                                                children: e.label
                                            }, t);
                                        case C.SectionTypes.DIVIDER:
                                            return (0, s.jsx)(r.TabBar.Separator, {}, t);
                                        case C.SectionTypes.CUSTOM:
                                            var n;
                                            let o = null !== (n = e.element) && void 0 !== n ? n : b.NOOP_NULL;
                                            return (0, s.jsx)(o, {}, t);
                                        default:
                                            return this.renderSettingsSectionTabBarItem(e, l === e.section, i)
                                    }
                                })
                            })
                        }
                    })
                }
                renderNotice(e) {
                    let {
                        theme: t
                    } = this.props;
                    if (null == e || null == e.notice) return null;
                    let {
                        stores: n,
                        element: i
                    } = e.notice;
                    return null == n || n.some(e => e.showNotice()) ? (0, s.jsx)(i, {
                        theme: t
                    }) : null
                }
                render() {
                    var e;
                    let {
                        sidebarTheme: t,
                        section: n,
                        title: i,
                        onClose: l,
                        hideSidebar: o
                    } = this.props, r = this.getPredicateSections(), a = r.find(e => e.section === n);
                    if (null == a || null == n) return null;
                    let d = null !== (e = "string" == typeof a.label ? a.label : a.ariaLabel) && void 0 !== e ? e : i;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(c.AppPageTitle, {
                            location: i,
                            subsection: d
                        }), (0, s.jsx)(C.default, {
                            sidebarTheme: t,
                            scrollerRef: this.scrollerRef,
                            section: n,
                            sidebar: this.renderSidebar(r),
                            content: (0, s.jsx)(E, {
                                section: a,
                                setPreventNavigation: this.setPreventNavigation,
                                scrollerRef: this.scrollerRef
                            }),
                            mobileSidebarOpen: this.state.sidebarOpen,
                            hideSidebar: o,
                            toggleSidebar: () => this.setState({
                                sidebarOpen: !0
                            }),
                            contentType: a.type,
                            notice: this.renderNotice(a),
                            closeAction: null != l ? this.handleClose : void 0
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this._unmounted = !1, this._intensity = v, this._subscribedStores = [], this.scrollerRef = i.createRef(), this.state = {
                        ...T,
                        sidebarOpen: this.props.section !== b.UserSettingsSections.SUBSCRIPTIONS && this.props.section !== b.UserSettingsSections.PROFILE_CUSTOMIZATION
                    }, this.setPreventNavigation = (e, t) => {
                        this.setState({
                            shouldPreventNavigation: e,
                            onPreventNavigation: t
                        })
                    }, this.handleSetSection = e => {
                        let {
                            onSetSection: t,
                            sections: n
                        } = this.props, {
                            shouldPreventNavigation: s,
                            onPreventNavigation: i
                        } = this.state, l = () => {
                            var s;
                            null == t || t(e);
                            let {
                                notice: i
                            } = null !== (s = n.find(t => e === t.section)) && void 0 !== s ? s : {}, l = null != i ? i.stores : null;
                            null != l && l.forEach(e => {
                                !this._subscribedStores.includes(e) && (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e))
                            }), this.setState({
                                ...T,
                                sidebarOpen: !1
                            })
                        };
                        this.validNavigation() && !s && (l(), p.default.addBreadcrumb({
                            category: "settings",
                            message: "Set section: ".concat(e)
                        })), s && null != i && i(l)
                    }, this.handleClose = () => {
                        if (this.validNavigation()) {
                            let {
                                onClose: e
                            } = this.props;
                            null == e || e()
                        }
                    }, this.handleNoticeStoreUpdate = () => {
                        !this._unmounted && (this._intensity = v, this.forceUpdate())
                    }, this.renderSettingsSectionTabBarItem = (e, t, n) => {
                        let {
                            section: i,
                            label: l = null,
                            ariaLabel: a,
                            onClick: c,
                            color: d,
                            icon: m,
                            className: p,
                            newIndicator: S,
                            newIndicatorDismissibleContentTypes: C,
                            badgeCount: T
                        } = e, v = null;
                        i === b.UserSettingsSections.ACCOUNT && this.props.isEligibleForPomelo ? v = (0, s.jsx)(h.default, {
                            color: o.default.colors.STATUS_WARNING.css
                        }) : null != e.decoration ? v = (0, s.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: e.decoration
                        }) : null != n && (null == C ? void 0 : C.includes(n)) && !t ? v = null != S ? S : (0, s.jsx)(f.TextBadge, {
                            text: _.default.Messages.NEW
                        }) : null != m ? v = m : null != T && T > 0 && (v = (0, s.jsx)(f.NumberBadge, {
                            count: T
                        }));
                        let g = i === b.UserSettingsSections.PREMIUM ? (0, s.jsx)(u.default, {
                            label: l,
                            isSelected: t,
                            decoration: v
                        }) : null == v ? l : (0, s.jsxs)("div", {
                            className: x.tabBarItemContainer,
                            children: [l, v]
                        });
                        return (0, s.jsx)(r.TabBar.Item, {
                            color: d,
                            id: i,
                            onClick: c,
                            className: p,
                            "aria-label": a,
                            children: g
                        }, i)
                    }
                }
            }
            var I = j
        },
        534291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SectionTypes: function() {
                    return x
                },
                ListContentScroller: function() {
                    return v
                },
                DefaultCustomContentScroller: function() {
                    return g
                },
                ContentTypes: function() {
                    return i
                },
                default: function() {
                    return j
                }
            });
            var s, i, l = n("37983"),
                o = n("884691"),
                r = n("414456"),
                a = n.n(r),
                c = n("301165"),
                d = n("353386"),
                u = n("394846"),
                h = n("266491"),
                f = n("77078"),
                m = n("84339"),
                p = n("965397"),
                S = n("773336"),
                C = n("439932"),
                b = n("304580"),
                _ = n("241372");
            let x = {
                    HEADER: "HEADER",
                    DIVIDER: "DIVIDER",
                    CUSTOM: "CUSTOM"
                },
                T = o.createContext(null);
            class v extends o.PureComponent {
                renderContent() {
                    let {
                        scrollerRef: e,
                        ...t
                    } = this.props;
                    return (0, l.jsx)("div", {
                        className: _.customContainer,
                        children: (0, l.jsx)(f.ListAuto, {
                            ...t,
                            className: a(_.customScroller, _.contentRegionScroller),
                            ref: e
                        })
                    })
                }
                render() {
                    return (0, l.jsx)("div", {
                        className: _.customColumn,
                        children: this.renderContent()
                    })
                }
            }

            function g(e) {
                let {
                    children: t
                } = e;
                return (0, l.jsx)("div", {
                    className: _.customColumn,
                    children: (0, l.jsx)("div", {
                        className: _.customContainer,
                        children: (0, l.jsx)(f.ScrollerAuto, {
                            className: a(_.customScroller, _.contentRegionScroller),
                            children: t
                        })
                    })
                })
            }
            v.defaultProps = {
                paddingTop: 60,
                paddingBottom: 60
            }, (s = i || (i = {})).MINIMAL = "minimal", s.CUSTOM = "custom", s.DEFAULT = "default", s.WIDE = "wide";
            let N = Object.freeze({
                [i.MINIMAL]: "contentColumnMinimal",
                [i.CUSTOM]: "contentColumnCustom",
                [i.DEFAULT]: "contentColumnDefault",
                [i.WIDE]: "contentColumnWide"
            });

            function E(e) {
                let {
                    isMobile: t,
                    mobileSidebarOpen: n,
                    closeAction: s
                } = e, i = o.useRef(null);
                return null == s ? null : (0, l.jsx)("div", {
                    className: a(_.toolsContainer, {
                        [_.mobileToolsContainer]: t,
                        [_.mobileSidebarTools]: t,
                        [_.closeIconOnly]: !n,
                        [_.isMobileAndroid]: !n && !0 === (0, S.isAndroidWeb)()
                    }),
                    ref: i,
                    children: (0, l.jsx)(f.FocusRingScope, {
                        containerRef: i,
                        children: (0, l.jsx)("div", {
                            className: _.tools,
                            children: (0, l.jsx)(b.default, {
                                className: a({
                                    [_.mobileToolsCloseIcon]: t
                                }),
                                closeAction: s,
                                keybind: "ESC"
                            })
                        })
                    })
                })
            }
            var j = function(e) {
                let {
                    sidebar: t,
                    content: n,
                    notice: s,
                    section: r,
                    closeAction: S,
                    sidebarTheme: b,
                    contentType: x,
                    scrollerRef: v,
                    mobileSidebarOpen: g,
                    toggleSidebar: j,
                    hideSidebar: I = !1
                } = e, R = o.useRef(null), P = o.useRef(null), M = (0, m.default)(r), A = (0, c.useTransition)(I, {
                    from: {
                        position: "absolute",
                        opacity: 0
                    },
                    enter: {
                        opacity: 1
                    },
                    reverse: I,
                    config: c.config.stiff
                }), U = o.useCallback(e => {
                    R.current = e, null != v && (v.current = e)
                }, [v]);
                o.useLayoutEffect(() => {
                    null != R.current && M !== r && R.current.scrollTo({
                        to: 0
                    })
                }, [r, M, R]);
                let y = (0, l.jsx)(E, {
                    isMobile: u.isMobile,
                    mobileSidebarOpen: g,
                    closeAction: S
                });

                function O() {
                    return null == s ? null : (0, l.jsx)(p.default, {
                        className: a(_.noticeRegion, {
                            [_.noticeRegionHiddenSidebar]: I
                        }),
                        children: s
                    }, r)
                }
                return (0, l.jsx)(l.Fragment, {
                    children: A((e, s) => (0, l.jsxs)(c.animated.div, {
                        style: e,
                        className: _.standardSidebarView,
                        children: [!s && (null == t ? null : (0, l.jsx)("div", {
                            className: a(_.sidebarRegion, (0, C.getThemeClass)(b), {
                                [_.flexFullWidth]: u.isMobile,
                                [_.hidden]: u.isMobile && !1 === g
                            }),
                            children: (0, l.jsx)(f.AdvancedScrollerThin, {
                                className: _.sidebarRegionScroller,
                                fade: !0,
                                children: (0, l.jsxs)("nav", {
                                    className: a(_.sidebar, {
                                        [_.mobileSidebar]: u.isMobile
                                    }),
                                    children: [u.isMobile && (0, l.jsx)("div", {
                                        className: _.mobileSidebarHeader,
                                        children: y
                                    }), t]
                                })
                            })
                        })), function() {
                            let e = null != j && null != S && g,
                                t = u.isMobile && (0, l.jsxs)("div", {
                                    className: a(_.mobileContentHeader, {
                                        [_.hideHamburger]: !e
                                    }),
                                    children: [e && (0, l.jsx)(d.default, {
                                        onClick: j
                                    }), y]
                                });
                            if (x === i.CUSTOM) return (0, l.jsxs)(h.default, {
                                component: "div",
                                className: _.contentRegion,
                                children: [t, n, !u.isMobile && y, O()]
                            });
                            let s = N[null != x ? x : i.DEFAULT];
                            return (0, l.jsxs)(h.default, {
                                component: "div",
                                className: a(_.contentRegion, {
                                    [_.hidden]: u.isMobile && !0 === g
                                }),
                                children: [(0, l.jsxs)("div", {
                                    className: _.contentTransitionWrap,
                                    children: [t, (0, l.jsxs)(f.AdvancedScrollerAuto, {
                                        className: a(_.contentRegionScroller, I ? _.contentRegionHiddenSidebar : _.contentRegionShownSidebar),
                                        ref: U,
                                        children: [(0, l.jsx)(T.Provider, {
                                            value: R.current,
                                            children: (0, l.jsx)(f.TabBar.Panel, {
                                                id: r,
                                                className: a(_.contentColumn, _[s], {
                                                    [_.mobileContent]: u.isMobile
                                                }),
                                                ref: P,
                                                style: u.isMobile ? {
                                                    maxWidth: window.innerWidth
                                                } : void 0,
                                                children: I ? n : (0, l.jsx)(f.FocusRingScope, {
                                                    containerRef: P,
                                                    children: n
                                                })
                                            })
                                        }), !u.isMobile && y]
                                    })]
                                }), O()]
                            })
                        }()]
                    }))
                })
            }
        },
        324929: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("476765");

            function o(e) {
                let {
                    isSelected: t,
                    ...n
                } = e, o = (0, l.useUID)();
                return (0, s.jsxs)("svg", {
                    ...n,
                    width: "16",
                    height: "11",
                    viewBox: "0 0 16 11",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "url(#".concat(o, ")"),
                    children: [(0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M1.47241 3.74953C1.75665 3.74953 1.99347 3.51738 1.99347 3.23876C1.99347 2.96014 1.75665 2.72799 1.47241 2.72799H1.18817C0.903933 2.72799 0.666992 2.96014 0.666992 3.23876C0.666992 3.51738 0.903933 3.74953 1.18817 3.74953H1.47241ZM12.226 9.92569C14.9262 8.71836 16.0632 5.65352 14.8315 3.09945C13.9788 1.2884 12.1787 0.22039 10.2837 0.127441H4.93063C4.45686 0.127441 4.12521 0.499012 4.12521 0.916945C4.12521 1.38124 4.50427 1.70634 4.93063 1.70634H6.3044C6.58864 1.70634 6.82547 1.93848 6.82547 2.21711C6.82547 2.49573 6.58864 2.72799 6.3044 2.72799H2.94096C2.65672 2.72799 2.41978 2.96014 2.41978 3.23876C2.41978 3.51738 2.65672 3.74953 2.94096 3.74953H5.35698C5.64122 3.74953 5.87805 3.98179 5.87805 4.26041C5.87805 4.53903 5.64122 4.77118 5.35698 4.77118H3.84097C3.55674 4.77118 3.31991 5.00333 3.31991 5.28195C3.31991 5.56057 3.55674 5.79283 3.84097 5.79283H4.88322C4.93063 6.35008 5.07275 6.90732 5.30957 7.41809C6.49393 9.97216 9.62055 11.0866 12.226 9.92569ZM7.37766 6.46674C6.68981 4.9984 7.34662 3.26147 8.84456 2.58721C10.3425 1.91294 12.1144 2.55678 12.8023 4.02512C13.4901 5.49346 12.8334 7.23039 11.3354 7.90465C9.83746 8.57892 8.06552 7.93508 7.37766 6.46674Z",
                        fill: "url(#paint0_linear_6413_12612)"
                    }), (0, s.jsx)("path", {
                        d: "M11.2312 3.56382L12.1786 5.14272C12.226 5.23555 12.226 5.28203 12.1786 5.37486L11.2312 6.95376C11.1838 7.0466 11.0891 7.0466 11.0417 7.0466H9.19412C9.09942 7.0466 9.05201 7.00012 9.00471 6.95376L8.05717 5.37486C8.00988 5.28203 8.00988 5.23555 8.05717 5.14272L9.00471 3.56382C9.05201 3.47098 9.14683 3.47098 9.19412 3.47098H11.0417C11.1365 3.42451 11.1838 3.47098 11.2312 3.56382Z",
                        fill: "url(#paint1_linear_6413_12612)"
                    }), (0, s.jsxs)("defs", {
                        children: [(0, s.jsxs)("linearGradient", {
                            id: "paint0_linear_6413_12612",
                            x1: "0.666992",
                            y1: "0.127441",
                            x2: "15.3271",
                            y2: "0.127441",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, s.jsx)("stop", {
                                stopColor: t ? i.default.unsafe_rawColors.WHITE_500.css : i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                            }), (0, s.jsx)("stop", {
                                offset: "0.502368",
                                stopColor: t ? i.default.unsafe_rawColors.WHITE_500.css : i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                            }), (0, s.jsx)("stop", {
                                offset: "1",
                                stopColor: t ? i.default.unsafe_rawColors.WHITE_500.css : i.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                            })]
                        }), (0, s.jsxs)("linearGradient", {
                            id: "paint1_linear_6413_12612",
                            x1: "0.666992",
                            y1: "0.127441",
                            x2: "15.3271",
                            y2: "0.127441",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, s.jsx)("stop", {
                                stopColor: t ? i.default.unsafe_rawColors.WHITE_500.css : i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                            }), (0, s.jsx)("stop", {
                                offset: "0.502368",
                                stopColor: t ? i.default.unsafe_rawColors.WHITE_500.css : i.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                            }), (0, s.jsx)("stop", {
                                offset: "1",
                                stopColor: t ? i.default.unsafe_rawColors.WHITE_500.css : i.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                            })]
                        })]
                    })]
                })
            }
        },
        304386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                o = n("446674"),
                r = n("154889"),
                a = n("917247"),
                c = n("801388"),
                d = n("770469"),
                u = n("641078"),
                h = n("773367"),
                f = n("160299"),
                m = n("324929"),
                p = n("890903");

            function S(e) {
                let t, {
                        decoration: n,
                        label: i,
                        isSelected: S
                    } = e,
                    C = (0, a.usePremiumTrialOffer)(),
                    b = (0, r.usePremiumDiscountOffer)(),
                    _ = (0, u.useIsEligibleForBogoPromotion)(),
                    x = (0, o.useStateFromStores)([f.default], () => f.default.isLocalizedPromoEnabled),
                    T = x && null == C && null == n;
                return t = _ ? (0, s.jsx)(c.default, {}) : null != b ? (0, s.jsx)(h.PremiumDiscountOfferTabBadge, {
                    isTabSelected: S,
                    userDiscount: b,
                    includesAmountOff: !1
                }) : null != C ? (0, s.jsx)(h.PremiumTrialOfferTabBadge, {
                    isTabSelected: S,
                    trialOffer: C
                }) : null != n ? n : T ? (0, s.jsx)(d.LocalizedPricingBadgeIcon, {
                    entryPoint: d.BadgeEntryPoint.SettingsMenu
                }) : (0, s.jsx)(m.default, {
                    isSelected: S
                }), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("div", {
                        className: l(p.premiumLabel, {
                            [p.selected]: (S || T) && !_
                        }),
                        children: [i, t]
                    }), (0, s.jsx)("div", {
                        className: l(p.background, {
                            [p.auPromo]: T && !S,
                            [p.auPromoSelected]: T && S,
                            [p.selectedBackground]: !T && !_ && S
                        })
                    })]
                })
            }
        },
        965397: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var s = n("37983"),
                i = n("884691"),
                l = n("414456"),
                o = n.n(l),
                r = n("458960"),
                a = n("77078"),
                c = n("866893");
            let d = {
                friction: 7,
                tension: 60
            };
            class u extends i.Component {
                componentWillAppear(e) {
                    this.animateTo(1).start(e)
                }
                componentWillEnter(e) {
                    this.animateTo(1).start(e)
                }
                componentWillLeave(e) {
                    let {
                        reducedMotion: t
                    } = this.context;
                    t.enabled ? this.animateTo(0).start(e) : r.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
                }
                animateTo(e) {
                    return r.default.spring(this.animation, {
                        ...d,
                        toValue: e
                    })
                }
                getAnimatedStyle() {
                    let {
                        reducedMotion: e
                    } = this.context;
                    return r.default.accelerate({
                        opacity: this.animation,
                        transform: e.enabled ? void 0 : [{
                            translateY: this.animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["150%", "0%"]
                            })
                        }]
                    })
                }
                render() {
                    let {
                        className: e,
                        children: t
                    } = this.props;
                    return (0, s.jsx)(r.default.div, {
                        className: o(e, c.slider),
                        style: this.getAnimatedStyle(),
                        children: t
                    })
                }
                constructor(...e) {
                    super(...e), this.animation = new r.default.Value(0)
                }
            }
            u.contextType = a.AccessibilityPreferencesContext;
            var h = u
        }
    }
]);