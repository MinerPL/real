"use strict";
n.r(e), n.d(e, {
  colorToRgba: function() {
    return i
  }
});
var r = n("697214");

function i(t) {
  var e = (0, r.normalizeColor)(t);
  return null === e ? t : "rgba(" + ((4278190080 & (e = e || 0)) >>> 24) + ", " + ((16711680 & e) >>> 16) + ", " + ((65280 & e) >>> 8) + ", " + (255 & e) / 255 + ")"
}