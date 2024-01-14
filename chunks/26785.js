"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
});
var s = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  i = n("627445"),
  a = n.n(i),
  u = n("446674"),
  o = n("669491"),
  c = n("77078"),
  d = n("635357"),
  f = n("915639"),
  m = n("10514"),
  _ = n("659632"),
  E = n("719923"),
  I = n("153160"),
  p = n("646718"),
  N = n("782340"),
  S = n("419063");

function P(e) {
  let {
    premiumSubscription: t,
    planId: n,
    selectPlan: r,
    selected: i,
    priceOptions: P,
    shouldShowUpdatedPaymentModal: T,
    isEligibleForDiscount: C,
    discountAmountOff: A
  } = e, h = (0, u.useStateFromStores)([f.default], () => f.default.locale), O = (0, u.useStateFromStores)([m.default], () => m.default.get(n)), {
    isGift: R,
    giftRecipient: g
  } = (0, d.useGiftContext)(), v = R && (0, _.shouldShowCustomGiftExperience)(g, !0, "PremiumSwitchPlanSelectOption");
  a(null != O, "Missing subscriptionPlan");
  let M = null != t && t.planId === n,
    x = M || n === p.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [p.SubscriptionPlans.PREMIUM_YEAR_TIER_0, p.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
    y = p.DISCOUNTS[n],
    L = (0, E.getPrice)(n, !1, R, P),
    b = (0, E.isPrepaidPaymentSource)(P.paymentSourceId),
    j = null != y && !T,
    G = O.interval === p.SubscriptionIntervalTypes.YEAR ? N.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : N.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
    D = () => null != y && (0, s.jsx)(c.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: S.planOptionDiscount,
      children: N.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
        discount: (0, I.formatPercent)(h, y / 100)
      })
    }),
    U = () => O.interval === p.SubscriptionIntervalTypes.YEAR && null != t || j && !M ? O.interval === p.SubscriptionIntervalTypes.YEAR && null != t ? (0, s.jsxs)("span", {
      className: S.planOptionMonthsFree,
      children: ["(", N.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
    }) : j && !M ? D() : void 0 : null;
  return (0, s.jsxs)(c.Clickable, {
    role: v ? "menuitem" : "radio",
    "aria-checked": i,
    tabIndex: i ? 0 : -1,
    focusProps: {
      offset: {
        left: -4,
        right: -4,
        top: 0,
        bottom: 0
      }
    },
    onClick: x ? void 0 : () => r(n),
    className: l(S.planOptionClickableContainer, {
      [S.selectedPlan]: v && i,
      [S.selectionBox]: v
    }),
    children: [(0, s.jsxs)("div", {
      className: l(S.planOption, {
        [S.planOptionDisabled]: x
      }),
      children: [(0, s.jsxs)("div", {
        className: S.planOptionClickable,
        children: [!v && (0, s.jsx)(c.Checkbox, {
          readOnly: !0,
          displayOnly: !0,
          value: i,
          shape: c.Checkbox.Shapes.ROUND,
          color: o.default.unsafe_rawColors.BRAND_500.css,
          type: c.Checkbox.Types.INVERTED,
          className: S.planOptionCheckbox
        }), (0, s.jsxs)("div", {
          children: [(0, s.jsxs)("div", {
            className: l(S.planOptionInterval, {
              [S.optionSelected]: i || v,
              [S.updatedOptionSelected]: T && (i || v)
            }),
            children: [(0, E.getIntervalString)(O.interval, R, b, O.intervalCount, v, (0, E.getPremiumType)(O.id)), v && U()]
          }), v && (0, s.jsx)("div", {
            className: S.planOneTimeCost,
            children: N.default.Messages.ONE_TIME_CHARGE.format({
              currencyAmount: (0, I.formatPrice)(L.amount, L.currency)
            })
          })]
        }), M && (0, s.jsxs)("span", {
          className: S.planOptionCurrentPlan,
          children: ["(", N.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
        }), !v && U()]
      }), T ? (0, s.jsx)("div", {
        className: l({
          [S.optionPriceSelected]: i
        }),
        children: N.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
          price: (() => {
            if (C && null != A) return O.interval === p.SubscriptionIntervalTypes.MONTH ? (0, I.formatPrice)(L.amount - A, L.currency) : (0, I.formatPrice)(L.amount, L.currency);
            return (0, I.formatPrice)(0, L.currency, {
              maximumFractionDigits: 0
            })
          })()
        })
      }) : (0, s.jsx)("div", {
        className: l({
          [S.optionSelected]: i || v
        }),
        children: (0, I.formatPrice)(L.amount, L.currency)
      })]
    }), T && (0, s.jsx)("div", {
      className: S.planOptionSubtextContainer,
      children: (0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        color: i ? "text-normal" : "interactive-normal",
        className: l(S.planOptionSubtext, {
          [S.discountPlanOptionSubtext]: C
        }),
        children: C && null != A ? O.interval === p.SubscriptionIntervalTypes.MONTH ? N.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
          discountedPrice: (0, I.formatPrice)(L.amount - A, L.currency),
          regularPrice: (0, I.formatPrice)(L.amount, L.currency)
        }) : N.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
          percent: y
        }) : G.format({
          price: (0, I.formatPrice)(L.amount, L.currency)
        })
      })
    })]
  })
}