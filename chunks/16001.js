"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var i = (0, n("862205").createExperiment)({
  kind: "user",
  id: "2021-08_max_sync_delay",
  label: "Overrides the default max sync delay for AV streams in WebRTC",
  defaultConfig: {
    maxSyncDelayOverride: 0
  },
  treatments: [{
    id: 1,
    label: "Use 3 seconds as max sync delay",
    config: {
      maxSyncDelayOverride: 3e3
    }
  }]
})