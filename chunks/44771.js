            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                i = s.n(r),
                l = s("917351"),
                u = s.n(l),
                d = s("77078"),
                c = s("164546"),
                o = s("513196"),
                E = s("42723"),
                T = s("605475"),
                _ = s("49111"),
                S = s("782340"),
                m = s("279732");
            let f = () => [S.default.Messages.APP_ICON_PIRATE, S.default.Messages.APP_ICON_PIRATE_1, S.default.Messages.APP_ICON_PIRATE_2, S.default.Messages.APP_ICON_PIRATE_3, S.default.Messages.APP_ICON_PIRATE_4],
                h = () => {
                    var e;
                    return null !== (e = u.sample(f())) && void 0 !== e ? e : S.default.Messages.APP_ICON_PIRATE
                };

            function Selection(e) {
                let {
                    id: t,
                    className: s,
                    onSelect: r,
                    isSelected: l = !1,
                    tabIndex: u,
                    children: E
                } = e, [S, f] = n.useState(T.ICONS_BY_ID[t].name), I = t === o.PremiumAppIconIds.PIRATE, p = (0, d.useRadioItem)({
                    label: S,
                    isSelected: l
                });
                return (0, a.jsx)(d.Tooltip, {
                    text: S,
                    onTooltipShow: () => I && f(h()),
                    children: e => (0, a.jsxs)("div", {
                        className: m.appIconSelectionContainer,
                        children: [(0, a.jsx)(d.Clickable, {
                            ...e,
                            ...p,
                            tabIndex: null != u ? u : p.tabIndex,
                            className: i(m.appIconSelection, {
                                [m.selected]: l
                            }, s),
                            onClick: l ? _.NOOP : () => null == r ? void 0 : r(t),
                            children: E
                        }), l && (0, a.jsx)(c.SelectionCircle, {})]
                    })
                })
            }

            function I(e) {
                let {
                    icon: t,
                    isSelected: s,
                    disabled: n,
                    tabIndex: r,
                    onSelect: i
                } = e;
                return (0, a.jsx)(Selection, {
                    onSelect: n ? void 0 : i,
                    isSelected: s,
                    id: t.id,
                    className: n ? m.disabled : void 0,
                    tabIndex: r,
                    children: (0, a.jsx)(E.default, {
                        id: t.id,
                        width: T.CUSTOM_BASE_SIZE
                    })
                })
            }