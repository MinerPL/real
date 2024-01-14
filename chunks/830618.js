"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  o = n("446674"),
  s = n("77078"),
  a = n("812204"),
  u = n("685665"),
  d = n("217535"),
  c = n("917247"),
  f = n("697218"),
  p = n("216422"),
  m = n("719923"),
  h = n("30278"),
  E = n("49111"),
  S = n("646718"),
  g = n("782340"),
  C = n("789539");

function T(e) {
  var t, n, i, T;
  let {
    type: v,
    textValue: y,
    maxCharacterCount: x,
    showRemainingCharsAfterCount: I,
    className: N
  } = e, _ = (0, o.useStateFromStores)([f.default], () => m.default.canUseIncreasedMessageLength(f.default.getCurrentUser())), A = (0, d.default)(), R = null != x ? x : A, O = null !== (T = null != I ? I : x) && void 0 !== T ? T : A / 10, M = y.length, k = null != v.upsellLongMessages && (null != M ? M : 0) > E.MAX_MESSAGE_LENGTH && _, b = null != v.upsellLongMessages && !_, P = (null === (n = (0, c.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === S.PremiumSubscriptionSKUs.TIER_2, L = R - M, U = L > O, j = L < 0 && P, D = 0 === L ? g.default.Messages.CHARACTER_COUNT_AT_LIMIT : L > 0 ? g.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
    count: L
  }) : g.default.Messages.CHARACTER_COUNT_OVER_LIMIT, {
    AnalyticsLocationProvider: w
  } = (0, u.default)(a.default.CHARACTER_COUNT), B = k && L >= 0 || !U || b && !U;
  return B ? (0, l.jsx)(w, {
    children: (0, l.jsxs)("div", {
      className: r(N, C.characterCount, {
        [C.error]: L < 0
      }),
      children: [(0, l.jsxs)("div", {
        className: C.flairContainer,
        children: [k && L >= 0 ? (0, l.jsx)(s.Tooltip, {
          text: g.default.Messages.PREMIUM_MESSAGE_LENGTH_CHATBOX_FLAIR.format({
            maxLength: R
          }),
          position: "top",
          children: e => (0, l.jsx)(p.default, {
            className: C.premiumFlair,
            ...e
          })
        }) : null, U || j ? null : (0, l.jsx)(s.Tooltip, {
          text: D,
          position: "top",
          children: e => (0, l.jsx)("span", {
            "aria-hidden": !0,
            ...e,
            children: L
          })
        })]
      }), (0, l.jsx)(s.HiddenVisually, {
        children: g.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
          count: L
        })
      }), b && !U ? (0, l.jsx)(h.default, {
        className: C.upsell,
        iconOnly: (null === (i = v.upsellLongMessages) || void 0 === i ? void 0 : i.iconOnly) || !1,
        remaining: L
      }) : null]
    })
  }) : null
}