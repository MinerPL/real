"use strict";
E.r(_), E.d(_, {
  shouldShowInappropriateConversationTakeoverForChannel: function() {
    return o
  },
  shouldShowInappropriateConversationTakeoverForChannelRecord: function() {
    return n
  }
});
var t = E("764828");

function o(e) {
  let _ = function(e) {
      let _ = t.default.getChannelSafetyWarnings(e);
      return _.filter(e => e.type === t.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || e.type === t.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_2)
    }(e),
    E = _.filter(e => e.type === t.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
  return E.length > 0 && E.every(e => null == e.dismiss_timestamp)
}

function n(e) {
  if (null == e.safetyWarnings) return !1;
  let _ = e.safetyWarnings.filter(e => e.type === t.SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1);
  return _.length > 0 && _.every(e => null == e.dismiss_timestamp)
}