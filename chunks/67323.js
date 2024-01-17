"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("222007"), n("70102");
var a = n("37983"),
  l = n("884691"),
  r = n("446674"),
  s = n("819855"),
  u = n("77078"),
  o = n("596523"),
  i = n("841098"),
  _ = n("812204"),
  c = n("685665"),
  d = n("649844"),
  I = n("357957"),
  f = n("10514"),
  N = n("599110"),
  E = n("719923"),
  T = n("153160"),
  O = n("713518"),
  C = n("380186"),
  L = n("809071"),
  R = n("360262"),
  S = n("510928"),
  P = n("775155"),
  M = n("646718"),
  p = n("49111"),
  m = n("782340"),
  A = n("889353"),
  U = e => {
    let {
      daysLeft: t,
      premiumType: n,
      premiumSubscription: U,
      analyticsSource: g,
      ...y
    } = e, G = (0, i.default)(), [b, v] = l.useState(!1), {
      analyticsLocations: Y
    } = (0, c.default)(_.default.PREMIUM_UNCANCEL_MODAL), x = (0, r.useStateFromStores)([I.default], () => (null == U ? void 0 : U.paymentSourceId) != null ? I.default.getPaymentSource(U.paymentSourceId) : null, [U]), [D] = (0, L.useSubscriptionInvoicePreview)({
      subscriptionId: U.id,
      renewal: !0,
      analyticsLocations: (0, c.default)(_.default.PREMIUM_UNCANCEL_MODAL),
      analyticsLocation: _.default.PREMIUM_UNCANCEL_MODAL
    }), B = E.default.getPlanIdFromInvoice(U, D), h = M.SubscriptionPlanInfo[B].skuId, k = (0, r.useStateFromStores)([f.default], () => (0, C.getOrFetchSubscriptionPlan)(B), [B]), W = (0, r.useStateFromStores)([f.default], () => f.default.isFetchingForSKU(h)), F = null != k ? E.default.getDefaultPrice(B) : null, {
      intervalType: H,
      intervalCount: j
    } = E.default.getInterval(B), w = n === M.PremiumTypes.TIER_1, Z = null != F ? (0, T.formatPrice)(F.amount, F.currency) : null;
    return l.useEffect(() => {
      N.default.track(p.AnalyticEvents.OPEN_MODAL, {
        type: "Premium Uncancel Winback",
        source: g
      })
    }, [g]), (0, a.jsx)(u.ModalRoot, {
      ...y,
      className: A.modal,
      children: b ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(S.default, {
          premiumType: n,
          onClose: y.onClose
        }), (0, a.jsx)(P.default, {
          planId: B,
          onClose: y.onClose,
          paymentSourceType: null == x ? void 0 : x.type
        })]
      }) : (0, a.jsx)(R.default, {
        premiumType: n,
        titleText: w ? m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({
          daysLeft: t
        }) : m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({
          daysLeft: t
        }),
        subtitleText: w ? m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
        footer: (0, a.jsxs)("div", {
          children: [null !== Z ? (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: function(e) {
              switch (H) {
                case M.SubscriptionIntervalTypes.YEAR:
                  return w ? m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({
                    price: e
                  }) : m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({
                    price: e
                  });
                case M.SubscriptionIntervalTypes.MONTH:
                  if (w) return m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({
                    price: e
                  });
                  if (1 === j) return m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format({
                    price: e
                  });
                  else return m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format({
                    price: e,
                    intervalCount: j
                  });
                default:
                  throw Error("Unknown interval type ".concat(H))
              }
            }(Z)
          }) : (0, a.jsx)(u.Spinner, {
            type: u.SpinnerTypes.SPINNING_CIRCLE
          }), (0, a.jsxs)("div", {
            className: A.footer,
            children: [(0, a.jsx)(u.Button, {
              disabled: W,
              onClick: () => {
                if (null != U) {
                  let e = (0, O.planHasCurrency)(B, U.currency, null == x ? void 0 : x.id);
                  null != x && x.id === U.paymentSourceId && e ? (o.resubscribe(U, Y, p.AnalyticsLocations.UNCANCEL_WINBACK_MODAL), v(!0)) : (y.onClose(), (0, d.default)({
                    initialPlanId: B,
                    analyticsLocations: Y,
                    analyticsLocation: p.AnalyticsLocations.UNCANCEL_WINBACK_MODAL
                  }))
                }
              },
              children: m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
            }), (0, a.jsx)(u.Button, {
              look: u.Button.Looks.LINK,
              color: (0, s.isThemeDark)(G) ? u.Button.Colors.WHITE : u.Button.Colors.PRIMARY,
              onClick: y.onClose,
              children: m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
            })]
          })]
        }),
        stickyFooter: !0,
        onClose: y.onClose
      })
    })
  }