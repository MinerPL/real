            "use strict";
            s.r(t), s.d(t, {
                SelectionCircle: function() {
                    return I
                },
                DefaultThemeSelection: function() {
                    return N
                },
                GradientThemeSelection: function() {
                    return R
                }
            }), s("794252");
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                r = s.n(n),
                i = s("506838"),
                l = s("446674"),
                u = s("669491"),
                d = s("2662"),
                c = s("819855"),
                o = s("77078"),
                E = s("161778"),
                T = s("578706"),
                _ = s("253539"),
                S = s("92130"),
                m = s("49111"),
                f = s("782340"),
                h = s("823470");

            function I() {
                return (0, a.jsx)("div", {
                    className: h.selectionCircle,
                    children: (0, a.jsx)(T.default, {
                        className: h.checkmarkCircle,
                        foreground: h.checkmark,
                        backgroundColor: u.default.unsafe_rawColors.WHITE_500.css
                    })
                })
            }

            function p(e) {
                let {
                    name: t,
                    className: s,
                    style: n,
                    onSelect: i,
                    isSelected: l = !1,
                    tabIndex: u,
                    children: d
                } = e, c = (0, o.useRadioItem)({
                    label: t,
                    isSelected: l
                });
                return (0, a.jsx)(o.Tooltip, {
                    text: t,
                    children: e => (0, a.jsxs)("div", {
                        className: h.themeSelectionContainer,
                        children: [(0, a.jsx)(o.Clickable, {
                            ...e,
                            ...c,
                            tabIndex: null != u ? u : c.tabIndex,
                            className: r(h.themeSelection, {
                                [h.selected]: l
                            }, s),
                            style: n,
                            onClick: l ? m.NOOP : i,
                            children: d
                        }), l && (0, a.jsx)(I, {})]
                    })
                })
            }

            function N(e) {
                let {
                    theme: t,
                    isSelected: s,
                    onSelect: n
                } = e, T = (0, l.useStateFromStores)([E.default], () => E.default.systemPrefersColorScheme), _ = e => (0, c.isThemeLight)(e) ? u.default.unsafe_rawColors.PRIMARY_600.css : u.default.unsafe_rawColors.WHITE_500.css, I = (0, i.match)({
                    theme: t,
                    systemPrefersColorScheme: T
                }).with({
                    theme: "system",
                    systemPrefersColorScheme: m.ThemeTypes.LIGHT
                }, () => h.lightIcon).with({
                    theme: m.ThemeTypes.LIGHT
                }, () => h.lightIcon).otherwise(() => h.darkIcon), N = (0, i.match)(t).with(m.ThemeTypes.LIGHT, () => f.default.Messages.THEME_LIGHT).with(m.ThemeTypes.DARK, () => f.default.Messages.THEME_DARK).with("system", () => f.default.Messages.THEME_SYSTEM).exhaustive(), R = (0, o.useRedesignIconContext)().enabled;
                return (0, a.jsx)(p, {
                    onSelect: n,
                    isSelected: s,
                    name: N,
                    className: r(h.defaultThemeSelection, I),
                    children: "system" === t && (0, a.jsx)("div", {
                        className: h.iconWrapper,
                        children: R ? (0, a.jsx)(d.RefreshIcon, {
                            color: _(T)
                        }) : (0, a.jsx)(S.default, {
                            fill: _(T)
                        })
                    })
                })
            }

            function R(e) {
                let {
                    preset: t,
                    isSelected: s,
                    disabled: n,
                    tabIndex: i,
                    onSelect: l
                } = e, {
                    colors: u,
                    angle: d,
                    theme: o
                } = t, E = (0, _.getLinearGradientForBackgroundGradient)({
                    colors: u,
                    angle: d
                });
                return (0, a.jsx)(p, {
                    onSelect: n ? void 0 : l,
                    isSelected: s,
                    name: t.getName(),
                    className: r([n ? h.disabled : null, (0, c.isThemeDark)(o) ? h.darkOverlay : h.lightOverlay]),
                    style: {
                        background: "var(--bg-overlay), ".concat(E)
                    },
                    tabIndex: i
                })
            }