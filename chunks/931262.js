"use strict";
a.r(t), a.d(t, {
  useCollectiblesShopRouting: function() {
    return c
  }
}), a("313619"), a("654714"), a("287168"), a("956660"), a("222007");
var l, s, r = a("884691"),
  n = a("90915"),
  o = a("54239"),
  i = a("393414"),
  u = a("49111");

function c() {
  let {
    search: e
  } = (0, n.useLocation)(), t = (0, n.useParams)(), a = r.useMemo(() => new URLSearchParams(e), [e]), l = a.get("source"), s = null != l ? parseInt(l, 10) : null, c = r.useCallback(() => {
    if (0 === s) {
      (0, i.back)(), (0, o.pushLayer)(u.Layers.USER_SETTINGS);
      return
    }
    if ((0, i.currentRouteHasBackNavigation)()) {
      (0, i.back)();
      return
    }(0, i.transitionTo)(u.Routes.APP)
  }, [s]);
  return {
    onClose: c,
    source: s,
    ...t
  }
}(s = l || (l = {}))[s.SETTINGS = 0] = "SETTINGS", s[s.CHANGELOG = 1] = "CHANGELOG", s[s.DM_LIST = 2] = "DM_LIST"