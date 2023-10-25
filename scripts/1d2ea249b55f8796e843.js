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
                i = a("77078"),
                l = a("997289"),
                o = a("812204"),
                d = a("685665"),
                c = a("649844"),
                u = a("915639"),
                _ = a("697218"),
                m = a("181114"),
                N = a("599110"),
                E = a("701909"),
                h = a("719923"),
                g = a("347508"),
                A = a("646718"),
                O = a("49111"),
                f = a("782340"),
                C = a("901880"),
                p = a("169903"),
                M = a("389291"),
                x = a("676084"),
                D = a("121432");
            let T = "2023_summer_bogo",
                b = "DnkvLW5052Y";

            function R(e) {
                let {
                    renderModalProps: t
                } = e, {
                    onClose: a
                } = t, R = (0, n.useStateFromStores)([u.default], () => u.default.locale), S = R.split("-")[0], j = "en" === S ? "0" : "1", v = "zh-CN" === R ? "zh-Hans" : "zh-TW" === R ? "zh-Hant" : S, y = {
                    url: "".concat((0, O.YOUTUBE_EMBED_URL)(b), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat(j, "&cc_lang_pref=").concat(v),
                    width: 498,
                    height: 280
                }, {
                    location: L
                } = (0, l.useAnalyticsContext)(), {
                    analyticsLocations: B
                } = (0, d.default)(o.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), H = (0, n.useStateFromStores)([_.default], () => _.default.getCurrentUser()), G = (0, h.isPremiumExactly)(H, A.PremiumTypes.TIER_2), U = (0, h.isPremium)(H) && !G;
                return (0, s.jsx)(g.default, {
                    renderModalProps: t,
                    videoHref: "https://youtu.be/".concat(b),
                    video: y,
                    videoThumbnail: {
                        url: "https://i.ytimg.com/vi/".concat(b, "/maxresdefault.jpg"),
                        width: 498,
                        height: 280
                    },
                    modalDismissibleContent: r.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
                    header: f.default.Messages.BOGO_ANNOUNCEMENT_MODAL_HEADER,
                    subHeader: f.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SUBHEADER,
                    subHeaderExtra: () => (0, s.jsx)(i.Anchor, {
                        className: C.termsApplyAnchor,
                        href: E.default.getArticleURL(O.HelpdeskArticles.SUMMER_2023_BOGO),
                        children: (0, s.jsx)(i.Heading, {
                            variant: "heading-md/normal",
                            className: C.termsApplyBodyText,
                            children: f.default.Messages.BOGO_TERMS_APPLY
                        })
                    }),
                    featureCards: [{
                        header: f.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_HEADER,
                        subHeader: f.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_BODY_FORMATTED.format({
                            helpCenterLink: E.default.getArticleURL(O.HelpdeskArticles.REMIXING)
                        }),
                        imageSrc: p,
                        tagText: f.default.Messages.EARLY_ACCESS
                    }, {
                        header: f.default.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_HEADER,
                        subHeader: f.default.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_BODY,
                        imageSrc: x
                    }, {
                        header: f.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_HEADER,
                        subHeader: f.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_BODY_FORMATTED,
                        imageSrc: M
                    }],
                    changeLogId: T,
                    button: () => {
                        let e = U ? "upgrade_plan_button" : "get_nitro_button",
                            t = Date.now();
                        return (0, s.jsxs)(m.default, {
                            className: C.buttonWide,
                            innerClassName: C.innerButton,
                            color: i.Button.Colors.GREEN,
                            size: i.Button.Sizes.SMALL,
                            onClick: () => {
                                N.default.track(O.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: T,
                                    cta_type: e,
                                    seconds_open: Math.round((Date.now() - t) / 1e3),
                                    target: "bogo_payment_model"
                                }), (0, c.default)({
                                    subscriptionTier: A.PremiumSubscriptionSKUs.TIER_2,
                                    analyticsLocations: B,
                                    analyticsObject: {
                                        ...L,
                                        object: O.AnalyticsObjects.BUTTON_CTA,
                                        objectType: O.AnalyticsObjectTypes.TIER_2
                                    },
                                    onClose: e => {
                                        e && a()
                                    }
                                })
                            },
                            children: [(0, s.jsx)("img", {
                                alt: "",
                                className: C.nitroIconSubHeader,
                                src: D
                            }), f.default.Messages.BOGO_CLAIM_OFFER]
                        })
                    }
                })
            }
        },
        215429: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("920040");
            a("773670");
            var n = a("819855"),
                r = a("841098"),
                i = e => {
                    let {
                        className: t
                    } = e, a = (0, r.default)();
                    return (0, s.jsxs)("svg", {
                        width: "700",
                        height: "613",
                        viewBox: "0 0 700 613",
                        className: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("path", {
                            fill: (0, n.isThemeDark)(a) ? "url(#paint0_linear_127_14184)" : "white",
                            opacity: (0, n.isThemeDark)(a) ? "0.5" : "1",
                            d: "M351 41C185.4 -31.8 48 10.6667 0 41V605C0 609.418 3.58174 613 8.00002 613H692C696.418 613 700 609.418 700 605V41C653.333 71.3333 516.6 113.8 351 41Z"
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsxs)("linearGradient", {
                                id: "paint0_linear_127_14184",
                                x1: "349",
                                y1: "0.803345",
                                x2: "349",
                                y2: "613",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, s.jsx)("stop", {
                                    stopColor: "#606060"
                                }), (0, s.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#313338"
                                })]
                            })
                        })]
                    })
                }
        },
        347508: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var s = a("920040"),
                n = a("773670"),
                r = a("575482"),
                i = a.n(r),
                l = a("77078"),
                o = a("10641"),
                d = a("933629"),
                c = a("560176"),
                u = a("476765"),
                _ = a("956089"),
                m = a("599110"),
                N = a("215429"),
                E = a("49111"),
                h = a("994428"),
                g = a("399171");
            let A = e => {
                    let {
                        tagText: t,
                        className: a
                    } = e;
                    return (0, s.jsx)(_.TextBadge, {
                        className: i(g.tag, a),
                        text: t
                    })
                },
                O = e => {
                    let {
                        header: t,
                        subHeader: a,
                        imageSrc: n,
                        tagText: r,
                        wideStyle: o
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: i(g.featureCard, {
                            [g.wideStyle]: o
                        }),
                        children: [null != r ? (0, s.jsx)(A, {
                            tagText: r,
                            className: g.featureCardTag
                        }) : null, (0, s.jsx)("img", {
                            alt: "",
                            className: i(g.featureCardImg, {
                                [g.wideStyle]: o
                            }),
                            src: n
                        }), (0, s.jsxs)("div", {
                            className: g.featureCardTextGroup,
                            children: [(0, s.jsx)(l.Heading, {
                                variant: "heading-lg/extrabold",
                                className: g.featureCardTextHeader,
                                children: t
                            }), (0, s.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: a
                            })]
                        })]
                    })
                };

            function f(e) {
                let {
                    className: t,
                    renderModalProps: a,
                    videoHref: r,
                    video: _,
                    videoThumbnail: A,
                    modalDismissibleContent: f,
                    header: C,
                    subHeader: p,
                    subHeaderExtra: M,
                    featureCards: x,
                    changeLogId: D,
                    button: T
                } = e, {
                    onClose: b,
                    transitionState: R
                } = a, S = (0, u.useUID)(), j = x.length % 2 == 0;
                return n.useEffect(() => {
                    (0, o.requestMarkDismissibleContentAsShown)(f);
                    let e = Date.now();
                    return m.default.track(E.AnalyticEvents.CHANGE_LOG_OPENED, {
                        change_log_id: D
                    }), () => {
                        m.default.track(E.AnalyticEvents.CHANGE_LOG_CLOSED, {
                            change_log_id: D,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        }), (0, o.markDismissibleContentAsDismissed)(f, {
                            dismissAction: h.ContentDismissActionType.DISMISS
                        })
                    }
                }, [f, D]), (0, s.jsxs)(l.ModalRoot, {
                    className: i(g.root, t),
                    transitionState: R,
                    "aria-labelledby": S,
                    children: [(0, s.jsx)(l.ModalCloseButton, {
                        className: g.closeButton,
                        onClick: b
                    }), (0, s.jsx)(N.default, {
                        className: g.splash
                    }), (0, s.jsxs)(l.ModalContent, {
                        className: g.content,
                        children: [(0, s.jsx)(l.Heading, {
                            variant: "display-md",
                            className: g.headerText,
                            children: C
                        }), (0, s.jsx)(c.EmbedVideo, {
                            className: g.video,
                            allowFullScreen: !1,
                            href: r,
                            thumbnail: A,
                            video: _,
                            maxWidth: _.width,
                            maxHeight: _.height,
                            renderVideoComponent: d.renderVideoComponent,
                            renderImageComponent: d.renderImageComponent,
                            renderLinkComponent: d.renderMaskedLinkComponent,
                            onPlay: () => {
                                m.default.track(E.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: D
                                })
                            }
                        }), (0, s.jsx)(l.Heading, {
                            variant: "heading-lg/extrabold",
                            className: g.bodyText,
                            children: p
                        }), null == M ? void 0 : M(), (0, s.jsx)("div", {
                            className: i(g.featureCardGroup, {
                                [g.wideStyle]: j
                            }),
                            children: x.map((e, t) => (0, s.jsx)(O, {
                                ...e,
                                wideStyle: j
                            }, "".concat(e.header, "_").concat(t)))
                        }), T()]
                    })]
                })
            }
        }
    }
]);