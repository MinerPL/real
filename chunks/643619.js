"use strict";
n.r(t), n.d(t, {
  coalesceInvoiceItems: function() {
    return s
  },
  createInvoiceItemFromServer: function() {
    return a
  }
}), n("222007"), n("424973");
var i = n("917351"),
  r = n.n(i);

function s(e) {
  let t = (e, t) => e.subscriptionPlanId === t.subscriptionPlanId && e.subscriptionPlanPrice === t.subscriptionPlanPrice && e.amount === t.amount && r.isEqual(e.discounts, t.discounts),
    n = [],
    i = new Set;
  e.map(e => {
    for (let r of n)
      if (t(r, e)) {
        i.add(r.subscriptionPlanId), r.quantity += e.quantity;
        return
      } n.push({
      ...e
    })
  });
  let s = n.map(e => {
    let t = {
      ...e
    };
    return i.has(e.subscriptionPlanId) && (t.amount = t.amount * t.quantity, t.discounts = t.discounts.map(e => ({
      ...e,
      amount: e.amount * t.quantity
    }))), t
  });
  return s
}

function a(e) {
  return {
    id: e.id,
    subscriptionPlanId: e.subscription_plan_id,
    subscriptionPlanPrice: e.subscription_plan_price,
    amount: e.amount,
    quantity: e.quantity,
    discounts: e.discounts
  }
}