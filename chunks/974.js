"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("77078"),
  i = s("452804"),
  C = s("191814"),
  _ = s("599110"),
  I = s("49111"),
  N = s("782340"),
  o = s("606351");
let A = [{
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
  nameGetter: () => N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
  nameGetter: () => N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
  nameGetter: () => N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
  nameGetter: () => N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE
}, {
  value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
  nameGetter: () => N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER
}];

function d(e) {
  let {
    application: t,
    subscriptionId: s,
    onClose: d
  } = e, [r, c] = l.useState(!1), [E, O] = l.useState(null), [S, u] = l.useState(""), T = l.useCallback(() => {
    null != E && (_.default.track(I.AnalyticEvents.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
      answer: E,
      application_id: t.id,
      reason: S,
      subscription_id: s
    }), d())
  }, [t.id, s, E, d, S]);
  return l.useEffect(() => {
    i.default.updatedUnsyncedSettings({
      disableApplicationSubscriptionCancellationSurvey: r
    })
  }, [r]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(n.ModalHeader, {
      className: o.headerContainer,
      separator: !1,
      children: [(0, a.jsxs)("div", {
        className: o.titleContainer,
        children: [(0, a.jsx)(n.Text, {
          className: o.headerTitle,
          variant: "text-lg/semibold",
          children: N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_TITLE
        }), (0, a.jsx)(n.ModalCloseButton, {
          className: o.modalCloseButton,
          onClick: d
        })]
      }), (0, a.jsx)(C.default, {
        size: 8
      }), (0, a.jsx)(n.Text, {
        className: o.headerSubtitle,
        variant: "text-md/medium",
        children: N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_SUBTITLE
      })]
    }), (0, a.jsxs)(n.ModalContent, {
      children: [(0, a.jsx)("div", {
        className: o.answerChoicesContainer,
        children: (0, a.jsx)(n.RadioGroup, {
          value: E,
          options: A.map(e => {
            let {
              nameGetter: t,
              value: s
            } = e;
            return {
              name: t(),
              value: s
            }
          }),
          onChange: e => O(e.value),
          withTransparentBackground: !0
        })
      }), "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === E && (0, a.jsx)(n.TextInput, {
        autoFocus: !0,
        className: o.otherField,
        placeholder: N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_OTHER_PLACEHOLDER,
        value: S,
        onChange: u
      })]
    }), (0, a.jsxs)(n.ModalFooter, {
      className: o.footer,
      children: [(0, a.jsx)(n.Button, {
        onClick: T,
        color: n.Button.Colors.BRAND,
        disabled: null == E,
        children: N.default.Messages.SUBMIT
      }), (0, a.jsx)(n.Checkbox, {
        type: n.Checkbox.Types.INVERTED,
        value: r,
        onChange: (e, t) => c(t),
        size: 20,
        className: o.checkbox,
        children: (0, a.jsx)(n.Text, {
          variant: "text-sm/medium",
          children: N.default.Messages.APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_DONT_SHOW_AGAIN
        })
      })]
    })]
  })
}