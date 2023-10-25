(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48732"], {
        121432: function(e, t, a) {
            "use strict";
            e.exports = a.p + "21351b92881882ca8597.svg"
        },
        169903: function(e, t, a) {
            "use strict";
            e.exports = a.p + "867436a0aaf9edda9601.svg"
        },
        389291: function(e, t, a) {
            "use strict";
            e.exports = a.p + "bb95de121233bf246961.svg"
        },
        676084: function(e, t, a) {
            "use strict";
            e.exports = a.p + "2b2bc7e0b5e6dc0c2182.svg"
        },
        981125: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return R
                }
            });
            var s = a("920040");
            a("773670");
            var n = a("498225"),
                r = a("975162"),
                l = a("77078"),
                i = a("997289"),
                o = a("812204"),
                d = a("685665"),
                c = a("649844"),
                u = a("915639"),
                _ = a("697218"),
                N = a("181114"),
                m = a("599110"),
                E = a("701909"),
                h = a("719923"),
                A = a("702542"),
                g = a("646718"),
                C = a("49111"),
                O = a("782340"),
                f = a("901880"),
                M = a("169903"),
                p = a("389291"),
                D = a("676084"),
                x = a("121432");
            let T = "2023_summer_bogo",
                b = "DnkvLW5052Y";

            function R(e) {
                let {
                    renderModalProps: t
                } = e, {
                    onClose: a
                } = t, R = (0, n.useStateFromStores)([u.default], () => u.default.locale), v = R.split("-")[0], S = "en" === v ? "0" : "1", y = "zh-CN" === R ? "zh-Hans" : "zh-TW" === R ? "zh-Hant" : v, B = {
                    url: "".concat((0, C.YOUTUBE_EMBED_URL)(b), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat(S, "&cc_lang_pref=").concat(y),
                    width: 498,
                    height: 280
                }, {
                    location: L
                } = (0, i.useAnalyticsContext)(), {
                    analyticsLocations: j
                } = (0, d.default)(o.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), H = (0, n.useStateFromStores)([_.default], () => _.default.getCurrentUser()), G = (0, h.isPremiumExactly)(H, g.PremiumTypes.TIER_2), U = (0, h.isPremium)(H) && !G;
                return (0, s.jsx)(A.default, {
                    renderModalProps: t,
                    videoHref: "https://youtu.be/".concat(b),
                    video: B,
                    videoThumbnail: {
                        url: "https://i.ytimg.com/vi/".concat(b, "/maxresdefault.jpg"),
                        width: 498,
                        height: 280
                    },
                    modalDismissibleContent: r.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
                    header: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_HEADER,
                    subHeader: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SUBHEADER,
                    subHeaderExtra: () => (0, s.jsx)(l.Anchor, {
                        className: f.termsApplyAnchor,
                        href: E.default.getArticleURL(C.HelpdeskArticles.SUMMER_2023_BOGO),
                        children: (0, s.jsx)(l.Heading, {
                            variant: "heading-md/normal",
                            className: f.termsApplyBodyText,
                            children: O.default.Messages.BOGO_TERMS_APPLY
                        })
                    }),
                    featureCards: [{
                        header: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_HEADER,
                        subHeader: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_BODY_FORMATTED.format({
                            helpCenterLink: E.default.getArticleURL(C.HelpdeskArticles.REMIXING)
                        }),
                        imageSrc: M,
                        tagText: O.default.Messages.EARLY_ACCESS
                    }, {
                        header: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_HEADER,
                        subHeader: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_BODY,
                        imageSrc: D
                    }, {
                        header: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_HEADER,
                        subHeader: O.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_BODY_FORMATTED,
                        imageSrc: p
                    }],
                    changeLogId: T,
                    button: () => {
                        let e = U ? "upgrade_plan_button" : "get_nitro_button",
                            t = Date.now();
                        return (0, s.jsxs)(N.default, {
                            className: f.buttonWide,
                            innerClassName: f.innerButton,
                            color: l.Button.Colors.GREEN,
                            size: l.Button.Sizes.SMALL,
                            onClick: () => {
                                m.default.track(C.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: T,
                                    cta_type: e,
                                    seconds_open: Math.round((Date.now() - t) / 1e3),
                                    target: "bogo_payment_model"
                                }), (0, c.default)({
                                    subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
                                    analyticsLocations: j,
                                    analyticsObject: {
                                        ...L,
                                        object: C.AnalyticsObjects.BUTTON_CTA,
                                        objectType: C.AnalyticsObjectTypes.TIER_2
                                    },
                                    onClose: e => {
                                        e && a()
                                    }
                                })
                            },
                            children: [(0, s.jsx)("img", {
                                alt: "",
                                className: f.nitroIconSubHeader,
                                src: x
                            }), O.default.Messages.BOGO_CLAIM_OFFER]
                        })
                    }
                })
            }
        },
        215429: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var s = a("920040");
            a("773670");
            var n = a("912557"),
                r = a("819855"),
                l = a("77078"),
                i = a("841098"),
                o = e => {
                    let {
                        className: t
                    } = e, a = (0, i.default)(), o = (0, l.useToken)(n.default.colors.BACKGROUND_ACCENT).hex();
                    return (0, s.jsx)("svg", {
                        width: "700",
                        height: "120",
                        viewBox: "0 0 700 120",
                        className: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            fill: (0, r.isThemeDark)(a) ? o : "white",
                            opacity: "1",
                            d: "M351 39.047C185.4 -31.2102 48 9.77319 0 39.047V583.068C0 587.486 3.58174 591.068 8.00002 591.068H692C696.418 591.068 700 587.486 700 583.068V39.047C653.333 68.3208 516.6 109.304 351 39.047Z"
                        })
                    })
                }
        },
        702542: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return O
                }
            });
            var s = a("920040"),
                n = a("773670"),
                r = a("575482"),
                l = a.n(r),
                i = a("77078"),
                o = a("10641"),
                d = a("933629"),
                c = a("560176"),
                u = a("476765"),
                _ = a("956089"),
                N = a("599110"),
                m = a("215429"),
                E = a("49111"),
                h = a("994428"),
                A = a("792076");
            let g = e => {
                    let {
                        tagText: t,
                        className: a
                    } = e;
                    return (0, s.jsx)(_.TextBadge, {
                        className: l(A.tag, a),
                        text: t
                    })
                },
                C = e => {
                    let {
                        header: t,
                        subHeader: a,
                        imageSrc: n,
                        tagText: r,
                        wideStyle: o
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: l(A.featureCard, {
                            [A.wideStyle]: o
                        }),
                        children: [null != r ? (0, s.jsx)(g, {
                            tagText: r,
                            className: A.featureCardTag
                        }) : null, (0, s.jsx)("img", {
                            alt: "",
                            className: l(A.featureCardImg, {
                                [A.wideStyle]: o
                            }),
                            src: n
                        }), (0, s.jsxs)("div", {
                            className: A.featureCardTextGroup,
                            children: [(0, s.jsx)(i.Heading, {
                                variant: "heading-lg/extrabold",
                                className: A.featureCardTextHeader,
                                children: t
                            }), (0, s.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: a
                            })]
                        })]
                    })
                };

            function O(e) {
                let {
                    className: t,
                    renderModalProps: a,
                    videoHref: r,
                    video: _,
                    videoThumbnail: g,
                    modalDismissibleContent: O,
                    modalTopExtra: f,
                    header: M,
                    subHeader: p,
                    subHeaderExtra: D,
                    featureCards: x,
                    changeLogId: T,
                    button: b
                } = e, {
                    onClose: R,
                    transitionState: v
                } = a, S = (0, u.useUID)(), y = x.length % 2 == 0;
                return n.useEffect(() => {
                    (0, o.requestMarkDismissibleContentAsShown)(O);
                    let e = Date.now();
                    return N.default.track(E.AnalyticEvents.CHANGE_LOG_OPENED, {
                        change_log_id: T
                    }), () => {
                        N.default.track(E.AnalyticEvents.CHANGE_LOG_CLOSED, {
                            change_log_id: T,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        }), (0, o.markDismissibleContentAsDismissed)(O, {
                            dismissAction: h.ContentDismissActionType.DISMISS
                        })
                    }
                }, [O, T]), (0, s.jsxs)(i.ModalRoot, {
                    className: l(A.root, t),
                    transitionState: v,
                    "aria-labelledby": S,
                    children: [(0, s.jsx)(i.ModalCloseButton, {
                        className: A.closeButton,
                        onClick: R
                    }), (0, s.jsx)(m.default, {
                        className: A.splash
                    }), null == f ? void 0 : f(), (0, s.jsxs)(i.ModalContent, {
                        className: A.content,
                        children: [(0, s.jsx)(i.Heading, {
                            variant: "display-md",
                            className: A.headerText,
                            children: M
                        }), (0, s.jsx)(c.EmbedVideo, {
                            className: A.video,
                            allowFullScreen: !1,
                            href: r,
                            thumbnail: g,
                            video: _,
                            maxWidth: _.width,
                            maxHeight: _.height,
                            renderVideoComponent: d.renderVideoComponent,
                            renderImageComponent: d.renderImageComponent,
                            renderLinkComponent: d.renderMaskedLinkComponent,
                            onPlay: () => {
                                N.default.track(E.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: T
                                })
                            }
                        }), (0, s.jsx)(i.Heading, {
                            variant: "heading-lg/extrabold",
                            className: A.bodyText,
                            children: p
                        }), null == D ? void 0 : D(), (0, s.jsx)("div", {
                            className: l(A.featureCardGroup, {
                                [A.wideStyle]: y
                            }),
                            children: x.map((e, t) => (0, s.jsx)(C, {
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