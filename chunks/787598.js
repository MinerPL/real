"use strict";
s.r(t), s.d(t, {
  default: function() {
    return Z
  }
}), s("70102"), s("424973"), s("222007"), s("702976");
var r, n, a = s("37983"),
  i = s("884691"),
  l = s("748820"),
  o = s("446674"),
  u = s("77078"),
  d = s("913144"),
  c = s("885508"),
  p = s("465527"),
  h = s("703332"),
  S = s("657130"),
  f = s("812952"),
  E = s("846239"),
  P = s("84460"),
  A = s("299285"),
  _ = s("791160"),
  m = s("891865"),
  C = s("697218"),
  I = s("758764"),
  T = s("437712"),
  N = s("622839"),
  R = s("552712"),
  y = s("167726"),
  g = s("454589"),
  O = s("145131"),
  M = s("953109"),
  L = s("315585"),
  D = s("599110"),
  B = s("568734"),
  x = s("45640"),
  b = s("773336"),
  Y = s("153160"),
  U = s("882941"),
  v = s("271560"),
  F = s("733835"),
  G = s("391294"),
  k = s("49111"),
  j = s("782340"),
  w = s("184048");
(n = r || (r = {})).UNSUPPORTED_OS = "UNSUPPORTED_OS", n.TEST_MODE = "TEST_MODE", n.GIFT_ONLY = "GIFT_ONLY", n.PREORDER = "PREORDER";
class V extends i.PureComponent {
  getSkuPrice() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
      {
        prices: s
      } = e,
      {
        paymentSourceId: r
      } = t;
    return null == s ? null : s[null != r ? r : N.NO_PAYMENT_SOURCE]
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
      onClose: r
    } = this.props;
    null != e && null != t && e.discount_percent_off !== t.discount_percent_off && d.default.wait(() => {
      if (null == s) throw Error("Unexpected null SKU");
      r(k.PaymentModalPriceChangedError)
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
      paymentSourceId: r
    } = this.state;
    if (null == r) {
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
      promotionId: r
    } = this.props;
    if (null == e) return {};
    let n = this.getPrice();
    return {
      ...(0, _.default)(e),
      load_id: this._loadId,
      payment_type: k.PurchaseTypeToAnalyticsPaymentType[k.PurchaseTypes.ONE_TIME],
      is_gift: this.isGift,
      client_event_source: s === k.AppContext.OVERLAY ? k.AppContext.OVERLAY : null,
      location: t,
      price: null != n ? n.amount : null,
      currency: null != n ? n.currency : null,
      location_promotion_id: r
    }
  }
  renderPurchaseWarning() {
    let {
      sku: e,
      isInTestMode: t,
      isIAP: s,
      isUserEntitledToSku: r
    } = this.props;
    if (null == e) return null;
    let n = (0, v.nativePlatformTypeToSKUOperatingSystem)((0, b.getPlatform)()),
      l = [];
    return (null == n || !e.supportedOperatingSystems.includes(n)) && !s && l.push((0, a.jsx)(f.default, {
      icon: L.default,
      iconSize: f.default.Sizes.SMALL,
      color: f.default.Colors.WARNING,
      className: w.errorBlock,
      children: j.default.Messages.APPLICATION_STORE_PURCHASE_GAME_CURRENT_OS_UNSUPPORTED
    }, "UNSUPPORTED_OS")), t && l.push((0, a.jsx)(f.default, {
      icon: L.default,
      iconSize: f.default.Sizes.SMALL,
      color: f.default.Colors.WARNING,
      className: w.errorBlock,
      children: j.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
    }, "TEST_MODE")), !0 === r && this.isGiftable && l.push((0, a.jsx)(f.default, {
      icon: L.default,
      iconSize: f.default.Sizes.SMALL,
      color: f.default.Colors.PRIMARY,
      className: w.errorBlock,
      children: j.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY
    }, "GIFT_ONLY")), e.isPreorder() && l.push((0, a.jsx)(f.default, {
      icon: L.default,
      iconSize: f.default.Sizes.SMALL,
      color: f.default.Colors.PRIMARY,
      className: w.errorBlock,
      children: j.default.Messages.APPLICATION_STORE_PURCHASE_WARNING_PREORDER.format({
        date: (0, U.getReadablePreorderReleaseDate)(e)
      })
    }, "PREORDER")), (0, a.jsx)(i.Fragment, {
      children: l
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
      isIAP: r,
      application: n,
      sku: i,
      purchaseError: l
    } = this.props;
    if (null == i || null == n) return null;
    let o = this.getPrice();
    return (0, a.jsxs)(u.ModalHeader, {
      direction: O.default.Direction.VERTICAL,
      align: O.default.Align.START,
      separator: !1,
      children: [(0, a.jsx)(E.default, {
        application: n,
        splashSize: 880
      }), (0, a.jsxs)(O.default, {
        align: O.default.Align.CENTER,
        className: w.headerHeader,
        children: [(0, a.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H4,
          children: (0, G.getSkuHeaderText)(r, i.type)
        }), (0, a.jsx)(u.ModalCloseButton, {
          onClick: () => this.handleClose()
        })]
      }), (0, a.jsxs)(O.default, {
        align: O.default.Align.CENTER,
        className: w.headerContent,
        children: [(0, a.jsxs)(O.default, {
          align: O.default.Align.CENTER,
          children: [(0, a.jsx)(M.default, {
            game: n
          }), (0, a.jsx)("div", {
            className: w.applicationName,
            children: i.name
          })]
        }), (0, a.jsx)("div", {
          className: w.price,
          children: null != o ? (0, Y.formatPrice)(o.amount, o.currency) : (0, a.jsx)(u.Spinner, {
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
      isEmbeddedIAP: r,
      purchaseError: n,
      isUserEntitledToSku: i,
      forceConfirmationStepOnMount: l,
      transitionState: o
    } = this.props;
    return null == e || t ? (0, a.jsx)(u.Spinner, {}) : (0, a.jsx)(S.default, {
      ref: this._paymentModalRef,
      transitionState: o,
      canSubmit: null != this.getSkuPrice(),
      needsToBeGift: e.type === k.SKUTypes.DURABLE_PRIMARY && !0 === i,
      isGiftable: this.isGiftable,
      legalNotice: r ? (0, a.jsx)(h.default, {
        isEmbeddedIAP: r
      }) : null,
      isPurchasing: s,
      purchaseError: n,
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
      initialStep: l ? x.Steps.CONFIRM : null,
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
      } = this.props, r = this.getPrice(), n = null != r ? r.amount : 0, a = null != r ? r.currency : k.CurrencyCodes.USD;
      if (null == s) throw Error("SKU is null during purchase");
      if (!N.default.isPurchasingSKU) try {
        D.default.track(k.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
          ...this.getBaseAnalyticsData(),
          duration_ms: Date.now() - this._flowStartTime
        }), await p.purchaseSKU(t, s.id, {
          expectedAmount: n,
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
        application: r
      } = this.props;
      if (e === x.Steps.CONFIRM) return null != r ? (0, a.jsx)(E.default, {
        application: r,
        splashSize: 880
      }) : null;
      return this.renderDefaultHeader(e, t, s)
    }, this.renderConfirmation = () => {
      let {
        application: e,
        sku: t,
        isIAP: s,
        giftCode: r
      } = this.props;
      if (null == t || null == e) throw Error("No SKU for confirmation step!");
      return (0, a.jsx)("div", {
        className: w.confirmContent,
        children: (0, a.jsxs)(O.default, {
          direction: O.default.Direction.VERTICAL,
          children: [(0, a.jsx)(u.ModalCloseButton, {
            onClick: () => this.handleClose(),
            className: w.confirmCloseButton
          }), null != r ? (0, a.jsx)(m.default, {
            giftCode: r,
            application: e,
            sku: t,
            onClose: () => this.handleClose()
          }) : (0, a.jsx)(F.default, {
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
let H = i.forwardRef((e, t) => {
  var s, r;
  let {
    applicationId: n,
    skuId: i,
    ...l
  } = e, u = (0, o.useStateFromStores)([A.default], () => A.default.getApplication(n)), d = (0, B.hasFlag)(null !== (s = null == u ? void 0 : u.flags) && void 0 !== s ? s : 0, k.ApplicationFlags.EMBEDDED) && (0, B.hasFlag)(null !== (r = null == u ? void 0 : u.flags) && void 0 !== r ? r : 0, k.ApplicationFlags.EMBEDDED_IAP), [c, p, h, S, f, E, _, m, g] = (0, o.useStateFromStoresArray)([N.default], () => [N.default.getPricesForSku(i), N.default.isPurchasingSKU, N.default.error, N.default.analyticsLocation, N.default.promotionId, N.default.giftCode, N.default.isGift, N.default.isIAP, N.default.forceConfirmationStepOnMount]), [O, M] = (0, o.useStateFromStoresArray)([R.default], () => [R.default.get(i), R.default.isFetching(i)]), L = (0, o.useStateFromStores)([P.default, y.default], () => y.default.inTestModeForApplication(n) || P.default.inDevModeForApplication(n), [n]), D = (0, o.useStateFromStores)([T.default, C.default], () => T.default.isEntitledToSku(C.default.getCurrentUser(), i, n)), x = (0, o.useStateFromStores)([I.default], () => I.default.error);
  return (0, a.jsx)(V, {
    ...l,
    application: u,
    applicationId: n,
    skuId: i,
    prices: c,
    isPurchasing: p,
    purchaseError: null != x ? x : h,
    analyticsLocation: S,
    promotionId: f,
    isIAP: m,
    giftCode: E,
    isGift: _,
    forceConfirmationStepOnMount: g,
    sku: O,
    isFetchingSKU: M,
    isInTestMode: L,
    isUserEntitledToSku: D,
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
    return (0, a.jsx)(H, {
      ...this.props,
      ref: this._skuPaymentModalRef,
      onClose: () => this.handleClose()
    })
  }
  constructor(...e) {
    super(...e), this._skuPaymentModalRef = i.createRef()
  }
}
var Z = W