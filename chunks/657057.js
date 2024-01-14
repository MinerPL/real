"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("683012"),
  i = n("632215");

function r(e) {
  let {
    node: t
  } = e, n = (0, s.default)(t);
  return (0, l.jsx)(a.Tooltip, {
    text: t.full,
    tooltipClassName: i.timestampTooltip,
    children: e => (0, l.jsx)("span", {
      ...e,
      className: i.timestamp,
      children: n
    })
  })
}