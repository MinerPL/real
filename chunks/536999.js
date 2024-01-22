"use strict";
l.r(t), l.d(t, {
  isInMembersTableSafetySignalsExperiment: function() {
    return i
  },
  isInMembersTablesAdditionalFilteringExperiment: function() {
    return o
  }
});
var a = l("862205");
let n = (0, a.createExperiment)({
    kind: "guild",
    id: "2023-12_guild_members_table_safety_signal_filters",
    label: "Guild Members Table Safety Signals",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Safety Signals Enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  s = (0, a.createExperiment)({
    kind: "guild",
    id: "2024-01_guild_members_table_additional_filtering",
    label: "Guild Members Table Additional Filtering",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Additional filtering enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  i = function(e) {
    let {
      autoTrackExposure: t = !0,
      disable: l = !1,
      location: a = "f03bed_9"
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: s
    } = n.getCurrentConfig({
      guildId: e,
      location: a
    }, {
      autoTrackExposure: t,
      disable: l
    });
    return s
  },
  o = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: l = !1,
      location: a = "f03bed_10"
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: n
    } = s.getCurrentConfig({
      guildId: e,
      location: a
    }, {
      autoTrackExposure: t,
      disable: l
    });
    return n
  }