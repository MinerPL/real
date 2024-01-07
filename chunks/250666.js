            "use strict";
            n.r(t), n.d(t, {
                isCreatorMonetizationEnabledGuild: function() {
                    return s
                },
                default: function() {
                    return r
                }
            });
            var i = n("446674"),
                a = n("305961"),
                l = n("49111");

            function s(e) {
                return !e.hasFeature(l.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(l.GuildFeatures.CREATOR_MONETIZABLE) || e.hasFeature(l.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))
            }

            function r(e) {
                return (0, i.useStateFromStores)([a.default], () => {
                    let t = a.default.getGuild(e);
                    return null != t && s(t)
                })
            }