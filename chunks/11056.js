"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var a = l("37983"),
  n = l("884691"),
  r = l("414456"),
  i = l.n(r),
  u = l("90915"),
  s = l("77078"),
  o = l("726446");
let d = n.forwardRef(function(e, t) {
  var l;
  let {
    avatar: n,
    name: r,
    children: d,
    subText: c,
    decorators: f,
    onClick: m,
    selected: h,
    muted: p,
    to: E,
    avatarClassName: v,
    selectedClassName: _,
    innerClassName: x,
    wrapContent: I,
    highlighted: S,
    focusProps: g,
    ...L
  } = e;
  L.className = i(L.className, o.container, {
    [o.selected]: h,
    [o.highlighted]: S,
    [null != _ ? _ : ""]: h,
    [o.clickable]: !h && (null != E || null != m)
  }), L["aria-selected"] = null !== (l = L["aria-selected"]) && void 0 !== l ? l : h;
  let M = (0, a.jsxs)("div", {
    className: i(x, o.layout, {
      [o.muted]: !h && p,
      [o.wrappedLayout]: I
    }),
    children: [(0, a.jsx)("div", {
      className: i(o.avatar, v),
      children: n
    }), (0, a.jsxs)("div", {
      className: o.content,
      children: [(0, a.jsxs)("div", {
        className: o.nameAndDecorators,
        children: [(0, a.jsx)("div", {
          className: i(o.name, {
            [o.wrappedName]: I
          }),
          children: r
        }), f]
      }), null != c ? (0, a.jsx)("div", {
        className: o.subText,
        children: c
      }) : null]
    }), null != d ? (0, a.jsx)("div", {
      className: o.children,
      children: d
    }) : null]
  });
  return null != E ? (0, a.jsx)(s.FocusRing, {
    ...g,
    children: (0, a.jsx)(u.Link, {
      to: E,
      onClick: m,
      ...L,
      role: "listitem",
      ref: t,
      children: M
    })
  }) : null != m ? (0, a.jsx)(s.Clickable, {
    onClick: m,
    focusProps: g,
    ...L,
    role: "listitem",
    innerRef: t,
    children: M
  }) : (0, a.jsx)(s.FocusRing, {
    ...g,
    children: (0, a.jsx)("div", {
      ...L,
      role: "listitem",
      ref: t,
      children: M
    })
  })
});
var c = d