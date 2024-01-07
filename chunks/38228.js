            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            }), a("222007");
            var s = a("37983"),
                i = a("884691"),
                o = a("414456"),
                l = a.n(o),
                n = a("77078"),
                d = a("476765"),
                u = a("418298"),
                r = a("356581"),
                m = a("186859"),
                c = a("782340"),
                h = a("353096");
            let L = (0, d.uid)();

            function E(e) {
                let {
                    channelId: t,
                    answer: a,
                    index: o,
                    onAnswerTextChange: d,
                    transitionState: E,
                    onClose: x
                } = e, {
                    emoji: C,
                    hasUpload: M,
                    gifUrl: g,
                    gifFilename: j
                } = (0, r.default)({
                    channelId: t,
                    uploadId: a.uploadId,
                    image: a.image
                }), [T, p] = i.useState(a.text);
                return (0, s.jsxs)(n.ModalRoot, {
                    size: n.ModalSize.DYNAMIC,
                    className: l(h.modal, {
                        [h.hasImage]: M,
                        [h.hasEmoji]: null != C
                    }),
                    transitionState: E,
                    "aria-label": c.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
                    children: [(0, s.jsx)(u.PollCreationMediaPreview, {
                        hasUpload: M,
                        gifUrl: g,
                        gifFilename: j,
                        imageClassName: h.imagePreview,
                        emoji: C,
                        emojiClassName: h.emojiPreview
                    }), (0, s.jsxs)(n.ModalContent, {
                        className: h.content,
                        children: [(0, s.jsx)(n.FormTitle, {
                            tag: n.FormTitleTags.LABEL,
                            htmlFor: L,
                            children: c.default.Messages.CREATE_POLL_ALT_TEXT_LABEL
                        }), (0, s.jsx)(n.TextInput, {
                            id: L,
                            value: T,
                            inputClassName: h.input,
                            onChange: p,
                            maxLength: m.MAX_POLL_ANSWER_LENGTH,
                            autoFocus: !0
                        })]
                    }), (0, s.jsxs)(n.ModalFooter, {
                        className: h.footer,
                        children: [(0, s.jsx)(n.Button, {
                            look: n.ButtonLooks.FILLED,
                            size: n.Button.Sizes.MEDIUM,
                            onClick: () => {
                                null != T && d(T, o), x()
                            },
                            children: (0, s.jsx)(n.Text, {
                                variant: "text-md/semibold",
                                children: c.default.Messages.SAVE
                            })
                        }), (0, s.jsx)(n.Button, {
                            look: n.ButtonLooks.LINK,
                            size: n.Button.Sizes.MEDIUM,
                            onClick: x,
                            children: (0, s.jsx)(n.Text, {
                                variant: "text-md/semibold",
                                children: c.default.Messages.CANCEL
                            })
                        })]
                    })]
                })
            }