"use strict";
s.r(l), s.d(l, {
  default: function() {
    return E
  }
});
var t = s("37983");
s("884691");
var a = s("414456"),
  n = s.n(a),
  i = s("77078"),
  d = s("145131"),
  o = s("795010"),
  r = s("380676"),
  c = s("170213"),
  u = s("782340"),
  x = s("434848");

function E(e) {
  var l;
  let {
    classification: s,
    isSpam: a = !1,
    isCoppa: E = !1,
    className: f,
    onClose: _,
    onNext: N
  } = e, S = s.explainer_link, A = null != s && null != s.flagged_content && s.flagged_content.length > 0, T = null !== s ? s.description.charAt(0).toUpperCase() + s.description.slice(1) : "", h = !a && !E;
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsxs)(i.ModalHeader, {
      direction: d.default.Direction.VERTICAL,
      className: x.header,
      separator: !1,
      children: [(0, t.jsx)(i.Heading, {
        className: x.title,
        variant: "heading-xl/semibold",
        children: u.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, t.jsx)(i.Text, {
        className: x.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBHEADER
      }), null != _ && (0, t.jsx)(i.ModalCloseButton, {
        className: x.closeButton,
        onClick: _
      })]
    }), (0, t.jsxs)(i.ModalContent, {
      className: n(x.modalContent, f),
      paddingFix: !1,
      children: [A && null == s.guild_metadata && (0, t.jsx)(r.ClassificationEvidence, {
        flaggedContent: null !== (l = s.flagged_content) && void 0 !== l ? l : []
      }), (0, t.jsx)(i.Text, {
        className: x.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_POLICY_HEADER
      }), (0, t.jsx)("div", {
        className: x.policyContainer,
        children: (0, t.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: T
        })
      }), E && (0, t.jsx)(o.default, {
        url: c.SafetyHubLinks.AGE_VERIFICATION_LINK,
        text: u.default.Messages.APPEAL_INGESTION_AGE_VERIFICATION_LINK_TITLE
      }), a && !E && (0, t.jsx)(o.default, {
        url: c.SafetyHubLinks.SPAM_LINK,
        text: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBMIT_SPAM
      }), !E && (0, t.jsx)(o.default, {
        text: u.default.Messages.APPEAL_INGESTION_LEARN_MORE_LINK_TITLE,
        url: S
      }), h && (0, t.jsx)(i.Text, {
        className: x.learnMore,
        variant: "text-xs/normal",
        children: u.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_LEARN_MORE_OTHER_OPTIONS_DSA.format()
      })]
    }), h && (0, t.jsx)(i.ModalFooter, {
      children: (0, t.jsx)(i.Button, {
        onClick: N,
        color: i.Button.Colors.BRAND,
        children: u.default.Messages.NEXT
      })
    })]
  })
}