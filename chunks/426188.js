"use strict";
s.r(t), s.d(t, {
  useFetchCollectiblesProduct: function() {
    return l
  }
}), s("222007");
var i = s("884691"),
  n = s("65597"),
  a = s("552712"),
  o = s("21526"),
  u = s("853987"),
  r = s("49111");

function l(e) {
  let t = (0, n.default)([a.default], () => null != e ? a.default.get(e) : null),
    s = null != t && t.productLine !== r.SKUProductLines.COLLECTIBLES,
    [l, c] = (0, n.useStateFromStoresArray)([u.default], () => [u.default.isFetching, u.default.getProduct(e)]);
  return (0, i.useEffect)(() => {
    null != e && null == c && !s && !l && (0, o.fetchCollectiblesProduct)(e)
  }, [e, c, s, l]), {
    product: c,
    isFetching: l
  }
}