"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("446674"),
  i = n("271938"),
  a = n("18494"),
  u = n("808422");

function o() {
  let e = (0, l.useStateFromStores)([a.default], () => a.default.getVoiceChannelId()),
    t = (0, l.useStateFromStores)([i.default], () => i.default.getId()),
    n = (0, u.default)(t, e);
  return n === u.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
}