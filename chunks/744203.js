"use strict";
n.r(t), n.d(t, {
  getActivityGuildSuggestion: function() {
    return c
  },
  useSelectGuildOptions: function() {
    return o
  }
});
var s = n("884691"),
  i = n("446674"),
  a = n("42203"),
  l = n("18494"),
  u = n("162771"),
  r = n("677099");

function c() {
  var e;
  let {
    allowGdmActivityChannelSuggestion: t
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
    allowGdmActivityChannelSuggestion: !1
  }, n = l.default.getVoiceChannelId(), s = a.default.getChannel(n);
  if (null != s && null != s.guild_id) return s.guild_id;
  if (null == s || !t) return null !== (e = u.default.getLastSelectedGuildId()) && void 0 !== e ? e : r.default.getFlattenedGuildIds()[0]
}

function o() {
  let e = (0, i.useStateFromStores)([r.default], () => r.default.getFlattenedGuildIds()),
    t = s.useMemo(() => e.map(e => ({
      label: e,
      value: e
    })), [e]);
  return t
}