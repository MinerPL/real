"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  s = n("76629"),
  u = n("981957"),
  r = n("156690"),
  d = n("782340");

function o(e, t) {
  let n = (0, i.useStateFromStores)([u.default], () => u.default.isSpeakingMessage(t.id, e.id), [t, e]);
  return "" === e.content ? null : (0, a.jsx)(l.MenuItem, {
    id: "tts",
    label: n ? d.default.Messages.STOP_SPEAKING_MESSAGE : d.default.Messages.SPEAK_MESSAGE,
    icon: r.default,
    action: () => n ? (0, s.stopSpeaking)() : (0, s.speakMessage)(t, e)
  })
}