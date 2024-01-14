"use strict";
t.r(s), t.d(s, {
  default: function() {
    return M
  },
  PremiumSubscriptionGiftPurchaseConfirmation: function() {
    return C
  }
}), t("222007"), t("70102");
var a = t("37983"),
  l = t("884691"),
  n = t("627445"),
  u = t.n(n),
  _ = t("446674"),
  i = t("77078"),
  I = t("465527"),
  r = t("635357"),
  d = t("891865"),
  N = t("353365"),
  E = t("10514"),
  o = t("552712"),
  T = t("719923"),
  R = t("977934"),
  c = t("646718"),
  S = t("49111"),
  f = t("782340"),
  A = t("535539");

function P(e) {
  var s, t;
  let l, {
      planId: n,
      startingPremiumSubscriptionPlanId: i,
      paymentSourceType: I
    } = e,
    [r, d] = (0, _.useStateFromStoresArray)([E.default], () => [E.default.get(i), E.default.get(n)]);
  if (u(null != r && null != d, "Missing startingPlan or newPlan"), s = i, t = n, c.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(s) < c.ORDERED_PREMIUM_SUBSCRIPTION_PLANS.indexOf(t)) switch (n) {
      case c.SubscriptionPlans.PREMIUM_MONTH_TIER_1:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1, S.DELAYED_PAYMENTS.has(null != I ? I : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format());
        break;
      case c.SubscriptionPlans.PREMIUM_MONTH_TIER_2:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MONTH, S.DELAYED_PAYMENTS.has(null != I ? I : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format());
        break;
      case c.SubscriptionPlans.PREMIUM_YEAR_TIER_1:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_1_YEAR, S.DELAYED_PAYMENTS.has(null != I ? I : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_1_YEAR.format());
        break;
      case c.SubscriptionPlans.PREMIUM_YEAR_TIER_2:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: c.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }), S.DELAYED_PAYMENTS.has(null != I ? I : S.PaymentSourceTypes.UNKNOWN) && (l = f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_UPGRADE_TIER_2_YEAR.format({
          numFreeGuildSubscriptions: c.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM
        }));
        break;
      case c.SubscriptionPlans.PREMIUM_3_MONTH_TIER_2:
      case c.SubscriptionPlans.PREMIUM_6_MONTH_TIER_2:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_UPGRADE_TIER_2_MULTI_MONTH;
        break;
      case c.SubscriptionPlans.PREMIUM_MONTH_TIER_0:
      case c.SubscriptionPlans.PREMIUM_YEAR_TIER_0:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      default:
        throw Error("Unexpected planId: ".concat(n))
    } else if (r.skuId === c.PremiumSubscriptionSKUs.TIER_2 && d.skuId === c.PremiumSubscriptionSKUs.TIER_1) l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_TO_TIER_1;
    else switch (d.skuId) {
      case c.PremiumSubscriptionSKUs.TIER_0:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TO_TIER_0;
        break;
      case c.PremiumSubscriptionSKUs.TIER_1:
        l = f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1_YEAR_TO_MONTH;
        break;
      case c.PremiumSubscriptionSKUs.TIER_2:
        l = 1 !== r.intervalCount ? f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_GENERIC_TO_MONTH : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_YEAR_TO_MONTH;
        break;
      default:
        throw Error("Unexpected skuId: ".concat(d.skuId))
    }
  return (0, a.jsx)("div", {
    className: A.text,
    children: l
  })
}

