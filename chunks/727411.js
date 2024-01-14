"use strict";
n.r(t), n.d(t, {
  openModal: function() {
    return l
  }
});
var r = n("37983");
n("884691");
var i = n("77078"),
  u = n("307785");

function l(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await n.el("48175").then(n.bind(n, "48175"));
    return n => (0, r.jsx)(i, {
      guildId: e,
      productId: t,
      ...n
    })
  }, {
    modalKey: u.GUILD_PRODUCT_EDIT_MODAL_KEY
  })
}