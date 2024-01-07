            "use strict";

            function i(e) {
                let {
                    knownGuildVersions: t,
                    highestLastMessageId: n,
                    readStateVersion: i,
                    userGuildSettingsVersion: a,
                    userSettingsVersion: l,
                    privateChannelsVersion: s,
                    apiCodeVersion: r,
                    lastSelectedGuildId: u
                } = e, o = null == u || isNaN(Number(u)) ? void 0 : u;
                return {
                    guild_versions: t,
                    highest_last_message_id: n,
                    read_state_version: i,
                    user_guild_settings_version: a,
                    user_settings_version: l,
                    private_channels_version: s,
                    api_code_version: r,
                    initial_guild_id: o
                }
            }
            n.r(t), n.d(t, {
                toGatewayClientState: function() {
                    return i
                }
            })