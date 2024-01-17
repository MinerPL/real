"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("222007"), n("424973");
var s = n("714617"),
  i = n.n(s),
  r = n("917351"),
  a = n.n(r),
  o = n("446674"),
  d = n("913144"),
  u = n("309570"),
  l = n("32346"),
  f = n("271938"),
  _ = n("697218"),
  c = n("49111");
let g = Object.freeze([]),
  m = {},
  h = {},
  v = {},
  E = {},
  p = {};

function y(e, t) {
  let n = m[e];
  return null != n ? n[t] : null
}
let T = e => {
    switch (e.type) {
      case c.ActivityTypes.CUSTOM_STATUS:
        return 4;
      case c.ActivityTypes.COMPETING:
        return 3;
      case c.ActivityTypes.STREAMING:
        return 2;
      case c.ActivityTypes.PLAYING:
        return 1;
      default:
        return 0
    }
  },
  C = e => (0, u.default)(e) ? 1 : 0;

function S(e, t) {
  var n, s, i, r, a;
  return n = e, T(t) - T(n) || (s = e, C(t) - C(s)) || (i = e, (null !== (r = t.created_at) && void 0 !== r ? r : 0) - (null !== (a = i.created_at) && void 0 !== a ? a : 0))
}

function I(e) {
  if (delete h[e], delete v[e], delete E[e], null == m[e]) return;
  let [t] = a.sortBy(m[e], e => -e.timestamp);
  t.status !== c.StatusTypes.OFFLINE ? (h[e] = t.status, v[e] = t.activities, null != t.clientStatus && (E[e] = t.clientStatus)) : a.every(m[e], e => e.status === c.StatusTypes.OFFLINE) && delete m[e]
}

function A(e) {
  let t = m[e];
  if (null == t) return;
  let n = a.maxBy(Object.values(t), e => e.timestamp);
  n.status !== c.StatusTypes.OFFLINE && (h[e] = n.status, v[e] = n.activities, null != n.clientStatus && (E[e] = n.clientStatus))
}

function D(e) {
  let {
    guildId: t,
    userId: n,
    status: s,
    clientStatus: r,
    activities: a
  } = e;
  if (n === f.default.getId()) return !1;
  let o = m[n];
  if (null == o) {
    if (s === c.StatusTypes.OFFLINE) return !1;
    o = m[n] = {}
  }
  if (s === c.StatusTypes.OFFLINE) o[t] = {
    status: s,
    clientStatus: r,
    activities: g,
    timestamp: Date.now()
  };
  else {
    let e = a.length > 1 ? [...a].sort(S) : a,
      n = o[t];
    a = null != n && i(n.activities, e) ? n.activities : e, o[t] = {
      status: s,
      clientStatus: r,
      activities: a,
      timestamp: Date.now()
    }
  }
  return delete p[n], I(n), !0
}

function N(e) {
  let {
    guildId: t,
    userId: n,
    status: s,
    clientStatus: i,
    activities: r,
    timestamp: a
  } = e;
  if (n === f.default.getId()) return;
  let o = m[n];
  if (null == o) {
    if (s === c.StatusTypes.OFFLINE) return;
    o = m[n] = {}
  }
  if (s === c.StatusTypes.OFFLINE) o[t] = {
    status: s,
    clientStatus: i,
    activities: g,
    timestamp: Date.now()
  };
  else {
    let e = r.length > 1 ? [...r].sort(S) : r;
    o[t] = {
      status: s,
      clientStatus: i,
      activities: e,
      timestamp: a
    }
  }
}

function O(e, t) {
  if (t === f.default.getId()) return !1;
  let n = m[t];
  if (null == n || null == n[e]) return !1;
  delete n[e], 0 === Object.keys(n).length && delete m[t], I(t)
}

