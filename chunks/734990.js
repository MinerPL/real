"use strict";
n.r(t), n.d(t, {
  sendConfirmationCode: function() {
    return l
  },
  confirmEmailChange: function() {
    return a
  }
});
var s = n("759843"),
  o = n("840707"),
  r = n("49111");

function l() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return o.default.put({
    url: r.Endpoints.USER_EMAIL,
    trackedActionData: {
      event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
      properties: {
        is_resend: e
      }
    }
  })
}
async function a(e) {
  let t = await o.default.post({
    url: r.Endpoints.USER_EMAIL_VERIFY_CODE,
    body: {
      code: e
    },
    trackedActionData: {
      event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE
    }
  });
  return t.body
}