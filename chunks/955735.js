"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  u = n("414456"),
  l = n.n(u),
  o = n("77078"),
  s = n("511606");

function a(e) {
  let {
    alt: t,
    ...n
  } = e, [u, l] = i.useState(!0);
  return (0, r.jsxs)(r.Fragment, {
    children: [u && (0, r.jsx)(o.Spinner, {
      type: o.Spinner.Type.LOW_MOTION,
      className: s.loader
    }), (0, r.jsx)("img", {
      ...n,
      alt: t,
      onLoad: () => l(!1)
    })]
  })
}

function d(e) {
  let {
    src: t,
    backgroundSrc: n,
    alt: i,
    aspectRatio: u,
    className: o,
    imageChildClassName: d,
    ...c
  } = e;
  return (0, r.jsxs)("div", {
    className: l(s.container, o),
    children: [(0, r.jsx)("img", {
      src: n,
      alt: i,
      className: s.backgroundImage
    }), (0, r.jsx)("div", {
      className: s.backgroundImageFilter
    }), (0, r.jsx)("div", {
      style: {
        aspectRatio: u
      },
      className: s.imageContainer,
      children: (0, r.jsx)(a, {
        src: t,
        alt: i,
        className: l(s.image, d),
        ...c
      })
    })]
  })
}