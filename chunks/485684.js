"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("862205");
let i = (0, a.createExperiment)({
  kind: "guild",
  id: "2023-07_allow_welcome_message_replies",
  label: "Allow replies to welcome messages",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});
var l = i