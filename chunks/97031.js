"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  l = s("255261");

function i(e) {
  let {
    children: t,
    disabled: s,
    disabledTooltip: i,
    id: r,
    ...o
  } = e;
  return (0, a.jsx)(n.TooltipContainer, {
    text: s ? i : null,
    children: (0, a.jsx)(n.TabBar.Item, {
      className: l.tabBarItem,
      id: r,
      disabled: s,
      ...o,
      children: t
    })
  })
}