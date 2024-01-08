            "use strict";
            n.r(t), n.d(t, {
                adaptAnnouncementModalVariant1: function() {
                    return C
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("105110"),
                i = n("77078"),
                l = n("649844"),
                r = n("393414"),
                o = n("181114"),
                u = n("599110"),
                d = n("701909"),
                c = n("646718"),
                E = n("49111"),
                f = n("782340"),
                _ = n("334873"),
                h = n("121432");

            function C(e) {
                var t, n;
                let {
                    content: C,
                    renderModalProps: I,
                    analyticsLocations: T,
                    analyticsLocation: S,
                    isLightTheme: N
                } = e, A = "AnnouncementModalVariant1", {
                    onClose: m
                } = I, p = null != C.button && "" !== C.button.copy ? C.button.copy : f.default.Messages.BILLING_SUBSCRIBE_TO_PLAN, g = (null === (t = C.button) || void 0 === t ? void 0 : t.buttonAction) === s.ButtonAction.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", R = (null === (n = C.button) || void 0 === n ? void 0 : n.buttonAction) === s.ButtonAction.OPEN_MARKETING_PAGE ? () => {
                    (0, r.transitionTo)(E.Routes.APPLICATION_STORE), m()
                } : () => (0, l.default)({
                    subscriptionTier: c.PremiumSubscriptionSKUs.TIER_2,
                    analyticsLocations: T,
                    analyticsObject: {
                        ...S,
                        object: E.AnalyticsObjects.BUTTON_CTA,
                        objectType: E.AnalyticsObjectTypes.TIER_2
                    },
                    onClose: e => {
                        e && m()
                    }
                }), O = "" !== C.helpArticleId ? () => (0, a.jsx)(i.Anchor, {
                    className: _.termsApplyAnchor,
                    href: d.default.getArticleURL(C.helpArticleId),
                    children: (0, a.jsx)(i.Heading, {
                        variant: "heading-md/normal",
                        className: _.termsApplyBodyText,
                        children: f.default.Messages.BOGO_TERMS_APPLY
                    })
                }) : void 0, L = {
                    type: "video",
                    src: N ? C.heroArtVideoLinkLightTheme : C.videoLink
                };
                return ("" !== C.heroArtImageLinkDarkTheme || "" !== C.heroArtImageLinkLightTheme) && (L = {
                    type: "image",
                    src: N ? C.heroArtImageLinkLightTheme : C.heroArtImageLinkDarkTheme
                }), {
                    renderModalProps: I,
                    header: C.header,
                    subHeader: C.subheader,
                    subHeaderExtra: O,
                    heroArt: L,
                    featureCards: C.featureCards.map(e => ({
                        header: e.header,
                        subHeader: e.body,
                        imageSrc: N ? e.imageLinkLightTheme : e.imageLink,
                        tagText: "" !== e.pill ? e.pill : void 0
                    })),
                    changeLogId: A,
                    button: () => {
                        let e = Date.now();
                        return (0, a.jsxs)(o.default, {
                            className: _.buttonWide,
                            innerClassName: _.innerButton,
                            color: i.Button.Colors.GREEN,
                            size: i.Button.Sizes.SMALL,
                            onClick: () => {
                                u.default.track(E.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: A,
                                    cta_type: g,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: A
                                }), R()
                            },
                            children: [(0, a.jsx)("img", {
                                alt: "",
                                className: _.nitroIconSubHeader,
                                src: h
                            }), p]
                        })
                    },
                    modalDismissibleContent: "" !== C.dismissKey ? Number(C.dismissKey) : void 0
                }
            }