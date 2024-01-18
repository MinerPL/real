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
  i = s("77078"),
  o = s("145131"),
  d = s("736393"),
  r = s("795010"),
  c = s("380676"),
  u = s("170213"),
  E = s("782340"),
  x = s("434848");

function N(e) {
  var l, s;
  let {
    classification: t,
    isSpam: N = !1,
    isCoppa: _ = !1,
    className: S,
    onClose: A,
    onNext: I
  } = e, T = null !== (l = null == t ? void 0 : t.explainer_link) && void 0 !== l ? l : "", f = null != t && null != t.flagged_content && t.flagged_content.length > 0, h = (0, d.capitalizeText)(null == t ? void 0 : t.description), m = !N && !_;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.ModalHeader, {
      direction: o.default.Direction.VERTICAL,
      className: x.header,
      separator: !1,
      children: [(0, a.jsx)(i.Heading, {
        className: x.title,
        variant: "heading-xl/semibold",
        children: E.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, a.jsx)(i.Text, {
        className: x.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: E.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBHEADER
      }), null != A && (0, a.jsx)(i.ModalCloseButton, {
        className: x.closeButton,
        onClick: A
      })]
    }), (0, a.jsxs)(i.ModalContent, {
      className: n(x.modalContent, S),
      paddingFix: !1,
      children: [f && null == t.guild_metadata && (0, a.jsx)(c.ClassificationEvidence, {
        flaggedContent: null !== (s = t.flagged_content) && void 0 !== s ? s : []
      }), (0, a.jsx)(i.Text, {
        className: x.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: E.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_POLICY_HEADER
      }), (0, a.jsx)("div", {
        className: x.policyContainer,
        children: (0, a.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: h
        })
      }), _ && (0, a.jsx)(r.default, {
        url: u.SafetyHubLinks.AGE_VERIFICATION_LINK,
        text: E.default.Messages.APPEAL_INGESTION_AGE_VERIFICATION_LINK_TITLE
      }), N && !_ && (0, a.jsx)(r.default, {
        url: u.SafetyHubLinks.SPAM_LINK,
        text: E.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBMIT_SPAM
      }), !_ && (0, a.jsx)(r.default, {
        text: E.default.Messages.APPEAL_INGESTION_LEARN_MORE_LINK_TITLE,
        url: T
      }), m && (0, a.jsx)(i.Text, {
        className: x.learnMore,
        variant: "text-xs/normal",
        children: E.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_LEARN_MORE_OTHER_OPTIONS_DSA.format()
      })]
    }), m && (0, a.jsx)(i.ModalFooter, {
      children: (0, a.jsx)(i.Button, {
        onClick: I,
        color: i.Button.Colors.BRAND,
        children: E.default.Messages.NEXT
      })
    })]
  })
}