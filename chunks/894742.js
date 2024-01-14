"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("222007");
var n = s("37983"),
  r = s("884691"),
  l = s("516555"),
  i = s("812204"),
  a = s("685665"),
  u = s("635357"),
  o = s("642906"),
  d = s("85336"),
  c = s("385179"),
  f = s("292215"),
  S = s("639137"),
  E = s("526139"),
  I = s("158184"),
  p = s("385890"),
  _ = s("337978"),
  T = s("49111"),
  h = s("843455"),
  C = s("322859");

function m(e) {
  let {
    onClose: t,
    onComplete: s,
    transitionState: m,
    loadId: A,
    skuId: N,
    isGift: g = !1,
    giftRecipient: O,
    giftMessage: x,
    analyticsLocations: R,
    returnRef: P
  } = e, {
    analyticsLocations: v,
    AnalyticsLocationProvider: L
  } = (0, a.default)([...R, i.default.COLLECTIBLES_PAYMENT_MODAL]), F = r.useRef(new l.Environment), [M, j] = r.useState(null), y = [f.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, p.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, E.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG, ...f.SHARED_STEP_CONFIGS, f.REVIEW_STEP_CONFIG, {
    key: d.Step.CONFIRM,
    renderStep: e => (0, n.jsx)(I.CollectiblesPaymentModalConfirmStep, {
      ...e,
      confettiCanvas: M,
      analyticsLocations: v
    }),
    options: {
      bodyClassName: C.modalOverrideBody,
      sliderBodyClassName: C.modalOverrideSliderBody
    }
  }];
  return (0, n.jsxs)(L, {
    children: [(0, n.jsx)(l.ConfettiCanvas, {
      ref: j,
      className: C.confettiCanvas,
      environment: F.current
    }), (0, n.jsx)(o.PaymentContextProvider, {
      stepConfigs: y,
      applicationId: T.COLLECTIBLES_APPLICATION_ID,
      skuIDs: [N],
      isGift: g,
      activeSubscription: null,
      purchaseType: h.PurchaseTypes.ONE_TIME,
      children: (0, n.jsx)(u.GiftContextProvider, {
        isGift: g,
        giftRecipient: O,
        giftMessage: x,
        children: (0, n.jsx)(c.PaymentModal, {
          onClose: t,
          onComplete: s,
          loadId: A,
          applicationId: T.COLLECTIBLES_APPLICATION_ID,
          skuId: N,
          initialPlanId: null,
          analyticsLocations: v,
          transitionState: m,
          renderHeader: (e, t, s) => g ? (0, n.jsx)(S.default, {
            step: s,
            onClose: () => t(!1)
          }) : (0, n.jsx)(_.default, {
            step: s,
            onClose: () => t(!1)
          }),
          returnRef: P,
          hideShadow: !0
        })
      })
    })]
  })
}