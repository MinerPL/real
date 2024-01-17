"use strict";
n.r(t), n.d(t, {
  HeroImage: function() {
    return L
  },
  default: function() {
    return v
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("627445"),
  i = n.n(a),
  r = n("446674"),
  o = n("77078"),
  u = n("834897"),
  d = n("183137"),
  c = n("132349"),
  f = n("845579"),
  E = n("26989"),
  _ = n("697218"),
  T = n("476263"),
  I = n("191814"),
  m = n("246053"),
  N = n("58608"),
  p = n("158998"),
  S = n("866190"),
  A = n("662960"),
  C = n("634388"),
  h = n("893399"),
  g = n("744917"),
  M = n("782340"),
  O = n("347152");

function R(e) {
  let {
    onClick: t
  } = e;
  return (0, s.jsxs)(o.Clickable, {
    onClick: t,
    className: O.showMoreButton,
    children: [(0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "header-primary",
      children: M.default.Messages.GUILD_STORE_HERO_SHOW_MORE_DESCRIPTION_LABEL
    }), (0, s.jsx)(I.default, {
      size: 4,
      horizontal: !0
    }), (0, s.jsx)(m.default, {
      direction: m.default.Directions.RIGHT,
      className: O.showMoreArrow
    })]
  })
}

function L(e) {
  let {
    coverImageAsset: t,
    isPreview: n = !1
  } = e, l = f.GifAutoPlay.useSetting(), a = (0, S.useIsWindowFocused)(), i = a && l, [r, o] = (0, c.default)(t, i), u = i ? (0, s.jsx)(N.default, {
    autoPlay: !0,
    loop: !0,
    className: O.coverImage,
    width: 655,
    poster: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.png"),
    src: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.mov")
  }) : (0, s.jsx)("img", {
    src: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.png"),
    alt: "",
    className: O.coverImage
  });
  return (0, s.jsx)("div", {
    ref: r,
    className: O.coverImageContainer,
    children: null == o || n ? u : (0, s.jsx)("img", {
      src: o,
      alt: "",
      className: O.coverImage
    })
  })
}

function v(e) {
  var t, n, a;
  let {
    guild: c,
    subscriptionsSettings: f
  } = e, m = c.id;
  let {
    nickname: N,
    nickcolor: S
  } = (a = m, (0, r.useStateFromStoresObject)([E.default, _.default], () => {
    var e, t;
    let n = _.default.getCurrentUser();
    i(null != n, "user cannot be null");
    let s = E.default.getMember(a, n.id);
    return {
      nickname: null !== (e = null == s ? void 0 : s.nick) && void 0 !== e ? e : p.default.getName(n),
      nickcolor: null !== (t = null == s ? void 0 : s.colorString) && void 0 !== t ? t : void 0
    }
  }, [a])), {
    isTruncated: v,
    ExpandableTextContainer: P
  } = (0, A.useExpandableTextContainer)(), D = (null !== (n = null == f ? void 0 : null === (t = f.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0, [x, y] = l.useState(1), U = (0, u.default)("(max-width: ".concat(O.twoColumnWidth, ")")), {
    selectedTab: j,
    isPhantomPreview: b
  } = (0, C.useGuildShopDisplayContext)(), G = j === h.GuildShopTab.GUILD_PRODUCTS_PREVIEW ? M.default.Messages.GUILD_STORE_HERO_PREVIEW_TAB_DESCRIPTION : M.default.Messages.GUILD_STORE_HERO_PREVIEW_PAGE_DESCRIPTION, B = D ? (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(P, {
      lineClamp: U || 2 === x ? 2 : 3,
      children: (0, s.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        children: null == f ? void 0 : f.description
      })
    }), v && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(I.default, {
        size: 4
      }), (0, s.jsx)(R, {
        onClick: () => (0, g.default)({
          guildId: m
        })
      })]
    })]
  }) : (0, s.jsx)(o.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: b ? G : M.default.Messages.GUILD_STORE_HERO_DEFAULT_DESCRIPTION
  });
  return (0, s.jsxs)("div", {
    className: O.container,
    children: [(0, s.jsxs)("div", {
      className: O.infoContainer,
      children: [(0, s.jsx)("div", {
        children: (0, s.jsx)(T.default, {
          guild: c,
          size: T.default.Sizes.LARGER,
          iconSrc: null == c.icon || b ? (0, d.getAssetCDNUrl)("server_products/storefront/default-guild-icon.jpg") : void 0
        })
      }), (0, s.jsx)(I.default, {
        size: 16,
        horizontal: !0
      }), (0, s.jsxs)("div", {
        children: [(0, s.jsx)("div", {
          ref: e => {
            null != e && e.clientHeight > 30 && y(2)
          },
          children: (0, s.jsx)(o.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            lineClamp: 2,
            children: b ? M.default.Messages.GUILD_STORE_HERO_PREVIEW_TITLE : M.default.Messages.GUILD_STORE_HERO_TITLE.format({
              guildName: c.name
            })
          })
        }), (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(I.default, {
            size: 8
          }), (0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: M.default.Messages.GUILD_STORE_HERO_DESCRIPTION_GREETING.format({
              username: N,
              usernameHook: function(e, t) {
                return (0, s.jsx)("span", {
                  style: {
                    color: S
                  },
                  children: e
                }, t)
              }
            })
          }), (0, s.jsx)(I.default, {
            size: 9
          }), B]
        })]
      })]
    }), (0, s.jsx)(L, {
      coverImageAsset: null == f ? void 0 : f.cover_image_asset,
      isPreview: b
    })]
  })
}