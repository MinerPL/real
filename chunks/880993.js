"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("316693"),
  n = s("991170"),
  l = s("49111");

function i(e, t) {
  let s = {
    [t.id]: t
  };
  return e.filter(e => {
    let t = n.default.computePermissionsForRoles({
        forceRoles: s,
        context: e
      }),
      i = l.Permissions.VIEW_CHANNEL;
    return e.isGuildVocal() && (i = a.default.add(i, l.Permissions.CONNECT)), a.default.has(t, i) && !n.default.canEveryoneRole(i, e)
  })
}