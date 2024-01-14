"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s, a, l = n("446674"),
  i = n("913144");
(s = a || (a = {})).FAILED = "failed", s.SUCCEEDED = "succeeded";
let r = {};
class o extends l.default.Store {
  getFollowerStatsForChannel(e) {
    return r[e]
  }
}
o.displayName = "ChannelFollowerStatsStore";
var u = new o(i.default, {
  CONNECTION_OPEN: function() {
    r = {}
  },
  CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      stats: n
    } = e;
    n = null != n ? n : {}, r[t] = {
      loadingStatus: "succeeded",
      lastFetched: Date.now(),
      channelsFollowing: n.channels_following,
      guildMembers: n.guild_members,
      guildsFollowing: n.guilds_following,
      usersSeenEver: n.users_seen_ever,
      subscribersGainedSinceLastPost: n.subscribers_gained_since_last_post,
      subscribersLostSinceLastPost: n.subscribers_lost_since_last_post
    }
  },
  CHANNEL_FOLLOWER_STATS_FETCH_FAILURE: function(e) {
    let {
      channelId: t
    } = e;
    r[t] = {
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