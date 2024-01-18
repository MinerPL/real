"use strict";
s.r(l), s.d(l, {
  default: function() {
    return I
  }
}), s("222007");
var a = s("37983"),
  t = s("884691"),
  n = s("414456"),
  i = s.n(n),
  o = s("446674"),
  d = s("77078"),
  r = s("913144"),
  c = s("145131"),
  u = s("781324"),
  E = s("646356"),
  x = s("736393"),
  N = s("698609"),
  _ = s("782340"),
  S = s("199586"),
  A = s("434848");

function I(e) {
  let {
    className: l,
    onClose: s,
    onNext: n,
    onBack: I
  } = e, T = (0, o.useStateFromStores)([E.default], () => E.default.getAppealClassificationId()), {
    classification: f
  } = (0, N.useSafetyHubClassification)(null != T ? T : ""), h = (0, x.capitalizeText)(null == f ? void 0 : f.description), m = (0, o.useStateFromStores)([E.default], () => E.default.getIsSubmitting()), M = (0, o.useStateFromStores)([E.default], () => E.default.getAppealSignal()), g = (0, o.useStateFromStores)([E.default], () => E.default.getFreeTextAppealReason()), [C, L] = t.useState(g), [j, p] = t.useState(!1), O = t.useCallback(async () => {
    null !== T && (await u.requestReview(T, M, g), null == n || n())
  }, [T, M, g, n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(d.ModalHeader, {
      direction: c.default.Direction.VERTICAL,
      className: A.header,
      separator: !1,
      children: [(0, a.jsx)(d.Heading, {
        className: A.title,
        variant: "heading-xl/semibold",
        children: _.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, a.jsx)(d.Text, {
        className: A.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: _.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_SUBHEADER
      }), null != s && (0, a.jsx)(d.ModalCloseButton, {
        className: A.closeButton,
        onClick: s
      })]
    }), (0, a.jsxs)(d.ModalContent, {
      className: i(A.templatesList, l),
      paddingFix: !1,
      children: [(0, a.jsx)("ul", {
        className: S.listContainer,
        children: [(0, x.getAppealSignalDisplayText)(M), g].filter(e => e.length > 0).map((e, l) => (0, a.jsx)("li", {
          className: S.listItem,
          children: (0, a.jsx)(d.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: e
          })
        }, l))
      }), (0, a.jsx)("div", {
        className: S.anchorContainer,
        children: (0, a.jsx)(d.Anchor, {
          onClick: () => p(e => !e),
          children: (0, a.jsx)(d.Heading, {
            variant: "heading-md/normal",
            color: "text-link",
            children: g.length > 0 ? _.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_EDIT_DETAILS : _.default.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ADD_DETAILS
          })
        })
      }), (0, a.jsx)("div", {
        className: A.policyContainer,
        children: (0, a.jsx)(d.Text, {
          variant: "text-md/semibold",
          children: h
        })
      }), j && (0, a.jsxs)("div", {
        className: S.inputContainer,
        children: [(0, a.jsx)(d.TextArea, {
          value: C,
          onChange: e => L(e)
        }), (0, a.jsx)(d.Button, {
          onClick: () => {
            r.default.dispatch({
              type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
              userInput: C
            }), p(!1)
          },
          color: d.Button.Colors.BRAND,
          submitting: m,
          className: S.saveButton,
          children: _.default.Messages.SAVE
        })]
      })]
    }), (0, a.jsxs)(d.ModalFooter, {
      children: [(0, a.jsx)(d.Button, {
        onClick: O,
        color: d.Button.Colors.RED,
        submitting: m,
        children: _.default.Messages.SUBMIT
      }), (0, a.jsx)(d.Button, {
        look: d.Button.Looks.LINK,
        color: d.Button.Colors.PRIMARY,
        onClick: I,
        disabled: m,
        children: _.default.Messages.BACK
      })]
    })]
  })
}