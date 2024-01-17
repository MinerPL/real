"use strict";
n.r(t), n.d(t, {
  CollectiblesPaymentModalConfirmStep: function() {
    return _
  }
});
var s = n("37983"),
  r = n("884691"),
  l = n("627445"),
  i = n.n(l),
  a = n("65597"),
  u = n("206230"),
  o = n("853987"),
  d = n("923702"),
  c = n("658756"),
  f = n("57940"),
  p = n("635357"),
  E = n("642906"),
  S = n("891865"),
  h = n("650484"),
  m = n("367767");

function I(e) {
  let {
    handleClose: t,
    confettiCanvas: n,
    analyticsLocations: r
  } = e, {
    skusById: l,
    selectedSkuId: u,
    application: d
  } = (0, E.usePaymentContext)(), f = (0, a.default)([o.default], () => o.default.getProduct(u));
  i(null != u, "Expected selectedSkuId"), i(null != d, "Expected application");
  let p = l[u];
  return (i(null != p, "Expected sku"), null == f) ? null : (0, s.jsxs)(h.PaymentPortalBody, {
    children: [(0, s.jsx)(m.default, {}), (0, s.jsx)(c.CollectiblesCollectedModalInner, {
      product: f,
      onClose: t,
      confettiCanvas: n,
      analyticsLocations: r
    })]
  })
}

function _(e) {
  let {
    isGift: t,
    giftCode: n,
    selectedGiftStyle: l,
    hasSentMessage: i,
    giftRecipient: c,
    giftMessageError: h,
    isSendingMessage: m
  } = (0, p.useGiftContext)(), _ = (0, a.default)([u.default], () => u.default.useReducedMotion), T = r.useRef(null), {
    selectedSkuId: C
  } = (0, E.usePaymentContext)(), x = (0, a.default)([o.default], () => o.default.getProduct(C)), {
    confettiColors: g,
    confettiSprites: v
  } = (0, f.default)(null == x ? void 0 : x.categorySkuId);
  return t ? (0, s.jsxs)("div", {
    ref: T,
    children: [(0, s.jsx)(S.default, {
      giftCode: n,
      onClose: e.handleClose,
      selectedGiftStyle: l,
      hasSentMessage: i,
      giftRecipient: c,
      giftMessageError: h,
      isSendingMessage: m
    }), !_ && (0, s.jsx)(d.default, {
      confettiTarget: T.current,
      confettiCanvas: e.confettiCanvas,
      sprites: null != v ? v : f.DEFAULT_CONFETTI_SPRITES,
      colors: null != g ? g : f.DEFAULT_CONFETTI_COLORS
    })]
  }) : (0, s.jsx)(I, {
    ...e
  })
}