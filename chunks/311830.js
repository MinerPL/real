"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("794252");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("506838"),
  o = n("418009"),
  u = n("77078"),
  d = n("847511"),
  c = n("619544"),
  f = n("74232"),
  E = n("316350"),
  _ = n("909366"),
  T = n("879958");

function I(e) {
  let {
    media: t
  } = e;
  return (0, s.jsx)(u.Heading, {
    variant: "text-md/medium",
    children: t.text
  })
}

function m(e) {
  let {
    children: t
  } = e;
  return (0, s.jsx)(u.Text, {
    variant: "text-sm/normal",
    color: "text-muted",
    children: t
  })
}

function N(e) {
  let {
    children: t,
    onClick: n,
    className: l,
    buttonRef: a
  } = e;
  return (0, s.jsx)(u.Button, {
    onClick: n,
    className: i(l, T.textButton),
    look: u.Button.Looks.BLANK,
    size: u.Button.Sizes.NONE,
    buttonRef: a,
    children: (0, s.jsx)(u.Text, {
      variant: "text-sm/semibold",
      color: "text-link",
      children: t
    })
  })
}

function p(e) {
  let {
    action: t,
    channelId: n,
    messageId: a
  } = e, {
    actionButtonRef: i,
    manageFocusOnAction: r
  } = (0, E.usePollFocusManager)(), o = l.useCallback(async () => {
    (null == t ? void 0 : t.type) != null && (await d.default.handlePollActionTapped({
      channelId: n,
      messageId: a,
      type: t.type
    }), r(t.type))
  }, [null == t ? void 0 : t.type, n, a, r]);
  return null == t ? null : "button" === t.presentation ? (0, s.jsx)(u.Button, {
    buttonRef: i,
    onClick: o,
    disabled: !t.enabled,
    children: t.label
  }) : "textButton" === t.presentation ? (0, s.jsx)(N, {
    buttonRef: i,
    onClick: o,
    children: t.label
  }) : (0, s.jsx)(m, {
    children: t.label
  })
}

function S(e) {
  let {
    message: t,
    poll: n,
    className: l
  } = e, a = (0, f.useStyleClass)(n.containerStyle), d = function(e, t) {
    let n = {
      answers: t.answers,
      answersInteraction: t.answersInteraction,
      answerTapAccessibilityLabel: t.answerTapAccessibilityLabel,
      isExpired: t.isExpired,
      isInteractive: t.canTapAnswers,
      hasSelectedAnyAnswer: t.hasSelectedAnswer,
      hasVoted: t.hasVoted,
      myAvatarUrl: t.myAvatarUrl
    };
    return (0, r.match)(t.layoutType).with(o.PollLayoutTypes.DEFAULT, () => (0, s.jsx)(_.TextAndImageAnswers, {
      ...n
    })).with(o.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => (0, s.jsx)(c.default, {
      ...n
    })).otherwise(() => null)
  }(0, n);
  return null == d ? null : (0, s.jsx)("div", {
    className: i(T.container, a, l),
    children: (0, s.jsxs)(u.HeadingLevel, {
      children: [(0, s.jsx)(I, {
        media: n.question
      }), d, (0, s.jsxs)("div", {
        className: T.bottomBar,
        children: [(0, s.jsx)(p, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.secondaryAction
        }), (0, s.jsx)(p, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.primaryAction
        })]
      })]
    })
  })
}

function A(e) {
  let {
    message: t,
    poll: n,
    className: l
  } = e;
  return (0, s.jsx)(f.PollContextProvider, {
    message: t,
    poll: n,
    children: (0, s.jsx)(E.PollFocusManager, {
      children: (0, s.jsx)(S, {
        message: t,
        poll: n,
        className: l
      })
    })
  })
}