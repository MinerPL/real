"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var s = n("884691"),
  l = n("550368");
let a = ["embedded_cover", "embedded_background"];

function i(e) {
  let {
    applicationId: t,
    size: n,
    names: i = a
  } = e, [r, o] = s.useState(null), [u, d] = s.useState(!0), c = (0, l.getAssetImage)(t, r, n);
  return s.useEffect(() => {
    (0, l.fetchAssetIds)(t, i).then(e => {
      for (let t of (d(!1), e))
        if (null != t && "" !== t) {
          o(t);
          return
        }
    })
  }, [t]), {
    url: c,
    state: u ? "loading" : null != c ? "fetched" : "not-found"
  }
}