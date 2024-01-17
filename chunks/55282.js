"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("77078"),
  r = n("42203"),
  o = n("18494"),
  u = n("328275"),
  d = n("489622"),
  c = n("244480"),
  f = n("130563"),
  E = n("151642"),
  _ = n("782340"),
  T = n("779007");

function I(e) {
  let t = o.default.getVoiceChannelId();
  if (null == t) return;
  let n = r.default.getChannel(t);
  null != n && (0, c.audienceAckRequestToSpeak)(n, e)
}

function m() {
  var e;
  let t = (0, f.default)(),
    n = null !== (e = (0, E.useStageBlockedUsersCount)(null == t ? void 0 : t.id)) && void 0 !== e ? e : 0;
  return null == t ? null : (0, s.jsxs)(d.default, {
    className: T.container,
    color: d.NoticeColors.DEFAULT,
    children: [(0, s.jsx)("div", {
      children: _.default.Messages.STAGE_SPEAK_INVITE_HEADER
    }), n > 0 ? (0, s.jsxs)("div", {
      className: T.blocked,
      children: [(0, s.jsx)(u.default, {
        width: 12,
        height: 12,
        className: T.blockedIcon
      }), (0, s.jsx)("div", {
        className: T.blockedText,
        children: _.default.Messages.STAGE_SPEAK_INVITE_HEADER_BLOCKED_USERS.format({
          number: n
        })
      })]
    }) : null, (0, s.jsx)(i.Button, {
      className: a(T.button, T.acceptButton),
      size: i.Button.Sizes.MIN,
      color: i.Button.Colors.WHITE,
      onClick: () => I(!1),
      children: (0, s.jsx)(i.Text, {
        className: T.acceptText,
        variant: "text-xs/normal",
        color: "none",
        children: _.default.Messages.STAGE_SPEAK_INVITE_ACCEPT
      })
    }), (0, s.jsx)(i.Button, {
      className: a(T.button, T.declineButton),
      look: i.Button.Looks.OUTLINED,
      size: i.Button.Sizes.MIN,
      color: i.Button.Colors.WHITE,
      onClick: () => I(!0),
      children: (0, s.jsx)(i.Text, {
        className: T.declineText,
        variant: "text-xs/normal",
        color: "none",
        children: _.default.Messages.STAGE_SPEAK_INVITE_DECLINE
      })
    })]
  })
}