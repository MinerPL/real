"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
});
var a, n = s("37983"),
  l = s("884691"),
  i = s("414456"),
  r = s.n(i),
  u = s("888400"),
  o = s("943232"),
  d = s("36694"),
  c = s("76638"),
  _ = s("216422"),
  E = s("49111"),
  I = s("782340"),
  T = s("822304");
let f = e => {
    let {
      IconComponent: t,
      className: s
    } = e;
    return (0, n.jsx)("div", {
      className: r(T.iconCircle, s),
      children: (0, n.jsx)(t, {
        className: T.icon
      })
    })
  },
  S = e => {
    let {
      circle: t,
      smallHeader: s,
      text: a,
      className: l
    } = e;
    return (0, n.jsxs)("div", {
      className: r(T.recommendationReason, l),
      children: [t, (0, n.jsxs)("div", {
        className: T.description,
        children: [null != s ? (0, n.jsx)("div", {
          className: T.smallHeader,
          children: s
        }) : null, (0, n.jsx)("div", {
          className: T.text,
          children: a
        })]
      })]
    })
  };
a = class extends l.Component {
  render() {
    let {
      reason: e,
      className: t
    } = this.props;
    if (e.type === E.StoreRecommendationTypes.RECENT_RELEASE_DATE) return (0, n.jsx)(S, {
      className: t,
      circle: (0, n.jsx)(f, {
        IconComponent: o.default
      }),
      smallHeader: I.default.Messages.APPLICATION_STORE_NEW_RELEASE,
      text: (0, u.dateFormat)(e.releaseDate, "LL")
    });
    if (e.type === E.StoreRecommendationTypes.RELEASE_DATE) return (0, n.jsx)(S, {
      className: t,
      circle: (0, n.jsx)(f, {
        IconComponent: o.default
      }),
      smallHeader: I.default.Messages.APPLICATION_STORE_DETAILS_RELEASE_DATE,
      text: (0, u.dateFormat)(e.releaseDate, "LL")
    });
    if (e.type === E.StoreRecommendationTypes.EARLY_ACCESS) return null != e.releaseDate ? (0, n.jsx)(S, {
      className: t,
      circle: (0, n.jsx)(f, {
        IconComponent: c.default,
        className: T.earlyAccess
      }),
      smallHeader: I.default.Messages.APPLICATION_STORE_EARLY_ACCESS,
      text: (0, u.dateFormat)(e.releaseDate, "LL")
    }) : (0, n.jsx)(S, {
      className: t,
      circle: (0, n.jsx)(f, {
        IconComponent: c.default,
        className: T.earlyAccess
      }),
      text: I.default.Messages.APPLICATION_STORE_EARLY_ACCESS
    });
    return e.type === E.StoreRecommendationTypes.FLAVOR_TEXT ? (0, n.jsx)(S, {
      circle: (0, n.jsx)(f, {
        IconComponent: d.default
      }),
      text: e.flavorText,
      className: t
    }) : e.type === E.StoreRecommendationTypes.HAS_FREE_PREMIUM_CONTENT ? (0, n.jsx)(S, {
      className: t,
      circle: (0, n.jsx)(f, {
        IconComponent: _.default,
        className: T.premiumCircle
      }),
      text: I.default.Messages.APPLICATION_STORE_FREE_PREMIUM_CONTENT
    }) : null
  }
}