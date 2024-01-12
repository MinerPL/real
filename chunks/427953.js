            "use strict";
            n.r(t), n.d(t, {
                isActivityInTextSupportedForChannelType: function() {
                    return u
                },
                isActivitiesInTextEnabled: function() {
                    return l
                },
                useIsActivitiesInTextEnabled: function() {
                    return f
                },
                useIsActivitiesInTextActionBarEnabled: function() {
                    return _
                }
            });
            var s = n("298386"),
                i = n("446674"),
                r = n("862205"),
                a = n("42203");
            let o = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-08_activities_in_text",
                    label: "Activities in Text User",
                    defaultConfig: {
                        enabled: !1,
                        actionBarEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enable Activities in text channels",
                        config: {
                            enabled: !0,
                            actionBarEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "enable Activities in text channels with action bar",
                        config: {
                            enabled: !0,
                            actionBarEnabled: !0
                        }
                    }]
                }),
                d = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-11_activities_in_text_guild",
                    label: "Activities in Text Guild",
                    defaultConfig: {
                        enabled: !1,
                        actionBarEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enable Activities in text channels",
                        config: {
                            enabled: !0,
                            actionBarEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "enable Activities in text channels with action bar",
                        config: {
                            enabled: !0,
                            actionBarEnabled: !0
                        }
                    }]
                });

            function u(e) {
                return [s.ChannelTypes.GUILD_TEXT, s.ChannelTypes.GROUP_DM, s.ChannelTypes.DM].includes(e)
            }

            function l(e, t) {
                if (null == e) return !1;
                let n = u(e.type);
                return (null == e ? void 0 : e.guild_id) != null ? d.getCurrentConfig({
                    guildId: e.guild_id,
                    location: t
                }, {
                    autoTrackExposure: !1
                }).enabled && n : o.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: !1
                }).enabled && n
            }

            function f(e, t) {
                var n;
                let s = (0, i.useStateFromStores)([a.default], () => a.default.getChannel(e));
                let r = null != (n = s) && u(n.type),
                    l = (null == s ? void 0 : s.guild_id) != null ? d : o,
                    f = l.useExperiment({
                        guildId: null == s ? void 0 : s.guild_id,
                        location: t
                    }, {
                        autoTrackExposure: !1
                    });
                return f.enabled && r
            }

            function _(e, t) {
                let n = (0, i.useStateFromStores)([a.default], () => a.default.getChannel(e)),
                    s = (null == n ? void 0 : n.guild_id) != null ? d : o,
                    r = s.useExperiment({
                        guildId: null == n ? void 0 : n.guild_id,
                        location: t
                    }, {
                        autoTrackExposure: !1
                    });
                return r.actionBarEnabled
            }