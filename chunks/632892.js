"use strict";
n.r(t), n.d(t, {
  FeatureBorderTypes: function() {
    return r
  },
  default: function() {
    return d
  }
});
var l, r, i = n("37983"),
  s = n("884691"),
  a = n("414456"),
  o = n.n(a),
  u = n("623682");
(l = r || (r = {})).PREMIUM = "premium", l.LIMITED = "limited";
let c = {
  premium: {
    border: u.premiumFeatureBorder,
    background: u.premiumBackground
  },
  limited: {
    border: u.limitedFeatureBorder,
    background: u.limitedBackground
  }
};
var d = s.forwardRef(function(e, t) {
  let {
    children: n,
    type: l = "premium",
    isShown: r,
    hasBackground: s = !1,
    className: a,
    backgroundClassName: d
  } = e;
  if (!r) return (0, i.jsx)(i.Fragment, {
    children: n
  });
  let {
    border: f,
    background: h
  } = c[l];
  return (0, i.jsx)("div", {
    ref: t,
    className: o(f, a),
    children: (0, i.jsx)("div", {
      className: o(s ? h : u.background, d),
      children: n
    })
  })
})