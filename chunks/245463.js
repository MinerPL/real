"use strict";
t.r(n), t.d(n, {
  canSelectedVoiceChannelUseSoundboard: function() {
    return a
  },
  default: function() {
    return d
  }
});
var u = t("42203"),
  l = t("957255"),
  i = t("18494"),
  o = t("49111");

function a() {
  let e = i.default.getVoiceChannelId(),
    n = u.default.getChannel(e);
  return d(n)
}

function d(e) {
  if (null == e) return !1;
  if (o.ChannelTypesSets.CALLABLE.has(e.type)) return !0;
  let n = l.default.can(o.Permissions.USE_SOUNDBOARD, e),
    t = l.default.can(o.Permissions.SPEAK, e);
  return e.type === o.ChannelTypes.GUILD_VOICE && n && t
}