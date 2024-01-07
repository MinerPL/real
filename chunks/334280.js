            "use strict";
            n.r(t), (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-02_h265_android",
                label: "Test how h265 works on android for DM calls",
                defaultConfig: {
                    signalH265SupportAndroid: !1
                },
                treatments: [{
                    id: 1,
                    label: "Calling with H.265",
                    config: {
                        signalH265SupportAndroid: !0
                    }
                }]
            })