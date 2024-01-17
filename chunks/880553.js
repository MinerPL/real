"use strict";
t.r(n), t.d(n, {
  default: function() {
    return o
  }
});
var u = t("271938"),
  l = t("42203"),
  i = t("800762");

function o() {
  let e = i.default.getVoiceStateForSession(u.default.getId(), u.default.getSessionId()),
    n = null == e ? void 0 : e.channelId;
  return l.default.getChannel(n)
}