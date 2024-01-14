"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var o = n("37983"),
  r = n("884691"),
  s = n("77078"),
  a = n("716241"),
  l = n("228944"),
  i = n("85448"),
  c = n("702873"),
  E = n("49111"),
  u = n("782340"),
  d = n("427593");

function _(e) {
  let {
    automodDecision: t,
    transitionState: n,
    onClose: _
  } = e, A = r.useCallback(() => {
    (0, a.trackWithMetadata)(E.AnalyticEvents.GUILD_AUTOMOD_FEEDBACK, {
      feedback_type: i.Feedback.BUG,
      decision_id: t.decisionId,
      message_id: t.messageId,
      content: t.messageContent
    }), (0, c.executeAlertAction)(t.messageId, t.channel, l.AutomodAlertActionType.SUBMIT_FEEDBACK), _()
  }, [t, _]);
  return (0, o.jsxs)(s.ModalRoot, {
    transitionState: n,
    size: s.ModalSize.SMALL,
    children: [(0, o.jsx)(s.ModalHeader, {
      separator: !1,
      children: (0, o.jsx)(s.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: u.default.Messages.GUILD_AUTOMOD_REPORT_FEEDBACK_MODAL_TITLE
      })
    }), (0, o.jsx)(s.ModalContent, {
      children: (0, o.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: u.default.Messages.GUILD_AUTOMOD_REPORT_FEEDBACK_MODAL_SUBTITLE
      })
    }), (0, o.jsxs)(s.ModalFooter, {
      children: [(0, o.jsx)("div", {
        className: d.button,
        children: (0, o.jsx)(s.Button, {
          onClick: A,
          color: s.Button.Colors.BRAND_NEW,
          look: s.Button.Looks.FILLED,
          children: u.default.Messages.YES_TEXT
        })
      }), (0, o.jsx)(s.Button, {
        onClick: _,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        children: u.default.Messages.CANCEL
      })]
    })]
  })
}