(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["8751"], {
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
        327467: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                startMediaViewerSession: function() {
                    return d
                },
                endMediaViewerSession: function() {
                    return o
                },
                incrementSelectedItemChanges: function() {
                    return c
                }
            });
            var s = a("308503"),
                n = a("599110"),
                i = a("49111");
            let l = {
                    guildId: void 0,
                    channelId: void 0,
                    channelType: void 0,
                    viewerSwipes: 0,
                    thumbnailSwipes: 0,
                    selectedItemChanges: 0,
                    numMediaItems: 0
                },
                r = (0, s.default)(() => l);

            function d(e, t, a, s) {
                r.setState({
                    ...l,
                    guildId: e,
                    channelId: t,
                    channelType: a,
                    numMediaItems: s
                })
            }

            function o() {
                let e = r.getState();
                n.default.track(i.AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED, {
                    guild_id: e.guildId,
                    channel_id: e.channelId,
                    channel_type: e.channelType,
                    number_viewer_swipes: e.viewerSwipes,
                    number_thumbnail_swipes: e.thumbnailSwipes,
                    number_selected_item_changes: e.selectedItemChanges,
                    number_media_items: e.numMediaItems
                }), r.setState({
                    ...l
                })
            }

            function c() {
                r.setState(e => ({
                    selectedItemChanges: e.selectedItemChanges + 1
                }))
            }
        },
        981125: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("446674"),
                i = a("151426"),
                l = a("77078"),
                r = a("997289"),
                d = a("812204"),
                o = a("685665"),
                c = a("649844"),
                u = a("915639"),
                _ = a("697218"),
                m = a("181114"),
                h = a("599110"),
                E = a("701909"),
                N = a("719923"),
                g = a("702542"),
                f = a("646718"),
                C = a("49111"),
                A = a("782340"),
                O = a("444552"),
                p = a("169903"),
                M = a("389291"),
                b = a("676084"),
                D = a("121432");
            let T = "2023_summer_bogo",
                x = "DnkvLW5052Y";

            function S(e) {
                let {
                    renderModalProps: t
                } = e, {
                    onClose: a
                } = t, S = (0, n.useStateFromStores)([u.default], () => u.default.locale), v = S.split("-")[0], y = "en" === v ? "0" : "1", I = "zh-CN" === S ? "zh-Hans" : "zh-TW" === S ? "zh-Hant" : v, R = {
                    url: "".concat((0, C.YOUTUBE_EMBED_URL)(x), "?vq=large&rel=0&controls=0&showinfo=0&cc_load_policy=").concat(y, "&cc_lang_pref=").concat(I),
                    width: 498,
                    height: 280
                }, {
                    location: w
                } = (0, r.useAnalyticsContext)(), {
                    analyticsLocations: L
                } = (0, o.default)(d.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), j = (0, n.useStateFromStores)([_.default], () => _.default.getCurrentUser()), B = (0, N.isPremiumExactly)(j, f.PremiumTypes.TIER_2), G = (0, N.isPremium)(j) && !B;
                return (0, s.jsx)(g.default, {
                    renderModalProps: t,
                    video: {
                        type: "embed",
                        embed: R,
                        thumbnail: {
                            url: "https://i.ytimg.com/vi/".concat(x, "/maxresdefault.jpg"),
                            width: 498,
                            height: 280
                        },
                        href: "https://youtu.be/".concat(x)
                    },
                    modalDismissibleContent: i.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
                    header: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_HEADER,
                    subHeader: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SUBHEADER,
                    subHeaderExtra: () => (0, s.jsx)(l.Anchor, {
                        className: O.termsApplyAnchor,
                        href: E.default.getArticleURL(C.HelpdeskArticles.SUMMER_2023_BOGO),
                        children: (0, s.jsx)(l.Heading, {
                            variant: "heading-md/normal",
                            className: O.termsApplyBodyText,
                            children: A.default.Messages.BOGO_TERMS_APPLY
                        })
                    }),
                    featureCards: [{
                        header: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_HEADER,
                        subHeader: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_BODY_FORMATTED.format({
                            helpCenterLink: E.default.getArticleURL(C.HelpdeskArticles.REMIXING)
                        }),
                        imageSrc: p,
                        tagText: A.default.Messages.EARLY_ACCESS
                    }, {
                        header: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_HEADER,
                        subHeader: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_THEMES_CARD_BODY,
                        imageSrc: b
                    }, {
                        header: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_HEADER,
                        subHeader: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SOUNDBOARD_CARD_BODY_FORMATTED,
                        imageSrc: M
                    }],
                    changeLogId: T,
                    button: () => {
                        let e = G ? "upgrade_plan_button" : "get_nitro_button",
                            t = Date.now();
                        return (0, s.jsxs)(m.default, {
                            className: O.buttonWide,
                            innerClassName: O.innerButton,
                            color: l.Button.Colors.GREEN,
                            size: l.Button.Sizes.SMALL,
                            onClick: () => {
                                h.default.track(C.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: T,
                                    cta_type: e,
                                    seconds_open: Math.round((Date.now() - t) / 1e3),
                                    target: "bogo_payment_model"
                                }), (0, c.default)({
                                    subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
                                    analyticsLocations: L,
                                    analyticsObject: {
                                        ...w,
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
                                className: O.nitroIconSubHeader,
                                src: D
                            }), A.default.Messages.BOGO_CLAIM_OFFER]
                        })
                    }
                })
            }
        },
        215429: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("669491"),
                i = a("819855"),
                l = a("77078"),
                r = a("841098"),
                d = e => {
                    let {
                        className: t
                    } = e, a = (0, r.default)(), d = (0, l.useToken)(n.default.colors.BACKGROUND_ACCENT).hex();
                    return (0, s.jsx)("svg", {
                        width: "700",
                        height: "120",
                        viewBox: "0 0 700 120",
                        className: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            fill: (0, i.isThemeDark)(a) ? d : "white",
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
                    return M
                }
            });
            var s = a("37983"),
                n = a("884691"),
                i = a("414456"),
                l = a.n(i),
                r = a("446674"),
                d = a("77078"),
                o = a("206230"),
                c = a("10641"),
                u = a("933629"),
                _ = a("560176"),
                m = a("476765"),
                h = a("956089"),
                E = a("58608"),
                N = a("599110"),
                g = a("215429"),
                f = a("49111"),
                C = a("994428"),
                A = a("236998");
            let O = e => {
                    let {
                        tagText: t,
                        className: a
                    } = e;
                    return (0, s.jsx)(h.TextBadge, {
                        className: l(A.tag, a),
                        text: t
                    })
                },
                p = e => {
                    let {
                        header: t,
                        subHeader: a,
                        imageSrc: n,
                        tagText: i,
                        wideStyle: r
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: l(A.featureCard, {
                            [A.wideStyle]: r
                        }),
                        children: [null != i ? (0, s.jsx)(O, {
                            tagText: i,
                            className: A.featureCardTag
                        }) : null, (0, s.jsx)("img", {
                            alt: "",
                            className: l(A.featureCardImg, {
                                [A.wideStyle]: r
                            }),
                            src: n
                        }), (0, s.jsxs)("div", {
                            className: A.featureCardTextGroup,
                            children: [(0, s.jsx)(d.Heading, {
                                variant: "heading-lg/extrabold",
                                className: A.featureCardTextHeader,
                                children: t
                            }), (0, s.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: a
                            })]
                        })]
                    })
                };

            function M(e) {
                let {
                    className: t,
                    renderModalProps: a,
                    video: i,
                    videoClassName: h,
                    modalDismissibleContent: O,
                    modalTopExtra: M,
                    header: b,
                    headerClassName: D,
                    subHeader: T,
                    subHeaderExtra: x,
                    featureCards: S,
                    changeLogId: v,
                    button: y
                } = e, {
                    onClose: I,
                    transitionState: R
                } = a, w = (0, m.useUID)(), L = S.length % 2 == 0, j = (0, r.useStateFromStores)([o.default], () => o.default.useReducedMotion);
                return n.useEffect(() => {
                    (0, c.requestMarkDismissibleContentAsShown)(O);
                    let e = Date.now();
                    return N.default.track(f.AnalyticEvents.CHANGE_LOG_OPENED, {
                        change_log_id: v
                    }), () => {
                        N.default.track(f.AnalyticEvents.CHANGE_LOG_CLOSED, {
                            change_log_id: v,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        }), (0, c.markDismissibleContentAsDismissed)(O, {
                            dismissAction: C.ContentDismissActionType.DISMISS
                        })
                    }
                }, [O, v]), (0, s.jsxs)(d.ModalRoot, {
                    className: l(A.root, t),
                    transitionState: R,
                    "aria-labelledby": w,
                    children: [(0, s.jsx)(d.ModalCloseButton, {
                        className: A.closeButton,
                        onClick: I
                    }), (0, s.jsx)(g.default, {
                        className: A.splash
                    }), null == M ? void 0 : M(), (0, s.jsxs)(d.ModalContent, {
                        className: A.content,
                        children: [(0, s.jsx)(d.Heading, {
                            variant: "display-md",
                            className: l(A.headerText, D),
                            children: b
                        }), "video" === i.type ? (0, s.jsx)(E.default, {
                            className: l(A.video, h),
                            autoPlay: !j,
                            loop: !0,
                            muted: !0,
                            controls: !0,
                            src: i.src,
                            onPlay: () => {
                                N.default.track(f.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: v
                                })
                            }
                        }) : (0, s.jsx)(_.EmbedVideo, {
                            className: l(A.video, h),
                            allowFullScreen: !1,
                            href: i.href,
                            thumbnail: i.thumbnail,
                            video: i.embed,
                            maxWidth: i.embed.width,
                            maxHeight: i.embed.height,
                            renderVideoComponent: u.renderVideoComponent,
                            renderImageComponent: u.renderImageComponent,
                            renderLinkComponent: u.renderMaskedLinkComponent,
                            onPlay: () => {
                                N.default.track(f.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: v
                                })
                            }
                        }), (0, s.jsx)(d.Heading, {
                            variant: "heading-lg/extrabold",
                            className: A.bodyText,
                            children: T
                        }), null == x ? void 0 : x(), (0, s.jsx)("div", {
                            className: l(A.featureCardGroup, {
                                [A.wideStyle]: L
                            }),
                            children: S.map((e, t) => (0, s.jsx)(p, {
                                ...e,
                                wideStyle: L
                            }, "".concat(e.header, "_").concat(t)))
                        }), y()]
                    })]
                })
            }
        }
    }
]);