"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  i = s("681421"),
  r = s("843455"),
  l = s("782340"),
  u = s("852225");

function o(e) {
  let {
    payment: t
  } = e, s = null != t.paymentSource && t.status === r.PaymentStatusTypes.COMPLETED;
  return null == t.downloadableInvoice || "" === t.downloadableInvoice ? s ? (0, a.jsx)("div", {
    className: u.downloadInvoice,
    children: (0, a.jsx)(n.Anchor, {
      onClick: () => {
        var e, s;
        e = t, s = t.paymentSource, i.default.open(e, s)
      },
      children: l.default.Messages.BILLING_DOWNLOAD_INVOICE
    })
  }) : null : (0, a.jsxs)("div", {
    className: u.downloadInvoice,
    children: [(0, a.jsx)(n.Anchor, {
      href: t.downloadableInvoice,
      children: l.default.Messages.BILLING_DOWNLOAD_INVOICE_VAT
    }), null != t.downloadableRefundInvoices ? t.downloadableRefundInvoices.map((e, t) => (0, a.jsx)(n.Anchor, {
      className: u.downloadRefundInvoice,
      href: e,
      children: l.default.Messages.BILLING_DOWNLOAD_REFUND_INVOICE
    }, t)) : null]
  })
}