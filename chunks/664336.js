"use strict";
n.r(t), n.d(t, {
  Icon: function() {
    return p
  },
  Divider: function() {
    return C
  },
  default: function() {
    return m
  }
});
var l = n("37983"),
  r = n("884691"),
  i = n("414456"),
  s = n.n(i),
  a = n("353386"),
  o = n("394846"),
  u = n("77078"),
  c = n("597590"),
  d = n("980428"),
  f = n("772280"),
  h = n("587974"),
  E = n("133934");
let p = e => {
    let {
      className: t,
      iconClassName: n,
      children: r,
      selected: i = !1,
      disabled: a = !1,
      showBadge: o = !1,
      color: c,
      foreground: d,
      background: f,
      icon: p,
      onClick: C,
      onContextMenu: _,
      tooltip: m = null,
      tooltipColor: v,
      tooltipPosition: I = "bottom",
      hideOnClick: g = !0,
      role: S,
      "aria-label": R,
      "aria-hidden": N,
      "aria-checked": L,
      "aria-expanded": T,
      "aria-haspopup": x
    } = e, A = (0, l.jsx)(p, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: s(n, E.icon),
      foreground: null != d ? d : void 0,
      background: null != f ? f : void 0,
      color: c
    }), M = R;
    return null == M && "string" == typeof m && (M = m), (0, l.jsx)(u.Tooltip, {
      text: m,
      color: v,
      position: I,
      hideOnClick: g,
      children: e => {
        let {
          onMouseEnter: m,
          onMouseLeave: v,
          onFocus: I,
          onBlur: g
        } = e;
        return null == C ? (0, l.jsx)("div", {
          className: s(t, [E.iconWrapper]),
          children: (0, l.jsx)(p, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: s(n, E.icon),
            foreground: null != d ? d : void 0,
            background: null != f ? f : void 0,
            color: c,
            "aria-hidden": N,
            onMouseEnter: m,
            onMouseLeave: v,
            onFocus: I,
            onBlur: g
          })
        }) : (0, l.jsxs)(u.Clickable, {
          tag: "div",
          onClick: a ? void 0 : C,
          onContextMenu: a ? void 0 : _,
          onMouseEnter: m,
          onMouseLeave: v,
          onFocus: I,
          onBlur: g,
          className: s(t, {
            [E.iconWrapper]: !0,
            [E.clickable]: !a && null != C,
            [E.selected]: i
          }),
          role: S,
          "aria-label": M,
          "aria-hidden": N,
          "aria-checked": L,
          "aria-haspopup": x,
          "aria-expanded": T,
          tabIndex: a || null == C ? -1 : 0,
          children: [o ? (0, l.jsx)(h.default, {
            mask: h.default.Masks.HEADER_BAR_BADGE,
            children: A
          }) : A, o ? (0, l.jsx)("span", {
            className: E.iconBadge
          }) : null, r]
        })
      }
    })
  },
  C = e => {
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
      children: i,
      childrenBottom: d,
      toolbar: f,
      onDoubleClick: h,
      "aria-label": p,
      "aria-labelledby": C,
      role: _,
      scrollable: m,
      transparent: v = !1
    } = e, I = r.useRef(null), g = r.useContext(c.default);
    return (0, l.jsx)("section", {
      className: s(t, E.container, {
        [E.themed]: !v,
        [E.transparent]: v,
        [E.themedMobile]: o.isMobile
      }),
      "aria-label": p,
      "aria-labelledby": C,
      role: _,
      ref: I,
      children: (0, l.jsxs)(u.FocusRingScope, {
        containerRef: I,
        children: [(0, l.jsxs)("div", {
          className: E.upperContainer,
          children: [(0, l.jsxs)("div", {
            className: s(E.children, n, {
              [E.scrollable]: m
            }),
            onDoubleClick: h,
            children: [o.isMobile && null != g ? (0, l.jsx)(a.default, {
              onClick: g,
              className: E.hamburger
            }) : null, i]
          }), null != f ? (0, l.jsx)("div", {
            className: E.toolbar,
            children: f
          }) : null]
        }), d]
      })
    })
  };
_.Icon = p, _.Title = e => {
  let {
    className: t,
    wrapperClassName: n,
    children: r,
    onContextMenu: i,
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
      children: r
    })
  });
  return null != a ? (0, l.jsx)(u.Clickable, {
    onClick: a,
    onContextMenu: i,
    className: s(n, E.titleWrapper),
    children: f
  }) : (0, l.jsx)("div", {
    className: s(n, E.titleWrapper),
    onContextMenu: i,
    children: f
  })
}, _.Divider = C, _.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, l.jsx)(f.default, {
    className: E.caret
  }) : (0, l.jsx)(d.default, {
    className: E.caret
  })
};
var m = _