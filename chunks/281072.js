"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var i = n("77078"),
  r = n("181114"),
  o = n("216422"),
  s = n("113270"),
  a = n("782340"),
  u = n("72270");

function d(e) {
  let {
    analyticsSection: t,
    buttonText: n
  } = e;
  return (0, l.jsxs)(r.default, {
    className: u.premiumButton,
    innerClassName: u.premiumButtonInner,
    color: i.Button.Colors.GREEN,
    size: i.Button.Sizes.SMALL,
    onClick: () => (0, s.default)({
      section: t
    }),
    children: [(0, l.jsx)(o.default, {
      className: u.premiumButtonNitroWheel
    }), null != n ? n : a.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_CTA]
  })
}