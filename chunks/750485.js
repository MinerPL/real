"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983"),
  s = n("884691"),
  i = n("421898"),
  l = n.n(i),
  r = n("122508"),
  o = n("637487");
let u = {
    VERTICAL: r.flexVertical,
    HORIZONTAL: r.flexHorizontal,
    HORIZONTAL_REVERSE: r.flexHorizontalReverse
  },
  d = {
    START: r.flexJustifyStart,
    END: r.flexJustifyEnd,
    CENTER: r.flexJustifyCenter,
    BETWEEN: r.flexJustifyBetween,
    AROUND: r.flexJustifyAround
  },
  c = {
    NO_WRAP: r.flexNowrap,
    WRAP: r.flexWrap,
    WRAP_REVERSE: r.flexWrapReverse
  },
  f = {
    START: r.flexAlignStart,
    END: r.flexAlignEnd,
    CENTER: r.flexAlignCenter,
    STRETCH: r.flexAlignStretch
  },
  E = {
    SMALL: o.flexGutterSmall,
    LARGE: o.flexGutterLarge
  };
class _ extends s.PureComponent {
  render() {
    let {
      children: e,
      className: t,
      shrink: n,
      grow: i,
      basis: r,
      style: u,
      wrap: d,
      ...c
    } = this.props, f = {
      style: {
        flexGrow: i,
        flexShrink: n,
        flexBasis: r,
        ...u
      },
      className: t === o.flexChild ? t : l(o.flexChild, t),
      ...c
    };
    if (!d && "string" != typeof e && 1 === s.Children.count(e)) {
      let n = s.Children.only(e);
      return f.style = {
        ...f.style,
        ...n.props.style
      }, f.className = l(n.props.className, t), s.cloneElement(n, f)
    }
    return (0, a.jsx)("div", {
      ...f,
      children: e
    })
  }
}
_.defaultProps = {
  className: o.flexChild,
  style: {},
  wrap: !1
};
class h extends s.PureComponent {
  render() {
    let {
      children: e,
      className: t,
      direction: n,
      justify: s,
      align: i,
      wrap: r,
      shrink: u,
      grow: d,
      basis: c,
      style: f,
      gutter: E,
      ..._
    } = this.props, h = {
      flexShrink: u,
      flexGrow: d,
      flexBasis: c,
      ...f
    };
    return (0, a.jsx)("div", {
      style: h,
      className: l(o.flex, n, s, i, r, E, t),
      ..._,
      children: e
    })
  }
}
h.Child = _, h.Direction = u, h.Align = f, h.Justify = d, h.Wrap = c, h.Gutter = E, h.defaultProps = {
  direction: u.HORIZONTAL,
  justify: d.START,
  align: f.STRETCH,
  wrap: c.WRAP,
  shrink: 1,
  grow: 1,
  basis: "auto",
  style: {}
};
var C = h