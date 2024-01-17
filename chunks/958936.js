"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("255397"),
  s = n("393414"),
  d = n("957255"),
  o = n("49111"),
  r = n("782340");

function c(e, t) {
  let n = (0, i.useStateFromStores)([d.default], () => d.default.can(o.Permissions.CONNECT, e), [e]);
  return n && e.isGuildVocal() ? (0, a.jsx)(l.MenuItem, {
    id: "open-chat",
    label: r.default.Messages.OPEN_CHAT,
    action: () => {
      u.default.updateChatOpen(e.id, !0), (0, s.transitionToGuild)(t.id, e.id)
    }
  }) : null
}