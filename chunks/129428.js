            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var l = i("446674"),
                s = i("889293"),
                u = i("782340"),
                a = {
                    title: () => u.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
                    description: () => u.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_FINISH_SETTING_UP_DESCRIPTION,
                    canCreateGuild: !1,
                    useIsGuildSupported: () => (0, l.useStateFromStores)([s.default], () => e => s.default.getEligibleGuildsForNagActivate().includes(e.id), [])
                }