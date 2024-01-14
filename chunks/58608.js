"use strict";
n.r(e), n.d(e, {
  default: function() {
    return c
  }
});
var r = n("37983"),
  u = n("884691"),
  i = n("118810"),
  o = n("446674"),
  a = n("206230"),
  s = n("719347");
let l = t => {
  let {
    externalRef: e,
    autoPlay: n,
    playOnHover: l,
    responsive: c,
    mediaLayoutType: f,
    ...d
  } = t, h = (0, o.useStateFromStores)([a.default], () => a.default.useReducedMotion), _ = u.useRef(null);

  function E() {
    var t;
    l && (null == _ || null === (t = _.current) || void 0 === t || t.play())
  }

  function p() {
    var t;
    l && (null == _ || null === (t = _.current) || void 0 === t || t.pause())
  }
  return u.useLayoutEffect(() => () => {
    let {
      current: t
    } = _;
    null != t && function(t) {
      t.removeAttribute("src"), Array.from(t.children).forEach(t => {
        (0, i.isElement)(t, HTMLSourceElement) && (t.removeAttribute("src"), t.removeAttribute("type")), (0, i.isElement)(t, HTMLImageElement) && t.removeAttribute("src")
      });
      try {
        t.load()
      } catch (t) {}
    }(t)
  }, []), u.useLayoutEffect(() => ("function" == typeof e ? (e(null), e(_.current)) : null != e && (e.current = _.current), () => {
    "function" == typeof e ? e(null) : null != e && (e.current = null)
  }), [e, _]), (0, r.jsx)("video", {
    ref: _,
    autoPlay: !h && !l && n,
    onMouseEnter: E,
    onMouseLeave: p,
    onFocus: E,
    onBlur: p,
    style: f === s.MediaLayoutType.MOSAIC ? {
      width: "100%",
      height: "100%",
      maxHeight: "inherit",
      objectFit: "cover"
    } : c ? function() {
      return {
        maxWidth: d.width,
        maxHeight: d.height,
        width: "100%",
        height: "100%"
      }
    }() : {},
    ...d
  })
};
var c = u.forwardRef((t, e) => (0, r.jsx)(l, {
  ...t,
  externalRef: e
}))