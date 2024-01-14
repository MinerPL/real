"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("37983");
a("884691");
var s = a("65597"),
  i = a("77078"),
  l = a("404118"),
  u = a("697218"),
  d = a("599110"),
  r = a("49111"),
  o = a("782340");

function f(e) {
  let {
    header: t,
    children: a,
    sku_id: f,
    sku_name: _,
    guild_id: c,
    cancelLabel: R,
    confirmLabel: m,
    transitionState: E,
    onClose: O,
    ...T
  } = e, g = (0, s.default)([u.default], () => u.default.getCurrentUser());
  return (0, n.jsx)(i.ConfirmModal, {
    header: null != t ? t : o.default.Messages.REPORT,
    cancelText: null != R ? R : o.default.Messages.CANCEL,
    confirmText: null != m ? m : o.default.Messages.REPORT,
    onConfirm: () => {
      d.default.track(r.AnalyticEvents.TNS_SKU_REPORT_SUBMITTED, {
        sku_id: f,
        guild_id: c,
        user_id: null == g ? void 0 : g.id
      }), l.default.show({
        title: o.default.Messages.SKU_REPORT_CONFIRMATION_HEADER,
        body: o.default.Messages.SKU_REPORT_CONFIRMATION_BODY.format({
          skuName: _
        })
      })
    },
    transitionState: E,
    onClose: O,
    ...T,
    children: a
  })
}