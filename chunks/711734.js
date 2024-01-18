"use strict";
s.r(l), s.d(l, {
  default: function() {
    return N
  }
});
var a = s("37983");
s("884691");
var t = s("414456"),
  n = s.n(t),
  i = s("269096"),
  o = s("77078"),
  d = s("145131"),
  r = s("795010"),
  c = s("170213"),
  u = s("782340"),
  E = s("669223"),
  x = s("434848");

function N(e) {
  let {
    className: l,
    onNext: s,
    onClose: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(o.ModalHeader, {
      direction: d.default.Direction.VERTICAL,
      className: x.header,
      separator: !1,
      children: [(0, a.jsx)("div", {
        className: E.iconContainer,
        children: (0, a.jsx)(i.CheckmarkLargeIcon, {
          color: o.tokens.colors.INTERACTIVE_ACTIVE,
          className: E.icon
        })
      }), (0, a.jsx)(o.Heading, {
        className: x.title,
        variant: "heading-xl/semibold",
        children: u.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_HEADER
      }), (0, a.jsx)(o.Heading, {
        className: x.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: u.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_SUBHEADER
      }), null != t && (0, a.jsx)(o.ModalCloseButton, {
        className: x.closeButton,
        onClick: t
      })]
    }), (0, a.jsxs)(o.ModalContent, {
      className: n(x.templatesList, E.modalContent, l),
      paddingFix: !1,
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-md/bold",
        color: "header-primary",
        className: E.actionsHeader,
        children: u.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_ACTIONS_HEADER
      }), (0, a.jsx)(r.default, {
        text: u.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_GUIDELINES_LINK,
        url: c.SafetyHubLinks.COMMUNITY_GUIDELINES
      }), (0, a.jsx)(r.default, {
        text: u.default.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_RULES_LINK,
        url: c.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK
      })]
    }), (0, a.jsx)(o.ModalFooter, {
      children: (0, a.jsx)(o.Button, {
        onClick: s,
        color: o.Button.Colors.BRAND,
        children: u.default.Messages.DONE
      })
    })]
  })
}