"use strict";
s.r(l), s.d(l, {
  default: function() {
    return d
  }
});
var t = s("884691"),
  a = s("446674"),
  i = s("305961"),
  n = s("980215");

function d() {
  let e = (0, a.useStateFromStores)([i.default], () => i.default.getGuilds()),
    l = t.useMemo(() => Object.values(e).filter(e => (0, n.canUseCustomClydeProfiles)(e)), [e]);
  return l
}