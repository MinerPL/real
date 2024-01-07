            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                },
                backToSchoolEnabled: function() {
                    return i
                }
            });
            var a = n("862205");
            let s = (0, a.createExperiment)({
                kind: "user",
                id: "2022-08_back_to_school",
                label: "Back to School Event",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Back to School experience enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = s;

            function i() {
                return s.getCurrentConfig({
                    location: "68acbb_1"
                }, {
                    autoTrackExposure: !1
                }).enabled
            }