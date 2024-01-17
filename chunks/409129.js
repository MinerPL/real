"use strict";
n.r(t), n.d(t, {
  getApplicationSubscriptionSystemMessageASTContent: function() {
    return l
  }
});
var s = n("782340");

function l(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: l,
    medium: a
  } = e;
  return null != t ? s.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_MOBILE.astFormat({
    username: n,
    applicationName: t.name,
    usernameOnClick: l,
    medium: a
  }) : s.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION_MOBILE.astFormat({
    username: n,
    usernameOnClick: l,
    medium: a
  })
}