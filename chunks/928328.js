            "use strict";
            a.r(t), a.d(t, {
                RatingsSelector: function() {
                    return L
                },
                default: function() {
                    return p
                }
            }), a("222007");
            var l = a("37983"),
                s = a("884691"),
                n = a("414456"),
                o = a.n(n),
                u = a("917351"),
                i = a.n(u),
                d = a("77078"),
                c = a("84339"),
                r = a("229850"),
                _ = a("145131"),
                f = a("476765"),
                E = a("561744"),
                O = a("701909"),
                A = a("713640"),
                C = a("200521"),
                h = a("782340"),
                m = a("279537");
            let g = [{
                className: m.emojiSad,
                rating: C.FeedbackRating.BAD,
                classNameSelected: m.selected
            }, {
                className: m.emojiNeutral,
                rating: C.FeedbackRating.NEUTRAL,
                classNameSelected: m.selected
            }, {
                className: m.emojiHappy,
                rating: C.FeedbackRating.GOOD,
                classNameSelected: m.selected
            }];

            function L(e) {
                let {
                    className: t,
                    selectedRating: a,
                    ratingConfigs: s,
                    onChangeRating: n
                } = e;
                return (0, l.jsx)(_.default, {
                    justify: _.default.Justify.BETWEEN,
                    align: _.default.Align.CENTER,
                    className: o(m.ratingsSelector, t),
                    children: (null != s ? s : g).map(e => {
                        let {
                            rating: t,
                            className: s,
                            classNameSelected: u
                        } = e;
                        return (0, l.jsx)(d.Clickable, {
                            onClick: () => n(t),
                            "aria-label": t,
                            children: (0, l.jsx)("div", {
                                className: o(s, a === t ? u : null)
                            })
                        }, t)
                    })
                })
            }

            function N() {
                return (0, l.jsx)(d.Text, {
                    className: m.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: h.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: O.default.getSubmitRequestURL()
                    })
                })
            }

            function p(e) {
                let {
                    header: t,
                    body: a,
                    problemTitle: n,
                    problems: u,
                    transitionState: O,
                    ratingConfigs: g,
                    feedbackProblems: p = [],
                    otherKey: D,
                    ratingsSelectorClassName: b,
                    hideDontShowCheckbox: I,
                    startRating: v = null,
                    onSubmit: x,
                    onClose: T
                } = e, R = (0, c.default)(u), [B, S] = s.useState(!1), [M, j] = s.useState(v), [k, F] = s.useState(null), [K, H] = s.useState(i.shuffle(u)), [P, U] = s.useState(""), y = (0, f.useUID)(), w = (0, E.default)(M), G = (0, E.default)(B), V = (0, E.default)(k), z = (0, E.default)(x), Y = (0, E.default)(P), q = null != k && p.includes(k);
                return s.useEffect(() => {
                    !i.isEqual(R, u) && H((0, A.shuffleProblems)(u, D))
                }, [u, R, D]), s.useEffect(() => () => {
                    z.current({
                        rating: w.current,
                        problem: V.current,
                        dontShowAgain: G.current,
                        feedback: Y.current
                    })
                }, []), (0, l.jsxs)(d.ModalRoot, {
                    transitionState: O,
                    className: m.modalRoot,
                    "aria-labelledby": y,
                    children: [(0, l.jsxs)(d.ModalHeader, {
                        separator: !1,
                        className: m.headerContainer,
                        children: [(0, l.jsx)(d.Heading, {
                            id: y,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: t
                        }), (0, l.jsx)(d.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: m.ratingBody,
                            children: a
                        }), q ? null : (0, l.jsx)(L, {
                            className: o(m.emojis, b),
                            selectedRating: M,
                            onChangeRating: function(e) {
                                j(e), e === C.FeedbackRating.GOOD && T()
                            },
                            ratingConfigs: g
                        })]
                    }), (0, l.jsxs)(d.ModalContent, {
                        className: m.content,
                        children: [null == M || M === C.FeedbackRating.GOOD || q ? null : (0, l.jsx)(d.FormItem, {
                            title: n,
                            className: m.problemInfo,
                            children: (0, l.jsx)(r.default, {
                                options: K,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    F(t), !p.includes(t) && T()
                                },
                                hideCaret: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return !p.includes(t)
                                }
                            })
                        }), q ? (0, l.jsxs)(d.FormItem, {
                            title: h.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: m.problemInfo,
                            children: [(0, l.jsx)(d.TextArea, {
                                value: P,
                                maxLength: C.FEEDBACK_FREEFORM_LENGTH,
                                onChange: U
                            }), (0, l.jsx)(N, {})]
                        }) : null]
                    }), (q || !I) && (0, l.jsx)(d.ModalFooter, {
                        className: m.footer,
                        direction: _.default.Direction.HORIZONTAL,
                        children: q ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                look: d.Button.Looks.LINK,
                                color: d.Button.Colors.PRIMARY,
                                onClick: () => {
                                    F(null), U("")
                                },
                                children: h.default.Messages.BACK
                            }), (0, l.jsx)(d.Button, {
                                size: d.Button.Sizes.SMALL,
                                onClick: T,
                                children: h.default.Messages.SUBMIT
                            })]
                        }) : (0, l.jsx)(d.Checkbox, {
                            type: d.Checkbox.Types.INVERTED,
                            size: 18,
                            value: B,
                            onChange: () => S(!B),
                            children: (0, l.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: h.default.Messages.DONT_SHOW_AGAIN
                            })
                        })
                    })]
                })
            }