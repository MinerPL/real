"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("884691"),
  i = n("974667"),
  r = n("942367"),
  o = n("244201"),
  s = n("851745");

function a(e) {
  var t, n, a;
  let {
    navId: u,
    scrollerRef: d,
    state: c,
    onFocus: f
  } = e, {
    renderWindow: p
  } = l.useContext(o.default), m = (e, t) => {
    var n;
    if (null === (n = d.current) || void 0 === n || n.scrollToTop(), e && null != c.query) {
      let e = c.query.typeInfo.focusMode,
        n = !(e === s.FocusMode.MANUAL || e === s.FocusMode.AUTO_WHEN_FILTERED && 0 === c.query.queryText.length);
      c.isVisible && (!0 !== t || !1 !== n) ? (E.setFocus("0"), null == f || f(0)) : (E.setFocus(null), null == f || f(null))
    }
  }, h = e => {
    var t;
    if (null === (t = d.current) || void 0 === t || t.scrollToBottom(), e && null != c.query && c.query.resultCount > 0) {
      let e = c.query.resultCount - 1;
      E.setFocus(e.toString()), null == f || f(e)
    }
  }, E = (0, i.default)({
    id: u,
    isEnabled: c.isVisible,
    orientation: r.Orientations.VERTICAL,
    useVirtualFocus: !0,
    setFocus: (e, t) => {
      let n = p.document.querySelector(e);
      if (null != n) {
        var l;
        null === (l = d.current) || void 0 === l || l.scrollIntoViewNode({
          node: n
        })
      }
      null == f || f(+t)
    },
    onNavigateNextAtEnd: () => m(!0),
    onNavigatePreviousAtStart: () => h(!0),
    scrollToStart: () => (m(!1, !1), Promise.resolve()),
    scrollToEnd: () => (h(!1), Promise.resolve())
  });
  return l.useEffect(() => {
    m(!0, !0)
  }, [null === (t = c.query) || void 0 === t ? void 0 : t.type, null === (n = c.query) || void 0 === n ? void 0 : n.queryText, null === (a = c.query) || void 0 === a ? void 0 : a.isLoading, c.isVisible]), E
}