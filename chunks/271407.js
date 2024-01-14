"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("669491"),
  d = s("77078"),
  u = s("347924"),
  c = s("597517"),
  E = s("45395"),
  _ = s("957255"),
  T = s("756609"),
  I = s("68238"),
  S = s("240292"),
  N = s("701909"),
  g = s("49111"),
  f = s("533613"),
  A = s("782340"),
  L = s("430364"),
  m = s("175717"),
  C = s("869917"),
  O = s("133765"),
  h = s("138131"),
  R = s("52846"),
  D = s("656011"),
  M = s("845929"),
  G = s("144582");
let x = () => [{
    icon: S.default,
    color: o.default.unsafe_rawColors.GREEN_360.css,
    header: A.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_DISCOVERY_HEADER,
    body: A.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_DISCOVERY_BODY.format({
      featureHook: (e, t) => (0, a.jsx)("strong", {
        className: L.featuredText,
        children: e
      }, t)
    })
  }, {
    icon: T.default,
    color: o.default.unsafe_rawColors.PARTNER.css,
    header: A.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_HEADER,
    body: A.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_BODY.format({
      infoHook: () => (0, a.jsx)(d.Tooltip, {
        text: A.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_TOOLTIP,
        "aria-label": A.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_ANALYTICS_TOOLTIP,
        children: e => (0, a.jsx)(I.default, {
          className: L.infoIcon,
          ...e
        })
      }),
      featureHook: (e, t) => (0, a.jsx)("strong", {
        className: L.featuredText,
        children: e
      }, t)
    })
  }, {
    icon: I.default,
    color: o.default.unsafe_rawColors.RED_360.css,
    header: A.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_STAY_INFORMED_HEADER,
    body: A.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_UPSELL_STAY_INFORMED_BODY
  }],
  p = [{
    iconSrc: D,
    name: "Pokemon GO Paris",
    position: [-230, -100]
  }, {
    iconSrc: M,
    name: "Python",
    position: [-180, -100],
    faded: !0,
    rightAlign: !0
  }, {
    iconSrc: h,
    name: "Learn Latin",
    position: [-280, -30],
    faded: !0
  }, {
    iconSrc: R,
    name: "r/leagueoflegends",
    position: [-320, -30],
    rightAlign: !0
  }, {
    iconSrc: G,
    name: "Sneaker Fans",
    position: [-250, 40]
  }, {
    iconSrc: O,
    name: "Hogwarts School",
    position: [-270, 40],
    faded: !0,
    rightAlign: !0
  }],
  U = e => {
    let {
      icon: t,
      color: s,
      size: n = 24,
      header: l,
      body: i
    } = e;
    return (0, a.jsxs)("div", {
      className: L.featureCard,
      children: [(0, a.jsx)("div", {
        className: L.featureIcon,
        children: (0, a.jsx)(t, {
          color: s,
          width: n,
          height: n
        })
      }), (0, a.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        className: L.featureHeader,
        children: l
      }), (0, a.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: i
      })]
    })
  },
  v = e => {
    let {
      iconSrc: t,
      name: s,
      position: n,
      faded: l,
      rightAlign: r,
      imageCoordinates: o
    } = e, u = {
      [r ? "right" : "left"]: o[0] + n[0],
      top: o[1] + n[1]
    };
    return (0, a.jsxs)("div", {
      className: i(L.guildDetails, {
        [L.faded]: l
      }),
      style: u,
      children: [(0, a.jsx)("div", {
        className: L.guildIcon,
        children: (0, a.jsx)("img", {
          alt: "",
          src: t,
          width: 24,
          height: 24
        })
      }), (0, a.jsx)(d.Heading, {
        variant: "heading-deprecated-12/semibold",
        children: s
      })]
    })
  };
var j = e => {
  let {
    guild: t
  } = e, [s, l] = n.useState(0), [i, o] = n.useState(0), [T, I] = n.useState(), S = (0, r.useStateFromStores)([_.default], () => _.default.can(g.Permissions.ADMINISTRATOR, t)), O = (0, u.useInServerBadgingExperiment)(t.id), h = null == T ? void 0 : T.offsetWidth, R = null == T ? void 0 : T.offsetHeight;
  n.useEffect(() => {
    null != h && l(h / 2), null != R && o(R / 2)
  }, [h, R, l, o]), n.useEffect(() => {
    (0, c.hideHotspot)(f.HotspotLocations.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL)
  }, []);
  let D = () => {
      E.default.open()
    },
    M = O ? A.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_BODY_WITH_HELP_ARTICLE.format({
      helpdeskArticle: N.default.getArticleURL(g.HelpdeskArticles.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
    }) : A.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_BODY;
  return (0, a.jsxs)("div", {
    className: L.container,
    children: [(0, a.jsxs)("div", {
      className: L.banner,
      ref: e => I(e),
      children: [p.map(e => (0, a.jsx)(v, {
        ...e,
        imageCoordinates: [s, i]
      }, e.name)), (0, a.jsx)("img", {
        alt: "",
        src: m,
        className: L.image,
        width: 256
      }), (0, a.jsx)("img", {
        alt: "",
        src: C,
        className: L.sparkles
      })]
    }), (0, a.jsx)(d.Heading, {
      variant: "heading-xl/semibold",
      children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_HEADER
    }), (0, a.jsx)(d.Text, {
      color: "header-secondary",
      variant: "text-md/normal",
      className: L.body,
      children: M
    }), (0, a.jsx)(d.Tooltip, {
      text: S ? null : A.default.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
      "aria-label": S ? void 0 : A.default.Messages.GUILD_SETTINGS_COMMUNITY_ADMINISTRATOR_ONLY,
      children: e => (0, a.jsx)(d.Button, {
        onClick: D,
        className: L.button,
        disabled: !S,
        ...e,
        children: A.default.Messages.GET_STARTED
      })
    }), (0, a.jsx)("hr", {
      className: L.separator
    }), (0, a.jsx)(d.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_DETAILS
    }), (0, a.jsx)(d.Text, {
      color: "header-secondary",
      className: L.body,
      variant: "text-sm/normal",
      children: A.default.Messages.GUILD_SETTINGS_COMMUNITY_INTRO_LEARN_MORE.format({
        helpdeskArticle: N.default.getArticleURL(g.HelpdeskArticles.GUILD_COMMUNITY_FEATURE)
      })
    }), (0, a.jsx)("div", {
      className: L.features,
      children: x().map((e, t) => (0, a.jsx)(U, {
        ...e
      }, t))
    })]
  })
}