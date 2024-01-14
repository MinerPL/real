"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
}), a("222007");
var s = a("37983"),
  i = a("884691"),
  o = a("414456"),
  l = a.n(o),
  n = a("77078"),
  r = a("476765"),
  d = a("418298"),
  u = a("356581"),
  c = a("186859"),
  m = a("782340"),
  h = a("353096");
let L = (0, r.uid)();

function C(e) {
  let {
    channelId: t,
    answer: a,
    index: o,
    onAnswerTextChange: r,
    transitionState: C,
    onClose: E
  } = e, {
    emoji: x,
    hasUpload: M,
    gifUrl: g,
    gifFilename: j
  } = (0, u.default)({
    channelId: t,
    localCreationAnswerId: a.localCreationAnswerId,
    image: a.image
  }), [T, A] = i.useState(a.text);
  return (0, s.jsxs)(n.ModalRoot, {
    size: n.ModalSize.DYNAMIC,
    className: l(h.modal, {
      [h.hasImage]: M,
      [h.hasEmoji]: null != x
    }),
    transitionState: C,
    "aria-label": m.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
    children: [(0, s.jsx)(d.PollCreationMediaPreview, {
      hasUpload: M,
      gifUrl: g,
      gifFilename: j,
      imageClassName: h.imagePreview,
      emoji: x,
      emojiClassName: h.emojiPreview
    }), (0, s.jsxs)(n.ModalContent, {
      className: h.content,
      children: [(0, s.jsx)(n.FormTitle, {
        tag: n.FormTitleTags.LABEL,
        htmlFor: L,
        children: m.default.Messages.CREATE_POLL_ALT_TEXT_LABEL
      }), (0, s.jsx)(n.TextInput, {
        id: L,
        value: T,
        inputClassName: h.input,
        onChange: A,
        maxLength: c.MAX_POLL_ANSWER_LENGTH,
        autoFocus: !0
      })]
    }), (0, s.jsxs)(n.ModalFooter, {
      className: h.footer,
      children: [(0, s.jsx)(n.Button, {
        look: n.ButtonLooks.FILLED,
        size: n.Button.Sizes.MEDIUM,
        onClick: () => {
          null != T && r(T, o), E()
        },
        children: (0, s.jsx)(n.Text, {
          variant: "text-md/semibold",
          children: m.default.Messages.SAVE
        })
      }), (0, s.jsx)(n.Button, {
        look: n.ButtonLooks.LINK,
        size: n.Button.Sizes.MEDIUM,
        onClick: E,
        children: (0, s.jsx)(n.Text, {
          variant: "text-md/semibold",
          children: m.default.Messages.CANCEL
        })
      })]
    })]
  })
}