"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var l = a("446674"),
  n = a("913144");
let s = {};
class i extends l.default.PersistedStore {
  initialize(e) {
    var t;
    null != e && (s = null !== (t = e.numCleanLoadsForGuild) && void 0 !== t ? t : {})
  }
  getState() {
    return {
      numCleanLoadsForGuild: s
    }
  }
  getTotalNumCleanLoads() {
    let e = 0;
    for (let a in s) {
      var t;
      e += null !== (t = s[a]) && void 0 !== t ? t : 0
    }
    return e
  }
}
i.displayName = "GuildHomeFeedbackStore", i.persistKey = "GuildHomeFeedbackStore";
var d = new i(n.default, {
  GUILD_FEED_FETCH_SUCCESS: function(e) {
    var t;
    let {
      guildId: a,
      fresh: l
    } = e;
    if (!l) return !1;
    s[a] = Math.min(50, (null !== (t = s[a]) && void 0 !== t ? t : 0) + 1)
  },
  LOGOUT: function() {
    s = {}
  }
})