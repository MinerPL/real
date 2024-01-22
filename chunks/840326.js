"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  r = s.n(l),
  i = s("77078"),
  u = s("290381"),
  o = s("812204"),
  d = s("685665"),
  c = s("594098"),
  _ = s("599110"),
  E = s("706922"),
  I = s("322507"),
  f = s("941797"),
  T = s("830648"),
  S = s("627474"),
  R = s("835618"),
  m = s("554083"),
  p = s("628550"),
  N = s("49111"),
  g = s("782340"),
  A = s("137537"),
  P = s("679324"),
  C = () => {
    let e = n.useRef(null),
      t = n.useRef(null),
      [s, l] = n.useState(!1),
      C = Object.values((0, p.default)()).filter(e => !1 !== e.canReveal && "upcomingDropUntimed" !== e.name),
      {
        enabled: O
      } = (0, E.default)(),
      {
        AnalyticsLocationProvider: M,
        analyticsLocations: h
      } = (0, d.default)(o.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
      [L, x] = n.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(i.AdvancedScrollerAuto, {
        className: A.mainPageScroller,
        ref: e,
        children: (0, a.jsx)("div", {
          className: A.container,
          children: (0, a.jsxs)(M, {
            children: [(0, a.jsx)(m.default, {
              className: A.heroHeading
            }), (0, a.jsx)(S.default, {
              variant: S.PerksDiscoverabilityVariants.WHATS_NEW,
              className: A.whatsNew,
              noBackground: !0,
              leftAlignHeaders: !0
            }), O ? (0, a.jsx)("button", {
              onClick: () => l(!0),
              children: "Show All Perks"
            }) : null, (0, a.jsx)(S.default, {
              className: A.perksDiscoverability,
              noBackground: !0,
              leftAlignHeaders: !0
            }), (0, a.jsx)(T.default, {
              className: A.perksCards,
              isSubscriberNitroHome: !0
            }), (0, a.jsx)(R.default, {
              className: A.giftNitro
            }), (0, a.jsx)("div", {
              className: A.footerSpacing
            }), (0, a.jsx)(u.VisibilitySensor, {
              onChange: e => {
                e && !L && (_.default.track(N.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                  location_stack: h
                }), x(!0))
              },
              children: (0, a.jsx)("div", {
                className: A.bottomOfPageVisibilitySensor
              })
            }), (0, a.jsx)(c.default, {
              src: P,
              className: A.bottomIllustration,
              width: 112,
              height: 85,
              zoomable: !1
            })]
          })
        })
      }), O ? (0, a.jsx)(i.AdvancedScrollerAuto, {
        className: r(A.allPerksScroller, {
          [A.open]: s
        }),
        ref: t,
        children: (0, a.jsx)("div", {
          className: A.container,
          children: (0, a.jsxs)(M, {
            children: [(0, a.jsx)(I.default, {
              className: A.heroHeading,
              onBackClick: () => l(!1)
            }), (0, a.jsxs)("div", {
              className: A.column,
              children: [(0, a.jsx)(i.Heading, {
                variant: "heading-xxl/extrabold",
                color: "header-primary",
                className: A.heading,
                children: g.default.Messages.MARKETING_PAGE_CAROUSEL_TITLE
              }), (0, a.jsx)(f.default, {
                className: A.cardCarousel,
                cards: C
              }), (0, a.jsx)(i.Heading, {
                variant: "heading-xxl/extrabold",
                color: "header-primary",
                className: A.heading,
                children: g.default.Messages.NITRO_HOME_ENJOY_UPDATED_DISCORD
              }), (0, a.jsx)(f.default, {
                className: A.cardCarousel,
                cards: C
              }), (0, a.jsx)(i.Heading, {
                variant: "heading-xxl/extrabold",
                color: "header-primary",
                className: A.heading,
                children: g.default.Messages.NITRO_HOME_SHOW_UP_HOW_YOU_WANT
              }), (0, a.jsx)(f.default, {
                className: A.cardCarousel,
                cards: C
              })]
            }), (0, a.jsx)("div", {
              className: A.footerSpacing
            }), (0, a.jsx)(u.VisibilitySensor, {
              onChange: e => {
                e && !L && (_.default.track(N.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                  location_stack: h
                }), x(!0))
              },
              children: (0, a.jsx)("div", {
                className: A.bottomOfPageVisibilitySensor
              })
            }), (0, a.jsx)(c.default, {
              src: P,
              className: A.bottomIllustration,
              width: 112,
              height: 85,
              zoomable: !1
            })]
          })
        })
      }) : null]
    })
  }