"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("99795"),
  r = n("353927");
let s = Object.freeze({
  [a.ParticipantTypes.STREAM]: r.MediaEngineContextTypes.STREAM,
  [a.ParticipantTypes.HIDDEN_STREAM]: r.MediaEngineContextTypes.STREAM,
  [a.ParticipantTypes.USER]: r.MediaEngineContextTypes.DEFAULT,
  [a.ParticipantTypes.ACTIVITY]: r.MediaEngineContextTypes.DEFAULT
});

function l(e) {
  return s[e]
}