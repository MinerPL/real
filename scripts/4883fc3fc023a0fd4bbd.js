(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54882"], {
        121432: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21351b92881882ca8597.svg"
        },
        83064: function(e, t, n) {
            "use strict";
            e.exports = n.p + "97503fbbef4268888d40.png"
        },
        438313: function(e, t, n) {
            "use strict";
            e.exports = n.p + "464a6c12601ada4d81ff.png"
        },
        227809: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9791fbd5137dfa9b14c1.png"
        },
        352074: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1e5b144b43dfe2ae40b5.png"
        },
        585590: function(e, t, n) {
            "use strict";
            e.exports = n.p + "001a1b6fb841a191c966.png"
        },
        327467: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startMediaViewerSession: function() {
                    return o
                },
                endMediaViewerSession: function() {
                    return u
                },
                incrementSelectedItemChanges: function() {
                    return d
                }
            });
            var s = n("308503"),
                a = n("599110"),
                r = n("49111");
            let i = {
                    guildId: void 0,
                    channelId: void 0,
                    channelType: void 0,
                    viewerSwipes: 0,
                    thumbnailSwipes: 0,
                    selectedItemChanges: 0,
                    numMediaItems: 0
                },
                l = (0, s.default)(() => i);

            function o(e, t, n, s) {
                l.setState({
                    ...i,
                    guildId: e,
                    channelId: t,
                    channelType: n,
                    numMediaItems: s
                })
            }

            function u() {
                let e = l.getState();
                a.default.track(r.AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED, {
                    guild_id: e.guildId,
                    channel_id: e.channelId,
                    channel_type: e.channelType,
                    number_viewer_swipes: e.viewerSwipes,
                    number_thumbnail_swipes: e.thumbnailSwipes,
                    number_selected_item_changes: e.selectedItemChanges,
                    number_media_items: e.numMediaItems
                }), l.setState({
                    ...i
                })
            }

            function d() {
                l.setState(e => ({
                    selectedItemChanges: e.selectedItemChanges + 1
                }))
            }
        },
        215429: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("819855"),
                i = n("77078"),
                l = n("841098"),
                o = e => {
                    let {
                        className: t
                    } = e, n = (0, l.default)(), o = (0, i.useToken)(a.default.colors.BACKGROUND_ACCENT).hex();
                    return (0, s.jsx)("svg", {
                        width: "700",
                        height: "120",
                        viewBox: "0 0 700 120",
                        className: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            fill: (0, r.isThemeDark)(n) ? o : "white",
                            opacity: "1",
                            d: "M351 39.047C185.4 -31.2102 48 9.77319 0 39.047V583.068C0 587.486 3.58174 591.068 8.00002 591.068H692C696.418 591.068 700 587.486 700 583.068V39.047C653.333 68.3208 516.6 109.304 351 39.047Z"
                        })
                    })
                }
        },
        986675: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isEligibleForQ4DropAnnouncementModal: function() {
                    return w
                },
                default: function() {
                    return k
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("151426"),
                r = n("819855"),
                i = n("77078"),
                l = n("997289"),
                o = n("841098"),
                u = n("812204"),
                d = n("685665"),
                _ = n("10641"),
                c = n("649844"),
                E = n("697218"),
                m = n("181114"),
                f = n("599110"),
                p = n("560528"),
                N = n("701909"),
                T = n("719923"),
                O = n("896630"),
                I = n("837797"),
                C = n("154889"),
                A = n("917247"),
                R = n("400307"),
                D = n("702542"),
                M = n("646718"),
                g = n("49111"),
                h = n("782340"),
                S = n("454275"),
                b = n("83064"),
                P = n("438313"),
                L = n("227809"),
                x = n("352074"),
                v = n("585590"),
                U = n("121432");
            let y = "2023_q4_nitro_drop",
                w = () => {
                    let e = E.default.getCurrentUser();
                    if ((0, T.isPremiumExactly)(e, M.PremiumTypes.TIER_2) || (0, _.isDismissibleContentDismissed)(a.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL)) return !1;
                    let {
                        enabled: t
                    } = O.Q4DropExperiment.getCurrentConfig({
                        location: "isEligibleForQ4DropAnnouncementModal"
                    });
                    return t
                };

            function k(e) {
                let {
                    renderModalProps: t
                } = e, {
                    onClose: n
                } = t, _ = (0, p.supportsHEVCAlpha)() ? "https://cdn.discordapp.com/assets/q4-2023-drop/announcement-modal-dark.webm" : "https://cdn.discordapp.com/assets/q4-2023-drop/announcement-modal-dark-transparent.webm", {
                    location: E
                } = (0, l.useAnalyticsContext)(), {
                    analyticsLocations: O
                } = (0, d.default)(u.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), w = (0, o.default)(), k = (0, A.usePremiumTrialOffer)(), H = null == k ? void 0 : k.subscription_trial, j = (0, C.usePremiumDiscountOffer)(), G = (0, T.formatTrialCtaIntervalDuration)({
                    intervalType: null == H ? void 0 : H.interval,
                    intervalCount: null == H ? void 0 : H.interval_count
                }), B = (0, I.useResponseOnUserState)({
                    onCustomCriteria: () => {
                        if ((null == H ? void 0 : H.id) === M.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID) return h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_TRIAL_ELIGIBLE
                    },
                    defaultResponse: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onTier0TrialOffer: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onTier2TrialOffer: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onNonTier2Subscriber: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_UPGRADE_ELIGIBLE
                }), Q = (0, I.useResponseOnUserState)({
                    defaultResponse: () => null,
                    onCustomCriteria: () => {
                        if ((null == H ? void 0 : H.id) === M.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID) return () => (0, s.jsx)(i.Anchor, {
                            className: S.termsApplyAnchor,
                            href: N.default.getArticleURL(g.HelpdeskArticles.Q4_DROP),
                            children: (0, s.jsx)(i.Heading, {
                                variant: "heading-md/normal",
                                className: S.termsApplyBodyText,
                                children: h.default.Messages.BOGO_TERMS_APPLY
                            })
                        })
                    }
                }), V = (0, I.useResponseOnUserState)({
                    defaultResponse: h.default.Messages.BILLING_SUBSCRIBE_TO_PLAN,
                    onDiscountOffer: h.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                        percent: null == j ? void 0 : j.discount.amount
                    }),
                    onTier0TrialOffer: G,
                    onTier2TrialOffer: G,
                    onNonTier2Subscriber: h.default.Messages.INTERACTION_PREMIUM_UPSELL_CTA
                }), F = (0, I.useResponseOnUserState)({
                    defaultResponse: "get_nitro_button",
                    onNonTier2Subscriber: "upgrade_plan_button",
                    onDiscountOffer: "discount_offer_button",
                    onTier0TrialOffer: "trial_offer_button",
                    onTier2TrialOffer: "trial_offer_button"
                }), q = (0, I.useResponseOnUserState)({
                    defaultResponse: () => (0, c.default)({
                        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocations: O,
                        analyticsObject: {
                            ...E,
                            object: g.AnalyticsObjects.BUTTON_CTA,
                            objectType: g.AnalyticsObjectTypes.TIER_2
                        },
                        onClose: e => {
                            e && n()
                        }
                    })
                }), K = (0, r.isThemeDark)(w) ? R.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : R.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL;
                return (0, s.jsx)(D.default, {
                    renderModalProps: t,
                    video: {
                        type: "video",
                        src: _,
                        poster: "https://cdn.discordapp.com/assets/q4-2023-drop/announcement-modal-dark.png"
                    },
                    videoClassName: S.video,
                    modalDismissibleContent: a.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL,
                    modalTopExtra: () => null != H ? (0, s.jsx)(R.PremiumPillWithSparkles, {
                        text: h.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        className: S.trialPill,
                        colorOptions: K
                    }) : null,
                    header: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_HEADER,
                    headerClassName: S.header,
                    subHeader: B,
                    subHeaderExtra: Q,
                    featureCards: [{
                        header: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_HEADER,
                        subHeader: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_DESCRIPTION,
                        imageSrc: P
                    }, {
                        header: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_HEADER,
                        subHeader: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_DESCRIPTION,
                        imageSrc: L
                    }, {
                        header: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_HEADER,
                        subHeader: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_DESCRIPTION,
                        imageSrc: b
                    }, {
                        header: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_HEADER,
                        subHeader: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_DESCRIPTION,
                        imageSrc: (0, r.isThemeDark)(w) ? x : v
                    }],
                    changeLogId: y,
                    button: () => {
                        let e = Date.now();
                        return (0, s.jsxs)(m.default, {
                            className: S.buttonWide,
                            innerClassName: S.innerButton,
                            color: i.Button.Colors.GREEN,
                            size: i.Button.Sizes.SMALL,
                            onClick: () => {
                                f.default.track(g.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: y,
                                    cta_type: F,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: "q4_drop_payment_modal"
                                }), q()
                            },
                            children: [(0, s.jsx)("img", {
                                alt: "",
                                className: S.nitroIconSubHeader,
                                src: U
                            }), V]
                        })
                    }
                })
            }
        },
        896630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Q4DropExperiment: function() {
                    return a
                },
                useQ4DropExperiment: function() {
                    return r
                },
                default: function() {
                    return i
                }
            });
            var s = n("862205");
            let a = (0, s.createExperiment)({
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
                }),
                r = function() {
                    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return a.useExperiment({
                        location: "experiment_hook"
                    }, {
                        autoTrackExposure: e,
                        disable: t
                    })
                };
            var i = r
        },
        837797: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useResponseOnUserState: function() {
                    return u
                }
            });
            var s = n("446674"),
                a = n("521012"),
                r = n("719923"),
                i = n("154889"),
                l = n("917247"),
                o = n("646718");

            function u(e) {
                let {
                    defaultResponse: t,
                    onDiscountOffer: n,
                    onNonSubscriber: u,
                    onTier0TrialOffer: d,
                    onTier2TrialOffer: _,
                    onTier0TrialPeriod: c,
                    onTier2TrialPeriod: E,
                    onNonTier2Subscriber: m,
                    onTier2Subscriber: f,
                    onCustomCriteria: p
                } = e, N = (0, l.usePremiumTrialOffer)(), T = (0, i.usePremiumDiscountOffer)(), O = (0, s.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()), I = r.default.getPremiumTypeFromSubscription(O);
                if (null != p) {
                    let e = p();
                    if (null != e) return e
                }
                return null != N && (0, o.SubscriptionTrials)[N.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_0) ? null != d ? d : t : null != N && (0, o.SubscriptionTrials)[N.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_2) ? null != _ ? _ : t : null != O && null != O.trialId && I === o.PremiumTypes.TIER_0 ? null != c ? c : t : null != O && null != O.trialId && I === o.PremiumTypes.TIER_2 ? null != E ? E : t : null != T ? null != n ? n : t : null == I ? null != u ? u : t : I === o.PremiumTypes.TIER_0 || I === o.PremiumTypes.TIER_1 ? null != m ? m : t : I === o.PremiumTypes.TIER_2 ? null != f ? f : t : t
            }
        },
        702542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var s = n("37983"),
                a = n("884691"),
                r = n("414456"),
                i = n.n(r),
                l = n("446674"),
                o = n("77078"),
                u = n("206230"),
                d = n("10641"),
                _ = n("933629"),
                c = n("560176"),
                E = n("633667"),
                m = n("476765"),
                f = n("956089"),
                p = n("58608"),
                N = n("599110"),
                T = n("215429"),
                O = n("49111"),
                I = n("994428"),
                C = n("236998");
            let A = e => {
                    let {
                        tagText: t,
                        className: n
                    } = e;
                    return (0, s.jsx)(f.TextBadge, {
                        className: i(C.tag, n),
                        text: t
                    })
                },
                R = e => {
                    let {
                        header: t,
                        subHeader: n,
                        imageSrc: a,
                        tagText: r,
                        wideStyle: l
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: i(C.featureCard, {
                            [C.wideStyle]: l
                        }),
                        children: [null != r ? (0, s.jsx)(A, {
                            tagText: r,
                            className: C.featureCardTag
                        }) : null, (0, s.jsx)("img", {
                            alt: "",
                            className: i(C.featureCardImg, {
                                [C.wideStyle]: l
                            }),
                            src: a
                        }), (0, s.jsxs)("div", {
                            className: C.featureCardTextGroup,
                            children: [(0, s.jsx)(o.Heading, {
                                variant: "heading-lg/extrabold",
                                className: C.featureCardTextHeader,
                                children: t
                            }), (0, s.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: n
                            })]
                        })]
                    })
                };

            function D(e) {
                let {
                    className: t,
                    renderModalProps: n,
                    video: r,
                    videoClassName: f,
                    modalDismissibleContent: A,
                    modalTopExtra: D,
                    header: M,
                    headerClassName: g,
                    subHeader: h,
                    subHeaderExtra: S,
                    featureCards: b,
                    changeLogId: P,
                    button: L
                } = e, {
                    onClose: x,
                    transitionState: v
                } = n, U = (0, m.useUID)(), y = b.length % 2 == 0, w = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion);
                return a.useEffect(() => {
                    (0, d.requestMarkDismissibleContentAsShown)(A);
                    let e = Date.now();
                    return N.default.track(O.AnalyticEvents.CHANGE_LOG_OPENED, {
                        change_log_id: P
                    }), () => {
                        N.default.track(O.AnalyticEvents.CHANGE_LOG_CLOSED, {
                            change_log_id: P,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        }), (0, d.markDismissibleContentAsDismissed)(A, {
                            dismissAction: I.ContentDismissActionType.DISMISS
                        })
                    }
                }, [A, P]), (0, s.jsxs)(o.ModalRoot, {
                    className: i(C.root, t),
                    transitionState: v,
                    "aria-labelledby": U,
                    children: [(0, s.jsx)(o.ModalCloseButton, {
                        className: C.closeButton,
                        onClick: x
                    }), (0, s.jsx)(T.default, {
                        className: C.splash
                    }), null == D ? void 0 : D(), (0, s.jsxs)(o.ModalContent, {
                        className: C.content,
                        children: [(0, s.jsx)(o.Heading, {
                            variant: "display-md",
                            className: i(C.headerText, g),
                            children: M
                        }), "video" === r.type ? (0, s.jsx)(p.default, {
                            className: i(C.video, f),
                            autoPlay: !w,
                            loop: !0,
                            muted: !0,
                            controls: !0,
                            src: r.src,
                            poster: r.poster,
                            onPlay: () => {
                                N.default.track(O.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: P
                                })
                            }
                        }) : (0, s.jsx)(c.EmbedVideo, {
                            className: i(C.video, f),
                            allowFullScreen: !1,
                            href: r.href,
                            thumbnail: r.thumbnail,
                            video: r.embed,
                            provider: E.SupportedEmbedIFrame.YOUTUBE,
                            maxWidth: r.embed.width,
                            maxHeight: r.embed.height,
                            renderVideoComponent: _.renderVideoComponent,
                            renderImageComponent: _.renderImageComponent,
                            renderLinkComponent: _.renderMaskedLinkComponent,
                            onPlay: () => {
                                N.default.track(O.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: P
                                })
                            }
                        }), (0, s.jsx)(o.Heading, {
                            variant: "heading-lg/extrabold",
                            className: C.bodyText,
                            children: h
                        }), null == S ? void 0 : S(), (0, s.jsx)("div", {
                            className: i(C.featureCardGroup, {
                                [C.wideStyle]: y
                            }),
                            children: b.map((e, t) => (0, s.jsx)(R, {
                                ...e,
                                wideStyle: y
                            }, "".concat(e.header, "_").concat(t)))
                        }), L()]
                    })]
                })
            }
        }
    }
]);