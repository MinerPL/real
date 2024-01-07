            "use strict";
            n.r(t), n.d(t, {
                fetchPriceTiers: function() {
                    return u
                }
            });
            var r = n("913144"),
                i = n("56949");
            async function u(e, t) {
                r.default.dispatch({
                    type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH",
                    guildId: e,
                    priceTierType: t
                });
                try {
                    let n = await i.getPriceTiers(e, t);
                    r.default.dispatch({
                        type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
                        guildId: e,
                        priceTierType: t,
                        priceTiers: n
                    })
                } catch (n) {
                    r.default.dispatch({
                        type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE",
                        guildId: e,
                        priceTierType: t
                    })
                }
            }