            "use strict";
            n.r(t), n.d(t, {
                UserAppsTreatment: function() {
                    return a
                },
                default: function() {
                    return s
                }
            });
            var i, a, l = n("862205");
            (i = a || (a = {})).ALLOWED = "allowed", i.DEFAULT = "default";
            var s = (0, l.createExperiment)({
                kind: "user",
                id: "2023-08_new_app_command_serving",
                label: "New Application Command Serving",
                defaultConfig: {
                    enabled: !1,
                    newScoreLogic: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0,
                        newScoreLogic: !1
                    }
                }, {
                    id: 2,
                    label: "Enabled + New Logic",
                    config: {
                        enabled: !0,
                        newScoreLogic: !0
                    }
                }]
            })