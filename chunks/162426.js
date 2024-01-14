"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var r = n("884691"),
  i = n("599417"),
  u = n("782340");

function l(e) {
  let [t, n] = r.useState(!1), [l, o] = r.useState(null), s = r.useCallback(async function() {
    for (var t = arguments.length, r = Array(t), l = 0; l < t; l++) r[l] = arguments[l];
    try {
      return o(null), n(!0), await e(...r)
    } catch (e) {
      e.message !== u.default.Messages.MFA_V2_CANCELED && o(e instanceof i.default ? e : new i.default(e))
    } finally {
      n(!1)
    }
  }, [e]);
  return [s, {
    loading: t,
    error: l
  }]
}