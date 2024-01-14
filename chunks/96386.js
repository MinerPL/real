"use strict";
i.r(t), i.d(t, {
  default: function() {
    return r
  }
});
var n = i("37983");
i("884691");
var l = i("414456"),
  s = i.n(l),
  a = i("691870"),
  r = e => {
    let {
      message: t,
      className: i,
      noResultsImageURL: l,
      forceLightTheme: r,
      suggestions: o
    } = e;
    return (0, n.jsx)("div", {
      className: s({
        [a.forceLightTheme]: r
      }, i),
      children: (0, n.jsxs)("div", {
        className: a.wrapper,
        children: [(0, n.jsx)("div", {
          className: a.sadImage,
          style: null != l ? {
            backgroundImage: "url(".concat(l, ")")
          } : {}
        }), (0, n.jsx)("div", {
          children: t
        }), o]
      })
    })
  }