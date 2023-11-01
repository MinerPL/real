(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["65568"], {
        59407: function(e, t, s) {
            "use strict";
            e.exports = s.p + "9e81dce3b3235147e088.svg"
        },
        609872: function(e, t, s) {
            "use strict";
            e.exports = s.p + "d2957a53837bc444a305.svg"
        },
        407648: function(e, t, s) {
            "use strict";
            e.exports = s.p + "5161f8a4f8050a34ef98.svg"
        },
        95358: function(e, t, s) {
            "use strict";
            e.exports = s.p + "2b7cbcd05ffd2e86ba7a.svg"
        },
        748785: function(e, t, s) {
            "use strict";
            e.exports = s.p + "6e910d869a4ddca77fe2.svg"
        },
        713640: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                shuffleProblems: function() {
                    return l
                }
            });
            var a = s("917351"),
                n = s.n(a);
            let l = (e, t) => {
                let s = n.shuffle(e),
                    a = s.findIndex(e => e.value === t);
                if (a > -1) {
                    let e = s[a];
                    s.splice(a, 1), s.push(e)
                }
                return s
            }
        },
        194141: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                RatingsSelector: function() {
                    return p
                },
                default: function() {
                    return C
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                r = s.n(l),
                c = s("917351"),
                i = s.n(c),
                o = s("77078"),
                u = s("84339"),
                d = s("229850"),
                f = s("145131"),
                m = s("476765"),
                g = s("561744"),
                h = s("701909"),
                x = s("713640"),
                E = s("200521"),
                S = s("782340"),
                b = s("279537");
            let R = [{
                className: b.emojiSad,
                rating: E.FeedbackRating.BAD,
                classNameSelected: b.selected
            }, {
                className: b.emojiNeutral,
                rating: E.FeedbackRating.NEUTRAL,
                classNameSelected: b.selected
            }, {
                className: b.emojiHappy,
                rating: E.FeedbackRating.GOOD,
                classNameSelected: b.selected
            }];

            function p(e) {
                let {
                    className: t,
                    selectedRating: s,
                    ratingConfigs: n,
                    onChangeRating: l
                } = e;
                return (0, a.jsx)(f.default, {
                    justify: f.default.Justify.BETWEEN,
                    align: f.default.Align.CENTER,
                    className: r(b.ratingsSelector, t),
                    children: (null != n ? n : R).map(e => {
                        let {
                            rating: t,
                            className: n,
                            classNameSelected: c
                        } = e;
                        return (0, a.jsx)(o.Clickable, {
                            onClick: () => l(t),
                            "aria-label": t,
                            children: (0, a.jsx)("div", {
                                className: r(n, s === t ? c : null)
                            })
                        }, t)
                    })
                })
            }

            function N() {
                return (0, a.jsx)(o.Text, {
                    className: b.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: S.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: h.default.getSubmitRequestURL()
                    })
                })
            }

            function C(e) {
                let {
                    header: t,
                    body: s,
                    problemTitle: l,
                    problems: c,
                    transitionState: h,
                    ratingConfigs: R,
                    feedbackProblems: C = [],
                    otherKey: j,
                    ratingsSelectorClassName: k,
                    hideDontShowCheckbox: M,
                    startRating: A = null,
                    onSubmit: D,
                    onClose: F
                } = e, B = (0, u.default)(c), [T, I] = n.useState(!1), [O, _] = n.useState(A), [v, L] = n.useState(null), [y, H] = n.useState(i.shuffle(c)), [U, K] = n.useState(""), G = (0, m.useUID)(), P = (0, g.default)(O), w = (0, g.default)(T), z = (0, g.default)(v), q = (0, g.default)(D), W = (0, g.default)(U), Y = null != v && C.includes(v);
                return n.useEffect(() => {
                    !i.isEqual(B, c) && H((0, x.shuffleProblems)(c, j))
                }, [c, B, j]), n.useEffect(() => () => {
                    q.current({
                        rating: P.current,
                        problem: z.current,
                        dontShowAgain: w.current,
                        feedback: W.current
                    })
                }, []), (0, a.jsxs)(o.ModalRoot, {
                    transitionState: h,
                    className: b.modalRoot,
                    "aria-labelledby": G,
                    children: [(0, a.jsxs)(o.ModalHeader, {
                        separator: !1,
                        className: b.headerContainer,
                        children: [(0, a.jsx)(o.Heading, {
                            id: G,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: t
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: b.ratingBody,
                            children: s
                        }), Y ? null : (0, a.jsx)(p, {
                            className: r(b.emojis, k),
                            selectedRating: O,
                            onChangeRating: function(e) {
                                _(e), e === E.FeedbackRating.GOOD && F()
                            },
                            ratingConfigs: R
                        })]
                    }), (0, a.jsxs)(o.ModalContent, {
                        className: b.content,
                        children: [null == O || O === E.FeedbackRating.GOOD || Y ? null : (0, a.jsx)(o.FormItem, {
                            title: l,
                            className: b.problemInfo,
                            children: (0, a.jsx)(d.default, {
                                options: y,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    L(t), !C.includes(t) && F()
                                },
                                hideCaret: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return !C.includes(t)
                                }
                            })
                        }), Y ? (0, a.jsxs)(o.FormItem, {
                            title: S.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: b.problemInfo,
                            children: [(0, a.jsx)(o.TextArea, {
                                value: U,
                                maxLength: E.FEEDBACK_FREEFORM_LENGTH,
                                onChange: K
                            }), (0, a.jsx)(N, {})]
                        }) : null]
                    }), (Y || !M) && (0, a.jsx)(o.ModalFooter, {
                        className: b.footer,
                        direction: f.default.Direction.HORIZONTAL,
                        children: Y ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(o.Button, {
                                size: o.Button.Sizes.SMALL,
                                look: o.Button.Looks.LINK,
                                color: o.Button.Colors.PRIMARY,
                                onClick: () => {
                                    L(null), K("")
                                },
                                children: S.default.Messages.BACK
                            }), (0, a.jsx)(o.Button, {
                                size: o.Button.Sizes.SMALL,
                                onClick: F,
                                children: S.default.Messages.SUBMIT
                            })]
                        }) : (0, a.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            size: 18,
                            value: T,
                            onChange: () => I(!T),
                            children: (0, a.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: S.default.Messages.DONT_SHOW_AGAIN
                            })
                        })
                    })]
                })
            }
        },
        747194: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("194141"),
                l = s("995307"),
                r = s("200521"),
                c = s("782340"),
                i = s("5512");
            let o = [{
                className: i.emojiThumbsUp,
                rating: r.FeedbackRating.GOOD,
                classNameSelected: i.selected
            }, {
                className: i.emojiThumbsDown,
                rating: r.FeedbackRating.BAD,
                classNameSelected: i.selected
            }];

            function u(e) {
                let {
                    transitionState: t,
                    startRating: s,
                    onClose: r,
                    onSubmit: u
                } = e;
                return (0, a.jsx)(n.default, {
                    header: c.default.Messages.SUMMARIES_FEEDBACK_HEADER,
                    body: c.default.Messages.SUMMARIES_FEEDBACK_BODY,
                    problemTitle: c.default.Messages.SUMMARIES_FEEDBACK_PROBLEM_TITLE,
                    onSubmit: u,
                    onClose: r,
                    ratingConfigs: o,
                    transitionState: t,
                    problems: (0, l.getSummaryFeedbackReasons)(),
                    ratingsSelectorClassName: i.ratingsSelector,
                    feedbackProblems: [l.SummaryFeedbackReasons.OTHER],
                    otherKey: l.SummaryFeedbackReasons.OTHER,
                    startRating: s,
                    hideDontShowCheckbox: !0
                })
            }
        }
    }
]);