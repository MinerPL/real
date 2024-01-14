"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("538282"),
  o = n("45961"),
  s = n("794707"),
  a = n("195638"),
  u = n("44058");

function d(e) {
  let {
    categories: t,
    collapsedCategories: n,
    containerWidth: d,
    store: c,
    onSelectItem: f,
    onSearchExpressions: p,
    hasSearchResults: m,
    defaultSearchPlaceholder: h,
    emptySearchPlaceholder: E,
    renderEmptyState: S,
    renderRow: g,
    renderSection: C,
    renderSectionHeader: T,
    renderSectionFooter: v,
    renderInspector: y,
    renderEmptySearchState: x,
    renderCategoryList: I,
    renderHeaderAccessories: N,
    rowHeight: _,
    sectionHeaderHeight: A,
    sectionFooterHeight: R,
    itemNodeWidth: O,
    listPaddingRight: M,
    itemNodeMargin: k,
    listPadding: b,
    gridNavigatorId: P,
    gridNotice: L,
    renderHeader: U
  } = e, j = i.useRef(null), D = i.useRef(null), w = i.useRef(null), B = 0 === t.length, H = (0, r.useExpressionPickerStore)(e => e.searchQuery), F = c.useStore(e => e.inspectedExpressionPosition), G = (0, o.useExpressionPickerGridWidth)({
    gridWrapperRef: j,
    containerWidth: d,
    showingEmptyState: B
  }), {
    expressionsGrid: K,
    rowCount: V,
    rowCountBySection: W,
    columnCounts: Y,
    gutterWidth: q
  } = (0, o.useExpressionGrid)({
    categories: t,
    collapsedCategories: n,
    gridWidth: G,
    listPaddingRight: M,
    itemNodeWidth: O,
    itemNodeMargin: k
  }), {
    getItemProps: z,
    getRowProps: Q,
    gridContainerProps: X,
    handleGridContainerKeyDown: Z,
    isUsingKeyboardNavigation: J
  } = (0, o.useKeyboardNavigation)({
    columnCounts: Y,
    expressionsListRef: D,
    expressionsGrid: K,
    onSelectItem: f,
    store: c,
    gridNavigatorId: P
  }), $ = i.useCallback(e => {
    let t = K[e];
    return g(t, Q(e), {
      isUsingKeyboardNavigation: J.current,
      gutterWidth: q,
      rowIndex: e
    }, t => z(e, t), t => c.setInspectedExpressionPosition(t, e))
  }, [K, z, Q, q, J, g, c]), ee = i.useCallback(e => null == C ? void 0 : C(t[e]), [t, C]), et = i.useCallback(e => null == T ? void 0 : T(t[e], e), [t, T]), en = i.useCallback(e => null == v ? void 0 : v(t[e]), [t, v]), el = i.useCallback(() => {
    var e;
    return null == y ? void 0 : y(null == K ? void 0 : null === (e = K[F.rowIndex]) || void 0 === e ? void 0 : e[F.columnIndex])
  }, [K, F.columnIndex, F.rowIndex, y]);
  i.useEffect(() => {
    p(H)
  }, [p, H]), i.useEffect(() => c.resetStoreState, [c.resetStoreState]), i.useLayoutEffect(() => {
    var e;
    null === (e = w.current) || void 0 === e || e.focus()
  }, []);
  let ei = (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.default, {
      ref: w,
      store: c,
      hasSendableExpressions: !0,
      onKeyDown: Z,
      expressionsListRef: D,
      gridNavigatorId: P,
      defaultSearchPlaceholder: h,
      emptySearchPlaceholder: E
    }), null == N ? void 0 : N()]
  });
  return (0, l.jsxs)(l.Fragment, {
    children: [null != U ? U(ei) : (0, l.jsxs)("div", {
      className: u.header,
      children: [" ", ei, " "]
    }), B && null != S ? S(u.emptyState) : (0, l.jsxs)(l.Fragment, {
      children: [I(D), null != L && (0, l.jsx)("div", {
        className: u.gridNoticeWrapper,
        children: L
      }), (0, l.jsx)("div", {
        ref: j,
        className: u.listWrapper,
        id: P,
        ...X,
        children: null != G ? (0, l.jsx)(s.default, {
          ref: D,
          store: c,
          hasSearchResults: m,
          listPadding: b,
          renderRow: $,
          renderSection: null != C ? ee : void 0,
          renderSectionHeader: null != T ? et : void 0,
          renderSectionFooter: null != v ? en : void 0,
          renderInspector: null != y ? el : void 0,
          renderEmptySearchState: x,
          rowCount: V,
          rowCountBySection: W,
          rowHeight: _,
          sectionHeaderHeight: A,
          sectionFooterHeight: R
        }) : null
      })]
    })]
  })
}