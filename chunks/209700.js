"use strict";
n.r(t), n.d(t, {
  isInGuildMemberModViewExperiment: function() {
    return i
  },
  useGuildMemberModViewExperiment: function() {
    return r
  }
});
var a = n("812204"),
  l = n("862205");
let s = (0, l.createExperiment)({
    kind: "guild",
    id: "2023-08_guild_member_mod_view",
    label: "Guild Member Mod View",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Guild Member Mod View",
      config: {
        enabled: !0
      }
    }]
  }),
  i = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: n = !1,
      location: l = a.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: i
    } = s.getCurrentConfig({
      guildId: e,
      location: l
    }, {
      autoTrackExposure: t,
      disable: n
    });
    return i
  },
  r = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: n = !1,
      location: l = a.default.GUILD_MEMBER_MOD_VIEW
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: i
    } = s.useExperiment({
      guildId: e,
      location: l
    }, {
      autoTrackExposure: t,
      disable: n
    });
    return i
  }