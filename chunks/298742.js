"use strict";
n.r(t), n.d(t, {
  FormItem: function() {
    return o
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("516826"),
  a = n("818810");
let o = r.forwardRef(function(e, t) {
  var n, o;
  let {
    children: l,
    disabled: u = !1,
    className: c,
    titleClassName: d,
    tag: f = "h5",
    required: E = !1,
    style: h,
    title: p,
    error: _,
    ...S
  } = e, m = r.useId(), T = r.useId(), g = null !== (n = S.titleId) && void 0 !== n ? n : m, I = null != _ ? null !== (o = S.errorId) && void 0 !== o ? o : T : void 0;
  return (0, i.jsxs)("div", {
    ref: t,
    className: null != c ? c : void 0,
    style: null != h ? h : void 0,
    children: [null != p || null != _ ? (0, i.jsx)(a.FormTitle, {
      tag: f,
      disabled: u,
      required: E,
      error: _,
      className: d,
      id: g,
      errorId: I,
      ...S,
      children: p
    }) : null, (0, i.jsx)(s.FormContextProvider, {
      titleId: g,
      errorId: I,
      error: null != _ ? _ : void 0,
      children: l
    })]
  })
})