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
                    return y
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
                m = s("915639"),
                N = s("697218"),
                f = s("181114"),
                T = s("599110"),
                p = s("701909"),
                C = s("719923"),
                O = s("896630"),
                A = s("837797"),
                g = s("917247"),
                h = s("400307"),
                I = s("702542"),
                R = s("646718"),
                D = s("49111"),
                M = s("782340"),
                b = s("254438"),
                S = s("169903"),
                P = s("389291"),
                x = s("676084"),
                L = s("121432");
            let v = "2023_q4_nitro_drop",
                U = "DnkvLW5052Y",
                y = () => {
                    let e = N.default.getCurrentUser();
                    if ((0, C.isPremiumExactly)(e, R.PremiumTypes.TIER_2) || (0, c.isDismissibleContentDismissed)(r.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL)) return !1;
                    let {
                        enabled: t
                    } = O.Q4DropExperiment.getCurrentConfig({
                        location: "isEligibleForQ4DropAnnouncementModal"
                    });
                    return t
                };

            function j(e) {
                let {
                    renderModalProps: t
                } = e, {
                    onClose: s
                } = t, c = (0, a.useStateFromStores)([m.default], () => m.default.locale), N = c.split("-")[0], O = "en" === N ? "0" : "1", y = "zh-CN" === c ? "zh-Hans" : "zh-TW" === c ? "zh-Hant" : N, j = {
                    url: "".concat((0, D.YOUTUBE_EMBED_URL)(U), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat(O, "&cc_lang_pref=").concat(y),
                    width: 498,
                    height: 280
                }, {
                    location: H
                } = (0, o.useAnalyticsContext)(), {
                    analyticsLocations: k
                } = (0, _.default)(d.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), w = (0, u.default)(), B = (0, g.usePremiumTrialOffer)(), G = null == B ? void 0 : B.subscription_trial, Q = (0, C.formatTrialCtaIntervalDuration)({
                    intervalType: null == G ? void 0 : G.interval,
                    intervalCount: null == G ? void 0 : G.interval_count
                }), F = (0, A.useResponseOnUserState)({
                    defaultResponse: M.default.Messages.BILLING_SUBSCRIBE_TO_PLAN,
                    onTier0TrialOffer: Q,
                    onTier2TrialOffer: Q,
                    onNonTier2Subscriber: M.default.Messages.INTERACTION_PREMIUM_UPSELL_CTA
                }), z = (0, A.useResponseOnUserState)({
                    defaultResponse: "get_nitro_button",
                    onNonTier2Subscriber: "upgrade_plan_button",
                    onTier0TrialOffer: "trial_offer_button",
                    onTier2TrialOffer: "trial_offer_button"
                }), K = (0, A.useResponseOnUserState)({
                    defaultResponse: () => (0, E.default)({
                        subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocations: k,
                        analyticsObject: {
                            ...H,
                            object: D.AnalyticsObjects.BUTTON_CTA,
                            objectType: D.AnalyticsObjectTypes.TIER_2
                        },
                        onClose: e => {
                            e && s()
                        }
                    })
                }), V = (0, l.isThemeDark)(w) ? h.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : h.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL;
                return (0, n.jsx)(I.default, {
                    renderModalProps: t,
                    videoHref: "https://youtu.be/".concat(U),
                    video: j,
                    videoThumbnail: {
                        url: "https://i.ytimg.com/vi/".concat(U, "/maxresdefault.jpg"),
                        width: 498,
                        height: 280
                    },
                    modalDismissibleContent: r.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL,
                    modalTopExtra: () => null != G ? (0, n.jsx)(h.PremiumPillWithSparkles, {
                        text: M.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        className: b.trialPill,
                        colorOptions: V
                    }) : null,
                    header: M.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_HEADER,
                    subHeader: null != G ? M.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_TRIAL_ELIGIBLE : M.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    subHeaderExtra: () => (0, n.jsx)(i.Anchor, {
                        className: b.termsApplyAnchor,
                        href: p.default.getArticleURL(D.HelpdeskArticles.SUMMER_2023_BOGO),
                        children: (0, n.jsx)(i.Heading, {
                            variant: "heading-md/normal",
                            className: b.termsApplyBodyText,
                            children: M.default.Messages.BOGO_TERMS_APPLY
                        })
                    }),
                    featureCards: [{
                        header: M.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_HEADER,
                        subHeader: M.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_DESCRIPTION,
                        imageSrc: S
                    }, {
                        header: M.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_HEADER,
                        subHeader: M.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_DESCRIPTION,
                        imageSrc: x
                    }, {
                        header: M.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_HEADER,
                        subHeader: M.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_DESCRIPTION,
                        imageSrc: P
                    }, {
                        header: M.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_HEADER,
                        subHeader: M.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_DESCRIPTION,
                        imageSrc: P
                    }],
                    changeLogId: v,
                    button: () => {
                        let e = Date.now();
                        return (0, n.jsxs)(f.default, {
                            className: b.buttonWide,
                            innerClassName: b.innerButton,
                            color: i.Button.Colors.GREEN,
                            size: i.Button.Sizes.SMALL,
                            onClick: () => {
                                T.default.track(D.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: v,
                                    cta_type: z,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: "q4_drop_payment_modal"
                                }), K()
                            },
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                className: b.nitroIconSubHeader,
                                src: L
                            }), F]
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
                    return o
                }
            });
            var n = s("498225"),
                a = s("521012"),
                r = s("719923"),
                l = s("917247"),
                i = s("646718");

            function o(e) {
                let {
                    defaultResponse: t,
                    onNonSubscriber: s,
                    onTier0TrialOffer: o,
                    onTier2TrialOffer: u,
                    onTier0TrialPeriod: d,
                    onTier2TrialPeriod: _,
                    onNonTier2Subscriber: c,
                    onTier2Subscriber: E,
                    onCustomCriteria: m
                } = e, N = (0, l.usePremiumTrialOffer)(), f = (0, n.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()), T = r.default.getPremiumTypeFromSubscription(f);
                return null != m ? m() : null != N && (0, i.SubscriptionTrials)[N.trial_id].skus.includes(i.PremiumSubscriptionSKUs.TIER_0) ? null != o ? o : t : null != N && (0, i.SubscriptionTrials)[N.trial_id].skus.includes(i.PremiumSubscriptionSKUs.TIER_2) ? null != u ? u : t : null != f && null != f.trialId && T === i.PremiumTypes.TIER_0 ? null != d ? d : t : null != f && null != f.trialId && T === i.PremiumTypes.TIER_2 ? null != _ ? _ : t : null == T ? null != s ? s : t : T === i.PremiumTypes.TIER_0 || T === i.PremiumTypes.TIER_1 ? null != c ? c : t : T === i.PremiumTypes.TIER_2 ? null != E ? E : t : t
            }
        },
        702542: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return O
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
                m = s("215429"),
                N = s("49111"),
                f = s("994428"),
                T = s("792076");
            let p = e => {
                    let {
                        tagText: t,
                        className: s
                    } = e;
                    return (0, n.jsx)(c.TextBadge, {
                        className: l(T.tag, s),
                        text: t
                    })
                },
                C = e => {
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
                        children: [null != r ? (0, n.jsx)(p, {
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

            function O(e) {
                let {
                    className: t,
                    renderModalProps: s,
                    videoHref: r,
                    video: c,
                    videoThumbnail: p,
                    modalDismissibleContent: O,
                    modalTopExtra: A,
                    header: g,
                    subHeader: h,
                    subHeaderExtra: I,
                    featureCards: R,
                    changeLogId: D,
                    button: M
                } = e, {
                    onClose: b,
                    transitionState: S
                } = s, P = (0, _.useUID)(), x = R.length % 2 == 0;
                return a.useEffect(() => {
                    (0, o.requestMarkDismissibleContentAsShown)(O);
                    let e = Date.now();
                    return E.default.track(N.AnalyticEvents.CHANGE_LOG_OPENED, {
                        change_log_id: D
                    }), () => {
                        E.default.track(N.AnalyticEvents.CHANGE_LOG_CLOSED, {
                            change_log_id: D,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        }), (0, o.markDismissibleContentAsDismissed)(O, {
                            dismissAction: f.ContentDismissActionType.DISMISS
                        })
                    }
                }, [O, D]), (0, n.jsxs)(i.ModalRoot, {
                    className: l(T.root, t),
                    transitionState: S,
                    "aria-labelledby": P,
                    children: [(0, n.jsx)(i.ModalCloseButton, {
                        className: T.closeButton,
                        onClick: b
                    }), (0, n.jsx)(m.default, {
                        className: T.splash
                    }), null == A ? void 0 : A(), (0, n.jsxs)(i.ModalContent, {
                        className: T.content,
                        children: [(0, n.jsx)(i.Heading, {
                            variant: "display-md",
                            className: T.headerText,
                            children: g
                        }), (0, n.jsx)(d.EmbedVideo, {
                            className: T.video,
                            allowFullScreen: !1,
                            href: r,
                            thumbnail: p,
                            video: c,
                            maxWidth: c.width,
                            maxHeight: c.height,
                            renderVideoComponent: u.renderVideoComponent,
                            renderImageComponent: u.renderImageComponent,
                            renderLinkComponent: u.renderMaskedLinkComponent,
                            onPlay: () => {
                                E.default.track(N.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: D
                                })
                            }
                        }), (0, n.jsx)(i.Heading, {
                            variant: "heading-lg/extrabold",
                            className: T.bodyText,
                            children: h
                        }), null == I ? void 0 : I(), (0, n.jsx)("div", {
                            className: l(T.featureCardGroup, {
                                [T.wideStyle]: x
                            }),
                            children: R.map((e, t) => (0, n.jsx)(C, {
                                ...e,
                                wideStyle: x
                            }, "".concat(e.header, "_").concat(t)))
                        }), M()]
                    })]
                })
            }
        }
    }
]);