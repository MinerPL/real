"use strict";
i.r(t), i.d(t, {
  useExpressionPickerGridWidth: function() {
    return E
  },
  useSynchronizedScrollPositionForActiveCategoryIndex: function() {
    return m
  },
  useSynchronizedActiveCategoryIndexForScrollPosition: function() {
    return I
  },
  useExpressionPickerGridKeyboardNavigation: function() {
    return p
  },
  useExpressionGrid: function() {
    return g
  },
  useKeyboardNavigation: function() {
    return _
  }
}), i("222007"), i("424973");
var n = i("884691"),
  l = i("917351"),
  s = i.n(l),
  a = i("880317"),
  r = i("585463"),
  o = i("617258"),
  u = i("769846"),
  c = i("246511"),
  d = i("49111");
let f = (0, o.cssValueToNumber)(u.default.EMOJI_PICKER_CONSTANTS_EMOJI_LIST_PADDING_LEFT),
  E = e => {
    let {
      gridWrapperRef: t,
      containerWidth: i,
      showingEmptyState: l,
      listPaddingLeft: a = f,
      listScrollbarWidth: r = 8
    } = e, [o, u] = n.useState(void 0), c = n.useCallback(() => {
      if (null == t.current) return null;
      u(t.current.offsetWidth - a - r)
    }, [t, a, r]);
    return n.useLayoutEffect(() => {
      c()
    }, [i, c, l]), n.useEffect(() => {
      let e = s.debounce(c, 250);
      return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }, [c]), o
  },
  m = e => {
    let {
      activeCategoryIndex: t,
      listRef: i,
      searchQuery: l
    } = e, s = n.useRef(l), a = n.useRef(!0);
    n.useLayoutEffect(() => {
      if ("" === l && "" !== s.current) {
        var e;
        null === (e = i.current) || void 0 === e || e.scrollToSectionTop(t)
      }
      s.current = l
    }, [l, t, i]), n.useLayoutEffect(() => {
      if (a.current) {
        var e;
        null === (e = i.current) || void 0 === e || e.scrollToSectionTop(t), a.current = !1
      }
    }, [t, i]), n.useEffect(() => {
      s.current = l
    }, [l])
  },
  I = e => {
    let {
      activeCategoryIndex: t,
      listRef: i,
      isScrolling: l,
      searchQuery: a,
      scrollOffset: r = 0,
      onActiveCategoryIndexChange: o
    } = e, u = n.useRef(d.UNREACHABLE_REQUEST_ANIMATION_FRAME_ID), c = n.useMemo(() => s.debounce(() => {
      l.current = !1
    }, 250), [l]), f = n.useMemo(() => s.debounce(e => {
      "" === a && (window.cancelAnimationFrame(u.current), u.current = window.requestAnimationFrame(() => {
        var n;
        let l = null === (n = i.current) || void 0 === n ? void 0 : n.getSectionDescriptors();
        if (null == l) return;
        let s = l.findIndex((t, i) => {
            let n = l[i + 1],
              s = e + r >= t.offset.top,
              a = null != n && e + r < n.offset.top;
            return null != n && !s && !a || s && a || s && null == n
          }),
          a = -1 === s ? 0 : s;
        t !== a && o(a)
      }))
    }, 50), [a, i, t, r, o]), E = n.useCallback(e => {
      l.current = !0, c(), f(e)
    }, [l, c, f]);
    return E
  },
  p = e => {
    let {
      columnCounts: t,
      gridNavigatorId: i,
      itemGrid: l,
      itemList: s,
      onGridNavigatorItemSelect: r,
      onGridNavigatorPositionChange: o
    } = e, u = n.useRef(!1), c = n.useCallback((e, t) => {
      let i = l[t];
      if (null != i) return i[e]
    }, [l]), d = n.useCallback(e => {
      let {
        focusedX: t,
        focusedY: i
      } = e;
      u.current = !0;
      let n = c(t, i);
      if (null == n) return;
      let {
        visibleRowIndex: l,
        columnIndex: a
      } = n;
      o(a, l), null != s.current && s.current.scrollRowIntoView(i)
    }, [c, s, o]), f = n.useCallback((e, t, i) => {
      switch (i.type) {
        case a.ActionType.NAVIGATE_UP:
        case a.ActionType.NAVIGATE_DOWN:
        case a.ActionType.NAVIGATE_RIGHT:
        case a.ActionType.NAVIGATE_LEFT:
        case a.ActionType.NAVIGATE_INLINE_START:
        case a.ActionType.NAVIGATE_INLINE_END:
        case a.ActionType.NAVIGATE_START:
        case a.ActionType.NAVIGATE_END:
        case a.ActionType.NAVIGATE_CROSSLINE_START:
        case a.ActionType.NAVIGATE_CROSSLINE_END:
          d(t)
      }
    }, [d]), E = n.useCallback((e, t, i) => {
      let n = c(e, t);
      null != n && r(n, i)
    }, [c, r]), {
      dispatch: m,
      getItemProps: I,
      getRowProps: p,
      getContainerProps: g
    } = (0, a.useGridNavigator)({
      navId: i,
      columnCounts: t,
      onDispatch: f,
      onSelect: E,
      autoFocusElement: !1,
      useVirtualFocus: !0
    }), {
      gridContainerProps: _,
      handleGridContainerKeyDown: S
    } = n.useMemo(() => {
      let e = g();
      return {
        gridContainerProps: e,
        handleGridContainerKeyDown: e.onKeyDown
      }
    }, [g]);
    return n.useEffect(() => {
      let e = () => {
        u.current = !1
      };
      return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e)
    }, []), {
      gridDispatch: m,
      getItemProps: I,
      getRowProps: p,
      gridContainerProps: _,
      handleGridContainerKeyDown: S,
      isUsingKeyboardNavigation: u
    }
  };

