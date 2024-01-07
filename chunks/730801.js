            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return D
                }
            });
            var a = t("37983");
            t("884691");
            var r = t("627445"),
                o = t.n(r),
                l = t("759843"),
                i = t("446674"),
                n = t("77078"),
                d = t("545158"),
                u = t("428958"),
                c = t("183137"),
                p = t("592407"),
                m = t("845579"),
                g = t("305961"),
                S = t("37785"),
                h = t("191814"),
                f = t("476765"),
                C = t("58608"),
                N = t("701909"),
                x = t("49111"),
                _ = t("994428"),
                A = t("660516"),
                R = t("554423");
            let j = [x.GuildFeatures.CREATOR_MONETIZABLE, x.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL];

            function D(e) {
                let {
                    transitionState: s,
                    onClose: t,
                    guildId: r,
                    markAsDismissed: D
                } = e, I = (0, f.useUID)(), y = (0, i.useStateFromStores)([g.default], () => g.default.getGuild(r));
                o(null != y, "Guild must be defined"), (0, u.default)({
                    type: A.ImpressionTypes.MODAL,
                    name: l.ImpressionNames.GUILD_SHOP_UPSELL,
                    properties: {
                        passed_in_guild_id: r
                    }
                });
                let v = m.GifAutoPlay.useSetting();
                return (0, a.jsxs)(n.ModalRoot, {
                    size: n.ModalSize.LARGE,
                    className: R.root,
                    transitionState: s,
                    "aria-labelledby": I,
                    children: [(0, a.jsxs)(n.ModalHeader, {
                        separator: !1,
                        className: R.header,
                        children: [(0, a.jsx)(n.ModalCloseButton, {
                            className: R.closeButton,
                            onClick: t
                        }), (0, a.jsx)(n.Heading, {
                            variant: "heading-xl/medium",
                            color: "header-primary",
                            id: I,
                            children: "Server Shop is now open for business!"
                        }), (0, a.jsx)(h.default, {
                            size: 6
                        }), (0, a.jsx)(n.Text, {
                            variant: "text-md/normal",
                            className: R.description,
                            color: "header-secondary",
                            children: "Introducing a single place to sell downloadable products, monthly Server Subscriptions, and Premium Roles right inside Discord. From PDF guides and digital stickers to gated channels and premium roles, Server Shop gives you two new ways to engage your community—and earn from your expertise."
                        }), (0, a.jsx)(h.default, {
                            size: 8
                        }), (0, a.jsx)(S.default, {
                            onClick: () => {
                                D(_.ContentDismissActionType.SECONDARY);
                                let e = "".concat(N.default.getCreatorSupportArticleURL(x.HelpdeskArticles.SERVER_SUBSCRIPTION_AND_PRODUCTS), "#docs-internal-guid-918e991a-7fff-03d5-8326-5d065e5edeb1");
                                (0, d.default)(e, !0)
                            },
                            children: "Learn more"
                        })]
                    }), (0, a.jsx)("div", {
                        className: R.divider
                    }), (0, a.jsxs)(n.ModalContent, {
                        className: R.content,
                        children: [v ? (0, a.jsx)("img", {
                            src: (0, c.getAssetCDNUrl)("server_products/upsell/demo2.png"),
                            alt: "",
                            className: R.demo
                        }) : (0, a.jsx)(C.default, {
                            autoPlay: !0,
                            loop: !0,
                            className: R.demo,
                            width: 400,
                            poster: (0, c.getAssetCDNUrl)("server_products/upsell/demo2.png"),
                            src: (0, c.getAssetCDNUrl)("server_products/upsell/demo.mp4")
                        }), (0, a.jsx)("img", {
                            src: (0, c.getAssetCDNUrl)("server_products/upsell/new_sales.png"),
                            alt: "",
                            className: R.earningsImage
                        })]
                    }), (0, a.jsxs)(n.ModalFooter, {
                        children: [(0, a.jsx)(n.Button, {
                            onClick: () => {
                                j.some(e => y.hasFeature(e)) ? p.default.open(r, x.GuildSettingsSections.GUILD_PRODUCTS) : p.default.open(r, x.GuildSettingsSections.ROLE_SUBSCRIPTIONS), D(_.ContentDismissActionType.PRIMARY), t()
                            },
                            children: "Check it out"
                        }), (0, a.jsx)(h.default, {
                            size: 12,
                            horizontal: !0
                        })]
                    })]
                })
            }