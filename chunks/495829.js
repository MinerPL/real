"use strict";
n.r(t), n.d(t, {
  preStartEventActions: function() {
    return h
  },
  setEventAsActive: function() {
    return _
  }
}), n("424973"), n("222007"), n("70102");
var l = n("627445"),
  i = n.n(l),
  a = n("437140"),
  s = n("738983"),
  r = n("233069"),
  d = n("42203"),
  u = n("305961"),
  o = n("322224"),
  c = n("745049"),
  f = n("49111");
async function E(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
    l = [];
  l.push(...n);
  let i = await a.default.createChannel({
    guildId: e.id,
    type: f.ChannelTypes.GUILD_STAGE_VOICE,
    name: t.substring(0, 100),
    permissionOverwrites: l
  });
  if (null == i || 201 !== i.status) throw Error("Can't create channel for event");
  return (0, r.createChannelRecordFromServer)(i.body)
}
async function h(e, t) {
  let {
    entity_type: n
  } = e;
  if (n === c.GuildScheduledEventEntityTypes.STAGE_INSTANCE) {
    let n = await

    function(e, t) {
      let {
        guild_id: n,
        channel_id: l
      } = e, i = u.default.getGuild(n);
      if (null == i) return Promise.resolve(null);
      let a = d.default.getChannel(l);
      return null == a ? E(i, e.name, t) : Promise.resolve(a)
    }(e, t);
    i(null != n, "could not find or create channel")
  }
}
async function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      channel_id: n,
      entity_type: l,
      name: a,
      id: r,
      guild_id: d
    } = e;
  switch (l) {
    case c.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
      i(null != n, "channel_id is required"), await (0, s.startStageInstance)(n, a, c.GuildScheduledEventPrivacyLevel.GUILD_ONLY, t, r);
      break;
    case c.GuildScheduledEventEntityTypes.VOICE:
      i(null != n, "channel_id is required"), await o.default.startEvent(r, d);
      break;
    case c.GuildScheduledEventEntityTypes.EXTERNAL:
      await o.default.startEvent(r, d)
  }
}