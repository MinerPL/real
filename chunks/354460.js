"use strict";
n.r(t), n.d(t, {
  getGuildFeatureFromUploadType: function() {
    return r
  },
  shouldShowPremiumIconForGIFPickerOption: function() {
    return l
  }
});
var a = n("49111"),
  i = n("75015");

function r(e, t) {
  let {
    isGIF: n
  } = t;
  if (e === i.UploadTypes.GUILD_BANNER) return n ? a.GuildFeatures.ANIMATED_BANNER : a.GuildFeatures.BANNER
}

function l(e) {
  return e === i.UploadTypes.AVATAR || e === i.UploadTypes.BANNER
}