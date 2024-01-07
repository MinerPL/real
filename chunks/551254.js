            "use strict";
            n.r(t), n.d(t, {
                useIsEligibleForGuildShopStorefront: function() {
                    return l
                },
                isEligibleForGuildShopStorefront: function() {
                    return s
                },
                useIsEligibleForSubscriptionsInGuildShop: function() {
                    return r
                },
                isEligibleForSubscriptionsInGuildShop: function() {
                    return u
                },
                useIsEligibleForGuildShopPreview: function() {
                    return o
                }
            });
            var i = n("287883"),
                a = n("599445");

            function l() {
                let {
                    enabled: e
                } = a.GuildShopStorefrontExperiment.useExperiment({
                    location: "adf3ea_1"
                });
                return e
            }

            function s() {
                let {
                    enabled: e
                } = a.GuildShopStorefrontExperiment.getCurrentConfig({
                    location: "adf3ea_2"
                });
                return e
            }

            function r(e, t) {
                let {
                    enabled: n
                } = a.ShowGuildRoleSubInGuildShopExperiment.useExperiment({
                    location: t
                }), l = (0, i.useGuildEligibleForGuildProducts)(e, t);
                return n && l
            }

            function u(e, t) {
                let {
                    enabled: n
                } = a.ShowGuildRoleSubInGuildShopExperiment.getCurrentConfig({
                    location: t
                }), l = (0, i.isGuildEligibleForGuildProducts)(e, t);
                return n && l
            }

            function o(e) {
                let {
                    enabled: t
                } = a.GuildShopPreviewExperiment.useExperiment({
                    location: e
                });
                return t
            }