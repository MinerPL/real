            "use strict";
            s.r(t), s.d(t, {
                GuildShopCategorySelector: function() {
                    return j
                }
            });
            var l = s("37983");
            s("884691");
            var i = s("414456"),
                r = s.n(i),
                a = s("65597"),
                n = s("95410"),
                d = s("77078"),
                o = s("206230"),
                u = s("183137"),
                c = s("393414"),
                C = s("191814"),
                _ = s("381546"),
                f = s("978679"),
                h = s("956089"),
                L = s("551254"),
                S = s("634388"),
                x = s("893399"),
                I = s("802810"),
                p = s("56673"),
                E = s("384466"),
                g = s("500307"),
                T = s("49111"),
                P = s("724210"),
                R = s("782340"),
                m = s("28521");

            function O(e) {
                let {
                    icon: t,
                    title: s,
                    body: i,
                    selected: a,
                    disabled: n = !1,
                    onClick: o,
                    onPreviewDismiss: u,
                    isNew: c = !1
                } = e;
                return (0, l.jsxs)(d.ClickableContainer, {
                    onClick: n ? void 0 : o,
                    "aria-disabled": n,
                    className: r(m.tab, {
                        [m.selected]: a,
                        [m.tabDisabled]: n,
                        [m.preview]: !a && null != u
                    }),
                    "aria-label": s,
                    children: [(0, l.jsx)("div", {
                        className: m.iconContainer,
                        children: t
                    }), (0, l.jsx)(C.default, {
                        size: 8,
                        horizontal: !0
                    }), (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(d.Text, {
                            variant: "text-sm/semibold",
                            color: a ? "always-white" : "header-primary",
                            children: s
                        }), (0, l.jsx)(d.Text, {
                            variant: "text-xs/normal",
                            color: a ? "always-white" : n ? "text-muted" : "header-primary",
                            children: i
                        })]
                    }), c && (0, l.jsx)(h.TextBadge, {
                        color: d.tokens.unsafe_rawColors.BRAND_260.css,
                        className: m.newBadge,
                        text: R.default.Messages.NEW
                    }), null != u && (0, l.jsx)(d.Clickable, {
                        className: m.tabPreviewClose,
                        onClick: u,
                        "aria-label": R.default.Messages.DISMISS,
                        children: (0, l.jsx)(_.default, {
                            width: 16,
                            height: 16
                        })
                    })]
                })
            }

            function j(e) {
                let {
                    guild: t
                } = e, s = (0, L.useIsEligibleForSubscriptionsInGuildShop)(t.id, "guild_shop_category_selector"), {
                    selectedTab: i,
                    setSelectedTab: r,
                    categoryTabs: _,
                    handlePreviewDismiss: h
                } = (0, S.useGuildShopDisplayContext)(), j = "false" === n.default.get(g.GUILD_SHOP_PRODUCT_PREVIEW_TAB_CLICK, "false"), v = (0, a.default)([o.default], () => o.default.useReducedMotion), G = _.map(e => {
                    switch (e) {
                        case x.GuildShopTab.GUILD_PRODUCTS:
                            return (0, l.jsx)(O, {
                                icon: (0, l.jsx)(I.default, {
                                    width: 20,
                                    height: 20
                                }),
                                title: R.default.Messages.GUILD_SHOP_PRODUCT_TYPE_SELECTOR_TITLE,
                                body: R.default.Messages.GUILD_SHOP_PRODUCT_TYPE_BODY,
                                selected: i === x.GuildShopTab.GUILD_PRODUCTS,
                                onClick: () => r(x.GuildShopTab.GUILD_PRODUCTS)
                            }, e);
                        case x.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS:
                            return (0, l.jsx)(O, {
                                icon: (0, l.jsx)(p.default, {
                                    width: 20,
                                    height: 20
                                }),
                                title: R.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
                                body: s ? R.default.Messages.GUILD_ROLE_SUB_TYPE_BODY_AFTER_CONSOLIDATION : R.default.Messages.GUILD_ROLE_SUB_TYPE_BODY.format({
                                    openRoleSubPage: () => (0, c.transitionTo)(T.Routes.CHANNEL(t.id, P.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
                                }),
                                disabled: !s,
                                selected: i === x.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS,
                                onClick: () => r(x.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS)
                            }, e);
                        case x.GuildShopTab.GUILD_PRODUCTS_PREVIEW:
                            return (0, l.jsx)(O, {
                                icon: j ? (0, l.jsx)("img", {
                                    src: v ? (0, u.getAssetCDNUrl)("server_products/storefront/question-mark.png") : (0, u.getAssetCDNUrl)("server_products/storefront/question-mark.gif"),
                                    className: m.questionMark,
                                    alt: ""
                                }) : (0, l.jsx)(f.default, {
                                    width: 20,
                                    height: 20
                                }),
                                title: R.default.Messages.GUILD_SHOP_PRODUCT_TYPE_SELECTOR_TITLE,
                                body: R.default.Messages.GUILD_STORE_PREVIEW_TAB_SELECTOR_BODY,
                                selected: i === x.GuildShopTab.GUILD_PRODUCTS_PREVIEW,
                                onClick: () => {
                                    r(x.GuildShopTab.GUILD_PRODUCTS_PREVIEW), n.default.set(g.GUILD_SHOP_PRODUCT_PREVIEW_TAB_CLICK, "true")
                                },
                                onPreviewDismiss: h,
                                isNew: j
                            }, e);
                        default:
                            return null
                    }
                });
                return (0, l.jsxs)("div", {
                    className: m.container,
                    children: [(0, l.jsx)(d.Heading, {
                        variant: "heading-sm/bold",
                        className: m.header,
                        children: R.default.Messages.GUILD_SHOP_SUPPORT_SERVER_HEADER
                    }), (0, l.jsx)(C.default, {
                        size: 12
                    }), (0, l.jsxs)("div", {
                        className: m.filters,
                        children: [(0, l.jsx)("div", {
                            className: m.tabs,
                            children: G
                        }), i === x.GuildShopTab.GUILD_PRODUCTS && (0, l.jsx)(E.default, {})]
                    })]
                })
            }