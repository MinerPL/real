"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
}), r("70102");
var n = r("37983"),
  l = r("884691"),
  i = r("446674"),
  a = r("960460"),
  s = r("489740"),
  u = r("451540"),
  d = r("425916");
async function o(e) {
  let t = await (0, a.applyPublicBuildOverride)(e);
  if (200 !== t.status) throw Error("Build override couldn't apply");
  window.location.reload(!0)
}
async function c() {
  await (0, a.clearBuildOverride)(), window.location.reload(!0)
}
var f = l.memo(function(e) {
  let {
    url: t
  } = e, r = (0, i.useStateFromStoresObject)([s.default], () => s.default.getCurrentBuildOverride()), a = (0, i.useStateFromStores)([s.default], () => s.default.getBuildOverride(t)), {
    payload: f,
    validatedURL: v
  } = a, g = r.state === s.State.Resolving || a.state === s.State.Resolving, h = l.useCallback(() => null == f ? Promise.reject(Error("Invalid override payload")) : ((0, d.addRecentBuildOverride)(a.override, f), o(f)), [f, a]);
  return null != v ? (0, n.jsx)(u.default, {
    loading: g,
    linkMeta: a.override,
    currentOverrides: r.overrides,
    applyBuildOverride: h,
    clearBuildOverride: c,
    url: v
  }) : null
})