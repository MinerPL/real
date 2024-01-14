"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  i = n("77078"),
  a = n("216422"),
  u = n("782340"),
  o = n("881609");

function c(e) {
  let {
    text: t = u.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
    className: n
  } = e;
  return (0, s.jsx)(i.Tooltip, {
    text: t,
    children: e => (0, s.jsx)(i.Clickable, {
      ...e,
      children: (0, s.jsx)(a.default, {
        className: l(o.nitroWheel, n)
      })
    })
  })
}