"use strict";
s.r(t), s.d(t, {
  openModal: function() {
    return i
  }
});
var a = s("352807"),
  n = s("915675"),
  l = s("782340");
let i = () => {
  (0, a.openActionCompleteSuccessModal)({
    title: l.default.Messages.GUILD_ROLE_SUBSCRIPTION_RESTARTED_TITLE,
    body: l.default.Messages.GUILD_ROLE_SUBSCRIPTION_RESTARTED_DESCRIPTION,
    Icon: n.default
  })
}