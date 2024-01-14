"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("393414"),
  d = n("162771"),
  s = n("49111"),
  o = n("782340");

function r(e) {
  let t = (0, i.useStateFromStores)([d.default], () => d.default.getGuildId());
  return __OVERLAY__ || t !== s.FAVORITES ? null : (0, a.jsx)(l.MenuItem, {
    id: "go-to-original-guild",
    label: o.default.Messages.FAVORITES_GO_TO_ORIGINAL_GUILD,
    action: function() {
      (0, u.transitionToGuild)(e.guild_id, e.id)
    }
  })
}