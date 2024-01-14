"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var a = n("917351"),
  s = n.n(a),
  l = n("446674"),
  i = n("913144"),
  r = n("271938"),
  o = n("27618"),
  u = n("101125"),
  d = n("49111");
let c = {},
  f = {};

function m(e, t) {
  var n;
  let a = null !== (n = c[e]) && void 0 !== n ? n : {};
  return a[t]
}

function E(e, t) {
  let n = m(e, t);
  if (null == n) return;
  let a = c[e];
  delete a[t], s.isEmpty(a) && delete c[e];
  let l = f[n];
  null != l && (l.delete(e), 0 === l.size && delete f[n])
}

function _(e, t, n, a) {
  let s = n.find(e => null != e.party && e.party.id),
    l = null != s && null != s.party ? s.party.id : null,
    i = m(t, e);
  if (null == l || a === d.StatusTypes.OFFLINE) return null != i && (E(t, e), void 0);
  if (null != i) {
    if (i === l) return !1;
    E(t, e)
  }! function(e, t, n) {
    var a;
    let s = c[e];
    if (null == s && (s = c[e] = {}), s[t] = n, o.default.isBlocked(e)) return;
    let l = null !== (a = f[n]) && void 0 !== a ? a : new Set;
    f[n] = l, l.add(e)
  }(t, e, l)
}

function h(e) {
  let {
    guild: t
  } = e, n = !1;
  for (let {
      user: e,
      status: a,
      activities: s
    }
    of t.presences) !1 !== _(t.id, e.id, s, a) && (n = !0);
  return n
}

function p(e, t) {
  let n = !1;
  return t.forEach(t => {
    null != t && _(e, t.user.id, t.activities, t.status) && (n = !0)
  }), n
}

function I() {
  let e = r.default.getId(),
    t = u.default.getActivities();
  return _(d.ME, e, t)
}
class T extends l.default.Store {
  initialize() {
    this.syncWith([u.default], I), this.waitFor(u.default, o.default)
  }
  getParty(e) {
    return null != e && null != f[e] ? f[e] : null
  }
  getUserParties() {
    return c
  }
  getParties() {
    return f
  }
}
T.displayName = "GamePartyStore";
var g = new T(i.default, {
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      guilds: t,
      presences: n
    } = e, a = !1;
    for (let {
        user: e,
        status: t,
        activities: s
      }
      of n) null != e && !1 !== _(d.ME, e.id, s, t) && (a = !0);
    for (let e of t) !1 !== h({
      guild: e
    }) && (a = !0);
    return a
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      parties: t,
      userParties: n
    } = e;
    f = {}, c = {
      ...n
    }, Object.keys(t).forEach(e => f[e] = new Set(t[e]))
  },
  GUILD_CREATE: h,
  PRESENCES_REPLACE: function(e) {
    let {
      presences: t
    } = e, n = !1;
    for (let {
        user: e,
        activities: a
      }
      of t) null != e && !1 !== _(d.ME, e.id, a) && (n = !0);
    return n
  },
  PRESENCE_UPDATES: function(e) {
    let {
      updates: t
    } = e;
    return t.map(e => {
      let {
        guildId: t,
        user: n,
        status: a,
        activities: s
      } = e;
      return _(null != t ? t : d.ME, n.id, s, a)
    }).some(e => e)
  },
  THREAD_MEMBER_LIST_UPDATE: function(e) {
    let {
      guildId: t,
      members: n
    } = e;
    return p(t, n.map(e => e.presence))
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    let {
      guildId: t,
      addedMembers: n
    } = e;
    return null != n && p(t, n.map(e => e.presence))
  },
  RELATIONSHIP_ADD: function(e) {
    let {
      relationship: t
    } = e;
    if (!o.default.isBlocked(t.id)) return !1;
    let n = c[t.id];
    if (null == n) return !1;
    for (let e of s.values(n)) {
      let n = f[e];
      null != n && n.delete(t.id)
    }
  },
  RELATIONSHIP_REMOVE: function(e) {
    let {
      relationship: t
    } = e, n = c[t.id];
    if (null == n) return !1;
    for (let e of s.values(n)) {
      let n = f[e];
      null != n && n.add(t.id)
    }
  }
})