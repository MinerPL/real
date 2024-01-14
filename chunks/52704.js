"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  s = n("77078"),
  a = n("181114"),
  o = n("771325"),
  u = n("570697"),
  c = n("75015"),
  d = n("782340"),
  f = n("650130");

function h(e) {
  let {
    showRemoveBannerButton: t,
    errors: n,
    onBannerChange: i,
    guildId: h,
    className: E,
    disabled: C = !1,
    showPremiumIcon: p = !0,
    isTryItOutFlow: _ = !1,
    forcedDivider: v,
    withHighlight: m = !1
  } = e, R = m ? a.default : s.Button;
  return (0, l.jsx)(u.default, {
    className: E,
    title: d.default.Messages.USER_SETTINGS_PROFILE_BANNER,
    showPremiumIcon: p,
    errors: n,
    disabled: C,
    forcedDivider: v,
    children: (0, l.jsxs)("div", {
      className: f.buttonsContainer,
      children: [(0, l.jsx)(R, {
        className: r({
          [f.buttonHighlighted]: m
        }),
        size: s.Button.Sizes.SMALL,
        onClick: () => (0, o.handleOpenSelectImageModal)(c.UploadTypes.BANNER, h, _, void 0),
        children: d.default.Messages.CHANGE_BANNER
      }), t && (0, l.jsx)(s.Button, {
        className: f.removeButton,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        size: s.Button.Sizes.SMALL,
        onClick: () => i(null),
        children: null != h ? d.default.Messages.USER_SETTINGS_RESET_BANNER : d.default.Messages.USER_SETTINGS_REMOVE_BANNER
      })]
    })
  })
}