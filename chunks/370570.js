"use strict";
l.r(t), l.d(t, {
  default: function() {
    return T
  }
}), l("222007"), l("424973"), l("313619"), l("654714"), l("287168"), l("956660");
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("819855"),
  c = l("77078"),
  o = l("340616"),
  d = l("841098"),
  u = l("376556"),
  p = l("83900"),
  m = l("45029"),
  _ = l("599110"),
  f = l("599994"),
  h = l("598981"),
  C = l("519359"),
  g = l("675945"),
  I = l("49111"),
  A = l("782340"),
  E = l("478318");
let v = A.default.getAvailableLocales();

function x(e) {
  var t, l, a;
  let {
    onClick: n,
    url: s,
    children: c
  } = e, o = (0, d.default)(), m = u.default.getByUrl(s), _ = (0, r.isThemeDark)(o) ? null == m ? void 0 : null === (t = m.icon) || void 0 === t ? void 0 : t.darkSVG : null == m ? void 0 : null === (l = m.icon) || void 0 === l ? void 0 : l.lightSVG;
  return (0, i.jsx)(R, {
    icon: void 0 === _ ? p.default : void 0,
    imageSrc: _,
    onClick: n,
    url: s,
    type: null !== (a = null == m ? void 0 : m.name) && void 0 !== a ? a : "website",
    children: c
  })
}

function R(e) {
  let {
    icon: t,
    imageSrc: l,
    iconColor: a,
    url: n,
    type: r,
    children: d,
    onClick: u
  } = e, p = (0, h.default)(), m = null;
  null != t ? m = (0, i.jsx)(t, {
    className: E.listIcon,
    color: a,
    width: 20,
    height: 20
  }) : null != l && (m = (0, i.jsx)("img", {
    className: E.listImage,
    src: l,
    alt: ""
  }));
  let _ = (0, i.jsxs)(i.Fragment, {
    children: [m, (0, i.jsx)(c.Text, {
      className: E.listText,
      variant: "text-md/normal",
      selectable: !0,
      children: d
    })]
  });
  return (0, i.jsx)(o.default, {
    href: n,
    className: s(E.listItem, E.linkItem),
    onClick: () => (u(n, r), !1),
    trusted: !p,
    useDefaultUnderlineStyles: !1,
    children: _
  })
}

function T(e) {
  var t, l, n;
  let {
    application: r,
    guildId: o,
    className: d,
    onViewCategory: u,
    onClickGuildWidget: h
  } = e, [T, N] = a.useState(null), P = [], y = null !== (l = null == r ? void 0 : null === (t = r.directory_entry) || void 0 === t ? void 0 : t.external_urls) && void 0 !== l ? l : [];
  a.useEffect(() => {
    var e;
    if ((null === (e = r.directory_entry) || void 0 === e ? void 0 : e.supported_locales) !== void 0) {
      let e = new Set(r.directory_entry.supported_locales),
        t = v.filter(t => e.has(t.value));
      N(t.map(e => e.localizedName))
    }
  }, [r.directory_entry]);
  let j = (e, t) => {
    _.default.track(I.AnalyticEvents.APP_DIRECTORY_APPLICATION_EXTERNAL_LINK_CLICKED, {
      application_id: r.id,
      guild_id: o,
      type: t,
      url: e
    })
  };
  return null != r.categories && r.categories.length > 0 && P.push((0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_CATEGORIES_HEADING
    }), (0, i.jsx)("div", {
      className: E.categories,
      children: (null !== (n = r.categories) && void 0 !== n ? n : []).map(e => {
        let t = new URLSearchParams;
        return t.set("category_id", e.id.toString()), (0, i.jsx)(f.default, {
          href: "".concat(I.Routes.APPLICATION_DIRECTORY_SEARCH, "?").concat(t),
          children: (0, i.jsx)(c.Clickable, {
            className: E.category,
            onClick: () => u(e),
            children: (0, i.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "header-primary",
              children: e.name
            })
          })
        }, e.id)
      })
    })]
  })), null != T && T.length > 0 && P.push((0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_LANGUAGES_HEADING
    }), (0, i.jsx)(g.default, {
      supportedLanguages: T
    })]
  })), (null != r.terms_of_service_url || null != r.privacy_policy_url || y.length > 0) && P.push((0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_LINKS_HEADING
    }), y.map((e, t) => (0, i.jsx)(x, {
      url: e.url,
      onClick: j,
      children: e.name
    }, t)), null != r.terms_of_service_url ? (0, i.jsx)(R, {
      icon: p.default,
      onClick: j,
      url: r.terms_of_service_url,
      type: "tos",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_TERMS_LINK
    }) : null, null != r.privacy_policy_url ? (0, i.jsx)(R, {
      icon: m.default,
      onClick: j,
      url: r.privacy_policy_url,
      type: "policy",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_PRIVACY_LINK
    }) : null]
  })), null != r.guild && r.guild.features.includes(I.GuildFeatures.DISCOVERABLE) && P.push((0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Heading, {
      className: E.sectionHeader,
      variant: "eyebrow",
      children: A.default.Messages.APP_DIRECTORY_PROFILE_SERVER_HEADING
    }), (0, i.jsx)(C.default, {
      guild: r.guild,
      onClick: h
    })]
  })), (0, i.jsx)("div", {
    className: s(E.sidebar, d),
    children: P.length > 0 ? (0, i.jsx)(i.Fragment, {
      children: P.map((e, t) => (0, i.jsx)("div", {
        className: E.section,
        children: e
      }, t))
    }) : null
  })
}