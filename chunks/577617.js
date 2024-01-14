"use strict";
n.r(t), n.d(t, {
  renderOption: function() {
    return f
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  a = n("77078"),
  s = n("886074"),
  o = n("45029"),
  u = n("782340"),
  d = n("41604");

function c(e) {
  let {
    text: t,
    isLocked: n,
    shouldSparkle: i
  } = e;
  return (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)("div", {
      className: r(d.container),
      children: [i ? (0, l.jsx)(s.default, {
        className: d.sparkles
      }) : null, (0, l.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "text-normal",
        children: t
      }), n ? (0, l.jsxs)("div", {
        className: d.pill,
        children: [(0, l.jsx)(o.default, {
          height: 14,
          width: 14,
          className: d.icon
        }), (0, l.jsx)(a.Text, {
          variant: "text-xs/medium",
          color: "header-primary",
          className: d.pillText,
          children: u.default.Messages.COMMUNITIES
        })]
      }) : null]
    })
  })
}

function f(e, t, n) {
  return (0, l.jsx)(c, {
    text: e.label,
    isLocked: t,
    shouldSparkle: n
  })
}