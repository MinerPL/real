"use strict";
n.r(t), n.d(t, {
  FormSwitch: function() {
    return E
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("414456"),
  a = n.n(s),
  o = n("718776"),
  l = n("980672"),
  u = n("414055"),
  c = n("370373"),
  d = n("329272"),
  f = n("447256");

function E(e) {
  let {
    value: t,
    disabled: n = !1,
    hideBorder: s = !1,
    tooltipNote: E,
    onChange: h,
    className: p,
    style: _,
    note: S,
    children: m
  } = e, T = r.useRef(null), g = r.useRef(null), I = r.useId(), C = (0, i.jsx)(l.Switch, {
    id: I,
    checked: t,
    onChange: h,
    disabled: n,
    focusProps: {
      enabled: !1
    },
    innerRef: T
  });
  return (0, i.jsxs)("div", {
    style: _,
    className: a(f.container, p, {
      [f.disabled]: n
    }),
    children: [(0, i.jsx)(o.FocusRing, {
      within: !0,
      offset: -4,
      focusTarget: T,
      ringTarget: g,
      children: (0, i.jsxs)("div", {
        className: f.labelRow,
        ref: g,
        children: [(0, i.jsx)("label", {
          htmlFor: I,
          className: f.title,
          children: m
        }), (0, i.jsx)("div", {
          className: f.control,
          children: null != E ? (0, i.jsx)(u.TooltipContainer, {
            text: E,
            children: C
          }) : C
        })]
      })
    }), null != S && (0, i.jsx)("div", {
      className: f.note,
      children: (0, i.jsx)(d.FormText, {
        disabled: n,
        type: d.FormTextTypes.DESCRIPTION,
        children: S
      })
    }), !s && (0, i.jsx)(c.FormDivider, {
      className: f.dividerDefault
    })]
  })
}