function M(e) {
  let s, t, {
      planId: n,
      enableNoPaymentTrial: r,
      startingPremiumSubscriptionPlanId: d,
      onClose: N,
      followupSKUInfo: M,
      isDowngrade: C,
      hideClose: L,
      postSuccessGuild: O,
      paymentSourceType: m
    } = e,
    {
      theme: p
    } = (0, i.useThemeContext)(),
    g = (0, _.useStateFromStores)([o.default], () => null != M ? o.default.get(M.id) : null);
  l.useEffect(() => {
    if (null == M || null != g) return;
    let {
      applicationId: e,
      id: s
    } = M;
    (0, I.fetchSKU)(e, s).catch(S.NOOP_NULL)
  }, [M, g]);
  let U = e => {
    if (e.skuId === c.PremiumSubscriptionSKUs.TIER_0) return S.DELAYED_PAYMENTS.has(null != m ? m : S.PaymentSourceTypes.UNKNOWN) ? f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_0;
    if (e.skuId === c.PremiumSubscriptionSKUs.TIER_1) return S.DELAYED_PAYMENTS.has(null != m ? m : S.PaymentSourceTypes.UNKNOWN) ? f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_1.format() : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_1;
    return S.DELAYED_PAYMENTS.has(null != m ? m : S.PaymentSourceTypes.UNKNOWN) ? f.default.Messages.BILLING_SWITCH_PLAN_DELAYED_CONFIRMATION_TIER_2.format() : r ? f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2_NO_PAYMENT_TRIAL : f.default.Messages.BILLING_SWITCH_PLAN_CONFIRM_TIER_2
  };
  if (null != g) s = (0, a.jsx)("div", {
    className: A.text,
    children: f.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BLURB_IAP.format({
      skuName: g.name
    })
  });
  else if (null != d) s = (0, a.jsx)(P, {
    planId: n,
    startingPremiumSubscriptionPlanId: d
  });
  else if (null != O) {
    let e = E.default.get(n);
    u(null != e, "Missing plan"), s = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: A.text,
        children: U(e)
      }), (0, a.jsx)("div", {
        className: A.text,
        children: f.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI.format({
          guildName: O.name
        })
      })]
    })
  } else {
    let e = E.default.get(n);
    u(null != e, "Missing plan"), s = (0, a.jsx)("div", {
      className: A.text,
      children: U(e)
    })
  }
  let h = T.default.getPremiumType(n);
  return u(null != h, "premium type should not be null in purchase confirmation"), t = null != g ? f.default.Messages.PREMIUM_PAYMENT_CONFIRMATION_BUTTON_IAP.format({
    skuName: g.name
  }) : C ? f.default.Messages.PREMIUM_DOWNGRADE_DONE_BUTTON : null != O ? f.default.Messages.BILLING_POST_PURCHASE_JOIN_GUILD_FOR_EMOJI_CTA : f.default.Messages.PREMIUM_UPGRADE_DONE_BUTTON, (0, a.jsxs)("div", {
    className: A.confirmation,
    children: [(0, a.jsx)(R.default, {
      className: A.banner,
      theme: p,
      premiumType: h,
      type: S.DELAYED_PAYMENTS.has(null != m ? m : S.PaymentSourceTypes.UNKNOWN) ? R.default.Types.PREMIUM_PAYMENT_STARTED : null != d ? R.default.Types.PREMIUM_UPDATED : R.default.Types.PREMIUM_ACTIVATED
    }), s, L ? null : (0, a.jsx)(i.Button, {
      onClick: N,
      children: t
    })]
  })
}

function C(e) {
  let {
    planId: s,
    onClose: t
  } = e, {
    giftRecipient: l,
    selectedGiftStyle: n,
    hasSentMessage: i,
    giftMessageError: I,
    isSendingMessage: o
  } = (0, r.useGiftContext)(), T = (0, _.useStateFromStores)([E.default], () => E.default.get(s));
  u(null != T, "Missing plan");
  let R = (0, _.useStateFromStores)([N.default], () => N.default.getGiftCode(T.skuId));
  return (0, a.jsx)(d.default, {
    giftCode: R,
    subscriptionPlan: T,
    onClose: t,
    selectedGiftStyle: n,
    hasSentMessage: i,
    giftRecipient: l,
    giftMessageError: I,
    isSendingMessage: o
  })
}