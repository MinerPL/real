            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2023-08_full_band_krisp_android_",
                label: "Let us control if full band is enabled on Android",
                defaultConfig: {
                    allowSettingFullbandAndroid: !1
                },
                treatments: [{
                    id: 1,
                    label: "Load full band krisp model",
                    config: {
                        allowSettingFullbandAndroid: !0
                    }
                }]
            })