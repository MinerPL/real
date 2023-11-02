(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["79017"], {
        878005: function(e, t, s) {
            "use strict";
            e.exports = s.p + "ddaba4373c0aabfff967.png"
        },
        777273: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                fetchUserAffinities: function() {
                    return l
                }
            });
            var n = s("872717"),
                r = s("913144"),
                a = s("843823"),
                i = s("49111");

            function l() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return a.default.needsRefresh() ? (r.default.dispatch({
                    type: "LOAD_USER_AFFINITIES"
                }), n.default.get({
                    url: i.Endpoints.USER_AFFINITIES,
                    retries: e ? 3 : 0,
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    r.default.dispatch({
                        type: "LOAD_USER_AFFINITIES_SUCCESS",
                        affinities: t
                    })
                }, () => {
                    r.default.dispatch({
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
            var n = s("37983"),
                r = s("884691"),
                a = s("446674"),
                i = s("850068"),
                l = s("112679"),
                o = s("926223"),
                u = s("758764"),
                d = s("357957"),
                c = s("45640"),
                p = s("803427"),
                S = s("49111");
            let h = [c.Steps.REVIEW, c.Steps.CONFIRM];
            class f extends r.Component {
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
                    !d.default.hasFetchedPaymentSources && i.fetchPaymentSources()
                }
                componentDidUpdate(e, t) {
                    let {
                        onStepChange: s
                    } = this.props, {
                        step: n
                    } = this.state;
                    n !== t.step && (this._hasChangedSteps = !0, null != s && s(t.step, n))
                }
                static getDerivedStateFromProps(e, t) {
                    let {
                        billingError: s,
                        isAwaitingAuthentication: n
                    } = e, {
                        errorStep: r
                    } = t, a = {};
                    if (null == s) null != r && (a.errorStep = null);
                    else {
                        let e = (0, c.errorToStep)(s);
                        null != e && e !== t.errorStep && (a.step = e, a.errorStep = e)
                    }
                    return null == t.paymentSourceId && null != e.defaultPaymentSourceId && (a.paymentSourceId = e.defaultPaymentSourceId), n ? a.step = c.Steps.AWAITING_AUTHENTICATION : t.step === c.Steps.AWAITING_AUTHENTICATION && (null != s ? a.step = c.Steps.REVIEW : a.step = c.Steps.CONFIRM), a
                }
                render() {
                    let {
                        isPurchasing: e,
                        canSubmit: t,
                        submitButtonText: s,
                        useShinySubmitButton: r,
                        legalNotice: a,
                        renderHeader: i,
                        onPaymentSourceChange: l,
                        price: o,
                        onClearError: u,
                        size: d,
                        renderConfirmationBody: S,
                        renderConfirmationFooter: h,
                        className: f,
                        isGift: E,
                        isGiftable: _,
                        needsToBeGift: A,
                        onIsGiftUpdate: P,
                        transitionState: I
                    } = this.props, C = {
                        [c.Steps.CONFIRM]: {
                            renderBody: S,
                            renderFooter: h
                        },
                        [c.Steps.SELECT_PLAN]: {
                            renderBody: () => this.props.renderSelectPlanBody(this.handleSelectPlan),
                            renderFooter: () => this.props.renderSelectPlanFooter()
                        }
                    }, {
                        step: m,
                        paymentSourceId: T
                    } = this.state, R = this.stepsToRender;
                    return (0, n.jsx)(p.default, {
                        transitionState: I,
                        className: f,
                        isPurchasing: e,
                        canSubmit: t,
                        submitButtonText: s,
                        useShinySubmitButton: r,
                        legalNotice: a,
                        renderHeader: i,
                        onPaymentSourceChange: l,
                        price: o,
                        onClearError: u,
                        size: d,
                        extraRenderers: C,
                        step: m,
                        steps: R,
                        paymentSourceId: T,
                        isGiftable: _,
                        isGift: E,
                        needsToBeGift: A,
                        onIsGiftUpdate: P,
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
                            steps: p.ADD_PAYMENT_STEPS,
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
                            steps: n
                        } = this.state, r = this.stepsToRender, a = (0, c.getStepIndex)(s, r);
                        if (a > 0) {
                            let e = r[a - 1],
                                t = e === c.Steps.PAYMENT_TYPE;
                            t && l.clearError(), this.setState({
                                step: e,
                                steps: t ? p.ADD_PAYMENT_STEPS : n
                            })
                        } else if ((0, c.canGoBack)(a, e)) {
                            let {
                                defaultPaymentSourceId: e
                            } = this.props;
                            this.setState({
                                step: c.Steps.REVIEW,
                                steps: p.REVIEW_PAYMENT_STEPS,
                                paymentSourceId: e
                            })
                        } else t()
                    }, this.handleChoosePaymentType = e => {
                        switch (e) {
                            case S.PaymentSourceTypes.PAYPAL:
                                this.setState({
                                    step: c.Steps.PAYPAL,
                                    steps: p.ADD_PAYPAL_STEPS
                                });
                                break;
                            case S.PaymentSourceTypes.CARD:
                                this.setState({
                                    step: c.Steps.CREDIT_CARD_INFORMATION,
                                    steps: p.ADD_CARD_STEPS
                                });
                                break;
                            case S.PaymentSourceTypes.PAYMENT_REQUEST:
                                this.setState({
                                    step: c.Steps.PAYMENT_REQUEST_INFO,
                                    steps: p.ADD_PAYMENT_REQUEST_STEPS
                                });
                                break;
                            case S.PaymentSourceTypes.GIROPAY:
                                this.setState({
                                    step: c.Steps.ADDRESS,
                                    steps: p.ADD_GIROPAY_STEPS
                                });
                                break;
                            case S.PaymentSourceTypes.PAYSAFE_CARD:
                                this.setState({
                                    step: c.Steps.ADDRESS,
                                    steps: p.ADD_PAYSAFECARD_STEPS
                                });
                                break;
                            case S.PaymentSourceTypes.VENMO:
                                this.setState({
                                    step: c.Steps.VENMO,
                                    steps: p.ADD_VENMO_STEPS
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
                            paymentSourceId: n
                        } = this.state;
                        if (null != n) try {
                            await t(e[n], s), this.setState({
                                steps: h,
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
                        initialStep: n
                    } = e, r = Object.values(s).length > 0, a = n;
                    null == a && (a = r ? c.Steps.REVIEW : c.Steps.PAYMENT_TYPE), this.state = {
                        paymentSourceId: t,
                        steps: r ? p.REVIEW_PAYMENT_STEPS : p.ADD_PAYMENT_STEPS,
                        step: a,
                        errorStep: null
                    }
                }
            }
            f.defaultProps = {
                useShinySubmitButton: !1,
                needsToBeGift: !1,
                isGiftable: !1,
                isGift: !1,
                renderConfirmationBody: S.NOOP_NULL,
                renderConfirmationFooter: S.NOOP_NULL,
                renderSelectPlanBody: S.NOOP_NULL,
                renderSelectPlanFooter: S.NOOP_NULL
            };
            var E = r.forwardRef((e, t) => {
                let [s, r] = (0, a.useStateFromStoresArray)([d.default], () => [d.default.paymentSources, d.default.defaultPaymentSourceId]), i = (0, a.useStateFromStores)([o.default], () => o.default.error), [l, c] = (0, a.useStateFromStoresArray)([u.default], () => [u.default.error, u.default.isAwaitingAuthentication]);
                return (0, n.jsx)(f, {
                    ...e,
                    ref: t,
                    billingError: null != l ? l : i,
                    paymentSources: s,
                    defaultPaymentSourceId: r,
                    isAwaitingAuthentication: c
                })
            })
        },
        803427: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                REVIEW_PAYMENT_STEPS: function() {
                    return F
                },
                ADD_PAYMENT_STEPS: function() {
                    return x
                },
                ADD_CARD_STEPS: function() {
                    return G
                },
                ADD_PAYPAL_STEPS: function() {
                    return Y
                },
                ADD_PAYMENT_REQUEST_STEPS: function() {
                    return v
                },
                ADD_GIROPAY_STEPS: function() {
                    return k
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
            var n = s("37983"),
                r = s("884691"),
                a = s("41092"),
                i = s("446674"),
                l = s("77078"),
                o = s("913144"),
                u = s("850068"),
                d = s("82731"),
                c = s("112679"),
                p = s("102985"),
                S = s("160299"),
                h = s("40597"),
                f = s("926223"),
                E = s("357957"),
                _ = s("145131"),
                A = s("45640"),
                P = s("773336"),
                I = s("159885"),
                C = s("520713"),
                m = s("814915"),
                T = s("518809"),
                R = s("195175"),
                N = s("780569"),
                g = s("490696"),
                y = s("677987"),
                O = s("393172"),
                L = s("574547"),
                M = s("392336"),
                D = s("49111"),
                B = s("782340"),
                U = s("36662"),
                b = s("258179");
            let F = [A.Steps.PAYMENT_TYPE, A.Steps.CREDIT_CARD_INFORMATION, A.Steps.REVIEW],
                x = [A.Steps.PAYMENT_TYPE, A.Steps.CREDIT_CARD_INFORMATION, A.Steps.REVIEW],
                G = [A.Steps.PAYMENT_TYPE, A.Steps.CREDIT_CARD_INFORMATION, A.Steps.ADDRESS, A.Steps.REVIEW],
                Y = [A.Steps.PAYMENT_TYPE, A.Steps.PAYPAL, A.Steps.PAYPAL_ADDRESS, A.Steps.REVIEW],
                v = [A.Steps.PAYMENT_TYPE, A.Steps.PAYMENT_REQUEST_INFO, A.Steps.REVIEW],
                k = [A.Steps.PAYMENT_TYPE, A.Steps.ADDRESS, A.Steps.REVIEW],
                j = [A.Steps.PAYMENT_TYPE, A.Steps.ADDRESS, A.Steps.REVIEW],
                w = [A.Steps.PAYMENT_TYPE, A.Steps.VENMO, A.Steps.VENMO_ADDRESS, A.Steps.REVIEW],
                H = (0, I.cssValueToNumber)(b.innerPadding);
            class V extends r.PureComponent {
                async componentDidMount() {
                    d.createClient();
                    let {
                        onPaymentSourceChange: e,
                        paymentSources: t,
                        defaultPaymentSourceId: s,
                        paymentSourceId: n
                    } = this.props;
                    null != e && e(null != n && n !== s && null != t[n] ? t[n] : null != s && null != t[s] ? t[s] : null);
                    let r = await (0, C.getStripe)();
                    this.setState({
                        stripe: r
                    })
                }
                componentDidUpdate(e) {
                    let {
                        onPaymentSourceChange: t,
                        paymentSources: s,
                        paymentSourceId: n
                    } = this.props;
                    if (e.paymentSourceId !== n && null != n && null != s[n]) null == t || t(s[n])
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
                    if (!this.state.hasAcceptedNeccessaryTerms) return B.default.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP;
                    if (e && !t) return s ? B.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY : B.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY_UNGIFTABLE;
                    return null
                }
                renderHeader() {
                    let {
                        renderHeader: e,
                        billingError: t,
                        step: s,
                        steps: n
                    } = this.props, r = n.map(e => ({
                        id: e,
                        label: (0, A.getCrumbLabels)(e)
                    }));
                    return e(s, r, null == (0, A.errorToStep)(t) ? t : null)
                }
                render() {
                    let {
                        size: e,
                        step: t,
                        steps: s,
                        className: r,
                        transitionState: i
                    } = this.props, o = this.stepRenderer[t], u = o.renderBody();
                    return (0, n.jsx)(a.Elements, {
                        options: D.StripeElementsOptions,
                        stripe: this.state.stripe,
                        children: (0, n.jsx)(l.ModalRoot, {
                            size: e,
                            className: r,
                            "aria-label": B.default.Messages.SKU_PAYMENT_STEPS_LABEL,
                            transitionState: i,
                            children: (0, n.jsx)(l.Scroller, {
                                children: (0, n.jsxs)("form", {
                                    className: U.form,
                                    onSubmit: this.preventDefault,
                                    children: [this.renderHeader(), t !== A.Steps.CONFIRM ? (0, n.jsx)("div", {
                                        className: U.divider
                                    }) : null, null != u && (0, n.jsx)(l.ModalContent, {
                                        className: U.modalContent,
                                        children: (0, n.jsx)("div", {
                                            className: U.content,
                                            children: (0, n.jsx)(l.Sequencer, {
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
                            let n = await u.confirmCardPaymentSource(t, s, e);
                            this.props.onPaymentSourceAdd(n.id)
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
                            onBack: r
                        } = this.props, a = (0, A.getStepIndex)(e, t), i = (0, A.canGoBack)(a, s) ? B.default.Messages.BACK : B.default.Messages.CANCEL;
                        return (0, n.jsx)(l.Button, {
                            look: l.Button.Looks.LINK,
                            className: U.backButton,
                            color: U.backButtonColor,
                            size: U.backButtonSize,
                            onClick: r,
                            children: i
                        })
                    }, this.stepRenderer = {
                        [A.Steps.PAYMENT_TYPE]: {
                            renderBody: () => {
                                let {
                                    hidePersonalInformation: e,
                                    onChoosePaymentType: t,
                                    isGiftable: s,
                                    needsToBeGift: a,
                                    isGift: i
                                } = this.props;
                                return e ? (0, n.jsx)(l.FormErrorBlock, {
                                    className: U.errorBlock,
                                    children: B.default.Messages.BILLING_ERROR_ADD_PAYMENT_SOURCE_STREAMER_MODE
                                }) : (0, n.jsxs)(r.Fragment, {
                                    children: [(0, n.jsx)(m.default, {
                                        className: U.choosePaymentSourceType,
                                        onChooseType: t,
                                        allowStripeRequestPayments: !P.isPlatformEmbedded,
                                        onStripePaymentMethodReceived: this.handleStripePaymentRequestAdd
                                    }), s && (0, n.jsx)(l.Checkbox, {
                                        disabled: a,
                                        className: U.giftToggle,
                                        type: l.Checkbox.Types.INVERTED,
                                        value: i,
                                        onChange: this.handleToggleIsGift,
                                        children: (0, n.jsx)("div", {
                                            className: U.checkboxLabel,
                                            children: B.default.Messages.BILLING_IS_GIFT_PURCHASE
                                        })
                                    })]
                                })
                            },
                            renderFooter: () => (0, n.jsx)(l.ModalFooter, {
                                direction: _.default.Direction.HORIZONTAL,
                                children: this.renderBackButton()
                            })
                        },
                        [A.Steps.PAYMENT_REQUEST_INFO]: {
                            renderBody: () => (0, n.jsx)(y.PaymentRequestStepBody, {
                                className: U.formItem,
                                stripePaymentMethod: this.props.stripePaymentMethod,
                                submitting: this.props.submitting
                            }),
                            renderFooter: () => (0, n.jsx)(l.ModalFooter, {
                                direction: _.default.Direction.HORIZONTAL,
                                children: this.renderBackButton()
                            })
                        },
                        [A.Steps.PAYPAL]: {
                            renderBody: () => (0, n.jsx)(T.default, {
                                className: U.formItem
                            }),
                            renderFooter: () => {
                                let {
                                    submitting: e,
                                    braintreeNonce: t,
                                    braintreeEmail: s,
                                    onPaypalContinue: r,
                                    paypalClient: a
                                } = this.props;
                                return (0, n.jsx)(O.PaypalStepFooter, {
                                    submitting: e || null == a,
                                    braintreeNonce: t,
                                    braintreeEmail: s,
                                    onPaypalContinue: r,
                                    onReopenPaypal: this.handleReopenPaypal,
                                    renderBackButton: this.renderBackButton
                                })
                            }
                        },
                        [A.Steps.VENMO]: {
                            renderBody: () => (0, n.jsx)(R.default, {
                                className: U.formItem
                            }),
                            renderFooter: () => {
                                let {
                                    submitting: e,
                                    braintreeNonce: t,
                                    venmoUsername: s,
                                    onVenmoContinue: r,
                                    venmoClient: a
                                } = this.props;
                                return (0, n.jsx)(M.VenmoStepFooter, {
                                    submitting: e || null == a,
                                    braintreeNonce: t,
                                    venmoUsername: s,
                                    onVenmoContinue: r,
                                    onReopenVenmo: this.handleReopenVenmo,
                                    renderBackButton: this.renderBackButton
                                })
                            }
                        },
                        [A.Steps.CREDIT_CARD_INFORMATION]: {
                            renderBody: () => {
                                let {
                                    billingError: e
                                } = this.props;
                                return (0, n.jsx)(g.CreditCardInformationBody, {
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
                                    confirmingCard: r
                                } = this.state, i = async e => {
                                    this.setState({
                                        confirmingCard: !0
                                    });
                                    try {
                                        let n = await u.createCardToken(s, e);
                                        this.setState({
                                            token: n
                                        }), c.clearError(), t()
                                    } catch (e) {} finally {
                                        this.setState({
                                            confirmingCard: !1
                                        })
                                    }
                                };
                                return (0, n.jsx)(a.ElementsConsumer, {
                                    children: t => {
                                        let {
                                            elements: s
                                        } = t;
                                        return (0, n.jsx)(g.CreditCardInformationFooter, {
                                            isCardInfoValid: e,
                                            submitting: r,
                                            renderBackButton: this.renderBackButton,
                                            onCreditCardContinue: () => i(s)
                                        })
                                    }
                                })
                            }
                        },
                        [A.Steps.PAYPAL_ADDRESS]: {
                            renderBody: () => {
                                let {
                                    billingAddressInfo: e,
                                    billingError: t
                                } = this.props;
                                return (0, n.jsx)(N.AddressStepBody, {
                                    billingAddressInfo: e,
                                    billingError: t,
                                    onBillingAddressChange: this.handleBillingAddressChange,
                                    paymentSourceType: D.PaymentSourceTypes.PAYPAL
                                })
                            },
                            renderFooter: () => {
                                let {
                                    isBillingAddressInfoValid: e,
                                    submitting: t
                                } = this.props;
                                return (0, n.jsx)(N.AddressStepFooter, {
                                    isBillingAddressInfoValid: e,
                                    submitting: t,
                                    onContinue: this.handlePaypalAdd,
                                    renderBackButton: this.renderBackButton
                                })
                            }
                        },
                        [A.Steps.VENMO_ADDRESS]: {
                            renderBody: () => {
                                let {
                                    billingAddressInfo: e,
                                    billingError: t
                                } = this.props;
                                return (0, n.jsx)(N.AddressStepBody, {
                                    billingAddressInfo: e,
                                    billingError: t,
                                    onBillingAddressChange: this.handleBillingAddressChange,
                                    paymentSourceType: D.PaymentSourceTypes.VENMO
                                })
                            },
                            renderFooter: () => {
                                let {
                                    isBillingAddressInfoValid: e,
                                    submitting: t
                                } = this.props;
                                return (0, n.jsx)(N.AddressStepFooter, {
                                    isBillingAddressInfoValid: e,
                                    submitting: t,
                                    onContinue: this.handleVenmoAdd,
                                    renderBackButton: this.renderBackButton
                                })
                            }
                        },
                        [A.Steps.ADDRESS]: {
                            renderBody: () => {
                                let {
                                    billingAddressInfo: e,
                                    billingError: t,
                                    steps: s
                                } = this.props;
                                return (0, n.jsx)(N.AddressStepBody, {
                                    billingAddressInfo: e,
                                    billingError: t,
                                    onBillingAddressChange: this.handleBillingAddressChange,
                                    paymentSourceType: s === k ? D.PaymentSourceTypes.GIROPAY : D.PaymentSourceTypes.CARD
                                })
                            },
                            renderFooter: () => {
                                let {
                                    isBillingAddressInfoValid: e,
                                    submitting: t
                                } = this.props;
                                return (0, n.jsx)(N.AddressStepFooter, {
                                    isBillingAddressInfoValid: e,
                                    submitting: t,
                                    onContinue: this.handleCreditCardAdd,
                                    renderBackButton: this.renderBackButton
                                })
                            }
                        },
                        [A.Steps.REVIEW]: {
                            renderBody: () => {
                                let {
                                    legalNotice: e,
                                    paymentSources: t,
                                    price: s,
                                    hidePersonalInformation: r,
                                    paymentSourceId: a,
                                    onReviewPaymentSourceChange: i,
                                    onReviewPaymentSourceAdd: l,
                                    isGiftable: o,
                                    isGift: u,
                                    needsToBeGift: d
                                } = this.props;
                                return (0, n.jsx)(L.ReviewStepBody, {
                                    legalNotice: e,
                                    paymentSources: t,
                                    price: s,
                                    hidePersonalInformation: r,
                                    paymentSourceId: a,
                                    onPaymentSourceChange: i,
                                    onPaymentSourceAdd: l,
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
                                    isPurchasing: r,
                                    paymentSourceId: a,
                                    onPurchase: i,
                                    needsToBeGift: l,
                                    isGift: o,
                                    paymentSources: u
                                } = this.props;
                                return (0, n.jsx)(L.ReviewStepFooter, {
                                    canSubmit: e,
                                    submitButtonText: t,
                                    useShinySubmitButton: s,
                                    isPurchasing: r,
                                    hasAcceptedTerms: this.state.hasAcceptedNeccessaryTerms,
                                    paymentSource: null != a ? u[a] : null,
                                    onPurchase: i,
                                    tooltipText: this.disabledTooltip,
                                    needsToBeGift: l,
                                    isGift: o
                                })
                            }
                        },
                        [A.Steps.CONFIRM]: {
                            renderBody: D.NOOP_NULL,
                            renderFooter: D.NOOP_NULL
                        },
                        [A.Steps.AWAITING_AUTHENTICATION]: {
                            renderBody: () => (0, n.jsx)(l.FormTitle, {
                                className: U.formTitle,
                                children: B.default.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION
                            }),
                            renderFooter: D.NOOP_NULL
                        },
                        ...this.props.extraRenderers
                    }
                }
            }
            V.defaultProps = {
                canSubmit: !0,
                useShinySubmitButton: !1,
                size: l.ModalSize.SMALL,
                billingError: null,
                extraRenderers: {},
                className: U.modal
            };
            var W = i.default.connectStores([E.default, f.default, S.default, p.default, h.default], () => ({
                submitting: S.default.isBusy,
                paymentSources: E.default.paymentSources,
                defaultPaymentSourceId: E.default.defaultPaymentSourceId,
                stripePaymentMethod: f.default.stripePaymentMethod,
                creditCardInfo: f.default.getCreditCardInfo(),
                isCardInfoValid: f.default.isCardInfoValid,
                billingAddressInfo: f.default.getBillingAddressInfo(),
                isBillingAddressInfoValid: f.default.isBillingAddressInfoValid,
                braintreeEmail: f.default.braintreeEmail,
                braintreeNonce: f.default.braintreeNonce,
                venmoUsername: f.default.venmoUsername,
                billingError: f.default.error,
                paypalClient: h.default.getPayPalClient(),
                venmoClient: h.default.getVenmoClient(),
                hidePersonalInformation: p.default.hidePersonalInformation
            }))(V)
        },
        393172: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                PaypalStepFooter: function() {
                    return l
                }
            });
            var n = s("37983");
            s("884691");
            var r = s("77078"),
                a = s("145131"),
                i = s("782340");
            let l = e => {
                let {
                    submitting: t,
                    braintreeNonce: s,
                    braintreeEmail: l,
                    onPaypalContinue: o,
                    onReopenPaypal: u,
                    renderBackButton: d
                } = e, c = 0 !== l.length && null != s;
                return (0, n.jsxs)(r.ModalFooter, {
                    justify: a.default.Justify.BETWEEN,
                    direction: a.default.Direction.HORIZONTAL,
                    children: [d(), (0, n.jsx)(r.Button, {
                        submitting: t,
                        color: c ? r.Button.Colors.BRAND : r.Button.Colors.PRIMARY,
                        onClick: c ? o : u,
                        children: c ? i.default.Messages.NEXT : i.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL
                    })]
                })
            }
        },
        574547: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                ReviewStepBody: function() {
                    return f
                },
                ReviewStepFooter: function() {
                    return E
                }
            });
            var n = s("37983"),
                r = s("884691"),
                a = s("77078"),
                i = s("812952"),
                l = s("740055"),
                o = s("545876"),
                u = s("181114"),
                d = s("561703"),
                c = s("315585"),
                p = s("153160"),
                S = s("782340"),
                h = s("36662");
            let f = e => {
                    let {
                        legalNotice: t,
                        paymentSources: s,
                        price: u,
                        hidePersonalInformation: f,
                        paymentSourceId: E,
                        isGiftable: _,
                        isGift: A,
                        needsToBeGift: P,
                        onPaymentSourceChange: I,
                        onPaymentSourceAdd: C,
                        onPurchaseTermsChange: m,
                        onToggleIsGift: T
                    } = e, R = [], N = null != E ? s[E] : null;
                    return null != N && N.invalid && R.push((0, n.jsx)(i.default, {
                        icon: c.default,
                        color: i.default.Colors.ERROR,
                        iconSize: i.default.Sizes.NONE,
                        iconClassName: h.invalidIcon,
                        children: S.default.Messages.BILLING_PAYMENT_SOURCE_INVALID
                    }, "source_invalid")), null != u && (u.taxInclusive ? R.push((0, n.jsx)(i.default, {
                        icon: d.default,
                        color: i.default.Colors.PRIMARY,
                        iconSize: i.default.Sizes.LARGE,
                        children: S.default.Messages.BILLING_SALES_TAX_INCLUDED
                    }, "tax_included")) : u.tax > 0 && R.push((0, n.jsx)(i.default, {
                        icon: d.default,
                        color: i.default.Colors.PRIMARY,
                        iconSize: i.default.Sizes.LARGE,
                        children: S.default.Messages.BILLING_SALES_TAX_ADDED.format({
                            tax: (0, p.formatPrice)(u.tax, u.currency)
                        })
                    }, "tax_added"))), (0, n.jsxs)(r.Fragment, {
                        children: [(0, n.jsx)(a.FormTitle, {
                            className: h.formTitle,
                            children: S.default.Messages.BILLING_PAY_FOR_IT_WITH
                        }), (0, n.jsx)(l.default, {
                            paymentSources: Object.values(s),
                            selectedPaymentSourceId: E,
                            hidePersonalInformation: f,
                            onChange: I,
                            onPaymentSourceAdd: C
                        }), R, _ && (0, n.jsx)(a.Checkbox, {
                            disabled: P,
                            className: h.giftToggle,
                            type: a.Checkbox.Types.INVERTED,
                            value: A,
                            onChange: T,
                            children: (0, n.jsx)("div", {
                                className: h.checkboxLabel,
                                children: S.default.Messages.BILLING_IS_GIFT_PURCHASE
                            })
                        }), (0, n.jsx)(o.default, {
                            onChange: m,
                            forceShow: !0,
                            className: h.purchaseTerms,
                            finePrint: t
                        })]
                    })
                },
                E = e => {
                    let {
                        canSubmit: t,
                        submitButtonText: s,
                        useShinySubmitButton: r,
                        isPurchasing: i,
                        hasAcceptedTerms: l,
                        paymentSource: o,
                        onPurchase: d,
                        tooltipText: c,
                        needsToBeGift: p,
                        isGift: S
                    } = e, f = null != o && !o.invalid, E = {
                        submitting: i,
                        color: a.Button.Colors.GREEN,
                        disabled: !(l && !(p && !S) && f && t),
                        onClick: d
                    };
                    return (0, n.jsx)(a.ModalFooter, {
                        children: (0, n.jsxs)("div", {
                            className: h.buyButtonTooltipWrapper,
                            children: [E.disabled && null != c ? (0, n.jsx)(a.Tooltip, {
                                text: c,
                                children: e => (0, n.jsx)("div", {
                                    "aria-hidden": !0,
                                    className: h.buyButtonTooltipTarget,
                                    ...e
                                })
                            }) : null, r ? (0, n.jsx)(u.default, {
                                ...E,
                                children: s
                            }) : (0, n.jsx)(a.Button, {
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
                    return l
                }
            });
            var n = s("37983");
            s("884691");
            var r = s("77078"),
                a = s("145131"),
                i = s("782340");
            let l = e => {
                let {
                    submitting: t,
                    braintreeNonce: s,
                    venmoUsername: l,
                    onVenmoContinue: o,
                    onReopenVenmo: u,
                    renderBackButton: d
                } = e, c = 0 !== l.length && null != s;
                return (0, n.jsxs)(r.ModalFooter, {
                    justify: a.default.Justify.BETWEEN,
                    direction: a.default.Direction.HORIZONTAL,
                    children: [d(), (0, n.jsx)(r.Button, {
                        submitting: t,
                        color: c ? r.Button.Colors.BRAND : r.Button.Colors.PRIMARY,
                        onClick: c ? o : u,
                        children: c ? i.default.Messages.NEXT : i.default.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO
                    })]
                })
            }
        },
        87657: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var n = s("37983"),
                r = s("884691"),
                a = s("77078"),
                i = s("390236"),
                l = r.memo(function(e) {
                    var t, s, l, o;
                    let {
                        user: u,
                        size: d = a.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": p = !1,
                        ...S
                    } = e, h = r.useContext(i.default);
                    return (0, n.jsx)(a.Avatar, {
                        src: (t = u, s = (0, a.getAvatarSize)(d), l = c, o = h, t.getAvatarURL(o, s, l)),
                        size: d,
                        "aria-label": p ? void 0 : u.username,
                        "aria-hidden": p,
                        ...S
                    })
                })
        },
        749432: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return b
                }
            });
            var n = s("37983"),
                r = s("884691"),
                a = s("917351"),
                i = s.n(a),
                l = s("446674"),
                o = s("862337"),
                u = s("77078"),
                d = s("54239"),
                c = s("736964"),
                p = s("777273"),
                S = s("79112"),
                h = s("87657"),
                f = s("210721"),
                E = s("671484"),
                _ = s("27618"),
                A = s("102985"),
                P = s("843823"),
                I = s("697218"),
                C = s("188525"),
                m = s("145131"),
                T = s("953109"),
                R = s("306160"),
                N = s("659632"),
                g = s("719923"),
                y = s("158998"),
                O = s("49111"),
                L = s("646718"),
                M = s("782340"),
                D = s("146948");
            class B extends r.Component {
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
                        giftMessageError: n,
                        giftRecipient: r
                    } = this.props;
                    if (null != n) return M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
                    if (null == t) return M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_BLURB;
                    let a = s || null != r;
                    return (e = t.interval === L.SubscriptionIntervalTypes.MONTH ? a ? M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : a ? M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                        skuName: (0, g.getTierDisplayName)(t.id),
                        intervalCount: t.intervalCount
                    })
                }
                render() {
                    let e, t;
                    let {
                        application: s,
                        selectedGiftStyle: r,
                        hasSentMessage: a,
                        giftRecipient: i,
                        giftMessageError: l,
                        isSendingMessage: o
                    } = this.props, d = (0, N.isCustomGiftEnabled)(i);
                    return e = d || a && null == l ? M.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != l ? M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : M.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE, t = o ? (0, n.jsx)(u.Spinner, {
                        type: u.SpinnerTypes.PULSING_ELLIPSIS
                    }) : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(u.Heading, {
                            variant: "heading-lg/semibold",
                            className: null != r ? D.headerCustomGifting : D.header,
                            children: e
                        }), a && null != i && null == l || (0, N.isCustomGiftEnabled)(i) ? this.renderConfirmSentGift() : this.renderRequestSendGift()]
                    }), (0, n.jsxs)(m.default, {
                        direction: m.default.Direction.VERTICAL,
                        align: m.default.Align.CENTER,
                        children: [null != s ? (0, n.jsx)(T.default, {
                            game: s,
                            className: D.icon,
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
                        null != s && (0, N.trackGiftCodeCopy)(new E.default({
                            code: t,
                            maxUses: 1
                        }), s);
                        try {
                            (0, R.copy)(e), this.setState({
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
                        S.default.open(O.UserSettingsSections.INVENTORY), this.props.onClose()
                    }, this.renderGiftCodeSection = () => {
                        let e;
                        let {
                            obscureGiftCode: t,
                            giftCode: s
                        } = this.props;
                        if (null == s) return null;
                        let {
                            copyMode: r
                        } = this.state;
                        switch (r) {
                            case C.default.Modes.SUCCESS:
                                e = M.default.Messages.BILLING_GIFT_COPIED;
                                break;
                            case C.default.Modes.ERROR:
                                e = M.default.Messages.FAILED;
                                break;
                            default:
                                e = M.default.Messages.COPY
                        }
                        return (0, n.jsx)(m.default, {
                            direction: m.default.Direction.VERTICAL,
                            children: (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(u.FormTitle, {
                                    children: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK
                                }), null != s && (0, n.jsx)(C.default, {
                                    hideMessage: t ? M.default.Messages.GIFT_INVENTORY_HIDDEN : null,
                                    value: (0, N.getGiftCodeURL)(s),
                                    mode: r,
                                    text: e,
                                    onCopy: e => this.handleGiftCodeCopy(e, s),
                                    supportsCopy: R.SUPPORTS_COPY,
                                    className: D.copyInput,
                                    buttonColor: C.default.ButtonColors.LINK,
                                    buttonLook: C.default.ButtonLooks.LINK
                                }), (0, n.jsx)("div", {
                                    className: D.subtext,
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
                        return (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("div", {
                                className: D.blurb,
                                children: this.headerBlurb
                            }), null == s && (0, n.jsx)(U, {
                                giftCode: e,
                                onClose: t
                            }), (0, n.jsx)("div", {
                                className: D.divider
                            }), this.renderGiftCodeSection()]
                        })
                    }, this.renderConfirmSentGift = () => {
                        let {
                            giftRecipient: e
                        } = this.props;
                        return (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(h.default, {
                                user: e,
                                className: D.giftRecipient,
                                size: u.AvatarSizes.SIZE_80
                            }), (0, n.jsx)(u.Heading, {
                                className: D.giftRecipientName,
                                variant: "heading-md/semibold",
                                children: y.default.getName(e)
                            }), (0, n.jsxs)("div", {
                                className: D.giftRecipientTag,
                                children: [" ", y.default.getUserTag(e)]
                            }), (0, n.jsx)("div", {
                                className: D.giftSentMessage,
                                children: this.headerBlurb
                            })]
                        })
                    }
                }
            }
            let U = e => {
                let {
                    giftCode: t,
                    onClose: s
                } = e;
                r.useEffect(() => {
                    c.default.fetchRelationships(), (0, p.fetchUserAffinities)()
                }, []);
                let [a, o] = r.useState(), [S, E] = r.useState(!1), [A, C] = r.useState(!1), {
                    userAffinities: m,
                    isLoading: T
                } = (0, l.useStateFromStoresObject)([P.default], () => ({
                    userAffinities: P.default.getUserAffinitiesUserIds(),
                    isLoading: P.default.getFetching()
                })), R = Array.from(m.values()), N = (0, l.useStateFromStores)([_.default], () => _.default.getFriendIDs()), g = i.difference(N, R), O = [...R, ...g], L = (0, l.useStateFromStores)([I.default], () => I.default.filter(e => O.includes(e.id) && !e.bot), [O]), B = null == L || 0 === L.length;
                if (B) return null;
                let U = i.sortBy(L, e => O.indexOf(e.id));
                return (0, n.jsxs)("div", {
                    className: D.giftRecipientSection,
                    children: [(0, n.jsx)(u.FormTitle, {
                        children: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL
                    }), (0, n.jsxs)("div", {
                        className: D.giftRecipient,
                        children: [(0, n.jsx)(u.SearchableSelect, {
                            placeholder: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                            wrapperClassName: D.giftRecipientInputWrapper,
                            className: S ? D.giftRecipientInputError : void 0,
                            renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, n.jsx)(h.default, {
                                user: e.value,
                                size: u.AvatarSizes.SIZE_20
                            }),
                            renderLeading: () => T ? (0, n.jsx)(u.Spinner, {
                                type: u.SpinnerTypes.PULSING_ELLIPSIS
                            }) : null,
                            value: a,
                            onChange: e => {
                                o(e), E(!1)
                            },
                            options: U.map(e => ({
                                value: e,
                                label: "".concat(y.default.getUserTag(e))
                            }))
                        }), (0, n.jsx)(u.Button, {
                            disabled: null == a,
                            submitting: A,
                            className: D.sendToRecipientButton,
                            onClick: () => {
                                C(!0), (0, f.sendGiftMessage)(a, t).then(() => {
                                    s(), (0, d.popAllLayers)()
                                }).catch(() => {
                                    E(!0), C(!1)
                                })
                            },
                            children: M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                        })]
                    }), (0, n.jsx)("div", {
                        className: S ? D.subtextError : D.subtext,
                        children: S ? M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : M.default.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
                    })]
                })
            };
            var b = l.default.connectStores([A.default], () => ({
                obscureGiftCode: A.default.enabled
            }))(B)
        },
        787598: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return z
                }
            });
            var n, r, a = s("37983"),
                i = s("884691"),
                l = s("748820"),
                o = s("446674"),
                u = s("77078"),
                d = s("913144"),
                c = s("676536"),
                p = s("465527"),
                S = s("703332"),
                h = s("657130"),
                f = s("812952"),
                E = s("846239"),
                _ = s("84460"),
                A = s("791160"),
                P = s("546463"),
                I = s("697218"),
                C = s("758764"),
                m = s("437712"),
                T = s("622839"),
                R = s("552712"),
                N = s("167726"),
                g = s("454589"),
                y = s("145131"),
                O = s("953109"),
                L = s("315585"),
                M = s("599110"),
                D = s("568734"),
                B = s("45640"),
                U = s("773336"),
                b = s("153160"),
                F = s("882941"),
                x = s("271560"),
                G = s("749432"),
                Y = s("733835"),
                v = s("391294"),
                k = s("49111"),
                j = s("782340"),
                w = s("184048");
            (n = r || (r = {})).UNSUPPORTED_OS = "UNSUPPORTED_OS", n.TEST_MODE = "TEST_MODE", n.GIFT_ONLY = "GIFT_ONLY", n.PREORDER = "PREORDER";
            class H extends i.PureComponent {
                getSkuPrice() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
                        {
                            prices: s
                        } = e,
                        {
                            paymentSourceId: n
                        } = t;
                    return null == s ? null : s[null != n ? n : T.NO_PAYMENT_SOURCE]
                }
                componentDidMount() {
                    let {
                        sku: e,
                        skuId: t,
                        applicationId: s
                    } = this.props;
                    null == e ? p.fetchSKU(s, t).catch(e => this.handleClose(e.message)) : M.default.track(k.AnalyticEvents.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData())
                }
                componentDidUpdate(e, t) {
                    null == e.sku && null != this.props.sku && M.default.track(k.AnalyticEvents.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData()), this.checkPriceChange(this.getSkuPrice(e, t), this.getSkuPrice())
                }
                checkPriceChange(e, t) {
                    let {
                        sku: s,
                        onClose: n
                    } = this.props;
                    null != e && null != t && e.discount_percent_off !== t.discount_percent_off && d.default.wait(() => {
                        if (null == s) throw Error("Unexpected null SKU");
                        n(k.PaymentModalPriceChangedError)
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
                        paymentSourceId: n
                    } = this.state;
                    if (null == n) {
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
                        promotionId: n
                    } = this.props;
                    if (null == e) return {};
                    let r = this.getPrice();
                    return {
                        ...(0, A.default)(e),
                        load_id: this._loadId,
                        payment_type: k.PurchaseTypeToAnalyticsPaymentType[k.PurchaseTypes.ONE_TIME],
                        is_gift: this.isGift,
                        client_event_source: s === k.AppContext.OVERLAY ? k.AppContext.OVERLAY : null,
                        location: t,
                        price: null != r ? r.amount : null,
                        currency: null != r ? r.currency : null,
                        location_promotion_id: n
                    }
                }
                renderPurchaseWarning() {
                    let {
                        sku: e,
                        isInTestMode: t,
                        isIAP: s,
                        isUserEntitledToSku: n
                    } = this.props;
                    if (null == e) return null;
                    let l = (0, x.nativePlatformTypeToSKUOperatingSystem)((0, U.getPlatform)()),
                        o = [];
                    return (null == l || !e.supportedOperatingSystems.includes(l)) && !s && o.push((0, a.jsx)(f.default, {
                        icon: L.default,
                        iconSize: f.default.Sizes.SMALL,
                        color: f.default.Colors.WARNING,
                        className: w.errorBlock,
                        children: j.default.Messages.APPLICATION_STORE_PURCHASE_GAME_CURRENT_OS_UNSUPPORTED
                    }, r.UNSUPPORTED_OS)), t && o.push((0, a.jsx)(f.default, {
                        icon: L.default,
                        iconSize: f.default.Sizes.SMALL,
                        color: f.default.Colors.WARNING,
                        className: w.errorBlock,
                        children: j.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
                    }, r.TEST_MODE)), !0 === n && this.isGiftable && o.push((0, a.jsx)(f.default, {
                        icon: L.default,
                        iconSize: f.default.Sizes.SMALL,
                        color: f.default.Colors.PRIMARY,
                        className: w.errorBlock,
                        children: j.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY
                    }, r.GIFT_ONLY)), e.isPreorder() && o.push((0, a.jsx)(f.default, {
                        icon: L.default,
                        iconSize: f.default.Sizes.SMALL,
                        color: f.default.Colors.PRIMARY,
                        className: w.errorBlock,
                        children: j.default.Messages.APPLICATION_STORE_PURCHASE_WARNING_PREORDER.format({
                            date: (0, F.getReadablePreorderReleaseDate)(e)
                        })
                    }, r.PREORDER)), (0, a.jsx)(i.Fragment, {
                        children: o
                    })
                }
                renderGenericError(e, t) {
                    return null == e && null == t ? null : (0, a.jsx)(u.FormErrorBlock, {
                        className: w.errorBlock,
                        children: null != e ? e.message : null != t ? t.message : null
                    })
                }
                renderDefaultHeader(e, t, s) {
                    let {
                        isIAP: n,
                        application: r,
                        sku: i,
                        purchaseError: l
                    } = this.props;
                    if (null == i || null == r) return null;
                    let o = this.getPrice();
                    return (0, a.jsxs)(u.ModalHeader, {
                        direction: y.default.Direction.VERTICAL,
                        align: y.default.Align.START,
                        separator: !1,
                        children: [(0, a.jsx)(E.default, {
                            application: r,
                            splashSize: 880
                        }), (0, a.jsxs)(y.default, {
                            align: y.default.Align.CENTER,
                            className: w.headerHeader,
                            children: [(0, a.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H4,
                                children: (0, v.getSkuHeaderText)(n, i.type)
                            }), (0, a.jsx)(u.ModalCloseButton, {
                                onClick: () => this.handleClose()
                            })]
                        }), (0, a.jsxs)(y.default, {
                            align: y.default.Align.CENTER,
                            className: w.headerContent,
                            children: [(0, a.jsxs)(y.default, {
                                align: y.default.Align.CENTER,
                                children: [(0, a.jsx)(O.default, {
                                    game: r
                                }), (0, a.jsx)("div", {
                                    className: w.applicationName,
                                    children: i.name
                                })]
                            }), (0, a.jsx)("div", {
                                className: w.price,
                                children: null != o ? (0, b.formatPrice)(o.amount, o.currency) : (0, a.jsx)(u.Spinner, {
                                    type: u.Spinner.Type.PULSING_ELLIPSIS,
                                    className: w.priceSpinner
                                })
                            })]
                        }), this.renderPurchaseWarning(), this.renderGenericError(l, s), t.length > 1 ? (0, a.jsx)(g.default, {
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
                        isEmbeddedIAP: n,
                        purchaseError: r,
                        isUserEntitledToSku: i,
                        forceConfirmationStepOnMount: l,
                        transitionState: o
                    } = this.props;
                    return null == e || t ? (0, a.jsx)(u.Spinner, {}) : (0, a.jsx)(h.default, {
                        ref: this._paymentModalRef,
                        transitionState: o,
                        canSubmit: null != this.getSkuPrice(),
                        needsToBeGift: e.type === k.SKUTypes.DURABLE_PRIMARY && !0 === i,
                        isGiftable: this.isGiftable,
                        legalNotice: n ? (0, a.jsx)(S.default, {
                            isEmbeddedIAP: n
                        }) : null,
                        isPurchasing: s,
                        purchaseError: r,
                        price: this.getPrice(),
                        size: u.ModalSize.SMALL,
                        onPurchase: this.handlePurchase,
                        onIsGiftUpdate: p.updateSKUPaymentIsGift,
                        onPaymentSourceChange: this.handlePaymentSourceChange,
                        onClose: () => this.handleClose(),
                        onClearError: p.clearPurchaseError,
                        renderHeader: this.renderHeader,
                        renderConfirmationBody: this.renderConfirmation,
                        submitButtonText: this.isGift ? j.default.Messages.APPLICATION_STORE_BUY_GIFT : j.default.Messages.APPLICATION_STORE_BUY,
                        initialStep: l ? B.Steps.CONFIRM : null,
                        onStepChange: this.handleStepChange,
                        isGift: this.isGift
                    })
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.state = {
                        paymentSourceId: null
                    }, this._loadId = (0, l.v4)(), this._stepStartTime = Date.now(), this._flowStartTime = Date.now(), this._paymentModalRef = i.createRef(), this.handlePaymentSourceChange = e => {
                        let {
                            applicationId: t,
                            skuId: s
                        } = this.props;
                        null != e ? (p.fetchPurchasePreview(t, s, e.id), this.setState({
                            paymentSourceId: e.id
                        })) : (p.fetchPurchasePreview(t, s, null), this.setState({
                            paymentSourceId: null
                        }))
                    }, this.handlePurchase = async e => {
                        let {
                            applicationId: t,
                            sku: s
                        } = this.props, n = this.getPrice(), r = null != n ? n.amount : 0, a = null != n ? n.currency : k.CurrencyCodes.USD;
                        if (null == s) throw Error("SKU is null during purchase");
                        if (!T.default.isPurchasingSKU) try {
                            M.default.track(k.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
                                ...this.getBaseAnalyticsData(),
                                duration_ms: Date.now() - this._flowStartTime
                            }), await p.purchaseSKU(t, s.id, {
                                expectedAmount: r,
                                expectedCurrency: a,
                                paymentSource: e,
                                analyticsLoadId: this._loadId,
                                isGift: this.isGift
                            }), (0, c.acceptPurchaseTerms)()
                        } catch (t) {
                            throw M.default.track(k.AnalyticEvents.PAYMENT_FLOW_FAILED, {
                                ...this.getBaseAnalyticsData(),
                                payment_gateway: e.type === k.PaymentSourceTypes.CARD ? k.PaymentGateways.STRIPE : k.PaymentGateways.BRAINTREE,
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
                        M.default.track(k.AnalyticEvents.PAYMENT_FLOW_STEP, {
                            ...this.getBaseAnalyticsData(),
                            from_step: e,
                            to_step: t,
                            step_duration_ms: s - this._stepStartTime,
                            flow_duration_ms: s - this._flowStartTime
                        }), this._stepStartTime = s, t === B.Steps.CONFIRM && p.showPurchaseConfirmationStep()
                    }, this.renderHeader = (e, t, s) => {
                        let {
                            application: n
                        } = this.props;
                        if (e === B.Steps.CONFIRM) return null != n ? (0, a.jsx)(E.default, {
                            application: n,
                            splashSize: 880
                        }) : null;
                        return this.renderDefaultHeader(e, t, s)
                    }, this.renderConfirmation = () => {
                        let {
                            application: e,
                            sku: t,
                            isIAP: s,
                            giftCode: n
                        } = this.props;
                        if (null == t || null == e) throw Error("No SKU for confirmation step!");
                        return (0, a.jsx)("div", {
                            className: w.confirmContent,
                            children: (0, a.jsxs)(y.default, {
                                direction: y.default.Direction.VERTICAL,
                                children: [(0, a.jsx)(u.ModalCloseButton, {
                                    onClick: () => this.handleClose(),
                                    className: w.confirmCloseButton
                                }), null != n ? (0, a.jsx)(G.default, {
                                    giftCode: n,
                                    application: e,
                                    sku: t,
                                    onClose: () => this.handleClose()
                                }) : (0, a.jsx)(Y.default, {
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
            let V = i.forwardRef((e, t) => {
                var s, n;
                let {
                    applicationId: r,
                    skuId: i,
                    ...l
                } = e, u = (0, o.useStateFromStores)([P.default], () => P.default.getGame(r)), d = (0, D.hasFlag)(null !== (s = null == u ? void 0 : u.flags) && void 0 !== s ? s : 0, k.ApplicationFlags.EMBEDDED) && (0, D.hasFlag)(null !== (n = null == u ? void 0 : u.flags) && void 0 !== n ? n : 0, k.ApplicationFlags.EMBEDDED_IAP), [c, p, S, h, f, E, A, g, y] = (0, o.useStateFromStoresArray)([T.default], () => [T.default.getPricesForSku(i), T.default.isPurchasingSKU, T.default.error, T.default.analyticsLocation, T.default.promotionId, T.default.giftCode, T.default.isGift, T.default.isIAP, T.default.forceConfirmationStepOnMount]), [O, L] = (0, o.useStateFromStoresArray)([R.default], () => [R.default.get(i), R.default.isFetching(i)]), M = (0, o.useStateFromStores)([_.default, N.default], () => N.default.inTestModeForApplication(r) || _.default.inDevModeForApplication(r), [r]), B = (0, o.useStateFromStores)([m.default, I.default], () => m.default.isEntitledToSku(I.default.getCurrentUser(), i, r)), U = (0, o.useStateFromStores)([C.default], () => C.default.error);
                return (0, a.jsx)(H, {
                    ...l,
                    application: u,
                    applicationId: r,
                    skuId: i,
                    prices: c,
                    isPurchasing: p,
                    purchaseError: null != U ? U : S,
                    analyticsLocation: h,
                    promotionId: f,
                    isIAP: g,
                    giftCode: E,
                    isGift: A,
                    forceConfirmationStepOnMount: y,
                    sku: O,
                    isFetchingSKU: L,
                    isInTestMode: M,
                    isUserEntitledToSku: B,
                    isEmbeddedIAP: d,
                    ref: t
                })
            });
            class W extends i.PureComponent {
                close() {
                    null != this._skuPaymentModalRef.current && this._skuPaymentModalRef.current.closable && this.handleClose()
                }
                handleClose() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    this.props.onClose(e)
                }
                render() {
                    return (0, a.jsx)(V, {
                        ...this.props,
                        ref: this._skuPaymentModalRef,
                        onClose: () => this.handleClose()
                    })
                }
                constructor(...e) {
                    super(...e), this._skuPaymentModalRef = i.createRef()
                }
            }
            var z = W
        },
        909469: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                PAYMENT_SOURCE_NAMES: function() {
                    return p
                },
                getLocalizedPricingNotice: function() {
                    return h
                },
                getLocalizedPricingBannerStrings: function() {
                    return f
                }
            });
            var n = s("592861"),
                r = s("988415"),
                a = s("701909"),
                i = s("153160"),
                l = s("49111"),
                o = s("843455"),
                u = s("782340");
            let d = new Set([o.CurrencyCodes.ARS, o.CurrencyCodes.CLP, o.CurrencyCodes.COP]),
                c = new Set([o.CurrencyCodes.USD, o.CurrencyCodes.JPY]),
                p = {
                    [l.PaymentSourceTypes.CARD]: () => u.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
                    [l.PaymentSourceTypes.PAYPAL]: () => u.default.Messages.PAYMENT_SOURCE_PAYPAL,
                    [l.PaymentSourceTypes.SOFORT]: () => u.default.Messages.PAYMENT_SOURCE_SOFORT,
                    [l.PaymentSourceTypes.GIROPAY]: () => u.default.Messages.PAYMENT_SOURCE_GIROPAY,
                    [l.PaymentSourceTypes.PRZELEWY24]: () => u.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
                    [l.PaymentSourceTypes.PAYSAFE_CARD]: () => u.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
                    [l.PaymentSourceTypes.GCASH]: () => u.default.Messages.PAYMENT_SOURCE_GCASH,
                    [l.PaymentSourceTypes.GRABPAY_MY]: () => u.default.Messages.PAYMENT_SOURCE_GRABPAY,
                    [l.PaymentSourceTypes.MOMO_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                    [l.PaymentSourceTypes.VENMO]: () => u.default.Messages.PAYMENT_SOURCE_VENMO,
                    [l.PaymentSourceTypes.KAKAOPAY]: () => u.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
                    [l.PaymentSourceTypes.GOPAY_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                    [l.PaymentSourceTypes.BANCONTACT]: () => u.default.Messages.PAYMENT_SOURCE_BANCONTACT,
                    [l.PaymentSourceTypes.EPS]: () => u.default.Messages.PAYMENT_SOURCE_EPS,
                    [l.PaymentSourceTypes.IDEAL]: () => u.default.Messages.PAYMENT_SOURCE_IDEAL,
                    [l.PaymentSourceTypes.CASH_APP]: () => u.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                },
                S = [l.PaymentSourceTypes.EPS, l.PaymentSourceTypes.BANCONTACT, l.PaymentSourceTypes.IDEAL, l.PaymentSourceTypes.SOFORT, l.PaymentSourceTypes.GIROPAY, l.PaymentSourceTypes.SEPA_DEBIT, l.PaymentSourceTypes.PAYSAFE_CARD],
                h = (e, t, s, n) => {
                    if (null == e) return "";
                    let a = (0, r.getI18NCountryName)(e);
                    if (t === o.CurrencyCodes.EUR) return s ? u.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: a
                    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    });
                    return n ? u.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: a
                    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: a
                    })
                },
                f = e => {
                    let {
                        localizedPricingPromo: t,
                        subscription: s,
                        forceSingleLine: n = !1,
                        userLocale: h
                    } = e, {
                        countryCode: f,
                        amount: _,
                        currency: A,
                        paymentSourceTypes: P
                    } = t, I = 0 !== P.length, C = E(f), m = (0, i.formatPrice)(_, A, {
                        style: "currency",
                        currency: A,
                        currencyDisplay: "symbol",
                        localeOverride: C
                    }), T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                        helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: A.toUpperCase(),
                        localizedPriceWithCurrencySymbol: m
                    });
                    if (c.has(A) && (T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: m
                        })), d.has(A) && (T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: A.toUpperCase(),
                            localizedPriceWithCurrencySymbol: m
                        })), null != s && !s.hasPremiumNitroMonthly && (T = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: A.toUpperCase()
                        })), A === o.CurrencyCodes.EUR && (T = n ? u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, r.getI18NCountryName)(f),
                            currencyISOCode: A.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: A.toUpperCase(),
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
                        })), I) {
                        let e = S.filter(e => P.includes(e)),
                            t = P.filter(e => !S.includes(e)),
                            s = [...e, ...t],
                            n = s.slice(0, 2).map(e => {
                                var t, s;
                                return null !== (s = null === (t = p[e]) || void 0 === t ? void 0 : t.call(p)) && void 0 !== s ? s : u.default.Messages.PAYMENT_SOURCE_UNKNOWN
                            });
                        P.length >= 3 && n.push(u.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        let r = new Intl.ListFormat(h, {
                            style: "short",
                            type: "conjunction"
                        });
                        T = u.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING),
                            paymentMethods: r.format(n)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: u.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, r.getI18NCountryName)(f)
                        }),
                        localizedPricingBannerBody: T,
                        localizedPricingBannerLinkOnly: u.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: a.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: I ? void 0 : u.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                E = e => {
                    let t = n.default.find(t => t.alpha2 === e);
                    return null == t ? void 0 : t.localeForICU
                }
        },
        210721: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                AnimationState: function() {
                    return r
                },
                getGiftAnimationData: function() {
                    return S
                },
                sendGiftMessage: function() {
                    return h
                }
            });
            var n, r, a = s("627445"),
                i = s.n(a),
                l = s("450911"),
                o = s("819689"),
                u = s("884351"),
                d = s("42203"),
                c = s("659632"),
                p = s("78345");
            (n = r || (r = {})).ACTION = "action", n.LOOP = "loop", n.IDLE = "idle";
            let S = (e, t) => {
                    let n;
                    switch (e) {
                        case p.PremiumGiftStyles.SNOWGLOBE:
                            n = () => s.el("452661").then(s.t.bind(s, "452661", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case p.PremiumGiftStyles.BOX:
                            n = () => s.el("726871").then(s.t.bind(s, "726871", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case p.PremiumGiftStyles.CUP:
                            n = () => s.el("544929").then(s.t.bind(s, "544929", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case p.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case r.IDLE:
                                    n = () => s.el("973372").then(s.t.bind(s, "973372", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    n = () => s.el("353540").then(s.t.bind(s, "353540", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    n = () => s.el("303473").then(s.t.bind(s, "303473", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case p.PremiumGiftStyles.CAKE:
                            switch (t) {
                                case r.IDLE:
                                    n = () => s.el("127891").then(s.t.bind(s, "127891", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    n = () => s.el("953820").then(s.t.bind(s, "953820", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    n = () => s.el("311972").then(s.t.bind(s, "311972", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case p.PremiumGiftStyles.CHEST:
                            switch (t) {
                                case r.IDLE:
                                    n = () => s.el("269055").then(s.t.bind(s, "269055", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    n = () => s.el("120467").then(s.t.bind(s, "120467", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    n = () => s.el("451680").then(s.t.bind(s, "451680", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case p.PremiumGiftStyles.COFFEE:
                            switch (t) {
                                case r.IDLE:
                                    n = () => s.el("863089").then(s.t.bind(s, "863089", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case r.LOOP:
                                    n = () => s.el("949233").then(s.t.bind(s, "949233", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    n = () => s.el("361896").then(s.t.bind(s, "361896", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        default:
                            n = () => Promise.resolve("Error: Invalid giftStyle")
                    }
                    return n
                },
                h = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let s = await l.default.openPrivateChannel(e.id).then(e => {
                            let t = d.default.getChannel(e);
                            if (i(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        n = (0, c.getGiftCodeURL)(t);
                    return o.default.sendMessage(s.id, u.default.parse(s, n), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        671484: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var n = s("866227"),
                r = s.n(n),
                a = s("666038"),
                i = s("568734"),
                l = s("797647"),
                o = s("646718");
            let u = Object.freeze({
                PAYMENT_SOURCE_REQUIRED: 1,
                EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                NOT_SELF_REDEEMABLE: 4
            });
            class d extends a.default {
                static createFromServer(e) {
                    return new d({
                        userId: null != e.user ? e.user.id : null,
                        code: e.code,
                        skuId: e.sku_id,
                        uses: e.uses,
                        maxUses: e.max_uses,
                        storeListingId: null != e.store_listing ? e.store_listing.id : null,
                        expiresAt: null != e.expires_at ? r(e.expires_at) : null,
                        redeemed: e.redeemed,
                        subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : e.subscription_plan_id,
                        subscriptionPlan: null != e.subscription_plan ? l.default.createFromServer(e.subscription_plan) : null,
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
                    return null != e && r().isAfter(e)
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
                    return !(0, i.hasFlag)(this.flags, u.NOT_SELF_REDEEMABLE)
                }
                get isExistingPremiumSubscriptionDisallowed() {
                    return (0, i.hasFlag)(this.flags, u.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
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
            var n = s("446674"),
                r = s("913144"),
                a = s("27618");
            let i = !1,
                l = Object.freeze({
                    userAffinities: [],
                    affinityUserIds: new Set,
                    lastFetched: 0
                }),
                o = {
                    ...l
                };

            function u() {
                o.affinityUserIds = new Set(o.userAffinities.map(e => e.user_id).filter(e => !a.default.isBlocked(e)))
            }
            class d extends n.default.PersistedStore {
                initialize(e) {
                    this.waitFor(a.default), null != e && (o.userAffinities = e.userAffinities, o.affinityUserIds = new Set(e.affinityUserIds), o.lastFetched = e.lastFetched), this.syncWith([a.default], u)
                }
                needsRefresh() {
                    return Date.now() - o.lastFetched > 864e5
                }
                getFetching() {
                    return i
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
            var c = new d(r.default, {
                LOAD_USER_AFFINITIES_SUCCESS: function(e) {
                    var t;
                    let {
                        affinities: s
                    } = e;
                    o.userAffinities = null !== (t = s.user_affinities) && void 0 !== t ? t : [], o.lastFetched = Date.now(), u(), i = !1
                },
                LOAD_USER_AFFINITIES: function() {
                    i = !0
                },
                LOAD_USER_AFFINITIES_FAILURE: function() {
                    i = !1
                },
                LOGOUT: function() {
                    o = {
                        ...l
                    }
                }
            })
        }
    }
]);