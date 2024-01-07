            "use strict";
            n.r(t), n.d(t, {
                updateGuildPremiumSubscriptionCount: function() {
                    return a
                }
            });
            var l = n("913144");
            let a = (e, t) => {
                l.default.wait(() => {
                    l.default.dispatch({
                        type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
                        guildId: e,
                        premiumCount: t
                    })
                })
            }