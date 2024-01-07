            "use strict";
            n.r(t), n.d(t, {
                fetchGuildProductsForGuild: function() {
                    return l
                },
                fetchGuildProduct: function() {
                    return o
                },
                updateGuildProductListing: function() {
                    return s
                },
                deleteGuildProductListing: function() {
                    return a
                }
            });
            var r = n("913144"),
                i = n("448993"),
                u = n("242278");
            let l = async e => {
                r.default.dispatch({
                    type: "GUILD_PRODUCTS_FETCH",
                    guildId: e
                });
                try {
                    let t = await u.getGuildProductListingsForGuild(e);
                    r.default.dispatch({
                        type: "GUILD_PRODUCTS_FETCH_SUCCESS",
                        guildId: e,
                        products: t
                    })
                } catch (t) {
                    r.default.dispatch({
                        type: "GUILD_PRODUCTS_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }, o = async (e, t) => {
                r.default.dispatch({
                    type: "GUILD_PRODUCT_FETCH",
                    productId: t
                });
                try {
                    let n = await u.getGuildProductListing(e, t);
                    return r.default.dispatch({
                        type: "GUILD_PRODUCT_FETCH_SUCCESS",
                        product: n
                    }), n
                } catch (e) {
                    throw r.default.dispatch({
                        type: "GUILD_PRODUCT_FETCH_FAILURE",
                        productId: t,
                        error: new i.APIError(e)
                    }), e
                }
            };
            async function s(e, t, n) {
                let i = await u.updateGuildProductListing(e, t, n);
                return r.default.dispatch({
                    type: "GUILD_PRODUCT_UPDATE",
                    product: i
                }), i
            }
            async function a(e, t) {
                return await u.deleteGuildProductListing(e, t), r.default.dispatch({
                    type: "GUILD_PRODUCT_DELETE",
                    productId: t
                }), !0
            }