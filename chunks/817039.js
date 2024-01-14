"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("988150"),
  i = n("661379");

function r(e) {
  let {
    imageBackground: t,
    applicationName: n,
    imageClassName: r,
    imageNotFoundClassName: o
  } = e, [u, d] = s.useState(!1);
  return "not-found" === t.state || u ? (0, a.jsx)("div", {
    className: o,
    children: (0, a.jsx)(l.default, {
      className: i.brokenImageIcon
    })
  }) : "loading" === t.state ? null : (0, a.jsx)("img", {
    alt: n,
    className: r,
    src: t.url,
    onError: () => d(!0)
  })
}