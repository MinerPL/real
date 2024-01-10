            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("414456"),
                r = l.n(s),
                n = l("65597"),
                o = l("77078"),
                i = l("697218"),
                u = l("719923"),
                c = l("782340"),
                d = l("98881"),
                f = l("247329"),
                C = l("333838"),
                E = l("399637"),
                m = l("976076"),
                p = function(e) {
                    let {
                        isFullScreen: t
                    } = e, l = (0, n.default)([i.default], () => i.default.getCurrentUser()), s = u.default.canUseCollectibles(l);
                    return (0, a.jsxs)("div", {
                        className: r(d.heroBanner, {
                            [d.heroBannerNonPremium]: !s
                        }),
                        children: [(0, a.jsxs)("div", {
                            className: r(d.heroDescription, {
                                [d.heroDescriptionWithSidebar]: !t
                            }),
                            children: [(0, a.jsx)(o.Heading, {
                                className: d.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: c.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, a.jsx)(o.Text, {
                                className: d.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: c.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE
                            })]
                        }), (0, a.jsx)("div", {
                            className: d.bannerBackgroundWrapper,
                            children: (0, a.jsx)("img", {
                                className: d.bannerBackground,
                                alt: "",
                                src: f
                            })
                        }), (0, a.jsx)("img", {
                            className: d.bannerForeground,
                            alt: "",
                            src: C
                        }), (0, a.jsx)("img", {
                            className: d.bannerHand,
                            alt: "",
                            src: E
                        }), (0, a.jsx)("img", {
                            className: r(d.largeSparkle, d.largeTopSparkle),
                            alt: "",
                            src: m
                        }), (0, a.jsx)("img", {
                            className: r(d.smallSparkle, d.smallTopSparkle),
                            alt: "",
                            src: m
                        }), (0, a.jsx)("img", {
                            className: r(d.largeSparkle, d.largeLeftSparkle),
                            alt: "",
                            src: m
                        }), (0, a.jsx)("img", {
                            className: r(d.smallSparkle, d.smallLeftSparkle),
                            alt: "",
                            src: m
                        }), (0, a.jsx)("img", {
                            className: r(d.largeSparkle, d.largeRightSparkle),
                            alt: "",
                            src: m
                        }), (0, a.jsx)("img", {
                            className: r(d.smallSparkle, d.smallRightSparkle),
                            alt: "",
                            src: m
                        })]
                    })
                }