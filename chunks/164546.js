            "use strict";
            n.r(t), n.d(t, {
                SelectionCircle: function() {
                    return E
                },
                DefaultThemeSelection: function() {
                    return v
                },
                GradientThemeSelection: function() {
                    return N
                }
            }), n("794252");
            var a = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                l = n("506838"),
                r = n("446674"),
                o = n("669491"),
                u = n("2662"),
                d = n("819855"),
                c = n("77078"),
                f = n("161778"),
                m = n("578706"),
                h = n("253539"),
                g = n("92130"),
                _ = n("49111"),
                S = n("782340"),
                p = n("823470");

            function E() {
                return (0, a.jsx)("div", {
                    className: p.selectionCircle,
                    children: (0, a.jsx)(m.default, {
                        className: p.checkmarkCircle,
                        foreground: p.checkmark,
                        backgroundColor: o.default.unsafe_rawColors.WHITE_500.css
                    })
                })
            }

            function T(e) {
                let {
                    name: t,
                    className: n,
                    style: i,
                    onSelect: l,
                    isSelected: r = !1,
                    tabIndex: o,
                    children: u
                } = e, d = (0, c.useRadioItem)({
                    label: t,
                    isSelected: r
                });
                return (0, a.jsx)(c.Tooltip, {
                    text: t,
                    children: e => (0, a.jsxs)("div", {
                        className: p.themeSelectionContainer,
                        children: [(0, a.jsx)(c.Clickable, {
                            ...e,
                            ...d,
                            tabIndex: null != o ? o : d.tabIndex,
                            className: s(p.themeSelection, {
                                [p.selected]: r
                            }, n),
                            style: i,
                            onClick: r ? _.NOOP : l,
                            children: u
                        }), r && (0, a.jsx)(E, {})]
                    })
                })
            }

            function v(e) {
                let {
                    theme: t,
                    isSelected: n,
                    onSelect: i
                } = e, m = (0, r.useStateFromStores)([f.default], () => f.default.systemPrefersColorScheme), h = e => (0, d.isThemeLight)(e) ? o.default.unsafe_rawColors.PRIMARY_600.css : o.default.unsafe_rawColors.WHITE_500.css, E = (0, l.match)({
                    theme: t,
                    systemPrefersColorScheme: m
                }).with({
                    theme: "system",
                    systemPrefersColorScheme: _.ThemeTypes.LIGHT
                }, () => p.lightIcon).with({
                    theme: _.ThemeTypes.LIGHT
                }, () => p.lightIcon).otherwise(() => p.darkIcon), v = (0, l.match)(t).with(_.ThemeTypes.LIGHT, () => S.default.Messages.THEME_LIGHT).with(_.ThemeTypes.DARK, () => S.default.Messages.THEME_DARK).with("system", () => S.default.Messages.THEME_SYSTEM).exhaustive(), N = (0, c.useRedesignIconContext)().enabled;
                return (0, a.jsx)(T, {
                    onSelect: i,
                    isSelected: n,
                    name: v,
                    className: s(p.defaultThemeSelection, E),
                    children: "system" === t && (0, a.jsx)("div", {
                        className: p.iconWrapper,
                        children: N ? (0, a.jsx)(u.RefreshIcon, {
                            color: h(m)
                        }) : (0, a.jsx)(g.default, {
                            fill: h(m)
                        })
                    })
                })
            }

            function N(e) {
                let {
                    preset: t,
                    isSelected: n,
                    disabled: i,
                    tabIndex: l,
                    onSelect: r
                } = e, {
                    colors: o,
                    angle: u,
                    theme: c
                } = t, f = (0, h.getLinearGradientForBackgroundGradient)({
                    colors: o,
                    angle: u
                });
                return (0, a.jsx)(T, {
                    onSelect: i ? void 0 : r,
                    isSelected: n,
                    name: t.getName(),
                    className: s([i ? p.disabled : null, (0, d.isThemeDark)(c) ? p.darkOverlay : p.lightOverlay]),
                    style: {
                        background: "var(--bg-overlay), ".concat(f)
                    },
                    tabIndex: l
                })
            }