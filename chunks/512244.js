"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("42887"),
  i = n("353927");

function r() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.default;
  return (e = t).supports(i.Features.MEDIAPIPE) && Object.values(e.getVideoDevices()).length > 0
}