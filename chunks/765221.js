"use strict";
r.r(t), r.d(t, {
  default: function() {
    return M
  }
}), r("222007"), r("794252");
var a = r("37983"),
  n = r("884691"),
  i = r("414456"),
  s = r.n(i),
  u = r("506838"),
  l = r("171210"),
  o = r("65597"),
  c = r("77078"),
  d = r("252744"),
  E = r("853987"),
  _ = r("426497"),
  f = r("491232"),
  A = r("743826"),
  m = r("216422"),
  I = r("468759"),
  h = r("600785"),
  T = r("956089"),
  R = r("719923"),
  S = r("643070"),
  C = r("688318"),
  v = r("782340"),
  g = r("654353");
let N = () => 80,
  p = e => {
    let {
      children: t,
      className: r,
      onSelect: n,
      isSelected: i = !1,
      ...u
    } = e;
    return (0, a.jsx)(c.Clickable, {
      className: s(g.decorationGridItem, i ? g.selected : void 0, r),
      ...u,
      onClick: n,
      children: t
    })
  },
  O = e => {
    let {
      user: t,
      avatarDecoration: r,
      innerRef: i,
      section: s,
      isSelected: u = !1,
      ...c
    } = e, A = (0, o.default)([E.default], () => {
      let e = E.default.getProduct(r.skuId);
      return (0, f.isPremiumCollectiblesProduct)(e)
    }), I = (0, o.default)([_.default], () => _.default.isItemViewed(r)), N = R.default.canUseCollectibles(t), O = s === S.Section.PREMIUM_PURCHASE && !N, [M, D] = n.useState(u);
    n.useEffect(() => {
      u && D(!0)
    }, [u]);
    let x = n.useRef(null),
      H = (0, d.default)(null != i ? i : x),
      {
        avatarDecorationSrc: P
      } = (0, C.default)({
        user: t,
        avatarDecorationOverride: r,
        size: 80,
        animateOnHover: !H
      });
    return (0, a.jsxs)(p, {
      className: O ? g.decorationGridItemChurned : void 0,
      innerRef: null != i ? i : x,
      isSelected: u,
      ...c,
      children: [(0, a.jsx)("img", {
        className: g.presetDecorationImg,
        src: P,
        alt: r.label
      }), (() => {
        let e = s === S.Section.PURCHASE || s === S.Section.PREMIUM_PURCHASE && N;
        if (e) return null;
        let t = !I && !u && !M;
        return t ? (0, a.jsx)(T.PremiumBadge, {
          className: g.newBadge,
          text: (0, a.jsxs)("div", {
            className: g.newBadgeText,
            children: [(0, a.jsx)(h.default, {
              width: 12,
              height: 12
            }), v.default.Messages.NEW]
          })
        }) : (0, a.jsx)(T.IconBadge, {
          icon: A ? () => (0, a.jsx)(m.default, {
            width: 14,
            height: 14
          }) : () => (0, a.jsx)(h.default, {
            width: 12,
            height: 12
          }),
          color: l.default.BACKGROUND_ACCENT,
          className: g.iconBadge
        })
      })()]
    })
  };
var M = e => {
  let {
    user: t,
    pendingAvatarDecoration: r,
    selectedAvatarDecorationRef: n,
    onSelect: i,
    onOpenShop: s
  } = e, l = (0, S.default)();
  return (0, a.jsx)(c.MasonryList, {
    fade: !0,
    className: g.list,
    columns: 3,
    sections: l.map(e => {
      let {
        items: t
      } = e;
      return t.length
    }),
    sectionGutter: 16,
    itemGutter: 12,
    paddingHorizontal: 12,
    paddingVertical: 0,
    removeEdgeItemGutters: !0,
    renderItem: (e, o, d, E) => {
      let {
        section: _,
        items: f
      } = l[e];
      return (0, u.match)(f[o]).with(S.NONE_ITEM, () => (0, a.jsxs)(p, {
        style: {
          ...d
        },
        isSelected: null === r,
        onSelect: () => i(null),
        children: [(0, a.jsx)(I.default, {
          className: g.notAllowedIcon
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: v.default.Messages.NONE
        })]
      }, E)).with(S.SHOP_ITEM, () => (0, a.jsxs)(p, {
        style: d,
        onSelect: s,
        children: [(0, a.jsx)(A.default, {
          className: g.shopIcon
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "header-primary",
          children: v.default.Messages.COLLECTIBLES_SHOP
        })]
      }, E)).otherwise(e => {
        let s = (null == r ? void 0 : r.id) === e.id;
        return (0, a.jsx)(O, {
          style: {
            ...d
          },
          user: t,
          avatarDecoration: e,
          section: _,
          innerRef: s ? n : void 0,
          isSelected: s,
          onSelect: () => i(e)
        }, E)
      })
    },
    renderSection: e => {
      let {
        header: t
      } = l[e];
      return (0, a.jsx)("div", {
        className: g.headings,
        children: (0, a.jsx)(c.HeadingLevel, {
          forceLevel: 5,
          children: (0, a.jsx)(c.Heading, {
            variant: "eyebrow",
            color: "header-secondary",
            children: t
          })
        })
      })
    },
    getSectionHeight: e => l[e].height,
    getItemKey: (e, t) => l[e].items[t].id,
    getItemHeight: N
  })
}