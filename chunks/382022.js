"use strict";
E.r(_), E.d(_, {
  default: function() {
    return c
  }
}), E("222007");
var t = E("210696"),
  o = E.n(t),
  n = E("446674"),
  r = E("913144"),
  i = E("689988"),
  a = E("288206"),
  I = E("605250"),
  s = E("385976"),
  T = E("364685"),
  S = E("42203"),
  N = E("305961"),
  O = E("619443");
let A = new I.default("EntityVersionsManager");
class R extends i.default {
  _initialize() {
    r.default.subscribe("CONNECTION_OPEN", L)
  }
  _terminate() {
    r.default.unsubscribe("CONNECTION_OPEN", L)
  }
  constructor(...e) {
    super(...e), this.actions = {
      GUILD_CREATE: u,
      DELETED_ENTITY_IDS: l
    }
  }
}

function l(e) {
  var _;
  let E = null === (_ = N.default.getGuild(e.guild_id)) || void 0 === _ ? void 0 : _.name;
  A.fileOnly("received deleted guild entities (id: ".concat(e.guild_id, ", name: ").concat(E, ")")), n.default.Emitter.batched(() => {
    null != e.channels && function(e, _) {
      let E = Object.keys(S.default.getMutableBasicGuildChannelsForGuild(e));
      A.fileOnly("syncChannels", {
        channelIdsInMemory: E,
        channelIdsFromServer: _
      }), E.forEach(E => {
        !_.has(E) && r.default.dispatch({
          type: "CHANNEL_DELETE",
          channel: {
            guild_id: e,
            id: E,
            parent_id: void 0
          }
        })
      })
    }(e.guild_id, new Set(e.channels)), null != e.roles && function(e, _) {
      var E, t;
      Object.keys(null !== (t = null === (E = N.default.getGuild(e)) || void 0 === E ? void 0 : E.roles) && void 0 !== t ? t : {}).forEach(E => {
        !_.has(E) && r.default.dispatch({
          type: "GUILD_ROLE_DELETE",
          guildId: e,
          roleId: E
        })
      })
    }(e.guild_id, new Set(e.roles)), null != e.emojis && function(e, _) {
      let E = s.default.getGuildEmoji(e),
        t = E.filter(e => _.has(e.id));
      E.length !== t.length && r.default.dispatch({
        type: "GUILD_EMOJIS_UPDATE",
        guildId: e,
        emojis: t
      })
    }(e.guild_id, new Set(e.emojis)), null != e.stickers && function(e, _) {
      var E;
      let t = null !== (E = T.default.getStickersByGuildId(e)) && void 0 !== E ? E : [],
        o = t.filter(e => _.has(e.id));
      t.length !== o.length && r.default.dispatch({
        type: "GUILD_STICKERS_UPDATE",
        guildId: e,
        stickers: o
      })
    }(e.guild_id, new Set(e.stickers))
  })
}

function L() {
  a.default.getGuildIdsRequiringDeletedIdsSync().forEach(e => C(e))
}

function u(e) {
  let {
    guild: _
  } = e;
  _.unableToSyncDeletes && C(_.id)
}

function C(e) {
  setTimeout(() => (function(e) {
    var _, E, t, o, n;
    let r = null === (_ = N.default.getGuild(e)) || void 0 === _ ? void 0 : _.name;
    A.fileOnly("requesting deleted guild entities (id: ".concat(e, ", name: ").concat(r, ")"));
    let i = D(Object.keys(S.default.getMutableBasicGuildChannelsForGuild(e))),
      a = D(Object.keys(null !== (o = null === (E = N.default.getGuild(e)) || void 0 === E ? void 0 : E.roles) && void 0 !== o ? o : {})),
      I = D(s.default.getGuildEmoji(e).map(e => e.id)),
      R = D(null !== (n = null === (t = T.default.getStickersByGuildId(e)) || void 0 === t ? void 0 : t.map(e => e.id)) && void 0 !== n ? n : []);
    O.default.getSocket().getDeletedEntityIdsNotMatchingHash(e, i, a, I, R)
  })(e), Math.ceil(2e3 * Math.random()))
}

function D(e) {
  return o.v3(e.sort().join(",")).toString()
}
var c = new R