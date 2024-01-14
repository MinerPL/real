"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("222007"), n("70102");
var r = n("37983"),
  l = n("884691"),
  a = n("446674"),
  u = n("819855"),
  i = n("77078"),
  o = n("596523"),
  s = n("841098"),
  c = n("812204"),
  _ = n("685665"),
  d = n("649844"),
  I = n("357957"),
  f = n("10514"),
  E = n("599110"),
  N = n("719923"),
  S = n("153160"),
  O = n("713518"),
  T = n("380186"),
  p = n("809071"),
  C = n("360262"),
  L = n("510928"),
  m = n("775155"),
  R = n("646718"),
  P = n("49111"),
  M = n("782340"),
  y = n("889353"),
  U = e => {
    let {
      daysLeft: t,
      premiumType: n,
      premiumSubscription: U,
      analyticsSource: A,
      ...g
    } = e, b = (0, s.default)(), [v, G] = l.useState(!1), {
      analyticsLocations: B
    } = (0, _.default)(c.default.PREMIUM_UNCANCEL_MODAL), h = (0, a.useStateFromStores)([I.default], () => (null == U ? void 0 : U.paymentSourceId) != null ? I.default.getPaymentSource(U.paymentSourceId) : null, [U]), [x] = (0, p.useSubscriptionInvoicePreview)({
      subscriptionId: U.id,
      renewal: !0,
      analyticsLocations: (0, _.default)(c.default.PREMIUM_UNCANCEL_MODAL),
      analyticsLocation: c.default.PREMIUM_UNCANCEL_MODAL
    }), D = N.default.getPlanIdFromInvoice(U, x), Y = R.SubscriptionPlanInfo[D].skuId, k = (0, a.useStateFromStores)([f.default], () => (0, T.getOrFetchSubscriptionPlan)(D), [D]), F = (0, a.useStateFromStores)([f.default], () => f.default.isFetchingForSKU(Y)), W = null != k ? N.default.getDefaultPrice(D) : null, {
      intervalType: w,
      intervalCount: H
    } = N.default.getInterval(D), j = n === R.PremiumTypes.TIER_1, Z = null != W ? (0, S.formatPrice)(W.amount, W.currency) : null;
    return l.useEffect(() => {
      E.default.track(P.AnalyticEvents.OPEN_MODAL, {
        type: "Premium Uncancel Winback",
        source: A
      })
    }, [A]), (0, r.jsx)(i.ModalRoot, {
      ...g,
      className: y.modal,
      children: v ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(L.default, {
          premiumType: n,
          onClose: g.onClose
        }), (0, r.jsx)(m.default, {
          planId: D,
          onClose: g.onClose,
          paymentSourceType: null == h ? void 0 : h.type
        })]
      }) : (0, r.jsx)(C.default, {
        premiumType: n,
        titleText: j ? M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({
          daysLeft: t
        }) : M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({
          daysLeft: t
        }),
        subtitleText: j ? M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
        footer: (0, r.jsxs)("div", {
          children: [null !== Z ? (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: function(e) {
              switch (w) {
                case R.SubscriptionIntervalTypes.YEAR:
                  return j ? M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({
                    price: e
                  }) : M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({
                    price: e
                  });
                case R.SubscriptionIntervalTypes.MONTH:
                  if (j) return M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({
                    price: e
                  });
                  if (1 === H) return M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format({
                    price: e
                  });
                  else return M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format({
                    price: e,
                    intervalCount: H
                  });
                default:
                  throw Error("Unknown interval type ".concat(w))
              }
            }(Z)
          }) : (0, r.jsx)(i.Spinner, {
            type: i.SpinnerTypes.SPINNING_CIRCLE
          }), (0, r.jsxs)("div", {
            className: y.footer,
            children: [(0, r.jsx)(i.Button, {
              disabled: F,
              onClick: () => {
                if (null != U) {
                  let e = (0, O.planHasCurrency)(D, U.currency, null == h ? void 0 : h.id);
                  null != h && h.id === U.paymentSourceId && e ? (o.resubscribe(U, B, P.AnalyticsLocations.UNCANCEL_WINBACK_MODAL), G(!0)) : (g.onClose(), (0, d.default)({
                    initialPlanId: D,
                    analyticsLocations: B,
                    analyticsLocation: P.AnalyticsLocations.UNCANCEL_WINBACK_MODAL
                  }))
                }
              },
              children: M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
            }), (0, r.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              color: (0, u.isThemeDark)(b) ? i.Button.Colors.WHITE : i.Button.Colors.PRIMARY,
              onClick: g.onClose,
              children: M.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
            })]
          })]
        }),
        stickyFooter: !0,
        onClose: g.onClose
      })
    })
  }