            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("124299"),
                o = n("538282"),
                s = n("45961"),
                a = n("594755");
            let u = i.forwardRef(function(e, t) {
                let {
                    store: n,
                    hasSearchResults: u,
                    listPadding: d,
                    renderRow: c,
                    renderSection: f,
                    renderSectionHeader: p,
                    renderSectionFooter: m,
                    renderInspector: h,
                    renderEmptySearchState: E,
                    rowCount: S,
                    rowCountBySection: g,
                    rowHeight: C,
                    sectionHeaderHeight: T,
                    sectionFooterHeight: v
                } = e, y = i.useRef(!1), x = i.useRef(null), I = (0, o.useExpressionPickerStore)(e => e.searchQuery), N = n.useStore(e => e.activeCategoryIndex), _ = (0, s.useSynchronizedActiveCategoryIndexForScrollPosition)({
                    activeCategoryIndex: N,
                    isScrolling: y,
                    listRef: x,
                    onActiveCategoryIndexChange: n.setActiveCategoryIndex,
                    scrollOffset: 20,
                    searchQuery: I
                });
                return (0, s.useSynchronizedScrollPositionForActiveCategoryIndex)({
                    searchQuery: I,
                    activeCategoryIndex: N,
                    listRef: x
                }), i.useImperativeHandle(t, () => ({
                    scrollTo: function() {
                        for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                        return null === (e = x.current) || void 0 === e ? void 0 : e.scrollTo(...n)
                    },
                    getRowDescriptors: () => {
                        var e, t;
                        return null !== (t = null === (e = x.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
                    },
                    getSectionDescriptors: () => {
                        var e, t;
                        return null !== (t = null === (e = x.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
                    },
                    scrollToSectionTop: function() {
                        for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                        return null === (e = x.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
                    },
                    scrollRowIntoView: function() {
                        for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                        return null === (e = x.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
                    },
                    getScrollerNode: function() {
                        for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                        return null === (e = x.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
                    },
                    scrollIntoViewNode: function() {
                        for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                        return null === (e = x.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
                    },
                    getListDimensions: function() {
                        for (var e, t, n = arguments.length, l = Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return null !== (t = null === (e = x.current) || void 0 === e ? void 0 : e.getListDimensions(...l)) && void 0 !== t ? t : {
                            height: -1,
                            totalHeight: -1
                        }
                    }
                }), []), (0, l.jsxs)("div", {
                    className: a.wrapper,
                    children: [I.length > 0 && !u && null != E ? E() : (0, l.jsx)(r.default, {
                        role: "none presentation",
                        listPadding: d,
                        onScroll: _,
                        renderRow: c,
                        renderSection: f,
                        renderSectionHeader: p,
                        renderSectionFooter: m,
                        rowCount: S,
                        rowCountBySection: g,
                        rowHeight: C,
                        sectionHeaderHeight: T,
                        sectionFooterHeight: v,
                        stickyHeaders: !0,
                        ref: x
                    }), null == h ? void 0 : h()]
                })
            });
            var d = u