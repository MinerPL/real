"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("798609");

function i(e) {
  switch (e) {
    case "android":
      return s.EmbeddedActivitySupportedPlatforms.ANDROID;
    case "ios":
      return s.EmbeddedActivitySupportedPlatforms.IOS;
    default:
      return s.EmbeddedActivitySupportedPlatforms.WEB
  }
}