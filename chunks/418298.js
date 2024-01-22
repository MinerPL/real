"use strict";
a.r(t), a.d(t, {
  PollCreationMediaPreview: function() {
    return O
  },
  default: function() {
    return N
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  r = a.n(s),
  i = a("597287"),
  o = a("77078"),
  u = a("418009"),
  c = a("430568"),
  d = a("9560"),
  E = a("858619"),
  _ = a("46829"),
  A = a("228220"),
  m = a("562228"),
  f = a("714411"),
  L = a("356581"),
  T = a("264317"),
  C = a("186859"),
  p = a("13030"),
  R = a("782340"),
  P = a("177037"),
  x = a("877055");

function O(e) {
  let {
    hasUpload: t,
    mediaUrl: a,
    mediaFilename: n,
    imageClassName: s,
    emoji: r,
    emojiClassName: i,
    fallback: o
  } = e;
  return t ? (0, l.jsx)("img", {
    src: a,
    alt: n,
    className: s
  }) : null != r ? (0, l.jsx)(c.default, {
    className: i,
    emojiId: r.id,
    emojiName: r.type === E.EmojiTypes.UNICODE ? r.surrogates : r.name,
    animated: r.animated
  }) : (0, l.jsx)(l.Fragment, {
    children: o
  })
}

function h(e) {
  let {
    channelId: t,
    localCreationAnswerId: a,
    buttonImage: s,
    layout: i,
    handleTogglePollExpressionPicker: c,
    answerIndex: d
  } = e, {
    pollExpressionPickerId: E
  } = (0, T.default)(i), {
    emoji: A,
    isLoadingMedia: f,
    hasUpload: C,
    mediaUrl: x,
    mediaFilename: h
  } = (0, L.default)({
    channelId: t,
    localCreationAnswerId: a,
    image: s
  }), N = i === u.PollLayoutTypes.DEFAULT, I = n.useMemo(() => C ? R.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
    imageName: (0, m.filterOutUUID)(h),
    answerNumber: d + 1
  }) : null != A ? R.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
    imageName: A.name,
    answerNumber: d + 1
  }) : R.default.Messages.CREATE_POLL_ADD_IMAGE_ARIA.format({
    answerNumber: d + 1
  }), [C, A, d, h]), g = f ? (0, l.jsx)(o.Spinner, {
    className: N ? P.spinnerWrapperDefault : P.spinnerWrapperImageOnly
  }) : (0, l.jsx)(O, {
    hasUpload: C,
    mediaUrl: x,
    mediaFilename: h,
    imageClassName: r(P.media, N ? P.gifDefault : P.gifJumbo),
    emoji: A,
    emojiClassName: r(P.media, N ? P.emojiDefault : P.emojiJumbo),
    fallback: (0, l.jsx)(_.default, {
      className: N ? P.expressionPickerIconDefault : P.expressionPickerIconImageOnly
    })
  });
  return (0, l.jsx)(o.Clickable, {
    onClick: c,
    "aria-controls": E,
    "aria-label": I,
    className: r(p.CHAT_INPUT_BUTTON_CLASSNAME, i === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? P.expressionPickerButtonImageOnly : P.expressionPickerButtonDefault),
    "data-menu-item": "true",
    children: g
  })
}
var N = n.forwardRef(function(e, t) {
  let {
    channelId: n,
    answer: s,
    index: c,
    layout: E,
    onAnswerTextChange: _,
    handleTogglePollExpressionPicker: m,
    onRemoveAnswer: L
  } = e, T = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await a.el("38228").then(a.bind(a, "38228"));
      return t => (0, l.jsx)(e, {
        channelId: n,
        answer: s,
        index: c,
        onAnswerTextChange: _,
        ...t
      })
    })
  }, p = (0, l.jsx)(h, {
    channelId: n,
    buttonImage: s.image,
    layout: E,
    handleTogglePollExpressionPicker: m,
    localCreationAnswerId: s.localCreationAnswerId,
    answerIndex: c
  }), O = null != s.text && s.text.length > 0;
  return (0, l.jsx)(l.Fragment, {
    children: E === u.PollLayoutTypes.DEFAULT ? (0, l.jsxs)("div", {
      className: P.answerRow,
      children: [(0, l.jsxs)("div", {
        className: r(x.formInput, P.defaultContainer),
        ref: t,
        children: [p, (0, l.jsx)(o.TextInput, {
          "aria-label": R.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
            answerNumber: c + 1
          }),
          placeholder: R.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
          value: s.text,
          className: P.defaultTextInput,
          inputClassName: r(x.formInput, P.defaultTextInput),
          onChange: e => _(e, c),
          maxLength: C.MAX_POLL_ANSWER_LENGTH
        })]
      }), (0, l.jsx)(o.Clickable, {
        onClick: () => L(c),
        className: P.removeAnswerButtonDefault,
        "aria-label": R.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
          answerNumber: c + 1
        }),
        children: (0, l.jsx)(A.default, {
          className: P.trashIcon,
          "aria-hidden": !0
        })
      })]
    }) : (0, l.jsxs)("div", {
      className: P.imageOnlyContainer,
      ref: t,
      children: [(0, l.jsxs)("div", {
        className: P.imagePreviewContainer,
        children: [p, O && (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(o.Text, {
            variant: "text-xs/semibold",
            className: P.altBadge,
            "aria-hidden": !0,
            children: R.default.Messages.IMAGE_ALT
          }), (0, l.jsxs)("div", {
            onClick: T,
            children: [(0, l.jsx)(i.VisuallyHidden, {
              children: R.default.Messages.CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT
            }), (0, l.jsx)(o.Text, {
              variant: "text-xxs/medium",
              className: P.altTextPreview,
              children: s.text
            })]
          })]
        })]
      }), (0, l.jsxs)("div", {
        className: P.imageOnlyAnswerActionBar,
        children: [(0, l.jsx)(d.default, {
          tooltip: R.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
          "aria-label": O ? R.default.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format({
            answerNumber: c + 1
          }) : R.default.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format({
            answerNumber: c + 1
          }),
          onClick: T,
          children: (0, l.jsx)(f.ImageAltIcon, {
            "aria-hidden": !0
          })
        }), (0, l.jsx)(d.default, {
          tooltip: R.default.Messages.CREATE_POLL_REMOVE_ANSWER,
          "aria-label": R.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
            answerNumber: c + 1
          }),
          onClick: () => L(c),
          dangerous: !0,
          children: (0, l.jsx)(A.default, {
            "aria-hidden": !0
          })
        })]
      })]
    })
  })
})