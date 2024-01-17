"use strict";
n.r(t), n.d(t, {
  useHasPendingMemberAction: function() {
    return E
  }
}), n("702976");
var a = n("65597"),
  s = n("42203"),
  i = n("26989"),
  l = n("305961"),
  r = n("568734"),
  o = n("698882"),
  u = n("675305"),
  d = n("6263"),
  c = n("49111"),
  f = n("657944");

function E(e, t) {
  let n = (0, a.default)([l.default], () => l.default.getGuild(e)),
    E = (0, a.default)([s.default], () => s.default.getChannel(t)),
    _ = (0, a.default)([i.default], () => null == e ? null : i.default.getSelfMember(e)),
    {
      showOnboardingHome: h
    } = (0, d.useOnboardingHomeExperiment)(n, _);
  return (0, a.default)([u.default, o.default, i.default], () => {
    var e, t;
    return null != n && null != E && h && n.hasFeature(c.GuildFeatures.GUILD_SERVER_GUIDE) && !r.hasFlag(null !== (t = null === (e = i.default.getSelfMember(n.id)) || void 0 === e ? void 0 : e.flags) && void 0 !== t ? t : 0, f.GuildMemberFlags.COMPLETED_HOME_ACTIONS) && o.default.hasMemberAction(n.id, E.id) && !u.default.hasCompletedActionForChannel(n.id, E.id)
  })
}