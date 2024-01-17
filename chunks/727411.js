"use strict";
n.r(t), n.d(t, {
  openModal: function() {
    return u
  }
});
var i = n("37983");
n("884691");
var r = n("77078"),
  l = n("307785");

function u(e, t) {
  (0, r.openModalLazy)(async () => {
    let {
      default: r
    } = await n.el("48175").then(n.bind(n, "48175"));
    return n => (0, i.jsx)(r, {
      guildId: e,
      productId: t,
      ...n
    })
  }, {
    modalKey: l.GUILD_PRODUCT_EDIT_MODAL_KEY
  })
}