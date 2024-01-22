"use strict";
n.r(t), n.d(t, {
  ApplicationBenefitsModalIcon: function() {
    return c
  },
  ApplicationBenefitsModalHeading: function() {
    return d
  },
  ApplicationBenefitsModalDivider: function() {
    return f
  },
  ApplicationBenefitsModalDescription: function() {
    return p
  },
  ApplicationBenefitsModalBenefits: function() {
    return h
  },
  ApplicationBenefitsModalContent: function() {
    return S
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  a = n("77078"),
  s = n("850644"),
  o = n("899604"),
  u = n("114067");
let c = e => {
    let {
      application: t,
      asset: n,
      className: r,
      ...l
    } = e;
    return (0, i.jsx)(s.default, {
      application: t,
      size: s.ApplicationIconSize.MEDIUM,
      asset: n,
      className: r,
      ...l
    })
  },
  d = e => {
    let {
      children: t,
      className: n,
      id: r,
      ...s
    } = e;
    return (0, i.jsx)(a.Heading, {
      className: l(u.header, n),
      variant: "heading-xl/extrabold",
      id: r,
      ...s,
      children: t
    })
  };

function f() {
  return (0, i.jsx)("hr", {
    className: u.divider
  })
}
let p = e => {
    let {
      className: t,
      title: n,
      description: r,
      ...l
    } = e;
    return (0, i.jsxs)("div", {
      className: t,
      ...l,
      children: [(0, i.jsx)(a.Heading, {
        variant: "heading-md/bold",
        color: "header-primary",
        children: n
      }), (0, i.jsx)(a.Heading, {
        variant: "heading-sm/normal",
        color: "header-secondary",
        children: r
      })]
    })
  },
  h = e => {
    let {
      applicationId: t,
      storeListingBenefits: n,
      skuBenefits: r,
      className: a,
      ...s
    } = e;
    return (0, i.jsx)("div", {
      className: l(u.benefitsContainer, a),
      ...s,
      children: (0, i.jsx)(o.SubscriptionListingBenefits, {
        applicationId: t,
        storeListingBenefits: n,
        skuBenefits: r,
        className: u.benefit
      })
    })
  },
  S = e => {
    let {
      children: t,
      className: n,
      ...r
    } = e;
    return (0, i.jsx)("div", {
      className: l(u.container, n),
      ...r,
      children: t
    })
  }