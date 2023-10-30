(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["23497"], {
        825701: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                StarIcon: function() {
                    return s
                }
            });
            var o = r("37983");
            r("884691");
            var l = r("669491"),
                a = r("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...n
                } = e;
                return (0, o.jsx)("svg", {
                    ...(0, a.default)(n),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, o.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M10.815 2.861c.373-1.148 1.997-1.148 2.37 0l1.893 5.824H21.2c1.207 0 1.71 1.545.733 2.255l-4.954 3.599 1.892 5.824c.373 1.148-.941 2.103-1.918 1.393L12 18.156l-4.954 3.6c-.977.71-2.291-.245-1.918-1.393L7.02 14.54l-4.954-3.6c-.976-.71-.475-2.254.733-2.254h6.123l1.893-5.824Z",
                        className: i
                    })
                })
            }
        },
        614858: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                BadgeCategory: function() {
                    return l
                },
                getBadgeCategory: function() {
                    return s
                }
            });
            var o, l, a = r("883474");

            function s(e) {
                return e.staff ? l.STAFF : e.verified && e.partnered ? l.VERIFIED_AND_PARTNERED : e.verified ? l.VERIFIED : e.partnered ? l.PARTNERED : e.community && e.visibility === a.GuildVisibility.PUBLIC ? l.DISCOVERABLE : e.community ? l.COMMUNITY : l.NONE
            }(o = l || (l = {}))[o.PARTNERED = 0] = "PARTNERED", o[o.VERIFIED = 1] = "VERIFIED", o[o.VERIFIED_AND_PARTNERED = 2] = "VERIFIED_AND_PARTNERED", o[o.COMMUNITY = 3] = "COMMUNITY", o[o.DISCOVERABLE = 4] = "DISCOVERABLE", o[o.STAFF = 5] = "STAFF", o[o.NONE = 6] = "NONE"
        },
        347924: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useInServerBadgingExperiment: function() {
                    return a
                }
            });
            var o = r("862205");
            let l = (0, o.createExperiment)({
                kind: "guild",
                id: "2023-04_server_badging",
                label: "Server Badging",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Server Badging",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function a(e) {
                let {
                    enabled: t
                } = l.useExperiment({
                    guildId: e,
                    location: "482926_1"
                }, {
                    autoTrackExposure: !1
                });
                return t
            }
        },
        883474: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GuildVisibility: function() {
                    return l
                },
                getGuildTraits: function() {
                    return i
                }
            });
            var o, l, a = r("813006"),
                s = r("49111");

            function i(e) {
                let t = new Set(e.features),
                    r = t.has(s.GuildFeatures.COMMUNITY) && t.has(s.GuildFeatures.DISCOVERABLE) ? l.PUBLIC : l.INVITE_ONLY,
                    o = function(e) {
                        return null != e && (e instanceof a.default ? e.premiumSubscriberCount > 0 || e.premiumTier > s.BoostedGuildTiers.NONE : null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0)
                    }(e),
                    i = 0;
                if (o) {
                    var n;
                    i = null !== (n = e instanceof a.default ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== n ? n : 0
                }
                let u = e instanceof a.default ? e.premiumTier : s.BoostedGuildTiers.NONE;
                return {
                    verified: t.has(s.GuildFeatures.VERIFIED),
                    partnered: t.has(s.GuildFeatures.PARTNERED),
                    community: t.has(s.GuildFeatures.COMMUNITY),
                    staff: t.has(s.GuildFeatures.INTERNAL_EMPLOYEE_ONLY),
                    visibility: r,
                    premium: o,
                    premiumSubscriberCount: i,
                    premiumTier: u
                }
            }(o = l || (l = {})).PUBLIC = "PUBLIC", o.INVITE_ONLY = "INVITE_ONLY"
        },
        51565: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var o = r("614858"),
                l = r("347924"),
                a = r("883474");
            let s = new Set([o.BadgeCategory.PARTNERED, o.BadgeCategory.VERIFIED, o.BadgeCategory.VERIFIED_AND_PARTNERED, o.BadgeCategory.COMMUNITY, o.BadgeCategory.DISCOVERABLE]);

            function i(e) {
                var t;
                let r = (0, l.useInServerBadgingExperiment)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "");
                if (!r || null == e) return !1;
                let i = (0, a.getGuildTraits)(e),
                    n = (0, o.getBadgeCategory)(i);
                return s.has(n)
            }
        },
        40469: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return v
                }
            });
            var o = r("37983");
            r("884691");
            var l = r("414456"),
                a = r.n(l),
                s = r("446674"),
                i = r("669491"),
                n = r("819855"),
                u = r("77078"),
                d = r("614858"),
                c = r("883474"),
                f = r("95039"),
                E = r("161778"),
                C = r("26989"),
                g = r("697218"),
                _ = r("427459"),
                I = r("931138"),
                N = r("791106"),
                p = r("888978"),
                R = r("419441"),
                T = r("583698"),
                h = r("992639"),
                m = r("390864"),
                D = r("12287"),
                x = r("49111"),
                L = r("782340"),
                B = r("279801");
            let M = {
                [d.BadgeCategory.STAFF]: {
                    IconComponent: m.default,
                    foregroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
                    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: i.default.unsafe_rawColors.GREEN_360.css,
                    backgroundLightColor: i.default.unsafe_rawColors.GREEN_360.css
                },
                [d.BadgeCategory.VERIFIED_AND_PARTNERED]: {
                    IconComponent: D.default,
                    foregroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
                    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: i.default.unsafe_rawColors.GREEN_360.css,
                    backgroundLightColor: i.default.unsafe_rawColors.GREEN_360.css
                },
                [d.BadgeCategory.VERIFIED]: {
                    IconComponent: D.default,
                    foregroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
                    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: i.default.unsafe_rawColors.GREEN_360.css,
                    backgroundLightColor: i.default.unsafe_rawColors.GREEN_360.css
                },
                [d.BadgeCategory.PARTNERED]: {
                    IconComponent: p.default,
                    foregroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
                    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: i.default.unsafe_rawColors.BRAND_500.css,
                    backgroundLightColor: i.default.unsafe_rawColors.BRAND_500.css
                },
                [d.BadgeCategory.COMMUNITY]: {
                    IconComponent: R.default,
                    foregroundDarkColor: i.default.unsafe_rawColors.PRIMARY_500.css,
                    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundLightColor: i.default.unsafe_rawColors.PRIMARY_500.css,
                    premiumBackgroundColor: N.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    premiumForegroundColor: i.default.unsafe_rawColors.WHITE_400.css
                },
                [d.BadgeCategory.DISCOVERABLE]: {
                    IconComponent: T.default,
                    foregroundDarkColor: i.default.unsafe_rawColors.PRIMARY_500.css,
                    foregroundLightColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundDarkColor: i.default.unsafe_rawColors.WHITE_400.css,
                    backgroundLightColor: i.default.unsafe_rawColors.PRIMARY_500.css,
                    premiumBackgroundColor: N.GradientCssUrls.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    premiumForegroundColor: i.default.unsafe_rawColors.WHITE_400.css
                },
                [d.BadgeCategory.NONE]: {}
            };

            function w(e) {
                let {
                    guildTraits: t
                } = e;
                return (0, o.jsxs)("div", {
                    className: B.tooltipPremiumFooterContainer,
                    children: [(0, o.jsxs)("div", {
                        className: a(B.tooltipPremiumFooterSegment, B.tooltipPremiumFooterTierSegment),
                        children: [(0, o.jsx)(h.default, {
                            width: 18,
                            height: 18,
                            className: B.gemIcon
                        }), (0, o.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: _.getTierName(t.premiumTier)
                        })]
                    }), (0, o.jsx)("div", {
                        className: a(B.tooltipPremiumFooterSegment),
                        children: (0, o.jsx)(u.Text, {
                            variant: "text-xs/semibold",
                            color: "always-white",
                            children: L.default.Messages.SERVER_BADGE_PREMIUM_FOOTER_BOOST_COUNT.format({
                                count: t.premiumSubscriberCount
                            })
                        })
                    })]
                })
            }

            function A(e) {
                let {
                    badgeType: t,
                    guildTraits: r
                } = e, {
                    tooltipTitle: l,
                    tooltipSubtitle: a,
                    tooltipDescription: s
                } = function(e, t) {
                    let r = t === c.GuildVisibility.PUBLIC ? L.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN : L.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY;
                    switch (e) {
                        case d.BadgeCategory.STAFF:
                            return {
                                tooltipTitle: L.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipSubtitle: L.default.Messages.INTERNAL_EMPLOYEE_ONLY, tooltipDescription: L.default.Messages.INTERNAL_EMPLOYEE_ONLY
                            };
                        case d.BadgeCategory.VERIFIED:
                            return {
                                tooltipTitle: L.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: L.default.Messages.GUILD_VERIFIED, tooltipDescription: r
                            };
                        case d.BadgeCategory.PARTNERED:
                            return {
                                tooltipTitle: L.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: L.default.Messages.GUILD_PARTNERED, tooltipDescription: r
                            };
                        case d.BadgeCategory.VERIFIED_AND_PARTNERED:
                            return {
                                tooltipTitle: L.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipSubtitle: L.default.Messages.GUILD_VERIFIED_AND_PARTNERED, tooltipDescription: r
                            };
                        case d.BadgeCategory.COMMUNITY:
                            return {
                                tooltipTitle: L.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: L.default.Messages.SERVER_BADGE_DESCRIPTION_INVITE_ONLY
                            };
                        case d.BadgeCategory.DISCOVERABLE:
                            return {
                                tooltipTitle: L.default.Messages.SERVER_BADGE_TITLE_COMMUNITY, tooltipDescription: L.default.Messages.SERVER_BADGE_DESCRIPTION_ANYONE_CAN_JOIN
                            };
                        default:
                            return {
                                tooltipTitle: L.default.Messages.SERVER_BADGE_TITLE_UNKNOWN
                            }
                    }
                }(t, r.visibility);
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)("div", {
                        className: B.tooltipBodyContainer,
                        children: [(0, o.jsx)(u.Text, {
                            color: "interactive-active",
                            variant: "text-xs/bold",
                            children: l
                        }), null != a ? (0, o.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: a
                        }) : null, null != s ? (0, o.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: s
                        }) : null]
                    }), r.premium ? (0, o.jsx)(w, {
                        guildTraits: r
                    }) : null]
                })
            }

            function v(e) {
                let t, r, {
                        guild: l,
                        tooltipColor: a = u.Tooltip.Colors.BRAND,
                        tooltipPosition: i,
                        className: _,
                        flowerStarClassName: N,
                        iconClassName: p,
                        badgeStrokeColor: R,
                        badgeColor: T,
                        size: h = 16,
                        disableBoostClick: m,
                        "aria-label": D = !1
                    } = e,
                    L = (0, s.useStateFromStores)([g.default, C.default], () => {
                        let e = g.default.getCurrentUser();
                        return C.default.isMember(null == l ? void 0 : l.id, null == e ? void 0 : e.id)
                    }),
                    w = (0, s.useStateFromStores)([E.default], () => E.default.theme),
                    v = (0, c.getGuildTraits)(l),
                    O = (0, d.getBadgeCategory)(v);
                if (O === d.BadgeCategory.NONE) return null;
                let S = M[O],
                    {
                        IconComponent: V,
                        backgroundDarkColor: b,
                        backgroundLightColor: G,
                        foregroundDarkColor: j,
                        foregroundLightColor: y,
                        premiumBackgroundColor: F,
                        premiumForegroundColor: P
                    } = S;
                if (null == V) return null;
                v.premium && (t = P, r = F);
                let k = (0, n.isThemeDark)(w) ? j : y,
                    U = (0, n.isThemeDark)(w) ? b : G;
                t = null != t ? t : k, r = null != r ? r : U;
                let Y = e => {
                    v.premium && L && !m && (e.stopPropagation(), e.preventDefault(), (0, f.openGuildBoostingMarketingModal)({
                        guildId: l.id,
                        location: {
                            section: x.AnalyticsSections.GUILD_HEADER,
                            object: x.AnalyticsObjects.BOOST_GEM_ICON
                        }
                    }))
                };
                return (0, o.jsx)(u.Tooltip, {
                    color: a,
                    position: i,
                    "aria-label": D,
                    text: (0, o.jsx)(A, {
                        badgeType: O,
                        guildTraits: v
                    }),
                    tooltipContentClassName: B.tooltipRemovePadding,
                    children: e => (0, o.jsx)(u.Clickable, {
                        onClick: Y,
                        children: (0, o.jsx)(I.default, {
                            ...e,
                            className: _,
                            flowerStarClassName: N,
                            color: null != r ? r : T,
                            stroke: R,
                            size: h,
                            children: (0, o.jsx)(V, {
                                className: p,
                                color: t
                            })
                        })
                    })
                })
            }
        },
        419441: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var o = r("37983");
            r("884691");
            var l = r("469563"),
                a = r("109731"),
                s = r("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 10,
                        height: r = 10,
                        color: l = "currentColor",
                        ...a
                    } = e;
                    return (0, o.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: r,
                        viewBox: "0 0 10 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, o.jsx)("path", {
                            d: "M4.16667 8.33333V5.83333H5.83333V8.33333H7.91667V5H9.16667L5 1.25L0.833333 5H2.08333V8.33333H4.16667Z",
                            fill: l
                        })
                    })
                }, e => {
                    let {
                        width: t = 10,
                        height: r = 10,
                        ...l
                    } = e;
                    return (0, o.jsx)(a.HomeIcon, {
                        width: t,
                        height: r,
                        ...l
                    })
                })
        },
        583698: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var o = r("37983");
            r("884691");
            var l = r("469563"),
                a = r("521590"),
                s = r("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 10,
                        height: r = 10,
                        color: l = "currentColor",
                        ...a
                    } = e;
                    return (0, o.jsxs)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: r,
                        viewBox: "0 0 10 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, o.jsx)("g", {
                            clipPath: "url(#clip0_1242_1450)",
                            children: (0, o.jsx)("path", {
                                d: "M5 0.833252C2.7 0.833252 0.833333 2.69992 0.833333 4.99992C0.833333 7.29992 2.7 9.16659 5 9.16659C7.3 9.16659 9.16667 7.29992 9.16667 4.99992C9.16667 2.69992 7.3 0.833252 5 0.833252ZM4.58333 8.30409C2.9375 8.09992 1.66667 6.69992 1.66667 4.99992C1.66667 4.74159 1.7 4.49575 1.75417 4.25409L3.75 6.24992V6.66659C3.75 7.12492 4.125 7.49992 4.58333 7.49992V8.30409ZM7.45833 7.24575C7.35 6.90825 7.04167 6.66659 6.66667 6.66659H6.25V5.41659C6.25 5.18742 6.0625 4.99992 5.83333 4.99992H3.33333V4.16659H4.16667C4.39583 4.16659 4.58333 3.97909 4.58333 3.74992V2.91659H5.41667C5.875 2.91659 6.25 2.54159 6.25 2.08325V1.91242C7.47083 2.40825 8.33333 3.60409 8.33333 4.99992C8.33333 5.86659 8 6.65409 7.45833 7.24575Z",
                                fill: l
                            })
                        }), (0, o.jsx)("defs", {
                            children: (0, o.jsx)("clipPath", {
                                id: "clip0_1242_1450",
                                children: (0, o.jsx)("rect", {
                                    width: "10",
                                    height: "10",
                                    fill: "white"
                                })
                            })
                        })]
                    })
                }, a.GlobeEarthIcon)
        },
        992639: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var o = r("37983");
            r("884691");
            var l = r("75196");

            function a(e) {
                let {
                    width: t = 10,
                    height: r = 10,
                    color: a = "currentColor",
                    ...s
                } = e;
                return (0, o.jsxs)("svg", {
                    ...(0, l.default)(s),
                    width: t,
                    height: r,
                    viewBox: "0 0 17 22",
                    fill: a,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, o.jsxs)("g", {
                        filter: "url(#filter0_d_1296_1706)",
                        children: [(0, o.jsx)("path", {
                            opacity: "0.55",
                            d: "M8.49999 3.7998L4.85999 7.4398V12.5598L8.49999 16.1998L12.14 12.5598V7.4398L8.49999 3.7998ZM10.32 11.7998L8.49999 13.6265L6.67999 11.8065V8.19314L8.49999 6.37314L10.32 8.19314V11.7998Z",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            opacity: "0.8",
                            d: "M6.67999 8.19354V11.8069L8.49999 13.6269L10.32 11.8069V8.19354L8.49999 6.37354L6.67999 8.19354Z",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            d: "M8.5 3.7998V6.37314L10.32 8.19314L12.14 7.4398L8.5 3.7998Z",
                            fill: "white"
                        })]
                    }), (0, o.jsx)("defs", {
                        children: (0, o.jsxs)("filter", {
                            id: "filter0_d_1296_1706",
                            x: "-3.5",
                            y: "-1",
                            width: "24",
                            height: "24",
                            filterUnits: "userSpaceOnUse",
                            "color-interpolation-filters": "sRGB",
                            children: [(0, o.jsx)("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }), (0, o.jsx)("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }), (0, o.jsx)("feOffset", {
                                dy: "1"
                            }), (0, o.jsx)("feGaussianBlur", {
                                stdDeviation: "2"
                            }), (0, o.jsx)("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
                            }), (0, o.jsx)("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_1296_1706"
                            }), (0, o.jsx)("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_1296_1706",
                                result: "shape"
                            })]
                        })
                    })]
                })
            }
        },
        290581: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var o = r("37983");
            r("884691");
            var l = r("469563"),
                a = r("825701"),
                s = r("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: l = "currentColor",
                        foreground: a,
                        ...i
                    } = e;
                    return (0, o.jsx)("svg", {
                        ...(0, s.default)(i),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        children: (0, o.jsx)("path", {
                            fill: l,
                            className: a,
                            d: "M21.924 8.61789C21.77 8.24489 21.404 8.00089 21 8.00089H15.618L12.894 2.55389C12.555 1.87689 11.444 1.87689 11.105 2.55389L8.38199 8.00089H2.99999C2.59599 8.00089 2.22999 8.24489 2.07599 8.61789C1.92199 8.99089 2.00699 9.42289 2.29299 9.70789L6.87699 14.2919L5.03899 20.7269C4.92399 21.1299 5.07199 21.5619 5.40999 21.8089C5.74999 22.0569 6.20699 22.0659 6.55399 21.8329L12 18.2029L17.445 21.8329C17.613 21.9449 17.806 22.0009 18 22.0009C18.207 22.0009 18.414 21.9369 18.59 21.8089C18.928 21.5619 19.076 21.1299 18.961 20.7269L17.123 14.2919L21.707 9.70789C21.993 9.42289 22.078 8.99089 21.924 8.61789Z"
                        })
                    })
                }, a.StarIcon)
        }
    }
]);