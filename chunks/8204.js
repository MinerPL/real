"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("570697"),
  r = s("957255"),
  o = s("754893"),
  d = s("49111"),
  u = s("782340"),
  c = s("666477");

function S(e) {
  let {
    errors: t,
    pendingNick: s,
    currentNick: S,
    username: E,
    guild: f
  } = e, T = null != s ? s : S, m = (0, n.useStateFromStores)([r.default], () => r.default.can(d.Permissions.CHANGE_NICKNAME, f) || r.default.can(d.Permissions.MANAGE_NICKNAMES, f));
  return (0, a.jsxs)(i.default, {
    title: u.default.Messages.SERVER_NICKNAME,
    errors: t,
    children: [(0, a.jsx)(l.TextInput, {
      value: null != T ? T : "",
      placeholder: E,
      maxLength: d.USERNAME_MAX_LENGTH,
      onChange: function(e) {
        (0, o.setNewPendingNickname)(e, S)
      },
      disabled: !m
    }), !m && (0, a.jsx)(l.FormText, {
      className: c.nicknameDisabled,
      type: l.FormText.Types.DESCRIPTION,
      children: u.default.Messages.CHANGE_IDENTITY_NICKNAME_PERMISSIONS_DISABLED
    })]
  })
}