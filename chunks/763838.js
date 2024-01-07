            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("77078"),
                r = s("716241"),
                o = s("183137"),
                d = s("592407"),
                u = s("181114"),
                c = s("538137"),
                E = s("599110"),
                _ = s("500307"),
                T = s("49111"),
                I = s("782340"),
                S = s("326386");

            function N(e) {
                let {
                    pills: t
                } = e;
                return (0, a.jsx)("div", {
                    className: S.row,
                    children: t.map(e => (0, a.jsx)("div", {
                        className: S.pill,
                        children: (0, a.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            children: e
                        })
                    }, e))
                })
            }

            function g(e) {
                let {
                    guildId: t,
                    showCTA: s,
                    responsive: n = !0
                } = e, g = [
                    [I.default.Messages.GUILD_STORE_PREVIEW_CHIP_ROLE_ACCESS, I.default.Messages.GUILD_STORE_PREVIEW_CHIP_GAME_TUTORIALS],
                    [I.default.Messages.GUILD_STORE_PREVIEW_CHIP_DOPE_WALLPAPERS, I.default.Messages.GUILD_STORE_PREVIEW_CHIP_PFP_ART],
                    [I.default.Messages.GUILD_STORE_PREVIEW_CHIP_FILTER_PRESETS, I.default.Messages.GUILD_STORE_PREVIEW_CHIP_SONG_DROPS],
                    [I.default.Messages.GUILD_STORE_PREVIEW_CHIP_COSPLAY_PICS, I.default.Messages.GUILD_STORE_PREVIEW_CHIP_3D_MODELS]
                ];
                return (0, a.jsx)("div", {
                    className: l({
                        [S.responsive]: n
                    }),
                    children: (0, a.jsxs)("div", {
                        className: S.container,
                        children: [(0, a.jsxs)("div", {
                            className: S.content,
                            children: [(0, a.jsx)("div", {
                                className: S.pillContainer,
                                children: g.map((e, t) => (0, a.jsx)(N, {
                                    pills: e
                                }, "pill-row-".concat(t)))
                            }), (0, a.jsxs)("div", {
                                className: S.ctaContent,
                                children: [(0, a.jsx)(i.Text, {
                                    variant: "text-lg/medium",
                                    color: "header-primary",
                                    children: I.default.Messages.GUILD_STORE_PREVIEW_MURAL_TITLE
                                }), s && (0, a.jsxs)(u.default, {
                                    size: i.Button.Sizes.MEDIUM,
                                    className: S.getStartedButton,
                                    innerClassName: S.getStartedButtonContents,
                                    shineSize: u.default.ShineSizes.SMALL,
                                    onClick: () => {
                                        E.default.track(T.AnalyticEvents.GUILD_SHOP_PREVIEW_CLICK, {
                                            ...(0, r.collectGuildAnalyticsMetadata)(t),
                                            action_taken: _.GuildShopPreviewClickActions.GET_STARTED_CLICK
                                        }), d.default.open(t, T.GuildSettingsSections.GUILD_PRODUCTS)
                                    },
                                    children: [I.default.Messages.GUILD_SHOP_PREVIEW_CTA_BUTTON, (0, a.jsx)(c.default, {
                                        className: S.getStartedArrow
                                    })]
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: S.muralImageContainer,
                            children: [(0, a.jsx)("img", {
                                src: (0, o.getAssetCDNUrl)("server_products/storefront/preview-mural.png"),
                                alt: "",
                                className: S.muralImage
                            }), (0, a.jsx)("img", {
                                src: (0, o.getAssetCDNUrl)("server_products/storefront/preview-mural-reduced.png"),
                                alt: "",
                                className: S.muralImageReducedWidth
                            })]
                        })]
                    })
                })
            }