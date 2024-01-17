"use strict";
n.r(t), n.d(t, {
  DiscoveryRequirementsM2Experiment: function() {
    return d
  },
  useLowerMemberCountRequirements: function() {
    return f
  }
}), n("222007");
var r = n("884691"),
  i = n("446674"),
  s = n("862205"),
  a = n("525065"),
  l = n("305961"),
  u = n("957255"),
  o = n("75766"),
  c = n("49111");
let d = (0, s.createExperiment)({
  kind: "guild",
  id: "2021-12_discovery_requirements_m2",
  label: "Lower Server Discovery member count requirements",
  defaultConfig: {
    enableLowerMemberCountReq: !1
  },
  treatments: [{
    id: 1,
    label: "Allow a server to become discoverable with lower member count requirements",
    config: {
      enableLowerMemberCountReq: !0
    }
  }]
});

function f(e) {
  let t = (0, i.useStateFromStores)([l.default], () => l.default.getGuild(e)),
    n = (0, i.useStateFromStores)([u.default], () => u.default.can(c.Permissions.ADMINISTRATOR, t)),
    s = null == t ? void 0 : t.hasFeature(c.GuildFeatures.COMMUNITY),
    [f] = (0, i.useStateFromStoresArray)([a.default], () => [a.default.getMemberCount(e)], [e]),
    p = (null != f ? f : 0) >= o.LOWERED_MINIMUM_SIZE && (null != f ? f : 0) < o.DEFAULT_MINIMUM_SIZE,
    _ = n && s && p;
  r.useEffect(() => {
    _ && d.trackExposure({
      guildId: e,
      location: "747eb3_1"
    })
  }, [e, _]);
  let {
    enableLowerMemberCountReq: m
  } = d.useExperiment({
    guildId: e,
    location: "747eb3_2"
  }, {
    autoTrackExposure: !1,
    disable: !_
  });
  return m
}