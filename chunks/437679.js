"use strict";
t.r(n), t.d(n, {
  PlayStationLinkPreConnect: function() {
    return d
  }
});
var i = t("37983");
t("884691");
var o = t("79528"),
  s = t("171644"),
  a = t("782340"),
  r = t("660617"),
  l = t("329786");

function d(e) {
  let {
    platformType: n,
    isWaitingForConnection: t,
    onWaitingForConnection: d,
    expectedCallbackState: u,
    onAuthToken: C,
    onError: c,
    onClose: T
  } = e, S = t ? (0, i.jsx)("img", {
    src: l,
    width: "180",
    height: "125",
    alt: ""
  }) : (0, i.jsx)("img", {
    src: r,
    width: "180",
    height: "111",
    alt: ""
  }), f = t ? a.default.Messages.CONSOLE_PRECONNECT_TITLE_WAITING : a.default.Messages.PS_PRECONNECT_TITLE, P = t ? a.default.Messages.PS_PRECONNECT_BODY_WAITING : a.default.Messages.PS_PRECONNECT_BODY;
  return (0, i.jsx)(o.TwoWayLinkPreConnect, {
    platformType: n,
    isWaitingForConnection: t,
    onWaitingForConnection: d,
    expectedCallbackState: u,
    onAuthToken: C,
    onError: c,
    onClose: T,
    img: S,
    title: f,
    body: P,
    redirectDestination: s.PLAYSTATION_LINK_DEST_ORIGIN
  })
}