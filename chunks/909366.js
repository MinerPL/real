"use strict";
n.r(t), n.d(t, {
  TextAndImageAnswers: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var s = n("597287"),
  l = n("77078"),
  i = n("426490"),
  r = n("782340"),
  o = n("139583");

function u(e) {
  let {
    percentage: t,
    label: n
  } = e;
  return (0, a.jsxs)("div", {
    className: o.votesData,
    children: [(0, a.jsxs)(l.Text, {
      className: o.voteDataLine,
      variant: "text-md/semibold",
      color: "none",
      children: [t, "%"]
    }), (0, a.jsx)(l.Text, {
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
  } = e, f = d || n, m = !0 === t.isSelected, E = !0 === t.didSelfVote, _ = !0 === t.isVictor;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: o.answerInner,
      children: [f && (0, a.jsx)("span", {
        className: o.votePercentageBar,
        style: {
          width: "".concat(t.votesPercentage, "%")
        },
        "aria-hidden": !0
      }), (0, a.jsxs)("div", {
        className: o.answerContent,
        children: [(0, a.jsx)(i.PollMediaView, {
          attachmentClassName: o.attachment,
          containerClassName: o.mediaContainer,
          media: t.pollMedia,
          fallback: null,
          alt: ""
        }), (0, a.jsx)(l.Text, {
          className: o.label,
          variant: "text-sm/semibold",
          color: "none",
          children: t.pollMedia.text
        }), (m || t.didSelfVote) && (0, a.jsx)(l.Avatar, {
          className: o.avatarForSelected,
          size: l.AvatarSizes.SIZE_20,
          src: c,
          "aria-hidden": !0
        }), t.didSelfVote && (0, a.jsx)(s.VisuallyHidden, {
          children: r.default.Messages.POLL_ANSWER_VOTED_ARIA
        }), f && (0, a.jsx)(u, {
          percentage: t.votesPercentage,
          label: t.votes
        })]
      })]
    }), !n && E && (0, a.jsx)(i.PollAnswerVotedIcon, {
      size: 18,
      className: o.pollAnswerIcon
    }), _ && (0, a.jsx)(i.PollAnswerVictorIcon, {
      size: 18,
      className: o.pollAnswerIcon
    })]
  })
}

function c(e) {
  let {
    hasVoted: t,
    isExpired: n,
    myAvatarUrl: s,
    ...l
  } = e;
  return (0, a.jsx)(i.PollAnswers, {
    className: o.answersContainer,
    answerClassName: o.answer,
    myAvatarUrl: s,
    renderAnswerContent: e => (0, a.jsx)(d, {
      answer: e,
      isExpired: n,
      hasVoted: t,
      myAvatarUrl: s
    }),
    ...l
  })
}