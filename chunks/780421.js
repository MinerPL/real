"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var o = n("37983");
n("884691");
var s = n("755993"),
  i = n("655485"),
  r = n("49111");

function a(e) {
  let {
    authToken: t,
    onContinue: n,
    onError: a,
    onClose: l
  } = e;
  return (0, o.jsx)(s.TwoWayLinkDiscordConsent, {
    platformType: r.PlatformTypes.CRUNCHYROLL,
    clientId: i.CRUNCHYROLL_CLIENT_ID,
    scopes: i.CRUNCHYROLL_CLIENT_SCOPES,
    authToken: t,
    onContinue: n,
    onError: a,
    onClose: l
  })
}