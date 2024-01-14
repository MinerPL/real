"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("124824"),
  i = n("257407"),
  r = e => {
    let {
      isHovered: t,
      closePopout: n,
      onMouseEnter: r,
      onMouseLeave: o,
      onFocus: u,
      channel: d
    } = e;
    return l.useEffect(() => {
      !t && n()
    }, [n, t]), (0, a.jsx)(s.default, {
      children: (0, a.jsx)("div", {
        onMouseEnter: r,
        onMouseLeave: o,
        children: (0, a.jsx)(i.default, {
          channel: d,
          closePopout: n,
          onFocus: u
        })
      })
    })
  }