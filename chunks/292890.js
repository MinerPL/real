            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("446674"),
                i = l("77078"),
                u = l("812204"),
                r = l("685665"),
                o = l("635956"),
                c = l("697218"),
                d = l("599110"),
                f = l("719923"),
                T = l("38766"),
                _ = l("49111"),
                E = l("646718"),
                p = l("397336"),
                S = l("782340"),
                m = l("856049");

            function I(e) {
                let {
                    analyticsLocations: t,
                    transitionState: I,
                    onClose: P,
                    title: C,
                    description: M
                } = e, R = (0, a.useStateFromStores)([c.default], () => c.default.getCurrentUser()), {
                    AnalyticsLocationProvider: N,
                    analyticsLocations: L
                } = (0, r.default)(t, u.default.PROFILE_THEME_UPSELL_MODAL);
                s.useEffect(() => {
                    d.default.track(_.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: E.PremiumUpsellTypes.PROFILE_THEME_UPSELL_MODAL,
                        location_stack: t
                    })
                }, [t]);
                let A = (0, T.default)({
                    scrollPosition: p.ProfileCustomizationScrollPositions.TRY_IT_OUT,
                    analyticsLocations: L
                });
                return (0, n.jsx)(N, {
                    children: (0, n.jsxs)(i.ModalRoot, {
                        className: m.profileThemesUpsellModal,
                        "aria-label": null != C ? C : S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE,
                        transitionState: I,
                        children: [(0, n.jsxs)(i.ModalHeader, {
                            className: m.profileThemesUpsellModalHeader,
                            separator: !1,
                            children: [(0, n.jsx)(i.Heading, {
                                variant: "heading-xl/extrabold",
                                className: m.profileThemesUpsellModalTitle,
                                children: null != C ? C : S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_TITLE
                            }), (0, n.jsx)(i.ModalCloseButton, {
                                className: m.profileThemesUpsellModalCloseButton,
                                onClick: P
                            })]
                        }), (0, n.jsxs)(i.ModalContent, {
                            className: m.profileThemesUpsellModalContent,
                            children: [(0, n.jsx)(i.Text, {
                                className: m.profileThemesUpsellModalDescription,
                                variant: "text-md/normal",
                                children: null != M ? M : S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_BANNER_MODAL_DESCRIPTION
                            }), (0, n.jsx)("img", {
                                className: m.profileThemesUpsellModalExampleImage,
                                src: l("244333"),
                                alt: S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_MODAL_IMAGE_ALT
                            })]
                        }), (0, n.jsxs)(i.ModalFooter, {
                            className: m.profileThemesUpsellModalFooter,
                            children: [(0, n.jsx)(o.default, {
                                subscriptionTier: E.PremiumSubscriptionSKUs.TIER_2,
                                size: i.Button.Sizes.SMALL,
                                buttonText: f.default.isPremium(R) ? S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : S.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            }), (0, n.jsx)(i.Button, {
                                onClick: () => {
                                    P(), A()
                                },
                                color: i.Button.Colors.PRIMARY,
                                look: i.Button.Looks.LINK,
                                size: i.Button.Sizes.SMALL,
                                children: S.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_TRY_IT_OUT
                            })]
                        })]
                    })
                })
            }