"use strict";
n.r(t), n.d(t, {
  useSubscribeToGuildMemberUpdates: function() {
    return a
  }
});
var l = n("884691"),
  s = n("666020");

function a(e) {
  l.useEffect(() => (s.subscribeToMemberUpdates(e), () => {
    s.unsubscribeFromMemberUpdates(e)
  }), [e])
}