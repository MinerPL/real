"use strict";
n.r(t), n.d(t, {
  SafetyUserSentimentExperiment: function() {
    return l
  }
});
var s = n("862205");
let l = (0, s.createExperiment)({
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