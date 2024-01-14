"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("77078"),
  o = n("603128");

function u(e) {
  let {
    children: t,
    text: n,
    color: s,
    disableWrapper: u = !1,
    disabled: d = !1,
    hideOnClick: c = !0,
    shouldShow: f,
    forceOpen: h,
    selected: C = !1,
    tooltipClass: p
  } = e;
  return (0, l.jsx)(r.Tooltip, {
    shouldShow: f,
    forceOpen: h,
    spacing: 20,
    hideOnClick: c,
    text: d ? null : n,
    position: "right",
    color: s,
    "aria-label": !1,
    tooltipClassName: i(o.listItemTooltip, p),
    children: e => u ? a.cloneElement(a.Children.only(t), {
      ...e
    }) : (0, l.jsx)("div", {
      className: i(o.listItemWrapper, {
        [o.selected]: C
      }),
      ...e,
      children: t
    })
  })
}