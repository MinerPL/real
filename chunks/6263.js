            "use strict";
            n.r(t), n.d(t, {
                useOnboardingHomeExperiment: function() {
                    return o
                },
                default: function() {
                    return l
                }
            });
            var i = n("862205"),
                r = n("49111");
            let s = new Date(168264e7),
                a = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-02_onboarding_home",
                    label: "Home as a community onboarding surface",
                    defaultConfig: {
                        showOnboardingHome: !1,
                        enableDevItems: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Show the Onboarding Version of Home",
                        config: {
                            showOnboardingHome: !0,
                            enableDevItems: !1
                        }
                    }, {
                        id: 2,
                        label: "Onboarding Home DEV",
                        config: {
                            showOnboardingHome: !0,
                            enableDevItems: !0
                        }
                    }, {
                        id: 3,
                        label: "Show the Onboarding Version of Home",
                        config: {
                            showOnboardingHome: !0,
                            enableDevItems: !1
                        }
                    }]
                });

            function o(e, t) {
                var n;
                let i = __OVERLAY__ || null == e || e.id === r.ME || e.id === r.FAVORITES || !e.hasFeature(r.GuildFeatures.COMMUNITY) || !e.hasFeature(r.GuildFeatures.GUILD_SERVER_GUIDE) || !e.hasFeature(r.GuildFeatures.GUILD_ONBOARDING),
                    o = new Date(null !== (n = null == t ? void 0 : t.joinedAt) && void 0 !== n ? n : 0);
                return a.useExperiment({
                    location: "d98574_1"
                }, {
                    disable: i,
                    autoTrackExposure: null != t && o >= s
                })
            }
            var l = a