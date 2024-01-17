"use strict";
n.r(t), n.d(t, {
  GuildProductSortOptions: function() {
    return l
  },
  ServerShopTabOrder: function() {
    return u
  },
  getGuildProductSortOptionLabel: function() {
    return s
  },
  DISPLAYED_SORT_OPTIONS: function() {
    return a
  }
});
var i, r, l, u, o = n("782340");

function s(e) {
  return ({
    4: o.default.Messages.GUILD_STORE_SORT_OPTION_NEWEST_ARRIVALS,
    2: o.default.Messages.GUILD_STORE_SORT_OPTION_PRICE_ASC,
    3: o.default.Messages.GUILD_STORE_SORT_OPTION_PRICE_DESC,
    1: o.default.Messages.GUILD_STORE_SORT_OPTION_NAME
  })[e]
}(i = l || (l = {}))[i.NAME = 1] = "NAME", i[i.PRICE_ASC = 2] = "PRICE_ASC", i[i.PRICE_DESC = 3] = "PRICE_DESC", i[i.NEWEST_ARRIVALS = 4] = "NEWEST_ARRIVALS", (r = u || (u = {}))[r.SUBS_FIRST = 1] = "SUBS_FIRST", r[r.PRODUCTS_FIRST = 2] = "PRODUCTS_FIRST";
let a = [4, 2, 3, 1]