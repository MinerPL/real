"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("769846"),
  a = n("77078"),
  u = n("997289"),
  d = n("917764"),
  c = n("986632"),
  f = n("538282"),
  p = n("405607"),
  m = n("305961"),
  h = n("841811"),
  E = n("290581"),
  S = n("595086"),
  g = n("599110"),
  C = n("159885"),
  T = n("256860"),
  v = n("364685"),
  y = n("161585"),
  x = n("24373"),
  I = n("41170"),
  N = n("49111"),
  _ = n("13030"),
  A = n("782340"),
  R = n("75754");
let O = (0, C.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
  M = (0, C.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
  k = (0, C.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
  b = (0, C.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
  P = (0, C.cssValueToNumber)(s.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  L = (0, C.cssValueToNumber)(s.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  U = [O, O, O, O],
  j = (M + k) * 2 + O,
  D = P + 2 * L,
  w = e => {
    let {
      activeIndex: t,
      stickerPickerCategories: n,
      categoryListRef: r,
      firstStandardStickerCategoryOffsetTop: s,
      setShouldRenderShortcut: c
    } = e, p = (0, u.useAnalyticsContext)(), S = (0, f.useExpressionPickerStore)(e => "" !== e.searchQuery), C = i.useCallback((e, r, s) => {
      var u, c;
      let f;
      let C = (null === (u = n[0]) || void 0 === u ? void 0 : u.type) === y.StickerCategoryTypes.FAVORITE,
        T = C ? 1 : 0,
        O = (null === (c = n[T]) || void 0 === c ? void 0 : c.type) === y.StickerCategoryTypes.RECENT,
        k = n.length > 0,
        P = n.length;
      if (0 === r && C) return (0, l.jsx)("div", {
        role: "listitem",
        "aria-setsize": P,
        "aria-posinset": r,
        children: (0, l.jsx)(a.Clickable, {
          "aria-label": A.default.Messages.CATEGORY_FAVORITE,
          className: o(R.stickerCategory, R.stickerCategoryGeneric, {
            [R.stickerCategoryGenericDisabled]: k && !C,
            [R.stickerCategoryGenericSelected]: !S && C && 0 === t
          }),
          onClick: s,
          children: (0, l.jsx)(E.default, {
            className: R.stickerCategoryGenericIcon,
            height: b,
            width: b
          })
        })
      }, "favorites");
      if (r === T && O) return (0, l.jsx)("div", {
        role: "listitem",
        "aria-setsize": P,
        "aria-posinset": r,
        children: (0, l.jsx)(a.Clickable, {
          "aria-label": A.default.Messages.STICKER_PICKER_CATEGORIES_RECENT,
          className: o(R.stickerCategory, R.stickerCategoryGeneric, {
            [R.stickerCategoryGenericDisabled]: k && !O,
            [R.stickerCategoryGenericSelected]: !S && O && t === T
          }),
          onClick: s,
          children: (0, l.jsx)(h.default, {
            className: R.stickerCategoryGenericIcon,
            height: b,
            width: b
          })
        })
      }, "recent");
      let L = t === r,
        U = n[r],
        j = n[r + 1],
        D = null != j && U.type === y.StickerCategoryTypes.GUILD && j.type !== y.StickerCategoryTypes.GUILD,
        w = U.type === y.StickerCategoryTypes.PACK,
        B = "",
        H = null;
      if (U.type === y.StickerCategoryTypes.GUILD || U.type === y.StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
        let e = m.default.getGuild(U.id);
        null != e && (f = e.id, B = e.name, H = (0, l.jsx)(d.default, {
          guild: e,
          isSelected: L
        }))
      } else if (w) {
        let e = v.default.getStickerPack(U.id);
        null != e && (B = e.name, H = (0, l.jsx)(I.default, {
          disableAnimation: !L || S,
          size: M,
          sticker: (0, x.getStickerPackPreviewSticker)(e)
        }))
      }
      return (0, l.jsxs)(i.Fragment, {
        children: [(0, l.jsx)(a.Tooltip, {
          position: "right",
          text: B,
          tooltipContentClassName: R.tooltip,
          children: e => (0, l.jsx)("div", {
            role: "listitem",
            "aria-setsize": P,
            "aria-posinset": r,
            children: (0, l.jsx)(a.Clickable, {
              ...e,
              "aria-label": B,
              className: o(R.stickerCategory, {
                [R.firstPartyCategory]: w,
                [R.firstPartyCategorySelected]: !S && L && w
              }),
              onClick: () => {
                U.type === y.StickerCategoryTypes.PACK && g.default.track(N.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                  location: null == p ? void 0 : p.location,
                  tab: _.ExpressionPickerViewType.STICKER,
                  sticker_pack_id: U.id,
                  guild_id: f
                }), s()
              },
              children: H
            })
          })
        }), D ? (0, l.jsx)("hr", {
          className: R.guildCategorySeparator
        }, "separator") : null]
      }, U.id)
    }, [t, p, S, n]), T = i.useCallback((e, t) => t ? j : 0, []), O = i.useCallback((e, t) => {
      let l = n[t],
        i = n[t + 1],
        r = null != i && l.type === y.StickerCategoryTypes.GUILD && i.type !== y.StickerCategoryTypes.GUILD;
      return M + (r ? D : k)
    }, [n]), L = i.useCallback(e => {
      var t;
      let n = null === (t = r.current) || void 0 === t ? void 0 : t.getListDimensions();
      if (null == n) return;
      let l = e + n.height;
      c(l - P < s)
    }, [s]);
    return {
      getScrollOffsetForIndex: T,
      renderCategoryListItem: C,
      rowHeight: O,
      onScroll: L
    }
  };
var B = e => {
  let {
    stickersListRef: t,
    channel: n
  } = e, r = i.useRef(null), [s, u] = i.useState(!0), d = c.StickerPickerStore.useStore(e => e.activeCategoryIndex), f = (0, T.useFilteredStickerPackCategories)(n), {
    firstStandardStickerCategoryIndex: m,
    firstStandardStickerCategoryOffsetTop: h,
    guildCategoryCount: E,
    hasFirstPartyStickerPacks: g
  } = i.useMemo(() => {
    var e, t;
    let n = f.filter(e => e.type === y.StickerCategoryTypes.GUILD).length,
      l = (null === (e = f[0]) || void 0 === e ? void 0 : e.type) === y.StickerCategoryTypes.RECENT,
      i = (null === (t = f[0]) || void 0 === t ? void 0 : t.type) === y.StickerCategoryTypes.FAVORITE,
      r = n + (l ? 1 : 0) + (i ? 1 : 0),
      o = r * (M + k) - k + D,
      s = null != f.find(e => e.type === y.StickerCategoryTypes.PACK);
    return {
      firstStandardStickerCategoryIndex: r + 1,
      firstStandardStickerCategoryOffsetTop: o,
      guildCategoryCount: n,
      hasFirstPartyStickerPacks: s
    }
  }, [f]);
  i.useLayoutEffect(() => {
    u(E >= 7)
  }, [E]);
  let {
    renderCategoryListItem: C,
    rowHeight: v,
    onScroll: x
  } = w({
    activeIndex: d,
    stickerPickerCategories: f,
    categoryListRef: r,
    firstStandardStickerCategoryOffsetTop: h,
    setShouldRenderShortcut: u
  }), I = i.useCallback(e => {
    var t;
    e(m), null === (t = r.current) || void 0 === t || t.scrollTo(h)
  }, [m, h]);
  return (0, l.jsx)(p.default, {
    className: R.categoryList,
    categoryListRef: r,
    expressionsListRef: t,
    store: c.StickerPickerStore,
    listPadding: U,
    onScroll: x,
    renderCategoryListItem: C,
    rowCount: f.length,
    categories: f,
    categoryHeight: v,
    children: e => g && s && (0, l.jsx)(a.Clickable, {
      className: o(R.standardStickerShortcut, {
        [R.invisibleShortcut]: !s
      }),
      onClick: () => I(e),
      children: (0, l.jsx)(S.default, {
        height: 24,
        width: 24
      })
    })
  })
}