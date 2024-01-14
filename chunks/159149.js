"use strict";
n.r(t), n.d(t, {
  CTAType: function() {
    return i
  },
  default: function() {
    return E
  }
});
var r, i, l = n("37983");
n("884691");
var o = n("77078"),
  s = n("145131"),
  a = n("181114"),
  u = n("376641"),
  c = n("782340"),
  d = n("198699");
(r = i || (i = {}))[r.CONTINUE = 0] = "CONTINUE", r[r.UPGRADE = 1] = "UPGRADE", r[r.PURCHASE = 2] = "PURCHASE";
let f = e => {
  let {
    onBack: t,
    backText: n,
    primaryIcon: r,
    primaryCTA: i,
    primaryType: f,
    primaryText: E,
    primaryTooltip: _,
    primaryDisabled: p,
    primarySubmitting: C,
    onPrimary: I,
    secondaryText: A,
    onSecondary: T
  } = e;
  return (0, l.jsxs)(o.ModalFooter, {
    justify: s.default.Justify.BETWEEN,
    align: s.default.Align.CENTER,
    children: [(() => {
      if (null == i || null == E) return null;
      let e = 2 === i ? a.default : o.Button,
        t = {
          innerClassName: d.button,
          type: f,
          disabled: p,
          submitting: C,
          color: 0 === i ? o.Button.Colors.BRAND : o.Button.Colors.GREEN,
          onClick: I
        };
      return null != _ ? (0, l.jsx)(o.Tooltip, {
        text: _,
        children: n => (0, l.jsxs)(e, {
          ...n,
          ...t,
          children: [null == r ? null : (0, l.jsx)(r, {
            className: d.primaryIcon
          }), E]
        })
      }) : (0, l.jsxs)(e, {
        ...t,
        children: [null == r ? null : (0, l.jsx)(r, {
          className: d.primaryIcon
        }), E]
      })
    })(), null == A ? null : (0, l.jsx)(o.Button, {
      color: o.Button.Colors.PRIMARY,
      look: o.Button.Looks.LINK,
      onClick: T,
      children: A
    }), (0, l.jsx)(u.default, {}), null == t ? null : (0, l.jsx)(o.Button, {
      className: d.back,
      color: o.Button.Colors.PRIMARY,
      look: o.Button.Looks.LINK,
      onClick: t,
      children: null != n ? n : c.default.Messages.BACK
    })]
  })
};
f.CTAType = i;
var E = f