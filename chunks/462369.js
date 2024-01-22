"use strict";
s.r(t), s.d(t, {
  getSMSBackupDisabledMessage: function() {
    return l
  }
}), s("65597"), s("305961"), s("957255"), s("697218");
var a = s("49111"),
  n = s("782340");

function l(e) {
  return e.hasAnyStaffLevel() || e.hasFlag(a.UserFlags.PARTNER) ? n.default.Messages.MFA_SMS_DISABLED_PARTNER : null == e.email ? n.default.Messages.MFA_SMS_DISABLED_NO_EMAIL : null
}