"use strict";
n.r(t), n.d(t, {
  useIsWindowFocused: function() {
    return a
  }
});
var i = n("884691"),
  l = n("446674"),
  s = n("244201"),
  r = n("471671");

function a() {
  let {
    windowId: e
  } = i.useContext(s.default);
  return (0, l.useStateFromStores)([r.default], () => r.default.isFocused(e), [e])
}