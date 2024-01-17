"use strict";
n.r(t), n.d(t, {
  CircleIconButtonColors: function() {
    return u
  },
  CircleIconButtonSizes: function() {
    return o
  },
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var r = n("414456"),
  a = n.n(r),
  i = n("77078"),
  s = n("739926");
let u = {
    TERTIARY: s.tertiary,
    SECONDARY: s.secondary,
    PRIMARY: s.primary
  },
  o = {
    SIZE_24: s.size24,
    SIZE_32: s.size32,
    SIZE_36: s.size36
  };

function c(e) {
  let {
    className: t,
    tooltip: n,
    color: r,
    size: u = o.SIZE_32,
    icon: c,
    onClick: d,
    disabled: f,
    focusProps: m
  } = e;
  return (0, l.jsx)(i.Tooltip, {
    text: n,
    shouldShow: !f,
    children: e => {
      let {
        onClick: o,
        ...g
      } = e;
      return (0, l.jsx)(i.Clickable, {
        ...g,
        "aria-label": n,
        "aria-disabled": f,
        className: a(t, s.button, r, u, {
          [s.disabled]: f
        }),
        onClick: e => {
          null == o || o(), d(e)
        },
        focusProps: m,
        children: c
      })
    }
  })
}