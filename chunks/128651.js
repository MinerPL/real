"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var l = a("37983");
a("884691");
var n = a("414456"),
  s = a.n(n),
  i = a("917351"),
  d = a("834897"),
  r = a("67602"),
  u = a("811305"),
  o = a("515631"),
  c = a("62082");

function f(e) {
  let {
    guildId: t
  } = e, a = (0, d.default)(o.COLLAPSED_SIZE_MEDIA_QUERY);
  return (0, l.jsxs)(l.Fragment, {
    children: [i.times(a ? 4 : 3, e => (0, l.jsxs)("div", {
      className: s(c.container, {
        [c.loadingContainer]: !0,
        [c.containerCard]: a,
        [c.collapsedLayout]: a
      }),
      children: [(0, l.jsxs)("div", {
        className: c.body,
        children: [(0, l.jsxs)("div", {
          className: c.details,
          children: [(0, l.jsx)("div", {
            className: c.iconContainer
          }), (0, l.jsx)(r.ContentBlob, {
            className: c.title,
            opacity: .2,
            width: 72
          }), (0, l.jsx)(r.ContentBlob, {
            className: c.subtitle,
            opacity: .1,
            width: 100
          })]
        }), (0, l.jsx)("div", {
          className: c.accessoryContainer,
          children: (0, l.jsx)(u.default, {
            guildId: t,
            renderUser: () => (0, l.jsx)("div", {
              className: c.loadingUser,
              style: {
                width: a ? 24 : 16,
                height: a ? 24 : 16
              }
            }),
            users: [null, null],
            size: a ? u.Sizes.SIZE_24 : u.Sizes.SIZE_16,
            extraDetail: (0, l.jsx)("div", {
              className: c.typingIndicator
            })
          })
        })]
      }), 2 === e && (0, l.jsx)("div", {
        className: c.previewContainer
      })]
    }, e)), (0, l.jsx)("div", {}), " "]
  })
}