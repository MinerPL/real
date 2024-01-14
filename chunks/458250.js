"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("37983");
n("884691");
var o = n("106076"),
  r = n("755993"),
  i = n("49111"),
  a = n("171644");

function l(e) {
  let {
    authToken: t,
    onContinue: n,
    onError: l,
    onClose: d
  } = e;
  return (0, s.jsx)(r.TwoWayLinkDiscordConsent, {
    platformType: i.PlatformTypes.XBOX,
    clientId: o.ConsoleOAuthApplications.XBOX_APPLICATION_ID,
    scopes: a.XBOX_CLIENT_SCOPES,
    authToken: t,
    onContinue: n,
    onError: l,
    onClose: d
  })
}