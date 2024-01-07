            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return C
                }
            });
            var a = l("37983");
            l("884691");
            var s = l("414456"),
                r = l.n(s),
                n = l("77078"),
                o = l("782340"),
                i = l("60109"),
                u = l("200406"),
                c = l("283045"),
                d = l("718297"),
                f = l("929880"),
                C = function(e) {
                    let {
                        isFullScreen: t
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: r(i.heroBanner, t ? i.heroBannerFullScreen : i.heroBannerWithSidebar),
                        children: [(0, a.jsxs)("div", {
                            className: i.heroDescription,
                            children: [(0, a.jsx)(n.Heading, {
                                className: i.bannerTitle,
                                color: "always-white",
                                variant: "display-lg",
                                children: o.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_TITLE
                            }), (0, a.jsx)(n.Text, {
                                className: i.heroSubtitle,
                                color: "always-white",
                                variant: "text-lg/normal",
                                children: o.default.Messages.COLLECTIBLES_SHOP_HERO_BANNER_SUBTITLE_ALT
                            })]
                        }), (0, a.jsxs)("div", {
                            className: i.bannerArt,
                            children: [(0, a.jsx)("img", {
                                className: i.bannerGrid,
                                alt: "",
                                src: u,
                                width: "484",
                                height: "402"
                            }), (0, a.jsx)("img", {
                                className: i.bannerGridSmol,
                                alt: "",
                                src: d,
                                width: "85",
                                height: "60"
                            }), (0, a.jsx)("img", {
                                className: i.bannerGridMedium,
                                alt: "",
                                src: c,
                                width: "178",
                                height: "106"
                            }), (0, a.jsx)("img", {
                                className: i.bannerHand,
                                alt: "",
                                src: f,
                                width: "265",
                                height: "238"
                            })]
                        })]
                    })
                }