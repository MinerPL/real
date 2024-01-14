"use strict";
n.r(t), n.d(t, {
  getApplicationSubscriptionSystemMessageASTContent: function() {
    return s
  }
});
var a = n("782340");

function s(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: s,
    medium: l
  } = e;
  return null != t ? a.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_MOBILE.astFormat({
    username: n,
    applicationName: t.name,
    usernameOnClick: s,
    medium: l
  }) : a.default.Messages.SYSTEM_MESSAGE_APPLICATION_SUBSCRIPTION_PURCHASE_FROM_DELETED_APPLICATION_MOBILE.astFormat({
    username: n,
    usernameOnClick: s,
    medium: l
  })
}