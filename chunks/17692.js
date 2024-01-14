"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("77078"),
  o = n("931164"),
  u = n("289162"),
  d = n("632215");

function c(e) {
  let {
    color: t,
    className: n,
    variant: l,
    text: c,
    lineClamp: f
  } = e, m = (0, r.usePrivateHeadingLevel)(), E = s.useMemo(() => null == c ? null : (0, o.default)(c, !0, {
    allowHeading: null == f,
    allowList: null == f,
    initialHeaderLevel: m
  }), [c, f, m]);
  return (0, a.jsx)(r.Text, {
    className: i(n, d.markup, {
      [u.lineClamp2Plus]: null != f && f > 1,
      [u.lineClamp1]: 1 === f
    }),
    color: t,
    variant: l,
    lineClamp: f,
    children: E
  })
}