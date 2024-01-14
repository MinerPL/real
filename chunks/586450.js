"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("77078"),
  a = n("986632"),
  u = n("405607"),
  d = n("524768"),
  c = n("355263"),
  f = n("65557");
let p = [16, 12, 8, 12];

function m(e) {
  let {
    className: t,
    channel: n,
    sections: r,
    activeCategoryIndex: m,
    filteredSectionId: h,
    onSectionClick: E,
    applicationCommandListRef: S
  } = e, g = i.useRef(null), C = i.useCallback((e, t) => {
    var n;
    let l = 8;
    return (null === (n = r[t + 1]) || void 0 === n ? void 0 : n.type) === d.ApplicationCommandSectionType.BUILT_IN && (l += 8), 32 + l
  }, [r]), T = i.useCallback((e, t) => {
    var n;
    if (!t) return 0 === e ? 0 : 8;
    return (null === (n = r[e + 1]) || void 0 === n ? void 0 : n.type) === d.ApplicationCommandSectionType.BUILT_IN ? 0 : 8
  }, [r]), v = i.useCallback((e, t) => {
    let i = r[t];
    if (null == i) return;
    let o = (0, c.getIconComponent)(i),
      a = i.type === d.ApplicationCommandSectionType.BUILT_IN ? 4 : 0,
      u = 32 - 2 * a,
      p = (0, l.jsx)(o, {
        channel: n,
        section: i,
        isSelected: null != h ? i.id === h : m === t,
        padding: a,
        width: u,
        height: u,
        selectable: !0
      }),
      S = i.type !== d.ApplicationCommandSectionType.BUILT_IN && t < r.length - 1 && r[t + 1].type === d.ApplicationCommandSectionType.BUILT_IN;
    return (0, l.jsxs)("div", {
      className: f.section,
      children: [(0, l.jsx)(s.Tooltip, {
        text: i.name,
        position: "right",
        children: e => {
          let {
            onClick: t,
            ...n
          } = e;
          return (0, l.jsx)(s.Clickable, {
            "aria-label": i.name,
            onClick: () => {
              E(i), null == t || t()
            },
            ...n,
            children: p
          })
        }
      }), S ? (0, l.jsx)("hr", {
        className: f.builtInSeparator
      }) : null]
    }, i.id)
  }, [m, n, E, r, h]);
  return 0 === r.length ? null : (0, l.jsx)("div", {
    className: o(t, f.wrapper),
    children: (0, l.jsx)(u.default, {
      categoryListRef: g,
      expressionsListRef: S,
      store: a.ApplicationCommandDiscoveryPickerStore,
      categories: r,
      className: f.list,
      renderCategoryListItem: v,
      rowCount: r.length,
      categoryHeight: C,
      listPadding: p,
      getScrollOffsetForIndex: T
    })
  })
}