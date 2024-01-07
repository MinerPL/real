            "use strict";
            n.r(t), n.d(t, {
                isInMentionRaidExperiment: function() {
                    return o
                },
                useIsMentionRaidExperimentEnabled: function() {
                    return i
                },
                useIsServerPolicyExperimentEnabled: function() {
                    return u
                }
            });
            var r = n("831585");

            function o(e) {
                let {
                    enabled: t
                } = r.AutomodMentionRaidLimit.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_3"
                });
                return t
            }

            function i(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        enabled: n
                    } = r.AutomodMentionRaidLimit.useExperiment({
                        guildId: e,
                        location: "988d4e_4"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: n
                    } = r.AutomodServerPolicy.useExperiment({
                        guildId: e,
                        location: "988d4e_7"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }