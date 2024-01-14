"use strict";
n.r(t), n.d(t, {
  useIsBulkBanningExperimentEnabled: function() {
    return o
  },
  isInMembersTableSafetySignalsExperiment: function() {
    return d
  },
  isInMembersTablesAdditionalFilteringExperiment: function() {
    return u
  }
});
var s = n("862205");
let i = (0, s.createExperiment)({
    kind: "guild",
    id: "2023-08_guild_member_bulk_ban_experiment",
    label: "Bulk Banning Guild Members Experiment",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Bulk Banning Enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  r = (0, s.createExperiment)({
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
  a = (0, s.createExperiment)({
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
  o = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: n = !1,
      location: s = "f03bed_5"
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: r
    } = i.useExperiment({
      guildId: e,
      location: s
    }, {
      autoTrackExposure: t,
      disable: n
    });
    return r
  },
  d = function(e) {
    let {
      autoTrackExposure: t = !0,
      disable: n = !1,
      location: s = "f03bed_9"
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: i
    } = r.getCurrentConfig({
      guildId: e,
      location: s
    }, {
      autoTrackExposure: t,
      disable: n
    });
    return i
  },
  u = function(e) {
    let {
      autoTrackExposure: t = !1,
      disable: n = !1,
      location: s = "f03bed_10"
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
      enabled: i
    } = a.getCurrentConfig({
      guildId: e,
      location: s
    }, {
      autoTrackExposure: t,
      disable: n
    });
    return i
  }