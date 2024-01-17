"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  u = n.n(l),
  o = n("77078"),
  s = n("511606");

function a(e) {
  let {
    alt: t,
    ...n
  } = e, [l, u] = r.useState(!0);
  return (0, i.jsxs)(i.Fragment, {
    children: [l && (0, i.jsx)(o.Spinner, {
      type: o.Spinner.Type.LOW_MOTION,
      className: s.loader
    }), (0, i.jsx)("img", {
      ...n,
      alt: t,
      onLoad: () => u(!1)
    })]
  })
}

function d(e) {
  let {
    src: t,
    backgroundSrc: n,
    alt: r,
    aspectRatio: l,
    className: o,
    imageChildClassName: d,
    ...c
  } = e;
  return (0, i.jsxs)("div", {
    className: u(s.container, o),
    children: [(0, i.jsx)("img", {
      src: n,
      alt: r,
      className: s.backgroundImage
    }), (0, i.jsx)("div", {
      className: s.backgroundImageFilter
    }), (0, i.jsx)("div", {
      style: {
        aspectRatio: l
      },
      className: s.imageContainer,
      children: (0, i.jsx)(a, {
        src: t,
        alt: r,
        className: u(s.image, d),
        ...c
      })
    })]
  })
}