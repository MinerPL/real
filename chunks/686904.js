"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
}), l("222007");
var n = l("884691"),
  a = l("448993");

function s(e, t) {
  let [l, s] = n.useState(!1), [r, i] = n.useState(null), u = async () => {
    s(!0), i(null);
    try {
      let t = await e();
      return s(!1), i(null), t
    } catch (l) {
      let e = new a.APIError(l);
      return null == t || t(e), i(e), s(!1), null
    }
  };
  return [u, {
    loading: l,
    error: r
  }]
}