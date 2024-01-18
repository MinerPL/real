"use strict";
n.r(t), n.d(t, {
  DraftType: function() {
    return s
  },
  default: function() {
    return T
  }
}), n("222007");
var s, i, r = n("917351"),
  a = n.n(r),
  o = n("446674"),
  d = n("913144"),
  u = n("449008"),
  l = n("271938"),
  f = n("42203"),
  _ = n("341542"),
  c = n("49111");
let g = c.MAX_MESSAGE_LENGTH_PREMIUM + 500;
(i = s || (s = {}))[i.ChannelMessage = 0] = "ChannelMessage", i[i.ThreadSettings = 1] = "ThreadSettings", i[i.FirstThreadMessage = 2] = "FirstThreadMessage", i[i.ApplicationLauncherCommand = 3] = "ApplicationLauncherCommand", i[i.Poll = 4] = "Poll", i[i.SlashCommand = 5] = "SlashCommand";
let m = {};

function h(e) {
  let t = m[e];
  return null == t && (t = m[e] = {}), t
}

function v(e) {
  let {
    type: t,
    channelId: n,
    draft: s,
    draftType: i
  } = e, r = f.default.getChannel(n);
  s === (null == r ? void 0 : r.template) && (s = "");
  let a = l.default.getId();
  if (null != a && null != s && "" !== s) {
    var o, d;
    let e = h(a),
      t = e[n];
    if (null == t && (t = e[n] = {}), (d = s).length > g && (d = d.substr(0, g)), (s = d) === (null === (o = t[i]) || void 0 === o ? void 0 : o.draft)) return !1;
    t[i] = {
      timestamp: Date.now(),
      draft: s
    }
  } else E(n, i);
  return "DRAFT_SAVE" === t
}

function E(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default.getId();
  if (null == n) return !1;
  let s = h(n),
    i = s[e];
  if (null == i) return !1;
  delete i[t], a.isEmpty(i) && delete s[e]
}

function p() {
  let e = l.default.getId();
  if (null == e || _.default.totalUnavailableGuilds > 0) return;
  let t = h(e);
  for (let e in t) null == f.default.getChannel(e) && delete t[e]
}

function y(e) {
  let {
    channel: {
      id: t
    }
  } = e, n = l.default.getId();
  if (null == n) return !1;
  let s = h(n);
  return delete s[t], !1
}
class C extends o.default.PersistedStore {
  initialize(e) {
    m = null != e ? e : {}, ! function() {
      for (let [e, t] of Object.entries(m))
        for (let [n, s] of Object.entries(t)) {
          let t = s[0];
          null != t && ("" === t.draft || "" === t.draft.trim()) && E(n, 0, e)
        }
    }(), this.waitFor(l.default, f.default, _.default)
  }
  getState() {
    return m
  }
  getThreadDraftWithParentMessageId(e) {
    let t = l.default.getId();
    if (null == t) return;
    let n = h(t),
      s = Object.keys(n).find(t => {
        let n = this.getThreadSettings(t);
        return (null == n ? void 0 : n.parentMessageId) === e
      });
    return null != s ? this.getThreadSettings(s) : void 0
  }
  getRecentlyEditedDrafts(e) {
    let t = l.default.getId();
    if (null == t) return [];
    let n = h(t);
    return a(n).mapValues(t => null == t ? void 0 : t[e]).pickBy(u.isNotNullish).toPairs().map(e => {
      let [t, {
        timestamp: n,
        draft: s
      }] = e;
      return {
        channelId: t,
        timestamp: n,
        draft: s
      }
    }).sortBy(e => {
      let {
        timestamp: t
      } = e;
      return -t
    }).value()
  }
  getDraft(e, t) {
    let n = l.default.getId();
    if (null == n) return "";
    let s = h(n),
      i = s[e];
    if (null != i) {
      let e = i[t];
      if (null != e) return e.draft
    }
    return ""
  }
  getThreadSettings(e) {
    let t = l.default.getId();
    if (null == t) return null;
    let n = h(t),
      s = n[e];
    return null == s ? null : s[1]
  }
}
C.displayName = "DraftStore", C.persistKey = "DraftStore", C.migrations = [e => {
  if (null == e) return {};
  for (let t in e) "timestamp" in e[t] && (e[t] = {
    0: e[t]
  });
  return e
}, e => {
  let t = l.default.getId();
  if (null == e || null == t) return {};
  let n = {},
    s = n[t] = {};
  for (let t in e) s[t] = e[t];
  return n
}];
var T = new C(d.default, {
  CONNECTION_OPEN: function() {
    let e = l.default.getId();
    return !(e in m) && (m[e] = {}), p(), !1
  },
  LOGOUT: function(e) {
    !e.isSwitchingAccount && (m = {})
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
    e.userId in m && delete m[e.userId]
  },
  GUILD_DELETE: function() {
    return p(), !1
  },
  CHANNEL_DELETE: y,
  THREAD_DELETE: y,
  THREAD_CREATE: function(e) {
    let {
      channel: t
    } = e, n = l.default.getId();
    if (null == n || t.ownerId === n) return !1;
    let s = h(n),
      i = s[t.parent_id];
    if (null == i) return !1;
    let r = i[1];
    if (null == r) return !1;
    if (r.parentMessageId !== t.id) return !1;
    {
      var a, o;
      let e = s[t.parent_id];
      if (null == e) return !1;
      let n = null !== (o = null === (a = e[2]) || void 0 === a ? void 0 : a.draft) && void 0 !== o ? o : "";
      "" !== n && (s[t.id] = {
        0: {
          timestamp: Date.now(),
          draft: n
        }
      }), E(t.parent_id, 1), E(t.parent_id, 2)
    }
  },
  DRAFT_SAVE: v,
  DRAFT_CHANGE: v,
  DRAFT_CLEAR: function(e) {
    let {
      channelId: t,
      draftType: n
    } = e;
    return E(t, n)
  },
  THREAD_SETTINGS_DRAFT_CHANGE: function(e) {
    let {
      channelId: t,
      draft: n
    } = e, s = l.default.getId();
    if (null == s) return;
    let i = h(s),
      r = i[t];
    null == r && (r = i[t] = {}), r[1] = {
      timestamp: Date.now(),
      ...r[1],
      ...n,
      parentChannelId: t
    }
  }
})