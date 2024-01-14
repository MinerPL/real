"use strict";
a.r(t), a.d(t, {
  ActivateDeviceError: function() {
    return u
  }
});
var n = a("37983");
a("884691");
var r = a("77078"),
  s = a("782340"),
  o = a("289177"),
  i = a("143453");
let u = e => {
  let {
    onTryAgain: t
  } = e;
  return (0, n.jsxs)("div", {
    className: o.bodyContent,
    children: [(0, n.jsx)("img", {
      src: i,
      width: "254",
      height: "127",
      alt: ""
    }), (0, n.jsx)(r.Heading, {
      className: o.title,
      variant: "heading-xl/extrabold",
      children: s.default.Messages.ACTIVATE_DEVICE_ERROR_TITLE
    }), (0, n.jsx)(r.Text, {
      tag: "p",
      variant: "text-md/normal",
      color: "header-secondary",
      children: s.default.Messages.ACTIVATE_DEVICE_ERROR_BODY
    }), (0, n.jsx)(r.Button, {
      className: o.footerButton,
      color: r.Button.Colors.BRAND,
      onClick: t,
      children: s.default.Messages.TRY_AGAIN
    })]
  })
}