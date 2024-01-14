"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("884691"),
  l = n("550766"),
  s = n("126939"),
  i = n("702173");
let r = e => null != e && "" !== e;

function o(e, t) {
  let n = (0, s.useIsActivitiesEnabledForCurrentPlatform)(),
    o = (0, i.default)(t),
    u = r(e) || o;
  a.useEffect(() => {
    u && n && (0, l.fetchShelf)({
      guildId: e
    })
  }, [e, n, u]);
  let d = u && n;
  return d
}