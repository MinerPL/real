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
            var n = s("37983");
            s("884691");
            var r = s("669491"),
                a = s("819855"),
                l = s("77078"),
                i = s("841098"),
                o = e => {
                    let {
                        className: t
                    } = e, s = (0, i.default)(), o = (0, l.useToken)(r.default.colors.BACKGROUND_ACCENT).hex();
                    return (0, n.jsx)("svg", {
                        width: "700",
                        height: "120",
                        viewBox: "0 0 700 120",
                        className: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            fill: (0, a.isThemeDark)(s) ? o : "white",
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
            var n = s("37983");
            s("884691");
            var r = s("446674"),
                a = s("151426"),
                l = s("819855"),
                i = s("77078"),
                o = s("997289"),
                u = s("841098"),
                _ = s("812204"),
                d = s("685665"),
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
                L = s("782340"),
                S = s("454275"),
                P = s("169903"),
                b = s("389291"),
                x = s("676084"),
                U = s("121432");
            let v = "2023_q4_nitro_drop",
                y = "DnkvLW5052Y",
                H = () => {
                    let e = f.default.getCurrentUser();
                    if ((0, A.isPremiumExactly)(e, g.PremiumTypes.TIER_2) || (0, c.isDismissibleContentDismissed)(a.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL)) return !1;
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
                } = t, c = (0, r.useStateFromStores)([N.default], () => N.default.locale), f = c.split("-")[0], p = "en" === f ? "0" : "1", H = "zh-CN" === c ? "zh-Hans" : "zh-TW" === c ? "zh-Hant" : f, j = {
                    url: "".concat((0, h.YOUTUBE_EMBED_URL)(y), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat(p, "&cc_lang_pref=").concat(H),
                    width: 498,
                    height: 280
                }, {
                    location: k
                } = (0, o.useAnalyticsContext)(), {
                    analyticsLocations: B
                } = (0, d.default)(_.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), G = (0, u.default)(), w = (0, I.usePremiumTrialOffer)(), Q = null == w ? void 0 : w.subscription_trial, F = (0, R.usePremiumDiscountOffer)(), V = (0, A.formatTrialCtaIntervalDuration)({
                    intervalType: null == Q ? void 0 : Q.interval,
                    intervalCount: null == Q ? void 0 : Q.interval_count
                }), W = (0, C.useResponseOnUserState)({
                    onCustomCriteria: () => {
                        if ((null == Q ? void 0 : Q.id) === g.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID) return L.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_TRIAL_ELIGIBLE
                    },
                    defaultResponse: L.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onTier0TrialOffer: L.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onTier2TrialOffer: L.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onNonTier2Subscriber: L.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_UPGRADE_ELIGIBLE
                }), Y = (0, C.useResponseOnUserState)({
                    defaultResponse: () => null,
                    onCustomCriteria: () => {
                        if ((null == Q ? void 0 : Q.id) === g.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID) return () => (0, n.jsx)(i.Anchor, {
                            className: S.termsApplyAnchor,
                            href: O.default.getArticleURL(h.HelpdeskArticles.Q4_DROP),
                            children: (0, n.jsx)(i.Heading, {
                                variant: "heading-md/normal",
                                className: S.termsApplyBodyText,
                                children: L.default.Messages.BOGO_TERMS_APPLY
                            })
                        })
                    }
                }), z = (0, C.useResponseOnUserState)({
                    defaultResponse: L.default.Messages.BILLING_SUBSCRIBE_TO_PLAN,
                    onDiscountOffer: L.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                        percent: null == F ? void 0 : F.discount.amount
                    }),
                    onTier0TrialOffer: V,
                    onTier2TrialOffer: V,
                    onNonTier2Subscriber: L.default.Messages.INTERACTION_PREMIUM_UPSELL_CTA
                }), K = (0, C.useResponseOnUserState)({
                    defaultResponse: "get_nitro_button",
                    onNonTier2Subscriber: "upgrade_plan_button",
                    onDiscountOffer: "discount_offer_button",
                    onTier0TrialOffer: "trial_offer_button",
                    onTier2TrialOffer: "trial_offer_button"
                }), q = (0, C.useResponseOnUserState)({
                    defaultResponse: () => (0, E.default)({
                        subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocations: B,
                        analyticsObject: {
                            ...k,
                            object: h.AnalyticsObjects.BUTTON_CTA,
                            objectType: h.AnalyticsObjectTypes.TIER_2
                        },
                        onClose: e => {
                            e && s()
                        }
                    })
                }), X = (0, l.isThemeDark)(G) ? D.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : D.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL;
                return (0, n.jsx)(M.default, {
                    renderModalProps: t,
                    videoHref: "https://youtu.be/".concat(y),
                    video: j,
                    videoThumbnail: {
                        url: "https://i.ytimg.com/vi/".concat(y, "/maxresdefault.jpg"),
                        width: 498,
                        height: 280
                    },
                    modalDismissibleContent: a.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL,
                    modalTopExtra: () => null != Q ? (0, n.jsx)(D.PremiumPillWithSparkles, {
                        text: L.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        className: S.trialPill,
                        colorOptions: X
                    }) : null,
                    header: L.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_HEADER,
                    subHeader: W,
                    subHeaderExtra: Y,
                    featureCards: [{
                        header: L.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_HEADER,
                        subHeader: L.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_DESCRIPTION,
                        imageSrc: P
                    }, {
                        header: L.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_HEADER,
                        subHeader: L.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_DESCRIPTION,
                        imageSrc: x
                    }, {
                        header: L.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_HEADER,
                        subHeader: L.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_DESCRIPTION,
                        imageSrc: b
                    }, {
                        header: L.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_HEADER,
                        subHeader: L.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_DESCRIPTION,
                        imageSrc: b
                    }],
                    changeLogId: v,
                    button: () => {
                        let e = Date.now();
                        return (0, n.jsxs)(m.default, {
                            className: S.buttonWide,
                            innerClassName: S.innerButton,
                            color: i.Button.Colors.GREEN,
                            size: i.Button.Sizes.SMALL,
                            onClick: () => {
                                T.default.track(h.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: v,
                                    cta_type: K,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: "q4_drop_payment_modal"
                                }), q()
                            },
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                className: S.nitroIconSubHeader,
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
                    return r
                },
                default: function() {
                    return a
                }
            });
            var n = s("862205");
            let r = (0, n.createExperiment)({
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
            var a = function() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return r.useExperiment({
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
            var n = s("446674"),
                r = s("521012"),
                a = s("719923"),
                l = s("154889"),
                i = s("917247"),
                o = s("646718");

            function u(e) {
                let {
                    defaultResponse: t,
                    onDiscountOffer: s,
                    onNonSubscriber: u,
                    onTier0TrialOffer: _,
                    onTier2TrialOffer: d,
                    onTier0TrialPeriod: c,
                    onTier2TrialPeriod: E,
                    onNonTier2Subscriber: N,
                    onTier2Subscriber: f,
                    onCustomCriteria: m
                } = e, T = (0, i.usePremiumTrialOffer)(), O = (0, l.usePremiumDiscountOffer)(), A = (0, n.useStateFromStores)([r.default], () => r.default.getPremiumTypeSubscription()), p = a.default.getPremiumTypeFromSubscription(A);
                if (null != m) {
                    let e = m();
                    if (null != e) return e
                }
                return null != T && (0, o.SubscriptionTrials)[T.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_0) ? null != _ ? _ : t : null != T && (0, o.SubscriptionTrials)[T.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_2) ? null != d ? d : t : null != A && null != A.trialId && p === o.PremiumTypes.TIER_0 ? null != c ? c : t : null != A && null != A.trialId && p === o.PremiumTypes.TIER_2 ? null != E ? E : t : null != O ? null != s ? s : t : null == p ? null != u ? u : t : p === o.PremiumTypes.TIER_0 || p === o.PremiumTypes.TIER_1 ? null != N ? N : t : p === o.PremiumTypes.TIER_2 ? null != f ? f : t : t
            }
        },
        702542: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            });
            var n = s("37983"),
                r = s("884691"),
                a = s("414456"),
                l = s.n(a),
                i = s("77078"),
                o = s("10641"),
                u = s("933629"),
                _ = s("560176"),
                d = s("476765"),
                c = s("956089"),
                E = s("599110"),
                N = s("215429"),
                f = s("49111"),
                m = s("994428"),
                T = s("236998");
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
                        imageSrc: r,
                        tagText: a,
                        wideStyle: o
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: l(T.featureCard, {
                            [T.wideStyle]: o
                        }),
                        children: [null != a ? (0, n.jsx)(O, {
                            tagText: a,
                            className: T.featureCardTag
                        }) : null, (0, n.jsx)("img", {
                            alt: "",
                            className: l(T.featureCardImg, {
                                [T.wideStyle]: o
                            }),
                            src: r
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
                    videoHref: a,
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
                    onClose: L,
                    transitionState: S
                } = s, P = (0, d.useUID)(), b = M.length % 2 == 0;
                return r.useEffect(() => {
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
                    transitionState: S,
                    "aria-labelledby": P,
                    children: [(0, n.jsx)(i.ModalCloseButton, {
                        className: T.closeButton,
                        onClick: L
                    }), (0, n.jsx)(N.default, {
                        className: T.splash
                    }), null == C ? void 0 : C(), (0, n.jsxs)(i.ModalContent, {
                        className: T.content,
                        children: [(0, n.jsx)(i.Heading, {
                            variant: "display-md",
                            className: T.headerText,
                            children: R
                        }), (0, n.jsx)(_.EmbedVideo, {
                            className: T.video,
                            allowFullScreen: !1,
                            href: a,
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
                                [T.wideStyle]: b
                            }),
                            children: M.map((e, t) => (0, n.jsx)(A, {
                                ...e,
                                wideStyle: b
                            }, "".concat(e.header, "_").concat(t)))
                        }), h()]
                    })]
                })
            }
        }
    }
]);