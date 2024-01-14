"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("446674"),
  l = n("271938"),
  s = n("808422");

function i(e) {
  let t = (0, a.useStateFromStores)([l.default], () => l.default.getId()),
    n = (0, s.default)(t, e);
  return n === s.RequestToSpeakStates.ON_STAGE
}