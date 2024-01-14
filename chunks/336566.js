"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var a = n("297726");
n("216391");
var s = n("260320"),
  i = n("861309"),
  l = n("716724"),
  r = n("492249"),
  o = n("49111");

function u(e) {
  if (e instanceof s.LobbyError) switch (e.code) {
    case o.LobbyErrors.FULL:
      throw new i.default(r.RPCErrors.LOBBY_FULL, "Lobby is full.");
    case o.LobbyErrors.INVALID_SECRET:
      throw new i.default(r.RPCErrors.INVALID_LOBBY_SECRET, "Lobby secret is invalid.");
    case o.LobbyErrors.NOT_FOUND:
      throw new i.default(r.RPCErrors.INVALID_LOBBY, "Lobby does not exist.");
    case o.LobbyErrors.SERVICE_UNAVAILABLE:
      throw new i.default(r.RPCErrors.SERVICE_UNAVAILABLE, "Lobby service is unavailable.");
    case o.LobbyErrors.ALREADY_CONNECTING:
      throw new i.default(r.RPCErrors.INVALID_COMMAND, "Already connecting to lobby.");
    default:
      throw new i.default(r.RPCErrors.UNKNOWN_ERROR, "Unknown error has occured.")
  }
  throw e
}
var d = {
  [o.RPCCommands.CREATE_LOBBY]: {
    scope: {
      [r.RPC_SCOPE_CONFIG.ANY]: [r.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, l.default)(e).required().keys({
      type: e.number().valid(Object.values(o.LobbyTypes)),
      capacity: e.number(),
      locked: e.boolean(),
      metadata: e.object()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          type: n,
          capacity: s,
          locked: l,
          metadata: o
        }
      } = e;
      if (null == t.application.id) throw new i.default(r.RPCErrors.INVALID_COMMAND, "No application.");
      return (0, a.createLobby)(t.id, t.application.id, {
        type: n,
        capacity: s,
        locked: l,
        metadata: o
      }).catch(u)
    }
  },
  [o.RPCCommands.UPDATE_LOBBY]: {
    scope: {
      [r.RPC_SCOPE_CONFIG.ANY]: [r.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, l.default)(e).required().keys({
      id: e.string().required(),
      type: e.number().valid(Object.values(o.LobbyTypes)),
      owner_id: e.string(),
      capacity: e.number(),
      locked: e.boolean(),
      metadata: (0, l.default)(e)
    }),
    handler(e) {
      let {
        args: {
          id: t,
          type: n,
          owner_id: s,
          capacity: i,
          locked: l,
          metadata: r
        }
      } = e;
      return (0, a.updateLobby)(t, {
        type: n,
        owner_id: s,
        capacity: i,
        locked: l,
        metadata: r
      }).catch(u)
    }
  },
  [o.RPCCommands.DELETE_LOBBY]: {
    scope: {
      [r.RPC_SCOPE_CONFIG.ANY]: [r.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, l.default)(e).required().keys({
      id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          id: t
        }
      } = e;
      return (0, a.deleteLobby)(t).catch(u)
    }
  },
  [o.RPCCommands.UPDATE_LOBBY_MEMBER]: {
    scope: {
      [r.RPC_SCOPE_CONFIG.ANY]: [r.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, l.default)(e).required().keys({
      lobby_id: e.string().required(),
      user_id: e.string().required(),
      metadata: (0, l.default)(e)
    }),
    handler(e) {
      let {
        args: {
          lobby_id: t,
          user_id: n,
          metadata: s
        }
      } = e;
      return (0, a.updateLobbyMember)(t, n, {
        metadata: s
      }).catch(u)
    }
  },
  [o.RPCCommands.CONNECT_TO_LOBBY]: {
    scope: {
      [r.RPC_SCOPE_CONFIG.ANY]: [r.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, l.default)(e).required().keys({
      id: e.string().required(),
      secret: e.string().required()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          id: n,
          secret: s
        }
      } = e;
      return (0, a.connect)(t.id, n, s).catch(u)
    }
  },
  [o.RPCCommands.DISCONNECT_FROM_LOBBY]: {
    scope: {
      [r.RPC_SCOPE_CONFIG.ANY]: [r.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, l.default)(e).required().keys({
      id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          id: t
        }
      } = e;
      (0, a.disconnect)(t)
    }
  },
  [o.RPCCommands.SEND_TO_LOBBY]: {
    scope: {
      [r.RPC_SCOPE_CONFIG.ANY]: [r.RPC_LOCAL_SCOPE]
    },
    validation: e => (0, l.default)(e).required().keys({
      lobby_id: e.string().required(),
      data: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          lobby_id: t,
          data: n
        }
      } = e;
      return (0, a.send)(t, n).catch(u)
    }
  },
  [o.RPCCommands.SEARCH_LOBBIES]: {
    scope: r.RPC_LOCAL_SCOPE,
    validation: e => (0, l.default)(e).required().keys({
      filter: e.array().items((0, l.default)(e).keys({
        key: e.string().required(),
        comparison: e.number().required(),
        cast: e.number().required(),
        value: e.string().required()
      })),
      sort: e.array().items((0, l.default)(e).keys({
        key: e.string().required(),
        cast: e.number().required(),
        near_value: e.string()
      })),
      limit: e.number(),
      distance: e.number()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          filter: n,
          sort: s,
          limit: i,
          distance: l
        }
      } = e;
      return (0, a.search)({
        application_id: t.application.id,
        filter: n,
        sort: s,
        limit: i,
        distance: l
      }).catch(u)
    }
  },
  [o.RPCCommands.CONNECT_TO_LOBBY_VOICE]: {
    scope: r.RPC_LOCAL_SCOPE,
    validation: e => (0, l.default)(e).required().keys({
      id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          id: t
        }
      } = e;
      (0, a.voiceConnect)(t)
    }
  },
  [o.RPCCommands.DISCONNECT_FROM_LOBBY_VOICE]: {
    scope: r.RPC_LOCAL_SCOPE,
    validation: e => (0, l.default)(e).required().keys({
      id: e.string().required()
    }),
    handler(e) {
      let {
        args: {
          id: t
        }
      } = e;
      (0, a.voiceDisconnect)(t)
    }
  }
}