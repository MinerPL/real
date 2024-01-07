            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            });
            var n = (0, i("862205").createExperiment)({
                kind: "user",
                id: "2021-10_runtime_accessibility_system",
                label: "Runtime Accessibility System",
                defaultConfig: {
                    enabled: !1,
                    reporting: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled but silent",
                    config: {
                        enabled: !0,
                        reporting: !1
                    }
                }, {
                    id: 2,
                    label: "Enabled and reporting",
                    config: {
                        enabled: !0,
                        reporting: !0
                    }
                }]
            })