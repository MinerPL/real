"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  s = n.n(r),
  o = n("446674"),
  a = n("405645"),
  u = n("692038"),
  c = n("815297"),
  d = n("291655"),
  f = n("697218"),
  E = n("387111"),
  _ = n("439932"),
  h = n("49111"),
  p = n("782340"),
  S = n("515476");

function M(e) {
  var t;
  let {
    guildId: n,
    role: r,
    theme: M,
    content: T = p.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT,
    className: m
  } = e, C = (0, o.useStateFromStores)([f.default], () => f.default.getCurrentUser()), v = E.default.useName(n, null, C), L = (0, a.getRoleIconProps)(r), I = i.useMemo(() => (0, u.createMessageRecord)({
    ...(0, c.default)({
      channelId: "0",
      content: T,
      tts: void 0,
      type: void 0,
      messageReference: void 0,
      allowedMentions: void 0,
      author: C
    }),
    state: h.MessageStates.SENT,
    id: "0"
  }), [C, T]), A = {
    nick: v,
    colorString: null !== (t = r.colorString) && void 0 !== t ? t : void 0
  };
  return (0, l.jsx)("div", {
    className: s((0, _.getThemeClass)(M), S.container, m),
    children: (0, l.jsx)(d.default, {
      hideTimestamp: !0,
      author: A,
      roleIcon: L,
      message: I,
      isGroupStart: !0,
      disableInteraction: !0
    })
  })
}