"use strict";
t.r(a), t.d(a, {
  TwoWayLinkSuccess: function() {
    return i
  }
});
var s = t("37983");
t("884691");
var n = t("77078"),
  l = t("145131"),
  r = t("782340"),
  o = t("429152");

function i(e) {
  let {
    onClose: a,
    img: t,
    title: i,
    body: c,
    content: d
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(n.ModalHeader, {
      direction: l.default.Direction.VERTICAL,
      className: o.header,
      separator: !1,
      children: [(0, s.jsx)("div", {
        className: o.illustration,
        children: t
      }), (0, s.jsx)(n.Heading, {
        className: o.title,
        variant: "heading-xl/extrabold",
        children: i
      }), (0, s.jsx)(n.ModalCloseButton, {
        className: o.closeButton,
        onClick: a
      })]
    }), (0, s.jsxs)(n.ModalContent, {
      className: o.body,
      paddingFix: !1,
      children: [(0, s.jsx)(n.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: c
      }), d]
    }), (0, s.jsx)(n.ModalFooter, {
      className: o.footer,
      children: (0, s.jsx)(n.Button, {
        className: o.footerButton,
        color: n.Button.Colors.BRAND,
        onClick: a,
        children: r.default.Messages.DONE
      })
    })]
  })
}