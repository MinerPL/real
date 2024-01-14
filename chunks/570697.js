"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("781738");
var l = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
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
    titleId: i,
    description: a,
    children: f,
    className: h,
    errors: E,
    disabled: C = !1,
    hideDivider: p = !1,
    showBorder: _ = !1,
    borderType: v,
    hasBackground: m = !1,
    forcedDivider: R = !1,
    showPremiumIcon: I = !1
  } = e;
  return (0, l.jsx)("div", {
    className: r(c.customizationSection, h, {
      [c.disabled]: C,
      [c.hideDivider]: p,
      [c.showBorder]: _,
      [c.withDivider]: R
    }),
    children: (0, l.jsxs)(u.default, {
      className: c.customizationSectionBorder,
      backgroundClassName: c.customizationSectionBackground,
      isShown: _,
      type: v,
      hasBackground: m,
      children: [(0, l.jsxs)(s.FormTitle, {
        className: c.title,
        id: i,
        children: [t, I && (0, l.jsx)(o.default, {}), n]
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