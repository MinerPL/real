"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var o = n("79528"),
  r = n("49111"),
  i = n("171644"),
  a = n("782340"),
  l = n("429255"),
  d = n("516765");

function c(e) {
  let {
    isWaitingForConnection: t,
    onWaitingForConnection: n,
    expectedCallbackState: c,
    onAuthToken: u,
    onError: f,
    onClose: C
  } = e, h = t ? (0, s.jsx)("img", {
    src: d,
    width: "168",
    height: "124",
    alt: ""
  }) : (0, s.jsx)("img", {
    src: l,
    width: "152",
    height: "124",
    alt: ""
  }), p = t ? a.default.Messages.XBOX_DETAILS_TITLE_WAITING : a.default.Messages.XBOX_DETAILS_TITLE, T = t ? a.default.Messages.XBOX_DETAILS_BODY_WAITING : a.default.Messages.XBOX_DETAILS_BODY;
  return (0, s.jsx)(o.TwoWayLinkPreConnect, {
    platformType: r.PlatformTypes.XBOX,
    isWaitingForConnection: t,
    onWaitingForConnection: n,
    expectedCallbackState: c,
    onAuthToken: u,
    onError: f,
    onClose: C,
    img: h,
    title: p,
    body: T,
    redirectDestination: i.XBOX_LINK_DEST_ORIGIN
  })
}