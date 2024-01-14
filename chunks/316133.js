"use strict";
n.r(t), n.d(t, {
  getComparator: function() {
    return I
  },
  default: function() {
    return O
  }
}), n("222007"), n("808653");
var i = n("917351"),
  r = n.n(i),
  s = n("446674"),
  a = n("407846"),
  o = n("913144"),
  l = n("766274"),
  u = n("271938"),
  c = n("42203"),
  d = n("26989"),
  f = n("697218"),
  E = n("800762"),
  h = n("158998"),
  p = n("49111");
let _ = Object.freeze([]),
  S = {};

function m(e) {
  let t = S[e];
  return null == t && (t = new v(e), S[e] = t), t
}

function T(e, t) {
  return d.default.getMember(e, t.id)
}

function g(e, t, n) {
  var i;
  let r = null !== (i = null == t ? void 0 : t.nick) && void 0 !== i ? i : h.default.getName(n);
  return {
    member: t,
    comparator: I(e, r)
  }
}

function I(e, t) {
  return "".concat(e.selfStream ? "\x00" : "\x01").concat(t.toLowerCase(), "\x00").concat(e.userId)
}

function C(e, t, n) {
  let i = f.default.getUser(n),
    r = null == i;
  null == i && (i = new l.default({
    id: n,
    username: "...",
    discriminator: n.slice(-5, -1)
  }));
  let {
    member: s,
    comparator: a
  } = function(e, t, n) {
    let i = T(e, t);
    return g(n, i, t)
  }(t, i, e), o = {
    voiceState: e,
    user: i,
    member: s,
    comparator: a,
    nick: null == s ? void 0 : s.nick
  };
  return r && (o._isPlaceholder = !0), o
}
class v {
  updateVoiceState(e) {
    if (null != this._pending) return this._pending.add(e), !1;
    let t = E.default.getVoiceState(this.guildId, e),
      n = this._voiceStates.get(e),
      i = f.default.getUser(e);
    if (null != t && null != i) {
      if (null == n) return this._voiceStates.set(e, C(t, this.guildId, e)), !0;
      if (n.voiceState !== t) {
        var r;
        let s = T(this.guildId, i),
          a = null !== (r = null == s ? void 0 : s.nick) && void 0 !== r ? r : h.default.getName(i);
        return this._voiceStates.set(e, {
          ...n,
          member: s,
          comparator: I(t, a),
          nick: a,
          voiceState: t
        }), !0
      }
    } else if (null != n) return this._voiceStates.delete(e), !0;
    return !1
  }
  updateMember(e) {
    if (null != this._pending) return this._pending.add(e), !1;
    let t = this._voiceStates.get(e),
      n = f.default.getUser(e);
    if (null != t && null != n) {
      var i, r;
      let s = T(this.guildId, n);
      if ((null == s ? void 0 : s.nick) !== (null === (i = t.member) || void 0 === i ? void 0 : i.nick) || (null == s ? void 0 : s.avatar) !== (null === (r = t.member) || void 0 === r ? void 0 : r.avatar)) {
        let {
          comparator: i
        } = g(t.voiceState, s, n);
        return this._voiceStates.set(e, {
          ...t,
          member: s,
          comparator: i,
          nick: null == s ? void 0 : s.nick
        }), !0
      }
    }
    return !1
  }
  updateUsers() {
    return null == this._pending && this._voiceStates.values().reduce((e, t) => {
      let n = f.default.getUser(t.user.id);
      return null != n && t.user !== n ? (this._voiceStates.set(n.id, C(t.voiceState, this.guildId, n.id)), !0) : e
    }, !1)
  }
  getUserIds() {
    return this.processPending(), this._voiceStates.keys()
  }
  getVoiceStates() {
    return this.processPending(), this._voiceStates.indexes()
  }
  getVoiceStatesForChannel(e) {
    this.processPending();
    let t = this._voiceStates.values(e);
    return 0 === t.length ? _ : t
  }
  countVoiceStatesForChannel(e) {
    return this.processPending(), this._voiceStates.size(e)
  }
  getVersion() {
    return this.processPending(), this._voiceStates.version
  }
  processPending() {
    if (null != this._pending) {
      let e = this._pending;
      this._pending = void 0, e.forEach(e => this.updateVoiceState(e))
    }
  }
  constructor(e) {
    this._pending = new Set, this._voiceStates = new a.default(e => {
      let {
        voiceState: {
          channelId: t
        }
      } = e;
      return null != t ? [t] : []
    }, e => {
      let {
        comparator: t
      } = e;
      return t
    }), this.guildId = e
  }
}

function A() {
  return r.reduce(S, (e, t) => t.updateUsers() || e, !1)
}

function R() {
  S = {};
  let e = E.default.getAllVoiceStates();
  Object.keys(e).forEach(t => {
    Object.keys(e[t]).forEach(e => {
      m(null != t ? t : p.ME).updateVoiceState(e)
    })
  })
}
class N extends s.default.Store {
  initialize() {
    R(), this.waitFor(u.default, f.default, d.default, E.default), this.syncWith([f.default], A)
  }
  getVoiceStates(e) {
    return m(null != e ? e : p.ME).getVoiceStates()
  }
  getAllVoiceStates() {
    return S
  }
  getVoiceStatesForChannel(e) {
    let t = e.getGuildId(),
      n = e.id;
    return m(null != t ? t : p.ME).getVoiceStatesForChannel(n)
  }
  getVoiceStatesForChannelAlt(e, t) {
    return m(null != t ? t : p.ME).getVoiceStatesForChannel(e)
  }
  countVoiceStatesForChannel(e) {
    let t = c.default.getChannel(e);
    if (null == t) return 0;
    let n = t.getGuildId();
    return m(null != n ? n : p.ME).countVoiceStatesForChannel(e)
  }
  getVoiceStateVersion(e) {
    return m(null != e ? e : p.ME).getVersion()
  }
}
N.displayName = "SortedVoiceStateStore";
var O = new N(o.default, {
  CONNECTION_OPEN: function() {
    S = {}
  },
  OVERLAY_INITIALIZE: function() {
    R()
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      guildId: t
    } = e, n = u.default.getId();
    return null != n && m(null != t ? t : p.ME).updateVoiceState(n)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      let {
        guildId: n,
        userId: i
      } = t;
      return m(null != n ? n : p.ME).updateVoiceState(i) || e
    }, !1)
  },
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    return m(t).updateMember(n.id)
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    delete S[t.id]
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete S[t.id]
  },
  PASSIVE_UPDATE_V1: function(e) {
    var t, n;
    let i = !1,
      r = new Set(null === (t = S[e.guildId]) || void 0 === t ? void 0 : t.getUserIds()),
      s = new Set(null === (n = e.voiceStates) || void 0 === n ? void 0 : n.map(e => e.userId)),
      a = new Set([...r, ...s]);
    for (let t of a) i = m(e.guildId).updateVoiceState(t) || i;
    for (let t of s) r.has(t) && (i = m(e.guildId).updateMember(t) || i);
    return i
  }
})