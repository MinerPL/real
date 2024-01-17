"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var r = s("37983"),
  n = s("884691"),
  a = s("446674"),
  i = s("850068"),
  l = s("112679"),
  o = s("926223"),
  u = s("758764"),
  d = s("357957"),
  c = s("45640"),
  p = s("803427"),
  h = s("49111");
let S = [c.Steps.REVIEW, c.Steps.CONFIRM];
class f extends n.Component {
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
      step: r
    } = this.state;
    r !== t.step && (this._hasChangedSteps = !0, null != s && s(t.step, r))
  }
  static getDerivedStateFromProps(e, t) {
    let {
      billingError: s,
      isAwaitingAuthentication: r
    } = e, {
      errorStep: n
    } = t, a = {};
    if (null == s) null != n && (a.errorStep = null);
    else {
      let e = (0, c.errorToStep)(s);
      null != e && e !== t.errorStep && (a.step = e, a.errorStep = e)
    }
    return null == t.paymentSourceId && null != e.defaultPaymentSourceId && (a.paymentSourceId = e.defaultPaymentSourceId), r ? a.step = c.Steps.AWAITING_AUTHENTICATION : t.step === c.Steps.AWAITING_AUTHENTICATION && (null != s ? a.step = c.Steps.REVIEW : a.step = c.Steps.CONFIRM), a
  }
  render() {
    let {
      isPurchasing: e,
      canSubmit: t,
      submitButtonText: s,
      useShinySubmitButton: n,
      legalNotice: a,
      renderHeader: i,
      onPaymentSourceChange: l,
      price: o,
      onClearError: u,
      size: d,
      renderConfirmationBody: h,
      renderConfirmationFooter: S,
      className: f,
      isGift: E,
      isGiftable: P,
      needsToBeGift: A,
      onIsGiftUpdate: _,
      transitionState: m
    } = this.props, C = {
      [c.Steps.CONFIRM]: {
        renderBody: h,
        renderFooter: S
      },
      [c.Steps.SELECT_PLAN]: {
        renderBody: () => this.props.renderSelectPlanBody(this.handleSelectPlan),
        renderFooter: () => this.props.renderSelectPlanFooter()
      }
    }, {
      step: I,
      paymentSourceId: T
    } = this.state, N = this.stepsToRender;
    return (0, r.jsx)(p.default, {
      transitionState: m,
      className: f,
      isPurchasing: e,
      canSubmit: t,
      submitButtonText: s,
      useShinySubmitButton: n,
      legalNotice: a,
      renderHeader: i,
      onPaymentSourceChange: l,
      price: o,
      onClearError: u,
      size: d,
      extraRenderers: C,
      step: I,
      steps: N,
      paymentSourceId: T,
      isGiftable: P,
      isGift: E,
      needsToBeGift: A,
      onIsGiftUpdate: _,
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
        steps: r
      } = this.state, n = this.stepsToRender, a = (0, c.getStepIndex)(s, n);
      if (a > 0) {
        let e = n[a - 1],
          t = e === c.Steps.PAYMENT_TYPE;
        t && l.clearError(), this.setState({
          step: e,
          steps: t ? p.ADD_PAYMENT_STEPS : r
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
        case h.PaymentSourceTypes.PAYPAL:
          this.setState({
            step: c.Steps.PAYPAL,
            steps: p.ADD_PAYPAL_STEPS
          });
          break;
        case h.PaymentSourceTypes.CARD:
          this.setState({
            step: c.Steps.CREDIT_CARD_INFORMATION,
            steps: p.ADD_CARD_STEPS
          });
          break;
        case h.PaymentSourceTypes.PAYMENT_REQUEST:
          this.setState({
            step: c.Steps.PAYMENT_REQUEST_INFO,
            steps: p.ADD_PAYMENT_REQUEST_STEPS
          });
          break;
        case h.PaymentSourceTypes.GIROPAY:
          this.setState({
            step: c.Steps.ADDRESS,
            steps: p.ADD_GIROPAY_STEPS
          });
          break;
        case h.PaymentSourceTypes.PAYSAFE_CARD:
          this.setState({
            step: c.Steps.ADDRESS,
            steps: p.ADD_PAYSAFECARD_STEPS
          });
          break;
        case h.PaymentSourceTypes.VENMO:
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
        paymentSourceId: r
      } = this.state;
      if (null != r) try {
        await t(e[r], s), this.setState({
          steps: S,
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
      initialStep: r
    } = e, n = Object.values(s).length > 0, a = r;
    null == a && (a = n ? c.Steps.REVIEW : c.Steps.PAYMENT_TYPE), this.state = {
      paymentSourceId: t,
      steps: n ? p.REVIEW_PAYMENT_STEPS : p.ADD_PAYMENT_STEPS,
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
  renderConfirmationBody: h.NOOP_NULL,
  renderConfirmationFooter: h.NOOP_NULL,
  renderSelectPlanBody: h.NOOP_NULL,
  renderSelectPlanFooter: h.NOOP_NULL
};
var E = n.forwardRef((e, t) => {
  let [s, n] = (0, a.useStateFromStoresArray)([d.default], () => [d.default.paymentSources, d.default.defaultPaymentSourceId]), i = (0, a.useStateFromStores)([o.default], () => o.default.error), [l, c] = (0, a.useStateFromStoresArray)([u.default], () => [u.default.error, u.default.isAwaitingAuthentication]);
  return (0, r.jsx)(f, {
    ...e,
    ref: t,
    billingError: null != l ? l : i,
    paymentSources: s,
    defaultPaymentSourceId: n,
    isAwaitingAuthentication: c
  })
})