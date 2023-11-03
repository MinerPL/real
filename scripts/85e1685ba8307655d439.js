(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["87480"], {
        121432: function(e, t, s) {
            "use strict";
            e.exports = s.p + "21351b92881882ca8597.svg"
        },
        83064: function(e, t, s) {
            "use strict";
            e.exports = s.p + "97503fbbef4268888d40.png"
        },
        438313: function(e, t, s) {
            "use strict";
            e.exports = s.p + "464a6c12601ada4d81ff.png"
        },
        227809: function(e, t, s) {
            "use strict";
            e.exports = s.p + "9791fbd5137dfa9b14c1.png"
        },
        352074: function(e, t, s) {
            "use strict";
            e.exports = s.p + "1e5b144b43dfe2ae40b5.png"
        },
        585590: function(e, t, s) {
            "use strict";
            e.exports = s.p + "001a1b6fb841a191c966.png"
        },
        215429: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("669491"),
                r = s("819855"),
                o = s("77078"),
                l = s("841098"),
                i = e => {
                    let {
                        className: t
                    } = e, s = (0, l.default)(), i = (0, o.useToken)(n.default.colors.BACKGROUND_ACCENT).hex();
                    return (0, a.jsx)("svg", {
                        width: "700",
                        height: "120",
                        viewBox: "0 0 700 120",
                        className: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            fill: (0, r.isThemeDark)(s) ? i : "white",
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
                    return G
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("151426"),
                r = s("819855"),
                o = s("77078"),
                l = s("997289"),
                i = s("841098"),
                u = s("812204"),
                d = s("685665"),
                _ = s("10641"),
                c = s("649844"),
                E = s("697218"),
                N = s("181114"),
                f = s("599110"),
                m = s("560528"),
                A = s("701909"),
                O = s("719923"),
                T = s("896630"),
                p = s("837797"),
                C = s("154889"),
                R = s("917247"),
                D = s("400307"),
                I = s("702542"),
                M = s("646718"),
                g = s("49111"),
                h = s("782340"),
                L = s("454275"),
                S = s("83064"),
                P = s("438313"),
                b = s("227809"),
                x = s("352074"),
                U = s("585590"),
                v = s("121432");
            let y = "2023_q4_nitro_drop",
                H = () => {
                    let e = E.default.getCurrentUser();
                    if ((0, O.isPremiumExactly)(e, M.PremiumTypes.TIER_2) || (0, _.isDismissibleContentDismissed)(n.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL)) return !1;
                    let {
                        enabled: t
                    } = T.Q4DropExperiment.getCurrentConfig({
                        location: "isEligibleForQ4DropAnnouncementModal"
                    });
                    return t
                };

            function G(e) {
                let {
                    renderModalProps: t
                } = e, {
                    onClose: s
                } = t, _ = (0, i.default)(), E = (0, r.isThemeDark)(_) ? "dark" : "light", T = (0, m.supportsHEVCAlpha)() ? "-hevc.mov" : ".webm", H = "https://cdn.discordapp.com/assets/q4-2023-drop/announcement-modal-".concat(E, "-transparent").concat(T), {
                    location: G
                } = (0, l.useAnalyticsContext)(), {
                    analyticsLocations: j
                } = (0, d.default)(u.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), k = (0, R.usePremiumTrialOffer)(), B = null == k ? void 0 : k.subscription_trial, w = (0, C.usePremiumDiscountOffer)(), Q = (0, O.formatTrialCtaIntervalDuration)({
                    intervalType: null == B ? void 0 : B.interval,
                    intervalCount: null == B ? void 0 : B.interval_count
                }), V = (0, p.useResponseOnUserState)({
                    onCustomCriteria: () => {
                        if ((null == B ? void 0 : B.id) === M.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID) return h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_TRIAL_ELIGIBLE
                    },
                    defaultResponse: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onTier0TrialOffer: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onTier2TrialOffer: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_NON_TRIAL_ELIGIBLE,
                    onNonTier2Subscriber: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SUBHEADER_UPGRADE_ELIGIBLE
                }), F = (0, p.useResponseOnUserState)({
                    defaultResponse: () => null,
                    onCustomCriteria: () => {
                        if ((null == B ? void 0 : B.id) === M.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID) return () => (0, a.jsx)(o.Anchor, {
                            className: L.termsApplyAnchor,
                            href: A.default.getArticleURL(g.HelpdeskArticles.Q4_DROP),
                            children: (0, a.jsx)(o.Heading, {
                                variant: "heading-md/normal",
                                className: L.termsApplyBodyText,
                                children: h.default.Messages.BOGO_TERMS_APPLY
                            })
                        })
                    }
                }), Y = (0, p.useResponseOnUserState)({
                    defaultResponse: h.default.Messages.BILLING_SUBSCRIBE_TO_PLAN,
                    onDiscountOffer: h.default.Messages.PREMIUM_DISCOUNT_CTA.format({
                        percent: null == w ? void 0 : w.discount.amount
                    }),
                    onTier0TrialOffer: Q,
                    onTier2TrialOffer: Q,
                    onNonTier2Subscriber: h.default.Messages.INTERACTION_PREMIUM_UPSELL_CTA
                }), q = (0, p.useResponseOnUserState)({
                    defaultResponse: "get_nitro_button",
                    onNonTier2Subscriber: "upgrade_plan_button",
                    onDiscountOffer: "discount_offer_button",
                    onTier0TrialOffer: "trial_offer_button",
                    onTier2TrialOffer: "trial_offer_button"
                }), W = (0, p.useResponseOnUserState)({
                    defaultResponse: () => (0, c.default)({
                        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocations: j,
                        analyticsObject: {
                            ...G,
                            object: g.AnalyticsObjects.BUTTON_CTA,
                            objectType: g.AnalyticsObjectTypes.TIER_2
                        },
                        onClose: e => {
                            e && s()
                        }
                    })
                }), K = (0, r.isThemeDark)(_) ? D.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : D.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL;
                return (0, a.jsx)(I.default, {
                    renderModalProps: t,
                    video: {
                        type: "video",
                        src: H,
                        poster: "https://cdn.discordapp.com/assets/q4-2023-drop/announcement-modal-".concat(E, ".png")
                    },
                    videoClassName: L.video,
                    modalDismissibleContent: n.DismissibleContent.Q4_2023_NITRO_DROP_ANNOUNCEMENT_MODAL,
                    modalTopExtra: () => null != B ? (0, a.jsx)(D.PremiumPillWithSparkles, {
                        text: h.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT,
                        className: L.trialPill,
                        colorOptions: K
                    }) : null,
                    header: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_HEADER,
                    headerClassName: L.header,
                    subHeader: V,
                    subHeaderExtra: F,
                    featureCards: [{
                        header: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_HEADER,
                        subHeader: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_EARLY_ACCESS_DESCRIPTION,
                        imageSrc: P
                    }, {
                        header: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_HEADER,
                        subHeader: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_SPECIAL_PRICING_DESCRIPTION,
                        imageSrc: b
                    }, {
                        header: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_HEADER,
                        subHeader: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_CUSTOM_APP_ICON_DESCRIPTION,
                        imageSrc: S
                    }, {
                        header: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_HEADER,
                        subHeader: h.default.Messages.Q4_DROP_ANNOUNCEMENT_MODAL_UNLIMITED_SUPER_REACTIONS_DESCRIPTION,
                        imageSrc: (0, r.isThemeDark)(_) ? x : U
                    }],
                    changeLogId: y,
                    button: () => {
                        let e = Date.now();
                        return (0, a.jsxs)(N.default, {
                            className: L.buttonWide,
                            innerClassName: L.innerButton,
                            color: o.Button.Colors.GREEN,
                            size: o.Button.Sizes.SMALL,
                            onClick: () => {
                                f.default.track(g.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: y,
                                    cta_type: q,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: "q4_drop_payment_modal"
                                }), W()
                            },
                            children: [(0, a.jsx)("img", {
                                alt: "",
                                className: L.nitroIconSubHeader,
                                src: v
                            }), Y]
                        })
                    }
                })
            }
        },
        702542: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var a = s("37983"),
                n = s("884691"),
                r = s("414456"),
                o = s.n(r),
                l = s("446674"),
                i = s("77078"),
                u = s("206230"),
                d = s("10641"),
                _ = s("933629"),
                c = s("560176"),
                E = s("633667"),
                N = s("476765"),
                f = s("956089"),
                m = s("58608"),
                A = s("599110"),
                O = s("215429"),
                T = s("49111"),
                p = s("994428"),
                C = s("236998");
            let R = e => {
                    let {
                        tagText: t,
                        className: s
                    } = e;
                    return (0, a.jsx)(f.TextBadge, {
                        className: o(C.tag, s),
                        text: t
                    })
                },
                D = e => {
                    let {
                        header: t,
                        subHeader: s,
                        imageSrc: n,
                        tagText: r,
                        wideStyle: l
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: o(C.featureCard, {
                            [C.wideStyle]: l
                        }),
                        children: [null != r ? (0, a.jsx)(R, {
                            tagText: r,
                            className: C.featureCardTag
                        }) : null, (0, a.jsx)("img", {
                            alt: "",
                            className: o(C.featureCardImg, {
                                [C.wideStyle]: l
                            }),
                            src: n
                        }), (0, a.jsxs)("div", {
                            className: C.featureCardTextGroup,
                            children: [(0, a.jsx)(i.Heading, {
                                variant: "heading-lg/extrabold",
                                className: C.featureCardTextHeader,
                                children: t
                            }), (0, a.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: s
                            })]
                        })]
                    })
                };

            function I(e) {
                let {
                    className: t,
                    renderModalProps: s,
                    video: r,
                    videoClassName: f,
                    modalDismissibleContent: R,
                    modalTopExtra: I,
                    header: M,
                    headerClassName: g,
                    subHeader: h,
                    subHeaderExtra: L,
                    featureCards: S,
                    changeLogId: P,
                    button: b
                } = e, {
                    onClose: x,
                    transitionState: U
                } = s, v = (0, N.useUID)(), y = S.length % 2 == 0, H = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion), [G, j] = n.useState(Date.now()), [k, B] = n.useState(0), [w, Q] = n.useState(0), [V, F] = n.useState(!1), [Y, q] = n.useState(!0), W = n.useRef(G), K = n.useRef(k), z = n.useRef(w), X = n.useRef(V), Z = n.useRef(Y);

                function J() {
                    let e = Date.now(),
                        t = e - W.current,
                        s = K.current,
                        a = z.current;
                    return X.current && (B(s += t), !Z.current && Q(a += t)), j(e), [s, a]
                }
                return n.useEffect(() => {
                    W.current = G, K.current = k, z.current = w, X.current = V, Z.current = Y
                }, [G, k, w, V, Y]), n.useEffect(() => () => {
                    let [e, t] = J();
                    A.default.track(T.AnalyticEvents.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: P,
                        seconds_played: Math.round(e / 1e3)
                    }), A.default.track(T.AnalyticEvents.CHANGE_LOG_VIDEO_UNMUTE, {
                        change_log_id: P,
                        seconds_unmuted: Math.round(t / 1e3)
                    })
                }, [P]), n.useEffect(() => {
                    (0, d.requestMarkDismissibleContentAsShown)(R);
                    let e = Date.now();
                    return A.default.track(T.AnalyticEvents.CHANGE_LOG_OPENED, {
                        change_log_id: P
                    }), () => {
                        A.default.track(T.AnalyticEvents.CHANGE_LOG_CLOSED, {
                            change_log_id: P,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        }), (0, d.markDismissibleContentAsDismissed)(R, {
                            dismissAction: p.ContentDismissActionType.DISMISS
                        })
                    }
                }, [R, P]), (0, a.jsxs)(i.ModalRoot, {
                    className: o(C.root, t),
                    transitionState: U,
                    "aria-labelledby": v,
                    children: [(0, a.jsx)(i.ModalCloseButton, {
                        className: C.closeButton,
                        onClick: x
                    }), (0, a.jsx)(O.default, {
                        className: C.splash
                    }), null == I ? void 0 : I(), (0, a.jsxs)(i.ModalContent, {
                        className: C.content,
                        children: [(0, a.jsx)(i.Heading, {
                            variant: "display-md",
                            className: o(C.headerText, g),
                            children: M
                        }), "video" === r.type ? (0, a.jsx)(m.default, {
                            className: o(C.video, f),
                            autoPlay: !H,
                            loop: !0,
                            muted: !0,
                            controls: !0,
                            controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                            src: r.src,
                            poster: r.poster,
                            onPlay: e => {
                                A.default.track(T.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: P
                                }), j(Date.now()), F(!0), q(e.currentTarget.muted)
                            },
                            onEnded: e => {
                                J(), q(e.currentTarget.muted), F(!1)
                            },
                            onVolumeChange: e => {
                                J(), q(e.currentTarget.muted)
                            },
                            onPause: e => {
                                J(), q(e.currentTarget.muted), F(!1)
                            },
                            disablePictureInPicture: !0
                        }) : (0, a.jsx)(c.EmbedVideo, {
                            className: o(C.video, f),
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
                                A.default.track(T.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: P
                                })
                            }
                        }), (0, a.jsx)(i.Heading, {
                            variant: "heading-lg/extrabold",
                            className: C.bodyText,
                            children: h
                        }), null == L ? void 0 : L(), (0, a.jsx)("div", {
                            className: o(C.featureCardGroup, {
                                [C.wideStyle]: y
                            }),
                            children: S.map((e, t) => (0, a.jsx)(D, {
                                ...e,
                                wideStyle: y
                            }, "".concat(e.header, "_").concat(t)))
                        }), b()]
                    })]
                })
            }
        }
    }
]);