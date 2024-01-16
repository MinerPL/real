"use strict";
s.r(l), s.d(l, {
  default: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var t = s("414456"),
  n = s.n(t),
  i = s("77078"),
  d = s("145131"),
  o = s("795010"),
  r = s("380676"),
  c = s("170213"),
  u = s("782340"),
  x = s("434848");

function E(e) {
  var l, s;
  let {
    classification: t,
    isSpam: E = !1,
    isCoppa: _ = !1,
    className: N,
    onClose: f,
    onNext: S
  } = e, T = null !== (l = null == t ? void 0 : t.explainer_link) && void 0 !== l ? l : "", A = null != t && null != t.flagged_content && t.flagged_content.length > 0, h = null !== t ? t.description.charAt(0).toUpperCase() + t.description.slice(1) : "", I = !E && !_;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.ModalHeader, {
      direction: d.default.Direction.VERTICAL,
      className: x.header,
      separator: !1,
      children: [(0, a.jsx)(i.Heading, {
        className: x.title,
        variant: "heading-xl/semibold",
        children: u.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, a.jsx)(i.Text, {
        className: x.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBHEADER
      }), null != f && (0, a.jsx)(i.ModalCloseButton, {
        className: x.closeButton,
        onClick: f
      })]
    }), (0, a.jsxs)(i.ModalContent, {
      className: n(x.modalContent, N),
      paddingFix: !1,
      children: [A && null == t.guild_metadata && (0, a.jsx)(r.ClassificationEvidence, {
        flaggedContent: null !== (s = t.flagged_content) && void 0 !== s ? s : []
      }), (0, a.jsx)(i.Text, {
        className: x.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_POLICY_HEADER
      }), (0, a.jsx)("div", {
        className: x.policyContainer,
        children: (0, a.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: h
        })
      }), _ && (0, a.jsx)(o.default, {
        url: c.SafetyHubLinks.AGE_VERIFICATION_LINK,
        text: u.default.Messages.APPEAL_INGESTION_AGE_VERIFICATION_LINK_TITLE
      }), E && !_ && (0, a.jsx)(o.default, {
        url: c.SafetyHubLinks.SPAM_LINK,
        text: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBMIT_SPAM
      }), !_ && (0, a.jsx)(o.default, {
        text: u.default.Messages.APPEAL_INGESTION_LEARN_MORE_LINK_TITLE,
        url: T
      }), I && (0, a.jsx)(i.Text, {
        className: x.learnMore,
        variant: "text-xs/normal",
        children: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_LEARN_MORE_OTHER_OPTIONS_DSA.format()
      })]
    }), I && (0, a.jsx)(i.ModalFooter, {
      children: (0, a.jsx)(i.Button, {
        onClick: S,
        color: i.Button.Colors.BRAND,
        children: u.default.Messages.NEXT
      })
    })]
  })
}