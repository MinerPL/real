"use strict";
s.r(e), s.d(e, {
  useFetchCollectiblesProduct: function() {
    return u
  }
}), s("222007");
var i = s("884691"),
  l = s("65597"),
  a = s("552712"),
  n = s("21526"),
  r = s("853987"),
  o = s("49111");

function u(t) {
  let e = (0, l.default)([a.default], () => null != t ? a.default.get(t) : null),
    s = null != e && e.productLine !== o.SKUProductLines.COLLECTIBLES,
    [u, d] = (0, l.useStateFromStoresArray)([r.default], () => [r.default.isFetching, r.default.getProduct(t)]);
  return (0, i.useEffect)(() => {
    null != t && null == d && !s && !u && (0, n.fetchCollectiblesProduct)(t)
  }, [t, d, s, u]), {
    product: d,
    isFetching: u
  }
}