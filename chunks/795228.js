"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("884691"),
  u = n("446674"),
  a = n("895026"),
  r = n("36402");
let o = {};

function i(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = (0, u.useStateFromStores)([r.default], () => r.default.getRoleMemberCount(e));
  return l.useEffect(() => {
    if (null == e) return;
    let n = o[e],
      l = null != n && t > 0 && Date.now() - n < t;
    !l && (o[e] = Date.now(), a.fetchMemberCounts(e))
  }, [e, t]), n
}