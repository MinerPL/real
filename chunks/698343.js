"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  i = n("151426"),
  l = n("77078"),
  r = n("901582"),
  o = n("812204"),
  u = n("685665"),
  d = n("384997"),
  c = n("911574"),
  f = n("350522"),
  E = n("476765"),
  _ = n("386133"),
  h = n("49111"),
  C = n("782340"),
  I = n("607626");

function T() {
  let {
    AnalyticsLocationProvider: e
  } = (0, u.default)(o.default.ACTIVE_NOW_COLUMN), t = (0, s.useStateFromStores)([f.default], () => f.default.hasConsented(h.Consents.PERSONALIZATION)), n = t ? [] : [i.DismissibleContent.NOW_PLAYING_CONSENT_CARD], T = (0, E.useUID)();
  return (0, a.jsx)(e, {
    children: (0, a.jsx)(r.default, {
      section: h.AnalyticsSections.ACTIVE_NOW_COLUMN,
      children: (0, a.jsx)("aside", {
        className: I.container,
        "aria-labelledby": T,
        children: (0, a.jsxs)(l.Scroller, {
          className: I.scroller,
          children: [(0, a.jsx)(l.Heading, {
            variant: "heading-lg/semibold",
            className: I.header,
            id: T,
            children: C.default.Messages.GAME_FEED_CURRENT_HEADER_TITLE
          }), (0, a.jsx)(d.default, {
            contentTypes: n,
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              if (t === i.DismissibleContent.NOW_PLAYING_CONSENT_CARD) return (0, a.jsx)(c.default, {
                className: I.consentCard,
                markAsDismissed: n
              })
            }
          }), (0, a.jsx)(_.default, {})]
        })
      })
    })
  })
}