"use strict";
e.r(r), e.d(r, {
  default: function() {
    return a
  }
});
var n = e("37983");
e("884691");
var u = e("77078"),
  i = e("476765"),
  o = e("782340"),
  s = e("677029"),
  a = t => {
    let {
      onClose: r
    } = t, e = (0, i.useUID)();
    return (0, n.jsxs)(u.ModalRoot, {
      ...t,
      "aria-labelledby": e,
      children: [(0, n.jsxs)(u.ModalHeader, {
        separator: !1,
        className: s.modalHeader,
        children: [(0, n.jsx)(u.Heading, {
          id: e,
          variant: "heading-xl/extrabold",
          children: o.default.Messages.LIMITED_ACCESS_INFO_MODAL_HEADING
        }), (0, n.jsx)(u.ModalCloseButton, {
          className: s.closeButton,
          onClick: r
        })]
      }), (0, n.jsx)(u.ModalContent, {
        className: s.modalContent,
        children: (0, n.jsx)(u.Text, {
          variant: "text-md/normal",
          className: s.contentText,
          children: o.default.Messages.LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_V2
        })
      }), (0, n.jsx)(u.ModalFooter, {
        children: (0, n.jsx)(u.Button, {
          className: s.button,
          size: u.Button.Sizes.MIN,
          onClick: r,
          children: o.default.Messages.OKAY
        })
      })]
    })
  }