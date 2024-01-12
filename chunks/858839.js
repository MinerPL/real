            "use strict";
            n.r(t), n.d(t, {
                useIsSuspendedUserPageEnabled: function() {
                    return E
                }
            });
            var i = n("862205");
            let o = (0, i.createExperiment)({
                kind: "user",
                id: "2023-12_suspended_user_access_to_account_standing",
                label: "Suspended User Account Standing Page",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function E(e) {
                return !!o.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                }).enabled
            }