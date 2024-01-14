"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var i = n("917351"),
  r = n.n(i),
  s = n("446674"),
  a = n("913144"),
  o = n("605250"),
  l = n("305961");
let u = new o.default("GuildAvailabilityStore"),
  c = new Set;

function d(e) {
  c = new Set(e.unavailableGuilds), e.unavailableGuilds.length > 0 && u.warn("".concat(e.unavailableGuilds.length, " guilds are unavailable on connection open: ").concat(e.unavailableGuilds))
}

function f(e) {
  if (!c.has(e.guild.id)) return !1;
  c.delete(e.guild.id), u.info("Guild has become available: ".concat(e.guild.id))
}
class E extends s.default.Store {
  initialize() {
    this.waitFor(l.default)
  }
  isUnavailable(e) {
    return null != e && c.has(e)
  }
  get totalGuilds() {
    return r.size(l.default.getGuilds()) + c.size
  }
  get totalUnavailableGuilds() {
    return c.size
  }
  get unavailableGuilds() {
    return Array.from(c)
  }
}
E.displayName = "GuildAvailabilityStore";
var h = new E(a.default, {
  CONNECTION_OPEN: d,
  OVERLAY_INITIALIZE: d,
  GUILD_UNAVAILABLE: function(e) {
    if (c.has(e.guildId)) return !1;
    let t = l.default.getGuild(e.guildId),
      n = "???";
    null != t && null != t.name && (n = t.name), u.warn("Guild has gone unavailable: ".concat(e.guildId, " (").concat(n, ")")), c.add(e.guildId)
  },
  GUILD_DELETE: function(e) {
    !0 !== e.guild.unavailable && c.delete(e.guild.id)
  },
  GUILD_CREATE: f,
  GUILD_UPDATE: f,
  GUILD_GEO_RESTRICTED: function(e) {
    if (!c.has(e.guildId)) return !1;
    c.delete(e.guildId)
  }
})