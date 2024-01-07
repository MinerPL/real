            "use strict";
            s.r(t), s.d(t, {
                GuildProductCardGrid: function() {
                    return S
                }
            });
            var l = s("37983"),
                i = s("884691"),
                r = s("414456"),
                a = s.n(r),
                n = s("917351"),
                d = s.n(n),
                o = s("77078"),
                u = s("812204"),
                c = s("442379"),
                C = s("858291"),
                _ = s("387678"),
                f = s("874146"),
                h = s("782340"),
                L = s("203362");

            function S(e) {
                let {
                    guildId: t,
                    productId: s
                } = e, {
                    listingsLoaded: r
                } = (0, c.useFetchGuildProductListingsForGuild)(t), n = (0, c.useGuildProductsForGuild)(t, {
                    publishedOnly: !0
                }), S = i.useRef(null), {
                    sortOption: x
                } = (0, _.useGuildProductsSortOptionContext)(), I = i.useMemo(() => (function(e, t) {
                    let s, l;
                    switch (t) {
                        case f.GuildProductSortOptions.NAME:
                            s = e => e.name.toLowerCase(), l = "asc";
                            break;
                        case f.GuildProductSortOptions.PRICE_ASC:
                            s = "price_tier", l = "asc";
                            break;
                        case f.GuildProductSortOptions.PRICE_DESC:
                            s = "price_tier", l = "desc";
                            break;
                        case f.GuildProductSortOptions.NEWEST_ARRIVALS:
                            s = "published_at", l = "desc";
                            break;
                        default:
                            return e
                    }
                    return d.orderBy(e, [s], [l])
                })(n, x), [n, x]);
                return r ? (0, l.jsx)("ul", {
                    className: L.cardContainer,
                    "aria-label": h.default.Messages.GUILD_SHOP_PRODUCTS_A11Y_LABEL,
                    children: I.map(e => (0, l.jsx)("li", {
                        className: L.card,
                        children: (0, l.jsx)("div", {
                            className: a(L.cardContent, {
                                [L.selectedCard]: e.id === s
                            }),
                            ref: e.id === s ? S : void 0,
                            onLoad: () => {
                                let t = S.current;
                                null != t && e.id === s && (t.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center"
                                }), setTimeout(() => {
                                    t.classList.remove(L.selectedCard)
                                }, 2e3))
                            },
                            children: (0, l.jsx)(C.GuildProductListingPublicCard, {
                                guildProductListing: e,
                                guildId: t,
                                location: u.default.GUILD_SHOP_PAGE,
                                shouldShowFullDescriptionButton: !1,
                                hideRoleTag: !0,
                                lineClamp: 2,
                                cardWidth: 332,
                                cardHeight: 347,
                                thumbnailHeight: 187,
                                descriptionTextVariant: "text-xs/normal",
                                showOpaqueBackground: !0
                            }, e.id)
                        }, e.id)
                    }, e.id))
                }) : (0, l.jsx)(o.Spinner, {})
            }