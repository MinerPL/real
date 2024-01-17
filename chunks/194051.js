"use strict";
l.r(t), l.d(t, {
  default: function() {
    return v
  }
}), l("222007");
var a, n, s = l("917351"),
  r = l("446674"),
  o = l("407846"),
  i = l("913144"),
  u = l("766274"),
  d = l("271938"),
  c = l("9759"),
  f = l("837374");
(n = a || (a = {}))[n.INVALID = 0] = "INVALID", n[n.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", n[n.VALID = 2] = "VALID";
let S = new Set,
  h = new Set,
  A = new Set,
  g = [],
  E = {
    BROADCASTS_BY_USER_ID: e => "user:".concat(e),
    BROADCASTS_BY_CHANNEL_ID: e => "channel:".concat(e),
    BROADCASTS_BY_VALIDITY: e => "validity:".concat(e)
  },
  T = new o.default(function(e) {
    let t = S.has(e.userId) ? 1 : 0;
    return null != e.viewers && (t = 2), [E.BROADCASTS_BY_USER_ID(e.userId), E.BROADCASTS_BY_CHANNEL_ID(e.channelId), E.BROADCASTS_BY_VALIDITY(t)]
  }, e => e.channelId);

function R(e, t, l) {
  if (d.default.getId() === e) return !1;
  if (null == t) {
    let t = T.get(e);
    return !!(null != t && (0, s.isEqual)(t.source, l)) && (T.delete(e), void 0)
  }!S.has(e) && !h.has(e) && (A.add(e), g = [...A]);
  let a = (0, f.broadcastFromServer)(t, e, l);
  T.set(e, a)
}

function _(e) {
  return null != e ? {
    type: f.BroadcastSourceType.GUILD,
    guildId: e
  } : {
    type: f.BroadcastSourceType.GLOBAL
  }
}
class p extends r.default.Store {
  getBroadcasts() {
    return T.values(E.BROADCASTS_BY_VALIDITY(2))
  }
  getBroadcastsToValidateChannels() {
    return T.values(E.BROADCASTS_BY_VALIDITY(1))
  }
  getBroadcastByChannel(e) {
    return T.values(E.BROADCASTS_BY_CHANNEL_ID(e))[0]
  }
  getBroadcastByUser(e) {
    return T.get(e)
  }
  getUserIdsToValidate() {
    return g
  }
}
p.displayName = "BroadcastingStore";
var v = new p(i.default, {
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.forEach(e => {
      let {
        user: t,
        broadcast: l,
        guildId: a
      } = e;
      R(t.id, l, _(a))
    })
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    return t.forEach(e => {
      let {
        user: t,
        broadcast: l,
        guildId: a
      } = e;
      R(t.id, l, _(a))
    })
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      presences: t,
      guilds: l
    } = e;
    t.forEach(e => {
      let {
        user: t,
        broadcast: l,
        guildId: a
      } = e;
      R(t.id, l, _(a))
    }), l.forEach(e => {
      let {
        presences: t,
        id: l
      } = e;
      t.forEach(e => {
        let {
          user: t,
          broadcast: a
        } = e;
        R(t.id, a, _(l))
      })
    })
  },
  BROADCASTER_BUCKETS_RECEIVED: function(e) {
    let {
      data: t
    } = e;
    Object.keys(t).forEach(e => {
      c.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? S.add(e) : h.add(e), A.clear(), g = [...A];
      let l = T.get(e);
      null != l && (T.delete(e), T.set(e, l))
    })
  },
  BROADCAST_VIEWERS_UPDATE: function(e) {
    let {
      viewers: t
    } = e;
    Object.entries(t).forEach(e => {
      let [t, l] = e, a = T.get(t);
      null != a && T.set(t, {
        ...a,
        viewers: l
      })
    })
  },
  CHANNEL_RECIPIENT_ADD: function(e) {
    let {
      channelId: t,
      user: l
    } = e, a = T.values(E.BROADCASTS_BY_CHANNEL_ID(t))[0];
    if (null == a || null == a.viewers || a.viewers.some(e => e.id === l.id)) return !1;
    T.set(a.userId, {
      ...a,
      viewers: [...a.viewers, new u.default(l)]
    })
  },
  CHANNEL_RECIPIENT_REMOVE: function(e) {
    let {
      channelId: t,
      user: l
    } = e, a = T.values(E.BROADCASTS_BY_CHANNEL_ID(t))[0];
    if (null == a || null == a.viewers) return !1;
    T.set(a.userId, {
      ...a,
      viewers: a.viewers.filter(e => e.id !== l.id)
    })
  },
  CHANNEL_CREATE: function(e) {
    var t;
    let {
      channel: l
    } = e, a = T.values(E.BROADCASTS_BY_CHANNEL_ID(l.id))[0];
    if (null == a) return !1;
    let n = null !== (t = l.rawRecipients) && void 0 !== t ? t : [];
    T.set(a.userId, {
      ...a,
      viewers: n.filter(e => e.id !== a.userId).map(e => new u.default(e))
    })
  },
  LOGOUT: function() {
    S.clear(), h.clear(), A.clear(), g = [], T.clear()
  }
})