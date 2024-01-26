"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("222007"), n("424973");
var i = n("714617"),
  s = n.n(i),
  r = n("917351"),
  a = n.n(r),
  o = n("446674"),
  l = n("913144"),
  u = n("309570"),
  d = n("32346"),
  c = n("271938"),
  f = n("697218"),
  _ = n("49111");
let h = Object.freeze([]),
  g = {},
  m = {},
  E = {},
  p = {},
  v = {};

function S(e, t) {
  let n = g[e];
  return null != n ? n[t] : null
}
let T = e => {
    switch (e.type) {
      case _.ActivityTypes.CUSTOM_STATUS:
        return 4;
      case _.ActivityTypes.COMPETING:
        return 3;
      case _.ActivityTypes.STREAMING:
        return 2;
      case _.ActivityTypes.PLAYING:
        return 1;
      default:
        return 0
    }
  },
  I = e => (0, u.default)(e) ? 1 : 0;

function C(e, t) {
  var n, i, s, r, a;
  return n = e, T(t) - T(n) || (i = e, I(t) - I(i)) || (s = e, (null !== (r = t.created_at) && void 0 !== r ? r : 0) - (null !== (a = s.created_at) && void 0 !== a ? a : 0))
}

function A(e) {
  if (delete m[e], delete E[e], delete p[e], null == g[e]) return;
  let [t] = a.sortBy(g[e], e => -e.timestamp);
  t.status !== _.StatusTypes.OFFLINE ? (m[e] = t.status, E[e] = t.activities, null != t.clientStatus && (p[e] = t.clientStatus)) : a.every(g[e], e => e.status === _.StatusTypes.OFFLINE) && delete g[e]
}

function y(e) {
  let t = g[e];
  if (null == t) return;
  let n = a.maxBy(Object.values(t), e => e.timestamp);
  n.status !== _.StatusTypes.OFFLINE && (m[e] = n.status, E[e] = n.activities, null != n.clientStatus && (p[e] = n.clientStatus))
}

function N(e) {
  let {
    guildId: t,
    userId: n,
    status: i,
    clientStatus: r,
    activities: a
  } = e;
  if (n === c.default.getId()) return !1;
  let o = g[n];
  if (null == o) {
    if (i === _.StatusTypes.OFFLINE) return !1;
    o = g[n] = {}
  }
  if (i === _.StatusTypes.OFFLINE) o[t] = {
    status: i,
    clientStatus: r,
    activities: h,
    timestamp: Date.now()
  };
  else {
    let e = a.length > 1 ? [...a].sort(C) : a,
      n = o[t];
    a = null != n && s(n.activities, e) ? n.activities : e, o[t] = {
      status: i,
      clientStatus: r,
      activities: a,
      timestamp: Date.now()
    }
  }
  return delete v[n], A(n), !0
}

function R(e) {
  let {
    guildId: t,
    userId: n,
    status: i,
    clientStatus: s,
    activities: r,
    timestamp: a
  } = e;
  if (n === c.default.getId()) return;
  let o = g[n];
  if (null == o) {
    if (i === _.StatusTypes.OFFLINE) return;
    o = g[n] = {}
  }
  if (i === _.StatusTypes.OFFLINE) o[t] = {
    status: i,
    clientStatus: s,
    activities: h,
    timestamp: Date.now()
  };
  else {
    let e = r.length > 1 ? [...r].sort(C) : r;
    o[t] = {
      status: i,
      clientStatus: s,
      activities: e,
      timestamp: a
    }
  }
}

function O(e, t) {
  if (t === c.default.getId()) return !1;
  let n = g[t];
  if (null == n || null == n[e]) return !1;
  delete n[e], 0 === Object.keys(n).length && delete g[t], A(t)
}

