"use strict";
n.r(t), n.d(t, {
  useIsClearIncomingFriendRequestsEnabled: function() {
    return i
  }
});
var a = n("862205");
let s = (0, a.createExperiment)({
  kind: "user",
  id: "2023-05_clear_pending_incoming_friend_requests",
  label: "Enable ability to clear incoming friend requests",
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

function i() {
  return s.useExperiment({
    location: "ca2288_1"
  }, {
    autoTrackExposure: !0
  }).enabled
}