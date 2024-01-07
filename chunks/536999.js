            "use strict";
            n.r(t), n.d(t, {
                useIsBulkBanningExperimentEnabled: function() {
                    return r
                },
                isInMembersTableSafetySignalsExperiment: function() {
                    return u
                },
                isInMembersTablesAdditionalFilteringExperiment: function() {
                    return o
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
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
                l = (0, i.createExperiment)({
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
                s = (0, i.createExperiment)({
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
                r = function(e) {
                    let {
                        autoTrackExposure: t = !1,
                        disable: n = !1,
                        location: i = "f03bed_5"
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        enabled: l
                    } = a.useExperiment({
                        guildId: e,
                        location: i
                    }, {
                        autoTrackExposure: t,
                        disable: n
                    });
                    return l
                },
                u = function(e) {
                    let {
                        autoTrackExposure: t = !0,
                        disable: n = !1,
                        location: i = "f03bed_9"
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        enabled: a
                    } = l.getCurrentConfig({
                        guildId: e,
                        location: i
                    }, {
                        autoTrackExposure: t,
                        disable: n
                    });
                    return a
                },
                o = function(e) {
                    let {
                        autoTrackExposure: t = !1,
                        disable: n = !1,
                        location: i = "f03bed_10"
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        enabled: a
                    } = s.getCurrentConfig({
                        guildId: e,
                        location: i
                    }, {
                        autoTrackExposure: t,
                        disable: n
                    });
                    return a
                }