            "use strict";
            n.r(t), n.d(t, {
                HangStatusExperiment: function() {
                    return l
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "guild",
                id: "2023-11_enable_hang_status",
                label: "Hang Statuses",
                defaultConfig: {
                    enableHangStatus: !1
                },
                treatments: [{
                    id: 1,
                    label: "enable hang statuses",
                    config: {
                        enableHangStatus: !0
                    }
                }]
            })