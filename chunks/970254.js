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
                id: "2023-08_user_apps",
                label: "Allow user app commands",
                defaultConfig: {
                    userAppsTreatment: "default"
                },
                treatments: [{
                    id: 1,
                    label: "Allow user app commands",
                    config: {
                        userAppsTreatment: "allowed"
                    }
                }]
            })