"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var s = n("151426"),
  i = n("812204"),
  l = n("685665"),
  r = n("369964"),
  o = n("393414"),
  u = n("21526"),
  d = n("49111"),
  c = n("782340"),
  f = n("608284"),
  E = n("811982"),
  _ = () => {
    let {
      analyticsLocations: e
    } = (0, l.default)(i.default.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP);
    return (0, a.jsx)(r.default, {
      dismissibleContent: s.DismissibleContent.COLLECTIBLES_GIFTING_COACHMARK,
      inlineArt: !0,
      tryItText: c.default.Messages.CHECK_IT_OUT,
      onTryFeature: () => {
        (0, o.transitionTo)(d.Routes.COLLECTIBLES_SHOP), (0, u.openCollectiblesShop)({
          openInLayer: !1,
          analyticsLocations: e,
          analyticsSource: i.default.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP
        })
      },
      header: c.default.Messages.COLLECTIBLES_GIFT_COACHMARK_HEADING,
      body: c.default.Messages.COLLECTIBLES_GIFT_COACHMARK_DESC,
      dismissText: c.default.Messages.EDUCATION_NEW_FEATURE_DISMISS,
      position: "right",
      align: "top",
      art: (0, a.jsx)("img", {
        className: f.art,
        src: E,
        alt: ""
      })
    })
  }