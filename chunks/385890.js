            "use strict";
            s.r(t), s.d(t, {
                COLLECTIBLES_GIFT_CUSTOMIZATION_STEP: function() {
                    return h
                }
            });
            var n = s("37983");
            s("884691");
            var l = s("77078"),
                r = s("446674"),
                i = s("162848"),
                a = s("349133"),
                u = s("705820"),
                o = s("889554"),
                d = s("177998"),
                c = s("697218"),
                f = s("145131"),
                S = s("635357"),
                E = s("642906"),
                I = s("85336"),
                p = s("650484"),
                _ = s("782340"),
                T = s("578956");
            let h = {
                key: I.Step.GIFT_CUSTOMIZATION,
                renderStep: e => (0, n.jsx)(m, {
                    ...e
                }),
                options: {
                    isLargeModal: !0
                }
            };

            function C(e) {
                let {
                    onStepChange: t,
                    onBackClick: s,
                    showBackButton: r = !1,
                    disabled: i = !1,
                    loading: a = !1
                } = e, {
                    hasPaymentSources: u
                } = (0, E.usePaymentContext)(), o = u ? I.Step.REVIEW : I.Step.ADD_PAYMENT_STEPS;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(l.Button, {
                        onClick: () => t(o),
                        disabled: i,
                        submitting: a,
                        children: _.default.Messages.PAGINATION_NEXT
                    }), r ? (0, n.jsx)(d.default, {
                        onClick: s
                    }) : null]
                })
            }

            function m(e) {
                let {
                    handleStepChange: t,
                    handleClose: s
                } = e, {
                    customGiftMessage: d = "",
                    setCustomGiftMessage: I,
                    giftRecipientError: h,
                    validatingGiftRecipient: m,
                    giftRecipient: A
                } = (0, S.useGiftContext)(), {
                    selectedSkuId: N,
                    selectedSkuPricePreview: g
                } = (0, E.usePaymentContext)(), O = (0, r.useStateFromStores)([c.default], () => c.default.getCurrentUser());
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(p.PaymentPortalBody, {
                        children: (0, n.jsxs)("div", {
                            className: T.stepBody,
                            children: [(0, n.jsx)("div", {
                                className: T.bodyColumnMiddle,
                                children: (0, n.jsx)(o.GiftAnimationOptions, {})
                            }), (0, n.jsxs)("div", {
                                className: T.bodyColumnRight,
                                children: [(0, n.jsx)(a.default, {
                                    selectedSkuId: N,
                                    className: T.sendTo
                                }), (0, n.jsx)(u.default, {
                                    sectionTitle: _.default.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => null == I ? void 0 : I(e),
                                    pendingText: d,
                                    currentText: d,
                                    disableThemedBackground: !0,
                                    className: T.customGiftMessageWrapper,
                                    innerClassName: T.customGiftMessage
                                }), (0, n.jsx)(i.default, {
                                    selectedSkuId: N,
                                    selectedSkuPricePreview: g,
                                    className: T.giftPreview
                                })]
                            })]
                        })
                    }), (0, n.jsx)(p.PaymentPortalFooter, {
                        children: (0, n.jsx)(l.ModalFooter, {
                            justify: f.default.Justify.BETWEEN,
                            align: f.default.Align.CENTER,
                            children: (0, n.jsx)(C, {
                                onStepChange: t,
                                onBackClick: s,
                                disabled: null != h || null == A || A.id === (null == O ? void 0 : O.id) || d.length > u.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
                                loading: m
                            })
                        })
                    })]
                })
            }