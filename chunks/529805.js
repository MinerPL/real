"use strict";
t.r(x), t.d(x, {
  createPendingReply: function() {
    return a
  },
  setPendingReplyShouldMention: function() {
    return o
  },
  deletePendingReply: function() {
    return y
  }
});
var s = t("913144");

function a(i) {
  let {
    message: x,
    channel: t,
    shouldMention: a,
    showMentionToggle: o,
    source: y
  } = i;
  s.default.dispatch({
    type: "CREATE_PENDING_REPLY",
    message: x,
    channel: t,
    shouldMention: a,
    showMentionToggle: o,
    source: y
  })
}

function o(i, x) {
  s.default.dispatch({
    type: "SET_PENDING_REPLY_SHOULD_MENTION",
    channelId: i,
    shouldMention: x
  })
}

function y(i) {
  s.default.dispatch({
    type: "DELETE_PENDING_REPLY",
    channelId: i
  })
}