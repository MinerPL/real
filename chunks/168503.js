"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var o = n("37983");
n("884691");
var s = n("79528"),
  i = n("655485"),
  r = n("49111"),
  a = n("782340"),
  l = n("850046"),
  d = n("229394");

function C(e) {
  let {
    isWaitingForConnection: t,
    onWaitingForConnection: n,
    expectedCallbackState: C,
    onAuthToken: u,
    onError: c,
    onClose: L
  } = e, f = t ? (0, o.jsx)("img", {
    src: d,
    width: "168",
    height: "124",
    alt: ""
  }) : (0, o.jsx)("img", {
    src: l,
    width: "152",
    height: "123",
    alt: ""
  }), N = t ? a.default.Messages.CRUNCHYROLL_DETAILS_TITLE_WAITING : a.default.Messages.CRUNCHYROLL_DETAILS_TITLE, T = t ? a.default.Messages.CRUNCHYROLL_DETAILS_BODY_WAITING : a.default.Messages.CRUNCHYROLL_DETAILS_BODY;
  return (0, o.jsx)(s.TwoWayLinkPreConnect, {
    platformType: r.PlatformTypes.CRUNCHYROLL,
    isWaitingForConnection: t,
    onWaitingForConnection: n,
    expectedCallbackState: C,
    onAuthToken: u,
    onError: c,
    onClose: L,
    img: f,
    title: N,
    body: T,
    redirectDestination: i.CRUNCHYROLL_LINK_DEST_ORIGIN
  })
}