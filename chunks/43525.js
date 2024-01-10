            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            });
            var l = a("37983");
            a("884691");
            var s = a("414456"),
                r = a.n(s),
                n = a("65597"),
                o = a("77078"),
                i = a("697218"),
                u = a("719923"),
                c = a("782340"),
                d = a("98881"),
                f = a("247329"),
                C = a("333838"),
                E = a("399637"),
                m = a("976076"),
                p = function(e) {
                    let {
                        isFullScreen: t
                    } = e, a = (0, n.default)([i.default], () => i.default.getCurrentUser()), s = u.default.canUseCollectibles(a);
                    return (0, l.jsxs)("div", {
                        className: r(d.heroBanner, {
                            [d.heroBannerNonPremium]: !s
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: r(d.heroDescription, {
                                [d.heroDescriptionWithSidebar]: !t
                            }),
                            children: [(0, l.jsx)(o.Heading, {
                                className: d.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: c.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, l.jsx)(o.Text, {
                                className: d.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: c.default.Messages.COLLECTIBLES_SFA_HERO_BANNER_SUBTITLE
                            })]
                        }), (0, l.jsx)("div", {
                            className: d.bannerBackgroundWrapper,
                            children: (0, l.jsx)("img", {
                                className: d.bannerBackground,
                                alt: "",
                                src: f
                            })
                        }), (0, l.jsx)("img", {
                            className: d.bannerForeground,
                            alt: "",
                            src: C
                        }), (0, l.jsx)("img", {
                            className: d.bannerHand,
                            alt: "",
                            src: E
                        }), (0, l.jsx)("img", {
                            className: r(d.largeSparkle, d.largeTopSparkle),
                            alt: "",
                            src: m
                        }), (0, l.jsx)("img", {
                            className: r(d.smallSparkle, d.smallTopSparkle),
                            alt: "",
                            src: m
                        }), (0, l.jsx)("img", {
                            className: r(d.largeSparkle, d.largeLeftSparkle),
                            alt: "",
                            src: m
                        }), (0, l.jsx)("img", {
                            className: r(d.smallSparkle, d.smallLeftSparkle),
                            alt: "",
                            src: m
                        }), (0, l.jsx)("img", {
                            className: r(d.largeSparkle, d.largeRightSparkle),
                            alt: "",
                            src: m
                        }), (0, l.jsx)("img", {
                            className: r(d.smallSparkle, d.smallRightSparkle),
                            alt: "",
                            src: m
                        })]
                    })
                }