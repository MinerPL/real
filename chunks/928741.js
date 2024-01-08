            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                r = n("819855"),
                i = n("206230"),
                l = n("714657"),
                u = n("21121"),
                o = n("161778"),
                d = n("727538"),
                c = n("843455");

            function f(e) {
                let {
                    children: t
                } = e, n = (0, s.useStateFromStores)([o.default], () => o.default.theme), f = (0, u.useInMainTabsExperiment)(), E = (0, s.useStateFromStores)([l.default], () => l.default.gradientPreset), {
                    saturation: h,
                    contrastMode: p
                } = (0, s.useStateFromStoresObject)([i.default], () => ({
                    saturation: i.default.saturation,
                    contrastMode: i.default.contrastMode
                })), S = 0;
                return f && (S = (0, r.setThemeFlag)(S, r.ThemeContextFlags.MOBILE_REDESIGN_ENABLED)), null != E && f && (S = E.theme === c.ThemeTypes.LIGHT ? (0, r.setThemeFlag)(S, r.ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, r.setThemeFlag)(S, r.ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED)), p === d.AccessibilityContrastMode.REDUCED ? S = (0, r.setThemeFlag)(S, r.ThemeContextFlags.REDUCED_CONTRAST_ENABLED) : p === d.AccessibilityContrastMode.INCREASED && (S = (0, r.setThemeFlag)(S, r.ThemeContextFlags.INCREASED_CONTRAST_ENABLED)), 1 !== h && (S = (0, r.setThemeFlag)(S, r.ThemeContextFlags.REDUCE_SATURATION_ENABLED)), (0, a.jsx)(r.RootThemeContextProvider, {
                    theme: n,
                    flags: S,
                    children: t
                })
            }