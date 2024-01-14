"use strict";
a.r(s), a.d(s, {
  default: function() {
    return E
  }
}), a("222007");
var t = a("37983"),
  l = a("884691"),
  i = a("414456"),
  r = a.n(i),
  d = a("77078"),
  n = a("476765"),
  o = a("782340"),
  c = a("40968");
let u = e => {
  let {
    index: s,
    title: a,
    selected: l
  } = e;
  return (0, t.jsxs)("div", {
    className: r(c.overviewStep, {
      [c.selected]: l
    }),
    children: [(0, t.jsx)(d.Text, {
      className: c.stepIndex,
      variant: "text-sm/normal",
      children: s + 1
    }), (0, t.jsx)(d.Text, {
      variant: "text-md/normal",
      className: c.stepTitle,
      children: a
    })]
  })
};
var E = e => {
  let {
    className: s,
    title: a,
    stepData: i,
    transitionState: E,
    onClose: S,
    completeButtonText: R,
    overviewFooter: m,
    onNextPressed: _,
    onPrevPressed: x,
    onComplete: C,
    sequencerClassName: p,
    initialStep: I = 0,
    forceStep: g,
    submitting: T = !1,
    autoCloseOnComplete: h = !0
  } = e, [f, v] = l.useState([]), [D, N] = l.useState(I), O = (0, n.useUID)();
  l.useEffect(() => {
    v([...Array(i.length).keys()])
  }, [i.length]);
  let A = null != g ? g : D,
    M = i[A],
    V = 0 === A,
    j = A === i.length - 1,
    y = null != R ? R : o.default.Messages.DONE,
    L = l.useCallback(() => {
      null == x || x(), N(A - 1)
    }, [x, A, N]);
  return (0, t.jsxs)(d.ModalRoot, {
    size: d.ModalSize.MEDIUM,
    className: r(c.container, s),
    transitionState: E,
    "aria-labelledby": O,
    children: [(0, t.jsxs)("div", {
      className: c.overviewSidebar,
      children: [(0, t.jsx)(d.Heading, {
        id: O,
        variant: "heading-xl/semibold",
        className: c.header,
        children: a
      }), (0, t.jsx)("div", {
        className: c.overviewSteps,
        children: i.map((e, s) => (0, t.jsx)(u, {
          index: s,
          title: e.overviewTitle,
          selected: s === A
        }, s))
      }), m]
    }), (0, t.jsxs)("div", {
      className: c.modal,
      children: [(0, t.jsxs)(d.ModalContent, {
        children: [(0, t.jsx)(d.ModalCloseButton, {
          focusProps: {
            offset: {
              top: 4,
              right: 4,
              left: 4
            }
          },
          onClick: S,
          className: c.closeButton
        }), (0, t.jsx)(d.Sequencer, {
          step: A,
          steps: f,
          sideMargin: 24,
          verticalMargin: 24,
          className: r(c.sequencer, p),
          innerClassName: c.innerSequencer,
          children: M.modalContent
        })]
      }), (0, t.jsxs)(d.ModalFooter, {
        className: c.footer,
        children: [(0, t.jsx)(d.Button, {
          type: "submit",
          submitting: T,
          onClick: () => {
            j ? (C(), h && S()) : (null == _ || _(), N(A + 1))
          },
          color: d.Button.Colors.GREEN,
          disabled: M.disableNextStep,
          children: j ? y : o.default.Messages.NEXT
        }), V ? null : (0, t.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          color: d.Button.Colors.PRIMARY,
          size: d.Button.Sizes.MIN,
          onClick: L,
          children: o.default.Messages.BACK
        })]
      })]
    })]
  })
}