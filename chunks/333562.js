"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
}), s("222007");
var a = s("49111");
let n = new Set([a.PlatformTypes.XBOX, a.PlatformTypes.PLAYSTATION, a.PlatformTypes.PLAYSTATION_STAGING, a.PlatformTypes.CRUNCHYROLL]);

function l(e) {
  return n.has(e.type) && e.twoWayLink
}