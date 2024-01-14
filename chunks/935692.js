"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var l, n, a = s("446674"),
  o = s("913144");
(l = n || (n = {})).FAILED = "failed", l.SUCCEEDED = "succeeded";
let i = {};
class u extends a.default.Store {
  getFollowerStatsForChannel(e) {
    return i[e]
  }
}
u.displayName = "ChannelFollowerStatsStore";
var r = new u(o.default, {
  CONNECTION_OPEN: function() {
    i = {}
  },
  CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      stats: s
    } = e;
    s = null != s ? s : {}, i[t] = {
      loadingStatus: "succeeded",
      lastFetched: Date.now(),
      channelsFollowing: s.channels_following,
      guildMembers: s.guild_members,
      guildsFollowing: s.guilds_following,
      usersSeenEver: s.users_seen_ever,
      subscribersGainedSinceLastPost: s.subscribers_gained_since_last_post,
      subscribersLostSinceLastPost: s.subscribers_lost_since_last_post
    }
  },
  CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    i[t] = {
      loadingStatus: "failed",
      lastFetched: Date.now(),
      channelsFollowing: 0,
      guildMembers: 0,
      guildsFollowing: 0,
      usersSeenEver: 0,
      subscribersGainedSinceLastPost: 0,
      subscribersLostSinceLastPost: 0
    }
  }
})