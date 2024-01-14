"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("702976");
var s = n("65597"),
  a = n("42203"),
  l = n("568734"),
  i = n("86415"),
  r = n("290886"),
  o = n("724210");

function u(e) {
  var t;
  let n = (0, s.default)([a.default], () => a.default.getChannel(e)),
    u = null != n && (0, l.hasFlag)(n.flags, o.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL),
    d = (0, s.default)([i.default], () => i.default.getSelectedResourceChannelId(null == n ? void 0 : n.guild_id)),
    c = (0, r.useCanSeeOnboardingHome)(null !== (t = null == n ? void 0 : n.guild_id) && void 0 !== t ? t : "");
  return null != n && c && u && d === n.id
}