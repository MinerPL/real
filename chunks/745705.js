"use strict";
n.r(e), n.d(e, {
  default: function() {
    return c
  }
});
var r = n("37983");
n("884691");
var a = n("77078"),
  s = n("474539"),
  o = n("145131"),
  l = n("476765"),
  i = n("782340"),
  u = n("496673");

function c(t) {
  let {
    url: e,
    onClose: c,
    transitionState: d
  } = t, f = (0, l.useUID)(), {
    protocol: x,
    hostname: m,
    theRestOfTheUrl: h
  } = (0, s.useUrlParts)(e);
  return (0, r.jsxs)(a.ModalRoot, {
    transitionState: d,
    "aria-labelledby": f,
    children: [(0, r.jsx)("img", {
      className: u.art,
      src: n("997588"),
      alt: ""
    }), (0, r.jsx)(a.ModalContent, {
      children: (0, r.jsxs)(o.default, {
        direction: o.default.Direction.VERTICAL,
        justify: o.default.Justify.CENTER,
        children: [(0, r.jsx)(a.Heading, {
          id: f,
          variant: "heading-lg/semibold",
          className: u.title,
          children: i.default.Messages.BAD_LINK_WARNING_TITLE_V2
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          className: u.body,
          children: i.default.Messages.BAD_LINK_WARNING_BODY_V2.format()
        }), (0, r.jsxs)(a.Scroller, {
          className: u.linkCalloutContainer,
          children: [(0, r.jsxs)(a.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: [x, "//"]
          }), (0, r.jsx)(a.Text, {
            tag: "span",
            variant: "text-md/semibold",
            color: "text-normal",
            children: m
          }), (0, r.jsx)(a.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: h
          })]
        })]
      })
    }), (0, r.jsx)(a.ModalFooter, {
      children: (0, r.jsx)(a.Button, {
        type: "button",
        size: a.Button.Sizes.MEDIUM,
        color: a.Button.Colors.BRAND,
        onClick: c,
        children: i.default.Messages.GO_BACK
      })
    })]
  })
}