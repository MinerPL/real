            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205"),
                a = n("970254"),
                l = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-09_user_apps_guild",
                    label: "Allow user app commands",
                    defaultConfig: {
                        userAppsTreatment: a.UserAppsTreatment.DEFAULT
                    },
                    treatments: [{
                        id: 1,
                        label: "Allow user app commands",
                        config: {
                            userAppsTreatment: a.UserAppsTreatment.ALLOWED
                        }
                    }]
                })