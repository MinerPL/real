"use strict";
i.r(t), i.d(t, {
  default: function() {
    return z
  }
}), i("222007");
var n = i("37983"),
  l = i("884691"),
  s = i("414456"),
  a = i.n(s),
  r = i("917351"),
  o = i.n(r),
  u = i("974667"),
  c = i("446674"),
  d = i("769846"),
  f = i("77078"),
  E = i("272030"),
  m = i("997289"),
  I = i("206230"),
  p = i("986632"),
  g = i("405607"),
  _ = i("423080"),
  S = i("704815"),
  h = i("471671"),
  C = i("46829"),
  T = i("599110"),
  N = i("159885"),
  A = i("788506"),
  y = i("675280"),
  v = i("917764"),
  j = i("83017"),
  R = i("913631"),
  O = i("115279"),
  M = i("49111"),
  x = i("13030"),
  P = i("782340"),
  L = i("983664");
let D = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_SIZE),
  b = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_GUILD_CATEGORY_ICON_MARGIN_VERICAL),
  U = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_SIZE),
  w = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_MARGIN_VERTICAL),
  G = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_UNICODE_CATEGORY_ICON_PADDING),
  k = (0, N.cssValueToNumber)(L.unicodeCategoryShortcutHeight),
  F = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
  V = (0, N.cssValueToNumber)(d.default.EMOJI_PICKER_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
  K = U + b + 2 * G,
  H = D + b,
  B = H + (F + 2 * V),
  J = U + w + 2 * G;

function W(e) {
  let {
    activeIndex: t,
    categoryIndex: s,
    analyticsContext: r,
    categories: o,
    category: c,
    handleCategorySelect: d,
    isWindowFocused: m,
    useReducedMotion: I
  } = e, p = (0, u.useListItem)("expression-guild-".concat(s)), g = c.type === O.EmojiCategoryTypes.GUILD ? null : c.id, h = t === s, C = c.type === O.EmojiCategoryTypes.GUILD ? c.guild : null, N = c.type === O.EmojiCategoryTypes.PACK ? c.pack : null, j = (0, n.jsxs)(f.Clickable, {
    ...p,
    "aria-label": (0, A.getAriaIdForEmojiCategory)(c, C, N),
    className: a({
      [L.categoryItemGuildCategory]: null != C,
      [L.categoryItemPackCategory]: null != N,
      [L.categoryItemDefaultCategory]: null == C && null == N,
      [L.categoryItemDefaultCategorySelected]: null == C && null == N && h,
      [L.categoryItemRecentEmoji]: c.type === O.EmojiCategoryTypes.RECENT
    }),
    onClick: () => {
      null != C && T.default.track(M.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
        location: null == r ? void 0 : r.location,
        tab: x.ExpressionPickerViewType.EMOJI,
        guild_id: C.id
      }), d(s)
    },
    onContextMenu: null != N ? e => {
      (0, E.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await i.el("672409").then(i.bind(i, "672409"));
        return t => (0, n.jsx)(e, {
          ...t
        })
      })
    } : void 0,
    children: [null != N ? (0, n.jsx)(R.default, {
      pack: N,
      isSelected: h,
      shouldAnimate: !I && m
    }) : null, null != C ? (0, n.jsx)(v.default, {
      guild: C,
      isSelected: h,
      shouldAnimate: !I && m
    }) : null, null == C && null == N && null != g ? (0, n.jsx)(y.default, {
      categoryId: g,
      className: L.categoryIcon,
      height: U,
      width: U
    }) : null]
  }), P = o[s + 1], D = null != P && c.type === O.EmojiCategoryTypes.GUILD && P.type !== O.EmojiCategoryTypes.GUILD && P.type !== O.EmojiCategoryTypes.PACK;
  return null != C ? (0, n.jsxs)(l.Fragment, {
    children: [(0, n.jsx)(_.default, {
      guild: C,
      includeActivity: !1,
      children: (0, n.jsx)("div", {
        children: j
      })
    }), D ? (0, n.jsx)("hr", {
      className: L.guildCategorySeparator
    }, "separator") : null]
  }) : null != N ? (0, n.jsx)(l.Fragment, {
    children: (0, n.jsx)(S.default, {
      pack: N,
      children: (0, n.jsx)("div", {
        children: j
      })
    })
  }) : j
}
var z = e => {
  let {
    className: t,
    emojiListRef: i,
    sectionDescriptors: s,
    intention: r,
    channel: u
  } = e, d = p.EmojiPickerStore.useStore(e => e.activeCategoryIndex), E = (0, j.useCategorySelectHandler)({
    sectionDescriptors: s,
    emojiListRef: i
  }), _ = (0, m.useAnalyticsContext)(), S = (0, A.useEmojiCategories)(r, u), T = l.useRef(null), N = (0, c.useStateFromStores)([h.default], () => h.default.isFocused()), y = (0, c.useStateFromStores)([I.default], () => I.default.useReducedMotion, []), v = l.useMemo(() => o.memoize((e, t) => {
    let i = S[t];
    if (null != i) return (0, n.jsx)(W, {
      activeIndex: d,
      analyticsContext: _,
      categories: S,
      category: i,
      categoryIndex: t,
      handleCategorySelect: E,
      isWindowFocused: N,
      useReducedMotion: y
    }, t)
  }), [d, _, S, E, N, y]), R = l.useMemo(() => [8, 8, 0, 8], []), M = l.useCallback((e, t) => {
    let i = S[t];
    if (i.type === O.EmojiCategoryTypes.RECENT) return K;
    if (i.type === O.EmojiCategoryTypes.GUILD) {
      let e = S[t + 1],
        i = null != e && e.type !== O.EmojiCategoryTypes.GUILD;
      return i ? B : H
    }
    return J
  }, [S]), {
    nonUnicodeCategoryCount: x,
    firstUnicodeCategoryIndex: D,
    firstUnicodeCategoryOffsetTop: G,
    rowCountBySection: z
  } = l.useMemo(() => {
    let e = 0,
      t = 0,
      i = 0,
      n = 0;
    S.forEach(l => {
      l.type === O.EmojiCategoryTypes.GUILD ? (t += 1, i += 1) : l.type === O.EmojiCategoryTypes.UNICODE ? n += 1 : (e += 1, t += 1)
    });
    let l = [e, i, n],
      s = K + t * H + B;
    return {
      nonUnicodeCategoryCount: t,
      firstUnicodeCategoryIndex: t,
      firstUnicodeCategoryOffsetTop: s,
      rowCountBySection: l
    }
  }, [S]), [Z, Y] = l.useState(!0);
  l.useLayoutEffect(() => {
    Y(x >= 7)
  }, [x]);
  let Q = l.useCallback(e => {
      var t;
      let i = null === (t = T.current) || void 0 === t ? void 0 : t.getListDimensions();
      if (null == i) return;
      let n = e + i.height;
      n - F >= G ? Y(!1) : Y(!0)
    }, [G]),
    X = l.useCallback(e => {
      var t;
      e(D), null === (t = T.current) || void 0 === t || t.scrollTo(G)
    }, [G, D]),
    q = l.useCallback((e, t) => {
      let i = S[e];
      if (null == i) return 0;
      let n = Z ? k : 0;
      if (i.type === O.EmojiCategoryTypes.RECENT) return t ? 0 : w;
      if (i.type === O.EmojiCategoryTypes.GUILD) {
        let i = S[e + 1];
        return null != i && i.type !== O.EmojiCategoryTypes.GUILD ? t ? F + -2 * V + b + n : b : t ? n : b
      }
      return t ? b + n : 2 * b
    }, [S, Z]),
    $ = l.useMemo(() => function(e, t) {
      return (0, n.jsx)(l.Fragment, {
        children: t
      }, e)
    }, []),
    ee = Z ? "shortcut" : "hiddenshortcut";
  return (0, n.jsx)(g.default, {
    categoryListRef: T,
    expressionsListRef: i,
    className: t,
    store: p.EmojiPickerStore,
    categories: S,
    listPadding: R,
    onScroll: Q,
    renderCategoryListItem: v,
    renderSection: $,
    rowCount: S.length,
    categoryHeight: M,
    getScrollOffsetForIndex: q,
    rowCountBySection: z,
    children: e => x >= 7 && (0, n.jsx)(f.Clickable, {
      "aria-hidden": !Z,
      "aria-label": P.default.Messages.EMOJI_PICKER_SCROLL_TO_UNICODE_A11Y_LABEL,
      className: a(L.unicodeShortcut, {
        [L.unicodeShortcutInvisible]: !Z
      }),
      tabIndex: Z ? 0 : -1,
      onClick: () => X(e),
      children: (0, n.jsx)(C.default, {
        height: U,
        width: U
      })
    }, ee)
  })
}