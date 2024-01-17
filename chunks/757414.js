"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var n, a, s = l("446674"),
  i = l("913144"),
  u = l("271938"),
  d = l("794818");
(n = a || (a = {})).UNSET = "unset", n.FETCHING = "fetching", n.FAILED = "failed", n.SUCCEEDED = "succeeded";
let r = {
  guilds: {}
};
class o extends s.default.Store {
  initialize() {
    this.waitFor(u.default)
  }
  isFetchingGuild(e) {
    let t = r.guilds[e];
    return null != t && "fetching" === t.fetchState
  }
  getGuild(e) {
    let t = r.guilds[e];
    return null != t ? t.guild : null
  }
  hasFetchFailed(e) {
    let t = r.guilds[e];
    return null != t && "failed" === t.fetchState
  }
}
o.displayName = "GuildPopoutStore";
var c = new o(i.default, {
  GUILD_POPOUT_FETCH_START: function(e) {
    let {
      guildId: t
    } = e;
    r.guilds[t] = {
      ...r.guilds[t],
      fetchState: "fetching"
    }
  },
  GUILD_POPOUT_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      guild: l
    } = e, n = (0, d.makeDiscoverableGuild)(l);
    r.guilds[t] = {
      ...r.guilds[t],
      guild: n,
      fetchState: "succeeded"
    }
  },
  GUILD_POPOUT_FETCH_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    r.guilds[t] = {
      ...r.guilds[t],
      fetchState: "failed"
    }
  }
})