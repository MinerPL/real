"use strict";
i.r(n), i.d(n, {
  PremiumInvoiceTable: function() {
    return c
  },
  PremiumInvoiceTableHeader: function() {
    return I
  },
  PremiumInvoiceTableRow: function() {
    return d
  },
  PremiumInvoiceDiscountedTableRow: function() {
    return m
  },
  PremiumInvoiceTableDivider: function() {
    return P
  },
  PremiumInvoiceTableTotalRow: function() {
    return T
  },
  PremiumInvoiceTableFinePrint: function() {
    return _
  }
});
var t = i("37983");
i("884691");
var r = i("414456"),
  l = i.n(r),
  a = i("798609"),
  s = i("153160"),
  u = i("782340"),
  o = i("889454");

function c(e) {
  let {
    children: n,
    className: i
  } = e;
  return (0, t.jsx)("div", {
    className: l(o.table, i),
    children: n
  })
}

function I(e) {
  let {
    children: n
  } = e;
  return (0, t.jsx)("div", {
    className: o.header,
    children: n
  })
}

function d(e) {
  let {
    label: n,
    value: i,
    className: r
  } = e;
  return (0, t.jsxs)("div", {
    className: l(o.row, r),
    children: [(0, t.jsx)("div", {
      className: o.rowLabel,
      children: n
    }), (0, t.jsx)("div", {
      className: o.rowAmount,
      children: i
    })]
  })
}

function m(e) {
  let {
    label: n,
    value: i,
    discounts: r,
    originalAmount: l,
    interval: c,
    currency: I,
    className: m,
    intervalCount: P
  } = e, T = e => null != r ? r.find(n => n.type === e) : null, _ = T(a.InvoiceDiscountTypes.SUBSCRIPTION_PLAN), v = T(a.InvoiceDiscountTypes.ENTITLEMENT), M = null != _ ? Math.floor(_.amount / l * 100) : null, R = (0, s.formatPrice)(l, I);
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(d, {
      label: n,
      value: (0, t.jsxs)(t.Fragment, {
        children: [i, null != M ? (0, t.jsxs)("div", {
          className: o.rowPercentDiscount,
          children: ["-", M, "%"]
        }) : null]
      }),
      className: m
    }), null != M ? (0, t.jsxs)("div", {
      className: o.rowDiscountOriginalPrice,
      children: ["(", null != c && null != P ? (0, s.formatRate)(R, c, P) : R, ")"]
    }) : null, null != v ? (0, t.jsx)("div", {
      className: o.entitlementDiscountRow,
      children: u.default.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
    }) : null]
  })
}

function P(e) {
  let {
    extended: n = !1,
    negativeMarginTop: i = !1
  } = e;
  return (0, t.jsx)("div", {
    className: l(o.divider, {
      [o.dividerExtended]: n,
      [o.negativeMarginTop]: i
    })
  })
}

function T(e) {
  let {
    label: n,
    value: i,
    className: r
  } = e;
  return (0, t.jsxs)("div", {
    className: l(o.totalRow, r),
    children: [(0, t.jsx)("div", {
      className: o.totalLabel,
      children: n
    }), (0, t.jsx)("div", {
      className: o.totalAmount,
      children: i
    })]
  })
}

function _(e) {
  let {
    children: n,
    className: i
  } = e;
  return (0, t.jsx)("div", {
    className: l(o.finePrint, i),
    children: n
  })
}