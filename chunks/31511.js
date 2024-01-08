            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("884691"),
                s = n("974667"),
                l = n("378765"),
                i = n("659500"),
                r = n("154864"),
                o = n("894488"),
                u = n("49111");

            function d(e) {
                let {
                    scrollerRef: t,
                    ...n
                } = e, d = a.useCallback(() => {
                    let e = t.current;
                    return null == e ? Promise.resolve() : new Promise(t => {
                        e.scrollToBottom({
                            callback: () => requestAnimationFrame(t)
                        })
                    })
                }, []), c = a.useCallback(() => {
                    let e = t.current;
                    return null == e ? Promise.resolve() : new Promise(t => {
                        e.scrollToTop({
                            callback: () => requestAnimationFrame(t)
                        })
                    })
                }, []), f = a.useCallback(e => {
                    var a, s, l;
                    if (!n.keyboardModeEnabled) return;
                    let i = null === (s = t.current) || void 0 === s ? void 0 : null === (a = s.getScrollerNode()) || void 0 === a ? void 0 : a.ownerDocument,
                        r = null == i ? void 0 : i.querySelector(e);
                    null != r && (null === (l = t.current) || void 0 === l || l.scrollIntoViewNode({
                        node: r,
                        padding: 4 * o.MESSAGE_PADDING,
                        callback: () => null == r ? void 0 : r.focus()
                    }))
                }, [n.keyboardModeEnabled]), h = a.useCallback(() => {
                    !n.hasMoreAfter && i.ComponentDispatch.dispatchToLastSubscribed(u.ComponentActions.TEXTAREA_FOCUS)
                }, [n.hasMoreAfter]), C = (0, s.default)({
                    id: r.MESSAGE_ID_PREFIX,
                    preserveFocusPosition: !1,
                    setFocus: f,
                    isEnabled: n.keyboardModeEnabled && !n.isEditing,
                    scrollToStart: c,
                    scrollToEnd: d,
                    onNavigateNextAtEnd: h
                }), p = a.useCallback(e => {
                    let {
                        atEnd: t = !1
                    } = e;
                    t ? C.focusLastVisibleItem() : C.focusFirstVisibleItem()
                }, [C]);
                return (0, l.useComponentAction)({
                    event: u.ComponentActions.FOCUS_MESSAGES,
                    handler: p
                }), C
            }