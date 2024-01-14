"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("222007");
var a = s("884691"),
  n = s("853987"),
  l = s("491232"),
  i = s("235898"),
  r = e => {
    let [t, s] = a.useState(), {
      categories: r
    } = (0, i.default)();
    return a.useEffect(() => {
      (null == t || 0 === t.size) && s(r)
    }, [r, t]), a.useMemo(() => {
      if (null != e) return e;
      if (null == t) return;
      let s = (0, l.getProfileEffectsFromCategories)(t),
        a = s.filter(e => {
          let {
            skuId: t
          } = e, s = n.default.getProduct(t);
          return (0, l.isPremiumCollectiblesProduct)(s)
        }).map(e => e.id);
      return a[Math.floor(Math.random() * a.length)]
    }, [t, e])
  }