"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("387111"),
  r = n("49111"),
  s = n("782340");

function l(e, t, n, l) {
  if (e.state === r.ApplicationStreamStates.RECONNECTING) return {
    mainText: s.default.Messages.STREAM_RECONNECTING_ERROR,
    supportingText: s.default.Messages.STREAM_RECONNECTING_ERROR_SUBTEXT
  };
  if (e.state === r.ApplicationStreamStates.PAUSED) return n ? {
    mainText: s.default.Messages.STREAM_CAPTURE_PAUSED,
    supportingText: s.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS
  } : {
    mainText: s.default.Messages.STREAM_CAPTURE_PAUSED,
    supportingText: s.default.Messages.STREAM_CAPTURE_PAUSED_DETAILS_VIEWER.format({
      username: a.default.getName(e.guildId, e.channelId, t)
    })
  };
  return l ? {
    mainText: s.default.Messages.STREAM_PREVIEW_PAUSED,
    supportingText: s.default.Messages.STREAM_PREVIEW_PAUSED_SUBTEXT
  } : null
}