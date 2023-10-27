(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["87480"], {
        121432: function(e, t, s) {
            "use strict";
            e.exports = s.p + "21351b92881882ca8597.svg"
        },
        169903: function(e, t, s) {
            "use strict";
            e.exports = s.p + "867436a0aaf9edda9601.svg"
        },
        389291: function(e, t, s) {
            "use strict";
            e.exports = s.p + "bb95de121233bf246961.svg"
        },
        676084: function(e, t, s) {
            "use strict";
            e.exports = s.p + "2b2bc7e0b5e6dc0c2182.svg"
        },
        215429: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            });
            var n = s("920040");
            s("773670");
            var a = s("912557"),
                r = s("819855"),
                l = s("77078"),
                i = s("841098"),
                o = e => {
                    let {
                        className: t
                    } = e, s = (0, i.default)(), o = (0, l.useToken)(a.default.colors.BACKGROUND_ACCENT).hex();
                    return (0, n.jsx)("svg", {
                        width: "700",
                        height: "120",
                        viewBox: "0 0 700 120",
                        className: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            fill: (0, r.isThemeDark)(s) ? o : "white",
                            opacity: "1",
                            d: "M351 39.047C185.4 -31.2102 48 9.77319 0 39.047V583.068C0 587.486 3.58174 591.068 8.00002 591.068H692C696.418 591.068 700 587.486 700 583.068V39.047C653.333 68.3208 516.6 109.304 351 39.047Z"
                        })
                    })
                }
        },
        986675: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                isEligibleForQ4DropAnnouncementModal: function() {
                    return H
                },
                default: function() {
                    return j
                }
            });
            var n = s("920040");
            s("773670");
            var a = s("498225"),
                r = s("975162"),
                l = s("819855"),
                i = s("77078"),
                o = s("997289"),
                u = s("841098"),
                d = s("812204"),
                _ = s("685665"),
                c = s("10641"),
                E = s("649844"),
                N = s("915639"),
                f = s("697218"),
                m = s("181114"),
                T = s("599110"),
                O = s("701909"),
                A = s("719923"),
                p = s("896630"),
                C = s("837797"),
                R = s("154889"),
                I = s("917247"),
                D = s("400307"),
                M = s("702542"),
                g = s("646718"),
                h = s("49111"),
                S = s("782340"),
                L = s("254438"),
                b = s("169903"),
                P = s("389291"),
                x = s("676084"),
                U = s("121432");
            let v = "2023_q4_nitro_drop",
                y = "DnkvLW5052Y",
                H = () => {
                    let e = f.default.getCurrentUser();
                    if ((0, A.isPremiumExactly)(e, g.PremiumTypes.TIER_2) || (0, c.isDismissibleContentDismissed)(r.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL)) return !1;
                    let {
                        enabled: t
                    } = p.Q4DropExperiment.getCurrentConfig({
                        location: "isEligibleForQ4DropAnnouncementModal"
                    });
                    return t
                };

            function j(e) {
                let {
                    renderModalProps: t
                } = e, {
                    onClose: s
                } = t, c = (0, a.useStateFromStores)([N.default], () => N.default.locale), f = c.split("-")[0], p = "en" === f ? "0" : "1", H = "zh-CN" === c ? "zh-Hans" : "zh-TW" === c ? "zh-Hant" : f, j = {
                    url: "".concat((0, h.YOUTUBE_EMBED_URL)(y), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat(p, "&cc_lang_pref=").concat(H),
                    width: 498,
                    height: 280
                }, {
                    location: B
                } = (0, o.useAnalyticsContext)(), {
                    analyticsLocations: k
                } = (0, _.default)(d.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), G = (0, u.default)(), w = (0, I.usePremiumTrialOffer)(), Q = null == w ? void 0 : w.subscription_trial, F = (0, R.usePremiumDiscountOffer)(), V = (0, A.formatTrialCtaIntervalDuration)({
                    intervalType: null == Q ? void 0 : Q.interval,
                    intervalCount: null == Q ? void 0 : Q.interval_count
                }), W = (0, C.useResponseOnUserState)({
                    onCustomCriteria: () => {
                        if ((null == Q ? void 0 : Q.id) === g.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID) return S.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_TRIAL_ELIGIBLE
                    },
                    defaultResponse: S.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onTier0TrialOffer: S.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onTier2TrialOffer: S.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onNonTier2Subscriber: S.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_UPGRADE_ELIGIBLE
                }), z = (0, C.useResponseOnUserState)({
                    defaultResponse: S.default.Messages.BILLING_SUBSCRIBE_TO_PLAN,
                    onDiscountOffer: S.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                        percent: null == F ? void 0 : F.discount.amount
                    }),
                    onTier0TrialOffer: V,
                    onTier2TrialOffer: V,
                    onNonTier2Subscriber: S.default.Messages.INTERACTION_PREMIUM_UPSELL_CTA
                }), K = (0, C.useResponseOnUserState)({
                    defaultResponse: "get_nitro_button",
                    onNonTier2Subscriber: "upgrade_plan_button",
                    onDiscountOffer: "discount_offer_button",
                    onTier0TrialOffer: "trial_offer_button",
                    onTier2TrialOffer: "trial_offer_button"
                }), Y = (0, C.useResponseOnUserState)({
                    defaultResponse: () => (0, E.default)({
                        subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocations: k,
                        analyticsObject: {
                            ...B,
                            object: h.AnalyticsObjects.BUTTON_CTA,
                            objectType: h.AnalyticsObjectTypes.TIER_2
                        },
                        onClose: e => {
                            e && s()
                        }
                    })
                }), q = (0, l.isThemeDark)(G) ? D.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : D.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL;
                return (0, n.jsx)(M.default, {
                    renderModalProps: t,
                    videoHref: "https://youtu.be/".concat(y),
                    video: j,
                    videoThumbnail: {
                        url: "https://i.ytimg.com/vi/".concat(y, "/maxresdefault.jpg"),
                        width: 498,
                        height: 280
                    },
                    modalDismissibleContent: r.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL,
                    modalTopExtra: () => null != Q ? (0, n.jsx)(D.PremiumPillWithSparkles, {
                        text: S.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        className: L.trialPill,
                        colorOptions: q
                    }) : null,
                    header: S.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_HEADER,
                    subHeader: W,
                    subHeaderExtra: () => (0, n.jsx)(i.Anchor, {
                        className: L.termsApplyAnchor,
                        href: O.default.getArticleURL(h.HelpdeskArticles.SUMMER_2023_BOGO),
                        children: (0, n.jsx)(i.Heading, {
                            variant: "heading-md/normal",
                            className: L.termsApplyBodyText,
                            children: S.default.Messages.BOGO_TERMS_APPLY
                        })
                    }),
                    featureCards: [{
                        header: S.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_HEADER,
                        subHeader: S.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_DESCRIPTION,
                        imageSrc: b
                    }, {
                        header: S.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_HEADER,
                        subHeader: S.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_DESCRIPTION,
                        imageSrc: x
                    }, {
                        header: S.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_HEADER,
                        subHeader: S.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_DESCRIPTION,
                        imageSrc: P
                    }, {
                        header: S.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_HEADER,
                        subHeader: S.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_DESCRIPTION,
                        imageSrc: P
                    }],
                    changeLogId: v,
                    button: () => {
                        let e = Date.now();
                        return (0, n.jsxs)(m.default, {
                            className: L.buttonWide,
                            innerClassName: L.innerButton,
                            color: i.Button.Colors.GREEN,
                            size: i.Button.Sizes.SMALL,
                            onClick: () => {
                                T.default.track(h.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: v,
                                    cta_type: K,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: "q4_drop_payment_modal"
                                }), Y()
                            },
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                className: L.nitroIconSubHeader,
                                src: U
                            }), z]
                        })
                    }
                })
            }
        },
        896630: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Q4DropExperiment: function() {
                    return a
                },
                default: function() {
                    return r
                }
            });
            var n = s("862205");
            let a = (0, n.createExperiment)({
                kind: "user",
                id: "2023-10_q4_drop",
                label: "Q4 Drop",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var r = function() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return a.useExperiment({
                    location: "experiment_hook"
                }, {
                    autoTrackExposure: e,
                    disable: t
                })
            }
        },
        837797: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useResponseOnUserState: function() {
                    return u
                }
            });
            var n = s("498225"),
                a = s("521012"),
                r = s("719923"),
                l = s("154889"),
                i = s("917247"),
                o = s("646718");

            function u(e) {
                let {
                    defaultResponse: t,
                    onDiscountOffer: s,
                    onNonSubscriber: u,
                    onTier0TrialOffer: d,
                    onTier2TrialOffer: _,
                    onTier0TrialPeriod: c,
                    onTier2TrialPeriod: E,
                    onNonTier2Subscriber: N,
                    onTier2Subscriber: f,
                    onCustomCriteria: m
                } = e, T = (0, i.usePremiumTrialOffer)(), O = (0, l.usePremiumDiscountOffer)(), A = (0, n.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()), p = r.default.getPremiumTypeFromSubscription(A);
                if (null != m) {
                    let e = m();
                    if (null != e) return e
                }
                return null != T && (0, o.SubscriptionTrials)[T.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_0) ? null != d ? d : t : null != T && (0, o.SubscriptionTrials)[T.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_2) ? null != _ ? _ : t : null != A && null != A.trialId && p === o.PremiumTypes.TIER_0 ? null != c ? c : t : null != A && null != A.trialId && p === o.PremiumTypes.TIER_2 ? null != E ? E : t : null != O ? null != s ? s : t : null == p ? null != u ? u : t : p === o.PremiumTypes.TIER_0 || p === o.PremiumTypes.TIER_1 ? null != N ? N : t : p === o.PremiumTypes.TIER_2 ? null != f ? f : t : t
            }
        },
        702542: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            });
            var n = s("920040"),
                a = s("773670"),
                r = s("575482"),
                l = s.n(r),
                i = s("77078"),
                o = s("10641"),
                u = s("933629"),
                d = s("560176"),
                _ = s("476765"),
                c = s("956089"),
                E = s("599110"),
                N = s("215429"),
                f = s("49111"),
                m = s("994428"),
                T = s("792076");
            let O = e => {
                    let {
                        tagText: t,
                        className: s
                    } = e;
                    return (0, n.jsx)(c.TextBadge, {
                        className: l(T.tag, s),
                        text: t
                    })
                },
                A = e => {
                    let {
                        header: t,
                        subHeader: s,
                        imageSrc: a,
                        tagText: r,
                        wideStyle: o
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: l(T.featureCard, {
                            [T.wideStyle]: o
                        }),
                        children: [null != r ? (0, n.jsx)(O, {
                            tagText: r,
                            className: T.featureCardTag
                        }) : null, (0, n.jsx)("img", {
                            alt: "",
                            className: l(T.featureCardImg, {
                                [T.wideStyle]: o
                            }),
                            src: a
                        }), (0, n.jsxs)("div", {
                            className: T.featureCardTextGroup,
                            children: [(0, n.jsx)(i.Heading, {
                                variant: "heading-lg/extrabold",
                                className: T.featureCardTextHeader,
                                children: t
                            }), (0, n.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: s
                            })]
                        })]
                    })
                };

            function p(e) {
                let {
                    className: t,
                    renderModalProps: s,
                    videoHref: r,
                    video: c,
                    videoThumbnail: O,
                    modalDismissibleContent: p,
                    modalTopExtra: C,
                    header: R,
                    subHeader: I,
                    subHeaderExtra: D,
                    featureCards: M,
                    changeLogId: g,
                    button: h
                } = e, {
                    onClose: S,
                    transitionState: L
                } = s, b = (0, _.useUID)(), P = M.length % 2 == 0;
                return a.useEffect(() => {
                    (0, o.requestMarkDismissibleContentAsShown)(p);
                    let e = Date.now();
                    return E.default.track(f.AnalyticEvents.CHANGE_LOG_OPENED, {
                        change_log_id: g
                    }), () => {
                        E.default.track(f.AnalyticEvents.CHANGE_LOG_CLOSED, {
                            change_log_id: g,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        }), (0, o.markDismissibleContentAsDismissed)(p, {
                            dismissAction: m.ContentDismissActionType.DISMISS
                        })
                    }
                }, [p, g]), (0, n.jsxs)(i.ModalRoot, {
                    className: l(T.root, t),
                    transitionState: L,
                    "aria-labelledby": b,
                    children: [(0, n.jsx)(i.ModalCloseButton, {
                        className: T.closeButton,
                        onClick: S
                    }), (0, n.jsx)(N.default, {
                        className: T.splash
                    }), null == C ? void 0 : C(), (0, n.jsxs)(i.ModalContent, {
                        className: T.content,
                        children: [(0, n.jsx)(i.Heading, {
                            variant: "display-md",
                            className: T.headerText,
                            children: R
                        }), (0, n.jsx)(d.EmbedVideo, {
                            className: T.video,
                            allowFullScreen: !1,
                            href: r,
                            thumbnail: O,
                            video: c,
                            maxWidth: c.width,
                            maxHeight: c.height,
                            renderVideoComponent: u.renderVideoComponent,
                            renderImageComponent: u.renderImageComponent,
                            renderLinkComponent: u.renderMaskedLinkComponent,
                            onPlay: () => {
                                E.default.track(f.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: g
                                })
                            }
                        }), (0, n.jsx)(i.Heading, {
                            variant: "heading-lg/extrabold",
                            className: T.bodyText,
                            children: I
                        }), null == D ? void 0 : D(), (0, n.jsx)("div", {
                            className: l(T.featureCardGroup, {
                                [T.wideStyle]: P
                            }),
                            children: M.map((e, t) => (0, n.jsx)(A, {
                                ...e,
                                wideStyle: P
                            }, "".concat(e.header, "_").concat(t)))
                        }), h()]
                    })]
                })
            }
        }
    }
]);