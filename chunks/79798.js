"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  a = n("414055"),
  o = n("486952"),
  d = n("988268"),
  u = n("782340"),
  l = n("647431");
let f = e => {
  let t, {
      invertColor: n = !1,
      type: i = d.BotTagTypes.BOT,
      className: f,
      verified: _,
      hideIcon: c = !1,
      useRemSizes: g = !1,
      children: m = []
    } = e,
    h = null,
    v = u.default.Messages.VERIFIED_BOT_TOOLTIP;
  switch (i) {
    case d.BotTagTypes.SYSTEM_DM:
    case d.BotTagTypes.OFFICIAL:
      _ = !0, v = u.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, h = u.default.Messages.SYSTEM_DM_TAG_SYSTEM;
      break;
    case d.BotTagTypes.SERVER:
      h = u.default.Messages.BOT_TAG_SERVER;
      break;
    case d.BotTagTypes.ORIGINAL_POSTER:
      h = u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
      break;
    case d.BotTagTypes.STAFF_ONLY_DM:
      h = u.default.Messages.STAFF_BADGE_TOOLTIP;
      break;
    case d.BotTagTypes.AI:
      _ = !0, v = u.default.Messages.AI_GENERATED_TOOLTIP, h = u.default.Messages.AI_TAG;
      break;
    case d.BotTagTypes.REMIX:
      _ = !1, h = u.default.Messages.REMIXING_TAG;
      break;
    case d.BotTagTypes.BOT:
    default:
      h = u.default.Messages.BOT_TAG_BOT
  }
  let E = i === d.BotTagTypes.ORIGINAL_POSTER,
    p = i === d.BotTagTypes.REMIX,
    y = null;
  _ && (y = (0, s.jsx)(a.Tooltip, {
    text: v,
    align: "center",
    position: "top",
    children: e => (0, s.jsx)(o.default, {
      ...e,
      className: l.botTagVerified
    })
  })), t = i === d.BotTagTypes.AI ? l.botTagAI : n ? l.botTagInvert : l.botTagRegular;
  let T = e => (0, s.jsxs)("span", {
    ...e,
    className: r(f, t, g ? l.rem : l.px, {
      [l.botTagOP]: E,
      [l.botTagRemix]: p
    }),
    children: [c ? null : y, m, (0, s.jsx)("span", {
      className: l.botText,
      children: h
    })]
  });
  switch (i) {
    case d.BotTagTypes.REMIX:
      return (0, s.jsx)(a.Tooltip, {
        text: u.default.Messages.REMIXING_DOWNLOAD_APP,
        position: "top",
        children: e => T(e)
      });
    case d.BotTagTypes.ORIGINAL_POSTER:
      return (0, s.jsx)(a.Tooltip, {
        text: u.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
        position: "top",
        children: e => T(e)
      });
    default:
      return T()
  }
};
f.Types = d.BotTagTypes;
var _ = f