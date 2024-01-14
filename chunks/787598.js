"use strict";
s.r(t), s.d(t, {
  default: function() {
    return z
  }
}), s("70102"), s("424973"), s("222007"), s("702976");
var n, r, a = s("37983"),
  l = s("884691"),
  i = s("748820"),
  o = s("446674"),
  u = s("77078"),
  d = s("913144"),
  c = s("885508"),
  p = s("465527"),
  S = s("703332"),
  h = s("657130"),
  f = s("812952"),
  E = s("846239"),
  _ = s("84460"),
  A = s("299285"),
  I = s("791160"),
  P = s("891865"),
  C = s("697218"),
  T = s("758764"),
  m = s("437712"),
  R = s("622839"),
  N = s("552712"),
  g = s("167726"),
  y = s("454589"),
  O = s("145131"),
  L = s("953109"),
  M = s("315585"),
  D = s("599110"),
  B = s("568734"),
  x = s("45640"),
  U = s("773336"),
  F = s("153160"),
  b = s("882941"),
  v = s("271560"),
  G = s("733835"),
  Y = s("391294"),
  k = s("49111"),
  j = s("782340"),
  H = s("184048");
(r = n || (n = {})).UNSUPPORTED_OS = "UNSUPPORTED_OS", r.TEST_MODE = "TEST_MODE", r.GIFT_ONLY = "GIFT_ONLY", r.PREORDER = "PREORDER";
class w extends l.PureComponent {
  getSkuPrice() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
      {
        prices: s
      } = e,
      {
        paymentSourceId: n
      } = t;
    return null == s ? null : s[null != n ? n : R.NO_PAYMENT_SOURCE]
  }
  componentDidMount() {
    let {
      sku: e,
      skuId: t,
      applicationId: s
    } = this.props;
    null == e ? p.fetchSKU(s, t).catch(e => this.handleClose(e.message)) : D.default.track(k.AnalyticEvents.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData())
  }
  componentDidUpdate(e, t) {
    null == e.sku && null != this.props.sku && D.default.track(k.AnalyticEvents.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData()), this.checkPriceChange(this.getSkuPrice(e, t), this.getSkuPrice())
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
      ...(0, I.default)(e),
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
    let r = (0, v.nativePlatformTypeToSKUOperatingSystem)((0, U.getPlatform)()),
      i = [];
    return (null == r || !e.supportedOperatingSystems.includes(r)) && !s && i.push((0, a.jsx)(f.default, {
      icon: M.default,
      iconSize: f.default.Sizes.SMALL,
      color: f.default.Colors.WARNING,
      className: H.errorBlock,
      children: j.default.Messages.APPLICATION_STORE_PURCHASE_GAME_CURRENT_OS_UNSUPPORTED
    }, "UNSUPPORTED_OS")), t && i.push((0, a.jsx)(f.default, {
      icon: M.default,
      iconSize: f.default.Sizes.SMALL,
      color: f.default.Colors.WARNING,
      className: H.errorBlock,
      children: j.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
    }, "TEST_MODE")), !0 === n && this.isGiftable && i.push((0, a.jsx)(f.default, {
      icon: M.default,
      iconSize: f.default.Sizes.SMALL,
      color: f.default.Colors.PRIMARY,
      className: H.errorBlock,
      children: j.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY
    }, "GIFT_ONLY")), e.isPreorder() && i.push((0, a.jsx)(f.default, {
      icon: M.default,
      iconSize: f.default.Sizes.SMALL,
      color: f.default.Colors.PRIMARY,
      className: H.errorBlock,
      children: j.default.Messages.APPLICATION_STORE_PURCHASE_WARNING_PREORDER.format({
        date: (0, b.getReadablePreorderReleaseDate)(e)
      })
    }, "PREORDER")), (0, a.jsx)(l.Fragment, {
      children: i
    })
  }
  renderGenericError(e, t) {
    return null == e && null == t ? null : (0, a.jsx)(u.FormErrorBlock, {
      className: H.errorBlock,
      children: null != e ? e.message : null != t ? t.message : null
    })
  }
  renderDefaultHeader(e, t, s) {
    let {
      isIAP: n,
      application: r,
      sku: l,
      purchaseError: i
    } = this.props;
    if (null == l || null == r) return null;
    let o = this.getPrice();
    return (0, a.jsxs)(u.ModalHeader, {
      direction: O.default.Direction.VERTICAL,
      align: O.default.Align.START,
      separator: !1,
      children: [(0, a.jsx)(E.default, {
        application: r,
        splashSize: 880
      }), (0, a.jsxs)(O.default, {
        align: O.default.Align.CENTER,
        className: H.headerHeader,
        children: [(0, a.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H4,
          children: (0, Y.getSkuHeaderText)(n, l.type)
        }), (0, a.jsx)(u.ModalCloseButton, {
          onClick: () => this.handleClose()
        })]
      }), (0, a.jsxs)(O.default, {
        align: O.default.Align.CENTER,
        className: H.headerContent,
        children: [(0, a.jsxs)(O.default, {
          align: O.default.Align.CENTER,
          children: [(0, a.jsx)(L.default, {
            game: r
          }), (0, a.jsx)("div", {
            className: H.applicationName,
            children: l.name
          })]
        }), (0, a.jsx)("div", {
          className: H.price,
          children: null != o ? (0, F.formatPrice)(o.amount, o.currency) : (0, a.jsx)(u.Spinner, {
            type: u.Spinner.Type.PULSING_ELLIPSIS,
            className: H.priceSpinner
          })
        })]
      }), this.renderPurchaseWarning(), this.renderGenericError(i, s), t.length > 1 ? (0, a.jsx)(y.default, {
        activeId: e,
        breadcrumbs: t,
        className: H.breadcrumbs
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
      isUserEntitledToSku: l,
      forceConfirmationStepOnMount: i,
      transitionState: o
    } = this.props;
    return null == e || t ? (0, a.jsx)(u.Spinner, {}) : (0, a.jsx)(h.default, {
      ref: this._paymentModalRef,
      transitionState: o,
      canSubmit: null != this.getSkuPrice(),
      needsToBeGift: e.type === k.SKUTypes.DURABLE_PRIMARY && !0 === l,
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
      initialStep: i ? x.Steps.CONFIRM : null,
      onStepChange: this.handleStepChange,
      isGift: this.isGift
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, this.state = {
      paymentSourceId: null
    }, this._loadId = (0, i.v4)(), this._stepStartTime = Date.now(), this._flowStartTime = Date.now(), this._paymentModalRef = l.createRef(), this.handlePaymentSourceChange = e => {
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
      if (!R.default.isPurchasingSKU) try {
        D.default.track(k.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
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
        throw D.default.track(k.AnalyticEvents.PAYMENT_FLOW_FAILED, {
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
      D.default.track(k.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...this.getBaseAnalyticsData(),
        from_step: e,
        to_step: t,
        step_duration_ms: s - this._stepStartTime,
        flow_duration_ms: s - this._flowStartTime
      }), this._stepStartTime = s, t === x.Steps.CONFIRM && p.showPurchaseConfirmationStep()
    }, this.renderHeader = (e, t, s) => {
      let {
        application: n
      } = this.props;
      if (e === x.Steps.CONFIRM) return null != n ? (0, a.jsx)(E.default, {
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
        className: H.confirmContent,
        children: (0, a.jsxs)(O.default, {
          direction: O.default.Direction.VERTICAL,
          children: [(0, a.jsx)(u.ModalCloseButton, {
            onClick: () => this.handleClose(),
            className: H.confirmCloseButton
          }), null != n ? (0, a.jsx)(P.default, {
            giftCode: n,
            application: e,
            sku: t,
            onClose: () => this.handleClose()
          }) : (0, a.jsx)(G.default, {
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
let V = l.forwardRef((e, t) => {
  var s, n;
  let {
    applicationId: r,
    skuId: l,
    ...i
  } = e, u = (0, o.useStateFromStores)([A.default], () => A.default.getApplication(r)), d = (0, B.hasFlag)(null !== (s = null == u ? void 0 : u.flags) && void 0 !== s ? s : 0, k.ApplicationFlags.EMBEDDED) && (0, B.hasFlag)(null !== (n = null == u ? void 0 : u.flags) && void 0 !== n ? n : 0, k.ApplicationFlags.EMBEDDED_IAP), [c, p, S, h, f, E, I, P, y] = (0, o.useStateFromStoresArray)([R.default], () => [R.default.getPricesForSku(l), R.default.isPurchasingSKU, R.default.error, R.default.analyticsLocation, R.default.promotionId, R.default.giftCode, R.default.isGift, R.default.isIAP, R.default.forceConfirmationStepOnMount]), [O, L] = (0, o.useStateFromStoresArray)([N.default], () => [N.default.get(l), N.default.isFetching(l)]), M = (0, o.useStateFromStores)([_.default, g.default], () => g.default.inTestModeForApplication(r) || _.default.inDevModeForApplication(r), [r]), D = (0, o.useStateFromStores)([m.default, C.default], () => m.default.isEntitledToSku(C.default.getCurrentUser(), l, r)), x = (0, o.useStateFromStores)([T.default], () => T.default.error);
  return (0, a.jsx)(w, {
    ...i,
    application: u,
    applicationId: r,
    skuId: l,
    prices: c,
    isPurchasing: p,
    purchaseError: null != x ? x : S,
    analyticsLocation: h,
    promotionId: f,
    isIAP: P,
    giftCode: E,
    isGift: I,
    forceConfirmationStepOnMount: y,
    sku: O,
    isFetchingSKU: L,
    isInTestMode: M,
    isUserEntitledToSku: D,
    isEmbeddedIAP: d,
    ref: t
  })
});
class W extends l.PureComponent {
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
    super(...e), this._skuPaymentModalRef = l.createRef()
  }
}
var z = W