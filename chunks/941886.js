"use strict";
n.r(t), n.d(t, {
  EmptyStateImage: function() {
    return T
  },
  EmptyStateText: function() {
    return S
  },
  default: function() {
    return i
  }
});
var l, i, a = n("37983"),
  u = n("884691"),
  r = n("414456"),
  d = n.n(r),
  o = n("819855"),
  s = n("77078"),
  c = n("145131"),
  E = n("49111"),
  C = n("430098"),
  f = n("926622");
let {
  Provider: _,
  Consumer: A
} = u.createContext(E.ThemeTypes.DARK);
class T extends u.PureComponent {
  render() {
    let {
      lightSrc: e,
      darkSrc: t,
      width: n,
      height: l,
      offsetX: i,
      offsetY: u,
      style: r
    } = this.props;
    return (0, a.jsx)(A, {
      children: s => (0, a.jsx)(c.default.Child, {
        grow: 0,
        className: d(C.image, f.marginBottom40),
        style: {
          ...r,
          width: n,
          height: l,
          marginLeft: i,
          marginTop: u,
          backgroundImage: "url(".concat((0, o.isThemeDark)(s) ? t : e, ")")
        }
      })
    })
  }
}
let S = e => {
  let {
    children: t,
    className: n,
    noteClassName: l,
    note: i,
    style: u
  } = e;
  return (0, a.jsxs)(c.default.Child, {
    grow: 0,
    direction: c.default.Direction.VERTICAL,
    style: u,
    children: [null != t && (0, a.jsx)(s.H, {
      className: d(n, C.title),
      children: t
    }), null != i ? (0, a.jsx)("div", {
      className: d(l, C.text, f.marginTop8),
      children: i
    }) : null]
  })
};
(l = class extends u.PureComponent {
  render() {
    let {
      children: e,
      theme: t,
      className: n,
      style: l
    } = this.props;
    return (0, a.jsx)(_, {
      value: t,
      children: (0, a.jsx)(c.default, {
        direction: c.default.Direction.VERTICAL,
        align: c.default.Align.CENTER,
        justify: c.default.Justify.CENTER,
        className: d(C.wrapper, n),
        style: l,
        children: e
      })
    })
  }
}).Text = S, l.Image = T, i = l