"use strict";
n.r(t), n.d(t, {
  useCanReportRaid: function() {
    return c
  },
  useCanEnableRaidAlerts: function() {
    return A
  }
});
var l = n("884691"),
  a = n("446674");
n("926809");
var i = n("957255"),
  r = n("610174"),
  u = n("413476"),
  d = n("311161"),
  o = n("54346"),
  s = n("49111");

function c(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
    {
      enableRaidReporting: r
    } = u.ReportRaidExperiment.useExperiment({
      guildId: n,
      location: "4467c7_1"
    }, {
      autoTrackExposure: !1
    }),
    c = (0, a.useStateFromStores)([i.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default;
      return t.can(s.Permissions.BAN_MEMBERS, e) || t.can(s.Permissions.KICK_MEMBERS, e) || t.can(s.Permissions.MANAGE_GUILD, e)
    })(e, i.default), [e]),
    A = (0, a.useStateFromStores)([o.default], () => null != e ? o.default.getGuildIncident(e.id) : null, [e]),
    E = null != A && (0, d.hasDetectedActivity)(A);
  return l.useEffect(() => {
    !E && c && u.ReportRaidExperiment.trackExposure({
      guildId: n,
      location: "4467c7_2"
    })
  }, [E, c, n]), !E && c && r
}

function A(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
    l = (0, a.useStateFromStores)([i.default], () => (function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default;
      return t.can(s.Permissions.MANAGE_GUILD, e)
    })(e, i.default), [e]),
    {
      enableRaidAlerts: d
    } = u.RaidAlertExperiment.useExperiment({
      guildId: n,
      location: "4467c7_3"
    }, {
      autoTrackExposure: l
    }),
    {
      showAlertMode: o
    } = (0, r.useGuildAlertModeEnabled)(n);
  return l && (d || o)
}