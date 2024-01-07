            "use strict";
            a.r(t), a.d(t, {
                AddPaymentStep: function() {
                    return em
                },
                AddPaymentFlow: function() {
                    return eA
                },
                useSharedPaymentModal: function() {
                    return eT
                }
            }), a("222007"), a("70102");
            var n = a("37983"),
                r = a("884691"),
                s = a("41092"),
                l = a("627445"),
                o = a.n(l),
                i = a("446674"),
                u = a("77078"),
                c = a("913144"),
                d = a("850068"),
                p = a("82731"),
                S = a("112679"),
                E = a("814915"),
                m = a("518809"),
                A = a("863843"),
                T = a("195175"),
                y = a("780569"),
                P = a("157009"),
                f = a("490696"),
                N = a("677987"),
                _ = a("875620"),
                C = a("605250"),
                h = a("642906"),
                M = a("85336"),
                I = a("153727"),
                g = a("159149"),
                b = a("650484"),
                R = a("821879"),
                O = a("367767"),
                v = a("160299"),
                x = a("926223"),
                D = a("758764"),
                Y = a("357957"),
                k = a("467292"),
                j = a("773336"),
                L = a("520713"),
                w = a("877261"),
                F = a("273619"),
                B = a("73748"),
                U = a("39644"),
                H = a("843455"),
                V = a("782340"),
                G = a("483397"),
                W = a("129429");
            let Z = new C.default("AddPaymentStep.tsx"),
                z = [M.Step.PAYMENT_TYPE],
                K = [M.Step.PAYMENT_TYPE, M.Step.CREDIT_CARD_INFORMATION, M.Step.ADDRESS],
                X = [M.Step.PAYMENT_TYPE, M.Step.PAYPAL_INFORMATION, M.Step.ADDRESS],
                q = [M.Step.PAYMENT_TYPE, M.Step.VENMO_INFORMATION, M.Step.ADDRESS],
                Q = [M.Step.PAYMENT_TYPE, M.Step.SOFORT_INFORMATION, M.Step.ADDRESS];
            M.Step.PAYMENT_TYPE, M.Step.PAYMENT_REQUEST_INFORMATION, M.Step.ADDRESS;
            let J = [M.Step.PAYMENT_TYPE, M.Step.PRZELEWY24_INFORMATION, M.Step.ADDRESS],
                $ = [M.Step.PAYMENT_TYPE, M.Step.EPS_INFORMATION, M.Step.ADDRESS],
                ee = [M.Step.PAYMENT_TYPE, M.Step.IDEAL_INFORMATION, M.Step.ADDRESS],
                et = [M.Step.PAYMENT_TYPE, M.Step.CASH_APP_INFORMATION, M.Step.ADDRESS],
                ea = [M.Step.PAYMENT_TYPE, M.Step.ADDRESS],
                en = {
                    name: "",
                    cardNumber: "",
                    expirationDate: "",
                    cvc: ""
                },
                er = {
                    email: "",
                    name: "",
                    country: "",
                    line1: "",
                    line2: "",
                    city: "",
                    postalCode: "",
                    state: ""
                };

            function es(e) {
                let {
                    onChooseType: t,
                    onPaymentRequestSourceReceived: a,
                    onPaymentRequestSourceFailed: r,
                    analyticsLocation: s,
                    isEligibleForTrial: l
                } = e;
                return (0, n.jsx)("div", {
                    className: G.body,
                    children: (0, n.jsx)(E.default, {
                        onChooseType: t,
                        allowStripeRequestPayments: !j.isPlatformEmbedded,
                        onStripePaymentMethodReceived: async e => {
                            if ((0, S.updateStripePaymentRequest)(e), null == e) {
                                r();
                                return
                            }
                            try {
                                let t = await (0, d.createPaymentRequestPaymentSource)(e, void 0, s),
                                    {
                                        billingAddressInfo: n
                                    } = (0, L.parseStripePaymentMethod)(e);
                                a(t, n)
                            } catch (e) {}
                        },
                        isEligibleForTrial: l
                    })
                })
            }

            function el(e) {
                let {
                    onCardInfoChange: t
                } = e, a = (0, i.useStateFromStores)([x.default], () => x.default.error);
                return (0, n.jsx)("div", {
                    className: G.body,
                    children: (0, n.jsx)(f.CreditCardInformationBody, {
                        billingError: a,
                        onCardInfoChange: t
                    })
                })
            }

            function eo() {
                return (0, n.jsx)("div", {
                    className: G.body,
                    children: (0, n.jsx)(m.default, {})
                })
            }

            function ei() {
                return (0, n.jsx)("div", {
                    className: G.body,
                    children: (0, n.jsx)(T.default, {})
                })
            }

            function eu() {
                return (0, n.jsx)("div", {
                    className: G.body,
                    children: (0, n.jsx)(U.default, {})
                })
            }

            function ec() {
                let e = (0, i.useStateFromStores)([v.default], () => v.default.isBusy),
                    t = (0, i.useStateFromStores)([x.default], () => x.default.stripePaymentMethod);
                return (0, n.jsx)(N.PaymentRequestStepBody, {
                    className: G.body,
                    stripePaymentMethod: t,
                    submitting: e
                })
            }

            function ed(e) {
                let {
                    billingAddressInfo: t,
                    onBillingAddressChange: a,
                    paymentSourceType: r
                } = e, s = (0, i.useStateFromStores)([x.default], () => x.default.error);
                return (0, n.jsx)("div", {
                    className: G.body,
                    children: (0, n.jsx)(y.AddressStepBody, {
                        billingAddressInfo: t,
                        billingError: s,
                        onBillingAddressChange: a,
                        paymentSourceType: r
                    })
                })
            }

            function ep() {
                return (0, n.jsx)(P.AwaitingAuthenticationStepBody, {
                    className: G.body
                })
            }

            function eS(e) {
                return () => (null != x.default.error && (0, S.clearError)(), e())
            }

            function eE(e) {
                let {
                    onPrimary: t,
                    onBack: a,
                    ...r
                } = e, s = t;
                null != t && (s = eS(t));
                let l = a;
                return null != a && (l = eS(a)), (0, n.jsx)(g.default, {
                    ...r,
                    onPrimary: s,
                    onBack: l
                })
            }

            function em(e) {
                let {
                    breadcrumbSteps: t
                } = e, {
                    step: a,
                    setStep: n,
                    paymentSources: r,
                    paymentSourceId: s,
                    setPaymentSourceId: l,
                    purchaseError: i,
                    setPurchaseError: u,
                    purchaseErrorBlockRef: c,
                    paymentAuthenticationState: d
                } = (0, h.usePaymentContext)(), p = {
                    ...eT(),
                    paymentSources: r,
                    paymentSourceId: s,
                    setPaymentSourceId: l,
                    purchaseError: i,
                    setPurchaseError: u,
                    purchaseErrorBlockRef: c,
                    paymentAuthenticationState: d
                };
                return o(a, "Step should be set here"), eA({
                    paymentModalArgs: p,
                    initialStep: M.Step.PAYMENT_TYPE,
                    prependSteps: [M.Step.PROMOTION_INFO],
                    appendSteps: [M.Step.REVIEW, M.Step.CONFIRM],
                    breadcrumpSteps: t,
                    currentBreadcrumpStep: a,
                    onReturn: () => n(M.Step.REVIEW),
                    onComplete: () => n(M.Step.REVIEW),
                    onStepChange: () => {}
                })
            }

            function eA(e) {
                let t, a, l, c, {
                        paymentModalArgs: E,
                        initialStep: m,
                        prependSteps: T,
                        appendSteps: y,
                        onReturn: P,
                        onComplete: f,
                        onStepChange: N,
                        breadcrumpSteps: C,
                        currentBreadcrumpStep: v,
                        header: D,
                        analyticsLocation: k,
                        hideBreadcrumbs: j = !1,
                        usePaymentModalStep: L = !1,
                        isEligibleForTrial: w = !1
                    } = e,
                    U = {
                        steps: [...T, ...K, ...y],
                        methodType: H.PaymentSourceTypes.CARD
                    },
                    en = {
                        steps: [...T, ...z, ...y],
                        methodType: H.PaymentSourceTypes.PAYMENT_REQUEST
                    },
                    er = {
                        steps: [...T, ...X, ...y],
                        methodType: H.PaymentSourceTypes.PAYPAL
                    },
                    eS = {
                        steps: [...T, ...q, ...y],
                        methodType: H.PaymentSourceTypes.VENMO
                    },
                    em = {
                        steps: [...T, ...z, ...y]
                    },
                    eA = {
                        steps: [...T, ...Q, ...y],
                        methodType: H.PaymentSourceTypes.SOFORT
                    },
                    eT = {
                        steps: [...T, ...J, ...y],
                        methodType: H.PaymentSourceTypes.PRZELEWY24
                    },
                    ey = {
                        steps: [...T, ...$, ...y],
                        methodType: H.PaymentSourceTypes.EPS
                    },
                    eP = {
                        steps: [...T, ...ee, ...y],
                        methodType: H.PaymentSourceTypes.IDEAL
                    },
                    ef = {
                        steps: [...T, ...et, ...y],
                        methodType: H.PaymentSourceTypes.CASH_APP
                    },
                    [eN, e_] = r.useState(m),
                    [eC, eh] = r.useState(null == C ? U : {
                        steps: [M.Step.ADD_PAYMENT_STEPS]
                    }),
                    {
                        stripe: eM
                    } = (0, h.usePaymentContext)(),
                    eI = (0, i.useStateFromStores)([x.default], () => x.default.redirectedPaymentSourceId);

                function eg(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    e_(e), t && N({
                        currentStep: eN,
                        toStep: e
                    })
                }
                r.useEffect(() => {
                    (() => {
                        if (null == eI) return;
                        let e = Y.default.getPaymentSource(eI);
                        null != e && (eq(e), ej(!1))
                    })()
                }, [eI]);
                let {
                    setPaymentSourceId: eb,
                    creditCardState: eR,
                    setCreditCardState: eO,
                    tokenState: ev,
                    setTokenState: ex,
                    isSubmittingCurrentStep: eD,
                    billingAddressState: eY,
                    setBillingAddressState: ek,
                    setIsSubmittingCurrentStep: ej,
                    hasRedirectURL: eL,
                    setHasRedirectURL: ew,
                    braintreeEmail: eF,
                    braintreeNonce: eB,
                    venmoUsername: eU,
                    adyenPaymentData: eH,
                    isAuthenticating: eV,
                    epsBankState: eG,
                    setEpsBankState: eW,
                    idealBankState: eZ,
                    setIdealBankState: ez,
                    p24BankState: eK,
                    setP24BankState: eX
                } = E;

                function eq(e) {
                    eb(e.id), f(eN, e), eg(m, !1)
                }
                switch (eN) {
                    case M.Step.PAYMENT_TYPE:
                        t = (0, n.jsx)(es, {
                            onChooseType: e => {
                                switch (e) {
                                    case H.PaymentSourceTypes.CARD:
                                        eh(U), eg(M.Step.CREDIT_CARD_INFORMATION);
                                        break;
                                    case H.PaymentSourceTypes.PAYPAL:
                                        eh(er), eg(M.Step.PAYPAL_INFORMATION);
                                        break;
                                    case H.PaymentSourceTypes.VENMO:
                                        eh(eS), eg(M.Step.VENMO_INFORMATION);
                                        break;
                                    case H.PaymentSourceTypes.PAYMENT_REQUEST:
                                        eh(en), eg(M.Step.PAYMENT_REQUEST_INFORMATION);
                                        break;
                                    case H.PaymentSourceTypes.SOFORT:
                                        eh(eA), eg(M.Step.SOFORT_INFORMATION);
                                        break;
                                    case H.PaymentSourceTypes.PRZELEWY24:
                                        eh(eT), eg(M.Step.PRZELEWY24_INFORMATION);
                                        break;
                                    case H.PaymentSourceTypes.EPS:
                                        eh(ey), eg(M.Step.EPS_INFORMATION);
                                        break;
                                    case H.PaymentSourceTypes.IDEAL:
                                        eh(eP), eg(M.Step.IDEAL_INFORMATION);
                                        break;
                                    case H.PaymentSourceTypes.CASH_APP:
                                        eh(ef), eg(M.Step.CASH_APP_INFORMATION);
                                        break;
                                    case H.PaymentSourceTypes.GIROPAY:
                                    case H.PaymentSourceTypes.PAYSAFE_CARD:
                                    case H.PaymentSourceTypes.GCASH:
                                    case H.PaymentSourceTypes.GRABPAY_MY:
                                    case H.PaymentSourceTypes.MOMO_WALLET:
                                    case H.PaymentSourceTypes.KAKAOPAY:
                                    case H.PaymentSourceTypes.GOPAY_WALLET:
                                    case H.PaymentSourceTypes.BANCONTACT:
                                        eh({
                                            steps: [...T, ...ea, ...y],
                                            methodType: e
                                        }), eg(M.Step.ADDRESS)
                                }
                                null != x.default.error && (0, S.clearError)()
                            },
                            onPaymentRequestSourceReceived: (e, t) => {
                                ek(e => ({
                                    ...e,
                                    info: t
                                })), eh(en), eq(e)
                            },
                            onPaymentRequestSourceFailed: () => {
                                eh(em), eg(M.Step.PAYMENT_TYPE)
                            },
                            analyticsLocation: k,
                            isEligibleForTrial: w
                        }), a = (0, n.jsx)(eE, {
                            onBack: P
                        });
                        break;
                    case M.Step.CREDIT_CARD_INFORMATION:
                        let eQ = 2 === (0, R.reducedPaymentInfoExperiment)().bucket,
                            eJ = async e => {
                                ej(!0);
                                try {
                                    let t = await (0, d.createCardToken)(eM, e);
                                    if (ex({
                                            token: t
                                        }), eQ) try {
                                        let e = await (0, d.confirmCardPaymentSource)(eM, t, eY.info, k);
                                        eq(e)
                                    } catch {} else eg(M.Step.ADDRESS)
                                } catch (e) {
                                    var t;
                                    Z.error(null !== (t = e.message) && void 0 !== t ? t : JSON.stringify(e))
                                } finally {
                                    ej(!1)
                                }
                            };
                        t = (0, n.jsx)(el, {
                            onCardInfoChange: (e, t) => {
                                eO({
                                    info: e,
                                    isValid: t
                                }), ek(t => {
                                    let a = {
                                        ...t,
                                        info: {
                                            ...t.info,
                                            name: e.name
                                        }
                                    };
                                    if (eQ) {
                                        var n, r;
                                        a.info.country = null !== (n = e.country) && void 0 !== n ? n : "", a.info.postalCode = null !== (r = e.postalCode) && void 0 !== r ? r : ""
                                    }
                                    return a
                                })
                            }
                        }), a = (0, n.jsx)(s.ElementsConsumer, {
                            children: e => {
                                let {
                                    elements: t
                                } = e;
                                return (0, n.jsx)(eE, {
                                    onBack: () => eg(M.Step.PAYMENT_TYPE),
                                    primaryCTA: g.default.CTAType.CONTINUE,
                                    primaryType: "submit",
                                    primaryText: V.default.Messages.NEXT,
                                    primarySubmitting: eD,
                                    primaryDisabled: eQ ? !eR.isValid || eV : !eR.isValid,
                                    onPrimary: () => eJ(t)
                                })
                            }
                        });
                        break;
                    case M.Step.SOFORT_INFORMATION:
                        let e$ = eY.info;
                        t = (0, n.jsx)("div", {
                            className: G.body,
                            children: (0, n.jsx)(A.default, {
                                billingAddressInfo: e$,
                                onChange: e => {
                                    ek({
                                        info: {
                                            ...e$,
                                            ...e
                                        },
                                        isValid: !1
                                    })
                                },
                                error: x.default.error
                            })
                        }), a = (0, n.jsx)(eE, {
                            onBack: () => eg(M.Step.PAYMENT_TYPE),
                            primaryCTA: g.default.CTAType.CONTINUE,
                            primaryText: V.default.Messages.NEXT,
                            primaryDisabled: "" === e$.name || "" === e$.email || void 0 === e$.email,
                            onPrimary: () => eg(M.Step.ADDRESS)
                        });
                        break;
                    case M.Step.EPS_INFORMATION:
                        t = (0, n.jsx)(_.default, {
                            type: H.PaymentSourceTypes.EPS,
                            onAccountHolderNameChange: e => ek({
                                info: {
                                    ...eY.info,
                                    name: e
                                },
                                isValid: eY.isValid
                            }),
                            onEPSBankChange: e => eW(e),
                            epsBankValue: eG,
                            billingAddressInfo: eY.info
                        }), a = (0, n.jsx)(eE, {
                            onBack: () => eg(M.Step.PAYMENT_TYPE),
                            primaryCTA: g.default.CTAType.CONTINUE,
                            primaryText: V.default.Messages.NEXT,
                            primaryDisabled: void 0 === eG || "" === eG || "" === eY.info.name,
                            onPrimary: () => eg(M.Step.ADDRESS)
                        });
                        break;
                    case M.Step.IDEAL_INFORMATION:
                        t = (0, n.jsx)(_.default, {
                            type: H.PaymentSourceTypes.IDEAL,
                            onAccountHolderNameChange: e => ek({
                                info: {
                                    ...eY.info,
                                    name: e
                                },
                                isValid: eY.isValid
                            }),
                            onIdealBankChange: e => ez(e),
                            idealBankValue: eZ,
                            billingAddressInfo: eY.info
                        }), a = (0, n.jsx)(eE, {
                            onBack: () => eg(M.Step.PAYMENT_TYPE),
                            primaryCTA: g.default.CTAType.CONTINUE,
                            primaryText: V.default.Messages.NEXT,
                            primaryDisabled: void 0 === eZ || "" === eZ || "" === eY.info.name,
                            onPrimary: () => eg(M.Step.ADDRESS)
                        });
                        break;
                    case M.Step.PRZELEWY24_INFORMATION:
                        t = (0, n.jsx)(_.default, {
                            type: H.PaymentSourceTypes.PRZELEWY24,
                            onNameChange: e => ek({
                                info: {
                                    ...eY.info,
                                    name: e
                                },
                                isValid: eY.isValid
                            }),
                            onEmailChange: e => ek({
                                info: {
                                    ...eY.info,
                                    email: e
                                },
                                isValid: eY.isValid
                            }),
                            onP24BankChange: e => {
                                eX(e)
                            },
                            p24BankValue: eK,
                            billingAddressInfo: eY.info
                        }), a = (0, n.jsx)(eE, {
                            onBack: () => eg(M.Step.PAYMENT_TYPE),
                            primaryCTA: g.default.CTAType.CONTINUE,
                            primaryText: V.default.Messages.NEXT,
                            primaryDisabled: void 0 === eY.info.name || "" === eY.info.name || void 0 === eY.info.email || "" === eY.info.email || void 0 === eK || "" === eK,
                            onPrimary: () => eg(M.Step.ADDRESS)
                        });
                        break;
                    case M.Step.PAYPAL_INFORMATION:
                        let e0 = 0 !== eF.length && null != eB;
                        t = (0, n.jsx)(eo, {}), a = (0, n.jsx)(eE, {
                            onBack: () => eg(M.Step.PAYMENT_TYPE),
                            primaryCTA: g.default.CTAType.CONTINUE,
                            primaryText: e0 ? V.default.Messages.NEXT : V.default.Messages.PAYMENT_SOURCE_CONNECT_TO_PAYPAL,
                            onPrimary: () => e0 ? eg(M.Step.ADDRESS) : (0, p.reopenPayPalWindow)()
                        });
                        break;
                    case M.Step.VENMO_INFORMATION:
                        let e4 = 0 !== eU.length && null != eB;
                        t = (0, n.jsx)(ei, {}), a = (0, n.jsx)(eE, {
                            onBack: () => eg(M.Step.PAYMENT_TYPE),
                            primaryCTA: g.default.CTAType.CONTINUE,
                            primaryText: e4 ? V.default.Messages.NEXT : V.default.Messages.PAYMENT_SOURCE_CONNECT_TO_VENMO,
                            onPrimary: () => e4 ? eg(M.Step.ADDRESS) : (0, p.reopenVenmoWindow)()
                        });
                        break;
                    case M.Step.PAYMENT_REQUEST_INFORMATION:
                        t = (0, n.jsx)(ec, {}), a = (0, n.jsx)(eE, {
                            onBack: () => eg(M.Step.PAYMENT_TYPE)
                        });
                        break;
                    case M.Step.CASH_APP_INFORMATION:
                        let e1 = null != eH;
                        t = (0, n.jsx)(eu, {}), a = (0, n.jsx)(eE, {
                            onBack: () => eg(M.Step.PAYMENT_TYPE),
                            primaryCTA: g.default.CTAType.CONTINUE,
                            primaryText: e1 ? V.default.Messages.NEXT : V.default.Messages.PAYMENT_SOURCE_CONNECT_TO_CASH_APP_PAY,
                            onPrimary: () => e1 ? eg(M.Step.ADDRESS) : (0, B.reopenCashAppPayWindow)()
                        });
                        break;
                    case M.Step.ADDRESS:
                        let e2 = async () => {
                            ej(!0);
                            let e = eC.methodType;
                            switch (e) {
                                case H.PaymentSourceTypes.CARD:
                                    try {
                                        let e = await (0, d.confirmCardPaymentSource)(eM, ev.token, eY.info, k);
                                        eq(e)
                                    } catch {}
                                    break;
                                case H.PaymentSourceTypes.VENMO:
                                case H.PaymentSourceTypes.PAYPAL:
                                    try {
                                        o(null != eB, "Missing braintreeNonce");
                                        let e = await (0, d.createBraintreePaymentSource)(eB, eY.info, k);
                                        eq(e)
                                    } catch {}
                                    break;
                                case H.PaymentSourceTypes.SOFORT:
                                    try {
                                        let e = await (0, d.confirmSofort)(eM, eY.info, k);
                                        eq(e)
                                    } catch {}
                                    break;
                                case H.PaymentSourceTypes.EPS:
                                    try {
                                        let e = await (0, d.confirmEPS)(eM, eG, eY.info, k);
                                        eq(e)
                                    } catch (e) {
                                        Z.warn(e)
                                    }
                                    break;
                                case H.PaymentSourceTypes.IDEAL:
                                    try {
                                        let e = await (0, d.confirmIdeal)(eM, eZ, eY.info, k);
                                        eq(e)
                                    } catch (e) {
                                        Z.warn(e)
                                    }
                                    break;
                                case H.PaymentSourceTypes.PRZELEWY24:
                                    try {
                                        if (void 0 === eK) throw (0, d.dispatchConfirmationError)("Bank required for Przelewy24");
                                        let e = await (0, d.confirmPrzelewy24)(eM, {
                                            p24Bank: eK
                                        }, eY.info, k);
                                        eq(e)
                                    } catch {}
                                    break;
                                case H.PaymentSourceTypes.PAYSAFE_CARD:
                                case H.PaymentSourceTypes.GRABPAY_MY:
                                    try {
                                        let t = await (0, d.createAdyenPrepaidPaymentSource)(eY.info, e, k);
                                        eq(t)
                                    } catch {}
                                    break;
                                case H.PaymentSourceTypes.GCASH:
                                case H.PaymentSourceTypes.MOMO_WALLET:
                                case H.PaymentSourceTypes.KAKAOPAY:
                                case H.PaymentSourceTypes.GOPAY_WALLET:
                                    try {
                                        let {
                                            redirectConfirmation: t
                                        } = await (0, d.createAdyenVaultablePaymentSource)(eY.info, e, k);
                                        ew(t)
                                    } catch {}
                                    break;
                                case H.PaymentSourceTypes.GIROPAY:
                                case H.PaymentSourceTypes.BANCONTACT:
                                    try {
                                        let t = await (0, d.createStripePaymentSource)(eM, eY.info, e, k);
                                        eq(t)
                                    } catch {}
                                    break;
                                case H.PaymentSourceTypes.CASH_APP:
                                    try {
                                        o(null != eH, "Missing adyenPaymentData");
                                        let {
                                            paymentSource: t
                                        } = await (0, d.createAdyenVaultablePaymentSource)(eY.info, e, k, eH);
                                        o(null != t, "Cash App Pay Payment Source missing"), eq(t)
                                    } catch {}
                                    break;
                                default:
                                    throw Error("unknown step not handled")
                            }!eL && ej(!1)
                        };
                        switch (eC.methodType) {
                            case H.PaymentSourceTypes.CARD:
                                c = M.Step.CREDIT_CARD_INFORMATION, l = H.PaymentSourceTypes.CARD;
                                break;
                            case H.PaymentSourceTypes.PAYPAL:
                                c = M.Step.PAYPAL_INFORMATION, l = H.PaymentSourceTypes.PAYPAL;
                                break;
                            case H.PaymentSourceTypes.VENMO:
                                c = M.Step.VENMO_INFORMATION, l = H.PaymentSourceTypes.VENMO;
                                break;
                            case H.PaymentSourceTypes.GIROPAY:
                                c = M.Step.PAYMENT_TYPE, l = H.PaymentSourceTypes.GIROPAY;
                                break;
                            case H.PaymentSourceTypes.SOFORT:
                                c = M.Step.SOFORT_INFORMATION, l = H.PaymentSourceTypes.SOFORT;
                                break;
                            case H.PaymentSourceTypes.PAYSAFE_CARD:
                            case H.PaymentSourceTypes.GCASH:
                            case H.PaymentSourceTypes.GRABPAY_MY:
                            case H.PaymentSourceTypes.MOMO_WALLET:
                            case H.PaymentSourceTypes.KAKAOPAY:
                            case H.PaymentSourceTypes.GOPAY_WALLET:
                            case H.PaymentSourceTypes.BANCONTACT:
                                c = M.Step.PAYMENT_TYPE, l = eC.methodType;
                                break;
                            case H.PaymentSourceTypes.EPS:
                                c = M.Step.EPS_INFORMATION, l = H.PaymentSourceTypes.EPS;
                                break;
                            case H.PaymentSourceTypes.IDEAL:
                                c = M.Step.IDEAL_INFORMATION, l = H.PaymentSourceTypes.IDEAL;
                                break;
                            case H.PaymentSourceTypes.PRZELEWY24:
                                c = M.Step.PRZELEWY24_INFORMATION, l = H.PaymentSourceTypes.PRZELEWY24;
                                break;
                            case H.PaymentSourceTypes.CASH_APP:
                                c = M.Step.CASH_APP_INFORMATION, l = H.PaymentSourceTypes.CASH_APP;
                                break;
                            default:
                                c = M.Step.PAYMENT_TYPE, l = H.PaymentSourceTypes.CARD
                        }
                        t = (0, n.jsx)(ed, {
                            billingAddressInfo: eY.info,
                            onBillingAddressChange: (e, t) => {
                                ek({
                                    info: {
                                        ...eY.info,
                                        ...e
                                    },
                                    isValid: t
                                })
                            },
                            paymentSourceType: l
                        }), a = (0, n.jsx)(eE, {
                            onBack: () => eg(c),
                            primaryCTA: g.default.CTAType.CONTINUE,
                            primaryText: V.default.Messages.NEXT,
                            primarySubmitting: eD,
                            primaryDisabled: !eY.isValid || eV,
                            onPrimary: e2
                        });
                        break;
                    case M.Step.AWAITING_AUTHENTICATION:
                        t = (0, n.jsx)(ep, {});
                        break;
                    default:
                        throw Error("Unexpected step: ".concat(eN))
                }
                let e3 = (0, n.jsx)(u.Sequencer, {
                        className: W.sequencer,
                        staticClassName: W.sequencerStatic,
                        animatedNodeClassName: W.sequencerAnimatedNode,
                        fillParent: !0,
                        step: eN,
                        steps: eC.steps,
                        sideMargin: 20,
                        children: t
                    }),
                    e8 = eN === M.Step.PAYMENT_TYPE && 0 === T.length ? null : a;
                return L ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(O.default, {
                        className: G.paymentModalError
                    }), w && (0, n.jsx)(I.default, {
                        className: G.paymentModalBreadcrumbs,
                        isEligibleForTrial: w
                    }), (0, n.jsx)(b.PaymentPortalBody, {
                        children: e3
                    }), (0, n.jsx)(b.PaymentPortalFooter, {
                        children: e8
                    })]
                }) : (0, n.jsx)(F.default, {
                    steps: null != C ? C : eC.steps,
                    currentStep: null != v ? v : eN,
                    paymentError: E.paymentError,
                    header: D,
                    hideBreadcrumbs: j,
                    body: e3,
                    footer: e8
                })
            }

            function eT(e) {
                let {
                    defaultPaymentSourceId: t,
                    paymentSources: a,
                    hasFetchedPaymentSources: n
                } = (0, i.useStateFromStoresObject)([Y.default], () => ({
                    defaultPaymentSourceId: void 0 !== e ? e : Y.default.defaultPaymentSourceId,
                    paymentSources: Y.default.paymentSources,
                    hasFetchedPaymentSources: Y.default.hasFetchedPaymentSources
                }));
                r.useEffect(() => {
                    (0, p.createClient)(), (0, B.createClient)(), !n && (0, d.fetchPaymentSources)()
                }, []);
                let [s, l] = r.useState(t);
                null != t && null == s && l(t);
                let [o, u] = r.useState(() => ({
                    info: en,
                    isValid: !1
                })), [E, m] = r.useState(() => ({
                    info: er,
                    isValid: !1
                })), [A, T] = r.useState(""), [y, P] = r.useState(""), [f, N] = r.useState(""), [_, C] = r.useState(() => ({
                    token: null
                })), [h, M, I, g, b] = (0, i.useStateFromStoresArray)([x.default], () => [x.default.braintreeEmail, x.default.braintreeNonce, x.default.error, x.default.venmoUsername, x.default.adyenPaymentData]), [R, O] = (0, i.useStateFromStoresArray)([D.default], () => [D.default.error, D.default.isAwaitingAuthentication]);
                r.useEffect(() => {
                    let e = e => {
                        let {
                            billingAddress: t
                        } = e;
                        m({
                            info: t,
                            isValid: t.country.length > 0
                        })
                    };
                    return c.default.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), () => {
                        c.default.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, S.clearError)()
                    }
                }, []);
                let [v, j] = r.useState(!1), [L, F] = r.useState(!1), [U, H] = r.useState(null), V = r.useRef(null), G = (0, i.useStateFromStores)([D.default], () => D.default.isAwaitingAuthentication), [W, Z] = (0, i.useStateFromStoresArray)([k.default], () => [k.default.purchaseTokenAuthState, k.default.purchaseTokenHash]);
                return r.useEffect(() => {
                    null != U && null != V.current && V.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [U]), {
                    paymentSources: a,
                    paymentSourceId: s,
                    hasFetchedPaymentSources: n,
                    setPaymentSourceId: l,
                    creditCardState: o,
                    setCreditCardState: u,
                    tokenState: _,
                    setTokenState: C,
                    billingAddressState: E,
                    setBillingAddressState: m,
                    isSubmittingCurrentStep: v,
                    setIsSubmittingCurrentStep: j,
                    hasRedirectURL: L,
                    setHasRedirectURL: F,
                    braintreeEmail: h,
                    braintreeNonce: M,
                    venmoUsername: g,
                    adyenPaymentData: b,
                    paymentError: null != R ? R : I,
                    paymentAuthenticationState: O ? w.PaymentAuthenticationState.PENDING : null != R ? w.PaymentAuthenticationState.ERROR : w.PaymentAuthenticationState.NONE,
                    purchaseError: U,
                    setPurchaseError: H,
                    purchaseErrorBlockRef: V,
                    isAuthenticating: G,
                    purchaseTokenAuthState: W,
                    purchaseTokenHash: Z,
                    epsBankState: y,
                    setEpsBankState: P,
                    idealBankState: f,
                    setIdealBankState: N,
                    p24BankState: A,
                    setP24BankState: T
                }
            }