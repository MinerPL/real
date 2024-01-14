"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("594203"),
  i = n("701268");

function r(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: r,
    minHeight: o,
    maxHeight: u
  } = e, [d, c] = l.useState(null);
  l.useEffect(() => {
    var e, n;
    c(null !== (n = null === (e = t.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== n ? n : null)
  }, [t]);
  let f = (0, s.default)({
    initialElementDimension: d,
    minDimension: o,
    maxDimension: u,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: r,
    orientation: s.ResizeOrientation.VERTICAL_BOTTOM
  });
  return (0, a.jsx)("div", {
    onMouseDown: f,
    className: i.resizeHandle
  })
}