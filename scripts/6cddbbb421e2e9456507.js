(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67569"], {
        812952: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return N
                }
            });
            var s, l, n, a, i = r("920040"),
                c = r("773670"),
                o = r("575482"),
                u = r.n(o),
                d = r("145131"),
                S = r("213439");
            (s = n || (n = {})).PRIMARY = "primary", s.SECONDARY = "secondary", s.WARNING = "warning", s.ERROR = "error", (l = a || (a = {})).SMALL = "small", l.LARGE = "large", l.NONE = "none";
            let E = {
                    [n.PRIMARY]: S.colorPrimary,
                    [n.SECONDARY]: S.colorSecondary,
                    [n.WARNING]: S.colorWarning,
                    [n.ERROR]: S.colorError
                },
                m = {
                    [a.SMALL]: S.small,
                    [a.LARGE]: S.large,
                    [a.NONE]: null
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
                        className: u(S.note, E[t], l),
                        align: d.default.Align.CENTER,
                        children: [(0, i.jsx)(e, {
                            className: u(S.icon, m[s], n)
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
                    return d
                }
            });
            var s = r("920040");
            r("773670");
            var l = r("575482"),
                n = r.n(l),
                a = r("454589"),
                i = r("659632"),
                c = r("642906"),
                o = r("85336"),
                u = r("244101");

            function d(e) {
                let {
                    className: t,
                    isEligibleForTrial: r = !1
                } = e, {
                    step: l,
                    breadcrumbs: d,
                    startedPaymentFlowWithPaymentSourcesRef: S,
                    giftRecipient: E
                } = (0, c.usePaymentContext)();
                if (null == d || 0 === d.length || (0, i.isCustomGiftEnabled)(E)) return null;
                let m = d.flatMap(e => {
                    let t = e.useBreadcrumbLabel();
                    return null != t ? {
                        id: e.id,
                        label: t
                    } : []
                });
                return 0 === m.length ? null : (m = m.filter(e => {
                    let t = e.id !== o.Step.ADD_PAYMENT_STEPS,
                        s = e.id === o.Step.ADD_PAYMENT_STEPS && !S.current;
                    return !r || r && (t || s)
                }), (0, s.jsx)("div", {
                    className: n("breadcrumb", u.wrapper, t),
                    children: (0, s.jsx)(a.default, {
                        activeId: l,
                        breadcrumbs: m
                    })
                }))
            }
        },
        273619: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return I
                }
            });
            var s = r("920040"),
                l = r("773670"),
                n = r("75777"),
                a = r("575482"),
                i = r.n(a),
                c = r("638800"),
                o = r("77078"),
                u = r("812952"),
                d = r("448993"),
                S = r("736978"),
                E = r("642906"),
                m = r("85336");
            r("153727"), r("650484");
            var p = r("454589"),
                N = r("978679"),
                f = r("745279"),
                C = r("49111"),
                _ = r("782340"),
                h = r("211155");
            let A = new Set([m.Step.SKU_SELECT, m.Step.AWAITING_AUTHENTICATION, m.Step.AWAITING_PURCHASE_TOKEN_AUTH, m.Step.CONFIRM]);

            function I(e) {
                let {
                    steps: t,
                    currentStep: r,
                    body: a,
                    paymentError: I,
                    header: P,
                    footer: T,
                    isGift: k = !1,
                    giftMessage: R = _.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
                    isSeasonalGift: x = !1,
                    hideBreadcrumbs: b = !1,
                    isLoading: M = !1,
                    purchaseError: j,
                    purchaseErrorBlockRef: g,
                    planError: v,
                    onScroll: D,
                    scrollerClassName: O,
                    hasCurrencies: L = !1
                } = e, B = null;
                null != I && null == (0, m.errorToStep)(I) ? B = I : null != j ? B = j : null != v && (B = v);
                let W = null != B ? B.message : "";
                null != B && B instanceof d.BillingError && (B.code === S.ErrorCodes.CARD_DECLINED && L && (W += " ".concat(_.default.Messages.BILLING_ERROR_TRY_ANOTHER)), B.code === S.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (W = _.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), B.code === C.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (W = _.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
                let {
                    stripe: y
                } = (0, E.usePaymentContext)();
                M = M || null == y;
                let K = l.useRef(new c.Timeout);
                l.useEffect(() => {
                    let e = K.current;
                    return null != y || e.isStarted() ? null != y && e.stop() : e.start(1e4, () => {
                        let e = Error("Stripe took too long to load");
                        (0, f.captureBillingException)(e)
                    }), () => {
                        e.stop()
                    }
                }, [y]);
                let U = t.includes(m.Step.PAYMENT_TYPE) ? m.Step.PAYMENT_TYPE : m.Step.ADD_PAYMENT_STEPS;
                return (0, s.jsxs)(n.Elements, {
                    options: C.StripeElementsOptions,
                    stripe: y,
                    children: [P, (0, s.jsxs)("div", {
                        className: i("paymentModalContent", h.content),
                        children: [k && !x && r !== m.Step.CONFIRM ? (0, s.jsx)(u.default, {
                            className: h.paymentNote,
                            iconSize: u.default.Sizes.SMALL,
                            icon: N.default,
                            color: null == R ? u.default.Colors.PRIMARY : u.default.Colors.SECONDARY,
                            children: R
                        }) : null, b ? null : (0, s.jsx)("div", {
                            className: h.breadcrumbsWrapper,
                            children: (0, s.jsx)(p.default, {
                                activeId: m.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(r) ? U : r,
                                breadcrumbs: t.filter(e => !m.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !A.has(e)).map(e => ({
                                    id: e,
                                    label: (0, m.getLabelForStep)(e)
                                }))
                            })
                        }), (0, s.jsxs)("div", {
                            className: h.bodyWrapper,
                            children: [null == B ? null : (0, s.jsx)("div", {
                                className: h.errorBlockWrapper,
                                children: (0, s.jsx)(o.FormErrorBlock, {
                                    ref: g,
                                    children: W
                                })
                            }), M ? (0, s.jsx)(o.Spinner, {
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
                                    onScroll: D,
                                    className: i(h.scroller, O),
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
            var s = r("710835");
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
                    return Y
                },
                default: function() {
                    return w
                }
            });
            var s = r("920040"),
                l = r("773670"),
                n = r("575482"),
                a = r.n(n),
                i = r("858434"),
                c = r.n(i),
                o = r("498225"),
                u = r("769846"),
                d = r("77078"),
                S = r("246511"),
                E = r("642906"),
                m = r("85336"),
                p = r("716849"),
                N = r("552917"),
                f = r("273619"),
                C = r("697218"),
                _ = r("181114"),
                h = r("216422"),
                A = r("719923"),
                I = r("159885"),
                P = r("4233"),
                T = r("706189"),
                k = r("256860"),
                R = r("364685"),
                x = r("24373"),
                b = r("77162"),
                M = r("770366"),
                j = r("113270"),
                g = r("49111"),
                v = r("782340"),
                D = r("297185");
            let O = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_DIMENSIONS),
                L = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_PADDING),
                B = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PURCHASE_PACK_PREVIEW_MARGIN),
                W = O + 2 * L,
                y = c(T.resetInspectedStickerPosition, 250),
                K = () => {
                    y.cancel()
                },
                U = e => {
                    let {
                        visibleRowIndex: t,
                        columnIndex: r
                    } = e;
                    y.cancel(), (0, T.setInspectedStickerPosition)(r, t, S.InspectedExpressionChangeSource.MOUSE_EVENT)
                },
                F = e => {
                    let {
                        stickerPack: t,
                        width: r,
                        hasHeaderImage: n,
                        isScrolling: i,
                        onInspect: c
                    } = e, o = l.useMemo(() => [(0, x.createStickerPackCategory)(t)], [t]), u = (0, T.useStickerViewAllStore)(e => e.inspectedStickerPosition), {
                        rowCountBySection: d,
                        stickersGrid: S,
                        gutterWidth: E
                    } = (0, k.useStickersGrid)({
                        stickersCategories: o,
                        stickerNodeMargin: B,
                        stickerNodeWidth: W,
                        listWidth: r
                    });
                    return (0, s.jsxs)("div", {
                        className: a(D.container, {
                            [D.containerWithHeader]: n
                        }),
                        children: [(0, s.jsx)(M.default, {
                            className: D.header,
                            stickerPack: t,
                            withDescription: !0
                        }, t.id), (0, s.jsx)("div", {
                            onFocus: K,
                            onBlur: y,
                            onMouseOver: K,
                            onMouseOut: y,
                            children: (() => {
                                if (0 === d.length) return null;
                                let e = [];
                                for (let t = 0; t < d[0]; t++) e.push((0, s.jsx)(b.default, {
                                    enlargeOnInteraction: !0,
                                    preferAnimation: !0,
                                    gutterWidth: E,
                                    inspectedStickerPosition: u,
                                    isScrolling: i,
                                    onInspect: c,
                                    rowIndex: t,
                                    stickerDescriptors: S[t],
                                    stickerPadding: L,
                                    stickerSize: O,
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
                        stickerPack: r
                    } = e;
                    (0, k.useFetchStickerPacks)(), (0, p.useMaybeFetchPremiumLikelihood)(N.default);
                    let l = (0, o.useStateFromStores)([C.default], () => C.default.getCurrentUser()),
                        n = (0, o.useStateFromStores)([R.default], () => R.default.isPremiumPack(r.id)),
                        {
                            freeStickersEnabled: a
                        } = P.default.useExperiment({
                            location: "a3b7dd_1"
                        }, {
                            autoTrackExposure: !1
                        });
                    return (0, s.jsxs)(d.ModalFooter, {
                        className: D.footer,
                        children: [(0, s.jsx)(d.Anchor, {
                            onClick: t,
                            className: D.skuPreviewFooterCloseButton,
                            children: v.default.Messages.CLOSE
                        }), n && !(A.default.canUseStickersEverywhere(l) || a) && (0, s.jsxs)(_.default, {
                            color: d.Button.Colors.GREEN,
                            type: "submit",
                            innerClassName: D.premiumButtonInner,
                            onClick: () => {
                                t(), (0, j.default)({
                                    section: g.AnalyticsSections.STICKER_PACK_VIEW_ALL
                                })
                            },
                            children: [(0, s.jsx)(h.default, {
                                className: D.premiumButtonNitroWheel
                            }), v.default.Messages.STICKER_PACK_AVAILABLE_WITH_PREMIUM]
                        })]
                    })
                },
                G = e => {
                    let {
                        stickerPack: t,
                        onClose: r
                    } = e, l = (0, x.getStickerPackBannerAssetUrl)(t, 1024);
                    return null == l ? null : (0, s.jsxs)(d.ModalHeader, {
                        className: D.headerWithImage,
                        children: [(0, s.jsx)("div", {
                            role: "image",
                            style: {
                                backgroundImage: "url(".concat(l, ")")
                            },
                            className: D.backgroundImage
                        }), (0, s.jsx)(d.ModalCloseButton, {
                            className: D.closeButton,
                            onClick: r
                        })]
                    })
                };

            function w(e) {
                let {
                    onClose: t,
                    stickerPack: r,
                    ...n
                } = e, [a, i] = l.useState(null), c = l.useCallback(e => {
                    null !== e && i(e.offsetWidth)
                }, []);
                return l.useLayoutEffect(() => {
                    (0, T.resetInspectedStickerPosition)()
                }, []), (0, s.jsx)(E.PaymentContextProvider, {
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
                                children: null != a && (0, s.jsx)(F, {
                                    stickerPack: r,
                                    hasHeaderImage: !0,
                                    onInspect: U,
                                    width: a
                                })
                            }),
                            footer: (0, s.jsx)(Y, {
                                onClose: t,
                                stickerPack: r
                            }),
                            header: (0, s.jsx)(G, {
                                onClose: t,
                                stickerPack: r
                            }),
                            onScroll: y,
                            steps: [m.Step.SKU_PREVIEW],
                            currentStep: m.Step.SKU_PREVIEW
                        })
                    })
                })
            }
        },
        770366: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return E
                }
            });
            var s = r("920040"),
                l = r("773670"),
                n = r("575482"),
                a = r.n(n),
                i = r("77078"),
                c = r("132755"),
                o = r("24373"),
                u = r("782340"),
                d = r("993031");
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
            var E = l.memo(e => {
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
            });
            var s = r("920040"),
                l = r("773670"),
                n = r("575482"),
                a = r.n(n),
                i = r("77078"),
                c = r("145131"),
                o = r("461380"),
                u = r("146500");
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
                        } = this.props, S = e.id === r, E = t === n.length - 1, m = null != c ? c(e, S) : (0, s.jsx)("span", {
                            className: a(u.breadcrumb, {
                                [u.activeBreadcrumb]: S,
                                [u.interactiveBreadcrumb]: null != l
                            }),
                            children: e.label
                        });
                        return (0, s.jsxs)("div", {
                            className: a(u.breadcrumbWrapper, {
                                [u.breadcrumbFinalWrapper]: E
                            }),
                            children: [null != l ? (0, s.jsx)(i.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: u.breadcrumbClickWrapper,
                                children: m
                            }) : m, E ? null : (0, s.jsx)(o.default, {
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