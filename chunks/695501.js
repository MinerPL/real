"use strict";
n.r(t), n.d(t, {
  SELECT_NAMES: function() {
    return o
  }
});
var s = n("782340");
let o = {
  get webauthn() {
    return s.default.Messages.MFA_V2_WEBAUTHN_NAME
  },
  get totp() {
    return s.default.Messages.MFA_V2_TOTP_NAME
  },
  get sms() {
    return s.default.Messages.MFA_V2_SMS_NAME
  },
  get password() {
    return s.default.Messages.MFA_V2_PASSWORD_NAME
  },
  get backup() {
    return s.default.Messages.MFA_V2_BACKUP_NAME
  }
}