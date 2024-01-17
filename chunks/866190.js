"use strict";
n.r(t), n.d(t, {
  useIsWindowFocused: function() {
    return a
  }
});
var l = n("884691"),
  r = n("446674"),
  i = n("244201"),
  s = n("471671");

function a() {
  let {
    windowId: e
  } = l.useContext(i.default);
  return (0, r.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
}