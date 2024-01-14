"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("16470"),
  o = n("74139"),
  s = n("137223"),
  a = n("986632"),
  u = n("538282"),
  d = n("256860"),
  c = n("560241"),
  f = n("782340"),
  p = n("296937");
let m = i.forwardRef(function(e, t) {
  let {
    onKeyDown: n,
    stickersListRef: m,
    channel: h
  } = e, E = (0, d.useHasSendableSticker)(h), S = i.useRef(null), {
    searchQuery: g,
    isSearchSuggestion: C
  } = (0, u.useExpressionPickerStore)(e => ({
    searchQuery: e.searchQuery,
    isSearchSuggestion: e.isSearchSuggestion
  }), r.default), T = a.StickerPickerStore.useStore(e => e.searchPlaceholder), v = a.StickerPickerStore.useStore(e => e.inspectedExpressionPosition, r.default), y = i.useCallback(e => {
    var t;
    a.StickerPickerStore.setActiveCategoryIndex("" === e ? 0 : c.INACTIVE_CATEGORY_INDEX), a.StickerPickerStore.setInspectedExpressionPosition(0, 0), a.StickerPickerStore.setSearchPlaceholder(null), (0, u.setSearchQuery)(e), null === (t = m.current) || void 0 === t || t.scrollTo(0)
  }, [m]), x = i.useCallback(() => {
    (0, u.setSearchQuery)("")
  }, []);
  return i.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null === (e = S.current) || void 0 === e ? void 0 : e.focus()
    }
  })), i.useLayoutEffect(() => {
    if (C) {
      var e;
      null === (e = S.current) || void 0 === e || e.focus()
    }
  }, [C]), (0, l.jsx)("div", {
    className: p.wrapper,
    children: (0, l.jsx)(s.default, {
      autoFocus: E,
      disabled: !E,
      query: g,
      ref: S,
      size: s.default.Sizes.MEDIUM,
      placeholder: null != T ? T : E ? f.default.Messages.SEARCH_FOR_STICKERS : f.default.Messages.NO_STICKERS_TO_SEARCH_THROUGH,
      onClear: x,
      onKeyDown: n,
      onQueryChange: y,
      className: p.searchBar,
      preventEscapePropagation: !1,
      useKeyboardNavigation: !1,
      inputProps: {
        "aria-haspopup": "grid",
        "aria-controls": c.GRID_NAVIGATOR_ID,
        "aria-expanded": !0,
        "aria-activedescendant": (0, o.makeGridId)(c.GRID_NAVIGATOR_ID, v.columnIndex, v.rowIndex)
      }
    })
  })
});
var h = m