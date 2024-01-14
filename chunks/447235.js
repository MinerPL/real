"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("830210"),
  a = n("49111");

function s(e) {
  let {
    channel: t,
    locked: n,
    video: s,
    selected: i
  } = e, r = function(e) {
    let {
      channel: t,
      video: n,
      considerMaxStageVoiceUserLimit: s = !0
    } = e, {
      limit: i
    } = (0, l.default)(t), r = -1;
    return (t.userLimit > 0 && (r = t.userLimit), n && i > 0 && (r = r > 0 ? Math.min(r, i) : i), s && r === a.MAX_STAGE_VOICE_USER_LIMIT) ? 0 : r
  }({
    channel: t,
    video: s
  });
  return r > 0 && !n && !i
}