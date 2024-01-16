"use strict";
n.r(t), n.d(t, {
  HeroImage: function() {
    return O
  },
  default: function() {
    return L
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("627445"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("834897"),
  d = n("183137"),
  c = n("132349"),
  f = n("845579"),
  m = n("26989"),
  E = n("697218"),
  _ = n("476263"),
  h = n("191814"),
  p = n("246053"),
  I = n("58608"),
  T = n("158998"),
  g = n("866190"),
  C = n("662960"),
  S = n("634388"),
  A = n("893399"),
  N = n("744917"),
  M = n("782340"),
  v = n("347152");

function x(e) {
  let {
    onClick: t
  } = e;
  return (0, a.jsxs)(o.Clickable, {
    onClick: t,
    className: v.showMoreButton,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "header-primary",
      children: M.default.Messages.GUILD_STORE_HERO_SHOW_MORE_DESCRIPTION_LABEL
    }), (0, a.jsx)(h.default, {
      size: 4,
      horizontal: !0
    }), (0, a.jsx)(p.default, {
      direction: p.default.Directions.RIGHT,
      className: v.showMoreArrow
    })]
  })
}

function O(e) {
  let {
    coverImageAsset: t,
    isPreview: n = !1
  } = e, s = f.GifAutoPlay.useSetting(), l = (0, g.useIsWindowFocused)(), i = l && s, [r, o] = (0, c.default)(t, i), u = i ? (0, a.jsx)(I.default, {
    autoPlay: !0,
    loop: !0,
    className: v.coverImage,
    width: 655,
    poster: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.png"),
    src: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.mov")
  }) : (0, a.jsx)("img", {
    src: (0, d.getAssetCDNUrl)("server_products/storefront/default-header.png"),
    alt: "",
    className: v.coverImage
  });
  return (0, a.jsx)("div", {
    ref: r,
    className: v.coverImageContainer,
    children: null == o || n ? u : (0, a.jsx)("img", {
      src: o,
      alt: "",
      className: v.coverImage
    })
  })
}

function L(e) {
  var t, n, l;
  let {
    guild: c,
    subscriptionsSettings: f
  } = e, p = c.id;
  let {
    nickname: I,
    nickcolor: g
  } = (l = p, (0, r.useStateFromStoresObject)([m.default, E.default], () => {
    var e, t;
    let n = E.default.getCurrentUser();
    i(null != n, "user cannot be null");
    let a = m.default.getMember(l, n.id);
    return {
      nickname: null !== (e = null == a ? void 0 : a.nick) && void 0 !== e ? e : T.default.getName(n),
      nickcolor: null !== (t = null == a ? void 0 : a.colorString) && void 0 !== t ? t : void 0
    }
  }, [l])), {
    isTruncated: L,
    ExpandableTextContainer: R
  } = (0, C.useExpandableTextContainer)(), P = (null !== (n = null == f ? void 0 : null === (t = f.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0, [y, D] = s.useState(1), j = (0, u.default)("(max-width: ".concat(v.twoColumnWidth, ")")), {
    selectedTab: U,
    isPhantomPreview: b
  } = (0, S.useGuildShopDisplayContext)(), G = U === A.GuildShopTab.GUILD_PRODUCTS_PREVIEW ? M.default.Messages.GUILD_STORE_HERO_PREVIEW_TAB_DESCRIPTION : M.default.Messages.GUILD_STORE_HERO_PREVIEW_PAGE_DESCRIPTION, B = P ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(R, {
      lineClamp: j || 2 === y ? 2 : 3,
      children: (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-normal",
        children: null == f ? void 0 : f.description
      })
    }), L && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(h.default, {
        size: 4
      }), (0, a.jsx)(x, {
        onClick: () => (0, N.default)({
          guildId: p
        })
      })]
    })]
  }) : (0, a.jsx)(o.Text, {
    variant: "text-sm/normal",
    color: "text-normal",
    children: b ? G : M.default.Messages.GUILD_STORE_HERO_DEFAULT_DESCRIPTION
  });
  return (0, a.jsxs)("div", {
    className: v.container,
    children: [(0, a.jsxs)("div", {
      className: v.infoContainer,
      children: [(0, a.jsx)("div", {
        children: (0, a.jsx)(_.default, {
          guild: c,
          size: _.default.Sizes.LARGER,
          iconSrc: null == c.icon || b ? (0, d.getAssetCDNUrl)("server_products/storefront/default-guild-icon.jpg") : void 0
        })
      }), (0, a.jsx)(h.default, {
        size: 16,
        horizontal: !0
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)("div", {
          ref: e => {
            null != e && e.clientHeight > 30 && D(2)
          },
          children: (0, a.jsx)(o.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary",
            lineClamp: 2,
            children: b ? M.default.Messages.GUILD_STORE_HERO_PREVIEW_TITLE : M.default.Messages.GUILD_STORE_HERO_TITLE.format({
              guildName: c.name
            })
          })
        }), (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(h.default, {
            size: 8
          }), (0, a.jsx)(o.Text, {
            variant: "text-md/normal",
            color: "text-normal",
            children: M.default.Messages.GUILD_STORE_HERO_DESCRIPTION_GREETING.format({
              username: I,
              usernameHook: function(e, t) {
                return (0, a.jsx)("span", {
                  style: {
                    color: g
                  },
                  children: e
                }, t)
              }
            })
          }), (0, a.jsx)(h.default, {
            size: 9
          }), B]
        })]
      })]
    }), (0, a.jsx)(O, {
      coverImageAsset: null == f ? void 0 : f.cover_image_asset,
      isPreview: b
    })]
  })
}