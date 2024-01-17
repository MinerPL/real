"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  },
  PremiumSubscriptionGiftPurchaseConfirmation: function() {
    return C
  }
}), n("222007"), n("70102");
var s = n("37983"),
  a = n("884691"),
  l = n("627445"),
  r = n.n(l),
  i = n("446674"),
  u = n("77078"),
  o = n("465527"),
  d = n("635357"),
  c = n("891865"),
  _ = n("353365"),
  f = n("10514"),
  E = n("552712"),
  I = n("719923"),
  m = n("977934"),
  S = n("646718"),
  p = n("49111"),
  P = n("782340"),
  T = n("535539");

function N(e) {
  var t, n;
  let a, {
      planId: l,
      startingPremiumSubscriptionPlanId: u,
      paymentSourceType: o
    } = e,
    [d, c] = (0, i.useStateFromStoresArray)([f.default], () => [f.default.get(u), f.default.get(l)]);
  if (r(null != d && null != c, "Missing startingPlan or newPlan"), t = u, n = l, S.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t) < S.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(n)) switch (l) {
      case S.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
        a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, p.DELAYED_PAYMENTS.has(null != o ? o : p.PaymentSourceTypes.UNKNOWN) && (a = P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
        break;
      case S.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
        a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, p.DELAYED_PAYMENTS.has(null != o ? o : p.PaymentSourceTypes.UNKNOWN) && (a = P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
        break;
      case S.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
        a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, p.DELAYED_PAYMENTS.has(null != o ? o : p.PaymentSourceTypes.UNKNOWN) && (a = P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
        break;
      case S.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
        a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: S.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }), p.DELAYED_PAYMENTS.has(null != o ? o : p.PaymentSourceTypes.UNKNOWN) && (a = P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: S.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }));
        break;
      case S.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
      case S.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
        a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
        break;
      case S.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      case S.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
        a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      default:
        throw Error("Unexpected planId: ".concat(l))
    } else if (d.skuId === S.PremiumSubscriptionSKUs.TIER_2 && c.skuId === S.PremiumSubscriptionSKUs.TIER_1) a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else switch (c.skuId) {
      case S.PremiumSubscriptionSKUs.TIER_0:
        a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      case S.PremiumSubscriptionSKUs.TIER_1:
        a = P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
        break;
      case S.PremiumSubscriptionSKUs.TIER_2:
        a = 1 !== d.intervalCount ? P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
        break;
      default:
        throw Error("Unexpected skuId: ".concat(c.skuId))
    }
  return (0, s.jsx)("div", {
    className: T.text,
    children: a
  })
}

function M(e) {
  let t, n, {
      planId: l,
      enableNoPaymentTrial: d,
      startingPremiumSubscriptionPlanId: c,
      onClose: _,
      followupSKUInfo: M,
      isDowngrade: C,
      hideClose: R,
      postSuccessGuild: L,
      paymentSourceType: A
    } = e,
    {
      theme: g
    } = (0, u.useThemeContext)(),
    x = (0, i.useStateFromStores)([E.default], () => null != M ? E.default.get(M.id) : null);
  a.useEffect(() => {
    if (null == M || null != x) return;
    let {
      applicationId: e,
      id: t
    } = M;
    (0, o.fetchSKU)(e, t).catch(p.NOOP_NULL)
  }, [M, x]);
  let O = e => {
    if (e.skuId === S.PremiumSubscriptionSKUs.TIER_0) return p.DELAYED_PAYMENTS.has(null != A ? A : p.PaymentSourceTypes.UNKNOWN) ? P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
    if (e.skuId === S.PremiumSubscriptionSKUs.TIER_1) return p.DELAYED_PAYMENTS.has(null != A ? A : p.PaymentSourceTypes.UNKNOWN) ? P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
    return p.DELAYED_PAYMENTS.has(null != A ? A : p.PaymentSourceTypes.UNKNOWN) ? P.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : d ? P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : P.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
  };
  if (null != x) t = (0, s.jsx)("div", {
    className: T.text,
    children: P.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
      skuName: x.name
    })
  });
  else if (null != c) t = (0, s.jsx)(N, {
    planId: l,
    startingPremiumSubscriptionPlanId: c
  });
  else if (null != L) {
    let e = f.default.get(l);
    r(null != e, "Missing plan"), t = (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: T.text,
        children: O(e)
      }), (0, s.jsx)("div", {
        className: T.text,
        children: P.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
          guildName: L.name
        })
      })]
    })
  } else {
    let e = f.default.get(l);
    r(null != e, "Missing plan"), t = (0, s.jsx)("div", {
      className: T.text,
      children: O(e)
    })
  }
  let h = I.default.getPremiumType(l);
  return r(null != h, "premium type should not be null in purchase confirmation"), n = null != x ? P.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
    skuName: x.name
  }) : C ? P.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != L ? P.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : P.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, s.jsxs)("div", {
    className: T.confirmation,
    children: [(0, s.jsx)(m.default, {
      className: T.banner,
      theme: g,
      premiumType: h,
      type: p.DELAYED_PAYMENTS.has(null != A ? A : p.PaymentSourceTypes.UNKNOWN) ? m.default.Types.PREMIUM_PAYMENT_STARTED : null != c ? m.default.Types.PREMIUM_UPDATED : m.default.Types.PREMIUM_ACTIVATED
    }), t, R ? null : (0, s.jsx)(u.Button, {
      onClick: _,
      children: n
    })]
  })
}

function C(e) {
  let {
    planId: t,
    onClose: n
  } = e, {
    giftRecipient: a,
    selectedGiftStyle: l,
    hasSentMessage: u,
    giftMessageError: o,
    isSendingMessage: E
  } = (0, d.useGiftContext)(), I = (0, i.useStateFromStores)([f.default], () => f.default.get(t));
  r(null != I, "Missing plan");
  let m = (0, i.useStateFromStores)([_.default], () => _.default.getGiftCode(I.skuId));
  return (0, s.jsx)(c.default, {
    giftCode: m,
    subscriptionPlan: I,
    onClose: n,
    selectedGiftStyle: l,
    hasSentMessage: u,
    giftRecipient: a,
    giftMessageError: o,
    isSendingMessage: E
  })
}