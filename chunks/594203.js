"use strict";
n.r(t), n.d(t, {
  ResizeOrientation: function() {
    return r
  },
  default: function() {
    return u
  }
}), n("222007");
var r, s, i, a, l = n("884691"),
  o = n("917351");

function c(e) {
  return 2 === e || 3 === e ? 1 : 0
}(i = r || (r = {}))[i.VERTICAL_TOP = 0] = "VERTICAL_TOP", i[i.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", i[i.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", i[i.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (a = s || (s = {}))[a.VERTICAL = 0] = "VERTICAL", a[a.HORIZONTAL = 1] = "HORIZONTAL";
var u = e => {
  let {
    initialElementDimension: t,
    resizableDomNodeRef: n,
    maxDimension: r,
    minDimension: s,
    onElementResize: i,
    onElementResizeEnd: a,
    throttleDuration: u = 300,
    orientation: d,
    usePointerEvents: p = !1
  } = e, [h, f] = l.useState(!1), v = l.useRef(0), g = l.useRef(null == t ? 0 : t);
  return l.useLayoutEffect(() => {
    if (!h || null == n.current) return;

    function e(e) {
      let t = 1 === c(d) ? e.screenX : e.screenY,
        n = 0 === d || 2 === d,
        i = (t - v.current) * (n ? -1 : 1),
        a = g.current + i;
      return (0, o.clamp)(a, null != s ? s : 0, null != r ? r : a)
    }
    let t = (0, o.throttle)(i, u),
      l = r => {
        if (null == n.current) return null;
        let s = e(r),
          i = 1 === c(d) ? "width" : "height";
        n.current.style[i] = "".concat(s, "px"), t(s)
      },
      m = t => {
        f(!1);
        let n = e(t);
        i(n), null == a || a(n)
      },
      x = p ? "pointerup" : "mouseup",
      D = p ? "pointermove" : "mousemove",
      O = n.current.ownerDocument;
    return O.addEventListener(x, m), O.addEventListener(D, l), () => {
      O.removeEventListener(x, m), O.removeEventListener(D, l), t.cancel()
    }
  }, [h, i, s, r, d, n, u, a, p]), l.useCallback(e => {
    let t = 1 === c(d);
    null != n.current && (g.current = t ? n.current.offsetWidth : n.current.offsetHeight), v.current = t ? e.screenX : e.screenY, f(!0)
  }, [d, n])
}