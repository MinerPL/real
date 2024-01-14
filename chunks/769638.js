"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
}), l("70102");
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("768202"),
  c = l("446674"),
  o = l("313915"),
  d = l("721698"),
  u = l("810047"),
  p = l("449281"),
  m = l("915267"),
  _ = l("201335"),
  f = l("199800"),
  h = l("113241"),
  C = l("461410");

function g() {
  let e = (0, c.useStateFromStores)([o.default], () => o.default.appDirectoryIncludesInactiveCollections),
    t = (0, c.useStateFromStores)([u.default], () => u.default.getFetchState({
      includesInactive: e
    })),
    l = (0, c.useStateFromStores)([u.default], () => u.default.getCollections({
      includesInactive: e
    }));
  return (a.useEffect(() => {
    d.getCollections({
      includesInactive: e
    })
  }, [e]), t === u.FetchState.ERROR) ? (0, i.jsx)(p.default, {}) : (0, i.jsx)(m.default, {
    loading: t === u.FetchState.FETCHING,
    children: null == l ? void 0 : l.map((e, t) => {
      let a;
      let n = t > 0 && l[t - 1].type !== r.ApplicationDirectoryCollectionType.GALLERY;
      switch (e.type) {
        case r.ApplicationDirectoryCollectionType.LIST:
          a = (0, i.jsx)(f.default, {
            collection: e
          });
          break;
        case r.ApplicationDirectoryCollectionType.LIST_WITH_IMAGE:
          a = (0, i.jsx)(h.default, {
            collection: e
          });
          break;
        case r.ApplicationDirectoryCollectionType.GALLERY:
          a = (0, i.jsx)(_.default, {
            collection: e
          });
          break;
        default:
          return null
      }
      return (0, i.jsx)("div", {
        className: s({
          [C.topMargin]: n
        }),
        children: a
      }, e.id)
    })
  })
}