"use strict";
a.r(e), a.d(e, {
  default: function() {
    return u
  }
});
var n = a("37983");
a("884691");
var s = a("77078"),
  l = a("191814"),
  i = a("903635"),
  r = a("238953");

function u(t) {
  var e;
  let {
    attachment: a
  } = t, u = null !== (e = a.size) && void 0 !== e ? e : 0;
  return (0, n.jsxs)("div", {
    className: r.container,
    children: [(0, n.jsx)(i.default, {
      width: 16,
      height: 16,
      className: r.fileIcon
    }), (0, n.jsx)(l.default, {
      size: 8,
      horizontal: !0
    }), (0, n.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: r.fileName,
      children: a.filename
    }), (0, n.jsx)(l.default, {
      size: 8,
      horizontal: !0
    }), (0, n.jsx)("div", {
      className: r.dot
    }), (0, n.jsx)(l.default, {
      size: 8,
      horizontal: !0
    }), (0, n.jsxs)(s.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: [Math.round(u / 1024 / 1024 * 100) / 100, "MB"]
    })]
  })
}