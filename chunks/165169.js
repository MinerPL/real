"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var a = s("884691"),
  n = s("837008"),
  l = s("795228");

function i(e, t) {
  let s = (0, n.useSubscriptionListingsForGuild)(e),
    i = (0, l.default)(e);
  return a.useMemo(() => s.map(e => {
    var s;
    let a = null == e ? void 0 : e.role_id;
    return {
      ...null !== (s = null == t ? void 0 : t.ppgs[e.id]) && void 0 !== s ? s : {},
      key: e.id,
      subscriptionListing: e,
      roleMemberCount: null == a ? void 0 : null == i ? void 0 : i[a]
    }
  }), [s, null == t ? void 0 : t.ppgs, i])
}