"use strict";
a.r(e), a.d(e, {
  BirthdayKitBash: function() {
    return Z
  }
}), a("222007");
var t = a("37983"),
  C = a("884691"),
  s = a("414456"),
  l = a.n(s),
  i = a("446674"),
  n = a("77078"),
  r = a("206230"),
  H = a("812204"),
  V = a("685665"),
  d = a("599110"),
  c = a("243244"),
  o = a("371316"),
  M = a("954016"),
  u = a("49111"),
  E = a("782340"),
  I = a("592618"),
  _ = a("226363"),
  T = a("17077");

function Z() {
  var L, e;
  let a = (0, i.useStateFromStores)([r.default], () => r.default.useReducedMotion),
    [s] = C.useState(Math.random()),
    Z = (0, c.default)(null, !1),
    [, f] = null !== (e = Z.find(L => {
      let [e] = L;
      return e === M.ActivityAccessStatus.UNLOCKED
    })) && void 0 !== e ? e : [void 0, []],
    {
      analyticsLocations: m
    } = (0, V.default)(H.default.ACTIVITIES_IM_FEELING_LUCKY),
    h = Math.floor(s * f.length),
    D = null === (L = f[h]) || void 0 === L ? void 0 : L.application.id,
    N = null != D && "" !== D ? u.Routes.ACTIVITY_DETAILS(D) : void 0;
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)("img", {
      src: _,
      alt: E.default.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_KIT_BASH_ALT,
      className: I.kitBash
    }), void 0 !== N ? (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsxs)(o.ClickableLink, {
        className: I.luckyButton,
        to: {
          pathname: N,
          state: {
            analyticsLocations: m
          }
        },
        onClick: () => d.default.track(u.AnalyticEvents.ACTIVITIES_PAGE_FEELING_LUCKY_CLICKED, {
          application_id: D
        }),
        children: [(0, t.jsx)(n.Heading, {
          variant: "heading-lg/bold",
          children: E.default.Messages.EMBEDDED_ACTIVITIES_FEELING_LUCKY_TITLE
        }), (0, t.jsx)(n.Heading, {
          variant: "heading-sm/bold",
          children: E.default.Messages.EMBEDDED_ACTIVITIES_FEELING_LUCKY_DESCRIPTION
        })]
      }), (0, t.jsx)("img", {
        src: T,
        className: l(I.wumpus, {
          [I.wumpusReducedMotion]: a
        }),
        alt: E.default.Messages.EMBEDDED_ACTIVITIES_WUMPUS_PEEKING_ALT
      })]
    }) : null]
  })
}