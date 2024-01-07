            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var u = n("37983");
            n("884691");
            var r = n("446674"),
                a = n("77078"),
                s = n("452804"),
                l = n("180748"),
                i = n("206230"),
                o = n("685665"),
                d = n("648114"),
                c = n("161778"),
                f = n("168973"),
                S = n("845579"),
                E = n("116319"),
                M = n("49111"),
                m = n("782340");

            function p() {
                let e = S.MessageDisplayCompact.useSetting(),
                    {
                        analyticsLocations: t
                    } = (0, o.default)(),
                    {
                        theme: n,
                        useSystemTheme: p,
                        useForcedColors: T
                    } = (0, r.useStateFromStoresObject)([c.default, f.default, i.default], () => ({
                        theme: c.default.theme,
                        useSystemTheme: f.default.useSystemTheme,
                        useForcedColors: i.default.useForcedColors
                    })),
                    I = (e, r) => (0, u.jsx)(a.MenuRadioItem, {
                        id: e,
                        group: "input-modes",
                        label: r,
                        disabled: T,
                        checked: p === E.SystemThemeState.ON ? "system" === e : e === n,
                        action: () => {
                            (0, d.trackClientThemeUpdated)({
                                isPersisted: !0,
                                analyticsLocations: t,
                                themeName: "default ".concat(e)
                            }), (0, s.saveClientTheme)({
                                theme: e
                            })
                        }
                    });
                return [(0, u.jsxs)(a.MenuGroup, {
                    children: [I(M.ThemeTypes.DARK, m.default.Messages.THEME_DARK), I(M.ThemeTypes.LIGHT, m.default.Messages.THEME_LIGHT), I("system", m.default.Messages.THEME_SYSTEM)]
                }, "theme-items"), (0, u.jsx)(a.MenuGroup, {
                    children: (0, u.jsx)(a.MenuItem, {
                        id: "compact-mode",
                        label: e ? m.default.Messages.SWITCH_TO_COZY_MODE : m.default.Messages.SWITCH_TO_COMPACT_MODE,
                        action: () => {
                            S.MessageDisplayCompact.updateSetting(!e), (0, l.setMessageGroupSpacing)()
                        }
                    })
                }, "compact-mode")]
            }