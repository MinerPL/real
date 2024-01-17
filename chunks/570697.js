"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("781738");
var l = n("37983");
n("884691");
var r = n("414456"),
  i = n.n(r),
  s = n("77078"),
  a = n("254490"),
  o = n("891653"),
  u = n("632892"),
  c = n("326908");

function d(e) {
  let {
    errors: t
  } = e;
  return (0, l.jsx)(l.Fragment, {
    children: t.map((e, t) => (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: c.errorMessage,
      children: e.replace(/[0-9.,]+ ?kb/g, e => {
        let t = 1024 * parseInt(e, 10);
        return isNaN(t) ? e : (0, a.sizeString)(t)
      })
    }, t))
  })
}

function f(e) {
  let {
    title: t,
    titleIcon: n,
    titleId: r,
    description: a,
    children: f,
    className: h,
    errors: E,
    disabled: p = !1,
    hideDivider: C = !1,
    showBorder: _ = !1,
    borderType: m,
    hasBackground: v = !1,
    forcedDivider: I = !1,
    showPremiumIcon: g = !1
  } = e;
  return (0, l.jsx)("div", {
    className: i(c.customizationSection, h, {
      [c.disabled]: p,
      [c.hideDivider]: C,
      [c.showBorder]: _,
      [c.withDivider]: I
    }),
    children: (0, l.jsxs)(u.default, {
      className: c.customizationSectionBorder,
      backgroundClassName: c.customizationSectionBackground,
      isShown: _,
      type: m,
      hasBackground: v,
      children: [(0, l.jsxs)(s.FormTitle, {
        className: c.title,
        id: r,
        children: [t, g && (0, l.jsx)(o.default, {}), n]
      }), null != a ? (0, l.jsx)(s.FormText, {
        type: s.FormText.Types.DESCRIPTION,
        className: c.sectionDescription,
        children: a
      }) : null, f, null != E && (0, l.jsx)(d, {
        errors: E
      })]
    })
  })
}