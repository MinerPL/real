"use strict";
n.r(t), n.d(t, {
  ChannelEmojisExperiment: function() {
    return i
  }
});
var l = n("862205");
let i = (0, l.createExperiment)({
  kind: "user",
  id: "2023-03_channel_name_emojis",
  label: "Channel Emojis",
  defaultConfig: {
    enabled: !1,
    left: !1
  },
  treatments: [{
    id: 1,
    label: "Enable channel name emojis",
    config: {
      enabled: !0,
      left: !1
    }
  }, {
    id: 2,
    label: "Emojis to left of channel icon",
    config: {
      enabled: !0,
      left: !0
    }
  }]
})