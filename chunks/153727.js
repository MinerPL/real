"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
}), a("881410");
var n = a("37983");
a("884691");
var r = a("414456"),
  s = a.n(r),
  l = a("454589"),
  o = a("642906"),
  i = a("85336"),
  u = a("109872");

function c(e) {
  let {
    className: t,
    isEligibleForTrial: a = !1
  } = e, {
    step: r,
    breadcrumbs: c,
    startedPaymentFlowWithPaymentSourcesRef: d
  } = (0, o.usePaymentContext)();
  if (null == c || 0 === c.length) return null;
  let p = c.flatMap(e => {
    let t = e.useBreadcrumbLabel();
    return null != t ? {
      id: e.id,
      label: t
    } : []
  });
  return 0 === p.length ? null : (p = p.filter(e => {
    let t = e.id !== i.Step.ADD_PAYMENT_STEPS,
      n = e.id === i.Step.ADD_PAYMENT_STEPS && !d.current;
    return !a || a && (t || n)
  }), (0, n.jsx)("div", {
    className: s("breadcrumb", u.wrapper, t),
    children: (0, n.jsx)(l.default, {
      activeId: r,
      breadcrumbs: p
    })
  }))
}