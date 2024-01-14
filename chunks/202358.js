"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("446674"),
  u = n("567469"),
  i = n("998716"),
  a = n("834052"),
  r = n("42203"),
  s = n("305961");

function d(e) {
  let {
    id: t,
    data: {
      guild: n,
      instance: d,
      speakers: o,
      participantCount: c
    },
    context: f
  } = e, E = (0, l.useStateFromStores)([s.default, r.default], () => {
    var e;
    return s.default.getGuild(null === (e = r.default.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId())
  }, [t]), v = (0, l.useStateFromStores)([a.default], () => a.default.getStageInstanceByChannel(t), [t]), S = (0, u.useStageParticipants)(t, i.StageChannelParticipantNamedIndex.SPEAKER), g = (0, u.useStageParticipantsCount)(t), N = null != v ? S : o, h = (null != v ? g : c) - N.length;
  return {
    channelId: t,
    guild: null != E ? E : n,
    stage: null != v ? v : d,
    speakers: N,
    audienceCount: h,
    context: f
  }
}