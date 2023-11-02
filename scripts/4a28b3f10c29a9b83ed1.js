(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67569"], {
        812952: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            });
            var r, l, n, a, i = s("37983"),
                o = s("884691"),
                c = s("414456"),
                u = s.n(c),
                d = s("145131"),
                S = s("298754");
            (r = n || (n = {})).PRIMARY = "primary", r.SECONDARY = "secondary", r.WARNING = "warning", r.ERROR = "error", (l = a || (a = {})).SMALL = "small", l.LARGE = "large", l.NONE = "none";
            let E = {
                    [n.PRIMARY]: S.colorPrimary,
                    [n.SECONDARY]: S.colorSecondary,
                    [n.WARNING]: S.colorWarning,
                    [n.ERROR]: S.colorError
                },
                N = {
                    [a.SMALL]: S.small,
                    [a.LARGE]: S.large,
                    [a.NONE]: null
                };
            class m extends o.PureComponent {
                render() {
                    let {
                        icon: e,
                        color: t,
                        children: s,
                        iconSize: r,
                        className: l,
                        iconClassName: n
                    } = this.props;
                    return (0, i.jsxs)(d.default, {
                        className: u(S.note, E[t], l),
                        align: d.default.Align.CENTER,
                        children: [(0, i.jsx)(e, {
                            className: u(S.icon, N[r], n)
                        }), (0, i.jsx)("div", {
                            children: s
                        })]
                    })
                }
            }
            m.Colors = n, m.Sizes = a;
            var p = m
        },
        273619: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return P
                }
            });
            var r = s("37983"),
                l = s("884691"),
                n = s("41092"),
                a = s("414456"),
                i = s.n(a),
                o = s("862337"),
                c = s("77078"),
                u = s("812952"),
                d = s("448993"),
                S = s("736978"),
                E = s("642906"),
                N = s("85336");
            s("153727"), s("650484");
            var m = s("454589"),
                p = s("978679"),
                I = s("745279"),
                C = s("49111"),
                _ = s("782340"),
                f = s("129429");
            let A = new Set([N.Step.SKU_SELECT, N.Step.AWAITING_AUTHENTICATION, N.Step.AWAITING_PURCHASE_TOKEN_AUTH, N.Step.CONFIRM]);

            function P(e) {
                let {
                    steps: t,
                    currentStep: s,
                    body: a,
                    paymentError: P,
                    header: R,
                    footer: T,
                    isGift: h = !1,
                    giftMessage: k = _.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
                    isSeasonalGift: x = !1,
                    hideBreadcrumbs: M = !1,
                    isLoading: g = !1,
                    purchaseError: j,
                    purchaseErrorBlockRef: O,
                    planError: v,
                    onScroll: L,
                    scrollerClassName: D,
                    hasCurrencies: b = !1
                } = e, K = null;
                null != P && null == (0, N.errorToStep)(P) ? K = P : null != j ? K = j : null != v && (K = v);
                let B = null != K ? K.message : "";
                null != K && K instanceof d.BillingError && (K.code === S.ErrorCodes.CARD_DECLINED && b && (B += " ".concat(_.default.Messages.BILLING_ERROR_TRY_ANOTHER)), K.code === S.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (B = _.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), K.code === C.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (B = _.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
                let {
                    stripe: U
                } = (0, E.usePaymentContext)();
                g = g || null == U;
                let W = l.useRef(new o.Timeout);
                l.useEffect(() => {
                    let e = W.current;
                    return null != U || e.isStarted() ? null != U && e.stop() : e.start(1e4, () => {
                        let e = Error("Stripe took too long to load");
                        (0, I.captureBillingException)(e)
                    }), () => {
                        e.stop()
                    }
                }, [U]);
                let y = t.includes(N.Step.PAYMENT_TYPE) ? N.Step.PAYMENT_TYPE : N.Step.ADD_PAYMENT_STEPS;
                return (0, r.jsxs)(n.Elements, {
                    options: C.StripeElementsOptions,
                    stripe: U,
                    children: [R, (0, r.jsxs)("div", {
                        className: i("paymentModalContent", f.content),
                        children: [h && !x && s !== N.Step.CONFIRM ? (0, r.jsx)(u.default, {
                            className: f.paymentNote,
                            iconSize: u.default.Sizes.SMALL,
                            icon: p.default,
                            color: null == k ? u.default.Colors.PRIMARY : u.default.Colors.SECONDARY,
                            children: k
                        }) : null, M ? null : (0, r.jsx)("div", {
                            className: f.breadcrumbsWrapper,
                            children: (0, r.jsx)(m.default, {
                                activeId: N.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(s) ? y : s,
                                breadcrumbs: t.filter(e => !N.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !A.has(e)).map(e => ({
                                    id: e,
                                    label: (0, N.getLabelForStep)(e)
                                }))
                            })
                        }), (0, r.jsxs)("div", {
                            className: f.bodyWrapper,
                            children: [null == K ? null : (0, r.jsx)("div", {
                                className: f.errorBlockWrapper,
                                children: (0, r.jsx)(c.FormErrorBlock, {
                                    ref: O,
                                    children: B
                                })
                            }), g ? (0, r.jsx)(c.Spinner, {
                                className: f.loadingBlock
                            }) : (0, r.jsx)(c.Sequencer, {
                                className: f.sequencer,
                                staticClassName: f.sequencerStatic,
                                animatedNodeClassName: f.sequencerAnimatedNode,
                                fillParent: !0,
                                step: s,
                                steps: t,
                                sideMargin: 20,
                                children: (0, r.jsx)(c.AdvancedScrollerThin, {
                                    onScroll: L,
                                    className: i(f.scroller, D),
                                    children: a
                                })
                            })]
                        })]
                    }), T]
                })
            }
        },
        706189: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                useStickerViewAllStore: function() {
                    return a
                },
                setInspectedStickerPosition: function() {
                    return i
                },
                resetInspectedStickerPosition: function() {
                    return o
                }
            });
            var r = s("308503");
            let l = Object.freeze({
                    inspectedStickerPosition: {
                        rowIndex: -1,
                        columnIndex: -1
                    }
                }),
                n = (0, r.default)(e => l),
                a = n,
                i = (e, t, s) => {
                    n.setState({
                        inspectedStickerPosition: {
                            rowIndex: t,
                            columnIndex: e,
                            source: s
                        }
                    })
                },
                o = () => {
                    i(-1, -1)
                }
        },
        656137: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                StickerPackViewAllModalFooter: function() {
                    return Y
                },
                default: function() {
                    return V
                }
            });
            var r = s("37983"),
                l = s("884691"),
                n = s("414456"),
                a = s.n(n),
                i = s("483366"),
                o = s.n(i),
                c = s("446674"),
                u = s("769846"),
                d = s("77078"),
                S = s("246511"),
                E = s("642906"),
                N = s("85336"),
                m = s("716849"),
                p = s("552917"),
                I = s("273619"),
                C = s("697218"),
                _ = s("181114"),
                f = s("216422"),
                A = s("719923"),
                P = s("159885"),
                R = s("4233"),
                T = s("706189"),
                h = s("256860"),
                k = s("364685"),
                x = s("24373"),
                M = s("77162"),
                g = s("770366"),
                j = s("113270"),
                O = s("49111"),
                v = s("782340"),
                L = s("687133");
            let D = (0, P.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
                b = (0, P.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
                K = (0, P.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
                B = D + 2 * b,
                U = o(T.resetInspectedStickerPosition, 250),
                W = () => {
                    U.cancel()
                },
                y = e => {
                    let {
                        visibleRowIndex: t,
                        columnIndex: s
                    } = e;
                    U.cancel(), (0, T.setInspectedStickerPosition)(s, t, S.InspectedExpressionChangeSource.MOUSE_EVENT)
                },
                F = e => {
                    let {
                        stickerPack: t,
                        width: s,
                        hasHeaderImage: n,
                        isScrolling: i,
                        onInspect: o
                    } = e, c = l.useMemo(() => [(0, x.createStickerPackCategory)(t)], [t]), u = (0, T.useStickerViewAllStore)(e => e.inspectedStickerPosition), {
                        rowCountBySection: d,
                        stickersGrid: S,
                        gutterWidth: E
                    } = (0, h.useStickersGrid)({
                        stickersCategories: c,
                        stickerNodeMargin: K,
                        stickerNodeWidth: B,
                        listWidth: s
                    });
                    return (0, r.jsxs)("div", {
                        className: a(L.container, {
                            [L.containerWithHeader]: n
                        }),
                        children: [(0, r.jsx)(g.default, {
                            className: L.header,
                            stickerPack: t,
                            withDescription: !0
                        }, t.id), (0, r.jsx)("div", {
                            onFocus: W,
                            onBlur: U,
                            onMouseOver: W,
                            onMouseOut: U,
                            children: (() => {
                                if (0 === d.length) return null;
                                let e = [];
                                for (let t = 0; t < d[0]; t++) e.push((0, r.jsx)(M.default, {
                                    enlargeOnInteraction: !0,
                                    preferAnimation: !0,
                                    gutterWidth: E,
                                    inspectedStickerPosition: u,
                                    isScrolling: i,
                                    onInspect: o,
                                    rowIndex: t,
                                    stickerDescriptors: S[t],
                                    stickerPadding: b,
                                    stickerSize: D,
                                    isDisplayingIndividualStickers: !0,
                                    checkSendability: !1
                                }, t));
                                return e
                            })()
                        })]
                    })
                },
                Y = e => {
                    let {
                        onClose: t,
                        stickerPack: s
                    } = e;
                    (0, h.useFetchStickerPacks)(), (0, m.useMaybeFetchPremiumLikelihood)(p.default);
                    let l = (0, c.useStateFromStores)([C.default], () => C.default.getCurrentUser()),
                        n = (0, c.useStateFromStores)([k.default], () => k.default.isPremiumPack(s.id)),
                        {
                            freeStickersEnabled: a
                        } = R.default.useExperiment({
                            location: "a3b7dd_1"
                        }, {
                            autoTrackExposure: !1
                        });
                    return (0, r.jsxs)(d.ModalFooter, {
                        className: L.footer,
                        children: [(0, r.jsx)(d.Anchor, {
                            onClick: t,
                            className: L.skuPreviewFooterCloseButton,
                            children: v.default.Messages.CLOSE
                        }), n && !(A.default.canUseStickersEverywhere(l) || a) && (0, r.jsxs)(_.default, {
                            color: d.Button.Colors.GREEN,
                            type: "submit",
                            innerClassName: L.premiumButtonInner,
                            onClick: () => {
                                t(), (0, j.default)({
                                    section: O.AnalyticsSections.STICKER_PACK_VIEW_ALL
                                })
                            },
                            children: [(0, r.jsx)(f.default, {
                                className: L.premiumButtonNitroWheel
                            }), v.default.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM]
                        })]
                    })
                },
                G = e => {
                    let {
                        stickerPack: t,
                        onClose: s
                    } = e, l = (0, x.getStickerPackBannerAssetUrl)(t, 1024);
                    return null == l ? null : (0, r.jsxs)(d.ModalHeader, {
                        className: L.headerWithImage,
                        children: [(0, r.jsx)("div", {
                            role: "image",
                            style: {
                                backgroundImage: "url(".concat(l, ")")
                            },
                            className: L.backgroundImage
                        }), (0, r.jsx)(d.ModalCloseButton, {
                            className: L.closeButton,
                            onClick: s
                        })]
                    })
                };

            function V(e) {
                let {
                    onClose: t,
                    stickerPack: s,
                    ...n
                } = e, [a, i] = l.useState(null), o = l.useCallback(e => {
                    null !== e && i(e.offsetWidth)
                }, []);
                return l.useLayoutEffect(() => {
                    (0, T.resetInspectedStickerPosition)()
                }, []), (0, r.jsx)(E.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, r.jsx)(d.ModalRoot, {
                        ...n,
                        "aria-labelledby": "sticker-pack-sku-preview-modal",
                        children: (0, r.jsx)(I.default, {
                            hideBreadcrumbs: !0,
                            body: (0, r.jsx)("div", {
                                ref: o,
                                children: null != a && (0, r.jsx)(F, {
                                    stickerPack: s,
                                    hasHeaderImage: !0,
                                    onInspect: y,
                                    width: a
                                })
                            }),
                            footer: (0, r.jsx)(Y, {
                                onClose: t,
                                stickerPack: s
                            }),
                            header: (0, r.jsx)(G, {
                                onClose: t,
                                stickerPack: s
                            }),
                            onScroll: U,
                            steps: [N.Step.SKU_PREVIEW],
                            currentStep: N.Step.SKU_PREVIEW
                        })
                    })
                })
            }
        },
        770366: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var r = s("37983"),
                l = s("884691"),
                n = s("414456"),
                a = s.n(n),
                i = s("77078"),
                o = s("132755"),
                c = s("24373"),
                u = s("782340"),
                d = s("436604");
            let S = e => {
                let {
                    stickerPack: t
                } = e;
                return (0, r.jsx)("div", {
                    className: d.features,
                    children: (0, c.isStickerPackAnimated)(t) ? (0, r.jsx)(i.Tooltip, {
                        tooltipClassName: d.featuresTooltip,
                        position: "top",
                        text: u.default.Messages.STICKER_PICKER_PACK_DETAILS_ANIMATED,
                        children: e => (0, r.jsx)(o.default, {
                            ...e,
                            className: d.featureIcon
                        })
                    }) : null
                })
            };
            var E = l.memo(e => {
                let {
                    className: t,
                    stickerPack: s,
                    withDescription: l = !1
                } = e;
                return (0, r.jsxs)("div", {
                    className: a(d.header, t),
                    children: [(0, r.jsxs)("div", {
                        className: d.title,
                        children: [(0, r.jsx)(i.Heading, {
                            className: d.heading,
                            variant: "heading-sm/semibold",
                            children: s.name
                        }), (0, r.jsx)(S, {
                            stickerPack: s
                        })]
                    }), l && null != s.description && (0, r.jsx)(i.Text, {
                        className: d.description,
                        variant: "text-sm/normal",
                        children: s.description
                    }), (0, r.jsx)("div", {
                        className: d.count,
                        children: u.default.Messages.STICKER_PACK_STICKER_COUNT.format({
                            numStickers: s.stickers.length
                        })
                    })]
                })
            })
        }
    }
]);