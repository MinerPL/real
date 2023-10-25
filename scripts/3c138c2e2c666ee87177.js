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
                    return i
                }
            });
            var n = s("920040");
            s("773670");
            var a = s("819855"),
                r = s("841098"),
                i = e => {
                    let {
                        className: t
                    } = e, s = (0, r.default)();
                    return (0, n.jsxs)("svg", {
                        width: "700",
                        height: "613",
                        viewBox: "0 0 700 613",
                        className: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsx)("path", {
                            fill: (0, a.isThemeDark)(s) ? "url(#paint0_linear_127_14184)" : "white",
                            opacity: (0, a.isThemeDark)(s) ? "0.5" : "1",
                            d: "M351 41C185.4 -31.8 48 10.6667 0 41V605C0 609.418 3.58174 613 8.00002 613H692C696.418 613 700 609.418 700 605V41C653.333 71.3333 516.6 113.8 351 41Z"
                        }), (0, n.jsx)("defs", {
                            children: (0, n.jsxs)("linearGradient", {
                                id: "paint0_linear_127_14184",
                                x1: "349",
                                y1: "0.803345",
                                x2: "349",
                                y2: "613",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, n.jsx)("stop", {
                                    stopColor: "#606060"
                                }), (0, n.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#313338"
                                })]
                            })
                        })]
                    })
                }
        },
        347508: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return O
                }
            });
            var n = s("920040"),
                a = s("773670"),
                r = s("575482"),
                i = s.n(r),
                l = s("77078"),
                o = s("10641"),
                u = s("933629"),
                d = s("560176"),
                c = s("476765"),
                _ = s("956089"),
                E = s("599110"),
                m = s("215429"),
                N = s("49111"),
                f = s("994428"),
                p = s("399171");
            let T = e => {
                    let {
                        tagText: t,
                        className: s
                    } = e;
                    return (0, n.jsx)(_.TextBadge, {
                        className: i(p.tag, s),
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
                        className: i(p.featureCard, {
                            [p.wideStyle]: o
                        }),
                        children: [null != r ? (0, n.jsx)(T, {
                            tagText: r,
                            className: p.featureCardTag
                        }) : null, (0, n.jsx)("img", {
                            alt: "",
                            className: i(p.featureCardImg, {
                                [p.wideStyle]: o
                            }),
                            src: a
                        }), (0, n.jsxs)("div", {
                            className: p.featureCardTextGroup,
                            children: [(0, n.jsx)(l.Heading, {
                                variant: "heading-lg/extrabold",
                                className: p.featureCardTextHeader,
                                children: t
                            }), (0, n.jsx)(l.Text, {
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
                    video: _,
                    videoThumbnail: T,
                    modalDismissibleContent: O,
                    header: g,
                    subHeader: A,
                    subHeaderExtra: h,
                    featureCards: D,
                    changeLogId: M,
                    button: R
                } = e, {
                    onClose: b,
                    transitionState: I
                } = s, S = (0, c.useUID)(), x = D.length % 2 == 0;
                return a.useEffect(() => {
                    (0, o.requestMarkDismissibleContentAsShown)(O);
                    let e = Date.now();
                    return E.default.track(N.AnalyticEvents.CHANGE_LOG_OPENED, {
                        change_log_id: M
                    }), () => {
                        E.default.track(N.AnalyticEvents.CHANGE_LOG_CLOSED, {
                            change_log_id: M,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        }), (0, o.markDismissibleContentAsDismissed)(O, {
                            dismissAction: f.ContentDismissActionType.DISMISS
                        })
                    }
                }, [O, M]), (0, n.jsxs)(l.ModalRoot, {
                    className: i(p.root, t),
                    transitionState: I,
                    "aria-labelledby": S,
                    children: [(0, n.jsx)(l.ModalCloseButton, {
                        className: p.closeButton,
                        onClick: b
                    }), (0, n.jsx)(m.default, {
                        className: p.splash
                    }), (0, n.jsxs)(l.ModalContent, {
                        className: p.content,
                        children: [(0, n.jsx)(l.Heading, {
                            variant: "display-md",
                            className: p.headerText,
                            children: g
                        }), (0, n.jsx)(d.EmbedVideo, {
                            className: p.video,
                            allowFullScreen: !1,
                            href: r,
                            thumbnail: T,
                            video: _,
                            maxWidth: _.width,
                            maxHeight: _.height,
                            renderVideoComponent: u.renderVideoComponent,
                            renderImageComponent: u.renderImageComponent,
                            renderLinkComponent: u.renderMaskedLinkComponent,
                            onPlay: () => {
                                E.default.track(N.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: M
                                })
                            }
                        }), (0, n.jsx)(l.Heading, {
                            variant: "heading-lg/extrabold",
                            className: p.bodyText,
                            children: A
                        }), null == h ? void 0 : h(), (0, n.jsx)("div", {
                            className: i(p.featureCardGroup, {
                                [p.wideStyle]: x
                            }),
                            children: D.map((e, t) => (0, n.jsx)(C, {
                                ...e,
                                wideStyle: x
                            }, "".concat(e.header, "_").concat(t)))
                        }), R()]
                    })]
                })
            }
        },
        986675: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                isEligibleForQ4DropAnnouncementModal: function() {
                    return L
                },
                default: function() {
                    return v
                }
            });
            var n = s("920040");
            s("773670");
            var a = s("498225"),
                r = s("975162"),
                i = s("77078"),
                l = s("997289"),
                o = s("812204"),
                u = s("685665"),
                d = s("10641"),
                c = s("649844"),
                _ = s("915639"),
                E = s("697218"),
                m = s("181114"),
                N = s("599110"),
                f = s("701909"),
                p = s("719923"),
                T = s("896630"),
                C = s("837797"),
                O = s("917247"),
                g = s("347508"),
                A = s("646718"),
                h = s("49111"),
                D = s("782340"),
                M = s("254438"),
                R = s("169903"),
                b = s("389291"),
                I = s("676084"),
                S = s("121432");
            let x = "2023_q4_nitro_drop",
                P = "DnkvLW5052Y",
                L = () => {
                    let e = E.default.getCurrentUser();
                    if ((0, p.isPremiumExactly)(e, A.PremiumTypes.TIER_2) || (0, d.isDismissibleContentDismissed)(r.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL)) return !1;
                    let {
                        enabled: t
                    } = T.Q4DropExperiment.getCurrentConfig({
                        location: "isEligibleForQ4DropAnnouncementModal"
                    });
                    return t
                };

            function v(e) {
                let {
                    renderModalProps: t
                } = e, {
                    onClose: s
                } = t, d = (0, a.useStateFromStores)([_.default], () => _.default.locale), E = d.split("-")[0], T = "en" === E ? "0" : "1", L = "zh-CN" === d ? "zh-Hans" : "zh-TW" === d ? "zh-Hant" : E, v = {
                    url: "".concat((0, h.YOUTUBE_EMBED_URL)(P), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat(T, "&cc_lang_pref=").concat(L),
                    width: 498,
                    height: 280
                }, {
                    location: U
                } = (0, l.useAnalyticsContext)(), {
                    analyticsLocations: y
                } = (0, u.default)(o.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), j = (0, O.usePremiumTrialOffer)(), H = null == j ? void 0 : j.subscription_trial, k = (0, p.formatTrialCtaIntervalDuration)({
                    intervalType: null == H ? void 0 : H.interval,
                    intervalCount: null == H ? void 0 : H.interval_count
                }), w = (0, C.useResponseOnUserState)({
                    defaultResponse: D.default.Messages.BILLING_SUBSCRIBE_TO_PLAN,
                    onTier0TrialOffer: k,
                    onTier2TrialOffer: k,
                    onNonTier2Subscriber: D.default.Messages.INTERACTION_PREMIUM_UPSELL_CTA
                }), B = (0, C.useResponseOnUserState)({
                    defaultResponse: "get_nitro_button",
                    onNonTier2Subscriber: "upgrade_plan_button",
                    onTier0TrialOffer: "trial_offer_button",
                    onTier2TrialOffer: "trial_offer_button"
                }), G = (0, C.useResponseOnUserState)({
                    defaultResponse: () => (0, c.default)({
                        subscriptionTier: A.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocations: y,
                        analyticsObject: {
                            ...U,
                            object: h.AnalyticsObjects.BUTTON_CTA,
                            objectType: h.AnalyticsObjectTypes.TIER_2
                        },
                        onClose: e => {
                            e && s()
                        }
                    })
                });
                return (0, n.jsx)(g.default, {
                    renderModalProps: t,
                    videoHref: "https://youtu.be/".concat(P),
                    video: v,
                    videoThumbnail: {
                        url: "https://i.ytimg.com/vi/".concat(P, "/maxresdefault.jpg"),
                        width: 498,
                        height: 280
                    },
                    modalDismissibleContent: r.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL,
                    header: D.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_HEADER,
                    subHeader: null != H ? D.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_TRIAL_ELIGIBLE : D.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    subHeaderExtra: () => (0, n.jsx)(i.Anchor, {
                        className: M.termsApplyAnchor,
                        href: f.default.getArticleURL(h.HelpdeskArticles.SUMMER_2023_BOGO),
                        children: (0, n.jsx)(i.Heading, {
                            variant: "heading-md/normal",
                            className: M.termsApplyBodyText,
                            children: D.default.Messages.BOGO_TERMS_APPLY
                        })
                    }),
                    featureCards: [{
                        header: D.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_HEADER,
                        subHeader: D.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_DESCRIPTION,
                        imageSrc: R
                    }, {
                        header: D.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_HEADER,
                        subHeader: D.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_DESCRIPTION,
                        imageSrc: I
                    }, {
                        header: D.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_HEADER,
                        subHeader: D.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_DESCRIPTION,
                        imageSrc: b
                    }, {
                        header: D.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_HEADER,
                        subHeader: D.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_DESCRIPTION,
                        imageSrc: b
                    }],
                    changeLogId: x,
                    button: () => {
                        let e = Date.now();
                        return (0, n.jsxs)(m.default, {
                            className: M.buttonWide,
                            innerClassName: M.innerButton,
                            color: i.Button.Colors.GREEN,
                            size: i.Button.Sizes.SMALL,
                            onClick: () => {
                                N.default.track(h.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: x,
                                    cta_type: B,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: "q4_drop_payment_modal"
                                }), G()
                            },
                            children: [(0, n.jsx)("img", {
                                alt: "",
                                className: M.nitroIconSubHeader,
                                src: S
                            }), w]
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
                i = s("917247"),
                l = s("646718");

            function o(e) {
                let {
                    defaultResponse: t,
                    onNonSubscriber: s,
                    onTier0TrialOffer: o,
                    onTier2TrialOffer: u,
                    onTier0TrialPeriod: d,
                    onTier2TrialPeriod: c,
                    onNonTier2Subscriber: _,
                    onTier2Subscriber: E,
                    onCustomCriteria: m
                } = e, N = (0, i.usePremiumTrialOffer)(), f = (0, n.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()), p = r.default.getPremiumTypeFromSubscription(f);
                return null != m ? m() : null != N && (0, l.SubscriptionTrials)[N.trial_id].skus.includes(l.PremiumSubscriptionSKUs.TIER_0) ? null != o ? o : t : null != N && (0, l.SubscriptionTrials)[N.trial_id].skus.includes(l.PremiumSubscriptionSKUs.TIER_2) ? null != u ? u : t : null != f && null != f.trialId && p === l.PremiumTypes.TIER_0 ? null != d ? d : t : null != f && null != f.trialId && p === l.PremiumTypes.TIER_2 ? null != c ? c : t : null == p ? null != s ? s : t : p === l.PremiumTypes.TIER_0 || p === l.PremiumTypes.TIER_1 ? null != _ ? _ : t : p === l.PremiumTypes.TIER_2 ? null != E ? E : t : t
            }
        }
    }
]);