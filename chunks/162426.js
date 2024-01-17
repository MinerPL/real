"use strict";
u.r(e), u.d(e, {
  default: function() {
    return l
  }
}), u("222007");
var r = u("884691"),
  n = u("599417"),
  i = u("782340");

function l(t) {
  let [e, u] = r.useState(!1), [l, o] = r.useState(null), c = r.useCallback(async function() {
    for (var e = arguments.length, r = Array(e), l = 0; l < e; l++) r[l] = arguments[l];
    try {
      return o(null), u(!0), await t(...r)
    } catch (t) {
      t.message !== i.default.Messages.MFA_V2_CANCELED && o(t instanceof n.default ? t : new n.default(t))
    } finally {
      u(!1)
    }
  }, [t]);
  return [c, {
    loading: e,
    error: l
  }]
}