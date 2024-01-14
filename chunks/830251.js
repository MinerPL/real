"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("446674"), n("271938"), n("42887");
var a = n("99795");

function l(e) {
  var t, n;
  return e.type !== a.ParticipantTypes.ACTIVITY && ((0, a.isStreamParticipant)(e) ? null != e.streamId : null !== (n = null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) && void 0 !== n && n)
}