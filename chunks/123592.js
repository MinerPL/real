"use strict";
a.r(t), a.d(t, {
  default: function() {
    return x
  }
}), a("222007");
var n = a("37983"),
  s = a("884691"),
  l = a("77078"),
  r = a("928328"),
  i = a("476765"),
  c = a("664654"),
  o = a("49111"),
  d = a("200521"),
  u = a("782340"),
  f = a("576260");
let m = [{
  className: f.emojiThumbsUp,
  rating: d.FeedbackRating.GOOD,
  classNameSelected: f.selected
}, {
  className: f.emojiThumbsDown,
  rating: d.FeedbackRating.BAD,
  classNameSelected: f.selected
}];

function x(e) {
  let [t, d] = s.useState(null), x = (0, i.useUID)();
  return (0, n.jsxs)(l.ModalRoot, {
    transitionState: e.transitionState,
    "aria-labelledby": x,
    children: [(0, n.jsxs)(l.ModalHeader, {
      separator: !1,
      className: f.headerContainer,
      children: [(0, n.jsx)(l.Heading, {
        id: x,
        variant: "heading-xl/extrabold",
        color: "none",
        children: u.default.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_PROMPT
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        className: f.ratingBody,
        children: u.default.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_SUBHEADER
      })]
    }), (0, n.jsx)(l.ModalContent, {
      className: f.modalBody,
      children: (0, n.jsx)(r.RatingsSelector, {
        ratingConfigs: m,
        className: f.ratingsSelector,
        selectedRating: t,
        onChangeRating: function(t) {
          var s;
          d(t), null != (s = t) && ((0, c.default)({
            rating: s
          }), e.onClose(), (0, l.openModalLazy)(async () => {
            let {
              default: e
            } = await a.el("874600").then(a.bind(a, "874600"));
            return t => (0, n.jsx)(e, {
              body: u.default.Messages.SAFETY_USER_SENTIMENT_FEEDBACK_CONFIRMATION,
              ...t
            })
          }))
        }
      })
    }), (0, n.jsx)(l.ModalFooter, {
      className: f.ratingsFooter,
      children: (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        children: u.default.Messages.SAFETY_USER_SENTIMENT_FOOTER.format({
          safetyCenterUrl: o.MarketingURLs.SAFETY_CENTER
        })
      })
    })]
  })
}