"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var s = a("37983");
a("884691");
var n = a("928328"),
  l = a("995307"),
  r = a("200521"),
  c = a("782340"),
  i = a("5512");
let o = [{
  className: i.emojiThumbsUp,
  rating: r.FeedbackRating.GOOD,
  classNameSelected: i.selected
}, {
  className: i.emojiThumbsDown,
  rating: r.FeedbackRating.BAD,
  classNameSelected: i.selected
}];

function u(e) {
  let {
    transitionState: t,
    startRating: a,
    onClose: r,
    onSubmit: u
  } = e;
  return (0, s.jsx)(n.default, {
    header: c.default.Messages.SUMMARIES_FEEDBACK_HEADER,
    body: c.default.Messages.SUMMARIES_FEEDBACK_BODY,
    problemTitle: c.default.Messages.SUMMARIES_FEEDBACK_PROBLEM_TITLE,
    onSubmit: u,
    onClose: r,
    ratingConfigs: o,
    transitionState: t,
    problems: (0, l.getSummaryFeedbackReasons)(),
    ratingsSelectorClassName: i.ratingsSelector,
    feedbackProblems: [l.SummaryFeedbackReasons.OTHER],
    otherKey: l.SummaryFeedbackReasons.OTHER,
    startRating: a,
    hideDontShowCheckbox: !0
  })
}