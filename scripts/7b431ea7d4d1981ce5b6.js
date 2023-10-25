(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["61946"], {
        960391: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                AddPaymentModalOld: function() {
                    return q
                },
                default: function() {
                    return Z
                }
            });
            var a, n, r = s("920040"),
                l = s("773670"),
                i = s("75777"),
                o = s("575482"),
                d = s.n(o),
                u = s("498225"),
                h = s("77078"),
                c = s("913144"),
                p = s("850068"),
                S = s("82731"),
                P = s("112679"),
                y = s("642906"),
                E = s("85336"),
                A = s("724522"),
                m = s("160299"),
                f = s("926223"),
                T = s("758764"),
                C = s("454589"),
                N = s("145131"),
                _ = s("773336"),
                g = s("520713"),
                R = s("97459"),
                M = s("814915"),
                Y = s("518809"),
                B = s("863843"),
                D = s("780569"),
                O = s("677987"),
                I = s("49111"),
                x = s("782340"),
                k = s("681287"),
                F = s("705562");
            (a = n || (n = {})).PAYMENT_TYPE = "payment_type", a.CARD_INFO = "card_info", a.SOFORT_INFO = "sofort_info", a.ADDRESS = "billing_address", a.PAYMENT_REQUEST_INFO = "payment_request_info", a.PAYPAL = "paypal", a.PRZELEWY24_INFO = "przelewy24_info";
            let b = [n.PAYMENT_TYPE, n.CARD_INFO, n.ADDRESS],
                j = [n.PAYMENT_TYPE, n.SOFORT_INFO, n.ADDRESS],
                v = [n.PAYMENT_TYPE, n.PAYPAL, n.ADDRESS],
                L = [n.PAYMENT_TYPE, n.PAYMENT_REQUEST_INFO],
                w = [n.PAYMENT_TYPE, n.ADDRESS],
                U = [n.PAYMENT_TYPE, n.PRZELEWY24_INFO, n.ADDRESS],
                G = [n.PAYMENT_TYPE, n.ADDRESS];

            function W(e) {
                return e.hasCardError() ? n.CARD_INFO : e.hasAddressError() ? n.ADDRESS : null
            }
            class z extends l.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    let {
                        error: s
                    } = e, {
                        errorStep: a
                    } = t;
                    if (null == s) return null == a ? null : {
                        errorStep: null
                    };
                    let n = W(s);
                    return null != n && n !== t.errorStep ? {
                        step: n,
                        errorStep: n
                    } : null
                }
                async componentDidMount() {
                    S.createClient();
                    let e = await (0, g.getStripe)();
                    this.setState({
                        stripe: e
                    })
                }
                componentWillUnmount() {
                    c.default.wait(() => S.teardownClients()), (0, P.clearCardInfo)()
                }
                get stepData() {
                    let {
                        step: e
                    } = this.state, t = this.STEPS_DATA[e];
                    if (null == t) throw Error("Invalid step ".concat(e));
                    return t
                }
                getSteps(e) {
                    let t = null != e ? e : this.state.type;
                    switch (t) {
                        case I.PaymentSourceTypes.PAYMENT_REQUEST:
                            return L;
                        case I.PaymentSourceTypes.PAYPAL:
                            return v;
                        case I.PaymentSourceTypes.SOFORT:
                            return j;
                        case I.PaymentSourceTypes.GIROPAY:
                            return w;
                        case I.PaymentSourceTypes.PRZELEWY24:
                            return U;
                        case I.PaymentSourceTypes.PAYSAFE_CARD:
                        case I.PaymentSourceTypes.GCASH:
                        case I.PaymentSourceTypes.GRABPAY_MY:
                        case I.PaymentSourceTypes.MOMO_WALLET:
                        case I.PaymentSourceTypes.KAKAOPAY:
                        case I.PaymentSourceTypes.GOPAY_WALLET:
                            return G;
                        default:
                            return b
                    }
                }
                getNextStep() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.steps,
                        {
                            step: t
                        } = this.state,
                        s = e.indexOf(t);
                    return e[s + 1]
                }
                getPreviousStep() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.steps,
                        {
                            step: t
                        } = this.state,
                        s = e.indexOf(t);
                    return e[s - 1]
                }
                preventDefault(e) {
                    e.preventDefault()
                }
                handleReopenPaypal() {
                    S.reopenPayPalWindow()
                }
                renderGenericError() {
                    let {
                        error: e
                    } = this.props;
                    return null == e || null != W(e) ? null : (0, r.jsx)(h.FormErrorBlock, {
                        className: k.errorBlock,
                        children: e.message
                    })
                }
                renderFooter() {
                    let e = this.stepData;
                    return null == e.renderNextButton ? null : (0, r.jsx)(h.ModalFooter, {
                        children: (0, r.jsxs)(N.default, {
                            justify: N.default.Justify.BETWEEN,
                            children: [(0, r.jsx)(h.Button, {
                                onClick: this.handleBackClick,
                                color: h.Button.Colors.PRIMARY,
                                look: h.Button.Looks.LINK,
                                size: h.Button.Sizes.MIN,
                                children: x.default.Messages.BACK
                            }), e.renderNextButton()]
                        })
                    })
                }
                render() {
                    let {
                        step: e,
                        steps: t
                    } = this.state, {
                        transitionState: s
                    } = this.props, a = t.map(e => ({
                        id: e,
                        label: function(e) {
                            switch (e) {
                                case n.PAYMENT_TYPE:
                                    return x.default.Messages.PAYMENT_SOURCE_TYPE;
                                case n.PAYMENT_REQUEST_INFO:
                                    return x.default.Messages.BILLING_STEP_PAYMENT_INFO;
                                case n.CARD_INFO:
                                    return x.default.Messages.PAYMENT_SOURCE_INFORMATION;
                                case n.ADDRESS:
                                    return x.default.Messages.BILLING_ADDRESS;
                                case n.PAYPAL:
                                    return x.default.Messages.PAYMENT_SOURCE_PAYPAL_DETAILS;
                                case n.SOFORT_INFO:
                                    return x.default.Messages.PAYMENT_SOURCE_SOFORT_INFO;
                                case n.PRZELEWY24_INFO:
                                    return x.default.Messages.PAYMENT_SOURCE_PRZELEWY24_INFO
                            }
                        }(e)
                    }));
                    return (0, r.jsx)(i.Elements, {
                        options: I.StripeElementsOptions,
                        stripe: this.state.stripe,
                        children: (0, r.jsx)(h.ModalRoot, {
                            transitionState: s,
                            size: h.ModalSize.SMALL,
                            className: k.modal,
                            "aria-label": x.default.Messages.PAYMENT_SOURCES_ADD,
                            children: (0, r.jsxs)("form", {
                                className: k.form,
                                onSubmit: this.preventDefault,
                                children: [(0, r.jsxs)(h.ModalHeader, {
                                    direction: N.default.Direction.VERTICAL,
                                    align: N.default.Align.STRETCH,
                                    separator: !1,
                                    children: [(0, r.jsxs)(N.default, {
                                        className: k.modalTitle,
                                        justify: N.default.Justify.BETWEEN,
                                        align: N.default.Align.CENTER,
                                        children: [(0, r.jsx)(h.FormTitle, {
                                            tag: h.FormTitleTags.H4,
                                            children: x.default.Messages.PAYMENT_SOURCES_ADD
                                        }), (0, r.jsx)(h.ModalCloseButton, {
                                            onClick: this.handleClose
                                        })]
                                    }), this.renderGenericError(), (0, r.jsx)(C.default, {
                                        breadcrumbs: a,
                                        activeId: e
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: k.divider
                                }), (0, r.jsx)(h.Sequencer, {
                                    fillParent: !0,
                                    className: k.sequencer,
                                    step: e,
                                    steps: t,
                                    children: (0, r.jsx)(h.ModalContent, {
                                        className: k.content,
                                        children: this.stepData.renderBody()
                                    })
                                }), this.renderFooter()]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        type: I.PaymentSourceTypes.CARD,
                        step: n.PAYMENT_TYPE,
                        steps: b,
                        errorStep: null,
                        stripeToken: null,
                        stripe: null,
                        tokenSubmitting: !1,
                        paymentDetails: {
                            p24Bank: ""
                        }
                    }, this.STEPS_DATA = {
                        [n.PRZELEWY24_INFO]: {
                            renderBody: () => {
                                let {
                                    error: e,
                                    billingAddressInfo: t
                                } = this.props;
                                return (0, r.jsx)(B.P24DetailForm, {
                                    billingAddressInfo: t,
                                    onDetailsChange: this.handlePaymentDetailsChange,
                                    onP24BankChange: this.handleP24BankChange,
                                    p24BankValue: this.state.paymentDetails.p24Bank,
                                    error: e
                                })
                            },
                            renderNextButton: () => {
                                var e;
                                let {
                                    billingAddressInfo: t
                                } = this.props, s = null === (e = this.state.paymentDetails) || void 0 === e ? void 0 : e.p24Bank;
                                return (0, r.jsx)(h.Button, {
                                    type: "submit",
                                    disabled: "" === t.name || "" === t.email || "" === s,
                                    onClick: this.handleNextClick,
                                    children: x.default.Messages.NEXT
                                })
                            }
                        },
                        [n.SOFORT_INFO]: {
                            renderBody: () => {
                                let {
                                    error: e,
                                    billingAddressInfo: t
                                } = this.props;
                                return (0, r.jsx)(B.default, {
                                    billingAddressInfo: t,
                                    onChange: this.handlePaymentDetailsChange,
                                    error: e
                                })
                            },
                            renderNextButton: () => {
                                let {
                                    billingAddressInfo: e
                                } = this.props;
                                return (0, r.jsx)(h.Button, {
                                    type: "submit",
                                    disabled: "" === e.name || "" === e.email,
                                    onClick: this.handleNextClick,
                                    children: x.default.Messages.NEXT
                                })
                            }
                        },
                        [n.PAYMENT_TYPE]: {
                            renderBody: () => (0, r.jsx)(M.default, {
                                allowStripeRequestPayments: !_.isPlatformEmbedded,
                                onChooseType: this.handleChooseType,
                                onStripePaymentMethodReceived: this.handleStripePaymentMethod
                            })
                        },
                        [n.PAYMENT_REQUEST_INFO]: {
                            renderBody: () => {
                                let {
                                    stripePaymentMethod: e,
                                    submitting: t
                                } = this.props;
                                return (0, r.jsx)(O.PaymentRequestStepBody, {
                                    stripePaymentMethod: e,
                                    submitting: t
                                })
                            },
                            renderNextButton: () => {
                                let {
                                    submitting: e
                                } = this.props;
                                return (0, r.jsx)(h.Button, {
                                    submitting: e,
                                    look: h.Button.Looks.OUTLINED,
                                    disabled: !0
                                })
                            }
                        },
                        [n.CARD_INFO]: {
                            renderBody: () => {
                                let {
                                    error: e
                                } = this.props, t = null != e && (null == e.code || W(e) === n.CARD_INFO);
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [t ? (0, r.jsx)(h.FormErrorBlock, {
                                        className: k.errorBlock,
                                        children: x.default.Messages.BILLING_ERROR_SECTION_CARD
                                    }) : null, (0, r.jsx)(R.default, {
                                        onCardInfoChange: this.handleCardInfoChange,
                                        error: t ? e : null
                                    })]
                                })
                            },
                            renderNextButton: () => {
                                let {
                                    isCreditCardInfoValid: e
                                } = this.props, {
                                    tokenSubmitting: t
                                } = this.state;
                                return (0, r.jsx)(i.ElementsConsumer, {
                                    children: s => {
                                        let {
                                            elements: a
                                        } = s;
                                        return (0, r.jsx)(h.Button, {
                                            disabled: !e,
                                            onClick: () => {
                                                this.createToken(a)
                                            },
                                            type: "submit",
                                            submitting: t,
                                            children: x.default.Messages.NEXT
                                        })
                                    }
                                })
                            }
                        },
                        [n.ADDRESS]: {
                            renderBody: () => {
                                let {
                                    billingAddressInfo: e,
                                    error: t
                                } = this.props, {
                                    type: s
                                } = this.state;
                                return (0, r.jsx)(D.AddressStepBody, {
                                    billingAddressInfo: e,
                                    billingError: t,
                                    onBillingAddressChange: this.handleBillingAddressChange,
                                    paymentSourceType: s
                                })
                            },
                            renderNextButton: () => {
                                let {
                                    submitting: e,
                                    isBillingAddressInfoValid: t,
                                    isAuthenticating: s
                                } = this.props;
                                return (0, r.jsx)(h.Button, {
                                    type: "submit",
                                    submitting: e,
                                    disabled: !t || s,
                                    onClick: this.handleSave,
                                    children: x.default.Messages.SAVE
                                })
                            }
                        },
                        [n.PAYPAL]: {
                            renderBody: () => (0, r.jsx)(Y.default, {}),
                            renderNextButton: () => {
                                let {
                                    submitting: e,
                                    braintreeNonce: t,
                                    braintreeEmail: s
                                } = this.props, a = null != s && null != t;
                                return (0, r.jsx)(h.Button, {
                                    submitting: e,
                                    color: a ? h.Button.Colors.BRAND : h.Button.Colors.PRIMARY,
                                    onClick: a ? this.handleNextClick : this.handleReopenPaypal,
                                    children: a ? x.default.Messages.NEXT : x.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
                                })
                            }
                        }
                    }, this.handleChooseType = e => {
                        let t = this.getSteps(e),
                            s = this.getNextStep(t);
                        null != s && this.setState({
                            type: e,
                            steps: t,
                            step: s
                        })
                    }, this.handleCardInfoChange = (e, t) => {
                        c.default.wait(() => (0, P.updateCardInfo)(e, t))
                    }, this.handlePaymentDetailsChange = e => {
                        let {
                            billingAddressInfo: t
                        } = this.props;
                        t.name = e.name, c.default.wait(() => (0, P.updateAddressInfo)({
                            ...t,
                            ...e
                        }, !1))
                    }, this.handleP24BankChange = e => {
                        this.setState({
                            paymentDetails: {
                                p24Bank: e
                            }
                        })
                    }, this.handleBillingAddressChange = (e, t) => {
                        let {
                            billingAddressInfo: s
                        } = this.props;
                        c.default.wait(() => (0, P.updateAddressInfo)({
                            ...s,
                            ...e
                        }, t))
                    }, this.handleBackClick = () => {
                        let e = this.getPreviousStep();
                        if (null != e) {
                            e === n.PAYMENT_TYPE && (0, P.clearError)();
                            this.setState({
                                step: e
                            })
                        }
                    }, this.handleNextClick = () => {
                        let e = this.getNextStep();
                        null != e && this.setState({
                            step: e
                        })
                    }, this.handleClose = () => {
                        (0, P.clearError)(), this.props.onClose()
                    }, this.handleStripePaymentMethod = e => {
                        if ((0, P.updateStripePaymentRequest)(e), null == e) {
                            this.handleBackClick();
                            return
                        }
                        this.handleStripePaymentRequestSave(e)
                    }, this.handleStripePaymentRequestSave = async e => {
                        try {
                            let t = await p.createPaymentRequestPaymentSource(e, void 0, this.props.analyticsLocation),
                                {
                                    onAddPaymentSource: s
                                } = this.props;
                            null == s || s(t), this.handleClose()
                        } catch (e) {}
                    }, this.createToken = async e => {
                        let {
                            stripe: t
                        } = this.state;
                        this.setState({
                            tokenSubmitting: !0
                        });
                        try {
                            let s = await p.createCardToken(t, e);
                            this.setState({
                                stripeToken: s
                            }), this.handleNextClick()
                        } catch (e) {} finally {
                            this.setState({
                                tokenSubmitting: !1
                            })
                        }
                    }, this.handleSave = () => {
                        let {
                            type: e
                        } = this.state;
                        switch (e) {
                            case I.PaymentSourceTypes.PAYPAL:
                                return this.handlePaypalSave();
                            case I.PaymentSourceTypes.CARD:
                                return this.handleCardSave();
                            case I.PaymentSourceTypes.SOFORT:
                                return this.handleSofortSave();
                            case I.PaymentSourceTypes.GIROPAY:
                                return this.handleGiropaySave();
                            case I.PaymentSourceTypes.PRZELEWY24:
                                return this.handlePrzelewy24Save();
                            case I.PaymentSourceTypes.PAYSAFE_CARD:
                            case I.PaymentSourceTypes.GRABPAY_MY:
                                return this.handleAdyenPrepaidPaymentMethodSave(e);
                            default:
                                p.dispatchConfirmationError("user used a unsupported payment type: ".concat(e))
                        }
                    }, this.handlePrzelewy24Save = async () => {
                        let {
                            billingAddressInfo: e,
                            isBillingAddressInfoValid: t,
                            onAddPaymentSource: s,
                            analyticsLocation: a
                        } = this.props, {
                            stripe: n,
                            paymentDetails: r
                        } = this.state;
                        if (t) try {
                            let t = await p.confirmPrzelewy24(n, r, e, a);
                            null == s || s(t), this.handleClose()
                        } catch (e) {}
                    }, this.handleSofortSave = async () => {
                        let {
                            billingAddressInfo: e,
                            isBillingAddressInfoValid: t,
                            onAddPaymentSource: s,
                            analyticsLocation: a
                        } = this.props, {
                            stripe: n
                        } = this.state;
                        if (t) try {
                            let t = await p.confirmSofort(n, e, a);
                            null == s || s(t), this.handleClose()
                        } catch (e) {}
                    }, this.handleCardSave = async () => {
                        let {
                            billingAddressInfo: e,
                            isCreditCardInfoValid: t,
                            isBillingAddressInfoValid: s,
                            onAddPaymentSource: a,
                            analyticsLocation: n
                        } = this.props, {
                            stripe: r,
                            stripeToken: l
                        } = this.state;
                        if (t && s) try {
                            let t = await p.confirmCardPaymentSource(r, l, e, n);
                            null == a || a(t), this.handleClose()
                        } catch (e) {}
                    }, this.handlePaypalSave = async () => {
                        let {
                            braintreeEmail: e,
                            braintreeNonce: t,
                            billingAddressInfo: s,
                            onAddPaymentSource: a,
                            analyticsLocation: n
                        } = this.props;
                        if (null != e && null != t) try {
                            let e = await p.createBraintreePaymentSource(t, s, n);
                            null == a || a(e), this.handleClose()
                        } catch (e) {}
                    }, this.handleAdyenPrepaidPaymentMethodSave = async e => {
                        let {
                            billingAddressInfo: t,
                            isBillingAddressInfoValid: s,
                            onAddPaymentSource: a,
                            analyticsLocation: n
                        } = this.props;
                        if (s) try {
                            let s = await p.createAdyenPrepaidPaymentSource(t, e, n);
                            null == a || a(s), this.handleClose()
                        } catch (e) {}
                    }, this.handleGiropaySave = async () => {
                        let {
                            billingAddressInfo: e,
                            isBillingAddressInfoValid: t,
                            onAddPaymentSource: s,
                            analyticsLocation: a
                        } = this.props, {
                            stripe: n
                        } = this.state;
                        if (t) try {
                            let t = await p.createStripePaymentSource(n, e, I.PaymentSourceTypes.GIROPAY, a);
                            null == s || s(t), this.handleClose()
                        } catch (e) {}
                    }
                }
            }
            let q = u.default.connectStores([f.default, m.default, T.default], () => ({
                braintreeEmail: f.default.braintreeEmail,
                braintreeNonce: f.default.braintreeNonce,
                stripePaymentMethod: f.default.stripePaymentMethod,
                creditCardInfo: f.default.getCreditCardInfo(),
                isCreditCardInfoValid: f.default.isCardInfoValid,
                billingAddressInfo: f.default.getBillingAddressInfo(),
                isBillingAddressInfoValid: f.default.isBillingAddressInfoValid,
                error: f.default.error,
                popupCallbackCalled: f.default.popupCallbackCalled,
                submitting: m.default.isBusy,
                isAuthenticating: T.default.isAwaitingAuthentication
            }))(z);

            function V(e) {
                let {
                    transitionState: t,
                    analyticsLocation: s,
                    onClose: a,
                    onAddPaymentSource: n
                } = e, l = (0, A.useSharedPaymentModal)(), i = (0, A.AddPaymentFlow)({
                    paymentModalArgs: l,
                    initialStep: E.Step.PAYMENT_TYPE,
                    prependSteps: [],
                    appendSteps: [],
                    onReturn: () => {
                        a()
                    },
                    onComplete: (e, t) => {
                        null == n || n(t), a()
                    },
                    onStepChange: () => {},
                    header: (0, r.jsxs)("div", {
                        className: d(k.modalTitle, F.flex, F.justifyBetween, F.alignCenter),
                        children: [(0, r.jsx)(h.FormTitle, {
                            tag: h.FormTitleTags.H4,
                            children: x.default.Messages.PAYMENT_SOURCES_ADD
                        }), (0, r.jsx)(h.ModalCloseButton, {
                            onClick: a
                        })]
                    }),
                    analyticsLocation: s,
                    hideBreadcrumbs: !0
                });
                return (0, r.jsx)(h.ModalRoot, {
                    transitionState: t,
                    size: h.ModalSize.SMALL,
                    className: k.modal,
                    "aria-label": x.default.Messages.PAYMENT_SOURCES_ADD,
                    children: (0, r.jsx)("form", {
                        className: k.form,
                        onSubmit: function(e) {
                            e.preventDefault()
                        },
                        children: i
                    })
                })
            }

            function Z(e) {
                return (0, r.jsx)(y.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, r.jsx)(V, {
                        ...e
                    })
                })
            }
        }
    }
]);