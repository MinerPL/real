"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var r = n("414456"),
  i = n.n(r),
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
    onBannerChange: r,
    guildId: h,
    className: E,
    disabled: p = !1,
    showPremiumIcon: C = !0,
    isTryItOutFlow: _ = !1,
    forcedDivider: m,
    withHighlight: v = !1
  } = e, I = v ? a.default : s.Button;
  return (0, l.jsx)(u.default, {
    className: E,
    title: d.default.Messages.USER_SETTINGS_PROFILE_BANNER,
    showPremiumIcon: C,
    errors: n,
    disabled: p,
    forcedDivider: m,
    children: (0, l.jsxs)("div", {
      className: f.buttonsContainer,
      children: [(0, l.jsx)(I, {
        className: i({
          [f.buttonHighlighted]: v
        }),
        size: s.Button.Sizes.SMALL,
        onClick: () => (0, o.handleOpenSelectImageModal)(c.UploadTypes.BANNER, h, _, void 0),
        children: d.default.Messages.CHANGE_BANNER
      }), t && (0, l.jsx)(s.Button, {
        className: f.removeButton,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        size: s.Button.Sizes.SMALL,
        onClick: () => r(null),
        children: null != h ? d.default.Messages.USER_SETTINGS_RESET_BANNER : d.default.Messages.USER_SETTINGS_REMOVE_BANNER
      })]
    })
  })
}