"use strict";
n.r(t), n.d(t, {
  trackMessageNotificationTimestamps: function() {
    return s
  },
  default: function() {
    return m
  }
});
var i = n("446674"),
  l = n("913144"),
  u = n("26989"),
  o = n("282109"),
  r = n("697218");

function s(e, t) {
  var n;
  let i = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
    s = o.default.isSuppressEveryoneEnabled(t),
    a = o.default.isSuppressRolesEnabled(t),
    d = null != e.mentions && e.mentions.some(e => e.id === i),
    c = null == t || null == i ? null : u.default.getMember(t, i),
    f = null != e.mention_roles && null != c && null != c.roles && e.mention_roles.some(e => c.roles.includes(e));
  l.default.dispatch({
    type: "MESSAGE_NOTIFICATION_SHOWN",
    guildId: t,
    mentioned: d,
    roleMentioned: f && !a,
    everyoneMentioned: !0 === e.mention_everyone && !s
  })
}
let a = null,
  d = null,
  c = null,
  f = null,
  h = {},
  _ = {},
  g = {},
  p = {};
class v extends i.default.Store {
  getGlobalStats() {
    let e = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
    return {
      approx_seconds_since_last_notification: e(a),
      approx_seconds_since_last_mention: e(d),
      approx_seconds_since_last_role_mention: e(c),
      approx_seconds_since_last_everyone_mention: e(f)
    }
  }
  getStats(e) {
    let t = e => null == e ? null : Math.floor((Date.now() - e) / 1e3);
    return {
      approx_seconds_since_last_notification: t(a),
      approx_seconds_since_last_mention: t(d),
      approx_seconds_since_last_role_mention: t(c),
      approx_seconds_since_last_everyone_mention: t(f),
      approx_seconds_since_last_guild_notification: null == e ? null : t(h[e]),
      approx_seconds_since_last_guild_mention: null == e ? null : t(_[e]),
      approx_seconds_since_last_guild_role_mention: null == e ? null : t(p[e]),
      approx_seconds_since_last_guild_everyone_mention: null == e ? null : t(g[e])
    }
  }
}
var m = new v(l.default, {
  CONNECTION_OPEN: function() {
    let e = e => null != e && Date.now() - e < 6e4;
    for (let t in !e(a) && (a = null), !e(d) && (d = null), !e(c) && (c = null), !e(f) && (f = null), h) !e(h[t]) && delete h[t];
    for (let t in _) !e(_[t]) && delete _[t];
    for (let t in p) !e(p[t]) && delete p[t];
    for (let t in g) !e(g[t]) && delete g[t]
  },
  MESSAGE_NOTIFICATION_SHOWN: function(e) {
    let {
      guildId: t,
      mentioned: n,
      roleMentioned: i,
      everyoneMentioned: l
    } = e, u = Date.now();
    a = u, null != t && (h[t] = u), n && (d = u, null != t && (_[t] = u)), i && (c = u, null != t && (p[t] = u)), l && (f = u, null != t && (g[t] = u))
  }
})