            "use strict";
            n.r(t), n.d(t, {
                GuildProductSortOptions: function() {
                    return u
                },
                ServerShopTabOrder: function() {
                    return l
                },
                getGuildProductSortOptionLabel: function() {
                    return s
                },
                DISPLAYED_SORT_OPTIONS: function() {
                    return a
                }
            });
            var r, i, u, l, o = n("782340");

            function s(e) {
                return ({
                    4: o.default.Messages.GUILD_STORE_SORT_OPTION_NEWEST_ARRIVALS,
                    2: o.default.Messages.GUILD_STORE_SORT_OPTION_PRICE_ASC,
                    3: o.default.Messages.GUILD_STORE_SORT_OPTION_PRICE_DESC,
                    1: o.default.Messages.GUILD_STORE_SORT_OPTION_NAME
                })[e]
            }(r = u || (u = {}))[r.NAME = 1] = "NAME", r[r.PRICE_ASC = 2] = "PRICE_ASC", r[r.PRICE_DESC = 3] = "PRICE_DESC", r[r.NEWEST_ARRIVALS = 4] = "NEWEST_ARRIVALS", (i = l || (l = {}))[i.SUBS_FIRST = 1] = "SUBS_FIRST", i[i.PRODUCTS_FIRST = 2] = "PRODUCTS_FIRST";
            let a = [4, 2, 3, 1]