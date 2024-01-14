"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("522632"),
  i = s("446674"),
  r = s("77078"),
  o = s("850068"),
  d = s("775433"),
  u = s("308757"),
  c = s("812204"),
  S = s("685665"),
  E = s("585653"),
  f = s("617917"),
  T = s("257869"),
  m = s("837008"),
  _ = s("108314"),
  g = s("946964"),
  h = s("649844"),
  I = s("509167"),
  N = s("635956"),
  p = s("305961"),
  C = s("521012"),
  A = s("49111"),
  O = s("646718"),
  x = s("596650");

function R(e) {
  let {
    selectedGuildForGuildSub: t
  } = e, s = (0, m.useGroupListingsForGuild)(null == t ? void 0 : t.id)[0];
  return (0, a.jsx)(a.Fragment, {
    children: null != t && null != s ? (0, a.jsx)("div", {
      className: x.formItem,
      children: s.subscription_listings_ids.map(e => (0, a.jsx)(_.default, {
        guildId: t.id,
        groupListingId: e,
        listingId: e
      }, e))
    }) : null
  })
}
var M = function() {
  let [e, t] = n.useState(O.PremiumSubscriptionSKUs.TIER_2), [s, m] = n.useState(null), [_] = (0, i.useStateFromStoresArray)([p.default], () => [p.default.getGuilds()]), [M] = (0, i.useStateFromStoresArray)([C.default], () => [C.default.getPremiumSubscription()]), v = Object.values(_).map(e => ({
    value: e,
    label: e.name
  })), [D, L] = n.useState(v.length > 0 ? v[0].value : null), [P, j] = n.useState(""), [b, U] = n.useState({
    plan_id: O.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
    gift: "true"
  }), B = "true" !== b.gift && null != M, [y, F] = n.useState(v.length > 0 ? v[0].value : null), {
    AnalyticsLocationProvider: G,
    analyticsLocations: k
  } = (0, S.default)(c.default.PAYMENT_FLOW_TEST_PAGE), [H, w] = n.useState(""), [V, Y] = n.useState(""), [W, K] = n.useState(""), [z, Q] = n.useState(""), [q, Z] = n.useState("");
  return (0, a.jsx)(G, {
    children: (0, a.jsxs)(r.FormSection, {
      title: "Payment Flow Modals",
      tag: r.FormTitleTags.H1,
      children: [(0, a.jsx)(r.FormTitle, {
        children: "Gift"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: e,
          options: [{
            value: O.PremiumSubscriptionSKUs.TIER_2,
            label: "Nitro"
          }, {
            value: O.PremiumSubscriptionSKUs.TIER_1,
            label: "Nitro Classic"
          }, {
            value: O.PremiumSubscriptionSKUs.TIER_0,
            label: "Nitro Basic"
          }, {
            value: null,
            label: "None"
          }],
          onChange: e => t(e)
        }), (0, a.jsx)(N.default, {
          subscriptionTier: e,
          isGift: !0,
          premiumModalAnalyticsLocation: {}
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Premium Select Plan"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: s,
          options: [{
            value: O.PremiumSubscriptionSKUs.TIER_2,
            label: "Nitro"
          }, {
            value: O.PremiumSubscriptionSKUs.TIER_1,
            label: "Nitro Classic"
          }, {
            value: O.PremiumSubscriptionSKUs.TIER_0,
            label: "Nitro Basic"
          }, {
            value: null,
            label: "None"
          }],
          onChange: e => m(e)
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, h.default)({
            subscriptionTier: s,
            analyticsLocations: k
          }),
          children: "Select Plan"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Boost"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: D,
          options: v,
          onChange: e => L(e)
        }), null != D ? (0, a.jsx)(f.default, {
          guild: D,
          analyticsLocation: {}
        }) : (0, a.jsx)("div", {
          children: "No Guild to boost"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsxs)(r.FormTitle, {
        children: [(0, a.jsx)("div", {
          children: "Standalone: Trial Promotion Redemption"
        }), (0, a.jsx)(r.Anchor, {
          href: "https://i.dis.gd/createPromo",
          children: "How to create promotion"
        })]
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "Promotion Code",
          value: P,
          onChange: e => j(e)
        }), (0, a.jsx)(r.Tooltip, {
          text: "Need Promotion Code",
          shouldShow: P.length < 1,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: s
            } = e;
            return (0, a.jsx)(r.Button, {
              disabled: P.length < 1,
              onMouseEnter: t,
              onMouseLeave: s,
              onClick: () => {
                window.open(A.Routes.BILLING_PROMOTION_REDEMPTION(P))
              },
              children: "Open Link"
            })
          }
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Standalone: Gift/Subscription Purchase"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.SingleSelect, {
          value: b.plan_id,
          options: [{
            value: O.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
            label: "Nitro"
          }, {
            value: O.SubscriptionPlans.PREMIUM_MONTH_TIER_1,
            label: "Nitro Classic"
          }, {
            value: O.SubscriptionPlans.PREMIUM_MONTH_TIER_0,
            label: "Nitro Basic"
          }],
          onChange: e => U(t => ({
            ...t,
            plan_id: e
          }))
        }), (0, a.jsx)(r.SingleSelect, {
          value: b.gift,
          options: [{
            value: "true",
            label: "Gift"
          }, {
            value: "false",
            label: "Not Gift"
          }],
          onChange: e => U(t => ({
            ...t,
            gift: e
          }))
        }), (0, a.jsx)(r.Tooltip, {
          text: "Already subscribed",
          shouldShow: B,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: s
            } = e;
            return (0, a.jsx)(r.Button, {
              onMouseLeave: s,
              onMouseEnter: t,
              disabled: B,
              onClick: () => {
                window.open(A.Routes.BILLING_PREMIUM_SUBSCRIBE + "?" + l.stringify({
                  ...b
                }))
              },
              children: "Open Link"
            })
          }
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Creator Revenue"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.Text, {
          className: x.guildServerDescription,
          variant: "text-sm/normal",
          children: "Premium Server Subscription For"
        }), (0, a.jsx)(r.SingleSelect, {
          value: y,
          options: v,
          onChange: e => F(e)
        })]
      }), (0, a.jsx)(T.GroupListingsFetchContextProvider, {
        guildId: null == y ? void 0 : y.id,
        children: (0, a.jsx)(R, {
          selectedGuildForGuildSub: y
        })
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Activities & Application Payment Modals"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "Application Id",
          value: H,
          onChange: w
        }), (0, a.jsx)(r.TextInput, {
          placeholder: "Sku Id",
          value: V,
          onChange: Y
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, u.openIAPPurchaseModal)({
            applicationId: H,
            skuId: V,
            openPremiumPaymentModal: () => !0,
            analyticsLocations: [],
            analyticsLocationObject: {
              page: A.AnalyticsPages.IN_APP
            },
            context: A.AppContext.APP
          }),
          children: "Open App Subs Modal for Activity"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Standard Payment Modal Test"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "Application Id",
          value: W,
          onChange: K
        }), (0, a.jsx)(r.TextInput, {
          placeholder: "SKU ID",
          value: z,
          onChange: Q
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, I.default)({
            applicationId: W,
            skuId: z,
            analyticsLocations: k
          }),
          children: "Open Standard Payment Modal for SKU"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Collectibles Payment Modal Test"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.TextInput, {
          placeholder: "SKU ID",
          value: q,
          onChange: Z
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, g.default)({
            skuId: q,
            analyticsLocations: k
          }),
          children: "Open Collectibles Payment Modal for SKU"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Helpers"
      }), (0, a.jsxs)(r.FormItem, {
        className: x.formItem,
        children: [(0, a.jsx)(r.Button, {
          onClick: () => (0, d.resetSubscriptionPlanData)(),
          children: "Reset SubscriptionPlanStore"
        }), (0, a.jsx)(r.Button, {
          onClick: () => (0, o.resetSubscriptionStore)(),
          children: "Reset SubscriptionStore"
        })]
      }), (0, a.jsx)(r.FormDivider, {
        className: x.formDivider
      }), (0, a.jsx)(r.FormTitle, {
        children: "Dismissible Content Framework"
      }), (0, a.jsx)(r.FormItem, {
        className: x.formItem,
        children: (0, a.jsx)(r.Button, {
          onClick: () => (0, E.resetDismissibleContentFrameworkStore)(),
          children: "Reset DismissibleContentFrameworkStore"
        })
      })]
    })
  })
}