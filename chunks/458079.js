"use strict";
n.r(t), n.d(t, {
  recordChannelVisit: function() {
    return a
  },
  recordBannerRender: function() {
    return l
  }
});
var s = n("913144");

function a(e, t) {
  s.default.dispatch({
    guildId: e,
    channelId: t,
    type: "UNREAD_SETTING_NOTICE_CHANNEL_VISIT"
  })
}

function l(e, t) {
  s.default.dispatch({
    guildId: e,
    channelId: t,
    type: "UNREAD_SETTING_NOTICE_RENDERED"
  })
}