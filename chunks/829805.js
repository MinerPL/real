"use strict";
n.r(t), n.d(t, {
  ApplicationBenefitsModalIcon: function() {
    return d
  },
  ApplicationBenefitsModalHeading: function() {
    return c
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
  u = n("899604"),
  o = n("114067");
let d = e => {
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
  c = e => {
    let {
      children: t,
      className: n,
      id: r,
      ...s
    } = e;
    return (0, i.jsx)(a.Heading, {
      className: l(o.header, n),
      variant: "heading-xl/extrabold",
      id: r,
      ...s,
      children: t
    })
  };

function f() {
  return (0, i.jsx)("hr", {
    className: o.divider
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
      benefits: t,
      className: n,
      ...r
    } = e;
    return (0, i.jsx)("div", {
      className: l(o.benefitsContainer, n),
      ...r,
      children: t.map(e => {
        var t, n;
        return (0, i.jsx)(u.default, {
          className: o.benefit,
          benefit: e
        }, "".concat(e.ref_type, "-").concat(null === (t = e.emoji) || void 0 === t ? void 0 : t.id, "-").concat(null === (n = e.emoji) || void 0 === n ? void 0 : n.name))
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
      className: l(o.container, n),
      ...r,
      children: t
    })
  }