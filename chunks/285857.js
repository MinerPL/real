"use strict";
E.r(_), E.d(_, {
  sendStageRequestToSpeakEphemeralMessage: function() {
    return r
  }
});
var t = E("913144"),
  o = E("299039"),
  n = E("49111");

function r(e, _, E) {
  t.default.dispatch({
    type: "MESSAGE_CREATE",
    channelId: e,
    message: function(e) {
      let {
        channelId: _,
        requesterUser: E,
        requestToSpeakTimestamp: t
      } = e;
      return {
        id: o.default.fromTimestamp(Date.parse(t)),
        type: n.MessageTypes.STAGE_RAISE_HAND,
        flags: n.MessageFlags.EPHEMERAL,
        content: "",
        channel_id: _,
        author: E,
        attachments: [],
        embeds: [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: t,
        state: n.MessageStates.SENT,
        tts: !1
      }
    }({
      channelId: e,
      requesterUser: _,
      requestToSpeakTimestamp: E
    }),
    optimistic: !1,
    sendMessageOptions: {},
    isPushNotification: !1
  })
}