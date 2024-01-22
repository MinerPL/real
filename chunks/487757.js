"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  r = a.n(s),
  i = a("627445"),
  o = a.n(i),
  u = a("77078"),
  c = a("33112"),
  d = a("418009"),
  E = a("428958"),
  _ = a("773284"),
  A = a("476765"),
  m = a("151185"),
  f = a("562228"),
  L = a("104182"),
  T = a("741138"),
  C = a("362415"),
  p = a("418298"),
  R = a("612805"),
  P = a("53013"),
  x = a("233365"),
  O = a("264317"),
  h = a("186859"),
  N = a("660516"),
  I = a("782340"),
  g = a("877055");
let M = (0, A.uid)();

function v(e) {
  let {
    selectedDuration: t,
    onSelect: a
  } = e, n = (0, T.default)(), s = n[t];
  return (0, l.jsxs)("div", {
    className: g.duration,
    children: [(0, l.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      tag: "label",
      "aria-hidden": !0,
      children: I.default.Messages.CREATE_POLL_TEXT_PRECEDING_DURATION_SELECTION
    }), (0, l.jsx)(u.Select, {
      "aria-label": I.default.Messages.CREATE_POLL_DURATION_SELECTION_ARIA_LABEL.format({
        duration: s
      }),
      className: g.durationSelect,
      options: Object.entries(n).map(e => {
        let [t, a] = e;
        return {
          label: a,
          value: parseInt(t)
        }
      }),
      isSelected: e => e === t,
      select: a,
      serialize: e => "".concat(e),
      renderOptionLabel: e => (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: e.label
      }),
      popoutPosition: "top"
    })]
  })
}

function S(e) {
  let {
    channel: t,
    transitionState: a,
    onClose: s
  } = e;
  (0, E.default)({
    type: N.ImpressionTypes.MODAL,
    name: c.ImpressionNames.POLL_EDITOR_VIEWED
  });
  let {
    answers: i,
    question: A,
    setQuestion: T,
    selectedLayoutType: D,
    setSelectedLayoutType: j,
    allowMultiSelect: b,
    setAllowMultiSelect: y,
    duration: k,
    setDuration: U,
    canPost: w,
    canAddMoreAnswers: B,
    handleAddAnswer: G,
    handleAnswerTextChange: H,
    handleEmojiSelect: F,
    handleGifSelect: W,
    handleCustomUpload: Y,
    handleRemoveAnswer: V,
    createPoll: K,
    createPollError: z,
    submitting: X
  } = (0, L.default)(t, s), {
    trackPollCreationCancelled: Z
  } = (0, C.useTrackPollCreationEvents)(A, i, b, D), J = n.useRef([]), {
    togglePollExpressionPicker: Q,
    lastActiveParentIndex: q
  } = (0, O.default)(D), $ = n.useCallback(() => {
    o(null != q, "Must have an active input");
    let e = J.current[q];
    return o(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
  }, [q]), ee = D === d.PollLayoutTypes.DEFAULT, et = n.useCallback(() => {
    Z(), s()
  }, [s, Z]), ea = n.useCallback(() => {
    let e = A.length > 0 || i.some(e => (0, f.isAnswerFilled)(e, D));
    e ? (0, x.default)({
      title: I.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
      body: I.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
      cta: I.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
      closeLabel: I.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
      onConfirm: () => {
        et()
      }
    }) : et()
  }, [et, i, A, D]);
  n.useEffect(() => {
    (0, u.updateModal)(h.POLL_CREATION_MODAL_KEY, e => (0, l.jsx)(S, {
      ...e,
      channel: t
    }), ea)
  }, [ea, t]);
  let el = (0, _.default)({
    disabled: !w,
    onSubmit: K
  });
  return (0, l.jsxs)(u.ModalRoot, {
    size: u.ModalSize.MEDIUM,
    className: g.container,
    transitionState: a,
    "aria-labelledby": M,
    children: [(0, l.jsxs)(u.ModalHeader, {
      className: g.header,
      separator: !1,
      children: [(0, l.jsx)(u.Heading, {
        color: "interactive-normal",
        variant: "text-lg/semibold",
        className: g.headerText,
        id: M,
        children: I.default.Messages.CREATE_POLL_HEADING
      }), (0, l.jsx)(u.ModalCloseButton, {
        onClick: ea
      })]
    }), (0, l.jsxs)(u.ModalContent, {
      className: g.content,
      onKeyDown: el,
      children: [null != z && (0, l.jsx)(u.FormErrorBlock, {
        children: z.getAnyErrorMessage()
      }), (0, l.jsx)(u.TextInput, {
        "aria-label": I.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
        placeholder: I.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
        value: A,
        inputClassName: g.questionInput,
        onChange: T,
        maxLength: h.MAX_POLL_QUESTION_LENGTH,
        autoFocus: !0
      }), (0, l.jsx)(R.default, {
        selectedLayoutType: D,
        onSelectedLayoutType: j
      }), (0, l.jsxs)("div", {
        className: r(g.answerInputsContainer, ee ? g.defaultContainer : g.imageOnlyContainer),
        role: "group",
        "aria-label": I.default.Messages.POLL_OPTIONS_ARIA,
        children: [i.map((e, a) => (0, l.jsx)(p.default, {
          answer: e,
          channelId: t.id,
          index: a,
          ref: e => J.current[a] = e,
          handleTogglePollExpressionPicker: () => Q(a),
          layout: D,
          onAnswerTextChange: H,
          onRemoveAnswer: V
        }, e.localCreationAnswerId)), B && (0, l.jsxs)(u.Clickable, {
          className: ee ? g.addAnswerButtonDefault : g.addAnswerButtonImageOnly,
          onClick: B ? G : void 0,
          "aria-label": I.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
          children: [(0, l.jsx)(m.default, {
            className: ee ? g.addAnswerIconDefault : g.addAnswerIconImageOnly
          }), ee && (0, l.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: I.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
          })]
        })]
      }), (0, l.jsx)(v, {
        selectedDuration: k,
        onSelect: U
      })]
    }), (0, l.jsxs)(u.ModalFooter, {
      className: g.footer,
      children: [(0, l.jsx)(u.Checkbox, {
        type: u.Checkbox.Types.INVERTED,
        size: 24,
        value: b,
        onChange: (e, t) => y(t),
        children: (0, l.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "text-normal",
          children: I.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
        })
      }), (0, l.jsx)(u.Button, {
        look: u.ButtonLooks.FILLED,
        size: u.Button.Sizes.MEDIUM,
        className: g.postButton,
        onClick: K,
        submitting: X,
        disabled: !w,
        children: (0, l.jsx)(u.Text, {
          variant: "text-md/semibold",
          className: g.postButtonText,
          children: I.default.Messages.CREATE_POLL_POST
        })
      })]
    }), (0, l.jsx)(P.default, {
      channel: t,
      layout: D,
      parentModalKey: h.POLL_CREATION_MODAL_KEY,
      onEmojiSelect: F,
      onGifSelect: W,
      onCustomUpload: Y,
      positionTargetRef: $,
      lastActiveInputIndex: q
    })]
  })
}