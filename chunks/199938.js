            "use strict";
            s.r(t), s.d(t, {
                staffOnlyGuildSettingsAccess: function() {
                    return r
                },
                useGuildAccessRateInsightExperiment: function() {
                    return o
                }
            });
            var a = s("884691"),
                n = s("862205"),
                l = s("697218");
            let i = (0, n.createExperiment)({
                kind: "guild",
                id: "2022-03_guild_access_rate_insight_experiment",
                label: "Guild Access Rate Insight Experiment",
                defaultConfig: {
                    showAccessRate: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show guild access rate in insights",
                    config: {
                        showAccessRate: !0
                    }
                }]
            });

            function r(e) {
                var t;
                let s = null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff();
                return s && i.getCurrentConfig({
                    guildId: e,
                    location: "77b4b2_1"
                }).showAccessRate
            }

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return a.useEffect(() => {
                    !t && null != e && i.trackExposure({
                        guildId: e,
                        location: "77b4b2_2"
                    })
                }, [e, t]), i.useExperiment({
                    guildId: null != e ? e : "",
                    location: "77b4b2_3"
                }, {
                    autoTrackExposure: !1,
                    disable: t || null == e
                })
            }