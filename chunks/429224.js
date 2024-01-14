"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("872717"),
  s = n("913144"),
  l = n("49111"),
  i = {
    createChannelFollower: (e, t) => a.default.post({
      url: l.Endpoints.CHANNEL_FOLLOWERS(t),
      body: {
        webhook_channel_id: e
      },
      oldFormErrors: !0
    }),
    async fetchChannelFollowerStats(e) {
      s.default.dispatch({
        type: "CHANNEL_FOLLOWER_STATS_FETCH_START"
      });
      try {
        let t = await a.default.get({
          url: l.Endpoints.CHANNEL_FOLLOWER_STATS(e),
          body: {
            channel_id: e
          },
          oldFormErrors: !0
        });
        s.default.dispatch({
          type: "CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS",
          stats: t.body,
          channelId: e
        })
      } catch (t) {
        s.default.dispatch({
          type: "CHANNEL_FOLLOWER_STATS_FETCH_FAILURE",
          channelId: e
        })
      }
    },
    dismissPublishBump(e) {
      s.default.dispatch({
        type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED",
        messageId: e
      })
    },
    permanentlyHidePublishBump(e) {
      s.default.dispatch({
        type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY",
        channelId: e
      })
    }
  }