            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("974667"),
                l = n("446674"),
                r = n("77078"),
                o = n("206230"),
                u = n("59678"),
                d = n("112082"),
                c = function(e) {
                    let {
                        statusSections: t,
                        renderRow: n,
                        searchQuery: c
                    } = e, E = e => {
                        let n = t[e];
                        return 0 === n.length ? 0 : u.STATUS_HEADER_HEIGHT + 16
                    }, f = e => {
                        let {
                            section: a,
                            row: s
                        } = e, i = t[a];
                        if (null == i || null == s) return null;
                        let l = i[s];
                        return null == l ? null : n(l)
                    }, _ = (0, l.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled), h = s.useRef(null), C = s.useCallback(() => new Promise(e => {
                        let t = h.current;
                        if (null == t) return e();
                        t.scrollToTop({
                            callback: () => requestAnimationFrame(() => e())
                        })
                    }), []), T = s.useCallback(() => new Promise(e => {
                        let t = h.current;
                        if (null == t) return e();
                        t.scrollToBottom({
                            callback: () => requestAnimationFrame(() => e())
                        })
                    }), []), I = s.useCallback(e => {
                        let t = document.querySelector(e),
                            n = h.current;
                        null != t && null != n && n.scrollIntoViewNode({
                            node: t,
                            padding: 8,
                            callback: () => null == t ? void 0 : t.focus()
                        })
                    }, []), S = (0, i.default)({
                        id: "people-list",
                        isEnabled: _,
                        scrollToStart: C,
                        scrollToEnd: T,
                        setFocus: I
                    });
                    return (0, a.jsx)(i.ListNavigatorProvider, {
                        navigator: S,
                        children: (0, a.jsx)(i.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: n,
                                    ...s
                                } = e;
                                return (0, a.jsx)(r.ListAuto, {
                                    ref: e => {
                                        var t;
                                        h.current = e, n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
                                    },
                                    sectionHeight: E,
                                    renderRow: f,
                                    rowHeight: u.PEOPLE_LIST_ITEM_HEIGHT,
                                    sections: t.map(e => "" !== c && 0 === e.length ? e.length + 1 : e.length),
                                    className: d.peopleList,
                                    ...s
                                })
                            }
                        })
                    })
                }