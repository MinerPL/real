"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  a = n.n(r),
  s = n("77078"),
  o = n("374665");

function u(e) {
  let {
    children: t,
    "aria-label": n,
    className: r,
    position: u
  } = e, d = i.useRef(null), c = null != n ? n : "string" == typeof t && t;
  return (0, l.jsx)(s.Tooltip, {
    position: null != u ? u : "top",
    delay: 500,
    text: t,
    "aria-label": c,
    children: n => {
      let {
        onMouseEnter: i,
        onMouseLeave: s
      } = n;
      return (0, l.jsx)("div", {
        className: a(r, o.overflow),
        ref: d,
        "aria-hidden": e["aria-hidden"],
        onMouseEnter: () => {
          let {
            current: e
          } = d;
          null != e && e.offsetWidth < e.scrollWidth && (null == i || i())
        },
        onMouseLeave: s,
        children: t
      })
    }
  })
}