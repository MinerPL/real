"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("446674"),
  i = n("42203"),
  u = n("18494");

function a() {
  return (0, l.useStateFromStores)([u.default, i.default], () => {
    let e = u.default.getVoiceChannelId();
    if (null != e) {
      let t = i.default.getChannel(e);
      if (null == t ? void 0 : t.isGuildStageVoice()) return t
    }
    return null
  })
}