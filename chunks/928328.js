"use strict";
a.r(t), a.d(t, {
  RatingsSelector: function() {
    return R
  },
  default: function() {
    return C
  }
}), a("222007");
var n = a("37983"),
  s = a("884691"),
  l = a("414456"),
  r = a.n(l),
  i = a("917351"),
  c = a.n(i),
  o = a("77078"),
  d = a("84339"),
  u = a("229850"),
  f = a("145131"),
  m = a("476765"),
  x = a("561744"),
  E = a("701909"),
  g = a("713640"),
  h = a("200521"),
  N = a("782340"),
  S = a("279537");
let j = [{
  className: S.emojiSad,
  rating: h.FeedbackRating.BAD,
  classNameSelected: S.selected
}, {
  className: S.emojiNeutral,
  rating: h.FeedbackRating.NEUTRAL,
  classNameSelected: S.selected
}, {
  className: S.emojiHappy,
  rating: h.FeedbackRating.GOOD,
  classNameSelected: S.selected
}];

function R(e) {
  let {
    className: t,
    selectedRating: a,
    ratingConfigs: s,
    onChangeRating: l
  } = e;
  return (0, n.jsx)(f.default, {
    justify: f.default.Justify.BETWEEN,
    align: f.default.Align.CENTER,
    className: r(S.ratingsSelector, t),
    children: (null != s ? s : j).map(e => {
      let {
        rating: t,
        className: s,
        classNameSelected: i
      } = e;
      return (0, n.jsx)(o.Clickable, {
        onClick: () => l(t),
        "aria-label": t,
        children: (0, n.jsx)("div", {
          className: r(s, a === t ? i : null)
        })
      }, t)
    })
  })
}

function T() {
  return (0, n.jsx)(o.Text, {
    className: S.helpdeskLink,
    variant: "text-xs/normal",
    color: "text-muted",
    children: N.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
      helpdeskURL: E.default.getSubmitRequestURL()
    })
  })
}

function C(e) {
  let {
    header: t,
    body: a,
    problemTitle: l,
    problems: i,
    transitionState: E,
    ratingConfigs: j,
    feedbackProblems: C = [],
    otherKey: p,
    ratingsSelectorClassName: b,
    hideDontShowCheckbox: M,
    startRating: _ = null,
    onSubmit: F,
    onClose: A
  } = e, k = (0, d.default)(i), [v, B] = s.useState(!1), [D, I] = s.useState(_), [O, U] = s.useState(null), [L, y] = s.useState(c.shuffle(i)), [H, K] = s.useState(""), G = (0, m.useUID)(), Y = (0, x.default)(D), z = (0, x.default)(v), P = (0, x.default)(O), w = (0, x.default)(F), q = (0, x.default)(H), W = null != O && C.includes(O);
  return s.useEffect(() => {
    !c.isEqual(k, i) && y((0, g.shuffleProblems)(i, p))
  }, [i, k, p]), s.useEffect(() => () => {
    w.current({
      rating: Y.current,
      problem: P.current,
      dontShowAgain: z.current,
      feedback: q.current
    })
  }, []), (0, n.jsxs)(o.ModalRoot, {
    transitionState: E,
    className: S.modalRoot,
    "aria-labelledby": G,
    children: [(0, n.jsxs)(o.ModalHeader, {
      separator: !1,
      className: S.headerContainer,
      children: [(0, n.jsx)(o.Heading, {
        id: G,
        variant: "heading-xl/extrabold",
        color: "none",
        children: t
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "none",
        className: S.ratingBody,
        children: a
      }), W ? null : (0, n.jsx)(R, {
        className: r(S.emojis, b),
        selectedRating: D,
        onChangeRating: function(e) {
          I(e), e === h.FeedbackRating.GOOD && A()
        },
        ratingConfigs: j
      })]
    }), (0, n.jsxs)(o.ModalContent, {
      className: S.content,
      children: [null == D || D === h.FeedbackRating.GOOD || W ? null : (0, n.jsx)(o.FormItem, {
        title: l,
        className: S.problemInfo,
        children: (0, n.jsx)(u.default, {
          options: L,
          onClick: function(e) {
            let {
              value: t
            } = e;
            U(t), !C.includes(t) && A()
          },
          hideCaret: e => {
            let {
              value: t
            } = e;
            return !C.includes(t)
          }
        })
      }), W ? (0, n.jsxs)(o.FormItem, {
        title: N.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
        className: S.problemInfo,
        children: [(0, n.jsx)(o.TextArea, {
          value: H,
          maxLength: h.FEEDBACK_FREEFORM_LENGTH,
          onChange: K
        }), (0, n.jsx)(T, {})]
      }) : null]
    }), (W || !M) && (0, n.jsx)(o.ModalFooter, {
      className: S.footer,
      direction: f.default.Direction.HORIZONTAL,
      children: W ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Button, {
          size: o.Button.Sizes.SMALL,
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          onClick: () => {
            U(null), K("")
          },
          children: N.default.Messages.BACK
        }), (0, n.jsx)(o.Button, {
          size: o.Button.Sizes.SMALL,
          onClick: A,
          children: N.default.Messages.SUBMIT
        })]
      }) : (0, n.jsx)(o.Checkbox, {
        type: o.Checkbox.Types.INVERTED,
        size: 18,
        value: v,
        onChange: () => B(!v),
        children: (0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: N.default.Messages.DONT_SHOW_AGAIN
        })
      })
    })]
  })
}