"use strict";
n.r(t), n.d(t, {
  MAX_CACHE_AGE_MS: function() {
    return s
  },
  CACHE_VERSION: function() {
    return i
  },
  getDefaultState: function() {
    return r
  }
});
let s = 2592e6,
  i = "stable-50";

function r() {
  return {
    nonce: "",
    useGuildVersions: !1,
    highestLastMessageId: "0",
    readStateVersion: 0,
    userGuildSettingsVersion: -1,
    userSettingsVersion: -1,
    version: i,
    cacheCreationDate: null,
    privateChannelsVersion: "0",
    apiCodeVersion: 0,
    guildIdsRequiringDeletedIdsSync: [],
    lastSelectedGuildId: null
  }
}