            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("627445"),
                r = n.n(a),
                l = n("976979"),
                s = n("65597"),
                u = n("77078"),
                o = n("703332"),
                c = n("812952"),
                d = n("740055"),
                p = n("545876"),
                m = n("84460"),
                f = n("883662"),
                S = n("623003"),
                h = n("617223"),
                P = n("102985"),
                I = n("160299"),
                v = n("622839"),
                E = n("167726"),
                y = n("953109"),
                T = n("315585"),
                x = n("659632"),
                C = n("153160"),
                b = n("635357"),
                _ = n("642906"),
                N = n("286350"),
                g = n("628135"),
                L = n("49111"),
                A = n("782340"),
                j = n("135878");

            function R(e) {
                let {
                    sku: t,
                    skuPricePreview: n
                } = e;
                r(null != n.amount, "SKU must have a price set.");
                let a = n.amount - n.tax;
                return !n.tax_inclusive && n.tax > 0 ? (0, i.jsxs)(f.PremiumInvoiceTable, {
                    className: j.invoice,
                    children: [(0, i.jsx)(f.PremiumInvoiceTableRow, {
                        label: t.name,
                        value: (0, C.formatPrice)(a, n.currency),
                        className: j.subscriptionCostRow
                    }), (0, i.jsx)(f.PremiumInvoiceTableRow, {
                        label: A.default.Messages.PURCHASE_REVIEW_TAX_LABEL,
                        value: (0, C.formatPrice)(n.tax, n.currency),
                        className: j.subscriptionCostRow
                    }), (0, i.jsx)(f.PremiumInvoiceTableDivider, {}), (0, i.jsx)(f.PremiumInvoiceTableTotalRow, {
                        label: A.default.Messages.BILLING_INVOICE_TOTAL.format(),
                        value: (0, C.formatPrice)(n.amount, n.currency),
                        className: j.subscriptionCostRow
                    })]
                }) : (0, i.jsx)(f.PremiumInvoiceTable, {
                    className: j.invoice,
                    children: (0, i.jsx)(f.PremiumInvoiceTableRow, {
                        label: t.name,
                        value: (0, C.formatPrice)(n.amount, n.currency),
                        className: j.subscriptionCostRow
                    })
                })
            }

            function M(e) {
                let {
                    application: t,
                    sku: n,
                    isEmbeddedIAP: a
                } = e;
                return !0 !== a ? null : (0, i.jsxs)("div", {
                    className: j.skuHeading,
                    children: [(0, i.jsx)(y.default, {
                        game: t
                    }), (0, i.jsx)(u.Heading, {
                        variant: "heading-lg/bold",
                        className: j.skuHeadingText,
                        children: n.name
                    })]
                })
            }

            function w(e) {
                let {
                    hasLegalTermsFlash: t,
                    legalTermsNodeRef: n,
                    onPaymentSourceChange: a,
                    handlePaymentSourceAdd: f
                } = e, {
                    application: y,
                    purchaseState: C,
                    paymentSources: w,
                    paymentSourceId: F,
                    setHasAcceptedTerms: O,
                    skusById: U,
                    skuPricePreviewsById: G,
                    selectedSkuId: D,
                    isEmbeddedIAP: B,
                    purchaseType: W
                } = (0, _.usePaymentContext)(), {
                    isGift: k,
                    giftRecipient: H
                } = (0, b.useGiftContext)(), V = k && (0, x.shouldShowCustomGiftExperience)(H, !0, "OneTimePurchaseReview");
                r(null != D, "Expected selectedSkuId");
                let z = U[D],
                    Y = G[D],
                    Z = null != F ? F : v.NO_PAYMENT_SOURCE,
                    K = null != Y ? Y[Z] : null;
                r(null != z, "SKU must exist and be fetched."), r(null != y, "Application must exist.");
                let Q = (0, s.default)([m.default, E.default], () => E.default.inTestModeForApplication(y.id) || m.default.inDevModeForApplication(y.id), [y.id]),
                    J = (0, s.default)([P.default], () => P.default.enabled),
                    X = l.CountryCodesSets.EEA_COUNTRIES.has(I.default.ipCountryCodeWithFallback),
                    q = C === N.PurchaseState.PURCHASING || C === N.PurchaseState.COMPLETED,
                    $ = null != F ? w[F].type : null;
                return (0, i.jsxs)("div", {
                    className: j.stepBody,
                    children: [Q && (0, i.jsx)(c.default, {
                        icon: T.default,
                        iconSize: c.default.Sizes.SMALL,
                        color: c.default.Colors.WARNING,
                        className: j.errorBlock,
                        children: A.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, "TEST_MODE"), (0, i.jsx)(M, {
                        application: y,
                        sku: z,
                        isEmbeddedIAP: B
                    }), V && (0, i.jsx)(g.default, {
                        sku: z
                    }), null != H ? (0, i.jsx)(h.SendGiftToUser, {
                        giftRecipient: H
                    }) : null, (0, i.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: k ? A.default.Messages.PREMIUM_GIFTING_BUTTON : A.default.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
                    }), null == K ? (0, i.jsx)(u.Spinner, {
                        type: u.Spinner.Type.WANDERING_CUBES,
                        className: j.invoiceSpinner
                    }) : (0, i.jsx)(R, {
                        sku: z,
                        skuPricePreview: K
                    }), (0, i.jsxs)("div", {
                        className: j.paymentSourceWrapper,
                        children: [(0, i.jsx)(u.FormTitle, {
                            tag: u.FormTitleTags.H5,
                            children: A.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }), (0, i.jsx)(d.default, {
                            paymentSources: Object.values(w),
                            selectedPaymentSourceId: F,
                            onChange: a,
                            onPaymentSourceAdd: f,
                            hidePersonalInformation: J
                        })]
                    }), (0, i.jsx)(S.default, {
                        isActive: t,
                        ref: n,
                        children: (0, i.jsx)(p.default, {
                            onChange: O,
                            forceShow: !0,
                            showWithdrawalWaiver: X,
                            disabled: q,
                            subscriptionPlan: null,
                            finePrintClassname: j.fineprint,
                            purchaseType: W,
                            isGift: k,
                            checkboxLabel: z.productLine === L.SKUProductLines.COLLECTIBLES ? A.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TERMS_LABEL_SIMPLE.format({
                                paidURL: L.MarketingURLs.PAID_TERMS
                            }) : void 0,
                            finePrint: (0, i.jsx)(o.default, {
                                paymentSourceType: $,
                                isEmbeddedIAP: B,
                                purchaseType: W,
                                productLine: z.productLine,
                                isGift: k
                            })
                        })
                    })]
                })
            }