function D(e) {
  for (let t of Object.keys(g)) O(e, t)
}
class P extends o.default.Store {
  initialize() {
    this.waitFor(c.default, d.default)
  }
  setCurrentUserOnConnectionOpen(e, t) {
    m[c.default.getId()] = e, E[c.default.getId()] = t
  }
  getStatus(e) {
    var t, n;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.StatusTypes.OFFLINE,
      r = f.default.getUser(e);
    if (null != r && r.hasFlag(_.UserFlags.BOT_HTTP_INTERACTIONS) && (s = _.StatusTypes.UNKNOWN), null == r ? void 0 : r.isClyde()) return _.StatusTypes.ONLINE;
    if (null == i) return null !== (t = m[e]) && void 0 !== t ? t : s;
    let a = S(e, i);
    return null !== (n = null == a ? void 0 : a.status) && void 0 !== n ? n : s
  }
  getActivities(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (null == t) {
      var n;
      return null !== (n = E[e]) && void 0 !== n ? n : h
    }
    let i = S(e, t);
    return null == i || null == i.activities ? h : i.activities
  }
  getPrimaryActivity(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = this.getActivities(e, t).filter(e => e.type !== _.ActivityTypes.HANG_STATUS);
    return n[0]
  }
  getAllApplicationActivities(e) {
    let t = [];
    for (let n of Object.keys(E)) {
      let i = E[n];
      for (let s of i) s.application_id === e && t.push({
        userId: n,
        activity: s
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
    return v[e]
  }
  getUserIds() {
    return Object.keys(E)
  }
  isMobileOnline(e) {
    let t = p[e];
    return null != t && t[_.ClientTypes.MOBILE] === _.StatusTypes.ONLINE && t[_.ClientTypes.DESKTOP] !== _.StatusTypes.ONLINE
  }
  getClientStatus(e) {
    return p[e]
  }
  getState() {
    return {
      presencesForGuilds: g,
      statuses: m,
      activities: E,
      activityMetadata: v,
      clientStatuses: p
    }
  }
}
P.displayName = "PresenceStore";
var b = new P(l.default, {
  CONNECTION_OPEN: function() {
    return !0
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, i = c.default.getId();
    g = {}, v = {}, m = {
      [i]: m[i]
    }, E = {
      [i]: E[i]
    }, p = {
      [i]: {}
    };
    let s = new Set,
      r = Date.now();
    t.forEach(e => {
      e.presences.forEach(t => {
        let {
          user: n,
          status: i,
          clientStatus: a,
          activities: o
        } = t;
        R({
          guildId: e.id,
          userId: n.id,
          status: i,
          clientStatus: a,
          activities: o,
          timestamp: r
        }), s.add(n.id)
      })
    }), n.forEach(e => {
      let {
        user: t,
        status: n,
        clientStatus: i,
        activities: a
      } = e;
      null != t && (R({
        guildId: _.ME,
        userId: t.id,
        status: n,
        clientStatus: i,
        activities: a,
        timestamp: r
      }), s.add(t.id))
    }), s.delete(i), s.forEach(y)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      presences: t
    } = e;
    g = t.presencesForGuilds, m = t.statuses, E = t.activities, v = t.activityMetadata
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    t.presences.forEach(e => {
      let {
        user: n,
        status: i,
        clientStatus: s,
        activities: r
      } = e;
      N({
        guildId: t.id,
        userId: n.id,
        status: i,
        clientStatus: s,
        activities: r
      })
    })
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    D(t.id)
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
        status: i,
        clientStatus: s,
        activities: r
      } = e;
      return N({
        guildId: null != t ? t : _.ME,
        userId: n.id,
        status: i,
        clientStatus: s,
        activities: r
      })
    }).some(e => e)
  },
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e;
    D(_.ME), t.forEach(e => {
      let {
        user: t,
        status: n,
        clientStatus: i,
        activities: s
      } = e;
      null != t && N({
        guildId: _.ME,
        userId: t.id,
        status: n,
        clientStatus: i,
        activities: s
      })
    })
  },
  ACTIVITY_METADATA_UPDATE: function(e) {
    let {
      userId: t,
      metadata: n
    } = e;
    return v[t] = n, !1
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    n.forEach(e => {
      null != e.presence && N({
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
      null != e.presence && N({
        guildId: t,
        userId: e.userId,
        status: e.presence.status,
        clientStatus: e.presence.clientStatus,
        activities: e.presence.activities
      })
    })
  },
  SELF_PRESENCE_STORE_UPDATE: function(e) {
    let t = c.default.getId();
    if (m[t] === e.status && E[t] === e.activities) return !1;
    m[t] = e.status, E[t] = e.activities, delete v[t]
  }
})