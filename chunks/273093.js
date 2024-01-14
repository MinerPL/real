"use strict";
n.r(t), n.d(t, {
  useGuildProductPurchaseContext: function() {
    return c
  },
  GuildProductPurchaseContextProvider: function() {
    return d
  }
});
var r = n("37983"),
  u = n("884691"),
  s = n("627445"),
  l = n.n(s),
  i = n("446674"),
  o = n("565559");
let a = u.createContext(void 0);

function c() {
  let e = u.useContext(a);
  return l(null != e, "GuildProductPurchaseContext not found"), e
}

function d(e) {
  let {
    children: t,
    guildProductListingId: n,
    ...u
  } = e, s = (0, i.useStateFromStores)([o.default], () => o.default.getGuildProduct(n));
  return l(null != s, "guildProductListing cannot be null"), (0, r.jsx)(a.Provider, {
    value: {
      guildProductListing: s,
      ...u
    },
    children: t
  })
}