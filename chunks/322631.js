"use strict";
n.r(t), n.d(t, {
  TWITCH_APPLICATION_ID_PREFIX: function() {
    return r
  },
  default: function() {
    return l
  }
});
var l, a = n("376556"),
  s = n("653047"),
  i = n("782340");
let r = "twitch:";
l = class extends s.default {
  getIconURL() {
    return a.default.get("twitch").icon.lightPNG
  }
  constructor(e) {
    super(e), this.id = "".concat(r).concat(e.url), this.name = i.default.Messages.GAME_FEED_ACTIVITY_STREAMING_TWITCH
  }
}