"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("77078"),
  i = s("290381"),
  r = s("812204"),
  u = s("685665"),
  o = s("594098"),
  d = s("599110"),
  c = s("830648"),
  _ = s("627474"),
  E = s("835618"),
  I = s("554083"),
  T = s("49111"),
  f = s("137537"),
  S = s("679324"),
  R = () => {
    let e = n.useRef(null),
      {
        AnalyticsLocationProvider: t,
        analyticsLocations: s
      } = (0, u.default)(r.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
      [R, m] = n.useState(!1);
    return (0, a.jsx)(l.AdvancedScrollerAuto, {
      className: f.mainPageScroller,
      ref: e,
      children: (0, a.jsx)("div", {
        className: f.container,
        children: (0, a.jsxs)(t, {
          children: [(0, a.jsx)(I.default, {
            className: f.heroHeading
          }), (0, a.jsx)(_.default, {
            variant: _.PerksDiscoverabilityVariants.WHATS_NEW,
            className: f.whatsNew,
            noBackground: !0,
            leftAlignHeaders: !0
          }), (0, a.jsx)(_.default, {
            className: f.perksDiscoverability,
            noBackground: !0,
            leftAlignHeaders: !0
          }), (0, a.jsx)(c.default, {
            className: f.perksCards,
            isSubscriberNitroHome: !0
          }), (0, a.jsx)(E.default, {
            className: f.giftNitro
          }), (0, a.jsx)("div", {
            className: f.footerSpacing
          }), (0, a.jsx)(i.VisibilitySensor, {
            onChange: e => {
              e && !R && (d.default.track(T.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                location_stack: s
              }), m(!0))
            },
            children: (0, a.jsx)("div", {
              className: f.bottomOfPageVisibilitySensor
            })
          }), (0, a.jsx)(o.default, {
            src: S,
            className: f.bottomIllustration,
            width: 112,
            height: 85,
            zoomable: !1
          })]
        })
      })
    })
  }