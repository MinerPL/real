            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return g
                }
            }), i("222007");
            var n = i("37983"),
                l = i("884691"),
                s = i("414456"),
                a = i.n(s),
                r = i("16470"),
                o = i("74139"),
                u = i("137223"),
                c = i("986632"),
                d = i("538282"),
                f = i("115279"),
                E = i("49111"),
                m = i("782340"),
                I = i("431364");
            let p = l.forwardRef(function(e, t) {
                let {
                    emojiListRef: i,
                    gridNavigatorId: s,
                    isFullRow: p,
                    onKeyDown: g,
                    onFocus: _,
                    autoFocus: S,
                    className: h,
                    defaultSearchPlaceholder: C
                } = e, T = l.useRef(null), N = (0, d.useExpressionPickerStore)(e => e.searchQuery), [A, y] = c.EmojiPickerStore.useStore(e => [e.inspectedExpressionPosition, e.searchPlaceholder], r.default), v = l.useCallback(e => {
                    var t;
                    c.EmojiPickerStore.setActiveCategoryIndex("" === e ? 0 : f.INACTIVE_CATEGORY_INDEX), c.EmojiPickerStore.setInspectedExpressionPosition(0, 0), c.EmojiPickerStore.setSearchPlaceholder(null), (0, d.setSearchQuery)(e), null === (t = i.current) || void 0 === t || t.scrollTo(0)
                }, [i]), j = l.useCallback(() => {
                    (0, d.setSearchQuery)("")
                }, []);
                return l.useImperativeHandle(t, () => ({
                    focus: () => {
                        var e;
                        return null === (e = T.current) || void 0 === e ? void 0 : e.focus()
                    }
                })), (0, n.jsx)(u.default, {
                    autoFocus: S,
                    query: N,
                    ref: T,
                    size: u.default.Sizes.MEDIUM,
                    placeholder: null != y ? y : C,
                    onClear: j,
                    onKeyDown: e => {
                        switch (e.keyCode) {
                            case E.KeyboardKeys.ARROW_LEFT:
                            case E.KeyboardKeys.ARROW_RIGHT:
                            case E.KeyboardKeys.ARROW_UP:
                            case E.KeyboardKeys.ARROW_DOWN:
                                document.activeElement !== e.target && e.preventDefault()
                        }
                        g(e)
                    },
                    onFocus: _,
                    onQueryChange: v,
                    className: a(h, {
                        [I.searchBarFullRow]: p
                    }),
                    preventEscapePropagation: !1,
                    useKeyboardNavigation: !1,
                    inputProps: {
                        "aria-label": m.default.Messages.SEARCH_EMOJIS,
                        "aria-haspopup": "grid",
                        "aria-controls": s,
                        "aria-expanded": !0,
                        "aria-activedescendant": (0, o.makeGridId)(s, A.columnIndex, A.rowIndex)
                    }
                })
            });
            var g = l.memo(p)