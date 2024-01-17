"use strict";
n.r(t), n.d(t, {
  EmptyStateImage: function() {
    return v
  },
  EmptyStateText: function() {
    return I
  },
  default: function() {
    return i
  }
});
var l, i, r = n("37983"),
  a = n("884691"),
  s = n("414456"),
  o = n.n(s),
  u = n("819855"),
  d = n("77078"),
  c = n("145131"),
  f = n("49111"),
  h = n("430098"),
  g = n("926622");
let {
  Provider: p,
  Consumer: m
} = a.createContext(f.ThemeTypes.DARK);
class v extends a.PureComponent {
  render() {
    let {
      lightSrc: e,
      darkSrc: t,
      width: n,
      height: l,
      offsetX: i,
      offsetY: a,
      style: s
    } = this.props;
    return (0, r.jsx)(m, {
      children: d => (0, r.jsx)(c.default.Child, {
        grow: 0,
        className: o(h.image, g.marginBottom40),
        style: {
          ...s,
          width: n,
          height: l,
          marginLeft: i,
          marginTop: a,
          backgroundImage: "url(".concat((0, u.isThemeDark)(d) ? t : e, ")")
        }
      })
    })
  }
}
let I = e => {
  let {
    children: t,
    className: n,
    noteClassName: l,
    note: i,
    style: a
  } = e;
  return (0, r.jsxs)(c.default.Child, {
    grow: 0,
    direction: c.default.Direction.VERTICAL,
    style: a,
    children: [null != t && (0, r.jsx)(d.H, {
      className: o(n, h.title),
      children: t
    }), null != i ? (0, r.jsx)("div", {
      className: o(l, h.text, g.marginTop8),
      children: i
    }) : null]
  })
};
(l = class extends a.PureComponent {
  render() {
    let {
      children: e,
      theme: t,
      className: n,
      style: l
    } = this.props;
    return (0, r.jsx)(p, {
      value: t,
      children: (0, r.jsx)(c.default, {
        direction: c.default.Direction.VERTICAL,
        align: c.default.Align.CENTER,
        justify: c.default.Justify.CENTER,
        className: o(h.wrapper, n),
        style: l,
        children: e
      })
    })
  }
}).Text = I, l.Image = v, i = l