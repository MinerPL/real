"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("400307"),
  r = n("646718"),
  i = n("414539");

function u(e) {
  let {
    onClick: t,
    isGift: n
  } = e;
  return (0, s.jsx)(a.Clickable, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, s.jsx)(l.Tier2Card, {
      className: i.tier2MarketingCard,
      ctaButton: null,
      showWumpus: !0,
      showYearlyPrice: !0,
      isGift: n,
      isModal: !0
    })
  })
}

function o(e) {
  let {
    onClick: t,
    isGift: n
  } = e;
  return (0, s.jsx)(a.Clickable, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, s.jsx)(l.Tier0Card, {
      className: i.tier0MarketingCard,
      ctaButton: null,
      showWumpus: !0,
      showYearlyPrice: !0,
      isGift: n
    })
  })
}
var d = function(e) {
  let {
    onSelectSku: t,
    isGift: n
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(u, {
      onClick: () => t(r.PremiumSubscriptionSKUs.TIER_2),
      isGift: n
    }), (0, s.jsx)(o, {
      onClick: () => t(r.PremiumSubscriptionSKUs.TIER_0),
      isGift: n
    })]
  })
}