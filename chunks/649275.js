"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var a = n("271938"),
  l = n("957255"),
  s = n("316133"),
  i = n("991170"),
  r = n("398604"),
  o = n("270161");

function u(e) {
  if (!e.isGuildVoice()) return !1;
  let t = r.default.getGuildScheduledEventsByIndex(r.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e.id));
  if (t.length < 1) return !1;
  let n = l.default.can(o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS, e);
  if (!n) return !1;
  let u = new Set(s.default.getVoiceStatesForChannel(e).map(e => e.user.id)),
    d = a.default.getId();
  for (let t of u)
    if (t !== d && i.default.can({
        permission: o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS,
        user: t,
        context: e
      })) return !1;
  return !0
}