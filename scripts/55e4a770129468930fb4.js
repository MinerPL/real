(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54882"], {
        121432: function(e, t, n) {
            "use strict";
            e.exports = n.p + "21351b92881882ca8597.svg"
        },
        83064: function(e, t, n) {
            "use strict";
            e.exports = n.p + "879f78418b71810fff04.png"
        },
        438313: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b8c9744a2e79f721f571.png"
        },
        227809: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6639fb72dedc6107f99.png"
        },
        352074: function(e, t, n) {
            "use strict";
            e.exports = n.p + "326615ab385a83dc772a.png"
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
                    return U
                },
                default: function() {
                    return y
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
                N = n("701909"),
                T = n("719923"),
                p = n("896630"),
                I = n("837797"),
                O = n("154889"),
                A = n("917247"),
                C = n("400307"),
                R = n("702542"),
                D = n("646718"),
                M = n("49111"),
                g = n("782340"),
                S = n("454275"),
                h = n("83064"),
                P = n("438313"),
                b = n("227809"),
                L = n("352074"),
                x = n("121432");
            let v = "2023_q4_nitro_drop",
                U = () => {
                    let e = E.default.getCurrentUser();
                    if ((0, T.isPremiumExactly)(e, D.PremiumTypes.TIER_2) || (0, _.isDismissibleContentDismissed)(a.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL)) return !1;
                    let {
                        enabled: t
                    } = p.Q4DropExperiment.getCurrentConfig({
                        location: "isEligibleForQ4DropAnnouncementModal"
                    });
                    return t
                };

            function y(e) {
                let {
                    renderModalProps: t
                } = e, {
                    onClose: n
                } = t, {
                    location: _
                } = (0, l.useAnalyticsContext)(), {
                    analyticsLocations: E
                } = (0, d.default)(u.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), p = (0, o.default)(), U = (0, A.usePremiumTrialOffer)(), y = null == U ? void 0 : U.subscription_trial, w = (0, O.usePremiumDiscountOffer)(), H = (0, T.formatTrialCtaIntervalDuration)({
                    intervalType: null == y ? void 0 : y.interval,
                    intervalCount: null == y ? void 0 : y.interval_count
                }), j = (0, I.useResponseOnUserState)({
                    onCustomCriteria: () => {
                        if ((null == y ? void 0 : y.id) === D.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID) return g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_TRIAL_ELIGIBLE
                    },
                    defaultResponse: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onTier0TrialOffer: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onTier2TrialOffer: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onNonTier2Subscriber: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_UPGRADE_ELIGIBLE
                }), k = (0, I.useResponseOnUserState)({
                    defaultResponse: () => null,
                    onCustomCriteria: () => {
                        if ((null == y ? void 0 : y.id) === D.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID) return () => (0, s.jsx)(i.Anchor, {
                            className: S.termsApplyAnchor,
                            href: N.default.getArticleURL(M.HelpdeskArticles.Q4_DROP),
                            children: (0, s.jsx)(i.Heading, {
                                variant: "heading-md/normal",
                                className: S.termsApplyBodyText,
                                children: g.default.Messages.BOGO_TERMS_APPLY
                            })
                        })
                    }
                }), G = (0, I.useResponseOnUserState)({
                    defaultResponse: g.default.Messages.BILLING_SUBSCRIBE_TO_PLAN,
                    onDiscountOffer: g.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                        percent: null == w ? void 0 : w.discount.amount
                    }),
                    onTier0TrialOffer: H,
                    onTier2TrialOffer: H,
                    onNonTier2Subscriber: g.default.Messages.INTERACTION_PREMIUM_UPSELL_CTA
                }), B = (0, I.useResponseOnUserState)({
                    defaultResponse: "get_nitro_button",
                    onNonTier2Subscriber: "upgrade_plan_button",
                    onDiscountOffer: "discount_offer_button",
                    onTier0TrialOffer: "trial_offer_button",
                    onTier2TrialOffer: "trial_offer_button"
                }), Q = (0, I.useResponseOnUserState)({
                    defaultResponse: () => (0, c.default)({
                        subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocations: E,
                        analyticsObject: {
                            ..._,
                            object: M.AnalyticsObjects.BUTTON_CTA,
                            objectType: M.AnalyticsObjectTypes.TIER_2
                        },
                        onClose: e => {
                            e && n()
                        }
                    })
                }), F = (0, r.isThemeDark)(p) ? C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : C.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL;
                return (0, s.jsx)(R.default, {
                    renderModalProps: t,
                    video: {
                        type: "video",
                        src: "https://cdn.discordapp.com/attachments/986110506119069696/1168984935332319262/04_DIS_Nitro_Drop_In_Product_2X_With_Audio.webm"
                    },
                    videoClassName: S.video,
                    modalDismissibleContent: a.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL,
                    modalTopExtra: () => null != y ? (0, s.jsx)(C.PremiumPillWithSparkles, {
                        text: g.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        className: S.trialPill,
                        colorOptions: F
                    }) : null,
                    header: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_HEADER,
                    headerClassName: S.header,
                    subHeader: j,
                    subHeaderExtra: k,
                    featureCards: [{
                        header: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_HEADER,
                        subHeader: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_DESCRIPTION,
                        imageSrc: P
                    }, {
                        header: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_HEADER,
                        subHeader: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_DESCRIPTION,
                        imageSrc: b
                    }, {
                        header: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_HEADER,
                        subHeader: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_DESCRIPTION,
                        imageSrc: h
                    }, {
                        header: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_HEADER,
                        subHeader: g.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_DESCRIPTION,
                        imageSrc: L
                    }],
                    changeLogId: v,
                    button: () => {
                        let e = Date.now();
                        return (0, s.jsxs)(m.default, {
                            className: S.buttonWide,
                            innerClassName: S.innerButton,
                            color: i.Button.Colors.GREEN,
                            size: i.Button.Sizes.SMALL,
                            onClick: () => {
                                f.default.track(M.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: v,
                                    cta_type: B,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: "q4_drop_payment_modal"
                                }), Q()
                            },
                            children: [(0, s.jsx)("img", {
                                alt: "",
                                className: S.nitroIconSubHeader,
                                src: x
                            }), G]
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
                    onCustomCriteria: N
                } = e, T = (0, l.usePremiumTrialOffer)(), p = (0, i.usePremiumDiscountOffer)(), I = (0, s.useStateFromStores)([a.default], () => a.default.getPremiumTypeSubscription()), O = r.default.getPremiumTypeFromSubscription(I);
                if (null != N) {
                    let e = N();
                    if (null != e) return e
                }
                return null != T && (0, o.SubscriptionTrials)[T.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_0) ? null != d ? d : t : null != T && (0, o.SubscriptionTrials)[T.trial_id].skus.includes(o.PremiumSubscriptionSKUs.TIER_2) ? null != _ ? _ : t : null != I && null != I.trialId && O === o.PremiumTypes.TIER_0 ? null != c ? c : t : null != I && null != I.trialId && O === o.PremiumTypes.TIER_2 ? null != E ? E : t : null != p ? null != n ? n : t : null == O ? null != u ? u : t : O === o.PremiumTypes.TIER_0 || O === o.PremiumTypes.TIER_1 ? null != m ? m : t : O === o.PremiumTypes.TIER_2 ? null != f ? f : t : t
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
                N = n("58608"),
                T = n("599110"),
                p = n("215429"),
                I = n("49111"),
                O = n("994428"),
                A = n("236998");
            let C = e => {
                    let {
                        tagText: t,
                        className: n
                    } = e;
                    return (0, s.jsx)(f.TextBadge, {
                        className: i(A.tag, n),
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
                        className: i(A.featureCard, {
                            [A.wideStyle]: l
                        }),
                        children: [null != r ? (0, s.jsx)(C, {
                            tagText: r,
                            className: A.featureCardTag
                        }) : null, (0, s.jsx)("img", {
                            alt: "",
                            className: i(A.featureCardImg, {
                                [A.wideStyle]: l
                            }),
                            src: a
                        }), (0, s.jsxs)("div", {
                            className: A.featureCardTextGroup,
                            children: [(0, s.jsx)(o.Heading, {
                                variant: "heading-lg/extrabold",
                                className: A.featureCardTextHeader,
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
                    modalDismissibleContent: C,
                    modalTopExtra: D,
                    header: M,
                    headerClassName: g,
                    subHeader: S,
                    subHeaderExtra: h,
                    featureCards: P,
                    changeLogId: b,
                    button: L
                } = e, {
                    onClose: x,
                    transitionState: v
                } = n, U = (0, m.useUID)(), y = P.length % 2 == 0, w = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion);
                return a.useEffect(() => {
                    (0, d.requestMarkDismissibleContentAsShown)(C);
                    let e = Date.now();
                    return T.default.track(I.AnalyticEvents.CHANGE_LOG_OPENED, {
                        change_log_id: b
                    }), () => {
                        T.default.track(I.AnalyticEvents.CHANGE_LOG_CLOSED, {
                            change_log_id: b,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        }), (0, d.markDismissibleContentAsDismissed)(C, {
                            dismissAction: O.ContentDismissActionType.DISMISS
                        })
                    }
                }, [C, b]), (0, s.jsxs)(o.ModalRoot, {
                    className: i(A.root, t),
                    transitionState: v,
                    "aria-labelledby": U,
                    children: [(0, s.jsx)(o.ModalCloseButton, {
                        className: A.closeButton,
                        onClick: x
                    }), (0, s.jsx)(p.default, {
                        className: A.splash
                    }), null == D ? void 0 : D(), (0, s.jsxs)(o.ModalContent, {
                        className: A.content,
                        children: [(0, s.jsx)(o.Heading, {
                            variant: "display-md",
                            className: i(A.headerText, g),
                            children: M
                        }), "video" === r.type ? (0, s.jsx)(N.default, {
                            className: i(A.video, f),
                            autoPlay: !w,
                            loop: !0,
                            muted: !0,
                            controls: !0,
                            src: r.src,
                            onPlay: () => {
                                T.default.track(I.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: b
                                })
                            }
                        }) : (0, s.jsx)(c.EmbedVideo, {
                            className: i(A.video, f),
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
                                T.default.track(I.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: b
                                })
                            }
                        }), (0, s.jsx)(o.Heading, {
                            variant: "heading-lg/extrabold",
                            className: A.bodyText,
                            children: S
                        }), null == h ? void 0 : h(), (0, s.jsx)("div", {
                            className: i(A.featureCardGroup, {
                                [A.wideStyle]: y
                            }),
                            children: P.map((e, t) => (0, s.jsx)(R, {
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