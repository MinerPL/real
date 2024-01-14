"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
}), s("222007");
var l = s("37983"),
  n = s("884691"),
  a = s("917351"),
  o = s.n(a),
  u = s("77078"),
  r = s("84339"),
  i = s("385042"),
  d = s("229850"),
  c = s("145131"),
  f = s("476765"),
  E = s("561744"),
  _ = s("258078"),
  m = s("701909"),
  h = s("713640"),
  O = s("200521"),
  C = s("782340"),
  M = s("279537");

function N() {
  return (0, l.jsx)(u.Text, {
    className: M.helpdeskLink,
    variant: "text-xs/normal",
    color: "text-muted",
    children: C.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
      helpdeskURL: m.default.getSubmitRequestURL()
    })
  })
}

function x(e) {
  let {
    header: t,
    body: s,
    problems: a,
    transitionState: m,
    feedbackProblems: x = [],
    otherKey: R,
    hasCloseButton: v,
    onSubmit: I,
    onClose: L,
    canDismissForever: H = !0,
    showHelpdeskLink: T = !0
  } = e, g = (0, r.default)(a), [b, p] = n.useState(!1), [S, A] = n.useState(null), [B, k] = n.useState(o.shuffle(a)), [D, j] = n.useState(""), G = (0, f.useUID)(), F = (0, E.default)(b), U = (0, E.default)(S), V = (0, E.default)(I), K = (0, E.default)(D), P = null != S && x.includes(S);
  return n.useEffect(() => {
    !o.isEqual(g, a) && k((0, h.shuffleProblems)(a, R))
  }, [a, g, R]), n.useEffect(() => () => {
    V.current({
      problem: U.current,
      dontShowAgain: F.current,
      feedback: K.current
    })
  }, []), (0, l.jsxs)(u.ModalRoot, {
    transitionState: m,
    className: M.modalRoot,
    "aria-labelledby": G,
    children: [(0, l.jsx)(i.default, {}), (0, l.jsxs)(u.ModalHeader, {
      separator: !1,
      className: M.headerContainer,
      children: [(0, l.jsx)(_.default, {
        id: G,
        className: M.header,
        color: _.default.Colors.CUSTOM,
        size: _.default.Sizes.SIZE_24,
        children: t
      }), (0, l.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "none",
        className: M.ratingBody,
        children: s
      }), v ? (0, l.jsx)(u.ModalCloseButton, {
        className: M.modalCloseButton,
        onClick: L
      }) : null]
    }), (0, l.jsxs)(u.ModalContent, {
      className: M.content,
      children: [P ? null : (0, l.jsx)(u.FormItem, {
        className: M.problemInfo,
        children: (0, l.jsx)(d.default, {
          options: B,
          onClick: function(e) {
            let {
              value: t
            } = e;
            A(t), !x.includes(t) && L()
          }
        })
      }), P ? (0, l.jsxs)(u.FormItem, {
        title: C.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
        className: M.problemInfo,
        children: [(0, l.jsx)(u.TextArea, {
          value: D,
          maxLength: O.FEEDBACK_FREEFORM_LENGTH,
          onChange: j
        }), T ? (0, l.jsx)(N, {}) : null]
      }) : null]
    }), H || P ? (0, l.jsx)(u.ModalFooter, {
      className: M.footer,
      direction: c.default.Direction.HORIZONTAL,
      children: P ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.PRIMARY,
          onClick: () => {
            A(null), j("")
          },
          children: C.default.Messages.BACK
        }), (0, l.jsx)(u.Button, {
          size: u.Button.Sizes.SMALL,
          onClick: L,
          children: C.default.Messages.SUBMIT
        })]
      }) : H ? (0, l.jsx)(u.Checkbox, {
        size: 18,
        type: u.Checkbox.Types.INVERTED,
        value: b,
        onChange: () => p(!b),
        children: (0, l.jsx)(u.Text, {
          variant: "text-sm/normal",
          children: C.default.Messages.DONT_SHOW_AGAIN
        })
      }) : null
    }) : null]
  })
}