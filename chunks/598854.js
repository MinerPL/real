"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007"), n("794252");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  s = n.n(r),
  a = n("506838"),
  o = n("171210"),
  c = n("65597"),
  u = n("77078"),
  d = n("54239"),
  f = n("853987"),
  h = n("426497"),
  C = n("491232"),
  E = n("743826"),
  p = n("216422"),
  v = n("468759"),
  I = n("600785"),
  g = n("956089"),
  _ = n("719923"),
  m = n("845962"),
  L = n("326054"),
  N = n("49111"),
  S = n("782340"),
  A = n("361451"),
  T = n("513002");
let x = () => 80,
  P = e => {
    let {
      children: t,
      className: n,
      isSelected: i = !1,
      ...r
    } = e;
    return (0, l.jsx)(u.Clickable, {
      className: s(A.effectGridItem, n, {
        [A.selected]: i
      }),
      ...r,
      onClick: r.onSelect,
      children: t
    })
  },
  O = e => {
    var t;
    let {
      user: n,
      profileEffect: r,
      innerRef: s,
      section: a,
      isSelected: u,
      ...d
    } = e, E = (0, c.default)([m.default], () => m.default.getProfileEffectById(r.id)), v = (0, c.default)([f.default], () => {
      let e = f.default.getProduct(r.skuId);
      return (0, C.isPremiumCollectiblesProduct)(e)
    }), N = (0, c.default)([h.default], () => h.default.isItemViewed(r)), x = i.useRef(null), {
      accessibilityLabel: O,
      thumbnailPreviewSrc: R,
      title: M
    } = null !== (t = null == E ? void 0 : E.config) && void 0 !== t ? t : {}, F = _.default.canUseCollectibles(n), w = a === L.Section.PREMIUM_PURCHASE && !F, [H, j] = i.useState(u);
    return i.useEffect(() => {
      u && j(!0)
    }, [u]), (0, l.jsxs)(P, {
      className: w && !u ? A.decorationGridItemChurned : void 0,
      innerRef: null != s ? s : x,
      isSelected: u,
      ...d,
      children: [(0, l.jsx)("img", {
        src: T,
        alt: O,
        className: A.presetEffectBackground
      }), (0, l.jsx)("img", {
        className: A.presetEffectImg,
        src: R,
        alt: M
      }), (() => {
        let e = a === L.Section.PURCHASE || a === L.Section.PREMIUM_PURCHASE && F;
        if (e) return null;
        let t = !N && !u && !H;
        return t ? (0, l.jsx)(g.PremiumBadge, {
          className: A.newBadge,
          text: (0, l.jsxs)("div", {
            className: A.newBadgeText,
            children: [(0, l.jsx)(I.default, {
              width: 12,
              height: 12
            }), S.default.Messages.NEW]
          })
        }) : (0, l.jsx)(g.IconBadge, {
          icon: v ? () => (0, l.jsx)(p.default, {
            width: 14,
            height: 14
          }) : () => (0, l.jsx)(I.default, {
            width: 12,
            height: 12
          }),
          color: o.default.BACKGROUND_ACCENT,
          className: A.lockBadge
        })
      })()]
    })
  };
var R = e => {
  let {
    user: t,
    pendingProfileEffect: n,
    selectedProfileEffectRef: i,
    onSelect: r,
    onClose: s
  } = e, o = () => {
    s(), (0, d.pushLayer)(N.Layers.COLLECTIBLES_SHOP)
  }, c = (0, L.default)(), f = null != n;
  return (0, l.jsx)("section", {
    children: (0, l.jsx)(u.MasonryList, {
      fade: !0,
      itemGutter: 12,
      sectionGutter: 16,
      paddingVertical: 0,
      paddingHorizontal: 12,
      className: A.list,
      columns: 3,
      sections: c.map(e => {
        let {
          items: t
        } = e;
        return t.length
      }),
      renderItem: (e, s, d, h) => {
        let {
          section: C,
          items: p
        } = c[e];
        return (0, a.match)(p[s]).with(L.NONE_ITEM, () => (0, l.jsxs)(P, {
          style: {
            ...d
          },
          isSelected: !f,
          onSelect: () => r(null),
          children: [(0, l.jsx)(v.default, {
            className: A.notAllowedIcon
          }), (0, l.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: S.default.Messages.NONE
          })]
        }, h)).with(L.SHOP_ITEM, () => (0, l.jsxs)(P, {
          style: d,
          onSelect: o,
          children: [(0, l.jsx)(E.default, {
            className: A.shopIcon
          }), (0, l.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "header-primary",
            children: S.default.Messages.COLLECTIBLES_SHOP
          })]
        }, h)).otherwise(e => {
          let s = n === e.id;
          return (0, l.jsx)(O, {
            user: t,
            style: {
              ...d
            },
            section: C,
            profileEffect: e,
            innerRef: s ? i : void 0,
            isSelected: s,
            onSelect: () => r(e.id)
          }, h)
        })
      },
      renderSection: e => {
        let {
          header: t
        } = c[e];
        return (0, l.jsx)("div", {
          style: {
            height: "".concat(16, "px")
          },
          children: (0, l.jsx)(u.FormTitle, {
            children: t
          })
        })
      },
      getSectionHeight: () => 16,
      getItemKey: (e, t) => {
        var n, l;
        return null !== (l = null === (n = c[e].items[t]) || void 0 === n ? void 0 : n.id) && void 0 !== l ? l : null
      },
      getItemHeight: x,
      removeEdgeItemGutters: !0
    })
  })
}