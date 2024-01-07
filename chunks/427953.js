            "use strict";
            n.r(t), n.d(t, {
                isActivitiesInTextEnabled: function() {
                    return d
                },
                useIsActivitiesInTextEnabled: function() {
                    return c
                },
                useIsActivitiesInTextActionBarEnabled: function() {
                    return _
                }
            });
            var i = n("298386"),
                a = n("446674"),
                l = n("862205"),
                s = n("42203");
            let r = (0, l.createExperiment)({
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
                u = (0, l.createExperiment)({
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

            function o(e) {
                return null != e && [i.ChannelTypes.GUILD_TEXT, i.ChannelTypes.GROUP_DM, i.ChannelTypes.DM].includes(e.type)
            }

            function d(e, t) {
                if (null == e) return !1;
                let n = o(e);
                return (null == e ? void 0 : e.guild_id) != null ? u.getCurrentConfig({
                    guildId: e.guild_id,
                    location: t
                }, {
                    autoTrackExposure: !1
                }).enabled && n : r.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: !1
                }).enabled && n
            }

            function c(e, t) {
                let n = (0, a.useStateFromStores)([s.default], () => s.default.getChannel(e)),
                    i = o(n),
                    l = (null == n ? void 0 : n.guild_id) != null ? u : r,
                    d = l.useExperiment({
                        guildId: null == n ? void 0 : n.guild_id,
                        location: t
                    }, {
                        autoTrackExposure: !1
                    });
                return d.enabled && i
            }

            function _(e, t) {
                let n = (0, a.useStateFromStores)([s.default], () => s.default.getChannel(e)),
                    i = (null == n ? void 0 : n.guild_id) != null ? u : r,
                    l = i.useExperiment({
                        guildId: null == n ? void 0 : n.guild_id,
                        location: t
                    }, {
                        autoTrackExposure: !1
                    });
                return l.actionBarEnabled
            }