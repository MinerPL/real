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
  i = n("206230"),
  l = n("714657"),
  u = n("21121"),
  o = n("161778"),
  d = n("843455");

function c(e) {
  let {
    children: t
  } = e, n = (0, r.useStateFromStores)([o.default], () => o.default.theme), c = (0, u.useInMainTabsExperiment)(), f = (0, r.useStateFromStores)([l.default], () => l.default.gradientPreset), {
    saturation: E,
    contrast: h
  } = (0, r.useStateFromStoresObject)([i.default], () => ({
    saturation: i.default.saturation,
    contrast: i.default.contrast
  })), p = 0;
  return c && (p = (0, s.setThemeFlag)(p, s.ThemeContextFlags.MOBILE_REDESIGN_ENABLED)), null != f && c && (p = f.theme === d.ThemeTypes.LIGHT ? (0, s.setThemeFlag)(p, s.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, s.setThemeFlag)(p, s.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED)), 1 !== E && (p = (0, s.setThemeFlag)(p, s.ThemeContextFlags.REDUCE_SATURATION_ENABLED)), (0, a.jsx)(s.RootThemeContextProvider, {
    theme: n,
    flags: p,
    saturation: E,
    contrast: h,
    children: t
  })
}