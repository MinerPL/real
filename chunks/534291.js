            "use strict";
            n.r(t), n.d(t, {
                SectionTypes: function() {
                    return x
                },
                ListContentScroller: function() {
                    return T
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
                c = n("907002"),
                u = n("353386"),
                d = n("394846"),
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
                v = o.createContext(null);
            class T extends o.PureComponent {
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
            T.defaultProps = {
                paddingTop: 60,
                paddingBottom: 60
            }, (s = i || (i = {})).MINIMAL = "minimal", s.CUSTOM = "custom", s.DEFAULT = "default", s.WIDE = "wide";
            let N = Object.freeze({
                minimal: "contentColumnMinimal",
                custom: "contentColumnCustom",
                default: "contentColumnDefault",
                wide: "contentColumnWide"
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
                    section: i,
                    closeAction: r,
                    sidebarTheme: S,
                    contentType: b,
                    scrollerRef: x,
                    mobileSidebarOpen: T,
                    toggleSidebar: g,
                    hideSidebar: j = !1
                } = e, R = o.useRef(null), I = o.useRef(null), P = (0, m.default)(i), M = (0, c.useTransition)(j, {
                    from: {
                        position: "absolute",
                        opacity: 0
                    },
                    enter: {
                        opacity: 1
                    },
                    reverse: j,
                    config: c.config.stiff
                }), y = o.useCallback(e => {
                    R.current = e, null != x && (x.current = e)
                }, [x]);
                o.useLayoutEffect(() => {
                    null != R.current && P !== i && R.current.scrollTo({
                        to: 0
                    })
                }, [i, P, R]);
                let A = (0, l.jsx)(E, {
                    isMobile: d.isMobile,
                    mobileSidebarOpen: T,
                    closeAction: r
                });

                function U() {
                    return null == s ? null : (0, l.jsx)(p.default, {
                        className: a(_.noticeRegion, {
                            [_.noticeRegionHiddenSidebar]: j
                        }),
                        children: s
                    }, i)
                }
                return (0, l.jsx)(l.Fragment, {
                    children: M((e, s) => (0, l.jsxs)(c.animated.div, {
                        style: e,
                        className: _.standardSidebarView,
                        children: [!s && (null == t ? null : (0, l.jsx)("div", {
                            className: a(_.sidebarRegion, (0, C.getThemeClass)(S), {
                                [_.flexFullWidth]: d.isMobile,
                                [_.hidden]: d.isMobile && !1 === T
                            }),
                            children: (0, l.jsx)(f.AdvancedScrollerThin, {
                                className: _.sidebarRegionScroller,
                                fade: !0,
                                children: (0, l.jsxs)("nav", {
                                    className: a(_.sidebar, {
                                        [_.mobileSidebar]: d.isMobile
                                    }),
                                    children: [d.isMobile && (0, l.jsx)("div", {
                                        className: _.mobileSidebarHeader,
                                        children: A
                                    }), t]
                                })
                            })
                        })), function() {
                            let e = null != g && null != r && T,
                                t = d.isMobile && (0, l.jsxs)("div", {
                                    className: a(_.mobileContentHeader, {
                                        [_.hideHamburger]: !e
                                    }),
                                    children: [e && (0, l.jsx)(u.default, {
                                        onClick: g
                                    }), A]
                                });
                            if ("custom" === b) return (0, l.jsxs)(h.default, {
                                component: "div",
                                className: _.contentRegion,
                                children: [t, n, !d.isMobile && A, U()]
                            });
                            let s = N[null != b ? b : "default"];
                            return (0, l.jsxs)(h.default, {
                                component: "div",
                                className: a(_.contentRegion, {
                                    [_.hidden]: d.isMobile && !0 === T
                                }),
                                children: [(0, l.jsxs)("div", {
                                    className: _.contentTransitionWrap,
                                    children: [t, (0, l.jsxs)(f.AdvancedScrollerAuto, {
                                        className: a(_.contentRegionScroller, j ? _.contentRegionHiddenSidebar : _.contentRegionShownSidebar),
                                        ref: y,
                                        children: [(0, l.jsx)(v.Provider, {
                                            value: R.current,
                                            children: (0, l.jsx)(f.TabBar.Panel, {
                                                id: i,
                                                className: a(_.contentColumn, _[s], {
                                                    [_.mobileContent]: d.isMobile
                                                }),
                                                ref: I,
                                                style: d.isMobile ? {
                                                    maxWidth: window.innerWidth
                                                } : void 0,
                                                children: j ? n : (0, l.jsx)(f.FocusRingScope, {
                                                    containerRef: I,
                                                    children: n
                                                })
                                            })
                                        }), !d.isMobile && A]
                                    })]
                                }), U()]
                            })
                        }()]
                    }))
                })
            }