            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("16470"),
                o = n("74139"),
                s = n("137223"),
                a = n("986632"),
                u = n("538282"),
                d = n("595713");
            let c = i.forwardRef(function(e, t) {
                let {
                    store: n,
                    hasSendableExpressions: c,
                    onKeyDown: f,
                    gridNavigatorId: p,
                    expressionsListRef: m,
                    defaultSearchPlaceholder: h,
                    emptySearchPlaceholder: E
                } = e, S = i.useRef(null), [g, C] = (0, u.useExpressionPickerStore)(e => [e.searchQuery, e.isSearchSuggestion], r.default), T = n.useStore(e => e.searchPlaceholder), v = n.useStore(e => e.inspectedExpressionPosition, r.default), y = i.useCallback(e => {
                    var t;
                    n.setActiveCategoryIndex("" === e ? 0 : a.INACTIVE_CATEGORY_INDEX), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, u.setSearchQuery)(e), null === (t = m.current) || void 0 === t || t.scrollTo(0)
                }, [m, n]), x = i.useCallback(() => {
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
                    className: d.wrapper,
                    children: (0, l.jsx)(s.default, {
                        autoFocus: c,
                        disabled: !c,
                        query: g,
                        ref: S,
                        size: s.default.Sizes.MEDIUM,
                        placeholder: null != T ? T : c || null == E ? h : E,
                        onClear: x,
                        onKeyDown: f,
                        onQueryChange: y,
                        className: d.searchBar,
                        preventEscapePropagation: !1,
                        useKeyboardNavigation: !1,
                        inputProps: {
                            "aria-haspopup": "grid",
                            "aria-controls": p,
                            "aria-expanded": !0,
                            "aria-activedescendant": (0, o.makeGridId)(p, v.columnIndex, v.rowIndex)
                        }
                    })
                })
            });
            var f = c