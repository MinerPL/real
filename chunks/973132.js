"use strict";
a.r(e), a.d(e, {
  default: function() {
    return o
  }
});
var t = a("37983");
a("884691");
var n = a("77078"),
  l = a("782340"),
  c = a("195334"),
  i = a("116074");

function o(s) {
  let {
    transitionState: e,
    onClose: a
  } = s;
  return (0, t.jsxs)(n.ModalRoot, {
    transitionState: e,
    className: c.root,
    children: [(0, t.jsxs)(n.ModalHeader, {
      separator: !1,
      className: c.noScroll,
      children: [(0, t.jsx)(n.ModalCloseButton, {
        className: c.closeButton,
        onClick: a
      }), (0, t.jsx)("div", {
        className: c.imageContainer,
        children: (0, t.jsx)("img", {
          src: i,
          className: c.image,
          alt: ""
        })
      })]
    }), (0, t.jsx)(n.ModalContent, {
      children: (0, t.jsxs)("div", {
        className: c.content,
        children: [(0, t.jsx)(n.Heading, {
          variant: "heading-xl/semibold",
          className: c.title,
          children: l.default.Messages.INVITE_PERMISSION_MODAL_TITLE
        }), (0, t.jsx)(n.Text, {
          variant: "text-md/normal",
          className: c.text,
          children: l.default.Messages.INVITE_PERMISSION_MODAL_TEXT
        }), (0, t.jsx)(n.Button, {
          className: c.button,
          onClick: a,
          children: l.default.Messages.GOT_IT
        })]
      })
    })]
  })
}