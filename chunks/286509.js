"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("550368"),
  l = n("954016");

function a(e, t) {
  return null == e || null == e.assets || null == e.assets.large_image ? null : (0, s.getAssetImage)(t, e.assets.large_image, [l.ACTIVITY_INVITE_COVER_IMAGE_SIZE, l.ACTIVITY_INVITE_COVER_IMAGE_SIZE])
}