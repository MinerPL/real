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
                    return g
                },
                default: function() {
                    return I
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
                N = a("701909"),
                m = a("713640"),
                A = a("200521"),
                C = a("782340"),
                h = a("279537");
            let x = [{
                className: h.emojiSad,
                rating: A.FeedbackRating.BAD,
                classNameSelected: h.selected
            }, {
                className: h.emojiNeutral,
                rating: A.FeedbackRating.NEUTRAL,
                classNameSelected: h.selected
            }, {
                className: h.emojiHappy,
                rating: A.FeedbackRating.GOOD,
                classNameSelected: h.selected
            }];

            function g(e) {
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
                    children: (null != l ? l : x).map(e => {
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

            function R() {
                return (0, n.jsx)(i.Text, {
                    className: h.helpdeskLink,
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: C.default.Messages.FEEDBACK_NEED_MORE_HELP.format({
                        helpdeskURL: N.default.getSubmitRequestURL()
                    })
                })
            }

            function I(e) {
                let {
                    header: t,
                    body: a,
                    problemTitle: s,
                    problems: u,
                    transitionState: N,
                    ratingConfigs: x,
                    feedbackProblems: I = [],
                    otherKey: O,
                    ratingsSelectorClassName: p,
                    hideDontShowCheckbox: b,
                    startRating: D = null,
                    onSubmit: L,
                    onClose: T
                } = e, F = (0, c.default)(u), [j, S] = l.useState(!1), [B, M] = l.useState(D), [k, v] = l.useState(null), [K, U] = l.useState(o.shuffle(u)), [y, H] = l.useState(""), G = (0, E.useUID)(), P = (0, _.default)(B), w = (0, _.default)(j), z = (0, _.default)(k), W = (0, _.default)(L), q = (0, _.default)(y), V = null != k && I.includes(k);
                return l.useEffect(() => {
                    !o.isEqual(F, u) && U((0, m.shuffleProblems)(u, O))
                }, [u, F, O]), l.useEffect(() => () => {
                    W.current({
                        rating: P.current,
                        problem: z.current,
                        dontShowAgain: w.current,
                        feedback: q.current
                    })
                }, []), (0, n.jsxs)(i.ModalRoot, {
                    transitionState: N,
                    className: h.modalRoot,
                    "aria-labelledby": G,
                    children: [(0, n.jsxs)(i.ModalHeader, {
                        separator: !1,
                        className: h.headerContainer,
                        children: [(0, n.jsx)(i.Heading, {
                            id: G,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: t
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: h.ratingBody,
                            children: a
                        }), V ? null : (0, n.jsx)(g, {
                            className: r(h.emojis, p),
                            selectedRating: B,
                            onChangeRating: function(e) {
                                M(e), e === A.FeedbackRating.GOOD && T()
                            },
                            ratingConfigs: x
                        })]
                    }), (0, n.jsxs)(i.ModalContent, {
                        className: h.content,
                        children: [null == B || B === A.FeedbackRating.GOOD || V ? null : (0, n.jsx)(i.FormItem, {
                            title: s,
                            className: h.problemInfo,
                            children: (0, n.jsx)(d.default, {
                                options: K,
                                onClick: function(e) {
                                    let {
                                        value: t
                                    } = e;
                                    v(t), !I.includes(t) && T()
                                },
                                hideCaret: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return !I.includes(t)
                                }
                            })
                        }), V ? (0, n.jsxs)(i.FormItem, {
                            title: C.default.Messages.FEEDBACK_DESCRIBE_ISSUE,
                            className: h.problemInfo,
                            children: [(0, n.jsx)(i.TextArea, {
                                value: y,
                                maxLength: A.FEEDBACK_FREEFORM_LENGTH,
                                onChange: H
                            }), (0, n.jsx)(R, {})]
                        }) : null]
                    }), (V || !b) && (0, n.jsx)(i.ModalFooter, {
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
                                children: C.default.Messages.BACK
                            }), (0, n.jsx)(i.Button, {
                                size: i.Button.Sizes.SMALL,
                                onClick: T,
                                children: C.default.Messages.SUBMIT
                            })]
                        }) : (0, n.jsx)(i.Checkbox, {
                            type: i.Checkbox.Types.INVERTED,
                            size: 18,
                            value: j,
                            onChange: () => S(!j),
                            children: (0, n.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: C.default.Messages.DONT_SHOW_AGAIN
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
                    return A
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
                N = a("782340");
            let m = [u.CALL_FEEDBACK_OPTION_OTHER];

            function A(e) {
                let {
                    reportId: t,
                    reportType: r,
                    ...A
                } = e;
                return l.useEffect(() => {
                    c.default.track(E.AnalyticEvents.IAR_FEEDBACK_MODAL_VIEWED, {
                        report_id: t,
                        report_type: r
                    })
                }, [t, r]), (0, n.jsx)(o.default, {
                    header: N.default.Messages.IAR_FEEDBACK_TITLE,
                    body: N.default.Messages.IAR_FEEDBACK_PROMPT,
                    problemTitle: N.default.Messages.CALL_FEEDBACK_ISSUE_SECTION_HEADER,
                    problems: (0, d.default)(),
                    feedbackProblems: m,
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
                                body: N.default.Messages.CALL_FEEDBACK_CONFIRMATION,
                                ...t
                            })
                        })
                    },
                    otherKey: u.CALL_FEEDBACK_OPTION_OTHER,
                    ...A
                })
            }
        },
        229850: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("414456"),
                s = a.n(l),
                r = a("77078"),
                u = a("461380"),
                o = a("133251");

            function i(e) {
                let {
                    options: t,
                    onClick: a,
                    className: l,
                    optionClassName: i,
                    hideCaret: c
                } = e;
                return (0, n.jsx)("div", {
                    className: s(o.root, l),
                    children: t.map((e, t) => (0, n.jsxs)(r.Clickable, {
                        onClick: () => a(e),
                        className: s(o.option, i),
                        children: [(0, n.jsx)(r.Text, {
                            className: o.text,
                            color: "none",
                            variant: "text-md/normal",
                            children: e.label
                        }), !(null == c ? void 0 : c(e)) && (0, n.jsx)(u.default, {
                            className: o.caret,
                            direction: u.default.Directions.RIGHT
                        })]
                    }, t))
                })
            }
        }
    }
]);