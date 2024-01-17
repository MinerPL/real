"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("597287"),
  r = n("77078"),
  o = n("426490"),
  u = n("782340"),
  d = n("314164");

function c(e) {
  let {
    didSelfVote: t,
    label: n,
    percentage: l
  } = e;
  return (0, s.jsxs)("div", {
    className: d.votesData,
    children: [t && (0, s.jsx)(i.VisuallyHidden, {
      children: u.default.Messages.POLL_ANSWER_VOTED_ARIA
    }), (0, s.jsxs)(r.Text, {
      variant: "text-md/semibold",
      color: "none",
      children: [l, "%"]
    }), (0, s.jsx)(r.Text, {
      variant: "text-xs/semibold",
      color: "none",
      children: n
    })]
  })
}

function f(e) {
  let {
    answer: t,
    hasVoted: n,
    isExpired: l,
    myAvatarUrl: i
  } = e, r = n || l, u = !0 === t.isSelected, f = !0 === t.didSelfVote, E = !0 === t.isVictor;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(o.PollMediaView, {
      attachmentClassName: a(d.attachment, {
        [d.attachmentWithResults]: r
      }),
      emojiClassName: d.emoji,
      media: t.pollMedia,
      fallback: (0, s.jsx)("div", {
        className: a(d.attachment, d.mediaMissing)
      })
    }), u && (0, s.jsx)(o.PollAnswerSelectedIcon, {
      size: 40,
      className: d.selectedIcon
    }), r && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(c, {
        didSelfVote: f,
        percentage: t.votesPercentage,
        label: t.votes,
        myAvatarUrl: f ? i : void 0
      }), !l && f && (0, s.jsx)(o.PollAnswerVotedIcon, {
        size: 18,
        className: d.pollAnswerIcon
      }), E && (0, s.jsx)(o.PollAnswerVictorIcon, {
        size: 18,
        className: d.pollAnswerIcon
      })]
    })]
  })
}

function E(e) {
  let {
    isExpired: t,
    hasVoted: n,
    myAvatarUrl: l,
    ...a
  } = e;
  return (0, s.jsx)(o.PollAnswers, {
    className: d.answersContainer,
    answerClassName: d.answer,
    myAvatarUrl: l,
    renderAnswerContent: e => (0, s.jsx)(f, {
      answer: e,
      isExpired: t,
      hasVoted: n,
      myAvatarUrl: l
    }),
    ...a
  })
}