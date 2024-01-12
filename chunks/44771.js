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
                o = n.n(r),
                u = n("77078"),
                d = n("164546"),
                c = n("513196"),
                f = n("42723"),
                m = n("605475"),
                h = n("49111"),
                g = n("782340"),
                _ = n("279732");
            let S = () => [g.default.Messages.APP_ICON_PIRATE, g.default.Messages.APP_ICON_PIRATE_1, g.default.Messages.APP_ICON_PIRATE_2, g.default.Messages.APP_ICON_PIRATE_3, g.default.Messages.APP_ICON_PIRATE_4],
                p = () => {
                    var e;
                    return null !== (e = o.sample(S())) && void 0 !== e ? e : g.default.Messages.APP_ICON_PIRATE
                };

            function Selection(e) {
                let {
                    id: t,
                    className: n,
                    onSelect: s,
                    isSelected: r = !1,
                    tabIndex: o,
                    children: f
                } = e, [g, S] = i.useState(m.ICONS_BY_ID[t].name), E = t === c.PremiumAppIconIds.PIRATE, T = (0, u.useRadioItem)({
                    label: g,
                    isSelected: r
                });
                return (0, a.jsx)(u.Tooltip, {
                    text: g,
                    onTooltipShow: () => E && S(p()),
                    children: e => (0, a.jsxs)("div", {
                        className: _.appIconSelectionContainer,
                        children: [(0, a.jsx)(u.Clickable, {
                            ...e,
                            ...T,
                            tabIndex: null != o ? o : T.tabIndex,
                            className: l(_.appIconSelection, {
                                [_.selected]: r
                            }, n),
                            onClick: r ? h.NOOP : () => null == s ? void 0 : s(t),
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
                    className: i ? _.disabled : void 0,
                    tabIndex: s,
                    children: (0, a.jsx)(f.default, {
                        id: t.id,
                        width: m.CUSTOM_BASE_SIZE
                    })
                })
            }