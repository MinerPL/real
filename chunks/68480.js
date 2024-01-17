"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("884691"),
  l = n("298386"),
  a = n("446674"),
  i = n("811425"),
  r = n("305961"),
  o = n("333363"),
  u = n("596512"),
  d = n("49111");

function c(e) {
  var t, n;
  let {
    message: c,
    channel: f,
    enabled: E = !0
  } = e, _ = (0, a.useStateFromStores)([r.default], () => {
    var e;
    let t = r.default.getGuild(f.guild_id);
    return null !== (e = null == t ? void 0 : t.hasFeature(d.GuildFeatures.COMMUNITY)) && void 0 !== e && e
  }, [f.guild_id]), T = (null === (t = c.messageReference) || void 0 === t ? void 0 : t.guild_id) != null && null != c.webhookId && c.hasFlag(d.MessageFlags.IS_CROSSPOST) && null != f.guild_id, I = f.type === l.ChannelTypes.GUILD_ANNOUNCEMENT && _, m = !c.hasFlag(d.MessageFlags.EPHEMERAL) && (T || I), N = T && null != c.messageReference ? c.messageReference.message_id : c.id, p = T && null != c.messageReference ? c.messageReference.channel_id : f.id, S = T && (null === (n = c.messageReference) || void 0 === n ? void 0 : n.guild_id) != null ? c.messageReference.guild_id : f.guild_id, A = s.useCallback(e => {
    e ? u.default.handleMessageBecameVisible({
      messageId: N,
      channelId: f.id,
      guildId: f.guild_id,
      sourceChannelId: p,
      sourceGuildId: S
    }) : u.default.handleMessageLostVisibility(N)
  }, [N, f.id, f.guild_id, p, S]), C = o.default.useExperiment({
    location: "836a4b_1"
  }, {
    disable: !m || !E,
    autoTrackExposure: !0
  }).enabled, h = (0, i.useIsVisible)(A, 0, C);
  return s.useEffect(() => () => {
    u.default.handleMessageLostVisibility(N)
  }, [N]), h
}