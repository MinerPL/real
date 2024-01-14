"use strict";
n.r(t), n.d(t, {
  SafetyUserSentimentExperiment: function() {
    return a
  }
});
var l = n("862205");
let a = (0, l.createExperiment)({
  kind: "user",
  id: "2023-05_safety_user_sentiment",
  label: "Safety User Sentiment Feedback Eligible",
  defaultConfig: {
    isEligible: !1
  },
  treatments: [{
    id: 1,
    label: "Eligible",
    config: {
      isEligible: !0
    }
  }]
})