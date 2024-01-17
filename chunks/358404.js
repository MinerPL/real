"use strict";
n.r(t), n.d(t, {
  openGuildProductInfoModal: function() {
    return a
  }
});
var s = n("37983");
n("884691");
var l = n("77078");

function a(e) {
  (0, l.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("962276").then(n.bind(n, "962276"));
    return n => (0, s.jsx)(t, {
      ...e,
      ...n
    })
  })
}