"use strict";
n.r(t), n.d(t, {
  renderGuildProductPurchaseHeader: function() {
    return a
  }
});
var r = n("37983");
n("884691");
var u = n("85336"),
  s = n("891328"),
  l = n("273093"),
  i = n("780022");

function o(e) {
  let {
    onClose: t
  } = e, {
    guildProductListing: n
  } = (0, l.useGuildProductPurchaseContext)();
  return (0, r.jsx)(s.default, {
    guildProductListing: n,
    className: i.header,
    onClose: t
  })
}
let a = (e, t, n) => n === u.Step.CONFIRM ? null : (0, r.jsx)(o, {
  onClose: () => t(!1)
})