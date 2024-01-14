"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var a = n("917351"),
  s = n.n(a),
  i = n("305961"),
  l = n("861309"),
  r = n("716724"),
  o = n("492249"),
  u = n("49111"),
  d = {
    [u.RPCCommands.GET_GUILD]: {
      scope: u.OAuth2Scopes.RPC,
      validation: e => (0, r.default)(e).required().keys({
        guild_id: e.string(),
        timeout: e.number().min(0).max(60)
      }),
      handler(e) {
        let {
          socket: t,
          server: n,
          args: {
            guild_id: a,
            timeout: s = 0
          }
        } = e;
        return n.storeWait(t, () => i.default.getGuild(a), s).catch(() => {
          throw new l.default(o.RPCErrors.GET_GUILD_TIMED_OUT, "Request to get guild timed out.")
        }).then(e => {
          var t;
          if (null == e) throw new l.default(o.RPCErrors.INVALID_GUILD, "Invalid guild id: ".concat(a));
          return {
            id: e.id,
            name: e.name,
            icon_url: null !== (t = e.getIconURL(128)) && void 0 !== t ? t : null,
            members: [],
            vanity_url_code: e.vanityURLCode
          }
        })
      }
    },
    [u.RPCCommands.GET_GUILDS]: {
      scope: u.OAuth2Scopes.RPC,
      handler() {
        let e = i.default.getGuilds();
        return {
          guilds: s.map(e, e => ({
            id: e.id,
            name: e.name,
            icon_url: e.getIconURL(128)
          }))
        }
      }
    }
  }