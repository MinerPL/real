"use strict";
n.r(t), n.d(t, {
  getGuildFeatureFromUploadType: function() {
    return i
  },
  shouldShowPremiumIconForGIFPickerOption: function() {
    return u
  }
});
var r = n("49111"),
  a = n("75015");

function i(e, t) {
  let {
    isGIF: n
  } = t;
  if (e === a.UploadTypes.GUILD_BANNER) return n ? r.GuildFeatures.ANIMATED_BANNER : r.GuildFeatures.BANNER
}

function u(e) {
  return e === a.UploadTypes.AVATAR || e === a.UploadTypes.BANNER
}