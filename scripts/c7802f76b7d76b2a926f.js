(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66735"], {
        59407: function(e, t, a) {
            "use strict";
            e.exports = a.p + "9e81dce3b3235147e088.svg"
        },
        609872: function(e, t, a) {
            "use strict";
            e.exports = a.p + "d2957a53837bc444a305.svg"
        },
        407648: function(e, t, a) {
            "use strict";
            e.exports = a.p + "5161f8a4f8050a34ef98.svg"
        },
        713640: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                shuffleProblems: function() {
                    return s
                }
            });
            var n = a("917351"),
                l = a.n(n);
            let s = (e, t) => {
                let a = l.shuffle(e),
                    n = a.findIndex(e => e.value === t);
                if (n > -1) {
                    let e = a[n];
                    a.splice(n, 1), a.push(e)
                }
                return a
            }
        },
        194141: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                RatingsSelector: function() {
                    return x
                },
                default: function() {
                    return R
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                r = a.n(s),
                u = a("917351"),
                o = a.n(u),
                i = a("77078"),
                c = a("84339"),
                d = a("229850"),
                f = a("145131"),
                E = a("476765"),
                _ = a("561744"),
                A = a("701909"),
                N = a("713640"),
                C = a("200521"),
                g = a("782340"),
                h = a("279537");
            let m = [{
                className: h.emojiSad,
                rating: C.FeedbackRating.BAD,
                classNameSelected: h.selected
            }, {
                className: h.emojiNeutral,
                rating: C.FeedbackRating.NEUTRAL,
                classNameSelected: h.selected
            }, {
                className: h.emojiHappy,
                rating: C.FeedbackRating.GOOD,
                classNameSelected: h.selected
            }];

            function x(e) {
                let {
                    className: t,
                    selectedRating: a,
                    ratingConfigs: l,
                    onChangeRating: s
                } = e;
                return (0, n.jsx)(f.default, {
                    justify: f.default.Justify.BETWEEN,
                    align: f.default.Align.CENTER,
                    className: r(h.ratingsSelector, t),
                    children: (null != l ? l : m).map(e => {
                        let {
                            rating: t,
                            className: l,
                            classNameSelected: u
                        } = e;
                        return (0, n.jsx)(i.Clickable, {
                            onClick: () => s(t),
                            "aria-label": t,
                            children: (0, n.jsx)("div", {
                                className: r(l, a === t ? u : null)
                            })
                        }, t)
                    })
                })
            }

            function O() {
                return (0, n.jsx)(i.Text, {
                    className: h.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: g.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: A.default.getSubmitRequestURL()
                    })
                })
            }

            function R(e) {
                let {
                    header: t,
                    body: a,
                    problemTitle: s,
                    problems: u,
                    transitionState: A,
                    ratingConfigs: m,
                    feedbackProblems: R = [],
                    otherKey: I,
                    ratingsSelectorClassName: p,
                    hideDontShowCheckbox: L,
                    startRating: D = null,
                    onSubmit: b,
                    onClose: F
                } = e, T = (0, c.default)(u), [S, B] = l.useState(!1), [M, j] = l.useState(D), [k, v] = l.useState(null), [K, U] = l.useState(o.shuffle(u)), [y, H] = l.useState(""), P = (0, E.useUID)(), G = (0, _.default)(M), w = (0, _.default)(S), z = (0, _.default)(k), W = (0, _.default)(b), q = (0, _.default)(y), V = null != k && R.includes(k);
                return l.useEffect(() => {
                    !o.isEqual(T, u) && U((0, N.shuffleProblems)(u, I))
                }, [u, T, I]), l.useEffect(() => () => {
                    W.current({
                        rating: G.current,
                        problem: z.current,
                        dontShowAgain: w.current,
                        feedback: q.current
                    })
                }, []), (0, n.jsxs)(i.ModalRoot, {
                    transitionState: A,
                    className: h.modalRoot,
                    "aria-labelledby": P,
                    children: [(0, n.jsxs)(i.ModalHeader, {
                        separator: !1,
                        className: h.headerContainer,
                        children: [(0, n.jsx)(i.Heading, {
                            id: P,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: t
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: h.ratingBody,
                            children: a
                        }), V ? null : (0, n.jsx)(x, {
                            className: r(h.emojis, p),
                            selectedRating: M,
                            onChangeRating: function(e) {
                                j(e), e === C.FeedbackRating.GOOD && F()
                            },
                            ratingConfigs: m
                        })]
                    }), (0, n.jsxs)(i.ModalContent, {
                        className: h.content,
                        children: [null == M || M === C.FeedbackRating.GOOD || V ? null : (0, n.jsx)(i.FormItem, {
                            title: s,
                            className: h.problemInfo,
                            children: (0, n.jsx)(d.default, {
                                options: K,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    v(t), !R.includes(t) && F()
                                },
                                hideCaret: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return !R.includes(t)
                                }
                            })
                        }), V ? (0, n.jsxs)(i.FormItem, {
                            title: g.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: h.problemInfo,
                            children: [(0, n.jsx)(i.TextArea, {
                                value: y,
                                maxLength: C.FEEDBACK_FREEFORM_LENGTH,
                                onChange: H
                            }), (0, n.jsx)(O, {})]
                        }) : null]
                    }), (V || !L) && (0, n.jsx)(i.ModalFooter, {
                        className: h.footer,
                        direction: f.default.Direction.HORIZONTAL,
                        children: V ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(i.Button, {
                                size: i.Button.Sizes.SMALL,
                                look: i.Button.Looks.LINK,
                                color: i.Button.Colors.PRIMARY,
                                onClick: () => {
                                    v(null), H("")
                                },
                                children: g.default.Messages.BACK
                            }), (0, n.jsx)(i.Button, {
                                size: i.Button.Sizes.SMALL,
                                onClick: F,
                                children: g.default.Messages.SUBMIT
                            })]
                        }) : (0, n.jsx)(i.Checkbox, {
                            type: i.Checkbox.Types.INVERTED,
                            size: 18,
                            value: S,
                            onChange: () => B(!S),
                            children: (0, n.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: g.default.Messages.DONT_SHOW_AGAIN
                            })
                        })
                    })]
                })
            }
        },
        129393: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n, l, s = a("782340");

            function r() {
                let e = [{
                    label: s.default.Messages.IAR_FEEDBACK_PROBLEM_COULD_NOT_FIND,
                    code: 2,
                    value: l.COULD_NOT_FIND
                }, {
                    label: s.default.Messages.IAR_FEEDBACK_PROBLEM_CONFUSING_LANGUAGE,
                    code: 3,
                    value: l.CONFUSING_LANGUAGE
                }, {
                    label: s.default.Messages.CALL_FEEDBACK_OPTION_OTHER,
                    code: 1,
                    value: l.OTHER
                }];
                return e
            }(n = l || (l = {})).COULD_NOT_FIND = "I couldn't find what I was looking for", n.CONFUSING_LANGUAGE = "I found the language confusing", n.OTHER = "Other"
        },
        692812: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("599110"),
                l = a("49111");

            function s(e) {
                let {
                    problem: t,
                    feedback: a,
                    reportType: s,
                    reportId: r = null,
                    rating: u = null,
                    dontShowAgain: o
                } = e;
                n.default.track(l.AnalyticEvents.IAR_FEEDBACK_SUBMITTED, {
                    reason: t,
                    report_type: s,
                    report_id: r,
                    rating: u,
                    feedback: a,
                    dont_show_again: o
                })
            }
        },
        114306: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return C
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("77078"),
                r = a("229353"),
                u = a.n(r),
                o = a("194141"),
                i = a("597517"),
                c = a("599110"),
                d = a("129393"),
                f = a("692812"),
                E = a("49111"),
                _ = a("533613"),
                A = a("782340");
            let N = [u.CALL_FEEDBACK_OPTION_OTHER];

            function C(e) {
                let {
                    reportId: t,
                    reportType: r,
                    ...C
                } = e;
                return l.useEffect(() => {
                    c.default.track(E.AnalyticEvents.IAR_FEEDBACK_MODAL_VIEWED, {
                        report_id: t,
                        report_type: r
                    })
                }, [t, r]), (0, n.jsx)(o.default, {
                    header: A.default.Messages.IAR_FEEDBACK_TITLE,
                    body: A.default.Messages.IAR_FEEDBACK_PROMPT,
                    problemTitle: A.default.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
                    problems: (0, d.default)(),
                    feedbackProblems: N,
                    onSubmit: function(e) {
                        let {
                            rating: l,
                            problem: u,
                            dontShowAgain: o,
                            feedback: c
                        } = e;
                        o && (0, i.hideHotspot)(_.HotspotLocations.IN_APP_REPORTS_FEEDBACK), (0, f.default)({
                            rating: l,
                            problem: u,
                            feedback: c,
                            reportId: t,
                            reportType: r,
                            dontShowAgain: o
                        }), null != l && null != u && (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("874600").then(a.bind(a, "874600"));
                            return t => (0, n.jsx)(e, {
                                body: A.default.Messages.CALL_FEEDBACK_CONFIRMATION,
                                ...t
                            })
                        })
                    },
                    otherKey: u.CALL_FEEDBACK_OPTION_OTHER,
                    ...C
                })
            }
        }
    }
]);