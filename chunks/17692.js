"use strict";
A.r(t), A.d(t, {
  default: function() {
    return d
  }
});
var a = A("37983"),
  l = A("884691"),
  n = A("414456"),
  r = A.n(n),
  s = A("77078"),
  o = A("931164"),
  i = A("289162"),
  u = A("632215");

function d(e) {
  let {
    color: t,
    className: A,
    variant: n,
    text: d,
    lineClamp: c
  } = e, f = (0, s.usePrivateHeadingLevel)(), C = l.useMemo(() => null == d ? null : (0, o.default)(d, !0, {
    allowHeading: null == c,
    allowList: null == c,
    initialHeaderLevel: f
  }), [d, c, f]);
  return (0, a.jsx)(s.Text, {
    className: r(A, u.markup, {
      [i.lineClamp2Plus]: null != c && c > 1,
      [i.lineClamp1]: 1 === c
    }),
    color: t,
    variant: n,
    lineClamp: c,
    children: C
  })
}