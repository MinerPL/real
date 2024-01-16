"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("819855"),
  r = n("841098"),
  u = n("449918"),
  o = n("832132"),
  d = n("818643"),
  c = n("608684"),
  E = n("49111"),
  f = n("575282");
let _ = E.Color.PRIMARY_400,
  I = E.Color.PRIMARY_500;

function h(e) {
  let {
    enabled: t,
    imageClassName: n,
    iconWrapperClassName: a,
    ...E
  } = e, h = (0, r.default)(), T = (0, i.isThemeDark)(h) ? _ : I, N = {
    height: 18,
    width: 18,
    color: (0, u.getColor)(T)
  };
  return (0, l.jsx)(c.default, {
    className: s({
      [f.avatarUploader]: t,
      [f.avatarUploaderDisabled]: !t
    }),
    imageClassName: s(n, f.avatarUploaderInnerSquare, {
      [f.avatarUploaderInnerSquareDisabled]: !t
    }),
    icon: null != E.image && "" !== E.image ? (0, l.jsx)(o.default, {
      ...N
    }) : (0, l.jsx)(d.default, {
      ...N
    }),
    iconClassName: s(f.avatarUploadIcon, f.hideDefaultIcon),
    iconWrapperClassName: a,
    showIcon: !0,
    showIconDisabled: !0,
    hideSize: !0,
    ...E
  })
}