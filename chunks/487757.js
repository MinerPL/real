            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return M
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
                f = a("476765"),
                A = a("151185"),
                m = a("562228"),
                L = a("104182"),
                T = a("741138"),
                C = a("362415"),
                p = a("418298"),
                x = a("612805"),
                O = a("53013"),
                P = a("233365"),
                R = a("264317"),
                N = a("186859"),
                h = a("660516"),
                I = a("782340"),
                g = a("877055");
            let v = (0, f.uid)();

            function S(e) {
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

            function M(e) {
                let {
                    channel: t,
                    transitionState: a,
                    onClose: s
                } = e;
                (0, E.default)({
                    type: h.ImpressionTypes.MODAL,
                    name: c.ImpressionNames.POLL_EDITOR_VIEWED
                });
                let {
                    answers: i,
                    question: f,
                    setQuestion: T,
                    selectedLayoutType: j,
                    setSelectedLayoutType: D,
                    allowMultiSelect: y,
                    setAllowMultiSelect: b,
                    duration: k,
                    setDuration: w,
                    canPost: U,
                    canAddMoreAnswers: G,
                    handleAddAnswer: B,
                    handleAnswerTextChange: H,
                    handleEmojiSelect: F,
                    handleGifSelect: W,
                    handleRemoveAnswer: V,
                    createPoll: Y,
                    createPollError: K,
                    submitting: z
                } = (0, L.default)(t, s), {
                    trackPollCreationCancelled: X
                } = (0, C.useTrackPollCreationEvents)(f, i, y, j), Z = n.useRef([]), {
                    togglePollExpressionPicker: J,
                    lastActiveParentIndex: Q
                } = (0, R.default)(j), q = n.useCallback(() => {
                    o(null != Q, "Must have an active input");
                    let e = Z.current[Q];
                    return o(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
                }, [Q]), $ = j === d.PollLayoutTypes.DEFAULT, ee = n.useCallback(() => {
                    X(), s()
                }, [s, X]), et = n.useCallback(() => {
                    let e = f.length > 0 || i.some(e => (0, m.isAnswerFilled)(e, j));
                    e ? (0, P.default)({
                        title: I.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
                        body: I.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
                        cta: I.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
                        closeLabel: I.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
                        onConfirm: () => {
                            ee()
                        }
                    }) : ee()
                }, [ee, i, f, j]);
                n.useEffect(() => {
                    (0, u.updateModal)(N.POLL_CREATION_MODAL_KEY, e => (0, l.jsx)(M, {
                        ...e,
                        channel: t
                    }), et)
                }, [et, t]);
                let ea = (0, _.default)({
                    disabled: !U,
                    onSubmit: Y
                });
                return (0, l.jsxs)(u.ModalRoot, {
                    size: u.ModalSize.MEDIUM,
                    className: g.container,
                    transitionState: a,
                    "aria-labelledby": v,
                    children: [(0, l.jsxs)(u.ModalHeader, {
                        className: g.header,
                        separator: !1,
                        children: [(0, l.jsx)(u.Heading, {
                            color: "interactive-normal",
                            variant: "text-lg/semibold",
                            className: g.headerText,
                            id: v,
                            children: I.default.Messages.CREATE_POLL_HEADING
                        }), (0, l.jsx)(u.ModalCloseButton, {
                            onClick: et
                        })]
                    }), (0, l.jsxs)(u.ModalContent, {
                        className: g.content,
                        onKeyDown: ea,
                        children: [null != K && (0, l.jsx)(u.FormErrorBlock, {
                            children: K.getAnyErrorMessage()
                        }), (0, l.jsx)(u.TextInput, {
                            "aria-label": I.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
                            placeholder: I.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
                            value: f,
                            inputClassName: g.questionInput,
                            onChange: T,
                            maxLength: N.MAX_POLL_QUESTION_LENGTH,
                            autoFocus: !0
                        }), (0, l.jsx)(x.default, {
                            selectedLayoutType: j,
                            onSelectedLayoutType: D
                        }), (0, l.jsxs)("div", {
                            className: r(g.answerInputsContainer, $ ? g.defaultContainer : g.imageOnlyContainer),
                            role: "group",
                            "aria-label": I.default.Messages.POLL_OPTIONS_ARIA,
                            children: [i.map((e, a) => (0, l.jsx)(p.default, {
                                answer: e,
                                channelId: t.id,
                                index: a,
                                ref: e => Z.current[a] = e,
                                handleTogglePollExpressionPicker: () => J(a),
                                layout: j,
                                onAnswerTextChange: H,
                                onRemoveAnswer: V
                            }, e.localCreationAnswerId)), G && (0, l.jsxs)(u.Clickable, {
                                className: $ ? g.addAnswerButtonDefault : g.addAnswerButtonImageOnly,
                                onClick: G ? B : void 0,
                                "aria-label": I.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
                                children: [(0, l.jsx)(A.default, {
                                    className: $ ? g.addAnswerIconDefault : g.addAnswerIconImageOnly
                                }), $ && (0, l.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: I.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
                                })]
                            })]
                        }), (0, l.jsx)(S, {
                            selectedDuration: k,
                            onSelect: w
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        className: g.footer,
                        children: [(0, l.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 24,
                            value: y,
                            onChange: (e, t) => b(t),
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: I.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
                            })
                        }), (0, l.jsx)(u.Button, {
                            look: u.ButtonLooks.FILLED,
                            size: u.Button.Sizes.MEDIUM,
                            className: g.postButton,
                            onClick: Y,
                            submitting: z,
                            disabled: !U,
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                className: g.postButtonText,
                                children: I.default.Messages.CREATE_POLL_POST
                            })
                        })]
                    }), (0, l.jsx)(O.default, {
                        channel: t,
                        layout: j,
                        parentModalKey: N.POLL_CREATION_MODAL_KEY,
                        onEmojiSelect: F,
                        onGifSelect: W,
                        positionTargetRef: q,
                        lastActiveInputIndex: Q
                    })]
                })
            }