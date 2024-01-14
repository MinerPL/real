"use strict";
n.r(t), n.d(t, {
  Icon: function() {
    return C
  },
  Divider: function() {
    return p
  },
  default: function() {
    return v
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  s = n.n(r),
  a = n("353386"),
  o = n("394846"),
  u = n("77078"),
  c = n("597590"),
  d = n("980428"),
  f = n("772280"),
  h = n("587974"),
  E = n("133934");
let C = e => {
    let {
      className: t,
      iconClassName: n,
      children: i,
      selected: r = !1,
      disabled: a = !1,
      showBadge: o = !1,
      color: c,
      foreground: d,
      background: f,
      icon: C,
      onClick: p,
      onContextMenu: _,
      tooltip: v = null,
      tooltipColor: m,
      tooltipPosition: R = "bottom",
      hideOnClick: I = !0,
      role: g,
      "aria-label": S,
      "aria-hidden": N,
      "aria-checked": L,
      "aria-expanded": T,
      "aria-haspopup": x
    } = e, A = (0, l.jsx)(C, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: s(n, E.icon),
      foreground: null != d ? d : void 0,
      background: null != f ? f : void 0,
      color: c
    }), M = S;
    return null == M && "string" == typeof v && (M = v), (0, l.jsx)(u.Tooltip, {
      text: v,
      color: m,
      position: R,
      hideOnClick: I,
      children: e => {
        let {
          onMouseEnter: v,
          onMouseLeave: m,
          onFocus: R,
          onBlur: I
        } = e;
        return null == p ? (0, l.jsx)("div", {
          className: s(t, [E.iconWrapper]),
          children: (0, l.jsx)(C, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: s(n, E.icon),
            foreground: null != d ? d : void 0,
            background: null != f ? f : void 0,
            color: c,
            "aria-hidden": N,
            onMouseEnter: v,
            onMouseLeave: m,
            onFocus: R,
            onBlur: I
          })
        }) : (0, l.jsxs)(u.Clickable, {
          tag: "div",
          onClick: a ? void 0 : p,
          onContextMenu: a ? void 0 : _,
          onMouseEnter: v,
          onMouseLeave: m,
          onFocus: R,
          onBlur: I,
          className: s(t, {
            [E.iconWrapper]: !0,
            [E.clickable]: !a && null != p,
            [E.selected]: r
          }),
          role: g,
          "aria-label": M,
          "aria-hidden": N,
          "aria-checked": L,
          "aria-haspopup": x,
          "aria-expanded": T,
          tabIndex: a || null == p ? -1 : 0,
          children: [o ? (0, l.jsx)(h.default, {
            mask: h.default.Masks.HEADER_BAR_BADGE,
            children: A
          }) : A, o ? (0, l.jsx)("span", {
            className: E.iconBadge
          }) : null, i]
        })
      }
    })
  },
  p = e => {
    let {
      className: t
    } = e;
    return (0, l.jsx)("div", {
      className: s(E.divider, t)
    })
  },
  _ = e => {
    let {
      className: t,
      innerClassName: n,
      children: r,
      childrenBottom: d,
      toolbar: f,
      onDoubleClick: h,
      "aria-label": C,
      "aria-labelledby": p,
      role: _,
      scrollable: v,
      transparent: m = !1
    } = e, R = i.useRef(null), I = i.useContext(c.default);
    return (0, l.jsx)("section", {
      className: s(t, E.container, {
        [E.themed]: !m,
        [E.transparent]: m,
        [E.themedMobile]: o.isMobile
      }),
      "aria-label": C,
      "aria-labelledby": p,
      role: _,
      ref: R,
      children: (0, l.jsxs)(u.FocusRingScope, {
        containerRef: R,
        children: [(0, l.jsxs)("div", {
          className: E.upperContainer,
          children: [(0, l.jsxs)("div", {
            className: s(E.children, n, {
              [E.scrollable]: v
            }),
            onDoubleClick: h,
            children: [o.isMobile && null != I ? (0, l.jsx)(a.default, {
              onClick: I,
              className: E.hamburger
            }) : null, r]
          }), null != f ? (0, l.jsx)("div", {
            className: E.toolbar,
            children: f
          }) : null]
        }), d]
      })
    })
  };
_.Icon = C, _.Title = e => {
  let {
    className: t,
    wrapperClassName: n,
    children: i,
    onContextMenu: r,
    onClick: a,
    id: o,
    muted: c = !1,
    level: d = 1
  } = e, f = (0, l.jsx)(u.HeadingLevel, {
    forceLevel: d,
    children: (0, l.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      color: c ? "header-secondary" : void 0,
      className: s(t, E.title),
      id: o,
      children: i
    })
  });
  return null != a ? (0, l.jsx)(u.Clickable, {
    onClick: a,
    onContextMenu: r,
    className: s(n, E.titleWrapper),
    children: f
  }) : (0, l.jsx)("div", {
    className: s(n, E.titleWrapper),
    onContextMenu: r,
    children: f
  })
}, _.Divider = p, _.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, l.jsx)(f.default, {
    className: E.caret
  }) : (0, l.jsx)(d.default, {
    className: E.caret
  })
};
var v = _