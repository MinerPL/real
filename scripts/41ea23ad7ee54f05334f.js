(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46743"], {
        92640: function(e, t, l) {
            "use strict";
            e.exports = l.p + "675e342482b30a050363.svg"
        },
        885634: function(e, t, l) {
            "use strict";
            e.exports = l.p + "0182905a3ee80992fba5.svg"
        },
        196118: function(e, t, l) {
            "use strict";
            e.exports = l.p + "5762c3945cbeabb2bd40.svg"
        },
        103104: function(e, t, l) {
            "use strict";
            e.exports = l.p + "148cfd05bf96c4803c00.svg"
        },
        968579: function(e, t, l) {
            "use strict";
            e.exports = l.p + "5fec52ceea51763cc572.svg"
        },
        785417: function(e, t, l) {
            "use strict";
            e.exports = l.p + "e71a63153765f000320c.png"
        },
        311537: function(e, t, l) {
            "use strict";
            e.exports = l.p + "3963dcb526c95c04942e.png"
        },
        911871: function(e, t, l) {
            "use strict";
            e.exports = l.p + "8450296c5f3678b8dc49.png"
        },
        520934: function(e, t, l) {
            "use strict";
            e.exports = l.p + "a4fd81157ab320d85edd.svg"
        },
        599994: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("77078");

            function n(e) {
                let {
                    children: t,
                    ...l
                } = e;
                return (0, a.jsx)(i.Anchor, {
                    ...l,
                    onClick: e => e.preventDefault(),
                    useDefaultUnderlineStyles: !1,
                    children: t
                })
            }
        },
        136110: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return Y
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("575482"),
                s = l.n(n),
                r = l("427964"),
                c = l("462567"),
                o = l("807403"),
                d = l("77078"),
                u = l("304580"),
                m = l("493765"),
                p = l("485328"),
                _ = l("545158"),
                h = l("69927"),
                f = l("592407"),
                C = l("393414"),
                g = l("764490"),
                I = l("246053"),
                A = l("599110"),
                E = l("701909"),
                v = l("721698"),
                x = l("599994"),
                R = l("598981"),
                T = l("412707"),
                N = l("646186"),
                P = l("49111"),
                j = l("894282"),
                y = l("782340"),
                O = l("379673");
            let S = E.default.getArticleURL(P.HelpdeskArticles.APP_DIRECTORY_HEADER_LEARN_MORE);

            function L(e) {
                let {
                    onClose: t
                } = e, l = i.useRef(null);
                return (0, a.jsx)("div", {
                    ref: l,
                    className: O.closeWrapper,
                    children: (0, a.jsx)(d.FocusRingScope, {
                        containerRef: l,
                        children: (0, a.jsx)("div", {
                            className: s(O.closeContent, o.isMobile ? O.closeContentMobile : O.closeContentNotMobile),
                            children: (0, a.jsx)(u.default, {
                                className: s(O.closeIcon, o.isMobile ? O.closeIconMobile : O.closeIconNotMobile),
                                closeAction: t,
                                keybind: "ESC"
                            })
                        })
                    })
                })
            }

            function D(e) {
                let {
                    onTitleClick: t,
                    showsLearnMoreCta: l,
                    guildId: n
                } = e, r = (0, a.jsxs)(i.Fragment, {
                    children: [(0, a.jsx)(g.default, {
                        title: y.default.Messages.APP_DIRECTORY
                    }), l && (0, a.jsx)(d.Anchor, {
                        onClick: function() {
                            A.default.track(P.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
                                cta: "directory-help-center",
                                current_page: T.ApplicationDirectoryViews.HOME,
                                guild_id: n
                            }), (0, _.default)(S)
                        },
                        children: y.default.Messages.LEARN_MORE
                    })]
                });
                return (0, a.jsx)("div", {
                    className: O.header,
                    children: null != t ? (0, a.jsx)(x.default, {
                        href: P.Routes.APPLICATION_DIRECTORY,
                        children: (0, a.jsx)(d.Clickable, {
                            onClick: t,
                            className: s(O.titleContainer, O.clickable),
                            children: r
                        })
                    }) : (0, a.jsx)("div", {
                        className: O.titleContainer,
                        children: r
                    })
                })
            }

            function M(e) {
                let t, {
                    view: l,
                    onClick: i
                } = e;
                if (null == l) return null;
                switch (l.type) {
                    case T.ApplicationDirectoryViews.HOME:
                        t = y.default.Messages.HOME;
                        break;
                    case T.ApplicationDirectoryViews.SEARCH:
                        t = y.default.Messages.SEARCH;
                        break;
                    case T.ApplicationDirectoryViews.APPLICATION:
                        var n;
                        t = null !== (n = null == l ? void 0 : l.applicationName) && void 0 !== n ? n : y.default.Messages.BACK;
                        break;
                    default:
                        t = y.default.Messages.BACK
                }
                return (0, a.jsxs)(d.Clickable, {
                    className: O.back,
                    onClick: i,
                    children: [(0, a.jsx)(I.default, {
                        direction: I.default.Directions.LEFT,
                        className: O.backIcon
                    }), (0, a.jsx)(d.Heading, {
                        className: O.backHeader,
                        variant: "heading-sm/semibold",
                        children: t
                    })]
                })
            }
            let b = (0, r.debounce)(e => {
                let {
                    scrollTop: t,
                    scrollOffset: l,
                    scrollHeight: a,
                    location: i,
                    guildId: n,
                    sessionId: s
                } = e;
                t > 0 && A.default.track(P.AnalyticEvents.APP_DIRECTORY_PAGE_SCROLLED, {
                    scroll_visible_percentile: (t + l) / a,
                    guild_id: n,
                    location: i,
                    directory_session_id: s
                })
            }, 200);

            function Y(e) {
                let {
                    children: t
                } = e, l = i.useRef(null), n = (0, R.default)(), r = (0, T.useApplicationDirectoryHistory)(e => e.guildId), u = (0, T.useApplicationDirectoryHistory)(e => e.entrypoint), _ = (0, T.useApplicationDirectoryHistory)(e => e.trackedOpenedFromExternalEntrypoint), g = (0, T.getCurrentView)(), I = (0, T.getPreviousView)(), E = i.useRef(), x = (null == g ? void 0 : g.type) !== T.ApplicationDirectoryViews.HOME, S = (null == g ? void 0 : g.type) === T.ApplicationDirectoryViews.APPLICATION ? null == g ? void 0 : g.applicationId : void 0;
                (0, h.usePageTitle)({
                    location: y.default.Messages.APP_DIRECTORY
                });
                let Y = (null == g ? void 0 : g.type) !== T.ApplicationDirectoryViews.HOME && null != I;
                i.useEffect(() => {
                    !_ && null == u && (A.default.track(P.AnalyticEvents.APP_DIRECTORY_OPENED, {
                        source: T.ApplicationDirectoryEntrypointNames.EXTERNAL
                    }), (0, T.setTrackedOpenedFromExternalEntrypoint)(!0))
                }, [u, _]), i.useEffect(() => {
                    if (n) return p.default.setLayout(m.default), p.default.enable(), () => p.default.disable()
                }, [n]), i.useEffect(() => {
                    v.getCategories()
                }, []), i.useEffect(() => {
                    n && v.fetchIntegrationApplicationIdsForMyGuilds()
                }, [n]), i.useEffect(() => {
                    E.current = (0, c.v4)()
                }, [null == g ? void 0 : g.type, S]);
                let k = i.useCallback(() => {
                    var e, t;
                    (0, C.transitionTo)(null !== (e = null == u ? void 0 : u.pathname) && void 0 !== e ? e : ""), null != u && u.name === T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != r && f.default.open(r, null !== (t = u.guildSettingsSection) && void 0 !== t ? t : void 0)
                }, [u, r]);
                return i.useEffect(() => {
                    let e = e => {
                        e.key === j.KeyboardKeysUpdated.ESCAPE && (e.stopPropagation(), k())
                    };
                    return document.addEventListener("keydown", e), () => {
                        document.removeEventListener("keydown", e)
                    }
                }, [k]), (0, a.jsxs)(a.Fragment, {
                    children: [n ? (0, a.jsx)(L, {
                        onClose: k
                    }) : null, (0, a.jsx)(d.AdvancedScroller, {
                        className: s(O.directoryContainer, {
                            [O.directoryContainerMobile]: o.isMobile,
                            [O.directoryContainerTablet]: o.isTablet
                        }),
                        ref: l,
                        onScroll: () => {
                            var e, t, a;
                            return b({
                                scrollTop: null === (e = l.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
                                offsetHeight: null === (t = l.current) || void 0 === t ? void 0 : t.getScrollerState().offsetHeight,
                                scrollHeight: null === (a = l.current) || void 0 === a ? void 0 : a.getScrollerState().scrollHeight,
                                location: null == g ? void 0 : g.type,
                                guildId: r,
                                sessionId: E.current
                            })
                        },
                        children: (0, a.jsxs)("div", {
                            className: O.content,
                            children: [(0, a.jsx)(D, {
                                onTitleClick: x ? N.goHome : void 0,
                                showsLearnMoreCta: (null == g ? void 0 : g.type) === T.ApplicationDirectoryViews.HOME,
                                guildId: r
                            }), Y && (0, a.jsx)(M, {
                                view: I,
                                onClick: () => {
                                    (0, C.back)()
                                }
                            }), t]
                        })
                    })]
                })
            }
        },
        146691: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useInstallApplication: function() {
                    return n
                }
            });
            var a = l("773670"),
                i = l("613676");

            function n(e, t) {
                let l = a.useMemo(() => null != e && (0, i.canInstallApplication)(e.id, e.custom_install_url, e.install_params), [e]),
                    n = a.useCallback(l => {
                        null != e && (0, i.installApplication)({
                            applicationId: e.id,
                            customInstallUrl: e.custom_install_url,
                            installParams: e.install_params,
                            guildId: null != t ? t : void 0,
                            source: l
                        })
                    }, [e, t]);
                return {
                    canInstall: l,
                    install: n
                }
            }
        },
        898656: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("575482"),
                s = l.n(n),
                r = l("881345"),
                c = l("77078"),
                o = l("650509"),
                d = l("8161"),
                u = l("315102"),
                m = l("146691"),
                p = l("998944"),
                _ = l("412707"),
                h = l("721908"),
                f = l("782340"),
                C = l("532691");

            function g(e) {
                var t, l, n;
                let {
                    application: g,
                    className: I,
                    childrenClassName: A,
                    showAdd: E,
                    showMutualGuilds: v,
                    showPrimaryCategory: x,
                    children: R,
                    onView: T,
                    guildCountPosition: N = "top",
                    subheaderTextVariant: P = "text-sm/normal",
                    mutualGuildShownMax: j,
                    guildIconSize: y,
                    source: O
                } = e, S = (0, _.useApplicationDirectoryHistory)(e => e.guildId), L = (0, r.useListItem)(g.id), D = u.default.getApplicationIconURL({
                    id: g.id,
                    icon: g.icon,
                    size: 48
                }), {
                    canInstall: M,
                    install: b
                } = (0, m.useInstallApplication)(g), Y = (0, h.default)({
                    application: g,
                    showMutualGuilds: v
                }), k = i.useCallback(e => {
                    e.stopPropagation(), b(O)
                }, [b, O]), H = null === (t = g.categories) || void 0 === t ? void 0 : t[0], G = (null !== (n = null === (l = g.directory_entry) || void 0 === l ? void 0 : l.guild_count) && void 0 !== n ? n : 0) > 0 || Y.length > 0, F = (0, a.jsx)(p.default, {
                    application: g,
                    textVariant: P,
                    mutualGuilds: Y,
                    mutualGuildShownMax: j,
                    guildIconSize: y,
                    compact: !0
                }), w = x && null != H, U = G && "top" === N, {
                    applicationSubscriptionListingsShown: B
                } = (0, o.default)({
                    applicationId: g.id,
                    groupListingId: g.primary_sku_id,
                    guildId: S
                }), V = (0, a.jsxs)("article", {
                    children: [(0, a.jsxs)("div", {
                        className: C.topWrapper,
                        children: [(0, a.jsx)("img", {
                            className: C.icon,
                            alt: "",
                            "aria-hidden": !0,
                            src: D,
                            width: 48,
                            height: 48
                        }), (0, a.jsxs)("div", {
                            className: C.info,
                            children: [(0, a.jsx)(c.Heading, {
                                variant: "heading-md/medium",
                                children: g.name
                            }), (w || U) && (0, a.jsxs)("div", {
                                className: C.details,
                                children: [w ? (0, a.jsx)(c.Text, {
                                    tag: "span",
                                    color: "header-secondary",
                                    variant: P,
                                    children: H.name
                                }) : null, U ? (0, a.jsxs)(a.Fragment, {
                                    children: [w ? (0, a.jsx)("span", {
                                        className: C.bullet,
                                        children: "•"
                                    }) : null, F, B ? (0, a.jsxs)("div", {
                                        className: C.premiumContainer,
                                        children: [(0, a.jsx)("span", {
                                            className: C.bullet,
                                            children: "•"
                                        }), (0, a.jsx)(d.default, {
                                            width: 16,
                                            height: 16
                                        }), (0, a.jsx)(c.Text, {
                                            variant: "text-sm/medium",
                                            className: C.premiumText,
                                            children: f.default.Messages.APPLICATION_DIRECTORY_LISTING_TOOLTIP_PREMIUM
                                        })]
                                    }) : null]
                                }) : null]
                            })]
                        }), E ? (0, a.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: k,
                            disabled: !M,
                            children: f.default.Messages.APP_DIRECTORY_LISTING_ADD_BUTTON
                        }) : null]
                    }), null != R || null != A ? (0, a.jsx)("div", {
                        className: s(A, C.children),
                        children: R
                    }) : null, G && "bottom" === N ? (0, a.jsx)("div", {
                        className: C.bottomGuildCountContainer,
                        children: F
                    }) : null]
                });
                return null != T ? (0, a.jsx)(c.Clickable, {
                    tag: "li",
                    onClick: () => T({
                        mutualGuilds: Y
                    }),
                    className: s(I, C.listing, C.clickable),
                    ...L,
                    children: V
                }) : (0, a.jsx)(c.FocusRing, {
                    children: (0, a.jsx)("li", {
                        className: s(I, C.listing),
                        ...L,
                        children: V
                    })
                })
            }
        },
        967473: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("77078"),
                s = l("315102"),
                r = l("998944"),
                c = l("288914"),
                o = l("721908"),
                d = l("821825");

            function u(e) {
                var t, l, u, m, p;
                let {
                    application: _,
                    className: h,
                    childrenClassName: f,
                    animatesOnHover: C,
                    onClick: g,
                    ...I
                } = e, A = s.default.getApplicationIconURL({
                    id: _.id,
                    icon: _.icon,
                    size: 48
                }), E = (0, o.default)({
                    application: _
                }), v = null === (t = _.categories) || void 0 === t ? void 0 : t[0], x = (null !== (m = null === (l = _.directory_entry) || void 0 === l ? void 0 : l.guild_count) && void 0 !== m ? m : 0) > 0 || E.length > 0, R = i.useCallback(() => {
                    g({
                        mutualGuilds: E
                    })
                }, [g, E]), T = (0, a.jsx)(r.default, {
                    application: _,
                    textVariant: "text-xs/normal",
                    mutualGuilds: E,
                    mutualGuildShownMax: 3,
                    guildIconSize: r.GuildIconSize.SMALL,
                    compact: !0
                });
                return (0, a.jsxs)(c.default, {
                    className: h,
                    onClick: R,
                    iconSrc: A,
                    header: _.name,
                    subheader: null != v && (0, a.jsx)(n.Text, {
                        tag: "span",
                        color: "header-secondary",
                        variant: "text-xs/normal",
                        children: v.name
                    }),
                    animatesOnHover: C,
                    ...I,
                    children: [(null != _.description || null != f) && (0, a.jsx)("div", {
                        className: f,
                        children: (0, a.jsx)(n.Text, {
                            className: d.listingDescription,
                            variant: "text-sm/normal",
                            lineClamp: 2,
                            children: null !== (p = null === (u = _.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== p ? p : _.description
                        })
                    }), x && (0, a.jsx)("div", {
                        className: d.bottomGuildCountContainer,
                        children: T
                    })]
                })
            }
        },
        653891: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("77078"),
                s = l("998944"),
                r = l("288914"),
                c = l("721908"),
                o = l("224517");

            function d(e) {
                var t, l, d, u, m;
                let {
                    application: p,
                    onClick: _,
                    imageSrc: h,
                    className: f,
                    animatesOnHover: C
                } = e, g = (0, c.default)({
                    application: p
                }), I = null === (t = p.categories) || void 0 === t ? void 0 : t[0], A = (null !== (u = null === (l = p.directory_entry) || void 0 === l ? void 0 : l.guild_count) && void 0 !== u ? u : 0) > 0 || g.length > 0, E = i.useCallback(() => {
                    _({
                        mutualGuilds: g
                    })
                }, [_, g]), v = (0, a.jsx)(s.default, {
                    application: p,
                    textVariant: "text-xs/normal",
                    mutualGuilds: g,
                    mutualGuildShownMax: 3,
                    guildIconSize: s.GuildIconSize.SMALL,
                    compact: !0
                });
                return (0, a.jsx)(r.default, {
                    className: f,
                    imageSrc: h,
                    onClick: E,
                    header: p.name,
                    subheader: (0, a.jsxs)("div", {
                        className: o.subheader,
                        children: [null != I && (0, a.jsx)(n.Text, {
                            tag: "span",
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: I.name
                        }), A && (0, a.jsxs)(a.Fragment, {
                            children: [null != I && (0, a.jsx)("span", {
                                className: o.bullet,
                                children: "•"
                            }), v]
                        })]
                    }),
                    animatesOnHover: C,
                    children: null != p.description && (0, a.jsx)("div", {
                        className: o.children,
                        children: (0, a.jsx)(n.Text, {
                            className: o.listingDescription,
                            variant: "text-sm/normal",
                            lineClamp: 2,
                            children: null !== (m = null === (d = p.directory_entry) || void 0 === d ? void 0 : d.short_description) && void 0 !== m ? m : p.description
                        })
                    })
                })
            }
        },
        726902: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("77078"),
                n = l("599994"),
                s = l("967473"),
                r = l("49111"),
                c = l("782340"),
                o = l("982616");

            function d(e) {
                let {
                    applications: t,
                    className: l,
                    listingClassName: s,
                    title: d,
                    showViewAll: m,
                    onViewOne: p,
                    onViewAll: _
                } = e;
                return (0, a.jsxs)("div", {
                    className: l,
                    children: [null != d ? (0, a.jsxs)("div", {
                        className: o.header,
                        children: [(0, a.jsx)(i.Heading, {
                            variant: "heading-lg/semibold",
                            children: d
                        }), m ? (0, a.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.LINK,
                            onClick: _,
                            children: c.default.Messages.APP_DIRECTORY_LISTING_VIEW_ALL_BUTTON
                        }) : null]
                    }) : null, (0, a.jsx)("ul", {
                        className: o.list,
                        children: t.map(e => (0, a.jsx)(n.default, {
                            href: r.Routes.APPLICATION_DIRECTORY_PROFILE(e.id),
                            children: (0, a.jsx)(u, {
                                className: s,
                                application: e,
                                onClick: t => {
                                    let {
                                        mutualGuilds: l
                                    } = t;
                                    return p({
                                        application: e,
                                        mutualGuilds: l
                                    })
                                }
                            })
                        }, e.id))
                    })]
                })
            }

            function u(e) {
                return (0, a.jsx)(s.default, {
                    ...e
                })
            }
        },
        619288: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("77078"),
                n = l("682777"),
                s = l("449281"),
                r = l("782340");

            function c(e) {
                let t, l, {
                    category: c,
                    className: o,
                    onViewAll: d
                } = e;
                return null == c || (0, n.isAllCategory)(c) ? (t = r.default.Messages.APP_DIRECTORY_EMPTY_SEARCH_HEADING, l = r.default.Messages.APP_DIRECTORY_EMPTY_SEARCH_SUBHEADING) : (t = r.default.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_HEADING.format({
                    categoryName: c.name
                }), l = r.default.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_SUBHEADING.format({
                    viewAllHook: (e, t) => (0, a.jsx)(i.Anchor, {
                        onClick: d,
                        children: e
                    }, t)
                })), (0, a.jsx)(s.default, {
                    className: o,
                    heading: t,
                    body: l
                })
            }
        },
        449281: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("575482"),
                s = l.n(n),
                r = l("77078"),
                c = l("782340"),
                o = l("24982"),
                d = l("103104");

            function u(e) {
                let {
                    heading: t = c.default.Messages.APP_DIRECTORY_ERROR_HEADING,
                    body: l = c.default.Messages.APP_DIRECTORY_ERROR_BODY,
                    className: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: s(o.container, n),
                    children: [(0, a.jsx)("img", {
                        className: o.image,
                        src: d,
                        alt: c.default.Messages.APP_DIRECTORY_CONFUSED_CLYDE_IMAGE_ALT
                    }), (0, a.jsxs)(i.Fragment, {
                        children: [(0, a.jsx)(r.Heading, {
                            className: o.header,
                            variant: "heading-xl/semibold",
                            children: t
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: l
                        })]
                    })]
                })
            }
        },
        998944: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                GuildIconSize: function() {
                    return i
                },
                default: function() {
                    return I
                }
            });
            var a, i, n = l("920040"),
                s = l("773670"),
                r = l("575482"),
                c = l.n(r),
                o = l("769846"),
                d = l("77078"),
                u = l("627490"),
                m = l("587974"),
                p = l("315102"),
                _ = l("159885"),
                h = l("782340"),
                f = l("65554");
            (a = i || (i = {}))[a.SMALL = (0, _.cssValueToNumber)(o.default.GUILD_COUNT_SMALL_ICON_SIZE)] = "SMALL", a[a.LARGE = (0, _.cssValueToNumber)(o.default.GUILD_COUNT_LARGE_ICON_SIZE)] = "LARGE";
            let C = {
                    [i.SMALL]: f.moreGuildsSmall,
                    [i.LARGE]: f.moreGuildsLarge
                },
                g = {
                    [i.SMALL]: f.iconSmall,
                    [i.LARGE]: f.iconLarge
                };

            function I(e) {
                var t, l, a;
                let {
                    application: r,
                    mutualGuilds: o,
                    mutualGuildShownMax: _ = 4,
                    className: I,
                    textVariant: A = "text-sm/normal",
                    compact: E,
                    guildIconSize: v = i.LARGE
                } = e, x = new Intl.ListFormat("en-US"), R = null !== (l = null === (t = r.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== l ? l : 0, T = null !== (a = null == o ? void 0 : o.length) && void 0 !== a ? a : 0, N = Math.max(0, R - T), {
                    shownMutualGuilds: P,
                    hiddenMutualGuilds: j
                } = s.useMemo(() => {
                    let e = [],
                        t = [];
                    return null == o || o.forEach(l => {
                        e.length < _ && null != l.icon ? e.push(l) : t.push(l)
                    }), e.length === _ && t.length > 0 && (t.push(e[_ - 1]), e = e.slice(0, _ - 1)), {
                        shownMutualGuilds: e,
                        hiddenMutualGuilds: t
                    }
                }, [o, _]), y = j.length, O = function(e, t, l, a) {
                    if (0 === t && 0 === e) return null;
                    if (t > 0 && 0 === l) return h.default.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({
                        mutualGuildCount: t
                    });
                    let i = t > 0 ? h.default.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS : h.default.Messages.APP_DIRECTORY_GUILD_COUNT,
                        n = new Intl.NumberFormat("en-US", {
                            notation: a ? "compact" : "standard",
                            compactDisplay: "short"
                        });
                    return i.format({
                        guildCount: n.format(e),
                        mutualGuildCount: t,
                        nonMutualGuildCount: n.format(l)
                    })
                }(R, T, N, E);
                return 0 === P.length && null == O ? null : (0, n.jsxs)("div", {
                    className: c(I, f.wrapper),
                    children: [(0, n.jsx)("div", {
                        className: f.icons,
                        children: P.length > 0 ? (0, n.jsxs)(n.Fragment, {
                            children: [P.map((e, t) => {
                                let l = t === P.length - 1 && 0 === y,
                                    a = p.default.getGuildIconURL({
                                        id: e.id,
                                        icon: e.icon,
                                        size: v,
                                        canAnimate: !1
                                    }),
                                    i = (0, n.jsx)(d.Tooltip, {
                                        text: e.name,
                                        position: "top",
                                        children: e => (0, n.jsx)("img", {
                                            ...e,
                                            className: c(f.icon, g[v]),
                                            src: a,
                                            alt: ""
                                        })
                                    });
                                return l ? (0, n.jsx)(s.Fragment, {
                                    children: i
                                }, e.id) : (0, n.jsx)(m.default, {
                                    className: f.iconMask,
                                    height: v,
                                    width: v,
                                    mask: m.default.Masks.VOICE_USER_SUMMARY_ITEM,
                                    children: i
                                }, e.id)
                            }), y > 0 ? (0, n.jsx)(d.Tooltip, {
                                text: h.default.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format({
                                    appNames: x.format(j.map(e => e.name))
                                }),
                                position: "top",
                                children: e => (0, n.jsxs)("div", {
                                    ...e,
                                    className: c(f.moreGuilds, C[v]),
                                    children: ["+", y]
                                })
                            }) : null]
                        }) : (0, n.jsx)(u.default, {
                            width: v,
                            height: v,
                            className: f.defaultIcon
                        })
                    }), null != O ? (0, n.jsx)(d.Text, {
                        variant: A,
                        color: "header-secondary",
                        children: O
                    }) : null]
                })
            }
        },
        288914: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("575482"),
                n = l.n(i),
                s = l("77078"),
                r = l("782340"),
                c = l("167559");

            function o(e) {
                let {
                    className: t,
                    onClick: l,
                    imageSrc: i,
                    iconSrc: o,
                    header: d,
                    headerClassName: u,
                    subheaderVariant: m = "text-sm/normal",
                    subheader: p,
                    children: _,
                    animatesOnHover: h,
                    ...f
                } = e, C = null != i, g = (0, a.jsxs)(a.Fragment, {
                    children: [C && (0, a.jsx)("div", {
                        className: c.imageContainer,
                        children: (0, a.jsx)("img", {
                            alt: "",
                            className: c.image,
                            src: i
                        })
                    }), (0, a.jsxs)("div", {
                        className: c.textContainer,
                        children: [(0, a.jsxs)("div", {
                            className: n(c.topRowContainer),
                            children: [null != o && (0, a.jsx)("img", {
                                className: c.icon,
                                alt: "",
                                "aria-hidden": !0,
                                src: o,
                                width: 48,
                                height: 48
                            }), (0, a.jsxs)("div", {
                                className: c.headerContainer,
                                children: [(0, a.jsx)(s.Heading, {
                                    variant: "heading-md/medium",
                                    className: u,
                                    children: d
                                }), null != p && (0, a.jsx)(s.Text, {
                                    className: c.subheader,
                                    color: "header-secondary",
                                    variant: m,
                                    children: p
                                })]
                            })]
                        }), _]
                    })]
                }), I = n(t, c.container, {
                    [c.hasImage]: C
                });
                return null != l ? (0, a.jsx)(s.ClickableContainer, {
                    tag: "article",
                    "aria-label": r.default.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format({
                        name: d
                    }),
                    onClick: l,
                    className: n(I, c.clickable, {
                        [c.animatesOnHoverContainer]: h
                    }),
                    focusProps: {
                        offset: 4
                    },
                    children: g
                }) : (0, a.jsx)("article", {
                    className: I,
                    ...f,
                    children: g
                })
            }
        },
        915267: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("575482"),
                n = l.n(i),
                s = l("77078"),
                r = l("889768");

            function c(e) {
                let {
                    loading: t,
                    children: l
                } = e;
                return (0, a.jsxs)("div", {
                    className: r.container,
                    children: [t ? (0, a.jsx)("div", {
                        className: r.spinnerContainer,
                        children: (0, a.jsx)(s.Spinner, {
                            className: r.spinner,
                            type: s.Spinner.Type.SPINNING_CIRCLE
                        })
                    }) : null, (0, a.jsx)("div", {
                        className: n({
                            [r.loading]: t
                        }),
                        children: l
                    })]
                })
            }
        },
        436846: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("575482"),
                s = l.n(n),
                r = l("646240"),
                c = l("49111"),
                o = l("782340"),
                d = l("935438"),
                u = i.forwardRef(function(e, t) {
                    let {
                        query: l,
                        canShowCta: n = !1,
                        onChange: u,
                        onSubmit: m,
                        className: p
                    } = e, [_, h] = i.useState(!1);
                    return (0, a.jsx)(r.default, {
                        ref: t,
                        className: s(d.search, p),
                        label: o.default.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
                        placeholder: o.default.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
                        searchTerm: l,
                        cta: n && _ && l.length > 0 ? o.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null,
                        onChange: u,
                        onClear: () => u(""),
                        onFocus: () => h(!0),
                        onBlur: () => h(!1),
                        onKeyPress: e => {
                            if (e.charCode === c.KeyboardKeys.ENTER) null == m || m()
                        },
                        autoFocus: !0
                    })
                })
        },
        271081: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("744196"),
                s = l("599110"),
                r = l("831109"),
                c = l("136110"),
                o = l("412707"),
                d = l("155335"),
                u = l("769638"),
                m = l("464119"),
                p = l("463497"),
                _ = l("49111"),
                h = l("180158");

            function f() {
                let e = (0, o.useApplicationDirectoryHistory)(e => e.guildId),
                    t = (0, n.default)([r.default], () => r.default.getCategories()),
                    l = (0, o.getPreviousView)();
                return i.useEffect(() => {
                    s.default.track(_.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
                        current_page: o.ApplicationDirectoryViews.HOME,
                        previous_page: null == l ? void 0 : l.type,
                        guild_id: e
                    })
                }, [e, l]), (0, a.jsxs)(c.default, {
                    children: [(0, a.jsx)(m.default, {}), null != t && t.length > 0 && (0, a.jsx)(d.default, {
                        className: h.categoryList
                    }), (0, a.jsx)("main", {
                        className: h.collectionsContainer,
                        children: (0, a.jsx)(u.default, {})
                    }), (0, a.jsx)(p.default, {})]
                })
            }
        },
        155335: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("575482"),
                s = l.n(n),
                r = l("744196"),
                c = l("77078"),
                o = l("599110"),
                d = l("599994"),
                u = l("831109"),
                m = l("682777"),
                p = l("412707"),
                _ = l("646186"),
                h = l("49111"),
                f = l("782340"),
                C = l("251075");

            function g(e) {
                let {
                    className: t
                } = e, l = (0, p.useApplicationDirectoryHistory)(e => e.guildId), n = (0, r.default)([u.default], () => u.default.getCategories()), g = i.useMemo(() => {
                    let e = [(0, m.getAllCategory)(), ...n];
                    return e
                }, [n]), I = (0, p.getCurrentView)(), A = e => {
                    let t = g.find(t => t.id === e);
                    o.default.track(h.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: t.name,
                        category_id: t.id,
                        current_page: null == I ? void 0 : I.type,
                        guild_id: l
                    }), (0, _.goToCategory)({
                        categoryId: t.id
                    })
                };
                return (0, a.jsx)("nav", {
                    className: s(C.container, t),
                    children: g.map(e => {
                        let t = e.id,
                            l = e.name,
                            i = (0, m.getCategoryIcon)(e),
                            n = new URLSearchParams;
                        return n.set("category_id", t.toString()), (0, a.jsx)(d.default, {
                            href: "".concat(h.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(n),
                            children: (0, a.jsxs)(c.Clickable, {
                                className: C.category,
                                "aria-label": f.default.Messages.APP_DIRECTORY_CATEGORY_BUTTON_A11Y_LABEL.format({
                                    categoryName: l
                                }),
                                onClick: () => A(t),
                                children: [(0, a.jsx)(i, {
                                    className: C.icon,
                                    width: "24",
                                    height: "24"
                                }), (0, a.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: l
                                })]
                            })
                        }, t)
                    })
                })
            }
        },
        201335: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("575482"),
                s = l.n(n),
                r = l("405784"),
                c = l("769846"),
                o = l("77078"),
                d = l("749344"),
                u = l("599110"),
                m = l("599994"),
                p = l("682777"),
                _ = l("412707"),
                h = l("646186"),
                f = l("331793"),
                C = l("49111"),
                g = l("782340"),
                I = l("968936");

            function A(e) {
                let {
                    collectionTitle: t,
                    title: l,
                    description: i,
                    handleClick: n,
                    imageSrc: r,
                    ctaLabel: c,
                    ctaLink: d,
                    applicationId: u
                } = e, p = "936929561302675456" === u, _ = null == u ? (0, a.jsx)(o.Button, {
                    className: I.applicationCta,
                    onClick: n,
                    children: c
                }) : (0, a.jsx)(m.default, {
                    href: C.Routes.APPLICATION_DIRECTORY_PROFILE(u),
                    children: (0, a.jsx)(o.Button, {
                        className: I.applicationCta,
                        onClick: n,
                        children: c
                    })
                });
                return (0, a.jsxs)("div", {
                    className: I.card,
                    children: [(0, a.jsx)("div", {
                        className: I.textContainer,
                        children: (0, a.jsxs)("div", {
                            className: I.verticallyCenter,
                            children: [(0, a.jsx)(o.Text, {
                                className: I.collectionTitle,
                                tag: "span",
                                color: "header-secondary",
                                variant: "heading-deprecated-12/semibold",
                                children: t
                            }), (0, a.jsxs)(o.Heading, {
                                className: I.applicationName,
                                variant: "heading-xxl/medium",
                                children: [l, " ", p && (0, a.jsx)(f.default, {})]
                            }), (0, a.jsx)(o.Text, {
                                className: I.applicationDescription,
                                variant: "text-md/normal",
                                lineClamp: 3,
                                children: i
                            }), null == d ? _ : (0, a.jsx)(o.Anchor, {
                                onClick: n,
                                href: d,
                                className: s((0, o.getButtonStyle)({
                                    grow: !1
                                }), I.applicationCta),
                                children: c
                            })]
                        })
                    }), (0, a.jsx)("div", {
                        className: I.imageContainer,
                        children: (0, a.jsx)("img", {
                            alt: l,
                            className: I.image,
                            src: r
                        })
                    })]
                })
            }

            function E(e) {
                let {
                    collection: {
                        id: t,
                        title: l,
                        application_directory_collection_items: n
                    }
                } = e, o = i.useRef(null), [m, f] = i.useState(), E = (0, _.useApplicationDirectoryHistory)(e => e.guildId);
                return i.useEffect(() => {
                    let e = null == o ? void 0 : o.current;
                    if (null == e) return;
                    let t = new ResizeObserver(() => {
                        let t = document.body.offsetWidth < parseFloat(c.default.COLLECTION_GALLERY_MEDIA_BREAKPOINT) ? parseFloat(c.default.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT) : parseFloat(c.default.COLLECTION_GALLERY_ROW_CARD_HEIGHT);
                        f(e.offsetWidth / t)
                    });
                    return t.observe(document.body), () => {
                        t.disconnect()
                    }
                }, []), (0, a.jsx)("article", {
                    ref: o,
                    className: s({
                        [I.collectionBottomMargin]: n.length <= 1
                    }),
                    children: (0, a.jsx)(d.default, {
                        aspectRatio: m,
                        themedPagination: !0,
                        paginationClassName: I.paginationControls,
                        paginationArrowClassName: I.paginationArrow,
                        items: n,
                        onChangeItem: (e, l, a) => {
                            let {
                                application: i
                            } = e;
                            null != i && u.default.track(C.AnalyticEvents.APP_DIRECTORY_COLLECTION_SCROLLED, {
                                collection_id: t,
                                offset: a,
                                results: [i.id],
                                guild_id: E
                            })
                        },
                        renderItem: e => {
                            let {
                                id: i,
                                image_hash: n,
                                application: s,
                                type: c,
                                description: o,
                                title: d,
                                call_to_action_label: m,
                                call_to_action_url: _
                            } = e;
                            if (null == n) return;
                            let f = (0, p.getCollectionItemAssetUrl)({
                                itemId: i,
                                hash: n
                            });
                            if (c === r.ApplicationDirectoryCollectionItemType.APPLICATION && null != s) {
                                var I, v;
                                return (0, a.jsx)(A, {
                                    collectionTitle: l,
                                    title: s.name,
                                    description: null !== (v = null === (I = s.directory_entry) || void 0 === I ? void 0 : I.short_description) && void 0 !== v ? v : s.description,
                                    handleClick: () => {
                                        u.default.track(C.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                            collection_id: t,
                                            application_id: s.id,
                                            guild_id: E,
                                            shown_mutual_guilds_count: void 0
                                        }), (0, h.goToApplication)({
                                            applicationId: s.id
                                        })
                                    },
                                    imageSrc: f,
                                    ctaLabel: g.default.Messages.APP_DIRECTORY_GALLERY_COLLECTION_VIEW_APP_CTA,
                                    applicationId: s.id
                                })
                            }
                            if (c === r.ApplicationDirectoryCollectionItemType.LINK && null != d && null != _ && null != m) return (0, a.jsx)(A, {
                                collectionTitle: l,
                                title: d,
                                description: o,
                                handleClick: () => {
                                    u.default.track(C.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                        collection_id: t,
                                        link: _,
                                        guild_id: E,
                                        shown_mutual_guilds_count: void 0
                                    })
                                },
                                imageSrc: f,
                                ctaLabel: m,
                                ctaLink: _
                            })
                        }
                    })
                })
            }
        },
        199800: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("405784"),
                s = l("769846"),
                r = l("476765"),
                c = l("599110"),
                o = l("599994"),
                d = l("967473"),
                u = l("412707"),
                m = l("646186"),
                p = l("121631"),
                _ = l("49111"),
                h = l("212788");

            function f(e) {
                let {
                    collection: {
                        id: t,
                        title: l,
                        application_directory_collection_items: f
                    }
                } = e, C = i.useRef(null), [g, I] = i.useState(300), [A, E] = i.useState(4), v = parseFloat(s.default.COLLECTION_LIST_CARD_GAP), x = (0, u.useApplicationDirectoryHistory)(e => e.guildId);
                i.useEffect(() => {
                    function e() {
                        var e;
                        let t = null === (e = C.current) || void 0 === e ? void 0 : e.offsetWidth,
                            l = 1;
                        if (null == t) return 300;
                        t >= 500 && (l = 2), t >= 700 && (l = 3), t >= 1e3 && (l = 4), E(l);
                        let a = (l - 1) * v;
                        return (t - a) / l
                    }
                    let t = C.current;
                    if (null == t) return;
                    let l = new ResizeObserver(() => {
                        I(e())
                    });
                    return I(e()), l.observe(t), () => {
                        l.disconnect()
                    }
                }, [v]);
                let R = (0, r.useUID)();
                return (0, a.jsx)("div", {
                    ref: C,
                    children: (0, a.jsx)(p.default, {
                        header: l,
                        headerId: R,
                        tileWidth: g,
                        tileMargin: v,
                        onScroll: e => {
                            let {
                                tileIndex: l
                            } = e, a = f.slice(l, l + A).reduce((e, t) => {
                                let {
                                    type: l,
                                    application: a
                                } = t;
                                return l === n.ApplicationDirectoryCollectionItemType.APPLICATION && null != a && e.push(a.id), e
                            }, []);
                            c.default.track(_.AnalyticEvents.APP_DIRECTORY_COLLECTION_SCROLLED, {
                                collection_id: t,
                                offset: l,
                                results: a,
                                guild_id: x
                            })
                        },
                        children: (0, a.jsx)("ul", {
                            "aria-labelledby": R,
                            className: h.itemsContainer,
                            children: f.map(e => {
                                let {
                                    id: l,
                                    type: i,
                                    application: s
                                } = e;
                                if (i === n.ApplicationDirectoryCollectionItemType.APPLICATION && null != s) return (0, a.jsx)("li", {
                                    style: {
                                        width: g
                                    },
                                    className: h.itemContainer,
                                    children: (0, a.jsx)(o.default, {
                                        href: _.Routes.APPLICATION_DIRECTORY_PROFILE(s.id),
                                        children: (0, a.jsx)(d.default, {
                                            application: s,
                                            onClick: e => {
                                                let {
                                                    mutualGuilds: l
                                                } = e;
                                                c.default.track(_.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                                    collection_id: t,
                                                    application_id: s.id,
                                                    guild_id: x,
                                                    shown_mutual_guilds_count: l.length
                                                }), (0, m.goToApplication)({
                                                    applicationId: s.id
                                                })
                                            },
                                            animatesOnHover: !0
                                        })
                                    })
                                }, l)
                            })
                        })
                    })
                })
            }
        },
        315004: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("575482"),
                n = l.n(i),
                s = l("405784"),
                r = l("77078"),
                c = l("599110"),
                o = l("599994"),
                d = l("682777"),
                u = l("653891"),
                m = l("288914"),
                p = l("412707"),
                _ = l("646186"),
                h = l("49111"),
                f = l("301209");

            function C(e) {
                let {
                    collection: {
                        id: t,
                        title: l,
                        application_directory_collection_items: i
                    }
                } = e, C = (0, p.useApplicationDirectoryHistory)(e => e.guildId);
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        className: f.header,
                        children: l
                    }), (0, a.jsx)("div", {
                        className: f.list,
                        children: i.map(e => {
                            let {
                                id: l,
                                type: i,
                                application: p,
                                image_hash: g,
                                title: I,
                                description: A,
                                call_to_action_label: E,
                                call_to_action_url: v
                            } = e;
                            if (null == g) return;
                            let x = (0, d.getCollectionItemAssetUrl)({
                                itemId: l,
                                hash: g
                            });
                            return i === s.ApplicationDirectoryCollectionItemType.APPLICATION && null != p ? (0, a.jsx)(o.default, {
                                href: h.Routes.APPLICATION_DIRECTORY_PROFILE(p.id),
                                className: f.item,
                                children: (0, a.jsx)(u.default, {
                                    imageSrc: x,
                                    application: p,
                                    onClick: e => {
                                        let {
                                            mutualGuilds: l
                                        } = e;
                                        c.default.track(h.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                            collection_id: t,
                                            application_id: p.id,
                                            guild_id: C,
                                            shown_mutual_guilds_count: l.length
                                        }), (0, _.goToApplication)({
                                            applicationId: p.id
                                        })
                                    },
                                    animatesOnHover: !0
                                })
                            }, l) : i === s.ApplicationDirectoryCollectionItemType.LINK && null != I ? (0, a.jsxs)(m.default, {
                                className: n(f.item, f.linkCard),
                                imageSrc: x,
                                header: I,
                                headerClassName: f.cardHeader,
                                children: [(0, a.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    className: f.linkDescription,
                                    children: A
                                }), (0, a.jsx)(r.Anchor, {
                                    onClick: () => {
                                        c.default.track(h.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                            collection_id: t,
                                            link: v,
                                            guild_id: C,
                                            shown_mutual_guilds_count: void 0
                                        })
                                    },
                                    href: v,
                                    className: n((0, r.getButtonStyle)(), f.linkCta),
                                    children: E
                                })]
                            }, l) : void 0
                        })
                    })]
                })
            }
        },
        769638: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("575482"),
                s = l.n(n),
                r = l("595486"),
                c = l("498225"),
                o = l("313915"),
                d = l("721698"),
                u = l("810047"),
                m = l("449281"),
                p = l("915267"),
                _ = l("201335"),
                h = l("199800"),
                f = l("315004"),
                C = l("105680");

            function g() {
                let e = (0, c.useStateFromStores)([o.default], () => o.default.appDirectoryIncludesInactiveCollections),
                    t = (0, c.useStateFromStores)([u.default], () => u.default.getFetchState({
                        includesInactive: e
                    })),
                    l = (0, c.useStateFromStores)([u.default], () => u.default.getCollections({
                        includesInactive: e
                    }));
                return (i.useEffect(() => {
                    d.getCollections({
                        includesInactive: e
                    })
                }, [e]), t === u.FetchState.ERROR) ? (0, a.jsx)(m.default, {}) : (0, a.jsx)(p.default, {
                    loading: t === u.FetchState.FETCHING,
                    children: null == l ? void 0 : l.map((e, t) => {
                        let i;
                        let n = t > 0 && l[t - 1].type !== r.ApplicationDirectoryCollectionType.GALLERY;
                        switch (e.type) {
                            case r.ApplicationDirectoryCollectionType.LIST:
                                i = (0, a.jsx)(h.default, {
                                    collection: e
                                });
                                break;
                            case r.ApplicationDirectoryCollectionType.LIST_WITH_IMAGE:
                                i = (0, a.jsx)(f.default, {
                                    collection: e
                                });
                                break;
                            case r.ApplicationDirectoryCollectionType.GALLERY:
                                i = (0, a.jsx)(_.default, {
                                    collection: e
                                });
                                break;
                            default:
                                return null
                        }
                        return (0, a.jsx)("div", {
                            className: s({
                                [C.topMargin]: n
                            }),
                            children: i
                        }, e.id)
                    })
                })
            }
        },
        464119: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("77078"),
                s = l("599110"),
                r = l("682777"),
                c = l("436846"),
                o = l("412707"),
                d = l("646186"),
                u = l("49111"),
                m = l("782340"),
                p = l("760830"),
                _ = l("885634");

            function h() {
                let e = (0, o.useApplicationDirectoryHistory)(e => e.guildId),
                    [t, l] = i.useState(""),
                    h = i.useCallback(() => {
                        let l = (0, r.getAllCategory)();
                        s.default.track(u.AnalyticEvents.APP_DIRECTORY_SEARCH_STARTED, {
                            search_term: t,
                            category: l.name,
                            current_page: o.ApplicationDirectoryViews.HOME,
                            category_id: l.id,
                            guild_id: e
                        }), (0, d.goSearch)({
                            query: t
                        })
                    }, [e, t]);
                return (0, a.jsxs)("div", {
                    className: p.container,
                    children: [(0, a.jsxs)("div", {
                        className: p.searchBarContainer,
                        children: [(0, a.jsx)(n.Heading, {
                            variant: "display-lg",
                            className: p.heading,
                            children: m.default.Messages.APP_DIRECTORY_HERO_HEADING
                        }), (0, a.jsx)(c.default, {
                            className: p.searchBar,
                            query: t,
                            onChange: l,
                            onSubmit: h,
                            canShowCta: !0
                        })]
                    }), (0, a.jsx)("img", {
                        src: _,
                        alt: "",
                        className: p.rightImage
                    })]
                })
            }
        },
        463497: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("77078"),
                n = l("545158"),
                s = l("599110"),
                r = l("412707"),
                c = l("49111"),
                o = l("782340"),
                d = l("193911"),
                u = l("196118");

            function m() {
                let e = (0, r.useApplicationDirectoryHistory)(e => e.guildId);
                return (0, a.jsxs)("div", {
                    className: d.container,
                    role: "contentinfo",
                    children: [(0, a.jsx)("img", {
                        className: d.image,
                        src: u,
                        alt: ""
                    }), (0, a.jsxs)("div", {
                        className: d.content,
                        children: [(0, a.jsx)(i.Heading, {
                            variant: "heading-md/semibold",
                            children: o.default.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_HEADING
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: o.default.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_BODY
                        })]
                    }), (0, a.jsx)(i.Button, {
                        size: i.Button.Sizes.SMALL,
                        onClick: function() {
                            s.default.track(c.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
                                cta: "new_to_apps",
                                current_page: r.ApplicationDirectoryViews.HOME,
                                guild_id: e
                            }), (0, n.default)("https://discord.com/blog/how-to-use-discord-apps")
                        },
                        className: d.button,
                        children: o.default.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_CTA
                    })]
                })
            }
        },
        331793: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("575482"),
                n = l.n(i),
                s = l("20606"),
                r = l("956089"),
                c = l("782340"),
                o = l("978351");

            function d(e) {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, a.jsx)(r.TextBadge, {
                    ...l,
                    text: c.default.Messages.APP_DIRECTORY_PARTNER,
                    color: s.default.BACKGROUND_TERTIARY,
                    className: n(t, o.partnerBadge)
                })
            }
        },
        121631: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var a, i, n = l("920040"),
                s = l("773670"),
                r = l("575482"),
                c = l.n(r),
                o = l("865768"),
                d = l("117064"),
                u = l("77078"),
                m = l("737960"),
                p = l("137215"),
                _ = l("772202");
            (a = i || (i = {}))[a.LEFT = 0] = "LEFT", a[a.RIGHT = 1] = "RIGHT";
            let h = e => {
                let {
                    onClick: t,
                    className: l,
                    direction: a
                } = e;
                return (0, n.jsx)(u.Clickable, {
                    "aria-hidden": !0,
                    className: c(_.scrollerButton, l),
                    onClick: t,
                    children: (0, n.jsx)(p.default, {
                        className: _.scrollerButtonArrow,
                        direction: a
                    })
                })
            };
            class f extends s.Component {
                static getDerivedStateFromProps(e, t) {
                    return t.prevWidth !== e.width ? {
                        tileIndex: 0,
                        prevWidth: e.width,
                        lastArrowDirection: i.LEFT
                    } : null
                }
                getMaxOffset() {
                    let {
                        width: e
                    } = this.props, {
                        scrollerWidth: t
                    } = this.state;
                    return Math.max(Math.floor(t - e), 0)
                }
                getSideOffset() {
                    let {
                        tileWidth: e,
                        tileMargin: t
                    } = this.props, l = this.getMaxOffset(), a = e + t;
                    return l - Math.floor(l / a) * a
                }
                getMaxIndex() {
                    let {
                        tileWidth: e,
                        tileMargin: t
                    } = this.props;
                    return Math.round(this.getMaxOffset() / (e + t))
                }
                getOffset(e, t) {
                    let {
                        tileWidth: l,
                        tileMargin: a
                    } = this.props;
                    return Math.min(e * (l + a) + (t === i.RIGHT ? this.getSideOffset() : 0), this.getMaxOffset())
                }
                componentDidMount() {
                    this.setScrollerWidth()
                }
                componentDidUpdate(e, t) {
                    if (t.tileIndex !== this.state.tileIndex || t.lastArrowDirection !== this.state.lastArrowDirection) {
                        var l, a, i;
                        let {
                            tileIndex: e
                        } = this.state, t = this.getOffset(this.state.tileIndex, this.state.lastArrowDirection);
                        null === (l = this.advancedScrollerRef.current) || void 0 === l || l.scrollTo({
                            to: t,
                            animate: !0
                        }), null === (a = (i = this.props).onScroll) || void 0 === a || a.call(i, {
                            tileIndex: e
                        })
                    }
                    e.width !== this.props.width && this.setScrollerWidth()
                }
                render() {
                    let {
                        tileIndex: e,
                        lastArrowDirection: t
                    } = this.state, {
                        header: l,
                        headerId: a,
                        subHeader: s,
                        headerContainerClassName: r,
                        scrollContainerClassName: o
                    } = this.props, d = this.getMaxOffset();
                    return (0, n.jsxs)("div", {
                        children: [(0, n.jsxs)("div", {
                            className: c(_.headerContainer, r),
                            children: [(0, n.jsxs)("div", {
                                children: [(0, n.jsx)(u.Heading, {
                                    id: a,
                                    variant: "heading-lg/semibold",
                                    children: l
                                }), null == s ? null : (0, n.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    className: _.subheader,
                                    children: s
                                })]
                            }), d > 0 ? (0, n.jsxs)("div", {
                                className: _.arrowsContainer,
                                children: [(0, n.jsx)(h, {
                                    direction: p.default.Directions.LEFT,
                                    onClick: this.prev,
                                    className: c(_.arrowLeft, {
                                        [_.arrowDisabled]: 0 === e && t === i.LEFT
                                    })
                                }), (0, n.jsx)(h, {
                                    direction: p.default.Directions.RIGHT,
                                    onClick: this.next,
                                    className: c(_.arrowRight, {
                                        [_.arrowDisabled]: e === this.getMaxIndex() && t === i.RIGHT
                                    })
                                })]
                            }) : null]
                        }), (0, n.jsx)("div", {
                            className: c(_.scrollerContainer, o),
                            children: (0, n.jsx)(u.AdvancedScrollerNone, {
                                ref: this.advancedScrollerRef,
                                orientation: "horizontal",
                                className: _.scroller,
                                children: (0, n.jsx)("div", {
                                    className: _.scroller,
                                    ref: e => {
                                        this.tileScrollerRef.current = e, this.setScrollerWidth()
                                    },
                                    children: this.props.children
                                })
                            })
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        tileIndex: 0,
                        prevWidth: this.props.width,
                        lastArrowDirection: i.LEFT,
                        scrollerWidth: 0
                    }, this.advancedScrollerRef = s.createRef(), this.tileScrollerRef = s.createRef(), this.setScrollerWidth = () => {
                        let e = (0, o.findDOMNode)(this.tileScrollerRef.current);
                        (0, d.isElement)(e, HTMLElement) && e.offsetWidth !== this.state.scrollerWidth && this.setState({
                            scrollerWidth: e.offsetWidth
                        })
                    }, this.prev = () => {
                        this.setState({
                            tileIndex: Math.max(this.state.tileIndex - 1, 0),
                            lastArrowDirection: i.LEFT
                        })
                    }, this.next = () => {
                        this.setState({
                            tileIndex: Math.min(this.state.tileIndex + 1, this.getMaxIndex()),
                            lastArrowDirection: i.RIGHT
                        })
                    }
                }
            }
            var C = (0, m.default)(f)
        },
        413989: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("77078"),
                n = l("782340"),
                s = l("998455");

            function r(e) {
                let {} = e;
                return (0, a.jsxs)("div", {
                    className: s.container,
                    children: [(0, a.jsxs)("div", {
                        className: s.content,
                        children: [(0, a.jsx)(i.Text, {
                            variant: "text-sm/semibold",
                            className: s.title,
                            children: n.default.Messages.APP_DIRECTORY_MUSIC_BANNER_TITLE
                        }), (0, a.jsx)(i.Heading, {
                            variant: "heading-xxl/medium",
                            children: n.default.Messages.APP_DIRECTORY_MUSIC_BANNER_HEADER
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: n.default.Messages.APP_DIRECTORY_MUSIC_BANNER_CONTENT
                        })]
                    }), (0, a.jsx)("div", {
                        className: s.imageContainer,
                        children: (0, a.jsx)("img", {
                            className: s.image,
                            src: l("520934"),
                            alt: ""
                        })
                    })]
                })
            }
        },
        649135: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("77078"),
                n = l("545158"),
                s = l("599110"),
                r = l("412707"),
                c = l("49111"),
                o = l("782340"),
                d = l("843960");

            function u(e) {
                let {
                    guildId: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: d.container,
                    children: [(0, a.jsx)("img", {
                        className: d.image,
                        src: l("785417"),
                        alt: ""
                    }), (0, a.jsxs)("div", {
                        className: d.content,
                        children: [(0, a.jsx)(i.Heading, {
                            variant: "heading-md/extrabold",
                            children: o.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_HEADER
                        }), (0, a.jsx)(i.Text, {
                            variant: "text-sm/medium",
                            children: o.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_CONTENT
                        })]
                    }), (0, a.jsx)(i.Button, {
                        size: i.Button.Sizes.SMALL,
                        onClick: function() {
                            s.default.track(c.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
                                cta: "submit_music_app",
                                current_page: r.ApplicationDirectoryViews.SEARCH,
                                guild_id: t
                            }), (0, n.default)("https://dis.gd/music-search-page-inclusion")
                        },
                        color: i.Button.Colors.TRANSPARENT,
                        className: d.button,
                        children: o.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_CTA
                    })]
                })
            }
        },
        983616: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("77078"),
                n = l("782340"),
                s = l("357186");

            function r(e) {
                let {
                    imageSrc: t,
                    header: l,
                    description: r,
                    secondaryInfo: c,
                    mutualGuildCount: o,
                    ctaLabel: d,
                    onCtaClick: u,
                    children: m
                } = e, p = (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: s.topWrapper,
                        children: [(0, a.jsx)("div", {
                            className: s.imageContainer,
                            children: (0, a.jsx)("img", {
                                alt: "",
                                className: s.image,
                                src: t
                            })
                        }), (0, a.jsxs)("div", {
                            className: s.content,
                            children: [(0, a.jsxs)("div", {
                                className: s.header,
                                children: [(0, a.jsxs)("div", {
                                    className: s.info,
                                    children: [(0, a.jsx)(i.Heading, {
                                        className: s.name,
                                        variant: "heading-md/semibold",
                                        children: l
                                    }), null != o ? o : (0, a.jsx)(a.Fragment, {
                                        children: (0, a.jsxs)("div", {
                                            className: s.details,
                                            children: [(0, a.jsx)(i.Text, {
                                                tag: "span",
                                                color: "header-secondary",
                                                variant: "text-sm/medium",
                                                children: n.default.Messages.APP_DIRECTORY_MUSIC_CATEGORY
                                            }), null != c ? (0, a.jsxs)(a.Fragment, {
                                                children: [(0, a.jsx)(i.Text, {
                                                    tag: "span",
                                                    color: "interactive-muted",
                                                    variant: "text-sm/normal",
                                                    className: s.bullet,
                                                    children: "•"
                                                }), (0, a.jsx)(i.Text, {
                                                    tag: "span",
                                                    color: "header-secondary",
                                                    variant: "text-sm/medium",
                                                    children: c
                                                })]
                                            }) : null]
                                        })
                                    })]
                                }), null != u && null != d ? (0, a.jsx)(i.Button, {
                                    size: i.Button.Sizes.SMALL,
                                    onClick: u,
                                    className: s.button,
                                    children: d
                                }) : null]
                            }), null != r ? (0, a.jsx)(i.Text, {
                                className: s.listingDescription,
                                variant: "text-md/normal",
                                children: r
                            }) : null, (0, a.jsx)("div", {
                                className: s.children,
                                children: m
                            })]
                        })]
                    })
                });
                return (0, a.jsx)(i.FocusRing, {
                    children: (0, a.jsx)("div", {
                        className: s.listing,
                        children: p
                    })
                })
            }
        },
        46425: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return x
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("86666"),
                n = l("545158"),
                s = l("599110"),
                r = l("998944"),
                c = l("412707"),
                o = l("646186"),
                d = l("721908"),
                u = l("413989"),
                m = l("649135"),
                p = l("983616"),
                _ = l("49111"),
                h = l("782340"),
                f = l("950366");
            let C = new Map([
                    ["890343617762304070", {
                        imageSrc: l("311537")
                    }]
                ]),
                g = new Map,
                I = new Map([
                    [_.PlatformTypes.SPOTIFY, {
                        imageSrc: l("911871")
                    }]
                ]);

            function A(e) {
                var t, l;
                let {
                    result: i
                } = e, n = i.data, s = (0, d.default)({
                    application: n
                }), c = C.get(i.data.id);
                if (null == c) return null;
                let u = s.length > 0 ? (0, a.jsx)(r.default, {
                        application: i.data,
                        textVariant: "text-sm/semibold",
                        mutualGuilds: s,
                        mutualGuildShownMax: 3,
                        guildIconSize: r.GuildIconSize.SMALL,
                        compact: !0
                    }) : null,
                    m = null !== (l = null === (t = n.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== l ? l : 0,
                    _ = m > 0 ? h.default.Messages.APP_DIRECTORY_SHORT_GUILD_COUNT.format({
                        guildCount: m
                    }) : void 0;
                return (0, a.jsx)(p.default, {
                    imageSrc: c.imageSrc,
                    header: i.data.name,
                    description: i.data.description,
                    secondaryInfo: _,
                    ctaLabel: h.default.Messages.APPLICATION_ADD_TO_SERVER,
                    mutualGuildCount: u,
                    onCtaClick: () => (0, o.goToApplication)({
                        applicationId: n.id
                    })
                })
            }

            function E(e) {
                let {
                    result: t
                } = e, l = g.get(t.data.id);
                return null == l ? null : (0, a.jsx)(p.default, {
                    imageSrc: l.imageSrc,
                    header: t.data.name,
                    description: t.data.description,
                    secondaryInfo: h.default.Messages.APP_DIRECTORY_ACTIVITY_LABEL
                })
            }

            function v(e) {
                let t, l, i, {
                        result: r,
                        guildId: o
                    } = e,
                    d = I.get(r.data.name);
                return null == d ? null : (r.data.name === _.PlatformTypes.SPOTIFY && (t = h.default.Messages.APP_DIRECTORY_SPOTIFY_TITLE, l = h.default.Messages.APP_DIRECTORY_SPOTIFY_DESCRIPTION.format(), i = () => {
                    s.default.track(_.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
                        current_page: c.ApplicationDirectoryViews.SEARCH,
                        cta: "spotify",
                        guild_id: o
                    }), (0, n.default)("https://support.discord.com/hc/en-us/articles/360000167212-Discord-Spotify-Connection")
                }), null == t || null == l || null == i) ? null : (0, a.jsx)(p.default, {
                    imageSrc: d.imageSrc,
                    header: t,
                    description: l,
                    ctaLabel: h.default.Messages.LEARN_MORE,
                    onCtaClick: i,
                    secondaryInfo: h.default.Messages.APP_DIRECTORY_CONNECTION_LABEL
                })
            }

            function x(e) {
                let {
                    results: t,
                    guildId: l
                } = e;
                return (0, a.jsxs)("div", {
                    className: f.container,
                    children: [(0, a.jsx)(u.default, {}), (0, a.jsx)("div", {
                        className: f.list,
                        children: t.map((e, t) => {
                            let n = "".concat(t).concat(e.type);
                            if (e.type === i.ApplicationDirectorySearchResultType.APPLICATION) return (0, a.jsx)(A, {
                                result: e
                            }, n);
                            if (e.type === i.ApplicationDirectorySearchResultType.ACTIVITY_APPLICATION) return (0, a.jsx)(E, {
                                result: e
                            }, n);
                            if (e.type === i.ApplicationDirectorySearchResultType.CONNECTION) return (0, a.jsx)(v, {
                                guildId: l,
                                result: e
                            }, n)
                        })
                    }), (0, a.jsx)(m.default, {
                        guildId: l
                    })]
                })
            }
        },
        298557: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return ev
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("575482"),
                s = l.n(n),
                r = l("892445"),
                c = l.n(r),
                o = l("870647"),
                d = l.n(o),
                u = l("807403"),
                m = l("754013"),
                p = l("800090"),
                _ = l("498225"),
                h = l("912557"),
                f = l("769846"),
                C = l("77078"),
                g = l("549825"),
                I = l("590177"),
                A = l("180612"),
                E = l("798609"),
                v = l("612039"),
                x = l("545158"),
                R = l("816140"),
                T = l("650509"),
                N = l("913678"),
                P = l("462274"),
                j = l("69927"),
                y = l("861370"),
                O = l("978970"),
                S = l("393414"),
                L = l("485422"),
                D = l("915639"),
                M = l("271938"),
                b = l("471671"),
                Y = l("9074"),
                k = l("837899"),
                H = l("425190"),
                G = l("433487"),
                F = l("599110"),
                w = l("315102"),
                U = l("306160"),
                B = l("449008"),
                V = l("141302"),
                W = l("721698"),
                K = l("349503"),
                z = l("388647"),
                Z = l("598981"),
                q = l("136110"),
                X = l("146691"),
                J = l("682777"),
                Q = l("726902"),
                $ = l("998944"),
                ee = l("915267"),
                et = l("331793"),
                el = l("412707"),
                ea = l("646186"),
                ei = l("721908"),
                en = l("178350"),
                es = l("608129"),
                er = l("149462"),
                ec = l("370570"),
                eo = l("137246"),
                ed = l("750947"),
                eu = l("49111"),
                em = l("782340"),
                ep = l("466520"),
                e_ = l("103104");
            let eh = d.parserFor(er.default),
                ef = d.reactFor(d.ruleOutput(er.default, "react")),
                eC = (0, p.cssValueToNumber)(f.default.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
                eg = "redirect_to_support_server",
                eI = "start_application_install",
                eA = e => "".concat(location.protocol, "//").concat(location.host).concat(eu.Routes.APPLICATION_DIRECTORY_PROFILE(e)),
                eE = e => {
                    if (null == e) return null;
                    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
                    return null != t ? t[1] : null
                };

            function ev(e) {
                var t, n, r, o;
                let d, {
                        applicationId: p,
                        initialSection: f
                    } = e,
                    E = (0, el.useApplicationDirectoryHistory)(e => e.guildId),
                    k = (0, Z.default)(),
                    H = i.useRef(p),
                    er = i.useRef(!1),
                    eE = (0, _.useStateFromStores)([z.default], () => z.default.getFetchState({
                        applicationId: p,
                        guildId: E
                    }) === z.FetchState.FETCHING),
                    ev = i.useRef({
                        applicationId: void 0,
                        guildId: void 0
                    }),
                    {
                        similarApplications: eT,
                        similarLoadId: eN
                    } = (0, _.useStateFromStoresObject)([z.default], () => {
                        var e, t;
                        let l = {
                                applicationId: p,
                                guildId: E
                            },
                            a = z.default.getSimilarApplications(l);
                        return null == a ? a = z.default.getSimilarApplications(ev.current) : ev.current = l, {
                            similarApplications: null === (e = a) || void 0 === e ? void 0 : e.applications,
                            similarLoadId: null === (t = a) || void 0 === t ? void 0 : t.loadId
                        }
                    }),
                    eP = i.useMemo(() => null == eT ? void 0 : eT.slice(0, 3), [eT]),
                    ej = (0, _.useStateFromStores)([K.default], () => K.default.getApplicationFetchState(p)),
                    [ey, eO] = i.useState(void 0),
                    [eS, eL] = i.useState(null != f ? f : ed.ApplicationDirectoryProfileSections.GENERAL),
                    eD = (0, _.useStateFromStores)([b.default], () => b.default.isFocused()),
                    eM = (0, _.useStateFromStores)([D.default], () => D.default.locale),
                    eb = i.useRef(p),
                    eY = (0, _.useStateFromStores)([K.default], () => {
                        let e = K.default.getApplication(p);
                        return null == e ? e = K.default.getApplication(eb.current) : eb.current = p, e
                    }),
                    ek = (0, ei.default)({
                        application: eY
                    }),
                    eH = (0, _.useStateFromStores)([M.default], () => M.default.getSessionId());
                (0, j.usePageTitle)({
                    location: null == eY ? void 0 : eY.name
                });
                let eG = i.useCallback(async () => {
                    try {
                        var e;
                        let t = null == eY ? void 0 : null === (e = eY.guild) || void 0 === e ? void 0 : e.id;
                        if (null != t) {
                            (null == eY ? void 0 : eY.id) != null && F.default.track(eu.AnalyticEvents.APP_DIRECTORY_SUPPORT_SERVER_JOINED, {
                                application_id: eY.id,
                                guild_id: t
                            });
                            let e = {
                                page: eu.AnalyticsPages.APPLICATION_DIRECTORY
                            };
                            await (0, V.startLurking)(t, e, {
                                setsHistorySnapshot: !1
                            })
                        }
                    } catch {}
                }, [eY]);
                i.useEffect(() => {
                    if (null == eY) return;
                    let e = new URL(location.href);
                    if (k && null != eH && "true" === e.searchParams.get(eg)) {
                        e.searchParams.delete(eg);
                        let t = e.pathname + e.search;
                        (0, S.replaceWith)(t), eG()
                    }
                }, [k, eG, eH, eY]);
                let eF = i.useCallback(() => {
                    var e;
                    let t = null == eY ? void 0 : null === (e = eY.guild) || void 0 === e ? void 0 : e.id;
                    null != t && (k ? eG() : (0, J.redirectToLogin)({
                        [eg]: "true"
                    }))
                }, [eY, k, eG]);
                i.useEffect(() => {
                    null != p && (eS === ed.ApplicationDirectoryProfileSections.GENERAL ? (0, ea.replaceAppDirectoryURLWith)("".concat(eu.Routes.APPLICATION_DIRECTORY_PROFILE(p)).concat(location.search)) : (0, ea.replaceAppDirectoryURLWith)("".concat(eu.Routes.APPLICATION_DIRECTORY_PROFILE(p, eS.toLowerCase())).concat(location.search)))
                }, [p, eS]), i.useEffect(() => {
                    null != p && W.getApplication(p)
                }, [p]), i.useEffect(() => {
                    if ((null == eY ? void 0 : eY.directory_entry) != null) {
                        let e = eY.directory_entry,
                            t = null == e ? void 0 : e.popular_application_commands;
                        if (null != t) {
                            let e = t.map(e => (0, R.buildCommand)({
                                rootCommand: e,
                                command: e,
                                applicationId: e.application_id
                            }));
                            eO(e)
                        } else eO(void 0)
                    }
                }, [eY]), i.useEffect(() => {
                    null != p && H.current !== p && (eL(ed.ApplicationDirectoryProfileSections.GENERAL), H.current = void 0)
                }, [p]);
                let ew = w.default.getApplicationIconURL({
                        id: null !== (r = null == eY ? void 0 : eY.id) && void 0 !== r ? r : "-1",
                        icon: null == eY ? void 0 : eY.icon,
                        size: eC
                    }),
                    eU = (0, P.default)(ew, h.default.unsafe_rawColors.PRIMARY_800.css),
                    eB = (0, y.default)({
                        id: null !== (o = null == eY ? void 0 : eY.id) && void 0 !== o ? o : "",
                        label: em.default.Messages.COPY_ID_APPLICATION
                    }),
                    {
                        canInstall: eV,
                        install: eW
                    } = (0, X.useInstallApplication)(eY, E),
                    eK = null === (t = (0, el.getPreviousView)()) || void 0 === t ? void 0 : t.type;
                i.useEffect(() => {
                    (null == eY ? void 0 : eY.id) != null && F.default.track(eu.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
                        current_page: "product",
                        previous_page: eK,
                        application_id: eY.id,
                        guild_id: E,
                        shown_mutual_guilds_count: ek.length
                    })
                }, [null == eY ? void 0 : eY.id, E, ek]);
                let ez = i.useMemo(() => {
                        var e;
                        let t = null == eY ? void 0 : null === (e = eY.install_params) || void 0 === e ? void 0 : e.permissions;
                        if (null != t) return O.OrderedPermissions.filter(e => m.default.has(m.default.deserialize(t), e))
                    }, [null == eY ? void 0 : null === (n = eY.install_params) || void 0 === n ? void 0 : n.permissions]),
                    eZ = i.useCallback(e => {
                        eL(e), er.current = !0, (null == eY ? void 0 : eY.id) != null && F.default.track(eu.AnalyticEvents.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: eY.id,
                            guild_id: E,
                            tab_name: eS
                        })
                    }, [null == eY ? void 0 : eY.id, E, eS]),
                    eq = i.useMemo(() => {
                        var e, t, l;
                        return null !== (l = (null !== (t = null == eY ? void 0 : null === (e = eY.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(ex).filter(B.isNotNullish)) && void 0 !== l ? l : []
                    }, [eY]),
                    eX = i.useCallback((e, t) => {
                        if (e.type === eu.CarouselMediaTypes.IMG) {
                            let t = eq.filter(e => e.type === eu.CarouselMediaTypes.IMG),
                                i = t.findIndex(t => t === e);
                            if (i < 0) return;
                            let n = t.map(e => ({
                                src: (0, I.transformAssetURL)(e.src),
                                width: e.width,
                                height: e.height
                            }));
                            (0, C.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await l.el("100814").then(l.bind(l, "100814"));
                                return t => {
                                    let {
                                        ...l
                                    } = t;
                                    return (0, a.jsx)(e, {
                                        ...l,
                                        items: n,
                                        startingIndex: i,
                                        modalCarouselItemClassName: ep.appSlide
                                    })
                                }
                            })
                        }
                    }, [eq]),
                    eJ = i.useCallback(e => {
                        (null == eY ? void 0 : eY.id) != null && F.default.track(eu.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
                            current_page: "product",
                            category: e.name,
                            category_id: e.id,
                            application_id: eY.id,
                            guild_id: E
                        }), (0, ea.goToCategory)({
                            categoryId: e.id
                        })
                    }, [eY, E]);
                i.useEffect(() => {
                    null != p && W.getSimilarApplications({
                        applicationId: p,
                        guildId: E
                    })
                }, [p, E]);
                let eQ = i.useCallback(e => {
                        let {
                            application: t,
                            mutualGuilds: l
                        } = e;
                        (null == eY ? void 0 : eY.id) != null && F.default.track(eu.AnalyticEvents.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
                            current_page: "product",
                            application_id: eY.id,
                            suggested_application_id: t.id,
                            load_id: eN,
                            guild_id: E,
                            shown_mutual_guilds_count: l.length
                        }), (0, ea.goToApplication)({
                            applicationId: t.id
                        })
                    }, [null == eY ? void 0 : eY.id, eN, E]),
                    e$ = i.useCallback(() => {
                        null != eY && (0, x.default)(function(e, t) {
                            let l = "https://".concat(eu.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new"),
                                a = new URLSearchParams;
                            return a.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), a.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), a.append("tf_12094971213335", t.id), a.append("ticket_form_id", "12275528604823"), a.append("tf_subject", "App Directory Report ".concat(t.name, " ").concat(t.id)), "".concat(l, "?").concat(a.toString())
                        }(eM, eY))
                    }, [eM, eY]),
                    e0 = i.useCallback(e => (0, a.jsxs)(C.Menu, {
                        navId: "application-directory-profile",
                        "aria-label": em.default.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
                        onClose: e,
                        onSelect: void 0,
                        children: [(0, a.jsx)(C.MenuGroup, {
                            children: (0, a.jsx)(C.MenuItem, {
                                id: "report",
                                label: em.default.Messages.REPORT_APP,
                                color: "danger",
                                action: e$
                            })
                        }), null != eB ? (0, a.jsx)(C.MenuGroup, {
                            children: eB
                        }) : null]
                    }), [eB, e$]),
                    [e1, e7] = (0, v.default)(!1, 1e3),
                    e4 = i.useCallback(() => {
                        null != eY && (F.default.track(eu.AnalyticEvents.APP_SHARE_BUTTON_CLICKED, {
                            source: "product_page",
                            application_id: eY.id,
                            guild_id: E
                        }), (0, U.copy)(eA(eY.id)), e7(!0))
                    }, [eY, e7, E]);
                i.useEffect(() => {
                    let e = new URL(location.href);
                    if (k && "true" === e.searchParams.get(eI)) {
                        e.searchParams.delete(eI);
                        let t = e.pathname + e.search;
                        (0, S.replaceWith)(t), eW("product_page")
                    }
                }, [k, eW]);
                let e9 = i.useCallback(() => {
                        null != eY && (k ? eW("product_page") : (F.default.track(eu.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                            application_id: p,
                            guild_id: E,
                            auth_type: null != eY.custom_install_url ? "custom_url" : "in_app",
                            source: "product_page",
                            device_platform: u.isMobile ? "mobile_web" : "desktop_web"
                        }), (0, J.redirectToLogin)({
                            [eI]: "true"
                        })))
                    }, [eY, k, eW, p, E]),
                    {
                        applicationSubscriptionListingsShown: e8
                    } = (0, T.default)({
                        applicationId: null == eY ? void 0 : eY.id,
                        groupListingId: null == eY ? void 0 : eY.primary_sku_id,
                        guildId: E
                    }),
                    e5 = (null == eY ? void 0 : eY.id) === "936929561302675456",
                    [e2, e3] = i.useState(!1),
                    [e6, te] = i.useState(!1),
                    [tt, tl] = i.useState(!0),
                    ta = e => {
                        null != e && e3(e.scrollHeight > e.clientHeight)
                    },
                    ti = null != ez && ez.length > 0,
                    tn = (null == eY ? void 0 : eY.flags) != null,
                    ts = i.useMemo(() => {
                        var e, t;
                        let l = [],
                            i = !0;
                        switch (eS) {
                            case ed.ApplicationDirectoryProfileSections.GENERAL: {
                                let n = null == eY ? void 0 : null === (e = eY.directory_entry) || void 0 === e ? void 0 : e.detailed_description;
                                null != n && n.length > 0 ? (l.push((0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(C.Heading, {
                                        className: ep.sectionHeader,
                                        variant: "heading-md/semibold",
                                        children: em.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                    }), (0, a.jsx)("div", {
                                        ref: ta,
                                        className: s({
                                            [ep.descriptionClamp]: !e6,
                                            [ep.descriptionClampSafari]: !e6 && "Safari" === c.name
                                        }),
                                        children: (0, a.jsx)(Y.default, {
                                            className: ep.detailedDescription,
                                            parser: eh,
                                            output: ef,
                                            children: n
                                        })
                                    }), (e2 || e6) && (0, a.jsx)(eR, {
                                        isViewAll: e6,
                                        onToggle: () => {
                                            te(e => !e)
                                        }
                                    })]
                                })), i = !1) : (null == eY ? void 0 : null === (t = eY.directory_entry) || void 0 === t ? void 0 : t.short_description) !== void 0 ? l.push((0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(C.Heading, {
                                        className: ep.sectionHeader,
                                        variant: "heading-md/semibold",
                                        children: em.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                    }), (0, a.jsx)("span", {
                                        children: eY.directory_entry.short_description
                                    })]
                                })) : (null == eY ? void 0 : eY.description) != null && l.push((0, a.jsx)(L.default, {
                                    className: ep.description,
                                    userBio: eY.description
                                })), null != ey && ey.length > 0 && (l.push((0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(C.Heading, {
                                        className: ep.sectionHeader,
                                        variant: "heading-md/semibold",
                                        children: em.default.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
                                    }), (0, a.jsx)(en.default, {
                                        className: ep.commandList,
                                        commands: ey
                                    })]
                                })), i = !0);
                                break
                            }
                            case ed.ApplicationDirectoryProfileSections.IMAGES: {
                                let e = (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("img", {
                                        className: ep.errorImage,
                                        src: e_,
                                        "aria-hidden": !0,
                                        alt: ""
                                    }), (0, a.jsx)(C.Heading, {
                                        variant: "heading-xl/semibold",
                                        children: em.default.Messages.ERRORS_IMAGE_NOT_FOUND
                                    })]
                                });
                                eq.forEach((e, t) => {
                                    null != eY ? e.alt = em.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
                                        index: t + 1,
                                        totalImages: eq.length,
                                        name: eY.name
                                    }) : e.alt = em.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT
                                }), l.push((0, a.jsx)(A.default, {
                                    className: ep.carousel,
                                    themedPagination: !0,
                                    items: eq,
                                    autoplayInterval: 8e3,
                                    paused: !eD,
                                    videoAutoPlay: !0,
                                    onCurrentItemClick: eX,
                                    errorComponent: e,
                                    onImageLoad: e => {
                                        let {
                                            src: t,
                                            loadTimeMs: l
                                        } = e;
                                        null != l && null != eY && F.default.track(eu.AnalyticEvents.APP_DIRECTORY_CAROUSEL_IMAGE_LOADED, {
                                            application_id: eY.id,
                                            load_time_ms: l,
                                            src: t
                                        })
                                    }
                                }));
                                break
                            }
                            case ed.ApplicationDirectoryProfileSections.PREMIUM:
                                e8 && (null == eY ? void 0 : eY.primary_sku_id) != null && l.push((0, a.jsx)(N.default, {
                                    applicationId: eY.id,
                                    applicationPrimarySkuId: null == eY ? void 0 : eY.primary_sku_id,
                                    analyticsLocation: eu.AnalyticsLocations.APP_DIRECTORY_PROFILE,
                                    forcesTransitionToGuild: !0
                                }));
                                break;
                            case ed.ApplicationDirectoryProfileSections.PRIVACY:
                                ti && l.push((0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(C.Heading, {
                                        className: ep.sectionHeader,
                                        variant: "heading-md/semibold",
                                        children: em.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
                                    }), (0, a.jsx)(g.default, {
                                        className: ep.commandList,
                                        grantedPermissions: ez,
                                        grantedPermissionsHeader: em.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
                                    })]
                                })), tn && l.push((0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(C.Heading, {
                                        className: ep.sectionHeader,
                                        variant: "heading-md/semibold",
                                        children: em.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
                                    }), (0, a.jsx)(es.default, {
                                        application: eY
                                    })]
                                }))
                        }
                        return tl(i), l.map((e, t) => (0, a.jsx)("div", {
                            className: ep.section,
                            children: e
                        }, t))
                    }, [eY, e8, eq, ey, ez, eX, eD, eS, e6, e2, ti, tn]),
                    tr = i.useMemo(() => {
                        let e = H.current === p,
                            t = e && !er.current,
                            l = [{
                                sectionName: ed.ApplicationDirectoryProfileSections.GENERAL,
                                sectionText: em.default.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL
                            }];
                        return eq.length > 0 && (l.push({
                            sectionName: ed.ApplicationDirectoryProfileSections.IMAGES,
                            sectionText: em.default.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES
                        }), t && f === ed.ApplicationDirectoryProfileSections.IMAGES && eL(f)), e8 && (l.push({
                            sectionName: ed.ApplicationDirectoryProfileSections.PREMIUM,
                            sectionText: em.default.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM
                        }), t && f === ed.ApplicationDirectoryProfileSections.PREMIUM && eL(f)), (ti || tn) && (l.push({
                            sectionName: ed.ApplicationDirectoryProfileSections.PRIVACY,
                            sectionText: em.default.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY
                        }), t && f === ed.ApplicationDirectoryProfileSections.PRIVACY && eL(f)), l
                    }, [eq.length, e8, ti, tn, f, p]);
                return d = null == eY ? null == ej || ej === K.FetchState.FETCHING ? (0, a.jsx)(ee.default, {
                    loading: ej === K.FetchState.FETCHING
                }) : (0, a.jsx)("div", {
                    className: ep.page,
                    children: (0, a.jsxs)("div", {
                        className: ep.emptyContainer,
                        children: [(0, a.jsx)("img", {
                            className: ep.emptyImage,
                            src: e_,
                            alt: ""
                        }), (0, a.jsx)(C.Heading, {
                            variant: "heading-xl/semibold",
                            children: em.default.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
                        })]
                    })
                }) : (0, a.jsxs)(ee.default, {
                    loading: ej === K.FetchState.FETCHING,
                    children: [(0, a.jsx)("div", {
                        style: {
                            backgroundColor: eU
                        },
                        className: ep.headerBanner
                    }), (0, a.jsxs)("div", {
                        className: ep.page,
                        children: [(0, a.jsxs)("div", {
                            className: ep.header,
                            children: [(0, a.jsxs)("div", {
                                className: ep.headerSidebar,
                                children: [(0, a.jsx)("img", {
                                    className: ep.headerIcon,
                                    alt: "",
                                    "aria-hidden": !0,
                                    src: ew,
                                    width: eC,
                                    height: eC
                                }), (0, a.jsx)($.default, {
                                    application: eY,
                                    mutualGuilds: ek,
                                    mutualGuildShownMax: 3,
                                    compact: !0
                                })]
                            }), (0, a.jsxs)("div", {
                                className: ep.headerContent,
                                children: [(0, a.jsxs)("div", {
                                    className: ep.headerNameAndButtons,
                                    children: [(0, a.jsxs)("div", {
                                        className: ep.headerNameAndIcon,
                                        children: [(0, a.jsx)(C.Heading, {
                                            className: ep.name,
                                            variant: "heading-xxl/semibold",
                                            children: eY.name
                                        }), e8 && (0, a.jsx)(C.Tooltip, {
                                            tooltipClassName: ep.premiumIconTooltip,
                                            text: em.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                            children: e => (0, a.jsx)("img", {
                                                ...e,
                                                alt: em.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                className: ep.premiumIcon,
                                                src: l("92640")
                                            })
                                        }), e5 && (0, a.jsx)(et.default, {
                                            className: ep.partnerBadge
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: s(ep.buttons),
                                        children: [(0, a.jsx)(C.Button, {
                                            onClick: e4,
                                            color: C.Button.Colors.PRIMARY,
                                            children: e1 ? em.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : em.default.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
                                        }), (0, a.jsx)(C.Button, {
                                            color: C.Button.Colors.BRAND,
                                            onClick: e9,
                                            disabled: !eV,
                                            children: em.default.Messages.APP_DIRECTORY_PROFILE_ADD_BUTTON
                                        }), (0, a.jsx)(C.Popout, {
                                            renderPopout: e => {
                                                let {
                                                    closePopout: t
                                                } = e;
                                                return e0(t)
                                            },
                                            position: "left",
                                            align: "top",
                                            animation: C.Popout.Animation.NONE,
                                            children: e => (0, a.jsx)(C.Clickable, {
                                                className: ep.overflow,
                                                ...e,
                                                children: (0, a.jsx)(G.default, {
                                                    width: 20,
                                                    height: 20,
                                                    className: ep.iconInteractive
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, a.jsx)(eo.default, {
                                    activeSection: eS,
                                    setSection: eZ,
                                    shownSections: tr
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: ep.contentContainer,
                            children: [(0, a.jsxs)("div", {
                                className: ep.content,
                                children: [ts, null != eP && eP.length > 0 ? (0, a.jsxs)(a.Fragment, {
                                    children: [tt && (0, a.jsx)("div", {
                                        className: ep.separator
                                    }), (0, a.jsxs)("div", {
                                        className: ep.section,
                                        children: [(0, a.jsx)(C.Heading, {
                                            className: ep.relatedHeader,
                                            variant: "eyebrow",
                                            children: em.default.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
                                        }), (0, a.jsx)(ee.default, {
                                            loading: eE,
                                            children: (0, a.jsx)(Q.default, {
                                                applications: eP,
                                                onViewOne: eQ
                                            })
                                        })]
                                    })]
                                }) : null]
                            }), (0, a.jsx)(ec.default, {
                                className: ep.sidebar,
                                application: eY,
                                guildId: E,
                                onViewCategory: eJ,
                                onClickGuildWidget: eF
                            })]
                        })]
                    })]
                }), (0, a.jsx)(q.default, {
                    children: d
                })
            }

            function ex(e) {
                switch (e.type) {
                    case E.ApplicationDirectoryEntryCarouselItemType.MEDIA_PROXY:
                        var t;
                        let l = null !== (t = e.proxy_url) && void 0 !== t ? t : e.url;
                        return {
                            type: eu.CarouselMediaTypes.IMG, width: 0, height: 0, src: l
                        };
                    case E.ApplicationDirectoryEntryCarouselItemType.YOUTUBE:
                        let a = eE(e.url);
                        if (null != a) return {
                            type: eu.CarouselMediaTypes.YOUTUBE_VIDEO,
                            youtubeVideoId: a
                        }
                }
                return console.warn("Unsupported carousel item", e), null
            }
            let eR = e => {
                    let t, {
                        onToggle: l,
                        isViewAll: i
                    } = e;
                    return t = i ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(C.Text, {
                            className: ep.showMoreButtonText,
                            variant: "eyebrow",
                            children: em.default.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
                        }), (0, a.jsx)(H.default, {
                            className: ep.showMoreButtonIcon
                        })]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(C.Text, {
                            className: ep.showMoreButtonText,
                            variant: "eyebrow",
                            children: em.default.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
                        }), (0, a.jsx)(k.default, {
                            className: ep.showMoreButtonIcon
                        })]
                    }), (0, a.jsx)(eT, {
                        children: (0, a.jsx)(C.Button, {
                            look: C.Button.Looks.BLANK,
                            color: C.Button.Colors.TRANSPARENT,
                            size: C.Button.Sizes.NONE,
                            className: ep.showMoreButton,
                            innerClassName: ep.showMoreButtonInner,
                            onClick: l,
                            children: t
                        })
                    })
                },
                eT = e => {
                    let {
                        className: t,
                        contentClassName: l,
                        children: i
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: s([ep.dividerContainer, t]),
                        children: [(0, a.jsx)("div", {
                            className: ep.divider
                        }), null != i ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: s(ep.contentDivider, l),
                                children: i
                            }), (0, a.jsx)("div", {
                                className: ep.divider
                            })]
                        }) : null]
                    })
                }
        },
        178350: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("575482"),
                n = l.n(i),
                s = l("77078"),
                r = l("406291"),
                c = l("137801");

            function o(e) {
                let {
                    commands: t,
                    className: l
                } = e;
                return (0, a.jsx)("div", {
                    className: n(c.list, l),
                    children: t.map(e => (0, a.jsxs)("div", {
                        className: c.row,
                        children: [(0, a.jsxs)(s.Text, {
                            className: c.commandName,
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: [r.COMMAND_SENTINEL, e.displayName]
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: e.displayDescription
                        })]
                    }, e.id))
                })
            }
        },
        608129: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("575482"),
                s = l.n(n),
                r = l("77078"),
                c = l("291373"),
                o = l("109264"),
                d = l("155207"),
                u = l("849483"),
                m = l("701909"),
                p = l("128259"),
                _ = l("49111"),
                h = l("782340"),
                f = l("650830");
            let C = m.default.getArticleURL(_.HelpdeskArticles.BOT_DATA_ACCESS);

            function g(e) {
                let {
                    icon: t,
                    heading: l,
                    body: i
                } = e;
                return (0, a.jsxs)("li", {
                    className: f.intentContainer,
                    children: [(0, a.jsx)("div", {
                        children: (0, a.jsx)(t, {
                            height: "24",
                            width: "24"
                        })
                    }), (0, a.jsxs)("div", {
                        className: f.intentTextContainer,
                        children: [(0, a.jsx)("div", {
                            children: (0, a.jsx)(r.Heading, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: l
                            })
                        }), (0, a.jsx)("div", {
                            className: f.intentBody,
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: i
                            })
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    application: t
                } = e, {
                    hasMessageContent: l,
                    hasGuildPresences: n,
                    hasGuildMembers: m,
                    hasIntents: _
                } = (0, c.useBotDataAccess)({
                    flags: null == t ? void 0 : t.flags
                }), I = i.useCallback(() => {
                    (null == t ? void 0 : t.privacy_policy_url) != null && (0, p.handleClick)({
                        href: t.privacy_policy_url
                    })
                }, [null == t ? void 0 : t.privacy_policy_url]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [_ && (0, a.jsx)("div", {
                        className: f.intentsListHeading,
                        children: (0, a.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: h.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_INTENTS_LIST_HEADING
                        })
                    }), (0, a.jsxs)("div", {
                        className: f.intentsContainer,
                        children: [_ && (0, a.jsxs)("ul", {
                            className: f.intentsList,
                            children: [l && (0, a.jsx)(g, {
                                icon: o.default,
                                heading: h.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_HEADING,
                                body: h.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_BODY
                            }), n && (0, a.jsx)(g, {
                                icon: u.default,
                                heading: h.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_HEADING,
                                body: h.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_BODY
                            }), m && (0, a.jsx)(g, {
                                icon: d.default,
                                heading: h.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_HEADING,
                                body: h.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_BODY
                            })]
                        }), (0, a.jsxs)("div", {
                            className: s({
                                [f.hasSeparator]: _
                            }),
                            children: [(0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: h.default.Messages.BOTS_DATA_ACCESS_BASELINE.format({
                                    helpCenterUrl: C
                                })
                            }), (null == t ? void 0 : t.privacy_policy_url) != null && (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                className: f.privacyPolicy,
                                children: h.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_PRIVACY_POLICY_V2.format({
                                    onClick: I
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        519359: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return A
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("575482"),
                n = l.n(i),
                s = l("77078"),
                r = l("841098"),
                c = l("407063"),
                o = l("813006"),
                d = l("580357"),
                u = l("109024"),
                m = l("781896"),
                p = l("587974"),
                _ = l("315102"),
                h = l("49111"),
                f = l("782340"),
                C = l("435612"),
                g = l("68422"),
                I = l("578817");

            function A(e) {
                let {
                    guild: t,
                    className: l,
                    onClick: i
                } = e, A = (0, r.default)(), E = new o.default({
                    name: t.name,
                    icon: t.icon
                }), v = _.default.getGuildDiscoverySplashURL({
                    id: t.id,
                    splash: t.discovery_splash,
                    size: 192 * (0, c.getDevicePixelRatio)()
                }), x = null != v ? v : function(e) {
                    switch (e) {
                        case h.ThemeTypes.DARK:
                            return g;
                        case h.ThemeTypes.LIGHT:
                            return I
                    }
                }(A), R = _.default.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 50
                });
                return (0, a.jsxs)(s.Clickable, {
                    className: n(C.card, l),
                    onClick: i,
                    "aria-label": f.default.Messages.APP_DIRECTORY_JOIN_SERVER_LABEL,
                    children: [(0, a.jsxs)("div", {
                        className: C.cardHeader,
                        children: [(0, a.jsx)("img", {
                            src: x,
                            alt: "",
                            className: C.splashImage
                        }), (0, a.jsx)("div", {
                            className: C.guildIcon,
                            children: (0, a.jsx)(p.default, {
                                mask: p.default.Masks.AVATAR_DEFAULT,
                                width: 58,
                                height: 58,
                                children: (0, a.jsx)("div", {
                                    className: C.iconMask,
                                    children: (0, a.jsx)(u.default, {
                                        className: C.icon,
                                        iconSrc: R,
                                        guild: E,
                                        size: u.default.Sizes.LARGE
                                    })
                                })
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: C.cardDetails,
                        children: [(0, a.jsxs)("div", {
                            className: C.guildNameWrapper,
                            children: [(0, a.jsx)(d.default, {
                                className: C.guildBadge,
                                guild: t,
                                tooltipColor: s.Tooltip.Colors.PRIMARY
                            }), (0, a.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                className: C.guildName,
                                children: t.name
                            })]
                        }), (0, a.jsx)(s.Text, {
                            className: C.guildDescription,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            lineClamp: 2,
                            children: t.description
                        }), (0, a.jsx)("div", {
                            className: C.memberInfo,
                            children: (0, a.jsxs)("div", {
                                className: C.memberCountWrapper,
                                children: [(0, a.jsx)(m.default, {
                                    className: C.memberCountIcon,
                                    width: "16",
                                    height: "16"
                                }), (0, a.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: f.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                        count: t.approximate_member_count
                                    })
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        149462: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("77078"),
                n = l("970728"),
                s = l("824021"),
                r = l("139514"),
                c = l("312016"),
                o = l("844659"),
                d = l("9074");
            let u = /^discord.gg\/[a-zA-Z0-9-]+/,
                m = {
                    ...d.default.rules,
                    heading: {
                        ...s.Rules.heading
                    },
                    inviteLink: {
                        order: d.default.rules.link.order + 1,
                        match: (e, t) => t.inline ? u.exec(e) : null,
                        parse: (e, t, l) => {
                            let a = (0, c.findCodedLink)(e[0]);
                            return null == a || a.type !== r.CodedLinkType.INVITE ? {
                                type: "text",
                                content: e[0]
                            } : {
                                type: "inviteLink",
                                content: [{
                                    type: "text",
                                    content: e[0]
                                }],
                                onClick: () => {
                                    var e;
                                    n.default.acceptInviteAndTransitionToInviteChannel({
                                        inviteKey: a.code,
                                        context: {
                                            location: "Application Directory"
                                        }
                                    }), null === (e = l.closeModal) || void 0 === e || e.call(l)
                                }
                            }
                        },
                        react: (e, t, l) => (0, a.jsx)(i.Anchor, {
                            onClick: t => {
                                t.preventDefault(), e.onClick()
                            },
                            children: (0, o.smartOutput)(e, t, l)
                        }, l.key)
                    }
                };
            var p = m
        },
        370570: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("575482"),
                s = l.n(n),
                r = l("819855"),
                c = l("77078"),
                o = l("340616"),
                d = l("841098"),
                u = l("376556"),
                m = l("83900"),
                p = l("45029"),
                _ = l("599110"),
                h = l("599994"),
                f = l("598981"),
                C = l("519359"),
                g = l("675945"),
                I = l("49111"),
                A = l("782340"),
                E = l("176959");
            let v = A.default.getAvailableLocales();

            function x(e) {
                var t, l, i;
                let {
                    onClick: n,
                    url: s,
                    children: c
                } = e, o = (0, d.default)(), p = u.default.getByUrl(s), _ = (0, r.isThemeDark)(o) ? null == p ? void 0 : null === (t = p.icon) || void 0 === t ? void 0 : t.darkSVG : null == p ? void 0 : null === (l = p.icon) || void 0 === l ? void 0 : l.lightSVG;
                return (0, a.jsx)(R, {
                    icon: void 0 === _ ? m.default : void 0,
                    imageSrc: _,
                    onClick: n,
                    url: s,
                    type: null !== (i = null == p ? void 0 : p.name) && void 0 !== i ? i : "website",
                    children: c
                })
            }

            function R(e) {
                let {
                    icon: t,
                    imageSrc: l,
                    iconColor: i,
                    url: n,
                    type: r,
                    children: d,
                    onClick: u
                } = e, m = (0, f.default)(), p = null;
                null != t ? p = (0, a.jsx)(t, {
                    className: E.listIcon,
                    color: i,
                    width: 20,
                    height: 20
                }) : null != l && (p = (0, a.jsx)("img", {
                    className: E.listImage,
                    src: l,
                    alt: ""
                }));
                let _ = (0, a.jsxs)(a.Fragment, {
                    children: [p, (0, a.jsx)(c.Text, {
                        className: E.listText,
                        variant: "text-md/normal",
                        selectable: !0,
                        children: d
                    })]
                });
                return (0, a.jsx)(o.default, {
                    href: n,
                    className: s(E.listItem, E.linkItem),
                    onClick: () => (u(n, r), !1),
                    trusted: !m,
                    useDefaultUnderlineStyles: !1,
                    children: _
                })
            }

            function T(e) {
                var t, l, n;
                let {
                    application: r,
                    guildId: o,
                    className: d,
                    onViewCategory: u,
                    onClickGuildWidget: f
                } = e, [T, N] = i.useState(null), P = [], j = null !== (l = null == r ? void 0 : null === (t = r.directory_entry) || void 0 === t ? void 0 : t.external_urls) && void 0 !== l ? l : [];
                i.useEffect(() => {
                    var e;
                    if ((null === (e = r.directory_entry) || void 0 === e ? void 0 : e.supported_locales) !== void 0) {
                        let e = new Set(r.directory_entry.supported_locales),
                            t = v.filter(t => e.has(t.value));
                        N(t.map(e => e.localizedName))
                    }
                }, [r.directory_entry]);
                let y = (e, t) => {
                    _.default.track(I.AnalyticEvents.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED, {
                        application_id: r.id,
                        guild_id: o,
                        type: t,
                        url: e
                    })
                };
                return null != r.categories && r.categories.length > 0 && P.push((0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(c.Heading, {
                        className: E.sectionHeader,
                        variant: "eyebrow",
                        children: A.default.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING
                    }), (0, a.jsx)("div", {
                        className: E.categories,
                        children: (null !== (n = r.categories) && void 0 !== n ? n : []).map(e => {
                            let t = new URLSearchParams;
                            return t.set("category_id", e.id.toString()), (0, a.jsx)(h.default, {
                                href: "".concat(I.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(t),
                                children: (0, a.jsx)(c.Clickable, {
                                    className: E.category,
                                    onClick: () => u(e),
                                    children: (0, a.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        color: "header-primary",
                                        children: e.name
                                    })
                                })
                            }, e.id)
                        })
                    })]
                })), null != T && T.length > 0 && P.push((0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(c.Heading, {
                        className: E.sectionHeader,
                        variant: "eyebrow",
                        children: A.default.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING
                    }), (0, a.jsx)(g.default, {
                        supportedLanguages: T
                    })]
                })), (null != r.terms_of_service_url || null != r.privacy_policy_url || j.length > 0) && P.push((0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(c.Heading, {
                        className: E.sectionHeader,
                        variant: "eyebrow",
                        children: A.default.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING
                    }), j.map((e, t) => (0, a.jsx)(x, {
                        url: e.url,
                        onClick: y,
                        children: e.name
                    }, t)), null != r.terms_of_service_url ? (0, a.jsx)(R, {
                        icon: m.default,
                        onClick: y,
                        url: r.terms_of_service_url,
                        type: "tos",
                        children: A.default.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK
                    }) : null, null != r.privacy_policy_url ? (0, a.jsx)(R, {
                        icon: p.default,
                        onClick: y,
                        url: r.privacy_policy_url,
                        type: "policy",
                        children: A.default.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK
                    }) : null]
                })), null != r.guild && r.guild.features.includes(I.GuildFeatures.DISCOVERABLE) && P.push((0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(c.Heading, {
                        className: E.sectionHeader,
                        variant: "eyebrow",
                        children: A.default.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING
                    }), (0, a.jsx)(C.default, {
                        guild: r.guild,
                        onClick: f
                    })]
                })), (0, a.jsx)("div", {
                    className: s(E.sidebar, d),
                    children: P.length > 0 ? (0, a.jsx)(a.Fragment, {
                        children: P.map((e, t) => (0, a.jsx)("div", {
                            className: E.section,
                            children: e
                        }, t))
                    }) : null
                })
            }
        },
        675945: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("575482"),
                n = l.n(i),
                s = l("77078"),
                r = l("922372");

            function c(e) {
                let {
                    supportedLanguages: t
                } = e;
                return (0, a.jsx)("ul", {
                    className: r.outerContainer,
                    children: t.map(e => (0, a.jsx)("li", {
                        className: n(r.innerContainer, r.languageItem),
                        children: (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: e
                        })
                    }, e))
                })
            }
        },
        137246: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("77078"),
                n = l("696638");

            function s(e) {
                let {
                    activeSection: t,
                    setSection: l,
                    shownSections: s
                } = e;
                return (0, a.jsx)(i.TabBar, {
                    selectedItem: t,
                    type: "top",
                    onItemSelect: l,
                    className: n.tabBar,
                    children: s.map(e => (0, a.jsx)(i.TabBar.Item, {
                        id: e.sectionName,
                        className: n.tabBarItem,
                        children: e.sectionText
                    }, e.sectionName))
                })
            }
        },
        176162: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("427964"),
                s = l.n(n),
                r = l("300583"),
                c = l.n(r),
                o = l("716984"),
                d = l("947980"),
                u = l("86666"),
                m = l("372242"),
                p = l("744196"),
                _ = l("77078"),
                h = l("302437"),
                f = l("599110"),
                C = l("721698"),
                g = l("599994"),
                I = l("831109"),
                A = l("856894"),
                E = l("136110"),
                v = l("682777"),
                x = l("898656"),
                R = l("619288"),
                T = l("915267"),
                N = l("436846"),
                P = l("46425"),
                j = l("412707"),
                y = l("646186"),
                O = l("718765"),
                S = l("49111"),
                L = l("733260"),
                D = l("968579");

            function M() {
                var e;
                let t;
                let l = (0, j.useApplicationDirectoryHistory)(e => e.guildId),
                    n = (0, p.default)([I.default], () => I.default.getCategories()),
                    r = (0, o.useLocation)(),
                    {
                        queryParam: c,
                        pageParam: d,
                        categoryIdParam: _
                    } = i.useMemo(() => {
                        let e = new URLSearchParams(r.search);
                        return {
                            queryParam: e.get("q"),
                            pageParam: e.get("page"),
                            categoryIdParam: e.get("category_id")
                        }
                    }, []),
                    [h, g] = i.useState(null != d ? Number(d) : 1),
                    [x, M] = i.useState(null != c ? c : ""),
                    [Y, k] = i.useState(null !== (e = Number(_)) && void 0 !== e ? e : v.ALL_CATEGORY_ID),
                    H = i.useMemo(() => null == n ? void 0 : n.find(e => e.id === Y), [n, Y]),
                    G = i.useCallback(e => {
                        k(e.id), g(1)
                    }, []),
                    F = i.useCallback(e => {
                        M(e), g(1), 0 === e.length && k(v.ALL_CATEGORY_ID)
                    }, []),
                    w = i.useCallback(e => {
                        var t, l;
                        let {
                            query: a,
                            categoryId: i,
                            page: n
                        } = e, s = new URLSearchParams(r.search);
                        "" === a ? s.delete("q") : s.set("q", a), i === v.ALL_CATEGORY_ID ? s.delete("category_id") : s.set("category_id", null !== (t = null == i ? void 0 : i.toString()) && void 0 !== t ? t : ""), 1 === n ? s.delete("page") : s.set("page", null !== (l = null == n ? void 0 : n.toString()) && void 0 !== l ? l : ""), (0, y.replaceAppDirectoryURLWith)("".concat(S.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(s.toString()))
                    }, [r.search]),
                    U = i.useMemo(() => s.debounce(w, 400), [w]);
                i.useEffect(() => {
                    U({
                        query: x,
                        categoryId: Y,
                        page: h
                    })
                }, [U, x, Y, h]);
                let B = (0, p.default)([A.default], () => A.default.getFetchState({
                        query: x,
                        guildId: l,
                        page: h,
                        categoryId: Y
                    })),
                    V = i.useRef({
                        query: "",
                        guildId: void 0,
                        page: void 0,
                        categoryId: void 0
                    }),
                    W = (0, p.useStateFromStoresObject)([A.default], () => {
                        let e = A.default.getSearchResults({
                            query: x,
                            guildId: l
                        });
                        return null != e ? {
                            [v.ALL_CATEGORY_ID]: e.totalCount,
                            ...e.countsByCategory
                        } : {}
                    }),
                    {
                        pageResults: K,
                        pageCount: z,
                        searchResultsType: Z,
                        loadId: q
                    } = (0, p.useStateFromStoresObject)([A.default], () => {
                        var e, t, a, i, n, s;
                        let r = {
                                query: x,
                                guildId: l,
                                page: h,
                                categoryId: Y
                            },
                            c = A.default.getSearchResults(r);
                        return null == c ? c = A.default.getSearchResults(V.current) : V.current = r, {
                            pageResults: null === (e = c) || void 0 === e ? void 0 : e.results,
                            pageCount: null !== (n = null === (t = c) || void 0 === t ? void 0 : t.totalPages) && void 0 !== n ? n : 0,
                            searchResultsType: null !== (s = null === (a = c) || void 0 === a ? void 0 : a.type) && void 0 !== s ? s : m.ApplicationDirectorySearchType.SEARCH_RESULTS,
                            loadId: null === (i = c) || void 0 === i ? void 0 : i.loadId
                        }
                    }),
                    X = i.useMemo(() => null == K ? void 0 : K.filter(e => !(Z === m.ApplicationDirectorySearchType.SEARCH_RESULTS && e.type !== u.ApplicationDirectorySearchResultType.APPLICATION)), [K, Z]),
                    J = i.useRef(null),
                    Q = (0, j.getCurrentView)(),
                    $ = i.useCallback(e => {
                        f.default.track(S.AnalyticEvents.APP_DIRECTORY_SEARCHED, {
                            search_term: x,
                            num_results: e,
                            current_page: null == Q ? void 0 : Q.type,
                            result_page: h,
                            category: null == H ? void 0 : H.name,
                            category_id: null == H ? void 0 : H.id,
                            guild_id: l
                        })
                    }, [null == H ? void 0 : H.id, null == H ? void 0 : H.name, h, l, x, Q]),
                    ee = i.useCallback(e => {
                        let {
                            query: t,
                            page: l,
                            activeCategoryId: a,
                            onSuccessCallback: i,
                            guildId: n,
                            fetchCounts: s
                        } = e;
                        s && C.search({
                            query: t,
                            guildId: n
                        }), C.search({
                            query: t,
                            guildId: n,
                            options: {
                                page: l,
                                categoryId: a
                            },
                            onSuccessCallback: i
                        }), J.current = t
                    }, []),
                    [et] = i.useState(() => s.debounce(ee, 400, {
                        leading: !1,
                        trailing: !0
                    })),
                    el = i.useCallback(e => {
                        g(e)
                    }, [g]),
                    ea = i.useCallback(e => {
                        let {
                            application: t,
                            mutualGuilds: a
                        } = e;
                        f.default.track(S.AnalyticEvents.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                            current_page: j.ApplicationDirectoryViews.SEARCH,
                            application_id: t.id,
                            load_id: q,
                            search_term: x,
                            guild_id: l,
                            shown_mutual_guilds_count: a.length
                        }), (0, y.goToApplication)({
                            applicationId: t.id
                        })
                    }, [q, x, l]);
                i.useEffect(() => {
                    ee({
                        query: x,
                        page: h,
                        activeCategoryId: Y,
                        guildId: l,
                        fetchCounts: x !== J.current,
                        onSuccessCallback: $
                    })
                }, [ee, H, l, h]), i.useEffect(() => {
                    et({
                        query: x,
                        page: h,
                        activeCategoryId: Y,
                        guildId: l,
                        fetchCounts: x !== J.current,
                        onSuccessCallback: $
                    })
                }, [x, et]);
                let ei = i.useMemo(() => Object.keys(W).length > 0, [W]);
                return null != X && 0 === z || B === A.FetchState.ERROR ? t = (0, a.jsx)(R.default, {
                    category: H,
                    onViewAll: () => {
                        g(1), k(v.ALL_CATEGORY_ID)
                    }
                }) : null != X && X.length > 0 && Z === m.ApplicationDirectorySearchType.SEARCH_RESULTS ? t = (0, a.jsx)(b, {
                    items: X,
                    pageCount: z,
                    currentPage: h,
                    showPrimaryCategory: Y === v.ALL_CATEGORY_ID,
                    onItemClick: ea,
                    onChangePage: el
                }) : null != X && X.length > 0 && Z === m.ApplicationDirectorySearchType.MUSIC && (t = (0, a.jsx)(P.default, {
                    guildId: l,
                    results: X
                })), (0, a.jsx)(E.default, {
                    children: (0, a.jsxs)("div", {
                        className: L.page,
                        children: [(0, a.jsxs)("div", {
                            className: L.sidebar,
                            children: [(0, a.jsx)("img", {
                                src: D,
                                alt: "",
                                className: L.sidebarImage
                            }), (0, a.jsx)(O.default, {
                                className: L.categoryList,
                                countsByCategory: ei ? W : void 0,
                                currentCategoryId: Y,
                                onView: G
                            })]
                        }), (0, a.jsxs)("div", {
                            className: L.content,
                            children: [(0, a.jsx)(N.default, {
                                query: x,
                                onChange: F
                            }), (0, a.jsx)(T.default, {
                                loading: B === A.FetchState.FETCHING,
                                children: (0, a.jsx)("div", {
                                    className: L.contentContainer,
                                    children: t
                                })
                            })]
                        })]
                    })
                })
            }

            function b(e) {
                let {
                    items: t,
                    currentPage: l,
                    pageCount: n,
                    showPrimaryCategory: s,
                    onItemClick: r,
                    onChangePage: c
                } = e, o = (0, h.default)("application-directory-search");
                return (0, a.jsxs)(i.Fragment, {
                    children: [(0, a.jsx)(d.ListNavigatorProvider, {
                        navigator: o,
                        children: (0, a.jsx)(d.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: l,
                                    ...i
                                } = e;
                                return (0, a.jsx)("ul", {
                                    ref: l,
                                    ...i,
                                    children: t.map(e => {
                                        if (e.type === u.ApplicationDirectorySearchResultType.APPLICATION) {
                                            var t;
                                            let l;
                                            let i = e.data;
                                            return (null === (t = i.directory_entry) || void 0 === t ? void 0 : t.short_description) != null && i.directory_entry.short_description.length > 0 ? l = i.directory_entry.short_description : null != i.description && i.description.length > 0 && (l = i.description), (0, a.jsx)(g.default, {
                                                href: S.Routes.APPLICATION_DIRECTORY_PROFILE(i.id),
                                                children: (0, a.jsx)(x.default, {
                                                    className: L.listing,
                                                    childrenClassName: L.listingDetails,
                                                    application: i,
                                                    onView: e => {
                                                        let {
                                                            mutualGuilds: t
                                                        } = e;
                                                        return r({
                                                            application: i,
                                                            mutualGuilds: t
                                                        })
                                                    },
                                                    showMutualGuilds: !0,
                                                    showPrimaryCategory: s,
                                                    source: "search",
                                                    children: null != l ? (0, a.jsx)(_.Text, {
                                                        className: L.listingDescription,
                                                        variant: "text-md/normal",
                                                        lineClamp: 3,
                                                        children: l
                                                    }) : null
                                                })
                                            }, i.id)
                                        }
                                    })
                                })
                            }
                        })
                    }), (0, a.jsx)(_.Paginator, {
                        currentPage: l,
                        totalCount: Math.min(7 * n, 700),
                        pageSize: 7,
                        onPageChange: c,
                        disablePaginationGap: !0
                    })]
                })
            }
            c.shim()
        },
        718765: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var a = l("920040"),
                i = l("773670"),
                n = l("575482"),
                s = l.n(n),
                r = l("744196"),
                c = l("77078"),
                o = l("599110"),
                d = l("599994"),
                u = l("831109"),
                m = l("682777"),
                p = l("412707"),
                _ = l("49111"),
                h = l("690225");

            function f(e) {
                let {
                    currentCategoryId: t,
                    className: l,
                    countsByCategory: n,
                    onView: f
                } = e, C = (0, p.useApplicationDirectoryHistory)(e => e.guildId), g = (0, r.default)([u.default], () => u.default.getCategories()), I = i.useMemo(() => {
                    let e = [(0, m.getAllCategory)(), ...g];
                    return e
                }, [g]), A = (0, p.getCurrentView)();
                return (0, a.jsx)(c.TabBar, {
                    className: s(h.container, l),
                    selectedItem: t,
                    type: "top-pill",
                    onItemSelect: e => {
                        if (e === t) return;
                        let l = I.find(t => t.id === e);
                        o.default.track(_.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
                            category: l.name,
                            category_id: l.id,
                            current_page: null == A ? void 0 : A.type,
                            guild_id: C
                        }), f(l)
                    },
                    orientation: "vertical",
                    children: I.map(e => {
                        var l;
                        let i = e.id,
                            r = e.name,
                            o = (0, m.getCategoryIcon)(e),
                            u = s(h.category, {
                                [h.activeCategory]: t === i
                            }),
                            p = new URLSearchParams;
                        return p.set("category_id", i.toString()), (0, a.jsx)(c.TabBar.Item, {
                            id: i,
                            "aria-label": r,
                            disableItemStyles: !0,
                            children: (0, a.jsxs)(d.default, {
                                href: "".concat(_.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(p),
                                className: u,
                                children: [(0, a.jsx)(o, {
                                    className: h.icon,
                                    width: "24",
                                    height: "24"
                                }), (0, a.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: r
                                }), null != n ? (0, a.jsx)(c.Text, {
                                    className: h.count,
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: null !== (l = null == n ? void 0 : n[i]) && void 0 !== l ? l : 0
                                }) : null]
                            })
                        }, i)
                    })
                })
            }
        },
        721908: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var a = l("773670"),
                i = l("498225"),
                n = l("305961"),
                s = l("506061");

            function r(e) {
                let {
                    application: t,
                    showMutualGuilds: l = !0
                } = e, r = (0, i.useStateFromStores)([s.default], () => s.default.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]), c = (0, i.useStateFromStores)([n.default], () => n.default.isLoaded());
                return a.useMemo(() => {
                    let e = [];
                    if (!c || !l || null == r || null == t) return e;
                    for (let t of r) {
                        let l = n.default.getGuild(t);
                        null != l && e.push(l)
                    }
                    return e
                }, [c, r, t, l])
            }
        },
        291373: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                useBotDataAccess: function() {
                    return i
                }
            });
            var a = l("182333");

            function i(e) {
                let {
                    flags: t
                } = e, l = (0, a.usePrivilegedApplicationIntents)(t), i = null != l && ((null == l ? void 0 : l.messageContent) || (null == l ? void 0 : l.messageContentLimited)), n = null != l && ((null == l ? void 0 : l.guildPresences) || (null == l ? void 0 : l.guildPresencesLimited)), s = null != l && ((null == l ? void 0 : l.guildMembers) || (null == l ? void 0 : l.guildMembersLimited));
                return {
                    hasMessageContent: i,
                    hasGuildPresences: n,
                    hasGuildMembers: s,
                    hasIntents: i || n || s
                }
            }
        },
        182333: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                usePrivilegedApplicationIntents: function() {
                    return n
                }
            });
            var a = l("568734"),
                i = l("49111");

            function n(e) {
                if (null != e) return {
                    guildPresences: (0, a.hasFlag)(e, i.ApplicationFlags.GATEWAY_PRESENCE),
                    guildMembers: (0, a.hasFlag)(e, i.ApplicationFlags.GATEWAY_GUILD_MEMBERS),
                    messageContent: (0, a.hasFlag)(e, i.ApplicationFlags.GATEWAY_MESSAGE_CONTENT),
                    guildPresencesLimited: (0, a.hasFlag)(e, i.ApplicationFlags.GATEWAY_PRESENCE_LIMITED),
                    guildMembersLimited: (0, a.hasFlag)(e, i.ApplicationFlags.GATEWAY_GUILD_MEMBERS_LIMITED),
                    messageContentLimited: (0, a.hasFlag)(e, i.ApplicationFlags.GATEWAY_MESSAGE_CONTENT_LIMITED)
                }
            }
        },
        764490: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("575482"),
                n = l.n(i),
                s = l("77078"),
                r = l("29557"),
                c = l("981424");

            function o(e) {
                let {
                    title: t,
                    className: l
                } = e;
                return (0, a.jsxs)("div", {
                    className: n(c.header, l),
                    children: [(0, a.jsx)(r.default, {
                        className: c.logo
                    }), (0, a.jsx)(s.HeadingLevel, {
                        forceLevel: 1,
                        children: (0, a.jsx)(s.Heading, {
                            className: c.title,
                            variant: "heading-md/semibold",
                            color: "header-secondary",
                            children: t
                        })
                    })]
                })
            }
        },
        29557: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var a = l("920040");
            l("773670");
            var i = l("75196");

            function n(e) {
                let {
                    width: t = 124,
                    height: l = 24,
                    color: n = "currentColor",
                    foreground: s,
                    ...r
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, i.default)(r),
                    width: t,
                    height: l,
                    viewBox: "0 0 124 24",
                    children: (0, a.jsxs)("g", {
                        fill: n,
                        className: s,
                        children: [(0, a.jsx)("path", {
                            d: "M26.2421 2.00996C24.2367 1.07098 22.0925 0.388543 19.8509 0C19.5755 0.498132 19.2539 1.16812 19.0322 1.70112C16.6492 1.34247 14.2881 1.34247 11.949 1.70112C11.7273 1.16812 11.3983 0.498132 11.1206 0C8.87648 0.388543 6.72984 1.07347 4.72453 2.01494C0.679785 8.132 -0.41668 14.0971 0.131553 19.9776C2.81424 21.9826 5.41408 23.2005 7.97006 23.9975C8.60114 23.1283 9.16399 22.2042 9.64888 21.2304C8.72541 20.8792 7.84093 20.4458 7.00517 19.9427C7.2269 19.7783 7.44376 19.6065 7.65331 19.4296C12.7507 21.8157 18.289 21.8157 23.3255 19.4296C23.5374 19.6065 23.7543 19.7783 23.9736 19.9427C23.1354 20.4483 22.2485 20.8817 21.325 21.2329C21.8099 22.2042 22.3703 23.1308 23.0038 24C25.5622 23.203 28.1645 21.9851 30.8472 19.9776C31.4905 13.1606 29.7483 7.25031 26.2421 2.00996ZM10.3433 16.3611C8.81313 16.3611 7.55828 14.9315 7.55828 13.1905C7.55828 11.4496 8.78632 10.0174 10.3433 10.0174C11.9003 10.0174 13.1551 11.4471 13.1283 13.1905C13.1308 14.9315 11.9003 16.3611 10.3433 16.3611ZM20.6355 16.3611C19.1053 16.3611 17.8504 14.9315 17.8504 13.1905C17.8504 11.4496 19.0785 10.0174 20.6355 10.0174C22.1924 10.0174 23.4473 11.4471 23.4205 13.1905C23.4205 14.9315 22.1924 16.3611 20.6355 16.3611Z"
                        }), (0, a.jsx)("path", {
                            d: "M41.6289 6.12256H48.2808C49.8841 6.12256 51.2388 6.3791 52.3499 6.88968C53.4586 7.40027 54.2894 8.1126 54.8401 9.02418C55.3908 9.93576 55.6685 10.9793 55.6685 12.1549C55.6685 13.3056 55.381 14.3492 54.806 15.2832C54.2309 16.2197 53.3562 16.9594 52.1793 17.5049C51.0025 18.0503 49.5454 18.3243 47.8032 18.3243H41.6289V6.12256ZM47.735 15.2234C48.8144 15.2234 49.6453 14.947 50.2252 14.3965C50.8051 13.8436 51.0951 13.0914 51.0951 12.1375C51.0951 11.2533 50.8368 10.5485 50.3202 10.0204C49.8037 9.49242 49.0215 9.22592 47.9762 9.22592H45.8954V15.2234H47.735Z"
                        }), (0, a.jsx)("path", {
                            d: "M65.6272 18.3094C64.7061 18.0654 63.8752 17.7117 63.137 17.2459V14.3518C63.6949 14.7926 64.443 15.1563 65.3811 15.4427C66.3191 15.7266 67.2256 15.8686 68.1027 15.8686C68.5121 15.8686 68.8215 15.8138 69.0311 15.7042C69.2406 15.5946 69.3454 15.4626 69.3454 15.3107C69.3454 15.1363 69.2894 14.9919 69.1748 14.8748C69.0603 14.7578 68.8386 14.6606 68.5096 14.5784L66.4629 14.1077C65.2909 13.8287 64.46 13.4427 63.9654 12.947C63.4708 12.4539 63.2247 11.8063 63.2247 11.0043C63.2247 10.3294 63.4391 9.74406 63.8728 9.24343C64.3041 8.74281 64.9181 8.35676 65.7149 8.08528C66.5116 7.8113 67.4424 7.67432 68.5121 7.67432C69.4672 7.67432 70.342 7.77892 71.1387 7.98814C71.9355 8.19736 72.5934 8.46386 73.1172 8.79013V11.5274C72.5812 11.2011 71.9672 10.9446 71.2654 10.7503C70.5661 10.5585 69.8473 10.4639 69.1066 10.4639C68.0369 10.4639 67.5033 10.6507 67.5033 11.0218C67.5033 11.1961 67.5862 11.3256 67.7519 11.4128C67.9176 11.5 68.2221 11.5896 68.6631 11.6843L70.3688 11.9981C71.4823 12.1949 72.3132 12.5411 72.859 13.0342C73.4047 13.5274 73.6777 14.2571 73.6777 15.2235C73.6777 16.282 73.2269 17.1214 72.3229 17.7441C71.4189 18.3667 70.1373 18.6781 68.4755 18.6781C67.4985 18.6756 66.5482 18.5535 65.6272 18.3094Z"
                        }), (0, a.jsx)("path", {
                            d: "M77.703 17.9432C76.726 17.455 75.9877 16.7925 75.4955 15.9557C75.0033 15.1188 74.7548 14.1773 74.7548 13.1312C74.7548 12.0852 75.0106 11.1487 75.5223 10.3243C76.034 9.49986 76.7844 8.85229 77.7737 8.38155C78.763 7.91082 79.9447 7.6767 81.3214 7.6767C83.027 7.6767 84.4426 8.04282 85.5683 8.77508V11.9656C85.1712 11.6867 84.7082 11.46 84.1795 11.2857C83.6508 11.1113 83.0855 11.0241 82.4812 11.0241C81.4237 11.0241 80.5977 11.2209 80.0007 11.6169C79.4038 12.0129 79.1041 12.5285 79.1041 13.1686C79.1041 13.7962 79.394 14.3093 79.9739 14.7128C80.5538 15.1138 81.3945 15.3156 82.4982 15.3156C83.066 15.3156 83.6264 15.2309 84.1795 15.064C84.7302 14.8946 85.2053 14.6879 85.6025 14.4438V17.5297C84.3525 18.2969 82.9027 18.6804 81.2531 18.6804C79.8643 18.6755 78.6801 18.4314 77.703 17.9432Z"
                        }), (0, a.jsx)("path", {
                            d: "M89.8227 17.9433C88.8383 17.4551 88.0878 16.7876 87.5713 15.9383C87.0547 15.089 86.794 14.1425 86.794 13.0965C86.794 12.0504 87.0523 11.1164 87.5713 10.297C88.0903 9.47754 88.8359 8.83495 89.8154 8.3692C90.7925 7.90345 91.9596 7.67181 93.3119 7.67181C94.6642 7.67181 95.8313 7.90345 96.8084 8.3692C97.7855 8.83495 98.5311 9.47256 99.0428 10.287C99.5544 11.1015 99.8103 12.0354 99.8103 13.094C99.8103 14.1401 99.5544 15.0865 99.0428 15.9358C98.5311 16.7851 97.783 17.4526 96.7987 17.9408C95.8143 18.429 94.652 18.6731 93.3095 18.6731C91.9669 18.6731 90.8046 18.4315 89.8227 17.9433ZM95.0053 14.8499C95.4195 14.4265 95.6291 13.8661 95.6291 13.1687C95.6291 12.4713 95.422 11.9159 95.0053 11.5049C94.5911 11.0915 94.0258 10.8848 93.3095 10.8848C92.5809 10.8848 92.0108 11.0915 91.5941 11.5049C91.1799 11.9184 90.9728 12.4713 90.9728 13.1687C90.9728 13.8661 91.1799 14.4265 91.5941 14.8499C92.0083 15.2733 92.5809 15.4875 93.3095 15.4875C94.0258 15.485 94.5911 15.2733 95.0053 14.8499Z"
                        }), (0, a.jsx)("path", {
                            d: "M110.059 8.31931V12.0852C109.625 11.7938 109.065 11.6493 108.37 11.6493C107.461 11.6493 106.76 11.9308 106.272 12.4937C105.782 13.0565 105.539 13.9333 105.539 15.1188V18.3268H101.36V8.12753H105.454V11.3704C105.68 10.1848 106.048 9.31059 106.555 8.74521C107.059 8.18232 107.712 7.90088 108.507 7.90088C109.108 7.90088 109.625 8.04036 110.059 8.31931Z"
                        }), (0, a.jsx)("path", {
                            d: "M123.942 5.77393V18.3268H119.763V16.0429C119.41 16.9022 118.874 17.5572 118.153 18.0056C117.432 18.4514 116.54 18.6755 115.482 18.6755C114.537 18.6755 113.713 18.4414 113.009 17.9707C112.305 17.5 111.762 16.8549 111.379 16.0354C110.999 15.216 110.806 14.2895 110.806 13.2534C110.794 12.1849 110.997 11.226 111.413 10.3767C111.827 9.52735 112.415 8.86483 113.17 8.38912C113.925 7.9134 114.788 7.6743 115.755 7.6743C117.746 7.6743 119.081 8.55848 119.763 10.3244V5.77393H123.942ZM119.14 14.7802C119.566 14.3567 119.778 13.8063 119.778 13.1338C119.778 12.4838 119.571 11.9533 119.157 11.5473C118.742 11.1413 118.175 10.9371 117.461 10.9371C116.757 10.9371 116.194 11.1438 115.772 11.5572C115.351 11.9707 115.141 12.5062 115.141 13.1687C115.141 13.8312 115.351 14.3717 115.772 14.7901C116.194 15.2085 116.749 15.4178 117.444 15.4178C118.148 15.4153 118.713 15.2036 119.14 14.7802Z"
                        }), (0, a.jsx)("path", {
                            d: "M59.1896 9.21341C60.3401 9.21341 61.2728 8.35701 61.2728 7.30058C61.2728 6.24416 60.3401 5.38776 59.1896 5.38776C58.039 5.38776 57.1063 6.24416 57.1063 7.30058C57.1063 8.35701 58.039 9.21341 59.1896 9.21341Z"
                        }), (0, a.jsx)("path", {
                            d: "M57.1044 10.531C58.3811 11.0939 59.9649 11.1188 61.2709 10.531V18.3816H57.1044V10.531Z"
                        })]
                    })
                })
            }
        }
    }
]);