"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  },
  MonetizationListingImageAspectStable: function() {
    return c
  }
});
var r = n("37983");
n("884691");
var u = n("617258"),
  s = n("769846"),
  l = n("801765"),
  i = n("955735");
let o = (0, u.cssValueToNumber)(s.default.ASPECT_STABLE_IMAGE_CONTAINER_PADDING);

function a(e) {
  let {
    listing: t,
    imageSize: n,
    alt: u,
    ...s
  } = e, i = (0, l.useListingThumbnailUrl)(t, n);
  return (0, r.jsx)("img", {
    src: i,
    alt: u,
    ...s
  })
}

function c(e) {
  let {
    listing: t,
    aspectRatio: n = 16 / 9,
    height: u,
    ...s
  } = e, a = (u - 2 * o) * n, c = (0, l.useListingThumbnailUrl)(t, a), d = (0, l.useListingThumbnailUrl)(t, a, {
    shouldAnimate: !1
  });
  return (0, r.jsx)(i.default, {
    src: c,
    backgroundSrc: d,
    aspectRatio: n,
    ...s
  })
}