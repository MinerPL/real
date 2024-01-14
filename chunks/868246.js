"use strict";
n.r(t), n.d(t, {
  areDiscoveryCategoriesEqual: function() {
    return c
  },
  default: function() {
    return E
  }
}), n("424973"), n("222007");
var r = n("917351"),
  i = n.n(r),
  s = n("446674"),
  l = n("913144"),
  a = n("449008"),
  o = n("447621"),
  u = n("782340");

function c(e, t) {
  return i.isEqual(e.map(e => [e.categoryId, e.name]), t.map(e => [e.categoryId, e.name]))
}
let d = null,
  f = [],
  p = [],
  _ = {};
class m extends s.default.Store {
  getPrimaryCategories() {
    return f
  }
  getDiscoveryCategories() {
    let e = o.DISCOVERY_SIDEBAR_CATEGORIES.slice(1),
      t = e.map(e => p.find(t => t.categoryId === e.categoryId)).filter(a.isNotNullish);
    return [{
      categoryId: o.DISCOVERY_ALL_CATEGORIES_ID,
      name: u.default.Messages.HOME
    }, ...t]
  }
  getAllCategories() {
    return p
  }
  getFetchedLocale() {
    return d
  }
  getCategoryName(e) {
    return e === o.DISCOVERY_ALL_CATEGORIES_ID ? u.default.Messages.HOME : _[e]
  }
}
m.displayName = "GuildDiscoveryCategoryStore";
var E = new m(l.default, {
  GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function(e) {
    let t, {
        categories: n,
        locale: r
      } = e,
      i = [],
      s = [],
      l = n.sort((e, t) => e.name < t.name ? -1 : 1);
    if (l.forEach(e => {
        let {
          id: n,
          name: r,
          is_primary: l
        } = e;
        if (n !== o.DEFAULT_DISCOVERY_CATEGORY_ID) {
          if (n === o.OTHER_DISCOVERY_CATEGORY_ID) {
            t = {
              categoryId: n,
              name: r
            };
            return
          }!0 === l && i.push({
            categoryId: n,
            name: r
          }), s.push({
            categoryId: n,
            name: r
          }), _[n] = r
        }
      }), null != t) {
      let {
        categoryId: e,
        name: n
      } = t;
      i.push({
        categoryId: e,
        name: n
      }), _[e] = n
    }
    d = r, f = i, p = s
  }
})