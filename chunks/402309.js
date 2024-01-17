"use strict";
n.r(t), n.d(t, {
  useIsMassMentionsDefaultDisabledExperiment: function() {
    return o
  },
  useCanCurrentUserViewDisableUnsafeGuildSettingsNotice: function() {
    return u
  }
});
var a = n("446674"),
  s = n("862205"),
  i = n("957255"),
  l = n("49111");
let r = (0, s.createExperiment)({
  kind: "guild",
  id: "2022-11_default_disable_mass_mention",
  label: "Disable mass mentions for communities by default",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});

function o(e) {
  return r.useExperiment({
    guildId: e,
    location: "dd4beb_1"
  }, {
    autoTrackExposure: !0
  })
}

function u(e) {
  var t;
  let n = (0, a.useStateFromStores)([i.default], () => i.default.can(l.Permissions.MANAGE_GUILD, e)),
    {
      enabled: s
    } = r.useExperiment({
      guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
      location: "dd4beb_3"
    }, {
      autoTrackExposure: !0
    });
  if (null == e) return !1;
  let o = e.hasFeature(l.GuildFeatures.COMMUNITY);
  return n && o && s
}