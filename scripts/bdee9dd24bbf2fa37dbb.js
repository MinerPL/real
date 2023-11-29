(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67569"], {
        812952: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return N
                }
            });
            var s, l, n, a, i = r("37983"),
                c = r("884691"),
                o = r("414456"),
                u = r.n(o),
                d = r("145131"),
                S = r("298754");
            (s = n || (n = {})).PRIMARY = "primary", s.SECONDARY = "secondary", s.WARNING = "warning", s.ERROR = "error", (l = a || (a = {})).SMALL = "small", l.LARGE = "large", l.NONE = "none";
            let m = {
                    primary: S.colorPrimary,
                    secondary: S.colorSecondary,
                    warning: S.colorWarning,
                    error: S.colorError
                },
                E = {
                    small: S.small,
                    large: S.large,
                    none: null
                };
            class p extends c.PureComponent {
                render() {
                    let {
                        icon: e,
                        color: t,
                        children: r,
                        iconSize: s,
                        className: l,
                        iconClassName: n
                    } = this.props;
                    return (0, i.jsxs)(d.default, {
                        className: u(S.note, m[t], l),
                        align: d.default.Align.CENTER,
                        children: [(0, i.jsx)(e, {
                            className: u(S.icon, E[s], n)
                        }), (0, i.jsx)("div", {
                            children: r
                        })]
                    })
                }
            }
            p.Colors = n, p.Sizes = a;
            var N = p
        },
        153727: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            }), r("881410");
            var s = r("37983");
            r("884691");
            var l = r("414456"),
                n = r.n(l),
                a = r("454589"),
                i = r("642906"),
                c = r("85336"),
                o = r("109872");

            function u(e) {
                let {
                    className: t,
                    isEligibleForTrial: r = !1
                } = e, {
                    step: l,
                    breadcrumbs: u,
                    startedPaymentFlowWithPaymentSourcesRef: d
                } = (0, i.usePaymentContext)();
                if (null == u || 0 === u.length) return null;
                let S = u.flatMap(e => {
                    let t = e.useBreadcrumbLabel();
                    return null != t ? {
                        id: e.id,
                        label: t
                    } : []
                });
                return 0 === S.length ? null : (S = S.filter(e => {
                    let t = e.id !== c.Step.ADD_PAYMENT_STEPS,
                        s = e.id === c.Step.ADD_PAYMENT_STEPS && !d.current;
                    return !r || r && (t || s)
                }), (0, s.jsx)("div", {
                    className: n("breadcrumb", o.wrapper, t),
                    children: (0, s.jsx)(a.default, {
                        activeId: l,
                        breadcrumbs: S
                    })
                }))
            }
        },
        273619: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return A
                }
            }), r("222007"), r("70102");
            var s = r("37983"),
                l = r("884691"),
                n = r("41092"),
                a = r("414456"),
                i = r.n(a),
                c = r("862337"),
                o = r("77078"),
                u = r("812952"),
                d = r("448993"),
                S = r("736978"),
                m = r("642906"),
                E = r("85336");
            r("153727"), r("650484");
            var p = r("454589"),
                N = r("978679"),
                f = r("745279"),
                C = r("49111"),
                _ = r("782340"),
                h = r("129429");
            let I = new Set([E.Step.SKU_SELECT, E.Step.AWAITING_AUTHENTICATION, E.Step.AWAITING_PURCHASE_TOKEN_AUTH, E.Step.CONFIRM]);

            function A(e) {
                let {
                    steps: t,
                    currentStep: r,
                    body: a,
                    paymentError: A,
                    header: P,
                    footer: T,
                    isGift: k = !1,
                    giftMessage: x = _.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
                    hideBreadcrumbs: R = !1,
                    isLoading: b = !1,
                    purchaseError: j,
                    purchaseErrorBlockRef: g,
                    planError: M,
                    onScroll: v,
                    scrollerClassName: D,
                    hasCurrencies: O = !1
                } = e, L = null;
                null != A && null == (0, E.errorToStep)(A) ? L = A : null != j ? L = j : null != M && (L = M);
                let B = null != L ? L.message : "";
                null != L && L instanceof d.BillingError && (L.code === S.ErrorCodes.CARD_DECLINED && O && (B += " ".concat(_.default.Messages.BILLING_ERROR_TRY_ANOTHER)), L.code === S.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (B = _.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), L.code === C.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (B = _.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
                let {
                    stripe: y
                } = (0, m.usePaymentContext)();
                b = b || null == y;
                let W = l.useRef(new c.Timeout);
                l.useEffect(() => {
                    let e = W.current;
                    return null != y || e.isStarted() ? null != y && e.stop() : e.start(1e4, () => {
                        let e = Error("Stripe took too long to load");
                        (0, f.captureBillingException)(e)
                    }), () => {
                        e.stop()
                    }
                }, [y]);
                let K = t.includes(E.Step.PAYMENT_TYPE) ? E.Step.PAYMENT_TYPE : E.Step.ADD_PAYMENT_STEPS;
                return (0, s.jsxs)(n.Elements, {
                    options: C.StripeElementsOptions,
                    stripe: y,
                    children: [P, (0, s.jsxs)("div", {
                        className: i("paymentModalContent", h.content),
                        children: [k && r !== E.Step.CONFIRM ? (0, s.jsx)(u.default, {
                            className: h.paymentNote,
                            iconSize: u.default.Sizes.SMALL,
                            icon: N.default,
                            color: null == x ? u.default.Colors.PRIMARY : u.default.Colors.SECONDARY,
                            children: x
                        }) : null, R ? null : (0, s.jsx)("div", {
                            className: h.breadcrumbsWrapper,
                            children: (0, s.jsx)(p.default, {
                                activeId: E.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(r) ? K : r,
                                breadcrumbs: t.filter(e => !E.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !I.has(e)).map(e => ({
                                    id: e,
                                    label: (0, E.getLabelForStep)(e)
                                }))
                            })
                        }), (0, s.jsxs)("div", {
                            className: h.bodyWrapper,
                            children: [null == L ? null : (0, s.jsx)("div", {
                                className: h.errorBlockWrapper,
                                children: (0, s.jsx)(o.FormErrorBlock, {
                                    ref: g,
                                    children: B
                                })
                            }), b ? (0, s.jsx)(o.Spinner, {
                                className: h.loadingBlock
                            }) : (0, s.jsx)(o.Sequencer, {
                                className: h.sequencer,
                                staticClassName: h.sequencerStatic,
                                animatedNodeClassName: h.sequencerAnimatedNode,
                                fillParent: !0,
                                step: r,
                                steps: t,
                                sideMargin: 20,
                                children: (0, s.jsx)(o.AdvancedScrollerThin, {
                                    onScroll: v,
                                    className: i(h.scroller, D),
                                    children: a
                                })
                            })]
                        })]
                    }), T]
                })
            }
        },
        706189: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useStickerViewAllStore: function() {
                    return a
                },
                setInspectedStickerPosition: function() {
                    return i
                },
                resetInspectedStickerPosition: function() {
                    return c
                }
            });
            var s = r("308503");
            let l = Object.freeze({
                    inspectedStickerPosition: {
                        rowIndex: -1,
                        columnIndex: -1
                    }
                }),
                n = (0, s.default)(e => l),
                a = n,
                i = (e, t, r) => {
                    n.setState({
                        inspectedStickerPosition: {
                            rowIndex: t,
                            columnIndex: e,
                            source: r
                        }
                    })
                },
                c = () => {
                    i(-1, -1)
                }
        },
        656137: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                StickerPackViewAllModalFooter: function() {
                    return K
                },
                default: function() {
                    return F
                }
            }), r("424973"), r("222007");
            var s = r("37983"),
                l = r("884691"),
                n = r("414456"),
                a = r.n(n),
                i = r("483366"),
                c = r.n(i),
                o = r("446674"),
                u = r("769846"),
                d = r("77078"),
                S = r("246511"),
                m = r("642906"),
                E = r("85336"),
                p = r("716849"),
                N = r("552917"),
                f = r("273619"),
                C = r("181114"),
                _ = r("216422"),
                h = r("159885"),
                I = r("706189"),
                A = r("256860"),
                P = r("364685"),
                T = r("24373"),
                k = r("77162"),
                x = r("770366"),
                R = r("113270"),
                b = r("49111"),
                j = r("782340"),
                g = r("687133");
            let M = (0, h.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
                v = (0, h.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
                D = (0, h.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
                O = M + 2 * v,
                L = c(I.resetInspectedStickerPosition, 250),
                B = () => {
                    L.cancel()
                },
                y = e => {
                    let {
                        visibleRowIndex: t,
                        columnIndex: r
                    } = e;
                    L.cancel(), (0, I.setInspectedStickerPosition)(r, t, S.InspectedExpressionChangeSource.MOUSE_EVENT)
                },
                W = e => {
                    let {
                        stickerPack: t,
                        width: r,
                        hasHeaderImage: n,
                        isScrolling: i,
                        onInspect: c
                    } = e, o = l.useMemo(() => [(0, T.createStickerPackCategory)(t)], [t]), u = (0, I.useStickerViewAllStore)(e => e.inspectedStickerPosition), {
                        rowCountBySection: d,
                        stickersGrid: S,
                        gutterWidth: m
                    } = (0, A.useStickersGrid)({
                        stickersCategories: o,
                        stickerNodeMargin: D,
                        stickerNodeWidth: O,
                        listWidth: r
                    });
                    return (0, s.jsxs)("div", {
                        className: a(g.container, {
                            [g.containerWithHeader]: n
                        }),
                        children: [(0, s.jsx)(x.default, {
                            className: g.header,
                            stickerPack: t,
                            withDescription: !0
                        }, t.id), (0, s.jsx)("div", {
                            onFocus: B,
                            onBlur: L,
                            onMouseOver: B,
                            onMouseOut: L,
                            children: (() => {
                                if (0 === d.length) return null;
                                let e = [];
                                for (let t = 0; t < d[0]; t++) e.push((0, s.jsx)(k.default, {
                                    enlargeOnInteraction: !0,
                                    preferAnimation: !0,
                                    gutterWidth: m,
                                    inspectedStickerPosition: u,
                                    isScrolling: i,
                                    onInspect: c,
                                    rowIndex: t,
                                    stickerDescriptors: S[t],
                                    stickerPadding: v,
                                    stickerSize: M,
                                    isDisplayingIndividualStickers: !0,
                                    checkSendability: !1
                                }, t));
                                return e
                            })()
                        })]
                    })
                },
                K = e => {
                    let {
                        onClose: t,
                        stickerPack: r
                    } = e;
                    (0, A.useFetchStickerPacks)(), (0, p.useMaybeFetchPremiumLikelihood)(N.default);
                    let l = (0, o.useStateFromStores)([P.default], () => P.default.isPremiumPack(r.id));
                    return (0, s.jsxs)(d.ModalFooter, {
                        className: g.footer,
                        children: [(0, s.jsx)(d.Anchor, {
                            onClick: t,
                            className: g.skuPreviewFooterCloseButton,
                            children: j.default.Messages.CLOSE
                        }), l && (0, s.jsxs)(C.default, {
                            color: d.Button.Colors.GREEN,
                            type: "submit",
                            innerClassName: g.premiumButtonInner,
                            onClick: () => {
                                t(), (0, R.default)({
                                    section: b.AnalyticsSections.STICKER_PACK_VIEW_ALL
                                })
                            },
                            children: [(0, s.jsx)(_.default, {
                                className: g.premiumButtonNitroWheel
                            }), j.default.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM]
                        })]
                    })
                },
                U = e => {
                    let {
                        stickerPack: t,
                        onClose: r
                    } = e, l = (0, T.getStickerPackBannerAssetUrl)(t, 1024);
                    return null == l ? null : (0, s.jsxs)(d.ModalHeader, {
                        className: g.headerWithImage,
                        children: [(0, s.jsx)("div", {
                            role: "image",
                            style: {
                                backgroundImage: "url(".concat(l, ")")
                            },
                            className: g.backgroundImage
                        }), (0, s.jsx)(d.ModalCloseButton, {
                            className: g.closeButton,
                            onClick: r
                        })]
                    })
                };

            function F(e) {
                let {
                    onClose: t,
                    stickerPack: r,
                    ...n
                } = e, [a, i] = l.useState(null), c = l.useCallback(e => {
                    null !== e && i(e.offsetWidth)
                }, []);
                return l.useLayoutEffect(() => {
                    (0, I.resetInspectedStickerPosition)()
                }, []), (0, s.jsx)(m.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, s.jsx)(d.ModalRoot, {
                        ...n,
                        "aria-labelledby": "sticker-pack-sku-preview-modal",
                        children: (0, s.jsx)(f.default, {
                            hideBreadcrumbs: !0,
                            body: (0, s.jsx)("div", {
                                ref: c,
                                children: null != a && (0, s.jsx)(W, {
                                    stickerPack: r,
                                    hasHeaderImage: !0,
                                    onInspect: y,
                                    width: a
                                })
                            }),
                            footer: (0, s.jsx)(K, {
                                onClose: t,
                                stickerPack: r
                            }),
                            header: (0, s.jsx)(U, {
                                onClose: t,
                                stickerPack: r
                            }),
                            onScroll: L,
                            steps: [E.Step.SKU_PREVIEW],
                            currentStep: E.Step.SKU_PREVIEW
                        })
                    })
                })
            }
        },
        770366: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return m
                }
            });
            var s = r("37983"),
                l = r("884691"),
                n = r("414456"),
                a = r.n(n),
                i = r("77078"),
                c = r("132755"),
                o = r("24373"),
                u = r("782340"),
                d = r("436604");
            let S = e => {
                let {
                    stickerPack: t
                } = e;
                return (0, s.jsx)("div", {
                    className: d.features,
                    children: (0, o.isStickerPackAnimated)(t) ? (0, s.jsx)(i.Tooltip, {
                        tooltipClassName: d.featuresTooltip,
                        position: "top",
                        text: u.default.Messages.STICKER_PICKER_PACK_DETAILS_ANIMATED,
                        children: e => (0, s.jsx)(c.default, {
                            ...e,
                            className: d.featureIcon
                        })
                    }) : null
                })
            };
            var m = l.memo(e => {
                let {
                    className: t,
                    stickerPack: r,
                    withDescription: l = !1
                } = e;
                return (0, s.jsxs)("div", {
                    className: a(d.header, t),
                    children: [(0, s.jsxs)("div", {
                        className: d.title,
                        children: [(0, s.jsx)(i.Heading, {
                            className: d.heading,
                            variant: "heading-sm/semibold",
                            children: r.name
                        }), (0, s.jsx)(S, {
                            stickerPack: r
                        })]
                    }), l && null != r.description && (0, s.jsx)(i.Text, {
                        className: d.description,
                        variant: "text-sm/normal",
                        children: r.description
                    }), (0, s.jsx)("div", {
                        className: d.count,
                        children: u.default.Messages.STICKER_PACK_STICKER_COUNT.format({
                            numStickers: r.stickers.length
                        })
                    })]
                })
            })
        },
        454589: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return S
                }
            }), r("222007");
            var s = r("37983"),
                l = r("884691"),
                n = r("414456"),
                a = r.n(n),
                i = r("77078"),
                c = r("145131"),
                o = r("461380"),
                u = r("298619");
            class d extends l.PureComponent {
                handleClick(e) {
                    let {
                        onBreadcrumbClick: t
                    } = this.props;
                    null != t && t(e)
                }
                render() {
                    let {
                        breadcrumbs: e,
                        className: t
                    } = this.props, r = e.map(this.renderBreadcrumb);
                    return (0, s.jsx)(c.default, {
                        justify: c.default.Justify.START,
                        className: a(u.breadcrumbs, t),
                        children: r
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: r,
                            onBreadcrumbClick: l,
                            breadcrumbs: n,
                            renderCustomBreadcrumb: c,
                            separatorClassName: d
                        } = this.props, S = e.id === r, m = t === n.length - 1, E = null != c ? c(e, S) : (0, s.jsx)("span", {
                            className: a(u.breadcrumb, {
                                [u.activeBreadcrumb]: S,
                                [u.interactiveBreadcrumb]: null != l
                            }),
                            children: e.label
                        });
                        return (0, s.jsxs)("div", {
                            className: a(u.breadcrumbWrapper, {
                                [u.breadcrumbFinalWrapper]: m
                            }),
                            children: [null != l ? (0, s.jsx)(i.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: u.breadcrumbClickWrapper,
                                children: E
                            }) : E, m ? null : (0, s.jsx)(o.default, {
                                className: a(u.breadcrumbArrow, d),
                                direction: o.default.Directions.RIGHT
                            })]
                        }, e.id)
                    }
                }
            }
            var S = d
        }
    }
]);