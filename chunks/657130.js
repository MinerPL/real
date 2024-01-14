"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("222007");
var n = s("37983"),
  r = s("884691"),
  a = s("446674"),
  l = s("850068"),
  i = s("112679"),
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
    !d.default.hasFetchedPaymentSources && l.fetchPaymentSources()
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
      renderHeader: l,
      onPaymentSourceChange: i,
      price: o,
      onClearError: u,
      size: d,
      renderConfirmationBody: S,
      renderConfirmationFooter: h,
      className: f,
      isGift: E,
      isGiftable: _,
      needsToBeGift: A,
      onIsGiftUpdate: I,
      transitionState: P
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
      step: T,
      paymentSourceId: m
    } = this.state, R = this.stepsToRender;
    return (0, n.jsx)(p.default, {
      transitionState: P,
      className: f,
      isPurchasing: e,
      canSubmit: t,
      submitButtonText: s,
      useShinySubmitButton: r,
      legalNotice: a,
      renderHeader: l,
      onPaymentSourceChange: i,
      price: o,
      onClearError: u,
      size: d,
      extraRenderers: C,
      step: T,
      steps: R,
      paymentSourceId: m,
      isGiftable: _,
      isGift: E,
      needsToBeGift: A,
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
        t && i.clearError(), this.setState({
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
  let [s, r] = (0, a.useStateFromStoresArray)([d.default], () => [d.default.paymentSources, d.default.defaultPaymentSourceId]), l = (0, a.useStateFromStores)([o.default], () => o.default.error), [i, c] = (0, a.useStateFromStoresArray)([u.default], () => [u.default.error, u.default.isAwaitingAuthentication]);
  return (0, n.jsx)(f, {
    ...e,
    ref: t,
    billingError: null != i ? i : l,
    paymentSources: s,
    defaultPaymentSourceId: r,
    isAwaitingAuthentication: c
  })
})