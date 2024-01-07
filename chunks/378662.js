            "use strict";
            n.r(t), n.d(t, {
                DiscoveryInAppReportingExperiment: function() {
                    return l
                },
                useCanSeeDiscoveryContextMenu: function() {
                    return r
                }
            });
            var a = n("884691"),
                s = n("862205"),
                i = n("845579");
            let l = (0, s.createExperiment)({
                kind: "user",
                id: "2022-01_discovery_iar",
                label: "Ability to report servers in Server Discovery",
                defaultConfig: {
                    canSeeInAppReportingButtons: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show IAR buttons in Server Discovery",
                    config: {
                        canSeeInAppReportingButtons: !0
                    }
                }]
            });

            function r() {
                let {
                    canSeeInAppReportingButtons: e
                } = l.useExperiment({
                    location: "7a11e2_1"
                }, {
                    autoTrackExposure: !1
                }), t = i.DeveloperMode.useSetting();
                return a.useEffect(() => {
                    l.trackExposure({
                        location: "7a11e2_2"
                    })
                }, []), e || t
            }