"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var s = n("37983");
n("884691");
var i = n("77078"),
  r = {
    show(e) {
      let {
        url: t,
        trustUrl: r,
        onConfirm: a,
        isProtocol: o
      } = e;
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("153128").then(n.bind(n, "153128"));
        return n => (0, s.jsx)(e, {
          ...n,
          url: t,
          isProtocol: o,
          trustUrl: r,
          onConfirm: a
        })
      })
    }
  }