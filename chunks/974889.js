"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("773336"),
  i = n("50885"),
  l = n("870346");

function r(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = l.default.getWindow(e);
  null != n && !n.closed && (s.isPlatformEmbedded ? i.default.focus(e, t) : n.focus())
}