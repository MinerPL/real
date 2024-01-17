"use strict";
n.r(t), n.d(t, {
  useGuildIncidentsState: function() {
    return h
  },
  shouldShowRaidNotificationNagbar: function() {
    return g
  }
}), n("222007");
var i = n("316693"),
  r = n("65597"),
  l = n("374363"),
  u = n("305961"),
  o = n("957255"),
  s = n("162771"),
  a = n("697218"),
  d = n("991170"),
  c = n("610174"),
  f = n("311161"),
  S = n("54346"),
  E = n("421127");
n("49111");

function h(e) {
  let {
    showAlertMode: t
  } = (0, c.useGuildAlertModeEnabled)(null != e ? e : "0"), n = (0, r.default)([u.default, o.default], () => {
    let t = u.default.getGuild(e);
    if (null == t) return !1;
    let n = o.default.getGuildPermissions(t);
    return null != n && i.default.hasAny(n, E.IncidentAlertModeratorPermissions)
  }), l = (0, r.default)([S.default], () => null != e ? S.default.getGuildIncident(e) : null), s = null != l && (0, f.isUnderLockdown)(l);
  return {
    shouldShowIncidentActions: n && t,
    incidentData: l,
    isUnderLockdown: s
  }
}

function g() {
  var e;
  let t = s.default.getGuildId(),
    n = function(e) {
      let t = a.default.getCurrentUser(),
        n = S.default.getIncidentsByGuild(),
        r = Object.keys(n).map(e => u.default.getGuild(e));
      for (let l of r) {
        if (null == l) continue;
        let r = n[l.id];
        if (null == r || !(0, f.hasDetectedActivity)(r) && !(0, f.isUnderLockdown)(r) || (0, f.isUnderLockdown)(r) && l.id !== e) continue;
        let u = i.default.hasAny(d.default.computePermissions({
          user: t,
          context: l,
          checkElevated: !1
        }), E.IncidentAlertModeratorPermissions);
        if (u) return l.id
      }
      return null
    }(t),
    {
      showAlertMode: r
    } = (0, c.getGuildAlertModeEnabled)(null != n ? n : "0"),
    o = null !== (e = l.default.getGuildsProto()) && void 0 !== e ? e : {},
    h = null != n ? o[n] : null,
    g = null != h && h.disableRaidAlertNag;
  return {
    show: null != n && r && !g,
    guildId: n
  }
}