"use strict";
E.r(_), E.d(_, {
  MAX_STORED_MESSAGES: function() {
    return s
  },
  default: function() {
    return u
  }
}), E("424973"), E("222007"), E("808653");
var t = E("917351"),
  o = E.n(t),
  n = E("446674"),
  r = E("913144"),
  i = E("42203");
E("162771");
var a = E("299039"),
  I = E("724210");
let s = 26,
  T = {},
  S = {},
  N = {},
  O = {};

function A(e) {
  let _ = S[e];
  if (null == _) return;
  let E = a.default.fromTimestamp(Date.now() - 9e5),
    t = o.findIndex(_, e => a.default.compare(e.id, E) > 0);
  if (-1 === t) S[e] = [];
  else {
    let E = Math.max(t, _.length - s);
    S[e] = o.slice(_, E)
  }
  N[e] = Date.now()
}

function R(e, _, E, t) {
  T[e].add(_);
  let o = N[_];
  (null == o || o + 3e5 > Date.now()) && A(_), null == S[_] && (S[_] = []), S[_].push({
    id: E,
    userId: t
  })
}

function l(e) {
  let {
    channel: _
  } = e;
  delete S[_.id], delete N[_.id]
}
class L extends n.default.Store {
  getActiveChannelsFetchStatus(e) {
    return O[e]
  }
  getActiveChannelIds(e) {
    return T[e]
  }
  getChannelMessageData(e) {
    return S[e]
  }
  shouldFetch(e) {
    var _;
    return null == T[e] && !(null === (_ = O[e]) || void 0 === _ ? void 0 : _.loading)
  }
}
L.displayName = "ActiveChannelsStore";
var u = new L(r.default, {
  CHANNEL_SELECT: function(e) {
    let {
      channelId: _,
      guildId: E
    } = e;
    if (!(0, I.isGuildHomeChannel)(_) || null == E) return !1;
    let t = T[E];
    if (null == t) return !1;
    t.forEach(e => {
      var _;
      A(e), (null === (_ = S[e]) || void 0 === _ ? void 0 : _.length) === 0 && delete S[e]
    });
    let n = o.chain(Array.from(t)).filter(e => e in S).sortBy(e => {
      var _, E;
      return -(null !== (E = null === (_ = S[e]) || void 0 === _ ? void 0 : _.length) && void 0 !== E ? E : 0)
    }).value();
    T[E] = new Set(n)
  },
  MESSAGE_CREATE: function(e) {
    var _;
    let {
      channelId: E,
      message: t,
      optimistic: o,
      isPushNotification: n
    } = e;
    if (o || n) return !1;
    let r = i.default.getChannel(E);
    if (null == r) return !1;
    let a = r.guild_id;
    if (null == a || null == T[a]) return !1;
    R(a, E, t.id, null === (_ = t.author) || void 0 === _ ? void 0 : _.id)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: _
    } = e;
    delete T[_.id]
  },
  CHANNEL_DELETE: l,
  THREAD_DELETE: l,
  ACTIVE_CHANNELS_FETCH_START: function(e) {
    let {
      guildId: _
    } = e;
    O[_] = {
      loading: !0,
      error: null,
      fetchedAt: Date.now()
    }
  },
  ACTIVE_CHANNELS_FETCH_SUCCESS: function(e) {
    let {
      guildId: _,
      channels: E
    } = e;
    O[_] = {
      loading: !1,
      error: null,
      fetchedAt: Date.now()
    }, T[_] = new Set, E.forEach(e => {
      let {
        channel_id: E,
        messages: t
      } = e;
      t.forEach(e => {
        R(_, E, e.message_id, e.user_id)
      })
    })
  },
  ACTIVE_CHANNELS_FETCH_FAILURE: function(e) {
    let {
      guildId: _,
      error: E
    } = e;
    O[_] = {
      loading: !1,
      error: E,
      fetchedAt: null
    }
  },
  CONNECTION_OPEN: function() {}
})