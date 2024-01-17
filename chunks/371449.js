"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a, s, i = n("37983");
n("884691");
var l = n("414456"),
  r = n.n(l),
  o = n("394846"),
  u = n("77078"),
  d = n("383485");

function c(e) {
  let {
    icon: t,
    tooltip: n,
    onClick: a,
    actionType: s = 2,
    shouldHighlight: l
  } = e;
  return (0, i.jsx)(u.Tooltip, {
    text: n,
    children: e => (0, i.jsx)(u.Clickable, {
      ...e,
      "aria-label": n,
      onClick: a,
      className: r(d.actionButton, {
        [d.actionAccept]: 0 === s,
        [d.actionDeny]: 1 === s,
        [d.highlight]: l,
        [d.actionButtonMobile]: o.isMobile
      }),
      children: (0, i.jsx)(t, {
        className: d.icon
      })
    })
  })
}(a = s || (s = {}))[a.ACCEPT = 0] = "ACCEPT", a[a.DENY = 1] = "DENY", a[a.DEFAULT = 2] = "DEFAULT", c.ActionTypes = s;
var f = c