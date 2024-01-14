"use strict";
n.r(t), n.d(t, {
  canEveryoneRoleViewEvent: function() {
    return _
  },
  isGuildEventInvitable: function() {
    return p
  },
  default: function() {
    return m
  }
}), n("222007");
var i = n("446674"),
  u = n("242757"),
  l = n("834052"),
  r = n("42203"),
  o = n("923959"),
  c = n("305961"),
  a = n("957255"),
  s = n("991170"),
  d = n("398604"),
  f = n("745049"),
  E = n("49111");

function _(e) {
  var t;
  let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default];
  let {
    entityType: i,
    channelId: u
  } = "entity_type" in (t = e) ? {
    entityType: t.entity_type,
    channelId: t.channel_id
  } : t, l = i === f.GuildScheduledEventEntityTypes.EXTERNAL;
  if (l) return !0;
  let o = n.getChannel(u);
  return null != o && s.default.canEveryoneRole(E.Permissions.VIEW_CHANNEL, o)
}

function p(e) {
  let [t, n, i, s] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, r.default, c.default, l.default];
  if ((0, d.isGuildEventEnded)(e)) return !1;
  let {
    guild_id: E,
    channel_id: p
  } = e, m = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL, v = m ? t.getDefaultChannel(e.guild_id) : n.getChannel(p), I = i.getGuild(E), h = s.getStageInstanceByChannel(p);
  return !!(0, u.canViewInviteModal)(a.default, I, v, h) && null != v && _(e, [n])
}

function m(e) {
  return (0, i.useStateFromStores)([o.default, r.default, c.default, l.default], () => p(e, [o.default, r.default, c.default, l.default]), [e])
}