            "use strict";
            n.r(t), n.d(t, {
                DiscoverSearchResultPlaceholder: function() {
                    return O
                },
                default: function() {
                    return L
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("77078"),
                o = n("272030"),
                u = n("685665"),
                d = n("407063"),
                c = n("141254"),
                E = n("116616"),
                f = n("580357"),
                _ = n("587974"),
                h = n("315102"),
                C = n("794818"),
                I = n("378662"),
                T = n("574921"),
                S = n("311092"),
                N = n("613088"),
                A = n("49111"),
                m = n("782340"),
                p = n("750408"),
                g = n("68422"),
                R = n("578817");
            let O = () => (0, a.jsx)("div", {
                className: p.placeholder
            });
            var L = e => {
                var t;
                let {
                    guild: i,
                    theme: O,
                    onView: L,
                    onTagClick: v
                } = e, {
                    id: M,
                    discoverySplash: P,
                    icon: D,
                    name: y,
                    description: x,
                    presenceCount: b,
                    memberCount: U,
                    keywords: G
                } = i, [j, k] = s.useState(!1), [w, F] = s.useState(!1), {
                    analyticsLocations: B
                } = (0, u.default)(), H = h.default.getGuildDiscoverySplashURL({
                    id: M,
                    splash: P,
                    size: 240 * (0, d.getDevicePixelRatio)()
                }), V = null != H ? H : function(e) {
                    switch (e) {
                        case A.ThemeTypes.DARK:
                            return g;
                        case A.ThemeTypes.LIGHT:
                            return R
                    }
                }(O), Y = null !== (t = h.default.getGuildIconURL({
                    id: M,
                    icon: D,
                    size: 32
                })) && void 0 !== t ? t : void 0, W = async e => {
                    let {
                        className: t
                    } = e.target;
                    if (!t.includes("Menu")) {
                        if ((0, c.isAtGuildCapAndNonPremium)()) {
                            (0, E.default)({
                                analyticsSource: {
                                    page: A.AnalyticsPages.GUILD_DISCOVERY
                                },
                                analyticsLocation: {
                                    page: A.AnalyticsPages.GUILD_DISCOVERY,
                                    section: A.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
                                },
                                analyticsLocations: B
                            });
                            return
                        }
                        F(!0);
                        try {
                            null != L && await L(i.id)
                        } finally {
                            F(!1)
                        }
                    }
                };
                s.useEffect(() => T.DiscoveryTagsExperiment.trackExposure({
                    location: "4302e4_1"
                }));
                let {
                    shouldDisplayTags: K
                } = T.DiscoveryTagsExperiment.useExperiment({
                    location: "4302e4_2"
                }, {
                    autoTrackExposure: !1
                }), z = (0, I.useCanSeeDiscoveryContextMenu)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: p.card,
                        children: [w ? (0, a.jsx)(r.Spinner, {
                            type: r.Spinner.Type.PULSING_ELLIPSIS,
                            className: p.spinner
                        }) : null, (0, a.jsxs)(r.Clickable, {
                            className: l(p.container, {
                                [p.hover]: j,
                                [p.submitting]: w
                            }),
                            onClick: W,
                            onContextMenu: e => {
                                (0, o.openContextMenuLazy)(e, async () => {
                                    let {
                                        default: e
                                    } = await n.el("392533").then(n.bind(n, "392533"));
                                    return t => (0, a.jsx)(e, {
                                        ...t,
                                        guild: i
                                    })
                                })
                            },
                            onMouseEnter: () => k(!0),
                            onMouseLeave: () => k(!1),
                            children: [(0, a.jsx)("div", {
                                className: l(p.splashContainer, {
                                    [p.splashContainerWithTags]: K
                                }),
                                children: (0, a.jsx)("img", {
                                    src: V,
                                    alt: "",
                                    className: p.splashImage,
                                    width: 240
                                })
                            }), (0, a.jsxs)("div", {
                                className: l(p.content, {
                                    [p.contentWithTags]: K
                                }),
                                children: [(0, a.jsxs)("div", {
                                    className: p.header,
                                    children: [(0, a.jsx)(_.default, {
                                        mask: _.default.Masks.SQUIRCLE,
                                        width: 32,
                                        height: 32,
                                        children: (0, a.jsx)("img", {
                                            src: Y,
                                            alt: "",
                                            className: p.avatar
                                        })
                                    }), (0, a.jsxs)("div", {
                                        className: p.headerName,
                                        children: [(0, a.jsx)("div", {
                                            children: (0, a.jsx)(f.default, {
                                                guild: i,
                                                className: p.guildBadge,
                                                size: 16
                                            })
                                        }), (0, a.jsx)(r.Heading, {
                                            variant: "heading-md/semibold",
                                            className: p.headerTitle,
                                            children: y
                                        })]
                                    })]
                                }), (0, a.jsx)(r.Text, {
                                    className: p.description,
                                    variant: "text-sm/normal",
                                    children: x
                                }), K && null != G && null != v && (0, a.jsx)(S.DiscoveryTags, {
                                    guildId: i.id,
                                    discoveryTagStyle: S.DiscoveryTagStyle.ALT,
                                    onTagClick: e => v(e, i.id),
                                    tags: G,
                                    section: C.AnalyticsContexts.SEARCH
                                }), (0, a.jsxs)("div", {
                                    className: p.memberInfo,
                                    children: [null != b && (0, a.jsx)("div", {
                                        className: p.memberCount,
                                        children: (0, a.jsx)(r.Text, {
                                            variant: "text-xs/normal",
                                            color: "header-secondary",
                                            children: m.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                                membersOnline: b
                                            })
                                        })
                                    }), null != U && (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)("div", {
                                            className: p.dotSeparator
                                        }), (0, a.jsx)("div", {
                                            className: p.memberCount,
                                            children: (0, a.jsx)(r.Text, {
                                                variant: "text-xs/normal",
                                                color: "header-secondary",
                                                children: m.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                                    count: U
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            }), z ? (0, a.jsx)("div", {
                                className: p.actionButtons,
                                children: (0, a.jsx)(N.default, {
                                    guild: i
                                })
                            }) : null]
                        })]
                    }), (0, a.jsx)("hr", {
                        className: p.separator
                    })]
                })
            }