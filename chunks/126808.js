"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var n = l("233069"),
  a = l("42203"),
  s = l("800762");

function i(e) {
  var t;
  let {
    channelId: l,
    userId: i,
    activity: r
  } = e, o = a.default.getChannel(l), u = (null == r ? void 0 : r.session_id) == null || null != o && (0, n.isTextChannel)(o.type) ? l : null === (t = s.default.getVoiceStateForSession(i, null == r ? void 0 : r.session_id)) || void 0 === t ? void 0 : t.channelId;
  return null != u ? u : void 0
}