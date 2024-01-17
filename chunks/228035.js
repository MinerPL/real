"use strict";
n.r(t), n.d(t, {
  openGuildShopReportModal: function() {
    return a
  }
});
var s = n("37983");
n("884691");
var l = n("77078");

function a(e) {
  let {
    listing: t
  } = e;
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("754559").then(n.bind(n, "754559"));
    return n => (0, s.jsx)(e, {
      listing: t,
      ...n
    })
  })
}