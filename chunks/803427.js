"use strict";
s.r(t), s.d(t, {
  REVIEW_PAYMENT_STEPS: function() {
    return Y
  },
  ADD_PAYMENT_STEPS: function() {
    return U
  },
  ADD_CARD_STEPS: function() {
    return v
  },
  ADD_PAYPAL_STEPS: function() {
    return F
  },
  ADD_PAYMENT_REQUEST_STEPS: function() {
    return G
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
}), s("222007");
var r = s("37983"),
  n = s("884691"),
  a = s("41092"),
  i = s("446674"),
  l = s("77078"),
  o = s("913144"),
  u = s("850068"),
  d = s("82731"),
  c = s("112679"),
  p = s("102985"),
  h = s("160299"),
  S = s("40597"),
  f = s("926223"),
  E = s("357957"),
  P = s("145131"),
  A = s("45640"),
  _ = s("773336"),
  m = s("159885"),
  C = s("520713"),
  I = s("814915"),
  T = s("518809"),
  N = s("195175"),
  R = s("780569"),
  y = s("490696"),
  g = s("677987"),
  O = s("393172"),
  M = s("574547"),
  L = s("392336"),
  D = s("49111"),
  B = s("782340"),
  x = s("36662"),
  b = s("258179");
let Y = [A.Steps.PAYMENT_TYPE, A.Steps.CREDIT_CARD_INFORMATION, A.Steps.REVIEW],
  U = [A.Steps.PAYMENT_TYPE, A.Steps.CREDIT_CARD_INFORMATION, A.Steps.REVIEW],
  v = [A.Steps.PAYMENT_TYPE, A.Steps.CREDIT_CARD_INFORMATION, A.Steps.ADDRESS, A.Steps.REVIEW],
  F = [A.Steps.PAYMENT_TYPE, A.Steps.PAYPAL, A.Steps.PAYPAL_ADDRESS, A.Steps.REVIEW],
  G = [A.Steps.PAYMENT_TYPE, A.Steps.PAYMENT_REQUEST_INFO, A.Steps.REVIEW],
  k = [A.Steps.PAYMENT_TYPE, A.Steps.ADDRESS, A.Steps.REVIEW],
  j = [A.Steps.PAYMENT_TYPE, A.Steps.ADDRESS, A.Steps.REVIEW],
  w = [A.Steps.PAYMENT_TYPE, A.Steps.VENMO, A.Steps.VENMO_ADDRESS, A.Steps.REVIEW],
  V = (0, m.cssValueToNumber)(b.innerPadding);
class H extends n.PureComponent {
  async componentDidMount() {
    d.createClient();
    let {
      onPaymentSourceChange: e,
      paymentSources: t,
      defaultPaymentSourceId: s,
      paymentSourceId: r
    } = this.props;
    null != e && e(null != r && r !== s && null != t[r] ? t[r] : null != s && null != t[s] ? t[s] : null);
    let n = await (0, C.getStripe)();
    this.setState({
      stripe: n
    })
  }
  componentDidUpdate(e) {
    let {
      onPaymentSourceChange: t,
      paymentSources: s,
      paymentSourceId: r
    } = this.props;
    e.paymentSourceId !== r && null != r && null != s[r] && (null == t || t(s[r]))
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
      steps: r
    } = this.props, n = r.map(e => ({
      id: e,
      label: (0, A.getCrumbLabels)(e)
    }));
    return e(s, n, null == (0, A.errorToStep)(t) ? t : null)
  }
  render() {
    let {
      size: e,
      step: t,
      steps: s,
      className: n,
      transitionState: i
    } = this.props, o = this.stepRenderer[t], u = o.renderBody();
    return (0, r.jsx)(a.Elements, {
      options: D.StripeElementsOptions,
      stripe: this.state.stripe,
      children: (0, r.jsx)(l.ModalRoot, {
        size: e,
        className: n,
        "aria-label": B.default.Messages.SKU_PAYMENT_STEPS_LABEL,
        transitionState: i,
        children: (0, r.jsx)(l.Scroller, {
          children: (0, r.jsxs)("form", {
            className: x.form,
            onSubmit: this.preventDefault,
            children: [this.renderHeader(), t !== A.Steps.CONFIRM ? (0, r.jsx)("div", {
              className: x.divider
            }) : null, null != u && (0, r.jsx)(l.ModalContent, {
              className: x.modalContent,
              children: (0, r.jsx)("div", {
                className: x.content,
                children: (0, r.jsx)(l.Sequencer, {
                  step: t,
                  steps: s,
                  sideMargin: V,
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
        let r = await u.confirmCardPaymentSource(t, s, e);
        this.props.onPaymentSourceAdd(r.id)
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
      } = this.props, a = (0, A.getStepIndex)(e, t), i = (0, A.canGoBack)(a, s) ? B.default.Messages.BACK : B.default.Messages.CANCEL;
      return (0, r.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        className: x.backButton,
        color: x.backButtonColor,
        size: x.backButtonSize,
        onClick: n,
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
          return e ? (0, r.jsx)(l.FormErrorBlock, {
            className: x.errorBlock,
            children: B.default.Messages.BILLING_ERROR_ADD_PAYMENT_SOURCE_STREAMER_MODE
          }) : (0, r.jsxs)(n.Fragment, {
            children: [(0, r.jsx)(I.default, {
              className: x.choosePaymentSourceType,
              onChooseType: t,
              allowStripeRequestPayments: !_.isPlatformEmbedded,
              onStripePaymentMethodReceived: this.handleStripePaymentRequestAdd
            }), s && (0, r.jsx)(l.Checkbox, {
              disabled: a,
              className: x.giftToggle,
              type: l.Checkbox.Types.INVERTED,
              value: i,
              onChange: this.handleToggleIsGift,
              children: (0, r.jsx)("div", {
                className: x.checkboxLabel,
                children: B.default.Messages.BILLING_IS_GIFT_PURCHASE
              })
            })]
          })
        },
        renderFooter: () => (0, r.jsx)(l.ModalFooter, {
          direction: P.default.Direction.HORIZONTAL,
          children: this.renderBackButton()
        })
      },
      [A.Steps.PAYMENT_REQUEST_INFO]: {
        renderBody: () => (0, r.jsx)(g.PaymentRequestStepBody, {
          className: x.formItem,
          stripePaymentMethod: this.props.stripePaymentMethod,
          submitting: this.props.submitting
        }),
        renderFooter: () => (0, r.jsx)(l.ModalFooter, {
          direction: P.default.Direction.HORIZONTAL,
          children: this.renderBackButton()
        })
      },
      [A.Steps.PAYPAL]: {
        renderBody: () => (0, r.jsx)(T.default, {
          className: x.formItem
        }),
        renderFooter: () => {
          let {
            submitting: e,
            braintreeNonce: t,
            braintreeEmail: s,
            onPaypalContinue: n,
            paypalClient: a
          } = this.props;
          return (0, r.jsx)(O.PaypalStepFooter, {
            submitting: e || null == a,
            braintreeNonce: t,
            braintreeEmail: s,
            onPaypalContinue: n,
            onReopenPaypal: this.handleReopenPaypal,
            renderBackButton: this.renderBackButton
          })
        }
      },
      [A.Steps.VENMO]: {
        renderBody: () => (0, r.jsx)(N.default, {
          className: x.formItem
        }),
        renderFooter: () => {
          let {
            submitting: e,
            braintreeNonce: t,
            venmoUsername: s,
            onVenmoContinue: n,
            venmoClient: a
          } = this.props;
          return (0, r.jsx)(L.VenmoStepFooter, {
            submitting: e || null == a,
            braintreeNonce: t,
            venmoUsername: s,
            onVenmoContinue: n,
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
          return (0, r.jsx)(y.CreditCardInformationBody, {
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
          } = this.state, i = async e => {
            this.setState({
              confirmingCard: !0
            });
            try {
              let r = await u.createCardToken(s, e);
              this.setState({
                token: r
              }), c.clearError(), t()
            } catch (e) {} finally {
              this.setState({
                confirmingCard: !1
              })
            }
          };
          return (0, r.jsx)(a.ElementsConsumer, {
            children: t => {
              let {
                elements: s
              } = t;
              return (0, r.jsx)(y.CreditCardInformationFooter, {
                isCardInfoValid: e,
                submitting: n,
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
          return (0, r.jsx)(R.AddressStepBody, {
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
          return (0, r.jsx)(R.AddressStepFooter, {
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
          return (0, r.jsx)(R.AddressStepBody, {
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
          return (0, r.jsx)(R.AddressStepFooter, {
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
          return (0, r.jsx)(R.AddressStepBody, {
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
          return (0, r.jsx)(R.AddressStepFooter, {
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
            hidePersonalInformation: n,
            paymentSourceId: a,
            onReviewPaymentSourceChange: i,
            onReviewPaymentSourceAdd: l,
            isGiftable: o,
            isGift: u,
            needsToBeGift: d
          } = this.props;
          return (0, r.jsx)(M.ReviewStepBody, {
            legalNotice: e,
            paymentSources: t,
            price: s,
            hidePersonalInformation: n,
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
            isPurchasing: n,
            paymentSourceId: a,
            onPurchase: i,
            needsToBeGift: l,
            isGift: o,
            paymentSources: u
          } = this.props;
          return (0, r.jsx)(M.ReviewStepFooter, {
            canSubmit: e,
            submitButtonText: t,
            useShinySubmitButton: s,
            isPurchasing: n,
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
        renderBody: () => (0, r.jsx)(l.FormTitle, {
          className: x.formTitle,
          children: B.default.Messages.PAYMENT_WAITING_FOR_AUTHENTICATION
        }),
        renderFooter: D.NOOP_NULL
      },
      ...this.props.extraRenderers
    }
  }
}
H.defaultProps = {
  canSubmit: !0,
  useShinySubmitButton: !1,
  size: l.ModalSize.SMALL,
  billingError: null,
  extraRenderers: {},
  className: x.modal
};
var W = i.default.connectStores([E.default, f.default, h.default, p.default, S.default], () => ({
  submitting: h.default.isBusy,
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
  paypalClient: S.default.getPayPalClient(),
  venmoClient: S.default.getVenmoClient(),
  hidePersonalInformation: p.default.hidePersonalInformation
}))(H)