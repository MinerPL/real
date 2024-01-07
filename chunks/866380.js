            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return x
                }
            }), s("222007");
            var l = s("37983"),
                a = s("884691"),
                n = s("917351"),
                u = s.n(n),
                r = s("77078"),
                o = s("84339"),
                i = s("385042"),
                d = s("229850"),
                c = s("145131"),
                E = s("476765"),
                f = s("561744"),
                D = s("258078"),
                _ = s("701909"),
                m = s("713640"),
                T = s("200521"),
                L = s("782340"),
                C = s("279537");

            function h() {
                return (0, l.jsx)(r.Text, {
                    className: C.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: L.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: _.default.getSubmitRequestURL()
                    })
                })
            }

            function x(e) {
                let {
                    header: t,
                    body: s,
                    problems: n,
                    transitionState: _,
                    feedbackProblems: x = [],
                    otherKey: I,
                    hasCloseButton: p,
                    onSubmit: v,
                    onClose: b,
                    canDismissForever: A = !0,
                    showHelpdeskLink: g = !0
                } = e, M = (0, o.default)(n), [R, B] = a.useState(!1), [N, O] = a.useState(null), [S, j] = a.useState(u.shuffle(n)), [G, k] = a.useState(""), F = (0, E.useUID)(), U = (0, f.default)(R), K = (0, f.default)(N), y = (0, f.default)(v), H = (0, f.default)(G), P = null != N && x.includes(N);
                return a.useEffect(() => {
                    !u.isEqual(M, n) && j((0, m.shuffleProblems)(n, I))
                }, [n, M, I]), a.useEffect(() => () => {
                    y.current({
                        problem: K.current,
                        dontShowAgain: U.current,
                        feedback: H.current
                    })
                }, []), (0, l.jsxs)(r.ModalRoot, {
                    transitionState: _,
                    className: C.modalRoot,
                    "aria-labelledby": F,
                    children: [(0, l.jsx)(i.default, {}), (0, l.jsxs)(r.ModalHeader, {
                        separator: !1,
                        className: C.headerContainer,
                        children: [(0, l.jsx)(D.default, {
                            id: F,
                            className: C.header,
                            color: D.default.Colors.CUSTOM,
                            size: D.default.Sizes.SIZE_24,
                            children: t
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: C.ratingBody,
                            children: s
                        }), p ? (0, l.jsx)(r.ModalCloseButton, {
                            className: C.modalCloseButton,
                            onClick: b
                        }) : null]
                    }), (0, l.jsxs)(r.ModalContent, {
                        className: C.content,
                        children: [P ? null : (0, l.jsx)(r.FormItem, {
                            className: C.problemInfo,
                            children: (0, l.jsx)(d.default, {
                                options: S,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    O(t), !x.includes(t) && b()
                                }
                            })
                        }), P ? (0, l.jsxs)(r.FormItem, {
                            title: L.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: C.problemInfo,
                            children: [(0, l.jsx)(r.TextArea, {
                                value: G,
                                maxLength: T.FEEDBACK_FREEFORM_LENGTH,
                                onChange: k
                            }), g ? (0, l.jsx)(h, {}) : null]
                        }) : null]
                    }), A || P ? (0, l.jsx)(r.ModalFooter, {
                        className: C.footer,
                        direction: c.default.Direction.HORIZONTAL,
                        children: P ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                onClick: () => {
                                    O(null), k("")
                                },
                                children: L.default.Messages.BACK
                            }), (0, l.jsx)(r.Button, {
                                size: r.Button.Sizes.SMALL,
                                onClick: b,
                                children: L.default.Messages.SUBMIT
                            })]
                        }) : A ? (0, l.jsx)(r.Checkbox, {
                            size: 18,
                            type: r.Checkbox.Types.INVERTED,
                            value: R,
                            onChange: () => B(!R),
                            children: (0, l.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: L.default.Messages.DONT_SHOW_AGAIN
                            })
                        }) : null
                    }) : null]
                })
            }