"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var l = a("37983");
a("884691");
var s = a("414456"),
  n = a.n(s),
  i = a("77078"),
  o = a("145131"),
  d = a("736393"),
  r = a("228408"),
  c = a("795010"),
  u = a("380676"),
  E = a("170213"),
  A = a("782340"),
  _ = a("434848");

function S(e) {
  var t, a;
  let {
    classification: s,
    isSpam: S = !1,
    isCoppa: N = !1,
    className: I,
    onClose: x,
    onNext: f
  } = e, T = (0, r.useEmitAppealIngestionEvent)(), g = null !== (t = null == s ? void 0 : s.explainer_link) && void 0 !== t ? t : "", p = null != s && null != s.flagged_content && s.flagged_content.length > 0, C = (0, d.capitalizeText)(null == s ? void 0 : s.description), m = !S && !N;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(i.ModalHeader, {
      direction: o.default.Direction.VERTICAL,
      className: _.header,
      separator: !1,
      children: [(0, l.jsx)(i.Heading, {
        className: _.title,
        variant: "heading-xl/semibold",
        children: A.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, l.jsx)(i.Text, {
        className: _.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: A.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBHEADER
      }), null != x && (0, l.jsx)(i.ModalCloseButton, {
        className: _.closeButton,
        onClick: x
      })]
    }), (0, l.jsxs)(i.ModalContent, {
      className: n(_.modalContent, I),
      paddingFix: !1,
      children: [p && null == s.guild_metadata && (0, l.jsx)(u.ClassificationEvidence, {
        flaggedContent: null !== (a = s.flagged_content) && void 0 !== a ? a : []
      }), (0, l.jsx)(i.Text, {
        className: _.optionHeader,
        color: "header-secondary",
        variant: "text-xs/bold",
        children: A.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_POLICY_HEADER
      }), (0, l.jsx)("div", {
        className: _.policyContainer,
        children: (0, l.jsx)(i.Text, {
          variant: "text-md/semibold",
          children: C
        })
      }), N && (0, l.jsx)(c.default, {
        url: E.SafetyHubLinks.AGE_VERIFICATION_LINK,
        text: A.default.Messages.APPEAL_INGESTION_AGE_VERIFICATION_LINK_TITLE,
        onClick: () => T(E.SafetyHubAnalyticsActions.ClickAgeVerificationLink)
      }), S && !N && (0, l.jsx)(c.default, {
        url: E.SafetyHubLinks.SPAM_LINK,
        text: A.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBMIT_SPAM,
        onClick: () => T(E.SafetyHubAnalyticsActions.ClickSpamWebformLink)
      }), !N && (0, l.jsx)(c.default, {
        text: A.default.Messages.APPEAL_INGESTION_LEARN_MORE_LINK_TITLE,
        url: g,
        onClick: () => T(E.SafetyHubAnalyticsActions.ClickLearnMoreLink)
      }), m && (0, l.jsx)(i.Text, {
        className: _.learnMore,
        variant: "text-xs/normal",
        children: A.default.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_LEARN_MORE_OTHER_OPTIONS_DSA.format()
      })]
    }), m && (0, l.jsx)(i.ModalFooter, {
      children: (0, l.jsx)(i.Button, {
        onClick: f,
        color: i.Button.Colors.BRAND,
        children: A.default.Messages.NEXT
      })
    })]
  })
}