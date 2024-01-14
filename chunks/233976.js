"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("145131"),
  o = s("567917");
class d extends n.PureComponent {
  render() {
    let {
      children: e,
      className: t,
      onMouseEnter: s,
      onMouseLeave: n
    } = this.props;
    return (0, a.jsx)("div", {
      className: i(o.card, t),
      onMouseEnter: s,
      onMouseLeave: n,
      children: e
    })
  }
}
d.Header = e => {
  let {
    children: t,
    className: s,
    splashArtURL: n
  } = e;
  return (0, a.jsxs)(r.default, {
    className: i(o.header, s),
    align: r.default.Align.CENTER,
    children: [(0, a.jsx)("div", {
      className: o.splashArt,
      style: null != n ? {
        backgroundImage: "url(".concat(n, ")")
      } : void 0
    }), t]
  })
}, d.Body = e => {
  let {
    children: t,
    className: s
  } = e;
  return (0, a.jsx)("div", {
    className: i(o.body, s),
    children: t
  })
};
var u = d