"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var l = a("37983");
a("884691");
var n = a("446674"),
  s = a("77078"),
  u = a("305961"),
  i = a("697218"),
  d = a("986003"),
  r = a("512395"),
  o = a("49111"),
  c = a("782340");

function f(e) {
  let t = (0, r.useOptInEnabledForGuild)(e),
    a = (0, n.useStateFromStores)([u.default], () => u.default.getGuild(e)),
    f = (0, n.useStateFromStores)([i.default], () => i.default.getCurrentUser());
  return null != f && null != a && (a.hasFeature(o.GuildFeatures.COMMUNITY) || f.isStaff()) ? (0, l.jsx)(s.MenuCheckboxItem, {
    id: "opt-in",
    label: c.default.Messages.GUILD_CHANNEL_OPT_IN,
    checked: !t,
    action: () => {
      (0, d.toggleShowAllChannels)(e)
    }
  }) : null
}