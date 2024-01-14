"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("222007");
var l = s("37983");
s("884691");
var n = s("65597"),
  a = s("77078"),
  o = s("819689"),
  i = s("592407"),
  u = s("42203"),
  r = s("129082"),
  d = s("49111"),
  c = s("782340"),
  f = s("834476");

function S(e) {
  let {
    channelId: t,
    messageId: s,
    transitionState: S,
    onClose: _
  } = e, g = (0, n.default)([u.default], () => u.default.getChannel(t)), [F, E] = (0, r.default)(t), C = null == g ? void 0 : g.guild_id;
  return (0, l.jsx)(a.ConfirmModal, {
    header: c.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
    confirmText: c.default.Messages.CONFIRM,
    cancelText: c.default.Messages.CANCEL,
    confirmButtonColor: a.Button.Colors.BRAND,
    onConfirm: () => o.default.crosspostMessage(t, s),
    transitionState: S,
    onClose: _,
    children: (0, l.jsx)(a.Text, {
      variant: "text-md/normal",
      className: f.spacing,
      children: E ? (0, l.jsx)(a.Spinner, {}) : null != F && null != F.guildsFollowing && F.guildsFollowing > 0 ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(a.Text, {
          className: f.spacing,
          variant: "text-sm/normal",
          children: c.default.Messages.PUBLISH_FOLLOWED_NEWS_BODY_REACH.format({
            numGuildsFollowing: F.guildsFollowing
          })
        }), (0, l.jsx)(a.Text, {
          variant: "text-sm/normal",
          children: c.default.Messages.PUBLISH_FOLLOWED_NEWS_BODY_SETTINGS_INSIGHTS.format({
            onClick: () => {
              null != C && null != _ && (_(), i.default.open(C, d.GuildSettingsSections.ANALYTICS))
            }
          })
        })]
      }) : c.default.Messages.PUBLISH_FOLLOWED_NEWS_BODY
    })
  })
}