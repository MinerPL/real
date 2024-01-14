"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("913144"),
  s = n("597517"),
  i = n("533613"),
  l = {
    init() {
      a.default.subscribe("VOICE_CHANNEL_SELECT", e => {
        let {
          channelId: t
        } = e;
        null == t && s.hideHotspot(i.HotspotLocations.VOICE_PANEL_INTRODUCTION)
      })
    }
  }