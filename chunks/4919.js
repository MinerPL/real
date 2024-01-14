"use strict";
n.r(t), n.d(t, {
  HORIZONTAL_EMBED_BREAKPOINT: function() {
    return o
  },
  ResponsiveEmbedTile: function() {
    return u
  },
  ResponsiveLoadingEmbedTile: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  i = n("458331"),
  r = n("166008");
let o = 660,
  u = e => (0, a.jsx)(i.default, {
    ...e,
    className: l(e.className, {
      [r.embedVertical]: !e.isHorizontal,
      [r.embedHorizontal]: e.isHorizontal
    })
  }),
  d = e => {
    let {
      isHorizontal: t
    } = e;
    return (0, a.jsx)(u, {
      ...e,
      media: () => (0, a.jsx)("div", {
        className: l(r.loadingDescription),
        children: (0, a.jsx)("div", {
          className: l(r.loadingBackgroundWrapper, {
            [r.loadingBackgroundWrapperHorizontal]: t
          }),
          children: (0, a.jsx)("div", {
            className: r.loadingBackground
          })
        })
      }),
      title: () => (0, a.jsx)("div", {
        className: l(r.loadingImage, {
          [r.loadingImageHorizontal]: t
        })
      })
    })
  }