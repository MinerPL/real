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
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("458331"),
  r = n("166008");
let o = 660,
  u = e => (0, s.jsx)(i.default, {
    ...e,
    className: a(e.className, {
      [r.embedVertical]: !e.isHorizontal,
      [r.embedHorizontal]: e.isHorizontal
    })
  }),
  d = e => {
    let {
      isHorizontal: t
    } = e;
    return (0, s.jsx)(u, {
      ...e,
      media: () => (0, s.jsx)("div", {
        className: a(r.loadingDescription),
        children: (0, s.jsx)("div", {
          className: a(r.loadingBackgroundWrapper, {
            [r.loadingBackgroundWrapperHorizontal]: t
          }),
          children: (0, s.jsx)("div", {
            className: r.loadingBackground
          })
        })
      }),
      title: () => (0, s.jsx)("div", {
        className: a(r.loadingImage, {
          [r.loadingImageHorizontal]: t
        })
      })
    })
  }