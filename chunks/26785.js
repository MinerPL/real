"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n("37983");
n("884691");
var r = n("414456"),
  a = n.n(r),
  l = n("627445"),
  i = n.n(l),
  u = n("446674"),
  c = n("669491"),
  o = n("77078"),
  d = n("635357"),
  f = n("915639"),
  m = n("10514"),
  _ = n("659632"),
  E = n("719923"),
  I = n("153160"),
  p = n("646718"),
  N = n("782340"),
  S = n("419063");

function T(e) {
  let {
    premiumSubscription: t,
    planId: n,
    selectPlan: r,
    selected: l,
    priceOptions: T,
    shouldShowUpdatedPaymentModal: P,
    isEligibleForDiscount: C,
    discountAmountOff: A
  } = e, O = (0, u.useStateFromStores)([f.default], () => f.default.locale), h = (0, u.useStateFromStores)([m.default], () => m.default.get(n)), {
    isGift: R,
    giftRecipient: g
  } = (0, d.useGiftContext)(), M = R && (0, _.shouldShowCustomGiftExperience)(g, !0, "PremiumSwitchPlanSelectOption");
  i(null != h, "Missing subscriptionPlan");
  let v = null != t && t.planId === n,
    x = v || n === p.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [p.SubscriptionPlans.PREMIUM_YEAR_TIER_0, p.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
    L = p.DISCOUNTS[n],
    y = (0, E.getPrice)(n, !1, R, T),
    b = (0, E.isPrepaidPaymentSource)(T.paymentSourceId),
    j = null != L && !P,
    G = h.interval === p.SubscriptionIntervalTypes.YEAR ? N.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : N.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
    D = () => null != L && (0, s.jsx)(o.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: S.planOptionDiscount,
      children: N.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
        discount: (0, I.formatPercent)(O, L / 100)
      })
    }),
    U = () => h.interval === p.SubscriptionIntervalTypes.YEAR && null != t || j && !v ? h.interval === p.SubscriptionIntervalTypes.YEAR && null != t ? (0, s.jsxs)("span", {
      className: S.planOptionMonthsFree,
      children: ["(", N.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
    }) : j && !v ? D() : void 0 : null;
  return (0, s.jsxs)(o.Clickable, {
    role: M ? "menuitem" : "radio",
    "aria-checked": l,
    tabIndex: l ? 0 : -1,
    focusProps: {
      offset: {
        left: -4,
        right: -4,
        top: 0,
        bottom: 0
      }
    },
    onClick: x ? void 0 : () => r(n),
    className: a(S.planOptionClickableContainer, {
      [S.selectedPlan]: M && l,
      [S.selectionBox]: M
    }),
    children: [(0, s.jsxs)("div", {
      className: a(S.planOption, {
        [S.planOptionDisabled]: x
      }),
      children: [(0, s.jsxs)("div", {
        className: S.planOptionClickable,
        children: [!M && (0, s.jsx)(o.Checkbox, {
          readOnly: !0,
          displayOnly: !0,
          value: l,
          shape: o.Checkbox.Shapes.ROUND,
          color: c.default.unsafe_rawColors.BRAND_500.css,
          type: o.Checkbox.Types.INVERTED,
          className: S.planOptionCheckbox
        }), (0, s.jsxs)("div", {
          children: [(0, s.jsxs)("div", {
            className: a(S.planOptionInterval, {
              [S.optionSelected]: l || M,
              [S.updatedOptionSelected]: P && (l || M)
            }),
            children: [(0, E.getIntervalString)(h.interval, R, b, h.intervalCount, M, (0, E.getPremiumType)(h.id)), M && U()]
          }), M && (0, s.jsx)("div", {
            className: S.planOneTimeCost,
            children: N.default.Messages.ONE_TIME_CHARGE.format({
              currencyAmount: (0, I.formatPrice)(y.amount, y.currency)
            })
          })]
        }), v && (0, s.jsxs)("span", {
          className: S.planOptionCurrentPlan,
          children: ["(", N.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
        }), !M && U()]
      }), P ? (0, s.jsx)("div", {
        className: a({
          [S.optionPriceSelected]: l
        }),
        children: N.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
          price: (() => {
            if (C && null != A) return h.interval === p.SubscriptionIntervalTypes.MONTH ? (0, I.formatPrice)(y.amount - A, y.currency) : (0, I.formatPrice)(y.amount, y.currency);
            return (0, I.formatPrice)(0, y.currency, {
              maximumFractionDigits: 0
            })
          })()
        })
      }) : (0, s.jsx)("div", {
        className: a({
          [S.optionSelected]: l || M
        }),
        children: (0, I.formatPrice)(y.amount, y.currency)
      })]
    }), P && (0, s.jsx)("div", {
      className: S.planOptionSubtextContainer,
      children: (0, s.jsx)(o.Text, {
        variant: "text-md/normal",
        color: l ? "text-normal" : "interactive-normal",
        className: a(S.planOptionSubtext, {
          [S.discountPlanOptionSubtext]: C
        }),
        children: C && null != A ? h.interval === p.SubscriptionIntervalTypes.MONTH ? N.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE.format({
          discountedPrice: (0, I.formatPrice)(y.amount - A, y.currency),
          regularPrice: (0, I.formatPrice)(y.amount, y.currency)
        }) : N.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
          percent: L
        }) : G.format({
          price: (0, I.formatPrice)(y.amount, y.currency)
        })
      })
    })]
  })
}