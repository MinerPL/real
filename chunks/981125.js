            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return y
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("446674"),
                r = a("151426"),
                l = a("77078"),
                o = a("997289"),
                d = a("812204"),
                c = a("685665"),
                i = a("649844"),
                u = a("915639"),
                _ = a("697218"),
                m = a("181114"),
                E = a("599110"),
                N = a("701909"),
                f = a("719923"),
                g = a("702542"),
                h = a("646718"),
                A = a("49111"),
                O = a("782340"),
                C = a("444552"),
                p = a("169903"),
                M = a("389291"),
                D = a("676084"),
                T = a("121432");
            let b = "2023_summer_bogo",
                x = "DnkvLW5052Y";

            function y(e) {
                let {
                    renderModalProps: t
                } = e, {
                    onClose: a
                } = t, y = (0, n.useStateFromStores)([u.default], () => u.default.locale), R = y.split("-")[0], S = {
                    url: "".concat((0, A.YOUTUBE_EMBED_URL)(x), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat("en" === R ? "0" : "1", "&cc_lang_pref=").concat("zh-CN" === y ? "zh-Hans" : "zh-TW" === y ? "zh-Hant" : R),
                    width: 498,
                    height: 280
                }, {
                    location: v
                } = (0, o.useAnalyticsContext)(), {
                    analyticsLocations: L
                } = (0, c.default)(d.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), G = (0, n.useStateFromStores)([_.default], () => _.default.getCurrentUser()), j = (0, f.isPremiumExactly)(G, h.PremiumTypes.TIER_2), B = (0, f.isPremium)(G) && !j;
                return (0, s.jsx)(g.default, {
                    renderModalProps: t,
                    heroArt: {
                        type: "embed",
                        embed: S,
                        thumbnail: {
                            url: "https://i.ytimg.com/vi/".concat(x, "/maxresdefault.jpg"),
                            width: 498,
                            height: 280
                        },
                        href: "https://youtu.be/".concat(x)
                    },
                    modalDismissibleContent: r.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
                    header: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_HEADER,
                    subHeader: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SUBHEADER,
                    subHeaderExtra: () => (0, s.jsx)(l.Anchor, {
                        className: C.termsApplyAnchor,
                        href: N.default.getArticleURL(A.HelpdeskArticles.SUMMER_2023_BOGO),
                        children: (0, s.jsx)(l.Heading, {
                            variant: "heading-md/normal",
                            className: C.termsApplyBodyText,
                            children: O.default.Messages.BOGO_TERMS_APPLY
                        })
                    }),
                    featureCards: [{
                        header: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_HEADER,
                        subHeader: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_BODY_FORMATTED.format({
                            helpCenterLink: N.default.getArticleURL(A.HelpdeskArticles.REMIXING)
                        }),
                        imageSrc: p,
                        tagText: O.default.Messages.EARLY_ACCESS
                    }, {
                        header: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_HEADER,
                        subHeader: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_BODY,
                        imageSrc: D
                    }, {
                        header: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_HEADER,
                        subHeader: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_BODY_FORMATTED,
                        imageSrc: M
                    }],
                    changeLogId: b,
                    button: () => {
                        let e = B ? "upgrade_plan_button" : "get_nitro_button",
                            t = Date.now();
                        return (0, s.jsxs)(m.default, {
                            className: C.buttonWide,
                            innerClassName: C.innerButton,
                            color: l.Button.Colors.GREEN,
                            size: l.Button.Sizes.SMALL,
                            onClick: () => {
                                E.default.track(A.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: b,
                                    cta_type: e,
                                    seconds_open: Math.round((Date.now() - t) / 1e3),
                                    target: "bogo_payment_model"
                                }), (0, i.default)({
                                    subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
                                    analyticsLocations: L,
                                    analyticsObject: {
                                        ...v,
                                        object: A.AnalyticsObjects.BUTTON_CTA,
                                        objectType: A.AnalyticsObjectTypes.TIER_2
                                    },
                                    onClose: e => {
                                        e && a()
                                    }
                                })
                            },
                            children: [(0, s.jsx)("img", {
                                alt: "",
                                className: C.nitroIconSubHeader,
                                src: T
                            }), O.default.Messages.BOGO_CLAIM_OFFER]
                        })
                    }
                })
            }