            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("913144"),
                i = n("679428"),
                s = n("282109"),
                u = {
                    update(e) {
                        a.default.dispatch({
                            type: "CHANNEL_COLLAPSE",
                            channelId: e
                        })
                    },
                    toggleCollapseGuild(e) {
                        i.default.saveUserGuildSettings(e, {
                            hide_muted_channels: !s.default.isGuildCollapsed(e)
                        }), a.default.dispatch({
                            type: "GUILD_TOGGLE_COLLAPSE_MUTED",
                            guildId: e
                        })
                    }
                }