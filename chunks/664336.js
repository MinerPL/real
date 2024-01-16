"use strict";
n.r(t), n.d(t, {
  Icon: function() {
    return _
  },
  Divider: function() {
    return v
  },
  default: function() {
    return E
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  l = n.n(s),
  a = n("353386"),
  u = n("394846"),
  o = n("77078"),
  c = n("597590"),
  d = n("980428"),
  f = n("772280"),
  p = n("587974"),
  h = n("133934");
let _ = e => {
    let {
      className: t,
      iconClassName: n,
      children: r,
      selected: s = !1,
      disabled: a = !1,
      showBadge: u = !1,
      color: c,
      foreground: d,
      background: f,
      icon: _,
      onClick: v,
      onContextMenu: m,
      tooltip: E = null,
      tooltipColor: g,
      tooltipPosition: C = "bottom",
      hideOnClick: b = !0,
      role: x,
      "aria-label": y,
      "aria-hidden": I,
      "aria-checked": N,
      "aria-expanded": S,
      "aria-haspopup": T
    } = e, A = (0, i.jsx)(_, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: l(n, h.icon),
      foreground: null != d ? d : void 0,
      background: null != f ? f : void 0,
      color: c
    }), M = y;
    return null == M && "string" == typeof E && (M = E), (0, i.jsx)(o.Tooltip, {
      text: E,
      color: g,
      position: C,
      hideOnClick: b,
      children: e => {
        let {
          onMouseEnter: E,
          onMouseLeave: g,
          onFocus: C,
          onBlur: b
        } = e;
        return null == v ? (0, i.jsx)("div", {
          className: l(t, [h.iconWrapper]),
          children: (0, i.jsx)(_, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: l(n, h.icon),
            foreground: null != d ? d : void 0,
            background: null != f ? f : void 0,
            color: c,
            "aria-hidden": I,
            onMouseEnter: E,
            onMouseLeave: g,
            onFocus: C,
            onBlur: b
          })
        }) : (0, i.jsxs)(o.Clickable, {
          tag: "div",
          onClick: a ? void 0 : v,
          onContextMenu: a ? void 0 : m,
          onMouseEnter: E,
          onMouseLeave: g,
          onFocus: C,
          onBlur: b,
          className: l(t, {
            [h.iconWrapper]: !0,
            [h.clickable]: !a && null != v,
            [h.selected]: s
          }),
          role: x,
          "aria-label": M,
          "aria-hidden": I,
          "aria-checked": N,
          "aria-haspopup": T,
          "aria-expanded": S,
          tabIndex: a || null == v ? -1 : 0,
          children: [u ? (0, i.jsx)(p.default, {
            mask: p.default.Masks.HEADER_BAR_BADGE,
            children: A
          }) : A, u ? (0, i.jsx)("span", {
            className: h.iconBadge
          }) : null, r]
        })
      }
    })
  },
  v = e => {
    let {
      className: t
    } = e;
    return (0, i.jsx)("div", {
      className: l(h.divider, t)
    })
  },
  m = e => {
    let {
      className: t,
      innerClassName: n,
      children: s,
      childrenBottom: d,
      toolbar: f,
      onDoubleClick: p,
      "aria-label": _,
      "aria-labelledby": v,
      role: m,
      scrollable: E,
      transparent: g = !1
    } = e, C = r.useRef(null), b = r.useContext(c.default);
    return (0, i.jsx)("section", {
      className: l(t, h.container, {
        [h.themed]: !g,
        [h.transparent]: g,
        [h.themedMobile]: u.isMobile
      }),
      "aria-label": _,
      "aria-labelledby": v,
      role: m,
      ref: C,
      children: (0, i.jsxs)(o.FocusRingScope, {
        containerRef: C,
        children: [(0, i.jsxs)("div", {
          className: h.upperContainer,
          children: [(0, i.jsxs)("div", {
            className: l(h.children, n, {
              [h.scrollable]: E
            }),
            onDoubleClick: p,
            children: [u.isMobile && null != b ? (0, i.jsx)(a.default, {
              onClick: b,
              className: h.hamburger
            }) : null, s]
          }), null != f ? (0, i.jsx)("div", {
            className: h.toolbar,
            children: f
          }) : null]
        }), d]
      })
    })
  };
m.Icon = _, m.Title = e => {
  let {
    className: t,
    wrapperClassName: n,
    children: r,
    onContextMenu: s,
    onClick: a,
    id: u,
    muted: c = !1,
    level: d = 1
  } = e, f = (0, i.jsx)(o.HeadingLevel, {
    forceLevel: d,
    children: (0, i.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      color: c ? "header-secondary" : void 0,
      className: l(t, h.title),
      id: u,
      children: r
    })
  });
  return null != a ? (0, i.jsx)(o.Clickable, {
    onClick: a,
    onContextMenu: s,
    className: l(n, h.titleWrapper),
    children: f
  }) : (0, i.jsx)("div", {
    className: l(n, h.titleWrapper),
    onContextMenu: s,
    children: f
  })
}, m.Divider = v, m.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, i.jsx)(f.default, {
    className: h.caret
  }) : (0, i.jsx)(d.default, {
    className: h.caret
  })
};
var E = m