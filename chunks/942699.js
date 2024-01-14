"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  o = n("202933");
let r = e => {
  let {
    keybind: t,
    separator: n,
    className: l
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: t.map((e, r) => (0, i.jsxs)(a.Fragment, {
      children: [(0, i.jsx)("span", {
        className: s(o.key, l),
        children: e
      }), r === t.length - 1 ? void 0 : n]
    }, r))
  })
};
r.defaultProps = {
  separator: "+"
};
var d = r