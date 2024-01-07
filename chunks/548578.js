            "use strict";
            n.r(t), n.d(t, {
                MAX_CACHE_AGE_MS: function() {
                    return i
                },
                CACHE_VERSION: function() {
                    return a
                },
                getDefaultState: function() {
                    return l
                }
            });
            let i = 2592e6,
                a = "stable-50";

            function l() {
                return {
                    nonce: "",
                    useGuildVersions: !1,
                    highestLastMessageId: "0",
                    readStateVersion: 0,
                    userGuildSettingsVersion: -1,
                    userSettingsVersion: -1,
                    version: a,
                    cacheCreationDate: null,
                    privateChannelsVersion: "0",
                    apiCodeVersion: 0,
                    guildIdsRequiringDeletedIdsSync: [],
                    lastSelectedGuildId: null
                }
            }