"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("446674"),
  a = n("366757"),
  l = n("377253"),
  i = n("49111"),
  r = (e, t) => {
    let n = (0, a.useShowConvoStarterInDM)(t),
      r = (0, s.useStateFromStores)([l.default], () => l.default.getMessages(t.id).length > 0, [t]);
    return null != e && e.hasFlag(i.UserFlags.QUARANTINED) && n && !r
  }