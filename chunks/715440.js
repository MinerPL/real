            "use strict";
            n.r(t), (0, n("862205").createExperiment)({
                kind: "user",
                id: "2022-10_h265_dm_call",
                label: "Test how h265 works on ios/macos for DM calls",
                defaultConfig: {
                    signalH265SupportApple: !1
                },
                treatments: [{
                    id: 1,
                    label: "Calling with H.265",
                    config: {
                        signalH265SupportApple: !0
                    }
                }]
            })