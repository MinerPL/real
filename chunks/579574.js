"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var o = n("37983");
n("884691");
var s = n("855670"),
  i = n("701909"),
  r = n("634644"),
  a = n("106390"),
  l = n("49111"),
  d = n("782340"),
  C = n("140413");

function u() {
  return (0, o.jsx)(a.ValuePropContainer, {
    children: (0, o.jsx)(a.ValueProp, {
      text: d.default.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
      children: (0, o.jsx)(s.default, {})
    })
  })
}

function c(e) {
  let {
    onContinue: t,
    onClose: n
  } = e, s = i.default.getArticleURL(l.HelpdeskArticles.CRUNCHYROLL_CONNECTION);
  return (0, o.jsx)(r.TwoWayLinkLanding, {
    platformType: l.PlatformTypes.CRUNCHYROLL,
    headerConnect: d.default.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
    body: d.default.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
    learnMoreLink: s,
    onClose: n,
    onContinue: t,
    img: (0, o.jsx)("img", {
      src: C,
      width: 234,
      height: 152,
      alt: ""
    }),
    valueProps: (0, o.jsx)(u, {})
  })
}