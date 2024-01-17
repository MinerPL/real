"use strict";
n.r(t), n.d(t, {
  PaymentModalConfirmStep: function() {
    return f
  }
});
var s = n("37983");
n("884691");
var r = n("627445"),
  l = n.n(r),
  i = n("77078"),
  a = n("642906"),
  u = n("367767"),
  o = n("650484"),
  d = n("782340"),
  c = n("966425");

function f(e) {
  let {
    handleClose: t
  } = e, {
    skusById: n,
    selectedSkuId: r,
    application: f
  } = (0, a.usePaymentContext)();
  l(null != r, "Expected selectedSkuId"), l(null != f, "Expected application");
  let p = n[r];
  l(null != p, "Expected sku");
  let E = d.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
    applicationName: f.name,
    itemName: p.name
  });
  return (0, s.jsxs)(o.PaymentPortalBody, {
    children: [(0, s.jsx)(u.default, {}), (0, s.jsxs)("div", {
      className: c.confirmation,
      children: [(0, s.jsx)(i.Heading, {
        variant: "heading-xxl/bold",
        className: c.confirmationHeader,
        children: "Success!"
      }), (0, s.jsx)(i.Text, {
        variant: "text-md/normal",
        children: E
      }), (0, s.jsx)("div", {
        className: c.divider
      }), (0, s.jsx)(i.Button, {
        onClick: t,
        children: d.default.Messages.CLOSE
      })]
    })]
  })
}