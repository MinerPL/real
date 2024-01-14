"use strict";
s.r(t), s.d(t, {
  NotificationTypes: function() {
    return i
  },
  default: function() {
    return h
  }
});
var o, i, l = s("37983"),
  n = s("884691"),
  C = s("414456"),
  a = s.n(C),
  r = s("907002"),
  d = s("77078"),
  u = s("128295"),
  c = s("414868"),
  f = s("587974"),
  p = s("299341");
(o = i || (i = {}))[o.UPDATE = 0] = "UPDATE", o[o.NEW = 1] = "NEW";
let x = {
  config: {
    friction: 26,
    tension: 700,
    mass: 1
  },
  initial: {
    scale: 1,
    opacity: 1
  },
  from: {
    scale: .6,
    opacity: 0
  },
  enter: {
    scale: 1,
    opacity: 1
  },
  leave: {
    scale: .6,
    opacity: 0
  }
};
var h = n.memo(function(e) {
  let {
    className: t,
    disabled: s = !1,
    innerClassName: o,
    childClassName: i,
    iconClassName: n,
    icon: C,
    children: h,
    onClick: j,
    isActive: F,
    onMouseEnter: m,
    onMouseLeave: L,
    onFocus: M,
    onBlur: b,
    pulse: E,
    sparkle: _,
    notification: N,
    "aria-label": A,
    "aria-expanded": v,
    "aria-haspopup": g,
    "aria-controls": D
  } = e, T = (0, r.useTransition)(null != h, {
    ...x,
    keys: e => e ? "children" : "icon"
  }), B = e => {
    let {
      component: t
    } = e;
    return null != N ? (0, l.jsxs)("div", {
      className: p.buttonContent,
      children: [(0, l.jsx)(f.default, {
        className: p.iconMask,
        mask: f.MaskIDs.CHAT_INPUT_BUTTON_NOTIFICATION,
        width: 24,
        height: 24,
        children: t
      }), (0, l.jsx)("span", {
        className: p.notificationDot
      })]
    }) : t
  };
  return (0, l.jsxs)(d.Button, {
    look: d.Button.Looks.BLANK,
    size: d.Button.Sizes.NONE,
    "aria-label": A,
    "aria-expanded": v,
    "aria-haspopup": g,
    "aria-controls": D,
    disabled: s,
    className: a(t, {
      [p.active]: F
    }),
    innerClassName: a(p.button, o, {
      [p.pulseButton]: E
    }),
    onClick: j,
    onMouseEnter: m,
    onMouseLeave: L,
    onFocus: M,
    onBlur: b,
    focusProps: {
      offset: {
        top: 4,
        bottom: 4
      }
    },
    children: [T((e, t, s) => {
      let {
        key: o
      } = s;
      return t ? (0, l.jsx)(r.animated.div, {
        style: e,
        className: a(p.buttonWrapper, i),
        children: B({
          component: h
        })
      }, o) : null != C ? (0, l.jsx)(r.animated.div, {
        style: e,
        className: a(p.buttonWrapper, i),
        children: B({
          component: (0, l.jsx)(C, {
            className: a(p.icon, n, {
              [p.pulseIcon]: E
            })
          })
        })
      }, o) : void 0
    }), _ && (0, l.jsxs)("div", {
      className: p.sparkleContainer,
      children: [(0, l.jsx)(c.default, {
        className: p.sparkleStar
      }), (0, l.jsx)(u.default, {
        className: p.sparklePlus
      })]
    })]
  })
})