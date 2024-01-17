"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("222007"), s("70102");
var a = s("37983"),
  _ = s("884691"),
  l = s("446674"),
  n = s("819855"),
  u = s("77078"),
  I = s("596523"),
  r = s("841098"),
  i = s("812204"),
  N = s("685665"),
  o = s("649844"),
  E = s("357957"),
  c = s("10514"),
  d = s("599110"),
  T = s("719923"),
  f = s("153160"),
  R = s("713518"),
  M = s("380186"),
  L = s("809071"),
  P = s("360262"),
  S = s("510928"),
  O = s("775155"),
  A = s("646718"),
  C = s("49111"),
  m = s("782340"),
  U = s("889353"),
  p = e => {
    let {
      daysLeft: t,
      premiumType: s,
      premiumSubscription: p,
      analyticsSource: g,
      ...G
    } = e, D = (0, r.default)(), [y, Y] = _.useState(!1), {
      analyticsLocations: b
    } = (0, N.default)(i.default.PREMIUM_UNCANCEL_MODAL), B = (0, l.useStateFromStores)([E.default], () => (null == p ? void 0 : p.paymentSourceId) != null ? E.default.getPaymentSource(p.paymentSourceId) : null, [p]), [H] = (0, L.useSubscriptionInvoicePreview)({
      subscriptionId: p.id,
      renewal: !0,
      analyticsLocations: (0, N.default)(i.default.PREMIUM_UNCANCEL_MODAL),
      analyticsLocation: i.default.PREMIUM_UNCANCEL_MODAL
    }), W = T.default.getPlanIdFromInvoice(p, H), F = A.SubscriptionPlanInfo[W].skuId, h = (0, l.useStateFromStores)([c.default], () => (0, M.getOrFetchSubscriptionPlan)(W), [W]), x = (0, l.useStateFromStores)([c.default], () => c.default.isFetchingForSKU(F)), k = null != h ? T.default.getDefaultPrice(W) : null, {
      intervalType: v,
      intervalCount: j
    } = T.default.getInterval(W), K = s === A.PremiumTypes.TIER_1, w = null != k ? (0, f.formatPrice)(k.amount, k.currency) : null;
    return _.useEffect(() => {
      d.default.track(C.AnalyticEvents.OPEN_MODAL, {
        type: "Premium Uncancel Winback",
        source: g
      })
    }, [g]), (0, a.jsx)(u.ModalRoot, {
      ...G,
      className: U.modal,
      children: y ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(S.default, {
          premiumType: s,
          onClose: G.onClose
        }), (0, a.jsx)(O.default, {
          planId: W,
          onClose: G.onClose,
          paymentSourceType: null == B ? void 0 : B.type
        })]
      }) : (0, a.jsx)(P.default, {
        premiumType: s,
        titleText: K ? m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({
          daysLeft: t
        }) : m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({
          daysLeft: t
        }),
        subtitleText: K ? m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
        footer: (0, a.jsxs)("div", {
          children: [null !== w ? (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: function(e) {
              switch (v) {
                case A.SubscriptionIntervalTypes.YEAR:
                  return K ? m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({
                    price: e
                  }) : m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({
                    price: e
                  });
                case A.SubscriptionIntervalTypes.MONTH:
                  if (K) return m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({
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
                  throw Error("Unknown interval type ".concat(v))
              }
            }(w)
          }) : (0, a.jsx)(u.Spinner, {
            type: u.SpinnerTypes.SPINNING_CIRCLE
          }), (0, a.jsxs)("div", {
            className: U.footer,
            children: [(0, a.jsx)(u.Button, {
              disabled: x,
              onClick: () => {
                if (null != p) {
                  let e = (0, R.planHasCurrency)(W, p.currency, null == B ? void 0 : B.id);
                  null != B && B.id === p.paymentSourceId && e ? (I.resubscribe(p, b, C.AnalyticsLocations.UNCANCEL_WINBACK_MODAL), Y(!0)) : (G.onClose(), (0, o.default)({
                    initialPlanId: W,
                    analyticsLocations: b,
                    analyticsLocation: C.AnalyticsLocations.UNCANCEL_WINBACK_MODAL
                  }))
                }
              },
              children: m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
            }), (0, a.jsx)(u.Button, {
              look: u.Button.Looks.LINK,
              color: (0, n.isThemeDark)(D) ? u.Button.Colors.WHITE : u.Button.Colors.PRIMARY,
              onClick: G.onClose,
              children: m.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
            })]
          })]
        }),
        stickyFooter: !0,
        onClose: G.onClose
      })
    })
  }