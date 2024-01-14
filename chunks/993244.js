"use strict";
i.r(t), i.d(t, {
  default: function() {
    return a
  }
});
var n = i("37983"),
  l = i("884691"),
  s = i("430047"),
  a = e => {
    let {
      src: t,
      alt: i,
      size: a,
      "aria-label": r
    } = e, o = l.useRef(null), u = l.useRef(!1);
    return (0, n.jsx)("img", {
      className: u.current ? s.image : s.imageLoading,
      alt: i,
      src: t,
      ref: o,
      "aria-label": r,
      style: {
        backgroundSize: a,
        height: a,
        width: a
      },
      onLoad: u.current ? void 0 : () => {
        window.requestAnimationFrame(() => {
          null != o.current && (u.current = !0, o.current.classList.remove(s.imageLoading), o.current.classList.add(s.image))
        })
      }
    })
  }