            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("907002"),
                o = n("394846"),
                u = n("77078"),
                d = n("51565"),
                c = n("845579"),
                f = n("794352"),
                h = n("290581"),
                C = n("315102"),
                p = n("974755"),
                m = n("49111"),
                E = n("695838"),
                g = n("782340"),
                I = n("217997");

            function S(e) {
                var t;
                let {
                    guild: n,
                    controller: a,
                    guildBanner: s,
                    animate: u
                } = e, {
                    value: d
                } = a.springs, f = c.GifAutoPlay.getSetting();
                return (0, l.jsx)(r.animated.div, {
                    className: I.animatedContainer,
                    style: {
                        opacity: d,
                        transform: d.to(e => "translateY(-".concat((1 - e) * 90, "px)"))
                    },
                    children: (0, l.jsx)(r.animated.div, {
                        className: i(I.bannerImage, {
                            [I.bannerImgFullWidth]: o.isMobile
                        }),
                        style: {
                            transform: d.to(e => f ? "translateY(".concat((1 - e) * 60, "px) scale(").concat(1 + (1 - e) * .2, ")") : "translateY(".concat((1 - e) * 90, "px)"))
                        },
                        children: (0, l.jsx)("img", {
                            className: i(I.bannerImg, {
                                [I.bannerImgFullWidth]: o.isMobile
                            }),
                            src: null !== (t = C.default.getGuildBannerURL({
                                id: n.id,
                                banner: s
                            }, u)) && void 0 !== t ? t : "",
                            alt: "",
                            height: 135,
                            width: 240,
                            "aria-hidden": !0
                        })
                    })
                })
            }

            function _(e) {
                let {
                    guild: t,
                    controller: n,
                    hasBanner: a,
                    hasSubheader: s
                } = e, {
                    value: o
                } = n.springs, d = t.hasFeature(m.GuildFeatures.DISCOVERABLE), c = (0, l.jsx)("div", {
                    className: I.communityInfo,
                    children: d && (0, l.jsx)(u.Tooltip, {
                        text: g.default.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC_INFO,
                        position: "right",
                        children: e => (0, l.jsxs)("div", {
                            className: I.communityInfoPill,
                            ...e,
                            children: [(0, l.jsx)(f.default, {
                                width: 12,
                                height: 12,
                                className: I.communityIcon
                            }), (0, l.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "none",
                                children: g.default.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC
                            })]
                        })
                    })
                });
                return s ? (0, l.jsx)("div", {
                    className: i(I.communityInfoContainer, I.hasSubheader),
                    children: c
                }) : (0, l.jsx)(r.animated.div, {
                    className: I.communityInfoContainer,
                    style: a ? {
                        opacity: o
                    } : {
                        height: o.to(e => "".concat(20 * e, "px"))
                    },
                    children: c
                })
            }

            function N() {
                return (0, l.jsx)(h.default, {
                    className: I.favoritesIcon,
                    height: 20,
                    width: 20
                })
            }
            var T = a.memo(function(e) {
                var t;
                let {
                    bannerVisible: n,
                    controller: s,
                    className: r,
                    onClick: f,
                    onContextMenu: h,
                    onMouseDown: T,
                    disableBannerAnimation: A,
                    "aria-expanded": L,
                    "aria-controls": v,
                    guild: x,
                    guildBanner: R,
                    animationOverlayHeight: M,
                    children: O,
                    headerClassName: y,
                    communityInfoVisible: D,
                    hasSubheader: b
                } = e, j = x.hasFeature(m.GuildFeatures.ANIMATED_BANNER), G = (0, d.default)(x), U = !G && x.hasCommunityInfoSubheader(), P = (0, C.isAnimatedIconHash)(R) && j && !A, [w, F] = a.useState(!1), B = a.useRef(), V = a.useRef(null), H = a.useRef(), k = c.GifAutoPlay.getSetting();
                a.useEffect(() => {
                    if (P && n && !B.current && k) return F(!0), H.current = setTimeout(() => {
                        F(!1)
                    }, 5e3), () => {
                        clearTimeout(H.current)
                    }
                }, [P, n, k]), a.useEffect(() => {
                    B.current = n
                }, [n]);
                let Y = () => {
                    let {
                        renderBanner: t,
                        guildBanner: n
                    } = e;
                    return null != n && !t
                };
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        ref: V,
                        className: i(r, {
                            [I.container]: !0,
                            [I.clickable]: null != f,
                            [I.selected]: null != f && L,
                            [I.hasBanner]: Y(),
                            [I.bannerVisible]: n,
                            [I.communityInfoVisible]: !G && D || b && U
                        }),
                        onMouseDown: T,
                        onContextMenu: h,
                        onClick: f,
                        children: [(0, l.jsxs)("header", {
                            className: i(I.header, y, {
                                [I.themedHeaderMobile]: o.isMobile
                            }),
                            children: [(0, l.jsxs)("div", {
                                className: i(I.headerContent, I.primaryInfo),
                                children: [(0, l.jsx)(p.default, {
                                    guild: x,
                                    isBannerVisible: n
                                }), (0, l.jsxs)(u.Text, {
                                    color: "none",
                                    variant: "text-md/semibold",
                                    lineClamp: 1,
                                    className: I.name,
                                    children: [x.id === E.FAVORITES_RAW_GUILD_ID && (0, l.jsx)(N, {}), x.toString()]
                                }), null != f && (0, l.jsx)(u.Clickable, {
                                    className: I.headerButton,
                                    "aria-controls": v,
                                    "aria-expanded": L,
                                    focusProps: {
                                        ringTarget: V,
                                        offset: 4
                                    },
                                    onClick: f,
                                    onContextMenu: h,
                                    "aria-label": g.default.Messages.GUILD_SIDEBAR_ACTIONS_BUTTON.format({
                                        guildName: null !== (t = null == x ? void 0 : x.toString()) && void 0 !== t ? t : ""
                                    })
                                }), (0, l.jsx)("div", {
                                    className: I.headerChildren,
                                    children: O
                                })]
                            }), U && (0, l.jsx)(_, {
                                guild: x,
                                controller: s,
                                hasBanner: null != R,
                                hasSubheader: null != b && b
                            })]
                        }), null != R ? (0, l.jsx)(S, {
                            guild: x,
                            controller: s,
                            guildBanner: R,
                            animate: w
                        }) : null]
                    }), P && Y() ? (0, l.jsx)("div", {
                        className: I.animatedBannerHoverLayer,
                        onMouseEnter: () => {
                            F(!0), clearTimeout(H.current)
                        },
                        onMouseLeave: () => F(!1),
                        style: {
                            height: M
                        }
                    }) : null]
                })
            })