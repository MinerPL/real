"use strict";
a.r(t), a.d(t, {
  RatingsSelector: function() {
    return N
  },
  default: function() {
    return g
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  i = a.n(s),
  c = a("917351"),
  o = a.n(c),
  u = a("77078"),
  d = a("84339"),
  r = a("229850"),
  f = a("145131"),
  T = a("476765"),
  I = a("561744"),
  _ = a("701909"),
  A = a("713640"),
  E = a("200521"),
  R = a("782340"),
  m = a("279537");
let C = [{
  className: m.emojiSad,
  rating: E.FeedbackRating.BAD,
  classNameSelected: m.selected
}, {
  className: m.emojiNeutral,
  rating: E.FeedbackRating.NEUTRAL,
  classNameSelected: m.selected
}, {
  className: m.emojiHappy,
  rating: E.FeedbackRating.GOOD,
  classNameSelected: m.selected
}];

function N(e) {
  let {
    className: t,
    selectedRating: a,
    ratingConfigs: n,
    onChangeRating: s
  } = e;
  return (0, l.jsx)(f.default, {
    justify: f.default.Justify.BETWEEN,
    align: f.default.Align.CENTER,
    className: i(m.ratingsSelector, t),
    children: (null != n ? n : C).map(e => {
      let {
        rating: t,
        className: n,
        classNameSelected: c
      } = e;
      return (0, l.jsx)(u.Clickable, {
        onClick: () => s(t),
        "aria-label": t,
        children: (0, l.jsx)("div", {
          className: i(n, a === t ? c : null)
        })
      }, t)
    })
  })
}

function O() {
  return (0, l.jsx)(u.Text, {
    className: m.helpdeskLink,
    variant: "text-xs/normal",
    color: "text-muted",
    children: R.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
      helpdeskURL: _.default.getSubmitRequestURL()
    })
  })
}

function g(e) {
  let {
    header: t,
    body: a,
    problemTitle: s,
    problems: c,
    transitionState: _,
    ratingConfigs: C,
    feedbackProblems: g = [],
    otherKey: p,
    ratingsSelectorClassName: b,
    hideDontShowCheckbox: x,
    startRating: h = null,
    onSubmit: v,
    onClose: k
  } = e, F = (0, d.default)(c), [D, M] = n.useState(!1), [j, S] = n.useState(h), [L, y] = n.useState(null), [Y, V] = n.useState(o.shuffle(c)), [P, B] = n.useState(""), G = (0, T.useUID)(), H = (0, I.default)(j), U = (0, I.default)(D), K = (0, I.default)(L), z = (0, I.default)(v), w = (0, I.default)(P), W = null != L && g.includes(L);
  return n.useEffect(() => {
    !o.isEqual(F, c) && V((0, A.shuffleProblems)(c, p))
  }, [c, F, p]), n.useEffect(() => () => {
    z.current({
      rating: H.current,
      problem: K.current,
      dontShowAgain: U.current,
      feedback: w.current
    })
  }, []), (0, l.jsxs)(u.ModalRoot, {
    transitionState: _,
    className: m.modalRoot,
    "aria-labelledby": G,
    children: [(0, l.jsxs)(u.ModalHeader, {
      separator: !1,
      className: m.headerContainer,
      children: [(0, l.jsx)(u.Heading, {
        id: G,
        variant: "heading-xl/extrabold",
        color: "none",
        children: t
      }), (0, l.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "none",
        className: m.ratingBody,
        children: a
      }), W ? null : (0, l.jsx)(N, {
        className: i(m.emojis, b),
        selectedRating: j,
        onChangeRating: function(e) {
          S(e), e === E.FeedbackRating.GOOD && k()
        },
        ratingConfigs: C
      })]
    }), (0, l.jsxs)(u.ModalContent, {
      className: m.content,
      children: [null == j || j === E.FeedbackRating.GOOD || W ? null : (0, l.jsx)(u.FormItem, {
        title: s,
        className: m.problemInfo,
        children: (0, l.jsx)(r.default, {
          options: Y,
          onClick: function(e) {
            let {
              value: t
            } = e;
            y(t), !g.includes(t) && k()
          },
          hideCaret: e => {
            let {
              value: t
            } = e;
            return !g.includes(t)
          }
        })
      }), W ? (0, l.jsxs)(u.FormItem, {
        title: R.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
        className: m.problemInfo,
        children: [(0, l.jsx)(u.TextArea, {
          value: P,
          maxLength: E.FEEDBACK_FREEFORM_LENGTH,
          onChange: B
        }), (0, l.jsx)(O, {})]
      }) : null]
    }), (W || !x) && (0, l.jsx)(u.ModalFooter, {
      className: m.footer,
      direction: f.default.Direction.HORIZONTAL,
      children: W ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.PRIMARY,
          onClick: () => {
            y(null), B("")
          },
          children: R.default.Messages.BACK
        }), (0, l.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          onClick: k,
          children: R.default.Messages.SUBMIT
        })]
      }) : (0, l.jsx)(u.Checkbox, {
        type: u.Checkbox.Types.INVERTED,
        size: 18,
        value: D,
        onChange: () => M(!D),
        children: (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: R.default.Messages.DONT_SHOW_AGAIN
        })
      })
    })]
  })
}