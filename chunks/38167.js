"use strict";
t.r(n), t.d(n, {
  PlayStationLinkLanding: function() {
    return T
  }
});
var i = t("37983");
t("884691");
var o = t("38828"),
  s = t("157357"),
  a = t("701909"),
  r = t("634644"),
  l = t("106390"),
  d = t("49111"),
  u = t("782340"),
  C = t("823286");

function c() {
  let e = [u.default.Messages.PS_VALUE_PROP_VOICE, u.default.Messages.PS_VALUE_PROP_GAME],
    n = [u.default.Messages.PS_VALUE_PROP_GAME];
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.ValuePropContainer, {
      children: (0, i.jsx)(l.BulletedValueProp, {
        icon: (0, i.jsx)(s.default, {}),
        title: u.default.Messages.PS5,
        bulletPoints: e
      })
    }), (0, i.jsx)(l.ValuePropContainer, {
      children: (0, i.jsx)(l.BulletedValueProp, {
        icon: (0, i.jsx)(o.default, {}),
        title: u.default.Messages.PS4,
        bulletPoints: n
      })
    })]
  })
}

function T(e) {
  let {
    platformType: n,
    onContinue: t,
    onClose: o
  } = e;
  return (0, i.jsx)(r.TwoWayLinkLanding, {
    platformType: n,
    headerConnect: u.default.Messages.CONNECT_PS_LANDING_TITLE,
    headerReconnect: u.default.Messages.RECONNECT_PS_LANDING_TITLE,
    body: u.default.Messages.CONNECT_PS_LANDING_BODY,
    onClose: o,
    onContinue: t,
    img: (0, i.jsx)("img", {
      src: C,
      width: 230,
      height: 138,
      alt: ""
    }),
    valueProps: (0, i.jsx)(c, {}),
    learnMoreLink: a.default.getArticleURL(d.HelpdeskArticles.PS_CONNECTION)
  })
}