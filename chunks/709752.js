"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var a = n("884691"),
  l = n("446674"),
  s = n("271938"),
  i = n("244480"),
  r = n("808422");

function o(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.getId()),
    n = (0, r.default)(t, e.id),
    o = n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK || n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
    [u, d] = a.useState(o);
  return a.useEffect(() => {
    d(o)
  }, [o]), [u, function() {
    n === r.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK ? (0, i.audienceAckRequestToSpeak)(e, !0) : (0, i.toggleRequestToSpeak)(e, !u), d(!u)
  }]
}