"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  l = n("77078"),
  i = n("686470"),
  r = n("552712"),
  o = n("964889"),
  u = n("790219"),
  d = n("159467"),
  c = n("827825");

function f(e) {
  let {
    application: t,
    fullWidth: n = !1,
    size: f = l.Button.Sizes.LARGE,
    color: m,
    customDisabledColor: E,
    hideNotLaunchable: _,
    tooltipPosition: h,
    onClick: p,
    className: I,
    source: T,
    storeListingAnalyticsProperties: g,
    pauseAnimation: C,
    hover: S,
    innerClassName: A
  } = e, N = {
    fullWidth: n,
    size: f,
    color: m,
    customDisabledColor: E,
    tooltipPosition: h,
    onClick: p,
    className: I,
    hover: S,
    innerClassName: A
  }, M = (0, s.useStateFromStores)([i.default], () => i.default.getActiveLibraryApplication(t.id)), v = null != M ? M.sku.id : null, x = null != v ? v : t.primarySkuId, O = (0, s.useStateFromStores)([r.default], () => null != x && !r.default.didFetchingSkuFail(x));
  return null != M && (0, o.isUserEntitledToLibraryApplication)(M) ? (0, a.jsx)(c.default, {
    ...N,
    libraryApplication: M,
    source: T
  }) : O ? (0, a.jsx)(u.default, {
    ...N,
    skuId: null != M ? M.sku.id : null,
    applicationId: t.id,
    pauseAnimation: C,
    storeListingAnalyticsProperties: g
  }) : (0, a.jsx)(d.default, {
    ...N,
    hideNotLaunchable: _,
    applicationId: t.id
  })
}