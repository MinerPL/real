            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("414456"),
                r = l.n(s),
                n = l("65597"),
                o = l("77078"),
                i = l("697218"),
                u = l("216422"),
                c = l("719923"),
                d = l("782340"),
                f = l("98881"),
                C = l("247329"),
                m = l("333838"),
                E = l("399637"),
                p = l("976076"),
                g = function(e) {
                    let {
                        isFullScreen: t
                    } = e, l = (0, n.default)([i.default], () => i.default.getCurrentUser()), s = c.default.canUseCollectibles(l);
                    return (0, a.jsxs)("div", {
                        className: r(f.heroBanner, {
                            [f.shopForAllHeroBanner]: !s
                        }),
                        children: [(0, a.jsxs)("div", {
                            className: r(f.heroDescription, {
                                [f.heroDescriptionWithSidebar]: !t
                            }),
                            children: [s && (0, a.jsxs)(o.Text, {
                                color: "always-white",
                                variant: "eyebrow",
                                className: f.premiumBadgeWrapper,
                                children: [(0, a.jsx)(u.default, {
                                    className: f.premiumBadge
                                }), (0, a.jsx)("span", {
                                    className: f.premiumBadgeText,
                                    children: d.default.Messages.REMIXING_TOOLTIP_NITRO_EARLY_ACCESS
                                })]
                            }), (0, a.jsx)(o.Heading, {
                                className: f.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: d.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, a.jsx)(o.Text, {
                                className: f.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: d.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE
                            })]
                        }), (0, a.jsx)("div", {
                            className: f.bannerBackgroundWrapper,
                            children: (0, a.jsx)("img", {
                                className: f.bannerBackground,
                                alt: "",
                                src: C
                            })
                        }), (0, a.jsx)("img", {
                            className: f.bannerForeground,
                            alt: "",
                            src: m
                        }), (0, a.jsx)("img", {
                            className: f.bannerHand,
                            alt: "",
                            src: E
                        }), (0, a.jsx)("img", {
                            className: r(f.largeSparkle, f.largeTopSparkle),
                            alt: "",
                            src: p
                        }), (0, a.jsx)("img", {
                            className: r(f.smallSparkle, f.smallTopSparkle),
                            alt: "",
                            src: p
                        }), (0, a.jsx)("img", {
                            className: r(f.largeSparkle, f.largeLeftSparkle),
                            alt: "",
                            src: p
                        }), (0, a.jsx)("img", {
                            className: r(f.smallSparkle, f.smallLeftSparkle),
                            alt: "",
                            src: p
                        }), (0, a.jsx)("img", {
                            className: r(f.largeSparkle, f.largeRightSparkle),
                            alt: "",
                            src: p
                        }), (0, a.jsx)("img", {
                            className: r(f.smallSparkle, f.smallRightSparkle),
                            alt: "",
                            src: p
                        })]
                    })
                }