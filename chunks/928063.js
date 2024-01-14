"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
}), r("222007");
var a = r("37983"),
  n = r("884691"),
  i = r("414456"),
  l = r.n(i),
  o = r("594203"),
  s = r("693477");

function c(e) {
  let {
    resizableNode: t,
    minHeight: r,
    onResize: n
  } = e, i = (0, o.default)({
    minDimension: r,
    resizableDomNodeRef: t,
    onElementResize: n,
    orientation: o.ResizeOrientation.VERTICAL_TOP,
    usePointerEvents: !0
  });
  return (0, a.jsx)("div", {
    onPointerDown: i,
    className: s.resizeHandle
  })
}

function d(e) {
  let {
    children: t,
    className: r,
    initialHeight: i,
    minHeight: o
  } = e, d = n.useRef(null), [u, h] = n.useState(i);
  return (0, a.jsxs)("div", {
    ref: d,
    className: s.container,
    style: {
      minHeight: o,
      height: u
    },
    children: [(0, a.jsx)(c, {
      resizableNode: d,
      minHeight: o,
      onResize: h
    }), (0, a.jsx)("div", {
      className: l(s.subPanelContent, r),
      children: t
    })]
  })
}