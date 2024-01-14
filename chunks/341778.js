"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("769846"),
  o = s("77078"),
  d = s("405645"),
  u = s("608684"),
  c = s("818643"),
  E = s("483093"),
  _ = s("159885"),
  T = s("782340"),
  I = s("356072");
let S = (0, _.cssValueToNumber)(r.default.ROLE_ICON_UPLOADER_ICON_SIZE);

function N(e) {
  let {
    role: t,
    "aria-label": s = T.default.Messages.UPLOAD_IMAGE,
    className: l,
    onClick: r,
    disabled: _ = !1
  } = e, N = n.useRef(null), g = n.useMemo(() => null != t ? (0, d.getRoleIconProps)(t, S) : null, [t]), f = null != g ? (0, a.jsx)(E.default, {
    enableTooltip: !1,
    className: I.icon,
    ...g
  }) : (0, a.jsx)(c.default, {
    className: I.icon
  });
  return (0, a.jsx)(o.FocusRing, {
    ringTarget: N,
    children: (0, a.jsxs)(o.Clickable, {
      "aria-label": s,
      className: i(I.container, l, {
        [I.disabled]: _
      }),
      onClick: _ ? void 0 : r,
      "aria-disabled": _,
      children: [(0, a.jsx)("div", {
        ref: N,
        className: I.preview,
        children: f
      }), null != g ? (0, a.jsx)(u.ImageUploaderIcon, {
        className: I.uploaderIcon
      }) : null]
    })
  })
}