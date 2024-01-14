"use strict";
s.r(t), s.d(t, {
  useGuildProductsSortOptionContext: function() {
    return o
  },
  default: function() {
    return u
  }
}), s("222007");
var l = s("37983"),
  i = s("884691"),
  r = s("627445"),
  a = s.n(r),
  n = s("874146");
let d = i.createContext(void 0);

function o() {
  let e = i.useContext(d);
  return a(null != e, "must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider"), e
}

function u(e) {
  let {
    children: t,
    defaultSortOption: s = n.GuildProductSortOptions.NEWEST_ARRIVALS
  } = e, [r, a] = i.useState(s);
  return (0, l.jsx)(d.Provider, {
    value: {
      sortOption: r,
      setSortOption: a,
      onReset: () => a(s)
    },
    children: t
  })
}