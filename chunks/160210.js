"use strict";
a.r(n), a.d(n, {
  default: function() {
    return N
  }
});
var i = a("37983");
a("884691");
var t = a("414456"),
  r = a.n(t),
  s = a("446674"),
  u = a("77078"),
  m = a("206230"),
  l = a("145131"),
  c = a("41250"),
  o = a("379863"),
  d = a("707269"),
  L = a("192441"),
  C = a("181108"),
  T = a("719923"),
  f = a("153160"),
  P = a("78345"),
  S = a("154889"),
  h = a("646718"),
  p = a("782340"),
  M = a("9180");
let A = e => {
  let {
    isTier0: n,
    discountAmount: a
  } = e;
  return (0, i.jsx)("div", {
    className: M.trialBadgeContainer,
    children: (0, i.jsx)(u.Text, {
      variant: "text-xs/bold",
      className: r(M.trialOfferText, {
        [M.tier0TrialOffer]: n
      }),
      children: void 0 !== a ? p.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
        percent: a
      }) : p.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT
    })
  })
};
var N = function(e) {
  var n;
  let a;
  let {
    hideCloseButton: t = !1,
    hideCloseOnFullScreen: N,
    shouldShowPrice: E,
    plan: x,
    renderAnimation: I,
    onClose: R,
    isGift: _,
    upgradeToPremiumType: y,
    headerTheme: g = P.PremiumHeaderThemes.DEFAULT,
    className: j,
    showTrialBadge: H = !1,
    showDiscountBadge: v = !1
  } = e, F = y === h.PremiumTypes.TIER_2;
  a = y === h.PremiumTypes.TIER_0 ? o.default : y === h.PremiumTypes.TIER_1 ? d.default : c.default;
  let O = (0, s.useStateFromStores)([m.default], () => m.default.useReducedMotion),
    B = (0, S.usePremiumDiscountOffer)(),
    w = null == B ? void 0 : null === (n = B.discount) || void 0 === n ? void 0 : n.amount;
  return (0, i.jsxs)("div", {
    "aria-hidden": !0,
    className: r({
      [M.headerBackground]: !F,
      [g === P.PremiumHeaderThemes.WINTER ? M.tier2HeaderBackgroundWinterTheme : M.tier2HeaderBackground]: F
    }, j),
    children: [O || g !== P.PremiumHeaderThemes.WINTER ? null : (0, i.jsx)(C.default, {
      className: M.snow,
      wind: 5
    }), (H || v) && (0, i.jsx)(L.default, {
      className: M.trialBadgeSparkles
    }), I(), (0, i.jsxs)(l.default, {
      align: l.default.Align.START,
      justify: l.default.Justify.BETWEEN,
      className: M.headerTop,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)(a, {
          className: r(M.headerIcon, {
            [M.nonTier2]: !F
          })
        }), (H || v) && (0, i.jsx)(A, {
          isTier0: y === h.PremiumTypes.TIER_0,
          discountAmount: v ? w : void 0
        })]
      }), !t && (0, i.jsx)(u.ModalCloseButton, {
        hideOnFullscreen: N,
        onClick: R,
        className: M.closeButton
      })]
    }), E && null != x ? (0, i.jsx)("div", {
      className: M.price,
      children: function(e, n) {
        let a = T.default.getDefaultPrice(e),
          {
            intervalType: i
          } = T.default.getInterval(e),
          t = (0, f.formatPrice)(a.amount, a.currency);
        if (n) return t;
        switch (i) {
          case h.SubscriptionIntervalTypes.MONTH:
            return p.default.Messages.BILLING_PRICE_PER_MONTH.format({
              price: t
            });
          case h.SubscriptionIntervalTypes.YEAR:
            return p.default.Messages.BILLING_PRICE_PER_YEAR.format({
              price: t
            })
        }
      }(x, _)
    }) : null]
  })
}