"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var n = s("77078"),
  o = s("476765"),
  l = s("258078"),
  r = s("782340"),
  i = s("674070"),
  u = s("986686");

function c(e) {
  let {
    onClose: t,
    transitionState: s
  } = e, c = (0, o.useUID)();
  return (0, a.jsxs)(n.ModalRoot, {
    transitionState: s,
    "aria-labelledby": c,
    size: n.ModalSize.SMALL,
    children: [(0, a.jsxs)(n.ModalContent, {
      className: i.content,
      children: [(0, a.jsx)(n.ModalCloseButton, {
        className: i.closeButton,
        onClick: t
      }), (0, a.jsx)("img", {
        className: i.image,
        src: u,
        alt: ""
      }), (0, a.jsx)(l.default, {
        className: i.title,
        id: c,
        size: l.default.Sizes.SIZE_24,
        color: l.default.Colors.HEADER_PRIMARY,
        children: r.default.Messages.INACCESSIBLE_CHANNEL_LINK_TITLE
      }), (0, a.jsx)(n.Text, {
        className: i.subtitle,
        variant: "text-md/normal",
        color: "header-secondary",
        children: r.default.Messages.INACCESSIBLE_CHANNEL_LINK_SUBTITLE
      })]
    }), (0, a.jsx)(n.ModalFooter, {
      children: (0, a.jsx)(n.Button, {
        className: i.button,
        color: n.Button.Colors.BRAND,
        onClick: t,
        size: n.Button.Sizes.LARGE,
        children: r.default.Messages.OKAY
      })
    })]
  })
}