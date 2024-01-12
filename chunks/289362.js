            "use strict";

            function s(e) {
                let {
                    knownGuildVersions: t,
                    highestLastMessageId: n,
                    readStateVersion: s,
                    userGuildSettingsVersion: i,
                    userSettingsVersion: r,
                    privateChannelsVersion: a,
                    apiCodeVersion: o,
                    lastSelectedGuildId: d
                } = e, u = null == d || isNaN(Number(d)) ? void 0 : d;
                return {
                    guild_versions: t,
                    highest_last_message_id: n,
                    read_state_version: s,
                    user_guild_settings_version: i,
                    user_settings_version: r,
                    private_channels_version: a,
                    api_code_version: o,
                    initial_guild_id: u
                }
            }
            n.r(t), n.d(t, {
                toGatewayClientState: function() {
                    return s
                }
            })