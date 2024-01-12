            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var a = n("37983"),
                i = n("884691"),
                s = n("414456"),
                l = n.n(s),
                r = n("917351"),
                u = n.n(r),
                o = n("77078"),
                d = n("164546"),
                c = n("513196"),
                f = n("42723"),
                m = n("605475"),
                _ = n("49111"),
                h = n("782340"),
                g = n("279732");
            let S = () => [h.default.Messages.APP_ICON_PIRATE, h.default.Messages.APP_ICON_PIRATE_1, h.default.Messages.APP_ICON_PIRATE_2, h.default.Messages.APP_ICON_PIRATE_3, h.default.Messages.APP_ICON_PIRATE_4],
                p = () => {
                    var e;
                    return null !== (e = u.sample(S())) && void 0 !== e ? e : h.default.Messages.APP_ICON_PIRATE
                };

            function Selection(e) {
                let {
                    id: t,
                    className: n,
                    onSelect: s,
                    isSelected: r = !1,
                    tabIndex: u,
                    children: f
                } = e, [h, S] = i.useState(m.ICONS_BY_ID[t].name), E = t === c.PremiumAppIconIds.PIRATE, T = (0, o.useRadioItem)({
                    label: h,
                    isSelected: r
                });
                return (0, a.jsx)(o.Tooltip, {
                    text: h,
                    onTooltipShow: () => E && S(p()),
                    children: e => (0, a.jsxs)("div", {
                        className: g.appIconSelectionContainer,
                        children: [(0, a.jsx)(o.Clickable, {
                            ...e,
                            ...T,
                            tabIndex: null != u ? u : T.tabIndex,
                            className: l(g.appIconSelection, {
                                [g.selected]: r
                            }, n),
                            onClick: r ? _.NOOP : () => null == s ? void 0 : s(t),
                            children: f
                        }), r && (0, a.jsx)(d.SelectionCircle, {})]
                    })
                })
            }

            function E(e) {
                let {
                    icon: t,
                    isSelected: n,
                    disabled: i,
                    tabIndex: s,
                    onSelect: l
                } = e;
                return (0, a.jsx)(Selection, {
                    onSelect: i ? void 0 : l,
                    isSelected: n,
                    id: t.id,
                    className: i ? g.disabled : void 0,
                    tabIndex: s,
                    children: (0, a.jsx)(f.default, {
                        id: t.id,
                        width: m.CUSTOM_BASE_SIZE
                    })
                })
            }