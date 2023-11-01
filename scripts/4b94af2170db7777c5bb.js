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
            var i = l("37983");
            l("884691");
            var a = l("77078");

            function n(e) {
                let {
                    children: t,
                    ...l
                } = e;
                return (0, i.jsx)(a.Anchor, {
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
            var i = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                r = l("917351"),
                c = l("748820"),
                o = l("394846"),
                d = l("77078"),
                u = l("304580"),
                m = l("493765"),
                _ = l("485328"),
                p = l("545158"),
                f = l("69927"),
                h = l("592407"),
                g = l("393414"),
                I = l("764490"),
                A = l("246053"),
                C = l("599110"),
                E = l("701909"),
                v = l("721698"),
                x = l("599994"),
                R = l("598981"),
                T = l("412707"),
                N = l("838093"),
                P = l("49111"),
                y = l("894282"),
                j = l("782340"),
                O = l("751788");
            let S = E.default.getArticleURL(P.HelpdeskArticles.APP_DIRECTORY_HEADER_LEARN_MORE);

            function D(e) {
                let {
                    onClose: t
                } = e, l = a.useRef(null);
                return (0, i.jsx)("div", {
                    ref: l,
                    className: O.closeWrapper,
                    children: (0, i.jsx)(d.FocusRingScope, {
                        containerRef: l,
                        children: (0, i.jsx)("div", {
                            className: s(O.closeContent, o.isMobile ? O.closeContentMobile : O.closeContentNotMobile),
                            children: (0, i.jsx)(u.default, {
                                className: s(O.closeIcon, o.isMobile ? O.closeIconMobile : O.closeIconNotMobile),
                                closeAction: t,
                                keybind: "ESC"
                            })
                        })
                    })
                })
            }

            function L(e) {
                let {
                    onTitleClick: t,
                    showsLearnMoreCta: l,
                    guildId: n
                } = e, r = (0, i.jsxs)(a.Fragment, {
                    children: [(0, i.jsx)(I.default, {
                        title: j.default.Messages.APP_DIRECTORY
                    }), l && (0, i.jsx)(d.Anchor, {
                        onClick: function() {
                            C.default.track(P.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
                                cta: "directory-help-center",
                                current_page: T.ApplicationDirectoryViews.HOME,
                                guild_id: n
                            }), (0, p.default)(S)
                        },
                        children: j.default.Messages.LEARN_MORE
                    })]
                });
                return (0, i.jsx)("div", {
                    className: O.header,
                    children: null != t ? (0, i.jsx)(x.default, {
                        href: P.Routes.APPLICATION_DIRECTORY,
                        children: (0, i.jsx)(d.Clickable, {
                            onClick: t,
                            className: s(O.titleContainer, O.clickable),
                            children: r
                        })
                    }) : (0, i.jsx)("div", {
                        className: O.titleContainer,
                        children: r
                    })
                })
            }

            function M(e) {
                let t, {
                    view: l,
                    onClick: a
                } = e;
                if (null == l) return null;
                switch (l.type) {
                    case T.ApplicationDirectoryViews.HOME:
                        t = j.default.Messages.HOME;
                        break;
                    case T.ApplicationDirectoryViews.SEARCH:
                        t = j.default.Messages.SEARCH;
                        break;
                    case T.ApplicationDirectoryViews.APPLICATION:
                        var n;
                        t = null !== (n = null == l ? void 0 : l.applicationName) && void 0 !== n ? n : j.default.Messages.BACK;
                        break;
                    default:
                        t = j.default.Messages.BACK
                }
                return (0, i.jsxs)(d.Clickable, {
                    className: O.back,
                    onClick: a,
                    children: [(0, i.jsx)(A.default, {
                        direction: A.default.Directions.LEFT,
                        className: O.backIcon
                    }), (0, i.jsx)(d.Heading, {
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
                    scrollHeight: i,
                    location: a,
                    guildId: n,
                    sessionId: s
                } = e;
                t > 0 && C.default.track(P.AnalyticEvents.APP_DIRECTORY_PAGE_SCROLLED, {
                    scroll_visible_percentile: (t + l) / i,
                    guild_id: n,
                    location: a,
                    directory_session_id: s
                })
            }, 200);

            function Y(e) {
                let {
                    children: t
                } = e, l = a.useRef(null), n = (0, R.default)(), r = (0, T.useApplicationDirectoryHistory)(e => e.guildId), u = (0, T.useApplicationDirectoryHistory)(e => e.entrypoint), p = (0, T.useApplicationDirectoryHistory)(e => e.trackedOpenedFromExternalEntrypoint), I = (0, T.getCurrentView)(), A = (0, T.getPreviousView)(), E = a.useRef(), x = (null == I ? void 0 : I.type) !== T.ApplicationDirectoryViews.HOME, S = (null == I ? void 0 : I.type) === T.ApplicationDirectoryViews.APPLICATION ? null == I ? void 0 : I.applicationId : void 0;
                (0, f.usePageTitle)({
                    location: j.default.Messages.APP_DIRECTORY
                });
                let Y = (null == I ? void 0 : I.type) !== T.ApplicationDirectoryViews.HOME && null != A;
                a.useEffect(() => {
                    !p && null == u && (C.default.track(P.AnalyticEvents.APP_DIRECTORY_OPENED, {
                        source: T.ApplicationDirectoryEntrypointNames.EXTERNAL
                    }), (0, T.setTrackedOpenedFromExternalEntrypoint)(!0))
                }, [u, p]), a.useEffect(() => {
                    if (n) return _.default.setLayout(m.default), _.default.enable(), () => _.default.disable()
                }, [n]), a.useEffect(() => {
                    v.getCategories()
                }, []), a.useEffect(() => {
                    n && v.fetchIntegrationApplicationIdsForMyGuilds()
                }, [n]), a.useEffect(() => {
                    E.current = (0, c.v4)()
                }, [null == I ? void 0 : I.type, S]);
                let k = a.useCallback(() => {
                    var e, t;
                    (0, g.transitionTo)(null !== (e = null == u ? void 0 : u.pathname) && void 0 !== e ? e : ""), null != u && u.name === T.ApplicationDirectoryEntrypointNames.GUILD_SETTINGS && null != r && h.default.open(r, null !== (t = u.guildSettingsSection) && void 0 !== t ? t : void 0)
                }, [u, r]);
                return a.useEffect(() => {
                    let e = e => {
                        e.key === y.KeyboardKeysUpdated.ESCAPE && (e.stopPropagation(), k())
                    };
                    return document.addEventListener("keydown", e), () => {
                        document.removeEventListener("keydown", e)
                    }
                }, [k]), (0, i.jsxs)(i.Fragment, {
                    children: [n ? (0, i.jsx)(D, {
                        onClose: k
                    }) : null, (0, i.jsx)(d.AdvancedScroller, {
                        className: s(O.directoryContainer, {
                            [O.directoryContainerMobile]: o.isMobile,
                            [O.directoryContainerTablet]: o.isTablet
                        }),
                        ref: l,
                        onScroll: () => {
                            var e, t, i;
                            return b({
                                scrollTop: null === (e = l.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop,
                                scrollOffset: null === (t = l.current) || void 0 === t ? void 0 : t.getScrollerState().offsetHeight,
                                scrollHeight: null === (i = l.current) || void 0 === i ? void 0 : i.getScrollerState().scrollHeight,
                                location: null == I ? void 0 : I.type,
                                guildId: r,
                                sessionId: E.current
                            })
                        },
                        children: (0, i.jsxs)("div", {
                            className: O.content,
                            children: [(0, i.jsx)(L, {
                                onTitleClick: x ? N.goHome : void 0,
                                showsLearnMoreCta: (null == I ? void 0 : I.type) === T.ApplicationDirectoryViews.HOME,
                                guildId: r
                            }), Y && (0, i.jsx)(M, {
                                view: A,
                                onClick: () => {
                                    (0, g.back)()
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
            var i = l("884691"),
                a = l("613676");

            function n(e, t) {
                let l = i.useMemo(() => null != e && (0, a.canInstallApplication)(e.id, e.custom_install_url, e.install_params), [e]),
                    n = i.useCallback(l => {
                        null != e && (0, a.installApplication)({
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
                    return I
                }
            });
            var i = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                r = l("355262"),
                c = l("77078"),
                o = l("650509"),
                d = l("8161"),
                u = l("315102"),
                m = l("146691"),
                _ = l("998944"),
                p = l("412707"),
                f = l("721908"),
                h = l("782340"),
                g = l("884704");

            function I(e) {
                var t, l, n;
                let {
                    application: I,
                    className: A,
                    childrenClassName: C,
                    showAdd: E,
                    showMutualGuilds: v,
                    showPrimaryCategory: x,
                    children: R,
                    onView: T,
                    guildCountPosition: N = "top",
                    subheaderTextVariant: P = "text-sm/normal",
                    mutualGuildShownMax: y,
                    guildIconSize: j,
                    source: O
                } = e, S = (0, p.useApplicationDirectoryHistory)(e => e.guildId), D = (0, r.useListItem)(I.id), L = u.default.getApplicationIconURL({
                    id: I.id,
                    icon: I.icon,
                    size: 48
                }), {
                    canInstall: M,
                    install: b
                } = (0, m.useInstallApplication)(I), Y = (0, f.default)({
                    application: I,
                    showMutualGuilds: v
                }), k = a.useCallback(e => {
                    e.stopPropagation(), b(O)
                }, [b, O]), G = null === (t = I.categories) || void 0 === t ? void 0 : t[0], H = (null !== (n = null === (l = I.directory_entry) || void 0 === l ? void 0 : l.guild_count) && void 0 !== n ? n : 0) > 0 || Y.length > 0, F = (0, i.jsx)(_.default, {
                    application: I,
                    textVariant: P,
                    mutualGuilds: Y,
                    mutualGuildShownMax: y,
                    guildIconSize: j,
                    compact: !0
                }), w = x && null != G, U = H && "top" === N, {
                    applicationSubscriptionListingsShown: B
                } = (0, o.default)({
                    applicationId: I.id,
                    groupListingId: I.primary_sku_id,
                    guildId: S
                }), V = (0, i.jsxs)("article", {
                    children: [(0, i.jsxs)("div", {
                        className: g.topWrapper,
                        children: [(0, i.jsx)("img", {
                            className: g.icon,
                            alt: "",
                            "aria-hidden": !0,
                            src: L,
                            width: 48,
                            height: 48
                        }), (0, i.jsxs)("div", {
                            className: g.info,
                            children: [(0, i.jsx)(c.Heading, {
                                variant: "heading-md/medium",
                                children: I.name
                            }), (w || U) && (0, i.jsxs)("div", {
                                className: g.details,
                                children: [w ? (0, i.jsx)(c.Text, {
                                    tag: "span",
                                    color: "header-secondary",
                                    variant: P,
                                    children: G.name
                                }) : null, U ? (0, i.jsxs)(i.Fragment, {
                                    children: [w ? (0, i.jsx)("span", {
                                        className: g.bullet,
                                        children: "•"
                                    }) : null, F, B ? (0, i.jsxs)("div", {
                                        className: g.premiumContainer,
                                        children: [(0, i.jsx)("span", {
                                            className: g.bullet,
                                            children: "•"
                                        }), (0, i.jsx)(d.default, {
                                            width: 16,
                                            height: 16
                                        }), (0, i.jsx)(c.Text, {
                                            variant: "text-sm/medium",
                                            className: g.premiumText,
                                            children: h.default.Messages.APPLICATION_DIRECTORY_LISTING_TOOLTIP_PREMIUM
                                        })]
                                    }) : null]
                                }) : null]
                            })]
                        }), E ? (0, i.jsx)(c.Button, {
                            size: c.Button.Sizes.SMALL,
                            onClick: k,
                            disabled: !M,
                            children: h.default.Messages.APP_DIRECTORY_LISTING_ADD_BUTTON
                        }) : null]
                    }), null != R || null != C ? (0, i.jsx)("div", {
                        className: s(C, g.children),
                        children: R
                    }) : null, H && "bottom" === N ? (0, i.jsx)("div", {
                        className: g.bottomGuildCountContainer,
                        children: F
                    }) : null]
                });
                return null != T ? (0, i.jsx)(c.Clickable, {
                    tag: "li",
                    onClick: () => T({
                        mutualGuilds: Y
                    }),
                    className: s(A, g.listing, g.clickable),
                    ...D,
                    children: V
                }) : (0, i.jsx)(c.FocusRing, {
                    children: (0, i.jsx)("li", {
                        className: s(A, g.listing),
                        ...D,
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
            var i = l("37983"),
                a = l("884691"),
                n = l("77078"),
                s = l("315102"),
                r = l("998944"),
                c = l("288914"),
                o = l("721908"),
                d = l("800255");

            function u(e) {
                var t, l, u, m, _;
                let {
                    application: p,
                    className: f,
                    childrenClassName: h,
                    animatesOnHover: g,
                    onClick: I,
                    ...A
                } = e, C = s.default.getApplicationIconURL({
                    id: p.id,
                    icon: p.icon,
                    size: 48
                }), E = (0, o.default)({
                    application: p
                }), v = null === (t = p.categories) || void 0 === t ? void 0 : t[0], x = (null !== (m = null === (l = p.directory_entry) || void 0 === l ? void 0 : l.guild_count) && void 0 !== m ? m : 0) > 0 || E.length > 0, R = a.useCallback(() => {
                    I({
                        mutualGuilds: E
                    })
                }, [I, E]), T = (0, i.jsx)(r.default, {
                    application: p,
                    textVariant: "text-xs/normal",
                    mutualGuilds: E,
                    mutualGuildShownMax: 3,
                    guildIconSize: r.GuildIconSize.SMALL,
                    compact: !0
                });
                return (0, i.jsxs)(c.default, {
                    className: f,
                    onClick: R,
                    iconSrc: C,
                    header: p.name,
                    subheader: null != v && (0, i.jsx)(n.Text, {
                        tag: "span",
                        color: "header-secondary",
                        variant: "text-xs/normal",
                        children: v.name
                    }),
                    animatesOnHover: g,
                    ...A,
                    children: [(null != p.description || null != h) && (0, i.jsx)("div", {
                        className: h,
                        children: (0, i.jsx)(n.Text, {
                            className: d.listingDescription,
                            variant: "text-sm/normal",
                            lineClamp: 2,
                            children: null !== (_ = null === (u = p.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== _ ? _ : p.description
                        })
                    }), x && (0, i.jsx)("div", {
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
            var i = l("37983"),
                a = l("884691"),
                n = l("77078"),
                s = l("998944"),
                r = l("288914"),
                c = l("721908"),
                o = l("401709");

            function d(e) {
                var t, l, d, u, m;
                let {
                    application: _,
                    onClick: p,
                    imageSrc: f,
                    className: h,
                    animatesOnHover: g
                } = e, I = (0, c.default)({
                    application: _
                }), A = null === (t = _.categories) || void 0 === t ? void 0 : t[0], C = (null !== (u = null === (l = _.directory_entry) || void 0 === l ? void 0 : l.guild_count) && void 0 !== u ? u : 0) > 0 || I.length > 0, E = a.useCallback(() => {
                    p({
                        mutualGuilds: I
                    })
                }, [p, I]), v = (0, i.jsx)(s.default, {
                    application: _,
                    textVariant: "text-xs/normal",
                    mutualGuilds: I,
                    mutualGuildShownMax: 3,
                    guildIconSize: s.GuildIconSize.SMALL,
                    compact: !0
                });
                return (0, i.jsx)(r.default, {
                    className: h,
                    imageSrc: f,
                    onClick: E,
                    header: _.name,
                    subheader: (0, i.jsxs)("div", {
                        className: o.subheader,
                        children: [null != A && (0, i.jsx)(n.Text, {
                            tag: "span",
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: A.name
                        }), C && (0, i.jsxs)(i.Fragment, {
                            children: [null != A && (0, i.jsx)("span", {
                                className: o.bullet,
                                children: "•"
                            }), v]
                        })]
                    }),
                    animatesOnHover: g,
                    children: null != _.description && (0, i.jsx)("div", {
                        className: o.children,
                        children: (0, i.jsx)(n.Text, {
                            className: o.listingDescription,
                            variant: "text-sm/normal",
                            lineClamp: 2,
                            children: null !== (m = null === (d = _.directory_entry) || void 0 === d ? void 0 : d.short_description) && void 0 !== m ? m : _.description
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
            var i = l("37983");
            l("884691");
            var a = l("77078"),
                n = l("599994"),
                s = l("967473"),
                r = l("49111"),
                c = l("782340"),
                o = l("92118");

            function d(e) {
                let {
                    applications: t,
                    className: l,
                    listingClassName: s,
                    title: d,
                    showViewAll: m,
                    onViewOne: _,
                    onViewAll: p
                } = e;
                return (0, i.jsxs)("div", {
                    className: l,
                    children: [null != d ? (0, i.jsxs)("div", {
                        className: o.header,
                        children: [(0, i.jsx)(a.Heading, {
                            variant: "heading-lg/semibold",
                            children: d
                        }), m ? (0, i.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.LINK,
                            onClick: p,
                            children: c.default.Messages.APP_DIRECTORY_LISTING_VIEW_ALL_BUTTON
                        }) : null]
                    }) : null, (0, i.jsx)("ul", {
                        className: o.list,
                        children: t.map(e => (0, i.jsx)(n.default, {
                            href: r.Routes.APPLICATION_DIRECTORY_PROFILE(e.id),
                            children: (0, i.jsx)(u, {
                                className: s,
                                application: e,
                                onClick: t => {
                                    let {
                                        mutualGuilds: l
                                    } = t;
                                    return _({
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
                return (0, i.jsx)(s.default, {
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
            var i = l("37983");
            l("884691");
            var a = l("77078"),
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
                    viewAllHook: (e, t) => (0, i.jsx)(a.Anchor, {
                        onClick: d,
                        children: e
                    }, t)
                })), (0, i.jsx)(s.default, {
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
            var i = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                r = l("77078"),
                c = l("782340"),
                o = l("248"),
                d = l("103104");

            function u(e) {
                let {
                    heading: t = c.default.Messages.APP_DIRECTORY_ERROR_HEADING,
                    body: l = c.default.Messages.APP_DIRECTORY_ERROR_BODY,
                    className: n
                } = e;
                return (0, i.jsxs)("div", {
                    className: s(o.container, n),
                    children: [(0, i.jsx)("img", {
                        className: o.image,
                        src: d,
                        alt: c.default.Messages.APP_DIRECTORY_CONFUSED_CLYDE_IMAGE_ALT
                    }), (0, i.jsxs)(a.Fragment, {
                        children: [(0, i.jsx)(r.Heading, {
                            className: o.header,
                            variant: "heading-xl/semibold",
                            children: t
                        }), (0, i.jsx)(r.Text, {
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
                    return a
                },
                default: function() {
                    return A
                }
            });
            var i, a, n = l("37983"),
                s = l("884691"),
                r = l("414456"),
                c = l.n(r),
                o = l("769846"),
                d = l("77078"),
                u = l("627490"),
                m = l("587974"),
                _ = l("315102"),
                p = l("159885"),
                f = l("782340"),
                h = l("875612");
            (i = a || (a = {}))[i.SMALL = (0, p.cssValueToNumber)(o.default.GUILD_COUNT_SMALL_ICON_SIZE)] = "SMALL", i[i.LARGE = (0, p.cssValueToNumber)(o.default.GUILD_COUNT_LARGE_ICON_SIZE)] = "LARGE";
            let g = {
                    [a.SMALL]: h.moreGuildsSmall,
                    [a.LARGE]: h.moreGuildsLarge
                },
                I = {
                    [a.SMALL]: h.iconSmall,
                    [a.LARGE]: h.iconLarge
                };

            function A(e) {
                var t, l, i;
                let {
                    application: r,
                    mutualGuilds: o,
                    mutualGuildShownMax: p = 4,
                    className: A,
                    textVariant: C = "text-sm/normal",
                    compact: E,
                    guildIconSize: v = a.LARGE
                } = e, x = new Intl.ListFormat("en-US"), R = null !== (l = null === (t = r.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== l ? l : 0, T = null !== (i = null == o ? void 0 : o.length) && void 0 !== i ? i : 0, N = Math.max(0, R - T), {
                    shownMutualGuilds: P,
                    hiddenMutualGuilds: y
                } = s.useMemo(() => {
                    let e = [],
                        t = [];
                    return null == o || o.forEach(l => {
                        e.length < p && null != l.icon ? e.push(l) : t.push(l)
                    }), e.length === p && t.length > 0 && (t.push(e[p - 1]), e = e.slice(0, p - 1)), {
                        shownMutualGuilds: e,
                        hiddenMutualGuilds: t
                    }
                }, [o, p]), j = y.length, O = function(e, t, l, i) {
                    if (0 === t && 0 === e) return null;
                    if (t > 0 && 0 === l) return f.default.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({
                        mutualGuildCount: t
                    });
                    let a = t > 0 ? f.default.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS : f.default.Messages.APP_DIRECTORY_GUILD_COUNT,
                        n = new Intl.NumberFormat("en-US", {
                            notation: i ? "compact" : "standard",
                            compactDisplay: "short"
                        });
                    return a.format({
                        guildCount: n.format(e),
                        mutualGuildCount: t,
                        nonMutualGuildCount: n.format(l)
                    })
                }(R, T, N, E);
                return 0 === P.length && null == O ? null : (0, n.jsxs)("div", {
                    className: c(A, h.wrapper),
                    children: [(0, n.jsx)("div", {
                        className: h.icons,
                        children: P.length > 0 ? (0, n.jsxs)(n.Fragment, {
                            children: [P.map((e, t) => {
                                let l = t === P.length - 1 && 0 === j,
                                    i = _.default.getGuildIconURL({
                                        id: e.id,
                                        icon: e.icon,
                                        size: v,
                                        canAnimate: !1
                                    }),
                                    a = (0, n.jsx)(d.Tooltip, {
                                        text: e.name,
                                        position: "top",
                                        children: e => (0, n.jsx)("img", {
                                            ...e,
                                            className: c(h.icon, I[v]),
                                            src: i,
                                            alt: ""
                                        })
                                    });
                                return l ? (0, n.jsx)(s.Fragment, {
                                    children: a
                                }, e.id) : (0, n.jsx)(m.default, {
                                    className: h.iconMask,
                                    height: v,
                                    width: v,
                                    mask: m.default.Masks.VOICE_USER_SUMMARY_ITEM,
                                    children: a
                                }, e.id)
                            }), j > 0 ? (0, n.jsx)(d.Tooltip, {
                                text: f.default.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format({
                                    appNames: x.format(y.map(e => e.name))
                                }),
                                position: "top",
                                children: e => (0, n.jsxs)("div", {
                                    ...e,
                                    className: c(h.moreGuilds, g[v]),
                                    children: ["+", j]
                                })
                            }) : null]
                        }) : (0, n.jsx)(u.default, {
                            width: v,
                            height: v,
                            className: h.defaultIcon
                        })
                    }), null != O ? (0, n.jsx)(d.Text, {
                        variant: C,
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
            var i = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("77078"),
                r = l("782340"),
                c = l("11338");

            function o(e) {
                let {
                    className: t,
                    onClick: l,
                    imageSrc: a,
                    iconSrc: o,
                    header: d,
                    headerClassName: u,
                    subheaderVariant: m = "text-sm/normal",
                    subheader: _,
                    children: p,
                    animatesOnHover: f,
                    ...h
                } = e, g = null != a, I = (0, i.jsxs)(i.Fragment, {
                    children: [g && (0, i.jsx)("div", {
                        className: c.imageContainer,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: c.image,
                            src: a
                        })
                    }), (0, i.jsxs)("div", {
                        className: c.textContainer,
                        children: [(0, i.jsxs)("div", {
                            className: n(c.topRowContainer),
                            children: [null != o && (0, i.jsx)("img", {
                                className: c.icon,
                                alt: "",
                                "aria-hidden": !0,
                                src: o,
                                width: 48,
                                height: 48
                            }), (0, i.jsxs)("div", {
                                className: c.headerContainer,
                                children: [(0, i.jsx)(s.Heading, {
                                    variant: "heading-md/medium",
                                    className: u,
                                    children: d
                                }), null != _ && (0, i.jsx)(s.Text, {
                                    className: c.subheader,
                                    color: "header-secondary",
                                    variant: m,
                                    children: _
                                })]
                            })]
                        }), p]
                    })]
                }), A = n(t, c.container, {
                    [c.hasImage]: g
                });
                return null != l ? (0, i.jsx)(s.ClickableContainer, {
                    tag: "article",
                    "aria-label": r.default.Messages.APP_DIRECTORY_LISTING_CARD_BUTTON_A11Y_LABEL.format({
                        name: d
                    }),
                    onClick: l,
                    className: n(A, c.clickable, {
                        [c.animatesOnHoverContainer]: f
                    }),
                    focusProps: {
                        offset: 4
                    },
                    children: I
                }) : (0, i.jsx)("article", {
                    className: A,
                    ...h,
                    children: I
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
            var i = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("77078"),
                r = l("455936");

            function c(e) {
                let {
                    loading: t,
                    children: l
                } = e;
                return (0, i.jsxs)("div", {
                    className: r.container,
                    children: [t ? (0, i.jsx)("div", {
                        className: r.spinnerContainer,
                        children: (0, i.jsx)(s.Spinner, {
                            className: r.spinner,
                            type: s.Spinner.Type.SPINNING_CIRCLE
                        })
                    }) : null, (0, i.jsx)("div", {
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
            var i = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                r = l("646240"),
                c = l("49111"),
                o = l("782340"),
                d = l("335839"),
                u = a.forwardRef(function(e, t) {
                    let {
                        query: l,
                        canShowCta: n = !1,
                        onChange: u,
                        onSubmit: m,
                        className: _
                    } = e, [p, f] = a.useState(!1);
                    return (0, i.jsx)(r.default, {
                        ref: t,
                        className: s(d.search, _),
                        label: o.default.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
                        placeholder: o.default.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
                        searchTerm: l,
                        cta: n && p && l.length > 0 ? o.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null,
                        onChange: u,
                        onClear: () => u(""),
                        onFocus: () => f(!0),
                        onBlur: () => f(!1),
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
                    return h
                }
            });
            var i = l("37983"),
                a = l("884691"),
                n = l("65597"),
                s = l("599110"),
                r = l("831109"),
                c = l("136110"),
                o = l("412707"),
                d = l("155335"),
                u = l("769638"),
                m = l("464119"),
                _ = l("463497"),
                p = l("49111"),
                f = l("178206");

            function h() {
                let e = (0, o.useApplicationDirectoryHistory)(e => e.guildId),
                    t = (0, n.default)([r.default], () => r.default.getCategories()),
                    l = (0, o.getPreviousView)();
                return a.useEffect(() => {
                    s.default.track(p.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
                        current_page: o.ApplicationDirectoryViews.HOME,
                        previous_page: null == l ? void 0 : l.type,
                        guild_id: e
                    })
                }, [e, l]), (0, i.jsxs)(c.default, {
                    children: [(0, i.jsx)(m.default, {}), null != t && t.length > 0 && (0, i.jsx)(d.default, {
                        className: f.categoryList
                    }), (0, i.jsx)("main", {
                        className: f.collectionsContainer,
                        children: (0, i.jsx)(u.default, {})
                    }), (0, i.jsx)(_.default, {})]
                })
            }
        },
        155335: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var i = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                r = l("65597"),
                c = l("77078"),
                o = l("599110"),
                d = l("599994"),
                u = l("831109"),
                m = l("682777"),
                _ = l("412707"),
                p = l("838093"),
                f = l("49111"),
                h = l("782340"),
                g = l("21316");

            function I(e) {
                let {
                    className: t
                } = e, l = (0, _.useApplicationDirectoryHistory)(e => e.guildId), n = (0, r.default)([u.default], () => u.default.getCategories()), I = a.useMemo(() => {
                    let e = [(0, m.getAllCategory)(), ...n];
                    return e
                }, [n]), A = (0, _.getCurrentView)(), C = e => {
                    let t = I.find(t => t.id === e);
                    o.default.track(f.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: t.name,
                        category_id: t.id,
                        current_page: null == A ? void 0 : A.type,
                        guild_id: l
                    }), (0, p.goToCategory)({
                        categoryId: t.id
                    })
                };
                return (0, i.jsx)("nav", {
                    className: s(g.container, t),
                    children: I.map(e => {
                        let t = e.id,
                            l = e.name,
                            a = (0, m.getCategoryIcon)(e),
                            n = new URLSearchParams;
                        return n.set("category_id", t.toString()), (0, i.jsx)(d.default, {
                            href: "".concat(f.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(n),
                            children: (0, i.jsxs)(c.Clickable, {
                                className: g.category,
                                "aria-label": h.default.Messages.APP_DIRECTORY_CATEGORY_BUTTON_A11Y_LABEL.format({
                                    categoryName: l
                                }),
                                onClick: () => C(t),
                                children: [(0, i.jsx)(a, {
                                    className: g.icon,
                                    width: "24",
                                    height: "24"
                                }), (0, i.jsx)(c.Text, {
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
                    return v
                }
            });
            var i = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                r = l("125352"),
                c = l("769846"),
                o = l("77078"),
                d = l("749344"),
                u = l("599110"),
                m = l("599994"),
                _ = l("682777"),
                p = l("412707"),
                f = l("838093"),
                h = l("331793"),
                g = l("417152"),
                I = l("49111"),
                A = l("782340"),
                C = l("626783");

            function E(e) {
                let {
                    collectionTitle: t,
                    title: l,
                    description: a,
                    handleClick: n,
                    imageSrc: r,
                    ctaLabel: c,
                    ctaLink: d,
                    applicationId: u
                } = e, _ = "936929561302675456" === u, p = null == u ? (0, i.jsx)(o.Button, {
                    className: C.applicationCta,
                    onClick: n,
                    children: c
                }) : (0, i.jsx)(m.default, {
                    href: I.Routes.APPLICATION_DIRECTORY_PROFILE(u),
                    children: (0, i.jsx)(o.Button, {
                        className: C.applicationCta,
                        onClick: n,
                        children: c
                    })
                });
                return (0, i.jsxs)("div", {
                    className: C.card,
                    children: [(0, i.jsx)("div", {
                        className: C.textContainer,
                        children: (0, i.jsxs)("div", {
                            className: C.verticallyCenter,
                            children: [(0, i.jsx)(o.Text, {
                                className: C.collectionTitle,
                                tag: "span",
                                color: "header-secondary",
                                variant: "heading-deprecated-12/semibold",
                                children: t
                            }), (0, i.jsxs)(o.Heading, {
                                className: C.applicationName,
                                variant: "heading-xxl/medium",
                                children: [l, " ", _ && (0, i.jsx)(h.default, {})]
                            }), (0, i.jsx)(o.Text, {
                                className: C.applicationDescription,
                                variant: "text-md/normal",
                                lineClamp: 3,
                                children: a
                            }), null == d ? p : (0, i.jsx)(o.Anchor, {
                                onClick: n,
                                href: d,
                                className: s((0, o.getButtonStyle)({
                                    grow: !1
                                }), C.applicationCta),
                                children: c
                            })]
                        })
                    }), (0, i.jsx)("div", {
                        className: C.imageContainer,
                        children: (0, i.jsx)("img", {
                            alt: l,
                            className: C.image,
                            src: r
                        })
                    })]
                })
            }

            function v(e) {
                let {
                    collection: t,
                    collection: {
                        id: l,
                        title: n,
                        application_directory_collection_items: o
                    }
                } = e, m = (0, g.default)({
                    collection: t
                }), [h, v] = a.useState(), x = (0, p.useApplicationDirectoryHistory)(e => e.guildId);
                return a.useEffect(() => {
                    let e = null == m ? void 0 : m.current;
                    if (null == e) return;
                    let t = new ResizeObserver(() => {
                        let t = document.body.offsetWidth < parseFloat(c.default.COLLECTION_GALLERY_MEDIA_BREAKPOINT) ? parseFloat(c.default.COLLECTION_GALLERY_COLUMN_CARD_HEIGHT) : parseFloat(c.default.COLLECTION_GALLERY_ROW_CARD_HEIGHT);
                        v(e.offsetWidth / t)
                    });
                    return t.observe(document.body), () => {
                        t.disconnect()
                    }
                }, [m]), (0, i.jsx)("article", {
                    ref: m,
                    className: s({
                        [C.collectionBottomMargin]: o.length <= 1
                    }),
                    children: (0, i.jsx)(d.default, {
                        aspectRatio: h,
                        themedPagination: !0,
                        paginationClassName: C.paginationControls,
                        paginationArrowClassName: C.paginationArrow,
                        items: o,
                        onChangeItem: (e, t, i) => {
                            let {
                                application: a
                            } = e;
                            null != a && u.default.track(I.AnalyticEvents.APP_DIRECTORY_COLLECTION_SCROLLED, {
                                collection_id: l,
                                offset: i,
                                results: [a.id],
                                guild_id: x
                            })
                        },
                        renderItem: e => {
                            let {
                                id: t,
                                image_hash: a,
                                application: s,
                                type: c,
                                description: o,
                                title: d,
                                call_to_action_label: m,
                                call_to_action_url: p
                            } = e;
                            if (null == a) return;
                            let h = (0, _.getCollectionItemAssetUrl)({
                                itemId: t,
                                hash: a
                            });
                            if (c === r.ApplicationDirectoryCollectionItemType.APPLICATION && null != s) {
                                var g, C;
                                return (0, i.jsx)(E, {
                                    collectionTitle: n,
                                    title: s.name,
                                    description: null !== (C = null === (g = s.directory_entry) || void 0 === g ? void 0 : g.short_description) && void 0 !== C ? C : s.description,
                                    handleClick: () => {
                                        u.default.track(I.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                            collection_id: l,
                                            application_id: s.id,
                                            guild_id: x,
                                            shown_mutual_guilds_count: void 0
                                        }), (0, f.goToApplication)({
                                            applicationId: s.id
                                        })
                                    },
                                    imageSrc: h,
                                    ctaLabel: A.default.Messages.APP_DIRECTORY_GALLERY_COLLECTION_VIEW_APP_CTA,
                                    applicationId: s.id
                                })
                            }
                            if (c === r.ApplicationDirectoryCollectionItemType.LINK && null != d && null != p && null != m) return (0, i.jsx)(E, {
                                collectionTitle: n,
                                title: d,
                                description: o,
                                handleClick: () => {
                                    u.default.track(I.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                        collection_id: l,
                                        link: p,
                                        guild_id: x,
                                        shown_mutual_guilds_count: void 0
                                    })
                                },
                                imageSrc: h,
                                ctaLabel: m,
                                ctaLink: p
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
                    return g
                }
            });
            var i = l("37983"),
                a = l("884691"),
                n = l("125352"),
                s = l("769846"),
                r = l("476765"),
                c = l("599110"),
                o = l("599994"),
                d = l("967473"),
                u = l("412707"),
                m = l("838093"),
                _ = l("121631"),
                p = l("417152"),
                f = l("49111"),
                h = l("859546");

            function g(e) {
                let {
                    collection: t,
                    collection: {
                        id: l,
                        title: g,
                        application_directory_collection_items: I
                    }
                } = e, [A, C] = a.useState(300), [E, v] = a.useState(4), x = parseFloat(s.default.COLLECTION_LIST_CARD_GAP), R = (0, u.useApplicationDirectoryHistory)(e => e.guildId), T = (0, p.default)({
                    collection: t
                });
                a.useEffect(() => {
                    function e() {
                        var e;
                        let t = null === (e = T.current) || void 0 === e ? void 0 : e.offsetWidth,
                            l = 1;
                        if (null == t) return 300;
                        t >= 500 && (l = 2), t >= 700 && (l = 3), t >= 1e3 && (l = 4), v(l);
                        let i = (l - 1) * x;
                        return (t - i) / l
                    }
                    let t = T.current;
                    if (null == t) return;
                    let l = new ResizeObserver(() => {
                        C(e())
                    });
                    return C(e()), l.observe(t), () => {
                        l.disconnect()
                    }
                }, [x, T]);
                let N = (0, r.useUID)();
                return (0, i.jsx)("div", {
                    ref: T,
                    children: (0, i.jsx)(_.default, {
                        header: g,
                        headerId: N,
                        tileWidth: A,
                        tileMargin: x,
                        onScroll: e => {
                            let {
                                tileIndex: t
                            } = e, i = I.slice(t, t + E).reduce((e, t) => {
                                let {
                                    type: l,
                                    application: i
                                } = t;
                                return l === n.ApplicationDirectoryCollectionItemType.APPLICATION && null != i && e.push(i.id), e
                            }, []);
                            c.default.track(f.AnalyticEvents.APP_DIRECTORY_COLLECTION_SCROLLED, {
                                collection_id: l,
                                offset: t,
                                results: i,
                                guild_id: R
                            })
                        },
                        children: (0, i.jsx)("ul", {
                            "aria-labelledby": N,
                            className: h.itemsContainer,
                            children: I.map(e => {
                                let {
                                    id: t,
                                    type: a,
                                    application: s
                                } = e;
                                if (a === n.ApplicationDirectoryCollectionItemType.APPLICATION && null != s) return (0, i.jsx)("li", {
                                    style: {
                                        width: A
                                    },
                                    className: h.itemContainer,
                                    children: (0, i.jsx)(o.default, {
                                        href: f.Routes.APPLICATION_DIRECTORY_PROFILE(s.id),
                                        children: (0, i.jsx)(d.default, {
                                            application: s,
                                            onClick: e => {
                                                let {
                                                    mutualGuilds: t
                                                } = e;
                                                c.default.track(f.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                                    collection_id: l,
                                                    application_id: s.id,
                                                    guild_id: R,
                                                    shown_mutual_guilds_count: t.length
                                                }), (0, m.goToApplication)({
                                                    applicationId: s.id
                                                })
                                            },
                                            animatesOnHover: !0
                                        })
                                    })
                                }, t)
                            })
                        })
                    })
                })
            }
        },
        113241: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var i = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("125352"),
                r = l("77078"),
                c = l("599110"),
                o = l("599994"),
                d = l("682777"),
                u = l("653891"),
                m = l("288914"),
                _ = l("412707"),
                p = l("838093"),
                f = l("417152"),
                h = l("49111"),
                g = l("332119");

            function I(e) {
                let {
                    collection: t,
                    collection: {
                        id: l,
                        title: a,
                        application_directory_collection_items: I
                    }
                } = e, A = (0, f.default)({
                    collection: t
                }), C = (0, _.useApplicationDirectoryHistory)(e => e.guildId);
                return (0, i.jsxs)("div", {
                    ref: A,
                    children: [(0, i.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        className: g.header,
                        children: a
                    }), (0, i.jsx)("div", {
                        className: g.list,
                        children: I.map(e => {
                            let {
                                id: t,
                                type: a,
                                application: _,
                                image_hash: f,
                                title: I,
                                description: A,
                                call_to_action_label: E,
                                call_to_action_url: v
                            } = e;
                            if (null == f) return;
                            let x = (0, d.getCollectionItemAssetUrl)({
                                itemId: t,
                                hash: f
                            });
                            return a === s.ApplicationDirectoryCollectionItemType.APPLICATION && null != _ ? (0, i.jsx)(o.default, {
                                href: h.Routes.APPLICATION_DIRECTORY_PROFILE(_.id),
                                className: g.item,
                                children: (0, i.jsx)(u.default, {
                                    imageSrc: x,
                                    application: _,
                                    onClick: e => {
                                        let {
                                            mutualGuilds: t
                                        } = e;
                                        c.default.track(h.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                            collection_id: l,
                                            application_id: _.id,
                                            guild_id: C,
                                            shown_mutual_guilds_count: t.length
                                        }), (0, p.goToApplication)({
                                            applicationId: _.id
                                        })
                                    },
                                    animatesOnHover: !0
                                })
                            }, t) : a === s.ApplicationDirectoryCollectionItemType.LINK && null != I ? (0, i.jsxs)(m.default, {
                                className: n(g.item, g.linkCard),
                                imageSrc: x,
                                header: I,
                                headerClassName: g.cardHeader,
                                children: [(0, i.jsx)(r.Text, {
                                    variant: "text-sm/normal",
                                    className: g.linkDescription,
                                    children: A
                                }), (0, i.jsx)(r.Anchor, {
                                    onClick: () => {
                                        c.default.track(h.AnalyticEvents.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
                                            collection_id: l,
                                            link: v,
                                            guild_id: C,
                                            shown_mutual_guilds_count: void 0
                                        })
                                    },
                                    href: v,
                                    className: n((0, r.getButtonStyle)(), g.linkCta),
                                    children: E
                                })]
                            }, t) : void 0
                        })
                    })]
                })
            }
        },
        769638: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var i = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                r = l("768202"),
                c = l("446674"),
                o = l("313915"),
                d = l("721698"),
                u = l("810047"),
                m = l("449281"),
                _ = l("915267"),
                p = l("201335"),
                f = l("199800"),
                h = l("113241"),
                g = l("461410");

            function I() {
                let e = (0, c.useStateFromStores)([o.default], () => o.default.appDirectoryIncludesInactiveCollections),
                    t = (0, c.useStateFromStores)([u.default], () => u.default.getFetchState({
                        includesInactive: e
                    })),
                    l = (0, c.useStateFromStores)([u.default], () => u.default.getCollections({
                        includesInactive: e
                    }));
                return (a.useEffect(() => {
                    d.getCollections({
                        includesInactive: e
                    })
                }, [e]), t === u.FetchState.ERROR) ? (0, i.jsx)(m.default, {}) : (0, i.jsx)(_.default, {
                    loading: t === u.FetchState.FETCHING,
                    children: null == l ? void 0 : l.map((e, t) => {
                        let a;
                        let n = t > 0 && l[t - 1].type !== r.ApplicationDirectoryCollectionType.GALLERY;
                        switch (e.type) {
                            case r.ApplicationDirectoryCollectionType.LIST:
                                a = (0, i.jsx)(f.default, {
                                    collection: e
                                });
                                break;
                            case r.ApplicationDirectoryCollectionType.LIST_WITH_IMAGE:
                                a = (0, i.jsx)(h.default, {
                                    collection: e
                                });
                                break;
                            case r.ApplicationDirectoryCollectionType.GALLERY:
                                a = (0, i.jsx)(p.default, {
                                    collection: e
                                });
                                break;
                            default:
                                return null
                        }
                        return (0, i.jsx)("div", {
                            className: s({
                                [g.topMargin]: n
                            }),
                            children: a
                        }, e.id)
                    })
                })
            }
        },
        464119: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var i = l("37983"),
                a = l("884691"),
                n = l("77078"),
                s = l("599110"),
                r = l("682777"),
                c = l("436846"),
                o = l("412707"),
                d = l("838093"),
                u = l("49111"),
                m = l("782340"),
                _ = l("417722"),
                p = l("885634");

            function f() {
                let e = (0, o.useApplicationDirectoryHistory)(e => e.guildId),
                    [t, l] = a.useState(""),
                    f = a.useCallback(() => {
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
                return (0, i.jsxs)("div", {
                    className: _.container,
                    children: [(0, i.jsxs)("div", {
                        className: _.searchBarContainer,
                        children: [(0, i.jsx)(n.Heading, {
                            variant: "display-lg",
                            className: _.heading,
                            children: m.default.Messages.APP_DIRECTORY_HERO_HEADING
                        }), (0, i.jsx)(c.default, {
                            className: _.searchBar,
                            query: t,
                            onChange: l,
                            onSubmit: f,
                            canShowCta: !0
                        })]
                    }), (0, i.jsx)("img", {
                        src: p,
                        alt: "",
                        className: _.rightImage
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
            var i = l("37983");
            l("884691");
            var a = l("77078"),
                n = l("545158"),
                s = l("599110"),
                r = l("412707"),
                c = l("49111"),
                o = l("782340"),
                d = l("960919"),
                u = l("196118");

            function m() {
                let e = (0, r.useApplicationDirectoryHistory)(e => e.guildId);
                return (0, i.jsxs)("div", {
                    className: d.container,
                    role: "contentinfo",
                    children: [(0, i.jsx)("img", {
                        className: d.image,
                        src: u,
                        alt: ""
                    }), (0, i.jsxs)("div", {
                        className: d.content,
                        children: [(0, i.jsx)(a.Heading, {
                            variant: "heading-md/semibold",
                            children: o.default.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_HEADING
                        }), (0, i.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            children: o.default.Messages.APP_DIRECTORY_HOME_NEW_TO_APPS_BANNER_BODY
                        })]
                    }), (0, i.jsx)(a.Button, {
                        size: a.Button.Sizes.SMALL,
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
            var i = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("20606"),
                r = l("956089"),
                c = l("782340"),
                o = l("709406");

            function d(e) {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, i.jsx)(r.TextBadge, {
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
                    return g
                }
            });
            var i, a, n = l("37983"),
                s = l("884691"),
                r = l("414456"),
                c = l.n(r),
                o = l("817736"),
                d = l("118810"),
                u = l("77078"),
                m = l("737960"),
                _ = l("137215"),
                p = l("43236");
            (i = a || (a = {}))[i.LEFT = 0] = "LEFT", i[i.RIGHT = 1] = "RIGHT";
            let f = e => {
                let {
                    onClick: t,
                    className: l,
                    direction: i
                } = e;
                return (0, n.jsx)(u.Clickable, {
                    "aria-hidden": !0,
                    className: c(p.scrollerButton, l),
                    onClick: t,
                    children: (0, n.jsx)(_.default, {
                        className: p.scrollerButtonArrow,
                        direction: i
                    })
                })
            };
            class h extends s.Component {
                static getDerivedStateFromProps(e, t) {
                    return t.prevWidth !== e.width ? {
                        tileIndex: 0,
                        prevWidth: e.width,
                        lastArrowDirection: a.LEFT
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
                    } = this.props, l = this.getMaxOffset(), i = e + t;
                    return l - Math.floor(l / i) * i
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
                        tileMargin: i
                    } = this.props;
                    return Math.min(e * (l + i) + (t === a.RIGHT ? this.getSideOffset() : 0), this.getMaxOffset())
                }
                componentDidMount() {
                    this.setScrollerWidth()
                }
                componentDidUpdate(e, t) {
                    if (t.tileIndex !== this.state.tileIndex || t.lastArrowDirection !== this.state.lastArrowDirection) {
                        var l, i, a;
                        let {
                            tileIndex: e
                        } = this.state, t = this.getOffset(this.state.tileIndex, this.state.lastArrowDirection);
                        null === (l = this.advancedScrollerRef.current) || void 0 === l || l.scrollTo({
                            to: t,
                            animate: !0
                        }), null === (i = (a = this.props).onScroll) || void 0 === i || i.call(a, {
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
                        headerId: i,
                        subHeader: s,
                        headerContainerClassName: r,
                        scrollContainerClassName: o
                    } = this.props, d = this.getMaxOffset();
                    return (0, n.jsxs)("div", {
                        children: [(0, n.jsxs)("div", {
                            className: c(p.headerContainer, r),
                            children: [(0, n.jsxs)("div", {
                                children: [(0, n.jsx)(u.Heading, {
                                    id: i,
                                    variant: "heading-lg/semibold",
                                    children: l
                                }), null == s ? null : (0, n.jsx)(u.Text, {
                                    variant: "text-sm/medium",
                                    className: p.subheader,
                                    children: s
                                })]
                            }), d > 0 ? (0, n.jsxs)("div", {
                                className: p.arrowsContainer,
                                children: [(0, n.jsx)(f, {
                                    direction: _.default.Directions.LEFT,
                                    onClick: this.prev,
                                    className: c(p.arrowLeft, {
                                        [p.arrowDisabled]: 0 === e && t === a.LEFT
                                    })
                                }), (0, n.jsx)(f, {
                                    direction: _.default.Directions.RIGHT,
                                    onClick: this.next,
                                    className: c(p.arrowRight, {
                                        [p.arrowDisabled]: e === this.getMaxIndex() && t === a.RIGHT
                                    })
                                })]
                            }) : null]
                        }), (0, n.jsx)("div", {
                            className: c(p.scrollerContainer, o),
                            children: (0, n.jsx)(u.AdvancedScrollerNone, {
                                ref: this.advancedScrollerRef,
                                orientation: "horizontal",
                                className: p.scroller,
                                children: (0, n.jsx)("div", {
                                    className: p.scroller,
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
                        lastArrowDirection: a.LEFT,
                        scrollerWidth: 0
                    }, this.advancedScrollerRef = s.createRef(), this.tileScrollerRef = s.createRef(), this.setScrollerWidth = () => {
                        let e = (0, o.findDOMNode)(this.tileScrollerRef.current);
                        (0, d.isElement)(e, HTMLElement) && e.offsetWidth !== this.state.scrollerWidth && this.setState({
                            scrollerWidth: e.offsetWidth
                        })
                    }, this.prev = () => {
                        this.setState({
                            tileIndex: Math.max(this.state.tileIndex - 1, 0),
                            lastArrowDirection: a.LEFT
                        })
                    }, this.next = () => {
                        this.setState({
                            tileIndex: Math.min(this.state.tileIndex + 1, this.getMaxIndex()),
                            lastArrowDirection: a.RIGHT
                        })
                    }
                }
            }
            var g = (0, m.default)(h)
        },
        417152: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var i = l("884691"),
                a = l("811425"),
                n = l("599110"),
                s = l("412707"),
                r = l("49111");

            function c(e) {
                let {
                    collection: t
                } = e, [l, c] = i.useState(!1), o = (0, s.useApplicationDirectoryHistory)(e => e.guildId), d = (0, a.useIsVisible)(e => {
                    e && c(!0)
                });
                return i.useEffect(() => {
                    l && n.default.track(r.AnalyticEvents.APP_DIRECTORY_COLLECTION_VIEWED, {
                        collection_id: t.id,
                        guild_id: o
                    })
                }, [l, t, o]), d
            }
        },
        413989: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var i = l("37983");
            l("884691");
            var a = l("77078"),
                n = l("782340"),
                s = l("365506");

            function r(e) {
                let {} = e;
                return (0, i.jsxs)("div", {
                    className: s.container,
                    children: [(0, i.jsxs)("div", {
                        className: s.content,
                        children: [(0, i.jsx)(a.Text, {
                            variant: "text-sm/semibold",
                            className: s.title,
                            children: n.default.Messages.APP_DIRECTORY_MUSIC_BANNER_TITLE
                        }), (0, i.jsx)(a.Heading, {
                            variant: "heading-xxl/medium",
                            children: n.default.Messages.APP_DIRECTORY_MUSIC_BANNER_HEADER
                        }), (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: n.default.Messages.APP_DIRECTORY_MUSIC_BANNER_CONTENT
                        })]
                    }), (0, i.jsx)("div", {
                        className: s.imageContainer,
                        children: (0, i.jsx)("img", {
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
            var i = l("37983");
            l("884691");
            var a = l("77078"),
                n = l("545158"),
                s = l("599110"),
                r = l("412707"),
                c = l("49111"),
                o = l("782340"),
                d = l("870179");

            function u(e) {
                let {
                    guildId: t
                } = e;
                return (0, i.jsxs)("div", {
                    className: d.container,
                    children: [(0, i.jsx)("img", {
                        className: d.image,
                        src: l("785417"),
                        alt: ""
                    }), (0, i.jsxs)("div", {
                        className: d.content,
                        children: [(0, i.jsx)(a.Heading, {
                            variant: "heading-md/extrabold",
                            children: o.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_HEADER
                        }), (0, i.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            children: o.default.Messages.APP_DIRECTORY_MUSIC_FOOTER_CONTENT
                        })]
                    }), (0, i.jsx)(a.Button, {
                        size: a.Button.Sizes.SMALL,
                        onClick: function() {
                            s.default.track(c.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
                                cta: "submit_music_app",
                                current_page: r.ApplicationDirectoryViews.SEARCH,
                                guild_id: t
                            }), (0, n.default)("https://dis.gd/music-search-page-inclusion")
                        },
                        color: a.Button.Colors.TRANSPARENT,
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
            var i = l("37983");
            l("884691");
            var a = l("77078"),
                n = l("782340"),
                s = l("496644");

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
                } = e, _ = (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: s.topWrapper,
                        children: [(0, i.jsx)("div", {
                            className: s.imageContainer,
                            children: (0, i.jsx)("img", {
                                alt: "",
                                className: s.image,
                                src: t
                            })
                        }), (0, i.jsxs)("div", {
                            className: s.content,
                            children: [(0, i.jsxs)("div", {
                                className: s.header,
                                children: [(0, i.jsxs)("div", {
                                    className: s.info,
                                    children: [(0, i.jsx)(a.Heading, {
                                        className: s.name,
                                        variant: "heading-md/semibold",
                                        children: l
                                    }), null != o ? o : (0, i.jsx)(i.Fragment, {
                                        children: (0, i.jsxs)("div", {
                                            className: s.details,
                                            children: [(0, i.jsx)(a.Text, {
                                                tag: "span",
                                                color: "header-secondary",
                                                variant: "text-sm/medium",
                                                children: n.default.Messages.APP_DIRECTORY_MUSIC_CATEGORY
                                            }), null != c ? (0, i.jsxs)(i.Fragment, {
                                                children: [(0, i.jsx)(a.Text, {
                                                    tag: "span",
                                                    color: "interactive-muted",
                                                    variant: "text-sm/normal",
                                                    className: s.bullet,
                                                    children: "•"
                                                }), (0, i.jsx)(a.Text, {
                                                    tag: "span",
                                                    color: "header-secondary",
                                                    variant: "text-sm/medium",
                                                    children: c
                                                })]
                                            }) : null]
                                        })
                                    })]
                                }), null != u && null != d ? (0, i.jsx)(a.Button, {
                                    size: a.Button.Sizes.SMALL,
                                    onClick: u,
                                    className: s.button,
                                    children: d
                                }) : null]
                            }), null != r ? (0, i.jsx)(a.Text, {
                                className: s.listingDescription,
                                variant: "text-md/normal",
                                children: r
                            }) : null, (0, i.jsx)("div", {
                                className: s.children,
                                children: m
                            })]
                        })]
                    })
                });
                return (0, i.jsx)(a.FocusRing, {
                    children: (0, i.jsx)("div", {
                        className: s.listing,
                        children: _
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
            var i = l("37983");
            l("884691");
            var a = l("641761"),
                n = l("545158"),
                s = l("599110"),
                r = l("998944"),
                c = l("412707"),
                o = l("838093"),
                d = l("721908"),
                u = l("413989"),
                m = l("649135"),
                _ = l("983616"),
                p = l("49111"),
                f = l("782340"),
                h = l("971441");
            let g = new Map([
                    ["890343617762304070", {
                        imageSrc: l("311537")
                    }]
                ]),
                I = new Map,
                A = new Map([
                    [p.PlatformTypes.SPOTIFY, {
                        imageSrc: l("911871")
                    }]
                ]);

            function C(e) {
                var t, l;
                let {
                    result: a
                } = e, n = a.data, s = (0, d.default)({
                    application: n
                }), c = g.get(a.data.id);
                if (null == c) return null;
                let u = s.length > 0 ? (0, i.jsx)(r.default, {
                        application: a.data,
                        textVariant: "text-sm/semibold",
                        mutualGuilds: s,
                        mutualGuildShownMax: 3,
                        guildIconSize: r.GuildIconSize.SMALL,
                        compact: !0
                    }) : null,
                    m = null !== (l = null === (t = n.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== l ? l : 0,
                    p = m > 0 ? f.default.Messages.APP_DIRECTORY_SHORT_GUILD_COUNT.format({
                        guildCount: m
                    }) : void 0;
                return (0, i.jsx)(_.default, {
                    imageSrc: c.imageSrc,
                    header: a.data.name,
                    description: a.data.description,
                    secondaryInfo: p,
                    ctaLabel: f.default.Messages.APPLICATION_ADD_TO_SERVER,
                    mutualGuildCount: u,
                    onCtaClick: () => (0, o.goToApplication)({
                        applicationId: n.id
                    })
                })
            }

            function E(e) {
                let {
                    result: t
                } = e, l = I.get(t.data.id);
                return null == l ? null : (0, i.jsx)(_.default, {
                    imageSrc: l.imageSrc,
                    header: t.data.name,
                    description: t.data.description,
                    secondaryInfo: f.default.Messages.APP_DIRECTORY_ACTIVITY_LABEL
                })
            }

            function v(e) {
                let t, l, a, {
                        result: r,
                        guildId: o
                    } = e,
                    d = A.get(r.data.name);
                return null == d ? null : (r.data.name === p.PlatformTypes.SPOTIFY && (t = f.default.Messages.APP_DIRECTORY_SPOTIFY_TITLE, l = f.default.Messages.APP_DIRECTORY_SPOTIFY_DESCRIPTION.format(), a = () => {
                    s.default.track(p.AnalyticEvents.APP_DIRECTORY_CTA_CLICKED, {
                        current_page: c.ApplicationDirectoryViews.SEARCH,
                        cta: "spotify",
                        guild_id: o
                    }), (0, n.default)("https://support.discord.com/hc/en-us/articles/360000167212-Discord-Spotify-Connection")
                }), null == t || null == l || null == a) ? null : (0, i.jsx)(_.default, {
                    imageSrc: d.imageSrc,
                    header: t,
                    description: l,
                    ctaLabel: f.default.Messages.LEARN_MORE,
                    onCtaClick: a,
                    secondaryInfo: f.default.Messages.APP_DIRECTORY_CONNECTION_LABEL
                })
            }

            function x(e) {
                let {
                    results: t,
                    guildId: l
                } = e;
                return (0, i.jsxs)("div", {
                    className: h.container,
                    children: [(0, i.jsx)(u.default, {}), (0, i.jsx)("div", {
                        className: h.list,
                        children: t.map((e, t) => {
                            let n = "".concat(t).concat(e.type);
                            if (e.type === a.ApplicationDirectorySearchResultType.APPLICATION) return (0, i.jsx)(C, {
                                result: e
                            }, n);
                            if (e.type === a.ApplicationDirectorySearchResultType.ACTIVITY_APPLICATION) return (0, i.jsx)(E, {
                                result: e
                            }, n);
                            if (e.type === a.ApplicationDirectorySearchResultType.CONNECTION) return (0, i.jsx)(v, {
                                guildId: l,
                                result: e
                            }, n)
                        })
                    }), (0, i.jsx)(m.default, {
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
            var i = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                r = l("597755"),
                c = l.n(r),
                o = l("132710"),
                d = l.n(o),
                u = l("394846"),
                m = l("316693"),
                _ = l("617258"),
                p = l("446674"),
                f = l("669491"),
                h = l("769846"),
                g = l("77078"),
                I = l("549825"),
                A = l("590177"),
                C = l("180612"),
                E = l("798609"),
                v = l("612039"),
                x = l("545158"),
                R = l("389153"),
                T = l("650509"),
                N = l("913678"),
                P = l("462274"),
                y = l("69927"),
                j = l("861370"),
                O = l("978970"),
                S = l("393414"),
                D = l("485422"),
                L = l("915639"),
                M = l("271938"),
                b = l("471671"),
                Y = l("9074"),
                k = l("837899"),
                G = l("425190"),
                H = l("433487"),
                F = l("599110"),
                w = l("315102"),
                U = l("306160"),
                B = l("449008"),
                V = l("794818"),
                W = l("721698"),
                K = l("349503"),
                z = l("388647"),
                q = l("598981"),
                Z = l("136110"),
                X = l("146691"),
                J = l("682777"),
                Q = l("726902"),
                $ = l("998944"),
                ee = l("915267"),
                et = l("331793"),
                el = l("412707"),
                ei = l("838093"),
                ea = l("721908"),
                en = l("178350"),
                es = l("608129"),
                er = l("149462"),
                ec = l("370570"),
                eo = l("137246"),
                ed = l("750947"),
                eu = l("49111"),
                em = l("782340"),
                e_ = l("746974"),
                ep = l("103104");
            let ef = d.parserFor(er.default),
                eh = d.reactFor(d.ruleOutput(er.default, "react")),
                eg = (0, _.cssValueToNumber)(h.default.APPLICATION_DIRECTORY_PROFILE_ICON_SIZE),
                eI = "redirect_to_support_server",
                eA = "start_application_install",
                eC = e => "".concat(location.protocol, "//").concat(location.host).concat(eu.Routes.APPLICATION_DIRECTORY_PROFILE(e)),
                eE = e => {
                    if (null == e) return null;
                    let t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/);
                    return null != t ? t[1] : null
                };

            function ev(e) {
                var t, n, r, o;
                let d, {
                        applicationId: _,
                        initialSection: h
                    } = e,
                    E = (0, el.useApplicationDirectoryHistory)(e => e.guildId),
                    k = (0, q.default)(),
                    G = a.useRef(_),
                    er = a.useRef(!1),
                    eE = (0, p.useStateFromStores)([z.default], () => z.default.getFetchState({
                        applicationId: _,
                        guildId: E
                    }) === z.FetchState.FETCHING),
                    ev = a.useRef({
                        applicationId: void 0,
                        guildId: void 0
                    }),
                    {
                        similarApplications: eT,
                        similarLoadId: eN
                    } = (0, p.useStateFromStoresObject)([z.default], () => {
                        var e, t;
                        let l = {
                                applicationId: _,
                                guildId: E
                            },
                            i = z.default.getSimilarApplications(l);
                        return null == i ? i = z.default.getSimilarApplications(ev.current) : ev.current = l, {
                            similarApplications: null === (e = i) || void 0 === e ? void 0 : e.applications,
                            similarLoadId: null === (t = i) || void 0 === t ? void 0 : t.loadId
                        }
                    }),
                    eP = a.useMemo(() => null == eT ? void 0 : eT.slice(0, 3), [eT]),
                    ey = (0, p.useStateFromStores)([K.default], () => K.default.getApplicationFetchState(_)),
                    [ej, eO] = a.useState(void 0),
                    [eS, eD] = a.useState(null != h ? h : ed.ApplicationDirectoryProfileSections.GENERAL),
                    eL = (0, p.useStateFromStores)([b.default], () => b.default.isFocused()),
                    eM = (0, p.useStateFromStores)([L.default], () => L.default.locale),
                    eb = a.useRef(_),
                    eY = (0, p.useStateFromStores)([K.default], () => {
                        let e = K.default.getApplication(_);
                        return null == e ? e = K.default.getApplication(eb.current) : eb.current = _, e
                    }),
                    ek = (0, ea.default)({
                        application: eY
                    }),
                    eG = (0, p.useStateFromStores)([M.default], () => M.default.getSessionId());
                (0, y.usePageTitle)({
                    location: null == eY ? void 0 : eY.name
                });
                let eH = a.useCallback(async () => {
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
                a.useEffect(() => {
                    if (null == eY) return;
                    let e = new URL(location.href);
                    if (k && null != eG && "true" === e.searchParams.get(eI)) {
                        e.searchParams.delete(eI);
                        let t = e.pathname + e.search;
                        (0, S.replaceWith)(t), eH()
                    }
                }, [k, eH, eG, eY]);
                let eF = a.useCallback(() => {
                    var e;
                    let t = null == eY ? void 0 : null === (e = eY.guild) || void 0 === e ? void 0 : e.id;
                    null != t && (k ? eH() : (0, J.redirectToLogin)({
                        [eI]: "true"
                    }))
                }, [eY, k, eH]);
                a.useEffect(() => {
                    null != _ && (eS === ed.ApplicationDirectoryProfileSections.GENERAL ? (0, ei.replaceAppDirectoryURLWith)("".concat(eu.Routes.APPLICATION_DIRECTORY_PROFILE(_)).concat(location.search)) : (0, ei.replaceAppDirectoryURLWith)("".concat(eu.Routes.APPLICATION_DIRECTORY_PROFILE(_, eS.toLowerCase())).concat(location.search)))
                }, [_, eS]), a.useEffect(() => {
                    null != _ && W.getApplication(_)
                }, [_]), a.useEffect(() => {
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
                }, [eY]), a.useEffect(() => {
                    null != _ && G.current !== _ && (eD(ed.ApplicationDirectoryProfileSections.GENERAL), G.current = void 0)
                }, [_]);
                let ew = w.default.getApplicationIconURL({
                        id: null !== (r = null == eY ? void 0 : eY.id) && void 0 !== r ? r : "-1",
                        icon: null == eY ? void 0 : eY.icon,
                        size: eg
                    }),
                    eU = (0, P.default)(ew, f.default.unsafe_rawColors.PRIMARY_800.css),
                    eB = (0, j.default)({
                        id: null !== (o = null == eY ? void 0 : eY.id) && void 0 !== o ? o : "",
                        label: em.default.Messages.COPY_ID_APPLICATION
                    }),
                    {
                        canInstall: eV,
                        install: eW
                    } = (0, X.useInstallApplication)(eY, E),
                    eK = null === (t = (0, el.getPreviousView)()) || void 0 === t ? void 0 : t.type;
                a.useEffect(() => {
                    (null == eY ? void 0 : eY.id) != null && F.default.track(eu.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
                        current_page: "product",
                        previous_page: eK,
                        application_id: eY.id,
                        guild_id: E,
                        shown_mutual_guilds_count: ek.length
                    })
                }, [null == eY ? void 0 : eY.id, E, ek]);
                let ez = a.useMemo(() => {
                        var e;
                        let t = null == eY ? void 0 : null === (e = eY.install_params) || void 0 === e ? void 0 : e.permissions;
                        if (null != t) return O.OrderedPermissions.filter(e => m.default.has(m.default.deserialize(t), e))
                    }, [null == eY ? void 0 : null === (n = eY.install_params) || void 0 === n ? void 0 : n.permissions]),
                    eq = a.useCallback(e => {
                        eD(e), er.current = !0, (null == eY ? void 0 : eY.id) != null && F.default.track(eu.AnalyticEvents.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                            application_id: eY.id,
                            guild_id: E,
                            tab_name: e
                        })
                    }, [null == eY ? void 0 : eY.id, E]),
                    eZ = a.useMemo(() => {
                        var e, t, l;
                        return null !== (l = (null !== (t = null == eY ? void 0 : null === (e = eY.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== t ? t : []).map(ex).filter(B.isNotNullish)) && void 0 !== l ? l : []
                    }, [eY]),
                    eX = a.useCallback((e, t) => {
                        if (e.type === eu.CarouselMediaTypes.IMG) {
                            let t = eZ.filter(e => e.type === eu.CarouselMediaTypes.IMG),
                                a = t.findIndex(t => t === e);
                            if (a < 0) return;
                            let n = t.map(e => ({
                                src: (0, A.transformAssetURL)(e.src),
                                width: e.width,
                                height: e.height
                            }));
                            (0, g.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await l.el("100814").then(l.bind(l, "100814"));
                                return t => {
                                    let {
                                        ...l
                                    } = t;
                                    return (0, i.jsx)(e, {
                                        ...l,
                                        items: n,
                                        startingIndex: a,
                                        modalCarouselItemClassName: e_.appSlide
                                    })
                                }
                            })
                        }
                    }, [eZ]),
                    eJ = a.useCallback(e => {
                        (null == eY ? void 0 : eY.id) != null && F.default.track(eu.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
                            current_page: "product",
                            category: e.name,
                            category_id: e.id,
                            application_id: eY.id,
                            guild_id: E
                        }), (0, ei.goToCategory)({
                            categoryId: e.id
                        })
                    }, [eY, E]);
                a.useEffect(() => {
                    null != _ && W.getSimilarApplications({
                        applicationId: _,
                        guildId: E
                    })
                }, [_, E]);
                let eQ = a.useCallback(e => {
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
                        }), (0, ei.goToApplication)({
                            applicationId: t.id
                        })
                    }, [null == eY ? void 0 : eY.id, eN, E]),
                    e$ = a.useCallback(() => {
                        null != eY && (0, x.default)(function(e, t) {
                            let l = "https://".concat(eu.SUPPORT_DOMAIN, "/hc/").concat(e.toLowerCase(), "/requests/new"),
                                i = new URLSearchParams;
                            return i.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), i.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), i.append("tf_12094971213335", t.id), i.append("ticket_form_id", "12275528604823"), i.append("tf_subject", "App Directory Report ".concat(t.name, " ").concat(t.id)), "".concat(l, "?").concat(i.toString())
                        }(eM, eY))
                    }, [eM, eY]),
                    e0 = a.useCallback(e => (0, i.jsxs)(g.Menu, {
                        navId: "application-directory-profile",
                        "aria-label": em.default.Messages.APP_DIRECTORY_PROFILE_UTILITIES_A11Y_LABEL,
                        onClose: e,
                        onSelect: void 0,
                        children: [(0, i.jsx)(g.MenuGroup, {
                            children: (0, i.jsx)(g.MenuItem, {
                                id: "report",
                                label: em.default.Messages.REPORT_APP,
                                color: "danger",
                                action: e$
                            })
                        }), null != eB ? (0, i.jsx)(g.MenuGroup, {
                            children: eB
                        }) : null]
                    }), [eB, e$]),
                    [e1, e9] = (0, v.default)(!1, 1e3),
                    e8 = a.useCallback(() => {
                        null != eY && (F.default.track(eu.AnalyticEvents.APP_SHARE_BUTTON_CLICKED, {
                            source: "product_page",
                            application_id: eY.id,
                            guild_id: E
                        }), (0, U.copy)(eC(eY.id)), e9(!0))
                    }, [eY, e9, E]);
                a.useEffect(() => {
                    let e = new URL(location.href);
                    if (k && "true" === e.searchParams.get(eA)) {
                        e.searchParams.delete(eA);
                        let t = e.pathname + e.search;
                        (0, S.replaceWith)(t), eW("product_page")
                    }
                }, [k, eW]);
                let e4 = a.useCallback(() => {
                        null != eY && (k ? eW("product_page") : (F.default.track(eu.AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, {
                            application_id: _,
                            guild_id: E,
                            auth_type: null != eY.custom_install_url ? "custom_url" : "in_app",
                            source: "product_page",
                            device_platform: u.isMobile ? "mobile_web" : "desktop_web"
                        }), (0, J.redirectToLogin)({
                            [eA]: "true"
                        })))
                    }, [eY, k, eW, _, E]),
                    {
                        applicationSubscriptionListingsShown: e7
                    } = (0, T.default)({
                        applicationId: null == eY ? void 0 : eY.id,
                        groupListingId: null == eY ? void 0 : eY.primary_sku_id,
                        guildId: E
                    }),
                    e3 = (null == eY ? void 0 : eY.id) === "936929561302675456",
                    [e6, e5] = a.useState(!1),
                    [e2, te] = a.useState(!1),
                    [tt, tl] = a.useState(!0),
                    ti = e => {
                        null != e && e5(e.scrollHeight > e.clientHeight)
                    },
                    ta = null != ez && ez.length > 0,
                    tn = (null == eY ? void 0 : eY.flags) != null,
                    ts = a.useMemo(() => {
                        var e, t;
                        let l = [],
                            a = !0;
                        switch (eS) {
                            case ed.ApplicationDirectoryProfileSections.GENERAL: {
                                let n = null == eY ? void 0 : null === (e = eY.directory_entry) || void 0 === e ? void 0 : e.detailed_description;
                                null != n && n.length > 0 ? (l.push((0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(g.Heading, {
                                        className: e_.sectionHeader,
                                        variant: "heading-md/semibold",
                                        children: em.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                    }), (0, i.jsx)("div", {
                                        ref: ti,
                                        className: s({
                                            [e_.descriptionClamp]: !e2,
                                            [e_.descriptionClampSafari]: !e2 && "Safari" === c.name
                                        }),
                                        children: (0, i.jsx)(Y.default, {
                                            className: e_.detailedDescription,
                                            parser: ef,
                                            output: eh,
                                            children: n
                                        })
                                    }), (e6 || e2) && (0, i.jsx)(eR, {
                                        isViewAll: e2,
                                        onToggle: () => {
                                            te(e => !e)
                                        }
                                    })]
                                })), a = !1) : (null == eY ? void 0 : null === (t = eY.directory_entry) || void 0 === t ? void 0 : t.short_description) !== void 0 ? l.push((0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(g.Heading, {
                                        className: e_.sectionHeader,
                                        variant: "heading-md/semibold",
                                        children: em.default.Messages.APP_DIRECTORY_PROFILE_DESCRIPTION_HEADING
                                    }), (0, i.jsx)("span", {
                                        children: eY.directory_entry.short_description
                                    })]
                                })) : (null == eY ? void 0 : eY.description) != null && l.push((0, i.jsx)(D.default, {
                                    className: e_.description,
                                    userBio: eY.description
                                })), null != ej && ej.length > 0 && (l.push((0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(g.Heading, {
                                        className: e_.sectionHeader,
                                        variant: "heading-md/semibold",
                                        children: em.default.Messages.APP_DIRECTORY_PROFILE_COMMANDS_HEADING
                                    }), (0, i.jsx)(en.default, {
                                        className: e_.commandList,
                                        commands: ej
                                    })]
                                })), a = !0);
                                break
                            }
                            case ed.ApplicationDirectoryProfileSections.IMAGES: {
                                let e = (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("img", {
                                        className: e_.errorImage,
                                        src: ep,
                                        "aria-hidden": !0,
                                        alt: ""
                                    }), (0, i.jsx)(g.Heading, {
                                        variant: "heading-xl/semibold",
                                        children: em.default.Messages.ERRORS_IMAGE_NOT_FOUND
                                    })]
                                });
                                eZ.forEach((e, t) => {
                                    null != eY ? e.alt = em.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_CAROUSEL_ALT.format({
                                        index: t + 1,
                                        totalImages: eZ.length,
                                        name: eY.name
                                    }) : e.alt = em.default.Messages.APP_DIRECTORY_PROFILE_IMAGE_DEFAULT_ALT
                                }), l.push((0, i.jsx)(C.default, {
                                    className: e_.carousel,
                                    themedPagination: !0,
                                    items: eZ,
                                    autoplayInterval: 8e3,
                                    paused: !eL,
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
                                e7 && (null == eY ? void 0 : eY.primary_sku_id) != null && l.push((0, i.jsx)(N.default, {
                                    applicationId: eY.id,
                                    applicationPrimarySkuId: null == eY ? void 0 : eY.primary_sku_id,
                                    analyticsLocation: eu.AnalyticsLocations.APP_DIRECTORY_PROFILE,
                                    forcesTransitionToGuild: !0
                                }));
                                break;
                            case ed.ApplicationDirectoryProfileSections.PRIVACY:
                                ta && l.push((0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(g.Heading, {
                                        className: e_.sectionHeader,
                                        variant: "heading-md/semibold",
                                        children: em.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
                                    }), (0, i.jsx)(I.default, {
                                        className: e_.commandList,
                                        grantedPermissions: ez,
                                        grantedPermissionsHeader: em.default.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
                                    })]
                                })), tn && l.push((0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(g.Heading, {
                                        className: e_.sectionHeader,
                                        variant: "heading-md/semibold",
                                        children: em.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_HEADING
                                    }), (0, i.jsx)(es.default, {
                                        application: eY
                                    })]
                                }))
                        }
                        return tl(a), l.map((e, t) => (0, i.jsx)("div", {
                            className: e_.section,
                            children: e
                        }, t))
                    }, [eY, e7, eZ, ej, ez, eX, eL, eS, e2, e6, ta, tn]),
                    tr = a.useMemo(() => {
                        let e = G.current === _,
                            t = e && !er.current,
                            l = [{
                                sectionName: ed.ApplicationDirectoryProfileSections.GENERAL,
                                sectionText: em.default.Messages.APP_DIRECTORY_PROFILE_TAB_GENERAL
                            }];
                        return eZ.length > 0 && (l.push({
                            sectionName: ed.ApplicationDirectoryProfileSections.IMAGES,
                            sectionText: em.default.Messages.APP_DIRECTORY_PROFILE_TAB_IMAGES
                        }), t && h === ed.ApplicationDirectoryProfileSections.IMAGES && eD(h)), e7 && (l.push({
                            sectionName: ed.ApplicationDirectoryProfileSections.PREMIUM,
                            sectionText: em.default.Messages.APP_DIRECTORY_PROFILE_TAB_PREMIUM
                        }), t && h === ed.ApplicationDirectoryProfileSections.PREMIUM && eD(h)), (ta || tn) && (l.push({
                            sectionName: ed.ApplicationDirectoryProfileSections.PRIVACY,
                            sectionText: em.default.Messages.APP_DIRECTORY_PROFILE_TAB_PRIVACY
                        }), t && h === ed.ApplicationDirectoryProfileSections.PRIVACY && eD(h)), l
                    }, [eZ.length, e7, ta, tn, h, _]);
                return d = null == eY ? null == ey || ey === K.FetchState.FETCHING ? (0, i.jsx)(ee.default, {
                    loading: ey === K.FetchState.FETCHING
                }) : (0, i.jsx)("div", {
                    className: e_.page,
                    children: (0, i.jsxs)("div", {
                        className: e_.emptyContainer,
                        children: [(0, i.jsx)("img", {
                            className: e_.emptyImage,
                            src: ep,
                            alt: ""
                        }), (0, i.jsx)(g.Heading, {
                            variant: "heading-xl/semibold",
                            children: em.default.Messages.APP_DIRECTORY_PROFILE_EMPTY_HEADING
                        })]
                    })
                }) : (0, i.jsxs)(ee.default, {
                    loading: ey === K.FetchState.FETCHING,
                    children: [(0, i.jsx)("div", {
                        style: {
                            backgroundColor: eU
                        },
                        className: e_.headerBanner
                    }), (0, i.jsxs)("div", {
                        className: e_.page,
                        children: [(0, i.jsxs)("div", {
                            className: e_.header,
                            children: [(0, i.jsxs)("div", {
                                className: e_.headerSidebar,
                                children: [(0, i.jsx)("img", {
                                    className: e_.headerIcon,
                                    alt: "",
                                    "aria-hidden": !0,
                                    src: ew,
                                    width: eg,
                                    height: eg
                                }), (0, i.jsx)($.default, {
                                    application: eY,
                                    mutualGuilds: ek,
                                    mutualGuildShownMax: 3,
                                    compact: !0
                                })]
                            }), (0, i.jsxs)("div", {
                                className: e_.headerContent,
                                children: [(0, i.jsxs)("div", {
                                    className: e_.headerNameAndButtons,
                                    children: [(0, i.jsxs)("div", {
                                        className: e_.headerNameAndIcon,
                                        children: [(0, i.jsx)(g.Heading, {
                                            className: e_.name,
                                            variant: "heading-xxl/semibold",
                                            children: eY.name
                                        }), e7 && (0, i.jsx)(g.Tooltip, {
                                            tooltipClassName: e_.premiumIconTooltip,
                                            text: em.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                            children: e => (0, i.jsx)("img", {
                                                ...e,
                                                alt: em.default.Messages.APPLICATION_DIRECTORY_PROFILE_TOOLTIP_PREMIUM,
                                                className: e_.premiumIcon,
                                                src: l("92640")
                                            })
                                        }), e3 && (0, i.jsx)(et.default, {
                                            className: e_.partnerBadge
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: s(e_.buttons),
                                        children: [(0, i.jsx)(g.Button, {
                                            onClick: e8,
                                            color: g.Button.Colors.PRIMARY,
                                            children: e1 ? em.default.Messages.INTEGRATIONS_WEBHOOK_COPIED_URL : em.default.Messages.APP_DIRECTORY_PROFILE_SHARE_BUTTON
                                        }), (0, i.jsx)(g.Button, {
                                            color: g.Button.Colors.BRAND,
                                            onClick: e4,
                                            disabled: !eV,
                                            children: em.default.Messages.APP_DIRECTORY_PROFILE_ADD_BUTTON
                                        }), (0, i.jsx)(g.Popout, {
                                            renderPopout: e => {
                                                let {
                                                    closePopout: t
                                                } = e;
                                                return e0(t)
                                            },
                                            position: "left",
                                            align: "top",
                                            animation: g.Popout.Animation.NONE,
                                            children: e => (0, i.jsx)(g.Clickable, {
                                                className: e_.overflow,
                                                ...e,
                                                children: (0, i.jsx)(H.default, {
                                                    width: 20,
                                                    height: 20,
                                                    className: e_.iconInteractive
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, i.jsx)(eo.default, {
                                    activeSection: eS,
                                    setSection: eq,
                                    shownSections: tr
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: e_.contentContainer,
                            children: [(0, i.jsxs)("div", {
                                className: e_.content,
                                children: [ts, null != eP && eP.length > 0 ? (0, i.jsxs)(i.Fragment, {
                                    children: [tt && (0, i.jsx)("div", {
                                        className: e_.separator
                                    }), (0, i.jsxs)("div", {
                                        className: e_.section,
                                        children: [(0, i.jsx)(g.Heading, {
                                            className: e_.relatedHeader,
                                            variant: "eyebrow",
                                            children: em.default.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
                                        }), (0, i.jsx)(ee.default, {
                                            loading: eE,
                                            children: (0, i.jsx)(Q.default, {
                                                applications: eP,
                                                onViewOne: eQ
                                            })
                                        })]
                                    })]
                                }) : null]
                            }), (0, i.jsx)(ec.default, {
                                className: e_.sidebar,
                                application: eY,
                                guildId: E,
                                onViewCategory: eJ,
                                onClickGuildWidget: eF
                            })]
                        })]
                    })]
                }), (0, i.jsx)(Z.default, {
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
                        let i = eE(e.url);
                        if (null != i) return {
                            type: eu.CarouselMediaTypes.YOUTUBE_VIDEO,
                            youtubeVideoId: i
                        }
                }
                return console.warn("Unsupported carousel item", e), null
            }
            let eR = e => {
                    let t, {
                        onToggle: l,
                        isViewAll: a
                    } = e;
                    return t = a ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(g.Text, {
                            className: e_.showMoreButtonText,
                            variant: "eyebrow",
                            children: em.default.Messages.APP_DIRECTORY_PROFILE_SHOW_LESS
                        }), (0, i.jsx)(G.default, {
                            className: e_.showMoreButtonIcon
                        })]
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(g.Text, {
                            className: e_.showMoreButtonText,
                            variant: "eyebrow",
                            children: em.default.Messages.APP_DIRECTORY_PROFILE_SHOW_MORE
                        }), (0, i.jsx)(k.default, {
                            className: e_.showMoreButtonIcon
                        })]
                    }), (0, i.jsx)(eT, {
                        children: (0, i.jsx)(g.Button, {
                            look: g.Button.Looks.BLANK,
                            color: g.Button.Colors.TRANSPARENT,
                            size: g.Button.Sizes.NONE,
                            className: e_.showMoreButton,
                            innerClassName: e_.showMoreButtonInner,
                            onClick: l,
                            children: t
                        })
                    })
                },
                eT = e => {
                    let {
                        className: t,
                        contentClassName: l,
                        children: a
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: s([e_.dividerContainer, t]),
                        children: [(0, i.jsx)("div", {
                            className: e_.divider
                        }), null != a ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: s(e_.contentDivider, l),
                                children: a
                            }), (0, i.jsx)("div", {
                                className: e_.divider
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
            var i = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("77078"),
                r = l("406291"),
                c = l("115448");

            function o(e) {
                let {
                    commands: t,
                    className: l
                } = e;
                return (0, i.jsx)("div", {
                    className: n(c.list, l),
                    children: t.map(e => (0, i.jsxs)("div", {
                        className: c.row,
                        children: [(0, i.jsxs)(s.Text, {
                            className: c.commandName,
                            variant: "text-md/semibold",
                            color: "header-primary",
                            children: [r.COMMAND_SENTINEL, e.displayName]
                        }), (0, i.jsx)(s.Text, {
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
                    return A
                }
            });
            var i = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                r = l("77078"),
                c = l("291373"),
                o = l("109264"),
                d = l("155207"),
                u = l("849483"),
                m = l("701909"),
                _ = l("128259"),
                p = l("49111"),
                f = l("782340"),
                h = l("420163");
            let g = m.default.getArticleURL(p.HelpdeskArticles.BOT_DATA_ACCESS);

            function I(e) {
                let {
                    icon: t,
                    heading: l,
                    body: a
                } = e;
                return (0, i.jsxs)("li", {
                    className: h.intentContainer,
                    children: [(0, i.jsx)("div", {
                        children: (0, i.jsx)(t, {
                            height: "24",
                            width: "24"
                        })
                    }), (0, i.jsxs)("div", {
                        className: h.intentTextContainer,
                        children: [(0, i.jsx)("div", {
                            children: (0, i.jsx)(r.Heading, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: l
                            })
                        }), (0, i.jsx)("div", {
                            className: h.intentBody,
                            children: (0, i.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: a
                            })
                        })]
                    })]
                })
            }

            function A(e) {
                let {
                    application: t
                } = e, {
                    hasMessageContent: l,
                    hasGuildPresences: n,
                    hasGuildMembers: m,
                    hasIntents: p
                } = (0, c.useBotDataAccess)({
                    flags: null == t ? void 0 : t.flags
                }), A = a.useCallback(() => {
                    (null == t ? void 0 : t.privacy_policy_url) != null && (0, _.handleClick)({
                        href: t.privacy_policy_url
                    })
                }, [null == t ? void 0 : t.privacy_policy_url]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [p && (0, i.jsx)("div", {
                        className: h.intentsListHeading,
                        children: (0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_INTENTS_LIST_HEADING
                        })
                    }), (0, i.jsxs)("div", {
                        className: h.intentsContainer,
                        children: [p && (0, i.jsxs)("ul", {
                            className: h.intentsList,
                            children: [l && (0, i.jsx)(I, {
                                icon: o.default,
                                heading: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_HEADING,
                                body: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_BODY
                            }), n && (0, i.jsx)(I, {
                                icon: u.default,
                                heading: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_HEADING,
                                body: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_BODY
                            }), m && (0, i.jsx)(I, {
                                icon: d.default,
                                heading: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_HEADING,
                                body: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_BODY
                            })]
                        }), (0, i.jsxs)("div", {
                            className: s({
                                [h.hasSeparator]: p
                            }),
                            children: [(0, i.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: f.default.Messages.BOTS_DATA_ACCESS_BASELINE.format({
                                    helpCenterUrl: g
                                })
                            }), (null == t ? void 0 : t.privacy_policy_url) != null && (0, i.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                className: h.privacyPolicy,
                                children: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_PRIVACY_POLICY_V2.format({
                                    onClick: A
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
                    return C
                }
            });
            var i = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("77078"),
                r = l("841098"),
                c = l("407063"),
                o = l("813006"),
                d = l("580357"),
                u = l("109024"),
                m = l("781896"),
                _ = l("587974"),
                p = l("315102"),
                f = l("49111"),
                h = l("782340"),
                g = l("722142"),
                I = l("68422"),
                A = l("578817");

            function C(e) {
                let {
                    guild: t,
                    className: l,
                    onClick: a
                } = e, C = (0, r.default)(), E = new o.default({
                    name: t.name,
                    icon: t.icon
                }), v = p.default.getGuildDiscoverySplashURL({
                    id: t.id,
                    splash: t.discovery_splash,
                    size: 192 * (0, c.getDevicePixelRatio)()
                }), x = null != v ? v : function(e) {
                    switch (e) {
                        case f.ThemeTypes.DARK:
                            return I;
                        case f.ThemeTypes.LIGHT:
                            return A
                    }
                }(C), R = p.default.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 50
                });
                return (0, i.jsxs)(s.Clickable, {
                    className: n(g.card, l),
                    onClick: a,
                    "aria-label": h.default.Messages.APP_DIRECTORY_JOIN_SERVER_LABEL,
                    children: [(0, i.jsxs)("div", {
                        className: g.cardHeader,
                        children: [(0, i.jsx)("img", {
                            src: x,
                            alt: "",
                            className: g.splashImage
                        }), (0, i.jsx)("div", {
                            className: g.guildIcon,
                            children: (0, i.jsx)(_.default, {
                                mask: _.default.Masks.AVATAR_DEFAULT,
                                width: 58,
                                height: 58,
                                children: (0, i.jsx)("div", {
                                    className: g.iconMask,
                                    children: (0, i.jsx)(u.default, {
                                        className: g.icon,
                                        iconSrc: R,
                                        guild: E,
                                        size: u.default.Sizes.LARGE
                                    })
                                })
                            })
                        })]
                    }), (0, i.jsxs)("div", {
                        className: g.cardDetails,
                        children: [(0, i.jsxs)("div", {
                            className: g.guildNameWrapper,
                            children: [(0, i.jsx)(d.default, {
                                className: g.guildBadge,
                                guild: t,
                                tooltipColor: s.Tooltip.Colors.PRIMARY
                            }), (0, i.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                className: g.guildName,
                                children: t.name
                            })]
                        }), (0, i.jsx)(s.Text, {
                            className: g.guildDescription,
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            lineClamp: 2,
                            children: t.description
                        }), (0, i.jsx)("div", {
                            className: g.memberInfo,
                            children: (0, i.jsxs)("div", {
                                className: g.memberCountWrapper,
                                children: [(0, i.jsx)(m.default, {
                                    className: g.memberCountIcon,
                                    width: "16",
                                    height: "16"
                                }), (0, i.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
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
                    return _
                }
            });
            var i = l("37983");
            l("884691");
            var a = l("77078"),
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
                            let i = (0, c.findCodedLink)(e[0]);
                            return null == i || i.type !== r.CodedLinkType.INVITE ? {
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
                                        inviteKey: i.code,
                                        context: {
                                            location: "Application Directory"
                                        }
                                    }), null === (e = l.closeModal) || void 0 === e || e.call(l)
                                }
                            }
                        },
                        react: (e, t, l) => (0, i.jsx)(a.Anchor, {
                            onClick: t => {
                                t.preventDefault(), e.onClick()
                            },
                            children: (0, o.smartOutput)(e, t, l)
                        }, l.key)
                    }
                };
            var _ = m
        },
        370570: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            });
            var i = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                r = l("819855"),
                c = l("77078"),
                o = l("340616"),
                d = l("841098"),
                u = l("376556"),
                m = l("83900"),
                _ = l("45029"),
                p = l("599110"),
                f = l("599994"),
                h = l("598981"),
                g = l("519359"),
                I = l("675945"),
                A = l("49111"),
                C = l("782340"),
                E = l("478318");
            let v = C.default.getAvailableLocales();

            function x(e) {
                var t, l, a;
                let {
                    onClick: n,
                    url: s,
                    children: c
                } = e, o = (0, d.default)(), _ = u.default.getByUrl(s), p = (0, r.isThemeDark)(o) ? null == _ ? void 0 : null === (t = _.icon) || void 0 === t ? void 0 : t.darkSVG : null == _ ? void 0 : null === (l = _.icon) || void 0 === l ? void 0 : l.lightSVG;
                return (0, i.jsx)(R, {
                    icon: void 0 === p ? m.default : void 0,
                    imageSrc: p,
                    onClick: n,
                    url: s,
                    type: null !== (a = null == _ ? void 0 : _.name) && void 0 !== a ? a : "website",
                    children: c
                })
            }

            function R(e) {
                let {
                    icon: t,
                    imageSrc: l,
                    iconColor: a,
                    url: n,
                    type: r,
                    children: d,
                    onClick: u
                } = e, m = (0, h.default)(), _ = null;
                null != t ? _ = (0, i.jsx)(t, {
                    className: E.listIcon,
                    color: a,
                    width: 20,
                    height: 20
                }) : null != l && (_ = (0, i.jsx)("img", {
                    className: E.listImage,
                    src: l,
                    alt: ""
                }));
                let p = (0, i.jsxs)(i.Fragment, {
                    children: [_, (0, i.jsx)(c.Text, {
                        className: E.listText,
                        variant: "text-md/normal",
                        selectable: !0,
                        children: d
                    })]
                });
                return (0, i.jsx)(o.default, {
                    href: n,
                    className: s(E.listItem, E.linkItem),
                    onClick: () => (u(n, r), !1),
                    trusted: !m,
                    useDefaultUnderlineStyles: !1,
                    children: p
                })
            }

            function T(e) {
                var t, l, n;
                let {
                    application: r,
                    guildId: o,
                    className: d,
                    onViewCategory: u,
                    onClickGuildWidget: h
                } = e, [T, N] = a.useState(null), P = [], y = null !== (l = null == r ? void 0 : null === (t = r.directory_entry) || void 0 === t ? void 0 : t.external_urls) && void 0 !== l ? l : [];
                a.useEffect(() => {
                    var e;
                    if ((null === (e = r.directory_entry) || void 0 === e ? void 0 : e.supported_locales) !== void 0) {
                        let e = new Set(r.directory_entry.supported_locales),
                            t = v.filter(t => e.has(t.value));
                        N(t.map(e => e.localizedName))
                    }
                }, [r.directory_entry]);
                let j = (e, t) => {
                    p.default.track(A.AnalyticEvents.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED, {
                        application_id: r.id,
                        guild_id: o,
                        type: t,
                        url: e
                    })
                };
                return null != r.categories && r.categories.length > 0 && P.push((0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(c.Heading, {
                        className: E.sectionHeader,
                        variant: "eyebrow",
                        children: C.default.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING
                    }), (0, i.jsx)("div", {
                        className: E.categories,
                        children: (null !== (n = r.categories) && void 0 !== n ? n : []).map(e => {
                            let t = new URLSearchParams;
                            return t.set("category_id", e.id.toString()), (0, i.jsx)(f.default, {
                                href: "".concat(A.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(t),
                                children: (0, i.jsx)(c.Clickable, {
                                    className: E.category,
                                    onClick: () => u(e),
                                    children: (0, i.jsx)(c.Text, {
                                        variant: "text-sm/normal",
                                        color: "header-primary",
                                        children: e.name
                                    })
                                })
                            }, e.id)
                        })
                    })]
                })), null != T && T.length > 0 && P.push((0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(c.Heading, {
                        className: E.sectionHeader,
                        variant: "eyebrow",
                        children: C.default.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING
                    }), (0, i.jsx)(I.default, {
                        supportedLanguages: T
                    })]
                })), (null != r.terms_of_service_url || null != r.privacy_policy_url || y.length > 0) && P.push((0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(c.Heading, {
                        className: E.sectionHeader,
                        variant: "eyebrow",
                        children: C.default.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING
                    }), y.map((e, t) => (0, i.jsx)(x, {
                        url: e.url,
                        onClick: j,
                        children: e.name
                    }, t)), null != r.terms_of_service_url ? (0, i.jsx)(R, {
                        icon: m.default,
                        onClick: j,
                        url: r.terms_of_service_url,
                        type: "tos",
                        children: C.default.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK
                    }) : null, null != r.privacy_policy_url ? (0, i.jsx)(R, {
                        icon: _.default,
                        onClick: j,
                        url: r.privacy_policy_url,
                        type: "policy",
                        children: C.default.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK
                    }) : null]
                })), null != r.guild && r.guild.features.includes(A.GuildFeatures.DISCOVERABLE) && P.push((0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(c.Heading, {
                        className: E.sectionHeader,
                        variant: "eyebrow",
                        children: C.default.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING
                    }), (0, i.jsx)(g.default, {
                        guild: r.guild,
                        onClick: h
                    })]
                })), (0, i.jsx)("div", {
                    className: s(E.sidebar, d),
                    children: P.length > 0 ? (0, i.jsx)(i.Fragment, {
                        children: P.map((e, t) => (0, i.jsx)("div", {
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
            var i = l("37983");
            l("884691");
            var a = l("414456"),
                n = l.n(a),
                s = l("77078"),
                r = l("519902");

            function c(e) {
                let {
                    supportedLanguages: t
                } = e;
                return (0, i.jsx)("ul", {
                    className: r.outerContainer,
                    children: t.map(e => (0, i.jsx)("li", {
                        className: n(r.innerContainer, r.languageItem),
                        children: (0, i.jsx)(s.Text, {
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
            var i = l("37983");
            l("884691");
            var a = l("77078"),
                n = l("728584");

            function s(e) {
                let {
                    activeSection: t,
                    setSection: l,
                    shownSections: s
                } = e;
                return (0, i.jsx)(a.TabBar, {
                    selectedItem: t,
                    type: "top",
                    onItemSelect: l,
                    className: n.tabBar,
                    children: s.map(e => (0, i.jsx)(a.TabBar.Item, {
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
            var i = l("37983"),
                a = l("884691"),
                n = l("917351"),
                s = l.n(n),
                r = l("642852"),
                c = l.n(r),
                o = l("90915"),
                d = l("974667"),
                u = l("641761"),
                m = l("997076"),
                _ = l("65597"),
                p = l("77078"),
                f = l("302437"),
                h = l("599110"),
                g = l("721698"),
                I = l("599994"),
                A = l("831109"),
                C = l("856894"),
                E = l("136110"),
                v = l("682777"),
                x = l("898656"),
                R = l("619288"),
                T = l("915267"),
                N = l("436846"),
                P = l("46425"),
                y = l("412707"),
                j = l("838093"),
                O = l("718765"),
                S = l("49111"),
                D = l("658072"),
                L = l("968579");

            function M() {
                var e;
                let t;
                let l = (0, y.useApplicationDirectoryHistory)(e => e.guildId),
                    n = (0, _.default)([A.default], () => A.default.getCategories()),
                    r = (0, o.useLocation)(),
                    {
                        queryParam: c,
                        pageParam: d,
                        categoryIdParam: p
                    } = a.useMemo(() => {
                        let e = new URLSearchParams(r.search);
                        return {
                            queryParam: e.get("q"),
                            pageParam: e.get("page"),
                            categoryIdParam: e.get("category_id")
                        }
                    }, []),
                    [f, I] = a.useState(null != d ? Number(d) : 1),
                    [x, M] = a.useState(null != c ? c : ""),
                    [Y, k] = a.useState(null !== (e = Number(p)) && void 0 !== e ? e : v.ALL_CATEGORY_ID),
                    G = a.useMemo(() => null == n ? void 0 : n.find(e => e.id === Y), [n, Y]),
                    H = a.useCallback(e => {
                        k(e.id), I(1)
                    }, []),
                    F = a.useCallback(e => {
                        M(e), I(1), 0 === e.length && k(v.ALL_CATEGORY_ID)
                    }, []),
                    w = a.useCallback(e => {
                        var t, l;
                        let {
                            query: i,
                            categoryId: a,
                            page: n
                        } = e, s = new URLSearchParams(r.search);
                        "" === i ? s.delete("q") : s.set("q", i), a === v.ALL_CATEGORY_ID ? s.delete("category_id") : s.set("category_id", null !== (t = null == a ? void 0 : a.toString()) && void 0 !== t ? t : ""), 1 === n ? s.delete("page") : s.set("page", null !== (l = null == n ? void 0 : n.toString()) && void 0 !== l ? l : ""), (0, j.replaceAppDirectoryURLWith)("".concat(S.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(s.toString()))
                    }, [r.search]),
                    U = a.useMemo(() => s.debounce(w, 400), [w]);
                a.useEffect(() => {
                    U({
                        query: x,
                        categoryId: Y,
                        page: f
                    })
                }, [U, x, Y, f]);
                let B = (0, _.default)([C.default], () => C.default.getFetchState({
                        query: x,
                        guildId: l,
                        page: f,
                        categoryId: Y
                    })),
                    V = a.useRef({
                        query: "",
                        guildId: void 0,
                        page: void 0,
                        categoryId: void 0
                    }),
                    W = (0, _.useStateFromStoresObject)([C.default], () => {
                        let e = C.default.getSearchResults({
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
                        searchResultsType: q,
                        loadId: Z
                    } = (0, _.useStateFromStoresObject)([C.default], () => {
                        var e, t, i, a, n, s;
                        let r = {
                                query: x,
                                guildId: l,
                                page: f,
                                categoryId: Y
                            },
                            c = C.default.getSearchResults(r);
                        return null == c ? c = C.default.getSearchResults(V.current) : V.current = r, {
                            pageResults: null === (e = c) || void 0 === e ? void 0 : e.results,
                            pageCount: null !== (n = null === (t = c) || void 0 === t ? void 0 : t.totalPages) && void 0 !== n ? n : 0,
                            searchResultsType: null !== (s = null === (i = c) || void 0 === i ? void 0 : i.type) && void 0 !== s ? s : m.ApplicationDirectorySearchType.SEARCH_RESULTS,
                            loadId: null === (a = c) || void 0 === a ? void 0 : a.loadId
                        }
                    }),
                    X = a.useMemo(() => null == K ? void 0 : K.filter(e => !(q === m.ApplicationDirectorySearchType.SEARCH_RESULTS && e.type !== u.ApplicationDirectorySearchResultType.APPLICATION)), [K, q]),
                    J = a.useRef(null),
                    Q = (0, y.getCurrentView)(),
                    $ = a.useCallback(e => {
                        h.default.track(S.AnalyticEvents.APP_DIRECTORY_SEARCHED, {
                            search_term: x,
                            num_results: e,
                            current_page: null == Q ? void 0 : Q.type,
                            result_page: f,
                            category: null == G ? void 0 : G.name,
                            category_id: null == G ? void 0 : G.id,
                            guild_id: l
                        })
                    }, [null == G ? void 0 : G.id, null == G ? void 0 : G.name, f, l, x, Q]),
                    ee = a.useCallback(e => {
                        let {
                            query: t,
                            page: l,
                            activeCategoryId: i,
                            onSuccessCallback: a,
                            guildId: n,
                            fetchCounts: s
                        } = e;
                        s && g.search({
                            query: t,
                            guildId: n
                        }), g.search({
                            query: t,
                            guildId: n,
                            options: {
                                page: l,
                                categoryId: i
                            },
                            onSuccessCallback: a
                        }), J.current = t
                    }, []),
                    [et] = a.useState(() => s.debounce(ee, 400, {
                        leading: !1,
                        trailing: !0
                    })),
                    el = a.useCallback(e => {
                        I(e)
                    }, [I]),
                    ei = a.useCallback(e => {
                        let {
                            application: t,
                            mutualGuilds: i
                        } = e;
                        h.default.track(S.AnalyticEvents.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                            current_page: y.ApplicationDirectoryViews.SEARCH,
                            application_id: t.id,
                            load_id: Z,
                            search_term: x,
                            guild_id: l,
                            shown_mutual_guilds_count: i.length
                        }), (0, j.goToApplication)({
                            applicationId: t.id
                        })
                    }, [Z, x, l]);
                a.useEffect(() => {
                    ee({
                        query: x,
                        page: f,
                        activeCategoryId: Y,
                        guildId: l,
                        fetchCounts: x !== J.current,
                        onSuccessCallback: $
                    })
                }, [ee, G, l, f]), a.useEffect(() => {
                    et({
                        query: x,
                        page: f,
                        activeCategoryId: Y,
                        guildId: l,
                        fetchCounts: x !== J.current,
                        onSuccessCallback: $
                    })
                }, [x, et]);
                let ea = a.useMemo(() => Object.keys(W).length > 0, [W]);
                return null != X && 0 === z || B === C.FetchState.ERROR ? t = (0, i.jsx)(R.default, {
                    category: G,
                    onViewAll: () => {
                        I(1), k(v.ALL_CATEGORY_ID)
                    }
                }) : null != X && X.length > 0 && q === m.ApplicationDirectorySearchType.SEARCH_RESULTS ? t = (0, i.jsx)(b, {
                    items: X,
                    pageCount: z,
                    currentPage: f,
                    showPrimaryCategory: Y === v.ALL_CATEGORY_ID,
                    onItemClick: ei,
                    onChangePage: el
                }) : null != X && X.length > 0 && q === m.ApplicationDirectorySearchType.MUSIC && (t = (0, i.jsx)(P.default, {
                    guildId: l,
                    results: X
                })), (0, i.jsx)(E.default, {
                    children: (0, i.jsxs)("div", {
                        className: D.page,
                        children: [(0, i.jsxs)("div", {
                            className: D.sidebar,
                            children: [(0, i.jsx)("img", {
                                src: L,
                                alt: "",
                                className: D.sidebarImage
                            }), (0, i.jsx)(O.default, {
                                className: D.categoryList,
                                countsByCategory: ea ? W : void 0,
                                currentCategoryId: Y,
                                onView: H
                            })]
                        }), (0, i.jsxs)("div", {
                            className: D.content,
                            children: [(0, i.jsx)(N.default, {
                                query: x,
                                onChange: F
                            }), (0, i.jsx)(T.default, {
                                loading: B === C.FetchState.FETCHING,
                                children: (0, i.jsx)("div", {
                                    className: D.contentContainer,
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
                } = e, o = (0, f.default)("application-directory-search");
                return (0, i.jsxs)(a.Fragment, {
                    children: [(0, i.jsx)(d.ListNavigatorProvider, {
                        navigator: o,
                        children: (0, i.jsx)(d.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: l,
                                    ...a
                                } = e;
                                return (0, i.jsx)("ul", {
                                    ref: l,
                                    ...a,
                                    children: t.map(e => {
                                        if (e.type === u.ApplicationDirectorySearchResultType.APPLICATION) {
                                            var t;
                                            let l;
                                            let a = e.data;
                                            return (null === (t = a.directory_entry) || void 0 === t ? void 0 : t.short_description) != null && a.directory_entry.short_description.length > 0 ? l = a.directory_entry.short_description : null != a.description && a.description.length > 0 && (l = a.description), (0, i.jsx)(I.default, {
                                                href: S.Routes.APPLICATION_DIRECTORY_PROFILE(a.id),
                                                children: (0, i.jsx)(x.default, {
                                                    className: D.listing,
                                                    childrenClassName: D.listingDetails,
                                                    application: a,
                                                    onView: e => {
                                                        let {
                                                            mutualGuilds: t
                                                        } = e;
                                                        return r({
                                                            application: a,
                                                            mutualGuilds: t
                                                        })
                                                    },
                                                    showMutualGuilds: !0,
                                                    showPrimaryCategory: s,
                                                    source: "search",
                                                    children: null != l ? (0, i.jsx)(p.Text, {
                                                        className: D.listingDescription,
                                                        variant: "text-md/normal",
                                                        lineClamp: 3,
                                                        children: l
                                                    }) : null
                                                })
                                            }, a.id)
                                        }
                                    })
                                })
                            }
                        })
                    }), (0, i.jsx)(p.Paginator, {
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
                    return h
                }
            });
            var i = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                r = l("65597"),
                c = l("77078"),
                o = l("599110"),
                d = l("599994"),
                u = l("831109"),
                m = l("682777"),
                _ = l("412707"),
                p = l("49111"),
                f = l("988865");

            function h(e) {
                let {
                    currentCategoryId: t,
                    className: l,
                    countsByCategory: n,
                    onView: h
                } = e, g = (0, _.useApplicationDirectoryHistory)(e => e.guildId), I = (0, r.default)([u.default], () => u.default.getCategories()), A = a.useMemo(() => {
                    let e = [(0, m.getAllCategory)(), ...I];
                    return e
                }, [I]), C = (0, _.getCurrentView)();
                return (0, i.jsx)(c.TabBar, {
                    className: s(f.container, l),
                    selectedItem: t,
                    type: "top-pill",
                    onItemSelect: e => {
                        if (e === t) return;
                        let l = A.find(t => t.id === e);
                        o.default.track(p.AnalyticEvents.APP_DIRECTORY_CATEGORY_CLICKED, {
                            category: l.name,
                            category_id: l.id,
                            current_page: null == C ? void 0 : C.type,
                            guild_id: g
                        }), h(l)
                    },
                    orientation: "vertical",
                    children: A.map(e => {
                        var l;
                        let a = e.id,
                            r = e.name,
                            o = (0, m.getCategoryIcon)(e),
                            u = s(f.category, {
                                [f.activeCategory]: t === a
                            }),
                            _ = new URLSearchParams;
                        return _.set("category_id", a.toString()), (0, i.jsx)(c.TabBar.Item, {
                            id: a,
                            "aria-label": r,
                            disableItemStyles: !0,
                            children: (0, i.jsxs)(d.default, {
                                href: "".concat(p.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(_),
                                className: u,
                                children: [(0, i.jsx)(o, {
                                    className: f.icon,
                                    width: "24",
                                    height: "24"
                                }), (0, i.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    children: r
                                }), null != n ? (0, i.jsx)(c.Text, {
                                    className: f.count,
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: null !== (l = null == n ? void 0 : n[a]) && void 0 !== l ? l : 0
                                }) : null]
                            })
                        }, a)
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
            var i = l("884691"),
                a = l("446674"),
                n = l("305961"),
                s = l("506061");

            function r(e) {
                let {
                    application: t,
                    showMutualGuilds: l = !0
                } = e, r = (0, a.useStateFromStores)([s.default], () => s.default.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]), c = (0, a.useStateFromStores)([n.default], () => n.default.isLoaded());
                return i.useMemo(() => {
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
                    return a
                }
            });
            var i = l("182333");

            function a(e) {
                let {
                    flags: t
                } = e, l = (0, i.usePrivilegedApplicationIntents)(t), a = null != l && ((null == l ? void 0 : l.messageContent) || (null == l ? void 0 : l.messageContentLimited)), n = null != l && ((null == l ? void 0 : l.guildPresences) || (null == l ? void 0 : l.guildPresencesLimited)), s = null != l && ((null == l ? void 0 : l.guildMembers) || (null == l ? void 0 : l.guildMembersLimited));
                return {
                    hasMessageContent: a,
                    hasGuildPresences: n,
                    hasGuildMembers: s,
                    hasIntents: a || n || s
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
            var i = l("568734"),
                a = l("49111");

            function n(e) {
                if (null != e) return {
                    guildPresences: (0, i.hasFlag)(e, a.ApplicationFlags.GATEWAY_PRESENCE),
                    guildMembers: (0, i.hasFlag)(e, a.ApplicationFlags.GATEWAY_GUILD_MEMBERS),
                    messageContent: (0, i.hasFlag)(e, a.ApplicationFlags.GATEWAY_MESSAGE_CONTENT),
                    guildPresencesLimited: (0, i.hasFlag)(e, a.ApplicationFlags.GATEWAY_PRESENCE_LIMITED),
                    guildMembersLimited: (0, i.hasFlag)(e, a.ApplicationFlags.GATEWAY_GUILD_MEMBERS_LIMITED),
                    messageContentLimited: (0, i.hasFlag)(e, a.ApplicationFlags.GATEWAY_MESSAGE_CONTENT_LIMITED)
                }
            }
        }
    }
]);