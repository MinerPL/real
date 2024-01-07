            "use strict";
            n.r(t), n.d(t, {
                useGuildEligibleForGuildProducts: function() {
                    return a
                },
                isGuildEligibleForGuildProducts: function() {
                    return l
                }
            });
            var i = n("60705");

            function a(e, t) {
                let {
                    enabled: n
                } = i.GuildProductsExperiment.useExperiment({
                    guildId: null != e ? e : "",
                    location: t
                });
                return n
            }

            function l(e, t) {
                let {
                    enabled: n
                } = i.GuildProductsExperiment.getCurrentConfig({
                    guildId: null != e ? e : "",
                    location: t
                });
                return n
            }