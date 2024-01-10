            "use strict";
            a.r(t), a.d(t, {
                PollCreationMediaPreview: function() {
                    return N
                },
                default: function() {
                    return h
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
                T = a("264317"),
                C = a("186859"),
                p = a("13030"),
                x = a("782340"),
                O = a("177037"),
                R = a("877055");

            function N(e) {
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

            function P(e) {
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
                    emoji: _,
                    isLoadingGif: m,
                    hasUpload: C,
                    gifUrl: R,
                    gifFilename: P
                } = (0, L.default)({
                    channelId: t,
                    localCreationAnswerId: a,
                    image: s
                }), h = i === u.PollLayoutTypes.DEFAULT, I = n.useMemo(() => C ? x.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                    imageName: (0, A.filterOutUUID)(P),
                    answerNumber: d + 1
                }) : null != _ ? x.default.Messages.CREATE_POLL_EDIT_IMAGE_ARIA.format({
                    imageName: _.name,
                    answerNumber: d + 1
                }) : x.default.Messages.CREATE_POLL_ADD_IMAGE_ARIA.format({
                    answerNumber: d + 1
                }), [C, _, d, P]);
                return m ? (0, l.jsx)(o.Spinner, {
                    className: h ? O.spinnerWrapperDefault : O.spinnerWrapperImageOnly
                }) : (0, l.jsx)(o.Clickable, {
                    onClick: c,
                    "aria-controls": E,
                    "aria-label": I,
                    className: r(p.CHAT_INPUT_BUTTON_CLASSNAME, i === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? O.expressionPickerButtonImageOnly : O.expressionPickerButtonDefault),
                    "data-menu-item": "true",
                    children: (0, l.jsx)(N, {
                        hasUpload: C,
                        gifUrl: R,
                        gifFilename: P,
                        imageClassName: r(O.media, h ? O.gifDefault : O.gifJumbo),
                        emoji: _,
                        emojiClassName: r(O.media, h ? O.emojiDefault : O.emojiJumbo),
                        fallback: (0, l.jsx)(f.default, {
                            className: h ? O.expressionPickerIconDefault : O.expressionPickerIconImageOnly
                        })
                    })
                })
            }
            var h = n.forwardRef(function(e, t) {
                let {
                    channelId: n,
                    answer: s,
                    index: c,
                    layout: E,
                    onAnswerTextChange: f,
                    handleTogglePollExpressionPicker: A,
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
                            onAnswerTextChange: f,
                            ...t
                        })
                    })
                }, p = (0, l.jsx)(P, {
                    channelId: n,
                    buttonImage: s.image,
                    layout: E,
                    handleTogglePollExpressionPicker: A,
                    localCreationAnswerId: s.localCreationAnswerId,
                    answerIndex: c
                }), N = null != s.text && s.text.length > 0;
                return (0, l.jsx)(l.Fragment, {
                    children: E === u.PollLayoutTypes.DEFAULT ? (0, l.jsxs)("div", {
                        className: O.answerRow,
                        children: [(0, l.jsxs)("div", {
                            className: r(R.formInput, O.defaultContainer),
                            ref: t,
                            children: [p, (0, l.jsx)(o.TextInput, {
                                "aria-label": x.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
                                    answerNumber: c + 1
                                }),
                                placeholder: x.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                                value: s.text,
                                className: O.defaultTextInput,
                                inputClassName: r(R.formInput, O.defaultTextInput),
                                onChange: e => f(e, c),
                                maxLength: C.MAX_POLL_ANSWER_LENGTH
                            })]
                        }), (0, l.jsx)(o.Clickable, {
                            onClick: () => L(c),
                            className: O.removeAnswerButtonDefault,
                            "aria-label": x.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
                                answerNumber: c + 1
                            }),
                            children: (0, l.jsx)(_.default, {
                                className: O.trashIcon,
                                "aria-hidden": !0
                            })
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: O.imageOnlyContainer,
                        ref: t,
                        children: [(0, l.jsxs)("div", {
                            className: O.imagePreviewContainer,
                            children: [p, N && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(o.Text, {
                                    variant: "text-xs/semibold",
                                    className: O.altBadge,
                                    "aria-hidden": !0,
                                    children: x.default.Messages.IMAGE_ALT
                                }), (0, l.jsxs)("div", {
                                    onClick: T,
                                    children: [(0, l.jsx)(i.VisuallyHidden, {
                                        children: x.default.Messages.CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT
                                    }), (0, l.jsx)(o.Text, {
                                        variant: "text-xxs/medium",
                                        className: O.altTextPreview,
                                        children: s.text
                                    })]
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: O.imageOnlyAnswerActionBar,
                            children: [(0, l.jsx)(d.default, {
                                tooltip: x.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
                                "aria-label": N ? x.default.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format({
                                    answerNumber: c + 1
                                }) : x.default.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format({
                                    answerNumber: c + 1
                                }),
                                onClick: T,
                                children: (0, l.jsx)(m.ImageAltIcon, {
                                    "aria-hidden": !0
                                })
                            }), (0, l.jsx)(d.default, {
                                tooltip: x.default.Messages.CREATE_POLL_REMOVE_ANSWER,
                                "aria-label": x.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
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