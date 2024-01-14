"use strict";
s.r(t), s.d(t, {
  REVIEW_PAYMENT_STEPS: function() {
    return F
  },
  ADD_PAYMENT_STEPS: function() {
    return b
  },
  ADD_CARD_STEPS: function() {
    return v
  },
  ADD_PAYPAL_STEPS: function() {
    return G
  },
  ADD_PAYMENT_REQUEST_STEPS: function() {
    return Y
  },
  ADD_GIROPAY_STEPS: function() {
    return k
  },
  ADD_PAYSAFECARD_STEPS: function() {
    return j
  },
  ADD_VENMO_STEPS: function() {
    return H
  },
  default: function() {
    return W
  }
}), s("222007");
var n = s("37983"),
  r = s("884691"),
  a = s("41092"),
  l = s("446674"),
  i = s("77078"),
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
  I = s("773336"),
  P = s("159885"),
  C = s("520713"),
  T = s("814915"),
  m = s("518809"),
  R = s("195175"),
  N = s("780569"),
  g = s("490696"),
  y = s("677987"),
  O = s("393172"),
  L = s("574547"),
  M = s("392336"),
  D = s("49111"),
  B = s("782340"),
  x = s("36662"),
  U = s("258179");
let F = [A.Steps.PAYMENT_TYPE, A.Steps.CREDIT_CARD_INFORMATION, A.Steps.REVIEW],
  b = [A.Steps.PAYMENT_TYPE, A.Steps.CREDIT_CARD_INFORMATION, A.Steps.REVIEW],
  v = [A.Steps.PAYMENT_TYPE, A.Steps.CREDIT_CARD_INFORMATION, A.Steps.ADDRESS, A.Steps.REVIEW],
  G = [A.Steps.PAYMENT_TYPE, A.Steps.PAYPAL, A.Steps.PAYPAL_ADDRESS, A.Steps.REVIEW],
  Y = [A.Steps.PAYMENT_TYPE, A.Steps.PAYMENT_REQUEST_INFO, A.Steps.REVIEW],
  k = [A.Steps.PAYMENT_TYPE, A.Steps.ADDRESS, A.Steps.REVIEW],
  j = [A.Steps.PAYMENT_TYPE, A.Steps.ADDRESS, A.Steps.REVIEW],
  H = [A.Steps.PAYMENT_TYPE, A.Steps.VENMO, A.Steps.VENMO_ADDRESS, A.Steps.REVIEW],
  w = (0, P.cssValueToNumber)(U.innerPadding);
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
    e.paymentSourceId !== n && null != n && null != s[n] && (null == t || t(s[n]))
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
      transitionState: l
    } = this.props, o = this.stepRenderer[t], u = o.renderBody();
    return (0, n.jsx)(a.Elements, {
      options: D.StripeElementsOptions,
      stripe: this.state.stripe,
      children: (0, n.jsx)(i.ModalRoot, {
        size: e,
        className: r,
        "aria-label": B.default.Messages.SKU_PAYMENT_STEPS_LABEL,
        transitionState: l,
        children: (0, n.jsx)(i.Scroller, {
          children: (0, n.jsxs)("form", {
            className: x.form,
            onSubmit: this.preventDefault,
            children: [this.renderHeader(), t !== A.Steps.CONFIRM ? (0, n.jsx)("div", {
              className: x.divider
            }) : null, null != u && (0, n.jsx)(i.ModalContent, {
              className: x.modalContent,
              children: (0, n.jsx)("div", {
                className: x.content,
                children: (0, n.jsx)(i.Sequencer, {
                  step: t,
                  steps: s,
                  sideMargin: w,
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
      } = this.props, a = (0, A.getStepIndex)(e, t), l = (0, A.canGoBack)(a, s) ? B.default.Messages.BACK : B.default.Messages.CANCEL;
      return (0, n.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        className: x.backButton,
        color: x.backButtonColor,
        size: x.backButtonSize,
        onClick: r,
        children: l
      })
    }, this.stepRenderer = {
      [A.Steps.PAYMENT_TYPE]: {
        renderBody: () => {
          let {
            hidePersonalInformation: e,
            onChoosePaymentType: t,
            isGiftable: s,
            needsToBeGift: a,
            isGift: l
          } = this.props;
          return e ? (0, n.jsx)(i.FormErrorBlock, {
            className: x.errorBlock,
            children: B.default.Messages.BILLING_ERROR_ADD_PAYMENT_SOURCE_STREAMER_MODE
          }) : (0, n.jsxs)(r.Fragment, {
            children: [(0, n.jsx)(T.default, {
              className: x.choosePaymentSourceType,
              onChooseType: t,
              allowStripeRequestPayments: !I.isPlatformEmbedded,
              onStripePaymentMethodReceived: this.handleStripePaymentRequestAdd
            }), s && (0, n.jsx)(i.Checkbox, {
              disabled: a,
              className: x.giftToggle,
              type: i.Checkbox.Types.INVERTED,
              value: l,
              onChange: this.handleToggleIsGift,
              children: (0, n.jsx)("div", {
                className: x.checkboxLabel,
                children: B.default.Messages.BILLING_IS_GIFT_PURCHASE
              })
            })]
          })
        },
        renderFooter: () => (0, n.jsx)(i.ModalFooter, {
          direction: _.default.Direction.HORIZONTAL,
          children: this.renderBackButton()
        })
      },
      [A.Steps.PAYMENT_REQUEST_INFO]: {
        renderBody: () => (0, n.jsx)(y.PaymentRequestStepBody, {
          className: x.formItem,
          stripePaymentMethod: this.props.stripePaymentMethod,
          submitting: this.props.submitting
        }),
        renderFooter: () => (0, n.jsx)(i.ModalFooter, {
          direction: _.default.Direction.HORIZONTAL,
          children: this.renderBackButton()
        })
      },
      [A.Steps.PAYPAL]: {
        renderBody: () => (0, n.jsx)(m.default, {
          className: x.formItem
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
          className: x.formItem
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
          } = this.state, l = async e => {
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
                onCreditCardContinue: () => l(s)
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
            onReviewPaymentSourceChange: l,
            onReviewPaymentSourceAdd: i,
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
            onPaymentSourceChange: l,
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
            isPurchasing: r,
            paymentSourceId: a,
            onPurchase: l,
            needsToBeGift: i,
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
            onPurchase: l,
            tooltipText: this.disabledTooltip,
            needsToBeGift: i,
            isGift: o
          })
        }
      },
      [A.Steps.CONFIRM]: {
        renderBody: D.NOOP_NULL,
        renderFooter: D.NOOP_NULL
      },
      [A.Steps.AWAITING_AUTHENTICATION]: {
        renderBody: () => (0, n.jsx)(i.FormTitle, {
          className: x.formTitle,
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
  size: i.ModalSize.SMALL,
  billingError: null,
  extraRenderers: {},
  className: x.modal
};
var W = l.default.connectStores([E.default, f.default, S.default, p.default, h.default], () => ({
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