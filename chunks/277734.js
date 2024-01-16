"use strict";
n.r(t), n.d(t, {
  dismissChannelSafetyWarnings: function() {
    return r
  },
  setChannelSafetyWarningFeedback: function() {
    return s
  },
  clearChannelSafetyWarnings: function() {
    return o
  }
});
var i = n("872717"),
  l = n("913144"),
  a = n("49111");

function r(e, t) {
  return l.default.dispatch({
    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
    channelId: e,
    warningIds: t
  }), i.default.post({
    url: a.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
    body: {
      warning_ids: t
    },
    oldFormErrors: !0
  })
}

function s(e, t, n) {
  l.default.dispatch({
    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
    channelId: e,
    warningId: t,
    feedbackType: n
  })
}

function o(e) {
  l.default.dispatch({
    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
    channelId: e
  })
}