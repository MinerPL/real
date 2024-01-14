"use strict";
n.r(t), n.d(t, {
  guildInventorySettingsFromServer: function() {
    return i
  },
  guildInventorySettingsToServer: function() {
    return r
  }
});
let i = e => {
    var t;
    return null == e ? e : {
      isEmojiPackCollectible: null === (t = e.is_emoji_pack_collectible) || void 0 === t || t
    }
  },
  r = e => null == e ? e : {
    is_emoji_pack_collectible: e.isEmojiPackCollectible
  }