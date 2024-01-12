            "use strict";
            s.r(t), s.d(t, {
                UserSettingsAppearanceInAppIcon: function() {
                    return N
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("77078"),
                r = s("913144"),
                o = s("54239"),
                d = s("812204"),
                u = s("685665"),
                c = s("805199"),
                S = s("433724"),
                E = s("635956"),
                f = s("599110"),
                T = s("49111"),
                m = s("646718"),
                _ = s("782340"),
                g = s("393842"),
                h = s("926622");
            let I = () => {
                    r.default.dispatch({
                        type: "APP_ICON_EDITOR_OPEN"
                    }), (0, o.popLayer)()
                },
                N = () => {
                    let {
                        analyticsLocations: e
                    } = (0, u.default)(d.default.USER_SETTINGS), t = (0, l.useStateFromStores)([c.default], () => c.default.isUpsellPreview);
                    return n.useEffect(() => {
                        t && f.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: m.PremiumUpsellTypes.APP_ICON_UPSELL,
                            location_stack: e
                        })
                    }, []), (0, a.jsxs)("div", {
                        className: g.selectionGroup,
                        children: [(0, a.jsx)(S.default, {
                            disabled: t,
                            renderCTAButtons: () => (0, a.jsxs)("div", {
                                className: g.tryItOutButtons,
                                children: [(0, a.jsx)(i.Button, {
                                    color: t ? i.Button.Colors.PRIMARY : i.Button.Colors.BRAND,
                                    onClick: () => I(),
                                    children: _.default.Messages.APP_ICON_PREVIEW_TITLE
                                }), t ? (0, a.jsx)(E.default, {
                                    subscriptionTier: m.PremiumSubscriptionSKUs.TIER_2,
                                    buttonText: _.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                                }) : null]
                            })
                        }), (0, a.jsx)(i.FormDivider, {
                            className: h.marginTop20
                        })]
                    })
                }