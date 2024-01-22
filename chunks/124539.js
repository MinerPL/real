"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
}), a("222007");
var l = a("37983"),
  s = a("884691"),
  n = a("414456"),
  i = a.n(n),
  o = a("446674"),
  d = a("77078"),
  r = a("913144"),
  c = a("145131"),
  u = a("646356"),
  E = a("736393"),
  A = a("698609"),
  _ = a("170213"),
  S = a("782340"),
  N = a("434848");

function I(e) {
  let {
    isDsaEligible: t = !1,
    className: a,
    onClose: n,
    onNext: I,
    onBack: x
  } = e, f = (0, A.useSafetyHubAppealSignal)(), T = (0, o.useStateFromStores)([u.default], () => u.default.getFreeTextAppealReason()), [g, p] = s.useState(""), [C, m] = s.useState(!1);
  s.useEffect(() => {
    p(null != T ? T : ""), m(f === _.AppealIngestionSignal.SOMETHING_ELSE)
  }, [T, f]);
  let h = e => {
      m(e === _.AppealIngestionSignal.SOMETHING_ELSE), e !== _.AppealIngestionSignal.SOMETHING_ELSE && (p(""), r.default.dispatch({
        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
        userInput: ""
      })), r.default.dispatch({
        type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
        signal: e
      })
    },
    L = _.AppealIngestionSignalOrder.map(e => ({
      value: e,
      name: (0, E.getAppealSignalDisplayText)(e)
    }));
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(d.ModalHeader, {
      direction: c.default.Direction.VERTICAL,
      className: N.header,
      separator: !1,
      children: [(0, l.jsx)(d.Heading, {
        className: N.title,
        variant: "heading-xl/semibold",
        children: S.default.Messages.APPEAL_INGESTION_MODAL_HEADER
      }), (0, l.jsx)(d.Text, {
        className: N.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: S.default.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SUBHEADER
      }), null != n && (0, l.jsx)(d.ModalCloseButton, {
        className: N.closeButton,
        onClick: n
      })]
    }), (0, l.jsxs)(d.ModalContent, {
      className: i(N.templatesList, a),
      paddingFix: !1,
      children: [(0, l.jsx)(d.RadioGroup, {
        radioPosition: "right",
        radioItemClassName: N.radioItem,
        size: d.RadioGroup.Sizes.NOT_SET,
        value: f,
        options: L,
        onChange: e => {
          let {
            value: t
          } = e;
          return h(t)
        }
      }), C && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(d.TextArea, {
          rows: 4,
          maxLength: 1024,
          placeholder: S.default.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_PLACEHOLDER,
          value: g,
          onChange: p,
          autoFocus: !0
        }), (0, l.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "header-muted",
          children: S.default.Messages.APPEAL_INGESTION_FREE_TEXT_REASON_ACTION_SHEET_FOOTER
        })]
      })]
    }), (0, l.jsxs)(d.ModalFooter, {
      children: [(0, l.jsx)(d.Button, {
        onClick: () => {
          r.default.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
            userInput: g
          }), null == I || I()
        },
        color: d.Button.Colors.BRAND,
        children: S.default.Messages.NEXT
      }), t && (0, l.jsx)(d.Button, {
        onClick: () => {
          r.default.dispatch({
            type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
            userInput: g
          }), null == x || x()
        },
        color: d.Button.Colors.PRIMARY,
        look: d.Button.Looks.LINK,
        children: S.default.Messages.BACK
      })]
    })]
  })
}