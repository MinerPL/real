"use strict";
n.r(t), n.d(t, {
  useIsWindowFocused: function() {
    return s
  }
});
var i = n("884691"),
  r = n("446674"),
  o = n("244201"),
  l = n("471671");

function s() {
  let {
    windowId: e
  } = i.useContext(o.default);
  return (0, r.useStateFromStores)([l.default], () => l.default.isFocused(e), [e])
}