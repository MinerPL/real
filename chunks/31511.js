"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("884691"),
  a = n("974667"),
  l = n("378765"),
  i = n("659500"),
  r = n("154864"),
  o = n("894488"),
  u = n("49111");

function d(e) {
  let {
    scrollerRef: t,
    ...n
  } = e, d = s.useCallback(() => {
    let e = t.current;
    return null == e ? Promise.resolve() : new Promise(t => {
      e.scrollToBottom({
        callback: () => requestAnimationFrame(t)
      })
    })
  }, []), c = s.useCallback(() => {
    let e = t.current;
    return null == e ? Promise.resolve() : new Promise(t => {
      e.scrollToTop({
        callback: () => requestAnimationFrame(t)
      })
    })
  }, []), f = s.useCallback(e => {
    var s, a, l;
    if (!n.keyboardModeEnabled) return;
    let i = null === (a = t.current) || void 0 === a ? void 0 : null === (s = a.getScrollerNode()) || void 0 === s ? void 0 : s.ownerDocument,
      r = null == i ? void 0 : i.querySelector(e);
    null != r && (null === (l = t.current) || void 0 === l || l.scrollIntoViewNode({
      node: r,
      padding: 4 * o.MESSAGE_PADDING,
      callback: () => null == r ? void 0 : r.focus()
    }))
  }, [n.keyboardModeEnabled]), h = s.useCallback(() => {
    !n.hasMoreAfter && i.ComponentDispatch.dispatchToLastSubscribed(u.ComponentActions.TEXTAREA_FOCUS)
  }, [n.hasMoreAfter]), C = (0, a.default)({
    id: r.MESSAGE_ID_PREFIX,
    preserveFocusPosition: !1,
    setFocus: f,
    isEnabled: n.keyboardModeEnabled && !n.isEditing,
    scrollToStart: c,
    scrollToEnd: d,
    onNavigateNextAtEnd: h
  }), p = s.useCallback(e => {
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