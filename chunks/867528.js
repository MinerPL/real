"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var s = n("37983");
n("884691");
var o = n("351368"),
  r = n("368121"),
  i = n("701909"),
  a = n("634644"),
  l = n("106390"),
  d = n("49111"),
  c = n("782340"),
  u = n("961141");

function f() {
  return (0, s.jsxs)(l.ValuePropContainer, {
    children: [(0, s.jsx)(l.ValueProp, {
      text: c.default.Messages.CONNECT_XBOX_TRANSFER_VOICE_VALUE_PROP,
      children: (0, s.jsx)(r.default, {})
    }), (0, s.jsx)(l.ValueProp, {
      text: c.default.Messages.CONNECT_XBOX_DISPLAY_GAME_VALUE_PROP,
      children: (0, s.jsx)(o.default, {})
    })]
  })
}

function C(e) {
  let {
    onContinue: t,
    onClose: n
  } = e, o = i.default.getArticleURL(d.HelpdeskArticles.XBOX_CONNECTION);
  return (0, s.jsx)(a.TwoWayLinkLanding, {
    platformType: d.PlatformTypes.XBOX,
    headerConnect: c.default.Messages.CONNECT_XBOX_LANDING_TITLE,
    headerReconnect: c.default.Messages.RECONNECT_XBOX_LANDING_TITLE,
    body: c.default.Messages.CONNECT_XBOX_LANDING_BODY,
    learnMoreLink: o,
    onClose: n,
    onContinue: t,
    img: (0, s.jsx)("img", {
      src: u,
      width: 234,
      height: 152,
      alt: ""
    }),
    valueProps: (0, s.jsx)(f, {})
  })
}