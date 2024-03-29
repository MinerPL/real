"use strict";
n.r(t), n.d(t, {
  ShineSizes: function() {
    return l
  },
  Shine: function() {
    return I
  },
  default: function() {
    return C
  }
});
var i, l, r = n("37983"),
  o = n("884691"),
  s = n("414456"),
  u = n.n(s),
  a = n("458960"),
  c = n("77078"),
  d = n("252744"),
  f = n("145131"),
  E = n("396792");
(i = l || (l = {})).DEFAULT = "default", i.SMALL = "small";
let _ = {
    default: E.shineDefault,
    small: E.shineSmall
  },
  p = {
    default: E.shineInnerDefault,
    small: E.shineInnerSmall
  };
class I extends o.PureComponent {
  render() {
    let {
      className: e,
      shineSize: t,
      shinePaused: n,
      ...i
    } = this.props;
    return (0, r.jsx)(a.default.div, {
      ...i,
      className: u(E.shineContainer, e, {
        [E.shinePaused]: n
      }),
      children: (0, r.jsx)(f.default, {
        align: f.default.Align.CENTER,
        justify: f.default.Justify.CENTER,
        className: _[t],
        children: (0, r.jsx)("div", {
          className: p[t]
        })
      })
    })
  }
}
I.defaultProps = {
  shineSize: "default"
};
let h = e => {
  let {
    children: t,
    className: n,
    disabled: i,
    submitting: l,
    pauseAnimation: s,
    shineSize: a = "default",
    shinePaused: f,
    buttonShineClassName: _,
    onlyShineOnHover: p,
    ...h
  } = e, C = o.createRef(), T = (0, d.default)(C), S = !i && !l && !0 !== s && (!p || T);
  return (0, r.jsxs)(c.Button, {
    buttonRef: C,
    ...h,
    className: u(E.shinyButton, n),
    disabled: i,
    submitting: l,
    children: [t, S ? (0, r.jsx)(I, {
      shinePaused: f,
      className: u(E.buttonShine, p ? E.onlyShineOnHover : void 0, _),
      shineSize: a
    }) : null]
  })
};
h.ShineSizes = l;
var C = h