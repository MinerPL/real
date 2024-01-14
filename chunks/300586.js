"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("446674"),
  a = n("471671"),
  l = n("880731");

function i(e) {
  let t = (0, s.useStateFromStores)([a.default], () => a.default.isFocused());
  return (0, s.useStateFromStores)([l.default], () => l.default.isEnabled({
    shakeLocation: e
  }) && t ? l.default.shakeIntensity : 0)
}