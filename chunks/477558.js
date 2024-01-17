"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("446674"),
  i = n("233322"),
  r = n("157186"),
  o = n("716214"),
  u = n("42203"),
  d = n("26989"),
  c = n("305961"),
  f = n("697218"),
  E = n("933326"),
  _ = n("398604"),
  T = n("322224"),
  I = n("914169"),
  m = n("843455");

function N(e) {
  let {
    code: t
  } = e, [n, N, p] = t.split("-"), {
    guildScheduledEvent: S,
    guild: A,
    channel: C,
    isMember: h
  } = (0, a.useStateFromStoresObject)([_.default, c.default, u.default, d.default, f.default], () => {
    var e, t;
    let s = null !== (t = _.default.getGuildScheduledEvent(N)) && void 0 !== t ? t : void 0,
      l = c.default.getGuild(n),
      a = u.default.getChannel(null == s ? void 0 : s.channel_id),
      i = d.default.isMember(n, null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id);
    return {
      guildScheduledEvent: s,
      guild: l,
      channel: a,
      isMember: i
    }
  }, [n, N]);
  return l.useEffect(() => {
    (null == S ? void 0 : S.id) == null && T.default.fetchGuildEvent(n, N), E.default.getGuildEventUserCounts(n, N, null != p ? [p] : []), E.default.getGuildEventsForCurrentUser(n)
  }, [N, n, null == S ? void 0 : S.id, p]), (0, s.jsx)(I.default, {
    guild: A,
    channel: C,
    guildScheduledEvent: S,
    isMember: h,
    onAcceptInstantInvite: m.NOOP,
    onTransitionToInviteChannel: function() {
      if ((0, r.shouldShowMembershipVerificationGate)(n)) {
        (0, i.openMemberVerificationModal)(n);
        return
      }(null == C ? void 0 : C.isGuildStageVoice()) ? (0, o.connectAndOpen)(C) : (null == C ? void 0 : C.isGuildVoice()) && T.default.joinVoiceEvent(C.guild_id, C.id)
    },
    recurrenceId: p
  })
}