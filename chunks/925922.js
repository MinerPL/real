"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
}), a("794252");
var s = a("37983");
a("884691");
var l = a("506838"),
  i = a("644417"),
  n = a("415133"),
  r = a("44984"),
  o = a("500645");

function d(e) {
  let {
    username: t,
    oneClickFlow: a = !1
  } = e, d = (0, r.useUsernameLiveCheck)((0, n.formatPomeloForEditing)(t), !0, !1, a);
  if (null == d) return null;
  let u = (0, l.match)(d.type).with(i.NameValidationState.RATE_LIMIT, () => "info").with(i.NameValidationState.ERROR, () => "error").with(i.NameValidationState.AVAILABLE, () => "success").with(i.NameValidationState.INTERNAL_ERROR, () => null).exhaustive();
  return null == u ? null : (0, s.jsx)(o.default, {
    type: u,
    children: d.message
  })
}