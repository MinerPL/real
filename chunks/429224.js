"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("872717"),
  l = n("913144"),
  a = n("49111"),
  i = {
    createChannelFollower: (e, t) => s.default.post({
      url: a.Endpoints.CHANNEL_FOLLOWERS(t),
      body: {
        webhook_channel_id: e
      },
      oldFormErrors: !0
    }),
    async fetchChannelFollowerStats(e) {
      l.default.dispatch({
        type: "CHANNEL_FOLLOWER_STATS_FETCH_START"
      });
      try {
        let t = await s.default.get({
          url: a.Endpoints.CHANNEL_FOLLOWER_STATS(e),
          body: {
            channel_id: e
          },
          oldFormErrors: !0
        });
        l.default.dispatch({
          type: "CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS",
          stats: t.body,
          channelId: e
        })
      } catch (t) {
        l.default.dispatch({
          type: "CHANNEL_FOLLOWER_STATS_FETCH_FAILURE",
          channelId: e
        })
      }
    },
    dismissPublishBump(e) {
      l.default.dispatch({
        type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED",
        messageId: e
      })
    },
    permanentlyHidePublishBump(e) {
      l.default.dispatch({
        type: "CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY",
        channelId: e
      })
    }
  }