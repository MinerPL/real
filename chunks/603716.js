"use strict";
n.r(t), n.d(t, {
  FormSection: function() {
    return u
  }
});
var i = n("37983"),
  s = n("884691"),
  r = n("860226"),
  a = n("516826"),
  o = n("818810"),
  l = n("364005");

function u(e) {
  var t;
  let {
    children: n,
    className: u,
    titleClassName: d,
    title: c,
    icon: f,
    disabled: _,
    htmlFor: h,
    tag: g = "h5",
    ...m
  } = e, E = s.useId(), p = null !== (t = m.titleId) && void 0 !== t ? t : E;
  return null != c ? (0, i.jsx)("div", {
    className: u,
    children: (0, i.jsx)(r.HeadingLevel, {
      component: (0, i.jsxs)("div", {
        className: l.sectionTitle,
        children: [f, null != c ? (0, i.jsx)(o.FormTitle, {
          tag: g,
          id: p,
          htmlFor: h,
          disabled: _,
          className: d,
          children: c
        }) : null]
      }),
      children: (0, i.jsx)("div", {
        className: l.children,
        children: (0, i.jsx)(a.FormContextProvider, {
          titleId: p,
          children: n
        })
      })
    })
  }) : (0, i.jsx)("div", {
    className: u,
    children: n
  })
}