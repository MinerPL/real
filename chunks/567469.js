"use strict";
n.r(t), n.d(t, {
  useStageParticipants: function() {
    return i
  },
  useStageParticipantsCount: function() {
    return u
  },
  useSortedRequestToSpeakParticipants: function() {
    return o
  },
  useActualStageSpeakerCount: function() {
    return c
  }
}), n("222007");
var l = n("446674"),
  a = n("334572"),
  r = n("488464"),
  s = n("998716");

function i(e, t) {
  let [n] = (0, l.useStateFromStores)([r.default], () => [r.default.getMutableParticipants(e, t), r.default.getParticipantsVersion(e)], [e, t], a.isVersionEqual);
  return n
}

function u(e, t) {
  return (0, l.useStateFromStores)([r.default], () => r.default.getParticipantCount(e, t), [e, t])
}

function o(e) {
  let [t] = (0, l.useStateFromStores)([r.default], () => {
    let t = r.default.getMutableRequestToSpeakParticipants(e);
    return [t, r.default.getRequestToSpeakParticipantsVersion(e)]
  }, [e], a.isVersionEqual);
  return t
}

function c(e) {
  return (0, l.useStateFromStores)([r.default], () => {
    let t = r.default.getMutableParticipants(e, s.StageChannelParticipantNamedIndex.SPEAKER),
      n = t.filter(e => e.type === s.StageChannelParticipantTypes.VOICE);
    return n.length
  }, [e])
}