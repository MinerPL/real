            "use strict";
            a.r(t), a.d(t, {
                PollCreationMediaPreview: function() {
                    return R
                },
                default: function() {
                    return I
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
                f = a("46829"),
                _ = a("228220"),
                A = a("562228"),
                m = a("714411"),
                L = a("356581"),
                p = a("264317"),
                T = a("186859"),
                C = a("782340"),
                x = a("177037"),
                O = a("877055");

            function R(e) {
                let {
                    hasUpload: t,
                    gifUrl: a,
                    gifFilename: n,
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
                    uploadId: a,
                    buttonImage: s,
                    layout: i,
                    handleTogglePollExpressionPicker: c,
                    answerIndex: d
                } = e, {
                    pollExpressionPickerId: E
                } = (0, p.default)(i), {
                    emoji: _,
                    isLoadingGif: m,
                    hasUpload: T,
                    gifUrl: O,
                    gifFilename: h
                } = (0, L.default)({
                    channelId: t,
                    uploadId: a,
                    image: s
                }), I = i === u.PollLayoutTypes.DEFAULT, N = n.useMemo(() => T ? C.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                    imageName: (0, A.filterOutUUID)(h),
                    answerNumber: d + 1
                }) : null != _ ? C.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                    imageName: _.name,
                    answerNumber: d + 1
                }) : C.default.Messages.CREATE_POLL_ADD_IMAGE_ARIA.format({
                    answerNumber: d + 1
                }), [T, _, d, h]);
                return m ? (0, l.jsx)(o.Spinner, {
                    className: I ? x.spinnerWrapperDefault : x.spinnerWrapperImageOnly
                }) : (0, l.jsx)(o.Clickable, {
                    onClick: c,
                    "aria-controls": E,
                    "aria-label": N,
                    className: i === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? x.expressionPickerButtonImageOnly : x.expressionPickerButtonDefault,
                    "data-menu-item": "true",
                    children: (0, l.jsx)(R, {
                        hasUpload: T,
                        gifUrl: O,
                        gifFilename: h,
                        imageClassName: r(x.media, I ? x.gifDefault : x.gifJumbo),
                        emoji: _,
                        emojiClassName: r(x.media, I ? x.emojiDefault : x.emojiJumbo),
                        fallback: (0, l.jsx)(f.default, {
                            className: I ? x.expressionPickerIconDefault : x.expressionPickerIconImageOnly
                        })
                    })
                })
            }
            var I = n.forwardRef(function(e, t) {
                let {
                    channelId: n,
                    answer: s,
                    index: c,
                    layout: E,
                    onAnswerTextChange: f,
                    handleTogglePollExpressionPicker: A,
                    onRemoveAnswer: L
                } = e, p = () => {
                    (0, o.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("38228").then(a.bind(a, "38228"));
                        return t => (0, l.jsx)(e, {
                            channelId: n,
                            answer: s,
                            index: c,
                            onAnswerTextChange: f,
                            ...t
                        })
                    })
                }, R = (0, l.jsx)(h, {
                    channelId: n,
                    buttonImage: s.image,
                    layout: E,
                    handleTogglePollExpressionPicker: A,
                    uploadId: s.uploadId,
                    answerIndex: c
                }), I = null != s.text && s.text.length > 0;
                return (0, l.jsx)(l.Fragment, {
                    children: E === u.PollLayoutTypes.DEFAULT ? (0, l.jsxs)("div", {
                        className: x.answerRow,
                        children: [(0, l.jsxs)("div", {
                            className: r(O.formInput, x.defaultContainer),
                            ref: t,
                            children: [R, (0, l.jsx)(o.TextInput, {
                                "aria-label": C.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
                                    answerNumber: c + 1
                                }),
                                placeholder: C.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                                value: s.text,
                                className: x.defaultTextInput,
                                inputClassName: r(O.formInput, x.defaultTextInput),
                                onChange: e => f(e, c),
                                maxLength: T.MAX_POLL_ANSWER_LENGTH
                            })]
                        }), (0, l.jsx)(o.Clickable, {
                            onClick: () => L(c),
                            className: x.removeAnswerButtonDefault,
                            "aria-label": C.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
                                answerNumber: c + 1
                            }),
                            children: (0, l.jsx)(_.default, {
                                className: x.trashIcon,
                                "aria-hidden": !0
                            })
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: x.imageOnlyContainer,
                        ref: t,
                        children: [(0, l.jsxs)("div", {
                            className: x.imagePreviewContainer,
                            children: [R, I && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(o.Text, {
                                    variant: "text-xs/semibold",
                                    className: x.altBadge,
                                    "aria-hidden": !0,
                                    children: C.default.Messages.IMAGE_ALT
                                }), (0, l.jsxs)("div", {
                                    onClick: p,
                                    children: [(0, l.jsx)(i.VisuallyHidden, {
                                        children: C.default.Messages.CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT
                                    }), (0, l.jsx)(o.Text, {
                                        variant: "text-xxs/medium",
                                        className: x.altTextPreview,
                                        children: s.text
                                    })]
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: x.imageOnlyAnswerActionBar,
                            children: [(0, l.jsx)(d.default, {
                                tooltip: C.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
                                "aria-label": I ? C.default.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format({
                                    answerNumber: c + 1
                                }) : C.default.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format({
                                    answerNumber: c + 1
                                }),
                                onClick: p,
                                children: (0, l.jsx)(m.ImageAltIcon, {
                                    "aria-hidden": !0
                                })
                            }), (0, l.jsx)(d.default, {
                                tooltip: C.default.Messages.CREATE_POLL_REMOVE_ANSWER,
                                "aria-label": C.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
                                    answerNumber: c + 1
                                }),
                                onClick: () => L(c),
                                dangerous: !0,
                                children: (0, l.jsx)(_.default, {
                                    "aria-hidden": !0
                                })
                            })]
                        })]
                    })
                })
            })