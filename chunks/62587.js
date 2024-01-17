"use strict";
n.r(t), n.d(t, {
  NitroTooltipLabel: function() {
    return r
  }
});
var s = n("37983");
n("884691");
var l = n("77078"),
  a = n("216422"),
  i = n("560354");

function r(e) {
  let {
    tooltipText: t,
    textColor: n
  } = e;
  return (0, s.jsxs)("span", {
    className: i.tooltipTextContainer,
    children: [(0, s.jsx)(a.default, {
      className: i.nitroWheel
    }), (0, s.jsx)(l.Text, {
      className: i.tooltipText,
      variant: "text-sm/medium",
      color: null != n ? n : "text-normal",
      children: t
    })]
  })
}