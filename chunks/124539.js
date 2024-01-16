"use strict";
s.r(l), s.d(l, {
  default: function() {
    return c
  }
});
var a = s("37983");
s("884691");
var t = s("414456"),
  n = s.n(t),
  i = s("77078"),
  d = s("145131"),
  o = s("782340"),
  r = s("434848");

function c(e) {
  let {
    isDsaEligible: l = !1,
    className: s,
    onClose: t,
    onNext: c,
    onBack: u
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.ModalHeader, {
      direction: d.default.Direction.VERTICAL,
      className: r.header,
      separator: !1,
      children: [(0, a.jsx)(i.Heading, {
        className: r.title,
        variant: "heading-xl/semibold",
        children: o.default.Messages.GUILD_CREATE_TITLE
      }), (0, a.jsx)(i.Text, {
        className: r.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: o.default.Messages.NUF_DESKTOP_TEMPLATES_SUBTITLE
      }), null != t && (0, a.jsx)(i.ModalCloseButton, {
        className: r.closeButton,
        onClick: t
      })]
    }), (0, a.jsx)(i.ModalContent, {
      className: n(r.templatesList, s),
      paddingFix: !1,
      children: (0, a.jsx)(i.Text, {
        className: r.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: o.default.Messages.GUILD_TEMPLATE_SELECTOR_OPTION_HEADER
      })
    }), (0, a.jsxs)(i.ModalFooter, {
      children: [(0, a.jsx)(i.Button, {
        onClick: c,
        color: i.Button.Colors.BRAND,
        children: o.default.Messages.NEXT
      }), l && (0, a.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.PRIMARY,
        onClick: u,
        children: o.default.Messages.BACK
      })]
    })]
  })
}