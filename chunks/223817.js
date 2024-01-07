            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = {};
            class i extends l.default.PersistedStore {
                initialize(e) {
                    null != e && (s = e)
                }
                getState() {
                    return s
                }
                getCountForGuild(e) {
                    return s[e]
                }
            }
            i.displayName = "GuildBoostingProgressBarPersistedStore", i.persistKey = "PremiumGuildProgressBarPersistedStore";
            var r = new i(a.default, {
                APPLIED_GUILD_BOOST_COUNT_UPDATE: e => {
                    let {
                        guildId: t,
                        premiumCount: n
                    } = e;
                    s = {
                        ...s,
                        [t]: n
                    }
                }
            })