function b(e) {
  for (let t of Object.keys(m)) O(e, t)
}
class P extends o.default.Store {
  initialize() {
    this.waitFor(f.default, l.default)
  }
  setCurrentUserOnConnectionOpen(e, t) {
    h[f.default.getId()] = e, v[f.default.getId()] = t
  }
  getStatus(e) {
    var t, n;
    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.StatusTypes.OFFLINE,
      r = _.default.getUser(e);
    if (null != r && r.hasFlag(c.UserFlags.BOT_HTTP_INTERACTIONS) && (i = c.StatusTypes.UNKNOWN), null == r ? void 0 : r.isClyde()) return c.StatusTypes.ONLINE;
    if (null == s) return null !== (t = h[e]) && void 0 !== t ? t : i;
    let a = y(e, s);
    return null !== (n = null == a ? void 0 : a.status) && void 0 !== n ? n : i
  }
  getActivities(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (null == t) {
      var n;
      return null !== (n = v[e]) && void 0 !== n ? n : g
    }
    let s = y(e, t);
    return null == s || null == s.activities ? g : s.activities
  }
  getPrimaryActivity(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = this.getActivities(e, t).filter(e => e.type !== c.ActivityTypes.HANG_STATUS);
    return n[0]
  }
  getAllApplicationActivities(e) {
    let t = [];
    for (let n of Object.keys(v)) {
      let s = v[n];
      for (let i of s) i.application_id === e && t.push({
        userId: n,
        activity: i
      })
    }
    return t
  }
  getApplicationActivity(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    return this.findActivity(e, e => e.application_id === t, n)
  }
  findActivity(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    return this.getActivities(e, n).find(t)
  }
  getActivityMetadata(e) {
    return p[e]
  }
  getUserIds() {
    return Object.keys(v)
  }
  isMobileOnline(e) {
    let t = E[e];
    return null != t && t[c.ClientTypes.MOBILE] === c.StatusTypes.ONLINE && t[c.ClientTypes.DESKTOP] !== c.StatusTypes.ONLINE
  }
  getState() {
    return {
      presencesForGuilds: m,
      statuses: h,
      activities: v,
      activityMetadata: p,
      clientStatuses: E
    }
  }
}
P.displayName = "PresenceStore";
var k = new P(d.default, {
  CONNECTION_OPEN: function() {
    return !0
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, s = f.default.getId();
    m = {}, p = {}, h = {
      [s]: h[s]
    }, v = {
      [s]: v[s]
    }, E = {
      [s]: {}
    };
    let i = new Set,
      r = Date.now();
    t.forEach(e => {
      e.presences.forEach(t => {
        let {
          user: n,
          status: s,
          clientStatus: a,
          activities: o
        } = t;
        N({
          guildId: e.id,
          userId: n.id,
          status: s,
          clientStatus: a,
          activities: o,
          timestamp: r
        }), i.add(n.id)
      })
    }), n.forEach(e => {
      let {
        user: t,
        status: n,
        clientStatus: s,
        activities: a
      } = e;
      null != t && (N({
        guildId: c.ME,
        userId: t.id,
        status: n,
        clientStatus: s,
        activities: a,
        timestamp: r
      }), i.add(t.id))
    }), i.delete(s), i.forEach(A)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      presences: t
    } = e;
    m = t.presencesForGuilds, h = t.statuses, v = t.activities, p = t.activityMetadata
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    t.presences.forEach(e => {
      let {
        user: n,
        status: s,
        clientStatus: i,
        activities: r
      } = e;
      D({
        guildId: t.id,
        userId: n.id,
        status: s,
        clientStatus: i,
        activities: r
      })
    })
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    b(t.id)
  },
  GUILD_MEMBER_REMOVE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    return O(t, n.id)
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => {
      let {
        guildId: t,
        user: n,
        status: s,
        clientStatus: i,
        activities: r
      } = e;
      return D({
        guildId: null != t ? t : c.ME,
        userId: n.id,
        status: s,
        clientStatus: i,
        activities: r
      })
    }).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    b(c.ME), t.forEach(e => {
      let {
        user: t,
        status: n,
        clientStatus: s,
        activities: i
      } = e;
      null != t && D({
        guildId: c.ME,
        userId: t.id,
        status: n,
        clientStatus: s,
        activities: i
      })
    })
  },
  ACTIVITY_METADATA_UPDATE: function(e) {
    let {
      userId: t,
      metadata: n
    } = e;
    return p[t] = n, !1
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    n.forEach(e => {
      null != e.presence && D({
        guildId: t,
        userId: e.user_id,
        status: e.presence.status,
        clientStatus: e.presence.clientStatus,
        activities: e.presence.activities
      })
    })
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: n
    } = e;
    null == n || n.forEach(e => {
      null != e.presence && D({
        guildId: t,
        userId: e.userId,
        status: e.presence.status,
        clientStatus: e.presence.clientStatus,
        activities: e.presence.activities
      })
    })
  },
  SELF_PRESENCE_STORE_UPDATE: function(e) {
    let t = f.default.getId();
    if (h[t] === e.status && v[t] === e.activities) return !1;
    h[t] = e.status, v[t] = e.activities, delete p[t]
  }
})