function g(e) {
  let {
    categories: t,
    collapsedCategories: i,
    gridWidth: l = 0,
    listPaddingRight: s = 0,
    itemNodeWidth: a,
    itemNodeMargin: r = 0
  } = e;
  return n.useMemo(() => {
    let e = Math.max(1, Math.floor((l - s + r) / (a + r))),
      n = Math.floor(Math.max(r, (l - s - a * e) / (e - 1))),
      o = [],
      u = [],
      c = [],
      d = 0,
      f = 0,
      E = 0;
    if (0 !== l) {
      let n = function(t, i) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          l = Math.ceil(t.length / e);
        u[f] = n ? 0 : l;
        for (let s = 0; s < l; s++) {
          let l = s * e,
            a = l + e,
            r = t.slice(l, a).map((e, t) => ({
              item: e,
              gridSectionIndex: f,
              rowIndex: d,
              columnIndex: t,
              visibleRowIndex: E,
              category: i
            }));
          !n && (E++, c.push(r), o.push(r.length)), d++
        }
        f++
      };
      for (let e of t)
        if (e.items.length > 0) {
          var m;
          n(e.items, e.categoryInfo.type, null !== (m = null == i ? void 0 : i.has("".concat(e.key))) && void 0 !== m && m)
        }
    }
    return {
      expressionsGrid: c,
      rowCount: d,
      rowCountBySection: u,
      columnCounts: o,
      gutterWidth: n
    }
  }, [t, i, l, r, a, s])
}

function _(e) {
  let {
    columnCounts: t,
    expressionsGrid: i,
    expressionsListRef: l,
    store: s,
    gridNavigatorId: a,
    onSelectItem: o
  } = e, {
    gridDispatch: u,
    getItemProps: d,
    getRowProps: f,
    gridContainerProps: E,
    handleGridContainerKeyDown: m,
    isUsingKeyboardNavigation: I
  } = p({
    columnCounts: t,
    gridNavigatorId: a,
    itemGrid: i,
    itemList: l,
    onGridNavigatorItemSelect: o,
    onGridNavigatorPositionChange: s.setInspectedExpressionPosition
  });
  return n.useEffect(() => s.useStore.subscribe(e => {
    if (null == e) return;
    let {
      columnIndex: t,
      rowIndex: i,
      source: n
    } = e;
    n !== c.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && u({
      type: r.GridActionType.SET_FOCUSED_POSITION,
      x: t,
      y: i
    })
  }, e => e.inspectedExpressionPosition), [u, s]), {
    getItemProps: d,
    getRowProps: f,
    gridContainerProps: E,
    handleGridContainerKeyDown: m,
    isUsingKeyboardNavigation: I
  }
}