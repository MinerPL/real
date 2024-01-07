            "use strict";
            a.r(t), a.d(t, {
                RatingsSelector: function() {
                    return m
                },
                default: function() {
                    return B
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                r = a.n(n),
                u = a("917351"),
                i = a.n(u),
                o = a("77078"),
                c = a("84339"),
                d = a("229850"),
                E = a("145131"),
                f = a("476765"),
                C = a("561744"),
                O = a("701909"),
                N = a("713640"),
                D = a("200521"),
                _ = a("782340"),
                A = a("279537");
            let R = [{
                className: A.emojiSad,
                rating: D.FeedbackRating.BAD,
                classNameSelected: A.selected
            }, {
                className: A.emojiNeutral,
                rating: D.FeedbackRating.NEUTRAL,
                classNameSelected: A.selected
            }, {
                className: A.emojiHappy,
                rating: D.FeedbackRating.GOOD,
                classNameSelected: A.selected
            }];

            function m(e) {
                let {
                    className: t,
                    selectedRating: a,
                    ratingConfigs: s,
                    onChangeRating: n
                } = e;
                return (0, l.jsx)(E.default, {
                    justify: E.default.Justify.BETWEEN,
                    align: E.default.Align.CENTER,
                    className: r(A.ratingsSelector, t),
                    children: (null != s ? s : R).map(e => {
                        let {
                            rating: t,
                            className: s,
                            classNameSelected: u
                        } = e;
                        return (0, l.jsx)(o.Clickable, {
                            onClick: () => n(t),
                            "aria-label": t,
                            children: (0, l.jsx)("div", {
                                className: r(s, a === t ? u : null)
                            })
                        }, t)
                    })
                })
            }

            function I() {
                return (0, l.jsx)(o.Text, {
                    className: A.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: _.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: O.default.getSubmitRequestURL()
                    })
                })
            }

            function B(e) {
                let {
                    header: t,
                    body: a,
                    problemTitle: n,
                    problems: u,
                    transitionState: O,
                    ratingConfigs: R,
                    feedbackProblems: B = [],
                    otherKey: T,
                    ratingsSelectorClassName: x,
                    hideDontShowCheckbox: g,
                    startRating: h = null,
                    onSubmit: b,
                    onClose: K
                } = e, p = (0, c.default)(u), [L, U] = s.useState(!1), [j, G] = s.useState(h), [k, F] = s.useState(null), [v, M] = s.useState(i.shuffle(u)), [S, H] = s.useState(""), y = (0, f.useUID)(), P = (0, C.default)(j), V = (0, C.default)(L), Y = (0, C.default)(k), z = (0, C.default)(b), w = (0, C.default)(S), q = null != k && B.includes(k);
                return s.useEffect(() => {
                    !i.isEqual(p, u) && M((0, N.shuffleProblems)(u, T))
                }, [u, p, T]), s.useEffect(() => () => {
                    z.current({
                        rating: P.current,
                        problem: Y.current,
                        dontShowAgain: V.current,
                        feedback: w.current
                    })
                }, []), (0, l.jsxs)(o.ModalRoot, {
                    transitionState: O,
                    className: A.modalRoot,
                    "aria-labelledby": y,
                    children: [(0, l.jsxs)(o.ModalHeader, {
                        separator: !1,
                        className: A.headerContainer,
                        children: [(0, l.jsx)(o.Heading, {
                            id: y,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: t
                        }), (0, l.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: A.ratingBody,
                            children: a
                        }), q ? null : (0, l.jsx)(m, {
                            className: r(A.emojis, x),
                            selectedRating: j,
                            onChangeRating: function(e) {
                                G(e), e === D.FeedbackRating.GOOD && K()
                            },
                            ratingConfigs: R
                        })]
                    }), (0, l.jsxs)(o.ModalContent, {
                        className: A.content,
                        children: [null == j || j === D.FeedbackRating.GOOD || q ? null : (0, l.jsx)(o.FormItem, {
                            title: n,
                            className: A.problemInfo,
                            children: (0, l.jsx)(d.default, {
                                options: v,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    F(t), !B.includes(t) && K()
                                },
                                hideCaret: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return !B.includes(t)
                                }
                            })
                        }), q ? (0, l.jsxs)(o.FormItem, {
                            title: _.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: A.problemInfo,
                            children: [(0, l.jsx)(o.TextArea, {
                                value: S,
                                maxLength: D.FEEDBACK_FREEFORM_LENGTH,
                                onChange: H
                            }), (0, l.jsx)(I, {})]
                        }) : null]
                    }), (q || !g) && (0, l.jsx)(o.ModalFooter, {
                        className: A.footer,
                        direction: E.default.Direction.HORIZONTAL,
                        children: q ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(o.Button, {
                                size: o.Button.Sizes.SMALL,
                                look: o.Button.Looks.LINK,
                                color: o.Button.Colors.PRIMARY,
                                onClick: () => {
                                    F(null), H("")
                                },
                                children: _.default.Messages.BACK
                            }), (0, l.jsx)(o.Button, {
                                size: o.Button.Sizes.SMALL,
                                onClick: K,
                                children: _.default.Messages.SUBMIT
                            })]
                        }) : (0, l.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            size: 18,
                            value: L,
                            onChange: () => U(!L),
                            children: (0, l.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: _.default.Messages.DONT_SHOW_AGAIN
                            })
                        })
                    })]
                })
            }