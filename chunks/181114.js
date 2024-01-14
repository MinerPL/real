"use strict";
l.r(t), l.d(t, {
  Shine: function() {
    return p
  },
  default: function() {
    return m
  }
});
var n, s, a = l("37983"),
  i = l("884691"),
  u = l("414456"),
  r = l.n(u),
  o = l("458960"),
  c = l("77078"),
  d = l("252744"),
  f = l("145131"),
  T = l("396792");
(n = s || (s = {})).DEFAULT = "default", n.SMALL = "small";
let _ = {
    default: T.shineDefault,
    small: T.shineSmall
  },
  E = {
    default: T.shineInnerDefault,
    small: T.shineInnerSmall
  };
class p extends i.PureComponent {
  render() {
    let {
      className: e,
      shineSize: t,
      shinePaused: l,
      ...n
    } = this.props;
    return (0, a.jsx)(o.default.div, {
      ...n,
      className: r(T.shineContainer, e, {
        [T.shinePaused]: l
      }),
      children: (0, a.jsx)(f.default, {
        align: f.default.Align.CENTER,
        justify: f.default.Justify.CENTER,
        className: _[t],
        children: (0, a.jsx)("div", {
          className: E[t]
        })
      })
    })
  }
}
p.defaultProps = {
  shineSize: "default"
};
let S = e => {
  let {
    children: t,
    className: l,
    disabled: n,
    submitting: s,
    pauseAnimation: u,
    shineSize: o = "default",
    shinePaused: f,
    buttonShineClassName: _,
    onlyShineOnHover: E,
    ...S
  } = e, m = i.createRef(), I = (0, d.default)(m), P = !n && !s && !0 !== u && (!E || I);
  return (0, a.jsxs)(c.Button, {
    buttonRef: m,
    ...S,
    className: r(T.shinyButton, l),
    disabled: n,
    submitting: s,
    children: [t, P ? (0, a.jsx)(p, {
      shinePaused: f,
      className: r(T.buttonShine, E ? T.onlyShineOnHover : void 0, _),
      shineSize: o
    }) : null]
  })
};
S.ShineSizes = s;
var m = S