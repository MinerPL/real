"use strict";
n.r(t), n.d(t, {
  MenuSubmenuListItem: function() {
    return u
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("222163"),
  a = n("697917"),
  o = n("124299"),
  l = n("946032");

function u(e) {
  let {
    parentItem: t,
    isFocused: n,
    menuSubmenuProps: u,
    rows: c,
    rowHeight: d,
    onScroll: f,
    listClassName: E
  } = e, h = r.useRef(null), p = r.useRef(null), _ = r.useRef(null), S = r.useRef(null), {
    isUsingKeyboardNavigation: m,
    focusIndex: T,
    ...g
  } = u;
  r.useLayoutEffect(() => {
    var e;
    n && ((0, a.ensureItemVisible)(h), null === (e = _.current) || void 0 === e || e.focus())
  }, [n]), r.useEffect(() => {
    if (n && T >= 0 && m) {
      var e;
      null === (e = S.current) || void 0 === e || e.scrollRowIntoView(T)
    }
  }, [n, m, T]);
  let I = r.useCallback(e => c[e], [c]);
  return (0, i.jsxs)("div", {
    ref: h,
    className: l.submenuContainer,
    children: [(0, i.jsx)("div", {
      ref: p
    }), t, n ? (0, i.jsx)(s.ReferencePositionLayer, {
      reference: p,
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      fixed: !0,
      spacing: 4,
      position: "right",
      align: "top",
      children: () => c.length > 0 && (0, i.jsx)("div", {
        className: l.submenuPaddingContainer,
        children: (0, i.jsx)("div", {
          className: l.submenu,
          ...g,
          ref: _,
          children: (0, i.jsx)(o.default, {
            ref: S,
            className: E,
            listPadding: [6, 0, 6, 8],
            onScroll: f,
            renderRow: I,
            rowCount: c.length,
            rowHeight: d
          })
        })
      })
    }) : null]
  })
}