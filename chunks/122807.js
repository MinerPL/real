"use strict";
n.r(t), n.d(t, {
  GrowingFriendGuildCommunityUpsellExperiment: function() {
    return i
  }
});
var l = n("862205");
let i = (0, l.createExperiment)({
  kind: "guild",
  id: "2023-04_growing_friend_guild_community_upsell",
  label: "Growing Friend Guild Community Upsell",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Community Upsell to Growing Friend Guilds",
    config: {
      enabled: !0
    }
  }]
})