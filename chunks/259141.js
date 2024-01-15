"use strict";
n.r(t), n.d(t, {
  useIsConnectedToVoiceChannel: function() {
    return u
  }
});
var a = n("446674"),
  i = n("271938"),
  s = n("800762");

function u(e) {
  return function(e) {
    return (0, a.useStateFromStores)([s.default, i.default], () => s.default.isInChannel(e, i.default.getId()))
  }(null == e ? void 0 : e.id)
}