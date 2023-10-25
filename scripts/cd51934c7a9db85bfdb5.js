(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["57927"], {
        878005: function(e, t, s) {
            "use strict";
            e.exports = s.p + "ddaba4373c0aabfff967.png"
        },
        777273: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                fetchUserAffinities: function() {
                    return i
                }
            });
            var a = s("990746"),
                n = s("913144"),
                l = s("843823"),
                r = s("49111");

            function i() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return l.default.needsRefresh() ? (n.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), a.default.get({
                    url: r.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    n.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    n.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_FAILURE"
                    })
                })) : Promise.resolve()
            }
        },
        657130: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("498225"),
                r = s("850068"),
                i = s("112679"),
                o = s("926223"),
                u = s("758764"),
                d = s("357957"),
                c = s("45640"),
                h = s("803427"),
                p = s("49111");
            let f = [c.Steps.REVIEW, c.Steps.CONFIRM];
            class S extends n.Component {
                get stepsToRender() {
                    let {
                        prependSteps: e
                    } = this.props, {
                        steps: t
                    } = this.state;
                    return null != e ? [...e, ...t] : t
                }
                get closable() {
                    let {
                        step: e
                    } = this.state, t = (0, c.getStepIndex)(e, this.stepsToRender);
                    return 0 === t || !this._hasChangedSteps
                }
                componentDidMount() {
                    !d.default.hasFetchedPaymentSources && r.fetchPaymentSources()
                }
                componentDidUpdate(e, t) {
                    let {
                        onStepChange: s
                    } = this.props, {
                        step: a
                    } = this.state;
                    a !== t.step && (this._hasChangedSteps = !0, null != s && s(t.step, a))
                }
                static getDerivedStateFromProps(e, t) {
                    let {
                        billingError: s,
                        isAwaitingAuthentication: a
                    } = e, {
                        errorStep: n
                    } = t, l = {};
                    if (null == s) null != n && (l.errorStep = null);
                    else {
                        let e = (0, c.errorToStep)(s);
                        null != e && e !== t.errorStep && (l.step = e, l.errorStep = e)
                    }
                    return null == t.paymentSourceId && null != e.defaultPaymentSourceId && (l.paymentSourceId = e.defaultPaymentSourceId), a ? l.step = c.Steps.AWAITING_AUTHENTICATION : t.step === c.Steps.AWAITING_AUTHENTICATION && (null != s ? l.step = c.Steps.REVIEW : l.step = c.Steps.CONFIRM), l
                }
                render() {
                    let {
                        isPurchasing: e,
                        canSubmit: t,
                        submitButtonText: s,
                        useShinySubmitButton: n,
                        legalNotice: l,
                        renderHeader: r,
                        onPaymentSourceChange: i,
                        price: o,
                        onClearError: u,
                        size: d,
                        renderConfirmationBody: p,
                        renderConfirmationFooter: f,
                        className: S,
                        isGift: E,
                        isGiftable: A,
                        needsToBeGift: _,
                        onIsGiftUpdate: I,
                        transitionState: P
                    } = this.props, C = {
                        [c.Steps.CONFIRM]: {
                            renderBody: p,
                            renderFooter: f
                        },
                        [c.Steps.SELECT_PLAN]: {
                            renderBody: () => this.props.renderSelectPlanBody(this.handleSelectPlan),
                            renderFooter: () => this.props.renderSelectPlanFooter()
                        }
                    }, {
                        step: m,
                        paymentSourceId: T
                    } = this.state, N = this.stepsToRender;
                    return (0, a.jsx)(h.default, {
                        transitionState: P,
                        className: S,
                        isPurchasing: e,
                        canSubmit: t,
                        submitButtonText: s,
                        useShinySubmitButton: n,
                        legalNotice: l,
                        renderHeader: r,
                        onPaymentSourceChange: i,
                        price: o,
                        onClearError: u,
                        size: d,
                        extraRenderers: C,
                        step: m,
                        steps: N,
                        paymentSourceId: T,
                        isGiftable: A,
                        isGift: E,
                        needsToBeGift: _,
                        onIsGiftUpdate: I,
                        onBack: this.handleBack,
                        onChoosePaymentType: this.handleChoosePaymentType,
                        onCreditCardContinue: this.handleCreditCardContinue,
                        onPaymentSourceAdd: this.handlePaymentSourceAdd,
                        onPurchase: this.handlePurchase,
                        onPaypalContinue: this.handlePaypalContinue,
                        onVenmoContinue: this.handleVenmoContinue,
                        onReviewPaymentSourceChange: this.handleReviewPaymentSourceChange,
                        onReviewPaymentSourceAdd: this.handleReviewPaymentSourceAdd
                    })
                }
                constructor(e) {
                    super(e), this._hasChangedSteps = !1, this.handlePaypalContinue = () => {
                        this.setState({
                            step: c.Steps.PAYPAL_ADDRESS
                        })
                    }, this.handleVenmoContinue = () => {
                        this.setState({
                            step: c.Steps.VENMO_ADDRESS
                        })
                    }, this.handleCreditCardContinue = () => {
                        this.setState({
                            step: c.Steps.ADDRESS
                        })
                    }, this.handleReviewPaymentSourceChange = e => {
                        this.setState({
                            paymentSourceId: null != e ? e.id : null
                        })
                    }, this.handleReviewPaymentSourceAdd = () => {
                        this.setState({
                            step: c.Steps.PAYMENT_TYPE,
                            steps: h.ADD_PAYMENT_STEPS,
                            paymentSourceId: null
                        });
                        let {
                            onClearError: e
                        } = this.props;
                        e && e()
                    }, this.handleBack = () => {
                        let {
                            paymentSources: e,
                            onClose: t
                        } = this.props, {
                            step: s,
                            steps: a
                        } = this.state, n = this.stepsToRender, l = (0, c.getStepIndex)(s, n);
                        if (l > 0) {
                            let e = n[l - 1],
                                t = e === c.Steps.PAYMENT_TYPE;
                            t && i.clearError(), this.setState({
                                step: e,
                                steps: t ? h.ADD_PAYMENT_STEPS : a
                            })
                        } else if ((0, c.canGoBack)(l, e)) {
                            let {
                                defaultPaymentSourceId: e
                            } = this.props;
                            this.setState({
                                step: c.Steps.REVIEW,
                                steps: h.REVIEW_PAYMENT_STEPS,
                                paymentSourceId: e
                            })
                        } else t()
                    }, this.handleChoosePaymentType = e => {
                        switch (e) {
                            case p.PaymentSourceTypes.PAYPAL:
                                this.setState({
                                    step: c.Steps.PAYPAL,
                                    steps: h.ADD_PAYPAL_STEPS
                                });
                                break;
                            case p.PaymentSourceTypes.CARD:
                                this.setState({
                                    step: c.Steps.CREDIT_CARD_INFORMATION,
                                    steps: h.ADD_CARD_STEPS
                                });
                                break;
                            case p.PaymentSourceTypes.PAYMENT_REQUEST:
                                this.setState({
                                    step: c.Steps.PAYMENT_REQUEST_INFO,
                                    steps: h.ADD_PAYMENT_REQUEST_STEPS
                                });
                                break;
                            case p.PaymentSourceTypes.GIROPAY:
                                this.setState({
                                    step: c.Steps.ADDRESS,
                                    steps: h.ADD_GIROPAY_STEPS
                                });
                                break;
                            case p.PaymentSourceTypes.PAYSAFE_CARD:
                                this.setState({
                                    step: c.Steps.ADDRESS,
                                    steps: h.ADD_PAYSAFECARD_STEPS
                                });
                                break;
                            case p.PaymentSourceTypes.VENMO:
                                this.setState({
                                    step: c.Steps.VENMO,
                                    steps: h.ADD_VENMO_STEPS
                                })
                        }
                    }, this.handlePaymentSourceAdd = e => {
                        this.setState({
                            step: c.Steps.REVIEW,
                            paymentSourceId: e
                        })
                    }, this.handlePurchase = async () => {
                        let {
                            paymentSources: e,
                            onPurchase: t,
                            isGift: s
                        } = this.props, {
                            paymentSourceId: a
                        } = this.state;
                        if (null != a) try {
                            await t(e[a], s), this.setState({
                                steps: f,
                                step: c.Steps.CONFIRM
                            })
                        } catch (e) {}
                    }, this.handleSelectPlan = () => {
                        let {
                            paymentSources: e
                        } = this.props, t = Object.values(e).length > 0;
                        this.setState({
                            step: t ? c.Steps.REVIEW : c.Steps.PAYMENT_TYPE
                        })
                    };
                    let {
                        defaultPaymentSourceId: t,
                        paymentSources: s,
                        initialStep: a
                    } = e, n = Object.values(s).length > 0, l = a;
                    null == l && (l = n ? c.Steps.REVIEW : c.Steps.PAYMENT_TYPE), this.state = {
                        paymentSourceId: t,
                        steps: n ? h.REVIEW_PAYMENT_STEPS : h.ADD_PAYMENT_STEPS,
                        step: l,
                        errorStep: null
                    }
                }
            }
            S.defaultProps = {
                useShinySubmitButton: !1,
                needsToBeGift: !1,
                isGiftable: !1,
                isGift: !1,
                renderConfirmationBody: p.NOOP_NULL,
                renderConfirmationFooter: p.NOOP_NULL,
                renderSelectPlanBody: p.NOOP_NULL,
                renderSelectPlanFooter: p.NOOP_NULL
            };
            var E = n.forwardRef((e, t) => {
                let [s, n] = (0, l.useStateFromStoresArray)([d.default], () => [d.default.paymentSources, d.default.defaultPaymentSourceId]), r = (0, l.useStateFromStores)([o.default], () => o.default.error), [i, c] = (0, l.useStateFromStoresArray)([u.default], () => [u.default.error, u.default.isAwaitingAuthentication]);
                return (0, a.jsx)(S, {
                    ...e,
                    ref: t,
                    billingError: null != i ? i : r,
                    paymentSources: s,
                    defaultPaymentSourceId: n,
                    isAwaitingAuthentication: c
                })
            })
        },
        803427: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                REVIEW_PAYMENT_STEPS: function() {
                    return U
                },
                ADD_PAYMENT_STEPS: function() {
                    return x
                },
                ADD_CARD_STEPS: function() {
                    return F
                },
                ADD_PAYPAL_STEPS: function() {
                    return G
                },
                ADD_PAYMENT_REQUEST_STEPS: function() {
                    return k
                },
                ADD_GIROPAY_STEPS: function() {
                    return Y
                },
                ADD_PAYSAFECARD_STEPS: function() {
                    return j
                },
                ADD_VENMO_STEPS: function() {
                    return w
                },
                default: function() {
                    return W
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("75777"),
                r = s("498225"),
                i = s("77078"),
                o = s("913144"),
                u = s("850068"),
                d = s("82731"),
                c = s("112679"),
                h = s("102985"),
                p = s("160299"),
                f = s("40597"),
                S = s("926223"),
                E = s("357957"),
                A = s("145131"),
                _ = s("45640"),
                I = s("773336"),
                P = s("159885"),
                C = s("520713"),
                m = s("814915"),
                T = s("518809"),
                N = s("195175"),
                R = s("780569"),
                g = s("490696"),
                y = s("677987"),
                O = s("393172"),
                L = s("574547"),
                M = s("392336"),
                b = s("49111"),
                D = s("782340"),
                v = s("731789"),
                B = s("21744");
            let U = [_.Steps.PAYMENT_TYPE, _.Steps.CREDIT_CARD_INFORMATION, _.Steps.REVIEW],
                x = [_.Steps.PAYMENT_TYPE, _.Steps.CREDIT_CARD_INFORMATION, _.Steps.REVIEW],
                F = [_.Steps.PAYMENT_TYPE, _.Steps.CREDIT_CARD_INFORMATION, _.Steps.ADDRESS, _.Steps.REVIEW],
                G = [_.Steps.PAYMENT_TYPE, _.Steps.PAYPAL, _.Steps.PAYPAL_ADDRESS, _.Steps.REVIEW],
                k = [_.Steps.PAYMENT_TYPE, _.Steps.PAYMENT_REQUEST_INFO, _.Steps.REVIEW],
                Y = [_.Steps.PAYMENT_TYPE, _.Steps.ADDRESS, _.Steps.REVIEW],
                j = [_.Steps.PAYMENT_TYPE, _.Steps.ADDRESS, _.Steps.REVIEW],
                w = [_.Steps.PAYMENT_TYPE, _.Steps.VENMO, _.Steps.VENMO_ADDRESS, _.Steps.REVIEW],
                H = (0, P.cssValueToNumber)(B.innerPadding);
            class V extends n.PureComponent {
                async componentDidMount() {
                    d.createClient();
                    let {
                        onPaymentSourceChange: e,
                        paymentSources: t,
                        defaultPaymentSourceId: s,
                        paymentSourceId: a
                    } = this.props;
                    null != e && e(null != a && a !== s && null != t[a] ? t[a] : null != s && null != t[s] ? t[s] : null);
                    let n = await (0, C.getStripe)();
                    this.setState({
                        stripe: n
                    })
                }
                componentDidUpdate(e) {
                    let {
                        onPaymentSourceChange: t,
                        paymentSources: s,
                        paymentSourceId: a
                    } = this.props;
                    if (e.paymentSourceId !== a && null != a && null != s[a]) null == t || t(s[a])
                }
                componentWillUnmount() {
                    d.teardownClients(), c.clearCardInfo();
                    let {
                        onClearError: e
                    } = this.props;
                    null == e || e(), c.clearError()
                }
                preventDefault(e) {
                    e.preventDefault()
                }
                get disabledTooltip() {
                    let {
                        needsToBeGift: e,
                        isGift: t,
                        isGiftable: s
                    } = this.props;
                    if (!this.state.hasAcceptedNeccessaryTerms) return D.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP;
                    if (e && !t) return s ? D.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY : D.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY_UNGIFTABLE;
                    return null
                }
                renderHeader() {
                    let {
                        renderHeader: e,
                        billingError: t,
                        step: s,
                        steps: a
                    } = this.props, n = a.map(e => ({
                        id: e,
                        label: (0, _.getCrumbLabels)(e)
                    }));
                    return e(s, n, null == (0, _.errorToStep)(t) ? t : null)
                }
                render() {
                    let {
                        size: e,
                        step: t,
                        steps: s,
                        className: n,
                        transitionState: r
                    } = this.props, o = this.stepRenderer[t], u = o.renderBody();
                    return (0, a.jsx)(l.Elements, {
                        options: b.StripeElementsOptions,
                        stripe: this.state.stripe,
                        children: (0, a.jsx)(i.ModalRoot, {
                            size: e,
                            className: n,
                            "aria-label": D.default.Messages.SKU_PAYMENT_STEPS_LABEL,
                            transitionState: r,
                            children: (0, a.jsx)(i.Scroller, {
                                children: (0, a.jsxs)("form", {
                                    className: v.form,
                                    onSubmit: this.preventDefault,
                                    children: [this.renderHeader(), t !== _.Steps.CONFIRM ? (0, a.jsx)("div", {
                                        className: v.divider
                                    }) : null, null != u && (0, a.jsx)(i.ModalContent, {
                                        className: v.modalContent,
                                        children: (0, a.jsx)("div", {
                                            className: v.content,
                                            children: (0, a.jsx)(i.Sequencer, {
                                                step: t,
                                                steps: s,
                                                sideMargin: H,
                                                children: u
                                            })
                                        })
                                    }), o.renderFooter()]
                                })
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hasAcceptedNeccessaryTerms: !1,
                        token: null,
                        confirmingCard: !1,
                        stripe: null
                    }, this.handleToggleIsGift = (e, t) => {
                        let {
                            onIsGiftUpdate: s
                        } = this.props;
                        null == s || s(t)
                    }, this.handlePurchaseTermsChange = e => {
                        this.setState({
                            hasAcceptedNeccessaryTerms: e
                        })
                    }, this.handleReopenPaypal = () => {
                        d.reopenPayPalWindow()
                    }, this.handleReopenVenmo = () => {
                        d.reopenVenmoWindow()
                    }, this.handleCardInfoChange = (e, t) => {
                        o.default.wait(() => c.updateCardInfo(e, t))
                    }, this.handleBillingAddressChange = (e, t) => {
                        o.default.wait(() => c.updateAddressInfo(e, t))
                    }, this.handleCreditCardAdd = async () => {
                        let {
                            billingAddressInfo: e
                        } = this.props, {
                            stripe: t,
                            token: s
                        } = this.state;
                        try {
                            let a = await u.confirmCardPaymentSource(t, s, e);
                            this.props.onPaymentSourceAdd(a.id)
                        } catch (e) {}
                    }, this.handleStripePaymentRequestAdd = async e => {
                        if (c.updateStripePaymentRequest(e), null == e) {
                            this.props.onBack();
                            return
                        }
                        try {
                            let t = await u.createPaymentRequestPaymentSource(e);
                            this.props.onPaymentSourceAdd(t.id)
                        } catch (e) {}
                    }, this.handlePaypalAdd = async () => {
                        let {
                            braintreeEmail: e,
                            braintreeNonce: t,
                            billingAddressInfo: s
                        } = this.props;
                        if (0 !== e.length && null != t) try {
                            let e = await u.createBraintreePaymentSource(t, s);
                            this.props.onPaymentSourceAdd(e.id)
                        } catch (e) {}
                    }, this.handleVenmoAdd = async () => {
                        let {
                            venmoUsername: e,
                            braintreeNonce: t,
                            billingAddressInfo: s
                        } = this.props;
                        if (0 !== e.length && null != t) try {
                            let e = await u.createBraintreePaymentSource(t, s);
                            this.props.onPaymentSourceAdd(e.id)
                        } catch (e) {}
                    }, this.renderBackButton = () => {
                        let {
                            step: e,
                            steps: t,
                            paymentSources: s,
                            onBack: n
                        } = this.props, l = (0, _.getStepIndex)(e, t), r = (0, _.canGoBack)(l, s) ? D.default.Messages.BACK : D.default.Messages.CANCEL;
                        return (0, a.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            className: v.backButton,
                            color: v.backButtonColor,
                            size: v.backButtonSize,
                            onClick: n,
                            children: r
                        })
                    }, this.stepRenderer = {
                        [_.Steps.PAYMENT_TYPE]: {
                            renderBody: () => {
                                let {
                                    hidePersonalInformation: e,
                                    onChoosePaymentType: t,
                                    isGiftable: s,
                                    needsToBeGift: l,
                                    isGift: r
                                } = this.props;
                                return e ? (0, a.jsx)(i.FormErrorBlock, {
                                    className: v.errorBlock,
                                    children: D.default.Messages.BILLING_ERROR_ADD_PAYMENT_SOURCE_STREAMER_MODE
                                }) : (0, a.jsxs)(n.Fragment, {
                                    children: [(0, a.jsx)(m.default, {
                                        className: v.choosePaymentSourceType,
                                        onChooseType: t,
                                        allowStripeRequestPayments: !I.isPlatformEmbedded,
                                        onStripePaymentMethodReceived: this.handleStripePaymentRequestAdd
                                    }), s && (0, a.jsx)(i.Checkbox, {
                                        disabled: l,
                                        className: v.giftToggle,
                                        type: i.Checkbox.Types.INVERTED,
                                        value: r,
                                        onChange: this.handleToggleIsGift,
                                        children: (0, a.jsx)("div", {
                                            className: v.checkboxLabel,
                                            children: D.default.Messages.BILLING_IS_GIFT_PURCHASE
                                        })
                                    })]
                                })
                            },
                            renderFooter: () => (0, a.jsx)(i.ModalFooter, {
                                direction: A.default.Direction.HORIZONTAL,
                                children: this.renderBackButton()
                            })
                        },
                        [_.Steps.PAYMENT_REQUEST_INFO]: {
                            renderBody: () => (0, a.jsx)(y.PaymentRequestStepBody, {
                                className: v.formItem,
                                stripePaymentMethod: this.props.stripePaymentMethod,
                                submitting: this.props.submitting
                            }),
                            renderFooter: () => (0, a.jsx)(i.ModalFooter, {
                                direction: A.default.Direction.HORIZONTAL,
                                children: this.renderBackButton()
                            })
                        },
                        [_.Steps.PAYPAL]: {
                            renderBody: () => (0, a.jsx)(T.default, {
                                className: v.formItem
                            }),
                            renderFooter: () => {
                                let {
                                    submitting: e,
                                    braintreeNonce: t,
                                    braintreeEmail: s,
                                    onPaypalContinue: n,
                                    paypalClient: l
                                } = this.props;
                                return (0, a.jsx)(O.PaypalStepFooter, {
                                    submitting: e || null == l,
                                    braintreeNonce: t,
                                    braintreeEmail: s,
                                    onPaypalContinue: n,
                                    onReopenPaypal: this.handleReopenPaypal,
                                    renderBackButton: this.renderBackButton
                                })
                            }
                        },
                        [_.Steps.VENMO]: {
                            renderBody: () => (0, a.jsx)(N.default, {
                                className: v.formItem
                            }),
                            renderFooter: () => {
                                let {
                                    submitting: e,
                                    braintreeNonce: t,
                                    venmoUsername: s,
                                    onVenmoContinue: n,
                                    venmoClient: l
                                } = this.props;
                                return (0, a.jsx)(M.VenmoStepFooter, {
                                    submitting: e || null == l,
                                    braintreeNonce: t,
                                    venmoUsername: s,
                                    onVenmoContinue: n,
                                    onReopenVenmo: this.handleReopenVenmo,
                                    renderBackButton: this.renderBackButton
                                })
                            }
                        },
                        [_.Steps.CREDIT_CARD_INFORMATION]: {
                            renderBody: () => {
                                let {
                                    billingError: e
                                } = this.props;
                                return (0, a.jsx)(g.CreditCardInformationBody, {
                                    billingError: e,
                                    onCardInfoChange: this.handleCardInfoChange
                                })
                            },
                            renderFooter: () => {
                                let {
                                    isCardInfoValid: e,
                                    onCreditCardContinue: t
                                } = this.props, {
                                    stripe: s,
                                    confirmingCard: n
                                } = this.state, r = async e => {
                                    this.setState({
                                        confirmingCard: !0
                                    });
                                    try {
                                        let a = await u.createCardToken(s, e);
                                        this.setState({
                                            token: a
                                        }), c.clearError(), t()
                                    } catch (e) {} finally {
                                        this.setState({
                                            confirmingCard: !1
                                        })
                                    }
                                };
                                return (0, a.jsx)(l.ElementsConsumer, {
                                    children: t => {
                                        let {
                                            elements: s
                                        } = t;
                                        return (0, a.jsx)(g.CreditCardInformationFooter, {
                                            isCardInfoValid: e,
                                            submitting: n,
                                            renderBackButton: this.renderBackButton,
                                            onCreditCardContinue: () => r(s)
                                        })
                                    }
                                })
                            }
                        },
                        [_.Steps.PAYPAL_ADDRESS]: {
                            renderBody: () => {
                                let {
                                    billingAddressInfo: e,
                                    billingError: t
                                } = this.props;
                                return (0, a.jsx)(R.AddressStepBody, {
                                    billingAddressInfo: e,
                                    billingError: t,
                                    onBillingAddressChange: this.handleBillingAddressChange,
                                    paymentSourceType: b.PaymentSourceTypes.PAYPAL
                                })
                            },
                            renderFooter: () => {
                                let {
                                    isBillingAddressInfoValid: e,
                                    submitting: t
                                } = this.props;
                                return (0, a.jsx)(R.AddressStepFooter, {
                                    isBillingAddressInfoValid: e,
                                    submitting: t,
                                    onContinue: this.handlePaypalAdd,
                                    renderBackButton: this.renderBackButton
                                })
                            }
                        },
                        [_.Steps.VENMO_ADDRESS]: {
                            renderBody: () => {
                                let {
                                    billingAddressInfo: e,
                                    billingError: t
                                } = this.props;
                                return (0, a.jsx)(R.AddressStepBody, {
                                    billingAddressInfo: e,
                                    billingError: t,
                                    onBillingAddressChange: this.handleBillingAddressChange,
                                    paymentSourceType: b.PaymentSourceTypes.VENMO
                                })
                            },
                            renderFooter: () => {
                                let {
                                    isBillingAddressInfoValid: e,
                                    submitting: t
                                } = this.props;
                                return (0, a.jsx)(R.AddressStepFooter, {
                                    isBillingAddressInfoValid: e,
                                    submitting: t,
                                    onContinue: this.handleVenmoAdd,
                                    renderBackButton: this.renderBackButton
                                })
                            }
                        },
                        [_.Steps.ADDRESS]: {
                            renderBody: () => {
                                let {
                                    billingAddressInfo: e,
                                    billingError: t,
                                    steps: s
                                } = this.props;
                                return (0, a.jsx)(R.AddressStepBody, {
                                    billingAddressInfo: e,
                                    billingError: t,
                                    onBillingAddressChange: this.handleBillingAddressChange,
                                    paymentSourceType: s === Y ? b.PaymentSourceTypes.GIROPAY : b.PaymentSourceTypes.CARD
                                })
                            },
                            renderFooter: () => {
                                let {
                                    isBillingAddressInfoValid: e,
                                    submitting: t
                                } = this.props;
                                return (0, a.jsx)(R.AddressStepFooter, {
                                    isBillingAddressInfoValid: e,
                                    submitting: t,
                                    onContinue: this.handleCreditCardAdd,
                                    renderBackButton: this.renderBackButton
                                })
                            }
                        },
                        [_.Steps.REVIEW]: {
                            renderBody: () => {
                                let {
                                    legalNotice: e,
                                    paymentSources: t,
                                    price: s,
                                    hidePersonalInformation: n,
                                    paymentSourceId: l,
                                    onReviewPaymentSourceChange: r,
                                    onReviewPaymentSourceAdd: i,
                                    isGiftable: o,
                                    isGift: u,
                                    needsToBeGift: d
                                } = this.props;
                                return (0, a.jsx)(L.ReviewStepBody, {
                                    legalNotice: e,
                                    paymentSources: t,
                                    price: s,
                                    hidePersonalInformation: n,
                                    paymentSourceId: l,
                                    onPaymentSourceChange: r,
                                    onPaymentSourceAdd: i,
                                    onPurchaseTermsChange: this.handlePurchaseTermsChange,
                                    onToggleIsGift: this.handleToggleIsGift,
                                    isGiftable: o,
                                    isGift: u,
                                    needsToBeGift: d
                                })
                            },
                            renderFooter: () => {
                                let {
                                    canSubmit: e,
                                    submitButtonText: t,
                                    useShinySubmitButton: s,
                                    isPurchasing: n,
                                    paymentSourceId: l,
                                    onPurchase: r,
                                    needsToBeGift: i,
                                    isGift: o,
                                    paymentSources: u
                                } = this.props;
                                return (0, a.jsx)(L.ReviewStepFooter, {
                                    canSubmit: e,
                                    submitButtonText: t,
                                    useShinySubmitButton: s,
                                    isPurchasing: n,
                                    hasAcceptedTerms: this.state.hasAcceptedNeccessaryTerms,
                                    paymentSource: null != l ? u[l] : null,
                                    onPurchase: r,
                                    tooltipText: this.disabledTooltip,
                                    needsToBeGift: i,
                                    isGift: o
                                })
                            }
                        },
                        [_.Steps.CONFIRM]: {
                            renderBody: b.NOOP_NULL,
                            renderFooter: b.NOOP_NULL
                        },
                        [_.Steps.AWAITING_AUTHENTICATION]: {
                            renderBody: () => (0, a.jsx)(i.FormTitle, {
                                className: v.formTitle,
                                children: D.default.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION
                            }),
                            renderFooter: b.NOOP_NULL
                        },
                        ...this.props.extraRenderers
                    }
                }
            }
            V.defaultProps = {
                canSubmit: !0,
                useShinySubmitButton: !1,
                size: i.ModalSize.SMALL,
                billingError: null,
                extraRenderers: {},
                className: v.modal
            };
            var W = r.default.connectStores([E.default, S.default, p.default, h.default, f.default], () => ({
                submitting: p.default.isBusy,
                paymentSources: E.default.paymentSources,
                defaultPaymentSourceId: E.default.defaultPaymentSourceId,
                stripePaymentMethod: S.default.stripePaymentMethod,
                creditCardInfo: S.default.getCreditCardInfo(),
                isCardInfoValid: S.default.isCardInfoValid,
                billingAddressInfo: S.default.getBillingAddressInfo(),
                isBillingAddressInfoValid: S.default.isBillingAddressInfoValid,
                braintreeEmail: S.default.braintreeEmail,
                braintreeNonce: S.default.braintreeNonce,
                venmoUsername: S.default.venmoUsername,
                billingError: S.default.error,
                paypalClient: f.default.getPayPalClient(),
                venmoClient: f.default.getVenmoClient(),
                hidePersonalInformation: h.default.hidePersonalInformation
            }))(V)
        },
        393172: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                PaypalStepFooter: function() {
                    return i
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("77078"),
                l = s("145131"),
                r = s("782340");
            let i = e => {
                let {
                    submitting: t,
                    braintreeNonce: s,
                    braintreeEmail: i,
                    onPaypalContinue: o,
                    onReopenPaypal: u,
                    renderBackButton: d
                } = e, c = 0 !== i.length && null != s;
                return (0, a.jsxs)(n.ModalFooter, {
                    justify: l.default.Justify.BETWEEN,
                    direction: l.default.Direction.HORIZONTAL,
                    children: [d(), (0, a.jsx)(n.Button, {
                        submitting: t,
                        color: c ? n.Button.Colors.BRAND : n.Button.Colors.PRIMARY,
                        onClick: c ? o : u,
                        children: c ? r.default.Messages.NEXT : r.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
                    })]
                })
            }
        },
        574547: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ReviewStepBody: function() {
                    return S
                },
                ReviewStepFooter: function() {
                    return E
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("77078"),
                r = s("812952"),
                i = s("740055"),
                o = s("545876"),
                u = s("181114"),
                d = s("561703"),
                c = s("315585"),
                h = s("153160"),
                p = s("782340"),
                f = s("731789");
            let S = e => {
                    let {
                        legalNotice: t,
                        paymentSources: s,
                        price: u,
                        hidePersonalInformation: S,
                        paymentSourceId: E,
                        isGiftable: A,
                        isGift: _,
                        needsToBeGift: I,
                        onPaymentSourceChange: P,
                        onPaymentSourceAdd: C,
                        onPurchaseTermsChange: m,
                        onToggleIsGift: T
                    } = e, N = [], R = null != E ? s[E] : null;
                    return null != R && R.invalid && N.push((0, a.jsx)(r.default, {
                        icon: c.default,
                        color: r.default.Colors.ERROR,
                        iconSize: r.default.Sizes.NONE,
                        iconClassName: f.invalidIcon,
                        children: p.default.Messages.BILLING_PAYMENT_SOURCE_INVALID
                    }, "source_invalid")), null != u && (u.taxInclusive ? N.push((0, a.jsx)(r.default, {
                        icon: d.default,
                        color: r.default.Colors.PRIMARY,
                        iconSize: r.default.Sizes.LARGE,
                        children: p.default.Messages.BILLING_SALES_TAX_INCLUDED
                    }, "tax_included")) : u.tax > 0 && N.push((0, a.jsx)(r.default, {
                        icon: d.default,
                        color: r.default.Colors.PRIMARY,
                        iconSize: r.default.Sizes.LARGE,
                        children: p.default.Messages.BILLING_SALES_TAX_ADDED.format({
                            tax: (0, h.formatPrice)(u.tax, u.currency)
                        })
                    }, "tax_added"))), (0, a.jsxs)(n.Fragment, {
                        children: [(0, a.jsx)(l.FormTitle, {
                            className: f.formTitle,
                            children: p.default.Messages.BILLING_PAY_FOR_IT_WITH
                        }), (0, a.jsx)(i.default, {
                            paymentSources: Object.values(s),
                            selectedPaymentSourceId: E,
                            hidePersonalInformation: S,
                            onChange: P,
                            onPaymentSourceAdd: C
                        }), N, A && (0, a.jsx)(l.Checkbox, {
                            disabled: I,
                            className: f.giftToggle,
                            type: l.Checkbox.Types.INVERTED,
                            value: _,
                            onChange: T,
                            children: (0, a.jsx)("div", {
                                className: f.checkboxLabel,
                                children: p.default.Messages.BILLING_IS_GIFT_PURCHASE
                            })
                        }), (0, a.jsx)(o.default, {
                            onChange: m,
                            forceShow: !0,
                            className: f.purchaseTerms,
                            finePrint: t
                        })]
                    })
                },
                E = e => {
                    let {
                        canSubmit: t,
                        submitButtonText: s,
                        useShinySubmitButton: n,
                        isPurchasing: r,
                        hasAcceptedTerms: i,
                        paymentSource: o,
                        onPurchase: d,
                        tooltipText: c,
                        needsToBeGift: h,
                        isGift: p
                    } = e, S = null != o && !o.invalid, E = {
                        submitting: r,
                        color: l.Button.Colors.GREEN,
                        disabled: !(i && !(h && !p) && S && t),
                        onClick: d
                    };
                    return (0, a.jsx)(l.ModalFooter, {
                        children: (0, a.jsxs)("div", {
                            className: f.buyButtonTooltipWrapper,
                            children: [E.disabled && null != c ? (0, a.jsx)(l.Tooltip, {
                                text: c,
                                children: e => (0, a.jsx)("div", {
                                    "aria-hidden": !0,
                                    className: f.buyButtonTooltipTarget,
                                    ...e
                                })
                            }) : null, n ? (0, a.jsx)(u.default, {
                                ...E,
                                children: s
                            }) : (0, a.jsx)(l.Button, {
                                type: "submit",
                                ...E,
                                children: s
                            })]
                        })
                    })
                }
        },
        392336: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                VenmoStepFooter: function() {
                    return i
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("77078"),
                l = s("145131"),
                r = s("782340");
            let i = e => {
                let {
                    submitting: t,
                    braintreeNonce: s,
                    venmoUsername: i,
                    onVenmoContinue: o,
                    onReopenVenmo: u,
                    renderBackButton: d
                } = e, c = 0 !== i.length && null != s;
                return (0, a.jsxs)(n.ModalFooter, {
                    justify: l.default.Justify.BETWEEN,
                    direction: l.default.Direction.HORIZONTAL,
                    children: [d(), (0, a.jsx)(n.Button, {
                        submitting: t,
                        color: c ? n.Button.Colors.BRAND : n.Button.Colors.PRIMARY,
                        onClick: c ? o : u,
                        children: c ? r.default.Messages.NEXT : r.default.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO
                    })]
                })
            }
        },
        87657: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("77078"),
                r = s("390236"),
                i = n.memo(function(e) {
                    var t, s, i, o;
                    let {
                        user: u,
                        size: d = l.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": h = !1,
                        ...p
                    } = e, f = n.useContext(r.default);
                    return (0, a.jsx)(l.Avatar, {
                        src: (t = u, s = (0, l.getAvatarSize)(d), i = c, o = f, t.getAvatarURL(o, s, i)),
                        size: d,
                        "aria-label": h ? void 0 : u.username,
                        "aria-hidden": h,
                        ...p
                    })
                })
        },
        749432: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return B
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("427964"),
                r = s.n(l),
                i = s("498225"),
                o = s("638800"),
                u = s("77078"),
                d = s("54239"),
                c = s("736964"),
                h = s("777273"),
                p = s("79112"),
                f = s("87657"),
                S = s("210721"),
                E = s("671484"),
                A = s("27618"),
                _ = s("102985"),
                I = s("843823"),
                P = s("697218"),
                C = s("188525"),
                m = s("145131"),
                T = s("953109"),
                N = s("306160"),
                R = s("659632"),
                g = s("719923"),
                y = s("158998"),
                O = s("49111"),
                L = s("646718"),
                M = s("782340"),
                b = s("673535");
            class D extends n.Component {
                componentWillUnmount() {
                    this._copyModeTimeout.stop()
                }
                get iconSKUId() {
                    let {
                        subscriptionPlan: e,
                        sku: t
                    } = this.props;
                    return null != e ? e.skuId : null != t ? t.id : null
                }
                get headerBlurb() {
                    let e;
                    let {
                        subscriptionPlan: t,
                        hasSentMessage: s,
                        giftMessageError: a,
                        giftRecipient: n
                    } = this.props;
                    if (null != a) return M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
                    if (null == t) return M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_BLURB;
                    let l = s || null != n;
                    return (e = t.interval === L.SubscriptionIntervalTypes.MONTH ? l ? M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : l ? M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                        skuName: (0, g.getTierDisplayName)(t.id),
                        intervalCount: t.intervalCount
                    })
                }
                render() {
                    let e, t;
                    let {
                        application: s,
                        selectedGiftStyle: n,
                        hasSentMessage: l,
                        giftRecipient: r,
                        giftMessageError: i,
                        isSendingMessage: o
                    } = this.props, d = (0, R.isCustomGiftEnabled)(r);
                    return e = d || l && null == i ? M.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != i ? M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : M.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE, t = o ? (0, a.jsx)(u.Spinner, {
                        type: u.SpinnerTypes.PULSING_ELLIPSIS
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            className: null != n ? b.headerCustomGifting : b.header,
                            children: e
                        }), l && null != r && null == i || (0, R.isCustomGiftEnabled)(r) ? this.renderConfirmSentGift() : this.renderRequestSendGift()]
                    }), (0, a.jsxs)(m.default, {
                        direction: m.default.Direction.VERTICAL,
                        align: m.default.Align.CENTER,
                        children: [null != s ? (0, a.jsx)(T.default, {
                            game: s,
                            className: b.icon,
                            size: T.default.Sizes.LARGE,
                            skuId: this.iconSKUId
                        }) : null, t]
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        copyMode: C.default.Modes.DEFAULT
                    }, this._copyModeTimeout = new o.Timeout, this.handleGiftCodeCopy = (e, t) => {
                        let {
                            sku: s
                        } = this.props;
                        null != s && (0, R.trackGiftCodeCopy)(new E.default({
                            code: t,
                            maxUses: 1
                        }), s);
                        try {
                            (0, N.copy)(e), this.setState({
                                copyMode: C.default.Modes.SUCCESS
                            })
                        } catch (e) {
                            this.setState({
                                copyMode: C.default.Modes.ERROR
                            })
                        }
                        this._copyModeTimeout.start(1500, () => {
                            this.setState({
                                copyMode: C.default.Modes.DEFAULT
                            })
                        })
                    }, this.handleInventoryClick = () => {
                        p.default.open(O.UserSettingsSections.INVENTORY), this.props.onClose()
                    }, this.renderGiftCodeSection = () => {
                        let e;
                        let {
                            obscureGiftCode: t,
                            giftCode: s
                        } = this.props;
                        if (null == s) return null;
                        let {
                            copyMode: n
                        } = this.state;
                        switch (n) {
                            case C.default.Modes.SUCCESS:
                                e = M.default.Messages.BILLING_GIFT_COPIED;
                                break;
                            case C.default.Modes.ERROR:
                                e = M.default.Messages.FAILED;
                                break;
                            default:
                                e = M.default.Messages.COPY
                        }
                        return (0, a.jsx)(m.default, {
                            direction: m.default.Direction.VERTICAL,
                            children: (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(u.FormTitle, {
                                    children: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                                }), null != s && (0, a.jsx)(C.default, {
                                    hideMessage: t ? M.default.Messages.GIFT_INVENTORY_HIDDEN : null,
                                    value: (0, R.getGiftCodeURL)(s),
                                    mode: n,
                                    text: e,
                                    onCopy: e => this.handleGiftCodeCopy(e, s),
                                    supportsCopy: N.SUPPORTS_COPY,
                                    className: b.copyInput,
                                    buttonColor: C.default.ButtonColors.LINK,
                                    buttonLook: C.default.ButtonLooks.LINK
                                }), (0, a.jsx)("div", {
                                    className: b.subtext,
                                    children: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                                })]
                            })
                        })
                    }, this.renderRequestSendGift = () => {
                        let {
                            giftCode: e,
                            onClose: t,
                            giftMessageError: s
                        } = this.props;
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                className: b.blurb,
                                children: this.headerBlurb
                            }), null == s && (0, a.jsx)(v, {
                                giftCode: e,
                                onClose: t
                            }), (0, a.jsx)("div", {
                                className: b.divider
                            }), this.renderGiftCodeSection()]
                        })
                    }, this.renderConfirmSentGift = () => {
                        let {
                            giftRecipient: e
                        } = this.props;
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(f.default, {
                                user: e,
                                className: b.giftRecipient,
                                size: u.AvatarSizes.SIZE_80
                            }), (0, a.jsx)(u.Heading, {
                                className: b.giftRecipientName,
                                variant: "heading-md/semibold",
                                children: y.default.getName(e)
                            }), (0, a.jsxs)("div", {
                                className: b.giftRecipientTag,
                                children: [" ", y.default.getUserTag(e)]
                            }), (0, a.jsx)("div", {
                                className: b.giftSentMessage,
                                children: this.headerBlurb
                            })]
                        })
                    }
                }
            }
            let v = e => {
                let {
                    giftCode: t,
                    onClose: s
                } = e;
                n.useEffect(() => {
                    c.default.fetchRelationships(), (0, h.fetchUserAffinities)()
                }, []);
                let [l, o] = n.useState(), [p, E] = n.useState(!1), [_, C] = n.useState(!1), {
                    userAffinities: m,
                    isLoading: T
                } = (0, i.useStateFromStoresObject)([I.default], () => ({
                    userAffinities: I.default.getUserAffinitiesUserIds(),
                    isLoading: I.default.getFetching()
                })), N = Array.from(m.values()), R = (0, i.useStateFromStores)([A.default], () => A.default.getFriendIDs()), g = r.difference(R, N), O = [...N, ...g], L = (0, i.useStateFromStores)([P.default], () => P.default.filter(e => O.includes(e.id) && !e.bot), [O]), D = null == L || 0 === L.length;
                if (D) return null;
                let v = r.sortBy(L, e => O.indexOf(e.id));
                return (0, a.jsxs)("div", {
                    className: b.giftRecipientSection,
                    children: [(0, a.jsx)(u.FormTitle, {
                        children: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                    }), (0, a.jsxs)("div", {
                        className: b.giftRecipient,
                        children: [(0, a.jsx)(u.SearchableSelect, {
                            placeholder: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                            wrapperClassName: b.giftRecipientInputWrapper,
                            className: p ? b.giftRecipientInputError : void 0,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, a.jsx)(f.default, {
                                user: e.value,
                                size: u.AvatarSizes.SIZE_20
                            }),
                            renderLeading: () => T ? (0, a.jsx)(u.Spinner, {
                                type: u.SpinnerTypes.PULSING_ELLIPSIS
                            }) : null,
                            value: l,
                            onChange: e => {
                                o(e), E(!1)
                            },
                            options: v.map(e => ({
                                value: e,
                                label: "".concat(y.default.getUserTag(e))
                            }))
                        }), (0, a.jsx)(u.Button, {
                            disabled: null == l,
                            submitting: _,
                            className: b.sendToRecipientButton,
                            onClick: () => {
                                C(!0), (0, S.sendGiftMessage)(l, t).then(() => {
                                    s(), (0, d.popAllLayers)()
                                }).catch(() => {
                                    E(!0), C(!1)
                                })
                            },
                            children: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                        })]
                    }), (0, a.jsx)("div", {
                        className: p ? b.subtextError : b.subtext,
                        children: p ? M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                    })]
                })
            };
            var B = i.default.connectStores([_.default], () => ({
                obscureGiftCode: _.default.enabled
            }))(D)
        },
        787598: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return Z
                }
            });
            var a, n, l = s("920040"),
                r = s("773670"),
                i = s("462567"),
                o = s("498225"),
                u = s("77078"),
                d = s("913144"),
                c = s("676536"),
                h = s("465527"),
                p = s("703332"),
                f = s("657130"),
                S = s("812952"),
                E = s("846239"),
                A = s("84460"),
                _ = s("791160"),
                I = s("546463"),
                P = s("697218"),
                C = s("758764"),
                m = s("437712"),
                T = s("622839"),
                N = s("552712"),
                R = s("167726"),
                g = s("454589"),
                y = s("145131"),
                O = s("953109"),
                L = s("315585"),
                M = s("599110"),
                b = s("568734"),
                D = s("45640"),
                v = s("773336"),
                B = s("153160"),
                U = s("882941"),
                x = s("271560"),
                F = s("749432"),
                G = s("733835"),
                k = s("391294"),
                Y = s("49111"),
                j = s("782340"),
                w = s("91706");
            (a = n || (n = {})).UNSUPPORTED_OS = "UNSUPPORTED_OS", a.TEST_MODE = "TEST_MODE", a.GIFT_ONLY = "GIFT_ONLY", a.PREORDER = "PREORDER";
            class H extends r.PureComponent {
                getSkuPrice() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
                        {
                            prices: s
                        } = e,
                        {
                            paymentSourceId: a
                        } = t;
                    return null == s ? null : s[null != a ? a : T.NO_PAYMENT_SOURCE]
                }
                componentDidMount() {
                    let {
                        sku: e,
                        skuId: t,
                        applicationId: s
                    } = this.props;
                    null == e ? h.fetchSKU(s, t).catch(e => this.handleClose(e.message)) : M.default.track(Y.AnalyticEvents.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData())
                }
                componentDidUpdate(e, t) {
                    null == e.sku && null != this.props.sku && M.default.track(Y.AnalyticEvents.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData()), this.checkPriceChange(this.getSkuPrice(e, t), this.getSkuPrice())
                }
                checkPriceChange(e, t) {
                    let {
                        sku: s,
                        onClose: a
                    } = this.props;
                    null != e && null != t && e.discount_percent_off !== t.discount_percent_off && d.default.wait(() => {
                        if (null == s) throw Error("Unexpected null SKU");
                        a(Y.PaymentModalPriceChangedError)
                    })
                }
                get closable() {
                    let e = this._paymentModalRef.current;
                    return null != e && e.closable
                }
                get isGiftable() {
                    let {
                        sku: e
                    } = this.props;
                    return null != e && e.isGiftable(this.getPrice())
                }
                get isGift() {
                    return this.props.isGift && this.isGiftable
                }
                getPrice() {
                    let {
                        sku: e,
                        isFetchingSKU: t
                    } = this.props;
                    if (null == e || t) return null;
                    let s = this.getSkuPrice();
                    if (null != s) return {
                        amount: s.amount,
                        tax: s.tax,
                        taxInclusive: s.tax_inclusive,
                        currency: s.currency
                    };
                    let {
                        paymentSourceId: a
                    } = this.state;
                    if (null == a) {
                        let t = e.getPrice();
                        if (null == t) throw Error("Sku Price cannot be null");
                        return {
                            amount: t.amount,
                            tax: 0,
                            taxInclusive: !1,
                            currency: t.currency
                        }
                    }
                    return null
                }
                getBaseAnalyticsData() {
                    let {
                        sku: e,
                        analyticsLocation: t,
                        appContext: s,
                        promotionId: a
                    } = this.props;
                    if (null == e) return {};
                    let n = this.getPrice();
                    return {
                        ...(0, _.default)(e),
                        load_id: this._loadId,
                        payment_type: Y.PurchaseTypeToAnalyticsPaymentType[Y.PurchaseTypes.ONE_TIME],
                        is_gift: this.isGift,
                        client_event_source: s === Y.AppContext.OVERLAY ? Y.AppContext.OVERLAY : null,
                        location: t,
                        price: null != n ? n.amount : null,
                        currency: null != n ? n.currency : null,
                        location_promotion_id: a
                    }
                }
                renderPurchaseWarning() {
                    let {
                        sku: e,
                        isInTestMode: t,
                        isIAP: s,
                        isUserEntitledToSku: a
                    } = this.props;
                    if (null == e) return null;
                    let i = (0, x.nativePlatformTypeToSKUOperatingSystem)((0, v.getPlatform)()),
                        o = [];
                    return (null == i || !e.supportedOperatingSystems.includes(i)) && !s && o.push((0, l.jsx)(S.default, {
                        icon: L.default,
                        iconSize: S.default.Sizes.SMALL,
                        color: S.default.Colors.WARNING,
                        className: w.errorBlock,
                        children: j.default.Messages.APPLICATION_STORE_PURCHASE_GAME_CURRENT_OS_UNSUPPORTED
                    }, n.UNSUPPORTED_OS)), t && o.push((0, l.jsx)(S.default, {
                        icon: L.default,
                        iconSize: S.default.Sizes.SMALL,
                        color: S.default.Colors.WARNING,
                        className: w.errorBlock,
                        children: j.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, n.TEST_MODE)), !0 === a && this.isGiftable && o.push((0, l.jsx)(S.default, {
                        icon: L.default,
                        iconSize: S.default.Sizes.SMALL,
                        color: S.default.Colors.PRIMARY,
                        className: w.errorBlock,
                        children: j.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY
                    }, n.GIFT_ONLY)), e.isPreorder() && o.push((0, l.jsx)(S.default, {
                        icon: L.default,
                        iconSize: S.default.Sizes.SMALL,
                        color: S.default.Colors.PRIMARY,
                        className: w.errorBlock,
                        children: j.default.Messages.APPLICATION_STORE_PURCHASE_WARNING_PREORDER.format({
                            date: (0, U.getReadablePreorderReleaseDate)(e)
                        })
                    }, n.PREORDER)), (0, l.jsx)(r.Fragment, {
                        children: o
                    })
                }
                renderGenericError(e, t) {
                    return null == e && null == t ? null : (0, l.jsx)(u.FormErrorBlock, {
                        className: w.errorBlock,
                        children: null != e ? e.message : null != t ? t.message : null
                    })
                }
                renderDefaultHeader(e, t, s) {
                    let {
                        isIAP: a,
                        application: n,
                        sku: r,
                        purchaseError: i
                    } = this.props;
                    if (null == r || null == n) return null;
                    let o = this.getPrice();
                    return (0, l.jsxs)(u.ModalHeader, {
                        direction: y.default.Direction.VERTICAL,
                        align: y.default.Align.START,
                        separator: !1,
                        children: [(0, l.jsx)(E.default, {
                            application: n,
                            splashSize: 880
                        }), (0, l.jsxs)(y.default, {
                            align: y.default.Align.CENTER,
                            className: w.headerHeader,
                            children: [(0, l.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H4,
                                children: (0, k.getSkuHeaderText)(a, r.type)
                            }), (0, l.jsx)(u.ModalCloseButton, {
                                onClick: () => this.handleClose()
                            })]
                        }), (0, l.jsxs)(y.default, {
                            align: y.default.Align.CENTER,
                            className: w.headerContent,
                            children: [(0, l.jsxs)(y.default, {
                                align: y.default.Align.CENTER,
                                children: [(0, l.jsx)(O.default, {
                                    game: n
                                }), (0, l.jsx)("div", {
                                    className: w.applicationName,
                                    children: r.name
                                })]
                            }), (0, l.jsx)("div", {
                                className: w.price,
                                children: null != o ? (0, B.formatPrice)(o.amount, o.currency) : (0, l.jsx)(u.Spinner, {
                                    type: u.Spinner.Type.PULSING_ELLIPSIS,
                                    className: w.priceSpinner
                                })
                            })]
                        }), this.renderPurchaseWarning(), this.renderGenericError(i, s), t.length > 1 ? (0, l.jsx)(g.default, {
                            activeId: e,
                            breadcrumbs: t,
                            className: w.breadcrumbs
                        }) : null]
                    })
                }
                render() {
                    let {
                        sku: e,
                        isFetchingSKU: t,
                        isPurchasing: s,
                        isEmbeddedIAP: a,
                        purchaseError: n,
                        isUserEntitledToSku: r,
                        forceConfirmationStepOnMount: i,
                        transitionState: o
                    } = this.props;
                    return null == e || t ? (0, l.jsx)(u.Spinner, {}) : (0, l.jsx)(f.default, {
                        ref: this._paymentModalRef,
                        transitionState: o,
                        canSubmit: null != this.getSkuPrice(),
                        needsToBeGift: e.type === Y.SKUTypes.DURABLE_PRIMARY && !0 === r,
                        isGiftable: this.isGiftable,
                        legalNotice: a ? (0, l.jsx)(p.default, {
                            isEmbeddedIAP: a
                        }) : null,
                        isPurchasing: s,
                        purchaseError: n,
                        price: this.getPrice(),
                        size: u.ModalSize.SMALL,
                        onPurchase: this.handlePurchase,
                        onIsGiftUpdate: h.updateSKUPaymentIsGift,
                        onPaymentSourceChange: this.handlePaymentSourceChange,
                        onClose: () => this.handleClose(),
                        onClearError: h.clearPurchaseError,
                        renderHeader: this.renderHeader,
                        renderConfirmationBody: this.renderConfirmation,
                        submitButtonText: this.isGift ? j.default.Messages.APPLICATION_STORE_BUY_GIFT : j.default.Messages.APPLICATION_STORE_BUY,
                        initialStep: i ? D.Steps.CONFIRM : null,
                        onStepChange: this.handleStepChange,
                        isGift: this.isGift
                    })
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.state = {
                        paymentSourceId: null
                    }, this._loadId = (0, i.v4)(), this._stepStartTime = Date.now(), this._flowStartTime = Date.now(), this._paymentModalRef = r.createRef(), this.handlePaymentSourceChange = e => {
                        let {
                            applicationId: t,
                            skuId: s
                        } = this.props;
                        null != e ? (h.fetchPurchasePreview(t, s, e.id), this.setState({
                            paymentSourceId: e.id
                        })) : (h.fetchPurchasePreview(t, s, null), this.setState({
                            paymentSourceId: null
                        }))
                    }, this.handlePurchase = async e => {
                        let {
                            applicationId: t,
                            sku: s
                        } = this.props, a = this.getPrice(), n = null != a ? a.amount : 0, l = null != a ? a.currency : Y.CurrencyCodes.USD;
                        if (null == s) throw Error("SKU is null during purchase");
                        if (!T.default.isPurchasingSKU) try {
                            M.default.track(Y.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                                ...this.getBaseAnalyticsData(),
                                duration_ms: Date.now() - this._flowStartTime
                            }), await h.purchaseSKU(t, s.id, {
                                expectedAmount: n,
                                expectedCurrency: l,
                                paymentSource: e,
                                analyticsLoadId: this._loadId,
                                isGift: this.isGift
                            }), (0, c.acceptPurchaseTerms)()
                        } catch (t) {
                            throw M.default.track(Y.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                                ...this.getBaseAnalyticsData(),
                                payment_gateway: e.type === Y.PaymentSourceTypes.CARD ? Y.PaymentGateways.STRIPE : Y.PaymentGateways.BRAINTREE,
                                payment_source_id: e.id,
                                duration_ms: Date.now() - this._flowStartTime,
                                payment_error_code: t.code
                            }), t
                        }
                    }, this.handleClose = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            {
                                onClose: s
                            } = t.props;
                        s(e)
                    }, this.handleStepChange = (e, t) => {
                        let s = Date.now();
                        M.default.track(Y.AnalyticEvents.PAYMENT_FLOW_STEP, {
                            ...this.getBaseAnalyticsData(),
                            from_step: e,
                            to_step: t,
                            step_duration_ms: s - this._stepStartTime,
                            flow_duration_ms: s - this._flowStartTime
                        }), this._stepStartTime = s, t === D.Steps.CONFIRM && h.showPurchaseConfirmationStep()
                    }, this.renderHeader = (e, t, s) => {
                        let {
                            application: a
                        } = this.props;
                        if (e === D.Steps.CONFIRM) return null != a ? (0, l.jsx)(E.default, {
                            application: a,
                            splashSize: 880
                        }) : null;
                        return this.renderDefaultHeader(e, t, s)
                    }, this.renderConfirmation = () => {
                        let {
                            application: e,
                            sku: t,
                            isIAP: s,
                            giftCode: a
                        } = this.props;
                        if (null == t || null == e) throw Error("No SKU for confirmation step!");
                        return (0, l.jsx)("div", {
                            className: w.confirmContent,
                            children: (0, l.jsxs)(y.default, {
                                direction: y.default.Direction.VERTICAL,
                                children: [(0, l.jsx)(u.ModalCloseButton, {
                                    onClick: () => this.handleClose(),
                                    className: w.confirmCloseButton
                                }), null != a ? (0, l.jsx)(F.default, {
                                    giftCode: a,
                                    application: e,
                                    sku: t,
                                    onClose: () => this.handleClose()
                                }) : (0, l.jsx)(G.default, {
                                    application: e,
                                    sku: t,
                                    isIAP: s,
                                    onClose: () => this.handleClose()
                                })]
                            })
                        })
                    }
                }
            }
            let V = r.forwardRef((e, t) => {
                var s, a;
                let {
                    applicationId: n,
                    skuId: r,
                    ...i
                } = e, u = (0, o.useStateFromStores)([I.default], () => I.default.getGame(n)), d = (0, b.hasFlag)(null !== (s = null == u ? void 0 : u.flags) && void 0 !== s ? s : 0, Y.ApplicationFlags.EMBEDDED) && (0, b.hasFlag)(null !== (a = null == u ? void 0 : u.flags) && void 0 !== a ? a : 0, Y.ApplicationFlags.EMBEDDED_IAP), [c, h, p, f, S, E, _, g, y] = (0, o.useStateFromStoresArray)([T.default], () => [T.default.getPricesForSku(r), T.default.isPurchasingSKU, T.default.error, T.default.analyticsLocation, T.default.promotionId, T.default.giftCode, T.default.isGift, T.default.isIAP, T.default.forceConfirmationStepOnMount]), [O, L] = (0, o.useStateFromStoresArray)([N.default], () => [N.default.get(r), N.default.isFetching(r)]), M = (0, o.useStateFromStores)([A.default, R.default], () => R.default.inTestModeForApplication(n) || A.default.inDevModeForApplication(n), [n]), D = (0, o.useStateFromStores)([m.default, P.default], () => m.default.isEntitledToSku(P.default.getCurrentUser(), r, n)), v = (0, o.useStateFromStores)([C.default], () => C.default.error);
                return (0, l.jsx)(H, {
                    ...i,
                    application: u,
                    applicationId: n,
                    skuId: r,
                    prices: c,
                    isPurchasing: h,
                    purchaseError: null != v ? v : p,
                    analyticsLocation: f,
                    promotionId: S,
                    isIAP: g,
                    giftCode: E,
                    isGift: _,
                    forceConfirmationStepOnMount: y,
                    sku: O,
                    isFetchingSKU: L,
                    isInTestMode: M,
                    isUserEntitledToSku: D,
                    isEmbeddedIAP: d,
                    ref: t
                })
            });
            class W extends r.PureComponent {
                close() {
                    null != this._skuPaymentModalRef.current && this._skuPaymentModalRef.current.closable && this.handleClose()
                }
                handleClose() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    this.props.onClose(e)
                }
                render() {
                    return (0, l.jsx)(V, {
                        ...this.props,
                        ref: this._skuPaymentModalRef,
                        onClose: () => this.handleClose()
                    })
                }
                constructor(...e) {
                    super(...e), this._skuPaymentModalRef = r.createRef()
                }
            }
            var Z = W
        },
        562366: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ReceiptIcon: function() {
                    return r
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("912557"),
                l = s("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: s = 24,
                    color: r = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M21 21.934V2.067a1 1 0 0 0-1.268-.964l-2.51.698a3 3 0 0 1-1.454.038l-3.117-.693a3 3 0 0 0-1.302 0l-3.117.693A3 3 0 0 1 6.778 1.8l-2.51-.698A1 1 0 0 0 3 2.066v19.868a1 1 0 0 0 1.268.964l2.51-.697a3 3 0 0 1 1.454-.038l3.117.692c.429.096.873.096 1.302 0l3.117-.692a3 3 0 0 1 1.454.038l2.51.697A1 1 0 0 0 21 21.935ZM7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm-1 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm8-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        909469: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                PAYMENT_SOURCE_NAMES: function() {
                    return h
                },
                getLocalizedPricingNotice: function() {
                    return f
                },
                getLocalizedPricingBannerStrings: function() {
                    return S
                }
            });
            var a = s("714480"),
                n = s("988415"),
                l = s("701909"),
                r = s("153160"),
                i = s("49111"),
                o = s("809924"),
                u = s("782340");
            let d = new Set([o.CurrencyCodes.ARS, o.CurrencyCodes.CLP, o.CurrencyCodes.COP]),
                c = new Set([o.CurrencyCodes.USD, o.CurrencyCodes.JPY]),
                h = {
                    [i.PaymentSourceTypes.CARD]: () => u.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
                    [i.PaymentSourceTypes.PAYPAL]: () => u.default.Messages.PAYMENT_SOURCE_PAYPAL,
                    [i.PaymentSourceTypes.SOFORT]: () => u.default.Messages.PAYMENT_SOURCE_SOFORT,
                    [i.PaymentSourceTypes.GIROPAY]: () => u.default.Messages.PAYMENT_SOURCE_GIROPAY,
                    [i.PaymentSourceTypes.PRZELEWY24]: () => u.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
                    [i.PaymentSourceTypes.PAYSAFE_CARD]: () => u.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
                    [i.PaymentSourceTypes.GCASH]: () => u.default.Messages.PAYMENT_SOURCE_GCASH,
                    [i.PaymentSourceTypes.GRABPAY_MY]: () => u.default.Messages.PAYMENT_SOURCE_GRABPAY,
                    [i.PaymentSourceTypes.MOMO_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                    [i.PaymentSourceTypes.VENMO]: () => u.default.Messages.PAYMENT_SOURCE_VENMO,
                    [i.PaymentSourceTypes.KAKAOPAY]: () => u.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
                    [i.PaymentSourceTypes.GOPAY_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                    [i.PaymentSourceTypes.BANCONTACT]: () => u.default.Messages.PAYMENT_SOURCE_BANCONTACT,
                    [i.PaymentSourceTypes.EPS]: () => u.default.Messages.PAYMENT_SOURCE_EPS,
                    [i.PaymentSourceTypes.IDEAL]: () => u.default.Messages.PAYMENT_SOURCE_IDEAL,
                    [i.PaymentSourceTypes.CASH_APP]: () => u.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                },
                p = [i.PaymentSourceTypes.EPS, i.PaymentSourceTypes.BANCONTACT, i.PaymentSourceTypes.IDEAL, i.PaymentSourceTypes.SOFORT, i.PaymentSourceTypes.GIROPAY, i.PaymentSourceTypes.SEPA_DEBIT, i.PaymentSourceTypes.PAYSAFE_CARD],
                f = (e, t, s, a) => {
                    if (null == e) return "";
                    let l = (0, n.getI18NCountryName)(e);
                    if (t === o.CurrencyCodes.EUR) return s ? u.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: l
                    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    });
                    return a ? u.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: l
                    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: l
                    })
                },
                S = e => {
                    let {
                        localizedPricingPromo: t,
                        subscription: s,
                        forceSingleLine: a = !1,
                        userLocale: f
                    } = e, {
                        countryCode: S,
                        amount: A,
                        currency: _,
                        paymentSourceTypes: I
                    } = t, P = 0 !== I.length, C = E(S), m = (0, r.formatPrice)(A, _, {
                        style: "currency",
                        currency: _,
                        currencyDisplay: "symbol",
                        localeOverride: C
                    }), T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                        helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: _.toUpperCase(),
                        localizedPriceWithCurrencySymbol: m
                    });
                    if (c.has(_) && (T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: m
                        })), d.has(_) && (T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: _.toUpperCase(),
                            localizedPriceWithCurrencySymbol: m
                        })), null != s && !s.hasPremiumNitroMonthly && (T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: _.toUpperCase()
                        })), _ === o.CurrencyCodes.EUR && (T = a ? u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, n.getI18NCountryName)(S),
                            currencyISOCode: _.toUpperCase(),
                            helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: _.toUpperCase(),
                            helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        })), P) {
                        let e = p.filter(e => I.includes(e)),
                            t = I.filter(e => !p.includes(e)),
                            s = [...e, ...t],
                            a = s.slice(0, 2).map(e => {
                                var t, s;
                                return null !== (s = null === (t = h[e]) || void 0 === t ? void 0 : t.call(h)) && void 0 !== s ? s : u.default.Messages.PAYMENT_SOURCE_UNKNOWN
                            });
                        I.length >= 3 && a.push(u.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        let n = new Intl.ListFormat(f, {
                            style: "short",
                            type: "conjunction"
                        });
                        T = u.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING),
                            paymentMethods: n.format(a)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: u.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, n.getI18NCountryName)(S)
                        }),
                        localizedPricingBannerBody: T,
                        localizedPricingBannerLinkOnly: u.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: l.default.getArticleURL(i.HelpdeskArticles.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: P ? void 0 : u.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                E = e => {
                    let t = a.default.find(t => t.alpha2 === e);
                    return null == t ? void 0 : t.localeForICU
                }
        },
        210721: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                AnimationState: function() {
                    return n
                },
                getGiftAnimationData: function() {
                    return p
                },
                sendGiftMessage: function() {
                    return f
                }
            });
            var a, n, l = s("161179"),
                r = s.n(l),
                i = s("450911"),
                o = s("819689"),
                u = s("884351"),
                d = s("42203"),
                c = s("659632"),
                h = s("78345");
            (a = n || (n = {})).ACTION = "action", a.LOOP = "loop", a.IDLE = "idle";
            let p = (e, t) => {
                    let a;
                    switch (e) {
                        case h.PremiumGiftStyles.SNOWGLOBE:
                            a = () => s.el("729943").then(s.t.bind(s, "729943", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case h.PremiumGiftStyles.BOX:
                            a = () => s.el("5754").then(s.t.bind(s, "5754", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case h.PremiumGiftStyles.CUP:
                            a = () => s.el("132631").then(s.t.bind(s, "132631", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case h.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case n.IDLE:
                                    a = () => s.el("376058").then(s.t.bind(s, "376058", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case n.LOOP:
                                    a = () => s.el("588315").then(s.t.bind(s, "588315", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    a = () => s.el("31805").then(s.t.bind(s, "31805", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case h.PremiumGiftStyles.CAKE:
                            switch (t) {
                                case n.IDLE:
                                    a = () => s.el("298104").then(s.t.bind(s, "298104", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case n.LOOP:
                                    a = () => s.el("482376").then(s.t.bind(s, "482376", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    a = () => s.el("278985").then(s.t.bind(s, "278985", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case h.PremiumGiftStyles.CHEST:
                            switch (t) {
                                case n.IDLE:
                                    a = () => s.el("748733").then(s.t.bind(s, "748733", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case n.LOOP:
                                    a = () => s.el("294698").then(s.t.bind(s, "294698", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    a = () => s.el("726130").then(s.t.bind(s, "726130", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case h.PremiumGiftStyles.COFFEE:
                            switch (t) {
                                case n.IDLE:
                                    a = () => s.el("179448").then(s.t.bind(s, "179448", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case n.LOOP:
                                    a = () => s.el("772933").then(s.t.bind(s, "772933", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    a = () => s.el("461087").then(s.t.bind(s, "461087", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        default:
                            a = () => Promise.resolve("Error: Invalid giftStyle")
                    }
                    return a
                },
                f = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let s = await i.default.openPrivateChannel(e.id).then(e => {
                            let t = d.default.getChannel(e);
                            if (r(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        a = (0, c.getGiftCodeURL)(t);
                    return o.default.sendMessage(s.id, u.default.parse(s, a), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        434976: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var a = [{
                label: "Alberta",
                value: "AB"
            }, {
                label: "British Columbia",
                value: "BC"
            }, {
                label: "Manitoba",
                value: "MB"
            }, {
                label: "New Brunswick",
                value: "NB"
            }, {
                label: "Newfoundland and Labrador",
                value: "NL"
            }, {
                label: "Nova Scotia",
                value: "NS"
            }, {
                label: "Ontario",
                value: "ON"
            }, {
                label: "Prince Edward Island",
                value: "PE"
            }, {
                label: "Quebec",
                value: "QC"
            }, {
                label: "Saskatchewan",
                value: "SK"
            }, {
                label: "Northwest Territories",
                value: "NT"
            }, {
                label: "Nunavut",
                value: "NU"
            }, {
                label: "Yukon",
                value: "YT"
            }]
        },
        722303: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return a
                }
            });
            var a = [{
                label: "Alabama",
                value: "AL"
            }, {
                label: "Alaska",
                value: "AK"
            }, {
                label: "American Samoa",
                value: "AS"
            }, {
                label: "Arizona",
                value: "AZ"
            }, {
                label: "Arkansas",
                value: "AR"
            }, {
                label: "Armed Forces: Americas",
                value: "AA"
            }, {
                label: "Armed Forces: Europe",
                value: "AE"
            }, {
                label: "Armed Forces: Pacific",
                value: "AP"
            }, {
                label: "California",
                value: "CA"
            }, {
                label: "Colorado",
                value: "CO"
            }, {
                label: "Connecticut",
                value: "CT"
            }, {
                label: "Delaware",
                value: "DE"
            }, {
                label: "District Of Columbia",
                value: "DC"
            }, {
                label: "Federated States Of Micronesia",
                value: "FM"
            }, {
                label: "Florida",
                value: "FL"
            }, {
                label: "Georgia",
                value: "GA"
            }, {
                label: "Guam",
                value: "GU"
            }, {
                label: "Hawaii",
                value: "HI"
            }, {
                label: "Idaho",
                value: "ID"
            }, {
                label: "Illinois",
                value: "IL"
            }, {
                label: "Indiana",
                value: "IN"
            }, {
                label: "Iowa",
                value: "IA"
            }, {
                label: "Kansas",
                value: "KS"
            }, {
                label: "Kentucky",
                value: "KY"
            }, {
                label: "Louisiana",
                value: "LA"
            }, {
                label: "Maine",
                value: "ME"
            }, {
                label: "Marshall Islands",
                value: "MH"
            }, {
                label: "Maryland",
                value: "MD"
            }, {
                label: "Massachusetts",
                value: "MA"
            }, {
                label: "Michigan",
                value: "MI"
            }, {
                label: "Minnesota",
                value: "MN"
            }, {
                label: "Mississippi",
                value: "MS"
            }, {
                label: "Missouri",
                value: "MO"
            }, {
                label: "Montana",
                value: "MT"
            }, {
                label: "Nebraska",
                value: "NE"
            }, {
                label: "Nevada",
                value: "NV"
            }, {
                label: "New Hampshire",
                value: "NH"
            }, {
                label: "New Jersey",
                value: "NJ"
            }, {
                label: "New Mexico",
                value: "NM"
            }, {
                label: "New York",
                value: "NY"
            }, {
                label: "North Carolina",
                value: "NC"
            }, {
                label: "North Dakota",
                value: "ND"
            }, {
                label: "Northern Mariana Islands",
                value: "MP"
            }, {
                label: "Ohio",
                value: "OH"
            }, {
                label: "Oklahoma",
                value: "OK"
            }, {
                label: "Oregon",
                value: "OR"
            }, {
                label: "Palau",
                value: "PW"
            }, {
                label: "Pennsylvania",
                value: "PA"
            }, {
                label: "Puerto Rico",
                value: "PR"
            }, {
                label: "Rhode Island",
                value: "RI"
            }, {
                label: "South Carolina",
                value: "SC"
            }, {
                label: "South Dakota",
                value: "SD"
            }, {
                label: "Tennessee",
                value: "TN"
            }, {
                label: "Texas",
                value: "TX"
            }, {
                label: "Utah",
                value: "UT"
            }, {
                label: "Vermont",
                value: "VT"
            }, {
                label: "Virgin Islands",
                value: "VI"
            }, {
                label: "Virginia",
                value: "VA"
            }, {
                label: "Washington",
                value: "WA"
            }, {
                label: "West Virginia",
                value: "WV"
            }, {
                label: "Wisconsin",
                value: "WI"
            }, {
                label: "Wyoming",
                value: "WY"
            }]
        },
        671484: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var a = s("377849"),
                n = s.n(a),
                l = s("666038"),
                r = s("568734"),
                i = s("797647"),
                o = s("646718");
            let u = Object.freeze({
                PAYMENT_SOURCE_REQUIRED: 1,
                EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                NOT_SELF_REDEEMABLE: 4
            });
            class d extends l.default {
                static createFromServer(e) {
                    return new d({
                        userId: null != e.user ? e.user.id : null,
                        code: e.code,
                        skuId: e.sku_id,
                        uses: e.uses,
                        maxUses: e.max_uses,
                        storeListingId: null != e.store_listing ? e.store_listing.id : null,
                        expiresAt: null != e.expires_at ? n(e.expires_at) : null,
                        redeemed: e.redeemed,
                        subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : e.subscription_plan_id,
                        subscriptionPlan: null != e.subscription_plan ? i.default.createFromServer(e.subscription_plan) : null,
                        revoked: !1,
                        entitlementBranches: null != e.entitlement_branches ? e.entitlement_branches : null,
                        flags: null != e.flags ? e.flags : 0,
                        giftStyle: e.gift_style,
                        subscriptionTrial: null != e.subscription_trial ? {
                            id: e.subscription_trial.id,
                            interval: e.subscription_trial.interval,
                            intervalCount: e.subscription_trial.interval_count,
                            skuId: e.subscription_trial.sku_id
                        } : null,
                        promotion: null != e.promotion ? {
                            id: e.promotion.id,
                            startDate: e.promotion.start_date,
                            endDate: e.promotion.end_date,
                            inboundHeaderText: e.promotion.inbound_header_text,
                            inboundBodyText: e.promotion.inbound_body_text,
                            inboundHelpCenterLink: e.promotion.inbound_help_center_link
                        } : null
                    })
                }
                isExpired() {
                    let e = this.expiresAt;
                    return null != e && n().isAfter(e)
                }
                get hasMultipleCopies() {
                    return this.maxUses > 1
                }
                get isClaimed() {
                    return this.uses >= this.maxUses
                }
                get remainingUses() {
                    return this.maxUses - this.uses
                }
                get isSubscription() {
                    return null != this.subscriptionPlanId
                }
                get premiumSubscriptionType() {
                    return this.isSubscription && o.PremiumSubscriptionSKUToPremiumType[this.skuId] || null
                }
                get isSelfRedeemable() {
                    return !(0, r.hasFlag)(this.flags, u.NOT_SELF_REDEEMABLE)
                }
                get isExistingPremiumSubscriptionDisallowed() {
                    return (0, r.hasFlag)(this.flags, u.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
                }
                get analyticsData() {
                    return {
                        gift_code: this.code,
                        gift_code_max_uses: this.maxUses
                    }
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.userId = e.userId, this.code = e.code, this.skuId = e.skuId, this.uses = e.uses, this.maxUses = e.maxUses, this.expiresAt = e.expiresAt, this.redeemed = e.redeemed, this.storeListingId = e.storeListingId, this.subscriptionPlanId = e.subscriptionPlanId, this.subscriptionPlan = e.subscriptionPlan, this.revoked = e.revoked, this.entitlementBranches = e.entitlementBranches, this.flags = e.flags, this.subscriptionTrial = e.subscriptionTrial, this.promotion = e.promotion, this.giftStyle = e.giftStyle
                }
            }
        },
        843823: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("498225"),
                n = s("913144"),
                l = s("27618");
            let r = !1,
                i = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                o = {
                    ...i
                };

            function u() {
                o.affinityUserIds = new Set(o.userAffinities.map(e => e.user_id).filter(e => !l.default.isBlocked(e)))
            }
            class d extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(l.default), null != e && (o.userAffinities = e.userAffinities, o.affinityUserIds = new Set(e.affinityUserIds), o.lastFetched = e.lastFetched), this.syncWith([l.default], u)
                }
                needsRefresh() {
                    return Date.now() - o.lastFetched > 864e5
                }
                getFetching() {
                    return r
                }
                getState() {
                    return o
                }
                getUserAffinities() {
                    return o.userAffinities
                }
                getUserAffinitiesUserIds() {
                    return o.affinityUserIds
                }
            }
            d.displayName = "UserAffinitiesStore", d.persistKey = "UserAffinitiesStore", d.migrations = [e => null];
            var c = new d(n.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: s
                    } = e;
                    o.userAffinities = null !== (t = s.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), u(), r = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    r = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    r = !1
                },
                LOGOUT: function() {
                    o = {
                        ...i
                    }
                }
            })
        },
        188525: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                CopyInputModes: function() {
                    return h
                },
                default: function() {
                    return f
                }
            });
            var a = s("920040"),
                n = s("773670"),
                l = s("575482"),
                r = s.n(l),
                i = s("77078"),
                o = s("474293"),
                u = s("145131"),
                d = s("782340"),
                c = s("8463");
            let h = {
                DEFAULT: "default",
                SUCCESS: "success",
                ERROR: "error"
            };
            class p extends n.PureComponent {
                select() {
                    var e;
                    null === (e = this.inputRef.current) || void 0 === e || e.select()
                }
                renderInput(e) {
                    var t;
                    let {
                        value: s,
                        mode: n
                    } = this.props, l = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
                    return (0, a.jsx)("input", {
                        className: r((0, o.getClass)(c, "input", n), {
                            [c.inputHidden]: e
                        }),
                        ref: this.inputRef,
                        type: "text",
                        value: s,
                        onClick: this.handleInputClick,
                        readOnly: !0,
                        "aria-labelledby": l
                    })
                }
                render() {
                    let e;
                    let {
                        text: t = d.default.Messages.COPY,
                        mode: s,
                        hideMessage: n,
                        className: l,
                        buttonLook: p
                    } = this.props, f = null != n;
                    switch (s) {
                        case h.SUCCESS:
                            e = i.ButtonColors.GREEN;
                            break;
                        case h.ERROR:
                            e = i.ButtonColors.RED;
                            break;
                        default:
                            e = this.props.buttonColor
                    }
                    return (0, a.jsx)(i.FocusRing, {
                        focusTarget: this.inputRef,
                        ringTarget: this.containerRef,
                        children: (0, a.jsx)("div", {
                            className: r((0, o.getClass)(c, "copyInput", s), l),
                            ref: this.containerRef,
                            children: (0, a.jsxs)(u.default, {
                                className: c.layout,
                                children: [(0, a.jsxs)(u.default, {
                                    className: c.inputWrapper,
                                    children: [this.renderInput(f), f ? (0, a.jsx)("div", {
                                        className: c.hiddenMessage,
                                        children: n
                                    }) : null]
                                }), (0, a.jsx)(u.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, a.jsx)(i.Button, {
                                        className: c.button,
                                        onClick: this.handleButtonClick,
                                        size: i.ButtonSizes.MIN,
                                        color: e,
                                        look: p,
                                        children: t
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.inputRef = n.createRef(), this.containerRef = n.createRef(), this.handleButtonClick = () => {
                        this.select();
                        let {
                            onCopy: e,
                            value: t
                        } = this.props;
                        e(t)
                    }, this.handleInputClick = () => {
                        this.select()
                    }
                }
            }
            p.contextType = i.FormContext, p.defaultProps = {
                supportsCopy: !0,
                buttonColor: i.ButtonColors.PRIMARY,
                buttonLook: i.ButtonLooks.FILLED,
                mode: h.DEFAULT
            }, p.Modes = h, p.ButtonColors = i.ButtonColors, p.ButtonLooks = i.ButtonLooks;
            var f = p
        },
        561703: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("469563"),
                l = s("562366"),
                r = s("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: s = 16,
                        color: n = "currentColor",
                        foreground: l,
                        ...i
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: s,
                        viewBox: "0 0 18 20",
                        children: (0, a.jsx)("path", {
                            className: l,
                            fill: n,
                            d: "M15,15H3V13H15Zm0-4H3V9H15Zm0-4H3V5H15ZM0,20l1.5-1.5L3,20l1.5-1.5L6,20l1.5-1.5L9,20l1.5-1.5L12,20l1.5-1.5L15,20l1.5-1.5L18,20V0L16.5,1.5,15,0,13.5,1.5,12,0,10.5,1.5,9,0,7.5,1.5,6,0,4.5,1.5,3,0,1.5,1.5,0,0Z"
                        })
                    })
                }, l.ReceiptIcon)
        },
        315585: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var a = s("920040");
            s("773670");
            var n = s("75196");

            function l(e) {
                let {
                    width: t = 14,
                    height: s = 14,
                    color: l = "currentColor",
                    foreground: r,
                    ...i
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, n.default)(i),
                    width: t,
                    height: s,
                    viewBox: "0 0 14 14",
                    children: (0, a.jsx)("path", {
                        className: r,
                        fill: l,
                        d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
                    })
                })
            }
        }
    }
]);