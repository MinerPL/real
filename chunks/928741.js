"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var r = n("446674"),
  s = n("819855"),
  l = n("206230"),
  i = n("714657"),
  u = n("21121"),
  o = n("161778"),
  d = n("843455");

function c(e) {
  let {
    children: t
  } = e, n = (0, r.useStateFromStores)([o.default], () => o.default.theme), c = (0, u.useInMainTabsExperiment)(), f = (0, r.useStateFromStores)([i.default], () => i.default.gradientPreset), {
    saturation: h,
    contrast: p
  } = (0, r.useStateFromStoresObject)([l.default], () => ({
    saturation: l.default.saturation,
    contrast: l.default.contrast
  })), E = 0;
  return c && (E = (0, s.setThemeFlag)(E, s.ThemeContextFlags.MOBILE_REDESIGN_ENABLED)), null != f && c && (E = f.theme === d.ThemeTypes.LIGHT ? (0, s.setThemeFlag)(E, s.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, s.setThemeFlag)(E, s.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED)), 1 !== h && (E = (0, s.setThemeFlag)(E, s.ThemeContextFlags.REDUCE_SATURATION_ENABLED)), (0, a.jsx)(s.RootThemeContextProvider, {
    theme: n,
    flags: E,
    saturation: h,
    contrast: p,
    children: t
  })
}