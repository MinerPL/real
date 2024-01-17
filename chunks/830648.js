"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("65597"),
  u = s("77078"),
  o = s("206230"),
  d = s("812204"),
  c = s("685665"),
  _ = s("516322"),
  E = s("441413"),
  I = s("238956"),
  T = s("837899"),
  f = s("425190"),
  S = s("599110"),
  R = s("331358"),
  m = s("49111"),
  p = s("782340"),
  N = s("305224");
let A = e => {
    let {
      isShowingAll: t,
      onClick: s
    } = e;
    return (0, a.jsxs)(u.Clickable, {
      onClick: s,
      className: N.customButton,
      children: [t ? p.default.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : p.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, t ? (0, a.jsx)(f.default, {
        className: N.arrow
      }) : (0, a.jsx)(T.default, {
        className: N.arrow
      })]
    })
  },
  g = e => {
    let {
      title: t,
      description: s,
      className: n,
      imageSource: l,
      imageClassName: r,
      titleBadge: o,
      isNew: I = !1,
      isEarlyAccess: T = !1
    } = e, {
      AnalyticsLocationProvider: f,
      analyticsLocations: S
    } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD);
    return (0, a.jsx)(f, {
      children: (0, a.jsxs)("div", {
        className: i(N.perkCard, n),
        children: [I ? (0, a.jsx)(E.default, {
          className: N.perkCardNewBadge,
          shouldInheritBackgroundColor: !0,
          shouldInheritTextColor: !0
        }) : null, T ? (0, a.jsx)(_.default, {
          className: N.perkCardEarlyAccessBadge
        }) : null, (0, a.jsx)("img", {
          src: l,
          alt: "",
          className: i(r, N.perksCardArt)
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsxs)(u.Heading, {
            variant: "heading-lg/extrabold",
            className: N.perkCardHeading,
            children: [t, " ", o]
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            className: N.perkCardDescription,
            children: "function" == typeof s ? s(S) : s
          })]
        })]
      })
    })
  };
var P = e => {
  let {
    className: t,
    isSubscriberNitroHome: s = !1
  } = e, [l, d] = n.useState(!1), _ = (0, R.usePerkCards)({
    styles: N
  }), E = (0, r.default)([o.default], () => o.default.useReducedMotion), {
    analyticsLocations: T
  } = (0, c.default)(), f = (0, I.useIsRemixANitroPerk)(), P = [_.emoji, _.streaming, _.upload, _.customAppIcons, _.soundboard, f ? _.remix : _.videoBackground, _.superReactions, _.stickersPerkDiscoverability, _.badgeAlt];
  return (0, a.jsxs)("div", {
    className: i(N.perksContainer, t, {
      [N.partiallyHidden]: s && !l,
      [N.subscriberNitroHome]: s,
      [N.reducedMotion]: E
    }),
    children: [(0, a.jsx)(u.Heading, {
      variant: "heading-xxl/extrabold",
      className: N.perksTitle,
      children: s ? p.default.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : p.default.Messages.PREMIUM_MARKETING_PERKS_TITLE
    }), (0, a.jsx)("div", {
      className: i(N.perkCardContainer, {
        [N.perkCardContainerExpanded]: l
      }),
      children: P.map(e => null != e && (0, a.jsx)(g, {
        ...e
      }, e.title))
    }), s && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: i({
          [N.sizeGizmo]: !l,
          [N.sizeGizmoExpanded]: l
        }),
        children: (0, a.jsx)(A, {
          onClick: () => {
            S.default.track(m.AnalyticEvents.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
              location_stack: T,
              was_expanded: l
            }), d(!l)
          },
          isShowingAll: l
        })
      }), (0, a.jsx)("div", {
        className: i(N.cover, {
          [N.hidden]: l
        })
      })]
    })]
  })
}