"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("550368"),
  s = n("954016");

function l(e, t) {
  return null == e || null == e.assets || null == e.assets.large_image ? null : (0, a.getAssetImage)(t, e.assets.large_image, [s.ACTIVITY_INVITE_COVER_IMAGE_SIZE, s.ACTIVITY_INVITE_COVER_IMAGE_SIZE])
}