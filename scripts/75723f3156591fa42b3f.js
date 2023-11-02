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
                r = a("49111");
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

            function d(e, t, a, s) {
                l.setState({
                    ...i,
                    guildId: e,
                    channelId: t,
                    channelType: a,
                    numMediaItems: s
                })
            }

            function o() {
                let e = l.getState();
                n.default.track(r.AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED, {
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

            function c() {
                l.setState(e => ({
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
                r = a("151426"),
                i = a("77078"),
                l = a("997289"),
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
                p = a("444552"),
                O = a("169903"),
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
                } = (0, l.useAnalyticsContext)(), {
                    analyticsLocations: L
                } = (0, o.default)(d.default.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), B = (0, n.useStateFromStores)([_.default], () => _.default.getCurrentUser()), j = (0, N.isPremiumExactly)(B, f.PremiumTypes.TIER_2), G = (0, N.isPremium)(B) && !j;
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
                    modalDismissibleContent: r.DismissibleContent.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL,
                    header: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_HEADER,
                    subHeader: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_SUBHEADER,
                    subHeaderExtra: () => (0, s.jsx)(i.Anchor, {
                        className: p.termsApplyAnchor,
                        href: E.default.getArticleURL(C.HelpdeskArticles.SUMMER_2023_BOGO),
                        children: (0, s.jsx)(i.Heading, {
                            variant: "heading-md/normal",
                            className: p.termsApplyBodyText,
                            children: A.default.Messages.BOGO_TERMS_APPLY
                        })
                    }),
                    featureCards: [{
                        header: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_HEADER,
                        subHeader: A.default.Messages.BOGO_ANNOUNCEMENT_MODAL_REMIXING_CARD_BODY_FORMATTED.format({
                            helpCenterLink: E.default.getArticleURL(C.HelpdeskArticles.REMIXING)
                        }),
                        imageSrc: O,
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
                            className: p.buttonWide,
                            innerClassName: p.innerButton,
                            color: i.Button.Colors.GREEN,
                            size: i.Button.Sizes.SMALL,
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
                                className: p.nitroIconSubHeader,
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
                r = a("819855"),
                i = a("77078"),
                l = a("841098"),
                d = e => {
                    let {
                        className: t
                    } = e, a = (0, l.default)(), d = (0, i.useToken)(n.default.colors.BACKGROUND_ACCENT).hex();
                    return (0, s.jsx)("svg", {
                        width: "700",
                        height: "120",
                        viewBox: "0 0 700 120",
                        className: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            fill: (0, r.isThemeDark)(a) ? d : "white",
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
                    return b
                }
            });
            var s = a("37983"),
                n = a("884691"),
                r = a("414456"),
                i = a.n(r),
                l = a("446674"),
                d = a("77078"),
                o = a("206230"),
                c = a("10641"),
                u = a("933629"),
                _ = a("560176"),
                m = a("633667"),
                h = a("476765"),
                E = a("956089"),
                N = a("58608"),
                g = a("599110"),
                f = a("215429"),
                C = a("49111"),
                A = a("994428"),
                p = a("236998");
            let O = e => {
                    let {
                        tagText: t,
                        className: a
                    } = e;
                    return (0, s.jsx)(E.TextBadge, {
                        className: i(p.tag, a),
                        text: t
                    })
                },
                M = e => {
                    let {
                        header: t,
                        subHeader: a,
                        imageSrc: n,
                        tagText: r,
                        wideStyle: l
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: i(p.featureCard, {
                            [p.wideStyle]: l
                        }),
                        children: [null != r ? (0, s.jsx)(O, {
                            tagText: r,
                            className: p.featureCardTag
                        }) : null, (0, s.jsx)("img", {
                            alt: "",
                            className: i(p.featureCardImg, {
                                [p.wideStyle]: l
                            }),
                            src: n
                        }), (0, s.jsxs)("div", {
                            className: p.featureCardTextGroup,
                            children: [(0, s.jsx)(d.Heading, {
                                variant: "heading-lg/extrabold",
                                className: p.featureCardTextHeader,
                                children: t
                            }), (0, s.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: a
                            })]
                        })]
                    })
                };

            function b(e) {
                let {
                    className: t,
                    renderModalProps: a,
                    video: r,
                    videoClassName: E,
                    modalDismissibleContent: O,
                    modalTopExtra: b,
                    header: D,
                    headerClassName: T,
                    subHeader: x,
                    subHeaderExtra: S,
                    featureCards: v,
                    changeLogId: y,
                    button: I
                } = e, {
                    onClose: R,
                    transitionState: w
                } = a, L = (0, h.useUID)(), B = v.length % 2 == 0, j = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion);
                return n.useEffect(() => {
                    (0, c.requestMarkDismissibleContentAsShown)(O);
                    let e = Date.now();
                    return g.default.track(C.AnalyticEvents.CHANGE_LOG_OPENED, {
                        change_log_id: y
                    }), () => {
                        g.default.track(C.AnalyticEvents.CHANGE_LOG_CLOSED, {
                            change_log_id: y,
                            seconds_open: Math.round((Date.now() - e) / 1e3)
                        }), (0, c.markDismissibleContentAsDismissed)(O, {
                            dismissAction: A.ContentDismissActionType.DISMISS
                        })
                    }
                }, [O, y]), (0, s.jsxs)(d.ModalRoot, {
                    className: i(p.root, t),
                    transitionState: w,
                    "aria-labelledby": L,
                    children: [(0, s.jsx)(d.ModalCloseButton, {
                        className: p.closeButton,
                        onClick: R
                    }), (0, s.jsx)(f.default, {
                        className: p.splash
                    }), null == b ? void 0 : b(), (0, s.jsxs)(d.ModalContent, {
                        className: p.content,
                        children: [(0, s.jsx)(d.Heading, {
                            variant: "display-md",
                            className: i(p.headerText, T),
                            children: D
                        }), "video" === r.type ? (0, s.jsx)(N.default, {
                            className: i(p.video, E),
                            autoPlay: !j,
                            loop: !0,
                            muted: !0,
                            controls: !0,
                            src: r.src,
                            poster: r.poster,
                            onPlay: () => {
                                g.default.track(C.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: y
                                })
                            }
                        }) : (0, s.jsx)(_.EmbedVideo, {
                            className: i(p.video, E),
                            allowFullScreen: !1,
                            href: r.href,
                            thumbnail: r.thumbnail,
                            video: r.embed,
                            provider: m.SupportedEmbedIFrame.YOUTUBE,
                            maxWidth: r.embed.width,
                            maxHeight: r.embed.height,
                            renderVideoComponent: u.renderVideoComponent,
                            renderImageComponent: u.renderImageComponent,
                            renderLinkComponent: u.renderMaskedLinkComponent,
                            onPlay: () => {
                                g.default.track(C.AnalyticEvents.CHANGE_LOG_VIDEO_INTERACTED, {
                                    change_log_id: y
                                })
                            }
                        }), (0, s.jsx)(d.Heading, {
                            variant: "heading-lg/extrabold",
                            className: p.bodyText,
                            children: x
                        }), null == S ? void 0 : S(), (0, s.jsx)("div", {
                            className: i(p.featureCardGroup, {
                                [p.wideStyle]: B
                            }),
                            children: v.map((e, t) => (0, s.jsx)(M, {
                                ...e,
                                wideStyle: B
                            }, "".concat(e.header, "_").concat(t)))
                        }), I()]
                    })]
                })
            }
        }
    }
]);