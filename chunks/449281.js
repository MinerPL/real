"use strict";
l.r(t), l.d(t, {
  default: function() {
    return Error
  }
});
var i = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  r = l("77078"),
  c = l("782340"),
  o = l("248"),
  d = l("103104");

function Error(e) {
  let {
    heading: t = c.default.Messages.APP_DIRECTORY_ERROR_HEADING,
    body: l = c.default.Messages.APP_DIRECTORY_ERROR_BODY,
    className: n
  } = e;
  return (0, i.jsxs)("div", {
    className: s(o.container, n),
    children: [(0, i.jsx)("img", {
      className: o.image,
      src: d,
      alt: c.default.Messages.APP_DIRECTORY_CONFUSED_CLYDE_IMAGE_ALT
    }), (0, i.jsxs)(a.Fragment, {
      children: [(0, i.jsx)(r.Heading, {
        className: o.header,
        variant: "heading-xl/semibold",
        children: t
      }), (0, i.jsx)(r.Text, {
        variant: "text-md/normal",
        children: l
      })]
    })]
  })
}