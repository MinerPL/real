"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var l, n, s = a("446674"),
  i = a("913144"),
  u = a("271938"),
  d = a("794818");
(l = n || (n = {})).UNSET = "unset", l.FETCHING = "fetching", l.FAILED = "failed", l.SUCCEEDED = "succeeded";
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
      guild: a
    } = e, l = (0, d.makeDiscoverableGuild)(a);
    r.guilds[t] = {
      ...r.guilds[t],
      guild: l,
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