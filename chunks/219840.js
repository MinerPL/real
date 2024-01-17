"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var s = a("884691"),
  n = a("974667");

function l(e) {
  let {
    listRef: t,
    padding: a,
    channel: l,
    isEnabled: r
  } = e, i = s.useCallback(e => {
    let s = t.current,
      n = document.querySelector(e);
    null != n && (null == s || s.scrollIntoViewNode({
      node: n,
      padding: a,
      callback: () => {
        var t;
        null === (t = document.querySelector(e)) || void 0 === t || t.focus({
          preventScroll: !0
        })
      }
    }))
  }, [a]), o = s.useCallback(() => new Promise(e => {
    let a = t.current;
    null == a || a.scrollToTop({
      callback: () => requestAnimationFrame(e)
    })
  }), []), d = s.useCallback(() => new Promise(e => {
    let a = t.current;
    null == a || a.scrollToBottom({
      callback: () => requestAnimationFrame(e)
    })
  }), []);
  return (0, n.default)({
    id: "forum-channel-list-".concat(l.id),
    isEnabled: r,
    scrollToStart: o,
    scrollToEnd: d,
    setFocus: i
  })
}