            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var a = l("37983"),
                s = l("884691"),
                r = l("77078"),
                n = l("252744"),
                o = l("685665"),
                i = l("108486"),
                u = l("946964"),
                c = l("978679"),
                d = l("57940"),
                f = l("843455"),
                C = l("782340"),
                E = l("436752");
            let m = {
                dark: [{
                    box: "#FFF19E",
                    ribbon: "#FF484B"
                }, {
                    box: "#17B5E2",
                    ribbon: "#FFFFFF"
                }, {
                    box: "#FFE1A6",
                    ribbon: "#C29CFF"
                }, {
                    box: "#60DA81",
                    ribbon: "#FFF597"
                }, {
                    box: "#E4578A",
                    ribbon: "#BEC4FF"
                }, {
                    box: "#AFE0FC",
                    ribbon: "#FF9356"
                }, {
                    box: "#DB6D6D",
                    ribbon: "#67DA9C"
                }],
                light: [{
                    box: "#FFF19E",
                    ribbon: "#FF484B"
                }, {
                    box: "#025D90",
                    ribbon: "#70FFF8"
                }, {
                    box: "#C29CFF",
                    ribbon: "#255FA3"
                }, {
                    box: "#6AC082",
                    ribbon: "#DED052"
                }, {
                    box: "#AC448B",
                    ribbon: "#4845B8"
                }, {
                    box: "#175B82",
                    ribbon: "#F9D249"
                }, {
                    box: "#B54141",
                    ribbon: "#026530"
                }]
            };
            var p = e => {
                let {
                    product: t,
                    returnRef: l,
                    onSuccess: p,
                    tooltipDelay: g,
                    isGiftEasterEggEnabled: h,
                    disableCustomColor: b = !1
                } = e, {
                    analyticsLocations: T
                } = (0, o.default)(), x = s.useRef(null), L = (0, n.default)(x), {
                    buttonColors: S
                } = (0, d.default)(t.categorySkuId), v = null == S || b ? void 0 : {
                    background: S.secondary.toHslString(),
                    color: S.text.toHslString()
                }, I = b || (null == S ? void 0 : S.text.isDark()) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT;
                return (0, a.jsx)(r.Tooltip, {
                    text: C.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
                    delay: g,
                    children: e => (0, a.jsx)(r.Button, {
                        ...e,
                        buttonRef: x,
                        style: v,
                        className: E.giftButton,
                        color: b ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
                        look: r.Button.Looks.FILLED,
                        size: r.ButtonSizes.ICON,
                        innerClassName: E.giftButtonInner,
                        "aria-label": C.default.Messages.PREMIUM_GIFTING_BUTTON,
                        onClick: e => {
                            e.stopPropagation(), (0, u.default)({
                                skuId: t.skuId,
                                isGift: !0,
                                analyticsLocations: T,
                                returnRef: l,
                                onClose: null != p ? e => {
                                    e && p()
                                } : void 0
                            })
                        },
                        children: h ? (0, a.jsx)(i.SeasonalGiftIcon, {
                            hovered: L,
                            isContentDismissed: !0,
                            themeOverride: I,
                            boxColors: m
                        }) : (0, a.jsx)(c.default, {
                            width: 24,
                            height: 24
                        })
                    })
                })
            }