"use strict";
n.r(t), n.d(t, {
  TextAndImageAnswers: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var l = n("597287"),
  a = n("77078"),
  i = n("426490"),
  r = n("782340"),
  o = n("139583");

function u(e) {
  let {
    percentage: t,
    label: n
  } = e;
  return (0, s.jsxs)("div", {
    className: o.votesData,
    children: [(0, s.jsxs)(a.Text, {
      className: o.voteDataLine,
      variant: "text-md/semibold",
      color: "none",
      children: [t, "%"]
    }), (0, s.jsx)(a.Text, {
      className: o.voteDataLine,
      variant: "text-xs/semibold",
      color: "none",
      children: n
    })]
  })
}

function d(e) {
  let {
    answer: t,
    isExpired: n,
    hasVoted: d,
    myAvatarUrl: c
  } = e, f = d || n, E = !0 === t.isSelected, _ = !0 === t.didSelfVote, T = !0 === t.isVictor;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)("div", {
      className: o.answerInner,
      children: [f && (0, s.jsx)("span", {
        className: o.votePercentageBar,
        style: {
          width: "".concat(t.votesPercentage, "%")
        },
        "aria-hidden": !0
      }), (0, s.jsxs)("div", {
        className: o.answerContent,
        children: [(0, s.jsx)(i.PollMediaView, {
          attachmentClassName: o.attachment,
          containerClassName: o.mediaContainer,
          media: t.pollMedia,
          fallback: null,
          alt: ""
        }), (0, s.jsx)(a.Text, {
          className: o.label,
          variant: "text-sm/semibold",
          color: "none",
          children: t.pollMedia.text
        }), (E || t.didSelfVote) && (0, s.jsx)(a.Avatar, {
          className: o.avatarForSelected,
          size: a.AvatarSizes.SIZE_20,
          src: c,
          "aria-hidden": !0
        }), t.didSelfVote && (0, s.jsx)(l.VisuallyHidden, {
          children: r.default.Messages.POLL_ANSWER_VOTED_ARIA
        }), f && (0, s.jsx)(u, {
          percentage: t.votesPercentage,
          label: t.votes
        })]
      })]
    }), !n && _ && (0, s.jsx)(i.PollAnswerVotedIcon, {
      size: 18,
      className: o.pollAnswerIcon
    }), T && (0, s.jsx)(i.PollAnswerVictorIcon, {
      size: 18,
      className: o.pollAnswerIcon
    })]
  })
}

function c(e) {
  let {
    hasVoted: t,
    isExpired: n,
    myAvatarUrl: l,
    ...a
  } = e;
  return (0, s.jsx)(i.PollAnswers, {
    className: o.answersContainer,
    answerClassName: o.answer,
    myAvatarUrl: l,
    renderAnswerContent: e => (0, s.jsx)(d, {
      answer: e,
      isExpired: n,
      hasVoted: t,
      myAvatarUrl: l
    }),
    ...a
  })
}