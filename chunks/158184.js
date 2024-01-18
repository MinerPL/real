"use strict";
n.r(t), n.d(t, {
  CollectiblesPaymentModalConfirmStep: function() {
    return C
  }
});
var s = n("37983"),
  r = n("884691"),
  i = n("627445"),
  l = n.n(i),
  a = n("65597"),
  u = n("206230"),
  o = n("853987"),
  d = n("923702"),
  c = n("658756"),
  f = n("408381"),
  p = n("177586"),
  E = n("635357"),
  S = n("642906"),
  h = n("891865"),
  m = n("650484"),
  I = n("367767");

function _(e) {
  let {
    handleClose: t,
    confettiCanvas: n,
    analyticsLocations: r
  } = e, {
    skusById: i,
    selectedSkuId: u,
    application: d
  } = (0, S.usePaymentContext)(), f = (0, a.default)([o.default], () => o.default.getProduct(u));
  l(null != u, "Expected selectedSkuId"), l(null != d, "Expected application");
  let p = i[u];
  return (l(null != p, "Expected sku"), null == f) ? null : (0, s.jsxs)(m.PaymentPortalBody, {
    children: [(0, s.jsx)(I.default, {}), (0, s.jsx)(c.CollectiblesCollectedModalInner, {
      product: f,
      onClose: t,
      confettiCanvas: n,
      analyticsLocations: r
    })]
  })
}

function C(e) {
  let {
    isGift: t,
    giftCode: n,
    selectedGiftStyle: i,
    hasSentMessage: l,
    giftRecipient: c,
    giftMessageError: m,
    isSendingMessage: I
  } = (0, E.useGiftContext)(), C = (0, a.default)([u.default], () => u.default.useReducedMotion), T = r.useRef(null), {
    selectedSkuId: x
  } = (0, S.usePaymentContext)(), g = (0, a.default)([o.default], () => o.default.getProduct(x)), {
    confettiColors: v
  } = (0, p.default)(null == g ? void 0 : g.styles);
  return t ? (0, s.jsxs)("div", {
    ref: T,
    children: [(0, s.jsx)(h.default, {
      giftCode: n,
      onClose: e.handleClose,
      selectedGiftStyle: i,
      hasSentMessage: l,
      giftRecipient: c,
      giftMessageError: m,
      isSendingMessage: I
    }), !C && (0, s.jsx)(d.default, {
      confettiTarget: T.current,
      confettiCanvas: e.confettiCanvas,
      sprites: (0, f.getConfettiSprites)(null == g ? void 0 : g.categorySkuId),
      colors: null == v ? void 0 : v.map(e => e.toHexString())
    })]
  }) : (0, s.jsx)(_, {
    ...e
  })
}