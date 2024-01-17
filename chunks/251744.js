"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var a = n("917351"),
  s = n.n(a),
  i = n("233736"),
  l = n("299285"),
  r = n("373469"),
  o = n("42203"),
  u = n("305961"),
  d = n("260320"),
  c = n("42887"),
  f = n("945956"),
  E = n("568307"),
  _ = n("697218"),
  h = n("800762"),
  C = n("861309"),
  I = n("578287"),
  T = n("65810"),
  S = n("961400"),
  m = n("694352"),
  p = n("492249"),
  A = n("49111");

function g(e) {
  var t;
  let {
    args: {
      channel_id: n
    },
    socket: a
  } = e, s = o.default.getChannel(n);
  if (null == s || !(0, I.hasMessageReadPermission)(s, a.application.id, a.authorization.scopes)) throw new C.default(p.RPCErrors.INVALID_CHANNEL, "Invalid channel id: ".concat(n));
  if (s.isNSFW() && (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new C.default(p.RPCErrors.INVALID_CHANNEL, "Invalid nsfw channel id: ".concat(s.id))
}

function N(e) {
  let {
    args: {
      lobby_id: t,
      channel_id: n
    }
  } = e;
  if (null != n) {
    let e = o.default.getChannel(n);
    if (null == e) throw new C.default(p.RPCErrors.INVALID_CHANNEL, "Invalid channel id: ".concat(n))
  }
  if (null != t) {
    let e = d.default.getLobby(t);
    if (null == e) throw new C.default(p.RPCErrors.INVALID_LOBBY, "Invalid lobby id: ".concat(t))
  }
}
let R = {
  [A.RPCEvents.GUILD_STATUS]: {
    scope: A.OAuth2Scopes.RPC,
    handler(e) {
      let {
        args: {
          guild_id: t
        }
      } = e;
      if (null == u.default.getGuild(t)) throw new C.default(p.RPCErrors.INVALID_GUILD, "Invalid guild id: ".concat(t));
      return e => {
        var n;
        let {
          prevState: a,
          dispatch: i
        } = e, l = u.default.getGuild(t);
        if (null == l) return;
        let r = {
          guild: {
            id: l.id,
            name: l.name,
            icon_url: null !== (n = l.getIconURL(128)) && void 0 !== n ? n : null
          },
          online: 0
        };
        return !s.isEqual(a, r) && i(r), r
      }
    }
  },
  [A.RPCEvents.VOICE_STATE_CREATE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, A.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == o.default.getChannel(t)) throw new C.default(p.RPCErrors.INVALID_CHANNEL, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, i = o.default.getChannel(t);
        if (null == i) return;
        let l = i.getGuildId(),
          r = Object.values(h.default.getVoiceStatesForChannel(i.id));
        if (n) {
          let e = s.differenceBy(r, n, e => {
            let {
              userId: t
            } = e;
            return t
          });
          e.forEach(e => a((0, I.transformVoiceState)(l, i.id, e)))
        }
        return r
      }
    }
  },
  [A.RPCEvents.VOICE_STATE_DELETE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, A.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == o.default.getChannel(t)) throw new C.default(p.RPCErrors.INVALID_CHANNEL, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, i = o.default.getChannel(t);
        if (null == i) return;
        let l = i.getGuildId(),
          r = Object.values(h.default.getVoiceStatesForChannel(i.id)),
          u = s.differenceBy(n, r, e => {
            let {
              userId: t
            } = e;
            return t
          });
        return u.forEach(e => a((0, I.transformVoiceState)(l, i.id, e))), r
      }
    }
  },
  [A.RPCEvents.VOICE_STATE_UPDATE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, A.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler(e) {
      let {
        args: {
          channel_id: t
        }
      } = e;
      if (null == o.default.getChannel(t)) throw new C.default(p.RPCErrors.INVALID_CHANNEL, "Invalid channel id: ".concat(t));
      return e => {
        let {
          prevState: n,
          dispatch: a
        } = e, i = o.default.getChannel(t);
        if (null == i) return;
        let l = i.getGuildId(),
          r = Object.values(h.default.getVoiceStatesForChannel(i.id)).map(e => (0, I.transformVoiceState)(l, i.id, e)),
          u = s.differenceWith(r, n, s.isEqual);
        return u.forEach(e => a(e)), r
      }
    }
  },
  [A.RPCEvents.VOICE_CONNECTION_STATUS]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, A.OAuth2Scopes.RPC_VOICE_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        state: (0, I.getVoiceConnectionState)(f.default.getState()),
        hostname: f.default.getHostname(),
        pings: f.default.getPings(),
        average_ping: f.default.getAveragePing(),
        last_ping: f.default.getLastPing()
      };
      return !s.isEqual(a, t) && n(a), a
    }
  },
  [A.RPCEvents.MESSAGE_CREATE]: {
    scope: A.OAuth2Scopes.RPC,
    handler: g
  },
  [A.RPCEvents.MESSAGE_UPDATE]: {
    scope: A.OAuth2Scopes.RPC,
    handler: g
  },
  [A.RPCEvents.MESSAGE_DELETE]: {
    scope: A.OAuth2Scopes.RPC,
    handler: g
  },
  [A.RPCEvents.SPEAKING_START]: {
    [p.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, A.OAuth2Scopes.RPC_VOICE_READ, p.RPC_LOCAL_SCOPE],
    handler: N
  },
  [A.RPCEvents.SPEAKING_STOP]: {
    [p.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, A.OAuth2Scopes.RPC_VOICE_READ, p.RPC_LOCAL_SCOPE],
    handler: N
  },
  [A.RPCEvents.GUILD_CREATE]: {
    scope: A.OAuth2Scopes.RPC,
    handler() {}
  },
  [A.RPCEvents.CHANNEL_CREATE]: {
    scope: A.OAuth2Scopes.RPC,
    handler() {}
  },
  [A.RPCEvents.GAME_JOIN]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, p.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.GAME_SPECTATE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, p.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_JOIN]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, p.RPC_AUTHENTICATED_SCOPE, p.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_JOIN_REQUEST]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, p.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_SPECTATE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, p.RPC_AUTHENTICATED_SCOPE, p.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_INVITE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, p.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_PIP_MODE_UPDATE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, p.RPC_AUTHENTICATED_SCOPE, p.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_LAYOUT_MODE_UPDATE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [A.OAuth2Scopes.RPC, p.RPC_AUTHENTICATED_SCOPE, p.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: T.activityInstanceConnectedParticipantsUpdateEvent,
  [A.RPCEvents.THERMAL_STATE_UPDATE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [p.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ORIENTATION_UPDATE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [p.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ACTIVITY_INSTANCE_UPDATE]: {
    handler() {}
  },
  [A.RPCEvents.VOICE_CHANNEL_SELECT]: {
    scope: A.OAuth2Scopes.RPC,
    handler() {}
  },
  [A.RPCEvents.NOTIFICATION_CREATE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ALL]: [A.OAuth2Scopes.RPC, A.OAuth2Scopes.RPC_NOTIFICATIONS_READ]
    },
    handler() {}
  },
  [A.RPCEvents.RELATIONSHIP_UPDATE]: {
    scope: p.RPC_LOCAL_SCOPE,
    handler() {}
  },
  [A.RPCEvents.CURRENT_USER_UPDATE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [p.RPC_LOCAL_SCOPE, A.OAuth2Scopes.IDENTIFY]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        currentUser: _.default.getCurrentUser()
      };
      return null != a.currentUser && (null == t || !(0, i.default)(a, t)) && n((0, m.default)(a.currentUser)), a
    }
  },
  [A.RPCEvents.LOBBY_UPDATE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [p.RPC_AUTHENTICATED_SCOPE, p.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.LOBBY_DELETE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [p.RPC_AUTHENTICATED_SCOPE, p.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.LOBBY_MEMBER_CONNECT]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [p.RPC_AUTHENTICATED_SCOPE, p.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.LOBBY_MEMBER_UPDATE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [p.RPC_AUTHENTICATED_SCOPE, p.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.LOBBY_MEMBER_DISCONNECT]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [p.RPC_AUTHENTICATED_SCOPE, p.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.LOBBY_MESSAGE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [p.RPC_AUTHENTICATED_SCOPE, p.RPC_LOCAL_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ENTITLEMENT_CREATE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [p.RPC_LOCAL_SCOPE, p.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.ENTITLEMENT_DELETE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ANY]: [p.RPC_LOCAL_SCOPE, p.RPC_AUTHENTICATED_SCOPE]
    },
    handler() {}
  },
  [A.RPCEvents.USER_ACHIEVEMENT_UPDATE]: {
    scope: p.RPC_LOCAL_SCOPE,
    handler() {}
  },
  [A.RPCEvents.SCREENSHARE_STATE_UPDATE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ALL]: [p.RPC_LOCAL_SCOPE, A.OAuth2Scopes.RPC_SCREENSHARE_READ]
    },
    handler: () => e => {
      var t, n;
      let {
        prevState: a,
        dispatch: i
      } = e, o = r.default.getStreamerActiveStreamMetadata(), u = (null == o ? void 0 : o.pid) != null ? E.default.getGameForPID(o.pid) : null, d = (null == u ? void 0 : u.id) != null ? l.default.getApplication(u.id) : null, c = null != d ? (0, S.default)(d) : null, f = null == o ? void 0 : o.sourceName, _ = {
        active: null != o,
        pid: null !== (t = null == o ? void 0 : o.pid) && void 0 !== t ? t : null,
        application: (n = null != c, n) ? {
          name: f
        } : null
      };
      return !s.isEqual(_, a) && i(_), _
    }
  },
  [A.RPCEvents.VIDEO_STATE_UPDATE]: {
    scope: {
      [p.RPC_SCOPE_CONFIG.ALL]: [p.RPC_LOCAL_SCOPE, A.OAuth2Scopes.RPC_VIDEO_READ]
    },
    handler: () => e => {
      let {
        prevState: t,
        dispatch: n
      } = e, a = {
        active: c.default.isVideoEnabled()
      };
      return !s.isEqual(a, t) && n(a), a
    }
  }
};
var O = R