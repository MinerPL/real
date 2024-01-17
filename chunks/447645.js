"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
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
  f = n("359223");
let h = [{
  name: "gif",
  extensions: ["gif"]
}];

function E(e) {
  let {
    showRemoveAvatarButton: t,
    errors: n,
    onAvatarChange: r,
    sectionTitle: E,
    changeAvatarButtonText: p,
    guildId: C,
    className: _,
    disabled: m = !1,
    isTryItOutFlow: v = !1,
    forcedDivider: I,
    withHighlight: g = !1
  } = e, S = g ? a.default : s.Button;
  return (0, l.jsx)(u.default, {
    className: _,
    title: E,
    errors: n,
    disabled: m,
    forcedDivider: I,
    children: (0, l.jsxs)("div", {
      className: f.buttonsContainer,
      children: [(0, l.jsx)(S, {
        className: i({
          [f.buttonHighlighted]: g
        }),
        size: s.Button.Sizes.SMALL,
        onClick: () => (0, o.handleOpenSelectImageModal)(c.UploadTypes.AVATAR, C, v, v ? h : void 0),
        children: null != p ? p : d.default.Messages.USER_SETTINGS_CHANGE_AVATAR
      }), t && (0, l.jsx)(s.Button, {
        className: f.removeButton,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        size: s.Button.Sizes.SMALL,
        onClick: () => r(null),
        children: null != C ? d.default.Messages.USER_SETTINGS_RESET_AVATAR : d.default.Messages.USER_SETTINGS_REMOVE_AVATAR
      })]
    })
  })
}