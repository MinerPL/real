"use strict";
n.r(t), n.d(t, {
  CallTileCTA: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  l = n("77078"),
  i = n("796863");

function u(e) {
  let {
    children: t,
    onClick: n,
    className: r,
    tooltip: u
  } = e;
  return (0, a.jsx)(l.Tooltip, {
    text: u,
    children: e => {
      let {
        onClick: u,
        ...o
      } = e;
      return (0, a.jsx)(l.Button, {
        ...o,
        onClick: e => {
          null == n || n(e), null == u || u()
        },
        innerClassName: i.buttonReset,
        color: s(i.cta, r),
        size: l.Button.Sizes.MIN,
        children: t
      })
    }
  })
}