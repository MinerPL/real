            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return g
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("77078"),
                i = s("841098"),
                r = s("812204"),
                o = s("685665"),
                d = s("635956"),
                u = s("599110"),
                c = s("719923"),
                S = s("49111"),
                E = s("646718"),
                f = s("782340"),
                T = s("303"),
                m = s("709976"),
                _ = s("555657");

            function g(e) {
                let {
                    user: t,
                    showOverlay: s,
                    children: g
                } = e, h = (0, i.default)(), {
                    analyticsLocations: I
                } = (0, o.default)(r.default.PREMIUM_UPSELL_OVERLAY);
                return (n.useEffect(() => {
                    s && u.default.track(S.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        location_stack: I,
                        type: E.PremiumUpsellTypes.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
                    })
                }, [s, I]), s) ? (0, a.jsxs)("div", {
                    className: T.upsellOverlayContainer,
                    children: [(0, a.jsx)("div", {
                        children: g
                    }), (0, a.jsxs)("div", {
                        className: T.upsellOverlay,
                        children: [(0, a.jsx)("img", {
                            className: T.upsellImage,
                            alt: f.default.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_IMAGE_ALT,
                            src: function(e) {
                                switch (e) {
                                    case S.ThemeTypes.DARK:
                                        return m;
                                    case S.ThemeTypes.LIGHT:
                                        return _
                                }
                            }(h)
                        }), (0, a.jsxs)("div", {
                            className: T.upsellTextContainer,
                            children: [(0, a.jsx)(l.Text, {
                                variant: "text-lg/semibold",
                                color: "always-white",
                                children: f.default.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_TITLE
                            }), (0, a.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                color: "always-white",
                                children: f.default.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_DESCRIPTION_THEMES
                            })]
                        }), (0, a.jsx)(d.default, {
                            size: l.Button.Sizes.LARGE,
                            color: l.Button.Colors.GREEN,
                            buttonText: c.default.isPremium(t) ? f.default.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE : f.default.Messages.CHANGE_IDENTITY_UPSELL,
                            subscriptionTier: E.PremiumSubscriptionSKUs.TIER_2
                        })]
                    })]
                }) : (0, a.jsx)(a.Fragment, {
                    children: g
                })
            }