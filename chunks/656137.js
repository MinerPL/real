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