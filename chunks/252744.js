"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
}), l("222007");
var n = l("884691");

function s(e) {
  let [t, l] = (0, n.useState)(!1), s = (0, n.useRef)(e.current);
  return (0, n.useEffect)(() => {
    s.current = e.current
  }, [e]), (0, n.useEffect)(() => {
    let e = s.current;
    if (null == e) return;
    let t = () => l(!0),
      n = () => l(!1);
    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n), () => {
      e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n)
    }
  }, [s]), t
}