"use strict";
E.r(_), E.d(_, {
  isEligibleForInappropriateConversationWarning: function() {
    return n
  }
});
var t = E("862205");
let o = (0, t.createExperiment)({
  kind: "user",
  id: "2024-01_inappropriate_conversation_warning",
  label: "Inappropriate Conversation Warning",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Inappropriate Conversation Warning",
    config: {
      enabled: !0
    }
  }]
});

function n(e) {
  let {
    location: _,
    autoTrackExposure: E = !0
  } = e, {
    enabled: t
  } = o.getCurrentConfig({
    location: _
  }, {
    autoTrackExposure: E
  });
  return t
}