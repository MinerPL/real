"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var i = n("77078"),
  l = n("613387"),
  s = n("409058"),
  u = n("49111"),
  r = n("782340");

function d(e, t) {
  return e.state !== u.MessageStates.SEND_FAILED ? null : (0, a.jsx)(i.MenuItem, {
    id: "resend",
    label: r.default.Messages.RESEND_MESSAGE,
    action: () => (0, s.default)(t, e, void 0, l.default.getOptions(e.id))
  })
}