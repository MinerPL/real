"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("689988"),
  s = n("21121"),
  u = n("162771"),
  i = n("398604"),
  a = n("322224");
let o = {},
  r = new Set,
  d = async e => {
    let t = i.default.getGuildScheduledEventsForGuild(e);
    if (0 !== t.length) {
      if (!r.has(e)) try {
        await a.default.getGuildEventsForCurrentUser(e), r.add(e)
      } catch (e) {}
    }
  };
class c extends l.default {
  async getGuildEventUserCounts(e, t, n) {
    let l = n.filter(n => null == o["".concat(e, "-").concat(t, "-").concat(n)] || Date.now() - o["".concat(e, "-").concat(t, "-").concat(n)] > 18e5);
    if (!(Date.now() - o["".concat(e, "-").concat(t)] < 18e5) || 0 !== l.length) {
      o["".concat(e, "-").concat(t)] = Date.now(), l.forEach(n => o["".concat(e, "-").concat(t, "-").concat(n)] = Date.now());
      try {
        await a.default.fetchGuildEventUserCounts(e, t, l)
      } catch (e) {}
    }
  }
  getGuildEventUsers(e, t, n) {
    return a.default.fetchUsersForGuildEvent(e, t, n)
  }
  getGuildEventsForCurrentUser(e) {
    return d(e)
  }
  handleConnectionOpen() {
    r.clear(), o = {};
    let e = (0, s.isInMainTabsExperiment)(),
      t = u.default.getLastSelectedGuildId();
    if (e && null != t) {
      let e = i.default.getGuildScheduledEventsForGuild(t);
      e.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
    }
  }
  handleGuildUnavailable(e) {
    let {
      guildId: t
    } = e;
    r.delete(t), delete o[t]
  }
  handleGuildDelete(e) {
    let {
      guild: t
    } = e, n = t.id;
    r.delete(n), delete o[n]
  }
  handleInviteResolveSuccess(e) {
    var t;
    let {
      invite: n
    } = e, l = n.guild_scheduled_event, s = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
    null != l && null != s && d(s)
  }
  handleChannelSelect(e) {
    let {
      guildId: t
    } = e;
    if (null == t) return;
    let n = i.default.getGuildScheduledEventsForGuild(t);
    n.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
      GUILD_DELETE: e => this.handleGuildDelete(e),
      GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
      INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
      CHANNEL_SELECT: e => this.handleChannelSelect(e)
    }
  }
}
var f = new c