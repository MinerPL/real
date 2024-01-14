"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("913144");
let l = !1,
  r = null;
var o = {
  init() {
    i.default.subscribe("CONNECTION_OPEN", e => {
      let {
        pendingPayments: t
      } = e;
      if (null != t && t.length > 0) {
        var i;
        if (r === t[0] || null == (r = t[0])) return;
        i = r, l || (l = !0, (0, s.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("905692").then(n.bind(n, "905692"));
          return t => {
            let {
              transitionState: n,
              onClose: s
            } = t;
            return (0, a.jsx)(e, {
              pendingPayment: i,
              transitionState: n,
              onClose: () => (l = !1, s())
            })
          }
        }))
      }
    })
  }
}